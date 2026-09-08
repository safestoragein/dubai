import type { EmirateDef } from "./types"

/**
 * THE REMAINING EMIRATES — Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.
 *
 * These four are HUBS WITHOUT DISTRICT PAGES, and that is deliberate rather
 * than unfinished. `northern emirates self storage` is 260/mo at KD 32 and the
 * site sat at #55 for it with no page at all; a single well-written emirate hub
 * is worth having. Fifteen district pages each would not be — there is no
 * search volume behind them, and inventing thin area pages to fill a tree is
 * exactly the doorway-page pattern the rest of Silo 4 is written to avoid.
 *
 * ⚠ ALL FOUR ARE COLLECTION-ONLY. `facilityKey` is null on every one of them,
 * matching lib/facilities.ts, which lists warehouses in Dubai, Sharjah and
 * Ajman. Their copy says so plainly. Al Ain is part of the emirate of Abu
 * Dhabi but is treated as its own hub here because it is a separate city with
 * its own search demand and a genuinely different drive.
 */

const collectionOnlyFaq = (name: string) => ({
  q: `Do you have a storage facility in ${name}?`,
  a: `No. We operate the collection and delivery service in ${name} and store at our nearest facility — our warehouses are in Dubai, Sharjah and Ajman. If you specifically want a unit in ${name} that you can drive to and visit unannounced, a local yard suits you better and we would rather say so than sell you the wrong thing.`,
})

const priceFaq = {
  q: "How much does it cost?",
  a: "AED 12.65 per square foot per month, VAT included, on the floor space your goods actually occupy — the same rate everywhere we operate. Transport is quoted separately on your address and how the access works, and both numbers are agreed before anything is booked.",
}

export const RAS_AL_KHAIMAH: EmirateDef = {
  slug: "ras-al-khaimah",
  name: "Ras Al Khaimah",
  facilityKey: null,
  sampleDistricts: ["Al Nakheel", "Al Hamra"],
  university: "the American University of Ras Al Khaimah",
  areas: [],
  hub: {
    title: "Self Storage Ras Al Khaimah | Northern Emirates Collection",
    description:
      "Self storage for Ras Al Khaimah. We collect from your address across RAK, wrap and load, and store at our nearest facility from AED 12.65 per sq ft per month.",
    keywords:
      "self storage ras al khaimah, storage rak, northern emirates self storage, storage units ras al khaimah, furniture storage rak",
    h1: "Self Storage in Ras Al Khaimah",
    blurb:
      "We collect from across Ras Al Khaimah — Al Nakheel, Al Hamra, Mina Al Arab, Al Marjan and the inland districts — wrap and load at your address, and store your things indoors.",
    intro: [
      "Ras Al Khaimah is a long way from the main storage market, and that is the whole reason this service is useful here. Local options are limited, the drive to a Dubai or Sharjah yard is not a Sunday errand, and the alternative most people fall back on is leaving things with family or paying rent on a property they are not using.",
      "We collect from your RAK address, wrap and load, and store at our nearest facility. Being straight about that: we do not have a warehouse in Ras Al Khaimah, so goods travel to Dubai, Sharjah or Ajman. Retrieval back to a RAK address is arranged with notice rather than same-day, and if unaccompanied access matters more to you than the collection, a local unit is the better fit.",
    ],
    faqs: [
      collectionOnlyFaq("Ras Al Khaimah"),
      priceFaq,
      {
        q: "How long does retrieval take to a RAK address?",
        a: "Longer than the 24 to 48 hours we quote inside Dubai, because of the drive. Tell us at booking if you expect to need things back regularly and we will be realistic about the timings rather than optimistic.",
      },
    ],
  },
}

