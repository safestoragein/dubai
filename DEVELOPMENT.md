# SafeStorage Dubai — Development Documentation

Marketing + lead-generation site for **safestorage.ae** (Dubai self-storage), built on
Next.js App Router. It also carries a small admin area for blog management.

> Deployment, hosting and server environment are documented in [`CLAUDE.md`](./CLAUDE.md).
> This file covers **how the application is built and how to work on it**.

---

## 1. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js `^16.1.1` (App Router, React Server Components) |
| Runtime | React 19, Node 20 (`.nvmrc`) |
| Language | TypeScript 5 (`strict: true`), path alias `@/*` → repo root |
| Styling | Tailwind CSS 3.4 + `tailwindcss-animate`, CSS variables |
| UI kit | shadcn/ui (Radix primitives) — 61 components in `components/ui/` |
| Icons | `lucide-react` |
| Animation | `framer-motion` (lazy `m.` components, see §7) |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Rich text | TipTap 3 (admin blog editor) |
| Database | MySQL/MariaDB via `mysql2/promise` (blog content only) |
| Auth | `jsonwebtoken` + `bcryptjs`, HTTP-only cookie |
| Fonts | `next/font` — Inter, `display: swap` |

`npm` is the package manager. `.npmrc` pins `legacy-peer-deps=true` — **always install with
`npm install --legacy-peer-deps`** (the deploy hook does the same). `pnpm-lock.yaml` is a
stub; ignore it.

---

## 2. Getting started

```bash
git clone https://github.com/safestoragein/dubai.git
cd dubai
nvm use                      # Node 20
npm install --legacy-peer-deps
cp .env.example .env.local   # then fill in real values
npm run dev                  # http://localhost:3000
```

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build (also runs `generateStaticParams` → hits the DB) |
| `npm run start` | Serve the built app on :3000 |
| `npm run lint` | `next lint` |

There is **no test runner**. The `test-*.js` files in the repo root are standalone Node
scripts that POST to the live lead endpoints — run them manually with `node`, and be aware
they create real leads.

### Local PM2 (optional)

`ecosystem.config.js` defines one app, `safestorage-dubai`, which runs `next start -p 3000`
locally. It is **not** the deploy mechanism — deploying is `git push` (see `CLAUDE.md`).

```bash
pm2 start ecosystem.config.js --only safestorage-dubai
```

---

## 3. Environment variables

Read from `.env.local` (gitignored). In production this file lives at
`/home/ubuntu/dubai/.env.local` on the EC2 box — there is no cloud console for it.

| Variable | Used by | Notes |
|---|---|---|
| `NEXT_PUBLIC_CONTACT_NUMBER` | `lib/env.ts` | Falls back to `+971505773388` |
| `NEXT_PUBLIC_EMAIL` | `lib/env.ts` | Falls back to `support@safestorage.ae` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | contact widgets | WhatsApp link is also derived in `lib/env.ts` |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | `lib/google-maps-loader.ts`, map + address autocomplete | Inlined at build time |
| `JWT_SECRET` | admin login / verify | Read at runtime; **has an insecure hardcoded fallback** (§9) |
| `DB_HOST` / `DB_PORT` / `DB_USER` / `DB_PASSWORD` / `DB_NAME` | `lib/blog-db.ts`, `lib/quotation-db.ts`, `lib/payment-attempt-db.ts` | Host/port default to `127.0.0.1:3306`. **`DB_NAME` is required — no default**; the pool throws `DB_NAME is not set` if it is missing |
| `BLOG_IMAGES_DIR` | `lib/blog-upload.ts`, `lib/blog-sync.ts` | Default `/var/www/blog-images` (nginx-served) |
| `REVALIDATE_SECRET` | `/api/revalidate`, `/api/sync-blogs` | Shared secret for the webhook + cron |

Because `NEXT_PUBLIC_*` values are inlined at `npm run build`, changing one requires a
rebuild + restart, not just a service restart.

