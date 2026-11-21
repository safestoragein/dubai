import type { SiloPageContent } from "./types"

/**
 * SILO 5 · movers-and-packers expansion — /moving-storage-dubai/*
 *
 * Eight pages added to the existing silo (2026-10). Each owns ONE search intent
 * and none of them restates another's body copy — the doorway-page rule in
 * types.ts applies here exactly as it does to the original six children.
 *
 * KEYWORD OWNERSHIP (Semrush, UAE, desktop, 16–17 Oct 2026; volume/KD)
 *   furniture-movers          furniture movers and packers in dubai   260 / 33
 *   movers-near-me            packers and movers near me              880 / 24
 *                             local movers in dubai                   170 / 40
 *   moving-cost               cheap movers in dubai                   320 / 42
 *                             cheap movers and packers dubai           90 / 26
 *   dubai-marina-movers       movers in dubai marina                  880 / 11
 *                             movers and packers in dubai marina      320 / 18
 *   jvc-movers                movers and packers in jvc               480 /  7
 *   business-bay-movers       movers and packers in business bay      260 /  6
 *   palm-jumeirah-movers      movers and packers in palm jumeirah     140 /  9
 *   silicon-oasis-movers      movers and packers in dubai silicon oasis 90 / 6
 *
 * FACT PACK (the only company facts these pages state, all already published
 * on the live moving pages or in lib/company-facts.ts / lib/facilities.ts):
 *   - we pack, wrap, dismantle/reassemble, carry, move and store
 *   - furniture wrapping is part of every collection
 *   - one barcoded inventory; storage billed monthly on space used, no lock-in
 *   - free, itemised quotes; a survey (video or visit) before a larger job
 *   - service-lift / permit coordination at both buildings
 *   - collection across Dubai's districts; storage at our Dubai warehouse
 *   - phone +971 50 577 3388 (rendered by the template, not restated here)
 *
 * DELIBERATELY ABSENT (R24/R25/R26): any AED amount, any rating or review
 * count, any "N areas", crew or truck numbers, and any claim of a response time.
 */

