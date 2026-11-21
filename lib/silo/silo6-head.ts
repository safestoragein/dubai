import type { SiloPageContent } from "./types"

/**
 * SILO 6 · head-term page — /movers-abu-dhabi
 *
 * Owns `movers abu dhabi` (6,600/mo, KD 36), `packers and movers abu dhabi`
 * (2,900, KD 30), moving company abu dhabi, movers in abu dhabi. Top-level URL
 * on purpose, silo 6 for linking: up to /moving-storage-abu-dhabi, sideways to
 * five silo-6 siblings. See silo5-head.ts for the sister page.
 *
 * SCOPE HONESTY (silo6.ts header): Abu Dhabi is a COLLECTION service. There is no
 * Abu Dhabi warehouse; goods are stored at our nearest facility, in Dubai, and we
 * do not publish a straight removal between two Abu Dhabi addresses. The brief
 * this was written from said otherwise in three places ("across Khalifa City, from
 * the island to Yas", "store your belongings in Abu Dhabi", a 16-district list);
 * all three are worded to match what is published instead.
 *
 * ALSO ABSENT (R24/R25/R26, no-public-pricing 2026-09-17): the AED price table
 * (all cells [CONFIRM]) and "fixed price after survey" (unconfirmed). The brief's
 * link to /movers-dubai is replaced by the /moving-storage-dubai hub, because a
 * silo-6 body may not link to a silo-5 child (rule 3).
 */
