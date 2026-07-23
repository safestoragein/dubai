# SafeStorage Dubai — project notes

## Hosting & deploy (AWS EC2 — NOT Vercel, NOT Amplify)
Discovered 2026-07-04 by inspecting DNS/headers/SSH. The live site does **not** run on
Vercel or AWS Amplify (an Amplify app may exist but nothing points to it).

- **Live site**: https://safestorage.ae → EC2 `13.207.196.124` (ap-south-1 / Mumbai)
- **Stack on box**: Ubuntu + **nginx** reverse-proxy → **Next.js** `next start -p 3000`, **Let's Encrypt** TLS
- **App dir**: `/home/ubuntu/dubai` (working tree, checked out by the deploy hook)
- **Deploy repo**: `/home/ubuntu/dubai.git` (bare, with a `post-receive` hook)
- **Process mgr**: **systemd** unit `safestorage.service` (`sudo systemctl restart safestorage.service`; ubuntu has passwordless sudo)
- **DNS**: Route 53
- **SSH key (Windows box)**: `C:\pem\Safestoragedubaikeypair.pem` (also in `$env:DUBAI_SSH_KEY`)
- **SSH**: `ssh -i /c/pem/Safestoragedubaikeypair.pem ubuntu@13.207.196.124`

### How to deploy — `git push` (set up 2026-07-23)
```
git push          # -> GitHub (history) AND EC2 (deploys)
```
`origin` has **two push URLs**, so one `git push` does both:

| URL | Purpose |
|---|---|
| `https://github.com/safestoragein/dubai.git` | code history |
| `ssh://ubuntu@13.207.196.124/home/ubuntu/dubai.git` | triggers deploy |

The bare repo's `hooks/post-receive` runs only for `refs/heads/main` and does:
`git checkout -f main` into `/home/ubuntu/dubai` → `npm install --legacy-peer-deps` →
`npm run build` (on failure: `rm -rf .next` and retry once — fixes the `ENOTEMPTY`
stale-segment error) → `sudo systemctl restart safestorage.service`. Progress streams
back as `remote:` lines in your `git push` output; a failed build/restart fails the push.

Git uses the pem via repo-local `core.sshCommand`
(`git config --get core.sshCommand`). Fetch still comes from GitHub over HTTPS.

**Only committed code deploys.** The old rsync/tar scripts pushed the dirty working tree,
so uncommitted edits could be live without being in git; `checkout -f` now reverts any
such drift on the server. Commit before pushing.

Retired 2026-07-23 (in git history / previously untracked): `scripts/deploy.sh`,
`scripts/deploy.ps1`, `scripts/watch-deploy.js`, `scripts/watch-deploy.ps1`, and the PM2
app `safestorage-autodeploy` (a 60s-debounce file watcher that auto-deployed on save).
PM2 still runs `safestorage-dubai` — that is the local app, unrelated to deploying.

### Environment variables — live on the SERVER, not any cloud console
File: **`/home/ubuntu/dubai/.env.local`** (gitignored, mode 600, NEVER rsynced). Next.js
auto-loads it — `NEXT_PUBLIC_*` inlined at `npm run build`, `JWT_SECRET` read at runtime.
Keys currently set: `JWT_SECRET`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`,
`NEXT_PUBLIC_CONTACT_NUMBER`, `NEXT_PUBLIC_EMAIL`. To change one: edit that file on the
server, then rebuild + restart (redeploy).

## Backend endpoints (PHP, safestorage.in/back/app)
- Leads: `insert_customer_details_dubai` (household), `insert_business_customer_details_dubai` (business)
- Blogs: `get_all_blogs`, `insert_blog_content`

## Security TODO
- `/api/debug` publicly leaks JWT-secret length + first chars — protect or delete it.
- Old Vercel token was removed from this file — rotate it in the Vercel dashboard if not already.
- `amplify.yml` is unused (Amplify isn't the host) — kept only as leftover; safe to delete.
