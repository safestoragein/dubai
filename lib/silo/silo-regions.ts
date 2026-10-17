import type { SiloPageContent } from "./types"

/**
 * REGIONAL MOVERS SILOS (Oct 2026) — the keyword-gap pass.
 *
 *   s7   /moving-storage-uae               UAE-wide heads (hub only)
 *   s8   /moving-storage-sharjah           hub + furniture-movers, house-movers, moving-cost
 *   s9   /moving-storage-ajman             hub only
 *   s10  /moving-storage-ras-al-khaimah    hub only
 *   s11  /moving-storage-al-ain            hub only
 *
 * KEYWORD OWNERSHIP (Semrush UAE, desktop, Oct 2026; volume / KD)
 *   UAE hub     movers and packers 2,900/46 · movers and packers in uae 480/41 ·
 *               movers and packers uae 390/41 · packers and movers 590/35 ·
 *               moving companies 1,900/26 · moving companies in uae 260/42 ·
 *               best moving companies in uae 220/35 · moving services 390/41
 *   Sharjah     movers in sharjah 2,400/15 · movers and packers in sharjah 880/34 ·
 *               moving companies in sharjah 110/40
 *     furniture furniture movers sharjah 720/25
 *     cost      best movers in sharjah 320/33 · cheap movers in sharjah 170/36
 *   Ajman       movers in ajman 1,600/16 · movers and packers in ajman 480/14 ·
 *               best movers in ajman 260/12 · furniture movers ajman 90/9
 *   RAK         movers and packers in ras al khaimah 480/16 ·
 *               movers and packers ras al khaimah 480/17
 *   Al Ain      movers and packers in al ain 260/17
 *
 * Fujairah (movers and packers in fujairah 50/6) is deliberately NOT built: 80
 * searches a month does not justify a page, and a thin page is a doorway page.
 *
 * SCOPE HONESTY — taken from lib/facilities.ts and the live /locations pages:
 *   - Warehouses: Dubai, Sharjah, Ajman. Goods collected there are stored there.
 *   - Abu Dhabi, Al Ain and the Northern Emirates (RAK, Fujairah, UAQ) are
 *     COLLECTION SERVICES with storage at the nearest facility. The RAK and Al Ain
 *     pages say so plainly and do not claim a straight local removal.
 *   - Sharjah/Ajman warehouse addresses are NOT published, so no page states one.
 *
 * Fact pack: see silo5-movers.ts. No prices, ratings, review counts, crew/truck
 * numbers, response times, or "N areas" beyond the counts the live location
 * pages already publish (Sharjah: fifteen districts; Ajman: twelve).
 *
 * The hubs are NOT in SILO_PAGES (like AD_HUB): they are rendered by their own
 * route files in hub mode. Sharjah's hub is registered in HAND_WRITTEN so its
 * three children can list it as a sibling (rule 2 needs 3–5 same-silo siblings).
 */

