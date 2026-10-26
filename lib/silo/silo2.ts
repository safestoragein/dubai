import type { SiloPageContent } from "./types"

/**
 * SILO 2 · /personal-storage-dubai/* — household and personal storage.
 *
 * Seven of these are MOVES: /personal-storage, /furniture-storage,
 * /car-storage, /student-storage, /expat-leaving-uae, /art-storage and
 * /electronics-storage were flat root URLs competing with each other and with
 * Silo 1. Their route files are deleted and next.config.mjs 301s each old URL
 * here in the same deployment.
 *
 * ⚠ NO WINE OR ALCOHOL STORAGE. The plan listed a /wine-storage page behind a
 * legal-review gate; it was never published and the offering has been dropped
 * by decision rather than deferred.
 *
 * This is now consistent across the site, which it was not before. Alcohol and
 * liquor are listed as items we do NOT store on
 * /self-storage-dubai/prohibited-items, while /personal-storage-dubai/art-storage,
 * /blog/what-can-you-store and /blog/summer-storage-dubai all separately
 * advertised "wine and spirits collections" as an accepted category — one of
 * them telling readers to ask about dedicated wine storage. A testimonial from
 * a customer described as a wine collector sat on /testimonials. All of that
 * has been removed.
 *
 * Do not reintroduce wine, spirits or alcohol as a stored category anywhere.
 * Alcohol storage in the UAE carries a licensing dimension beyond storage
 * itself, and advertising a service the same site says it does not provide is
 * worse than simply not offering it.
 */

