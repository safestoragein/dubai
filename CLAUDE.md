# SafeStorage Dubai — project notes

## Hosting & deploy (AWS Amplify)
- Hosting moved from **Vercel → AWS Amplify** (as of 2026-07). Live site: https://safestorage.ae
- Amplify is **Git-connected** to `github.com/safestoragein/dubai` (branch `main`).
- **Deploy = push to main.** A `git push origin main` auto-triggers an Amplify build + deploy.
  Build spec: `amplify.yml` (Node 20, `npm install --legacy-peer-deps`, `npm run build`, artifacts in `.next`).
- Quick deploy: `./scripts/deploy.sh "commit message"` (commits + pushes).
- Env vars (JWT_SECRET, NEXT_PUBLIC_*) live in the Amplify Console → App settings → Environment variables
  (not in git). Mirror any new `.env.example` key there or the build/runtime will miss it.
- **Whenever there's a change: commit and push** (this is what deploys). Keep secrets out of git.

## Backend endpoints (PHP, safestorage.in/back/app)
- Leads: `insert_customer_details_dubai` (household), `insert_business_customer_details_dubai` (business)
- Blogs: `get_all_blogs`, `insert_blog_content`
- (We will keep expanding this endpoint list.)

## Notes
- Rotate the old Vercel token that used to be stored here (do not commit tokens to the repo).
