import type { SiloPageContent } from "./types"

/**
 * SILO 5 · keyword-gap pages for Dubai (Oct 2026), added after the first
 * movers pass was compared against the full Semrush UAE movers universe.
 *
 *   house-movers            house movers in dubai 480/29 · house movers and
 *                           packers in dubai 390/40 · home movers in dubai 170/41
 *   international-movers    international movers 720/31 · best international movers
 *                           in dubai 720/27 · international movers dubai 480/34 ·
 *                           international movers and packers 390/24 ·
 *                           international moving companies in dubai 480/39 ·
 *                           overseas moving company 480/25 · international movers uae 110/33
 *   best-movers             best movers in dubai 880/40 · best movers and packers in
 *                           dubai 720/38 · best packers and movers 390/17 ·
 *                           best moving companies in dubai 140/38
 *   bur-dubai-movers        movers and packers bur dubai 110/12 + Karama, Deira
 *   international-city-movers  movers in international city 70/16 · movers and
 *                           packers in international city dubai 40
 *
 * SCOPE HONESTY (international-movers). SafeStorage packs, collects and stores;
 * it is not a freight forwarder. The page says where it fits in an international
 * move and what a shipping specialist does, rather than implying a shipping
 * service the site does not publish. If an international shipping service is
 * added, the owner should say so and this page can be widened.
 *
 * best-movers is a how-to-choose guide. It never claims SafeStorage is "the
 * best" (R27: banned unless verified). The blog posts on the same intent
 * (/blog/best-movers-dubai and neighbours) should be merged or redirected here
 * once this page is indexed.
 *
 * Fact pack and exclusions: see silo5-movers.ts.
 */

