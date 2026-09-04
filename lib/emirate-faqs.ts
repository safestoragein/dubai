import {
  PRICE_PER_SQFT_AED,
  RETRIEVAL_WINDOW,
  CCTV_COVERAGE,
  FACILITY_ACCESS_NOTE,
} from "@/lib/company-facts"
import { storageLocationSentence } from "@/lib/facilities"

/**
 * The canonical ten emirate FAQs, per the Sharjah brief.
 *
 * WHY IT IS GENERATED, NOT COPY-PASTED
 * ------------------------------------
 * These ten run on the city page, all fifteen Sharjah district pages, the
 * moving-storage page and the whole Ajman set. Written once here they cannot
 * drift between pages, and — critically — the same array feeds both the
 * rendered <section> and the FAQPage JSON-LD, so the markup can never claim a
 * question the page does not actually show.
 *
 * `district` localises Q1/Q2/Q3 so the district pages are not fifteen copies of
 * one block. Facility wording comes from lib/facilities.ts, so if a warehouse
 * opens or an address is published these answers follow automatically.
 *
 * ⚠ Q8 (insurance) deliberately does NOT state a cover level or a policy.
 * Nothing in company-facts.ts records one, and an invented liability figure is a
 * commercial promise the business would be held to. Supply the real policy and
 * this answer should be rewritten to state it plainly.
 */

export type Faq = { q: string; a: string }

type Opts = {
  /** "Sharjah" | "Ajman" */
  emirate: string
  /** lib/facilities.ts key, or null for a collection-only emirate. */
  facilityKey: "dubai" | "sharjah" | "ajman" | null
  /** Two well-known districts, e.g. ["Al Nahda", "Al Majaz"]. */
  sampleDistricts: [string, string]
  /** The university this emirate's students come from. */
  university: string
  /** Set on a district page to localise the wording. */
  district?: string
}

export function emirateFaqs({
  emirate,
  facilityKey,
  sampleDistricts,
  university,
  district,
}: Opts): Faq[] {
  const here = district ? `${district}` : emirate
  const storage = storageLocationSentence(facilityKey)
  const hasLocalFacility = facilityKey !== null

  return [
    {
      q: `Do you have a storage facility in ${emirate}, or is my stuff stored in Dubai?`,
      a: hasLocalFacility
        ? `We operate a warehouse in ${emirate}, so what we collect in the emirate is stored in the emirate rather than driven to Dubai and back. ${storage} What we run on top of that is the collection service: our crew comes to your address, wraps and loads, and takes everything to the facility.`
        : `Your things do not stay in ${emirate}. We operate the collection and delivery service here and store at our nearest facility. ${storage} If you specifically want a unit in ${emirate} you can drive to, a local self-storage yard suits you better and we would rather say so now.`,
    },
    {
      q: `How much does pickup from ${emirate} cost?`,
      a: `It is quoted on the actual job — your address in ${here}, how the access works (lift, stairs, parking) and how much there is to move. We do not price transport from a table, because a ground-floor flat with parking outside and a ninth floor with a booked service lift are not the same job. You get the transport figure and the storage figure before anything is booked, and the number you are given is the number you pay. Storage itself is ${PRICE_PER_SQFT_AED} AED per square foot per month, VAT included.`,
    },
    {
      q: `How long does collection from ${sampleDistricts[0]} or ${sampleDistricts[1]} take?`,
      a: `What decides it is access, not distance. A villa or ground-floor flat with somewhere to park is quick; a high floor in a tower where the service lift has to be booked and shared with other residents takes longer, and that is the single biggest variable in ${emirate}. When we quote we give you a time window for the day and the crew confirms on arrival. Packing loose items into boxes yourself beforehand is the one thing that reliably shortens it.`,
    },
    {
      q: `I'm moving from ${emirate} to Dubai — can you hold my things between leases?`,
      a: `Yes, and it is the most common reason people here call us. We empty the property on the day you hand the keys back, hold everything for however long the gap runs, and deliver to the new address once you can receive it. Billing is monthly on the space used with no minimum term, so a twelve-day gap costs twelve days, not a month. If the handover slips again you simply tell us a new date. It works the same in reverse coming into ${emirate}.`,
    },
    {
      q: `Can I visit my items? How much notice do you need?`,
      a: `Yes — access is arranged on request rather than by turning up, because your things are stored in a working warehouse rather than a unit you hold a key to. Tell us when you would like to come and we book a slot and have your items ready. ${FACILITY_ACCESS_NOTE}. If you only need something back rather than to see it, delivery to your door is usually the easier answer and is normally arranged within ${RETRIEVAL_WINDOW}.`,
    },
    {
      q: `What's the minimum storage period and is there a lock-in?`,
      a: `There is no minimum period and no lock-in. Storage is billed month to month on the floor space your items actually occupy, and you can end it whenever you like with no early-termination penalty. A fortnight is charged as a fortnight. There is equally no maximum — some customers store for years — and you can add to or take from what is stored without renegotiating anything.`,
    },
    {
      q: `Do you store during ${emirate} villa or flat renovations?`,
      a: `Yes, and it is one of the steadier reasons we get called here. We can take the whole property or work room by room as the job moves through it, collecting in stages and delivering back the same way, so you are never paying to store more than you need to. Each collection is quoted before it happens. Tell us roughly how long the work is expected to run — and expect it to overrun, which costs you nothing extra because there is no fixed end date.`,
    },
    {
      q: `Is my furniture insured while in storage?`,
      a: `Ask us for the current cover position in writing before you book, and tell us if you are storing anything high-value — art, antiques, instruments, specialist equipment — so it is addressed on your quote rather than assumed. What we can state plainly is how your things are kept: wrapped before they leave your property, stored off the floor inside a covered warehouse rather than a yard or a container, and logged on a signed inventory at collection so there is a written record of every item. ${CCTV_COVERAGE}`,
    },
    {
      q: `Do you pack, or do I need to pack myself?`,
      a: `We wrap and load. Furniture is wrapped before it leaves the property, and our crew carries it and handles the lift booking and loading bay — you do not hire a van, carry anything, or negotiate with building management. What is worth doing yourself is boxing up small loose items beforehand: it makes the collection faster and cheaper, because you are billed on the space your things occupy and packed boxes stack where loose belongings do not.`,
    },
    {
      q: `Can students at ${university} store over the summer?`,
      a: `Yes, and it is what the end of each term looks like here. Paying to hold a room over a summer you are not in the country for costs far more than storing what is in it. We collect from the residence at the end of term, hold the boxes over the break, and deliver back when the new year starts — to a different address if you have moved. There is no minimum term, so a three-month summer is charged as three months. Book the collection date early: end of term is the busiest fortnight of the year and slots go quickly.`,
    },
  ]
}

/** Schema.org FAQPage node built from the very same array the page renders. */
export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
