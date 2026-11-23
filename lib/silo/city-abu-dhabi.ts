import type { SiloPageContent } from "./types"

/**
 * SILO 13 · /self-storage-abu-dhabi — storage collected from Abu Dhabi.
 *
 * SCOPE HONESTY: SafeStorage has warehouses in Dubai, Sharjah and Ajman only.
 * Abu Dhabi is a door-to-door collection service; goods are stored at our
 * nearest facility. No page here claims an Abu Dhabi facility, and per the
 * owner rule for AE pages there are no prices anywhere.
 *
 * LINKING: own silo pages, other silos' HUBS, /locations/abu-dhabi[/slug],
 * /get-quote, /contact, /faq only.
 */

const HUB = "/self-storage-abu-dhabi"
const PERSONAL = "/personal-storage-abu-dhabi"
const BUSINESS = "/business-storage-abu-dhabi"
const DOCS = "/business-storage-abu-dhabi/document-storage"

export const AD_STORAGE_HUB: SiloPageContent = {
  silo: "s13",
  path: HUB,
  crumb: "Storage Abu Dhabi",
  navLabel: "Self storage in Abu Dhabi",
  navBlurb: "Collection from your door, storage at our nearest facility, delivery back on request.",
  title: "Self Storage in Abu Dhabi | Collected From Your Door",
  description:
    "Self storage in Abu Dhabi without the drive: we wrap, barcode and collect from your address, store monthly with no lock-in, and deliver back when you ask.",
  keywords:
    "self storage abu dhabi, storage in abu dhabi, storage units abu dhabi, storage abu dhabi, abu dhabi storage company, short term storage abu dhabi, storage space abu dhabi",
  ogTitle: "Self Storage in Abu Dhabi",
  h1: "Self Storage in Abu Dhabi, Collected From Your Door",
  introH2: "How storage works for Abu Dhabi addresses",
  hero: [
    "Most people looking for [self storage in Abu Dhabi](/self-storage-abu-dhabi) expect to rent a unit, load their own car and drive it over. Ours works the other way round. A crew comes to your flat, villa or office, wraps and barcodes your belongings, collects them, and stores them at our nearest facility. You never carry a box to a unit.",
    "To be plain about where the goods go: SafeStorage runs warehouses in Dubai, Sharjah and Ajman, not in Abu Dhabi. Abu Dhabi is a collection and delivery service. If what you need is a unit you can walk into in Mussafah, a local yard will suit you better, and we would rather say so than oversell.",
    "What you get in exchange is no vehicle hire, no multiple trips over the bridge, and no lock-in. Storage is billed monthly on the space your goods occupy, and anything can come back to an Abu Dhabi address when you ask.",
  ],
  sections: [
    {
      kind: "steps",
      h2: "From request to stored, step by step",
      intro: "The sequence is the same whether it is a studio of furniture or a pallet of stock.",
      items: [
        { h: "Tell us the address and what is going", p: "The district, building, floor, lift situation and a rough list or a few photos. A free itemised quote follows, with transport shown on its own line." },
        { h: "We book the access", p: "Tower service lifts, villa gate registrations and any move permit are arranged before the crew turns up, so nobody waits in a lobby." },
        { h: "Wrapped and barcoded at the door", p: "Furniture is wrapped where it stands, boxes are labelled, and every item is scanned onto an inventory that follows it into storage." },
        { h: "Collected and stored", p: "Goods travel to our nearest facility and are racked there under 24/7 CCTV. Billing runs month to month on the space used." },
        { h: "Delivered back on request", p: "Ask for all of it or a single carton and it is returned to your Abu Dhabi address, normally within 24 to 48 hours." },
      ],
    },
    {
      kind: "cards",
      h2: "What people store with us from Abu Dhabi",
      items: [
        { icon: "🛋️", h: "Furniture and flat contents", p: "Sofas, beds, wardrobes and dining sets, wrapped and kept off the floor. The full picture is on our [personal storage in Abu Dhabi](/personal-storage-abu-dhabi) page." },
        { icon: "📦", h: "Boxes and seasonal items", p: "Winter clothing, books, children's things and decorations you want out of a small flat for a few months." },
        { icon: "🏭", h: "Stock and equipment", p: "Pallets, fixtures and spare equipment for companies; see [business storage in Abu Dhabi](/business-storage-abu-dhabi)." },
        { icon: "📦", h: "Records and archives", p: "Boxed files kept offsite and fetched on notice, covered under [document storage in Abu Dhabi](/business-storage-abu-dhabi/document-storage)." },
      ],
    },
    {
      kind: "prose",
      h2: "Why collection suits the way Abu Dhabi is laid out",
      paras: [
        "A large part of the city lives in towers. On [Al Reem Island](/locations/abu-dhabi/al-reem-island), in Al Khalidiyah and along the Corniche side, the obstacle to storing things is rarely space in a facility. It is the service lift slot, the loading bay that holds one vehicle, and the building manager who wants a permit in advance. Because the crew handles all of that, the building rules stop being your problem.",
        "Villa areas such as [Khalifa City](/locations/abu-dhabi/khalifa-city) and [Al Mushrif](/locations/abu-dhabi/al-mushrif) have the opposite issue: plenty of room, but a garage already full and a family that does not want to hire a van to clear it. Collection from the gate works there too.",
      ],
    },
    {
      kind: "table",
      h2: "Which kind of storage fits which situation",
      columns: ["Situation", "What usually happens", "Where to read more"],
      rows: [
        ["Between leases, or a flat not ready", "Furniture wrapped and held for weeks or months, then delivered to the new address", "[Personal storage](/personal-storage-abu-dhabi)"],
        ["Leaving the UAE or posted elsewhere", "Contents held while you settle, then shipped or delivered on instruction", "[Personal storage](/personal-storage-abu-dhabi)"],
        ["A company with surplus stock or fit-out items", "Palletised or boxed goods collected from the office or unit", "[Business storage](/business-storage-abu-dhabi)"],
        ["Files that must be kept but not at your desk", "Boxes indexed and retrievable on notice", "[Document storage](/business-storage-abu-dhabi/document-storage)"],
        ["A move that includes packing and transport", "Handled as one job with one inventory", "[Movers in Abu Dhabi](/moving-storage-abu-dhabi)"],
      ],
    },
    {
      kind: "checklist",
      h2: "What to settle before you book",
      intro: "A short list saves a second visit.",
      items: [
        "The building name, floor and whether the lift is a passenger or a service lift.",
        "Whether your landlord or community office needs notice for a move-out or collection.",
        "Roughly how much there is: a room, a flat, a villa or a stack of pallets.",
        "Whether anything is fragile, oversized or has to be taken apart first.",
        "When you might want things back, so that frequently needed items are not racked at the back.",
      ],
      note: "If you are unsure of any of these, send a few photos and the address through [the quote form](/get-quote) and we will ask only what we cannot see.",
    },
    {
      kind: "prose",
      h2: "Storing through the summer and the lease cycle",
      paras: [
        "Abu Dhabi has two rhythms that decide when people need storage. One is the lease cycle, with renewals and move-outs bunching at the end of the month and in the months after the school year closes. The other is the summer: many residents leave for weeks, and a few decide not to come back. Both create the same need, a safe place for belongings that does not tie you to a fixed term.",
        "Because there is no lock-in, a short stay costs only the weeks it lasts. If your plans change and you want to keep storing, nothing needs renegotiating. If you need the full packing and transport side of a move too, our [Abu Dhabi movers page](/moving-storage-abu-dhabi) covers it, and the wider picture is at [moving and storage across the UAE](/moving-storage-uae).",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a storage facility in Abu Dhabi?",
      a: "No. Our warehouses are in Dubai, Sharjah and Ajman. In Abu Dhabi we run the collection and delivery service and store your goods at our nearest facility.",
    },
    {
      q: "Do I need to bring my things to you?",
      a: "No. A crew wraps, barcodes and collects from your address, and returns anything you ask for to the same city.",
    },
    {
      q: "Is there a minimum term?",
      a: "No lock-in. Storage is billed monthly on the space your goods occupy, so a short stay is billed as a short stay.",
    },
    {
      q: "How quickly can I get something back?",
      a: "Retrieval to an Abu Dhabi address is normally arranged within 24 to 48 hours, for everything or a single carton. Tell us if your dates are tight when you book.",
    },
    {
      q: "What does it cost?",
      a: "We give a free itemised quote based on what you are storing and your address, with transport shown separately. Send the details through the quote form.",
    },
    {
      q: "Can I store business items as well as household ones?",
      a: "Yes. Companies store stock, equipment and records with us. The household and business pages explain how each is handled.",
    },
  ],
  serviceType: "Self storage with door-to-door collection",
  areaServed: "Abu Dhabi",
  cta: {
    h2: "Get a free itemised quote for Abu Dhabi storage",
    p: "Tell us the district, what is going and when. You will get the collection and storage quoted line by line.",
  },
  siblings: [PERSONAL, BUSINESS, DOCS],
}

export const AD_STORAGE_PAGES: SiloPageContent[] = [
  /* ------------------------------ PERSONAL ------------------------------ */
  {
    silo: "s13",
    path: PERSONAL,
    crumb: "Personal Storage Abu Dhabi",
    navLabel: "Personal storage",
    navBlurb: "Furniture and flat contents held while you move, travel or leave.",
    title: "Personal Storage in Abu Dhabi | Furniture & Home",
    description:
      "Personal storage in Abu Dhabi for furniture, villa and flat contents: wrapped at your door, stored monthly with no lock-in, delivered back when you are ready.",
    keywords:
      "personal storage abu dhabi, household storage abu dhabi, furniture storage abu dhabi, home storage abu dhabi, storage for expats abu dhabi, short term storage abu dhabi",
    ogTitle: "Personal Storage in Abu Dhabi",
    h1: "Personal Storage in Abu Dhabi for Furniture and Home Contents",
    introH2: "Storing your home, without a unit to visit",
    hero: [
      "If you are looking for [self storage in Abu Dhabi](/self-storage-abu-dhabi) for the contents of a home, the practical question is usually not size but timing. A lease ends before the next begins, a posting abroad is confirmed at short notice, or a villa is being renovated around you. Personal storage covers that gap.",
      "We collect from your address in Abu Dhabi, wrap each piece, barcode it and store it at our nearest facility. We do not have a warehouse in Abu Dhabi itself, so this is a collection and delivery service rather than a unit you drive to.",
      "That suits people who would rather not hire a van, carry a sofa down a tower, or spend weekends shuttling boxes across the bridge.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Household items we handle",
        intro: "Anything you would put in a removal van can be collected for storage.",
        items: [
          { icon: "🛋️", h: "Sofas and sectionals", p: "Wrapped whole when the doorways allow it, in sections when they do not." },
          { icon: "🛏️", h: "Beds and mattresses", p: "Frames come apart with fixings labelled to each frame; mattresses are covered and kept flat." },
          { icon: "🚪", h: "Wardrobes and wall units", p: "Doors and mirrors are taken off and wrapped separately so the unit reassembles correctly." },
          { icon: "🍽️", h: "Tables, glass and chairs", p: "Tops travel upright with corners protected, and chairs are grouped into sets." },
          { icon: "🔌", h: "Appliances", p: "Freestanding ones move upright with doors secured; anything plumbed in needs a technician to disconnect it first." },
          { icon: "📦", h: "Boxes", p: "Clothes, books, kitchenware and keepsakes, labelled by room and listed on the inventory." },
        ],
      },
      {
        kind: "prose",
        h2: "The situations that bring people to us",
        paras: [
          "Between leases is the commonest. A tenant leaving a one-bedroom on [Al Reem Island](/locations/abu-dhabi/al-reem-island) may have a new place that is ready ten days late, and the furniture has nowhere to go for that stretch. A few weeks of storage and a delivery to the new door resolves it without a hotel full of luggage.",
          "Expats leaving are next. Someone finishing a contract in [Al Khalidiyah](/locations/abu-dhabi/al-khalidiyah) might not know yet whether they are returning, shipping on, or selling up. Holding the contents month to month defers a decision that should not be made in a rush, and you can end it with a message.",
          "Villa families use it for a different reason, which is clearing space. A house in [Khalifa City](/locations/abu-dhabi/khalifa-city) or [Al Mushrif](/locations/abu-dhabi/al-mushrif) being repainted, re-floored or extended has to be emptied, and the contents are better off wrapped and out of the dust.",
        ],
      },
      {
        kind: "steps",
        h2: "How a household collection goes",
        items: [
          { h: "A quote from your description or photos", p: "Rooms, large pieces, anything fragile and the building access. The quote is free and itemised." },
          { h: "Access is arranged for you", p: "Service lift, gate registration or a move permit, whichever your building requires." },
          { h: "Wrap and barcode", p: "Each piece is wrapped at your door and scanned, so you can see exactly what is held." },
          { h: "Held month to month", p: "Billing follows the space used and stops when the goods leave." },
          { h: "Back to a new address", p: "Delivered to your next home in Abu Dhabi, or on the way to another emirate if you have moved." },
        ],
      },
      {
        kind: "table",
        h2: "Personal storage by district",
        columns: ["District", "What to expect", "Worth knowing"],
        rows: [
          ["[Al Reem Island](/locations/abu-dhabi/al-reem-island)", "Towers, reached by bridge", "Service lift slots go first on month-ends"],
          ["[Al Raha](/locations/abu-dhabi/al-raha) and [Yas Island](/locations/abu-dhabi/yas-island)", "Mixed apartments and townhouses", "Gate and community rules vary by development"],
          ["[Saadiyat Island](/locations/abu-dhabi/saadiyat-island)", "Villas and newer apartments", "Many homes are furnished once and moved rarely"],
          ["[Al Bateen](/locations/abu-dhabi/al-bateen)", "Older villas and low-rise", "Narrower streets, so the vehicle position matters"],
          ["[Khalifa City](/locations/abu-dhabi/khalifa-city) and [Al Shamkha](/locations/abu-dhabi/al-shamkha)", "Larger plots further out", "Allow for the drive when choosing a collection date"],
        ],
        note: "Not seeing your area? See the full list at [Abu Dhabi coverage](/locations/abu-dhabi) or send the address.",
      },
      {
        kind: "checklist",
        h2: "Before the crew arrives",
        items: [
          "Empty and defrost the fridge and freezer a day ahead, and leave the doors propped.",
          "Remove valuables, jewellery, passports and anything you will need from the boxes.",
          "Tell us which pieces you may want back first so they are racked accessibly.",
          "Photograph anything with an existing mark so the inventory records its condition.",
        ],
      },
      {
        kind: "prose",
        h2: "Heat, humidity and what we do about them",
        paras: [
          "Abu Dhabi summers are hard on furniture left in a hot garage or an unventilated store. Wood dries and splits, leather sticks to itself, and cardboard softens when humidity swings. Our facilities are climate-aware and monitored by 24/7 CCTV, and goods are wrapped at your address before they ever sit in a vehicle.",
          "If you are moving as well as storing, the packing and transport side is described on our [Abu Dhabi movers page](/moving-storage-abu-dhabi), and everything is held under one inventory either way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can I store household items?",
        a: "As long as you like. Storage is billed monthly with no lock-in, so you can stop whenever you ask for delivery.",
      },
      {
        q: "Do you collect from towers on Al Reem Island?",
        a: "Yes. We arrange the service lift and any permit your tower requires so the crew is not held up in the lobby.",
      },
      {
        q: "Can I get one item back without emptying everything?",
        a: "Yes. A single piece or carton can be retrieved and delivered to your Abu Dhabi address, normally within 24 to 48 hours.",
      },
      {
        q: "Is my furniture stored in Abu Dhabi?",
        a: "No. Our warehouses are in Dubai, Sharjah and Ajman. Goods are collected in Abu Dhabi and stored at our nearest facility.",
      },
      {
        q: "Can you store a whole villa?",
        a: "Yes. We quote villa contents from a room-by-room list or photos, and send enough crew to clear it in one visit.",
      },
      {
        q: "Will I see what is stored?",
        a: "Every item is barcoded and listed on an inventory you can check against what was collected.",
      },
    ],
    serviceType: "Household storage with door-to-door collection",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Quote for storing your home contents",
      p: "Send the district, the rough contents and your dates. We reply with a free itemised quote.",
    },
    siblings: [BUSINESS, DOCS, HUB],
  },

  /* ------------------------------ BUSINESS ------------------------------ */
  {
    silo: "s13",
    path: BUSINESS,
    crumb: "Business Storage Abu Dhabi",
    navLabel: "Business storage",
    navBlurb: "Stock, equipment and pallets from Abu Dhabi companies.",
    title: "Business Storage in Abu Dhabi | Stock & Equipment",
    description:
      "Business storage in Abu Dhabi for stock, equipment, fixtures and pallets: collected from your unit or office, stored monthly, delivered back on request.",
    keywords:
      "business storage abu dhabi, commercial storage abu dhabi, warehouse storage abu dhabi, stock storage abu dhabi, pallet storage abu dhabi, equipment storage abu dhabi",
    ogTitle: "Business Storage in Abu Dhabi",
    h1: "Business Storage in Abu Dhabi: Stock, Equipment and Pallets",
    introH2: "Offsite storage for Abu Dhabi companies",
    hero: [
      "Companies that look for [self storage in Abu Dhabi](/self-storage-abu-dhabi) are rarely short of ambition and often short of floor. A seasonal product line, a finished fit-out, a spare set of exhibition stands or a distributor's slow-moving stock all take up space the business is paying a lease on.",
      "We collect from your office, shop or unit anywhere we serve in Abu Dhabi, count and barcode what we take, and store it at our nearest facility. We do not operate a warehouse in Abu Dhabi, so this works best for goods you need access to on notice rather than by the hour.",
      "Billing is monthly on the space used, there is no lock-in, and stock can come back to your door in part or in full.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What companies put into storage",
        items: [
          { icon: "📦", h: "Stock and inventory", p: "Slow-moving lines, seasonal ranges and overflow from a retail or trading unit." },
          { icon: "🏭", h: "Equipment and machinery parts", p: "Spare units, tools and parts kept clean and tagged, ready for the next project." },
          { icon: "🪑", h: "Office furniture", p: "Desks, chairs and partitions left over after a downsizing or between offices." },
          { icon: "📦", h: "Event and display material", p: "Stands, banners and signage that return a few times a year." },
          { icon: "📦", h: "Pallets", p: "Stored by the pallet where goods are already palletised and shrink-wrapped." },
        ],
      },
      {
        kind: "prose",
        h2: "Where Abu Dhabi businesses are and how we reach them",
        paras: [
          "[Mussafah](/locations/abu-dhabi/mussafah) is the industrial centre of the emirate, with workshops, trading units and logistics firms on plots where space is the main cost. Collection from a yard is straightforward when the loading point is clear and the goods are palletised or boxed. Tell us the unit number, the access and whether a forklift is on site.",
          "Offices in towers on the island, such as those around [Al Khalidiyah](/locations/abu-dhabi/al-khalidiyah) and [Al Bateen](/locations/abu-dhabi/al-bateen), are a different job. Goods go down in a service lift booked in advance, so we need the time window your building gives us. Companies licensed in a free zone or ADGM often have the smallest premises of all, which is where offsite storage earns its keep.",
        ],
      },
      {
        kind: "table",
        h2: "Business storage compared to the alternatives",
        columns: ["Option", "Good for", "Trade-off"],
        rows: [
          ["Extra space in your own lease", "Daily access to stock", "You pay lease rates on goods that are rarely touched"],
          ["A self-drive unit you rent yourself", "Frequent small visits", "You need staff, a vehicle and time to go and load"],
          ["Collected storage with us", "Stock you need on notice, not hourly", "Retrieval is booked, typically within 24 to 48 hours"],
        ],
        note: "If you need hourly pick and pack, a fulfilment partner is the right tool, and we would say so.",
      },
      {
        kind: "steps",
        h2: "How a business collection is run",
        items: [
          { h: "Send a list and the loading details", p: "What it is, how it is packed, the number of pallets or boxes and where the vehicle can stand." },
          { h: "Receive an itemised quote", p: "Free, with the transport, handling and monthly storage shown as separate lines." },
          { h: "Count and barcode on site", p: "We count what we take with your representative present and agree the total." },
          { h: "Store and track", p: "Everything is tied to a barcoded inventory that you can reconcile against your own records." },
          { h: "Release on instruction", p: "Written instruction from an authorised contact, then delivery to your door." },
        ],
      },
      {
        kind: "checklist",
        h2: "What helps us quote accurately",
        items: [
          "Palletised or loose, and the approximate dimensions of the largest item.",
          "Anything that is fragile, heavy or needs to stay upright.",
          "Whether goods must be kept dry and clear of strong odours.",
          "Who is authorised to release or add to the stored goods.",
          "How often you expect to call things back.",
        ],
        note: "Business records are handled slightly differently, which is covered on [document storage in Abu Dhabi](/business-storage-abu-dhabi/document-storage).",
      },
      {
        kind: "prose",
        h2: "Storing through a project or a downturn",
        paras: [
          "Project-based firms often end up with surplus. A fit-out finishes and leaves spare joinery and fixtures; an exhibition closes and the stands must be kept for the next one. Putting these in monthly storage lets the project close cleanly without a rent commitment attached to them.",
          "If you are relocating the business itself, the packing and transport are on our [Abu Dhabi movers page](/moving-storage-abu-dhabi), and for the wider network see [moving and storage across the UAE](/moving-storage-uae).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have a warehouse in Mussafah?",
        a: "No. Our facilities are in Dubai, Sharjah and Ajman. We collect from Mussafah and elsewhere in Abu Dhabi and store at our nearest facility.",
      },
      {
        q: "Can you store pallets?",
        a: "Yes. Pallets that are already wrapped and stacked safely are the easiest to handle, and we quote them by the space they use.",
      },
      {
        q: "Is there a minimum term for companies?",
        a: "No lock-in. Billing is monthly on the space used.",
      },
      {
        q: "Can I get a stock count?",
        a: "Everything is barcoded and listed on an inventory, which you can reconcile with your own records.",
      },
      {
        q: "Can an employee release goods on my behalf?",
        a: "Only someone you have named as authorised. Tell us who when you set up the account.",
      },
      {
        q: "Do you store hazardous goods?",
        a: "Ask first. Flammable, chemical and perishable items need a conversation before we can accept them.",
      },
    ],
    serviceType: "Business storage with door-to-door collection",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Quote for storing company stock or equipment",
      p: "Send the list, the location and your dates, and we will return a free itemised quote.",
    },
    siblings: [PERSONAL, DOCS, HUB],
  },

  /* ------------------------------ DOCUMENTS ----------------------------- */
  {
    silo: "s13",
    path: DOCS,
    crumb: "Document Storage Abu Dhabi",
    navLabel: "Document storage",
    navBlurb: "Business records and archives held offsite, retrieved on notice.",
    title: "Document Storage in Abu Dhabi | Offsite Archive",
    description:
      "Document storage in Abu Dhabi: business records boxed, indexed and held offsite, retrievable on notice and delivered to your office. Monthly, no lock-in.",
    keywords:
      "document storage abu dhabi, archive storage abu dhabi, records storage abu dhabi, file storage abu dhabi, offsite document storage abu dhabi, business records storage",
    ogTitle: "Document Storage in Abu Dhabi",
    h1: "Document Storage in Abu Dhabi: Records Held Offsite",
    introH2: "Archives that leave the office but not your control",
    hero: [
      "A growing archive is one of the quietest costs of running a company. If you have been searching for [self storage in Abu Dhabi](/self-storage-abu-dhabi) because filing cabinets are crowding out desks, boxed records collected and held offsite are the cleaner answer.",
      "We collect the boxes from your office, label and index each one, and store them at our nearest facility. We have no warehouse in Abu Dhabi itself, so retrieval is a booked delivery, not a walk-in visit.",
      "When you need a file back, you ask for the box by reference and it comes to your office. Billing is monthly on the space used, with no lock-in.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What goes into an offsite archive",
        paras: [
          "The usual contents are the papers the law or an auditor requires you to keep and that nobody reads day to day: closed project files, old contracts, accounting records, HR files for former staff, and licence and registration paperwork from earlier years. They are low in activity and high in consequence, so they are exactly what should leave the office but remain findable.",
          "We store paper and boxed media, and records that reach the end of their retention period can be shredded on a schedule with a certificate of destruction. Where retention rules matter for your industry, confirm the period with your adviser before you decide when to release or dispose of anything.",
        ],
      },
      {
        kind: "steps",
        h2: "How the archive is built",
        items: [
          { h: "You box and list", p: "Standard archive boxes, each with a short contents list. We can advise on box type and weight before you start." },
          { h: "We label and barcode", p: "Every box gets a barcode tied to your reference, so a box can be found without opening neighbours." },
          { h: "Collection at the office", p: "The crew collects at an agreed time, with the building lift booked where needed." },
          { h: "Stored and indexed", p: "Boxes are racked together under 24/7 CCTV and indexed against your list." },
          { h: "Retrieval on notice", p: "Request a box by reference and it is delivered to your Abu Dhabi office, normally within 24 to 48 hours." },
        ],
      },
      {
        kind: "checklist",
        h2: "Preparing boxes that are easy to retrieve",
        items: [
          "Keep each box to one function or year, rather than mixing.",
          "Do not overfill; boxes should lift comfortably and close flat.",
          "Write the contents on the outside in the same wording as your index.",
          "Remove loose items, staples and bulky binders that crush other files.",
          "Separate anything confidential into its own boxes so access can be limited.",
        ],
        note: "A short written index is worth more than perfect packing.",
      },
      {
        kind: "table",
        h2: "Office archive or offsite: how to decide",
        columns: ["Record type", "Keep at the office?", "Offsite?"],
        rows: [
          ["Current contracts and live case files", "Yes", "No"],
          ["Closed files you may be audited on", "Rarely needed", "Yes, retrievable on notice"],
          ["Old HR and payroll files", "Not needed daily", "Yes, in separately indexed boxes"],
          ["Licence and registration history", "Latest only", "Yes, earlier years"],
        ],
        note: "Companies in [Al Khalidiyah](/locations/abu-dhabi/al-khalidiyah), [Al Bateen](/locations/abu-dhabi/al-bateen) and across the island often have tight premises, where moving the second row onwards offsite frees real floor space.",
      },
      {
        kind: "prose",
        h2: "Confidentiality and who can ask for a box",
        paras: [
          "Boxes are stored sealed and are identified by barcode and your reference, not by their contents. Release is only on instruction from the people you have named as authorised, and we confirm with them before a box leaves storage. Tell us if some boxes need a narrower list of authorised people than others.",
          "Business storage more broadly, including stock and equipment, is described on [business storage in Abu Dhabi](/business-storage-abu-dhabi). If you are also moving premises, the [Abu Dhabi movers page](/moving-storage-abu-dhabi) explains how the archive travels with everything else.",
        ],
      },
      {
        kind: "cards",
        h2: "Who uses offsite archives",
        items: [
          { icon: "📦", h: "Professional firms", p: "Accountants, consultants and legal offices with years of closed client files." },
          { icon: "🏭", h: "Contractors", p: "Completed project files and tender records that must be kept after handover." },
          { icon: "📦", h: "Free zone and ADGM companies", p: "Small offices that must retain records but cannot spare the floor." },
        ],
      },
    ],
    faqs: [
      {
        q: "Is the archive stored in Abu Dhabi?",
        a: "No. Our warehouses are in Dubai, Sharjah and Ajman. We collect from your Abu Dhabi office and deliver retrieved boxes back to it.",
      },
      {
        q: "How fast can I get a box back?",
        a: "Retrieval to an Abu Dhabi address is normally arranged within 24 to 48 hours. If it is urgent, say so when you request it.",
      },
      {
        q: "Do you scan or shred documents?",
        a: "We do not scan documents. Records that reach the end of their retention period can be cross-cut shredded on a schedule, with a certificate of destruction; otherwise boxes are returned on request.",
      },
      {
        q: "How do you find a particular box?",
        a: "Each box carries a barcode linked to your reference and index, so it is located without opening others.",
      },
      {
        q: "Can I limit who is allowed to request boxes?",
        a: "Yes. You name the authorised contacts, and we release boxes only on their instruction.",
      },
      {
        q: "Is there a minimum contract?",
        a: "No lock-in. Billing is monthly on the space your boxes use, and you can ask for everything back whenever you wish.",
      },
    ],
    serviceType: "Document and records storage with door-to-door collection",
    areaServed: "Abu Dhabi",
    cta: {
      h2: "Quote for storing your business records",
      p: "Tell us roughly how many boxes and where your office is. You will get a free itemised quote.",
    },
    siblings: [PERSONAL, BUSINESS, HUB],
  },
]