---

## 4. Repository layout

```
app/                 App Router — 80 page routes + 13 API routes
  api/               Route handlers (see §6)
  admin/             Login + dashboard (blogs, leads)
  blog/              Blog index, [slug] CMS route, 15 hand-written posts
  locations/         12 Dubai-area landing pages
  self-storage-dubai/, storage-dubai/   SEO hub + spoke pages
  layout.tsx         Root layout: metadata, fonts, Header/Footer, providers
  sitemap.ts         Dynamic sitemap (static routes + CMS posts)
  robots.ts          robots.txt
actions/             "use server" server actions for the quote form
components/
  ui/                shadcn/ui primitives (61)
  admin/             TipTap editor wrapper, image upload
  blog/              Blog list, post detail, sidebar, share/like widgets
  quote/             Quote form + several page variants
  <feature>/         contact, pricing, services, locations, stats, ...
  header.tsx, footer.tsx, hero-section.tsx, ...
data/                Static content: blog seeds, storage sizes, testimonials
lib/                 Data layer + helpers (see §5)
hooks/               use-quote-form, use-toast, use-mobile
types/               Shared TS types (blog)
database/            SQL schema + notes for the blog tables
scripts/             Blog sync (bash + node), one-off blog importers
codeigniter/         Reference copies of the PHP backend controllers (not executed here)
middleware.ts        410-Gone list + admin cookie gate
next.config.mjs      Redirects, rewrites, headers, images, experiments
```

### Files that are dead weight

`step1-complete.tsx`, `step1-dependencies.json`, `amplify.yml`, `vercel.json`, `.vercel/`,
`components/debug-google-maps.tsx`, `app/test-icons/page.tsx`, and the several
`quote-page-*.tsx` variants are leftovers. `amplify.yml`/`vercel.json` are inert — the site
runs on EC2. Delete deliberately, not casually: some `quote-page-*` variants are still
referenced by the A/B-ish `-alt` code paths.

---

## 5. `lib/` — the data layer

| Module | Responsibility |
|---|---|
| `blog-db.ts` | **Server-only.** `mysql2` pool + all CRUD on `blog_content`. Every read passes through `scrubClimate()` — see below. Read helpers swallow errors and return `[]`/`null` so pages degrade instead of 500ing. |
| `blog-sync.ts` | **Server-only.** Pulls the safestorage.in feed → `upsertBlogs()` + downloads new images into `BLOG_IMAGES_DIR`. |
| `blog-upload.ts` | **Server-only.** Writes an admin-uploaded `File` to `BLOG_IMAGES_DIR` under a UUID filename; returns the filename. |
| `blog-image.ts` | `blogImageUrl()` normalises whatever is in `post_images` (bare filename / `post_images/x.jpg` / full legacy URL) into a `https://safestorage.ae/blog-images/<file>` URL. |
| `blog-images.ts` | Category colour/placeholder helpers for the blog UI. |
| `structured-data.ts` | ~870 lines of JSON-LD (LocalBusiness, FAQ, Service, Breadcrumb…), injected by `components/schema-script.tsx`. |
| `env.ts` | Central contact-info config + derived `tel:` / `mailto:` / `wa.me` links. **Use this instead of hardcoding the phone number.** |
| `google-maps-loader.ts` | Singleton loader for the Maps JS SDK (Places autocomplete + map section). |
| `auth.ts` | `verifyToken()` / `isAuthenticated()` for the admin cookie. |
| `utils.ts` | `cn()` (clsx + tailwind-merge). |
| `performance.ts`, `animation-loader.ts`, `optimize-css.ts` | Perf helpers used by `performance-optimizer.tsx` and the motion providers. |

### The `scrubClimate` rule

SafeStorage Dubai no longer advertises climate/temperature/humidity control, but blog rows
are synced *from* the India dashboard, which still contains the old wording. Any DB-level
cleanup would be overwritten on the next sync, so the text is stripped **at read time** in
`lib/blog-db.ts`. Consequences worth knowing:

