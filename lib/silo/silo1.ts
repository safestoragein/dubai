import type { SiloPageContent } from "./types"

/**
 * SILO 1 · /self-storage-dubai/* — the twelve pages the hub was missing.
 *
 * The six that shipped first (money page, prices, short-term, storage-units,
 * unit-sizes, how-it-works) keep their hand-written route files; these are the
 * rest of the nineteen in §5 of the plan.
 *
 * KEYWORD OWNERSHIP. Five of these URLs were already named as owners in
 * scripts/keyword-audit.mjs before the pages existed, so that audit was
 * pointing at 404s: near-me, long-term, monthly-storage, storage-room and
 * storage-space-for-rent. Creating them here is what makes the register true.
 *
 * ⚠ /secure-storage — the site already ranks #4 for `safe and secure storage`
 * (KD 9) with some existing URL. Gate 5 of the plan: identify that URL and 301
 * it here in the same deployment, or the ranking is lost. Not yet done; the
 * redirect is missing from next.config.mjs on purpose rather than guessed.
 *
 * ⚠ /insurance — deliberately states NO cover level. lib/company-facts.ts
 * records none, and an invented liability figure is a commercial promise the
 * business would be held to. The page says what is verifiable (wrapping,
 * indoor storage, signed inventory, CCTV) and tells the reader to get the cover
 * position in writing. Do not "improve" this by adding a number.
 */

