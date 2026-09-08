import type { Faq } from "@/lib/emirate-faqs"

/**
 * The area/emirate model behind Silo 4.
 *
 * WHY THIS GENERALISES lib/sharjah-areas.ts
 * -----------------------------------------
 * Sharjah's fifteen district pages already worked exactly the right way: one
 * data file of genuinely per-district copy, one shared renderer. What did not
 * generalise was that both were hard-coded to Sharjah — the renderer wrote
 * "Sharjah" into the breadcrumb, the FAQ localiser and the disclosure sentence.
 *
 * Adding Dubai's thirty areas, Abu Dhabi's ten and Ajman's twelve by copying
 * that file three times would have produced four renderers that drift. So the
 * emirate became data too, and `SharjahArea` became `Area`.
 *
 * DOORWAY-PAGE RULE, RESTATED
 * ---------------------------
 * Sixty-seven near-identical pages is precisely the pattern Google's spam
 * policy names. Every area entry must vary EIGHT things, and at least 400 of
 * roughly 900 words must be unique to that area:
 *
 *   1. named sub-communities        5. the dominant customer situation
 *   2. a named landmark             6. drive time and route
 *   3. dominant building type       7. one area-specific access constraint
 *   4. typical unit size demanded   8. one local seasonality note
 *
 * If a future area is added, write it that way. Do NOT clone a neighbour and
 * find-and-replace the place name — that is the failure mode this whole file
 * exists to prevent, and it is detectable.
 */
export type Area = {
  slug: string
  /** Display name, as published in the service-area list. */
  name: string
  /** Appended after the H1's "Storage in {name}" — keeps titles from colliding. */
  headline: string
  /** Hero paragraph. */
  blurb: string
  /** Two paragraphs of genuinely local copy. Not a translated template. */
  character: [string, string]
  uses: { icon: string; title: string; desc: string }[]
  /** Two questions specific to this district, before the canonical ten. */
  faqs: Faq[]
  /** Slugs of neighbouring areas, for the internal-link grid. */
  nearby: string[]
  /** Extra keyword targets beyond the generated defaults. */
  keywords: string
}

export type EmirateDef = {
  /** URL segment: /locations/{slug}/ */
  slug: string
  /** Display name. */
  name: string
  /**
   * lib/facilities.ts key, or null when we collect here but store elsewhere.
   *
   * ⚠ This is the ONLY place a page learns whether we have a warehouse in an
   * emirate, and it must match lib/facilities.ts. Abu Dhabi and the Northern
   * Emirates are collection-only and their copy says so plainly — claiming a
   * facility we do not operate is a Google Business Profile suspension risk,
   * and it is also just untrue.
   */
  facilityKey: "dubai" | "sharjah" | "ajman" | null
  /** Two well-known districts, for the canonical FAQ set. */
  sampleDistricts: [string, string]
  /** The university this emirate's students come from. */
  university: string
  /**
   * Areas rendered from this data by the emirate's [area] segment.
   * May be empty for a hub that has no district pages yet.
   */
  areas: Area[]
  /**
   * Areas whose page is a HAND-WRITTEN route file rather than data.
   *
   * Dubai's original sixteen district pages were written individually before
   * the silo existed and were moved under /locations/dubai/ with their copy
   * intact. Regenerating them from a template to make the data model tidier
   * would have thrown away real content — and, for the ones that rank, real
   * rankings. They are listed here so the hub still lists them and `nearby`
   * still resolves to them, while the [area] segment leaves them alone.
   */
  staticAreas?: { slug: string; name: string; blurb: string }[]
  /** Hub-page copy. */
  hub: {
    title: string
    description: string
    keywords: string
    h1: string
    blurb: string
    /** Two paragraphs of emirate-level copy. */
    intro: [string, string]
    /** Two or three emirate-specific FAQs, before the canonical ten. */
    faqs: Faq[]
  }
}
