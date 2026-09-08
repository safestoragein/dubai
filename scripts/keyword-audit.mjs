#!/usr/bin/env node
/**
 * Keyword cannibalisation audit for safestorage.ae.
 *
 * WHY THIS EXISTS. Before the silo, seven of this site's own URLs ranked for
 * `storage cost per month`, three for `personal storage units`, and five
 * near-duplicate head-term pages sat flat at root. Google picked a different one
 * each crawl and none of them ever consolidated authority. That — not a lack of
 * content — is what held the site off page one for terms it should own.
 *
 * The silo plan fixes it with a keyword ownership register: one keyword, one
 * owning URL, written down. A register nobody checks is a document, not a
 * control, so this is the check.
 *
 * WHAT IT CHECKS. For every URL in the sitemap it pulls the <title> and the
 * <h1>, then flags any page whose title or H1 targets a keyword owned by a
 * DIFFERENT page. Mentioning a keyword in body copy is fine and expected —
 * targeting it in the title or H1 is the claim that causes cannibalisation.
 *
 *   node scripts/keyword-audit.mjs                 # audit the live site
 *   BASE=http://127.0.0.1:3000 node scripts/keyword-audit.mjs
 *
 * Exit 0 = clean. Exit 1 = at least one page claims a keyword it doesn't own.
 */

const BASE = process.env.BASE || "https://safestorage.ae"
const CONCURRENCY = 8

/**
 * The register, from 00-SILO-ARCHITECTURE.md §5.4. `owner` is the ONLY page
 * allowed to carry the phrase in its <title> or <h1>.
 *
 * `allow` lists paths that may also carry it because the phrase is a substring
 * of their own owned keyword — "storage dubai" is inside "storage dubai prices",
 * and flagging that would be noise, not a finding.
 */
const REGISTER = [
  { kw: "local self storage",              owner: "/self-storage-dubai/local-self-storage" },
  { kw: "self storage near me",            owner: "/self-storage-dubai/near-me" },
  { kw: "storage units near me",           owner: "/self-storage-dubai/near-me" },
  { kw: "storage units dubai",             owner: "/self-storage-dubai/storage-units" },
  { kw: "storage unit sizes",              owner: "/self-storage-dubai/unit-sizes" },
  { kw: "short term storage dubai",        owner: "/self-storage-dubai/short-term" },
  { kw: "long term storage dubai",         owner: "/self-storage-dubai/long-term" },
  { kw: "storage space for rent",          owner: "/self-storage-dubai/storage-space-for-rent" },
  { kw: "cheap storage dubai",             owner: "/self-storage-dubai/prices" },
  { kw: "storage cost per month",          owner: "/self-storage-dubai/prices" },
  { kw: "storage in dubai prices",         owner: "/self-storage-dubai/prices" },
  { kw: "rent storage dubai",              owner: "/self-storage-dubai/monthly-storage" },
  { kw: "storage room dubai",              owner: "/self-storage-dubai/storage-room" },
  { kw: "self storage dubai",              owner: "/self-storage-dubai",
    allow: ["/self-storage-dubai/local-self-storage", "/self-storage-dubai/near-me"] },
  { kw: "storage dubai",                   owner: "/self-storage-dubai",
    // Every Silo 1 child's owned keyword contains this phrase.
    allow: ["/self-storage-dubai/"] },
  { kw: "personal storage dubai",          owner: "/personal-storage" },
  { kw: "business storage dubai",          owner: "/business-storage" },
  { kw: "moving and storage dubai",        owner: "/moving-storage-dubai" },
  { kw: "warehouse storage dubai",         owner: "/warehouse-storage-dubai" },
  { kw: "furniture storage dubai",         owner: "/furniture-storage" },
  { kw: "car storage dubai",               owner: "/car-storage" },
  { kw: "document storage dubai",          owner: "/document-storage" },
  { kw: "student storage dubai",           owner: "/student-storage" },
  // Terms these pages legitimately own. Without them the longest match on each
  // page falls back to the "storage dubai" head term and reports a page for
  // owning its own subject.
  { kw: "art storage dubai",               owner: "/art-storage" },
  { kw: "electronics storage dubai",       owner: "/electronics-storage" },
  { kw: "ecommerce storage dubai",         owner: "/ecommerce-storage" },
  { kw: "e-commerce storage dubai",        owner: "/ecommerce-storage" },
  { kw: "how self storage works",          owner: "/how-it-works" },
  { kw: "prohibited items",                owner: "/prohibited-items" },
  { kw: "storage size guide",              owner: "/self-storage-dubai/unit-sizes" },
  { kw: "best storage companies",          owner: "/top-10-storage-companies-dubai" },
  { kw: "storage companies in dubai",      owner: "/top-10-storage-companies-dubai" },
]

/**
 * Informational feeders. The plan is explicit that /guides/ pages must never
 * target a commercial keyword a silo page owns, but their titles naturally
 * carry "storage dubai" as a fragment. They are held to the duplicate-title
 * check and to specific owned terms — not to the head terms.
 */
const FEEDER = /^\/(top-10-storage-companies|dubai-cost-of-living|dubai-shopping-guide|moving-to-dubai|starting-business-dubai|top-places-dubai|guides)/