export const SILO5_GAP_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------------ house-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/house-movers",
    crumb: "House Movers",
    navLabel: "House moving",
    navBlurb: "A whole home planned from first box to last shelf, flat or villa.",
    title: "House Movers and Packers in Dubai | Flats, Villas, Townhouses",
    description:
      "House movers and packers in Dubai for flats, villas and townhouses. One plan from the first box to the last shelf, with storage if your dates do not line up.",
    keywords:
      "house movers in dubai, house movers and packers in dubai, home movers in dubai, house moving dubai, house shifting dubai, house moving companies in dubai",
    ogTitle: "House Movers and Packers in Dubai",
    h1: "House Movers in Dubai: Every Kind of Home, One Plan",
    introH2: "Moving a whole home, in brief",
    hero: [
      "House movers and packers in Dubai deal with a spread of homes that is wider than most cities offer: studios in towers, family villas, townhouses in gated communities. Whatever the home, a whole-house move comes down to the same thing, one plan that runs from the first box to the last shelf. This is the household end of [moving and storage in Dubai](/moving-storage-dubai).",
      "We pack and wrap, take apart what comes apart, collect, move and, when the dates do not line up, store, all under one barcoded inventory. The detail differs by building, which is why flats and villas have their own pages, but the order of work is common to both.",
      "This page is the plan itself: what to do and when, what a crew needs from you, and how to tell a realistic house-moving quote from an optimistic one.",
    ],
    sections: [
      {
        kind: "steps",
        h2: "A house move in the order it should happen",
        intro:
          "The work is not hard to sequence. It goes wrong when a step is left to the last week, usually the building booking or the decision about what is coming with you.",
        items: [
          { h: "Decide what is coming", p: "Walk every room and sort into keep, sell, donate and store. Everything that leaves the list is volume you do not pay to move." },
          { h: "Get a written survey", p: "A video walkthrough or a visit for anything larger than a studio, so the quote is for the home you actually have." },
          { h: "Book the building", p: "Service lift, loading bay and any move permit at both addresses, inside the windows each building allows." },
          { h: "Pack and wrap", p: "Furniture wrapping is part of every collection. Boxing small items yourself is the biggest saving, and sealed cartons load faster." },
          { h: "Move, store or split", p: "Everything goes to the new home, into storage under an inventory, or is split between the two." },
          { h: "Deliver and rebuild", p: "Beds first, because the first night matters. What we took apart goes back together." },
        ],
      },
      {
        kind: "prose",
        h2: "What changes between a flat and a villa",
        paras: [
          "The plan is the same but the constraint moves. In a flat, the constraint is the building: the service lift, the loading bay and the permitted moving window. In a villa it is the volume, because the garage, garden and store room are rarely counted properly, and, in a gated community, the gate.",
          "That is why the detail lives on separate pages. If you are leaving a tower, read [apartment movers](/moving-storage-dubai/apartment-movers). If it is a villa or townhouse, read [villa movers](/moving-storage-dubai/villa-movers). For a handful of large pieces rather than a home, [furniture movers](/moving-storage-dubai/furniture-movers) is the better fit.",
        ],
      },
      {
        kind: "checklist",
        h2: "What a crew needs from you",
        items: [
          "The building or community, the floor, and whether there is a service lift or only stairs.",
          "A realistic list of what is moving, including balcony furniture, the store room and anything above wardrobes.",
          "Any piece that is large, fragile or unusual, so the right materials and enough people are there.",
          "Your permitted moving hours and permit requirements at both buildings, or a request that we find them out.",
          "Your dates at both ends, and an honest view of how likely each is to slip.",
          "A decision on appliances: freestanding ones move, but anything plumbed in needs a technician.",
        ],
      },
      {
        kind: "prose",
        h2: "When the two homes do not line up",
        paras: [
          "A tenancy ending and a handover rarely fall on the same day, and a gap of weeks is the normal case rather than bad luck. When there is one, everything is wrapped, taken to our warehouse and held under a barcoded inventory, billed monthly on the space used with no lock-in, then delivered when the new home is ready.",
          "Because the same company moves and stores, there is one list of what is held and one number to call. You can read how the storage side works in [self storage in Dubai](/self-storage-dubai).",
        ],
      },
      {
        kind: "prose",
        h2: "Reading a house-moving quote",
        paras: [
          "A realistic quote is itemised and states the scope: the rooms or items covered, packing and dismantling, crew and vehicles, who books the lift and permit, and the date. A short quote with a low total usually leaves something out, and what it leaves out reappears on the day.",
          "Our [guide to what movers cost](/moving-storage-dubai/moving-cost) lists every factor in a quote and how to compare two of them fairly.",
        ],
      },
      {
        kind: "prose",
        h2: "The inventory that saves you unpacking time",
        paras: [
          "Label every carton on two sides with the room it belongs in and a short note of what is inside, and keep a numbered list of the cartons. On arrival, boxes go straight to the right room and the list tells you what has not turned up. It is the cheapest step in a house move and it saves the most time at the other end.",
          "For furniture, our barcoded inventory does the same job. Each piece is recorded when it is wrapped, so if goods go into storage you can ask for the bed and the dining table first and leave the rest, instead of searching through a container for what you need.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you move whole houses as well as single rooms?",
        a: "Yes. A whole-house move is planned from a survey, with the rooms, garage and store room counted, and run under one barcoded inventory from start to finish.",
      },
      {
        q: "Is the plan the same for a flat and a villa?",
        a: "The order of work is the same, but the constraint differs: the lift and permit in a tower, the volume and the gate in a villa. Each has its own page with the detail.",
      },
      {
        q: "What happens if the new home is not ready?",
        a: "Everything goes into storage at our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and is delivered when you are ready.",
      },
      {
        q: "Do you pack, or do I?",
        a: "Either. Furniture wrapping is part of every collection. Boxing small items is separate, and doing it yourself is the biggest saving on a full move.",
      },
      {
        q: "How do I get a quote?",
        a: "Send the building, the floor and a list of what is moving. For anything bigger than a studio we do a video walkthrough or a visit, and the quote is written and itemised.",
      },
    ],
    serviceType: "House moving",
    cta: {
      h2: "Planning a house move in Dubai?",
      p: "Send the building, the floor and your dates, and we will quote the home you actually have.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/furniture-movers",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ----------------------------------------------------- international-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/international-movers",
    crumb: "International Movers",
    navLabel: "International movers",
    navBlurb: "Where packing and storage fit in an international move from Dubai.",
    title: "International Movers in Dubai | Pack, Store, Ship on Your Date",
    description:
      "International movers in Dubai: how an overseas move works, what a shipper does, and where we fit with packing, collection and storage until your container date.",
    keywords:
      "international movers dubai, international movers and packers, best international movers in dubai, international moving companies in dubai, overseas moving company, international movers uae",
    ogTitle: "International Movers in Dubai",
    h1: "International Movers in Dubai: Where We Fit in Your Move",
    introH2: "Moving abroad from Dubai, in brief",
    hero: [
      "International movers in Dubai do two different jobs that are often sold as one: the packing and collection at your door, and the shipping to the other side of the world. We do the first, and we hold your goods until the second begins. It is the overseas end of [moving and storage in Dubai](/moving-storage-dubai), and it is worth being clear about the split before you compare quotes.",
      "SafeStorage packs and wraps at your address, collects, and stores your belongings under one barcoded inventory. We are not a freight forwarder, so the shipping itself, the container or air freight, customs and delivery abroad, is done by a shipping specialist that you choose.",
      "Where that makes the difference is timing. A container date and a lease-end date almost never match, and the gap between them is where storage earns its place.",
    ],
    sections: [
      {
        kind: "table",
        h2: "Who does what in an international move",
        columns: ["Stage", "Who does it", "What to ask"],
        rows: [
          ["Packing and wrapping at your door", "Us", "Whether wrapping is included and what is boxed by you"],
          ["Collection and holding until shipping", "Us", "How storage is billed while you wait for the container date"],
          ["Container, air freight and customs", "A shipping specialist you choose", "Destination rules, insurance and transit times"],
          ["Delivery and unpacking abroad", "The shipper or its agent", "Who is responsible at the other end"],
        ],
        note: "Compare shippers on the same scope and destination, and ask each to put in writing what they include, because overseas quotes differ most in what they leave out.",
      },
      {
        kind: "prose",
        h2: "Why the dates never match",
        paras: [
          "An overseas move has at least three dates that move independently: the end of your tenancy, the departure of your container or flight, and the availability of your new home. A shipper's slot is set by its own schedule, and a lease ends when the landlord says.",
          "When the lease ends first, your goods need somewhere to wait, and a hotel room is not it. We collect on the day you hand the keys back, hold everything under a barcoded inventory, and release it to your shipper when the slot arrives. Storage is billed monthly on the space your goods occupy, with no lock-in, so a late container costs the extra weeks and nothing else.",
        ],
      },
      {
        kind: "steps",
        h2: "How an international move runs with us",
        items: [
          { h: "Fix the shipping plan first", p: "Choose your shipper, confirm the container or freight date and the destination rules. It is the date everything else is planned around." },
          { h: "Survey and quote", p: "A video walkthrough or a visit, so our packing and collection quote reflects what is really moving." },
          { h: "Pack and collect", p: "Furniture wrapped at your door and boxes recorded in a barcoded inventory, planned for the shipper's loading window." },
          { h: "Hold if there is a gap", p: "Goods wait in storage, billed monthly with no lock-in, until the shipper is ready." },
          { h: "Release to the shipper", p: "Goods go out against the inventory, on the day and in the order the shipper needs." },
        ],
      },
      {
        kind: "checklist",
        h2: "How to compare international movers",
        items: [
          "Ask each company whether it is a mover, a freight forwarder or both, and who actually carries your goods.",
          "Get the same scope in writing from each: what is packed, by whom, door to door or port to port.",
          "Check insurance: what is covered, what is excluded and how a claim is made.",
          "Ask what the destination country requires and who prepares the paperwork.",
          "Confirm who is responsible if your container date slips, and what that costs.",
          "Ask whether the packing company and the shipper will coordinate with each other directly.",
        ],
      },
      {
        kind: "prose",
        h2: "Store instead of ship",
        paras: [
          "For some moves the most sensible answer is not to ship at all. If you are moving for a fixed period, or are not sure where you will settle, storing furniture in Dubai can cost less than shipping it twice. Our page on [international relocation from Dubai](/moving-storage-dubai/international-relocation) sets out when storing beats shipping and how to decide.",
          "If you are leaving the UAE altogether, the [leaving the UAE checklist](/moving-storage-dubai/leaving-uae-checklist) covers the exit sequence in the order it actually has to happen.",
        ],
      },
      {
        kind: "prose",
        h2: "What your shipper will want from us",
        paras: [
          "A shipper working to a loading date needs goods that are packed to a standard, listed and ready to go in a defined order. We pack and record to an inventory, so the list a shipper receives matches what is physically there, and we plan the collection or release to its loading window instead of the other way round.",
          "Tell us early which items are shipping, which are being sold and which are staying in storage, because the three get handled differently. Items that are going into the container should be packed to the shipper's requirements, so ask your shipper for them before we start, and we will pack to them.",
        ],
      },
      {
        kind: "prose",
        h2: "A realistic timeline for an overseas move",
        paras: [
          "Start with the shipping date and work backwards. Confirm the shipper and the slot first, then book our packing and collection around it, and leave a buffer between the day your lease ends and the day the container is loaded. If the buffer is wrong in either direction, storage covers the difference, and it is cheapest when it is planned for rather than improvised.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you ship internationally?",
        a: "No. We pack, collect and store, and we work alongside the shipping specialist you choose. The shipping, customs and delivery abroad are done by that company.",
      },
      {
        q: "Can you hold my goods until my container date?",
        a: "Yes. Goods are collected on your handover date and held under a barcoded inventory, billed monthly on the space used with no lock-in, then released to your shipper.",
      },
      {
        q: "Will you work with my shipper?",
        a: "Yes. Tell us who you have chosen and the loading date, and we plan the collection and release around it.",
      },
      {
        q: "Is it cheaper to store my furniture than to ship it?",
        a: "Sometimes. If you are abroad for a fixed period, or have not settled, storing in Dubai can cost less than shipping twice. Our international relocation page explains how to weigh the two.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate, and doing it yourself is the biggest saving.",
      },
    ],
    serviceType: "International move packing and storage",
    cta: {
      h2: "Moving abroad from Dubai?",
      p: "Tell us your shipper and your container date, and we will plan the packing, collection and storage around it.",
    },
    siblings: [
      "/moving-storage-dubai/international-relocation",
      "/moving-storage-dubai/leaving-uae-checklist",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------------------- best-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/best-movers",
    crumb: "How to Choose Movers",
    navLabel: "Choosing movers",
    navBlurb: "How to pick the best movers in Dubai, and what to ask before you book.",
    title: "How to Choose the Best Movers in Dubai | Practical Guide",
    description:
      "How to choose the best movers in Dubai: the questions to ask, the warning signs in a quote, and how to compare moving companies on the same scope before you pay.",
    keywords:
      "best movers in dubai, best movers and packers in dubai, best packers and movers, best moving companies in dubai, professional movers in dubai, how to choose movers dubai",
    ogTitle: "How to Choose the Best Movers in Dubai",
    h1: "Best Movers in Dubai: How to Choose and What to Ask",
    introH2: "Choosing movers, in brief",
    hero: [
      "The best movers in Dubai are the ones who put the most about your move in writing and stand behind it, not the ones with the loudest advert or the lowest total. There are many moving companies and packers in Dubai, and the difference between a smooth move and a bad one is usually visible in the quote before anyone lifts a box. This guide, part of [moving and storage in Dubai](/moving-storage-dubai), shows what to look for.",
      "We are one of those companies, so we have not ranked anyone. What we can do is set out the questions that separate a reliable mover from a risky one, and answer them for ourselves.",
      "If you only read one section, make it the one on quotes. A quote is a promise in writing, and the best predictor of what happens on the day.",
    ],
    sections: [
      {
        kind: "checklist",
        h2: "Ten questions to ask any mover",
        intro: "A reliable company answers all of these in writing without being pushed.",
        items: [
          "Is the quote itemised, with the scope, the crew, the vehicles and the date stated?",
          "Is wrapping included, or priced as an extra when the furniture is in the lobby?",
          "Who books the service lift and permit at both buildings, and what happens if a slot is missed?",
          "Does the quote cover both addresses, or only the first?",
          "What is the process if an item is damaged, and is there a written claims route?",
          "Will the same company store my goods if my dates move?",
          "What assumptions does the quote make about access, and what changes if they are wrong?",
          "Will a crew leader come to a survey for a larger move, or is the quote from a phone call?",
          "Is the company licensed and can it show the paperwork?",
          "Can it point to real customer reviews that you can check yourself?",
        ],
      },
      {
        kind: "prose",
        h2: "The quote is the best test",
        paras: [
          "A low total is not the warning sign. A short quote is. When a quote does not state the crew, the vehicles, the packing scope and the building bookings, the missing lines are where the price changes later. Two companies quoting the same move should produce quotes that look similar line by line, and if they do not, they are quoting different jobs.",
          "Ask both to quote the same written scope. If one refuses, that tells you something. If both agree, the difference between them becomes real, and you can choose on that.",
        ],
      },
      {
        kind: "table",
        h2: "Warning signs and what they usually mean",
        columns: ["Sign", "What it often means"],
        rows: [
          ["A price given over the phone with no survey", "A quote on room count, which comes in low for villas and large flats"],
          ["No mention of lift or permit bookings", "Left to you, and a missed slot costs a paid crew's time"],
          ["Wrapping not mentioned", "Probably an extra charged on the day"],
          ["Pressure to pay a large deposit early", "Ask for the terms in writing before you pay anything"],
          ["No company name or licence on the quote", "No one accountable if something goes wrong"],
          ["Reviews that are all recent and all generic", "Check names, dates and detail, and look for reviews on independent platforms"],
        ],
      },
      {
        kind: "prose",
        h2: "Specialists and generalists",
        paras: [
          "Some moves suit a specialist. A villa with a large garage, an office after hours, an international shipment and a single piano each reward a company that does that job regularly. Ask how often the company handles your kind of move, and for a reference.",
          "Where we sit is moving combined with storage. If your move has a gap in the middle, one company that packs, moves and stores gives you a single inventory and a single point of contact. If it does not, ask whether that matters to you before it becomes a reason to choose us. Our pages for [villa movers](/moving-storage-dubai/villa-movers), [apartment movers](/moving-storage-dubai/apartment-movers) and [office movers](/moving-storage-dubai/office-movers) set out how we run each.",
        ],
      },
      {
        kind: "prose",
        h2: "How we answer the same questions",
        paras: [
          "Our quotes are free and itemised. Furniture wrapping is part of every collection. We book the service lift and any permit at both buildings. For larger jobs we survey by video or visit first. If your dates move, the same company stores your goods, under one barcoded inventory, billed monthly on the space used with no lock-in.",
          "If you would like us to quote the same scope as another company, send it over. Our [guide to what movers cost](/moving-storage-dubai/moving-cost) explains each line of a quote, so you can check both.",
        ],
      },
      {
        kind: "prose",
        h2: "What a proper survey looks like",
        paras: [
          "A survey is a walk through every room, the garage and any store room, by video or in person, with someone who will actually run the job. They should ask about the buildings at both ends, count what is moving, note what comes apart and what needs special care, and tell you what could change the price. If a survey takes five minutes and no one asks about access, the quote that follows is a guess.",
          "Treat the quality of the survey as part of the test. A company that takes it seriously is usually the company that takes the move seriously.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I choose the best movers in Dubai?",
        a: "Compare itemised written quotes on the same scope. The company that states the crew, vehicles, packing, building bookings and what happens if something changes is the one taking responsibility for the move.",
      },
      {
        q: "Is the cheapest mover a bad choice?",
        a: "Not necessarily, but a cheap quote that leaves out wrapping, a second building or the lift booking is cheap only until the day. Check what is missing before you compare totals.",
      },
      {
        q: "Should I get a survey?",
        a: "For anything larger than a studio, yes. A quote from a phone call is usually on room count and comes in low for villas and large flats.",
      },
      {
        q: "Can the same company store my things if my dates move?",
        a: "With us, yes. One company means one inventory and one number to call, and storage is billed monthly on the space used with no lock-in.",
      },
      {
        q: "Will you quote the same scope as another company?",
        a: "Yes. Send us their scope and we will quote it, so the two numbers describe the same job.",
      },
    ],
    serviceType: "Moving company selection guidance",
    cta: {
      h2: "Comparing movers in Dubai?",
      p: "Send us the other company's scope and we will quote the same job, so you can compare like for like.",
    },
    siblings: [
      "/moving-storage-dubai/moving-cost",
      "/moving-storage-dubai/movers-near-me",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/office-movers",
    ],
  },

  /* ------------------------------------------------------- bur-dubai-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/bur-dubai-movers",
    crumb: "Bur Dubai Movers",
    navLabel: "Bur Dubai, Karama, Deira",
    navBlurb: "Older buildings and dense streets, planned around access.",
    title: "Movers and Packers in Bur Dubai | Karama, Deira and Old Dubai",
    description:
      "Movers and packers in Bur Dubai, Karama and Deira. Older buildings, dense streets and tight access, planned for before the day, with storage if dates slip.",
    keywords:
      "movers and packers bur dubai, movers and packers in bur dubai, packers and movers in karama, packers and movers in deira dubai, bur dubai movers, deira movers",
    ogTitle: "Movers and Packers in Bur Dubai, Karama and Deira",
    h1: "Movers and Packers in Bur Dubai, Karama and Deira",
    introH2: "Moving in old Dubai, in brief",
    hero: [
      "Movers and packers in Bur Dubai, Karama and Deira work in the oldest residential districts in the city, where buildings are older, streets are dense and a vehicle cannot always stop where you would like it to. We handle these moves as part of [moving and storage in Dubai](/moving-storage-dubai), with the access planned for before the day instead of discovered on it.",
      "This page is for people moving into, out of or within the creek-side districts. It explains what sets these moves apart, how to plan around narrow streets and older buildings, and what to do when the next place is not ready.",
      "The usual difficulty is not distance, it is access: the kerb, the stairwell and the distance between the vehicle and the door.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What makes old Dubai moves different",
        columns: ["Factor", "What to expect", "What we plan for"],
        rows: [
          ["Buildings", "Older blocks, often without a service lift, and narrower stairwells", "Carrying time, and measuring large pieces before the day"],
          ["Streets", "Dense, with limited kerb space and restricted stopping", "Where the vehicle can stand, and the length of the carry"],
          ["Timing", "Busy roads for much of the day", "A start time that avoids the worst of it"],
          ["Buildings' rules", "Practice varies from building to building", "Asking the owner or manager what is required, at both ends"],
        ],
        note: "Local detail for each district is on our location pages for [Deira](/locations/dubai/deira) and the other districts we cover.",
      },
      {
        kind: "prose",
        h2: "Plan the carry before the day",
        paras: [
          "In a district of older buildings, most of the time on a move goes on carrying. If there is no service lift, every item goes down the stairs, and the width of the stairwell and the turn at each landing decide what can be taken as it is and what has to be taken apart.",
          "Measure the largest pieces against the stairwell before you commit to bringing them, and tell us the floor when you ask for a quote. We will say before the day if a piece will not come down, so the building does not make that decision for you.",
        ],
      },
      {
        kind: "checklist",
        h2: "Old Dubai move checklist",
        items: [
          "Tell us the building, the floor and whether there is a lift, a service lift or only stairs.",
          "Ask the building owner or manager what is required for a move and what hours are allowed.",
          "Identify where the vehicle can stand, and how far that is from the door.",
          "Measure the largest pieces against the stairwell and landing turns.",
          "Box small items yourself, sealed and labelled, to shorten the carry.",
          "Confirm access and timing at the new address, since the same issues may apply there.",
        ],
      },
      {
        kind: "prose",
        h2: "When the next place is not ready",
        paras: [
          "Older districts have a high share of short and shared tenancies, and dates rarely line up. When there is a gap, everything is wrapped, taken to our warehouse and held under a barcoded inventory, billed monthly on the space used with no lock-in, and delivered when you are ready.",
          "Furniture wrapping is part of every collection. The same crew that wraps carries it down, and the inventory travels with it.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Bur Dubai or Deira move",
        items: [
          { h: "Tell us the building and the floor", p: "Plus whether there is a lift. It is the fact that tells us how the day will run." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for anything larger than a flat." },
          { h: "Plan the access", p: "Parking position, the carry, and the building's allowed hours at both ends." },
          { h: "Wrap and carry", p: "Furniture wrapped at your door, with pieces taken apart where the stairwell requires it." },
          { h: "Move or store", p: "To the new address, or into storage under a barcoded inventory." },
        ],
      },
      {
        kind: "prose",
        h2: "Parking, kerbs and the length of the carry",
        paras: [
          "In dense streets the vehicle may stand some distance from the door, and every extra metre is carried by hand. Tell us where it can stop, whether there is a loading bay or only the kerb, and whether stopping is restricted at the time of day you want. We would rather plan a longer carry than discover one.",
          "If you can reserve a space or arrange for a neighbour not to park in it, say so. And remember the other end: the same issues may apply at the new address, so ask about parking there too.",
        ],
      },
      {
        kind: "prose",
        h2: "Shared and older tenancies",
        paras: [
          "Older districts have many shared flats and long-standing tenancies, and a move may involve several people with different leave dates. Tell us who is moving and when, which items belong to whom, and who will be there on the day. A clear list of what is going and what is staying avoids a crew carrying out something that belongs to a flatmate.",
        ],
      },
      {
        kind: "prose",
        h2: "Timing the day around the district",
        paras: [
          "Old Dubai is busy for much of the day, so the start time matters more here than the distance. Early in the morning is usually the easiest for kerb space and carrying, and weekdays are calmer than weekends. Tell us your building's allowed hours, and we will propose a start that fits them and gives the crew room to work without rushing.",
          "Allow time at the other end too, because a quick load followed by a slow unload helps nobody. If the delivery address has restrictions of its own, we plan for those as well.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover Bur Dubai, Karama and Deira?",
        a: "Yes. Send the building and street and we will confirm access before you book, since these districts vary block by block.",
      },
      {
        q: "Can you move me out of a building with no lift?",
        a: "Yes. Tell us the floor so the crew and time are planned for the stairs, and we will say before the day if a piece will not come down.",
      },
      {
        q: "Can the vehicle get to my door?",
        a: "Often not directly, which is why we ask where it can stand and how far the carry is. The answer shapes the time and the quote.",
      },
      {
        q: "What if my new home is not ready?",
        a: "Goods go into storage under a barcoded inventory, billed monthly on the space used with no lock-in, and are delivered when the new place is ready.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in Bur Dubai, Karama and Deira",
    areaServed: "Bur Dubai, Dubai",
    cta: {
      h2: "Moving in Bur Dubai, Karama or Deira?",
      p: "Tell us the building, the floor and whether there is a lift, and we will plan the carry first.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/furniture-movers",
      "/moving-storage-dubai/business-bay-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------ international-city-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/international-city-movers",
    crumb: "International City Movers",
    navLabel: "International City",
    navBlurb: "Cluster-by-cluster moves in International City, next to DSO.",
    title: "Movers in International City Dubai | Cluster-by-Cluster Moves",
    description:
      "Movers and packers in International City, Dubai. Flats in themed clusters planned by building and floor, with storage if your next place is not ready.",
    keywords:
      "movers in international city, movers and packers in international city dubai, movers and packers international city dubai, international city movers, international city moving company",
    ogTitle: "Movers and Packers in International City, Dubai",
    h1: "Movers in International City: Cluster by Cluster",
    introH2: "Moving in International City, in brief",
    hero: [
      "Movers and packers in International City deal with a community built from clusters, each a group of low and mid-rise blocks arranged around shared space and named by theme, so the first thing a crew needs is not the area but the cluster and the building. We handle these moves as part of [moving and storage in Dubai](/moving-storage-dubai), planned by building and floor.",
      "This page is for people moving into, out of or within International City, which sits next to Dubai Silicon Oasis and Academic City. It covers how the clusters affect access, why turnover here is high, and what to do when the next place is not ready.",
      "The common surprise is how much of the job is finding the right entrance and the right floor. A cluster has many similar buildings, and a wrong turn costs a paid crew time.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why the cluster matters",
        paras: [
          "International City is laid out in clusters, and the name of the cluster is part of the address. Buildings inside a cluster look alike, entrances are not always where you expect, and the same street name can appear more than once. A crew that has the cluster, the building and the floor in advance arrives at the right door.",
          "Send the cluster name, the building number and the floor when you ask for a quote. If you can add a photo of the entrance, even better. It costs nothing and it prevents the most common delay on a move here.",
        ],
      },
      {
        kind: "table",
        h2: "What to plan for in a cluster move",
        columns: ["Factor", "What to expect", "What we plan for"],
        rows: [
          ["Building type", "Low and mid-rise blocks, many without a service lift", "Carrying time, and measuring large pieces against the stairwell"],
          ["Entrances", "Several similar buildings per cluster", "The exact entrance and floor, agreed in advance"],
          ["Parking", "Shared areas with limited space", "Where the vehicle can stand and how far the carry is"],
          ["Building's rules", "Practice varies between blocks", "Asking the owner or manager what is required, at both ends"],
        ],
        note: "The area is also near [Dubai Silicon Oasis](/moving-storage-dubai/silicon-oasis-movers), which has its own page, and the storage side is on our [International City location page](/locations/dubai/international-city).",
      },
      {
        kind: "checklist",
        h2: "International City move checklist",
        items: [
          "Send the cluster name, the building number and the floor, with a photo of the entrance if you can.",
          "Ask the building owner or manager about permitted moving hours and any permit.",
          "Tell us whether there is a lift, and measure large pieces against the stairwell if there is not.",
          "Agree where the vehicle can stand, and how far that is from the door.",
          "Box small items yourself, sealed and labelled, to shorten the carry.",
          "Confirm access at the new address, since the same issues may apply there.",
        ],
      },
      {
        kind: "prose",
        h2: "High turnover and the gap between leases",
        paras: [
          "Homes here are compact and leases turn over often, so moves frequently involve a household that has more than the next place holds, or a gap between tenancies. When there is a gap, everything goes into storage at our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and comes out when you need it.",
          "Furniture wrapping is part of every collection, and the same crew that wraps carries it down.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run an International City move",
        items: [
          { h: "Send the cluster, building and floor", p: "It is the one fact that tells us how the day will run." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for anything larger than a flat." },
          { h: "Plan the access", p: "Entrance, parking position and the building's allowed hours, at both addresses." },
          { h: "Wrap and carry", p: "Furniture wrapped at your door, with pieces taken apart where the stairwell requires it." },
          { h: "Move or store", p: "To the new address, or into storage under a barcoded inventory." },
        ],
      },
      {
        kind: "prose",
        h2: "What to send us for the quote",
        paras: [
          "Send the cluster, the building number and the floor, a photo of the entrance, and a rough list of what is moving. If there is no lift, add the width of the stairwell and any tight turns. With those we can tell you what the day involves, instead of giving a range and hoping.",
        ],
      },
      {
        kind: "prose",
        h2: "Weekdays, weekends and the end of a lease",
        paras: [
          "Leases here often end at month-end, which is also when crews are busiest, so a weekday move a few days either side of the date is easier to book and gives you more choice of start time. If you must move on the busiest day, ask early and be flexible on the hour.",
          "If the dates are fixed and the next place is not ready, goods go into storage on the day, and come out when you need them. You can also move in stages, with the heavy furniture first and boxes later.",
        ],
      },
      {
        kind: "prose",
        h2: "Staging a move when the new place is partly ready",
        paras: [
          "Sometimes a new home is available for a few days before you can move in fully, because of cleaning, repairs or a handover still to be signed. In that case it is worth moving in two stages: the heavy furniture first, so beds and the sofa are in place, and boxes afterwards. The first stage can happen as soon as you have access, and the second can follow when you are ready.",
          "Anything not needed straight away can wait in storage under the same inventory, and come out when you ask for it, so you are never forced to fit a whole home into a space that is only half available.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover all clusters in International City?",
        a: "Yes. Send the cluster name, building number and floor, and we will confirm access before you book.",
      },
      {
        q: "Why do you need the cluster and building number?",
        a: "Buildings inside a cluster look alike and entrances vary, so the exact building and floor save a paid crew from searching for the right door.",
      },
      {
        q: "Can you move me out of a block with no lift?",
        a: "Yes. Tell us the floor so the crew and time are planned for the stairs, and we will say beforehand if a piece will not come down.",
      },
      {
        q: "What if my next place is not ready?",
        a: "Goods go into storage under a barcoded inventory, billed monthly on the space used with no lock-in, and come out when you need them.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in International City",
    areaServed: "International City, Dubai",
    cta: {
      h2: "Moving in International City?",
      p: "Send the cluster, the building and the floor, and we will plan the day around them.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/silicon-oasis-movers",
      "/moving-storage-dubai/jvc-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },
]
