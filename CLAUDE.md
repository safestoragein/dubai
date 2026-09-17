# SafeStorage Dubai — project notes

## Hosting & deploy (AWS EC2 — NOT Vercel, NOT Amplify)
Discovered 2026-07-04 by inspecting DNS/headers/SSH. The live site does **not** run on
Vercel or AWS Amplify (an Amplify app may exist but nothing points to it).

- **Live site**: https://safestorage.ae → EC2 `13.203.136.29` (ap-south-1 / Mumbai)
- **Stack on box**: Ubuntu + **nginx** reverse-proxy → **Next.js** `next start -p 3000`, **Let's Encrypt** TLS
- **App dir**: `/home/ubuntu/dubai` (working tree, checked out by the deploy hook)
- **Deploy repo**: `/home/ubuntu/dubai.git` (bare, with a `post-receive` hook)
- **Process mgr**: **systemd** unit `safestorage.service` (`sudo systemctl restart safestorage.service`; ubuntu has passwordless sudo)
- **DNS**: Route 53
- **SSH key (Windows box)**: `C:\pem\Safestoragedubaikeypair.pem` (also in `$env:DUBAI_SSH_KEY`)
- **SSH key (Mac)**: `~/Downloads/Safestoragedubaikeypair.pem`
- **SSH**: `ssh -i /c/pem/Safestoragedubaikeypair.pem ubuntu@13.203.136.29` (Windows)
  / `ssh -i ~/Downloads/Safestoragedubaikeypair.pem ubuntu@13.203.136.29` (Mac)

### How to deploy — `git push` (release directories since 2026-09-17)
```
git push origin main   # -> GitHub (history) AND EC2 (deploys)
```
`origin` has two push URLs (GitHub + `ssh://ubuntu@13.203.136.29/home/ubuntu/dubai.git`), so one push does both.
**Only committed code deploys.**

The bare repo's `hooks/post-receive` builds every deploy in a NEW folder and never touches the live site until it passes:
1. `git archive` into `/home/ubuntu/releases/<time>-<rev>` (`.env.local` symlinked from `/home/ubuntu/shared/.env.local`)
2. `npm install` + `npm run build` there (the `postbuild` silo-audit must pass)
3. previous build's `.next/static` carried forward (old cached pages keep their CSS)
4. **smoke test** on port 3101: homepage + every css/js it references must return 200
5. flip `/home/ubuntu/current` → new release, restart `safestorage.service`, verify live again
6. any failure → live site unchanged or auto-rolled-back. Keeps the last 3 releases.

`/home/ubuntu/dubai` is a symlink to `/home/ubuntu/current` (crons/systemd unchanged). Look for
`==> Deployed <rev>` in the push output. Never build inside the live folder by hand.

Other safety nets (do not remove):
- nginx: pages sent `Cache-Control: public, max-age=0, must-revalidate`; `/_next/static/` gets `immutable`
  ONLY on success (Safari once cached 500s for a year → unstyled site); 502/503/504 show a self-refreshing
  "updating" page. Backups in `/etc/nginx/backups/`.
- `/home/ubuntu/bin/asset-guard.sh` (cron */3): restarts the app if live CSS/JS stop loading → `/home/ubuntu/asset-guard.log`.
- `next.config.mjs` exports `config(phase)` with a per-build `deploymentId` → every asset URL gets `?dpl=<id>`.
  `scripts/silo-audit.mjs` calls it with `"phase-audit"`. Don't turn next.config back into a plain object.
- `app/layout.tsx` inline "self-heal" script + `--ss-css` sentinel in `globals.css`: reloads once if CSS failed.

### Environment variables — live on the SERVER, not any cloud console
File: **`/home/ubuntu/shared/.env.local`** (symlinked into each release) (gitignored, mode 600, NEVER rsynced). Next.js
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

## ⚠ Business rules (owner decisions — ALWAYS follow)
- **NO pricing anywhere.** Never publish SafeStorage's own price ("12 AED / sqft", "12.65", monthly costs per home,
  price ranges) in copy, metadata, JSON-LD (`offers.price`, `priceRange`, `estimatedCost`) or `public/llms.txt`.
  Say "pay only for the space you use" / "free, itemised quote". Third-party figures (rents, competitors, freight) are OK.
  Blog posts come from the safestorage.in feed; `stripOwnPrice()` in `lib/blog-meta.ts` filters them — keep it.
  Before every deploy: `grep -rnE "12(\.65)? ?AED|AED ?12\b" app components lib data public` must show only third-party numbers.