export const SILO5_MOVERS_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------- furniture-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/furniture-movers",
    crumb: "Furniture Movers",
    navLabel: "Furniture moving",
    navBlurb: "A few big pieces or a whole household, wrapped and delivered intact.",
    title: "Furniture Movers in Dubai – Single Items to Full Rooms | SafeStorage",
    description:
      "Need a sofa, bed or wardrobe moved in Dubai? Our furniture movers wrap, dismantle, move and reassemble. Get a quick quote.",
    keywords:
      "furniture movers dubai, furniture moving dubai, single item movers dubai, sofa movers dubai, furniture shifting dubai, furniture movers and packers in dubai, furniture movers near me",
    ogTitle: "Furniture Movers in Dubai – Single Items to Full Rooms",
    // 2026-11-21: rewritten from the owner's brief (Page 5), IN PLACE at this URL — the brief's
    // /movers-dubai/furniture-movers would have duplicated this page. Left out: the AED price
    // table and "dismantling included/extra" ([CONFIRM], no public pricing), the quote-turnaround
    // [CONFIRM], gym equipment/pianos [CONFIRM], and "same-week slots" (an availability promise).
    h1: "Furniture Movers in Dubai – From One Sofa to a Full Room",
    introH2: "Small jobs, done properly",
    hero: [
      "Not every move is a full house move. Sometimes you've bought a sofa on Dubizzle, you're sending a wardrobe to a friend's place, or you're clearing a room for guests. Our furniture movers handle small jobs properly: wrapped, dismantled where needed, carried by a trained crew and reassembled at the other end. It is the furniture side of our [moving and storage in Dubai](/moving-storage-dubai) service.",
    ],
    sections: [
      {
        kind: "checklist",
        h2: "What we move",
        items: [
          "Sofas, sectionals and recliners.",
          "Beds, bed frames and mattresses.",
          "Wardrobes and chests of drawers.",
          "Dining tables and chairs.",
          "TV units, bookshelves and desks.",
          "Freestanding appliances such as fridges and washing machines.",
        ],
        note: "Anything plumbed in, fitted to a wall or ducted, such as a split air conditioner, needs a technician to disconnect and reconnect. Tell us when you ask for a quote and we'll say what we can and cannot take down.",
      },
      {
        kind: "steps",
        h2: "How a furniture move works",
        items: [
          { h: "Send the items and addresses", p: "Photos of the items and both addresses, on WhatsApp." },
          { h: "Get a quote", p: "We quote the pieces, not the rooms." },
          {
            h: "We arrive ready",
            p: "The crew brings blankets, stretch film and tools, and items are wrapped before they leave the room.",
          },
          {
            h: "Dismantle, move and reassemble",
            p: "Screws and fittings are bagged and labelled per item, so everything goes back together as it came apart.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "What decides the price of a furniture move",
        paras: [
          "Furniture moves are quoted on the items, not on the number of rooms. What moves the number is the count and size of the pieces, how many need taking apart, how far each one has to be carried from the door or lift to the vehicle, and whether either building restricts moving hours.",
          "Two moves with the same furniture can be priced very differently because of access alone. Our [cost guide for movers and packers](/moving-storage-dubai/moving-cost) sets out every factor so you can compare quotes like for like.",
        ],
      },
      {
        kind: "prose",
        h2: "Not ready to take it yet?",
        paras: [
          "We can collect the furniture and keep it in storage until your new place is ready. That's useful during renovation or between leases, and it's covered under [personal storage in Dubai](/personal-storage-dubai).",
          "Moving your whole home? See our full [movers in Dubai](/movers-dubai) service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move just one item?",
        a: "Yes. Single-item moves are common. Send us a photo for a quote.",
      },
      {
        q: "Do you wrap the furniture?",
        a: "Yes. Every piece is wrapped with moving blankets or stretch film before it's carried out.",
      },
      {
        q: "Can you pick up furniture I bought online?",
        a: "Yes. Share the seller's address and a photo, and we'll collect and deliver it to you.",
      },
      {
        q: "Do you reassemble beds and wardrobes?",
        a: "Yes. Our crew dismantles and reassembles most beds, wardrobes and flat-pack furniture.",
      },
      {
        q: "Can you store furniture until my new place is ready?",
        a: "Yes. We collect it and keep it in storage until you're ready, useful during renovation or between leases.",
      },
    ],
    serviceType: "Furniture moving",
    cta: {
      h2: "Get a free quote",
      p: "Send a photo of the items and both addresses and we'll quote the pieces, not the rooms.",
    },
    siblings: [
      "/movers-dubai",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------------------ movers-near-me */
  {
    silo: "s5",
    path: "/moving-storage-dubai/movers-near-me",
    crumb: "Movers Near Me",
    navLabel: "Movers near you",
    navBlurb: "Local packers and movers who come to your door, across Dubai.",
    title: "Packers and Movers Near Me in Dubai | We Come to Your Door",
    description:
      "Packers and movers near you in Dubai. We collect across Dubai's districts, pack at your address, move or store, and book the lift at both buildings. Free quote.",
    keywords:
      "packers and movers near me, movers near me, movers near me dubai, local movers in dubai, packers and movers dubai near me",
    ogTitle: "Packers and Movers Near Me in Dubai",
    h1: "Packers and Movers Near You in Dubai, Booked Around Your Day",
    introH2: "How local movers reach your door",
    hero: [
      "Packers and movers near you in Dubai should mean a crew that arrives at your address, not one that asks you to bring your things to a yard. That is how we work: we collect from your door across Dubai, pack and wrap there, and move or store from it. It is the local end of [moving and storage in Dubai](/moving-storage-dubai).",
      "Our warehouse is in DIP-1, but you do not travel to it. What matters for a local move is how close the crew is to your building and how well they know its access, and that is why the page below is organised by area rather than by service.",
      "We are open seven days a week, which helps with the thing that actually limits Dubai moves: building slots. Most towers restrict moving hours, and the best slots go early.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What \"near me\" really means for a mover",
        paras: [
          "With a removals job the distance from the company's office to your door matters less than people expect. What decides whether a move goes smoothly is whether the crew already understands your building: where the service lift is, which entrance to use, how long the loading bay slot is, and what the management office requires before the day.",
          "That knowledge is built up area by area. We collect across the districts listed below and coordinate the lift and any permit at both buildings, so you are not standing in a lobby trying to negotiate a slot.",
          "If you are not sure we cover your building, send the building name and community. We will confirm before you commit to anything, and say plainly if it is outside where we work.",
        ],
      },
      {
        kind: "checklist",
        h2: "Where we collect from",
        intro:
          "Each district has its own page covering the building types, access and what people there usually store. The ones below are the areas we are asked about most for moves.",
        items: [
          "[Dubai Marina](/locations/dubai/dubai-marina), JBR and the towers around them.",
          "[Business Bay](/locations/dubai/business-bay) and [Downtown Dubai](/locations/dubai/downtown-dubai).",
          "[Palm Jumeirah](/locations/dubai/palm-jumeirah) and [Jumeirah](/locations/dubai/jumeirah).",
          "[Al Barsha](/locations/dubai/al-barsha) and [Dubai Hills](/locations/dubai/dubai-hills).",
          "[Jumeirah Village Circle](/locations/dubai/jumeirah-village-circle) and [Dubai Silicon Oasis](/locations/dubai/dubai-silicon-oasis).",
          "[Mirdif](/locations/dubai/mirdif), [Deira](/locations/dubai/deira) and [Al Qusais](/locations/dubai/al-qusais).",
          "[Al Quoz](/locations/dubai/al-quoz), [Ras Al Khor](/locations/dubai/ras-al-khor) and [Dubai Investment Park](/locations/dubai/dubai-investment-park).",
        ],
        note: "The full list of districts is on the [locations pages](/locations/dubai). Not listed does not mean not covered: send the address.",
      },
      {
        kind: "table",
        h2: "Local move types and where to start",
        columns: ["What you are moving", "Start here", "What is different"],
        rows: [
          ["A flat in a tower", "[Apartment movers](/moving-storage-dubai/apartment-movers)", "Two lift bookings and two permits"],
          ["A villa or townhouse", "[Villa movers](/moving-storage-dubai/villa-movers)", "Garage, garden and community gate access"],
          ["An office", "[Office movers](/moving-storage-dubai/office-movers)", "Evenings and weekends, department labelling"],
          ["A few large pieces", "[Furniture movers](/moving-storage-dubai/furniture-movers)", "Priced on items, not rooms"],
          ["Only the packing", "[Packing services](/moving-storage-dubai/packing-services)", "You move, we wrap what matters"],
        ],
      },
      {
        kind: "steps",
        h2: "How a local move is booked",
        items: [
          { h: "Send the address", p: "The building, the community and the floor. That is enough to start, and it is what tells us what the access looks like." },
          { h: "Get a written quote", p: "A video walkthrough or a visit for anything larger than a flat. The quote is itemised, so you can compare it line by line with another." },
          { h: "We book the building", p: "The service lift slot and any move permit, at both addresses. If your building has a window, the move is planned inside it." },
          { h: "Pack, move, deliver", p: "Wrapped at your door, moved to the new address or into storage, and rebuilt where we took things apart." },
        ],
      },
      {
        kind: "prose",
        h2: "When the dates do not line up",
        paras: [
          "Local moves rarely go straight from one front door to the next, because a lease ending and a handover are different dates. When there is a gap, everything goes into storage at our warehouse under a barcoded inventory and comes back when the new place is ready.",
          "Storage is billed monthly on the space used, with no lock-in, so a slipped handover costs the extra weeks only. You can read how it works in [self storage in Dubai](/self-storage-dubai).",
        ],
      },
      {
        kind: "prose",
        h2: "How to check any local mover before you book",
        paras: [
          "Ask for an itemised written quote that states the packing scope, the number of crew, the vehicles and whether lift and permit bookings are included. Ask who is responsible if the building refuses entry on the day. And ask whether the same company will store your goods if the dates move, because two companies means two inventories and nobody who owns the gap.",
          "Our [cost guide](/moving-storage-dubai/moving-cost) walks through what each line of a quote should contain.",
        ],
      },
      {
        kind: "prose",
        h2: "What the move depends on in each part of Dubai",
        paras: [
          "Tower districts such as the Marina and Business Bay turn on lift slots and loading bays, which is why we have pages for [Dubai Marina](/moving-storage-dubai/dubai-marina-movers) and [Business Bay](/moving-storage-dubai/business-bay-movers). Communities of mid-rise blocks and townhouses, such as [JVC](/moving-storage-dubai/jvc-movers), turn on stairs, parking and gate registration. On the [Palm](/moving-storage-dubai/palm-jumeirah-movers) the constraint is controlled access, and in [Silicon Oasis](/moving-storage-dubai/silicon-oasis-movers) it is the distance and the timing of the run.",
          "Knowing which of these applies to you is most of the work of planning a local move, so tell us the building type along with the address. The three facts that shape a quote most are the building type, the floor and the date. With those, we can say what the move involves and what it will depend on before you commit to anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you collect from my area?",
        a: "We collect across Dubai's districts, and each has its own page on our locations section. If your building is not listed, send the building name and community and we will confirm before you book.",
      },
      {
        q: "Do I have to bring my belongings to your warehouse?",
        a: "No. The crew comes to your address, wraps and loads there, and takes everything away. You never drive anything anywhere.",
      },
      {
        q: "What hours are you available?",
        a: "We are open seven days a week. The practical limit on a Dubai move is usually your building's permitted moving window, so we plan inside it and book the lift for you.",
      },
      {
        q: "Can the same company move and store my things?",
        a: "Yes, and it is the main reason to use one provider. You get one barcoded inventory from your old home to your new one, and storage covers any gap between the two dates.",
      },
      {
        q: "How do I get a quote?",
        a: "Send the building, the community, the floor and a rough list of what is moving. For larger jobs we do a video walkthrough or a visit, and the quote is written and itemised.",
      },
    ],
    serviceType: "Local moving",
    cta: {
      h2: "Looking for movers near you?",
      p: "Send your building and community, and we will confirm coverage and the lift booking before you commit.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/dubai-marina-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ---------------------------------------------------------------- moving-cost */
  {
    silo: "s5",
    path: "/moving-storage-dubai/moving-cost",
    crumb: "Cost of Movers and Packers",
    navLabel: "What movers cost",
    navBlurb: "What sets the price of a move, and how to compare two quotes.",
    title: "Movers and Packers Cost in Dubai | What Sets the Price",
    description:
      "What movers and packers cost in Dubai depends on volume, access, packing and timing. See each line of a quote, why cheap movers differ, and how to compare fairly.",
    keywords:
      "cheap movers in dubai, affordable movers, cheap movers and packers dubai, movers and packers cost dubai, how much do movers cost in dubai, moving cost dubai, packers and movers rates",
    ogTitle: "What Movers and Packers Cost in Dubai",
    h1: "What Movers Cost in Dubai, and Why Quotes Differ",
    introH2: "What a moving quote is made of",
    hero: [
      "The cost of movers and packers in Dubai depends on five things: how much you are moving, how hard each building is to access, how much packing you want done, the date, and whether anything needs storing in between. We do not publish a price list, because a number without those five facts would mislead you, but every line of a quote is explainable. This page explains them, as part of [moving and storage in Dubai](/moving-storage-dubai).",
      "People searching for cheap movers in Dubai are usually trying to avoid one specific outcome: a low quote that grows on the day. The way to avoid it is not to find the lowest number. It is to compare quotes that describe the same job.",
      "Our quotes are free and itemised, so each factor below appears as a line you can see rather than a total you have to trust.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What goes into a moving quote, line by line",
        intro:
          "These are the factors that decide the figure, and what moves each one up or down. Use the right-hand column as a checklist when you compare two quotes.",
        columns: ["Factor", "What raises it", "What lowers it"],
        rows: [
          ["Volume", "More rooms of furniture, a garage, a store room, bulky items", "Clearing out what you do not need before the survey"],
          ["Building access", "A high floor, a shared service lift, a long carry to the vehicle, stairs", "Ground floor, a lift at the door, parking next to the entrance"],
          ["Packing scope", "Full packing of every room, fragile items, wardrobe boxes", "Boxing small items yourself, sealed and labelled"],
          ["Dismantling", "Many wardrobes, wall units, bunk beds, TV brackets", "Few pieces that come apart, and a clear note of which"],
          ["Date and time", "Weekends, month-ends, the summer rush, short notice", "A weekday with a few weeks' lead time"],
          ["Distance", "Another emirate, or a long run across the city", "A short move within one community"],
          ["Storage", "Anything held between dates, for longer", "A move that goes straight from one door to the next"],
        ],
      },
      {
        kind: "prose",
        h2: "Why the lowest quote is often not the cheapest outcome",
        paras: [
          "A low figure is usually low for a reason that does not show up until the day. The crew is smaller than the job needs. Wrapping is not included, so it appears as an extra when the furniture is already in the lobby. The lift booking is assumed to be your problem. Or the quote covers one building, and the second one is a surprise.",
          "None of these are tricks that need a villain. They are what happens when two companies quote different jobs and the customer sees only the total. The test of any quote is whether it states, in writing, the crew, the vehicles, the packing scope, the dismantling, who books the lift and permit at each building, and what happens if the building refuses entry.",
        ],
      },
      {
        kind: "checklist",
        h2: "How to compare two moving quotes fairly",
        items: [
          "Ask each company to quote the same scope: same items, same packing, same dismantling, same date.",
          "Check whether furniture wrapping is included. For us it is part of every collection, not a line you add.",
          "Confirm who books the service lift and any move permit at both buildings, and what it costs if a slot is missed.",
          "Find out whether the same company will store your goods if your dates move, or whether that means a second booking.",
          "Ask what the quote assumes about access, and what changes if the real access is harder than described.",
          "Get it in writing, itemised, before you pay anything.",
        ],
      },
      {
        kind: "prose",
        h2: "How to lower the cost without cutting the service",
        paras: [
          "The largest saving most households can make is packing small items themselves. Sealed, labelled cartons stack squarely, which makes loading faster and uses less space if anything goes into storage. We explain what is worth boxing yourself and what is better left to us in our [packing services guide](/moving-storage-dubai/packing-services).",
          "The second is the date. Weekends, month-ends and the summer rush are the busiest slots, so a weekday move with a few weeks' notice is easier to schedule and easier on the quote. The third is clearing what you do not need before the survey, because every item you remove is volume you do not pay to move.",
          "A fourth, often missed, is access. If you can arrange for the crew to park close to the entrance, or confirm the lift booking early, that shortens the day.",
        ],
      },
      {
        kind: "prose",
        h2: "What changes between a flat, a villa and an office",
        paras: [
          "The same factors apply to every move, but they weigh differently. For a flat, access is usually the biggest variable, because it is lifts and permits. See [apartment movers](/moving-storage-dubai/apartment-movers) for how that plays out. For a villa, volume is the variable, and the garage is often the largest single area, which is covered in [villa movers](/moving-storage-dubai/villa-movers). For an office, timing is the variable, because moves happen out of hours, as set out in [office movers](/moving-storage-dubai/office-movers).",
        ],
      },
      {
        kind: "prose",
        h2: "Getting a quote from us",
        paras: [
          "Quotes are free and itemised. For a flat we usually need the building, the floor and a list of what is moving. For a villa or an office, we do a video walkthrough or a visit, because a quote on room count alone comes in low and the day then runs long.",
          "If you are comparing us with another company, send us their scope and we will quote the same one, so the two numbers describe the same job.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do movers and packers cost in Dubai?",
        a: "It depends on volume, building access, how much packing you want, the date and whether you need storage between addresses. We give free, itemised quotes so each of those is a visible line, not a hidden assumption.",
      },
      {
        q: "Why is one quote so much cheaper than another?",
        a: "Usually because the two quote different jobs: a smaller crew, packing or wrapping excluded, one building covered instead of two, or access assumed to be easy. Ask both companies to quote the same written scope.",
      },
      {
        q: "Is furniture wrapping included in your price?",
        a: "Yes. Furniture wrapping is part of every collection and is not an add-on. Boxing loose small items is separate, and doing it yourself is the biggest saving on a full move.",
      },
      {
        q: "What day is cheapest to move?",
        a: "Weekdays with a few weeks' notice are the easiest to schedule. Weekends, month-ends and the summer rush are the busiest slots in the calendar, and the least flexible.",
      },
      {
        q: "Can I get a fixed price before the day?",
        a: "You get a written, itemised quote before anything is booked. It states the scope it covers, so you know what would change it, such as access that turns out harder than described.",
      },
    ],
    serviceType: "Moving cost guidance",
    cta: {
      h2: "Comparing moving quotes?",
      p: "Send us the other company's scope and we will quote the same job, so the two numbers can be compared.",
    },
    siblings: [
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/movers-near-me",
    ],
  },
]
