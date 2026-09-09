// Derived blog metadata: read time and category.
//
// Both were previously hardcoded at every call site — `readTime: "5 min read"`
// and `categories: [blog.post_category || "Storage Tips"]` — which is why all 50
// posts on page 1 of /blog showed an identical read time and sat in a single
// category despite seven existing. Both are obvious template placeholders to a
// reader and give Google nothing to differentiate the posts by.

import { ADDRESS_FULL, EMAIL, HOURS_DISPLAY, PRICE_PER_SQFT_AED } from "@/lib/company-facts"

/**
 * Blog bodies and excerpts come from the safestorage.in feed, which is edited
 * outside this repo. A scan of all 269 rows found the SEO audit's factual
 * contradictions alive and well in feed content, even though every file in this
 * repo has been reconciled:
 *
 *   6 posts   superseded 12.60 AED/sqft rate
 *   2 posts   free Gmail address as the contact
 *   2 posts   the old "402-B Wing, Emarat Atrium Building" address
 *   21 posts  "1 lakh" customers (Indian numbering on a .ae domain)
 *   1 post    the retired Mon–Sat / short-Sunday opening hours
 *   216 posts link labels still wrapped in [square brackets] (687 labels)
 *   90 posts  links to service URLs that are now 301 redirects
 *
 * This is a safety net, not the fix — the rows should be corrected at source in
 * the blog admin. It exists so a superseded fact can never reach a visitor, and
 * so future drift in the feed cannot silently reintroduce a contradiction the
 * rest of the site has resolved.
 *
 * Deliberately NOT handled here: five posts carry an in-body author credit
 * ("The author: Ayesha Rahman", "About the Author: Sarah Al-Maktoum", …) that
 * contradicts the Editorial Team byline the page renders. Rewriting a bio by
 * regex would either delete editorial copy or put words in a named person's
 * mouth, so those five rows have to be reconciled in the blog admin — either
 * drop the in-body credit or give the post a real author profile.
 *
 * Every rule is deliberately narrow: the price only matches when followed by an
 * AED/dirham unit, and the URL rewrites only touch our own legacy paths.
 */
const FEED_RULES: Array<[RegExp, string]> = [
  // Price — only when immediately followed by a currency/unit, so prose that
  // happens to contain 12.60 for another reason is untouched.
  [/\b12\.60\b(?=\s*(?:AED|aed|dirham|Dirham|\/|per\s|<))/g, PRICE_PER_SQFT_AED],

  // Contact address
  [/safestoragedubai@gmail\.com/gi, EMAIL],

  // Superseded street address, in every phrasing found in the feed.
  [
    /402-?B\s+Wing[,\s]*(?:at\s+the\s+)?Emarat\s+Atrium\s+(?:Building|Bldg)[,\s]*(?:located\s+in\s+)?Dubai,?\s*UAE/gi,
    ADDRESS_FULL,
  ],

  // Indian numbering. Longest forms first so the shorter rules cannot strand a
  // fragment such as "100,000 (1,00,000+)".
  [/\b1\s*lakh\s*\(\s*1,00,000\+?\s*\)/gi, "100,000+"],
  [/\b1\s*lakh\s*\+/gi, "100,000+"],
  [/\b1\s*lakh\b/gi, "100,000"],
  // "over one lakh happy customers" — the spelled-out form the numeric rules miss.
  [/\bone\s+lakh\b/gi, "100,000"],

  // Opening hours. One post describes "daytime hours through Monday to Saturday
  // and shorter hours on Sunday", which is the schedule the whole site retired:
  // company-facts publishes one set of hours, seven days a week, and the schema
  // and Google Business Profile have to agree with it.
  [
    /daytime\s+hours\s+(?:through|from)\s+Monday\s+(?:to|through)\s+Saturday\s+and\s+shorter\s+hours\s+on\s+Sunday/gi,
    `the same hours every day, ${HOURS_DISPLAY}`,
  ],

  // NOTE: the square brackets around CTA link labels — "[Get Free Quotation]",
  // "[Here More Information]" — are deliberately LEFT ALONE. Two rules here used
  // to strip them, on the reading that they looked like unfilled placeholders.
  // They are not: the brackets are authored in the CMS and are meant to show.
  //
  // These rules exist to reconcile facts the site publishes differently from the
  // feed (price, address, email, numbering, hours) and to repoint legacy URLs.
  // Punctuation the editor typed is content, not a fact to reconcile, so it is
  // not rewritten here.

  // NOTE: legacy URL repointing is NOT done here any more. Substring rules on a
  // path are unsafe — see LEGACY_PATHS below for what they did to 90 links.

  // Upgrade our own domains to https. Third-party http links are left alone —
  // we cannot assume they support TLS.
  [/http:\/\/(www\.)?safestorage\.(ae|in)/gi, "https://safestorage.$2"],
]