export const SILO2_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------ household-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/household-storage",
    crumb: "Household Storage",
    navLabel: "Household storage",
    navBlurb: "A whole home's contents, collected, wrapped and held.",
    title: "Household Storage Dubai | Whole-Home Collection & Storage",
    description:
      "Household storage in Dubai, billed on the space you use. We empty the property, wrap and load everything, and deliver it to the next address when you are ready.",
    keywords:
      "household storage dubai, home storage dubai, house storage dubai, household goods storage dubai, home contents storage uae",
    ogTitle: "Household Storage in Dubai — We Empty The Property",
    h1: "Household Storage in Dubai",
    hero: [
      "Emptying a whole home is a different job from storing a few boxes, and it is the most common booking we take. The crew arrives, the property is cleared, and everything is held until you have somewhere to put it.",
      "You pay only for **the floor space your goods occupy** — part of [personal storage in Dubai](/personal-storage-dubai).",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What clearing a Dubai property involves",
        paras: [
          "More coordination than lifting. In a tower the service lift has to be booked days ahead, and some buildings only permit moves inside a fixed window. In a gated community the van and the crew need registering with security. Both are ours to arrange.",
          "Leaving the country rather than moving within it? [Storage for expats leaving the UAE](/personal-storage-dubai/expat-storage) covers that.",
        ],
      },
      {
        kind: "cards",
        h2: "What decides how long the day runs",
        intro: "Four things turn a three-hour collection into a seven-hour one.",
        items: [
          {
            icon: "📦",
            h: "Loose belongings",
            p: "A flat where the small things are already boxed loads about a third faster.",
          },
          {
            icon: "🛗",
            h: "The service lift",
            p: "Booked or shared, and whether the building allows it at the hour you arranged.",
          },
          {
            icon: "🗑️",
            h: "What is not going",
            p: "The crew removes furniture, not rubbish. Decide that before the day, by room.",
          },
          {
            icon: "🧊",
            h: "Fridge and washer",
            p: "Both need emptying, defrosting and drying — a full day before collection.",
          },
        ],
      },
      {
        kind: "table",
        h2: "What a whole-home booking looks like",
        columns: ["Property", "Crew time", "Typical stored space"],
        rows: [
          ["Studio", "2–3 hours", "~30 sq ft"],
          ["1 bedroom flat", "3–5 hours", "60–90 sq ft"],
          ["2 bedroom flat", "5–7 hours", "120–150 sq ft"],
          ["3 bedroom villa", "Most of a day", "240–270 sq ft"],
          ["4+ bedroom villa", "A full day, sometimes two", "300+ sq ft, on survey"],
        ],
        note: "Sizes are estimated. Be there for the first twenty minutes and the last ten — the start is where you point at what goes, the end is where you sign the inventory.",
      },
      {
        kind: "checklist",
        h2: "What to do the week before",
        items: [
          "Box every loose small item — the single biggest lever on the day.",
          "Decide what is not going, by room rather than by item.",
          "Book the service lift, or tell us to.",
          "Set aside a suitcase for this week — documents, chargers, medication, clothes.",
        ],
        note: "What cannot go in the van is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
      },
    ],
    faqs: [
      {
        q: "Can you clear the whole property in one day?",
        a: "For anything up to a three-bedroom villa, yes. Four bedrooms and above sometimes needs two days, and we tell you that when quoting rather than at 4pm on the day.",
      },
      {
        q: "Do I have to be there the whole time?",
        a: "No. Be there at the start to point at what goes and at the end to sign the inventory. Most customers leave in between.",
      },
      {
        q: "What if my new place is not ready?",
        a: "That is what the storage is for. Billing is monthly with no minimum and no fixed end date, so a handover that slips by three weeks costs three weeks.",
      },
      {
        q: "How much notice do you need?",
        a: "Two to three days for anything up to a 2BHK, and about a week for a villa. In late June and August — the peak of the Dubai moving season — book a week ahead regardless of size.",
      },
    ],

    serviceType: "Household storage",
    cta: {
      h2: "Clearing a property?",
      p: "Tell us the size, the date and the floor. That is enough for both numbers today.",
    },
    siblings: [
      "/personal-storage-dubai/furniture-storage",
      "/personal-storage-dubai/apartment-storage",
      "/personal-storage-dubai/villa-storage",
      "/personal-storage-dubai/expat-storage",
    ],
  },

  /* ------------------------------------------------------ apartment-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/apartment-storage",
    crumb: "Apartment Storage",
    navLabel: "Apartment storage",
    navBlurb: "Tower flats: service lifts, moving windows and no loft.",
    title: "Apartment Storage Dubai | Tower Flats, Service Lifts, No Loft",
    description:
      "Storage for Dubai apartments. We handle the service-lift booking and the building's moving window, wrap in the flat and carry everything down. Pay only for the space you use.",
    keywords:
      "apartment storage dubai, flat storage dubai, tower storage dubai, storage for apartments dubai, small apartment storage dubai",
    ogTitle: "Apartment Storage in Dubai — Including The Lift Booking",
    h1: "Apartment Storage in Dubai",
    hero: [
      "A Dubai apartment has exactly the storage the developer drew — no loft, no basement, no garage. That is why so much of [personal storage in Dubai](/personal-storage-dubai) is tower flats.",
      "The other half is access, and **we arrange all of it**: the service lift, the moving window, the permit. You pay only for the space your items use.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The service lift is the whole job",
        paras: [
          "The difference between a three-hour collection and a seven-hour one is almost never the amount of furniture. It is whether the lift was booked, whether it is shared with another move, and whether the building allows it at the hour you arranged.",
          "Buildings vary and none of it is published. We deal with building management because we do it several times a week.",
        ],
      },
      {
        kind: "cards",
        h2: "What apartment residents store",
        intro: "Four bookings that cover most tower collections.",
        items: [
          {
            icon: "🚪",
            h: "A room, to get it back",
            p: "Guest bed and wardrobe out, so the second bedroom becomes an office.",
          },
          {
            icon: "🧳",
            h: "The seasonal pile",
            p: "Suitcases, winter bedding, sports kit — what fills the one store cupboard.",
          },
          {
            icon: "🛋️",
            h: "Furniture while it is let",
            p: "Your furniture out while a tenant's is in. A steady summer rhythm here.",
          },
          {
            icon: "📅",
            h: "The gap between leases",
            p: "Ejari ends on the 3rd, the new place is ready on the 20th — [short term storage](/self-storage-dubai/short-term).",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Getting a tower collection right",
        items: [
          "Tell us the floor, and whether there is a service lift or only passenger lifts.",
          "Confirm your building's permitted moving hours.",
          "Ask whether a move-out permit or NOC is needed.",
          "Moving into another tower? Give us that address too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you book the service lift for me?",
        a: "Yes, as part of arranging the collection. Tell us the building and the floor when you book — including the move-in slot at the new address if you are moving to another tower.",
      },
      {
        q: "What if my building only allows moves at certain times?",
        a: "Tell us the permitted window when you book and the collection is scheduled inside it. Discovering the restriction on the day is what causes a failed move.",
      },
      {
        q: "I am on the 30th floor with one lift. Is that a problem?",
        a: "Not a problem, but it lengthens the job. We size the crew for it rather than being surprised by it.",
      },
      {
        q: "Can you collect if I am not there?",
        a: "Someone has to let the crew in and sign the inventory, but it does not have to be you. Name the person in advance.",
      },
    ],

    serviceType: "Apartment storage",
    cta: {
      h2: "Living in a tower?",
      p: "Send the building name and floor with your enquiry. We will handle the lift and the permit.",
    },
    siblings: [
      "/personal-storage-dubai/household-storage",
      "/personal-storage-dubai/villa-storage",
      "/personal-storage-dubai/furniture-storage",
      "/personal-storage-dubai/seasonal-storage",
    ],
  },

  /* ---------------------------------------------------------- villa-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/villa-storage",
    crumb: "Villa Storage",
    navLabel: "Villa storage",
    navBlurb: "Whole villas including the garage, which is where the volume hides.",
    title: "Villa Storage Dubai | Whole-Villa Clearance Including The Garage",
    description:
      "Villa storage in Dubai. Whole-villa collections including the garage, garden and maid's room — the three areas that account for most of the volume people forget to count.",
    keywords:
      "villa storage dubai, villa clearance dubai, storage for villa dubai, large house storage dubai, garage storage dubai",
    ogTitle: "Villa Storage in Dubai — Including The Garage",
    h1: "Villa Storage in Dubai",
    hero: [
      "A villa collection is not just a bigger flat collection. It has three areas a flat does not — the garage, the garden and usually a maid's room — and between them they routinely account for a third of the volume. Underestimating them is the most common quoting error in [personal storage in Dubai](/personal-storage-dubai).",
      "You pay only for **the space your goods occupy**. Access is easier than a tower — a driveway rather than a service lift — but gated communities need the crew registered with security first.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Where villa volume actually hides",
        intro: "Three areas a flat does not have, and the one adjustment that fixes most estimates.",
        items: [
          {
            icon: "🚗",
            h: "The garage",
            p: "Bikes, tools, a spare fridge, garden furniture, boxes never opened since the last move. Regularly the largest room by volume — and almost nobody counts it.",
          },
          {
            icon: "🌴",
            h: "The garden and terrace",
            p: "Dining sets, loungers, parasols, a barbecue, planters. Bulky, awkward and usually dirty — clean it before storage, not after.",
          },
          {
            icon: "🚪",
            h: "The maid's room",
            p: "Often used as overflow storage already, so it is dense and rarely inventoried by the household.",
          },
          {
            icon: "📐",
            h: "The adjustment",
            p: "A villa that felt like 200 sq ft on a room count is usually 260 once the garage is in — [the size calculator](/self-storage-dubai/storage-calculator) walks through it.",
          },
        ],
      },
      {
        kind: "table",
        h2: "What a villa collection takes",
        columns: ["Villa", "Crew time", "Typical stored space"],
        rows: [
          ["2 bedroom townhouse", "5–7 hours", "150–200 sq ft"],
          ["3 bedroom villa", "A full day", "240–270 sq ft"],
          ["4 bedroom villa", "A full day, sometimes two", "300–380 sq ft"],
          ["5+ bedroom villa", "Two days", "Quoted on survey"],
        ],
        note: "Sizes are estimated. For four bedrooms and above we would rather survey than estimate — it is free, takes about half an hour, and it is the difference between a quote and a guess.",
      },
      {
        kind: "checklist",
        h2: "The villa-specific list",
        intro: "Most of these do not apply to a flat at all.",
        items: [
          "Return the gas cylinder to the supplier — it cannot be stored or transported.",
          "Dispose of paint, thinners, pool chemicals and pesticides. The garage is where every prohibited item lives — see [what you can and cannot store](/self-storage-dubai/prohibited-items).",
          "Clean the outdoor furniture, and drain anything with water in it.",
          "Register the vehicle and crew with community security if you are in a gated development.",
          "Decide about the garden plants now — nothing living goes into the warehouse.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you empty the garage as well?",
        a: "Yes, and it is usually the largest single area by volume. Tell us it is included when you ask for a quote — a villa quoted on bedrooms alone will come in low.",
      },
      {
        q: "Can you take outdoor furniture?",
        a: "Yes. Clean it first, because sand and dust otherwise go into the wrap and transfer to everything stored nearby. Anything with water in it should be drained and dried.",
      },
      {
        q: "How long does a villa collection take?",
        a: "A three-bedroom is a full day. Four bedrooms and above is a full day and sometimes two, which we will tell you at the quote rather than discovering at 5pm.",
      },
      {
        q: "Do you need access permits for gated communities?",
        a: "Most gated developments require the vehicle and crew to be registered with security in advance. Tell us the community when booking and it is arranged; turning up unregistered means waiting at the gate.",
      },
    ],

    serviceType: "Villa storage",
    cta: {
      h2: "Clearing a villa?",
      p: "Ask for a survey rather than an estimate. It is free, takes half an hour, and it counts the garage.",
    },
    siblings: [
      "/personal-storage-dubai/household-storage",
      "/personal-storage-dubai/apartment-storage",
      "/personal-storage-dubai/car-storage",
      "/personal-storage-dubai/renovation-storage",
    ],
  },

  /* ------------------------------------------------------ motorbike-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/motorbike-storage",
    crumb: "Motorbike Storage",
    navLabel: "Motorbike & bike storage",
    navBlurb: "Motorbikes, bicycles and e-bikes, with the battery question answered.",
    title: "Motorbike & Bike Storage Dubai | Indoor, Battery Handled",
    description:
      "Motorbike and bicycle storage in Dubai. Indoor covered storage, correct preparation for standing in this climate, and how lithium batteries are handled.",
    keywords:
      "bike storage dubai, motorbike storage dubai, motorcycle storage dubai, bicycle storage dubai, e-bike storage dubai, scooter storage dubai",
    ogTitle: "Motorbike and Bike Storage in Dubai",
    h1: "Motorbike and Bicycle Storage in Dubai",
    hero: [
      "Two-wheelers store easily — they take a fraction of the space a car does — but they suffer more from standing still, because everything on them is smaller and more sensitive. Part of [personal storage in Dubai](/personal-storage-dubai).",
      "Everything is stored indoors and covered. **Lithium batteries are handled separately** and must be discussed before booking — that is a fire safety question, not an administrative one.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The lithium battery question, first",
        paras: [
          "E-bikes, e-scooters and modern power tools carry lithium-ion packs, and a damaged or degraded pack in a hot warehouse is a genuine fire risk. Removable packs should come off the bike and be discussed with us; non-removable packs need raising at quoting rather than arriving unannounced on collection day.",
          "None of this makes an e-bike unstorable — it makes it a conversation before the crew arrives. The general list is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
        ],
      },
      {
        kind: "steps",
        h2: "Preparing a bike for months of standing",
        intro: "More important than for a car, because the components are smaller.",
        items: [
          {
            h: "Fuel and battery",
            p: "Fill the tank and add a stabiliser. Disconnect the battery or use a maintainer — a bike battery can be dead in under a month here.",
          },
          {
            h: "Tyres",
            p: "Over-inflate slightly. Narrow tyres flat-spot faster than car tyres and at lower weight.",
          },
          {
            h: "Chain",
            p: "Wash, dry and lubricate it. A chain stored dirty in humid air is the one that comes back seized.",
          },
          {
            h: "Stand",
            p: "A paddock or centre stand keeps weight off the suspension and tyres. Avoid months on the side stand.",
          },
          {
            h: "Cover",
            p: "Something breathable. A plastic sheet traps humidity against the metal, which is worse than no cover.",
          },
        ],
      },
      {
        kind: "cards",
        h2: "Why people store two wheels here",
        items: [
          {
            icon: "☀️",
            h: "Summer storage",
            p: "Cyclists who stop riding between May and October and do not want a road bike taking a room in the flat.",
          },
          {
            icon: "✈️",
            h: "Leaving the UAE",
            p: "A bike worth keeping rather than selling at short notice — see [expat storage](/personal-storage-dubai/expat-storage).",
          },
          {
            icon: "🏢",
            h: "Building rules",
            p: "Many Dubai towers do not permit bikes in flats, lifts or parking bays. The most common single-bike booking.",
          },
          {
            icon: "🔧",
            h: "Between projects",
            p: "A restoration paused, or a second bike that only comes out in the cooler months.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I store an e-bike or e-scooter?",
        a: "Raise it before booking. Removable lithium packs need to come off and be discussed; non-removable packs need to be flagged at quoting. This is a fire safety requirement rather than a formality.",
      },
      {
        q: "How much space does a motorbike take?",
        a: "Far less than a car — a motorbike is broadly comparable to a large wardrobe in footprint, and a bicycle much less again.",
      },
      {
        q: "Do you store bicycles over the summer?",
        a: "Yes, and it is one of the steadiest seasonal bookings — road and gravel bikes go in around May and come back in October. Indoor covered storage is what keeps components from corroding in the humidity.",
      },
      {
        q: "Will the chain seize?",
        a: "Not if it is washed, dried and lubricated before storage. A chain put away dirty in humid air is the most common thing that comes back unusable, and it takes ten minutes to prevent.",
      },
    ],

    serviceType: "Motorbike storage",
    cta: {
      h2: "Storing two wheels?",
      p: "Tell us the machine and whether it has a lithium battery. Everything else is straightforward.",
    },
    siblings: [
      "/personal-storage-dubai/car-storage",
      "/personal-storage-dubai/sports-equipment-storage",
      "/personal-storage-dubai/seasonal-storage",
      "/personal-storage-dubai/expat-storage",
    ],
  },

  /* -------------------------------------------------------- luggage-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/luggage-storage",
    crumb: "Luggage Storage",
    navLabel: "Luggage storage",
    navBlurb: "Bags and boxes between a checkout and a flight, or for months.",
    title: "Luggage Storage Dubai | Bags Between A Checkout And A Flight",
    description:
      "Luggage storage in Dubai. Collected from your hotel, flat or office and held for days or months, then delivered wherever you need it. No minimum term.",
    keywords:
      "luggage storage dubai, luggage storage, bag storage dubai, suitcase storage dubai, left luggage dubai, baggage storage dubai",
    ogTitle: "Luggage Storage in Dubai — Collected, Not Queued For",
    h1: "Luggage Storage in Dubai",
    hero: [
      "In most cities, luggage storage means leaving a bag at a station counter. Dubai does not really have that — what it has instead is a collection service, part of [personal storage in Dubai](/personal-storage-dubai).",
      "Bags are collected from wherever you are and held for as long as you need, then delivered to whichever address you name. **There is no minimum period**, so three days is three days.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "When people actually use this",
        intro: "Four situations, and only one of them is a tourist.",
        items: [
          {
            icon: "🏨",
            h: "Checkout to flight",
            p: "A late-night departure after a midday checkout, with more bags than a concierge wants to hold for nine hours.",
          },
          {
            icon: "🔁",
            h: "Between two leases",
            p: "The flat is handed back, the next is not ready, and you are in a hotel with six suitcases you cannot fit in the room.",
          },
          {
            icon: "🎓",
            h: "Students over summer",
            p: "The residence closes and you fly home for three months — see [student storage](/personal-storage-dubai/student-storage).",
          },
          {
            icon: "💼",
            h: "Long trips and rotations",
            p: "Rotational workers and long-haul crew who keep a set of things in Dubai without keeping a flat.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "What this is and is not",
        paras: [
          "**It is not walk-up left luggage.** Collection is booked in advance and the bags are picked up from you — better for several bags, worse for a spontaneous two hours. **Retrieval takes 24 to 48 hours**, so if you need a bag back the same morning, this is the wrong service.",
          "**Passports stay with you.** Do not store documents, medication or anything you will need at short notice — see [what you can and cannot store](/self-storage-dubai/prohibited-items).",
        ],
      },
      {
        kind: "steps",
        h2: "How a luggage booking runs",
        items: [
          { h: "Tell us the count and dates", p: "How many bags, where they are now, and roughly how long." },
          { h: "We collect", p: "From a hotel lobby, a flat, or an office — whatever address suits you." },
          { h: "Logged and stored", p: "Each bag is listed on the inventory you sign, and stored indoors." },
          {
            h: "Delivered where you say",
            p: "A different hotel, a new flat, or an airport hotel the night before a flight. Normally 24–48 hours' notice.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I drop bags off myself?",
        a: "You can, by arrangement. Most people find collection easier because it removes the trip, and you are billed on storage rather than on transport direction.",
      },
      {
        q: "How quickly can I get a bag back?",
        a: "Normally 24 to 48 hours to any address in Dubai. If your dates are tight, tell us at booking and the bag is racked where it can be reached quickly.",
      },
      {
        q: "Is there a minimum number of days?",
        a: "No. Days are fine and there is no minimum period — a four-day booking is four days.",
      },
      {
        q: "Can you deliver to the airport?",
        a: "We deliver to addresses rather than to airport terminals. The usual arrangement is delivery to your airport hotel the evening before a flight, which is what most customers do.",
      },
    ],

    serviceType: "Luggage storage",
    cta: {
      h2: "Bags with nowhere to go?",
      p: "Tell us how many and for how long. Collection can usually be arranged for the next day.",
    },
    siblings: [
      "/personal-storage-dubai/student-storage",
      "/personal-storage-dubai/expat-storage",
      "/personal-storage-dubai/seasonal-storage",
      "/personal-storage-dubai/wardrobe-storage",
    ],
  },

  /* ------------------------------------------------------- seasonal-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/seasonal-storage",
    crumb: "Seasonal Storage",
    navLabel: "Seasonal storage",
    navBlurb: "The things you use for six weeks a year, out of the flat for the other forty-six.",
    title: "Seasonal Storage Dubai | Rotate What You Only Use For Six Weeks",
    description:
      "Seasonal storage in Dubai. Camping gear, festival boxes, winter bedding and outdoor furniture stored between seasons and swapped back when you need them.",
    keywords:
      "seasonal storage dubai, winter storage dubai, summer storage dubai, camping gear storage dubai, festive decorations storage dubai",
    ogTitle: "Seasonal Storage in Dubai — Rotate, Don't Accumulate",
    h1: "Seasonal Storage in Dubai",
    hero: [
      "Almost every Dubai household has a pile of things used for about six weeks a year and stored for the other forty-six, in a flat with nowhere to store anything. Rotating that pile out is one of the simplest uses of [personal storage in Dubai](/personal-storage-dubai).",
      "The seasons here run the opposite way to most places. **Outdoor equipment comes out in October and goes away in May** — and you pay only for the space it occupies, with no minimum term.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What rotates, and when",
        intro: "The Dubai seasonal calendar, which catches people who arrived from Europe.",
        items: [
          {
            icon: "⛺",
            h: "Camping and desert kit",
            p: "Out from October to April, stored May to September. Bulky, and used hard for one season.",
          },
          {
            icon: "🪑",
            h: "Balcony and garden furniture",
            p: "The reverse of everywhere else: unusable in July, essential in January. Clean it before storing or the dust travels.",
          },
          {
            icon: "🎄",
            h: "Festival and celebration boxes",
            p: "Christmas, Diwali, Eid decorations. Used for a fortnight, stored for fifty weeks, always in the way.",
          },
          {
            icon: "🧥",
            h: "Winter clothes and travel bedding",
            p: "Coats and thick bedding for trips home — see [wardrobe storage](/personal-storage-dubai/wardrobe-storage).",
          },
        ],
      },
      {
        kind: "steps",
        h2: "Setting up a rotation that works",
        intro: "The difference between a rotation and a one-way pile is how it is packed.",
        items: [
          { h: "Pack by season, not by room", p: "One set of boxes that all come back in October. Mixing seasons turns a swap into a search." },
          { h: "Label the season on the box", p: "'Winter — camping' beats a list. You will read the label; you will not read the list." },
          { h: "Tell us it is a rotation", p: "Rotating goods are racked accessibly rather than densely, which is what makes the swap quick." },
          {
            h: "Book the swap a week out",
            p: "October and May are the two busy fortnights. [Retrieval takes 24–48 hours](/self-storage-dubai/24-hour-access) but the popular weeks fill.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "What not to store between seasons",
        paras: [
          "**Anything with fuel in it, and anything damp.** Camping stoves and gas canisters cannot be stored — empty the stove and return the canister. A tent packed away damp after a February trip will not be a tent by October; drying everything fully is the single most common seasonal failure.",
          "**Cool boxes with anything organic in them, and lithium batteries you will not check for six months.** Head torches, power banks and inflator pumps all count — take the batteries out. The full list is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I swap items between seasons?",
        a: "Yes, and that is what most seasonal bookings are. Each swap is a transport job quoted before it happens, and the storage changes only if the volume changes.",
      },
      {
        q: "When are the busy weeks?",
        a: "The first half of October and the second half of May, because the whole city rotates at the same time. Book those swaps about a week ahead.",
      },
      {
        q: "Can I store a tent?",
        a: "Yes, dried completely first. A tent stored damp through a Dubai summer is the most reliable way to ruin one, and it cannot be undone in October.",
      },
      {
        q: "Do you store Christmas trees and decorations?",
        a: "Yes, and it is a very common small booking. Artificial trees box well — keep the box they came in if you still have it, because it halves the space they occupy.",
      },
    ],

    serviceType: "Seasonal storage",
    cta: {
      h2: "Rotating the seasons?",
      p: "Tell us it is a rotation when you book. It changes how things are racked, and that is what makes the swap easy.",
    },
    siblings: [
      "/personal-storage-dubai/wardrobe-storage",
      "/personal-storage-dubai/sports-equipment-storage",
      "/personal-storage-dubai/apartment-storage",
      "/personal-storage-dubai/luggage-storage",
    ],
  },

  /* ----------------------------------------------------- renovation-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/renovation-storage",
    crumb: "Renovation Storage",
    navLabel: "Renovation storage",
    navBlurb: "Room by room as the work moves, and it will overrun.",
    title: "Storage During Renovation Dubai | Room By Room, No End Date",
    description:
      "Storage during a Dubai renovation. Take the whole property or work room by room as the job moves, with no fixed end date — because renovations overrun.",
    keywords:
      "storage during renovation dubai, renovation storage dubai, home renovation storage, storage while renovating dubai, fit out storage dubai",
    ogTitle: "Storage During a Renovation in Dubai",
    h1: "Storage During a Renovation in Dubai",
    hero: [
      "Two things are true of every renovation: it takes longer than the contractor said, and dust gets absolutely everywhere. Both are why furniture ends up in [personal storage in Dubai](/personal-storage-dubai) rather than under sheets in the next room.",
      "Take the whole property at once or work **room by room as the job moves through it**. There is no fixed end date and no minimum term, so a job that overruns by six weeks needs no phone call and no renegotiation.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Why sheeting the next room does not work",
        intro: "Three reasons, and only the first one is the obvious one.",
        items: [
          {
            icon: "🧹",
            h: "The dust wins",
            p: "Construction dust here is fine and abrasive. It gets under sheets, into upholstery, and into electronics through the vents — and a cleaner does not fully fix it.",
          },
          {
            icon: "🚧",
            h: "It is in the way",
            p: "Trades working around stacked furniture take longer, and every room the pile moves to is another chance for damage.",
          },
          {
            icon: "🔑",
            h: "Open house for weeks",
            p: "With contractors coming and going, nobody can say who was in which room when. Furniture that is not there cannot be damaged or lost.",
          },
        ],
      },
      {
        kind: "steps",
        h2: "Running it room by room",
        intro: "The approach that keeps the stored volume lowest across a long job.",
        items: [
          { h: "Sequence with your contractor", p: "Get their room order in writing before booking. It is the schedule the collections follow." },
          { h: "Collect one room ahead", p: "Clear the next room while they finish the current one. The site keeps moving and less is in storage." },
          { h: "Deliver back behind them", p: "Finished rooms get refurnished, so you live in the house rather than around it." },
          {
            h: "Expect the overrun",
            p: "[Billing is monthly with no end date](/personal-storage-dubai), so the extra weeks need no renegotiation.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Renovation-specific things worth knowing",
        items: [
          "Tell the contractor the collection date before you agree the start date.",
          "Get the electronics out first — dust through a vent is the least reversible damage. See [electronics storage](/personal-storage-dubai/electronics-storage).",
          "Curtains and rugs out too. They hold construction dust better than anything else in the house.",
          "Do not store paint, thinners, adhesives or solvents left over by the contractor — none of them can be stored.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I store just one room at a time?",
        a: "Yes, and it is the usual way to run a long renovation. Each collection and each delivery is quoted as its own transport job, and you only ever store what is currently out of the house.",
      },
      {
        q: "What if the renovation overruns?",
        a: "Nothing happens. Billing is monthly with no fixed end date, so an overrun requires no call, no new agreement and no penalty. Renovations overrunning is the normal case rather than the exception.",
      },
      {
        q: "Can you deliver back in stages?",
        a: "Yes. Refurnishing rooms as they are finished is how most customers run it, so you can live in the house rather than around the work.",
      },
      {
        q: "Can you take leftover paint away at the end?",
        a: "No — paint, thinners, solvents and adhesives are all flammable and cannot be stored or transported. Dispose of them through the municipal route rather than putting them in the van.",
      },
    ],

    serviceType: "Renovation storage",
    cta: {
      h2: "Renovating?",
      p: "Send the contractor's room order. We will pencil in the collections around it.",
    },
    siblings: [
      "/personal-storage-dubai/furniture-storage",
      "/personal-storage-dubai/electronics-storage",
      "/personal-storage-dubai/villa-storage",
      "/personal-storage-dubai/household-storage",
    ],
  },

  /* ----------------------------------------------- sports-equipment-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/sports-equipment-storage",
    crumb: "Sports Equipment Storage",
    navLabel: "Sports equipment storage",
    navBlurb: "Home gyms, golf clubs, dive gear and the January treadmill.",
    title: "Sports Equipment Storage Dubai | Gym Kit, Golf, Dive & Watersports",
    description:
      "Sports and gym equipment storage in Dubai. Treadmills, weights, bikes, golf clubs, dive gear and paddleboards — stored indoors between seasons or for good.",
    keywords:
      "sports equipment storage dubai, gym equipment storage dubai, golf clubs storage dubai, dive gear storage dubai, treadmill storage dubai",
    ogTitle: "Sports and Gym Equipment Storage in Dubai",
    h1: "Sports and Gym Equipment Storage in Dubai",
    hero: [
      "The Dubai home gym has a predictable arc: bought in January, used enthusiastically until March, then occupying a quarter of a bedroom until somebody decides what to do about it. Storage is what people decide — part of [personal storage in Dubai](/personal-storage-dubai).",
      "Then there is the seasonal half: dive gear, paddleboards and desert kit used between October and April with nowhere to be for five months. All of it is bulky, and you pay only for **the space it uses**.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What gets stored, and what it needs",
        items: [
          {
            icon: "🏃",
            h: "Treadmills and cardio",
            p: "Fold them if they fold, and store upright if the manufacturer allows. The single biggest item in most home gyms.",
          },
          {
            icon: "🏋️",
            h: "Weights and racks",
            p: "Dense rather than bulky. Plates take little floor space but need racking that carries the load — tell us the total weight.",
          },
          {
            icon: "🤿",
            h: "Dive and watersports",
            p: "Rinse in fresh water and dry fully. Salt left on a regulator or wetsuit over a summer is corrosive and permanent.",
          },
          {
            icon: "⛳",
            h: "Golf and racquet sports",
            p: "Bags store well upright. Take the electronics out — rangefinders, trolley batteries — and store them separately.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "The preparation that matters",
        intro: "Sports equipment fails in storage for boringly consistent reasons.",
        items: [
          "Rinse and fully dry anything that has been in the sea. Salt is the number one killer of stored watersports gear here.",
          "Deflate paddleboards and kayaks, and roll rather than fold along the same crease.",
          "Take the batteries out of everything — trolleys, rangefinders, bike and dive computers.",
          "Bag and label the small parts: treadmill bolts, rack pins, kayak fittings. Reassembly without them is the frustrating part.",
        ],
      },
      {
        kind: "table",
        h2: "Sizing a home gym booking",
        columns: ["What you are storing", "Typical floor space"],
        rows: [
          ["A single treadmill", "~10 sq ft"],
          ["Treadmill, bench, dumbbells, rack, mat", "25–40 sq ft"],
          ["Weights and plates only", "Very little — dense, not bulky"],
          ["Fixed multi-gym or cable machine", "Quoted on the model"],
        ],
        note: "Sizes are estimated, and you are billed on floor space rather than weight. Anything that will not dismantle is worth naming before collection so the right crew and vehicle arrive. Rotating seasonally? Say so — [seasonal storage](/personal-storage-dubai/seasonal-storage) covers how that is racked.",
      },
    ],
    faqs: [
      {
        q: "Can you move a treadmill or a multi-gym?",
        a: "Yes, and we would like the model in advance. Large fixed equipment needs the right crew and sometimes the right vehicle, and that is a booking question rather than a collection-day surprise.",
      },
      {
        q: "Do you store dive equipment?",
        a: "Yes. Rinse everything in fresh water and dry it completely first — salt left on a regulator, a BCD or a wetsuit through a Dubai summer causes corrosion that cannot be undone.",
      },
      {
        q: "What about an inflatable paddleboard or kayak?",
        a: "Deflate it and roll rather than fold. Storing one folded on the same crease for months creates a weak line in the seam that eventually becomes a leak.",
      },
      {
        q: "Is heavy equipment handled differently?",
        a: "You are billed on floor space rather than weight. Do tell us the total weight though, because it determines how and where it is racked.",
      },
    ],

    serviceType: "Sports equipment storage",
    cta: {
      h2: "Getting the room back from the home gym?",
      p: "Tell us the largest item and its model. That is the only part that needs planning.",
    },
    siblings: [
      "/personal-storage-dubai/seasonal-storage",
      "/personal-storage-dubai/motorbike-storage",
      "/personal-storage-dubai/apartment-storage",
      "/personal-storage-dubai/villa-storage",
    ],
  },

  /* ------------------------------------------------------ wardrobe-storage */
  {
    silo: "s2",
    path: "/personal-storage-dubai/wardrobe-storage",
    crumb: "Wardrobe Storage",
    navLabel: "Clothes & wardrobe storage",
    navBlurb: "Clothing stored so it is wearable when it comes back.",
    title: "Clothes & Wardrobe Storage Dubai | Stored So It Stays Wearable",
    description:
      "Clothes storage in Dubai. How to store a wardrobe over months in a humid climate — what to hang, what to box, and the three things that ruin stored clothing here.",
    keywords:
      "clothes storage dubai, wardrobe storage dubai, clothing storage dubai, garment storage dubai, seasonal clothes storage dubai",
    ogTitle: "Clothes and Wardrobe Storage in Dubai",
    h1: "Clothes and Wardrobe Storage in Dubai",
    hero: [
      "Clothing is cheap to store and easy to ruin, and the difference is almost entirely in how it went into the box. This is one of the smallest and most common bookings inside [personal storage in Dubai](/personal-storage-dubai).",
      "Three things ruin stored clothes in this climate and all three are preventable: **storing anything unwashed**, **sealing garments in plastic**, and **hanging heavy items on wire for months**. None of them cost anything to avoid.",
      "A full wardrobe's contents is typically 10 to 20 square feet once boxed, which, **billed on space used**, is a very small monthly figure against the cost of replacing a wardrobe.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The three things that ruin clothes here",
        paras: [
          "**Storing them unwashed.** Body oils and perspiration are invisible on a garment when you put it away and are what moths and silverfish are attracted to. They also oxidise over months into yellow marks that were not there when it went in — this is the cause of the mysterious stains people find on stored white shirts.",
          "**Sealing in plastic.** Vacuum bags and plastic tubs feel like protection and are the opposite in a humid climate: they trap moisture against fabric with no way out, and natural fibres need to breathe. Cotton and wool sealed airtight through a Dubai summer is how mould happens. Breathable cotton covers and cardboard cartons are better.",
          "**Hanging heavy garments on wire.** Coats, suits and anything with weight distort at the shoulder over months on a thin hanger, and the distortion does not come out. Either use broad hangers or box them flat.",
          "None of this is exotic. It is the same advice a good dry cleaner gives, and it is worth more than any storage feature.",
        ],
      },
      {
        kind: "checklist",
        h2: "Packing a wardrobe properly",
        items: [
          "Wash or dry-clean everything first, and let it dry completely. This is the single most important step.",
          "Remove dry-cleaning plastic before storing. It is designed to get the garment home, not to store it.",
          "Box in cardboard or breathable fabric containers rather than sealed plastic tubs.",
          "Fold knitwear rather than hanging it — hanging stretches the shoulders of anything with weight.",
          "Use broad hangers for suits, coats and jackets if they are going away hung.",
          "Interleave anything delicate with acid-free tissue rather than newspaper, which transfers ink.",
          "Cedar or lavender rather than mothballs. Naphthalene odour permeates fabric and is very hard to remove afterwards.",
          "Label by season and by person. In a shared household this is the difference between a swap and a search.",
        ],
      },
      {
        kind: "prose",
        h2: "What is worth storing and what is not",
        paras: [
          "Worth storing: winter clothing you only need for trips home, occasion wear, anything of real quality that you are between sizes on, children's clothes being kept for a younger sibling, and traditional or formal wear used a few times a year.",
          "Not worth storing: fast-fashion basics, anything you have not worn in two years and do not have a specific reason to keep, and anything already stained. A stain that has been sitting for six months is much harder to remove than one addressed now.",
          "Wedding dresses and heirloom garments are a specific case — they want acid-free tissue, a box rather than a hanger, and to be declared so they are handled and recorded individually rather than as part of a household carton.",
          "If the clothing is going away as part of a seasonal rotation rather than a one-way move, [seasonal storage](/personal-storage-dubai/seasonal-storage) covers how to set that up so the swap is quick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I use vacuum bags to save space?",
        a: "Not for natural fibres in this climate. Vacuum bags trap moisture against fabric and prevent it breathing, which over a Dubai summer causes exactly the problem they appear to prevent. Cardboard cartons and breathable covers are better.",
      },
      {
        q: "Do I need to wash everything first?",
        a: "Yes, and it is the most important step. Body oils and perspiration are invisible when you pack a garment, attract insects, and oxidise into yellow marks over months.",
      },
      {
        q: "Can I store clothes on hangers?",
        a: "Yes, on broad hangers rather than wire, and preferably not for years. Anything with weight — coats, suits, heavy jackets — distorts at the shoulder over long periods on a thin hanger.",
      },
      {
        q: "How much space does a wardrobe take?",
        a: "A full wardrobe's contents is typically 10 to 20 square feet once boxed. It is one of the cheapest things to store, and one of the highest-value uses of a small booking.",
      },
      {
        q: "What about moths in the UAE?",
        a: "Clothes moths and silverfish both exist here and both go for soiled natural fibres rather than clean ones. Washing before storage does more than any repellent. Use cedar or lavender rather than mothballs, whose odour is very difficult to get out of fabric.",
      },
      {
        q: "Can you store a wedding dress?",
        a: "Yes — declare it so it is handled and listed individually. It wants acid-free tissue and a box rather than a hanger, which is different from how the rest of a wardrobe is packed.",
      },
    ],
    serviceType: "Clothing storage",
    cta: {
      h2: "Storing a wardrobe?",
      p: "Wash it, box it in cardboard, and skip the vacuum bags. That is most of the job.",
    },
    siblings: [
      "/personal-storage-dubai/seasonal-storage",
      "/personal-storage-dubai/luggage-storage",
      "/personal-storage-dubai/household-storage",
      "/personal-storage-dubai/student-storage",
    ],
  },
]
