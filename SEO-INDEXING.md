# Google Indexing API — setup and test

Tells Google when a blog post is added or edited on safestorage.ae. Cron-driven, reads the
same `safestorage.in/get_blog_content` feed the blog pages read.

**Nothing here is committed.** Four new files, no existing file changed.

| File | What it is |
|---|---|
| `lib/seo-indexing.ts` | Core: feed → change detection → Google JWT/OAuth2 → publish |
| `lib/seo-index-db.ts` | The submission ledger (`seo_index_log` table, created on demand) |
| `app/api/seo-index/route.ts` | `POST` to submit, `GET` for status. Secret-gated |
| `scripts/seo-index.sh` | Cron entry — curls the endpoint on localhost |

---

## How it decides what to send

The feed has **no `updated_at`** — only `created_at`, which does not move when someone
edits a post. There is no timestamp on either side that can answer "has this changed", so
the module hashes every field that reaches the rendered page (`title`, `seo_title`,
`seo_desc`, `description`, `post_images`, `tags`, `post_category`, `status`) and stores
that hash with the submission. Different hash means edited; identical means done. No clock
is involved anywhere.

URLs come from `blogSlug()` in `lib/blog-post.ts` — the same function `/blog/[slug]`
canonicalises to and `app/sitemap.ts` publishes. Not re-implemented, imported.

| Action | When |
|---|---|
| `INDEXED` | Post the ledger has never seen |
| `REINDEXED` | Post it knows, content hash moved |
| `DELETED` | Address a retitle left behind — **opt-in**, see below |

### The baseline snapshot

There are 272 published posts. On the very first run the module writes them all to the
ledger as `BASELINE` rows and **submits nothing** — otherwise day one would spend 272 calls
against a 200/day quota announcing the oldest pages on the site as brand new, when Google
has known about them for months via the sitemap.

It is a one-time snapshot, guarded by the presence of any `BASELINE` row. Everything
published or edited *after* it is correctly new.

So: **the first live run does nothing, and that is correct.** Edit a post and the next run
picks it up.

### `SEO_INDEX_RETIRE_OLD` — off by default

Retitling a post changes its slug, so the old address is left behind. On this site
`/blog/[slug]` only resolves a stale slug when it carries a numeric `<post-id>-` prefix, so
a plain retitle leaves the old URL returning a genuine 404 — meaning `URL_DELETED` would be
*correct* here (unlike safestorage.in, where the route ignores the slug text and the old
address still serves the page).

It is still off by default because `URL_DELETED` cannot be undone. Set
`SEO_INDEX_RETIRE_OLD=true` when you want it.

---

## 1. Environment

Add to `.env.local` (already gitignored via `.env*`):

```
# Service-account key. Three sources, tried in this order — set exactly one.

# 1. PREFERRED. A path outside the repo, mode 600, holding the downloaded JSON
#    exactly as it came from Google. Nothing can mangle it in transit, and the
#    deploy hook's `git checkout -f` cannot fight a file that is not in the repo.
GOOGLE_INDEXING_KEY_FILE=/home/ubuntu/.secrets/google-indexing-key.json

# 2. base64 of that same file, for hosts where only env vars are available.
#    Contains no quotes, spaces or newlines, so no .env parser can corrupt it:
#      base64 -w0 google-indexing-key.json
# GOOGLE_INDEXING_KEY_B64=eyJ0eXBlIjoic2VydmljZV9hY2NvdW50Iiwi...

# 3. The JSON inline, which must be on ONE line. Easiest to get wrong: a
#    pretty-printed paste spans lines and the parser reads only the first.
# GOOGLE_INDEXING_KEY_JSON={"type":"service_account","project_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"indexing@....iam.gserviceaccount.com",...}

# Optional. Falls back to REVALIDATE_SECRET, which is already set on the server.
# SEO_INDEX_SECRET=<random string>

# Optional. Google's per-project default.
# SEO_INDEX_QUOTA=200

# Optional. Send URL_DELETED for addresses a retitle left behind. Irreversible.
# SEO_INDEX_RETIRE_OLD=true
```

Escaped `\n` inside `private_key` is handled — paste the file as-is.

