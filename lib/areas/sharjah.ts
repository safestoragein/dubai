import type { EmirateDef } from "./types"
import { SHARJAH_AREAS } from "@/lib/sharjah-areas"

/**
 * SHARJAH — fifteen service areas, already written and already correctly
 * pathed at /locations/sharjah/{area}.
 *
 * Nothing about the Sharjah district content changed. This file only wraps the
 * existing lib/sharjah-areas.ts array in the EmirateDef shape so the shared
 * renderer, the hub grid and the sitemap can treat all five emirates the same
 * way. The hub copy below mirrors what /locations/sharjah already says.
 */
export const SHARJAH: EmirateDef = {
  slug: "sharjah",
  name: "Sharjah",
  facilityKey: "sharjah",
  sampleDistricts: ["Al Nahda", "Al Majaz"],
  university: "Sharjah University City",
  areas: SHARJAH_AREAS,
  hub: {
    title: "Self Storage Sharjah | Collected From Your Door, Stored In Sharjah",
    description:
      "Self storage in Sharjah from AED 12.65 per sq ft per month. We operate a warehouse in the emirate, collect from fifteen districts, and store locally.",
    keywords:
      "self storage sharjah, storage sharjah, storage units sharjah, furniture storage sharjah, تخزين الشارقة",
    h1: "Self Storage in Sharjah",
    blurb:
      "We operate a warehouse in Sharjah, so what we collect in the emirate stays in the emirate. The crew comes to your address, wraps and loads, and brings it back whenever you ask.",
    intro: [
      "Sharjah has plenty of storage units. What it has less of is anyone who will come and take your things there. Most advertised rates assume you will arrive with a truck, carry everything yourself, and repeat the trip whenever you need something back.",
      "We work the other way round. Tell us roughly what you have, we come to your Sharjah address, wrap and load, and store at our facility in the emirate. Storage is AED 12.65 per square foot per month, VAT included, calculated on the space your things actually occupy.",
    ],
    faqs: [
      {
        q: "Do you have a warehouse in Sharjah?",
        a: "Yes. Goods collected in Sharjah are stored in Sharjah rather than driven to Dubai and back. On top of that we run the collection service — the crew comes to your address, wraps and loads, and takes everything to the facility.",
      },
      {
        q: "Which areas of Sharjah do you collect from?",
        a: "All fifteen listed here, and others besides. Al Nahda, Al Majaz, Al Taawun, Al Qasimia, Al Khan, Rolla, Muwaileh, University City, Abu Shagara, Al Nabba, Al Layyah, Al Qulayaah, Maysaloon, Al Ghuwair and the industrial areas are all normal collection ground.",
      },
      {
        q: "I am moving from Sharjah to Dubai. Can you hold my things between leases?",
        a: "It is the most common reason people here call. We empty the property on the day you hand the keys back, hold everything for however long the gap runs, and deliver to the new address when you can receive it. No minimum term.",
      },
    ],
  },
}
