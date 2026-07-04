# SafeStorage Dubai — project notes

## Hosting & deploy (AWS EC2 — NOT Vercel, NOT Amplify)
Discovered 2026-07-04 by inspecting DNS/headers/SSH. The live site does **not** run on
Vercel or AWS Amplify (an Amplify app may exist but nothing points to it).

- **Live site**: https://safestorage.ae → EC2 `13.207.196.124` (ap-south-1 / Mumbai)
- **Stack on box**: Ubuntu + **nginx** reverse-proxy → **Next.js** `next start -p 3000`, **Let's Encrypt** TLS
- **App dir**: `/home/ubuntu/dubai` (git clone of `safestoragein/dubai`, but GitHub is NOT the deploy path)
- **Process mgr**: **systemd** unit `safestorage.service` (`sudo systemctl restart safestorage.service`; ubuntu has passwordless sudo)
- **DNS**: Route 53
- **SSH**: `ssh -i ~/Downloads/Safestoragedubaikeypair.pem ubuntu@13.207.196.124`

### How to deploy (from this Mac)
```
./scripts/deploy.sh          # rsync -> server, npm build, restart service
```
This ships code straight from this Mac via rsync (this machine lacks push rights to the
GitHub org repo, and the server was already ahead of GitHub — GitHub is out of the loop).

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