export const SILO1_PAGES: SiloPageContent[] = [
  /* ---------------------------------------------------------------- near-me */
  {
    silo: "s1",
    path: "/self-storage-dubai/near-me",
    crumb: "Self Storage Near Me",
    navLabel: "Self storage near me",
    navBlurb: "Why the nearest facility matters less than you think in Dubai.",
    title: "Self Storage Near Me — Dubai Collection From Your Door",
    description:
      "Searching self storage near me in Dubai? We collect from your address instead, so the distance to the warehouse stops being your problem. Pay only for the space you use.",
    keywords:
      "self storage near me, storage units near me, storage near me, storage facility near me dubai, self storage near me dubai, storage close to me",
    ogTitle: "Self Storage Near Me — We Come To You Instead",
    h1: "Self Storage Near Me — We Come To You",
    hero: [
      "Almost everyone typing *self storage near me* is solving a transport problem, not a location problem: you want the shortest distance between your flat and wherever your things end up, because you are the one driving it. That is the part of [self storage in Dubai](/self-storage-dubai) we removed.",
      "Our crew comes to your address, wraps your furniture, carries it down and loads it. Once that is true, how far the warehouse is stops being a number you have to care about. You pay only for **the floor space your items occupy**, with transport quoted separately and both numbers agreed before anything is booked.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What “near me” actually costs you in Dubai",
        paras: [
          "The yards in Al Quoz, Ras Al Khor, DIP and Umm Ramool are cheap per sq ft because they sit on industrial land. That is fine for the operator; it is less fine at 7am on a Friday when you are making the trip.",
          "Price the whole job, not the rate: a 1BHK move to a self-drive unit is a van hire, fuel, Salik, friends who expect lunch and most of a day — then a shortened version every time you need something back. And in this city most towers want the service lift booked in advance, with the vehicle and crew registered at the gate.",
          "If you want a space you hold a key to and can visit unannounced at midnight, a nearby yard genuinely suits you better and we would rather say so. If you want your things out of the flat and safely somewhere, [how the collection works](/how-it-works) is the shorter path.",
        ],
      },
      {
        kind: "table",
        h2: "Nearest yard vs collected storage",
        intro: "The same 1BHK, about 75 sq ft of goods, held for three months.",
        columns: ["What you compare", "Self-drive unit nearby", "Collected storage"],
        rows: [
          ["Getting it there", "Van hire, fuel, your day, usually two trips", "Crew arrives at your door on the agreed date"],
          ["Wrapping and lifting", "Yours, plus whoever you can persuade", "Included — wrapped before it leaves"],
          ["Service lift booking", "You arrange it with the building", "We arrange it with the collection"],
          ["What you pay for", "A fixed size, whether you fill it or not", "The floor space your items occupy"],
          ["Getting one box back", "Drive there, find it, drive home", "Delivered, normally in 24–48 hours"],
        ],
        note: "Neither column is wrong — they suit different people. What they are not is the same product at a different price.",
      },
      {
        kind: "prose",
        h2: "Where we actually collect from",
        paras: [
          "All of Dubai, plus Sharjah and Ajman where we also operate warehouses, and Abu Dhabi and the Northern Emirates as a collection service. The [areas by emirate](/locations) have the access detail that matters locally.",
          "Collection is priced on your address and its access, not on distance to the warehouse — a ground-floor villa and a ninth-floor flat are not the same job even on the same street. If your area is not listed, send the address anyway.",
        ],
      },
      {
        kind: "steps",
        h2: "What happens after you stop searching",
        items: [
          { h: "Tell us roughly what you have", p: "Bedroom count is enough. A photo of the room helps more than a list." },
          { h: "You get both figures", p: "Monthly storage and one-off transport, before anything is committed. [What storage costs](/self-storage-dubai/prices) covers the storage half." },
          { h: "We collect", p: "A studio is two to three hours, a 1BHK three to five, a villa most of a day." },
          { h: "You get it back", p: "All of it or one box, to any address, normally within 24–48 hours of asking." },
        ],
      },
    ],
    faqs: [
      {
        q: "Where is your nearest storage facility to me?",
        a: "Our Dubai warehouse is in DIP-1, and we also operate facilities in Sharjah and Ajman. The distance is not something you need to plan around: our crew does the driving in both directions.",
      },
      {
        q: "Can I just drive my things to you myself?",
        a: "You can, and some customers do. The price is the same either way, because you are billed on the space your items occupy rather than on the transport.",
      },
      {
        q: "Can I visit my belongings?",
        a: "Yes, by arrangement rather than by turning up — your things are in a working warehouse. Tell us when you would like to come and we will have your items pulled and ready.",
      },
      {
        q: "How quickly can you collect?",
        a: "Across most of Dubai, same day for a 2BHK or smaller if you call before midday. Villa loads want a day or two of notice, and late June and August book out about a week ahead.",
      },
      {
        q: "Do you cover Sharjah, Ajman and Abu Dhabi?",
        a: "Yes. We operate warehouses in Dubai, Sharjah and Ajman. Abu Dhabi and the Northern Emirates are served as a collection service, with storage at the nearest facility.",
      },
    ],
    serviceType: "Self storage collection",
    cta: {
      h2: "Stop looking for the nearest one",
      p: "Send us your area and roughly what needs storing. You will have both numbers the same day.",
    },
    siblings: [
      "/self-storage-dubai/local-self-storage",
      "/self-storage-dubai/prices",
      "/self-storage-dubai/secure-storage",
      "/self-storage-dubai/storage-room",
    ],
  },

  /* -------------------------------------------------------------- long-term */
  {
    silo: "s1",
    path: "/self-storage-dubai/long-term",
    crumb: "Long Term Storage",
    navLabel: "Long term storage",
    navBlurb: "Six months to several years, packed and racked for the duration.",
    title: "Long Term Storage Dubai | 6 Months to Several Years",
    description:
      "Long term storage in Dubai, billed on the space you use. Packed for the duration, racked off the floor, no maximum term and no annual renewal to negotiate.",
    keywords:
      "long term storage dubai, long term storage, storage for a year dubai, extended storage dubai, annual storage dubai, storage while abroad dubai",
    ogTitle: "Long Term Storage in Dubai — Packed For The Duration",
    h1: "Long Term Storage in Dubai",
    hero: [
      "A long booking is not a short booking that went on longer: it is packed, racked and priced differently, and getting that wrong at collection is what people regret eighteen months later. This is the long-stay end of [self storage in Dubai](/self-storage-dubai).",
      "There is no maximum term and no renewal to renegotiate. Billing stays monthly, **on the space your goods occupy**, and you can end or change it at any point without a penalty.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What changes when the booking is long",
        paras: [
          "**Packing gets more thorough.** Over a fortnight a blanket over a sofa is fine; over two years it is not. Upholstery is fully wrapped and sealed, mattresses get covers, and anything with a fabric surface goes off the floor and away from a wall.",
          "**Stacking is planned around access.** A dense stack is cheap and awkward to reach into, so we leave a lane — slightly more floor space, and a genuinely irritating afternoon saved later.",
          "**The inventory matters more.** Over three weeks you remember what you stored; over three years you do not. Everything is logged at collection, which is what makes a partial retrieval two years on a phone call rather than a search.",
          "If your dates are closer to weeks than years, [short term storage](/self-storage-dubai/short-term) describes how those bookings run instead.",
        ],
      },
      {
        kind: "cards",
        h2: "Who books long term storage",
        intro: "Four situations account for most of it.",
        items: [
          { icon: "✈️", h: "Posted abroad, coming back", p: "A two or three year contract elsewhere. Shipping a flat twice costs multiples of storing it once." },
          { icon: "🏠", h: "Sold before you bought", p: "The sale completed, the purchase has not. Storage bridges it without forcing a rental you do not want." },
          { icon: "📁", h: "Records you must keep", p: "Company records with a mandated retention period. [Business storage](/business-storage-dubai) covers archives properly." },
          { icon: "🛋️", h: "Furniture worth keeping", p: "A commissioned table or an inherited piece that does not fit the current place but is not going anywhere." },
        ],
      },
      {
        kind: "table",
        h2: "What a long booking costs to hold",
        intro: "The rate does not change with the term — you are billed on the space used. What changes is that transport becomes a small share of the total.",
        columns: ["Home size", "Typical space", "Transport over a 2-year total"],
        rows: [
          ["Studio", "~30 sq ft", "Meaningful — worth packing tightly"],
          ["1 bedroom", "60–90 sq ft", "Small once spread over 24 months"],
          ["2 bedroom", "120–150 sq ft", "Small"],
          ["3 bedroom villa", "240–270 sq ft", "Negligible against the holding cost"],
        ],
        note: "The lever that moves a long-term bill is volume, not rate. [The size guide](/self-storage-dubai/unit-sizes) is the honest way to work out what you are really storing.",
      },
      {
        kind: "checklist",
        h2: "Before you store something for years",
        intro: "Five things that are easy at collection and irritating afterwards.",
        items: [
          "Empty and dry every appliance — residual water is the commonest cause of a bad smell on return.",
          "Take the batteries out of everything. Leaked alkaline ruins remotes, torches, toys and clocks.",
          "Keep passports, Emirates ID, contracts and deeds with you, not in a box.",
          "Photograph anything valuable before it is wrapped, and say so on the quote.",
          "Tell us which cartons you might want early, so they are racked where they can be reached.",
        ],
        note: "Some things cannot be stored at all — [prohibited items](/self-storage-dubai/prohibited-items) has the list, and it is short but not obvious.",
      },
    ],
    faqs: [
      {
        q: "What is the longest I can store for?",
        a: "There is no maximum. Nothing needs renewing or renegotiating to continue — billing simply carries on monthly at the same rate on the same space.",
      },
      {
        q: "Is long term storage cheaper per month?",
        a: "The rate is the same whatever the term. A long booking works out cheaper because the one-off transport is spread over many more months, and a well-packed load occupies less floor space than a hurried one.",
      },
      {
        q: "Can I get things out during a long booking?",
        a: "Yes, and long bookings are racked with that in mind. Partial retrieval is normally arranged within 24 to 48 hours and does not change the booking.",
      },
      {
        q: "Will my furniture survive a Dubai summer in storage?",
        a: "Goods are stored indoors in a covered warehouse and kept off the floor, not in a yard or a shipping container. Wrapping is done before items leave your property, so nothing is packed with dust already on it.",
      },
      {
        q: "What if I am out of the country and need something?",
        a: "You can authorise someone else to receive a delivery — tell us who, and we deliver to the address you nominate. This is common with long bookings.",
      },
    ],
    serviceType: "Long term storage",
    cta: {
      h2: "Storing something for a year or more?",
      p: "Tell us the term as well as the size. It changes how we pack it, and that is the part that matters over years.",
    },
    siblings: [
      "/self-storage-dubai/short-term",
      "/self-storage-dubai/prices",
      "/self-storage-dubai/unit-sizes",
      "/self-storage-dubai/climate-controlled",
    ],
  },

  /* ------------------------------------------------ storage-space-for-rent */
  {
    silo: "s1",
    path: "/self-storage-dubai/storage-space-for-rent",
    crumb: "Storage Space For Rent",
    navLabel: "Storage space for rent",
    navBlurb: "Space by the square foot, without renting a warehouse you half fill.",
    title: "Storage Space For Rent in Dubai | Pay By The Square Foot",
    description:
      "Storage space for rent in Dubai, by the square foot. Rent the space your goods occupy rather than a fixed unit, with no lease and no minimum term.",
    keywords:
      "storage space for rent in dubai, storage space for rent, rent storage space dubai, storage space dubai, warehouse space for rent dubai small, storage area for rent dubai",
    ogTitle: "Storage Space For Rent in Dubai — By The Square Foot",
    h1: "Storage Space For Rent in Dubai",
    hero: [
      "Renting storage space in Dubai normally means signing for a fixed area whether or not you fill it. We rent it by the square foot your goods actually occupy — the part of [self storage in Dubai](/self-storage-dubai) people find hardest to believe until the first invoice.",
      "No lease, no Ejari, no minimum term. You are billed monthly **on measured floor space**, and that figure moves when what you store moves.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "By the foot, not by the unit",
        paras: [
          "A conventional rental works in fixed sizes — 25 sq ft, 50, 100 — and almost nobody fits neatly. You take the 100 because 50 was slightly too small, then pay for 100 all booking.",
          "We measure what your goods occupy once racked and bill that: a 2BHK that comes to 138 sq ft is billed as 138. Take half of it back and the bill drops the following month. [The size guide](/self-storage-dubai/unit-sizes) estimates it before we come.",
        ],
      },
      {
        kind: "table",
        h2: "What renting different amounts of space looks like",
        intro: "The same rate throughout. The right column is what people are usually storing at that size.",
        columns: ["Space", "Roughly equivalent to", "Why people rent it"],
        rows: [
          ["25–40 sq ft", "A studio, or 15–20 cartons", "A room during a renovation, or seasonal items"],
          ["60–90 sq ft", "A one-bedroom flat", "A lease gap, a posting abroad, a flat let furnished"],
          ["120–150 sq ft", "A two-bedroom flat", "A family move, or a household between properties"],
          ["240–270 sq ft", "A three-bedroom villa", "A villa handover, a sale completed before a purchase"],
          ["300 sq ft +", "Small warehouse territory", "Business stock, event equipment, archived records"],
        ],
        note: "Above roughly 300 sq ft, [business storage](/business-storage-dubai) is the better starting page.",
      },
      {
        kind: "checklist",
        h2: "What the rent includes",
        items: [
          "Collection from your address, wrapping and loading",
          "Transport, quoted as its own figure before you book",
          "An itemised inventory, signed at collection",
          "Indoor racked storage under multi-angle CCTV",
          "Delivery back to whichever address you nominate",
        ],
        note: "Not included: a key you hold and unannounced access. Visits are arranged in advance so your items can be pulled and reached — [how access works](/self-storage-dubai/24-hour-access).",
      },
      {
        kind: "steps",
        h2: "Renting space, start to finish",
        items: [
          { h: "Estimate", p: "Bedroom count or a photo of the room is enough." },
          { h: "Two numbers", p: "Storage per month and one-off transport, before you commit." },
          { h: "Collection and measure", p: "We wrap, load and rack it. The measured space is the bill." },
          { h: "Adjust whenever", p: "Add or take away and the monthly figure follows. See [monthly billing](/self-storage-dubai/monthly-storage)." },
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a minimum amount of space I have to rent?",
        a: "No. Ten boxes is a normal booking and is billed as ten boxes' worth of floor space.",
      },
      {
        q: "Do I sign a lease or a tenancy contract?",
        a: "No lease, no Ejari and no fixed term. It is a monthly service agreement, and the space you occupy can go up or down without a new one.",
      },
      {
        q: "How do you measure the space I am renting?",
        a: "By the floor area your goods occupy once racked, including how they are stacked. You are told the figure after collection, and it is what appears on the invoice.",
      },
      {
        q: "What if I need more space suddenly?",
        a: "Nothing needs renegotiating — we collect the extra items as their own job and the stored volume increases from that month.",
      },
      {
        q: "Can I rent storage space for my business?",
        a: "Yes: stock, records, event equipment and retail overflow are all normal. Bookings needing pallet handling are better set up through the business storage side.",
      },
    ],
    serviceType: "Storage space rental",
    cta: {
      h2: "Rent exactly the space you need",
      p: "Send a rough volume and your area. You will get the monthly figure and the transport figure the same day.",
    },
    siblings: [
      "/self-storage-dubai/monthly-storage",
      "/self-storage-dubai/storage-room",
      "/self-storage-dubai/unit-sizes",
      "/self-storage-dubai/prices",
    ],
  },

  /* ------------------------------------------------------- monthly-storage */
  {
    silo: "s1",
    path: "/self-storage-dubai/monthly-storage",
    crumb: "Monthly Storage",
    navLabel: "Monthly storage",
    navBlurb: "Rent storage month to month, with nothing to cancel and no lock-in.",
    title: "Rent Storage in Dubai Monthly | No Lock-In, No Minimum",
    description:
      "Rent storage in Dubai month to month. Billed on the space used, cancel any month, no deposit and no minimum term.",
    keywords:
      "rent storage dubai, monthly storage dubai, storage monthly rental dubai, month to month storage dubai, storage per month dubai, rent a storage unit monthly dubai",
    ogTitle: "Rent Storage in Dubai — Month To Month",
    h1: "Rent Storage in Dubai, Month To Month",
    hero: [
      "Month to month is how every booking here works, not an option you upgrade to: no minimum term, no lock-in and no cancellation fee anywhere in [self storage in Dubai](/self-storage-dubai) as we run it.",
      "You are billed **on the floor space your goods occupy**. Take half of it back in March and April is billed on what is left. End it entirely and you tell us, and it ends — which matters in a city where handovers move and visas take longer than promised.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What monthly actually means here",
        paras: [
          "**No minimum term.** A fortnight is a fortnight. There is no six-month floor — the thing most people are really checking for.",
          "**No exit penalty.** Ending costs nothing beyond the final delivery, quoted like any other transport job.",
          "**No fixed size.** The billed space follows the goods, up or down, with nothing renegotiated and no new agreement to sign. [Storage space for rent](/self-storage-dubai/storage-space-for-rent) frames the same thing as a space rental.",
        ],
      },
      {
        kind: "table",
        h2: "What a month costs, by what you are storing",
        intro: "One rate throughout, on measured space. Transport is separate, quoted on your address and access.",
        columns: ["What you are storing", "Typical space", "What decides the final figure"],
        rows: [
          ["10–20 cartons", "15–25 sq ft", "How well they stack — sealed cartons do, loose items do not"],
          ["Studio contents", "~30 sq ft", "Whether the mattress and wardrobe come too"],
          ["1BHK contents", "60–90 sq ft", "Sofa size, and whether appliances are included"],
          ["2BHK contents", "120–150 sq ft", "Wardrobes, and how much is boxed rather than loose"],
          ["3BHK villa contents", "240–270 sq ft", "Garden and garage items, usually underestimated"],
        ],
        note: "Boxing loose items yourself is the one thing that reliably lowers a monthly bill. [The price breakdown](/self-storage-dubai/prices) works through the rest.",
      },
      {
        kind: "prose",
        h2: "When month to month is the wrong choice",
        paras: [
          "Rarely, but honestly: if you know for certain you are storing for two or three years and will never need access, an operator who discounts hard for a long fixed commitment is a real alternative. [Long term storage](/self-storage-dubai/long-term) is how we handle multi-year bookings without asking for that commitment.",
          "The other case is wanting unaccompanied access at 2am to a space you hold the key to. That is a different product, and a nearby yard does it better.",
        ],
      },
      {
        kind: "checklist",
        h2: "What you are not charged for",
        items: [
          "The quote, and the survey if one is needed",
          "Wrapping materials used during collection",
          "Loading, carrying and the service-lift arrangements",
          "Changing the amount you store, up or down",
          "Ending the booking",
        ],
        note: "What is charged: the monthly storage on measured space, and each transport job. Both are quoted before they happen, and the quoted figure is the figure billed.",
      },
    ],
    faqs: [
      {
        q: "Is there really no minimum storage period?",
        a: "There is none. The shortest bookings we take run a fortnight, usually because an Ejari ended before the next lease started.",
      },
      {
        q: "How much notice do I need to give to end it?",
        a: "Enough to schedule the delivery, which in practice is a couple of days. There is nothing to serve and no early-termination charge; the only cost is the delivery job itself.",
      },
      {
        q: "Do you charge a deposit?",
        a: "No deposit is taken, because you are not holding a fixed space. Billing is monthly in arrears on measured space.",
      },
      {
        q: "Can I pay for several months up front?",
        a: "Yes, if you prefer. It does not change the rate and it does not lock you in — an unused balance is carried or refunded if the booking ends early.",
      },
      {
        q: "If I add items mid-month, when does the price change?",
        a: "From the following month's invoice, on the new measured space. You are not back-billed for the part-month, and the extra collection is quoted as its own job.",
      },
    ],
    serviceType: "Monthly storage rental",
    cta: {
      h2: "Book a month and see",
      p: "There is nothing to cancel if it does not suit you. Send us your area and roughly what needs storing.",
    },
    siblings: [
      "/self-storage-dubai/storage-space-for-rent",
      "/self-storage-dubai/short-term",
      "/self-storage-dubai/long-term",
      "/self-storage-dubai/prices",
    ],
  },

  /* ----------------------------------------------------------- storage-room */
  {
    silo: "s1",
    path: "/self-storage-dubai/storage-room",
    crumb: "Storage Room",
    navLabel: "Storage room",
    navBlurb: "The extra room your Dubai flat does not have, without moving house.",
    title: "Storage Room in Dubai | The Spare Room Your Flat Doesn't Have",
    description:
      "Need a storage room in Dubai? We collect what does not fit, store it indoors, billed only on the space it uses, and bring back whatever you ask for in 24–48 hours.",
    keywords:
      "storage room dubai, storage room for rent dubai, extra room storage dubai, store room dubai, spare room storage dubai, box room storage dubai",
    ogTitle: "A Storage Room in Dubai, Without Moving House",
    h1: "A Storage Room in Dubai — Without the Bigger Flat",
    hero: [
      "Most people searching for a storage room in Dubai are running a quiet arithmetic: the flat is one room short, and the next size up costs tens of thousands of dirhams a year more. Storage is the cheaper half of that equation — the everyday use of [self storage in Dubai](/self-storage-dubai).",
      "You do not rent a room. You store the contents of one — the guest bed nobody sleeps in, the boxes in the hallway, the suitcases on top of the wardrobe — and get the floor space back, **paying only for the space your items use**.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The Dubai version of this problem",
        paras: [
          "Dubai flats are short of everything that absorbs clutter elsewhere: no lofts, no basements, no sheds, no under-stairs cupboard. A tower flat has exactly the storage the developer drew.",
          "And the city fills them fast — a home gym that lasted one January, a stroller the child outgrew, four suitcases that live on a wardrobe eleven months a year. Then there is the furnished-let problem: owners need somewhere for their own furniture while a tenant's is in the flat.",
          "In each case the requirement is not a room. It is somewhere for a defined pile of things to be, indoors, retrievable, without a lease.",
        ],
      },
      {
        kind: "cards",
        h2: "What people put in one",
        intro: "The four most common storage-room bookings we collect.",
        items: [
          { icon: "🛏️", h: "A guest room, emptied", p: "Bed, mattress, wardrobe and side tables, so the room becomes an office. Around 30–40 sq ft." },
          { icon: "🧳", h: "The seasonal and occasional", p: "Suitcases, winter bedding, festive boxes, camping and diving kit. Fifteen cartons is about 20 sq ft." },
          { icon: "🛋️", h: "Furniture for a furnished let", p: "Your own furniture out while a tenant's is in. Common enough to have its own rhythm each summer." },
          { icon: "👶", h: "What you are not ready to sell", p: "Cots, strollers, outgrown bikes, and furniture from a previous flat that will fit the next one." },
        ],
      },
      {
        kind: "table",
        h2: "A storage room against the alternatives",
        intro: "The comparison people actually run before booking.",
        columns: ["Option", "What it costs", "The catch"],
        rows: [
          ["Move to a bigger flat", "Tens of thousands more a year, plus agency and Ejari", "You are renting a whole room to store a bed"],
          ["A self-drive unit nearby", "A fixed size, whether you fill it or not", "Van hire and your Sunday, twice, plus every visit"],
          ["Leave it in the hallway", "Nothing", "You paid for that square footage too"],
          ["Sell it", "Nothing, and you get some back", "Right for some of it. Rarely all of it"],
          ["Collected storage", "Only the space your items use, free itemised quote", "Access is arranged in advance, not unannounced"],
        ],
        note: "Honest about the last row: you do not hold a key and you do not drop in. In exchange nobody carries a mattress down a service lift. [How the service works](/how-it-works) sets out the trade.",
      },
      {
        kind: "steps",
        h2: "Clearing a room, in practice",
        intro: "Most single-room collections take a morning.",
        items: [
          { h: "Decide the room, not the items", p: "Item by item is where this stalls. Pick a room and empty it." },
          { h: "Box the loose things", p: "Sealed cartons stack; loose belongings do not, and you are billed on space." },
          { h: "We collect and wrap", p: "Furniture is wrapped before it leaves the flat, and the lift booking is ours." },
          { h: "Get any of it back", p: "One box or all of it, normally within 24–48 hours. [The monthly figure](/self-storage-dubai/monthly-storage) does not change while it sits there." },
        ],
      },
    ],
    faqs: [
      {
        q: "How much space does a room's worth of things take?",
        a: "Typically 25 to 40 sq ft once racked — a bed, mattress, wardrobe, side tables and a dozen cartons sits around the middle of that.",
      },
      {
        q: "Do I actually get a room, or shared space?",
        a: "Your goods are racked and logged under your name in a managed warehouse, not in a private room you hold a key to. That is what makes it cost what it costs.",
      },
      {
        q: "Can I swap things in and out seasonally?",
        a: "Yes — winter bedding out in November, back in March. Each movement is a transport job quoted before it happens; the storage price does not change.",
      },
      {
        q: "Is it cheaper than moving to a bigger flat?",
        a: "In almost every case in Dubai, substantially. Compare the monthly storage figure against the annual rent difference divided by twelve, plus the agency commission and Ejari you would pay to move.",
      },
      {
        q: "Can I store a mattress upright to save space?",
        a: "We would rather not: mattresses stored on edge for months deform along the side they rest on. They go in flat and in a cover, which is why they are still usable when they come back.",
      },
    ],
    serviceType: "Household storage",
    cta: {
      h2: "Get the room back",
      p: "Tell us which room and roughly what is in it. You will have the monthly figure the same day.",
    },
    siblings: [
      "/self-storage-dubai/storage-space-for-rent",
      "/self-storage-dubai/near-me",
      "/self-storage-dubai/monthly-storage",
      "/self-storage-dubai/unit-sizes",
    ],
  },

  /* ------------------------------------------------------ climate-controlled */
  {
    silo: "s1",
    path: "/self-storage-dubai/climate-controlled",
    crumb: "Climate Controlled Storage",
    navLabel: "Climate controlled storage",
    navBlurb: "What a Dubai summer does to stored goods, and what stops it.",
    title: "Climate Controlled Storage Dubai | Indoor, Off The Floor",
    description:
      "Climate controlled storage in Dubai. What 48°C and coastal humidity actually do to furniture, electronics and documents — and how goods are stored so it does not happen.",
    keywords:
      "climate controlled storage dubai, temperature controlled storage dubai, air conditioned storage dubai, humidity controlled storage dubai, climate storage uae",
    ogTitle: "Climate Controlled Storage in Dubai — Why It Is Not Optional Here",
    h1: "Climate Controlled Storage in Dubai",
    hero: [
      "In most cities climate control is an upgrade. In Dubai it is the difference between getting your furniture back and learning what 48°C does to veneer — so it is standard on every booking in [self storage in Dubai](/self-storage-dubai), not a tier you select.",
      "Goods are stored indoors in a covered, managed warehouse and racked off the floor — not a yard, not a container, not a shade structure. You are billed **on the space used, at one rate**, because there is no non-climate option to compare it against.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What a Dubai summer actually does",
        intro: "Peak temperature is the headline. The damage comes from sustained heat, coastal humidity and the daily cycle between them.",
        items: [
          { icon: "🪵", h: "Wood and veneer", p: "Heat softens the adhesive in veneered furniture: panels lift at the edges and joints loosen. The commonest damage we see." },
          { icon: "🛋️", h: "Upholstery and fabric", p: "Humidity plus still, warm air is what mould needs. Sofas and mattresses stored unwrapped can bloom within weeks." },
          { icon: "🔌", h: "Electronics", p: "Heat cycling is worse than steady heat — condensation forms inside a cool casing. Batteries left in devices leak." },
          { icon: "📄", h: "Paper and photographs", p: "Documents yellow and go brittle, photographs stick together, ink migrates." },
          { icon: "🕯️", h: "Candles and cosmetics", p: "They melt, usually inside a carton of things that were not going to melt." },
        ],
      },
      {
        kind: "steps",
        h2: "What we do about it",
        intro: "Four things, all before the summer rather than during it.",
        items: [
          { h: "Indoors, covered", p: "Not a yard, not a container, not a shaded compound. The single largest factor, and the one most often quietly skipped." },
          { h: "Wrapped at your flat", p: "Furniture is wrapped at your property, so nothing is sealed up with Dubai dust already on it." },
          { h: "Racked off the floor", p: "On racking rather than concrete, with air around it — which keeps fabric from taking up moisture." },
          { h: "Monitored", p: "Multi-angle CCTV over every corridor, entry point, loading area and storage zone." },
        ],
      },
      {
        kind: "checklist",
        h2: "Before you store over a Dubai summer",
        intro: "Five things that take ten minutes and prevent most of what goes wrong.",
        items: [
          "Take every battery out — leaked alkaline ruins more stored electronics here than heat does.",
          "Empty and fully dry appliances. Residual water in a sealed warm space is the smell people describe on return.",
          "Leave out candles, aerosols and anything wax-based — some are on the [prohibited items](/self-storage-dubai/prohibited-items) list anyway.",
          "Cover mattresses properly rather than with a sheet, and store them flat.",
          "Put photographs and documents in sealed plastic boxes rather than cardboard.",
        ],
      },
      {
        kind: "prose",
        h2: "What to be sceptical about",
        paras: [
          "“Climate controlled” is close to meaningless as a marketing phrase here: it is applied to a fully conditioned indoor facility and to a warehouse with a roof and a big fan alike.",
          "Three questions tell you more than the phrase does — is the storage area indoors and covered, are goods racked off the floor, and are they wrapped before transport or after arrival. A fourth is worth asking too: goods that are climate controlled at the warehouse but sit in an unshaded truck for two hours in August have not been protected.",
          "Storing across a summer specifically? [Long term storage](/self-storage-dubai/long-term) covers how packing changes when a booking runs through seasons.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is climate controlled storage more expensive?",
        a: "Not here — the same rate applies to everything, because indoor covered storage is the only thing on offer rather than a premium tier.",
      },
      {
        q: "What temperature is the facility kept at?",
        a: "Goods are stored indoors in a covered, managed warehouse and racked off the floor. We do not publish a set-point figure, and it is worth being wary of any operator who quotes one without showing how it is monitored.",
      },
      {
        q: "Can I store electronics and a TV over the summer?",
        a: "Yes. Take the batteries out, keep the original box if you have it, and tell the crew so it is racked rather than stacked under something. Screens go upright, never flat with weight on them.",
      },
      {
        q: "What about wooden furniture from outside the Gulf?",
        a: "Solid wood from a cooler climate moves in its first year here wherever it is stored — that is the wood adjusting, not damage. Indoor storage prevents the separate problem of veneer adhesive failing in sustained heat.",
      },
      {
        q: "Is my mattress safe in storage for a few months?",
        a: "Flat, in a proper cover, in an indoor covered space, yes. On edge or wrapped in a bedsheet in a hot space, less so — those two produce the complaints.",
      },
    ],
    serviceType: "Climate controlled storage",
    cta: {
      h2: "Storing across a Dubai summer?",
      p: "Tell us what is going in and roughly how long for. If anything needs special handling, we would rather know now than in September.",
    },
    siblings: [
      "/self-storage-dubai/secure-storage",
      "/self-storage-dubai/long-term",
      "/self-storage-dubai/prohibited-items",
      "/self-storage-dubai/insurance",
    ],
  },

  /* --------------------------------------------------------- secure-storage */
  {
    silo: "s1",
    path: "/self-storage-dubai/secure-storage",
    crumb: "Secure Storage",
    navLabel: "Safe and secure storage",
    navBlurb: "CCTV, signed inventory and controlled access — and what we do not claim.",
    title: "Safe & Secure Storage Dubai | CCTV, Inventory, Controlled Access",
    description:
      "Secure storage in Dubai: multi-angle CCTV, a signed itemised inventory at collection, indoor racked storage and access by arrangement only. Get a free, itemised quote.",
    keywords:
      "safe and secure storage, secure storage dubai, safe storage dubai, secure storage units dubai, storage security dubai, cctv storage dubai",
    ogTitle: "Safe and Secure Storage in Dubai",
    h1: "Safe and Secure Storage in Dubai",
    hero: [
      "Security in storage is mostly not about locks. It is knowing exactly what went in, being able to prove it, and controlling who gets near it — the parts that are hardest to see from a website. Here is how it works inside [self storage in Dubai](/self-storage-dubai).",
      "Every item is logged on an **itemised inventory signed at collection**, before anything leaves your property. Goods are then stored indoors and racked off the floor, in a facility where multi-angle CCTV covers every corridor, entry, loading area and storage zone.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "The four things that actually keep goods safe",
        intro: "Roughly in the order they matter — which is not the order most storage marketing puts them in.",
        items: [
          { icon: "📋", h: "A signed inventory", p: "Written at your property, signed before the van moves. Nothing else here works without it, and it is the item most often missing." },
          { icon: "🚪", h: "Controlled access", p: "No public access to the storage floor. Visits are booked and your items pulled before you arrive." },
          { icon: "📹", h: "Camera coverage", p: "Multi-angle CCTV across corridors, entries and storage zones — including the loading bay, where handling actually happens." },
          { icon: "🏭", h: "Indoors and racked", p: "Off the floor inside a covered warehouse. That protects against water and pests as much as heat." },
        ],
      },
      {
        kind: "prose",
        h2: "What we deliberately do not claim",
        paras: [
          "**No published CCTV retention period.** This site once carried two different figures on two pages, which is worse than none. The coverage is real; the retention window we would rather answer accurately on request.",
          "**No insurance cover level quoted here.** [Storage insurance](/self-storage-dubai/insurance) sets out what is and is not covered, and says to get the current position in writing before booking.",
          "**Not a space you hold a key to.** Goods are in a managed warehouse and access is arranged. Some operators blur this; it is the biggest expectation gap in the industry, and better settled before you book.",
        ],
      },
      {
        kind: "steps",
        h2: "How your goods are tracked",
        intro: "From your hallway to the rack and back again.",
        items: [
          { h: "Listed at your property", p: "The crew itemises as it wraps, and you see the list before it is signed." },
          { h: "Signed by both sides", p: "You get a copy. It is the reference for everything that follows." },
          { h: "Logged to a location", p: "Items are recorded against where they are racked, which is what makes a partial retrieval quick." },
          { h: "Checked out on the way back", p: "Retrievals are picked against the same list. Normally 24–48 hours, all of it or part." },
        ],
      },
      {
        kind: "checklist",
        h2: "What you can do that helps most",
        intro: "Four things, and the first takes five minutes.",
        items: [
          "Photograph anything valuable before it is wrapped, and keep the photos with your inventory copy.",
          "Declare high-value items rather than hiding them in a carton — art, instruments, anything with a serial number.",
          "Keep passports, Emirates ID and title deeds with you. Storage is for things you can wait 24–48 hours for.",
          "Be specific about what is fragile: “fragile” on every box means nothing by the tenth box.",
        ],
        note: "Storing across a summer? [Climate controlled storage](/self-storage-dubai/climate-controlled) covers the environmental half of keeping things intact.",
      },
    ],
    faqs: [
      {
        q: "How do I know my things will not be mixed up with someone else's?",
        a: "Because of the inventory. Every item is logged against your booking on a list you sign, and racked against a recorded location. Retrievals are picked against that same list rather than from memory.",
      },
      {
        q: "How long is CCTV footage kept?",
        a: "Ask us and we will tell you the current retention position for the facility. We deliberately do not publish a figure, because this site once carried two contradictory ones.",
      },
      {
        q: "Who can collect my items besides me?",
        a: "Only someone you have authorised in writing for that booking. Tell us the name in advance; the crew will not release goods to someone who simply turns up.",
      },
      {
        q: "Are my goods insured?",
        a: "Get the current cover position from us in writing before you book, and declare anything high-value so it is addressed on your quote rather than assumed.",
      },
      {
        q: "Can I visit and see my things?",
        a: "By arrangement rather than by turning up. Tell us when you would like to come and your items are pulled and made reachable before you arrive.",
      },
    ],
    serviceType: "Secure storage",
    cta: {
      h2: "Ask us the awkward questions first",
      p: "Retention, cover, who can collect. We would rather answer them before you book than after something has gone wrong.",
    },
    siblings: [
      "/self-storage-dubai/insurance",
      "/self-storage-dubai/climate-controlled",
      "/self-storage-dubai/24-hour-access",
      "/self-storage-dubai/prohibited-items",
    ],
  },

  /* --------------------------------------------------------- 24-hour-access */
  {
    silo: "s1",
    path: "/self-storage-dubai/24-hour-access",
    crumb: "24 Hour Access",
    navLabel: "24 hour access",
    navBlurb: "What access really means when you do not hold the key.",
    title: "24 Hour Storage Access Dubai | How Access Actually Works",
    description:
      "24/7 facility access is available to existing SafeStorage customers on request. Here is exactly how access works, what needs notice, and when delivery is the faster answer.",
    keywords:
      "24 hour storage dubai, 24/7 storage access dubai, storage access dubai, anytime access storage dubai, storage opening hours dubai",
    ogTitle: "24 Hour Storage Access in Dubai — The Honest Version",
    h1: "24 Hour Storage Access in Dubai",
    hero: [
      "“24/7 access” is the most over-promised phrase in storage, and the gap between what it suggests and what it means is where most complaints start. So, precisely, for [self storage in Dubai](/self-storage-dubai) as we run it:",
      "**24/7 facility access is available for existing customers on request** — arranged in advance, rather than a door code and a car park you can drive into at 3am. Office and collection hours are **Monday to Sunday, 8am to 8pm**, with no separate weekend schedule.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why it works this way",
        paras: [
          "Your goods are not in a unit you rent. They are racked in a working warehouse alongside other customers' goods — which is why you are billed for the space your things occupy rather than for a fixed unit you have to fill.",
          "That trade is what removes the van hire, and its cost is precisely this: somebody brings your items to you rather than you walking to them. Tell us in advance and they have already done it before you arrive.",
          "If unaccompanied access matters more than the collection service, a self-storage yard with individual units is the better product and we would rather say so here. [How the service works](/how-it-works) sets out the full trade.",
        ],
      },
      {
        kind: "table",
        h2: "What needs how much notice",
        intro: "Realistic timings rather than best cases.",
        columns: ["What you want", "Notice", "How it works"],
        rows: [
          ["A specific carton delivered", "24–48 hours", "Picked against your inventory, to any address"],
          ["Everything delivered back", "2–3 days", "Quoted as a transport job; a new address is fine"],
          ["To visit during office hours", "Same day, usually", "A slot is booked and your items pulled before you arrive"],
          ["To visit outside 8am–8pm", "On request", "Arranged for existing customers; tell us the day before"],
          ["To add items to storage", "1–2 days", "A second collection, quoted on its own"],
        ],
        note: "For most requests delivery is quicker than a visit. People ask to visit when what they want is one box back — and [what a month costs](/self-storage-dubai/monthly-storage) is the same either way.",
      },
      {
        kind: "checklist",
        h2: "How to make access easy for yourself",
        intro: "Almost all of it is decided at collection, not later.",
        items: [
          "Tell the crew which cartons you may want early — they get racked where they can be reached, and it costs nothing.",
          "Keep your copy of the signed inventory. Asking for “the box with the documents” is slow; asking for item 34 is not.",
          "Name anyone else who may collect on your behalf, in advance and in writing.",
          "Do not store what you will need at short notice: passports, Emirates ID, medication, chargers, tenancy paperwork.",
          "If your dates are tight, say so when booking. Late June and August are the busiest weeks of the Dubai year.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I access my storage at 3am?",
        a: "Access outside 8am–8pm is available to existing customers on request, meaning arranged in advance. Tell us the day before and it can be organised; drive over unannounced and there will be nobody there to let you in.",
      },
      {
        q: "What are your normal hours?",
        a: "Monday to Sunday, 8am to 8pm. There is no separate weekend or Friday schedule — the same hours apply every day.",
      },
      {
        q: "Is there a charge for accessing my items?",
        a: "Visiting during arranged hours is not charged. A retrieval that involves delivering items to you is a transport job, quoted before it happens.",
      },
      {
        q: "Why can't I just have a key?",
        a: "Because you are not renting a unit. Your goods are racked in a shared managed warehouse, which is what makes the price what it is and removes the van hire.",
      },
      {
        q: "How quickly can I get one box back?",
        a: "Normally within 24 to 48 hours, to any address you nominate. Items you flagged at collection as likely to be wanted early are quicker still.",
      },
    ],
    serviceType: "Storage facility access",
    cta: {
      h2: "Need something out this week?",
      p: "Send the item or the carton number. Most retrievals are on their way within 24 to 48 hours.",
    },
    siblings: [
      "/self-storage-dubai/secure-storage",
      "/self-storage-dubai/near-me",
      "/self-storage-dubai/monthly-storage",
      "/self-storage-dubai/storage-calculator",
    ],
  },

  /* --------------------------------------------------------------- insurance */
  {
    silo: "s1",
    path: "/self-storage-dubai/insurance",
    crumb: "Storage Insurance",
    navLabel: "Storage insurance",
    navBlurb: "What is covered, what is not, and what to get in writing first.",
    title: "Storage Insurance Dubai | What To Confirm Before You Book",
    description:
      "Storage insurance in Dubai: what a home contents policy usually does and does not cover once goods leave your property, what to declare, and what to get in writing before booking.",
    keywords:
      "storage insurance dubai, storage unit insurance dubai, is my furniture insured in storage, contents insurance storage uae, goods in storage insurance dubai",
    ogTitle: "Storage Insurance in Dubai — What To Confirm First",
    h1: "Storage Insurance in Dubai",
    hero: [
      "This page will not tell you that everything is fully covered, because that sentence is written on a lot of storage websites and it is almost never true as written. What it will do is tell you exactly what to check before you hand anything over as part of [self storage in Dubai](/self-storage-dubai).",
      "**Ask us for the current cover position in writing before you book**, and declare anything high-value — art, antiques, instruments, jewellery, specialist equipment — so it is addressed on your quote rather than assumed. That is a genuine instruction, not a formality.",
      "What we can state plainly is how your goods are kept, because that is verifiable: wrapped before they leave your property, stored indoors off the floor in a covered warehouse rather than a yard or container, logged on a signed inventory at collection, and held in a facility where multi-angle CCTV covers every corridor, entry point, loading area and storage zone.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The gap most people do not know they have",
        paras: [
          "Home contents insurance in the UAE generally covers goods **at the insured address**. The moment your furniture is on a truck, and for the whole time it is in a warehouse, most standard policies stop applying — not because of anything unusual, but because the address on the policy is no longer where the goods are.",
          "Some insurers will extend a policy to cover goods in transit and in storage, sometimes for a small additional premium and usually with conditions: a named storage provider, a declared value, a maximum period, and often an exclusion for goods stored longer than a set number of months.",
          "This is worth twenty minutes with your existing insurer before you book anything. It is frequently cheaper than a separate policy and it is almost always faster to arrange, because you are amending something rather than underwriting from scratch.",
          "The one thing not to do is assume. The assumption people make — that the storage company's insurance covers the full replacement value of their belongings — is the assumption that produces the difficult conversation later.",
        ],
      },
      {
        kind: "checklist",
        h2: "Six questions to ask before you book anything",
        intro: "Ask them of us and of your own insurer. The answers should be in writing.",
        items: [
          "Does my home contents policy extend to goods in transit and in storage, and to which address?",
          "What is the declared value of what I am storing, and how did I arrive at that figure?",
          "Is there a per-item limit, and does anything I am storing exceed it?",
          "Are there exclusions for storage beyond a certain period, or for specific categories — art, electronics, jewellery, documents?",
          "What is SafeStorage's current liability position for goods in its care, in writing?",
          "What evidence would a claim require, and do I have it — photographs, receipts, the signed inventory?",
        ],
        note: "The last one is the one people fail on. Photograph valuable items before they are wrapped and keep those photographs with your copy of the inventory. Five minutes at collection is worth more than any clause.",
      },
      {
        kind: "cards",
        h2: "What reduces risk regardless of cover",
        intro: "Insurance pays for a loss. These reduce the chance of one.",
        items: [
          {
            icon: "📋",
            h: "The signed inventory",
            p: "A written, countersigned record of what was handed over, made before the van moves. Nothing substitutes for it.",
          },
          {
            icon: "📸",
            h: "Photographs of valuables",
            p: "Taken before wrapping, kept with the inventory. This is what turns a claim into a fact rather than an argument.",
          },
          {
            icon: "🏭",
            h: "Indoor racked storage",
            p: "Off the floor, in a covered warehouse. Most storage damage in this region is environmental rather than criminal — see [climate controlled storage](/self-storage-dubai/climate-controlled).",
          },
          {
            icon: "🚫",
            h: "Not storing what you shouldn't",
            p: "Cash, documents you need, medication and everything on the [prohibited items](/self-storage-dubai/prohibited-items) list. No policy helps with these.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "How to value what you are storing",
        paras: [
          "Use replacement cost in the UAE today, not what you paid and not what you would get for it second-hand. A sofa bought in Europe five years ago is worth what it costs to buy an equivalent one here now, which is often considerably more than people assume.",
          "Go room by room rather than item by item, and then check the total against a sanity figure: a furnished one-bedroom flat's contents commonly runs into six figures in dirhams once you include electronics, and most people's first guess is well under half of that.",
          "Then look for the outliers — the two or three items whose individual value is a large share of the total. Those are the ones that need declaring specifically, because they are the ones most likely to exceed a per-item limit.",
          "Once you have a figure, [what the storage itself costs per month](/self-storage-dubai/prices) is the other half of the arithmetic, and it is usually a much smaller number than people expect relative to what they are protecting.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are my belongings insured while in your storage?",
        a: "Ask us for the current cover position in writing before you book, and declare anything high-value so it appears on your quote. We deliberately do not publish a cover level on this page, because an inaccurate figure is a commercial promise the business would be held to.",
      },
      {
        q: "Does my home contents insurance cover goods in storage?",
        a: "Usually not without an extension, because most policies cover goods at the insured address. Many UAE insurers will extend to transit and storage for a small premium and with conditions. It is worth a phone call to your existing insurer before booking.",
      },
      {
        q: "What should I declare?",
        a: "Anything whose individual value is a significant share of the total, and anything in a category insurers treat specially: art, antiques, musical instruments, jewellery, watches, specialist or professional equipment, and anything with a serial number.",
      },
      {
        q: "What should I never put into storage?",
        a: "Cash, jewellery you are not declaring, passports and Emirates ID, medication, and documents you might need at short notice. Beyond those, the prohibited items list covers what cannot be stored for safety and legal reasons.",
      },
      {
        q: "What evidence would I need for a claim?",
        a: "The signed inventory from collection, photographs taken before wrapping, and receipts or valuations for high-value items. Assemble these at collection rather than after an incident, when they are much harder to produce.",
      },
      {
        q: "Does storing for longer change anything?",
        a: "It can. Some policy extensions cap the storage period, so a booking that runs past that cap can quietly fall out of cover. If your booking is likely to run over six months, check the cap specifically.",
      },
    ],
    serviceType: "Storage insurance guidance",
    cta: {
      h2: "Get the cover position in writing",
      p: "Tell us what you are storing and its rough value, and ask for the current position before you book anything.",
    },
    siblings: [
      "/self-storage-dubai/secure-storage",
      "/self-storage-dubai/prohibited-items",
      "/self-storage-dubai/climate-controlled",
      "/self-storage-dubai/long-term",
    ],
  },

  /* -------------------------------------------------- vs-warehouse-rental */
  {
    silo: "s1",
    path: "/self-storage-dubai/vs-warehouse-rental",
    crumb: "Self Storage vs Warehouse Rental",
    navLabel: "Self storage vs warehouse rental",
    navBlurb: "When you have outgrown storage and genuinely need a warehouse.",
    title: "Self Storage vs Warehouse Rental in Dubai | Which You Need",
    description:
      "Self storage or a rented warehouse in Dubai? The honest comparison — cost, lease, trade licence, staffing and the volume at which renting your own space starts to win.",
    keywords:
      "self storage vs warehouse rental dubai, warehouse rental dubai, small warehouse dubai, storage or warehouse dubai, warehouse vs storage unit",
    ogTitle: "Self Storage vs Renting a Warehouse in Dubai",
    h1: "Self Storage vs Renting a Warehouse in Dubai",
    hero: [
      "There is a point at which storing goods stops being cheaper than renting your own space, and most businesses find it a year later than they should. This page is about where that line actually sits, and it is written from inside [self storage in Dubai](/self-storage-dubai) rather than against it.",
      "The short version: below roughly 300 to 500 square feet of stored volume, and with fewer than a handful of movements a month, storage wins on almost every measure. Above that, or once you need staff on site and daily access, a leased warehouse starts to make sense despite everything it drags with it.",
      "What tips the decision is rarely the rate per square foot. It is the lease, the trade licence, the fit-out, the staffing and the fact that a warehouse is a fixed cost you keep paying in a quiet quarter.",
    ],
    sections: [
      {
        kind: "table",
        h2: "The comparison, honestly",
        intro: "Same 400 sq ft of goods, held for a year, in Dubai.",
        columns: ["Factor", "Collected storage", "Leased warehouse"],
        rows: [
          ["Commitment", "Monthly, end any time", "Typically a one-year lease, often with post-dated cheques"],
          ["What you pay for", "The space your goods occupy", "The whole unit, filled or not"],
          ["Trade licence", "Not required to store", "Required for a commercial lease and Ejari"],
          ["Fit-out and racking", "Included", "Yours — racking, lighting, cooling, fire compliance"],
          ["Staff", "None needed", "Someone has to be there to receive and release"],
          ["Utilities and cooling", "Included in the rate", "Yours, and a Dubai summer is not cheap to cool"],
          ["Daily access", "By arrangement", "Whenever you like — the real advantage"],
          ["Scaling down", "Next month's invoice", "Not until the lease ends"],
        ],
        note: "The row that decides it for most businesses is the last one. Storage volume that swings with a season costs you nothing extra in a quiet quarter; a leased warehouse costs the same in December as in your peak week.",
      },
      {
        kind: "prose",
        h2: "When a warehouse genuinely wins",
        paras: [
          "**When people need to be in it.** The moment you need staff picking, packing, assembling or inspecting on site every day, you need your own space. Managed storage is not designed for a person to work inside all day, and pretending otherwise makes both parties unhappy.",
          "**When movements are constant.** A dozen in-and-out movements a week changes the arithmetic completely — each one is a transport job in a storage model and a walk across the floor in a warehouse.",
          "**When you need an address.** A commercial licence tied to a physical premises, a showroom, or a place customers visit is not something storage can be.",
          "**When the volume is genuinely large and genuinely stable.** Above about 1,000 square feet held steadily all year, the per-foot economics of a lease start to win even after fit-out.",
          "If you are somewhere near this line, the [business storage](/business-storage-dubai) side covers pallet handling, stock and fulfilment properly — including the arrangements that sit between these two options.",
        ],
      },
      {
        kind: "prose",
        h2: "When storage wins, and people rent anyway",
        paras: [
          "The commonest mistake is renting for the peak. A business whose stock triples for two months of the year rents a warehouse sized for those two months and pays for it for twelve. Storage that flexes month to month is dramatically cheaper for that shape, and it is a very common shape in this market.",
          "The second is renting because the rate per square foot looked lower. It usually does look lower, right up until racking, cooling, a staff member, and the months you are not full are in the same column. Compare total annual cost against total annual cost, not rate against rate.",
          "The third is signing a year for something you are still testing. A new product line, a first import, a seasonal experiment — none of these want a lease and post-dated cheques attached to them.",
          "And a fourth, specific to households: nobody needs a warehouse to store a villa's contents. If that is what you are looking at, [what storage costs by home size](/self-storage-dubai/prices) is the page you want.",
        ],
      },
      {
        kind: "steps",
        h2: "How to work out which you need",
        intro: "Four questions, in order. The first two answer it most of the time.",
        items: [
          { h: "Does anyone need to work inside it daily?", p: "If yes, rent a warehouse. Nothing else in this list matters." },
          { h: "How many movements a month?", p: "Under about five, storage. Over about twenty, a warehouse." },
          { h: "Is the volume stable across the year?", p: "If it swings by more than half, storage almost always wins on the annual total." },
          {
            h: "What is the real annual total of each?",
            p: "Rent plus fit-out plus cooling plus staffing, against [what storage space costs per month](/self-storage-dubai/storage-space-for-rent) times twelve.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "At what volume should I rent a warehouse instead?",
        a: "As a rule of thumb, above 500 square feet of stably held goods with frequent daily access, a lease starts to compete; above roughly 1,000 square feet held all year it usually wins. Below 300 square feet it very rarely does.",
      },
      {
        q: "Do I need a trade licence to use storage?",
        a: "No. Storing goods does not require a trade licence, which is one of the practical differences from leasing a commercial unit, where a licence and an Ejari registration are prerequisites.",
      },
      {
        q: "Can I run a business from stored goods?",
        a: "You can store stock, records and equipment and have items released as you need them. What you cannot do is have staff working on the storage floor — that is the line between the two products.",
      },
      {
        q: "Is a warehouse cheaper per square foot?",
        a: "The headline rate usually is. The total rarely is once you add racking, lighting, cooling, fire compliance, a staff member and the months when the space is not full. Compare annual totals rather than rates.",
      },
      {
        q: "What if I need a warehouse for only part of the year?",
        a: "That is the shape storage is best at, because you pay for the volume you actually hold each month. Renting for a peak and paying for it all year is the most expensive way to solve a seasonal problem.",
      },
      {
        q: "Can I move from storage to a warehouse later?",
        a: "Yes, and it is a normal progression — we deliver everything to the new premises as a single transport job once the lease starts. There is no exit penalty for outgrowing the service.",
      },
    ],
    serviceType: "Storage advisory",
    cta: {
      h2: "Not sure which side of the line you are on?",
      p: "Tell us the volume, the movements per month and whether it swings seasonally. That is enough to answer it properly.",
    },
    siblings: [
      "/self-storage-dubai/storage-space-for-rent",
      "/self-storage-dubai/long-term",
      "/self-storage-dubai/storage-calculator",
      "/self-storage-dubai/monthly-storage",
    ],
  },

  /* ------------------------------------------------------ storage-calculator */
  {
    silo: "s1",
    path: "/self-storage-dubai/storage-calculator",
    crumb: "Storage Size Calculator",
    navLabel: "Storage size calculator",
    navBlurb: "Work out how much space you need before anyone quotes you.",
    title: "Storage Size Calculator Dubai | How Much Space Do I Need?",
    description:
      "Work out how much storage space you need in Dubai. Room-by-room square footage, the four things people always underestimate, and how to check your estimate in five minutes.",
    keywords:
      "storage size calculator, storage space calculator dubai, how much storage space do i need, storage unit size calculator, what size storage unit do i need dubai",
    ogTitle: "How Much Storage Space Do You Actually Need?",
    h1: "Storage Size Calculator — How Much Space Do You Need?",
    hero: [
      "Because we bill on the floor space your goods occupy rather than on a fixed unit, working out that number in advance is genuinely useful — it is the whole of your monthly cost. This is how to estimate it before anybody quotes you anything, within [self storage in Dubai](/self-storage-dubai).",
      "The short method: start from your home size, then adjust for the four things people always get wrong. A studio is around **30 sq ft**, a one-bedroom **60–90**, a two-bedroom **120–150**, a three-bedroom villa **240–270**.",
      "You pay only for **the space your items use**, so a good estimate is the best guide to your monthly cost — get a free, itemised quote to confirm it. Transport is separate and depends on your address and access.",
    ],
    sections: [
      {
        kind: "table",
        h2: "Start here: space by home size",
        intro:
          "These are real averages from collections in Dubai rather than a manufacturer's chart. The range within each row is mostly about how much is boxed versus loose.",
        columns: ["What you are storing", "Space"],
        rows: [
          ["10–15 cartons only", "15–20 sq ft"],
          ["A single room emptied", "25–40 sq ft"],
          ["Studio contents", "~30 sq ft"],
          ["1 bedroom flat", "60–90 sq ft"],
          ["2 bedroom flat", "120–150 sq ft"],
          ["3 bedroom villa", "240–270 sq ft"],
          ["4+ bedroom villa", "300+ sq ft (measured on survey)"],
        ],
        note: "These figures cover the storage space only. [The full price breakdown](/self-storage-dubai/prices) covers what else is in a quote, and [the unit size guide](/self-storage-dubai/unit-sizes) shows what physically fits in each band.",
      },
      {
        kind: "cards",
        h2: "The four things people always underestimate",
        intro: "Adjust your first estimate upward if any of these apply. Most people need at least two of them.",
        items: [
          {
            icon: "🪜",
            h: "The balcony and the store cupboard",
            p: "Almost nobody counts these, and in a Dubai flat they hold a surprising amount — luggage, a drying rack, tools, sports kit. Add 10 to 15 per cent.",
          },
          {
            icon: "🚗",
            h: "The garage",
            p: "In a villa this is the single biggest miss. Bikes, tools, garden furniture, paint, spare tyres. It can be a quarter of the total on its own.",
          },
          {
            icon: "📦",
            h: "Loose versus boxed",
            p: "Sealed cartons stack; loose belongings do not. The same possessions can differ by 30 per cent in floor space depending on whether they were boxed first.",
          },
          {
            icon: "🛏️",
            h: "The awkward large items",
            p: "A corner sofa, a treadmill, a wardrobe that does not dismantle, a mattress that must lie flat. Two of these can add more than a room's worth of cartons.",
          },
        ],
      },
      {
        kind: "steps",
        h2: "The five-minute method",
        intro: "More accurate than any online slider, and it takes about as long.",
        items: [
          { h: "Pick your starting figure", p: "From the table above, by home size — not by how full the flat feels." },
          { h: "Walk the property with your phone", p: "Photograph every room, plus the balcony, the store cupboard and the garage. Photograph, do not list." },
          { h: "Add for the four misses", p: "Balcony and cupboard, garage, loose items, awkward large pieces. Add 10 to 15 per cent for each that applies." },
          { h: "Subtract what is not going", p: "This is the only step that reduces the number, and it is the most valuable one. Decide by room, not by item." },
          {
            h: "Send us the photos",
            p: "A rough figure plus photographs gets you a real quote the same day, and photographs beat any list you can write. [What happens next](/how-it-works).",
          },
        ],
      },
      {
        kind: "prose",
        h2: "Why we do not put a slider on this page",
        paras: [
          "Because sliders are consistently wrong in this market, and wrong in the direction that suits the operator. They ask for bedroom counts and item tick-boxes and then output a confident number that ignores whether anything was boxed, what the balcony holds, and whether the sofa is a three-seater or an L-shape.",
          "The result is a customer who was told 90 square feet, is billed for 130, and reasonably feels misled — even though the crew did nothing wrong. We would rather give you a range you can trust and then measure the actual figure at collection.",
          "The number on your invoice is always the measured floor space your goods occupy once racked, and you are told it after collection. If your estimate was high, the bill is lower than you planned for. That is the correct direction for a surprise to run.",
          "If you would rather understand the whole thing as renting an amount of space, [storage space for rent](/self-storage-dubai/storage-space-for-rent) frames it that way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How accurate are these estimates?",
        a: "The bands are drawn from actual Dubai collections and are reliable to within about 20 per cent for a typical household. The final figure is the measured floor space your goods occupy once racked, which you are told after collection.",
      },
      {
        q: "What if I estimate wrong?",
        a: "Nothing breaks. You are billed on what your goods actually occupy, not on your estimate, so an over-estimate simply means a lower invoice than you planned for. There is no penalty either way and no size to commit to in advance.",
      },
      {
        q: "Does boxing things up really change the price?",
        a: "Yes, and it is the single biggest lever you control. Sealed cartons stack squarely and loose belongings do not; the same possessions can occupy 30 per cent more floor space unboxed.",
      },
      {
        q: "How do you measure the space?",
        a: "By the floor area your goods occupy once racked at the facility, including the footprint of how they are stacked. It is measured after collection and it is the figure on the invoice.",
      },
      {
        q: "Should I round up or down when estimating?",
        a: "Neither — give us your honest figure and photographs. We are not holding a unit for you, so there is nothing to reserve and no benefit in padding the number in either direction.",
      },
      {
        q: "Can you survey the property first?",
        a: "Yes, and there is no charge for it. For anything above a two-bedroom, or where the garage and balcony are doing a lot of work, a survey is more accurate than any estimate and takes about half an hour.",
      },
    ],
    serviceType: "Storage estimation",
    cta: {
      h2: "Send photos, get a real number",
      p: "Photographs of each room beat any calculator. Most quotes come back the same day.",
    },
    siblings: [
      "/self-storage-dubai/unit-sizes",
      "/self-storage-dubai/prices",
      "/self-storage-dubai/storage-space-for-rent",
      "/self-storage-dubai/vs-warehouse-rental",
    ],
  },
]
