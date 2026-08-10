# Remove the orphaned `blog_content` data layer

**Labels:** `cleanup`, `tech-debt`, `blog`
**Status:** draft — not committed, not filed on GitHub

## Summary

As of `5e41b03` ("Revert blog data layer to the safestorage.in feed") the blog list page,
the blog detail pages, the sitemap and the admin blog screens all read from
`https://safestorage.in/get_blog_content`. **Nothing reads the `blog_content` table any
more** — but a cron still writes to it every 5 minutes, and ~250 lines of DB code are
still built and shipped.

This issue tracks removing the dead half without breaking the half that is still
load-bearing. The two are currently tangled inside the same function, so this needs a
scalpel, not `rm`.

## Evidence that `blog_content` is unread

Verified against production (`13.203.136.29`) on 2026-07-30, after deploying `5e41b03`:

| Check | Result |
|---|---|
| `grep -rl blog-db app/` on the server | **no matches** |
| `/api/blogs/fetch` post count | **261** — identical to the `.in` feed |
| `blog_content` rows / `MAX(post_id)` | **263 / 281** — 2 rows the site cannot serve |
| `/blog/top-5-self-storage-companies-in-dubai-safe-clean-and-low-cost-space` (`post_id 280`, DB-only) | **404** |
| climate wording in `/api/blogs/self-storage-dubai-for-households-expats-business` | **13 occurrences** |

That last row is the decisive one. `scrubClimate()` in `lib/blog-db.ts` strips
"climate/temperature/humidity control" wording, and it runs **only** on the DB read path.
Unscrubbed text in the live response proves reads come from the feed.

The row count is also *drifting upward*: it was 262 earlier the same day, then 263. The
cron keeps importing posts into a table no page queries.

## What is dead

| Path | Why it's dead |
|---|---|
| `lib/blog-db.ts` (211 lines) | only importer is `lib/blog-sync.ts:9` |
| `lib/blog-upload.ts` | **zero importers anywhere** — already fully orphaned |
| `scripts/import-blogs-to-db.mjs` | only invoked by `scripts/sync-blogs.sh:26` |
| `database/blog_content_dubai.sql` | schema for the dead table |
| `lib/blog-sync.ts:20` — `upsertBlogs(rows)` | the single write into `blog_content` |
| `scripts/sync-blogs.sh:26` — step 1 | runs the import above |

## What must NOT be removed

This is the part that makes the cleanup non-trivial. `syncBlogsFromFeed()` in
`lib/blog-sync.ts` does three things, and only the first is dead:

```
line 20      upsertBlogs(rows)        <-- DEAD, remove
lines 22-37  mirror post images       <-- LOAD-BEARING, keep
```

- **`lib/blog-image.ts` — keep.** Still imported by `components/blog/blog-page.tsx:15` and
  `components/blog/blog-post-detail.tsx:11`. It rewrites every blog image to
  `https://safestorage.ae/blog-images/<file>` for SEO.
- **Image mirroring — keep.** That `/blog-images/` URL is served by nginx from
  `/var/www/blog-images` (currently **275 files, 646 MB**) with an `@blog_images_in`
  fallback proxy to safestorage.in. Both `lib/blog-sync.ts:22-37` and
  `scripts/sync-blog-images.sh` populate it. Stop mirroring and every blog image falls
  back to a proxy hop, or 404s if the fallback is later removed.
- **`app/api/revalidate/route.ts` — keep.** The blog pages are ISR
  (`revalidate = 600` on the list, `3600` on detail). Revalidation is what makes an edit in
  the PHP dashboard appear in seconds instead of an hour.
- **`app/api/sync-blogs/route.ts` — keep, slim down.** It's the webhook the safestorage.in
  dashboard fires after every save; it also calls `revalidatePath()` for `/blog`,
  `/blog/[slug]` and `/sitemap.xml`. Only its DB side goes.
- **The `safestorage_dubai` database itself — keep.** It holds two live tables besides the
  dead one: `payment_attempt_dubai` and `quotation_dubai`, used by
  `lib/payment-attempt-db.ts` and `lib/quotation-db.ts`. Only the `blog_content` *table* is
  dead, not the database.

