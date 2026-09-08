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
      "Household storage in Dubai from AED 12.65 per sq ft per month. We empty the property, wrap and load everything, and deliver it to the next address when you are ready.",
    keywords:
      "household storage dubai, home storage dubai, house storage dubai, household goods storage dubai, home contents storage uae",
    ogTitle: "Household Storage in Dubai — We Empty The Property",
    h1: "Household Storage in Dubai",
    hero: [
      "Emptying a whole home is a different job from storing a few boxes, and it is the most common booking we take. It is the core of [personal storage in Dubai](/personal-storage-dubai): the crew arrives, the property is cleared, and everything is held until you have somewhere to put it.",
      "Whole-home bookings are usually driven by a date rather than a want — a tenancy ending, a handover slipping, a sale completing, a posting starting. That means the collection has to happen on a specific day, and the day is usually not negotiable.",
      "Storage is **AED 12.65 per sq ft per month, VAT included**, on the floor space your goods occupy. A one-bedroom is typically 60–90 sq ft, a two-bedroom 120–150, a three-bedroom villa 240–270.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What clearing a Dubai property actually involves",
        paras: [
          "More coordination than lifting, which surprises people. In a tower, the service lift usually has to be booked, sometimes days ahead, and some buildings only permit moves inside a fixed window. In a gated community, the vehicle and the crew often need registering with security first. Both of those are ours to arrange, and both are why a self-drive move on a deadline goes wrong.",
          "The lifting itself is predictable: a studio is two to three hours, a one-bedroom three to five, a three-bedroom villa most of a day. What extends it is loose belongings — a flat where everything small is already boxed loads roughly a third faster than one where it is not.",
          "The part people forget is the last hour. Handing a property back usually means it has to be empty and clean, and the crew removes furniture rather than rubbish. Decide before the day what is being thrown away and arrange that separately.",
          "If you are clearing the property because you are leaving the country rather than moving within it, [storage for expats leaving the UAE](/personal-storage-dubai/expat-storage) covers the parts specific to that.",
        ],
      },
      {
        kind: "checklist",
        h2: "What to do the week before",
        intro: "In rough order of how much time each one saves on the day.",
        items: [
          "Box every loose small item. This is the single biggest lever on both the time and the price.",
          "Decide what is not going — by room, not by item. Deciding item by item on the day is what makes a collection run long.",
          "Book the service lift, or tell us to, and confirm the building's permitted moving window.",
          "Empty, defrost and dry the fridge and washing machine. Both need a full day.",
          "Walk the balcony, the store cupboard and the garage. Everything that cannot be stored lives in those three places.",
          "Set aside a suitcase of things you need this week — documents, chargers, medication, a change of clothes.",
        ],
        note: "The full list of what cannot go in the van is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
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
          ["4+ bedroom villa", "A full day, sometimes two", "300+ sq ft, quoted on survey"],
        ],
        note: "Plan to be present for the first twenty minutes and the last ten — the start is where you point at what goes, the end is where you sign the inventory. Everything between is ours.",
      },
    ],
    faqs: [
      {
        q: "Can you clear the whole property in one day?",
        a: "For anything up to a three-bedroom villa, yes, in a single day. Four bedrooms and above sometimes needs two, and we will tell you that when quoting rather than at 4pm on the day.",
      },
      {
        q: "Do I have to be there the whole time?",
        a: "No. Be there at the start to point at what goes and at the end to sign the inventory. Most customers leave in between, and that is fine as long as someone can let the crew back in.",
      },
      {
        q: "What if my new place is not ready?",
        a: "That is what the storage is for. Billing is monthly with no minimum and no fixed end date, so a handover that slips by three weeks costs three weeks rather than triggering anything.",
      },
      {
        q: "Do you take things to the tip as well?",
        a: "No — the crew removes what is being stored, not what is being discarded. Arrange disposal separately, and decide what is going before the day rather than during it.",
      },
      {
        q: "Can you deliver to two different addresses later?",
        a: "Yes. Splitting a delivery across two addresses is common when a household separates or when part of it goes to a new flat and part to a family member. Each delivery is quoted as its own job.",
      },
      {
        q: "How much notice do you need for a whole-home collection?",
        a: "Two to three days is comfortable for anything up to a 2BHK, and about a week for a villa. In late June and August — the peak of the Dubai moving season — book a week ahead regardless of size.",
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
      "Storage for Dubai apartments. We handle the service-lift booking and the building's moving window, wrap in the flat and carry everything down. From AED 12.65 per sq ft.",
    keywords:
      "apartment storage dubai, flat storage dubai, tower storage dubai, storage for apartments dubai, small apartment storage dubai",
    ogTitle: "Apartment Storage in Dubai — Including The Lift Booking",
    h1: "Apartment Storage in Dubai",
    hero: [
      "A Dubai apartment has exactly the storage the developer drew and nothing else — no loft, no basement, no garage, no under-stairs cupboard. That structural fact is why so much of [personal storage in Dubai](/personal-storage-dubai) is tower flats rather than villas.",
      "The other half of the problem is access. Most towers require the service lift to be booked in advance, many restrict moves to a fixed window, and some want the crew registered with building management first. **We arrange all of that** — it is the part that derails a self-drive move.",
      "Storage runs from **AED 12.65 per sq ft per month, VAT included**, on measured space. A studio is around 30 sq ft, a one-bedroom 60–90, a two-bedroom 120–150.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The service lift is the whole job",
        paras: [
          "In a Dubai tower, the difference between a three-hour collection and a seven-hour one is almost never the amount of furniture. It is whether the service lift was booked, whether it is shared with another move that day, and whether the building permits the crew to use it at the hour you have arranged.",
          "Buildings vary enormously and none of it is published. Some want 48 hours' notice and a refundable deposit; some only allow moves between specific hours; some in the Marina and Downtown restrict moves on certain days entirely. A few require a no-objection letter from the owner.",
          "We deal with building management on this because we do it several times a week and know which towers want what. If you are moving yourself, the single most useful thing you can do is call your building three days before rather than one.",
          "There is a related trap on delivery: a new building's move-in slot usually has to be booked separately from the move-out slot, and people book only the first. Tell us both addresses when you book and both get arranged.",
        ],
      },
      {
        kind: "cards",
        h2: "What apartment residents actually store",
        intro: "Four bookings that account for most tower collections.",
        items: [
          {
            icon: "🚪",
            h: "A room, to get it back",
            p: "The guest bed and wardrobe out so the second bedroom becomes an office. Around 30–40 sq ft, and far cheaper than the next flat up.",
          },
          {
            icon: "🧳",
            h: "The seasonal pile",
            p: "Suitcases, winter bedding, sports kit, festival boxes. In a flat with one store cupboard, this is what fills it.",
          },
          {
            icon: "🛋️",
            h: "Your furniture, while it is let furnished",
            p: "Owner's furniture out while a tenant's is in. A steady summer rhythm in this city.",
          },
          {
            icon: "📅",
            h: "The gap between leases",
            p: "Ejari ends on the 3rd, the new place is ready on the 20th. [Short term storage](/self-storage-dubai/short-term) is the page for that specifically.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Getting a tower collection right",
        items: [
          "Tell us the floor, and whether there is a service lift or only passenger lifts. It changes the crew size.",
          "Confirm your building's permitted moving hours — some towers do not allow moves in the evening or on Fridays.",
          "Ask whether a move-out permit or NOC is needed. Older buildings in Deira and Bur Dubai often want one.",
          "Check parking for the van. Some Marina and JLT towers have no loading bay and need a bay reserved.",
          "Box loose items first. In a flat this matters more than in a villa, because everything goes through one lift.",
          "If you are moving into another tower, give us that address too so the move-in slot gets booked as well.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you book the service lift for me?",
        a: "Yes, as part of arranging the collection. Tell us the building and the floor when you book, and we deal with building management — including the move-in slot at the new address if you are moving to another tower.",
      },
      {
        q: "What if my building only allows moves at certain times?",
        a: "That is common and it is planned around. Tell us the permitted window when you book and the collection is scheduled inside it. Discovering the restriction on the day is what causes a failed move.",
      },
      {
        q: "I am on the 30th floor with one lift. Is that a problem?",
        a: "Not a problem, but it does lengthen the job, and it is the main thing that separates a three-hour collection from a six-hour one. We size the crew for it rather than being surprised by it.",
      },
      {
        q: "How much of a small flat can I actually store?",
        a: "As much or as little as you like — billing is on the space used. A common studio booking is a bed, a wardrobe and a dozen cartons, at around 30 sq ft.",
      },
      {
        q: "Can you collect if I am not there?",
        a: "Someone has to let the crew in and sign the inventory, but it does not have to be you. Name the person in advance and they can handle the collection.",
      },
      {
        q: "Is there parking for your van at my building?",
        a: "Usually, but some towers in the Marina, JLT and Business Bay need a loading bay reserved in advance. Tell us the building and we will check rather than arriving and finding out.",
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
      "A three-bedroom villa's contents typically occupy **240–270 sq ft** in storage, and four bedrooms and above is quoted on survey. At **AED 12.65 per sq ft per month, VAT included**, that is the whole of the monthly figure.",
      "Villa collections are usually a full day and sometimes two. Access is generally easier than a tower — a driveway rather than a service lift — but gated communities need the vehicle and crew registered with security in advance.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Where villa volume actually is",
        paras: [
          "**The garage.** Bikes, tools, a spare fridge, garden furniture, paint, sports equipment, boxes that arrived with the last move and were never opened. In Arabian Ranches, Dubai Hills, Damac Hills and the Springs this is regularly the single largest room by stored volume, and almost nobody counts it when estimating.",
          "**The garden and terrace.** Outdoor dining sets, loungers, parasols, a barbecue, planters. Outdoor furniture is bulky, awkward and usually dirty, and it needs cleaning before storage rather than after.",
          "**The maid's room.** Frequently used as overflow storage already, which means it is dense and rarely inventoried by the household.",
          "Add those three to your estimate before anything else. A villa that felt like 200 sq ft on a room count is usually 260 once the garage is in the number — [the size calculator](/self-storage-dubai/storage-calculator) walks through the adjustment.",
        ],
      },
      {
        kind: "checklist",
        h2: "The villa-specific pre-collection list",
        intro: "Most of these do not apply to a flat at all.",
        items: [
          "Return the gas cylinder to the supplier. Villa kitchens and barbecues almost always have one and it cannot be stored or transported.",
          "Dispose of paint, thinners, pool chemicals, pesticides and jerry cans. The garage is where every prohibited item lives — see [what you can and cannot store](/self-storage-dubai/prohibited-items).",
          "Clean the outdoor furniture. Sand and dust go into the wrap otherwise, and come out on everything else.",
          "Drain and dry anything with water in it — pressure washer, garden hose reel, water feature, spare fridge.",
          "Register the vehicle and crew with community security if you are in a gated development.",
          "Decide about the garden plants now. They cannot be stored, and they are the thing people leave until the last hour.",
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
        note: "For anything four bedrooms and above we would rather survey than estimate. It is free, takes about half an hour, and it is the difference between a quote and a guess.",
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
      {
        q: "What about the garden plants?",
        a: "Plants cannot be stored — nothing living goes into the warehouse. Decide what happens to them before the day, because it is the item most often left to the final hour.",
      },
      {
        q: "Can you store a car from the garage too?",
        a: "Yes, vehicle storage is a normal booking, but it is quoted separately from the household collection. Keep the fuel level low and have the registration documents in order.",
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
      "Two-wheelers store easily and cheaply — they take a fraction of the space a car does — but they suffer more from standing still, because everything on them is smaller and more sensitive. This sits alongside vehicle storage inside [personal storage in Dubai](/personal-storage-dubai).",
      "The bookings split three ways: riders leaving the UAE for a stretch, summer storage for cyclists who stop riding between May and October, and apartment residents whose building will not let them keep a bike in the flat or the parking bay.",
      "Everything is stored indoors and covered. **Lithium batteries are handled separately** and must be discussed before booking — that is a fire safety question, not an administrative one.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The lithium battery question, first",
        paras: [
          "E-bikes, e-scooters and modern power tools carry lithium-ion packs, and a damaged or degraded pack in a hot warehouse is a genuine fire risk rather than a theoretical one. This is the single thing to sort out before you book anything.",
          "Removable packs should come off the bike and be discussed with us rather than sent along inside a box. Non-removable packs mean the whole machine needs to be raised at quoting rather than arriving unannounced on collection day.",
          "A pack stored at full charge or fully flat degrades faster than one stored around half charge, which is worth knowing whoever ends up holding it. Six months at 100 per cent will measurably shorten a pack's life.",
          "None of this makes an e-bike unstorable. It makes it a conversation before the crew arrives rather than after. The general list of what cannot be stored at all is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
        ],
      },
      {
        kind: "checklist",
        h2: "Preparing a motorbike for months of standing",
        intro: "More important than for a car, because the components are smaller.",
        items: [
          "Fill the tank and add a fuel stabiliser. A small tank degrades proportionally faster than a large one.",
          "Disconnect the battery or use a maintainer. A motorbike battery in a Dubai summer can be dead in under a month connected.",
          "Over-inflate the tyres slightly. Narrow tyres flat-spot faster than car tyres and at lower weight.",
          "Wash, dry and lubricate the chain. A chain stored dirty in humid air is a chain that comes back seized.",
          "Do not leave it on the side stand for months if you can avoid it — a paddock stand or centre stand keeps the weight off the suspension and the tyres.",
          "Cover it, but with something breathable. A plastic sheet traps humidity against the metal, which is worse than no cover.",
        ],
      },
      {
        kind: "cards",
        h2: "Why people store two wheels here",
        items: [
          {
            icon: "☀️",
            h: "Summer storage",
            p: "Cyclists who stop riding between May and October and do not want a road bike taking a room in the flat until November.",
          },
          {
            icon: "✈️",
            h: "Leaving the UAE",
            p: "A bike is worth keeping rather than selling at short notice. Storage for the posting costs a fraction of replacing it. See [expat storage](/personal-storage-dubai/expat-storage).",
          },
          {
            icon: "🏢",
            h: "Building rules",
            p: "Many Dubai towers do not permit bikes in flats, lifts or parking bays. This is the most common reason for a single-bike booking.",
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
        q: "How much space does a motorbike take?",
        a: "Far less than a car — a motorbike is broadly comparable to a large wardrobe in footprint, and a bicycle much less again. Two-wheelers are among the cheapest things to store here.",
      },
      {
        q: "Can I store an e-bike or e-scooter?",
        a: "Raise it before booking. Removable lithium packs need to come off and be discussed; non-removable packs need to be flagged at quoting. This is a fire safety requirement rather than a formality.",
      },
      {
        q: "Do you store bicycles over the summer?",
        a: "Yes, and it is one of the steadiest seasonal bookings — road and gravel bikes go in around May and come back in October. Indoor covered storage is what keeps components from corroding in the humidity.",
      },
      {
        q: "Should I leave the bike on its side stand?",
        a: "Preferably not for months. A paddock or centre stand keeps weight off the suspension and stops the tyres flat-spotting on one point, which is the main mechanical cost of long standing.",
      },
      {
        q: "Will the chain seize?",
        a: "Not if it is washed, dried and lubricated before storage. A chain put away dirty in humid air is the most common thing that comes back unusable, and it takes ten minutes to prevent.",
      },
      {
        q: "What about registration while it is stored?",
        a: "Renewal remains your responsibility and it is worth diarising before you travel. Tell us if the registration will lapse during the storage period.",
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
      "Luggage storage in most cities means a locker at a station. Dubai does not really have that, and what it has instead is a collection service — which is what this is, as part of [personal storage in Dubai](/personal-storage-dubai).",
      "The bags are collected from wherever you are — a hotel, a flat you are handing back, an office, an airport hotel — and held for as long as you need, then delivered to whichever address you name. **There is no minimum period**, so three days is three days.",
      "It is not a left-luggage counter you walk up to. It is booked in advance, and retrieval is normally arranged within 24 to 48 hours, which is the trade-off worth understanding before you rely on it.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "When people actually use this",
        intro: "Four situations, and only one of them is a tourist.",
        items: [
          {
            icon: "🏨",
            h: "The gap between a checkout and a flight",
            p: "A late-night departure after a midday checkout, with more bags than a hotel concierge wants to hold for nine hours.",
          },
          {
            icon: "🔁",
            h: "Between two leases",
            p: "The flat is handed back, the next one is not ready, and you are in a hotel for two weeks with six suitcases you cannot fit in the room.",
          },
          {
            icon: "🎓",
            h: "Students over the summer",
            p: "The residence closes, you fly home for three months, and shipping the contents of a room twice makes no sense. See [student storage](/personal-storage-dubai/student-storage).",
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
          "**It is not walk-up left luggage.** You cannot arrive at a counter with a bag. Collection is booked in advance and the bags are picked up from you, which is better for anything more than one bag and worse for a spontaneous two hours.",
          "**Retrieval takes 24 to 48 hours.** If you need the bag back tomorrow morning, say so when booking. If you need it back in three hours, this is the wrong service and a hotel concierge is the right one.",
          "**There is no minimum.** Days are fine. Most bookings run weeks or months, but a four-day booking is priced as four days and nobody will push you into a month.",
          "**Passports stay with you.** Do not store documents, medication or anything you will need at short notice — see [what you can and cannot store](/self-storage-dubai/prohibited-items) for the rest of that list.",
        ],
      },
      {
        kind: "steps",
        h2: "How a luggage booking runs",
        items: [
          { h: "Tell us the count and the dates", p: "How many bags, where they are now, and roughly how long." },
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
        a: "You can, by arrangement. Most people find collection easier because it removes the trip, and the price is the same either way — you are billed on storage rather than on transport direction.",
      },
      {
        q: "How quickly can I get a bag back?",
        a: "Normally 24 to 48 hours to any address in Dubai. If your dates are tight, tell us at booking and the bag is racked where it can be reached quickly.",
      },
      {
        q: "Is there a minimum number of days?",
        a: "No. Days are fine and there is no minimum period. A four-day booking is charged as four days.",
      },
      {
        q: "How much does luggage storage cost?",
        a: "It is billed on the space the bags occupy at AED 12.65 per sq ft per month VAT included, which for a handful of suitcases is a small monthly figure. Transport is quoted separately on the addresses involved.",
      },
      {
        q: "Can you deliver to the airport?",
        a: "We deliver to addresses rather than to airport terminals. The usual arrangement is delivery to your airport hotel the evening before a flight, which works well and is what most customers do.",
      },
      {
        q: "Can I store bags and get some contents out mid-booking?",
        a: "Yes, but it is a retrieval like any other — the bag comes to you rather than someone opening it. If you need seasonal contents rotated, pack them into separate bags at the start.",
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
      "The seasons here run the opposite way to most places. **Outdoor equipment comes out in October and goes away in May**, and the summer is when the balcony furniture, the camping kit and the barbecue have nowhere to be.",
      "Because there is no minimum term and billing is monthly on space used, a genuine rotation costs very little — a few cartons and some bulky items is a small monthly figure, and each swap is a short transport job.",
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
            p: "Out from October to April, stored May to September. Tents, cool boxes, chairs, recovery gear — bulky and used hard for one season.",
          },
          {
            icon: "🪑",
            h: "Balcony and garden furniture",
            p: "The reverse of everywhere else: unusable in July, essential in January. Clean it before storing or the dust travels.",
          },
          {
            icon: "🎄",
            h: "Festival and celebration boxes",
            p: "Christmas, Diwali, Eid decorations. Used for a fortnight, stored for fifty weeks, and always in the way.",
          },
          {
            icon: "🧥",
            h: "Winter clothes and travel bedding",
            p: "Coats and thick bedding for trips home. See [wardrobe storage](/personal-storage-dubai/wardrobe-storage) for the clothing side properly.",
          },
        ],
      },
      {
        kind: "steps",
        h2: "Setting up a rotation that works",
        intro: "The difference between a rotation and a one-way pile is entirely in how it is packed.",
        items: [
          { h: "Pack by season, not by room", p: "One set of boxes that all come back in October. Mixing seasons is what makes a swap into a search." },
          { h: "Label the season on the box", p: "'Winter — camping' beats a list. You will read the label; you will not read the list." },
          { h: "Tell us it is a rotation", p: "Rotating goods are racked accessibly rather than densely, which costs slightly more space and saves the swap." },
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
          "Anything with fuel in it. Camping stoves, generators and gas canisters are the classic seasonal items that cannot be stored, and they are exactly what people pack in the bottom of a camping box without thinking about it. Empty the stove and return the canister.",
          "Anything damp. A tent packed away damp after a February trip and stored through a Dubai summer will not be a tent in October. Dry everything fully — this is the single most common seasonal storage failure.",
          "Cool boxes with anything organic in them, and barbecues with grease on them. Both are pest problems rather than smell problems.",
          "Anything with a lithium battery that you are not going to check on for six months. Head torches, power banks and inflator pumps all fall in here — take the batteries out. The full list of what cannot be stored is on [what you can and cannot store](/self-storage-dubai/prohibited-items).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I swap items between seasons?",
        a: "Yes, and that is what most seasonal bookings are. Each swap is a transport job quoted before it happens; the monthly storage figure changes only if the volume changes.",
      },
      {
        q: "How much does a small seasonal booking cost?",
        a: "It is billed on the space used at AED 12.65 per sq ft per month VAT included. A camping set, a barbecue and six cartons is typically 15 to 25 square feet.",
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
        q: "What about the gas canister for my camping stove?",
        a: "It cannot be stored or transported. Pressurised canisters are on the prohibited list for good reason in this climate — remove it before collection day.",
      },
      {
        q: "Do you store Christmas trees and decorations?",
        a: "Yes, and it is a very common small booking. Artificial trees box well; keep the box they came in if you still have it, because it halves the space they occupy.",
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
      "You can take the whole property at once or work **room by room as the job moves through it**, collecting in stages and delivering back the same way, so you are never paying to store more than you need to.",
      "There is no fixed end date and no minimum term, which is the point. A job that overruns by six weeks costs six weeks and requires no phone call, no renegotiation and no penalty.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why sheeting furniture in the next room does not work",
        paras: [
          "Construction dust in this region is fine, abrasive and relentless. It gets under dust sheets, into upholstery, into the mechanism of anything with a mechanism, and into electronics through vents. A sofa that spent six weeks in a room adjacent to a bathroom rip-out is not a clean sofa, and it is not something a cleaner fully fixes.",
          "It is also in the way. A renovation with furniture stacked in the two rooms not being worked on takes longer, because the trades are working around it, and it moves several times as the job progresses. Each move is another chance for damage.",
          "The third problem is theft and breakage exposure — a property with contractors coming and going for weeks is a property where nobody can say who was in which room when. Furniture that is not there cannot be damaged or lost.",
          "The counter-argument is cost, and it is a fair one. What tips it is usually the answer to one question: what would it cost to replace the two or three most valuable things in the room? That is normally several months of storage.",
        ],
      },
      {
        kind: "steps",
        h2: "Running it room by room",
        intro: "The approach that keeps the bill lowest across a long job.",
        items: [
          { h: "Sequence with your contractor", p: "Get their room order in writing before booking anything. It is the schedule the collections follow." },
          { h: "Collect one room ahead", p: "Clear the next room while they finish the current one. It keeps the site moving and the stored volume low." },
          { h: "Deliver back behind them", p: "Rooms that are finished get refurnished, so you live in the house rather than around it." },
          {
            h: "Expect the overrun",
            p: "It costs nothing extra — [billing is monthly with no end date](/personal-storage-dubai) and no renegotiation.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Renovation-specific things worth knowing",
        items: [
          "Tell the contractor the collection date before you agree the start date. Trades arriving to a full house is a bad first day.",
          "Anything already dusty should be cleaned before wrapping, not after. Dust sealed under wrap transfers to everything racked near it.",
          "Get the electronics out first. Fine dust through a vent is the most expensive renovation damage and the easiest to prevent — see [electronics storage](/personal-storage-dubai/electronics-storage).",
          "Curtains and rugs out too. They hold construction dust more thoroughly than anything else in the house.",
          "Do not store paint, thinners, adhesives or solvents left over by the contractor. None of them can be stored.",
          "Keep one room genuinely usable if you are living there through the work, and store from the others rather than shuffling between them.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I store just one room at a time?",
        a: "Yes, and it is usually the cheapest way to run a long renovation. Each collection and each delivery is quoted as its own transport job, and you only ever pay to store what is currently out of the house.",
      },
      {
        q: "What if the renovation overruns?",
        a: "Nothing happens. Billing is monthly with no fixed end date, so an overrun costs the extra weeks and requires no call, no new agreement and no penalty. Renovations overrunning is the normal case rather than the exception.",
      },
      {
        q: "Can you deliver back in stages?",
        a: "Yes. Refurnishing rooms as they are finished is how most customers run it, so you can live in the house rather than around the work.",
      },
      {
        q: "Should I store the electronics?",
        a: "Those first, if you store anything. Fine construction dust drawn through vents is the most expensive and least reversible renovation damage, and a TV or a computer in an adjacent room is not protected by a sheet.",
      },
      {
        q: "Can you take leftover paint away at the end?",
        a: "No — paint, thinners, solvents and adhesives are all flammable and cannot be stored or transported. Dispose of them through the municipal route rather than putting them in the van.",
      },
      {
        q: "How much notice do you need between rooms?",
        a: "A couple of days for each stage is comfortable. Give us the contractor's room sequence at the start and the whole set of collections can be pencilled in at once.",
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
      "The Dubai home gym has a predictable arc: bought in January, used enthusiastically until March, and then occupying a quarter of a bedroom until somebody decides what to do about it. Storage is what people decide, and it is one of the more cheerful bookings in [personal storage in Dubai](/personal-storage-dubai).",
      "Beyond that there is the seasonal half — dive gear, paddleboards, kayaks and desert kit that gets used between October and April and then has nowhere to be for five months.",
      "It is all bulky and low value per cubic foot, which makes it exactly the wrong thing to keep in a Dubai flat and exactly the right thing to store at **AED 12.65 per sq ft per month, VAT included**.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What gets stored, and what it needs",
        items: [
          {
            icon: "🏃",
            h: "Treadmills and large cardio machines",
            p: "Fold them if they fold, and store upright if the manufacturer allows. These are heavy, awkward, and the single biggest item in most home gyms.",
          },
          {
            icon: "🏋️",
            h: "Weights and racks",
            p: "Dense and heavy rather than bulky. Plates and dumbbells take very little floor space but need racking that can carry the load — tell us the total weight.",
          },
          {
            icon: "🤿",
            h: "Dive and watersports gear",
            p: "Everything must be rinsed in fresh water and fully dried. Salt left on a regulator or a wetsuit over a summer is corrosive and permanent.",
          },
          {
            icon: "⛳",
            h: "Golf, tennis and racquet sports",
            p: "Bags store well upright. Take any electronics — rangefinders, trolley batteries — out and store them separately.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "The preparation that matters",
        intro: "Sports equipment fails in storage for boringly consistent reasons.",
        items: [
          "Rinse and fully dry anything that has been in the sea. Salt is the number one killer of stored watersports gear in this region.",
          "Deflate paddleboards and kayaks if they are inflatable, and roll rather than fold along the same crease every time.",
          "Take the batteries out of everything — trolleys, rangefinders, bike computers, dive computers.",
          "Wipe down gym equipment. Sweat left on a bench or a grip through a summer is both a smell and a corrosion problem.",
          "Loosen the string tension on racquets if they are going away for a long period.",
          "Bag and label the small parts — treadmill bolts, rack pins, kayak fittings. Reassembly without them is the frustrating part.",
          "Wetsuits are stored flat or on a wide hanger, never folded on a crease for months.",
        ],
      },
      {
        kind: "prose",
        h2: "Sizing a home gym booking",
        paras: [
          "Home gym equipment is unusual because it is heavy without being especially bulky, and floor space rather than weight is what you are billed on. A full rack, a bench and 150 kilos of plates occupies remarkably little floor area once racked properly.",
          "A typical Dubai home gym — treadmill, bench, adjustable dumbbells, a rack, a mat — comes out around 25 to 40 square feet. A single treadmill on its own is closer to 10.",
          "What does add space is anything that will not dismantle. A fixed multi-gym or a large cable machine takes what it takes, and it is worth telling us the model before collection so the right crew and vehicle arrive.",
          "If this is a seasonal rotation rather than a one-way trip, say so — [seasonal storage](/personal-storage-dubai/seasonal-storage) covers how rotating goods are racked so a swap is quick.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move a treadmill or a multi-gym?",
        a: "Yes, and we would like the model in advance. Large fixed equipment needs the right crew and sometimes the right vehicle, and that is a booking question rather than a collection-day surprise.",
      },
      {
        q: "How much space does a home gym take?",
        a: "A typical set — treadmill, bench, dumbbells, rack, mat — is around 25 to 40 square feet once racked. Weights are dense rather than bulky, so they cost less space than people assume.",
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
        q: "Can I store a bicycle with the gym equipment?",
        a: "Yes, and bikes are among the cheapest things to store by space. Anything with a lithium battery — an e-bike or an electric trolley — needs raising before booking.",
      },
      {
        q: "Is heavy equipment charged differently?",
        a: "You are billed on floor space rather than weight, so weights and plates are cheap to store. Do tell us the total weight though, because it determines how and where it is racked.",
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
      "A full wardrobe's contents is typically 10 to 20 square feet once boxed, which at **AED 12.65 per sq ft per month** is a very small monthly figure against the cost of replacing a wardrobe.",
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
