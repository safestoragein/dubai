/**
 * SINGLE SOURCE OF TRUTH for which emirates SafeStorage operates a facility in,
 * and what address (if any) may be published for each.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The site previously hard-coded "we operate one warehouse, in DIP-1 Dubai" into
 * page copy, an FAQ answer and public/llms.txt. That became wrong the moment
 * Sharjah and Ajman opened, and it had to be corrected in six files by hand.
 * Facility facts now live here and every page reads them, so opening a location
 * — or publishing its address — is a change in ONE place.
 *
 * ADDING AN ADDRESS LATER
 * -----------------------
 * Fill in `address` for that facility and redeploy. Everything updates on its
 * own: the page copy switches from "we have a facility in Sharjah" to naming the
 * address, the FAQ answer changes, and llms.txt should be refreshed to match.
 * Until an address is filled in, pages state that the facility exists and say
 * nothing further — they do not invent or approximate a street address, and they
 * do not tell the customer that an address is being withheld.
 *
 * SCHEMA WARNING
 * --------------
 * Do NOT wire an address-less facility into JSON-LD PostalAddress. Schema.org
 * consumers and Google Business Profile expect a real, verifiable street
 * address; a placeholder is worse than an absent node. `schemaAddress` is
 * deliberately the only facility permitted into structured data, and it stays
 * Dubai until a real Sharjah/Ajman address exists here.
 */

export type Facility = {
  /** Emirate key. Used by pages to look themselves up. */
  key: "dubai" | "sharjah" | "ajman"
  /** Emirate name as published. */
  emirate: string
  /**
   * Full published address, or null when we operate there but are not yet
   * publishing the address. Null is a real state, not a TODO — pages render
   * correctly either way.
   */
  address: string | null
  /** Short label used mid-sentence, e.g. "our Sharjah warehouse". */
  shortLabel: string
}

export const FACILITIES: Facility[] = [
  {
    key: "dubai",
    emirate: "Dubai",
    address: "Building 23, Warehouse 5, DIP-1, Dubai, United Arab Emirates",
    shortLabel: "our Dubai warehouse",
  },
  {
    key: "sharjah",
    emirate: "Sharjah",
    address: null, // ← add the Sharjah address here and every page picks it up
    shortLabel: "our Sharjah warehouse",
  },
  {
    key: "ajman",
    emirate: "Ajman",
    address: null, // ← add the Ajman address here and every page picks it up
    shortLabel: "our Ajman warehouse",
  },
]

export const FACILITY_BY_KEY = Object.fromEntries(FACILITIES.map((f) => [f.key, f])) as Record<
  Facility["key"],
  Facility
>

/** Emirate names, e.g. ["Dubai", "Sharjah", "Ajman"]. */
export const FACILITY_EMIRATES = FACILITIES.map((f) => f.emirate)

/** Only the facilities whose address is publishable today. */
export const FACILITIES_WITH_ADDRESS = FACILITIES.filter((f) => f.address)

/**
 * The one facility allowed into JSON-LD / GBP. See SCHEMA WARNING above.
 * Always resolves to a facility that actually has an address.
 */
export const SCHEMA_FACILITY = FACILITIES_WITH_ADDRESS[0] ?? FACILITY_BY_KEY.dubai

/** "Dubai, Sharjah and Ajman" — for prose. Adapts as facilities are added. */
export function facilityListSentence(names: string[] = FACILITY_EMIRATES): string {
  if (names.length === 0) return ""
  if (names.length === 1) return names[0]
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`
}

/**
 * One sentence describing where a given emirate's goods are stored, correct
 * whether or not that emirate's address has been published yet.
 *
 * Used by every location page so the claim can never drift between them.
 */
export function storageLocationSentence(key: Facility["key"]): string {
  const f = FACILITY_BY_KEY[key]
  if (f?.address) {
    return `Your belongings are stored at our ${f.emirate} facility, ${f.address}.`
  }
  if (f) {
    // No address yet. State the facility plainly and stop — do NOT explain that
    // the address is unpublished. Narrating the omission draws attention to it
    // and reads as evasive; a customer who wants the address asks, and the team
    // gives it. Fill `address` in above and this becomes the named-address line.
    return `Your belongings are stored at our ${f.emirate} facility.`
  }
  return `Your belongings are stored at ${SCHEMA_FACILITY.address}.`
}

/** True when we operate in this emirate at all. */
export function hasFacility(key: string): boolean {
  return Boolean(FACILITY_BY_KEY[key as Facility["key"]])
}