- Slugs derive from the scrubbed title, so they stay stable.
- `app/blog/[slug]/page.tsx` has `remapLegacyClimateSlug()`, which applies the same
  substitutions to an incoming slug and 301s legacy URLs to the current post.
- `post_images` is deliberately **not** scrubbed (it holds filenames).

If you change the substitutions in one place, change them in the other.

---

## 6. Routing & rendering

### Page types

1. **Static marketing pages** (the large majority) — plain server components with a
   `Metadata` export, composed from `components/<feature>/`.
2. **Hand-written blog posts** — 15 fully authored `app/blog/<slug>/page.tsx` files. These
   are separate from the CMS and take precedence over the dynamic route.
3. **CMS blog posts** — `app/blog/[slug]/page.tsx`, backed by the `blog_content` table.
   `generateStaticParams()` pre-renders every post at build time; `revalidate = 600` is the
   ISR safety net, with on-demand revalidation on top (§8).
4. **Admin** — `app/admin/login` + `app/admin/dashboard/*`, all client components.

### Middleware (`middleware.ts`)

Matches `/admin/:path*` and `/blog/:path*`:

- Returns **410 Gone** for the 16 permanently deleted blog slugs (tells Google to stop
  crawling). The same slugs *also* have 301 redirects in `next.config.mjs`; middleware runs
  first, so 410 is what actually ships.
- Checks only that the `admin-token` cookie **exists** — Edge Runtime can't verify the JWT.
  Real verification happens in `app/admin/dashboard/layout.tsx`, which calls
  `/api/admin/verify` on mount and redirects on failure.

### `next.config.mjs`

- **41 redirects**: `/terms` → `/terms-and-conditions`, `www.safestorage.ae` → apex,
  retired location/service slugs, deleted blog posts.
- **Rewrite**: `/blog-images/:path*` → `https://safestorage.in/post_images/:path*`, so
  images appear on the safestorage.ae domain for SEO. Locally-synced files in
  `BLOG_IMAGES_DIR` are served by nginx first; the rewrite is the fallback.
- **Headers**: one-year immutable cache for images, `/_next/static`, `/fonts`.
- **Images**: AVIF/WebP, `contentDispositionType: 'inline'`, allow-list of remote hosts.
- `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` are **both `true`** — the
  build will not fail on type or lint errors. Run `npx tsc --noEmit` yourself before pushing.

### API routes

| Route | Method | Purpose |
|---|---|---|
| `/api/admin/login` | POST | Email + bcrypt password check → 8h JWT in an HTTP-only cookie |
| `/api/admin/logout` | POST | Clears the cookie |
| `/api/admin/verify` | GET | Verifies the JWT; used by the dashboard layout |
| `/api/admin/test-token` | POST | Dev helper — **mints a valid admin JWT for any email, unauthenticated (§9)** |
| `/api/blogs` | GET / POST | List all posts / create one (multipart, optional image upload) |
| `/api/blogs/fetch` | GET | Cached list (`s-maxage=300`) for client fetches |
| `/api/blogs/[slug]` | GET / PUT / DELETE | Read by slug (or `<id>-` prefix); update/delete by id — note **DELETE treats the `[slug]` segment as the numeric id** |
| `/api/blogs/update` | POST | Multipart update from the admin editor |
| `/api/sync-blogs` | POST / GET | Webhook fired by the PHP dashboard: pull feed → upsert → revalidate. Guarded by `?secret=REVALIDATE_SECRET` |
| `/api/revalidate` | POST | Revalidate `/blog`, `/blog/[slug]`, `/sitemap.xml`. Same secret |
| `/api/insert-customer-details-dubai` | POST / OPTIONS | Lead proxy to the PHP backend |
| `/api/save-partial-lead` | POST | Abandoned-lead capture via `sendBeacon`/keepalive fetch |
| `/api/debug` | GET | **Leaks JWT-secret metadata — see §9** |