## Proposed change

- [ ] Drop `upsertBlogs(rows)` from `lib/blog-sync.ts` and rename the function to reflect
      that it now only mirrors images (e.g. `syncBlogImagesFromFeed`)
- [ ] Update the return shape (`{ posts, images }` → `{ images }`) and
      `app/api/sync-blogs/route.ts` accordingly; keep the `revalidatePath()` calls
- [ ] Delete `lib/blog-db.ts`, `lib/blog-upload.ts`, `scripts/import-blogs-to-db.mjs`,
      `database/blog_content_dubai.sql`
- [ ] Remove step 1 from `scripts/sync-blogs.sh`; keep steps 2 (images) and 3 (revalidate)
- [ ] Update the comment headers in `lib/blog-sync.ts` and `scripts/sync-blogs.sh`, which
      still describe the DB as the destination
- [ ] Update `DEVELOPMENT.md:135-136` and `:363`, which document `blog-db.ts` and the
      sync as the content source
- [ ] Decide the fate of the `blog_content` table (see below)
- [ ] Drop `mysql2` from the blog path only — **do not** remove the dependency, the
      quotation and payment-attempt layers still use it

## Decisions needed

1. **Keep or drop the `blog_content` table?** It has 263 rows including 2 posts
   (`post_id 280`, `281`) that exist *nowhere else* — they were authored into the Dubai DB
   and never made it into the `.in` feed. Dropping the table loses them. Options: export
   those 2 posts and re-author them in the PHP dashboard, or leave the table in place as a
   read-only archive and just stop writing to it. **Leaving it is cheap and reversible; I'd
   default to that.**
2. **Is the DB path coming back?** If the intent is to return to a local DB later, this
   should be a `git rm` we can revert rather than a rewrite. The revert commit deliberately
   kept `lib/blog-db.ts` for exactly that reason.

## Related bug found while verifying

`GET /api/blogs` returns `{"error":"Failed to fetch blogs"}` in production. It calls
`https://safestorage.in/get_all_blogs`, which **404s** (so does
`/back/app/get_all_blogs`). This is inherited from the pre-`5611f68` code that `5e41b03`
restored — not caused by the revert.

Impact is limited but real:
- `app/admin/dashboard/blogs/page.tsx:51` uses it only as a *fallback* after
  `get_blog_content`, which works — so the admin list is fine
- `app/admin/dashboard/blogs/new/page.tsx:74` **POSTs** to it to create a blog. That's the
  separate `POST` handler targeting `insert_blog_content`, so it may well work — but
  create-blog should be tested before anyone relies on it.

Worth splitting into its own issue: either point the `GET` at the correct upstream or
delete the handler.

## Open question — `safestorage.ae/dubai`

I could not find anything to remove for this, so I've left it off the checklist. What I
checked:

- no `app/dubai/` route exists
- `https://safestorage.ae/dubai` already returns **404**
- no nginx `location` block for it (only `/blog-images/` and `/`)
- no code references a bare `/dubai` path — the only matches are the legitimate pages
  `/dubai-cost-of-living-2026` and `/dubai-shopping-guide-2026`, plus comments pointing at
  the safestorage.in backend paths `/back/dubai/schedule_pickup`
  (`app/api/emails/pickup-confirmation/route.ts:8`) and `/back/dubai/manage_inventory`
  (`lib/email/welcome-note-template.ts:2`)

If the intent was one of the `/back/dubai/*` dashboard workflows, or something outside this
repo (a Search Console entry, an old redirect, an Amplify/Vercel leftover), say which and
I'll fold it in.

## Unrelated uncommitted work in the tree

`lib/blog-db.ts`, `lib/payment-attempt-db.ts`, `lib/quotation-db.ts`,
`scripts/import-blogs-to-db.mjs` and `database/blog_content_dubai.sql` currently have
uncommitted edits adding a "no `DB_NAME` default" guard. If this cleanup deletes
`blog-db.ts` and `import-blogs-to-db.mjs`, those two edits become moot — but **the guards in
`payment-attempt-db.ts` and `quotation-db.ts` are still worth keeping and committing**,
since those tables are live.