The key is read **from the environment only**, never from a file inside the repo: the deploy
hook runs `git checkout -f main`, so anything committed there would be fought on every push,
and a key under the app directory is one nginx `location` block from being served.

## 2. Database

Nothing to run. `seo_index_log` is created on demand in the existing `safestorage_dubai`
database (same `DB_*` vars the quotation and payment-attempt layers use). It does **not**
touch `blog_content`, which `ISSUE-blog-content-cleanup.md` documents as dead.

The ledger has to outlive deploys — losing it means the module forgets what it already told
Google and resubmits all 272 posts, more than a day's quota. That is why it is a table and
not a file in the repo.

## 3. Verify the Google side

Three things, all easy to get subtly wrong:

- The service account is an **Owner** of the **`safestorage.ae`** property in Search Console
  — not `safestorage.in`. Wrong property means every call 403s.
- **Indexing API** is enabled on the Cloud project.
- If this project is the same one safestorage.in uses (`seo-tool-504005`), the 200/day quota
  is **shared** — it is per Cloud project, not per site. Either use a separate project or
  set `SEO_INDEX_QUOTA` to this site's share.

Two corrections to the setup notes you followed:

- The publish endpoint is `https://indexing.googleapis.com/v3/urlNotifications:publish`.
  The `/v3/urlNotifications/metadata` URL is the read-only status lookup.
- Granting the service account **Project → Owner** in Cloud IAM is not needed and is more
  access than it should have. The Indexing API authorises on Search Console ownership alone;
  the service account needs no project IAM role. Safe to remove that binding.

## 4. Test locally

Requires your local `DB_*` to point at a MySQL you can write to, and `REVALIDATE_SECRET` or
`SEO_INDEX_SECRET` set.

```bash
npm run dev

# Status — read-only. Sends nothing, spends nothing.
curl -s "http://localhost:3000/api/seo-index?secret=$SECRET" | jq

# Dry run — takes the baseline, builds the queue, sends nothing.
curl -s -X POST "http://localhost:3000/api/seo-index?secret=$SECRET&dry=1" | jq

# Live.
curl -s -X POST "http://localhost:3000/api/seo-index?secret=$SECRET" | jq
```

Expected on a fresh database: the dry run reports `baseline_imported: 272` and
`pending: 0`. Edit any post in the safestorage.in dashboard, wait for the feed, and
`pending` becomes 1 with `action: "REINDEXED"`.

Check `service_account` in the `GET` response is the address you added in Search Console.

## 5. Deploy and schedule

```bash
chmod +x scripts/seo-index.sh
```

Add the env vars to `/home/ubuntu/dubai/.env.local` on the server (they are not deployed —
that file is gitignored and lives only on the box), then after deploying:

```bash
ssh -i /c/pem/Safestoragedubaikeypair.pem ubuntu@13.203.136.29
crontab -e
```

```cron
*/5 * * * * /home/ubuntu/dubai/scripts/seo-index.sh >> /home/ubuntu/seo-index.log 2>&1
```

Runs a few minutes after `sync-blogs.sh` in the same window so it sees content that just
landed. Kept as its own cron entry rather than a step inside `sync-blogs.sh` so a Google
outage or an expired key cannot fail the content sync, which blog pages depend on.

Exit codes: `0` clean, `1` at least one submission rejected (cron will mail it; the log line
carries the reason).

---

## Notes

- **A 200 from Google is not indexing.** The API is documented for JobPosting and
  BroadcastEvent pages only. It accepts any URL on a property the service account owns and
  may then discard the notification. An accepted call means the request was well-formed.
  Search Console URL Inspection is the only honest check, and it is a separate API on a
  separate quota — not implemented here.
- Unpublished posts (`status <> '1'`) are skipped, never deleted. Pulling a live post is a
  deletion someone should make deliberately, not a side effect of a status flag.
- Timestamps in the ledger are UTC, because that is the calendar Google's quota resets on.
  The server runs Asia/Dubai; a local date would roll the counter over four hours late.
- The run stops before the call that would exceed the quota, not after.

## Left for you

- `npm run build` / typecheck — not run.
- No commit, no push. `git status` shows these four files as untracked alongside your
  existing 52 modified files.
