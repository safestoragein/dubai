import type { SiloPageContent } from "./types"

/**
 * SILO 6 · /moving-storage-abu-dhabi — movers and packers, Abu Dhabi.
 *
 * A regional mirror of silo 5 with its own hub, because the Abu Dhabi searches
 * (`movers and packers in abu dhabi` 2,900/mo at KD 31) are a different market
 * from Dubai's, and a /moving-storage-dubai/… URL would rank poorly for them.
 *
 * KEYWORD OWNERSHIP (Semrush UAE, desktop, 16–17 Oct 2026; volume / KD)
 *   hub                  movers and packers in abu dhabi          2,900 / 31
 *                        movers packers abu dhabi                   140 / 33
 *   furniture-movers     house furniture movers in abu dhabi      1,300 / 32
 *                        furniture movers in abu dhabi              720 / 29
 *   villa-movers         villa movers and packers in abu dhabi      390 / 14
 *                        villa movers in abu dhabi                  320 /  8
 *   house-movers         house movers in abu dhabi                  320 / 17
 *   office-movers        office movers in abu dhabi                 260 /  9
 *                        office movers abu dhabi                    110 /  9
 *   moving-cost          best movers in abu dhabi                   320 / 39
 *                        cheap / best / professional movers and
 *                        packers in abu dhabi                      110 each
 *
 * SCOPE HONESTY — the constraint that shapes every page here.
 * lib/facilities.ts: SafeStorage operates warehouses in Dubai, Sharjah and
 * Ajman. ABU DHABI IS A COLLECTION SERVICE WITH STORAGE AT THE NEAREST
 * FACILITY; there is no Abu Dhabi warehouse, and the live /locations/abu-dhabi
 * page says so in plain words. These pages therefore describe what is
 * published — collection, wrapping, transport, storage, delivery, moves to and
 * from the other emirates — and do NOT claim a straight local removal between
 * two Abu Dhabi addresses. Each page invites that enquiry honestly ("send both
 * addresses and we will say whether it is a job we take"). If that service
 * exists, the owner should confirm it and the copy can be widened.
 *
 * FACT PACK: see silo5-movers.ts. Abu Dhabi additions, from the live
 * /locations/abu-dhabi page: ten collection districts; transport is quoted
 * separately and confirmed before anything is booked; storage is at our
 * nearest facility. District descriptions below follow that page.
 *
 * LINKING: a silo-6 body may link to its own pages, to any hub, to /locations/…
 * and to /get-quote. It may NOT link to a silo-5 child (rule 3) — Dubai pages
 * are reached through the /moving-storage-dubai hub.
 */