export const FUJAIRAH: EmirateDef = {
  slug: "fujairah",
  name: "Fujairah",
  facilityKey: null,
  sampleDistricts: ["Fujairah City", "Dibba"],
  university: "the University of Fujairah",
  areas: [],
  hub: {
    title: "Self Storage Fujairah | East Coast Collection & Storage",
    description:
      "Self storage for Fujairah and the east coast. We collect from your address, wrap and load, and store at our nearest facility from AED 12.65 per sq ft per month.",
    keywords:
      "self storage fujairah, storage fujairah, east coast storage uae, furniture storage fujairah, storage dibba",
    h1: "Self Storage in Fujairah",
    blurb:
      "We collect from Fujairah City, Dibba and the east coast, wrap and load at your address, and store your things indoors at our nearest facility.",
    intro: [
      "Fujairah sits on the other side of the Hajar mountains from the rest of the country, which is the practical fact that shapes everything about storage here. There is very little local provision, and the drive to Dubai or Sharjah is a real journey rather than a trip across town.",
      "That makes the collection service more useful here than almost anywhere, and it also makes planning matter more. We collect from your Fujairah address and store at our nearest facility — we do not operate a warehouse on the east coast. Collections and retrievals are scheduled as full round trips rather than fitted between other jobs, so give us a little more notice than you would in Dubai and we will give you a realistic date rather than an optimistic one.",
    ],
    faqs: [
      collectionOnlyFaq("Fujairah"),
      priceFaq,
      {
        q: "How much notice do you need for a Fujairah collection?",
        a: "More than in Dubai, because the drive over the mountains means the job is planned as a full round trip rather than slotted between others. Give us several days where you can, and tell us early if your date is fixed.",
      },
    ],
  },
}

export const UMM_AL_QUWAIN: EmirateDef = {
  slug: "umm-al-quwain",
  name: "Umm Al Quwain",
  facilityKey: null,
  sampleDistricts: ["Al Salamah", "Al Raas"],
  university: "the University of Umm Al Quwain",
  areas: [],
  hub: {
    title: "Self Storage Umm Al Quwain | Collected From Your Door",
    description:
      "Self storage for Umm Al Quwain. We collect from your address, wrap and load, and store at our nearest facility from AED 12.65 per sq ft per month.",
    keywords:
      "self storage umm al quwain, storage umm al quwain, uaq storage, furniture storage umm al quwain",
    h1: "Self Storage in Umm Al Quwain",
    blurb:
      "We collect from across Umm Al Quwain — Al Salamah, Al Raas, the old town and the newer inland districts — wrap and load at your address, and store your things indoors.",
    intro: [
      "Umm Al Quwain is the quietest of the emirates and it has almost no commercial storage provision of its own, which leaves residents with a choice between a long drive and doing without. The collection service removes that choice.",
      "We come to your UAQ address, wrap and load, and store at our nearest facility — our warehouses are in Dubai, Sharjah and Ajman rather than here. Ajman is the closest of the three, which makes UAQ one of the more practical collection-only areas we serve: the drive is short enough that retrieval timings are reasonable rather than a genuine constraint.",
    ],
    faqs: [
      collectionOnlyFaq("Umm Al Quwain"),
      priceFaq,
      {
        q: "Where exactly do my things go?",
        a: "Most likely our Ajman facility, which is the nearest of the three to Umm Al Quwain. That proximity is why retrieval timings here are closer to normal than in Fujairah or Ras Al Khaimah.",
      },
    ],
  },
}

export const AL_AIN: EmirateDef = {
  slug: "al-ain",
  name: "Al Ain",
  facilityKey: null,
  sampleDistricts: ["Al Jimi", "Al Muwaiji"],
  university: "UAE University",
  areas: [],
  hub: {
    title: "Self Storage Al Ain | Collected From Your Door",
    description:
      "Self storage for Al Ain. We collect from your address across the city, wrap and load, and store at our nearest facility from AED 12.65 per sq ft per month.",
    keywords:
      "self storage al ain, storage al ain, storage units al ain, furniture storage al ain",
    h1: "Self Storage in Al Ain",
    blurb:
      "We collect from across Al Ain — Al Jimi, Al Muwaiji, Al Towayya, Al Mutawaa and the surrounding districts — wrap and load at your address, and store your things indoors.",
    intro: [
      "Al Ain is a city of villas rather than towers, which changes what storage is for. Collections here are large, driveway-access jobs with the garage and outbuildings carrying much of the volume, and they are driven by accumulation and renovation far more often than by a lease ending.",
      "There is also a distinct academic rhythm. UAE University's calendar produces a genuine seasonal pattern of storage need around the end of each term, quite separate from the August expat cycle that governs the coast. We collect from your Al Ain address and store at our nearest facility — we do not operate a warehouse in the city, so plan retrieval timings with the drive in mind.",
    ],
    faqs: [
      collectionOnlyFaq("Al Ain"),
      priceFaq,
      {
        q: "Do you collect from UAE University residences?",
        a: "Yes, and the end of each term is the busiest window for it. Book three weeks ahead rather than three days — every residence empties in the same fortnight and the slots in it fill first.",
      },
    ],
  },
}
