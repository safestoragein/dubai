import type { EmirateDef } from "./types"

/**
 * DUBAI — thirty service areas.
 *
 * Sixteen already had hand-written district pages at flat /locations/{area}
 * URLs. Those moved to /locations/dubai/{area} with their copy intact and are
 * listed in `staticAreas`; the fourteen below are new and are rendered from
 * this data by app/locations/dubai/[area].
 *
 * Every entry varies the eight things the doorway-page rule requires: named
 * sub-communities, a named landmark, dominant building type, typical unit size,
 * the dominant customer situation, drive time and route, one area-specific
 * access constraint, and one local seasonality note. If you add an area, write
 * it that way — do not clone a neighbour.
 */
export const DUBAI: EmirateDef = {
  slug: "dubai",
  name: "Dubai",
  facilityKey: "dubai",
  sampleDistricts: ["Dubai Marina", "Business Bay"],
  university: "Dubai International Academic City",
  hub: {
    title: "Self Storage Facilities in Dubai | 30 Areas, Door-To-Door",
    description:
      "Self storage facilities in Dubai covering 30 areas. We collect from your address, wrap and load, and store indoors from AED 12.65 per sq ft per month.",
    keywords:
      "self storage facilities in dubai, storage dubai locations, storage areas dubai, self storage dubai areas, storage collection dubai",
    h1: "Self Storage Facilities in Dubai",
    blurb:
      "We collect from thirty areas across Dubai and store at our facility in DIP-1. You do not drive to a unit — the crew comes to your door, wraps what is going, and brings it back when you want it.",
    intro: [
      "Dubai has no shortage of storage yards. What it is short of is anyone who will come and get your things, which is the part of the job that costs you a Sunday, a van hire and a service-lift argument with building management. That is the half we run.",
      "Every area page below carries the detail that actually matters locally — which towers need lift slots booked, which communities want the crew registered at the gate, where the loading bays are, and what people in that area typically store. The price is the same everywhere: AED 12.65 per square foot per month, VAT included, on the space your goods actually occupy.",
    ],
    faqs: [
      {
        q: "Which areas of Dubai do you collect from?",
        a: "All of them. The thirty pages here are the districts we work in constantly and have written up in detail, not the boundary of where we will drive. If your area is not listed, send the address and we will confirm it.",
      },
      {
        q: "Where in Dubai is your facility?",
        a: "Our Dubai warehouse is in DIP-1 — Building 23, Warehouse 5. In practice the location does not affect you, because the crew does the driving in both directions. We also operate warehouses in Sharjah and Ajman.",
      },
      {
        q: "Does the price change depending on my area?",
        a: "The storage rate does not — it is AED 12.65 per sq ft per month, VAT included, everywhere. Transport is quoted on your address and how the access works, so a ninth-floor flat with a shared service lift and a ground-floor villa with parking are priced differently even on the same street.",
      },
    ],
  },

  /* -------------------------------------------------------------------------
   * The sixteen hand-written district pages, moved from flat /locations/{area}
   * URLs. Listed for the hub grid and for `nearby` resolution only.
   * ---------------------------------------------------------------------- */
  staticAreas: [
    { slug: "business-bay", name: "Business Bay", blurb: "High-rise flats and small offices along the canal." },
    { slug: "downtown-dubai", name: "Downtown Dubai", blurb: "Tower living around Burj Khalifa and the Boulevard." },
    { slug: "dubai-marina", name: "Dubai Marina", blurb: "Dense towers, tight loading bays, constant turnover." },
    { slug: "palm-jumeirah", name: "Palm Jumeirah", blurb: "Villas and Shoreline flats with gated access." },
    { slug: "jumeirah", name: "Jumeirah", blurb: "Older low-rise villas with generous gardens." },
    { slug: "al-barsha", name: "Al Barsha", blurb: "Mixed villas and mid-rise flats behind Mall of the Emirates." },
    { slug: "jumeirah-village-circle", name: "JVC", blurb: "Affordable mid-rise, one of the fastest-turning areas in Dubai." },
    { slug: "dubai-hills", name: "Dubai Hills Estate", blurb: "New villas and townhouses around the golf course." },
    { slug: "mirdif", name: "Mirdif", blurb: "Established family villas near the old airport road." },
    { slug: "deira", name: "Deira", blurb: "Older buildings, dense streets, tight vehicle access." },
    { slug: "dubai-silicon-oasis", name: "Dubai Silicon Oasis", blurb: "Affordable flats and a large student population." },
    { slug: "dubai-investment-park", name: "Dubai Investment Park", blurb: "Where our own warehouse is, and a working industrial area." },
    { slug: "al-quoz", name: "Al Quoz", blurb: "Warehouses, studios and the traditional storage district." },
    { slug: "ras-al-khor", name: "Ras Al Khor", blurb: "Industrial units and the furniture trade." },
    { slug: "umm-ramool", name: "Umm Ramool", blurb: "Light industrial and logistics near the airport." },
    { slug: "al-qusais", name: "Al Qusais", blurb: "Dense residential towers on the Sharjah side of the city." },
  ],

  areas: [
    {
      slug: "jlt",
      name: "Jumeirah Lake Towers",
      headline: "Towers, Clusters and One Loading Bay Each",
      blurb:
        "JLT is eighty-odd towers arranged in lettered clusters, and almost every one of them has a single loading bay that has to be booked. We deal with that part; you do not.",
      character: [
        "JLT runs from Cluster A round to Cluster Z along the four artificial lakes, with Almas Tower at its centre and the metro at both ends. The flats are overwhelmingly one and two-bedroom, occupied by working couples and sharers, and a very large share of residents are on their second or third JLT lease — people move between clusters rather than out of the area. That produces a specific pattern: short bookings, one and two-bedroom volumes of 60 to 150 square feet, and a lot of them landing in the same fortnight.",
        "The access constraint here is the loading bay, and it is unusually strict. Most JLT towers have one bay, shared with every delivery in the building, and it is booked in half-hour or hour blocks through building management. Miss the slot and there is no second one that day. Our crew books it as part of arranging the collection, and knows which clusters — the ones nearest Sheikh Zayed Road in particular — need more notice than the rest. Parking a van anywhere else in JLT is not a workable fallback; the internal roads are single-lane and enforced.",
      ],
      uses: [
        { icon: "🔁", title: "Moving cluster to cluster", desc: "A better tower, a bigger flat, the same neighbourhood. We hold everything in between if the dates do not meet." },
        { icon: "🛋️", title: "One-bed flats with no store room", desc: "The second sofa, the guest bed, the bike. Out of the flat, back when you need it." },
        { icon: "✈️", title: "Long trips and rotations", desc: "Rather than pay rent on an empty flat, empty it — there is no minimum term." },
      ],
      faqs: [
        {
          q: "Do you book the JLT loading bay for me?",
          a: "Yes. Tell us the cluster and tower when you book and our team arranges the bay slot with building management directly. JLT bays are single and shared, usually in half-hour or hour blocks, so this is the part of the job that decides whether the collection runs to time.",
        },
        {
          q: "I am moving from one JLT tower to another. Do you handle both ends?",
          a: "Yes, and it is one of the routes we run most. Both bays get booked and both buildings get the crew registered. If the two lease dates do not meet, everything goes into storage for the gap and you pay for the gap rather than a month.",
        },
      ],
      nearby: ["dubai-marina", "al-furjan", "discovery-gardens", "barsha-heights-tecom"],
      keywords: "storage jlt, self storage jumeirah lake towers, jlt storage dubai, furniture storage jlt",
    },
    {
      slug: "arabian-ranches",
      name: "Arabian Ranches",
      headline: "Villas, and the Garage Nobody Counts",
      blurb:
        "Arabian Ranches collections are villa jobs, which means the garage is usually the biggest room in them. We size for that rather than for the bedroom count.",
      character: [
        "Arabian Ranches spreads across Al Reem, Alvorada, Saheel, Mirador and the rest, wrapped around the Arabian Ranches Golf Club and reached off Sheikh Mohammed Bin Zayed Road. The houses are three, four and five-bedroom villas held by families on long tenancies, which changes what storage is for here — it is much less often a lease gap and much more often a renovation, a downsizing, or a family that has simply accumulated fifteen years of things.",
        "The volume lives where nobody looks. A four-bedroom Ranches villa's garage regularly holds bikes, a spare fridge, garden furniture, tools, a barbecue and boxes from the previous move, and it is routinely a quarter of the whole collection by floor space. Add the garden furniture and the maid's room and a villa estimated on bedrooms alone comes in low by a third. We would rather survey a Ranches villa than quote it — it is free, takes half an hour, and it is the difference between a full-day crew and a crew that runs out of day. Access itself is straightforward: driveways rather than service lifts, but the community requires the vehicle and crew registered with security in advance, and summer collections here are planned for an early start because the loading is outdoors.",
      ],
      uses: [
        { icon: "🚗", title: "Clearing the garage", desc: "The single largest space in most Ranches collections, and the one people forget to mention." },
        { icon: "🔨", title: "Renovation, room by room", desc: "Long-tenancy villas get refitted. We collect and return in stages as the work moves." },
        { icon: "🪴", title: "Garden and outdoor furniture", desc: "Bulky, dusty and unusable in July. Cleaned, wrapped and stored until October." },
      ],
      faqs: [
        {
          q: "Do you need community access approval for Arabian Ranches?",
          a: "Yes. The community requires the vehicle and crew to be registered with security in advance. Tell us the sub-community and villa number when booking and it is arranged — arriving unregistered means a paid crew waiting at the gate.",
        },
        {
          q: "How much does a four-bedroom Ranches villa take?",
          a: "Typically 300 to 380 square feet once racked, and that assumes the garage is included. For four bedrooms and above we would rather do a free survey than estimate, because a villa quoted on bedrooms alone is usually a third short.",
        },
      ],
      nearby: ["damac-hills", "motor-city", "sports-city", "town-square"],
      keywords: "storage arabian ranches, villa storage arabian ranches, self storage arabian ranches dubai",
    },
    {
      slug: "damac-hills",
      name: "DAMAC Hills",
      headline: "New Villas Still Being Furnished",
      blurb:
        "DAMAC Hills is a community still filling up, which means half our collections here are people moving in and half are people who bought furniture that did not fit.",
      character: [
        "DAMAC Hills sits off Umm Suqeim Road around the Trump International Golf Club, mixing villas and townhouses in Akoya, Trinity, Rockwood and Silver Springs with a growing number of apartment buildings. It is newer than Arabian Ranches and it shows in the storage pattern: a large share of what we collect here is not accumulated clutter but recently bought furniture that turned out not to fit, or a household's previous furniture kept while the new place is furnished properly.",
        "The practical constraint is that the community is large and the sub-communities are not obviously signed, so we ask for the sub-community name and the villa or building number rather than just 'DAMAC Hills' — a crew circling Akoya looking for a house is a crew not loading. Security registration is required in advance like any gated development. Townhouses here also tend to have narrower internal stairs than the villas in older communities, which matters for wardrobes and large sofas; tell us if a piece was assembled in place, because those often cannot come out whole. Typical volumes run 150 to 200 square feet for a townhouse and 240 to 300 for a villa.",
      ],
      uses: [
        { icon: "📦", title: "Furniture that did not fit", desc: "Bought for the old place, kept for the next one. Stored rather than sold at a loss." },
        { icon: "🏠", title: "Moving in, in stages", desc: "New builds get furnished over months. Hold the surplus until each room is settled." },
        { icon: "🪑", title: "Townhouse overflow", desc: "Narrow stairs and small store rooms. The things that will not go up get stored instead." },
      ],
      faqs: [
        {
          q: "Which sub-community details do you need?",
          a: "The sub-community name — Akoya, Trinity, Rockwood, Silver Springs and so on — plus the villa or building number. DAMAC Hills is large and poorly signed internally, and a crew looking for an address is time you are paying for.",
        },
        {
          q: "My wardrobe was assembled in the bedroom. Can you take it?",
          a: "Tell us before the day. Townhouse stairs here are narrower than in the older villa communities, and furniture assembled in place frequently cannot come down whole. We can dismantle most pieces, but it changes the time and occasionally the outcome, so it should be on the quote rather than a surprise.",
        },
      ],
      nearby: ["arabian-ranches", "town-square", "motor-city", "dubai-south"],
      keywords: "storage damac hills, villa storage damac hills, self storage damac hills dubai, akoya storage",
    },
    {
      slug: "town-square",
      name: "Town Square",
      headline: "Small Flats, First Homes, Tight Budgets",
      blurb:
        "Town Square is where a lot of Dubai buys its first flat, and first flats are small. Storage here is usually about getting a room back rather than moving house.",
      character: [
        "Town Square sits well out along Al Qudra Road around the central park and the Reel Cinemas, built as mid-rise apartment blocks in Zahra, Hayat and Safi plus rows of townhouses. It is one of the most affordable owner-occupied communities in Dubai, and the residents skew younger — first-time buyers, young families, people who moved out here specifically for the price per square foot.",
        "That produces the smallest average booking of anywhere in this list. A Town Square collection is far more often 20 to 40 square feet — a guest bed and a wardrobe so the second bedroom can become a nursery or an office — than a whole-flat clearance. It is also unusually price-sensitive, which is worth being straight about: because billing is on the floor space used with no minimum term, a fifteen-carton booking really is a small monthly figure rather than a minimum charge. Access is easy by Dubai standards — low-rise buildings, proper parking, no fifty-floor lift queue — but the drive is long, roughly 35 to 45 minutes from the DIP-1 warehouse depending on Al Qudra traffic, so we schedule these outside the school run rather than into it.",
      ],
      uses: [
        { icon: "🚪", title: "Turning a bedroom into a nursery", desc: "The guest bed and wardrobe out, the room back. Usually 25 to 40 square feet." },
        { icon: "📦", title: "Small bookings, honestly priced", desc: "Fifteen cartons is a normal job here, billed as fifteen cartons of space." },
        { icon: "🚲", title: "Bikes, prams and outdoor kit", desc: "Bulky things a mid-rise flat has nowhere to put." },
      ],
      faqs: [
        {
          q: "Is it worth storing just a few things?",
          a: "Yes, and it is the most common booking in Town Square. You are billed on the floor space your goods occupy with no minimum term and no smallest-unit charge, so ten or fifteen cartons is genuinely a small monthly figure rather than the cost of the smallest unit somebody will rent you.",
        },
        {
          q: "How long does collection take from Town Square?",
          a: "The loading is quick — low-rise buildings with proper parking are the easiest access in this list. The drive is the longer part, roughly 35 to 45 minutes each way on Al Qudra Road, so we schedule collections outside the morning school run.",
        },
      ],
      nearby: ["damac-hills", "arabian-ranches", "dubai-south", "motor-city"],
      keywords: "storage town square dubai, self storage town square, nshama town square storage",
    },
    {
      slug: "motor-city",
      name: "Motor City",
      headline: "Uptown Flats and the Autodrome",
      blurb:
        "Motor City flats are larger than the Dubai average and their store rooms are not. Most collections here are the overflow from a big flat rather than a whole move.",
      character: [
        "Motor City wraps around the Dubai Autodrome, with Uptown Motor City's low-rise blocks, the Green Community villas next door and Foster's and Norton's Court in between. The flats are noticeably larger than equivalent-priced apartments closer to the coast, which is most of why people live here, and they are occupied by long-tenancy families rather than one-year renters.",
        "That changes the shape of the storage. Motor City is an accumulation area, not a turnover area: what we collect tends to be years of things a family has run out of room for rather than a flat being emptied — a dining set that was replaced, cots and prams outgrown, sports equipment for a household that owns bicycles. Bookings are typically 40 to 90 square feet and they run long, often years, because there is no reason to end them. Access is genuinely easy: low-rise buildings, wide internal roads, parking outside, no service-lift booking in most blocks. The one seasonal note is that the Autodrome event calendar closes roads around the circuit on race weekends, so we check it before scheduling rather than discovering it on the day.",
      ],
      uses: [
        { icon: "🏠", title: "Long-tenancy overflow", desc: "Years of accumulation in a large flat with a small store room." },
        { icon: "🚴", title: "Bikes and sports equipment", desc: "A household that owns bicycles owns nowhere to put bicycles." },
        { icon: "🛏️", title: "Furniture kept, not needed", desc: "Cots, spare beds, the replaced dining set. Stored rather than sold." },
      ],
      faqs: [
        {
          q: "Do you need a lift booking in Motor City?",
          a: "Usually not — most Uptown Motor City blocks are low-rise with parking outside and no service-lift procedure. It is one of the easier areas in Dubai to collect from, which is reflected in the transport quote.",
        },
        {
          q: "Is there anything that affects scheduling here?",
          a: "The Autodrome calendar. Race and event weekends close roads around the circuit, so we check it before confirming a date. It is the one predictable disruption in the area and it is easy to plan around if we know first.",
        },
      ],
      nearby: ["sports-city", "arabian-ranches", "damac-hills", "jlt"],
      keywords: "storage motor city dubai, self storage motor city, uptown motor city storage",
    },
    {
      slug: "sports-city",
      name: "Dubai Sports City",
      headline: "Affordable Towers and a Lot of Turnover",
      blurb:
        "Sports City turns over faster than almost anywhere in Dubai. Most collections here are the gap between one lease ending and the next beginning.",
      character: [
        "Dubai Sports City sits between Al Khail Road and the Ranches, built around the ICC Academy and the Els Club, with residential towers in Victory Heights' surrounds, Canal Residence and the Cricket and Golf tower clusters. Rents are among the lowest for tower living in Dubai, which means a young, mobile, high-turnover population — people take a one-year lease and a meaningful share of them do not renew it in the same building.",
        "The result is that Sports City generates more short bookings than long ones. The classic job here is a 60 to 90 square foot one-bedroom flat, emptied on the day an Ejari ends, held for two to four weeks, and delivered to a new address that is frequently in the same district. Because there is no minimum term, a seventeen-day gap costs seventeen days. The access constraint is the towers: service lifts need booking, several buildings restrict moves to defined hours, and the loading areas are shared. The seasonal note is unusually sharp here — the last fortnight of August is close to fully booked every year, because a large share of the district's leases were originally signed in that window and they keep turning over in it.",
      ],
      uses: [
        { icon: "📅", title: "The gap between leases", desc: "Ejari ends on the 3rd, the new flat is ready on the 20th. Seventeen days, charged as seventeen days." },
        { icon: "🏢", title: "Tower to tower in the same area", desc: "Moving building without leaving Sports City. Both lift slots arranged." },
        { icon: "🛋️", title: "One-bed flats, no storage", desc: "60 to 90 square feet is the typical whole-flat volume here." },
      ],
      faqs: [
        {
          q: "How far ahead should I book in Sports City?",
          a: "Two to three days most of the year, but three to four weeks for the second half of August. A large share of this district's leases turn over in that one fortnight and the whole area moves at once.",
        },
        {
          q: "Can you hold things for just two or three weeks?",
          a: "Yes, and it is the most common booking here. There is no minimum term — a seventeen-day Ejari gap is billed as seventeen days rather than rounded to a month.",
        },
      ],
      nearby: ["motor-city", "jlt", "discovery-gardens", "arabian-ranches"],
      keywords: "storage dubai sports city, self storage sports city dubai, sports city storage units",
    },
    {
      slug: "international-city",
      name: "International City",
      headline: "Studios, Sharers and Very Small Bookings",
      blurb:
        "International City is studios and one-beds in low-rise clusters. Storage here is almost always a handful of boxes rather than a household.",
      character: [
        "International City is laid out as country-themed clusters — China, England, Russia, Persia, Spain, Greece, Morocco — off Emirates Road, in low-rise blocks around the Dragon Mart end of the city. It is one of the most affordable places to live in Dubai, and the flats are correspondingly small: studios and one-bedrooms, frequently shared, with almost no built-in storage.",
        "The bookings reflect that exactly. An International City collection is typically 10 to 25 square feet — cartons, a mattress, a couple of pieces of furniture — and it is very often driven by a person leaving the UAE or moving between shared flats rather than a family relocating. Being straightforward about the economics matters here more than anywhere: with no minimum term and billing on space used, a twelve-carton booking is a small monthly figure, and people are frequently surprised that it is not worth less to simply throw everything away. Access is unusual for Dubai in that the buildings are walk-up or low-lift rather than towers, but the cluster roads are narrow and parking is contested, so we ask for the cluster letter and building number and plan for a short carry rather than a bay.",
      ],
      uses: [
        { icon: "📦", title: "A dozen boxes, not a household", desc: "The typical booking here, priced as the space it occupies." },
        { icon: "✈️", title: "Leaving the UAE", desc: "Store rather than sell in a hurry, and decide from the other side." },
        { icon: "🛏️", title: "Between shared flats", desc: "Room changes and flatmate changes, with a gap in the middle." },
      ],
      faqs: [
        {
          q: "I only have about ten boxes. Is that too small?",
          a: "No, and it is the most common booking in International City. Billing is on the floor space your things occupy with no minimum term and no smallest-unit charge, so ten boxes is a genuinely small monthly figure.",
        },
        {
          q: "Parking is difficult in my cluster. Is that a problem?",
          a: "Tell us the cluster letter and building number and we plan for a carry rather than a loading bay. The cluster roads are narrow and contested, so knowing in advance is the difference between a smooth collection and a van circling.",
        },
      ],
      nearby: ["al-warqa", "discovery-gardens", "nad-al-sheba", "dubai-silicon-oasis"],
      keywords: "storage international city dubai, self storage international city, cheap storage international city",
    },
    {
      slug: "al-furjan",
      name: "Al Furjan",
      headline: "Townhouses and New Towers, Side by Side",
      blurb:
        "Al Furjan runs from villas to new high-rises within a few streets, and the two need completely different collections. We ask which you are before quoting.",
      character: [
        "Al Furjan sits between Sheikh Zayed Road and the Discovery Gardens end of the city, split between the original Quortaj and Dubai Style townhouses and the newer apartment towers that went up around the Al Furjan metro stations. That split is the defining fact for a collection here: a townhouse job is a driveway, a trolley and a full day, and a tower job is a booked service lift and a shared loading bay, and quoting one as the other is how a crew runs out of time.",
        "The area is still filling in, so a meaningful share of the work is people moving into unfurnished new-build flats and needing their previous furniture held for a few weeks, or townhouse owners clearing a room while a fit-out finishes. Townhouse volumes run 150 to 220 square feet; tower flats run 60 to 150. The tower buildings here are new enough that their move-in procedures are strict — several require a deposit against lift damage and a booked slot with a hard end time — which is worth knowing before you have hired anything. Summer collections from the townhouses are scheduled early because the loading is outdoors and the driveways offer no shade.",
      ],
      uses: [
        { icon: "🏘️", title: "Townhouse clearances", desc: "Driveway access, 150 to 220 square feet, usually a full day." },
        { icon: "🏢", title: "New-tower move-ins", desc: "Booked lift slots with hard end times. We arrange the slot and the deposit." },
        { icon: "🔨", title: "Fit-outs and snagging", desc: "Rooms emptied while work finishes, returned in stages afterwards." },
      ],
      faqs: [
        {
          q: "Do I need to say whether I am in a townhouse or a tower?",
          a: "Yes, and it is the first thing we ask. A townhouse collection is a driveway and a full day; a tower collection is a booked service lift on a hard time limit. They need different crews and different scheduling, and quoting one as the other is the main way a collection here goes wrong.",
        },
        {
          q: "My building wants a deposit for the service lift. Who handles that?",
          a: "We arrange the booking with building management, including any lift deposit procedure. Several of the newer Al Furjan towers require one along with a slot that has a hard end time, so it needs organising in advance rather than at the desk on the day.",
        },
      ],
      nearby: ["discovery-gardens", "jlt", "dubai-south", "sports-city"],
      keywords: "storage al furjan, self storage al furjan dubai, al furjan townhouse storage",
    },
    {
      slug: "discovery-gardens",
      name: "Discovery Gardens",
      headline: "Low-Rise Blocks, Themed Clusters, No Lifts",
      blurb:
        "Discovery Gardens is walk-up blocks in themed clusters. That makes collection cheap on lift bookings and expensive on stairs, so the floor matters.",
      character: [
        "Discovery Gardens is arranged in themed clusters — Mediterranean, Mogul, Zen, Cactus, Contemporary — of low-rise blocks off Sheikh Zayed Road near the Ibn Battuta end, with the metro at one edge. The flats are studios and one-bedrooms, priced at the affordable end and popular with couples and sharers who want the metro without Marina rents.",
        "The distinguishing feature for us is that the blocks are low-rise and many have no usable service lift, so a collection here is genuinely a carry. Which floor you are on changes the crew size and the time far more than the number of items does, and it is the first thing we ask. Volumes are small — 25 to 60 square feet for a typical flat — and the bookings skew to lease gaps and departures rather than accumulation. Parking is straightforward compared with the towers, but the cluster layouts are repetitive and badly signed, so we want the cluster name and building number rather than the postal shorthand. The seasonal note is metro-adjacent rather than weather-related: the area turns over heavily in August with the rest of the affordable rental market.",
      ],
      uses: [
        { icon: "🪜", title: "Walk-up flats", desc: "The floor number, not the item count, decides the crew and the time." },
        { icon: "📅", title: "Lease gaps", desc: "A high-turnover rental area. Short bookings with no minimum term." },
        { icon: "🧳", title: "Leaving, or between flats", desc: "Small volumes, 25 to 60 square feet, held for weeks rather than years." },
      ],
      faqs: [
        {
          q: "Why do you ask which floor I am on?",
          a: "Because many Discovery Gardens blocks have no usable service lift, so the collection is a carry. The floor changes the crew size and the time considerably more than how much you are storing does, and quoting without it would be guessing.",
        },
        {
          q: "Which cluster details do you need?",
          a: "The cluster name — Mediterranean, Mogul, Zen and so on — and the building number. The clusters are laid out repetitively and signed poorly, and a van circling is time on your quote.",
        },
      ],
      nearby: ["al-furjan", "jlt", "international-city", "sports-city"],
      keywords: "storage discovery gardens, self storage discovery gardens dubai, discovery gardens furniture storage",
    },
    {
      slug: "meydan",
      name: "Meydan",
      headline: "New Villas, Sougha and the Racecourse",
      blurb:
        "Meydan is largely new-build villas and townhouses being furnished for the first time. Most of what we collect here is furniture waiting for a house to be ready.",
      character: [
        "Meydan runs from the Meydan Racecourse and the Grandstand out through Meydan Avenue, Sobha Hartland and the newer Nad Al Sheba villa districts, reached off Al Ain Road and Ras Al Khor Road. It is one of the newest large residential areas in the city and much of it is still handing over, which sets the pattern for the work here.",
        "A Meydan booking is far more often a household waiting for a property than a household clearing one. People complete on a villa, the handover slips, and the furniture they bought or brought needs somewhere to be for six to ten weeks — which is exactly the shape storage is best at, because there is no fixed end date and a slipped handover costs the extra weeks and nothing more. Volumes are large, 240 to 380 square feet for a villa, and deliveries frequently happen in stages as rooms are snagged and finished. Access is easy in the completed sections and awkward in the ones still under construction, where site traffic and unfinished roads can make a large vehicle difficult — we ask whether the immediate street is finished, because that is not something you can tell from a map. Summer loading here is outdoors with no shade, so villa collections are scheduled early in the day.",
      ],
      uses: [
        { icon: "🏗️", title: "Handovers that slipped", desc: "Furniture held for six to ten weeks with no fixed end date." },
        { icon: "📦", title: "Delivered back in stages", desc: "Rooms furnished as they are snagged and finished, rather than all at once." },
        { icon: "🛋️", title: "Furniture from the previous home", desc: "Kept while the new villa is furnished properly, rather than sold at a loss." },
      ],
      faqs: [
        {
          q: "My villa handover keeps moving. What does that cost?",
          a: "The extra weeks and nothing else. Billing is monthly with no fixed end date and no renegotiation, so a handover that slips from six weeks to ten costs four more weeks. Slipped handovers are the normal case in Meydan rather than the exception.",
        },
        {
          q: "Can you deliver back a few rooms at a time?",
          a: "Yes, and it is how most Meydan deliveries run. Rooms get furnished as they are snagged and signed off, so you can occupy the house while the rest is finished. Each delivery is quoted as its own job.",
        },
      ],
      nearby: ["nad-al-sheba", "al-warqa", "ras-al-khor", "mirdif"],
      keywords: "storage meydan dubai, self storage meydan, sobha hartland storage, meydan villa storage",
    },
    {
      slug: "barsha-heights-tecom",
      name: "Barsha Heights (TECOM)",
      headline: "Small Flats, Small Offices, One Postcode",
      blurb:
        "Barsha Heights mixes studios and company offices in the same towers, so we get household and business collections from the same buildings in the same week.",
      character: [
        "Barsha Heights — still widely called TECOM — is the dense block of towers between Sheikh Zayed Road and Al Barsha, next to Internet City and Media City and served by two metro stations. Its towers are genuinely mixed use: a studio flat, a small company office and a serviced apartment can be on three consecutive floors of the same building.",
        "That gives the area an unusual split of work. A meaningful share of our Barsha Heights collections are small offices — ten to thirty desks moving out at the end of a lease, or a company downsizing to a flexi-desk and needing furniture and records held — alongside the studios and one-bedrooms that dominate the residential floors. The two need different scheduling: office collections here happen in the evening or at a weekend because the buildings restrict move-outs to those windows anyway, while residential ones fit into a weekday. Access is the standard tower problem — booked service lifts, shared bays, hard time limits — and Barsha Heights buildings are stricter than most because they are handling business tenants' deliveries all day. Volumes run 25 to 90 square feet residential and 80 to 400 for an office.",
      ],
      uses: [
        { icon: "💼", title: "Small office move-outs", desc: "Ten to thirty desks, collected in the evening or at a weekend." },
        { icon: "📁", title: "Records after downsizing", desc: "Companies moving to a flexi-desk still generate paper. It goes offsite." },
        { icon: "🏢", title: "Studios and one-beds", desc: "25 to 90 square feet, with the lift slot booked for you." },
      ],
      faqs: [
        {
          q: "Can you collect from an office out of hours?",
          a: "Yes, and in Barsha Heights that is usually how it is done. The buildings restrict move-outs to evenings and weekends, and an office cannot be cleared around people working in it anyway.",
        },
        {
          q: "The building handles deliveries all day. Will the lift be available?",
          a: "It has to be booked, and these buildings are stricter than most because they are managing business tenants' deliveries continuously. We arrange the slot with building management as part of the collection rather than turning up and joining a queue.",
        },
      ],
      nearby: ["al-barsha", "jlt", "dubai-marina", "sports-city"],
      keywords: "storage barsha heights, tecom storage dubai, self storage barsha heights, office storage tecom",
    },
    {
      slug: "dubai-south",
      name: "Dubai South",
      headline: "The Long Drive, and What That Means for Scheduling",
      blurb:
        "Dubai South is a long way out, which changes the scheduling more than the price. We plan these as half-day round trips rather than squeezing them between jobs.",
      character: [
        "Dubai South spreads around Al Maktoum International and the Expo City site, taking in The Pulse, MAG 5, Emaar South and the residential districts serving the aviation and logistics employers nearby. It is the furthest large residential area from our DIP-1 warehouse in regular use, though the run down Emirates Road and Sheikh Mohammed Bin Zayed Road is fast when it is not the shift-change hour.",
        "The distance mostly affects scheduling rather than cost. A Dubai South collection is planned as a half-day round trip with a mid-morning start, rather than fitted between two city jobs, and that is the honest reason we ask for a bit more notice here than in Marina or Business Bay. The housing is a mix of low and mid-rise apartments and Emaar South townhouses, with typical volumes of 40 to 90 square feet for a flat and 150 to 220 for a townhouse. Two local specifics matter: several buildings are still in their first occupancy cycle and have move-in procedures that are strict but not yet well publicised, and a meaningful share of residents work shift patterns at the airport and logistics parks, so collections are often scheduled around a shift rather than around office hours. We are happy to work to that; tell us the window.",
      ],
      uses: [
        { icon: "✈️", title: "Aviation and logistics rotations", desc: "Store rather than hold an empty flat through a long rotation." },
        { icon: "🏘️", title: "Emaar South townhouses", desc: "150 to 220 square feet, driveway access, usually a full morning." },
        { icon: "📅", title: "First-lease turnover", desc: "New buildings on their first cycle. Gaps between leases are common." },
      ],
      faqs: [
        {
          q: "Is it more expensive because it is far out?",
          a: "Distance is part of the transport quote, but access matters at least as much — a ground-floor townhouse with a driveway can quote lower than a nearer ninth-floor flat with a shared lift. What the distance really changes is scheduling: we plan these as half-day round trips and ask for a little more notice.",
        },
        {
          q: "I work shifts at the airport. Can you collect around that?",
          a: "Yes. Tell us the window you are actually available and we schedule to it rather than to office hours. A large share of this area works shift patterns and it is a normal request here.",
        },
      ],
      nearby: ["al-furjan", "town-square", "damac-hills", "discovery-gardens"],
      keywords: "storage dubai south, self storage dubai south, expo city storage, emaar south storage",
    },
    {
      slug: "nad-al-sheba",
      name: "Nad Al Sheba",
      headline: "Large Family Villas on Long Tenancies",
      blurb:
        "Nad Al Sheba villas are big, long-held and full. Collections here are almost always accumulation rather than a move, and they are almost always larger than expected.",
      character: [
        "Nad Al Sheba sits inland off Al Ain Road between Meydan and Dubai Silicon Oasis, an established area of large family villas — Nad Al Sheba 1 through 4 plus the newer villa districts on the Meydan side — with the racecourse and the Nad Al Sheba Health Centre as its landmarks. The plots are generous by Dubai standards and the tenancies are long.",
        "Long tenancy plus a large villa produces the biggest average collection in this list. What we take out of a Nad Al Sheba house is a decade of things: replaced furniture, children's furniture kept for the next family member, garden equipment, a garage that functions as a second store room, and frequently an entire majlis's worth of seating used a few times a year. Volumes run 300 to 450 square feet and up, which is genuinely survey territory rather than estimate territory. Access is easy — driveways, wide streets, no lift procedure — but the villas often have a boundary wall and gate that a large vehicle cannot pass, so we ask about street access and gate width. Outdoor loading in July here is brutal and we schedule early starts accordingly.",
      ],
      uses: [
        { icon: "🏡", title: "A decade of accumulation", desc: "300 to 450 square feet is normal. This is survey territory, not estimate territory." },
        { icon: "🪑", title: "Majlis and occasional furniture", desc: "Seating used a few times a year and stored the rest of it." },
        { icon: "🔨", title: "Villa renovations", desc: "Long-held houses get refitted. Collected and returned room by room." },
      ],
      faqs: [
        {
          q: "Should I get a survey?",
          a: "For a Nad Al Sheba villa, yes. These are the largest average collections we do and a bedroom-count estimate is reliably short by a third once the garage and the outdoor furniture are counted. The survey is free and takes about half an hour.",
        },
        {
          q: "Can your vehicle get to my door?",
          a: "Usually, but tell us about the gate and the boundary wall. Many villas here have a gate a large vehicle cannot pass, which turns the job into a longer carry from the street — knowing in advance means the right vehicle and crew arrive.",
        },
      ],
      nearby: ["meydan", "al-warqa", "mirdif", "dubai-silicon-oasis"],
      keywords: "storage nad al sheba, villa storage nad al sheba, self storage nad al sheba dubai",
    },
    {
      slug: "al-warqa",
      name: "Al Warqa",
      headline: "Settled Villas and Flats Near Mirdif",
      blurb:
        "Al Warqa is a long-settled residential area next to Mirdif, and its storage is the storage of people who have not moved in years.",
      character: [
        "Al Warqa runs from Al Warqa 1 through 5 off Sheikh Mohammed Bin Zayed Road, next to Mirdif and near Mushrif Park, mixing family villas with mid-rise apartment buildings. It is one of the more settled parts of the city — families here have frequently been in the same property for a decade or more, and the population skews towards long-term residents rather than the two-year expat cycle.",
        "That means Al Warqa produces almost no lease-gap bookings and a great many accumulation ones. The typical job is a family that has run out of room rather than one that is moving: a spare bedroom being reclaimed, a garage being cleared, or a household storing the contents of a parent's home. Bookings run 40 to 120 square feet for a flat and 200 to 300 for a villa, and they run long — several years is unremarkable, and because there is no maximum term and no renewal, nothing needs revisiting. Access is generally straightforward with driveway or street parking, though the older apartment buildings in Al Warqa 1 have narrow stairwells and no service lift, which matters for wardrobes and sofas. Mushrif Park's weekend traffic is the one local scheduling factor worth planning around.",
      ],
      uses: [
        { icon: "🚪", title: "Reclaiming a spare room", desc: "The most common booking here. 25 to 40 square feet and a room back." },
        { icon: "📦", title: "A parent's household", desc: "Contents kept rather than dispersed, stored for as long as it takes to decide." },
        { icon: "🏡", title: "Villa garages", desc: "A decade of things in a space that was meant for a car." },
      ],
      faqs: [
        {
          q: "How long can I store for?",
          a: "As long as you like — there is no maximum term and nothing to renew. Several years is unremarkable here, and billing simply continues monthly on the same space at the same rate.",
        },
        {
          q: "My building in Al Warqa 1 has no service lift. Is that a problem?",
          a: "Not a problem, but tell us. The older buildings here have narrow stairwells and no lift, which changes the crew size and the time for wardrobes and large sofas — and occasionally means a piece has to be dismantled that would otherwise go whole.",
        },
      ],
      nearby: ["mirdif", "nad-al-sheba", "international-city", "al-qusais"],
      keywords: "storage al warqa dubai, self storage al warqa, al warqa villa storage",
    },
  ],
}