const norm = (s) => s.toLowerCase().replace(/[‘’'']/g, "'").replace(/\s+/g, " ").trim()
const path = (u) => new URL(u).pathname.replace(/\/$/, "") || "/"

function strip(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&[a-z]+;/g, " ")
}

async function pageFacts(url) {
  const res = await fetch(url, { redirect: "manual" })
  if (res.status >= 300 && res.status < 400) {
    return { url, redirect: res.headers.get("location"), status: res.status }
  }
  if (!res.ok) return { url, status: res.status, error: true }
  const html = await res.text()
  // The root layout appends "| SafeStorage Dubai" to every non-absolute title.
  // That suffix puts the head term "storage dubai" in almost every title on the
  // site as BRANDING, not as a claim on the keyword. Matching against it reports
  // most of the site as cannibalising, which is the opposite of useful — so the
  // brand suffix is removed before any keyword matching happens.
  const rawTitle = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""
  const title = rawTitle.replace(/\s*\|\s*SafeStorage\s+Dubai\s*$/i, "")
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? ""
  return { url, status: res.status, title: norm(strip(title)), h1: norm(strip(h1)) }
}

async function sitemapUrls() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => !u.includes("/ar/") && !u.includes("/blog/"))
}

async function mapLimit(items, limit, fn) {
  const out = []
  let i = 0
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const n = i++
        out[n] = await fn(items[n]).catch((e) => ({ url: items[n], error: true, message: e.message }))
      }
    })
  )
  return out
}

const urls = await sitemapUrls()
console.log(`auditing ${urls.length} URLs from ${BASE}/sitemap.xml\n`)

const pages = (await mapLimit(urls, CONCURRENCY, pageFacts)).filter((p) => p && p.title !== undefined)

/**
 * Head terms are substrings of dozens of legitimate titles — "storage dubai"
 * sits inside "Storage Dubai Marina" and inside every Silo 1 child's own term.
 * Flagging those produces noise, and a checker that cries wolf gets ignored.
 *
 * Two rules keep the signal real:
 *   1. LONGEST MATCH WINS. A page is judged on the most specific register
 *      keyword its title/H1 contains. If that one is its own, it passes —
 *      the shorter fragment it also contains is not a competing claim.
 *   2. Head terms are only a violation on COMMERCIAL SERVICE pages. A trust or
 *      location page carrying "Storage Dubai" in a brand-style title is not
 *      competing for the head term, it is naming the company.
 */
const HEAD_TERMS = new Set(["storage dubai", "self storage dubai"])
const HEAD_EXEMPT = /^\/(locations|blog|about|faq|contact|get-quote|testimonials|privacy-policy|terms-and-conditions|thank-you)/

const findings = []
for (const p of pages) {
  const own = path(p.url)

  // every register keyword this page's title or H1 contains
  const hits = REGISTER.map((r) => {
    const inTitle = p.title.includes(r.kw)
    const inH1 = p.h1.includes(r.kw)
    return inTitle || inH1 ? { r, where: [inTitle && "title", inH1 && "h1"].filter(Boolean).join("+") } : null
  }).filter(Boolean)

  if (!hits.length) continue

  // rule 1 — judge on the most specific claim only
  hits.sort((a, b) => b.r.kw.length - a.r.kw.length)
  const top = hits[0]
  const ownerPath = top.r.owner.replace(/\/$/, "")

  if (own === ownerPath) continue
  if ((top.r.allow || []).some((a) => (a.endsWith("/") ? own.startsWith(a.replace(/\/$/, "")) : own === a))) continue
  // rule 2 — head terms don't apply outside commercial service pages
  if (HEAD_TERMS.has(top.r.kw) && (HEAD_EXEMPT.test(own) || FEEDER.test(own))) continue

  findings.push({ page: own, kw: top.r.kw, owner: ownerPath, where: top.where })
}

// A second, register-free check: two live pages with a byte-identical <title>
// are competing whether or not the register knows about the phrase.
const byTitle = new Map()
for (const p of pages) {
  if (!p.title) continue
  byTitle.set(p.title, [...(byTitle.get(p.title) || []), path(p.url)])
}
const dupTitles = [...byTitle.entries()].filter(([, v]) => v.length > 1)

if (findings.length === 0) {
  console.log("PASS  no page claims a keyword owned by another page")
} else {
  console.log(`FAIL  ${findings.length} ownership violation(s)\n`)
  for (const f of findings) {
    console.log(`  ${f.page}`)
    console.log(`     claims "${f.kw}" in ${f.where} — owned by ${f.owner}`)
  }
}

console.log()
if (dupTitles.length === 0) {
  console.log("PASS  no two pages share a title tag")
} else {
  console.log(`FAIL  ${dupTitles.length} duplicated title tag(s)\n`)
  for (const [t, ps] of dupTitles) console.log(`  "${t.slice(0, 70)}"\n     ${ps.join("\n     ")}`)
}

const broken = pages.filter((p) => p.error || (p.status && p.status >= 400))
console.log()
console.log(`${broken.length === 0 ? "PASS" : "FAIL"}  ${broken.length} sitemap URL(s) not returning 200`)
for (const b of broken) console.log(`  ${path(b.url)} → ${b.status ?? b.message}`)

process.exit(findings.length || dupTitles.length || broken.length ? 1 : 0)
