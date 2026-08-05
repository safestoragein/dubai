// SINGLE SOURCE OF TRUTH for every externally-published fact about SafeStorage Dubai.
//
// Why this file exists
// --------------------
// An August 2026 SEO audit found the same fact published with different values
// across the site — price (12.60 vs 12.65), opening hours (three different sets,
// two of them on /contact alone), review count (487 / 500 / 6,700 / 10,000 /
// "1 Lakh+"), and CCTV retention (30 vs 90 days). Contradictions like these are
// visible to customers, damage E-E-A-T, and make the site unquotable for AI
// answer engines — which is a large part of why no commercial page ranks.
//
// RULE: if a number or claim about the business appears on more than one page,
// it belongs here. Import it — never retype it. Anything published in
// public/llms.txt and in lib/structured-data.ts must agree with these values.

/** Headline storage price. VAT-inclusive, per square foot, per month. */
export const PRICE_PER_SQFT_AED = "12.65"
export const PRICE_FROM = `From ${PRICE_PER_SQFT_AED} AED / sqft`
export const PRICE_FROM_VAT = `From ${PRICE_PER_SQFT_AED} AED / sqft (VAT-inclusive)`

/** Contact. Keep identical to the Google Business Profile record. */
export const PHONE = "+971505773388"
export const PHONE_DISPLAY = "+971 50 577 3388"
export const EMAIL = "support@safestorage.ae"

/**
 * The only address SafeStorage Dubai operates from. Publish this verbatim
 * everywhere — site, schema, llms.txt and GBP. Do not list service areas as
 * though they were facilities; claiming facilities you do not operate is a
 * Google Business Profile suspension risk.
 */
export const ADDRESS_STREET = "Building 23, Warehouse 5, DIP-1"
export const ADDRESS_FULL = `${ADDRESS_STREET}, Dubai, United Arab Emirates`
export const GEO = { latitude: "24.9903469", longitude: "55.1539764" } as const

/**
 * Office / collection hours. Facility access for existing customers is a
 * separate, explicitly-labelled claim — do not merge the two into "24/7",
 * which is what created the original contradiction.
 */
// Seven days a week, same hours — there is no separate Sunday schedule.
export const HOURS_DISPLAY = "Monday–Sunday 8 AM–8 PM"
export const HOURS_SHORT = "Mon–Sun 8 AM–8 PM"
export const HOURS_OPEN_24H = "08:00"
export const HOURS_CLOSE_24H = "20:00"
export const FACILITY_ACCESS_NOTE =
  "24/7 facility access available for existing customers on request"

/**
 * Reviews. This is a SafeStorage *group* figure covering all locations
 * worldwide, so it must always be labelled "globally" — never presented as a
 * UAE-only count. structured-data.ts must mark up this same number.
 */
export const RATING_VALUE = "4.9"
export const REVIEW_COUNT = "6700"
export const REVIEW_COUNT_DISPLAY = "6,700+"
// "worldwide", not "Globally" — the site used "Globally" as a bare adverb
// ("6700+ Reviews Globally", "customers across Globally"), which is not English
// and read as hedging on a .ae domain. The qualifier still has to be there: this
// is a group figure, not a UAE one.
export const REVIEWS_LABEL = `${RATING_VALUE}/5 (${REVIEW_COUNT_DISPLAY} reviews worldwide)`

/**
 * Customer count — global group figure. Written in international numbering:
 * the previous "1 Lakh+" is Indian numbering and read as a foreign operator on
 * a .ae domain targeting UAE customers.
 *
 * This is the ONLY customer figure. The site simultaneously published 500+,
 * 50,000+ and 100,000+ — twice on the same page — until 2026-08-05.
 */
export const CUSTOMERS_GLOBAL = "100,000+"
export const CUSTOMERS_LABEL = `${CUSTOMERS_GLOBAL} customers worldwide`

/**
 * Founding year. The site published three incompatible versions of this: the
 * footer said "since 2015", the schema declared foundingDate 2018 with "over 7
 * years", and a hero badge said "10+ Years Serving". 2015 is the value the
 * client's own SEO brief states, and it is the one consistent with "10+ years".
 */
export const FOUNDED_YEAR = "2015"
export const YEARS_SERVING = "10+"

/**
 * Security. CCTV coverage is published; the retention period deliberately is
 * NOT. The site previously claimed 30 days on /car-storage and 90 days
 * elsewhere; rather than pick a number, the claim was withdrawn sitewide on
 * 2026-08-05. Do not reintroduce a retention figure without confirming the
 * actual DVR retention with the facility first.
 */
export const CCTV_COVERAGE =
  "Multi-angle CCTV covers every corridor, entry point, loading area and storage zone."

/** Service promises stated on more than one page. */
export const RETRIEVAL_WINDOW = "24–48 hours"
export const DOCUMENT_RETRIEVAL = "with one week's advance notice"
export const PROCESS_STEP_COUNT = 4

/**
 * Blog byline. The visible byline read "SafeStorage Dubai Editorial Team" while
 * the BlogPosting schema declared author "SafeStorage Dubai" — a mismatch on
 * every post. Use this for both, so the rendered byline and the marked-up author
 * are always the same string.
 *
 * This is a corporate byline, not an E-E-A-T author signal. Replacing it with
 * named authors who have real profile pages, photos and credentials remains the
 * higher-value fix — it needs actual people, so it cannot be done in code alone.
 */
export const BLOG_AUTHOR = "SafeStorage Dubai Editorial Team"

/** Real social profiles. Must match the sameAs array in structured-data.ts. */
export const SOCIAL = {
  facebook: "https://www.facebook.com/safestoragedubai",
  instagram: "https://www.instagram.com/safestoragedubai",
  linkedin: "https://www.linkedin.com/company/safestorage-dubai",
} as const