/** The hub page. Rendered by app/moving-storage-abu-dhabi/page.tsx in hub mode. */
export const AD_HUB: SiloPageContent = {
  silo: "s6",
  path: "/moving-storage-abu-dhabi",
  crumb: "Movers Abu Dhabi",
  navLabel: "Movers in Abu Dhabi",
  navBlurb: "Packing, collection and moving from Abu Dhabi, with storage if dates slip.",
  title: "Movers in Abu Dhabi | Movers and Packers That Also Store",
  description:
    "Movers and packers in Abu Dhabi that also store: we pack at your address, move or hold goods monthly while dates line up. A moving company with one inventory.",
  keywords:
    "movers in abu dhabi, movers and packers in abu dhabi, movers packers abu dhabi, moving companies in abu dhabi, abu dhabi movers, professional movers in abu dhabi, moving company abu dhabi",
  ogTitle: "Movers in Abu Dhabi",
  h1: "Movers in Abu Dhabi: Packed, Collected, Stored",
  introH2: "Movers in Abu Dhabi, in brief",
  hero: [
    "Movers and packers in Abu Dhabi who also store your things solve the most common problem with a move: the new place is rarely ready on the day the old one is handed back. We collect from your address across ten Abu Dhabi districts, wrap and load there, and move your goods to your next home or into storage, with one barcoded inventory throughout. For the Dubai side of the same service see [moving and storage in Dubai](/moving-storage-dubai).",
    "This page is for anyone leaving, entering or rearranging a home in Abu Dhabi. It explains exactly what we do here, where we are not the right fit, which district pages to read for local detail, and how to compare movers fairly.",
    "One thing is worth saying first, because it affects what we can promise: Abu Dhabi is a collection service for us, and storage is at our nearest facility rather than in an Abu Dhabi warehouse.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "What we do in Abu Dhabi, and where a specialist fits better",
      paras: [
        "We collect from your address, wrap furniture at the door, take apart what is built to come apart, carry it out and transport it. From there it goes to your new address in another emirate, or into storage at our nearest facility, which is in Dubai, until your dates line up. Furniture wrapping is part of every collection.",
        "What we do not run is an Abu Dhabi warehouse, and we do not publish a straight removal service between two Abu Dhabi addresses with no storage or other emirate involved. If that is what you need, send both addresses and say so. We will tell you plainly whether it is a job we take, rather than let you find out after you have booked.",
        "Where it does fit well is the household that needs its things out of a home on a fixed date, safely held, and delivered when a new place exists. That describes most moves out of Abu Dhabi, and it is why storage and moving are one job here.",
      ],
    },
    {
      kind: "checklist",
      h2: "Where we collect from in Abu Dhabi",
      intro:
        "Ten districts are covered, and each has its own page with the local detail that matters for a move: which buildings need a lift slot, where the loading bays are, and what people there usually store.",
      items: [
        "[Al Reem Island](/locations/abu-dhabi/al-reem-island): high-rise towers where every building wants the service lift booked.",
        "[Khalifa City](/locations/abu-dhabi/khalifa-city) and [Al Shamkha](/locations/abu-dhabi/al-shamkha): villas on generous plots, and households moving in as well as out.",
        "[Al Raha](/locations/abu-dhabi/al-raha): beachfront apartments and inland villas, which are different jobs.",
        "[Al Khalidiyah](/locations/abu-dhabi/al-khalidiyah) and [Al Mushrif](/locations/abu-dhabi/al-mushrif): older buildings and settled villa streets.",
        "[Yas Island](/locations/abu-dhabi/yas-island) and [Saadiyat Island](/locations/abu-dhabi/saadiyat-island): newer residential districts, where event weekends and high-value collections change the planning.",
        "[Al Bateen](/locations/abu-dhabi/al-bateen): households that move on a posting cycle rather than a lease cycle.",
        "[Mussafah](/locations/abu-dhabi/mussafah): mostly business stock, records and equipment.",
      ],
      note: "Not on this list does not mean not covered. Send the address and we will confirm it.",
    },
    {
      kind: "table",
      h2: "Moves we are asked about most, and where to start",
      columns: ["What you are moving", "Start here", "What is different"],
      rows: [
        ["A villa and its garage", "[Villa movers](/moving-storage-abu-dhabi/villa-movers)", "Garage, garden and community gate access"],
        ["A flat or a house", "[House movers](/moving-storage-abu-dhabi/house-movers)", "Lift bookings in towers, stairwells in older buildings"],
        ["Furniture on its own", "[Furniture movers](/moving-storage-abu-dhabi/furniture-movers)", "Priced on the pieces, not the rooms"],
        ["An office or business stock", "[Office movers](/moving-storage-abu-dhabi/office-movers)", "Out of hours, with the gap covered"],
        ["Comparing quotes", "[What movers cost](/moving-storage-abu-dhabi/moving-cost)", "Transport and storage priced separately"],
      ],
    },
    {
      kind: "steps",
      h2: "How a move from Abu Dhabi runs",
      items: [
        { h: "Send the address and the dates", p: "The district, the building or street, and when you need to be out. If you already know where the goods are going, tell us that too." },
        { h: "Get a written quote", p: "A video walkthrough or a visit for anything larger than a flat. Transport is quoted separately and confirmed before anything is booked." },
        { h: "We book the building", p: "The service lift and any move permit at your Abu Dhabi address, inside the window the building allows." },
        { h: "Wrap, load and collect", p: "Furniture is wrapped at your door, and what comes apart is taken apart and labelled. Everything is recorded in a barcoded inventory." },
        { h: "Deliver or store", p: "To your new address, or into storage until it is ready, billed monthly on the space used with no lock-in." },
      ],
    },
    {
      kind: "prose",
      h2: "Storage in the middle of a move",
      paras: [
        "The gap between handing back one home and getting into another is the normal case, not bad luck. Handovers slip, and a lease ending and a start date are rarely the same day. Storage covers that gap, and because the same company collects and stores, there is one inventory and one number to call.",
        "Goods are held at our nearest facility, in Dubai, under the barcoded inventory. Billing is monthly on the space your things occupy, so a slipped handover costs the extra weeks only. You can see how it works in [self storage in Dubai](/self-storage-dubai), and the Abu Dhabi position is set out on our [Abu Dhabi locations page](/locations/abu-dhabi).",
      ],
    },
    {
      kind: "checklist",
      h2: "How to compare movers in Abu Dhabi",
      intro: "Most disappointments with a mover come from two quotes describing different jobs. These questions put them on the same footing.",
      items: [
        "Is it a written, itemised quote that states crew, vehicles, packing scope and dismantling?",
        "Does it include booking the lift and any permit at your building, and who pays if a slot is missed?",
        "Is wrapping included, or priced as an extra at the door?",
        "If your dates move, will the same company store your goods, or is that a second booking?",
        "Does the quote say what happens if access turns out harder than described?",
        "Are transport and storage shown as separate lines, so you can see each?",
      ],
    },
    {
      kind: "prose",
      h2: "What to expect from a moving company in Abu Dhabi",
      paras: [
        "If you are comparing moving companies in Abu Dhabi, ask what each one actually does between collection and delivery. Many pack and move and leave you to find storage for the gap. We do all three, packing, moving and storing, so there is one quote, one inventory and one number to call.",
        "What we are not is an Abu Dhabi warehouse operator, and we say so on this page rather than after you have paid a deposit. Our [guide to choosing movers in Abu Dhabi](/moving-storage-abu-dhabi/best-movers) sets out the questions worth asking any company, including us.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a storage facility in Abu Dhabi?",
      a: "No. Abu Dhabi is a collection service for us. We operate warehouses in Dubai, Sharjah and Ajman, and goods collected in Abu Dhabi are stored at our nearest facility. If you want a storage space you can visit unannounced in Abu Dhabi, a local self-storage yard suits you better.",
    },
    {
      q: "Which Abu Dhabi districts do you collect from?",
      a: "Ten: Al Reem Island, Khalifa City, Al Shamkha, Al Raha, Al Khalidiyah, Al Mushrif, Yas Island, Saadiyat Island, Al Bateen and Mussafah. If yours is not listed, send the address and we will confirm.",
    },
    {
      q: "Can you move me from Abu Dhabi to Dubai?",
      a: "Yes. Moves between Abu Dhabi and Dubai are a same-day job, with the crew usually proposing a mid-morning start to avoid the worst of the road. If your dates do not match, storage covers the gap.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing loose small items is separate, and doing that yourself is the biggest saving on any move.",
    },
    {
      q: "Do you do a straight move between two Abu Dhabi addresses?",
      a: "Tell us both addresses and the dates, and we will say plainly whether it is a job we take. Our core service here is collection, with the goods moved on or stored, and we would rather confirm than assume.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Abu Dhabi",
  cta: {
    h2: "Moving out of or within Abu Dhabi?",
    p: "Send the district, the building and your dates, and we will tell you what we can do and what it depends on.",
  },
  siblings: [
    "/moving-storage-abu-dhabi/villa-movers",
    "/moving-storage-abu-dhabi/house-movers",
    "/moving-storage-abu-dhabi/furniture-movers",
    "/moving-storage-abu-dhabi/office-movers",
    "/moving-storage-abu-dhabi/moving-cost",
    "/moving-storage-abu-dhabi/best-movers",
    "/moving-storage-abu-dhabi/mussafah-movers",
  ],
}

export const SILO6_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------------ villa-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/villa-movers",
    crumb: "Villa Movers",
    navLabel: "Villa moving",
    navBlurb: "Khalifa City, Al Mushrif, Al Raha and Al Shamkha villas, garage included.",
    title: "Villa Movers and Packers in Abu Dhabi | Garage Included",
    description:
      "Villa movers and packers in Abu Dhabi: Khalifa City, Al Mushrif, Al Raha and Al Shamkha. We count the garage, wrap at the door, and store goods if dates slip.",
    keywords:
      "villa movers and packers in abu dhabi, villa movers in abu dhabi, villa moving abu dhabi, khalifa city movers, al mushrif movers",
    ogTitle: "Villa Movers and Packers in Abu Dhabi",
    h1: "Villa Movers in Abu Dhabi: Garage and Garden Counted",
    introH2: "Villa moving in Abu Dhabi, in brief",
    hero: [
      "Villa movers and packers in Abu Dhabi are judged on one thing above all: whether the quote counted everything. A villa is bigger than its bedroom count, because the garage, the garden and the store room are not in anyone's mental model of the house. This is the villa end of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), where we collect, wrap and move from your door.",
      "This page is for households in Khalifa City, Al Mushrif, Al Raha and Al Shamkha, the villa districts where we collect most often. It covers what makes a villa move larger than expected, how gated communities affect the day, and what to do when the next home is not ready.",
      "As elsewhere in Abu Dhabi, goods go to our nearest facility, in Dubai, if they need holding. We do not run an Abu Dhabi warehouse.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What makes a villa move bigger than the bedroom count",
        paras: [
          "**The garage.** In villa districts it is often the single largest space by volume: bikes, tools, outdoor furniture, a spare fridge, boxes from a previous move that were never opened.",
          "**The garden and terrace.** Dining sets, loungers, parasols, planters and a barbecue. They are bulky, awkward and dirtier than expected. Clean them before wrapping, or the dust travels with them.",
          "**The store room and maid's room.** Usually already used as overflow, densely packed, and rarely inventoried by the household before the day.",
          "Count all three before you agree a date. A villa quoted on bedrooms alone comes in low, and a crew sized for that quote runs out of day. For larger villas we would rather survey first, by video walkthrough or a visit, so the quote reflects what is really there.",
        ],
      },
      {
        kind: "table",
        h2: "Four villa districts, four different jobs",
        columns: ["District", "What the homes are like", "What to plan for"],
        rows: [
          ["Khalifa City", "Villas on generous plots with large garages", "Garage as a major share of the volume"],
          ["Al Mushrif", "Settled villa streets, households that have been there a long time", "Years of accumulated contents, and extra time for sorting"],
          ["Al Raha", "Beachfront apartments and inland villas in one district", "Tell us which, because the two are very different jobs"],
          ["Al Shamkha", "A fast-growing mainland villa area with many households moving in", "Storage on the way in, while the house is being fitted out"],
        ],
        note: "Each district has its own page with more local detail, for example [Khalifa City](/locations/abu-dhabi/khalifa-city) and [Al Mushrif](/locations/abu-dhabi/al-mushrif).",
      },
      {
        kind: "checklist",
        h2: "Villa preparation",
        items: [
          "Return gas cylinders to the supplier. They cannot be moved or stored.",
          "Clear paint, thinners, pool chemicals, pesticides and fuel from the garage. None of them can travel.",
          "Register the crew and vehicle with community security if your development is gated.",
          "Clean outdoor furniture and drain anything holding water.",
          "Decide about plants early, because they cannot be stored and become the last-hour problem.",
          "Sort the pool and garden equipment in the shed nobody has opened this year.",
          "Check any vehicle size or delivery-hour limits at the new property.",
        ],
      },
      {
        kind: "prose",
        h2: "Moving in rather than out",
        paras: [
          "Not every villa job is a departure. In districts such as Al Shamkha many households are moving in, and their furniture often has nowhere to go while the house is finished. We collect from the old address, hold everything in storage under a barcoded inventory, and deliver when the villa is ready. Storage is billed monthly on the space used with no lock-in, so a late completion costs the extra weeks only.",
          "That is the case where one provider for the move and the storage matters most, because there is a single list of what is held and one number to call. The Dubai approach to the same job is in [moving and storage in Dubai](/moving-storage-dubai).",
        ],
      },
      {
        kind: "steps",
        h2: "How a villa move runs",
        items: [
          { h: "Survey", p: "A video walkthrough or a visit, with the garage, garden and store room counted. It is free, and it is the difference between a quote and a guess." },
          { h: "Quote", p: "Written and itemised. Transport is quoted separately and confirmed before anything is booked." },
          { h: "Access", p: "Gate registration and any community requirement arranged ahead of the day." },
          { h: "Wrap and load", p: "Furniture is wrapped at the door, since wrapping is part of every collection. Beds, wardrobes and tables that come apart are taken apart and labelled." },
          { h: "Move or store", p: "To your next address in another emirate, or into storage under a barcoded inventory." },
        ],
      },
      {
        kind: "prose",
        h2: "Gated communities and the day itself",
        paras: [
          "Villa districts in Abu Dhabi are often gated, and a gate can add more delay than the carrying. Register the crew and vehicle with the community's security office before the day, with names and a vehicle plate if asked, and find out the permitted hours, because some communities restrict moves at weekends or on certain days.",
          "Confirm where a large vehicle can stand, because a driveway that suits a car may not suit a moving vehicle, and tell us in advance if it does not so the carry can be planned. Finally, tell the community at the other end the delivery date, so the same arrangements are in place on arrival.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you collect from the garage as well as the house?",
        a: "Yes, and it is often the largest area by volume. Say so when you ask for a quote, because a villa priced on bedrooms alone will be quoted short.",
      },
      {
        q: "Do you handle community gate access?",
        a: "Yes. Most gated communities want the crew and vehicle registered with security in advance. Tell us the community at booking and we will arrange it, so the crew is not waiting at the gate.",
      },
      {
        q: "Where do you store goods collected from an Abu Dhabi villa?",
        a: "At our nearest facility, which is in Dubai. Abu Dhabi is a collection service, and we do not operate a warehouse there. Goods are held under a barcoded inventory, billed monthly with no lock-in.",
      },
      {
        q: "Can you move me out of an unfinished villa or into one that is not ready?",
        a: "Yes. Everything is collected and stored until the property is ready, then delivered. Billing is monthly, so a late completion costs the extra weeks and nothing else.",
      },
      {
        q: "Do I need a survey?",
        a: "For larger villas, yes. It is free, takes about half an hour, and it is how the garage, garden and store room get counted rather than guessed at.",
      },
    ],
    serviceType: "Villa moving",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Moving a villa in Abu Dhabi?",
      p: "Ask for a survey, and make sure the quote counts the garage, the garden and the store room.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },

  /* ----------------------------------------------------------- house-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/house-movers",
    crumb: "House Movers",
    navLabel: "House and flat moving",
    navBlurb: "Towers on Al Reem, older streets in Khalidiyah, Yas, Saadiyat and Al Bateen.",
    title: "House Movers in Abu Dhabi | Flats, Villas and Townhouses",
    description:
      "House movers in Abu Dhabi: flats on Al Reem, older blocks in Khalidiyah, Yas, Saadiyat and Al Bateen. We book the lift, wrap at your door and store between dates.",
    keywords:
      "house movers in abu dhabi, abu dhabi house movers and packers, house packers and movers in abu dhabi, home movers abu dhabi, apartment movers abu dhabi",
    ogTitle: "House Movers in Abu Dhabi",
    h1: "House Movers in Abu Dhabi: Flats, Villas, Townhouses",
    introH2: "House moving in Abu Dhabi, in brief",
    hero: [
      "House movers in Abu Dhabi face a spread of building types that is wider than in most cities: glass towers on Al Reem, older low-rise blocks in Al Khalidiyah, new residential districts on Yas and Saadiyat, and diplomatic and executive housing in Al Bateen. This page is the household end of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), and it is organised by building because that, not distance, decides the job.",
      "We collect from your address, wrap at your door, take apart what comes apart, and move your goods on or into storage, with a barcoded inventory throughout. Where it is a flat, we book the service lift and any permit. Where it is a house, we plan the access.",
      "If you are moving to Dubai or another emirate, say so when you ask for a quote. Moves between emirates are routine, and we plan the day around the road.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What the building tells us about the move",
        columns: ["District", "Typical homes", "What decides the day"],
        rows: [
          ["Al Reem Island", "High-rise towers reached by bridge", "Every tower wants the service lift booked, and the slot comes first"],
          ["Al Khalidiyah", "Older buildings in a dense central area", "The street and the stairwell, rather than a booked lift"],
          ["Yas Island", "New-build residential next to a major event venue", "Race and concert weekends change what the roads allow"],
          ["Saadiyat Island", "Fewer, higher-value collections", "Declaring what is actually being moved, and careful handling"],
          ["Al Bateen", "Diplomatic and executive housing", "Households arrive and leave on a posting cycle, not a lease cycle"],
        ],
        note: "Local detail for each is on its location page, for example [Al Reem Island](/locations/abu-dhabi/al-reem-island) and [Al Khalidiyah](/locations/abu-dhabi/al-khalidiyah).",
      },
      {
        kind: "prose",
        h2: "Towers: the lift slot comes first",
        paras: [
          "In a high-rise, the furniture is rarely the constraint. The service lift is. Most towers run a booking system for it, with limited hours, and many want notice or a permit before a move. A crew that arrives without a slot waits, and a waiting crew is paid for.",
          "We book the lift and any permit for your building and plan the move inside the window, so the day does not start in a negotiation with the front desk. If you can tell us the tower, the floor and whether there is a separate service entrance, the plan is straightforward.",
        ],
      },
      {
        kind: "prose",
        h2: "Older buildings: the stairwell and the street",
        paras: [
          "Older low-rise buildings, particularly in Al Khalidiyah, can have narrower stairwells, no service lift and limited kerb space. The job there is carrying, and time goes on the stairs rather than at the lift.",
          "Measure the largest pieces against the stairwell and the turn at each landing before you commit to taking them. We will tell you before the day if something will not come down, rather than discover it halfway.",
        ],
      },
      {
        kind: "checklist",
        h2: "House move checklist",
        items: [
          "Ask building management for the move procedure, the permitted hours and any permit.",
          "Tell us the building type, the floor and whether there is a service lift.",
          "Measure large pieces against the stairwell, doorways and the new building's lift.",
          "Confirm the road conditions for the day, especially on Yas around events.",
          "Declare anything high-value so it can be recorded and handled accordingly.",
          "Box small items yourself and label by room. It is the easiest way to lower the quote.",
        ],
      },
      {
        kind: "prose",
        h2: "When your dates do not line up",
        paras: [
          "Handing back one home and getting into the next rarely happens on the same day. Goods go into storage at our nearest facility, in Dubai, under a barcoded inventory, billed monthly on the space used with no lock-in, and come back when your new home is ready.",
          "Abu Dhabi is a collection service for us, so we do not run a warehouse here. If you are moving within Abu Dhabi and need no storage, send both addresses and we will say plainly whether it is a job we take.",
        ],
      },
      {
        kind: "steps",
        h2: "How a house or flat move runs",
        items: [
          { h: "Tell us the building and the dates", p: "District, building, floor and when you need to be out." },
          { h: "Get a written quote", p: "Itemised, with a video walkthrough or a visit for anything larger than a flat. Transport is quoted separately and confirmed before booking." },
          { h: "We book access", p: "Lift and permit for towers, and the stairwell and parking plan for older buildings." },
          { h: "Wrap and collect", p: "Furniture is wrapped at your door, wrapping being part of every collection." },
          { h: "Deliver or store", p: "To your next address, or into storage until it is ready." },
        ],
      },
      {
        kind: "prose",
        h2: "When the move is decided at short notice",
        paras: [
          "Postings and job changes mean many Abu Dhabi moves are decided with days rather than weeks to spare. If that is your situation, say so in the first message. What helps most is the building name and floor, a rough list of what is moving, and whether a lift or stairs are involved. With those we can tell you what is possible and what it depends on.",
          "A short-notice move does not need a lower standard of wrapping or record-keeping. It needs the booking steps done in a different order, with the lift slot first, because that is the item most likely to run out of availability.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you move flats as well as houses?",
        a: "Yes. A flat in a tower depends on the lift slot and permit. A house depends on access and the volume of the garage and garden. Tell us which when you ask for a quote.",
      },
      {
        q: "Do you book the lift and permit?",
        a: "Yes. We arrange the service lift and any move permit at your building and plan the move inside the window it allows.",
      },
      {
        q: "Can you move me out of an older building without a lift?",
        a: "Yes. Tell us the floor and the stairwell width and we plan for carrying. We will say before the day if a piece will not come down.",
      },
      {
        q: "What if my new place is not ready?",
        a: "Goods go into storage at our nearest facility in Dubai under a barcoded inventory, billed monthly on the space used with no lock-in, and are delivered when you are ready.",
      },
      {
        q: "Do you move to Dubai?",
        a: "Yes. Moves between Abu Dhabi and Dubai are routine, and we plan the start time around the road.",
      },
    ],
    serviceType: "House moving",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Moving house in Abu Dhabi?",
      p: "Tell us the district, the building and your dates, and we will plan the access first.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },

  /* ------------------------------------------------------- furniture-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/furniture-movers",
    crumb: "Furniture Movers",
    navLabel: "Furniture moving",
    navBlurb: "A few big pieces or a whole house of furniture, wrapped and moved.",
    title: "Furniture Movers in Abu Dhabi | House Furniture Wrapped, Moved",
    description:
      "Furniture movers in Abu Dhabi for a few pieces or a whole house of furniture. We wrap, take apart, carry, move and store, with a barcoded inventory. Free quote.",
    keywords:
      "furniture movers in abu dhabi, house furniture movers in abu dhabi, furniture moving abu dhabi, furniture removals abu dhabi, move furniture abu dhabi",
    ogTitle: "Furniture Movers in Abu Dhabi",
    h1: "Furniture Movers in Abu Dhabi: Wrapped and Moved",
    introH2: "Furniture moving in Abu Dhabi, in brief",
    hero: [
      "Furniture movers in Abu Dhabi are asked to do two quite different things: move a few large pieces from one address to another, or take a whole house of furniture out of a home and hold it until the next one is ready. Both are part of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), and both start the same way, with a list of items rather than a count of rooms.",
      "We collect from your address, wrap each piece at the door, take apart what is built to come apart, carry it out and move it onward or into storage, with a barcoded inventory throughout. Furniture wrapping is part of every collection.",
      "If your furniture is going into storage, it goes to our nearest facility, in Dubai. We do not operate a warehouse in Abu Dhabi, and we will not pretend otherwise.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Whole-house furniture versus a few pieces",
        paras: [
          "A whole house of furniture is a planned job. The volume is large, the pieces vary, and the order in which things are loaded and stored matters, because you will want some of them back before others. We list it item by item, so the inventory is something you can use afterwards, not just a record for us.",
          "A few pieces is simpler, but access matters more than people expect. A single wardrobe that will not turn the corner of a stairwell is a problem whether it is one piece or twenty. We ask about the lift, the stairs and the doorways before quoting, so the quote covers the real job.",
        ],
      },
      {
        kind: "cards",
        h2: "How furniture is protected",
        items: [
          { icon: "🛋️", h: "Sofas and sectionals", p: "Wrapped whole where they fit and in sections where they do not. Fabric and leather are wrapped differently." },
          { icon: "🛏️", h: "Beds and mattresses", p: "Frames taken apart with fixings labelled to the frame. Mattresses are covered and carried flat." },
          { icon: "🚪", h: "Wardrobes and wall units", p: "Doors, shelves and mirrors are removed and wrapped separately, then labelled so the unit goes back together in order." },
          { icon: "🍽️", h: "Tables and glass", p: "Tops are carried upright with corner protection, and glass travels on its own." },
          { icon: "🔌", h: "Appliances", p: "Freestanding appliances are moved upright with doors secured. Anything plumbed in needs a technician." },
          { icon: "🪑", h: "Chairs and small pieces", p: "Grouped and wrapped in sets, so a dozen chairs are one inventory line." },
        ],
      },
      {
        kind: "prose",
        h2: "Why access decides the day in Abu Dhabi",
        paras: [
          "In a high-rise on Al Reem Island, the service lift is the constraint, and the slot has to be booked. In an older building in Al Khalidiyah, the constraint is the stairwell and the kerb. In a villa in Khalifa City, it is the volume of the garage as much as the house.",
          "These are the reasons we ask about the building before the furniture. A sofa that fits the lift in one tower may not clear a landing in another, and finding out on the day costs everyone time.",
        ],
      },
      {
        kind: "checklist",
        h2: "What we take apart and rebuild",
        items: [
          "Bed frames, bunk beds and divans, with fixings bagged and attached to each piece.",
          "Wardrobes, wall units and shelving, including doors off their hinges.",
          "Dining tables with removable legs, and desks that come apart.",
          "TV brackets and curtain rails, if you want them moved with you.",
          "Anything that will not fit the new building's lift or stairwell, flagged before the day.",
        ],
        note: "Fitted units, plumbed-in appliances and split air conditioners need a technician, not a moving crew. Tell us at quoting stage and we will say what we can take down.",
      },
      {
        kind: "prose",
        h2: "Furniture in storage between homes",
        paras: [
          "If your furniture is going into storage, it travels with its barcoded inventory to our facility in Dubai, and is held there billed monthly on the space used with no lock-in. When the new home is ready, pieces come out in the order you need them, and the inventory shows exactly what is where.",
          "Because Abu Dhabi is a collection service for us, the carrying and the storage are one job, with one list and one number to call. The storage side is described on our [Abu Dhabi locations page](/locations/abu-dhabi).",
        ],
      },
      {
        kind: "steps",
        h2: "How a furniture move runs",
        items: [
          { h: "List the pieces", p: "A list or photos for a small job, a video walkthrough or visit for a whole house." },
          { h: "Check both buildings", p: "Lift, stairs, parking and loading access at both ends." },
          { h: "Wrap and dismantle", p: "Each piece wrapped at your door. What comes apart is labelled." },
          { h: "Move or store", p: "To the new address in another emirate, or into storage under a barcoded inventory." },
          { h: "Deliver and rebuild", p: "Beds first. What we took apart goes back together." },
        ],
      },
      {
        kind: "prose",
        h2: "What to measure before you ask for a quote",
        paras: [
          "Three measurements prevent most furniture surprises: the widest piece against every doorway on the route, the longest piece against the turn of each stairwell or lift, and the tallest piece against the lift's door height. Write them down, take photos of the route, and send them with your list.",
          "For a sofa, measure the diagonal depth as well as the width, because that is the dimension that decides whether it will turn a corner. With those figures we can tell you before the day which pieces go as they are, which come apart and which will not fit, so the building does not make that decision for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you move furniture only, without boxes?",
        a: "Yes. A furniture-only job is quoted on the pieces, not the rooms. Send a list or photos and both addresses, and we confirm the building access before the date.",
      },
      {
        q: "Can you move a whole house of furniture?",
        a: "Yes. It is planned as a full job, with a video walkthrough or a visit and an item-by-item inventory, so you can ask for pieces back in the order you need them.",
      },
      {
        q: "Where is furniture stored if it cannot go straight to my new home?",
        a: "At our nearest facility, in Dubai. Abu Dhabi is a collection service, and we do not operate a warehouse there. Storage is billed monthly on the space used with no lock-in.",
      },
      {
        q: "Do you take furniture apart and rebuild it?",
        a: "Yes, for pieces designed to come apart. Fixings are bagged and labelled, and we rebuild at the other end. Fitted units and plumbed-in appliances need a technician.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection and is not an add-on.",
      },
    ],
    serviceType: "Furniture moving",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Moving furniture in Abu Dhabi?",
      p: "Send a list or photos and both addresses, and we will quote the pieces, not the rooms.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },

  /* ---------------------------------------------------------- office-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/office-movers",
    crumb: "Office Movers",
    navLabel: "Office and business moving",
    navBlurb: "Out of hours, labelled by department, with Mussafah stock and records covered.",
    title: "Office Movers in Abu Dhabi | Out of Hours, Gap Covered",
    description:
      "Office movers in Abu Dhabi for offices, Mussafah stock and records. We collect out of hours, label by department and store goods if the new space is not ready.",
    keywords:
      "office movers in abu dhabi, office movers abu dhabi, office relocation abu dhabi, business movers abu dhabi, mussafah movers, commercial movers abu dhabi",
    ogTitle: "Office Movers in Abu Dhabi",
    h1: "Office Movers in Abu Dhabi: Out of Hours, Labelled, Gap Covered",
    introH2: "Office moving in Abu Dhabi, in brief",
    hero: [
      "Office movers in Abu Dhabi are judged by whether people can work on the next working day, and the way to protect that is to move out of hours and to plan for the new space not being ready on time. This is the business end of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), and it covers offices, and also the stock, records and equipment that Mussafah businesses hold.",
      "We collect out of hours, label by department or desk, record items in a barcoded inventory, and, where the new floor is not finished, hold everything in storage and return it in stages.",
      "Abu Dhabi is a collection service for us, with storage at our nearest facility in Dubai. We do not run an Abu Dhabi warehouse.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Plan for the fit-out overrunning",
        paras: [
          "The most common office-move problem is the new floor not being ready. Fit-outs overrun, and the answer is to plan for it rather than hope. If the new space is late, equipment and furniture go into storage, labelled by department, and come back in stages as areas are completed, so teams are not waiting for everything at once.",
          "The second planning point is timing. Most commercial buildings restrict moving to defined windows, and an office cannot be cleared around people working in it, so collections are normally evenings or a weekend. We plan inside the window your building allows and book the lift and bay for the whole job.",
        ],
      },
      {
        kind: "table",
        h2: "Offices, stock and records: three kinds of business move",
        columns: ["What is moving", "Typical setting", "What to plan for"],
        rows: [
          ["Office furniture and IT", "Offices in commercial towers", "Out-of-hours window, department labelling, data backed up"],
          ["Stock and equipment", "Mussafah business units", "Item-level records, and loading access at the unit"],
          ["Records and archives", "Any office with paper files", "Box-level labelling and retrieval, covered separately from the move"],
        ],
        note: "Mussafah is described on our [Mussafah location page](/locations/abu-dhabi/mussafah): mostly business stock, records and equipment rather than households.",
      },
      {
        kind: "checklist",
        h2: "Office move checklist",
        items: [
          "Agree the date with your landlord, the new landlord and any fit-out contractor, and assume the new floor may be late.",
          "Ask building management for the moving procedure, hours and any permit at both addresses.",
          "Label items by department and desk, so they land where they are needed.",
          "Back up data and take sensitive documents with you rather than on the vehicle.",
          "Tell us about servers, networking equipment or anything needing special handling in advance.",
          "Decide what is going to the new office, what is going into storage and what is leaving for good.",
        ],
      },
      {
        kind: "steps",
        h2: "How an office move runs",
        items: [
          { h: "Survey", p: "A video walkthrough or a visit to size the job and spot the large or awkward items." },
          { h: "Quote and plan", p: "A written, itemised quote and a plan for the window, the lift and the labelling." },
          { h: "Collect out of hours", p: "Evening or weekend, inside the building's permitted window." },
          { h: "Record and label", p: "Items recorded in a barcoded inventory and labelled by department." },
          { h: "Deliver or store", p: "To the new floor, or into storage until it is ready, returned in stages." },
        ],
      },
      {
        kind: "prose",
        h2: "Records and stock that are not moving yet",
        paras: [
          "Many businesses want to store records or stock rather than move them. That is a storage job rather than a moving one, and [business storage in Dubai](/business-storage-dubai) covers it, including archiving and retrieval. The two can be booked together, with one inventory. Whatever goes into storage is boxed, labelled and recorded at box level, so one file can be found without opening twenty cartons.",
          "If you are moving between two Abu Dhabi addresses with no storage involved, send both addresses and say so, and we will tell you plainly whether it is a job we take.",
        ],
      },
      {
        kind: "prose",
        h2: "What a Mussafah business move involves",
        paras: [
          "A business move in Mussafah is usually less about desks and more about stock, equipment and records. The first question is what is moving and what is staying in storage: stock you are rotating, equipment between projects, records you must keep but do not need daily. Each is handled item by item and recorded, so the inventory tells you what is held and where.",
          "Loading access matters too, because units differ: dock-height access, a roller door and a ground-floor entrance each need a different plan. Tell us the access, the weight of the heaviest items and whether you have lifting equipment on site, and we will say what the day needs.",
        ],
      },
      {
        kind: "checklist",
        h2: "Out-of-hours moves: what the crew needs from you",
        intro: "An out-of-hours move runs well when a few things are settled in advance.",
        items: [
          "A named contact on site for the whole window, with access to keys and lifts.",
          "Confirmation from building or estate management that an out-of-hours move is permitted.",
          "A clear desk and emptied drawers, or an agreement that drawers go as they are.",
          "Items labelled by department, with a floor plan of where each goes at the new site.",
          "Any equipment that must not be switched off, flagged ahead of time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move an office out of hours?",
        a: "Yes. Office moves are normally planned for evenings or weekends, inside the window the building permits, with the lift and bay booked for the whole job.",
      },
      {
        q: "What if the new office is not ready?",
        a: "Goods go into storage at our nearest facility, in Dubai, labelled by department under a barcoded inventory, and come back in stages as areas complete. Storage is billed monthly with no lock-in.",
      },
      {
        q: "Do you move stock and equipment from Mussafah?",
        a: "Yes. Business moves there are mostly stock, records and equipment, recorded item by item. Tell us about anything that needs special handling.",
      },
      {
        q: "Do you handle IT equipment?",
        a: "We move and record it, and we suggest you back up data beforehand and take sensitive documents with you. Tell us in advance about servers or networking gear.",
      },
      {
        q: "Do you do a straight move between two Abu Dhabi offices?",
        a: "Send both addresses and the dates, and we will say plainly whether it is a job we take. Our core service in Abu Dhabi is collection, with goods moved on or stored.",
      },
    ],
    serviceType: "Office moving",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Moving an office in Abu Dhabi?",
      p: "Tell us what is moving and the date, and we will plan for the fit-out running late.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },

  /* ------------------------------------------------------------ moving-cost */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/moving-cost",
    crumb: "Cost of Movers and Packers",
    navLabel: "What movers cost",
    navBlurb: "How to compare movers in Abu Dhabi, and what each line of a quote means.",
    title: "Movers and Packers Cost in Abu Dhabi | How to Compare",
    description:
      "What movers and packers cost in Abu Dhabi depends on volume, access, packing and storage. How to compare cheap and professional movers on the same scope.",
    keywords:
      "cheap movers and packers in abu dhabi, cheap movers abu dhabi, movers and packers cost abu dhabi, how much do movers cost in abu dhabi, abu dhabi moving cost",
    ogTitle: "Movers and Packers Cost in Abu Dhabi",
    h1: "What Abu Dhabi Movers Charge For, Line by Line",
    introH2: "What movers charge for, in brief",
    hero: [
      "Choosing between the best, the cheapest and the most professional movers and packers in Abu Dhabi comes down to comparing quotes that describe the same job. A quote tells you the price of a scope, and two quotes with different scopes are not comparable, however similar the total looks. This guide, part of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), shows what to compare.",
      "We do not publish a price list, because a number without the facts behind it would mislead you. What we can do is show you every factor that sets a quote, so each appears as a line you can read.",
      "Our model in Abu Dhabi has two parts, transport and storage, and they are priced and shown separately.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What sets the price of a move from Abu Dhabi",
        intro: "Use the third column as a checklist when you compare two quotes.",
        columns: ["Factor", "What raises it", "What lowers it"],
        rows: [
          ["Volume", "A villa with garage and garden, many rooms of furniture", "Clearing what you do not need before the survey"],
          ["Building access", "A high floor with a shared lift, an old stairwell, a long carry", "Ground floor, a lift at the door, parking near the entrance"],
          ["Packing scope", "Full packing, fragile items, wardrobe boxes", "Boxing small items yourself, sealed and labelled"],
          ["Dismantling", "Many wardrobes, wall units, bunk beds", "Few pieces that come apart"],
          ["Destination", "Another emirate, with a long run", "A short, direct route"],
          ["Date", "Weekends, month-ends, peak seasons, short notice", "A weekday with a few weeks' notice"],
          ["Storage", "Anything held between dates, for longer", "A move that goes straight from one door to the next"],
        ],
      },
      {
        kind: "prose",
        h2: "How our Abu Dhabi quote is built",
        paras: [
          "We collect from your address, which is the transport part of the quote. Transport is quoted separately and confirmed before anything is booked. If goods are held, that is the storage part: billed monthly on the space they occupy, with no lock-in, at our nearest facility in Dubai.",
          "Showing the two separately is deliberate. A combined figure hides what you are paying for, and it makes a short storage period look the same as a long one. With separate lines you can see transport once, and storage grow or shrink with your dates.",
        ],
      },
      {
        kind: "checklist",
        h2: "How to compare two movers on the same footing",
        items: [
          "Ask both for an itemised written quote with the same scope: items, packing and dismantling.",
          "Check that crew and vehicles are stated, not implied.",
          "Check whether wrapping is included. For us, furniture wrapping is part of every collection.",
          "Confirm who books the lift and permit at your building, and who pays if a slot is missed.",
          "Ask whether the same company will store your goods if your dates move.",
          "Ask what the quote assumes about access, and what changes if it turns out harder.",
        ],
      },
      {
        kind: "prose",
        h2: "Cheap movers, professional movers: what the labels hide",
        paras: [
          "Both labels are marketing until you read the quote. A cheap quote can be perfectly honest if the job is small and access is easy. It becomes expensive when it leaves out something the job needs, such as wrapping, a second building or the lift booking. A professional quote is only better if it states more, in writing, than the cheap one.",
          "So the useful question is not who is cheapest or who calls themselves best. It is who has written down the most about your move, and who takes responsibility if it changes.",
        ],
      },
      {
        kind: "prose",
        h2: "Ways to lower the cost honestly",
        paras: [
          "The largest saving most households can make is packing small items themselves. Sealed, labelled cartons stack squarely, which makes loading faster and uses less space if anything goes into storage. The second is the date: a weekday with notice is easier to schedule than a month-end weekend. The third is clearing what you do not need before the survey, because every item removed is volume you do not pay to move. A fourth is flexibility on the start time: ask the building for the earliest lift slot it has, and tell your mover which hours you can take, since a flexible start gives everyone room to absorb a late lift.",
          "If you are moving to Dubai, the Dubai side of the same factors is set out in [moving and storage in Dubai](/moving-storage-dubai).",
        ],
      },
      {
        kind: "prose",
        h2: "What a good written quote contains",
        paras: [
          "A quote worth acting on states the address and the floor at both ends, the items or rooms covered, and the packing scope in words rather than just \"packing included\". It states the dismantling and reassembly, the crew and the vehicles, who books the lift and permit, and the date and time window.",
          "It also says what happens if the building refuses entry, and, if goods are stored, the monthly basis, the start date and how retrieval is arranged. For the storage lines in particular, ours are billed monthly on the space used with no lock-in. If any line is missing, ask for it before you pay anything, because a missing line is where a changed price lives.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do movers and packers cost in Abu Dhabi?",
        a: "It depends on volume, building access, packing scope, destination, date and storage. Our quotes are free and itemised, with transport and storage shown separately, so each factor is a visible line.",
      },
      {
        q: "Are cheap movers worth it?",
        a: "They can be, for a small job with easy access. The risk is a low quote that leaves out wrapping, the lift booking or a second building. Compare written scopes, not totals.",
      },
      {
        q: "How do I know who the best movers in Abu Dhabi are?",
        a: "Ask who has written down the most about your move: crew, vehicles, packing, access, and what happens if it changes. The company willing to put that in writing is the one taking responsibility.",
      },
      {
        q: "Why are transport and storage quoted separately?",
        a: "Because they are different costs. Transport is a one-off for the collection and delivery. Storage is monthly on the space used, with no lock-in, so it grows or shrinks with your dates.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate, and doing it yourself is the biggest saving.",
      },
    ],
    serviceType: "Moving cost guidance",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Comparing quotes in Abu Dhabi?",
      p: "Send us the other company's scope and we will quote the same job, so the numbers can be compared.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },

  /* ------------------------------------------------------------ best-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/best-movers",
    crumb: "How to Choose Movers",
    navLabel: "Choosing movers",
    navBlurb: "How to pick the best movers in Abu Dhabi, and what to ask before you book.",
    title: "Best Movers in Abu Dhabi | How to Choose a Moving Company",
    description:
      "How to choose the best movers in Abu Dhabi: the questions to ask any moving company, the warning signs in a quote, and how to compare on the same scope.",
    keywords:
      "best movers in abu dhabi, best movers and packers in abu dhabi, best moving companies in abu dhabi, professional movers in abu dhabi, how to choose movers abu dhabi",
    ogTitle: "How to Choose the Best Movers in Abu Dhabi",
    h1: "Best Movers in Abu Dhabi: What to Ask Before You Book",
    introH2: "Choosing movers, in brief",
    hero: [
      "The best movers in Abu Dhabi are the ones who put the most about your move in writing and stand behind it, not the ones with the lowest total or the loudest advert. There are many moving companies in Abu Dhabi, and the difference between a smooth move and a bad one is usually visible in the quote before anyone lifts a box. This guide is part of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi).",
      "We are one of those companies, so we have not ranked anyone. We can set out the questions that separate a reliable mover from a risky one, and answer them for ourselves, including the awkward one about where your goods are stored.",
      "If you read one section, read the one on quotes. A quote is a promise in writing, and the best predictor of what happens on the day.",
    ],
    sections: [
      {
        kind: "checklist",
        h2: "Questions to ask any moving company in Abu Dhabi",
        intro: "A reliable company answers all of these in writing without being pushed.",
        items: [
          "Is the quote itemised, with the scope, the crew, the vehicles and the date stated?",
          "Is wrapping included, or priced as an extra when the furniture is in the lobby?",
          "Who books the service lift and permit at your building, and what happens if a slot is missed?",
          "If goods are stored, where, in whose warehouse, and how is it billed?",
          "Does the quote cover both ends of the move, or only the first?",
          "What is the claims process if an item is damaged, and is it in writing?",
          "Will someone survey a larger move, or is the quote from a phone call?",
          "Is the company licensed and can it show its paperwork?",
        ],
      },
      {
        kind: "prose",
        h2: "The quote is the best test",
        paras: [
          "A low total is not the warning sign. A short quote is. When a quote does not state the crew, the vehicles, the packing scope and the building bookings, the missing lines are where the price changes later. Two companies quoting the same move should produce quotes that look similar line by line.",
          "Ask both to quote the same written scope. If one refuses, that tells you something. If both agree, the difference between them becomes real, and you can choose on that.",
        ],
      },
      {
        kind: "table",
        h2: "Warning signs and what they usually mean",
        columns: ["Sign", "What it often means"],
        rows: [
          ["A price over the phone with no survey", "A quote on room count, which comes in low for villas and large flats"],
          ["No mention of the lift or permit", "Left to you, and a missed slot costs a paid crew's time"],
          ["Wrapping not mentioned", "Probably an extra charged at the door"],
          ["No mention of where goods are stored", "Ask, because a vague answer can mean a third party"],
          ["No company name or licence on the quote", "No one accountable if something goes wrong"],
        ],
      },
      {
        kind: "prose",
        h2: "How we answer the same questions",
        paras: [
          "Our quotes are free and itemised, with transport and storage as separate lines. Furniture wrapping is part of every collection. We book the service lift and any permit at your Abu Dhabi building, and we survey larger moves by video or visit first.",
          "On storage, we are direct: Abu Dhabi is a collection service for us, and goods are held at our nearest facility, which is in Dubai, under one barcoded inventory, billed monthly on the space used with no lock-in. If you want a storage space in Abu Dhabi itself, a local self-storage yard suits you better, and we would rather say so now.",
        ],
      },
      {
        kind: "prose",
        h2: "Comparing us with another company",
        paras: [
          "If you have another quote, send us its scope and we will quote the same job, so the two numbers describe the same move. Our [guide to what Abu Dhabi movers charge for](/moving-storage-abu-dhabi/moving-cost) explains each line, so you can check both.",
        ],
      },
      {
        kind: "prose",
        h2: "Why a survey beats a phone quote",
        paras: [
          "A phone quote is based on what you remember, and people forget the garage, the balcony, the store room and what is on top of the wardrobes. A survey by video or in person counts them. The difference between the two is usually the difference between a quote that holds on the day and one that grows.",
          "For a flat, a short video walkthrough is enough. For a villa, a visit is better, because the garage and outbuildings are the largest source of surprise.",
        ],
      },
      {
        kind: "prose",
        h2: "What happens if the building says no",
        paras: [
          "A building can refuse entry for a reason nobody planned for: a missed permit, a lift out of service, a window that has already closed. Ask every company what happens then, in writing. Who pays for the crew's waiting time, and who rearranges the date? A company that has thought about it will have an answer.",
          "We book the lift and any permit ourselves for exactly this reason, so the first time a building hears about your move is not the morning of it.",
        ],
      },
      {
        kind: "prose",
        h2: "References, reviews and what to make of them",
        paras: [
          "A company's own testimonials tell you what it chose to publish. Independent reviews on public platforms tell you more, particularly the detailed ones that describe a problem and how it was handled. Read the three-star reviews as well as the five-star ones, and look for patterns in what goes wrong.",
          "Then ask the company for a reference from a move like yours, in a building like yours. A mover who has done a villa in a gated community will have more to say about it than one who mostly does studios.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I choose the best movers in Abu Dhabi?",
        a: "Compare itemised written quotes on the same scope. The company that states the crew, vehicles, packing, building bookings and what happens if something changes is taking responsibility for the move.",
      },
      {
        q: "Where will my goods be stored?",
        a: "At our nearest facility, which is in Dubai. Abu Dhabi is a collection service for us, and we do not operate a warehouse there. Storage is billed monthly on the space used with no lock-in.",
      },
      {
        q: "Should I get a survey?",
        a: "For anything larger than a studio, yes. A phone quote is usually based on room count and comes in low for villas and large flats.",
      },
      {
        q: "Will you quote the same scope as another company?",
        a: "Yes. Send us their scope and we will quote it, so the two numbers describe the same job.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection and is not an add-on.",
      },
    ],
    serviceType: "Moving company selection guidance",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Comparing movers in Abu Dhabi?",
      p: "Send us the other company's scope and we will quote the same job, so the numbers can be compared.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/house-movers",
      "/moving-storage-abu-dhabi/villa-movers",
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
    ],
  },

  /* ------------------------------------------------------- mussafah-movers */
  {
    silo: "s6",
    path: "/moving-storage-abu-dhabi/mussafah-movers",
    crumb: "Mussafah Movers",
    navLabel: "Mussafah (business moves)",
    navBlurb: "Stock, equipment and records collected from Mussafah units.",
    title: "Movers in Mussafah, Abu Dhabi | Stock, Equipment, Records",
    description:
      "Movers in Mussafah, Abu Dhabi, for business stock, equipment and records. We collect from your unit, record items one by one and hold goods at our nearest facility.",
    keywords:
      "movers in mussafah, movers and packers in mussafah, mussafah movers, business movers mussafah, equipment movers abu dhabi, stock storage mussafah",
    ogTitle: "Movers in Mussafah, Abu Dhabi",
    h1: "Movers in Mussafah: Stock, Equipment and Records",
    introH2: "Moving from Mussafah, in brief",
    hero: [
      "Movers in Mussafah handle a different kind of job from the rest of Abu Dhabi: this is where the emirate's businesses are, so most of what we collect is stock, equipment and records, not a household. It is the business end of [movers and packers in Abu Dhabi](/moving-storage-abu-dhabi), and it is recorded item by item, because a business needs to know exactly what it has and where.",
      "We collect from your unit, wrap and load, and record everything in a barcoded inventory. Abu Dhabi is a collection service for us, so goods are held at our nearest facility, which is in Dubai. We do not run a Mussafah warehouse.",
      "This page covers what we collect here, how to prepare a business move, and where a warehouse-leasing agent or a specialist heavy-lift contractor is the better choice than us.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What businesses move from Mussafah",
        columns: ["What", "Typical need", "What to plan for"],
        rows: [
          ["Stock", "Goods held between orders or between premises", "A packing list, item counts and a retrieval plan"],
          ["Equipment", "Tools and machines between projects or sites", "Weights and dimensions, and whether lifting equipment is on site"],
          ["Records", "Files and archives that must be kept", "Box-level labelling and an index you can search"],
          ["Office contents", "Desks and IT when a lease ends", "An out-of-hours window and a plan for the new space not being ready"],
        ],
        note: "The district is described on our [Mussafah location page](/locations/abu-dhabi/mussafah).",
      },
      {
        kind: "prose",
        h2: "Where we fit, and where we do not",
        paras: [
          "We are a storage business that moves things. That suits businesses that need stock, records or equipment collected and held, and brought back in part when needed. It does not suit moving heavy plant that needs a crane, or leasing a warehouse in Mussafah itself, and in those cases a specialist contractor or a leasing agent is the right call.",
          "If your job sits in between, send the details: what it is, how heavy the heaviest item is, what access the unit has, and where it is going. We will tell you plainly whether it is a job we take.",
        ],
      },
      {
        kind: "checklist",
        h2: "Business move checklist",
        items: [
          "List what is moving, with counts, and note anything that is unusually heavy or awkward.",
          "Tell us the access: dock height, a roller door, a ground-floor entrance, and whether you have lifting equipment on site.",
          "Label records and stock by box, and keep an index you can search later.",
          "Name a contact who will be on site for the whole collection window.",
          "Decide what comes back first, so the inventory order matches how you will need it.",
          "Check any estate or landlord rules on collection hours at your unit.",
        ],
      },
      {
        kind: "steps",
        h2: "How a Mussafah collection runs",
        items: [
          { h: "Send the details", p: "What is moving, its rough weight, the access at the unit and your dates." },
          { h: "Survey and quote", p: "A video walkthrough or a visit, with a written, itemised quote. Transport is quoted separately and confirmed before anything is booked." },
          { h: "Collect and record", p: "Goods are loaded and recorded item by item in a barcoded inventory." },
          { h: "Hold", p: "Goods go to our nearest facility, billed monthly on the space used with no lock-in." },
          { h: "Retrieve", p: "All of it or part of it, in the order you ask, to the address you choose." },
        ],
      },
      {
        kind: "prose",
        h2: "Records and stock that are not moving yet",
        paras: [
          "Many Mussafah businesses want to hold records or stock, not move them to a new site. That is a storage job as much as a moving one, and [business storage in Dubai](/business-storage-dubai) covers archiving and retrieval. The two can be arranged together under one inventory.",
          "For an office rather than a unit, our [office movers in Abu Dhabi](/moving-storage-abu-dhabi/office-movers) page covers out-of-hours moves and the fit-out running late.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you collect stock and equipment from Mussafah?",
        a: "Yes. Business collections here are mostly stock, equipment and records, recorded item by item in a barcoded inventory.",
      },
      {
        q: "Where are the goods held?",
        a: "At our nearest facility, which is in Dubai. Abu Dhabi is a collection service for us, and we do not operate a warehouse in Mussafah.",
      },
      {
        q: "Can you move heavy machinery?",
        a: "Tell us the weights and the access. Heavy plant that needs a crane is a job for a specialist contractor, and we will say plainly if that is what yours needs.",
      },
      {
        q: "Can I get part of my goods back?",
        a: "Yes. Retrieval can be all or part, in the order you ask, and the inventory shows what is where.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Packing stock and equipment into cartons or crates is separate.",
      },
    ],
    serviceType: "Business moving",
    areaServed: "Mussafah, Abu Dhabi",
    cta: {
      h2: "Moving stock or equipment from Mussafah?",
      p: "Send what is moving, its weight and the access, and we will tell you plainly whether it is a job we take.",
    },
    siblings: [
      "/moving-storage-abu-dhabi/office-movers",
      "/moving-storage-abu-dhabi/furniture-movers",
      "/moving-storage-abu-dhabi/moving-cost",
      "/moving-storage-abu-dhabi/best-movers",
    ],
  },
]
