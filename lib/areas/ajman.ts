import type { EmirateDef } from "./types"

/**
 * AJMAN — twelve service areas, ALL NEW IN ENGLISH.
 *
 * All twelve already existed in Arabic at /ar/locations/ajman/{area} and none
 * existed in English. The emirate hub page did exist in English but had no area
 * children at all, so the Arabic and English trees did not mirror and the
 * hreflang pairs could not resolve.
 *
 * Ajman HAS a warehouse (facilityKey "ajman", matching lib/facilities.ts), so
 * goods collected here are stored here. The address is not published yet —
 * pages say the facility exists and stop, which is what storageLocationSentence
 * does automatically. Fill in the address in lib/facilities.ts and every page
 * updates itself.
 */
export const AJMAN: EmirateDef = {
  slug: "ajman",
  name: "Ajman",
  facilityKey: "ajman",
  sampleDistricts: ["Al Nuaimiya", "Al Rashidiya"],
  university: "Ajman University",
  hub: {
    title: "Self Storage Ajman | Collected From Your Door, Stored In Ajman",
    description:
      "Self storage in Ajman from AED 12.65 per sq ft per month. We operate a warehouse in the emirate, collect from your address across twelve districts, and store locally.",
    keywords:
      "self storage ajman, storage ajman, storage units ajman, furniture storage ajman, تخزين عجمان",
    h1: "Self Storage in Ajman",
    blurb:
      "We operate a warehouse in Ajman, so what we collect in the emirate stays in the emirate. The crew comes to your address, wraps and loads, and brings it back whenever you ask.",
    intro: [
      "Ajman is where a great many people who work in Dubai and Sharjah actually live, and the flats reflect that: affordable, compact, and short of anywhere to put things. What is scarcer here than storage space is anyone who will come and collect — most published rates assume you will arrive with a truck and do the carrying yourself.",
      "We run it the other way round. Tell us roughly what you have, we come to your Ajman address, wrap and load, and store it at our facility in the emirate. Storage is AED 12.65 per square foot per month, VAT included, on the floor space your things actually occupy — and when you want any of it back, we bring it to you.",
    ],
    faqs: [
      {
        q: "Do you have a warehouse in Ajman?",
        a: "Yes. We operate a facility in Ajman, so goods collected in the emirate are stored in the emirate rather than driven to Dubai and back. On top of that we run the collection service — the crew comes to your address, wraps and loads, and takes everything to the facility.",
      },
      {
        q: "Which areas of Ajman do you collect from?",
        a: "All of them. Al Nuaimiya, Al Rashidiya, Al Jurf, the Corniche, Al Rumailah, Al Mowaihat, Al Hamidiya, Emirates City, the Free Zone, Al Bustan, Garden City and Al Zahra are all within normal collection range. If your area is not listed, send the address and we will confirm it.",
      },
      {
        q: "I am moving from Ajman to Dubai. Can you hold things in between?",
        a: "That is one of the most common reasons people here call. We empty the flat on the day you hand the keys back, hold everything for however long the gap runs, and deliver to the new address when you can receive it. No minimum term, so a fortnight is charged as a fortnight.",
      },
    ],
  },
  areas: [
    {
      slug: "al-nuaimiya",
      name: "Al Nuaimiya",
      headline: "Dense Towers on the Sharjah Side",
      blurb:
        "Al Nuaimiya is Ajman's densest tower district and it sits closest to Sharjah, which is why so many of its flats turn over every year.",
      character: [
        "Al Nuaimiya runs along Sheikh Khalifa Bin Zayed Street towards the Sharjah border, and it is the most built-up residential part of Ajman — towers rather than villas, one and two-bedroom flats, and a population that overwhelmingly works outside the emirate. That commute is the reason people live here, and it is also why the district turns over: a job change in Dubai or Sharjah usually means a move.",
        "Practically, collection in Al Nuaimiya is a building-access job. The towers along the main road have service lifts that need booking and loading areas with time limits, and several of the older buildings want notice through a management office rather than a concierge. Our crew arranges the permission and the slot. Volumes run 40 to 120 square feet for a typical flat, and the bookings skew short — three weeks to three months, bridging a lease gap across the emirate border. Because there is no minimum term, a seventeen-day gap costs seventeen days.",
      ],
      uses: [
        { icon: "🔑", title: "Lease gaps across the border", desc: "The Ajman tenancy ends before the Sharjah or Dubai one begins." },
        { icon: "🛋️", title: "Small flats, no store room", desc: "40 to 120 square feet is the typical whole-flat volume here." },
        { icon: "✈️", title: "Long trips home", desc: "Empty the flat rather than pay rent on it for a summer away." },
      ],
      faqs: [
        {
          q: "Do you handle the building permission in Al Nuaimiya?",
          a: "Yes. Most towers here want notice, a booked service lift and a loading slot, and several of the older buildings handle it through a management office rather than a concierge. Give us the building name and we arrange it directly.",
        },
        {
          q: "I am moving from Ajman to Sharjah. Do you cover both ends?",
          a: "Yes, and it is a route we run constantly — we have warehouses in both emirates. We empty the Ajman flat on your key-return date and deliver to the Sharjah address when it is ready, however far apart those dates are.",
        },
      ],
      nearby: ["al-rashidiya", "al-rumailah", "al-bustan", "al-hamidiya"],
      keywords: "storage al nuaimiya ajman, self storage al nuaimiya, furniture storage al nuaimiya",
    },
    {
      slug: "al-rashidiya",
      name: "Al Rashidiya",
      headline: "Central Ajman, Between the Corniche and the Souk",
      blurb:
        "Al Rashidiya is central Ajman — a mix of older buildings and newer towers, where the constraint is usually the street rather than the lift.",
      character: [
        "Al Rashidiya covers the central band of Ajman between the Corniche and the older souk area, taking in Al Rashidiya 1, 2 and 3. It mixes newer towers with a good deal of older mid-rise stock, and the households are more settled than Al Nuaimiya's — families who have been in the same flat for years rather than one-year renters.",
        "That means accumulation rather than turnover. The typical Al Rashidiya booking is a family reclaiming a room or clearing years of things from a three-bedroom flat, running 60 to 150 square feet and stored long. The older buildings are the access consideration: small or absent service lifts, narrow stairwells, and street parking rather than a bay, so the floor number is the thing that decides the crew size. Central Ajman's streets are also congested around the souk in the late afternoon and on Friday, so we schedule collections for the morning where we can.",
      ],
      uses: [
        { icon: "🚪", title: "Reclaiming a room", desc: "The guest bed and wardrobe out, the room back. 25 to 40 square feet." },
        { icon: "🏠", title: "Long-tenancy accumulation", desc: "Years of things in a flat with no spare room left." },
        { icon: "🪜", title: "Older buildings", desc: "Narrow stairwells and no lift. The floor matters more than the volume." },
      ],
      faqs: [
        {
          q: "My building has no service lift. Is that a problem?",
          a: "Not a problem, but tell us the floor when you book. In the older central buildings the collection becomes a carry, and the floor changes the crew size and the time considerably more than how much you are storing does.",
        },
        {
          q: "When is the best time of day for a collection here?",
          a: "The morning. Central Ajman around the souk gets congested in the late afternoon and on Friday, and a van that cannot park is a collection that has not started.",
        },
      ],
      nearby: ["al-nuaimiya", "corniche", "al-bustan", "al-rumailah"],
      keywords: "storage al rashidiya ajman, self storage al rashidiya, ajman central storage",
    },
    {
      slug: "al-jurf",
      name: "Al Jurf",
      headline: "Industrial Estates and Business Storage",
      blurb:
        "Al Jurf is Ajman's industrial belt, so most of what we collect here is stock, equipment and records rather than a household.",
      character: [
        "Al Jurf sits inland on the Ajman–Sharjah side, spanning Al Jurf Industrial 1, 2 and 3 alongside residential pockets. It is where the emirate's workshops, small manufacturers, trading companies and warehousing sit, and it is the commercial centre of gravity for Ajman.",
        "The bookings reflect that. Al Jurf is our most business-heavy Ajman district: seasonal stock that triples for two months and should not be occupying a leased unit for twelve, equipment between jobs, and company records being moved out of office space. The question that matters here is the movement pattern rather than the volume — goods that come in and out weekly are racked accessibly, goods that sit for a year are racked densely and cost less. Access is straightforward with loading bays and vehicle space. What we ask for in advance is the delivery note and the weight per pallet, because unannounced trucks and pallets that cannot be racked are the two things that waste a run.",
      ],
      uses: [
        { icon: "📦", title: "Seasonal business stock", desc: "Pay for the peak in the months it exists rather than for the whole year." },
        { icon: "🔧", title: "Equipment between jobs", desc: "Fuel drained and lithium batteries raised at booking, then stored indoors." },
        { icon: "📁", title: "Company records", desc: "Boxed and indexed offsite rather than filling office square footage." },
      ],
      faqs: [
        {
          q: "Do you take palletised goods from Al Jurf?",
          a: "Yes. Send the delivery note, pallet count and weight per pallet before the truck leaves. Unannounced deliveries and pallets that cannot be racked are the two things that waste a run, and both are preventable at your end.",
        },
        {
          q: "Should I rent a unit here instead?",
          a: "If people need to work inside it daily, or you are moving goods dozens of times a week, yes — rent. Below roughly 300 square feet held steadily, with a handful of movements a month, storage that flexes monthly is almost always cheaper once fit-out, cooling and staffing are counted.",
        },
      ],
      nearby: ["al-mowaihat", "emirates-city", "free-zone", "al-hamidiya"],
      keywords: "storage al jurf ajman, business storage al jurf, warehouse storage ajman, al jurf industrial storage",
    },
    {
      slug: "corniche",
      name: "Ajman Corniche",
      headline: "Waterfront Flats and Holiday Lets",
      blurb:
        "The Corniche is Ajman's waterfront, with a high share of short lets and second homes — and both produce a particular kind of storage.",
      character: [
        "The Ajman Corniche runs along the seafront from the Ajman Museum end past the hotels and the newer waterfront towers. It is the most visible part of the emirate and the housing mix is unusual: long-lease flats alongside a substantial number of holiday lets and second homes used part of the year.",
        "That produces bookings you do not see inland. Owners who let a flat furnished for part of the year need their own furniture held while somebody else's is in it, and there is a steady rhythm of it. There is also the seasonal reverse — furniture stored over the summer when a property is empty and returned for the cooler season when it is used. Volumes are moderate, 40 to 100 square feet, and the bookings are often recurring rather than one-off, which is worth setting up as a rotation from the start so the goods are racked accessibly. The specific local note is the sea air: metal fittings, hinges and mechanisms from waterfront properties corrode faster than inland ones, so items are wrapped with that in mind. Corniche traffic and parking are difficult on weekend evenings, so collections here are scheduled on weekday mornings.",
      ],
      uses: [
        { icon: "🏖️", title: "Furniture out while it is let", desc: "Your own furniture held while a tenant's is in the flat." },
        { icon: "🔁", title: "Seasonal rotations", desc: "Out for the summer, back for the cooler months. Racked for easy swaps." },
        { icon: "🧳", title: "Second homes", desc: "Part-year properties emptied between visits rather than left furnished." },
      ],
      faqs: [
        {
          q: "I let my flat furnished part of the year. Can you hold my furniture?",
          a: "Yes, and it is one of the steadier Corniche bookings. Say at the start that it is a recurring rotation and the goods are racked accessibly rather than densely, which makes each swap quick.",
        },
        {
          q: "Does the sea air affect stored items?",
          a: "It affects them before they reach us rather than after. Salt air corrodes metal fittings, hinges and mechanisms faster than inland air, so items from waterfront properties are wrapped with that in mind rather than treated as ordinary furniture.",
        },
      ],
      nearby: ["al-rashidiya", "al-nuaimiya", "al-rumailah", "al-bustan"],
      keywords: "storage ajman corniche, self storage corniche ajman, waterfront storage ajman",
    },
    {
      slug: "al-rumailah",
      name: "Al Rumailah",
      headline: "Family Flats and Villas Off the Main Road",
      blurb:
        "Al Rumailah is settled family housing where storage is nearly always about getting a room back rather than moving out.",
      character: [
        "Al Rumailah sits between the Corniche and the inland districts, covering Al Rumailah 1, 2 and 3 — a mix of family villas and mid-rise apartment buildings on quieter streets away from the main commercial roads. The households are long-settled, and a substantial share are families with children who have been in the same property for years.",
        "The storage need is straightforward and it is the same one over and over: a room is wanted for something else. A guest bedroom becomes a study or a nursery, and the bed, wardrobe and side tables go into storage — typically 25 to 40 square feet, stored for years because there is no reason to bring them back. There are also villa garage clearances, which are larger at 150 to 250 square feet. Access is easy compared with the tower districts: driveways or street parking, low-rise buildings, no lift procedures worth the name. The one thing worth flagging at booking is furniture assembled in place, which is common in the villas here and sometimes cannot come out whole.",
      ],
      uses: [
        { icon: "🚪", title: "Turning a bedroom into a study", desc: "The most common booking here. 25 to 40 square feet and a room back." },
        { icon: "🏡", title: "Villa garage clearances", desc: "150 to 250 square feet, and usually larger than expected." },
        { icon: "🛏️", title: "Children's furniture kept", desc: "Cots and beds held for a younger sibling rather than sold." },
      ],
      faqs: [
        {
          q: "Is it worth storing just a bed and a wardrobe?",
          a: "Yes, and it is the standard booking here. You are billed on the floor space those items occupy with no minimum term, so it is a small monthly figure — and considerably less than the alternative of not having the room.",
        },
        {
          q: "My wardrobe was built in the room. Can you take it?",
          a: "Usually, with the time allowed for. Furniture assembled in place is common in the villas here and sometimes cannot come out whole, so flag it at booking rather than on the day.",
        },
      ],
      nearby: ["al-rashidiya", "corniche", "al-nuaimiya", "garden-city"],
      keywords: "storage al rumailah ajman, self storage al rumailah, ajman family storage",
    },
    {
      slug: "al-mowaihat",
      name: "Al Mowaihat",
      headline: "Large Villas on Generous Plots",
      blurb:
        "Al Mowaihat is villa territory, and villa collections here are bigger than the bedroom count suggests because of the outbuildings.",
      character: [
        "Al Mowaihat spreads inland across Al Mowaihat 1, 2 and 3, an established area of large family villas on generous plots with wide streets, set back from the commercial corridors. It is largely Emirati and long-settled expat family housing.",
        "Collections here are the largest in Ajman: 250 to 400 square feet, most of a day, and the volume is not where people expect it. Villas in this area frequently have an outbuilding, an annexe or a covered majlis in addition to the garage, and between them those spaces routinely account for a third of the collection. A bedroom-count estimate comes in short here more reliably than anywhere else in the emirate, so we would rather survey — it is free and takes half an hour. Access is easy by vehicle, with driveways and wide streets, but many plots have a boundary wall and gate that a large vehicle cannot pass, which turns the last stretch into a carry. Summer loading is outdoors and unshaded, so these are scheduled as early starts.",
      ],
      uses: [
        { icon: "🏡", title: "Whole-villa clearances", desc: "250 to 400 square feet including the outbuildings. Survey territory." },
        { icon: "🪑", title: "Majlis and occasional seating", desc: "Used a few times a year, stored for the rest of it." },
        { icon: "🔨", title: "Villa renovations", desc: "Collected and returned room by room as the work moves through." },
      ],
      faqs: [
        {
          q: "Why do you want to survey rather than quote?",
          a: "Because Al Mowaihat villas have outbuildings, annexes and covered majlis areas that a bedroom count misses entirely, and those are routinely a third of the collection. The survey is free, takes about half an hour, and it is the difference between a crew that finishes in a day and one that does not.",
        },
        {
          q: "Can your vehicle get through my gate?",
          a: "Tell us the gate width. Many plots here have a boundary wall a large vehicle cannot pass, which makes the final stretch a carry — knowing beforehand means the right vehicle and crew size arrive.",
        },
      ],
      nearby: ["al-hamidiya", "al-jurf", "garden-city", "al-zahra"],
      keywords: "storage al mowaihat ajman, villa storage al mowaihat, self storage al mowaihat",
    },
    {
      slug: "al-hamidiya",
      name: "Al Hamidiya",
      headline: "Mixed Housing Near the Emirates Road",
      blurb:
        "Al Hamidiya sits by the Emirates Road, mixing villas and flats, and it is the easiest part of Ajman to reach quickly.",
      character: [
        "Al Hamidiya lies on the inland side of Ajman close to the Emirates Road interchange, mixing villa plots with apartment buildings. Its position by the highway is the defining practical fact — it is the quickest part of the emirate to reach and to leave, which makes short-notice collections genuinely easier here than in the congested central districts.",
        "The housing mix means the bookings vary more than elsewhere: villa clearances of 200 to 300 square feet alongside flat bookings of 40 to 100. A meaningful share of residents work in Dubai and chose Al Hamidiya specifically for the highway access, so lease-gap bookings tied to a Dubai job change are common. Access is generally straightforward with parking available, though a few of the apartment buildings have no service lift and the floor number decides the crew. The highway proximity also means noise and traffic are not a scheduling constraint the way central Ajman's souk streets are — a morning or an afternoon collection works equally well here.",
      ],
      uses: [
        { icon: "🚗", title: "Short-notice collections", desc: "The quickest part of Ajman to reach. Same or next day is realistic." },
        { icon: "🔑", title: "Dubai job changes", desc: "A commute-driven area, so lease gaps follow employment rather than the calendar." },
        { icon: "🏡", title: "Mixed villa and flat work", desc: "200 to 300 square feet for a villa, 40 to 100 for a flat." },
      ],
      faqs: [
        {
          q: "How quickly can you collect from Al Hamidiya?",
          a: "It is the quickest part of Ajman for us to reach, so same-day for a small flat and next-day for most things is realistic. Villa collections still want a day or two of notice so the right crew is allocated.",
        },
        {
          q: "Does it matter what time of day you come?",
          a: "Less here than in central Ajman. The highway access means neither morning nor afternoon is materially worse, so we can usually fit the window you want.",
        },
      ],
      nearby: ["al-mowaihat", "al-jurf", "al-nuaimiya", "al-zahra"],
      keywords: "storage al hamidiya ajman, self storage al hamidiya, ajman emirates road storage",
    },
    {
      slug: "emirates-city",
      name: "Emirates City",
      headline: "Towers, Some Still Filling Up",
      blurb:
        "Emirates City is high-rise development off the Emirates Road, some of it long completed and some of it still filling — which changes the job.",
      character: [
        "Emirates City sits inland off the Emirates Road, a cluster of residential towers built as an investment-led development. Occupancy varies markedly from building to building: some towers are long settled, others are still filling, and a few have management arrangements that are newer than the buildings themselves.",
        "That inconsistency is the thing to plan for. Service lift availability, loading arrangements and who to ask for permission differ substantially between towers here in a way they do not in Al Nuaimiya, so we ask for the tower name specifically rather than the district. Flats are mostly one and two-bedroom with volumes of 40 to 120 square feet, and the population is heavily commuter — Dubai and Sharjah workers who chose Emirates City for the price — which means lease-gap bookings tied to job changes rather than a seasonal cycle. The area is quick to reach from the Emirates Road, so short-notice collections are workable.",
      ],
      uses: [
        { icon: "🏢", title: "Tower flats", desc: "40 to 120 square feet, with the lift arrangement confirmed per building." },
        { icon: "🔑", title: "Commuter lease gaps", desc: "Job changes in Dubai and Sharjah, not a seasonal pattern." },
        { icon: "📦", title: "Investment flats between tenants", desc: "Furniture held between lets rather than left in an empty unit." },
      ],
      faqs: [
        {
          q: "Why do you need the tower name rather than just the area?",
          a: "Because Emirates City buildings differ a lot. Service lift availability, loading arrangements and who grants permission vary tower to tower here in a way they do not in the older districts, and we would rather confirm yours in advance than discover it.",
        },
        {
          q: "Can you collect at short notice?",
          a: "Usually yes — the Emirates Road access makes this a quick area to reach. The variable is the building's own procedure, which is why we ask which tower before confirming a same-day slot.",
        },
      ],
      nearby: ["al-jurf", "al-zahra", "al-mowaihat", "free-zone"],
      keywords: "storage emirates city ajman, self storage emirates city, ajman towers storage",
    },
    {
      slug: "free-zone",
      name: "Ajman Free Zone",
      headline: "Licensed Companies With No Premises",
      blurb:
        "Ajman Free Zone licences frequently come with a flexi-desk and nowhere to put anything. This is where the stock goes.",
      character: [
        "Ajman Free Zone sits by the port on the western side of the emirate, and it licenses a very large number of small trading, e-commerce and service companies — many of them on flexi-desk packages with no physical premises attached at all.",
        "That is precisely the gap this serves. A licensed company with no warehouse still receives stock, still accumulates records, and still needs somewhere for samples and equipment that is not a director's spare room. We receive inbound shipments with notice, hold goods against your own references, and release quantities on request — normally within 24 to 48 hours. Two things are worth stating plainly. First, storage is not a licensed premises and cannot be registered as one; if your licence requires physical space, storage does not satisfy that. Second, our facilities are ordinary commercial warehouses rather than bonded free-zone space, so if your model involves re-export under a customs suspension, take advice specific to your licence before storing anywhere. For a company selling domestically, none of that applies and the arrangement is straightforward.",
      ],
      uses: [
        { icon: "📦", title: "Stock for flexi-desk companies", desc: "Received with notice, held against your references, released on request." },
        { icon: "📁", title: "Company records", desc: "A licensed company generates paper whether or not it has an office." },
        { icon: "🎪", title: "Marketing and exhibition kit", desc: "Stands and collateral between shows, for the trade-fair circuit." },
      ],
      faqs: [
        {
          q: "Can I use your warehouse as my licensed address?",
          a: "No. Storage is not a licensed premises and cannot be registered as one in any free zone. We hold goods and release them on request; if your licence requires physical premises, that is a separate requirement storage does not meet.",
        },
        {
          q: "Are you inside the free zone for customs purposes?",
          a: "No — these are ordinary commercial warehouses, not bonded free-zone space. For a company selling domestically that is the simpler arrangement. If your model involves re-export or duty suspension, take advice specific to your licence and goods before storing anywhere.",
        },
      ],
      nearby: ["al-jurf", "emirates-city", "al-bustan", "al-mowaihat"],
      keywords: "ajman free zone storage, storage for free zone company ajman, business storage ajman free zone",
    },
    {
      slug: "al-bustan",
      name: "Al Bustan",
      headline: "Central Flats, Older Stock, Tight Streets",
      blurb:
        "Al Bustan is central Ajman apartment living in older buildings, where the practical constraint is getting the van close enough.",
      character: [
        "Al Bustan sits in the central band of Ajman near the older commercial streets, made up largely of mid-rise apartment buildings of an earlier generation with ground-floor retail beneath many of them. The flats are family-sized and the tenancies are long.",
        "The defining constraint is the street rather than the building. Ground-floor shops mean the frontage is busy with deliveries and parked vehicles for most of the working day, and there is rarely a dedicated loading bay — so getting a vehicle close enough is the first problem, and it is why we schedule Al Bustan collections early in the morning before the retail day begins. Inside, the buildings tend to have small or no service lifts and narrow stairwells, making the floor number the main driver of crew size and time. Volumes run 60 to 150 square feet for a family flat, stored long because the bookings are accumulation rather than moves.",
      ],
      uses: [
        { icon: "🌅", title: "Early-morning collections", desc: "Before the retail frontage fills. The single biggest factor here." },
        { icon: "🪜", title: "Walk-up family flats", desc: "60 to 150 square feet, with the floor deciding the crew size." },
        { icon: "🏠", title: "Long-tenancy accumulation", desc: "Years of things in flats that were never designed with storage." },
      ],
      faqs: [
        {
          q: "Why do you want to come early?",
          a: "Because of the ground-floor retail. From mid-morning the frontage fills with shop deliveries and parked vehicles and there is rarely a dedicated bay, so an early start is the difference between parking outside and carrying from down the street.",
        },
        {
          q: "There is no lift in my building. What does that change?",
          a: "The crew size and the time, not whether we can do it. Tell us the floor when you book — in these older buildings it matters more than how much you are storing.",
        },
      ],
      nearby: ["al-rashidiya", "al-nuaimiya", "corniche", "free-zone"],
      keywords: "storage al bustan ajman, self storage al bustan, ajman central flats storage",
    },
    {
      slug: "garden-city",
      name: "Garden City",
      headline: "Villa Compounds and Family Housing",
      blurb:
        "Garden City is compound villa living, where the gate procedure matters and the collections are family-sized.",
      character: [
        "Garden City is a residential district of villa compounds and family housing set inland from the Corniche, laid out in gated groupings rather than open streets. The households are settled families, frequently with several years in the same villa.",
        "The compound layout is the practical detail that separates Garden City from the open villa districts. Access generally requires the vehicle and crew registered with the compound's own security or management in advance — not the emirate-wide procedure of a large gated community, but a building-level arrangement that still has to be made before the day. Internal roads are narrow and turning space for a large vehicle is limited, so we ask about the approach as well as the villa number. Collections are family-sized at 200 to 300 square feet, with the garage and any store room carrying more than expected, and they are usually a full morning to a full day. Outdoor loading in summer is unshaded, so early starts are the norm.",
      ],
      uses: [
        { icon: "🚪", title: "Compound access, arranged", desc: "Registered with compound security in advance rather than at the gate." },
        { icon: "🏡", title: "Family villa clearances", desc: "200 to 300 square feet, usually a full morning or day." },
        { icon: "📦", title: "Garage and store rooms", desc: "Consistently larger than the household expects." },
      ],
      faqs: [
        {
          q: "Do you need compound approval?",
          a: "Yes. Garden City compounds generally require the vehicle and crew registered with their own security or management before the day. Tell us the compound name and villa number when booking and it is arranged rather than negotiated at the gate.",
        },
        {
          q: "The internal roads are narrow. Is that an issue?",
          a: "Only if we do not know. Turning space for a large vehicle is limited in some compounds here, so tell us about the approach and we send a vehicle that fits rather than one that has to park outside and carry.",
        },
      ],
      nearby: ["al-mowaihat", "al-rumailah", "al-zahra", "al-rashidiya"],
      keywords: "storage garden city ajman, villa storage garden city, self storage garden city ajman",
    },
    {
      slug: "al-zahra",
      name: "Al Zahra",
      headline: "Newer Housing Inland, Still Being Furnished",
      blurb:
        "Al Zahra is newer inland housing, and a good share of the work here is furniture waiting for a home to be ready rather than leaving one.",
      character: [
        "Al Zahra lies inland towards the Emirates Road, one of Ajman's newer residential districts with a mix of villas and recent apartment buildings, still filling in around its edges. The households skew towards families who have recently moved in rather than long-settled ones.",
        "That produces a higher share of inbound work than anywhere else in Ajman. People completing on a villa or moving into a new-build flat need their previous furniture held while a handover slips or a fit-out finishes, then delivered back — often in stages as rooms are completed. Monthly billing with no fixed end date suits that exactly, because a handover that moves by six weeks costs six weeks and nothing more. Volumes run 60 to 120 square feet for flats and 200 to 320 for villas. Two local practicalities: some of the newer streets are not on mapping yet, so we ask for a plot or villa number and a landmark; and the newer apartment buildings have move-in procedures that are strict but not widely published, so we confirm them with management rather than assume.",
      ],
      uses: [
        { icon: "🏗️", title: "Handovers that slip", desc: "Held with no fixed end date and delivered back as rooms are finished." },
        { icon: "📦", title: "Previous furniture kept", desc: "Held while the new home is furnished properly rather than sold at a loss." },
        { icon: "🏢", title: "New-build move-ins", desc: "Strict but unpublished building procedures, confirmed in advance." },
      ],
      faqs: [
        {
          q: "My street is not on maps yet. What do you need?",
          a: "A plot or villa number and a nearby landmark. Several of the newer Al Zahra streets have not made it onto mapping, and a crew looking for an address is time on your quote.",
        },
        {
          q: "My handover keeps moving. Does that cost extra?",
          a: "Only the extra weeks. Billing is monthly with no fixed end date and nothing to renegotiate, which is exactly why storage suits a handover that slips.",
        },
      ],
      nearby: ["al-mowaihat", "garden-city", "emirates-city", "al-hamidiya"],
      keywords: "storage al zahra ajman, self storage al zahra, ajman new build storage",
    },
  ],
}