/**
 * Legacy internal paths and where they live now.
 *
 * ⚠ These are WHOLE PATHS, matched exactly, and they are applied in ONE pass.
 * Both properties are load-bearing. The rules that used to live in FEED_RULES
 * were substring regexes such as
 *
 *     [/\/document-storage\b/g, "/business-storage-dubai/document-storage"]
 *
 * and `\b` only anchors the END of the match. So an ALREADY-CORRECT link —
 * /business-storage-dubai/document-storage — contains /document-storage and was
 * rewritten again, producing
 * /business-storage-dubai/business-storage-dubai/document-storage. Rules also
 * fed each other: /storage-dubai/vehicle-storage became
 * /personal-storage-dubai/car-storage, which a later /car-storage rule then
 * doubled. And because `\b` matches before a hyphen, /car-storage matched
 * inside /car-storage-dubai, and /business-storage inside the BLOG slug
 * /blog/business-storage-in-business-bay-….
 *
 * Measured on the live site, 2026-09-09: 90 internal links across 100+ pages
 * were 404 for exactly these three reasons — every one of them a link that was
 * correct in the feed until this file touched it.
 *
 * Rules for adding an entry:
 *   1. Key and value are complete paths, no trailing slash.
 *   2. The value must be a page that returns 200 — never another key, or the
 *      one-pass guarantee silently becomes a chain. assertNoChains() enforces
 *      this in development.
 *   3. Point at the FINAL destination, not at whatever 301s to it, so an
 *      editorial link never costs a redirect hop.
 */
