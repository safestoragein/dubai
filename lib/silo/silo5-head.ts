import type { SiloPageContent } from "./types"

/**
 * SILO 5 · head-term page — /movers-dubai
 *
 * Owns `movers dubai` (12,100/mo, KD 41) plus movers in dubai, moving company
 * dubai, movers and packers dubai, packers and movers dubai. It sits at the top
 * level on purpose (the keyword is the URL) but belongs to silo 5 for linking:
 * it links UP to /moving-storage-dubai and sideways to five siblings.
 *
 * DELIBERATELY ABSENT from the brief this was written from (rules R24/R25/R26 and
 * the owner's no-public-pricing decision of 2026-09-17):
 *   - the studio..villa AED price table (every cell was [CONFIRM])
 *   - "real reviews / Google rating" (no figure supplied)
 *   - goods-in-transit insurance and "in-house vs partner crew" (unconfirmed)
 *   - "fixed price / no hidden charges" (unconfirmed)
 * Add any of them back only once the owner has supplied the real answer.
 */
export const SILO5_HEAD_PAGES: SiloPageContent[] = [
  {
    silo: "s5",
    path: "/movers-dubai",
    crumb: "Movers in Dubai",
    navLabel: "Movers in Dubai",
    navBlurb: "Packing, moving and storage from one team, in one booking.",
    title: "Movers in Dubai – Packing, Moving & Storage | SafeStorage",
    description:
      "Trusted movers in Dubai for apartments, villas and offices. Packing, dismantling, transport and storage in one booking. Get a free quote today.",
    keywords:
      "movers dubai, movers in dubai, moving company dubai, movers and packers dubai, packers and movers dubai, dubai movers, home movers dubai",
    ogTitle: "Movers in Dubai – Packing, Moving & Storage",
    h1: "Movers in Dubai Who Pack, Move and Store – in One Booking",
    introH2: "One team instead of three companies",
    hero: [
      "Moving in Dubai usually means juggling three companies: one to pack, one to move, and one to store whatever doesn't fit in the new place. SafeStorage does all three. Our team packs your home, moves it across Dubai, and keeps anything you're not ready for in secure storage, so you deal with one team and one quote. It is [moving and storage in Dubai](/moving-storage-dubai) run as a single booking.",
    ],
    sections: [
      {
        kind: "checklist",
        h2: "What's included when you book SafeStorage movers",
        items: [
          "Free pre-move survey, in person or by video call, so your quote is based on what you actually own.",
          "Professional packing, with bubble wrap, double-wall cartons, wardrobe boxes and mattress covers supplied by us.",
          "Furniture dismantling and reassembly for beds, wardrobes, dining tables, TV units and kids' furniture.",
          "Covered moving trucks with a trained crew and a team lead on every job.",
          "Unpacking and placement, with furniture set up room by room in the new home.",
          "Storage, if you need it: keep part or all of your belongings with us between homes, during renovation or while you travel.",
        ],
      },
      {
        kind: "table",
        h2: "Moving services we offer in Dubai",
        columns: ["Service", "Best for"],
        rows: [
          [
            "[Apartment moving](/moving-storage-dubai/apartment-movers)",
            "Studios to 4-bedroom flats, including high-rise buildings with lift bookings",
          ],
          [
            "[Villa moving](/moving-storage-dubai/villa-movers)",
            "Larger homes with gardens, outdoor furniture and multiple floors",
          ],
          [
            "[Office moving](/moving-storage-dubai/office-movers)",
            "Desks, IT equipment, files and after-hours or weekend moves",
          ],
          [
            "[Furniture moving](/moving-storage-dubai/furniture-movers)",
            "Single items or a few pieces: sofas, beds, wardrobes, appliances",
          ],
          ["Moving + storage", "Gaps between leases, renovation or relocation abroad"],
          [
            "[Movers in Abu Dhabi](/moving-storage-abu-dhabi)",
            "Dubai to Abu Dhabi moves on the same day",
          ],
        ],
      },
      {
        kind: "prose",
        h2: "How much do movers in Dubai cost?",
        paras: [
          "Moving prices depend on home size, the volume of items, the floor and lift access, and the distance between the two addresses. A studio and a four-bedroom villa are different jobs, and so is a ground-floor flat and a 40th-floor one with a shared service lift.",
          "The fastest way to get an exact price is a free survey. We'll tell you exactly what's included, so there is nothing to discover on moving day. For a breakdown of what drives the number, read our [moving cost guide](/moving-storage-dubai/moving-cost).",
        ],
      },
      {
        kind: "steps",
        h2: "How your move works",
        items: [
          { h: "Request a quote", p: "Send us your move date, addresses and home size." },
          { h: "Free survey", p: "We check your items in person or on a video call and send a quote." },
          { h: "Packing day", p: "The crew packs and labels every box by room. Fragile items get extra padding." },
          { h: "Moving day", p: "Furniture is dismantled, loaded, transported and reassembled." },
          {
            h: "Storage (optional)",
            p: "Anything not going to the new home goes straight to our storage facility, itemised and recorded.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "Building permissions and move-in rules in Dubai",
        paras: [
          "Most Dubai communities need a move-out and move-in permit from the building management or developer, for example in Dubai Marina, JLT, Downtown, JVC and Business Bay. Book your lift slot early, especially at the end of the month when many leases change.",
          "Our team will tell you what documents your building usually asks for and plan the timing around your lift booking.",
        ],
      },
      {
        kind: "prose",
        h2: "Areas we cover in Dubai",
        paras: [
          "Dubai Marina · JLT · JBR · Palm Jumeirah · Downtown Dubai · Business Bay · Jumeirah · Al Barsha · JVC · JVT · Dubai Hills · Arabian Ranches · Mirdif · Deira · Bur Dubai · Al Quoz · Silicon Oasis · International City · Motor City · Dubai South",
          "Moving between emirates? See [movers in Abu Dhabi](/moving-storage-abu-dhabi), or browse [storage locations across the UAE](/locations).",
        ],
      },
      {
        kind: "checklist",
        h2: "Why people choose SafeStorage movers",
        items: [
          "One team for packing, moving and storage, so there are no gaps between providers when your dates don't line up.",
          "A clear quote after a survey, based on what you actually own.",
          "A trained, uniformed crew with a team lead on every job.",
        ],
      },
      {
        kind: "prose",
        h2: "Need storage while you move?",
        paras: [
          "Between leases, renovating, or moving abroad for a few months? We collect your belongings from your door and store them securely, with no need to visit a facility. See [self storage in Dubai](/self-storage-dubai) for how that works.",
        ],
      },
    ],
    // The site renders and marks up at most 5 FAQs per page (faq-accordion MAX_FAQS), so only 5 are kept.
    faqs: [
      {
        q: "How far in advance should I book movers in Dubai?",
        a: "Aim for one to two weeks ahead. Book earlier if you're moving at the end of the month or on a weekend, as those dates fill up first.",
      },
      {
        q: "Do you provide packing materials?",
        a: "Yes. Boxes, bubble wrap, stretch film, wardrobe boxes and mattress covers are supplied by our team as part of a packed move.",
      },
      {
        q: "Can you move just a few items?",
        a: "Yes. For single items or small loads, see our furniture movers service.",
      },
      {
        q: "Can you store my things if my new home isn't ready?",
        a: "Yes. We take the items straight from your old home to storage and deliver them when you're ready.",
      },
      {
        q: "Do I need a permit to move in Dubai?",
        a: "Most buildings and communities ask for a move-out and move-in approval from the management or developer. Check with your building and book the service lift early.",
      },
    ],
    serviceType: "Moving company",
    schemaDescription:
      "Packing, dismantling, moving and storage for apartments, villas and offices across Dubai, booked as one job.",
    cta: {
      h2: "Get a free quote",
      p: "Tell us your move date, addresses and home size and we'll arrange a free survey.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/furniture-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },
]