/* ============================== UAE HUB (s7) ============================== */
export const UAE_HUB: SiloPageContent = {
  silo: "s7",
  path: "/moving-storage-uae",
  crumb: "Movers UAE",
  navLabel: "Movers in the UAE",
  navBlurb: "One moving company that packs, moves and stores, across the UAE.",
  title: "Movers and Packers in the UAE | Moving Companies That Store",
  description:
    "Movers and packers across the UAE: one moving company that packs, moves and stores, with warehouses in Dubai, Sharjah and Ajman and collection in every emirate.",
  keywords:
    "movers, movers in uae, movers and packers in uae, movers and packers uae, movers and packers, packers movers, packers and movers, movers near me, furniture movers, moving companies, moving companies in uae, best moving companies in uae, moving services uae",
  ogTitle: "Movers and Packers in the UAE",
  h1: "Movers and Packers in the UAE: Pack, Move, Store",
  introH2: "Moving across the UAE, in brief",
  hero: [
    "Movers and packers in the UAE are usually sold as a local service, but a lot of UAE moves cross an emirate line: Dubai to Sharjah for rent, Sharjah to Abu Dhabi for work, Ajman to Dubai for a commute. We are a moving company that also stores, which matters in exactly those moves, because the two lease dates never match. Each emirate has its own page below, and the Dubai one is [moving and storage in Dubai](/moving-storage-dubai).",
    "We pack and wrap at your door, take apart what comes apart, collect, move and, when the dates do not line up, store, under one barcoded inventory. Where your goods are held depends on the emirate, and we say so plainly for each.",
    "This page is the map: how we cover each emirate, what to look for when you compare moving companies, and where to start.",
  ],
  sections: [
    {
      kind: "table",
      h2: "How we cover each emirate",
      intro:
        "Three emirates have our own warehouse, so goods collected there are stored there. The rest are collection services, with storage at the nearest of the three.",
      columns: ["Emirate", "How we serve it", "Start here"],
      rows: [
        ["Dubai", "Our warehouse is in Dubai, and the crew collects across the districts", "[Movers in Dubai](/moving-storage-dubai)"],
        ["Sharjah", "A warehouse in Sharjah, so goods collected there stay there", "[Movers in Sharjah](/moving-storage-sharjah)"],
        ["Ajman", "A warehouse in Ajman, so goods collected there stay there", "[Movers in Ajman](/moving-storage-ajman)"],
        ["Abu Dhabi", "Collection from the district, with storage at our nearest facility", "[Movers in Abu Dhabi](/moving-storage-abu-dhabi)"],
        ["Ras Al Khaimah", "Collection from the district, with storage at our nearest facility", "[Movers in Ras Al Khaimah](/moving-storage-ras-al-khaimah)"],
        ["Al Ain", "Collection from the city, with storage at our nearest facility", "[Movers in Al Ain](/moving-storage-al-ain)"],
        ["Fujairah", "Collection from the east coast, with storage at our nearest facility", "[Movers in Fujairah](/moving-storage-fujairah)"],
      ],
      note: "Umm Al Quwain is served the same way as Ras Al Khaimah, with Ajman the nearest facility. See our [locations pages](/locations) for each.",
    },
    {
      kind: "prose",
      h2: "What movers and packers actually do",
      paras: [
        "The words cover three separate jobs. Packing is wrapping and boxing what you own. Moving is carrying it out, transporting it and carrying it in. And, where a move has a gap, storage is holding it between the two. Many companies do the first two and leave you to find someone for the third.",
        "We do all three, which is the point of being one company. You get one quote, one inventory and one number to call, instead of two companies who each assume the other is responsible for the gap. Furniture wrapping is part of every collection, not an add-on.",
      ],
    },
    {
      kind: "prose",
      h2: "Furniture movers across the UAE",
      paras: [
        "Furniture is the most searched part of any move here, and the job is the same everywhere: wrap each piece at the door, take apart what comes apart, carry it out and move it on or into storage. What changes between emirates is the building: a tower with a booked lift, a villa with a gate, an older block with stairs. Each emirate page above says what to plan for.",
        "If you are looking for movers near you, start with the emirate you are moving from. Sharjah and Ajman goods stay in the emirate, and the crew comes to your door in each. Send the address and the building type, and we will confirm coverage before you commit to anything.",
      ],
    },
    {
      kind: "checklist",
      h2: "How to choose among moving companies in the UAE",
      intro: "Whichever company you pick, these questions put quotes on the same footing.",
      items: [
        "Is the quote itemised and in writing, with the scope, the crew, the vehicles and the date stated?",
        "Is wrapping included, or priced as an extra at the door?",
        "Who books the service lift and any permit at both buildings, and what happens if a slot is missed?",
        "If the move crosses an emirate, does the quote cover both ends and the route between them?",
        "Will the same company store your goods if your dates move, or is that a second booking?",
        "What does the quote assume about access, and what changes if the real access is harder?",
      ],
    },
    {
      kind: "prose",
      h2: "Moving between emirates",
      paras: [
        "Each emirate runs its own tenancy registration and its own conventions, so a lease ending in one and a lease starting in another are two unrelated calendars. A gap of weeks is the normal case. That is why a mover that also stores is more useful on these moves than on a move inside one city.",
        "Practical points differ by emirate: building rules, permitted moving hours, and the traffic on the day. We plan around them and tell you what we find at each end, rather than assuming one emirate works like another.",
      ],
    },
    {
      kind: "steps",
      h2: "How a UAE move runs",
      items: [
        { h: "Tell us both ends", p: "The emirate, the district, the building and the floor at each address, and your dates." },
        { h: "Get a written quote", p: "Itemised, with a video walkthrough or a visit for anything larger than a flat. Transport is confirmed before anything is booked." },
        { h: "We book the buildings", p: "The service lift and any move permit at both addresses, inside the window each building allows." },
        { h: "Wrap, load and move", p: "Furniture is wrapped at your door, and what comes apart is taken apart and labelled, all recorded in a barcoded inventory." },
        { h: "Deliver or store", p: "To the new address, or into storage until it is ready, billed monthly on the space used with no lock-in." },
      ],
    },
    {
      kind: "prose",
      h2: "Storage in the middle of a move",
      paras: [
        "Storage is billed monthly on the space your goods occupy, with no lock-in, so a handover that slips costs the extra weeks and nothing else. Goods are held in whichever of our warehouses is nearest to where they were collected.",
        "You can read how the storage side works in [self storage in Dubai](/self-storage-dubai), and the services pages for [personal storage](/personal-storage-dubai) and [business storage](/business-storage-dubai) cover what you can store.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you move across all the emirates?",
      a: "Yes. We have warehouses in Dubai, Sharjah and Ajman, and we collect from Abu Dhabi, Al Ain and the Northern Emirates with storage at the nearest facility. Each emirate page says exactly how.",
    },
    {
      q: "Where are my goods stored?",
      a: "In Dubai, Sharjah and Ajman, in the warehouse in the emirate where they were collected. From Abu Dhabi, Al Ain and the Northern Emirates they go to the nearest of those three.",
    },
    {
      q: "Can you move me from one emirate to another?",
      a: "Yes. These moves are routine, and the main planning point is the gap between the two leases, which storage covers. Send both addresses and both dates.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate, and doing that yourself is the biggest saving on any move.",
    },
    {
      q: "How do I get a quote?",
      a: "Send the emirate, district, building and floor at each end, and a rough list of what is moving. For larger jobs we do a video walkthrough or a visit, and the quote is written and itemised.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "United Arab Emirates",
  cta: {
    h2: "Moving within or between emirates?",
    p: "Send both addresses and your dates, and we will tell you how the move runs and where your goods would be held.",
  },
  siblings: [],
}

/* ============================ SHARJAH HUB (s8) ============================ */
export const SHARJAH_HUB: SiloPageContent = {
  silo: "s8",
  path: "/moving-storage-sharjah",
  crumb: "Movers Sharjah",
  navLabel: "Movers in Sharjah",
  navBlurb: "Packing, moving and local storage in Sharjah.",
  title: "Movers and Packers in Sharjah | Moving With Local Storage",
  description:
    "Movers and packers in Sharjah with a warehouse in the emirate. We pack and move from fifteen districts, and goods collected in Sharjah are stored in Sharjah.",
  keywords:
    "movers in sharjah, movers and packers in sharjah, moving companies in sharjah, sharjah movers, packers and movers sharjah, moving company sharjah",
  ogTitle: "Movers and Packers in Sharjah",
  h1: "Movers in Sharjah: Pack, Move and Store Locally",
  introH2: "Moving in Sharjah, in brief",
  hero: [
    "Movers and packers in Sharjah have one advantage over most moving companies that work across the emirates: we operate a warehouse in Sharjah, so what we collect in the emirate stays in the emirate. We pack, wrap, move and store from fifteen districts, as part of [moving and storage across the UAE](/moving-storage-uae), and for the Dubai side of a move see [moving and storage in Dubai](/moving-storage-dubai).",
    "This page is for anyone moving into, out of or within Sharjah. It covers how the districts differ, why so many Sharjah moves end in Dubai, how to use storage to cover the gap between two leases, and how to compare moving companies in Sharjah on the same footing.",
    "The usual difficulty is not distance, it is the building: older central blocks with narrow access, towers with booked lifts, and villas with gates.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "Why a Sharjah warehouse matters",
      paras: [
        "When a moving company holds your goods in a warehouse in another emirate, every retrieval is a long drive and every gap in your dates is a longer one. Ours is in Sharjah, so goods collected here are stored here and come back to a Sharjah address without crossing the emirate line twice.",
        "The same crew that wraps your furniture carries it out, and a barcoded inventory travels with it to the warehouse, so what is held and where is a list you can ask for. Storage is billed monthly on the space your goods occupy, with no lock-in.",
      ],
    },
    {
      kind: "checklist",
      h2: "Districts we collect from",
      intro: "Each district has its own page with the local detail that matters for a move.",
      items: [
        "[Al Nahda](/locations/sharjah/al-nahda), [Al Taawun](/locations/sharjah/al-taawun) and [Al Khan](/locations/sharjah/al-khan): towers and coastal blocks, closest to the Dubai border.",
        "[Al Majaz](/locations/sharjah/al-majaz) and [Al Qasimia](/locations/sharjah/al-qasimia): family flats and mixed central streets.",
        "[Rolla](/locations/sharjah/rolla), [Al Ghuwair](/locations/sharjah/al-ghuwair), [Al Nabba](/locations/sharjah/al-nabba), [Abu Shagara](/locations/sharjah/abu-shagara) and [Al Qulayaah](/locations/sharjah/al-qulayaah): older, denser central Sharjah, where narrow access is normal.",
        "[Muwaileh](/locations/sharjah/muwaileh) and [Maysaloon](/locations/sharjah/maysaloon): villas, townhouses and family housing, more spread out.",
        "[University City](/locations/sharjah/university-city): moves that follow the academic calendar.",
        "[Al Layyah](/locations/sharjah/al-layyah) and the [industrial areas](/locations/sharjah/industrial-areas): residential streets beside working premises, and business stock.",
      ],
      note: "Not on the list does not mean not covered. Send the address and we will confirm it.",
    },
    {
      kind: "table",
      h2: "Sharjah moves by type",
      columns: ["What you are moving", "Start here", "What is different"],
      rows: [
        ["Furniture, a few pieces or a whole home's worth", "[Furniture movers in Sharjah](/moving-storage-sharjah/furniture-movers)", "Priced on the pieces, not the rooms"],
        ["A flat, a villa or a townhouse", "[House movers in Sharjah](/moving-storage-sharjah/house-movers)", "Lift bookings, gates and the garage"],
        ["Comparing quotes", "[Best and cheap movers in Sharjah](/moving-storage-sharjah/moving-cost)", "What each line of a quote means"],
      ],
    },
    {
      kind: "prose",
      h2: "Sharjah to Dubai, and back",
      paras: [
        "The most common reason people call a mover in Sharjah is a move to Dubai, or the reverse, and in almost every case the two tenancies do not meet. A lease ends in Sharjah on the day you hand back the keys, and the new one starts in Dubai a fortnight later.",
        "We empty the property on the day, hold everything in storage for however long the gap runs, and deliver to the new address when you can receive it. Because the two sides are one company, there is one inventory and one number to call, instead of two companies each assuming the other has the gap.",
      ],
    },
    {
      kind: "steps",
      h2: "How a Sharjah move runs",
      items: [
        { h: "Send the district and the building", p: "The district, the building or street, the floor, and your dates. If you know where the goods are going, tell us that too." },
        { h: "Get a written quote", p: "Itemised, with a video walkthrough or a visit for anything larger than a flat." },
        { h: "We book the building", p: "The service lift and any move permit, or the gate registration for a community, inside the window the building allows." },
        { h: "Wrap, load and move", p: "Furniture wrapped at your door, with what comes apart taken apart and labelled, all recorded in a barcoded inventory." },
        { h: "Deliver or store", p: "To the new address, or into our Sharjah warehouse until it is ready." },
      ],
    },
    {
      kind: "prose",
      h2: "Sharjah building types and the lift question",
      paras: [
        "Towers along the coast and in the districts nearest Dubai run service-lift bookings, and the earliest and latest slots go first. Older central blocks may have no service lift at all, so the job is stairs and carrying. Villas inland have gates and garages. The first question we ask is which of the three you are in, because the plan for each is different.",
        "That is also why a quote given without the building is only a guess. Send the district, the building and the floor with your first message, and the quote that comes back will reflect the move you actually have.",
      ],
    },
    {
      kind: "prose",
      h2: "Timing a Sharjah move",
      paras: [
        "Sharjah moves peak around month-ends and the summer months, and the lift slots and crews that are free in the middle of the month are not free on the last day. If your date is flexible, a weekday earlier in the month is easier to book and gives you a choice of start time.",
        "If it is not flexible, book early and tell us which parts can move. A fixed date with a flexible hour is easier to plan than a fixed hour on a fixed date, and storage covers the rest if the next place is not ready.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Sharjah?",
      a: "Yes. Goods collected in Sharjah are stored in Sharjah rather than driven to Dubai and back. We run the collection service too, so the crew comes to your address.",
    },
    {
      q: "Which parts of Sharjah do you cover?",
      a: "Fifteen districts are listed above, including Al Nahda, Al Majaz, Al Taawun, Muwaileh and University City, and others besides. Send the address and we will confirm.",
    },
    {
      q: "Can you move me from Sharjah to Dubai?",
      a: "Yes, and it is the most common move we do here. If your two lease dates do not meet, storage covers the gap with no lock-in.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate, and doing it yourself is the biggest saving.",
    },
    {
      q: "How do I get a quote?",
      a: "Send the district, building, floor and a list of what is moving. For larger jobs we do a video walkthrough or a visit, and the quote is written and itemised.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Sharjah",
  cta: {
    h2: "Moving in or out of Sharjah?",
    p: "Send the district, the building and your dates, and we will plan the access and the storage together.",
  },
  siblings: [
    "/moving-storage-sharjah/furniture-movers",
    "/moving-storage-sharjah/house-movers",
    "/moving-storage-sharjah/moving-cost",
  ],
}

/** Sharjah children — registered under silo s8. */
export const SILO8_PAGES: SiloPageContent[] = [
  /* --------------------------------------------------------- furniture-movers */
  {
    silo: "s8",
    path: "/moving-storage-sharjah/furniture-movers",
    crumb: "Furniture Movers",
    navLabel: "Furniture moving",
    navBlurb: "A few big pieces or a whole home's furniture, wrapped and stored locally.",
    title: "Furniture Movers in Sharjah | Wrapped, Moved, Stored Locally",
    description:
      "Furniture movers in Sharjah for a few pieces or a whole home. We wrap, take apart, carry and move, and store furniture in our Sharjah warehouse between addresses.",
    keywords:
      "furniture movers sharjah, furniture movers in sharjah, furniture moving sharjah, move furniture sharjah, furniture removals sharjah",
    ogTitle: "Furniture Movers in Sharjah",
    h1: "Furniture Movers in Sharjah: Wrapped and Moved",
    introH2: "Moving furniture in Sharjah, in brief",
    hero: [
      "Furniture movers in Sharjah are hired for two quite different jobs: a few large pieces going to another address, or a home's whole furniture going into storage until the next place is ready. This is the furniture end of [movers and packers in Sharjah](/moving-storage-sharjah), and because we have a warehouse in the emirate, furniture put into storage stays in Sharjah.",
      "We wrap every piece at your door, take apart what is built to come apart, carry it out and move it on, with a barcoded inventory throughout. Furniture wrapping is part of every collection.",
      "If you have furniture to move and not a home's worth of boxes, quote the pieces, not the rooms. It is how a furniture job is priced fairly.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "A few pieces, or the whole home",
        paras: [
          "A few pieces is a short list of heavy, awkward items. The crew, the materials and the time are all different from a house move, and the quote depends on the items, how many come apart and how far each has to be carried. It suits a new sofa going upstairs, a bedroom set going to a relative, or a table leaving a flat that has become too small.",
          "A whole home's furniture is a planned job: a longer list, an item-by-item inventory, and an order of loading that matters when some pieces are wanted back before others. We do that from a video walkthrough or a visit, so the quote reflects what is actually there.",
        ],
      },
      {
        kind: "cards",
        h2: "How each kind of furniture is protected",
        items: [
          { icon: "🛋️", h: "Sofas and sectionals", p: "Wrapped whole where they fit and in sections where they do not. Fabric and leather are wrapped differently." },
          { icon: "🛏️", h: "Beds and mattresses", p: "Frames are taken apart with fixings labelled to the frame. Mattresses are covered and carried flat." },
          { icon: "🚪", h: "Wardrobes and wall units", p: "Doors, shelves and mirrors are removed and wrapped separately, then labelled so the unit goes back together in order." },
          { icon: "🍽️", h: "Tables and glass", p: "Tops are carried upright with corner protection, and glass travels on its own." },
          { icon: "🔌", h: "Appliances", p: "Freestanding appliances move upright with doors secured. Anything plumbed in needs a technician." },
          { icon: "🪑", h: "Chairs and small pieces", p: "Grouped and wrapped in sets, so a dozen chairs are one inventory line." },
        ],
      },
      {
        kind: "prose",
        h2: "Access decides the day in Sharjah",
        paras: [
          "In a tower in [Al Taawun](/locations/sharjah/al-taawun) or [Al Nahda](/locations/sharjah/al-nahda), the constraint is the service lift and the loading bay. In older central Sharjah, in [Rolla](/locations/sharjah/rolla) or [Al Qasimia](/locations/sharjah/al-qasimia), it is the stairwell and the narrow street. In a villa in [Muwaileh](/locations/sharjah/muwaileh), it is the gate and the volume of the garage.",
          "That is why we ask about the building before the furniture. A sofa that fits the lift in one tower may not clear a landing in another, and finding that out on the day costs everyone time.",
        ],
      },
      {
        kind: "checklist",
        h2: "What to measure before you ask for a quote",
        items: [
          "The widest piece against every doorway on the route.",
          "The longest piece against the turn of each stairwell or the lift.",
          "The tallest piece against the lift door.",
          "A sofa's diagonal depth as well as its width, because that decides whether it turns a corner.",
          "Photos of the route, from the door to where the vehicle will stand.",
        ],
        note: "Fitted units, plumbed-in appliances and split air conditioners need a technician rather than a moving crew. Tell us at quoting stage.",
      },
      {
        kind: "prose",
        h2: "Furniture in storage between homes",
        paras: [
          "If furniture is going into storage, it travels with its barcoded inventory to our Sharjah warehouse and is held there, billed monthly on the space used with no lock-in. When the next home is ready, pieces come out in the order you need them, and the inventory shows exactly what is where.",
          "Because the same company wraps, carries and stores, there is one list and one number to call. The storage side of Sharjah is described on our [Sharjah locations page](/locations/sharjah).",
        ],
      },
      {
        kind: "prose",
        h2: "Moving furniture from Sharjah to Dubai",
        paras: [
          "Sharjah to Dubai is the most common route out of the emirate, and the road is the main variable. We plan the start time around the traffic direction, since a mid-morning start is easier than a peak-hour one, and tell you the window in the written quote.",
          "If the Dubai flat is not ready, furniture goes into our Sharjah warehouse until it is, and is delivered when the date is fixed. If it is ready, goods go straight across, and the inventory is checked off at the other end.",
        ],
      },
      {
        kind: "prose",
        h2: "What not to wrap yourself",
        paras: [
          "Boxing books and small items is a good use of your time. Wrapping a sofa, a glass top or a wardrobe is not, because the wrap itself can mark leather or trap dust, and a badly wrapped piece moves in the vehicle. Leave furniture to us, and spend the time on cartons, which is where your effort lowers the bill.",
        ],
      },
      {
        kind: "prose",
        h2: "A list of the pieces, for a quicker quote",
        paras: [
          "The fastest way to a reliable furniture quote is a list: each piece, its rough size, whether it comes apart, and the floor it is on. Add photos of the route from the door to where the vehicle will stand. With that, we can tell you what the job needs, the time it takes and whether anything has to be taken apart.",
          "If the list is long, send it by message rather than describing it on a call, because details such as a glass top or a sectional get lost in conversation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move just one or two pieces of furniture?",
        a: "Yes. Send photos and both addresses and we will quote the pieces on their own, with the building access confirmed at both ends before the date.",
      },
      {
        q: "Can furniture be stored in Sharjah?",
        a: "Yes. We have a warehouse in Sharjah, so furniture collected here is stored here, under a barcoded inventory, billed monthly on the space used with no lock-in.",
      },
      {
        q: "Do you take furniture apart and rebuild it?",
        a: "Yes, for pieces designed to come apart. Fixings are bagged and labelled, and we rebuild at the other end. Fitted units and plumbed-in appliances need a technician.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection and is not an add-on.",
      },
      {
        q: "How is a furniture move priced?",
        a: "On the pieces, not the rooms: how many, how large, how many come apart, how far each is carried and what the building allows. The quote is free and itemised.",
      },
    ],
    serviceType: "Furniture moving",
    areaServed: "Sharjah",
    cta: {
      h2: "Moving furniture in Sharjah?",
      p: "Send photos and both addresses, and we will quote the pieces, not the rooms.",
    },
    siblings: [
      "/moving-storage-sharjah",
      "/moving-storage-sharjah/house-movers",
      "/moving-storage-sharjah/moving-cost",
    ],
  },

  /* ------------------------------------------------------------ house-movers */
  {
    silo: "s8",
    path: "/moving-storage-sharjah/house-movers",
    crumb: "House Movers",
    navLabel: "House and flat moving",
    navBlurb: "Flats, villas and townhouses across Sharjah, planned around the building.",
    title: "House Movers in Sharjah | Flats, Villas, Whole-Home Moves",
    description:
      "House movers in Sharjah for flats, villas and townhouses. We plan around the building, wrap at your door and store goods in our Sharjah warehouse if dates slip.",
    keywords:
      "house movers in sharjah, house movers sharjah, home movers sharjah, house shifting sharjah, house moving sharjah, villa movers sharjah",
    ogTitle: "House Movers in Sharjah",
    h1: "House Movers in Sharjah: Flats, Villas, One Plan",
    introH2: "Moving a home in Sharjah, in brief",
    hero: [
      "House movers in Sharjah work across a mix of homes: towers on the Corniche, family flats around the lagoon, older buildings in the dense centre, and villas inland. This is the household end of [movers and packers in Sharjah](/moving-storage-sharjah), and it is organised by building, because the building, not the distance, decides the job.",
      "We wrap and pack at your door, take apart what comes apart, collect and move, and, when your dates do not meet, store in our Sharjah warehouse under a barcoded inventory.",
      "If you are moving to Dubai, say so when you ask for a quote. It is the most common move out of Sharjah, and we plan the day around the road.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What the building tells us about the move",
        columns: ["Where", "Typical homes", "What decides the day"],
        rows: [
          ["Al Nahda, Al Taawun, Al Khan", "Towers and coastal blocks near the Dubai border", "The service lift booking and the loading bay"],
          ["Al Majaz, Al Qasimia", "Family flats, some in older buildings, mixed with shops and offices", "Access, stairwells and, in some, trading hours"],
          ["Rolla, Al Ghuwair, Al Nabba", "Dense older flats above shops, with narrow streets", "Where the vehicle can stand and the length of the carry"],
          ["Muwaileh, Maysaloon", "Villas, townhouses and family housing", "The gate, the garage and the overall volume"],
        ],
        note: "Each district has more local detail on its page, for example [Muwaileh](/locations/sharjah/muwaileh) and [Al Majaz](/locations/sharjah/al-majaz).",
      },
      {
        kind: "prose",
        h2: "Towers: the lift slot comes first",
        paras: [
          "In a high-rise, the furniture is rarely the constraint. The service lift is. Most towers run a booking system for it, with limited hours, and many want notice or a permit before a move. A crew that arrives without a slot waits, and a waiting crew is paid for.",
          "We book the lift and any permit for your building and plan the move inside the window, so the day does not start in a negotiation at the front desk.",
        ],
      },
      {
        kind: "prose",
        h2: "Older streets and villas",
        paras: [
          "In older central Sharjah, the job is carrying. Stairwells are narrower, there may be no service lift, and the vehicle often cannot stand at the door. Measure the largest pieces against the stairwell and tell us the floor, and we will say before the day if something will not come down.",
          "In a villa, the volume is bigger than the bedroom count, because the garage, the garden and the store room are rarely counted. Ask for a survey, and register the crew with the community's security before the day if it is gated.",
        ],
      },
      {
        kind: "checklist",
        h2: "House move checklist",
        items: [
          "Ask building management for the move procedure, the permitted hours and any permit, at both addresses.",
          "Tell us the building type, the floor and whether there is a service lift.",
          "Measure large pieces against the stairwell, doorways and the new building's lift.",
          "For a villa, count the garage, garden and store room, and register the crew with security.",
          "Box small items yourself and label by room. It is the easiest way to lower the quote.",
        ],
      },
      {
        kind: "steps",
        h2: "How a house move runs in Sharjah",
        items: [
          { h: "Tell us the building and your dates", p: "District, building, floor and when you need to be out." },
          { h: "Get a written quote", p: "Itemised, with a video walkthrough or a visit for anything larger than a flat." },
          { h: "We book access", p: "Lift and permit for towers, gate registration for villas, and a carrying plan for older buildings." },
          { h: "Wrap and collect", p: "Furniture wrapped at your door, wrapping being part of every collection." },
          { h: "Deliver or store", p: "To your next address, or into our Sharjah warehouse until it is ready, billed monthly with no lock-in." },
        ],
      },
      {
        kind: "prose",
        h2: "Moving into Sharjah",
        paras: [
          "Not every Sharjah move is a departure. People arrive too, often for a job, a school or a lower rent, and they bring a home's worth of belongings to a district they may not know. Tell us the building you are moving into, its floor and any move procedure, so the lift or gate is arranged before the crew arrives.",
          "If your furniture is coming from another emirate and the flat is not ready, we can hold everything in our Sharjah warehouse and deliver on the day the keys are handed over.",
        ],
      },
      {
        kind: "prose",
        h2: "Student and family moves",
        paras: [
          "Around [University City](/locations/sharjah/university-city), moves follow the academic calendar, and the busiest weeks are the ones either side of term. Family moves in flats and villas follow school years and lease renewals. Both reward booking early, because slots and crews fill when many households move at once.",
        ],
      },
      {
        kind: "prose",
        h2: "What a Sharjah house move looks like on the day",
        paras: [
          "A crew arrives at the booked window, with the lift or gate already arranged. Rooms are cleared one at a time, furniture is wrapped at the door, and cartons are carried to the vehicle in an order that keeps the loading stable. Each piece is recorded in the inventory as it goes.",
          "At the other end, the order reverses: beds first, then the main living areas, then cartons by room, with anything taken apart rebuilt before the crew leaves. If something is going into storage instead, it goes to our Sharjah warehouse under the same list, and is ready to be called back when you are.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you move flats as well as villas?",
        a: "Yes. A flat in a tower depends on the lift slot and permit. A villa depends on the gate, access and the volume of the garage. Tell us which when you ask for a quote.",
      },
      {
        q: "Do you book the lift and permit?",
        a: "Yes. We arrange the service lift and any move permit at your building and plan the move inside the window it allows.",
      },
      {
        q: "What if my new place is not ready?",
        a: "Goods go into our Sharjah warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and are delivered when you are ready.",
      },
      {
        q: "Can you move me from Sharjah to Dubai?",
        a: "Yes. It is the most common move out of Sharjah, and we plan the start time around the road.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "House moving",
    areaServed: "Sharjah",
    cta: {
      h2: "Moving house in Sharjah?",
      p: "Tell us the district, the building and your dates, and we will plan the access first.",
    },
    siblings: [
      "/moving-storage-sharjah",
      "/moving-storage-sharjah/furniture-movers",
      "/moving-storage-sharjah/moving-cost",
    ],
  },

  /* ------------------------------------------------------------ moving-cost */
  {
    silo: "s8",
    path: "/moving-storage-sharjah/moving-cost",
    crumb: "Best and Cheap Movers",
    navLabel: "Best and cheap movers",
    navBlurb: "How to compare movers in Sharjah and what each line of a quote means.",
    title: "Best Movers in Sharjah | How to Choose and Compare Quotes",
    description:
      "Looking for the best or the cheapest movers in Sharjah? What sets a moving quote, the warning signs to watch for, and how to compare companies on the same scope.",
    keywords:
      "best movers in sharjah, cheap movers in sharjah, movers sharjah price, moving company sharjah cost, how much do movers cost in sharjah",
    ogTitle: "Best and Cheap Movers in Sharjah",
    h1: "Cheap or Best Movers in Sharjah? What Quotes Say",
    introH2: "Choosing movers, in brief",
    hero: [
      "The best movers in Sharjah and the cheapest movers in Sharjah are often the same company on a good day and different companies on a bad one, and you cannot tell which from the headline price. A quote tells you the cost of a scope, and two quotes with different scopes cannot be compared. This guide, part of [movers and packers in Sharjah](/moving-storage-sharjah), shows how to compare them fairly.",
      "We do not publish a price list, because a number without the facts behind it would mislead you. What we can show is every factor that sets a quote, so each appears as a line you can read.",
      "Our model is simple: transport and storage are priced as separate lines, and storage in Sharjah stays in Sharjah.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What sets the price of a move in Sharjah",
        intro: "Use the third column as a checklist when you compare two quotes.",
        columns: ["Factor", "What raises it", "What lowers it"],
        rows: [
          ["Volume", "A villa with garage and garden, many rooms of furniture", "Clearing what you do not need before the survey"],
          ["Building access", "A high floor with a shared lift, a narrow stairwell, a long carry", "Ground floor, a lift at the door, parking near the entrance"],
          ["Packing scope", "Full packing, fragile items, wardrobe boxes", "Boxing small items yourself, sealed and labelled"],
          ["Dismantling", "Many wardrobes, wall units, bunk beds", "Few pieces that come apart"],
          ["Destination", "Another emirate, with a long run", "A short, direct route"],
          ["Date", "Weekends, month-ends, peak seasons, short notice", "A weekday with a few weeks' notice"],
          ["Storage", "Anything held between dates, for longer", "A move that goes straight from one door to the next"],
        ],
      },
      {
        kind: "prose",
        h2: "What makes a quote cheap",
        paras: [
          "A cheap quote can be perfectly honest: a small job with easy access should cost less. It becomes expensive when it leaves out something the job needs, such as wrapping, a second building or the lift booking, and the missing item appears as an extra on the day.",
          "The useful question is not who is cheapest. It is who has written down the most about your move, and who takes responsibility if it changes.",
        ],
      },
      {
        kind: "checklist",
        h2: "How to compare movers on the same footing",
        items: [
          "Ask each company for an itemised written quote with the same scope: items, packing and dismantling.",
          "Check that the crew and the vehicles are stated, not implied.",
          "Check whether wrapping is included. For us, furniture wrapping is part of every collection.",
          "Confirm who books the lift and permit at your building, and who pays if a slot is missed.",
          "Ask whether the same company will store your goods if your dates move.",
          "Ask what the quote assumes about access, and what changes if it turns out harder.",
        ],
      },
      {
        kind: "table",
        h2: "Warning signs in a quote",
        columns: ["Sign", "What it often means"],
        rows: [
          ["A price over the phone with no survey", "A quote on room count, which comes in low for villas and large flats"],
          ["No mention of the lift or permit", "Left to you, and a missed slot costs a paid crew's time"],
          ["Wrapping not mentioned", "Probably an extra charged at the door"],
          ["No company name on the quote", "No one accountable if something goes wrong"],
        ],
      },
      {
        kind: "prose",
        h2: "How our Sharjah quote is built",
        paras: [
          "Transport is the collection and delivery, quoted and confirmed before anything is booked. If goods are held, storage is the second line: billed monthly on the space your goods occupy, with no lock-in, in our Sharjah warehouse. Showing the two separately lets you see transport once and storage grow or shrink with your dates.",
          "If you are comparing us with another company, send us their scope and we will quote the same one, so the two numbers describe the same job.",
        ],
      },
      {
        kind: "prose",
        h2: "When a cheap mover is the right choice",
        paras: [
          "For a small move with easy access, such as one flat on a low floor with a lift, a lower quote is usually fair, because the job is simple and the risk is small. The danger is applying that logic to a larger or harder job, where a cheap quote almost always leaves something out.",
          "So match the choice to the job. Cheap is reasonable when the scope is small and clearly written. It is risky when the scope is vague.",
        ],
      },
      {
        kind: "prose",
        h2: "Deposits and payment terms",
        paras: [
          "Ask what is required to confirm a booking, what it covers and when the rest is due, and get it in writing before you pay. A large deposit demanded early with no itemised quote is a reason to slow down. A company confident in its quote will explain its terms plainly, and put them on paper.",
        ],
      },
      {
        kind: "prose",
        h2: "Questions that cost nothing to ask",
        paras: [
          "Before you accept any quote, ask three things. What is not included? What would make the price change on the day? And who is responsible if the building refuses entry? An honest company answers all three in a sentence each, and writes the answers into the quote.",
          "If you get vague answers, treat the quote as a guess. If you get clear ones, you have learned more about the company than its price could tell you, and you can compare it with another on the same terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do movers cost in Sharjah?",
        a: "It depends on volume, building access, packing, destination, date and storage. Our quotes are free and itemised, with transport and storage as separate lines.",
      },
      {
        q: "Are cheap movers worth it?",
        a: "They can be for a small job with easy access. The risk is a low quote that leaves out wrapping, the lift booking or a second building. Compare written scopes, not totals.",
      },
      {
        q: "How do I find the best movers in Sharjah?",
        a: "Ask who has written down the most about your move: crew, vehicles, packing, access and what happens if it changes. The company willing to put that in writing is taking responsibility.",
      },
      {
        q: "Why are transport and storage separate lines?",
        a: "Because they are different costs. Transport is a one-off for the collection and delivery. Storage is monthly on the space used, with no lock-in, so it follows your dates.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate.",
      },
    ],
    serviceType: "Moving cost guidance",
    areaServed: "Sharjah",
    cta: {
      h2: "Comparing quotes in Sharjah?",
      p: "Send us the other company's scope and we will quote the same job, so the numbers can be compared.",
    },
    siblings: [
      "/moving-storage-sharjah",
      "/moving-storage-sharjah/furniture-movers",
      "/moving-storage-sharjah/house-movers",
    ],
  },
]

/* ============================== AJMAN HUB (s9) ============================= */
export const AJMAN_HUB: SiloPageContent = {
  silo: "s9",
  path: "/moving-storage-ajman",
  crumb: "Movers Ajman",
  navLabel: "Movers in Ajman",
  navBlurb: "Packing, moving and local storage in Ajman.",
  title: "Movers and Packers in Ajman | Moving With Local Storage",
  description:
    "Movers and packers in Ajman with a warehouse in the emirate. We pack and move from twelve districts, and goods collected in Ajman are stored in Ajman.",
  keywords:
    "movers in ajman, movers and packers in ajman, best movers in ajman, furniture movers ajman, furniture movers in ajman, packers and movers ajman, ajman movers",
  ogTitle: "Movers and Packers in Ajman",
  h1: "Movers in Ajman: Packed, Moved and Stored Locally",
  introH2: "Moving in Ajman, in brief",
  hero: [
    "Movers and packers in Ajman serve a city where many people live and work somewhere else, so a lot of moves are into or out of the emirate for a job in Dubai or Sharjah. We operate a warehouse in Ajman, so what we collect here is stored here. It is part of [moving and storage across the UAE](/moving-storage-uae), and for Dubai see [moving and storage in Dubai](/moving-storage-dubai).",
    "We pack, wrap, move and store from twelve Ajman districts. This page explains how the districts differ, what to plan for in a tower, a villa compound or an industrial unit, how to choose a mover, and what to do when two lease dates do not meet.",
    "The usual surprise is not distance. It is the building: dense towers with booked lifts, older blocks with tight streets, and compounds with a gate procedure.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "A warehouse in Ajman",
      paras: [
        "When a moving company stores your goods in another emirate, every retrieval is a long drive. Ours is in Ajman, so goods collected here are held here and come back to an Ajman address without a round trip across the emirate line.",
        "The same crew that wraps your furniture carries it out, and a barcoded inventory goes with it to the warehouse. Storage is billed monthly on the space your goods occupy, with no lock-in, so a handover that slips costs the extra weeks only.",
      ],
    },
    {
      kind: "table",
      h2: "Ajman districts and what they mean for a move",
      columns: ["District", "What it is like", "What to plan for"],
      rows: [
        ["[Al Nuaimiya](/locations/ajman/al-nuaimiya)", "Dense towers on the Sharjah side, with high turnover", "Lift bookings and loading bay limits"],
        ["[Al Rashidiya](/locations/ajman/al-rashidiya) and [Al Bustan](/locations/ajman/al-bustan)", "Central Ajman, older and newer buildings, tight streets", "Where the vehicle can stand and the length of the carry"],
        ["[Corniche](/locations/ajman/corniche)", "Waterfront flats, many short lets and second homes", "Moves that are timed to a letting"],
        ["[Al Mowaihat](/locations/ajman/al-mowaihat) and [Garden City](/locations/ajman/garden-city)", "Villas and compounds on larger plots", "The garage and outbuildings, and the gate procedure"],
        ["[Emirates City](/locations/ajman/emirates-city) and [Al Zahra](/locations/ajman/al-zahra)", "Newer housing, some still filling up", "Furniture waiting for a home to be ready"],
        ["[Al Jurf](/locations/ajman/al-jurf) and the [Free Zone](/locations/ajman/free-zone)", "Industrial estates and licensed companies without premises", "Business stock, equipment and records"],
      ],
      note: "Others covered include [Al Rumailah](/locations/ajman/al-rumailah) and [Al Hamidiya](/locations/ajman/al-hamidiya). Not listed does not mean not covered. Send the address.",
    },
    {
      kind: "prose",
      h2: "Furniture movers in Ajman",
      paras: [
        "If you only have furniture to move, the job is priced on the pieces, not the rooms: how many, how large, how many come apart and how far each is carried. We wrap every piece at your door, take apart what is built to come apart, and move it on or into storage, with a barcoded inventory throughout. Furniture wrapping is part of every collection.",
        "Measure the widest piece against every doorway on the route and the longest against each stairwell turn before you ask for a quote, and send photos of the route. We will tell you before the day if a piece needs taking apart or will not fit.",
      ],
    },
    {
      kind: "checklist",
      h2: "How to choose the best movers in Ajman",
      intro: "The best mover for your move is the one who writes down the most about it. These questions put quotes on the same footing.",
      items: [
        "Is the quote itemised and in writing, with the scope, the crew, the vehicles and the date?",
        "Is wrapping included, or an extra at the door?",
        "Who books the service lift, permit or gate registration, and who pays if a slot is missed?",
        "If you are moving to Dubai or Sharjah, does the quote cover both ends?",
        "Will the same company store your goods if your dates move?",
        "What does the quote assume about access, and what changes if the real access is harder?",
      ],
    },
    {
      kind: "steps",
      h2: "How an Ajman move runs",
      items: [
        { h: "Send the district and the building", p: "The district, the building or compound, the floor and your dates. If you know where the goods are going, tell us that too." },
        { h: "Get a written quote", p: "Itemised, with a video walkthrough or a visit for anything larger than a flat." },
        { h: "We book access", p: "The service lift and any permit, or gate registration for a compound." },
        { h: "Wrap, load and move", p: "Furniture wrapped at your door, with what comes apart taken apart and labelled." },
        { h: "Deliver or store", p: "To the new address, or into our Ajman warehouse until it is ready." },
      ],
    },
    {
      kind: "prose",
      h2: "Moving into Ajman from Dubai or Sharjah",
      paras: [
        "Many Ajman moves are arrivals, from households leaving Dubai or Sharjah for lower rent and keeping a commute. Tell us the building you are moving into, its floor and any move procedure, so the lift, permit or gate is arranged before the crew arrives.",
        "If your lease in Dubai or Sharjah ends before your Ajman home is ready, everything goes into storage on the day and comes out when it is. Our Ajman warehouse holds goods that are being delivered here, as well as goods collected here.",
      ],
    },
    {
      kind: "prose",
      h2: "Timing a move in Ajman",
      paras: [
        "Ajman's busiest periods follow the usual pattern: month-ends and the summer. Because so many residents work in Dubai or Sharjah, leases here often turn over at the same moments as the neighbouring emirates, and lift slots and crews fill together. A weekday earlier in the month is the easiest to book.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Ajman?",
      a: "Yes. Goods collected in Ajman are stored in Ajman rather than driven to Dubai and back. We run the collection service as well, so the crew comes to your address.",
    },
    {
      q: "Which parts of Ajman do you cover?",
      a: "Twelve districts, including Al Nuaimiya, Al Rashidiya, the Corniche, Al Mowaihat, Garden City and the Free Zone, and others besides. Send the address and we will confirm.",
    },
    {
      q: "Can you move me from Ajman to Dubai or Sharjah?",
      a: "Yes. These are routine moves, and if your two lease dates do not meet, storage covers the gap with no lock-in.",
    },
    {
      q: "Do you move furniture only?",
      a: "Yes. A furniture-only job is priced on the pieces, not the rooms. Send photos and both addresses and we will quote it.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate, and doing it yourself is the biggest saving.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Ajman",
  cta: {
    h2: "Moving in or out of Ajman?",
    p: "Send the district, the building and your dates, and we will plan the access and the storage together.",
  },
  siblings: [],
}

/* ====================== RAS AL KHAIMAH HUB (s10) ========================= */
export const RAK_HUB: SiloPageContent = {
  silo: "s10",
  path: "/moving-storage-ras-al-khaimah",
  crumb: "Movers Ras Al Khaimah",
  navLabel: "Movers in Ras Al Khaimah",
  navBlurb: "Collection and moving from Ras Al Khaimah, with storage at our nearest facility.",
  title: "Movers in Ras Al Khaimah | Packing and Collection Service",
  description:
    "Movers in Ras Al Khaimah, and movers and packers: we collect from your RAK address, wrap and load, and store at our nearest facility. Pay for the space used.",
  keywords:
    "movers in ras al khaimah, movers and packers in ras al khaimah, movers and packers ras al khaimah, moving companies in ras al khaimah, rak movers",
  ogTitle: "Movers and Packers in Ras Al Khaimah",
  h1: "Movers in Ras Al Khaimah: We Come to You",
  introH2: "Moving from Ras Al Khaimah, in brief",
  hero: [
    "Movers and packers in Ras Al Khaimah are not all alike, and one fact decides what you can expect from us: we collect from your RAK address, but we do not have a warehouse in the emirate, so goods are stored at our nearest facility, in Dubai, Sharjah or Ajman. It is the Ras Al Khaimah end of [moving and storage across the UAE](/moving-storage-uae), and we would rather say that now than after you have booked.",
    "What it means in practice is a collection service. The crew comes to your address across RAK, wraps and loads, and takes your goods onward, to your next home in another emirate or into storage until it is ready, with one barcoded inventory throughout.",
    "This page covers what we do from RAK, where we are not the right fit, how the districts differ, and what to expect on timing.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "What we do in Ras Al Khaimah, and where a specialist fits better",
      paras: [
        "We collect, wrap, take apart what comes apart, carry out and transport. From there your goods go to a new address in another emirate, or into storage at our nearest warehouse until your dates line up. Furniture wrapping is part of every collection.",
        "We do not run a Ras Al Khaimah warehouse, and we do not publish a straight removal between two RAK addresses with no storage or other emirate involved. If that is what you need, send both addresses and say so. We will tell you plainly whether it is a job we take, rather than let you find out after you have booked.",
        "Where we fit well is the household or business that needs things out of a RAK property on a fixed date, held safely, and delivered when a new place exists.",
      ],
    },
    {
      kind: "table",
      h2: "Where we collect from in Ras Al Khaimah",
      columns: ["Area", "What to plan for"],
      rows: [
        ["Al Nakheel", "The building or villa, the floor, and the date you must be out"],
        ["Al Hamra", "Community access rules, and the timing of the day"],
        ["Mina Al Arab and Al Marjan", "Access arrangements with the building or community"],
        ["Inland districts", "Vehicle access, and the garage and outbuildings if it is a villa"],
      ],
      note: "The full position for the emirate is on our [Ras Al Khaimah locations page](/locations/ras-al-khaimah). Not listed does not mean not covered. Send the address.",
    },
    {
      kind: "prose",
      h2: "Timing from Ras Al Khaimah",
      paras: [
        "Ras Al Khaimah is a longer drive from our warehouses than any district in Dubai, Sharjah or Ajman, so retrieval takes longer than the quick turnaround we quote inside Dubai. Tell us at booking if you expect to need things back regularly, and we will be realistic about timings rather than optimistic.",
        "For a one-way move, the drive is simply part of the day. We plan the start time around the road, and give you the schedule in the written quote.",
      ],
    },
    {
      kind: "checklist",
      h2: "RAK move checklist",
      items: [
        "Ask your building or community management what it requires for a move: notice, permit and permitted hours.",
        "Tell us the district, the building or villa, the floor, and whether there is a lift.",
        "Tell us where the goods are going: another emirate, or into storage.",
        "Count the garage and outbuildings if it is a villa, since they are part of the volume.",
        "Box small items yourself, sealed and labelled, to lower the quote.",
        "Decide in advance how often you expect to retrieve goods, if they are going into storage.",
      ],
    },
    {
      kind: "steps",
      h2: "How a Ras Al Khaimah move runs",
      items: [
        { h: "Send the address and the dates", p: "The district, the building, the floor and when you need to be out." },
        { h: "Get a written quote", p: "A video walkthrough or a visit for anything larger than a flat. Transport is quoted separately and confirmed before anything is booked." },
        { h: "We book access", p: "The lift and any permit, or community access, inside the window allowed." },
        { h: "Wrap and collect", p: "Furniture wrapped at your door, with a barcoded inventory." },
        { h: "Deliver or store", p: "To your next address in another emirate, or into storage at our nearest facility, billed monthly with no lock-in." },
      ],
    },
    {
      kind: "prose",
      h2: "Preparing goods for a longer journey",
      paras: [
        "A move out of Ras Al Khaimah is a longer drive than most in the country, so preparation matters. Seal and label cartons, protect fragile items yourself with padding in the box, and empty drawers or tell us they will travel full. We wrap furniture at your door, and the inventory travels with the goods, so what leaves your home is recorded before the journey.",
        "If you are not sure whether you will need things back, say so at booking. It changes whether goods are best held nearer to where you are going, and it affects how we plan the delivery.",
      ],
    },
    {
      kind: "prose",
      h2: "Planning the day for a longer run",
      paras: [
        "Because the drive is long, a move from Ras Al Khaimah is planned as a full day, with the start time set around the road and a realistic window for arrival at the other end. If the goods are going to a new home in another emirate, make sure someone can receive them and that the building there has agreed the time.",
        "If they are going into storage, there is no one to receive, but the same planning applies to our warehouse schedule. We give you the plan in the written quote, so you know what to expect before you commit.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Ras Al Khaimah?",
      a: "No. Ras Al Khaimah is a collection service for us. We operate warehouses in Dubai, Sharjah and Ajman, and goods collected in RAK go to the nearest.",
    },
    {
      q: "Can you move me out of Ras Al Khaimah?",
      a: "Yes. We collect from your RAK address and move your goods to your new home in another emirate, or hold them in storage until it is ready.",
    },
    {
      q: "Do you do a straight move between two RAK addresses?",
      a: "Send both addresses and the dates, and we will say plainly whether it is a job we take. Our core service here is collection, with goods moved on or stored.",
    },
    {
      q: "How long does retrieval take to a RAK address?",
      a: "Longer than inside Dubai, because of the drive. Tell us at booking if you will need things back often, and we will be realistic about timings.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Ras Al Khaimah",
  cta: {
    h2: "Moving out of Ras Al Khaimah?",
    p: "Send the district, the building and your dates, and we will tell you what we can do and what it depends on.",
  },
  siblings: [],
}

/* ============================== AL AIN HUB (s11) ============================ */
export const ALAIN_HUB: SiloPageContent = {
  silo: "s11",
  path: "/moving-storage-al-ain",
  crumb: "Movers Al Ain",
  navLabel: "Movers in Al Ain",
  navBlurb: "Villa moves and collection from Al Ain, with storage at our nearest facility.",
  title: "Movers in Al Ain | Villa Moves, Packing and Storage",
  description:
    "Movers in Al Ain, and movers and packers for villas, garages and outbuildings. We collect from your address, wrap and load, and store at our nearest facility.",
  keywords:
    "movers in al ain, movers and packers in al ain, al ain movers, villa movers al ain, moving company al ain, packers and movers al ain",
  ogTitle: "Movers and Packers in Al Ain",
  h1: "Movers in Al Ain: Villas, Garages, Storage",
  introH2: "Moving from Al Ain, in brief",
  hero: [
    "Movers and packers in Al Ain handle a city of villas rather than towers, which changes the job: collections are large, driveway-access moves with the garage and outbuildings carrying much of the volume. We collect from your Al Ain address and store at our nearest facility. It is the Al Ain end of [moving and storage across the UAE](/moving-storage-uae).",
    "One thing is worth saying first, because it affects what we can promise: we do not have a warehouse in Al Ain, so goods collected here are stored in Dubai, Sharjah or Ajman. We collect, wrap, load and move; we do not run an Al Ain yard.",
    "This page covers what we do from Al Ain, how a villa move differs, the university calendar that shapes demand, and where a specialist fits better.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "What we do in Al Ain, and where a specialist fits better",
      paras: [
        "We collect from your address, wrap furniture at the door, take apart what is built to come apart, carry it out and transport it. From there it goes to your next address in another emirate, or into storage until your dates line up. Furniture wrapping is part of every collection.",
        "We do not publish a straight removal between two Al Ain addresses with no storage or other emirate involved. If that is your move, send both addresses and say so, and we will tell you plainly whether it is a job we take.",
      ],
    },
    {
      kind: "prose",
      h2: "Why Al Ain villa moves are bigger than they look",
      paras: [
        "Al Ain is mostly villas, and the volume is rarely where the bedroom count suggests. The garage, the outbuildings and the garden carry much of it: tools, outdoor furniture, bikes, boxes from earlier moves that were never opened. A quote on bedrooms alone comes in low.",
        "That is why we survey larger villas by video or a visit before we quote, and count the garage and outbuildings as part of the job. Driveway access is usually easy, but a large vehicle and a gate still need arranging in advance.",
      ],
    },
    {
      kind: "table",
      h2: "Where we collect from in Al Ain",
      columns: ["Area", "What to plan for"],
      rows: [
        ["Al Jimi", "Villa and family housing, with garages and outbuildings in the volume"],
        ["Al Muwaiji", "Established residential streets, and the date"],
        ["Al Towayya", "Residential access, and the garage"],
        ["Al Mutawaa", "Residential access, and the garage"],
      ],
      note: "The position for the city is on our [Al Ain locations page](/locations/al-ain). Not listed does not mean not covered. Send the address.",
    },
    {
      kind: "prose",
      h2: "The university calendar",
      paras: [
        "UAE University's calendar produces a seasonal pattern of demand around the end of each term, separate from the summer exodus that drives the coast. Student residences empty in the same fortnight, and the slots in it fill first.",
        "If you are moving out of university housing at term end, book three weeks ahead rather than three days. Goods can go into storage over the break and come back for the new term, billed monthly on the space used with no lock-in.",
      ],
    },
    {
      kind: "checklist",
      h2: "Al Ain move checklist",
      items: [
        "Tell us the district, the villa, and a realistic list of what is in the garage and outbuildings.",
        "Ask your community or landlord about vehicle access and any gate procedure.",
        "Clear paint, thinners, chemicals and gas cylinders, which cannot be moved or stored.",
        "Clean outdoor furniture and drain anything holding water before it is wrapped.",
        "Tell us where the goods are going: another emirate, or into storage.",
        "Book early if your move falls at the end of a university term.",
      ],
    },
    {
      kind: "steps",
      h2: "How an Al Ain move runs",
      items: [
        { h: "Send the address and the dates", p: "The district, the villa and when you need to be out." },
        { h: "Survey", p: "A video walkthrough or a visit, with the garage and outbuildings counted." },
        { h: "Quote", p: "Written and itemised. Transport is quoted separately and confirmed before anything is booked." },
        { h: "Wrap and collect", p: "Furniture wrapped at your door, with a barcoded inventory." },
        { h: "Deliver or store", p: "To your next address in another emirate, or into storage at our nearest facility, billed monthly with no lock-in." },
      ],
    },
    {
      kind: "prose",
      h2: "The garage, outbuildings and what cannot move",
      paras: [
        "Walk the garage and every outbuilding before the survey, and make a list. Tools, outdoor furniture, bikes and old boxes add up to more volume than expected. Some things cannot be moved or stored at all: paint, thinners, pool chemicals, pesticides, fuel and gas cylinders. Sort them early, because they are the items most likely to be found on the morning.",
        "If anything is large, awkward or unusual, tell us in advance so the right materials and enough people are there, and so we can say whether it can be taken.",
      ],
    },
    {
      kind: "prose",
      h2: "Keeping the move simple",
      paras: [
        "Al Ain moves are generally simple on access and heavy on volume. Driveways make carrying easy, and the work is in the quantity: a full garage, a furnished majlis, a garden. The best thing you can do is sort before the survey. Decide what is going, what is being sold and what is staying, so the quote is for the move you are making and not the one you might.",
        "Mark anything that is staying in the villa with tape, so the crew can leave it alone, and keep valuables and documents with you.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Al Ain?",
      a: "No. Al Ain is a collection service for us. We operate warehouses in Dubai, Sharjah and Ajman, and goods collected in Al Ain go to the nearest.",
    },
    {
      q: "Can you move a whole villa from Al Ain?",
      a: "Yes. A villa is planned from a survey, with the garage and outbuildings counted, and the goods are moved on or held in storage until your next home is ready.",
    },
    {
      q: "Do you collect from UAE University residences?",
      a: "Yes, and the end of each term is the busiest window. Book three weeks ahead rather than three days, because every residence empties in the same fortnight.",
    },
    {
      q: "Do you do a straight move between two Al Ain addresses?",
      a: "Send both addresses and the dates, and we will say plainly whether it is a job we take. Our core service here is collection, with goods moved on or stored.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Al Ain",
  cta: {
    h2: "Moving out of Al Ain?",
    p: "Send the district, the villa and your dates, and we will tell you what we can do and what it depends on.",
  },
  siblings: [],
}

/* ============================ FUJAIRAH HUB (s12) =========================== */
export const FUJAIRAH_HUB: SiloPageContent = {
  silo: "s12",
  path: "/moving-storage-fujairah",
  crumb: "Movers Fujairah",
  navLabel: "Movers in Fujairah",
  navBlurb: "Collection and moving from Fujairah and the east coast.",
  title: "Movers in Fujairah | East Coast Collection and Storage",
  description:
    "Movers in Fujairah, and movers and packers for the east coast: we collect from Fujairah City and Dibba, wrap and load, and store at our nearest facility.",
  keywords:
    "movers in fujairah, movers and packers in fujairah, fujairah movers, moving company fujairah, best movers fujairah, east coast movers uae",
  ogTitle: "Movers in Fujairah",
  h1: "Movers in Fujairah: Packed and Collected",
  introH2: "Moving from Fujairah, in brief",
  hero: [
    "Movers in Fujairah work on the other side of the Hajar mountains from the rest of the country, and that one fact shapes everything about a move from here. We collect from Fujairah City, Dibba and the east coast, but we do not have a warehouse in Fujairah, so goods are stored at our nearest facility, in Dubai, Sharjah or Ajman. It is the Fujairah end of [moving and storage across the UAE](/moving-storage-uae), and we say that now rather than after you have booked.",
    "In practice this is a collection service. The crew comes to your address, wraps and loads, and takes your goods onward, to a new home in another emirate or into storage until it is ready, with one barcoded inventory throughout.",
    "This page covers what we do from Fujairah, how the mountain drive changes the planning, where we are not the right fit, and how to prepare.",
  ],
  sections: [
    {
      kind: "prose",
      h2: "What we do in Fujairah, and where a specialist fits better",
      paras: [
        "We collect, wrap, take apart what comes apart, carry out and transport. From there your goods go to a new address in another emirate, or into storage at our nearest warehouse until your dates line up. Furniture wrapping is part of every collection.",
        "We do not run a Fujairah warehouse, and we do not publish a straight removal between two Fujairah addresses with no storage or other emirate involved. If that is your move, send both addresses and say so, and we will tell you plainly whether it is a job we take.",
        "Where we fit well is the household that needs its things out of a Fujairah or east-coast property on a fixed date, held safely, and delivered when a new place exists.",
      ],
    },
    {
      kind: "prose",
      h2: "Why the drive changes the plan",
      paras: [
        "The road over the mountains makes a Fujairah collection a real journey, not a trip across town. The job is planned as a full round trip, not slotted between others, so it needs more notice than a move in Dubai. Give us several days where you can, and tell us early if your date is fixed.",
        "The same distance affects retrieval. If goods are going into storage and you expect to need things back, say so at booking, and we will be realistic about timings instead of optimistic.",
      ],
    },
    {
      kind: "table",
      h2: "Where we collect from on the east coast",
      columns: ["Area", "What to plan for"],
      rows: [
        ["Fujairah City", "The building or villa, the floor, and the date you must be out"],
        ["Dibba", "A longer run, so more notice and a firm date"],
        ["Other east-coast districts", "Vehicle access, and the garage and outbuildings if it is a villa"],
      ],
      note: "The position for the emirate is on our [Fujairah locations page](/locations/fujairah). Not listed does not mean not covered. Send the address.",
    },
    {
      kind: "checklist",
      h2: "Fujairah move checklist",
      items: [
        "Give several days' notice where you can, and tell us early if the date is fixed.",
        "Tell us the district, the building or villa, the floor, and whether there is a lift.",
        "Tell us where the goods are going: another emirate, or into storage.",
        "Ask your building or landlord about permitted moving hours and access.",
        "Box small items yourself, sealed and labelled, to lower the quote.",
        "If goods are going into storage, tell us how often you expect to retrieve them.",
      ],
    },
    {
      kind: "steps",
      h2: "How a Fujairah move runs",
      items: [
        { h: "Send the address and the dates", p: "The district, the building, the floor and when you need to be out." },
        { h: "Get a written quote", p: "A video walkthrough or a visit for anything larger than a flat. Transport is quoted separately and confirmed before anything is booked." },
        { h: "We plan the round trip", p: "The collection is scheduled as a full day with the road in mind, and the plan is in the written quote." },
        { h: "Wrap and collect", p: "Furniture wrapped at your door, with a barcoded inventory." },
        { h: "Deliver or store", p: "To your next address in another emirate, or into storage at our nearest facility, billed monthly with no lock-in." },
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Fujairah?",
      a: "No. Fujairah is a collection service for us. We operate warehouses in Dubai, Sharjah and Ajman, and goods collected on the east coast go to the nearest.",
    },
    {
      q: "How much notice do you need for a Fujairah collection?",
      a: "More than in Dubai, because the drive over the mountains means the job is planned as a full round trip. Give us several days where you can.",
    },
    {
      q: "Can you move me out of Fujairah?",
      a: "Yes. We collect from your address and move your goods to a new home in another emirate, or hold them in storage until it is ready.",
    },
    {
      q: "Do you do a straight move between two Fujairah addresses?",
      a: "Send both addresses and the dates, and we will say plainly whether it is a job we take. Our core service here is collection, with goods moved on or stored.",
    },
    {
      q: "Is wrapping included?",
      a: "Furniture wrapping is part of every collection and is not an add-on. Boxing small items is separate.",
    },
  ],
  serviceType: "Moving and storage",
  areaServed: "Fujairah",
  cta: {
    h2: "Moving out of Fujairah?",
    p: "Send the district, the building and your dates, and we will tell you what we can do and what it depends on.",
  },
  siblings: [],
}