const LEGACY_PATHS: Record<string, string> = {
  // ---- Silo 1: self storage -------------------------------------------
  "/services": "/self-storage-dubai",
  "/storage-dubai": "/self-storage-dubai",
  "/pricing": "/self-storage-dubai/prices",
  "/cheap-storage-dubai": "/self-storage-dubai/prices",
  "/storage-units-dubai": "/self-storage-dubai/storage-units",
  "/storage-size-guide": "/self-storage-dubai/unit-sizes",
  "/short-term-storage": "/self-storage-dubai/short-term",
  "/short-term-storage-dubai": "/self-storage-dubai/short-term",
  "/how-it-works": "/self-storage-dubai/how-it-works",
  "/prohibited-items": "/self-storage-dubai/prohibited-items",
  "/local-self-storage-dubai": "/self-storage-dubai/local-self-storage",
  "/self-storage-dubai/secure": "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/security-insurance": "/self-storage-dubai/secure-storage",
  "/self-storage-dubai/short-term-moving-renovation": "/self-storage-dubai/short-term",
  "/self-storage-dubai/storage-unit-sizes": "/self-storage-dubai/unit-sizes",
  "/self-storage-dubai/faqs": "/faq",

  // ---- Silo 2: personal storage ---------------------------------------
  "/personal-storage": "/personal-storage-dubai",
  "/self-storage-dubai/student-storage": "/personal-storage-dubai/student-storage",
  "/self-storage-dubai/furniture-storage": "/personal-storage-dubai/furniture-storage",
  "/self-storage-dubai/household-storage": "/personal-storage-dubai/household-storage",
  "/furniture-storage": "/personal-storage-dubai/furniture-storage",
  "/car-storage": "/personal-storage-dubai/car-storage",
  "/car-storage-dubai": "/personal-storage-dubai/car-storage",
  "/student-storage": "/personal-storage-dubai/student-storage",
  "/student-storage-dubai": "/personal-storage-dubai/student-storage",
  // "Box storage" is the luggage page's own subject: "Bags and boxes between a
  // checkout and a flight, or for months."
  "/box-storage-dubai": "/personal-storage-dubai/luggage-storage",
  "/art-storage": "/personal-storage-dubai/art-storage",
  "/electronics-storage": "/personal-storage-dubai/electronics-storage",
  "/expat-leaving-uae": "/personal-storage-dubai/expat-storage",

  // ---- Silo 3: business storage ---------------------------------------
  "/business-storage": "/business-storage-dubai",
  "/warehouse-storage": "/business-storage-dubai/warehouse-storage",
  "/warehouse-storage-dubai": "/business-storage-dubai/warehouse-storage",
  "/document-storage": "/business-storage-dubai/document-storage",
  "/ecommerce-storage": "/business-storage-dubai/ecommerce-fulfilment",

  // ---- Silo 4: moving --------------------------------------------------
  "/movers-dubai": "/moving-storage-dubai",
  "/international-relocation": "/moving-storage-dubai/international-relocation",

  // ---- Retired /storage-dubai/* and /services/* nesting -----------------
  "/storage-dubai/vehicle-storage": "/personal-storage-dubai/car-storage",
  "/storage-dubai/records-archival": "/business-storage-dubai/document-storage",
  "/storage-dubai/ecommerce-fulfilment": "/business-storage-dubai/ecommerce-fulfilment",
  "/storage-dubai/business-storage": "/business-storage-dubai",
  "/storage-dubai/warehouse-storage": "/business-storage-dubai/warehouse-storage",
  "/storage-dubai/long-term-storage": "/self-storage-dubai/long-term",
  "/storage-dubai/pricing-cost-guide": "/self-storage-dubai/prices",
  "/storage-dubai/self-vs-full-service": "/self-storage-dubai/how-it-works",
  "/services/climate-controlled": "/self-storage-dubai/climate-controlled",
  "/services/document-storage": "/business-storage-dubai/document-storage",
  "/services/ecommerce-storage": "/business-storage-dubai/ecommerce-fulfilment",
  "/services/furniture-storage": "/personal-storage-dubai/furniture-storage",
  "/services/vehicle-storage": "/personal-storage-dubai/car-storage",

  // ---- Guides lost the year from their slugs ---------------------------
  "/top-10-storage-companies-dubai": "/guides/best-storage-companies-dubai",
  "/top-10-storage-companies-uae": "/guides/best-storage-companies-uae",
  "/dubai-cost-of-living-2026": "/guides/dubai-cost-of-living",
  "/moving-to-dubai-2026": "/guides/moving-to-dubai",
  "/starting-business-dubai-2026": "/guides/starting-a-business-in-dubai",
  "/top-places-dubai-2026": "/guides/best-places-to-live-dubai",
  "/dubai-shopping-guide-2026": "/guides/dubai-shopping-guide",
  "/terms": "/terms-and-conditions",

  // ---- Areas moved under their emirate ---------------------------------
  "/locations/al-barsha": "/locations/dubai/al-barsha",
  "/locations/al-quoz": "/locations/dubai/al-quoz",
  "/locations/al-qusais": "/locations/dubai/al-qusais",
  "/locations/business-bay": "/locations/dubai/business-bay",
  "/locations/deira": "/locations/dubai/deira",
  "/locations/downtown": "/locations/dubai/downtown-dubai",
  "/locations/downtown-dubai": "/locations/dubai/downtown-dubai",
  "/locations/dubai-hills": "/locations/dubai/dubai-hills",
  "/locations/dubai-investment-park": "/locations/dubai/dubai-investment-park",
  "/locations/dubai-marina": "/locations/dubai/dubai-marina",
  "/locations/dubai-silicon-oasis": "/locations/dubai/dubai-silicon-oasis",
  "/locations/jumeirah": "/locations/dubai/jumeirah",
  "/locations/jumeirah-village-circle": "/locations/dubai/jumeirah-village-circle",
  "/locations/mirdif": "/locations/dubai/mirdif",
  "/locations/palm-jumeirah": "/locations/dubai/palm-jumeirah",
  "/locations/ras-al-khor": "/locations/dubai/ras-al-khor",
  "/locations/umm-ramool": "/locations/dubai/umm-ramool",

  // ---- Posts re-titled in the CMS --------------------------------------
  //
  // A post's slug is derived from its title and is never stored, so renaming a
  // post in the safestorage.in dashboard silently 404s every link anyone has
  // ever made to it — including the links in our own other posts. Six titles
  // had "climate-controlled" swapped for "secure" in one editing pass.
  // next.config.mjs 301s these too, for links we do not control.
  "/blog/storage-facilities-in-dubai-the-complete-guide-to-secure-flexible-and-secure-self-storage-solutions":
    "/blog/storage-facilities-in-dubai-the-complete-guide-to-secure-flexible-and-climate-controlled-self-storage-solutions",
  "/blog/climate-controlled-storage-dubai-the-ultimate-guide-to-protecting-your-valuables-from-extreme-heat-and-humidity":
    "/blog/secure-storage-dubai-the-ultimate-guide-to-protecting-your-valuables-from-extreme-heat-and-humidity",
  "/blog/climate-controlled-storage-in-dubai-why-its-essential-for-uae-heat-and-humidity":
    "/blog/secure-storage-in-dubai-why-its-essential-for-uae-heat-and-humidity",
  "/blog/personal-self-storage-dubai-marina-climate-controlled-units-near-you":
    "/blog/personal-self-storage-dubai-marina-secure-storage-near-you",
  "/blog/safe-shifting-in-dubai-movers-packers-and-climate-controlled-storage":
    "/blog/safe-shifting-in-dubai-movers-packers-and-secure-storage",
  // No surviving post keeps this title. The anchor text on the one link is
  // "safe storage in Dubai", which is what this post is.
  "/blog/safe-storage-in-dubai-climate-controlled-affordable-option":
    "/blog/rent-safe-storage-in-dubai-a-complete-guide-to-secure-storage-solutions",
  "/blog/short-term-storage-dubai-the-complete-guide-to-flexiblesecure-and-affordable-storage-solutions":
    "/blog/short-term-storage-dubai-a-complete-guide-for-storage-units",
  "/blog/103-short-term-storage-dubai-the-complete-guide-to-flexiblesecure-and-affordable-storage-solutions":
    "/blog/short-term-storage-dubai-a-complete-guide-for-storage-units",
  "/blog/personal-storage-dubai-for-newlyweds-merging-two-households":
    "/blog/personal-storage-dubai-when-it-is-your-things-not-a-whole-household",

  // Two posts whose commercial intent is now served by a silo page.
  "/blog/local-self-storage-the-ultimate-guide-to-the-best-storage-units-dubai-for-homes-businesses":
    "/self-storage-dubai/local-self-storage",
  "/blog/wine-storage-dubai-keeping-your-collection-safe-in-the-uae-climate":
    "/self-storage-dubai/climate-controlled",

  // Legacy "<post-id>-<slug>" links, and posts nginx already 301s after a
  // re-title. Listed so an editorial link goes straight to the final URL.
  "/blog/119-luxury-furniture-shifting-in-dubai-safe-storage-for-fine-wood-and-art":
    "/blog/luxury-furniture-shifting-in-dubai-safe-storage-for-fine-wood-and-art",
  "/blog/91-warehouse-vs-self-storage-dubai-a-professional-user-friendly-guide-for-smart-storage-decisions":
    "/blog/warehouse-vs-self-storage-dubai-a-professional-user-friendly-guide-for-smart-storage-decisions",
  "/blog/a-familys-guide-to-stress-free-storage-during-home-renovations":
    "/blog/smart-self-storage-solutions-for-stress-free-home-renovation-in-dubai",
  "/blog/cheap-storage-in-dubai-vs-premium-facilities-how-to-choose-a-moving-company-in-2026":
    "/blog/cheap-storage-units-near-me-vs-premium-storage-how-to-choose-a-mover-in-dubai-2026",
  "/blog/dubai-storage-companies-the-complete-professional-guide-to-safestorage-services":
    "/blog/storage-in-dubai-a-complete-guide-by-safestorage",
  "/blog/dubai-trusted-self-storage-company-safe-secure-storage-guide":
    "/blog/top-self-storage-companies-in-dubai-safe-clean-and-low-cost-space",
  "/blog/how-to-choose-the-right-moving-company-in-dubai-the-ultimate-guide-to-a-stress-free-transition":
    "/blog/moving-company-dubai-your-complete-guide-to-a-stress-free-relocation",
  "/blog/licensed-movers-in-dubai-stress-free-packing-and-secure-storage-services":
    "/blog/villa-movers-and-packers-in-dubai-trusted-packing-and-secure-storage-services",
  "/blog/local-home-shifting-services-in-al-barsha-safe-storage-for-home-renovation":
    "/blog/storage-in-al-barsha-complete-guide-for-safe-and-flexible-storage-solutions",
  "/blog/long-term-vs-short-term-storage-in-dubai-how-to-pick-the-best-storage-in-dubai":
    "/blog/short-term-vs-long-term-storage-in-dubai-which-do-you-need",
  "/blog/movers-in-dubai-the-expert-guide-to-stress-free-home-shifting":
    "/blog/moving-company-dubai-your-complete-guide-to-a-stress-free-relocation",
  "/blog/moving-and-storage-the-complete-guide-to-the-best-storage-units-dubai-for-stress-free-relocation":
    "/blog/moving-company-dubai-your-complete-guide-to-a-stress-free-relocation",
  "/blog/moving-packing-services-in-dubai-your-complete-guide-to-a-stress-free-move":
    "/blog/packing-and-moving-services-in-dubai-your-complete-guide-to-a-stress-free-relocation",
  "/blog/professional-movers-in-dubai-your-complete-guide-to-a-stress-free-move":
    "/blog/moving-company-dubai-your-complete-guide-to-a-stress-free-relocation",
}