- **No lockers / no private units.** Storage is SHARED space. Don't write "locker", "dedicated unit", "your unit",
  "individually assigned area". Sizes are shown in **sq ft** (never m²) and marked "(Estimated)".
- **No cancellation-notice periods** (e.g. "7/30 days' notice") in page copy.
- **No invented testimonials, facts or numbers.** Reuse only testimonials already published on the site.
- **No VAT wording** in headline prices (there are no prices).
- `/how-it-works` is the common path (old `/self-storage-dubai/how-it-works` 308-redirects to it).

## 🎨 Design system (every page must look like the homepage)
All redesigned pages use `components/landing/*` + `components/landing/landing.module.css`, fonts via
`import { manrope, sora } from "@/components/landing/fonts"`, wrapped in
`<div className={`${s.page} ${sora.variable} ${manrope.variable}`}>`. Use the SAME building blocks — do not
invent new styles when one of these fits. Reference pages: `app/page.tsx`, `app/self-storage-dubai/page.tsx`,
`app/business-storage-dubai/page.tsx`, `app/personal-storage-dubai/page.tsx`, `app/moving-storage-dubai/page.tsx`,
`app/how-it-works/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`,
`app/business-storage-dubai/document-storage/page.tsx`.

**Page skeleton (service pages):** `SiloBreadcrumb` → `SchemaScript` (incl. FAQPage) → `SplitHero` → `LandingTrust`
→ (optional `LandingSteps`) → sections below → `LandingReviews` → FAQ (`FaqAccordion`, max 6) → optional Explore
links row → `CtaBand` → `LandingConnect`.

| Need | Use |
|---|---|
| Hero | `SplitHero` (`landing-top.tsx`): light cream wash from the left, left-aligned copy, 4.9★ card top-right, per-page `image`. Title = `title` + `titleAccent` (orange, own line on desktop), must fit **2 lines** at every width. Short blurb (≤2 lines). **No stats row under the buttons.** |
| Section title | `<div className={s.howHead}><div><span className={s.howEyebrow}>Label</span><h2>Sentence case <em>orange ending.</em></h2></div><p>short intro</p></div>` — left-aligned, **max 2 lines** (never centred `sectionHead` on redesigned pages) |
| Stats strip | `LandingTrust` (one row; horizontal scroll on phones) |
| Animated how-it-works | `LandingSteps` (van journey, CSS-only, replays in view) |
| Dark feature band | `darkBand whyBand` + `bandHead` + `FeatScroller` (horizontal cards with arrows) |
| Card rail with arrows | `UspRail` + `s.usp` cards (icon, big faint number, title, text) |
| Small icon cards | `s.miniGrid` + `s.miniCard` (horizontal scroll), `s.miniLink` + `s.miniArrow` for links, `s.miniFacts` tick row |
| Timeline | `s.milestones` / `s.milestone` inside `MilestonesPlayer` (animated line + pop + count-up via `data-count`) |
| Story/film reel | `StoryReel` (about page) |
| Chips marquee | `s.areaMarquees` + `s.marquee` + `s.marqueeTrack` (+ `s.marqueeReverse`) + `s.marqueeGroup s.chipGroup` (duplicate list, `aria-hidden` copy) |
| Callout | `s.movingTip` (icon + short bold lead) |
| Reviews | `LandingReviews` (or `s.revTrack`/`s.revCard` with ★★★★★ text) |
| FAQ | `FaqAccordion` — one open at a time; answers 1–3 sentences; ≤ 6 questions; add FAQPage JSON-LD |
| CTA | `CtaBand` with `whatsAppLabel="WhatsApp Us"` `callLabel="Call Now"`; `LandingConnect` form at the end |

**Rules:** content short and scannable (cards/icons over long paragraphs); horizontal scrolling rails on phones,
next card peeking; no sideways page scroll at 360px; all text server-rendered (SEO); animations CSS-only,
start when in view, respect `prefers-reduced-motion`; lucide-react icons (no new image libraries).
Keep internal links (use an "Explore" `miniGrid` of `miniLink` cards instead of big link lists). Phone
bottom bar = slim pill (`sticky-mobile-cta.tsx`), hidden while typing; form fields 16px on mobile.

**Verify before pushing:** `npm run build` (silo-audit OK), then check desktop (1440) + phone (390/360) screenshots:
titles ≤ 2 lines, no horizontal overflow, animations play.