export const SILO6_HEAD_PAGES: SiloPageContent[] = [
  {
    silo: "s6",
    path: "/movers-abu-dhabi",
    crumb: "Movers in Abu Dhabi",
    navLabel: "Packers and movers in Abu Dhabi",
    navBlurb: "Packing, collection, transport and storage from one team.",
    title: "Movers in Abu Dhabi – Packers, Movers & Storage | SafeStorage",
    description:
      "Packers and movers in Abu Dhabi for homes, villas and offices. Packing, transport, assembly and storage handled by one team. Free quote.",
    keywords:
      "movers abu dhabi, movers in abu dhabi, packers and movers abu dhabi, moving company abu dhabi, abu dhabi movers, movers and packers abu dhabi",
    ogTitle: "Packers and Movers in Abu Dhabi",
    h1: "Packers and Movers in Abu Dhabi – Home, Villa and Office Moves",
    introH2: "One team from packing to storage",
    hero: [
      "Whether you're leaving Abu Dhabi for Dubai or another emirate, or your new place isn't ready yet, SafeStorage handles the full job: packing, dismantling, transport, reassembly and storage. One team, one quote and one point of contact from start to finish. It is the Abu Dhabi side of our [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi) service.",
      "Worth saying first: Abu Dhabi is a collection service for us. We collect and pack at your address, and anything that needs holding is stored at our nearest facility, in Dubai.",
    ],
    sections: [
      {
        kind: "checklist",
        h2: "What every Abu Dhabi move includes",
        items: [
          "Free survey (in person or video) and a written quote.",
          "Packing materials supplied: cartons, bubble wrap, wardrobe boxes and mattress covers.",
          "Dismantling and reassembly of beds, wardrobes, dining sets and TV units.",
          "Covered trucks and a trained crew with a team lead on site.",
          "Unpacking and placement in the new home.",
          "Optional storage for items you're not taking yet.",
        ],
      },
      {
        kind: "table",
        h2: "Moving services in Abu Dhabi",
        columns: ["Service", "Best for"],
        rows: [
          [
            "[Apartment and house moves](/moving-storage-abu-dhabi/house-movers)",
            "Towers on Al Reem Island, Al Raha and Al Khalidiyah, with service-lift bookings",
          ],
          [
            "[Villa moves](/moving-storage-abu-dhabi/villa-movers)",
            "Khalifa City, Al Shamkha, Yas and Saadiyat: garages, gardens and gate access",
          ],
          [
            "[Office moves](/moving-storage-abu-dhabi/office-movers)",
            "Workstations, IT and archives, after hours or at weekends",
          ],
          [
            "[Furniture-only moves](/moving-storage-abu-dhabi/furniture-movers)",
            "A few large items or appliances",
          ],
          [
            "Abu Dhabi to Dubai",
            "Same-day moves between the two emirates. See [moving and storage in Dubai](/moving-storage-dubai).",
          ],
          ["Moving + storage", "Lease gaps, renovation, travel or relocation"],
        ],
      },
      {
        kind: "prose",
        h2: "Moving cost in Abu Dhabi",
        paras: [
          "Your final price depends on volume, access (floor, lift and parking) and distance. A studio and a villa are different jobs, and a move to Dubai is priced differently from one that stays in the emirate.",
          "A free survey gives you a clear figure before moving day. For what drives the number and how to compare quotes, read [what movers cost in Abu Dhabi](/moving-storage-abu-dhabi/moving-cost).",
        ],
      },
      {
        kind: "steps",
        h2: "How it works",
        items: [
          { h: "Tell us about your move", p: "Dates, both addresses and home size." },
          { h: "Survey and quote", p: "We list everything being moved and send a quote." },
          { h: "Packing", p: "Every box labelled by room; fragile items padded and marked." },
          { h: "Moving day", p: "Load, transport, unload and reassemble." },
          { h: "Storage if needed", p: "Items go straight to secure storage and come back when you call." },
        ],
      },
      {
        kind: "checklist",
        h2: "Before you move: Abu Dhabi checklist",
        items: [
          "Ask your building or community for move-out and move-in approval and book the service lift.",
          "Arrange disconnection and reconnection of electricity and water with your utility provider.",
          "Register your new tenancy on Tawtheeq once the new lease is signed.",
          "Measure large furniture against doorways and lifts in the new home.",
          "Set aside documents, valuables and medicines to carry yourself.",
        ],
      },
      {
        kind: "prose",
        h2: "Areas we collect from in Abu Dhabi",
        paras: [
          "Al Reem Island · Al Raha · Yas Island · Saadiyat Island · Khalifa City · Al Shamkha · Al Khalidiyah · Al Mushrif · Al Bateen · Mussafah",
          "Not listed does not mean not covered. Send us the address, or see our [Abu Dhabi locations](/locations/abu-dhabi) for lift slots and access in each district.",
        ],
      },
      {
        kind: "checklist",
        h2: "Why choose SafeStorage in Abu Dhabi",
        items: [
          "Moving and storage from one company, with no hand-offs between providers.",
          "A clear written quote after a survey.",
          "The same team for Dubai and Abu Dhabi, which helps on intercity moves.",
          "Door-to-door storage: we collect and return, and you never visit a warehouse.",
        ],
      },
    ],
    // The site renders and marks up at most 5 FAQs per page (faq-accordion MAX_FAQS).
    faqs: [
      {
        q: "How much do movers in Abu Dhabi charge?",
        a: "It depends on home size, volume and access. A free survey gives you an exact quote before moving day.",
      },
      {
        q: "Do you move from Abu Dhabi to Dubai?",
        a: "Yes. We handle moves between Abu Dhabi and Dubai, usually completed the same day for apartments.",
      },
      {
        q: "Do you pack everything?",
        a: "Yes, if you choose a full-pack move. You can also pack yourself and have us move only the furniture and boxes.",
      },
      {
        q: "Can you store my belongings from Abu Dhabi?",
        a: "Yes. We collect from your address and store part or all of your items at our nearest facility, in Dubai, then deliver them when you're ready. We don't run an Abu Dhabi warehouse.",
      },
      {
        q: "How early should I book?",
        a: "One to two weeks is ideal, and earlier for end-of-month or weekend moves.",
      },
    ],
    serviceType: "Moving company",
    areaServed: "Abu Dhabi",
    schemaDescription:
      "Packing, collection, transport and storage for homes, villas and offices in Abu Dhabi, booked as one job.",
    cta: {
      h2: "Get a free quote",
      p: "Tell us your move date, addresses and home size and we'll arrange a free survey.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/moving-cost",
    ],
  },
]