/**
 * A destination must not itself be a key: the rewrite runs once per URL, so a
 * chain would leave the first hop in place and publish a redirect (or a 404)
 * that looks deliberate. Dev-only — this is a data mistake, not a runtime one.
 */
function assertNoChains(): void {
  const chained = Object.entries(LEGACY_PATHS).filter(([, to]) => to in LEGACY_PATHS)
  if (chained.length) {
    throw new Error(
      `LEGACY_PATHS destinations must be final, but these point at another key: ` +
        chained.map(([from, to]) => `${from} -> ${to}`).join(", "),
    )
  }
}
if (process.env.NODE_ENV !== "production") assertNoChains()

/**
 * True when /blog/<slug> is repointed somewhere else by LEGACY_PATHS.
 *
 * Used by the sitemap reconcile so a post that has been re-titled, withdrawn or
 * superseded by a silo page never appears in sitemap-blogs.xml at a URL that
 * only answers with a redirect.
 */
export function isRepointedBlogSlug(slug: string): boolean {
  return `/blog/${slug}` in LEGACY_PATHS
}

/** Our own origin, in the forms the feed actually uses. */
const OWN_ORIGIN = /^https?:\/\/(?:www\.)?safestorage\.ae/i

/**
 * Rewrite ONE url-ish token. Anything that is not one of our paths — a
 * third-party link, a mailto:, an anchor, a path we still serve — comes back
 * untouched.
 */
