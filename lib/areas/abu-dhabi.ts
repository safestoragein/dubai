import type { EmirateDef } from "./types"

/**
 * ABU DHABI — ten service areas, ALL NEW IN ENGLISH.
 *
 * These ten already existed in Arabic at /ar/locations/abu-dhabi/{area} and
 * nowhere in English, which the plan identifies as the easiest volume on the
 * whole site: `self storage abu dhabi` is 880/mo at KD 16, with `storage abu
 * dhabi` another 1,000, and the site had no English page for either.
 *
 * ⚠ ABU DHABI IS COLLECTION-ONLY. `facilityKey` is null, matching
 * lib/facilities.ts, which lists warehouses in Dubai, Sharjah and Ajman only.
 * Every page here therefore states plainly that goods are collected in the
 * emirate and stored at the nearest facility. Do NOT soften that into implying
 * a local warehouse — it is untrue, and claiming facilities you do not operate
 * is a Google Business Profile suspension risk.
 */
export const ABU_DHABI: EmirateDef = {
  slug: "abu-dhabi",
  name: "Abu Dhabi",
  facilityKey: null,
  sampleDistricts: ["Al Reem Island", "Khalifa City"],
  university: "Khalifa University",
  hub: {
    title: "Self Storage Abu Dhabi | Collected From Your Door",
    description:
      "Self storage in Abu Dhabi from AED 12.65 per sq ft per month. We collect from your address across ten districts, wrap and load, and store at our nearest facility.",
    keywords:
      "self storage abu dhabi, storage abu dhabi, storage units abu dhabi, furniture storage abu dhabi, self storage near me abu dhabi",
    h1: "Self Storage in Abu Dhabi",
    blurb:
      "We collect from ten districts across Abu Dhabi — the islands, the mainland suburbs and Mussafah — wrap and load at your address, and store your things indoors. You do not drive anything anywhere.",
    intro: [
      "Abu Dhabi's storage market is smaller and further out than Dubai's, which means the yards are mostly in Mussafah and ICAD and the drive from Al Reem or Saadiyat is not a small errand. What we run instead is the collection: the crew comes to your address, wraps the furniture, carries it down and takes it away.",
      "Being straight about where it goes: we operate warehouses in Dubai, Sharjah and Ajman, and Abu Dhabi is a collection service with storage at our nearest facility. If what you want is a unit in Abu Dhabi that you hold a key to and can visit unannounced, a local self-storage yard suits you better and we would rather say so now than after you have booked. If what you want is your things out of the flat and safely somewhere, retrievable on request, this works well and it is what most people actually need.",
    ],
    faqs: [
      {
        q: "Do you have a storage facility in Abu Dhabi?",
        a: "No — we operate the collection and delivery service in Abu Dhabi and store at our nearest facility. Our warehouses are in Dubai, Sharjah and Ajman. If you specifically want a unit in Abu Dhabi you can drive to, a local yard is the better fit and we would rather tell you that plainly.",
      },
      {
        q: "How much does storage cost in Abu Dhabi?",
        a: "AED 12.65 per square foot per month, VAT included, on the floor space your goods actually occupy — the same rate as everywhere else we operate. Transport is quoted separately on your address and how the access works.",
      },
      {
        q: "How quickly can I get something back in Abu Dhabi?",
        a: "Retrieval to an Abu Dhabi address is normally arranged within 24 to 48 hours, for all of it or a single carton. If your dates are tight, say so when booking and the items are racked where they can be reached quickly.",
      },
    ],
  },
  areas: [
    {
      slug: "al-reem-island",
      name: "Al Reem Island",
      headline: "Towers, Two Bridges and a Booked Service Lift",
      blurb:
        "Al Reem is high-rise living reached by two bridges, and every tower on it wants the service lift booked. We arrange that; you do not stand in a lobby.",
      character: [
        "Al Reem Island sits just off the north-east side of Abu Dhabi island, reached by the Reem and Al Zeina bridges, with Shams Abu Dhabi, Marina Square, City of Lights and The Gate as its main clusters. It is almost entirely towers, and it houses a large share of Abu Dhabi's professional expat population — one and two-bedroom flats, high turnover, and a great many people whose lease dates do not line up with the next one.",
        "The access story is the usual tower story with one Abu Dhabi twist: the island is reached by bridges that funnel all traffic, so a collection scheduled into the morning or evening peak spends a long time getting on and off. We schedule mid-morning where possible. Beyond that it is the standard procedure — service lift booked with building management, loading bay slot reserved, crew registered. Volumes run 60 to 150 square feet for a typical flat. The seasonal note is that Al Reem turns over heavily in August like the rest of the emirate's expat rental market, so book two to three weeks ahead in that window rather than two days.",
      ],
      uses: [
        { icon: "📅", title: "Between leases", desc: "The dominant reason on Al Reem. No minimum term, so a three-week gap is three weeks." },
        { icon: "🛋️", title: "One and two-bed flats", desc: "60 to 150 square feet, with the lift booking handled for you." },
        { icon: "✈️", title: "Long postings away", desc: "Empty the flat rather than pay rent on it while you are out of the country." },
      ],
      faqs: [
        {
          q: "Do you book the service lift on Al Reem?",
          a: "Yes. Tell us the tower and floor when you book and we arrange the lift slot and the loading bay with building management. Every Al Reem tower requires it and most want notice, so it is the part that decides whether the day runs to time.",
        },
        {
          q: "Where do my things actually go?",
          a: "We collect on Al Reem and store at our nearest facility — our warehouses are in Dubai, Sharjah and Ajman rather than Abu Dhabi. Retrieval back to an Abu Dhabi address is normally arranged within 24 to 48 hours.",
        },
      ],
      nearby: ["al-khalidiyah", "al-bateen", "saadiyat-island", "al-mushrif"],
      keywords: "storage al reem island, self storage al reem, al reem island storage abu dhabi",
    },
    {
      slug: "khalifa-city",
      name: "Khalifa City",
      headline: "Villas, Extensions and a Very Full Garage",
      blurb:
        "Khalifa City is villas on generous plots, and the storage here is garage storage. We size for that rather than for the bedroom count.",
      character: [
        "Khalifa City sits on the mainland between the airport and the island, laid out as villa plots across Khalifa City A and B with Shakhbout City adjoining. The houses are large, frequently extended, and held on long tenancies by families — Emirati households, long-settled expat families and a substantial number of people working at the airport and the nearby government and defence employers.",
        "The pattern is accumulation, not turnover. A Khalifa City collection is a villa job: 240 to 400 square feet, most of a day, and the garage and outdoor areas carrying a disproportionate share of it. Many of these villas have an annexe or extension used as storage already, which means the volume is dense and rarely inventoried before the day — we would rather survey than estimate here. Access is straightforward, with driveways and street parking, but the plots are large and the street numbering is not intuitive, so we ask for the villa number and a nearby landmark. Summer loading is outdoors with no shade, and the drive from the island adds time, so these are scheduled as early starts.",
      ],
      uses: [
        { icon: "🚗", title: "Garage and annexe clearances", desc: "Usually the largest part of the collection and the part nobody counts." },
        { icon: "🔨", title: "Villa renovations", desc: "Long-held houses get refitted. Collected and returned room by room." },
        { icon: "🪴", title: "Outdoor furniture", desc: "Bulky and unusable in summer. Cleaned, wrapped and stored until the season turns." },
      ],
      faqs: [
        {
          q: "How big is a typical Khalifa City collection?",
          a: "240 to 400 square feet, and usually most of a day. The garage, any annexe and the outdoor areas carry a large share of it, which is why a bedroom-count estimate here is routinely a third short.",
        },
        {
          q: "Can you survey first?",
          a: "Yes, and for a Khalifa City villa we would prefer to. It is free and takes about half an hour, and on a job this size the difference between a survey and an estimate is whether the crew finishes in a day.",
        },
      ],
      nearby: ["al-raha", "al-shamkha", "mussafah", "al-mushrif"],
      keywords: "storage khalifa city, self storage khalifa city abu dhabi, villa storage khalifa city",
    },
    {
      slug: "al-khalidiyah",
      name: "Al Khalidiyah",
      headline: "Older Island Buildings, Narrow Streets",
      blurb:
        "Al Khalidiyah is central island living in older buildings, where the constraint is the street and the stairwell rather than a booked lift.",
      character: [
        "Al Khalidiyah occupies the western part of Abu Dhabi island around Khalidiyah Mall and the Corniche end, and it is one of the older established parts of the city — mid-rise apartment buildings from an earlier era, family flats, and long-settled residents rather than a two-year expat cycle.",
        "The practical difference from Al Reem is age. These buildings frequently have small or no service lifts, narrow stairwells and street parking rather than a loading bay, which turns a collection into a carry and makes the floor number the single most important thing we ask about. Wardrobes and large sofas assembled in place sometimes cannot come down whole and need dismantling, so it is worth mentioning at booking. Flats here tend to be larger than Al Reem's — three-bedroom family apartments are common — so volumes run 120 to 200 square feet, but they are stored for much longer, because the bookings are accumulation rather than lease gaps. The Corniche end restricts large vehicle parking at certain hours, which we plan around.",
      ],
      uses: [
        { icon: "🏠", title: "Long-tenancy accumulation", desc: "Family flats held for years, with no room left to give." },
        { icon: "🪜", title: "Walk-up and small-lift buildings", desc: "The floor decides the crew. Tell us before we quote." },
        { icon: "🛏️", title: "Furniture kept, not needed", desc: "Cots, spare beds, the replaced dining set. Stored rather than sold." },
      ],
      faqs: [
        {
          q: "My building has no service lift. Can you still collect?",
          a: "Yes — it becomes a carry rather than a lift job, which changes the crew size and the time rather than whether it is possible. Tell us the floor when you book, because on an older Khalidiyah building that matters more than how much you are storing.",
        },
        {
          q: "Can you dismantle a wardrobe that was built in the room?",
          a: "Usually, and it is worth flagging at booking. Furniture assembled in place in these older flats frequently cannot come down the stairwell whole, so it needs the time allowing for rather than discovering on the day.",
        },
      ],
      nearby: ["al-bateen", "al-mushrif", "al-reem-island", "saadiyat-island"],
      keywords: "storage al khalidiyah, self storage khalidiyah abu dhabi, furniture storage al khalidiyah",
    },
    {
      slug: "al-mushrif",
      name: "Al Mushrif",
      headline: "Established Villas Off the Airport Road",
      blurb:
        "Al Mushrif is settled villa territory near Mushrif Mall, and its collections are the collections of households that have not moved in a decade.",
      character: [
        "Al Mushrif sits inland on the island around Mushrif Mall and the Sheikh Zayed Grand Mosque approach, a long-established residential district of villas and low-rise apartment blocks on wide streets. The households here are settled — Emirati families and long-term expat residents rather than the rental churn of the island's tower districts.",
        "The storage is correspondingly long-horizon. What we collect from Al Mushrif is very rarely a household in transit and very often a household reclaiming space: a majlis's worth of occasional seating, a garage or annexe cleared, children's furniture kept for a next generation, or the contents of a family member's home held while decisions are made. Volumes run 150 to 300 square feet and bookings frequently run years, which is fine — there is no maximum term and nothing to renew. Access is easy: driveways, wide streets, no lift procedures. The one specific we ask about is the gate width, because many villas here have a boundary wall a large vehicle cannot pass, turning the last twenty metres into a carry.",
      ],
      uses: [
        { icon: "🪑", title: "Majlis and occasional furniture", desc: "Seating used a few times a year and stored for the rest of it." },
        { icon: "🏡", title: "Garage and annexe space", desc: "Reclaimed as living or working space, with the contents held." },
        { icon: "📦", title: "A family member's household", desc: "Kept intact while decisions are made, for as long as that takes." },
      ],
      faqs: [
        {
          q: "Can your vehicle reach my villa?",
          a: "Usually, but tell us about the gate and boundary wall. A number of Al Mushrif villas have a gate a large vehicle cannot pass, which makes the final stretch a carry — knowing in advance means the right crew arrives.",
        },
        {
          q: "Is there a limit on how long I can store?",
          a: "No maximum and nothing to renew. Billing continues monthly on the same space at the same rate, and several of our longest-running bookings are exactly this kind of household.",
        },
      ],
      nearby: ["al-khalidiyah", "al-bateen", "khalifa-city", "al-reem-island"],
      keywords: "storage al mushrif, self storage al mushrif abu dhabi, villa storage al mushrif",
    },
    {
      slug: "yas-island",
      name: "Yas Island",
      headline: "New Builds, Event Weekends and Strict Move Windows",
      blurb:
        "Yas Island is new-build residential next to a major event venue, and race and concert weekends genuinely change what is possible on the roads.",
      character: [
        "Yas Island holds Yas Acres, Water's Edge, Ansam and Mayan alongside the Yas Marina Circuit, Ferrari World and Yas Mall. The residential districts are recent, occupied by a mix of long-lease families in the villa districts and shorter-term professionals in the apartments, and much of it is still on its first or second occupancy cycle.",
        "Two things make Yas different from anywhere else in this list. First, the buildings are new and their move procedures are strict — booked service lift slots with hard end times, lift-protection deposits, and crew registration with a community management office as well as the building. Second, and unusually, the event calendar matters: race weekends, concerts and major events at the circuit and Etihad Arena close or restrict roads across the island, and a collection scheduled into one of those does not happen. We check the calendar before confirming a date, which is not something that is necessary anywhere else in the emirate. Volumes run 60 to 150 square feet for apartments and 200 to 320 for the Yas Acres villas.",
      ],
      uses: [
        { icon: "🏗️", title: "New-build handovers", desc: "Furniture held while a handover slips. No fixed end date, so an overrun costs the weeks." },
        { icon: "🏢", title: "Strict building procedures", desc: "Lift slots, deposits and community registration, all arranged in advance." },
        { icon: "🏡", title: "Yas Acres villas", desc: "200 to 320 square feet, driveway access, usually a full day." },
      ],
      faqs: [
        {
          q: "Do events at the circuit affect my collection?",
          a: "They can, genuinely. Race weekends, concerts and major Etihad Arena events restrict roads across Yas, and a collection scheduled into one does not happen. We check the calendar before confirming a date — it is the only area in Abu Dhabi where that is necessary.",
        },
        {
          q: "My building wants a lift deposit and a community pass. Who arranges that?",
          a: "We do, as part of the booking. Yas buildings are newer and stricter than most — booked slots with hard end times, lift-protection deposits and registration with community management as well as the building itself.",
        },
      ],
      nearby: ["saadiyat-island", "al-raha", "khalifa-city", "al-reem-island"],
      keywords: "storage yas island, self storage yas island abu dhabi, yas acres storage",
    },
    {
      slug: "saadiyat-island",
      name: "Saadiyat Island",
      headline: "Low Density, High Value, Declared Items",
      blurb:
        "Saadiyat collections are smaller in number and higher in value than anywhere else we go, and the useful thing here is declaring what is actually being stored.",
      character: [
        "Saadiyat Island is the cultural district — Louvre Abu Dhabi, the Saadiyat Cultural District, Saadiyat Beach and the villa and apartment communities at Saadiyat Beach Residences, Mamsha Al Saadiyat and the Cultural District's newer buildings. It is low-density and expensive, and the households here are a mix of long-lease professionals, faculty from the university campuses, and owners who spend part of the year elsewhere.",
        "What distinguishes the work is what is in the collection rather than how much of it there is. Saadiyat produces a much higher than average share of art, antiques, instruments and specialist equipment, and the single most useful thing a customer here can do is declare those items rather than let them be packed among household cartons. Declared pieces are packed and racked separately — framed works upright and cornered, never flat with weight on them — and listed individually on the inventory. Volumes are moderate, 80 to 200 square feet typically, and the bookings often run long because owners are away rather than moving. Access is easy: modern buildings with proper loading provision and villas with driveways. Beach-adjacent properties get an extra note in the wrapping, because salt air is harder on metal fittings than most people expect.",
      ],
      uses: [
        { icon: "🖼️", title: "Art and antiques, declared", desc: "Packed and racked separately, listed individually. Declaring is the whole point." },
        { icon: "✈️", title: "Part-year residents", desc: "Households away for months. Long bookings with nothing to renew." },
        { icon: "🎓", title: "Faculty and campus moves", desc: "Academic-year timing rather than the August rental cycle." },
      ],
      faqs: [
        {
          q: "I have artwork to store. What should I do?",
          a: "Declare it at quoting rather than packing it with the household cartons. Declared works are packed and racked separately — upright and cornered rather than flat under weight — and listed individually on the inventory. It also matters for cover, so ask us for the current position in writing.",
        },
        {
          q: "My flat is right on the beach. Does that change anything?",
          a: "Only in the wrapping. Salt air is harder on metal fittings and mechanisms than most people expect, so items from beachfront properties are wrapped with that in mind rather than treated as ordinary inland furniture.",
        },
      ],
      nearby: ["yas-island", "al-reem-island", "al-bateen", "al-khalidiyah"],
      keywords: "storage saadiyat island, self storage saadiyat, art storage abu dhabi, saadiyat beach storage",
    },
    {
      slug: "mussafah",
      name: "Mussafah",
      headline: "Industrial, Commercial and Business Storage",
      blurb:
        "Mussafah is where Abu Dhabi's businesses are, so most of what we collect here is stock, records and equipment rather than a household.",
      character: [
        "Mussafah is the industrial and commercial belt on the mainland south of the city — ICAD, the Mussafah industrial sectors, workshops, warehousing and the businesses that supply the rest of the emirate. There is residential housing here too, largely for workers in those industries, but the character of the work is commercial.",
        "That makes Mussafah the one Abu Dhabi district where most bookings are business rather than household: stock that turns over seasonally, company records being moved out of expensive office space, equipment between jobs, and businesses that took a warehouse for their peak and are paying for it in the quiet months. The useful thing to establish here is the movement pattern rather than the volume — how often goods come in and out matters more than how much there is, because that decides whether they are racked accessibly or densely. Access is easy: loading bays, roller shutters and vehicle space. What we ask for in advance is the weight per pallet and the delivery note, because unannounced trucks and unrackable pallets are the two things that waste a run.",
      ],
      uses: [
        { icon: "📦", title: "Business stock", desc: "Seasonal volume that costs for the months it exists rather than for the year." },
        { icon: "📁", title: "Company records", desc: "Boxed and indexed offsite, out of expensive office square footage." },
        { icon: "🔧", title: "Equipment between jobs", desc: "Tools and plant, drained of fuel and with batteries raised at booking." },
      ],
      faqs: [
        {
          q: "Do you handle palletised business goods?",
          a: "Yes. Send the delivery note, the pallet count and the weight per pallet before the truck leaves — unannounced deliveries and pallets that cannot be racked are the two things that waste a run, and both are preventable at your end.",
        },
        {
          q: "Can I use your address as my business address?",
          a: "No. Storage is not a licensed premises and cannot be registered as one. We hold goods and release them on request; if your licence requires physical premises, storage does not satisfy that requirement.",
        },
      ],
      nearby: ["khalifa-city", "al-shamkha", "al-raha", "al-mushrif"],
      keywords: "storage mussafah, business storage mussafah, warehouse storage mussafah abu dhabi, icad storage",
    },
    {
      slug: "al-raha",
      name: "Al Raha",
      headline: "Beach Apartments and Gardens Villas",
      blurb:
        "Al Raha splits between beachfront apartments and inland villas, and the two are different jobs. We ask which before quoting.",
      character: [
        "Al Raha runs along the coast towards the airport, comprising Al Raha Beach — the waterfront apartment districts of Al Bandar, Al Zeina, Al Muneera and Al Seef — and Al Raha Gardens, a villa community set back inland. The two halves are close together and produce entirely different collections, which is the first thing to establish.",
        "Al Raha Beach is a tower job: booked service lifts, loading bays with time limits, 60 to 150 square feet, with a high share of professionals on shorter leases. Al Raha Gardens is a villa job: driveway access, 240 to 350 square feet including the garage, families on long tenancies, most of a day. Beachfront properties get the same salt-air note as Saadiyat, because metal fittings and mechanisms corrode faster near the water than people expect. The area's proximity to the airport also means a meaningful number of residents work aviation shift patterns and want collections scheduled around a shift rather than around office hours, which is a normal request here.",
      ],
      uses: [
        { icon: "🏖️", title: "Al Raha Beach apartments", desc: "Booked lifts, 60 to 150 square feet, mostly lease-driven." },
        { icon: "🏡", title: "Al Raha Gardens villas", desc: "Driveway access, 240 to 350 square feet including the garage." },
        { icon: "✈️", title: "Aviation shift patterns", desc: "Collections scheduled around a shift rather than office hours." },
      ],
      faqs: [
        {
          q: "Do you need to know whether I am in the Beach or the Gardens?",
          a: "Yes, and it is the first thing we ask. Al Raha Beach is a booked-service-lift job in a tower; Al Raha Gardens is a driveway job at a villa. They need different crews and different time allowances.",
        },
        {
          q: "I live on the waterfront. Does that affect the wrapping?",
          a: "It does. Salt air is harder on metal fittings, hinges and mechanisms than most people expect, so items from beachfront properties are wrapped with that in mind rather than as ordinary inland furniture.",
        },
      ],
      nearby: ["yas-island", "khalifa-city", "saadiyat-island", "mussafah"],
      keywords: "storage al raha, al raha beach storage, al raha gardens storage abu dhabi",
    },
    {
      slug: "al-bateen",
      name: "Al Bateen",
      headline: "Established Island Villas and Embassy Turnover",
      blurb:
        "Al Bateen has an unusual rhythm — diplomatic and executive postings mean whole households arrive and leave on a posting cycle rather than a lease cycle.",
      character: [
        "Al Bateen occupies the south-western part of Abu Dhabi island, around the executive airport, the Bateen Marina and the embassy district, and it is one of the most established residential areas in the city — large villas on generous plots alongside low-rise apartment buildings, on quiet wide streets.",
        "What makes Al Bateen distinctive is the posting cycle. A substantial share of residents are on diplomatic, executive or institutional postings of two to four years, which means whole households arrive and depart together on a schedule that has nothing to do with the emirate's August rental turnover. Those are large collections — 250 to 400 square feet — and they very often go into storage rather than into a container, because the next posting's destination is not yet decided. It is worth saying plainly that storing is usually cheaper than shipping twice and considerably cheaper than a forced sale. Access is easy: driveways, wide streets, no lift procedures. Households leaving the country should nominate someone in the UAE who can authorise a delivery afterwards, in writing, before they fly.",
      ],
      uses: [
        { icon: "🌍", title: "Posting cycles", desc: "Two to four year rotations. Store rather than ship twice or sell in a fortnight." },
        { icon: "📦", title: "Storing while deciding", desc: "The next destination is not settled. Nothing has to be decided before you fly." },
        { icon: "🏡", title: "Large villa clearances", desc: "250 to 400 square feet, driveway access, usually a full day." },
      ],
      faqs: [
        {
          q: "I am leaving on a posting. Can I manage storage from abroad?",
          a: "Yes. Nominate someone in the UAE in writing before you fly and give us a reachable email address. Deliveries, releases and ending the booking can all be arranged remotely, and there is no maximum term.",
        },
        {
          q: "Is it cheaper to store or to ship?",
          a: "If the next destination is not settled, storing is almost always cheaper — shipping a household twice costs multiples of holding it once, and a forced sale in a fortnight gets forced-sale prices. Store, then decide from the other side.",
        },
      ],
      nearby: ["al-khalidiyah", "al-mushrif", "al-reem-island", "saadiyat-island"],
      keywords: "storage al bateen, self storage al bateen abu dhabi, villa storage al bateen",
    },
    {
      slug: "al-shamkha",
      name: "Al Shamkha",
      headline: "Growing Villa Districts on the Mainland",
      blurb:
        "Al Shamkha is a fast-growing mainland villa area where a lot of households are moving in rather than out — and moving in needs storage too.",
      character: [
        "Al Shamkha sits on the mainland south-east of Khalifa City, one of Abu Dhabi's expanding residential districts of villa plots and newer housing developments, including the Shamkha South and Alreeman areas. It is largely Emirati and long-settled expat family housing, and a substantial part of it is recent or still handing over.",
        "That produces an unusual share of inbound rather than outbound work. Families completing on a villa here frequently need their previous furniture held while a handover slips or while the new house is fitted out, then delivered back in stages as rooms are finished — which suits monthly billing with no fixed end date exactly. Volumes are villa-sized, 240 to 380 square feet, and the collections are full-day jobs. Two local practicalities: the newer streets are not always on mapping yet, so we ask for a plot or villa number and a landmark, and the drive out from the island is long enough that these are planned as half-day round trips with a mid-morning start rather than squeezed between city jobs.",
      ],
      uses: [
        { icon: "🏗️", title: "Handovers that slip", desc: "Furniture held with no fixed end date, delivered back as rooms finish." },
        { icon: "🏡", title: "Villa-sized collections", desc: "240 to 380 square feet, driveway access, a full day." },
        { icon: "📦", title: "Furniture from the previous home", desc: "Kept while the new house is furnished properly rather than sold at a loss." },
      ],
      faqs: [
        {
          q: "The street I am on is not on maps yet. What do you need?",
          a: "A plot or villa number and a nearby landmark. Several of the newer Al Shamkha streets are not on mapping yet, and a crew looking for an address is time you are paying for.",
        },
        {
          q: "Can you deliver back a few rooms at a time?",
          a: "Yes, and for a house being fitted out that is the sensible way. Rooms are refurnished as they are finished, and each delivery is quoted as its own job.",
        },
      ],
      nearby: ["khalifa-city", "mussafah", "al-raha", "al-mushrif"],
      keywords: "storage al shamkha, self storage al shamkha abu dhabi, villa storage shamkha",
    },
  ],
}
