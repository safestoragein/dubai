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
export const HOURS_WEEKDAY = "Monday–Saturday 8 AM–8 PM"
export const HOURS_SUNDAY = "Sunday 10 AM–6 PM"
export const HOURS_DISPLAY = `${HOURS_WEEKDAY}, ${HOURS_SUNDAY}`
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
export const REVIEWS_LABEL = `${RATING_VALUE}/5 (${REVIEW_COUNT_DISPLAY} Reviews Globally)`

/**
 * Customer count — global group figure. Written in international numbering:
 * the previous "1 Lakh+" is Indian numbering and read as a foreign operator on
 * a .ae domain targeting UAE customers.
 */
export const CUSTOMERS_GLOBAL = "100,000+"

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

/** Real social profiles. Must match the sameAs array in structured-data.ts. */
export const SOCIAL = {
  facebook: "https://www.facebook.com/safestoragedubai",
  instagram: "https://www.instagram.com/safestoragedubai",
  linkedin: "https://www.linkedin.com/company/safestorage-dubai",
} as const