function rewriteUrlToken(url: string): string {
  const parts = url.match(/^((?:https?:\/\/(?:www\.)?safestorage\.ae)?)(\/[^?#\s"']*)([?#][^\s"']*)?$/i)
  if (!parts) return url
  const [, origin, rawPath, suffix = ""] = parts
  // Trailing slashes are cosmetic in the feed; the site serves the bare path.
  const path = rawPath.replace(/\/+$/, "")
  const target = LEGACY_PATHS[path]
  if (!target) return url
  return `${origin ? "https://safestorage.ae" : ""}${target}${suffix}`
}

/**
 * One editor left a closing quote off an href, so the next URL in the source
 * was swallowed into it and the site published
 * /locations/business-bayhttps://safestorage.ae/business-storage. The second
 * URL is the one that was meant; keep it.
 */
const GLUED_HREF = /https?:\/\/(?:www\.)?safestorage\.ae\/[^\s"'<>]*?(https?:\/\/(?:www\.)?safestorage\.ae\/)/gi

/**
 * Drop anchors whose entire content is whitespace.
 *
 * The CMS editor auto-links as you type, and a stray click leaves an <a> around
 * a single space or &nbsp;. The reader sees nothing — there is no text to click
 * — but the link is real, it is counted, and it can point anywhere. Two live
 * examples, both invisible on the page:
 *
 *   <a href="http://safestorage.secure"> </a>SafeStorage. Secure warehousing…
 *       — the editor built a "domain" out of the words either side of it.
 *   <a href="https://safestorage.ae/self-storage-dubai?utm_source=chatgpt.com">&nbsp;</a>
 *       — pasted from ChatGPT, tracking parameter and all, so an internal link
 *         arrived carrying a campaign tag that splits the page's analytics.
 *
 * Unwrapping keeps the whitespace exactly where it was, so nothing moves on the
 * page; only the anchor goes. Anchors around an <img> are untouched — they have
 * no text either, but they are real links a reader can click.
 */
const EMPTY_ANCHOR = /<a\b[^>]*>((?:&nbsp;|&#160;|\s)*)<\/a>/gi

export function stripEmptyAnchors(html: string): string {
  return html.replace(EMPTY_ANCHOR, "$1")
}

/**
 * Repoint every one of our own legacy URLs in a block of feed HTML.
 *
 * Only attribute values and whole absolute URLs are considered, so prose that
 * happens to read "our /pricing page" is never touched, and — because each URL
 * is looked up as a COMPLETE path — a link that is already correct can never be
 * rewritten into something that is not.
 */
export function rewriteFeedUrls(html: string): string {
  return html
    .replace(GLUED_HREF, "$1")
    .replace(/\b(href|src)=("|')([^"']*)\2/gi, (_m, attr, q, value) => `${attr}=${q}${rewriteUrlToken(value)}${q}`)
    .replace(/https?:\/\/(?:www\.)?safestorage\.ae\/[^\s"'<>)\]]*/gi, (u) => rewriteUrlToken(u))
}

export function normaliseFeedContent(text?: string | null): string {
  if (!text) return ""
  let out = text
  for (const [pattern, replacement] of FEED_RULES) out = out.replace(pattern, replacement)
  // After the https upgrade above, so an http:// legacy link is repointed too.
  // repairExternalLinks then fixes or unwraps outbound links that do not
  // resolve, and stripEmptyAnchors runs last: an anchor with no text goes
  // whatever its href turned out to be, so the passes cannot disagree about it.
  return stripEmptyAnchors(repairExternalLinks(rewriteFeedUrls(out)))
}

/** @deprecated Use normaliseFeedContent — kept so existing call sites keep working. */
export const normalisePrice = normaliseFeedContent

/**
 * External URLs in the feed that do not resolve, and what they were meant to be.
 *
 * Kept tiny and explicit on purpose: guessing at somebody else's citation is
 * worse than leaving it. Each entry here was checked by hand.
 */
const BROKEN_EXTERNAL: Record<string, string> = {
  // A one-character typo of our own domain — and the anchor text is literally
  // "afestorage.ae", so the author meant to name the site, not link elsewhere.
  "http://afestorage.ae": "https://safestorage.ae",
  // u.ae reorganised its business section; this exact page is a 404 and the
  // parent it moved under answers the same question.
  "https://u.ae/en/information-and-services/business/small-and-medium-enterprises":
    "https://u.ae/en/information-and-services/business",
}

/**
 * Anchors whose href has a host with no dot in it — `http://vehi`,
 * `http://jumeirah`.
 *
 * These are not links anyone typed. The CMS editor auto-links as you type, and
 * catching a partial word turns it into a "domain": "vehicle storage" became
 * `http://vehi`, the place name Jumeirah became `http://jumeirah`. A host with
 * no dot cannot resolve on the public internet, so there is nothing to repair —
 * the anchor comes off and the words stay, exactly as with an empty anchor.
 */
const HOSTLESS_ANCHOR = /<a\b[^>]*\bhref="https?:\/\/[^"./?#\s]+"[^>]*>([\s\S]*?)<\/a>/gi

export function repairExternalLinks(html: string): string {
  if (!html) return ""
  let out = html
  for (const [from, to] of Object.entries(BROKEN_EXTERNAL)) {
    out = out.split(`href="${from}"`).join(`href="${to}"`)
  }
  return out.replace(HOSTLESS_ANCHOR, "$1")
}

/**
 * Unwrap links to blog posts that are no longer served.
 *
 * A post is unpublished in the safestorage.in dashboard by flipping its status,
 * and that is the right way to retire one — but it does nothing to the OTHER
 * posts whose bodies link to it. Those links keep pointing at a URL that now
 * correctly 404s, and neither the author nor this repo learns about it.
 *
 * Observed 2026-09-09: post 238 was unpublished that morning and six live posts
 * went on linking to it, which is exactly what Semrush reported as "12 internal
 * links are broken" hours later. (Six of its twelve were listing pages, which
 * heal on their own when ISR revalidates; the six in post bodies do not.)
 *
 * The anchor TEXT is kept and only the <a> goes, so the sentence still reads as
 * the author wrote it — "see our guide to secure storage" simply stops being a
 * link. Deleting the sentence would be editing someone's copy; leaving the link
 * would be shipping a 404.
 *
 * A repointed slug counts as live: LEGACY_PATHS rewrites it to a real post, and
 * this runs before that rewrite.
 */
const BLOG_ANCHOR =
  /<a\b[^>]*\bhref="(?:https?:\/\/(?:www\.)?safestorage\.ae)?\/blog\/([^"#?]+)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi

export function unlinkDeadBlogLinks(html: string, isLive: (slug: string) => boolean): string {
  if (!html) return ""
  return html.replace(BLOG_ANCHOR, (whole, slug: string, inner: string) => {
    const clean = slug.replace(/\/+$/, "")
    return isLive(clean) || isRepointedBlogSlug(clean) ? whole : inner
  })
}

/**
 * The <title> for a post, guaranteed unique across the feed.
 *
 * `seo_title` is authored in the safestorage.in dashboard, which does not check
 * it for uniqueness — so two posts can and do carry the same one, and the site
 * then publishes two URLs declaring themselves the same page. Google picks one
 * and the other competes with it for the same query.
 *
 * When a seo_title is shared, the LOWEST post id keeps it (stable across
 * renders and across deploys — a rebuild must not reshuffle which post owns the
 * title) and the others fall back to their own headline, which is what
 * distinguishes them anyway. Giving both posts a distinct seo_title in the
 * dashboard remains the real fix; this stops the collision reaching Google in
 * the meantime.
 */
export function uniqueMetaTitle(post: any, rows: any[]): string {
  const seo = String(post?.seo_title ?? "").trim()
  const own = String(post?.title ?? "").trim()
  if (!seo) return own || "Blog"

  const id = Number(post?.post_id) || 0
  let owner = Infinity
  for (const r of rows) {
    if (String(r?.seo_title ?? "").trim() !== seo) continue
    if (String(r?.status ?? "1") !== "1") continue
    const rid = Number(r?.post_id) || 0
    if (rid < owner) owner = rid
  }

  return owner === Infinity || owner === id ? seo : own || seo
}

/**
 * Normalise a feed date into a valid ISO 8601 value for a <time dateTime="…">
 * attribute. The backend stores "2026-08-04 18:47:29" (space separator), which is
 * not valid ISO 8601 and is not a reliable machine-readable date for crawlers.
 */
export function toIsoDate(value?: string | null): string {
  if (!value) return ""
  const trimmed = value.trim()
  // Already ISO-ish — leave it alone.
  if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) return trimmed
  // "YYYY-MM-DD HH:MM:SS" -> "YYYY-MM-DDTHH:MM:SS"
  const m = trimmed.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}(?::\d{2})?)/)
  if (m) return `${m[1]}T${m[2]}`
  // Date only.
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed
  const parsed = new Date(trimmed)
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString()
}

/** Average adult reading speed for web prose. */
const WORDS_PER_MINUTE = 200

/**
 * Estimate read time from a post body. Accepts raw HTML (the feed stores the
 * article as HTML in `description`) or plain text. Falls back to "5 min read"
 * only when there is genuinely no body to measure.
 */
export function readTimeFromContent(content?: string | null): string {
  if (!content) return "5 min read"

  const text = content
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .trim()

  if (!text) return "5 min read"

  const words = text.split(/\s+/).filter(Boolean).length
  if (!words) return "5 min read"

  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`
}

/**
 * The seven categories the blog UI filters by. Feed rows arrive with free-text
 * or empty `post_category`, so map them onto this set rather than dropping
 * everything into "Storage Tips".
 */
export const BLOG_CATEGORIES = [
  "Storage Tips",
  "Moving & Relocation",
  "Business Storage",
  "Expat Life",
  "Home & Lifestyle",
  "Storage Costs",
  "Seasonal Storage",
] as const

const CATEGORY_RULES: Array<[RegExp, (typeof BLOG_CATEGORIES)[number]]> = [
  [/\b(cost|price|pricing|cheap|budget|afford|fee)\b/i, "Storage Costs"],
  [/\b(mover|moving|relocat|shifting|packers)\b/i, "Moving & Relocation"],
  [/\b(business|office|ecommerce|e-commerce|inventory|warehouse|corporate|startup)\b/i, "Business Storage"],
  [/\b(expat|abroad|overseas|leaving|repatriat|international)\b/i, "Expat Life"],
  [/\b(summer|winter|ramadan|eid|seasonal|monsoon|holiday)\b/i, "Seasonal Storage"],
  [/\b(declutter|home|apartment|villa|furniture|renovat|interior|lifestyle)\b/i, "Home & Lifestyle"],
]

/**
 * Resolve a post's category. Uses the feed value when it already matches a known
 * category, otherwise infers one from the title so posts spread across the seven
 * filters instead of collapsing into one.
 */
export function resolveCategory(rawCategory?: string | null, title?: string | null): string {
  const raw = (rawCategory || "").trim()
  if (raw) {
    const match = BLOG_CATEGORIES.find((c) => c.toLowerCase() === raw.toLowerCase())
    if (match) return match
  }

  const haystack = `${title || ""} ${raw}`
  for (const [pattern, category] of CATEGORY_RULES) {
    if (pattern.test(haystack)) return category
  }

  return "Storage Tips"
}