---

## 7. Feature notes

### Lead capture

Two paths reach the same PHP backend at `safestorage.in/back/app/`:

- **Server actions** — `actions/quote-form-actions.ts` (primary) and
  `quote-form-actions-alt.ts` (fallback). `hooks/use-quote-form.ts` calls the primary and,
  on failure, retries once with the alt action, then `router.push('/thank-you')`.
- **Route handler** — `/api/insert-customer-details-dubai`, for callers that need a plain
  HTTP POST.

Both branch on `storage_type`:

| `storage_type` | Endpoint | Extra field |
|---|---|---|
| `business` | `insert_business_customer_details_dubai` | `company_name` |
| anything else | `insert_customer_details_dubai` | — |

Success is detected by **string-matching `"success"` in the response body** — the backend
does not return JSON. Keep that in mind when touching the PHP side.

`/api/save-partial-lead` exists because a cross-origin `sendBeacon` straight to
safestorage.in would be killed by CORS during page teardown; the same-origin route proxies
it server-side. It accepts JSON, form-encoded, or `text/plain` bodies and requires at least
one of name/phone/email.

### Blog pipeline

Authoring happens in the **PHP dashboard on safestorage.in**, not here. Flow:

```
safestorage.in dashboard (author saves)
        │
        ├─ webhook → POST /api/sync-blogs?secret=…   (seconds)
        └─ cron    → scripts/sync-blogs.sh           (*/5 min backstop)
                          │
                          ├─ node scripts/import-blogs-to-db.mjs   → upsert into blog_content
                          ├─ bash scripts/sync-blog-images.sh      → download new images
                          └─ POST /api/revalidate?secret=…         → purge /blog, /blog/[slug], /sitemap.xml
```

`upsertBlogs()` uses `INSERT … ON DUPLICATE KEY UPDATE` keyed on `post_id`, so it captures
both new posts and edits. Image downloads are idempotent (skip if the file exists) and
individual failures are swallowed for the cron to retry.

The admin dashboard here can also create/edit posts directly against the local DB — but
anything it writes with a `post_id` that also exists upstream **will be overwritten by the
next sync**. Treat the local editor as secondary.

### Admin auth

Credentials are **hardcoded** in `app/api/admin/login/route.ts`: `kushal@safestorage.in`
with a bcrypt hash of the password. There is no user table. JWT expiry is 8h; the cookie is
`httpOnly`, `secure: true`, `sameSite: lax`.

### SEO

This is the site's centre of gravity — treat it as load-bearing:

- Per-page `Metadata` exports with canonical URLs and `en-AE` locale.
- `lib/structured-data.ts` + `components/schema-script.tsx` for JSON-LD.
- `app/sitemap.ts` merges static routes with CMS slugs; `app/robots.ts` disallows
  `/get-quote?*`.
- Removed content gets an explicit 410 (middleware) or 301 (`next.config.mjs`), never a
  soft 404.

When you delete a page, add its redirect or 410 entry in the same change.

### Performance

- `experimental.optimizeCss` and `optimizePackageImports` for `lucide-react` +
  `framer-motion`.
- `removeConsole` in production builds — don't rely on `console.log` for prod diagnostics.
- Framer Motion is loaded through `components/motion-provider.tsx` + `lazy-motion.tsx`;
  **import `m` from framer-motion, not `motion`**, or you defeat the lazy bundle.
- `optimized-image.tsx` / `image-with-skeleton.tsx` wrap `next/image` for LCP work.

---

## 8. Caching & revalidation model

| Surface | Behaviour |
|---|---|
| `/blog` | `revalidate = 600` |
| `/blog/[slug]` | `generateStaticParams` at build + `revalidate = 600` |
| `/api/blogs/fetch` | `revalidate = 300`, `s-maxage=300, stale-while-revalidate=600` |
| Static assets | `max-age=31536000, immutable` |
| On-demand | `/api/revalidate` and `/api/sync-blogs` call `revalidatePath()` |

