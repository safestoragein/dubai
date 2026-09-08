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
  { kw: "personal storage dubai",          owner: "/personal-storage-dubai" },
  { kw: "business storage dubai",          owner: "/business-storage-dubai" },
  { kw: "moving and storage dubai",        owner: "/moving-storage-dubai" },
  { kw: "warehouse storage dubai",         owner: "/business-storage-dubai/warehouse-storage" },
  { kw: "furniture storage dubai",         owner: "/personal-storage-dubai/furniture-storage" },
  { kw: "car storage dubai",               owner: "/personal-storage-dubai/car-storage" },
  { kw: "document storage dubai",          owner: "/business-storage-dubai/document-storage" },
  { kw: "student storage dubai",           owner: "/personal-storage-dubai/student-storage" },
  // Terms these pages legitimately own. Without them the longest match on each
  // page falls back to the "storage dubai" head term and reports a page for
  // owning its own subject.
  { kw: "art storage dubai",               owner: "/personal-storage-dubai/art-storage" },
  { kw: "electronics storage dubai",       owner: "/personal-storage-dubai/electronics-storage" },
  { kw: "ecommerce storage dubai",         owner: "/business-storage-dubai/ecommerce-fulfilment" },
  { kw: "e-commerce storage dubai",        owner: "/business-storage-dubai/ecommerce-fulfilment" },
  { kw: "how self storage works",          owner: "/self-storage-dubai/how-it-works" },
  { kw: "prohibited items",                owner: "/self-storage-dubai/prohibited-items" },
  { kw: "storage size guide",              owner: "/self-storage-dubai/unit-sizes" },
  { kw: "best storage companies",          owner: "/guides/best-storage-companies-dubai" },
  { kw: "storage companies in dubai",      owner: "/guides/best-storage-companies-dubai" },

  // ---- Silo 1, the pages that completed the hub -------------------------
  { kw: "climate controlled storage dubai", owner: "/self-storage-dubai/climate-controlled" },
  { kw: "safe and secure storage",          owner: "/self-storage-dubai/secure-storage" },
  { kw: "secure storage dubai",             owner: "/self-storage-dubai/secure-storage" },
  { kw: "24 hour storage dubai",            owner: "/self-storage-dubai/24-hour-access" },
  { kw: "storage insurance dubai",          owner: "/self-storage-dubai/insurance" },
  { kw: "self storage vs warehouse",        owner: "/self-storage-dubai/vs-warehouse-rental" },
  { kw: "storage size calculator",          owner: "/self-storage-dubai/storage-calculator" },
  { kw: "monthly storage dubai",            owner: "/self-storage-dubai/monthly-storage" },

  // ---- Silo 2 -----------------------------------------------------------
  { kw: "household storage dubai",          owner: "/personal-storage-dubai/household-storage" },
  { kw: "apartment storage dubai",          owner: "/personal-storage-dubai/apartment-storage" },
  { kw: "villa storage dubai",              owner: "/personal-storage-dubai/villa-storage" },
  { kw: "bike storage dubai",               owner: "/personal-storage-dubai/motorbike-storage" },
  { kw: "motorbike storage dubai",          owner: "/personal-storage-dubai/motorbike-storage" },
  { kw: "luggage storage dubai",            owner: "/personal-storage-dubai/luggage-storage" },
  { kw: "storage for expats dubai",         owner: "/personal-storage-dubai/expat-storage" },
  { kw: "seasonal storage dubai",           owner: "/personal-storage-dubai/seasonal-storage" },
  { kw: "storage during renovation",        owner: "/personal-storage-dubai/renovation-storage" },
  { kw: "sports equipment storage",         owner: "/personal-storage-dubai/sports-equipment-storage" },
  { kw: "clothes storage dubai",            owner: "/personal-storage-dubai/wardrobe-storage" },

  // ---- Silo 3 -----------------------------------------------------------
  { kw: "archive storage dubai",            owner: "/business-storage-dubai/archive-storage" },
  { kw: "fulfilment centre dubai",          owner: "/business-storage-dubai/ecommerce-fulfilment" },
  { kw: "3pl dubai",                        owner: "/business-storage-dubai/3pl-services" },
  { kw: "inventory storage dubai",          owner: "/business-storage-dubai/inventory-storage" },
  { kw: "pallet storage dubai",             owner: "/business-storage-dubai/pallet-storage" },
  { kw: "retail storage dubai",             owner: "/business-storage-dubai/retail-stock-storage" },
  { kw: "office storage dubai",             owner: "/business-storage-dubai/office-relocation-storage" },
  { kw: "equipment storage dubai",          owner: "/business-storage-dubai/equipment-storage" },
  { kw: "event storage dubai",              owner: "/business-storage-dubai/exhibition-storage" },
  { kw: "exhibition storage dubai",         owner: "/business-storage-dubai/exhibition-storage" },
  { kw: "free zone company storage",        owner: "/business-storage-dubai/free-zone-storage" },

  // ---- Silo 4. The head term for the emirate hub, per §7 of the plan:
  //      `self storage facilities in dubai` (1,600/mo) belongs to
  //      /locations/dubai, NOT to /self-storage-dubai.
  { kw: "self storage facilities in dubai", owner: "/locations/dubai" },
  { kw: "self storage abu dhabi",           owner: "/locations/abu-dhabi" },
  { kw: "storage abu dhabi",                owner: "/locations/abu-dhabi" },
  { kw: "self storage sharjah",             owner: "/locations/sharjah" },
  { kw: "self storage ajman",               owner: "/locations/ajman" },
  { kw: "northern emirates self storage",   owner: "/locations/ras-al-khaimah" },
  { kw: "self storage fujairah",            owner: "/locations/fujairah" },
  { kw: "self storage umm al quwain",       owner: "/locations/umm-al-quwain" },
  { kw: "self storage al ain",              owner: "/locations/al-ain" },

  // ---- Silo 5 -----------------------------------------------------------
  { kw: "international relocation dubai",   owner: "/moving-storage-dubai/international-relocation" },
  { kw: "villa movers dubai",               owner: "/moving-storage-dubai/villa-movers" },
  { kw: "apartment movers dubai",           owner: "/moving-storage-dubai/apartment-movers" },
  { kw: "office movers dubai",              owner: "/moving-storage-dubai/office-movers" },
  { kw: "packing services dubai",           owner: "/moving-storage-dubai/packing-services" },
  { kw: "leaving uae checklist",            owner: "/moving-storage-dubai/leaving-uae-checklist" },

  // ---- Guides -----------------------------------------------------------
  { kw: "how much does storage cost in dubai", owner: "/guides/how-much-does-storage-cost-in-dubai" },
  { kw: "storage packing checklist",        owner: "/guides/storage-packing-checklist" },
  { kw: "dubai tenancy calendar",           owner: "/guides/dubai-tenancy-and-moving-calendar" },
  { kw: "dubai cost of living",             owner: "/guides/dubai-cost-of-living" },
  { kw: "moving to dubai",                  owner: "/guides/moving-to-dubai" },
  { kw: "starting a business in dubai",     owner: "/guides/starting-a-business-in-dubai" },
  { kw: "best places to live in dubai",     owner: "/guides/best-places-to-live-dubai" },
  { kw: "dubai shopping guide",             owner: "/guides/dubai-shopping-guide" },
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
