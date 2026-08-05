// Derived blog metadata: read time and category.
//
// Both were previously hardcoded at every call site — `readTime: "5 min read"`
// and `categories: [blog.post_category || "Storage Tips"]` — which is why all 50
// posts on page 1 of /blog showed an identical read time and sat in a single
// category despite seven existing. Both are obvious template placeholders to a
// reader and give Google nothing to differentiate the posts by.

import { ADDRESS_FULL, EMAIL, PRICE_PER_SQFT_AED } from "@/lib/company-facts"

/**
 * Blog bodies and excerpts come from the safestorage.in feed, which is edited
 * outside this repo. A scan of all 269 rows found the SEO audit's factual
 * contradictions alive and well in feed content, even though every file in this
 * repo has been reconciled:
 *
 *   8 posts   superseded 12.60 AED/sqft rate
 *   2 posts   free Gmail address as the contact
 *   2 posts   the old "402-B Wing, Emarat Atrium Building" address
 *   18 posts  "1 lakh" customers (Indian numbering on a .ae domain)
 *   90 posts  links to service URLs that are now 301 redirects
 *
 * This is a safety net, not the fix — the rows should be corrected at source in
 * the blog admin. It exists so a superseded fact can never reach a visitor, and
 * so future drift in the feed cannot silently reintroduce a contradiction the
 * rest of the site has resolved.
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

  // Legacy service URLs. These now 301, so links still work, but pointing
  // editorial links straight at the canonical target avoids a redirect hop on
  // every one of them.
  [/\/storage-dubai\/vehicle-storage/g, "/car-storage"],
  [/\/storage-dubai\/records-archival/g, "/document-storage"],
  [/\/storage-dubai\/ecommerce-fulfilment/g, "/ecommerce-storage"],
  [/\/self-storage-dubai\/student-storage/g, "/student-storage"],
  [/\/self-storage-dubai\/furniture-storage/g, "/furniture-storage"],
  [/\/self-storage-dubai\/household-storage/g, "/personal-storage"],
  [/\/self-storage-dubai\/how-it-works/g, "/how-it-works"],

  // Upgrade our own domains to https. Third-party http links are left alone —
  // we cannot assume they support TLS.
  [/http:\/\/(www\.)?safestorage\.(ae|in)/gi, "https://safestorage.$2"],
]

export function normaliseFeedContent(text?: string | null): string {
  if (!text) return ""
  let out = text
  for (const [pattern, replacement] of FEED_RULES) out = out.replace(pattern, replacement)
  return out
}

/** @deprecated Use normaliseFeedContent — kept so existing call sites keep working. */
export const normalisePrice = normaliseFeedContent

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
