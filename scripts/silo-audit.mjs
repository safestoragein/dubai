#!/usr/bin/env node
/**
 * Post-build audit of the silo's internal linking.
 *
 * WHY THIS EXISTS
 * ---------------
 * lib/silo/registry.ts already enforces the rules that can be checked against
 * the CONTENT (up-links, sibling counts, no cross-silo child links). What it
 * cannot see is the rendered page — the hand-written .tsx files, the header,
 * the footer and the components. Two failures live only there:
 *
 *   1. A link that points at a URL which 301s. §9 of the plan says update
 *      internal links to the new target directly rather than relying on the
 *      redirect; every one that slips through costs a hop of equity on every
 *      page that renders it, forever, and nothing else in the build objects.
 *
 *   2. A link to a URL that does not exist at all. A 404 in the internal link
 *      graph is worse than a missing link, and it is invisible until someone
 *      clicks it.
 *
 * Run after `npm run build`:
 *   node scripts/silo-audit.mjs
 *
 * Exit 0 = clean. Exit 1 = at least one internal link is wrong.
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs"
import { join, relative } from "node:path"

const APP = ".next/server/app"
if (!existsSync(APP)) {
  console.error("silo-audit: no build found. Run `npm run build` first.")
  process.exit(1)
}

/* ---- what the built site actually publishes ----------------------------- */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (p.endsWith(".html")) out.push(p)
  }
  return out
}

const pages = walk(APP)
const published = new Set(
  pages.map((p) => {
    const rel = "/" + relative(APP, p).replace(/\.html$/, "")
    return rel === "/index" ? "/" : rel
  }),
)

/* ---- what redirects ------------------------------------------------------ */

const cfg = await import("../next.config.mjs")
const redirects = await cfg.default.redirects()
const redirectSources = new Map()
for (const r of redirects) {
  // Skip parameterised and host-conditional rules — they cannot be compared
  // to a literal href without reimplementing path-to-regexp.
  if (r.source.includes(":") || r.has) continue
  redirectSources.set(r.source.replace(/\/$/, ""), r.destination)
}

/* ---- every internal href the built site renders -------------------------- */

const HREF = /href="(\/[^"#?]*)"/g
const problems = []

// Routes that exist in app/ but are server-rendered on demand, so they never
// appear as a .html in the build output. Linking to these is correct.
const dynamicRoutes = new Set(
  walkDirs("app")
    .filter((d) => existsSync(join(d, "page.tsx")) || existsSync(join(d, "page.ts")))
    .map((d) => "/" + relative("app", d))
    .filter((r) => !r.includes("[") && !r.startsWith("/api")),
)
dynamicRoutes.add("/")

function walkDirs(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (statSync(p).isDirectory()) {
      out.push(p)
      walkDirs(p, out)
    }
  }
  return out
}

// hrefs that are files rather than pages — preloads and downloads.
const ASSET = /\.(webp|png|jpe?g|svg|gif|avif|ico|pdf|txt|xml|webmanifest|woff2?)$/i

for (const file of pages) {
  const page = "/" + relative(APP, file).replace(/\.html$/, "")
  const html = readFileSync(file, "utf8")
  const seen = new Set()

  for (const m of html.matchAll(HREF)) {
    const href = m[1].replace(/\/$/, "") || "/"
    if (seen.has(href)) continue
    seen.add(href)
    if (href.startsWith("/_next") || href.startsWith("/api") || href.startsWith("/images")) continue
    if (href.startsWith("/blog")) continue // paginated + feed-driven
    if (href.startsWith("/ar")) continue // Arabic tree, dynamic
    if (href.startsWith("/admin")) continue

    if (redirectSources.has(href)) {
      problems.push({
        kind: "REDIRECT",
        page,
        href,
        detail: `301s to ${redirectSources.get(href)} — link the target directly`,
      })
    } else if (ASSET.test(href)) {
      continue
    } else if (!published.has(href) && !dynamicRoutes.has(href)) {
      problems.push({ kind: "404", page, href, detail: "no page is published at this URL" })
    }
  }
}

/* ---- report -------------------------------------------------------------- */

if (problems.length === 0) {
  console.log(`silo-audit: OK — ${pages.length} pages, every internal link resolves in one hop.`)
  process.exit(0)
}

// Group by href: one bad link in the footer is one fix, not 219 problems.
const byHref = new Map()
for (const p of problems) {
  if (!byHref.has(p.href)) byHref.set(p.href, { ...p, pages: [] })
  byHref.get(p.href).pages.push(p.page)
}

console.error(`silo-audit: ${byHref.size} bad link target(s) across ${pages.length} pages\n`)
for (const [href, info] of [...byHref].sort((a, b) => b[1].pages.length - a[1].pages.length)) {
  console.error(`  [${info.kind}] ${href}`)
  console.error(`      ${info.detail}`)
  console.error(`      on ${info.pages.length} page(s), e.g. ${info.pages.slice(0, 3).join(", ")}\n`)
}
process.exit(1)