A build is required for a *new* CMS post to get a pre-rendered page; between builds it is
served through the dynamic route and ISR. A previous attempt to revalidate on write was
reverted (commit `2162faa`) — check that history before re-introducing one.

---

## 9. Known issues / security

Live items, roughly in priority order:

1. **`/api/admin/test-token` is an unauthenticated admin-token minter.** Any caller can
   `POST {"email": "..."}` and receive a signed `role: admin` JWT in the response body,
   which is exactly what the `admin-token` cookie expects. Delete this route.
2. **`/api/debug` is public** and returns `JWT_SECRET` length + its first 10 characters.
   Delete it or gate it.
3. **JWT secret has a hardcoded fallback.** `lib/auth.ts` and the login/verify routes each
   define their own default string, and they are **not the same value** — `lib/auth.ts` uses
   `"your-secret-key-change-in-production-2024"` while the routes use
   `"safestorage-jwt-production-secret-2024-v2"`. If `JWT_SECRET` is ever unset, tokens
   issued by `/api/admin/login` will not verify through `lib/auth.ts`. (`test-token` uses
   the `lib/auth.ts` variant.) Set the env var and remove the fallbacks.
4. **Hardcoded admin credentials** in the login route; no rotation, no second user.
5. **`ignoreBuildErrors` + `ignoreDuringBuilds`** mean broken types ship silently.
6. **`app/admin/dashboard/leads/page.tsx` renders hardcoded mock data** on a `setTimeout` —
   it is not wired to any lead source. Don't read it as a real dashboard.
7. Login/verify routes `console.log` secret metadata at module load.
8. `amplify.yml` / `vercel.json` / `.vercel/` imply hosts that aren't used.

---

## 10. Conventions

- **Server by default.** Add `"use client"` only where hooks/handlers require it; keep
  `lib/*-db|sync|upload.ts` server-only (they import `server-only`).
- **Path alias `@/`** for every internal import.
- **Contact details come from `lib/env.ts`.** Never inline the phone number or email.
- **Blog images go through `blogImageUrl()`.** Never hardcode a safestorage.in URL.
- **UI**: compose from `components/ui/`; add new shadcn components with the CLI
  (`components.json` is configured, base colour `neutral`, CSS variables on).
- **Styling**: Tailwind utilities + `cn()`. No CSS modules.
- **Match the surrounding file.** The codebase is comment-heavy on non-obvious decisions
  (the scrub rule, the beacon proxy, the image rewrite) — preserve and extend those notes
  rather than stripping them.
- **Deleting a route?** Ship the 301 or 410 in the same commit.
- **Commit before pushing.** `git push` deploys via `checkout -f`; uncommitted work is not
  only undeployed, it will be reverted on the server.

---

## 11. Troubleshooting

| Symptom | Likely cause |
|---|---|
| Blog list is empty | DB unreachable — `getAllBlogs()` catches and returns `[]`. Check `DB_*` vars and the server logs for `getAllBlogs DB error`. |
| New post not on the site | Sync hasn't run, or revalidation failed. Hit `/api/sync-blogs?secret=…`, or check `/home/ubuntu/blog-sync.log`. |
| Blog image 404s | Not yet copied to `BLOG_IMAGES_DIR`; the `/blog-images/*` rewrite should still resolve it from safestorage.in. Run `scripts/sync-blog-images.sh` on the server. |
| Admin login loops back to `/admin/login` | `JWT_SECRET` mismatch between login and verify, or the cookie was blocked (it is `secure: true`, so plain-HTTP localhost will drop it). |
| Build fails with `ENOTEMPTY` | Stale `.next` segment — `rm -rf .next` and rebuild (the deploy hook already retries this way). |
| Deployed change didn't appear | It wasn't committed — only committed code deploys. |
| Type error only shows in the editor | Expected; the build ignores them. Run `npx tsc --noEmit`. |
