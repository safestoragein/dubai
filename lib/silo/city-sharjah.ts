import type { SiloPageContent } from "./types"

/**
 * Silo s14 — Storage Sharjah. Hub + three children.
 * Facts used: warehouse in Sharjah (goods collected in Sharjah are stored there),
 * no street address published, no public pricing on AE pages, retrieval normally
 * 24–48 hours, archived documents need about a week's notice, we do not lease
 * warehouse units by the square metre.
 */

export const SHARJAH_STORAGE_HUB: SiloPageContent = {
  silo: "s14",
  path: "/self-storage-sharjah",
  crumb: "Storage Sharjah",
  navLabel: "Self storage in Sharjah",
  navBlurb: "Collection, storage and delivery from our Sharjah warehouse.",
  title: "Self Storage in Sharjah | We Collect, Store, Deliver",
  description:
    "Self storage in Sharjah with collection from your door. Wrapped, barcoded and held in our Sharjah warehouse, billed monthly on space used, no lock-in.",
  keywords:
    "self storage sharjah, storage in sharjah, storage units sharjah, storage sharjah, home storage sharjah, warehouse storage sharjah",
  ogTitle: "Self Storage in Sharjah",
  h1: "Self Storage in Sharjah: We Collect, Store and Deliver Back",
  introH2: "Storage in Sharjah, in brief",
  hero: [
    "Self storage in Sharjah usually means renting a unit, driving there with a loaded car and carrying everything in yourself. Ours works the other way round: we come to your door, wrap and barcode your things, and keep them in our Sharjah warehouse until you want them back. It sits alongside our [moving and storage service in Sharjah](/moving-storage-sharjah), and the same crews do both.",
    "This page explains how that works for people and companies in the emirate: what we collect, how the space is billed, how retrieval happens, and which of the three kinds of storage below fits you.",
    "Because the warehouse is in Sharjah, goods collected here stay here. Nothing is driven to Dubai and back to be stored, so a retrieval is a short trip to a Sharjah address.",
  ],
  sections: [
    {
      kind: "steps",
      h2: "How storage works, start to finish",
      intro: "The same five steps apply whether it is one wardrobe or a pallet of stock.",
      items: [
        { h: "Tell us what and where", p: "Send the district, the building and floor, roughly what is going and the date you want it collected. A photo of the pile does more than a list." },
        { h: "Get a free itemised quote", p: "Written, line by line, before anything is booked. We do not publish rates online, so the quote is where you see the numbers." },
        { h: "We collect and wrap at the door", p: "The crew wraps furniture where it stands, takes apart what is built to come apart and carries it out." },
        { h: "Everything is barcoded", p: "Each item is tagged and recorded in an inventory, so what is held is a list you can ask for rather than a promise." },
        { h: "Stored, then delivered back", p: "Held in the Sharjah warehouse and brought to any address you choose, in Sharjah or beyond, when you call." },
      ],
    },
    {
      kind: "table",
      h2: "Which kind of storage is yours",
      columns: ["You are", "Page", "What is different"],
      rows: [
        ["A household, student or expat with belongings to hold", "[Personal storage in Sharjah](/personal-storage-sharjah)", "Furniture and flat contents between leases, terms or countries"],
        ["A company with stock, equipment or fit-out material", "[Business storage in Sharjah](/business-storage-sharjah)", "Pallets and equipment, partial releases, no unit lease"],
        ["A company with records it has to keep", "[Document storage in Sharjah](/business-storage-sharjah/document-storage)", "Archive boxes held offsite, retrieved on notice"],
      ],
      note: "Not sure which? Describe what you have and we will tell you.",
    },
    {
      kind: "cards",
      h2: "What people put in storage here",
      items: [
        { icon: "📦", h: "Furniture and boxes", p: "Sofas, beds, wardrobes, appliances and boxed household goods, collected wrapped and kept as one inventory." },
        { icon: "📦", h: "Seasonal and overflow", p: "Winter clothes, sports gear, children's things and anything that makes a small flat feel smaller." },
        { icon: "📦", h: "Stock and equipment", p: "Trading stock, tools and display material for businesses without room for them." },
        { icon: "📦", h: "Records", p: "Paperwork that must be kept for years but is not needed on a desk." },
      ],
    },
    {
      kind: "prose",
      h2: "How the space is measured and billed",
      paras: [
        "You are billed monthly on the space your goods take up, not on a fixed unit size you chose in advance. If you put in a three-piece sofa and a few boxes, you pay for that, and if you take half of it back next month, the next bill is smaller. There is no lock-in period, so a short gap is charged as a short gap.",
        "Collection and delivery are quoted alongside the storage, in writing, so the first quote shows the whole picture instead of a storage figure with the movement added later.",
      ],
    },
    {
      kind: "prose",
      h2: "Getting things back",
      paras: [
        "Retrieval is normally arranged within 24 to 48 hours, and you can take back part of what is stored without disturbing the rest. Because each item is barcoded, we pull the piece you named rather than searching a stacked unit. Archive boxes are the exception, and need about a week's notice, because they are held to be kept rather than opened daily.",
        "Delivery does not have to go back to the address we collected from. Many Sharjah customers move between districts or to Dubai while their things are held, and the van goes wherever the new keys are.",
      ],
    },
    {
      kind: "prose",
      h2: "Why storage in Sharjah behaves the way it does",
      paras: [
        "The emirate has a large renting population living in towers in [Al Nahda](/locations/sharjah/al-nahda) and [Al Taawun](/locations/sharjah/al-taawun), many of whom work in Dubai and change flats when a lease or a commute changes. It has a student population around [University City](/locations/sharjah/university-city) that empties twice a year, and a working economy in the [industrial areas](/locations/sharjah/industrial-areas) that needs room for stock and files.",
        "Those three groups need the same thing for different reasons: somewhere safe and nearby to put things for a few weeks or a few years, without signing up for a space they will not fill. You can see every district we collect from on our [Sharjah locations page](/locations/sharjah).",
      ],
    },
    {
      kind: "checklist",
      h2: "Before you book, check",
      items: [
        "Is the quote itemised, in writing, and does it include collection and delivery?",
        "Is each item barcoded and listed, so you can see what is held?",
        "Is billing monthly on space used, with no minimum term?",
        "Can you take back part of it without paying for a full release?",
        "Is the warehouse in the same emirate as your goods?",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a storage facility in Sharjah?",
      a: "Yes. We operate a warehouse in Sharjah, and goods collected in Sharjah are stored there. We do not publish a street address, because customers do not turn up to it: the crew comes to you.",
    },
    {
      q: "Do I have to carry things to the facility myself?",
      a: "No. We collect from your door, wrap and barcode everything and bring it back on request. You can also be present if you prefer to supervise the loading.",
    },
    {
      q: "How is storage billed?",
      a: "Monthly, on the space your goods occupy, with no lock-in. Send what you have and we will give a free itemised quote before you commit to anything.",
    },
    {
      q: "Can I take out just one item?",
      a: "Yes. Retrieval is normally arranged within 24 to 48 hours and can be a single piece or a part of the load. Documents in archive boxes need about a week's notice.",
    },
    {
      q: "Is there a minimum storage period?",
      a: "No. You pay for the months you use, which suits the short gaps between leases, terms and job moves that most Sharjah storage covers.",
    },
    {
      q: "Do you also lease empty warehouse units?",
      a: "No. We take custody of your goods and store them ourselves. If you need a unit of your own to run, a commercial property agent is the right call.",
    },
  ],
  serviceType: "Self storage",
  areaServed: "Sharjah",
  cta: {
    h2: "Need storage in Sharjah?",
    p: "Send the district, what you have and a date, and we will send a free itemised quote for collection, storage and delivery.",
  },
  siblings: [
    "/personal-storage-sharjah",
    "/business-storage-sharjah",
    "/business-storage-sharjah/document-storage",
  ],
}

export const SHARJAH_STORAGE_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------------ personal */
  {
    silo: "s14",
    path: "/personal-storage-sharjah",
    crumb: "Personal storage",
    navLabel: "Personal storage",
    navBlurb: "Furniture and flat contents held between leases, terms and countries.",
    title: "Personal Storage in Sharjah | Furniture and Home Items",
    description:
      "Personal storage in Sharjah for furniture and household contents. We collect, wrap and barcode, store locally, and deliver back. Monthly, no lock-in.",
    keywords:
      "personal storage sharjah, household storage sharjah, furniture storage sharjah, home storage sharjah, student storage sharjah, storage between leases sharjah",
    ogTitle: "Personal Storage in Sharjah",
    h1: "Personal Storage in Sharjah for Your Furniture and Flat Contents",
    introH2: "Personal storage, in brief",
    hero: [
      "Personal storage in Sharjah is for the moment your belongings have nowhere to be: a lease that ended first, a flat too small for what you own, a posting abroad. It is part of our wider [self storage in Sharjah](/self-storage-sharjah) service, and it is the version built for households rather than companies.",
      "You do not hire a unit and fill it yourself. We come to the flat or villa, wrap and tag everything, and keep it in our Sharjah warehouse until you ask for it back.",
      "This page covers who uses it, what goes in, how long things usually stay and how to get a quote.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Who uses personal storage in Sharjah",
        items: [
          { icon: "📦", h: "Between leases", p: "Your Sharjah tenancy ends before the next one begins, often by a fortnight or a month. Everything is held until the new keys arrive." },
          { icon: "📦", h: "Students", p: "Rooms near University City are emptied at the end of term. Storing the contents beats paying for a room through a summer you are away for." },
          { icon: "📦", h: "Expats leaving or posted away", p: "Furniture you want to keep but cannot ship yet, held while you decide where you land." },
          { icon: "📦", h: "Downsizers and growing families", p: "A smaller flat now, or a baby's things you will need again, without throwing away good furniture." },
        ],
      },
      {
        kind: "prose",
        h2: "From a Nahda tower to a Muwaileh villa",
        paras: [
          "A one-bedroom in [Al Nahda](/locations/sharjah/al-nahda) or [Al Taawun](/locations/sharjah/al-taawun) is often a lift booking, a loading window and a long carry; a villa in [Muwaileh](/locations/sharjah/muwaileh) is a gate, a garage and a bigger inventory. We plan each differently, which is why we ask for the building and floor first.",
          "Older central streets such as [Rolla](/locations/sharjah/rolla) and [Al Ghuwair](/locations/sharjah/al-ghuwair) can have narrow access where the van cannot stand at the door. Tell us and we will plan the carry, so the quote reflects the real job.",
        ],
      },
      {
        kind: "steps",
        h2: "How a personal collection runs",
        items: [
          { h: "Send photos and the address", p: "A short video walk through the rooms is enough for a flat. Larger homes get a visit." },
          { h: "Receive the written quote", p: "Itemised and free, covering collection, storage and the later delivery." },
          { h: "We wrap on the day", p: "Furniture is wrapped where it stands. Beds and wardrobes that come apart are taken apart and the fittings bagged and labelled." },
          { h: "Barcode and record", p: "Each piece and each box gets a tag, and you receive the list." },
          { h: "Store, then deliver", p: "The load stays in Sharjah until you give a date and an address." },
        ],
      },
      {
        kind: "checklist",
        h2: "What to put in, and what to keep with you",
        intro: "Most household goods can go. A few things are better kept in your own hands.",
        items: [
          "Furniture, mattresses, rugs, appliances and boxed household contents.",
          "Anything you will not need for weeks: out-of-season clothes, sports gear, décor.",
          "Mark items you want left behind with tape so the crew skips them.",
          "Keep passports, jewellery, cash and important papers with you.",
          "Empty and defrost fridges and freezers beforehand.",
        ],
        note: "If you are unsure about a specific item, ask before the collection day.",
      },
      {
        kind: "prose",
        h2: "How long things usually stay",
        paras: [
          "Personal storage in Sharjah tends to be short: a few weeks for a lease gap, three months for a summer, and longer for an overseas posting. Because billing is monthly on the space used with no lock-in, you can start with a guess and extend or end it without a penalty.",
          "If your plans change, delivery goes to whichever address you give. A move from Sharjah to Dubai is a regular case, and the barcoded list simply travels with it. For the move itself, see our [movers in Sharjah](/moving-storage-sharjah).",
        ],
      },
      {
        kind: "prose",
        h2: "Summer and term-end",
        paras: [
          "Two periods fill collection diaries: the end of the academic year and the summer travel season. If you are in [University City](/locations/sharjah/university-city) or leaving for the holidays, book the collection date early. Storage is only charged from when we actually collect.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I store just a few boxes and a mattress?",
        a: "Yes. You pay for the space used, so a small load is a small bill. There is no minimum unit size to rent.",
      },
      {
        q: "Will my furniture be wrapped?",
        a: "Yes. Wrapping at your door is part of every collection, and pieces that come apart are taken apart and labelled.",
      },
      {
        q: "Can I get one item back without emptying everything?",
        a: "Yes. Because every item is barcoded, we pull the piece you name. Retrieval is normally arranged within 24 to 48 hours.",
      },
      {
        q: "Can the delivery go to Dubai instead of Sharjah?",
        a: "Yes. Delivery goes to any address you choose. Many people store in Sharjah and take delivery in Dubai when the new tenancy starts.",
      },
      {
        q: "How do I find out the cost?",
        a: "Send photos or a list with your district and we will give a free itemised quote. We do not publish prices online.",
      },
      {
        q: "Do I need to be there on the day?",
        a: "Someone should be present to let the crew in and confirm what goes. After that you can leave the rest to us.",
      },
    ],
    serviceType: "Household storage",
    areaServed: "Sharjah",
    cta: {
      h2: "Need to store your belongings in Sharjah?",
      p: "Send a few photos, the building and a date, and we will send a free itemised quote.",
    },
    siblings: ["/business-storage-sharjah", "/business-storage-sharjah/document-storage", "/self-storage-sharjah"],
  },

  /* ------------------------------------------------------------ business */
  {
    silo: "s14",
    path: "/business-storage-sharjah",
    crumb: "Business storage",
    navLabel: "Business storage",
    navBlurb: "Stock, equipment and pallets held for Sharjah companies.",
    title: "Business Storage in Sharjah | Stock and Equipment",
    description:
      "Business storage in Sharjah for stock, equipment and pallets. We collect, barcode and hold it locally, release part loads on request. Monthly, no lock-in.",
    keywords:
      "business storage sharjah, commercial storage sharjah, stock storage sharjah, warehouse storage sharjah, pallet storage sharjah, sajaa storage, industrial area storage sharjah",
    ogTitle: "Business Storage in Sharjah",
    h1: "Business Storage in Sharjah for Stock, Equipment and Pallets",
    introH2: "Business storage, in brief",
    hero: [
      "Business storage in Sharjah is for the company whose goods have outgrown its premises, or never had any. It is the commercial side of our [self storage in Sharjah](/self-storage-sharjah), and works on the same principle: we take custody of what you give us and hold it in our own Sharjah warehouse.",
      "That is different from renting a warehouse. You are not signing a lease on a unit or paying for the empty part of it. You pay monthly on the floor space your goods actually occupy.",
      "Below is how it suits trading firms, contractors and free-zone companies, what we do and do not do, and how part-load releases work.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Storage, not warehouse leasing",
        paras: [
          "A lot of searches around Sajaa and the Sharjah industrial areas are for a unit to rent by the square metre. We do not lease units. We store your goods in our warehouse, record them and bring them out when you ask, so the cost follows your stock rather than a lease term.",
          "If you need your own space to run an operation, a commercial property agent is the right call. If you need to get stock, kit or fit-out material off expensive floor space for a few weeks or years, that is what we do.",
        ],
      },
      {
        kind: "cards",
        h2: "What Sharjah businesses store with us",
        items: [
          { icon: "📦", h: "Trading stock", p: "Inventory that is not moving yet, held on pallets or in cartons outside the shop or workshop." },
          { icon: "📦", h: "Equipment between jobs", p: "Tools, machines and site kit stored between contracts instead of cluttering a small unit." },
          { icon: "📦", h: "Fit-out and display material", p: "Shopfittings, signage, exhibition stands and event props with long gaps between uses." },
          { icon: "📦", h: "Office contents", p: "Desks, chairs and equipment from an office being reduced or relocated." },
        ],
      },
      {
        kind: "table",
        h2: "Where Sharjah companies come from",
        columns: ["Location", "Typical need", "What we do"],
        rows: [
          ["[Industrial areas and Sajaa](/locations/sharjah/industrial-areas)", "Stock and equipment overflow, outside floor space that costs rent", "Collect from the unit or yard and hold pallets or cartons"],
          ["Free-zone companies", "Goods held for a licence that has no warehouse of its own", "Store in Sharjah and release against your instruction"],
          ["[Al Qasimia](/locations/sharjah/al-qasimia) and central commercial streets", "Shops and offices short of back-room space", "Take the overflow and bring it back in small drops"],
          ["[Al Nahda](/locations/sharjah/al-nahda) and [Al Taawun](/locations/sharjah/al-taawun) offices", "Small teams keeping materials and samples", "Hold boxed stock and furniture"],
        ],
      },
      {
        kind: "steps",
        h2: "How a business job runs",
        items: [
          { h: "Describe the load", p: "What it is, how it is packed (pallets, cartons, loose), the approximate volume and how often you will need it back." },
          { h: "Free itemised quote", p: "Written, covering collection, storage and the deliveries you expect. No rates are published online." },
          { h: "Collection and tagging", p: "Goods are collected, wrapped where needed and barcoded against your own list or ours." },
          { h: "Held in Sharjah", p: "Stored in our Sharjah warehouse, billed monthly on the space used, with no lock-in." },
          { h: "Part releases", p: "Ask for a pallet or a few cartons and we deliver exactly that. The rest stays put." },
        ],
      },
      {
        kind: "prose",
        h2: "Stock you will need back in pieces",
        paras: [
          "Most commercial storage is not all-or-nothing. A trader stores a season of inventory and draws it down in drops; a contractor stores kit and wants one crate for a job next week. Because each pallet and carton carries its own barcode, a part release is a pick rather than an unload.",
          "Retrieval is normally arranged within 24 to 48 hours. Give us a day's notice for bigger pulls and we will plan the vehicle to match.",
        ],
      },
      {
        kind: "checklist",
        h2: "What to prepare before collection",
        items: [
          "A list or packing note by pallet or carton, even a rough one.",
          "Clear loading access at the unit, yard or building, with permits or gate passes arranged.",
          "Labels on anything that must be delivered to different addresses later.",
          "A named contact who can authorise releases.",
          "Notes on anything fragile, heavy or needing to stay upright.",
        ],
        note: "We will check access with you before the vehicle is sent.",
      },
      {
        kind: "prose",
        h2: "Records are a separate case",
        paras: [
          "If what you need to hold is paper, archive boxes and files, there is a dedicated service with its own handling and retrieval rules. See [document storage in Sharjah](/business-storage-sharjah/document-storage) for how that works.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you rent out warehouse units in Sharjah?",
        a: "No. We store your goods in our own warehouse and bring them back on request. If you need a unit of your own, you want a commercial property agent.",
      },
      {
        q: "Can you collect from the Sharjah industrial areas?",
        a: "Yes. We collect from the industrial areas and Sajaa, as well as shops, offices and free-zone addresses. Send the location and loading access details and we will confirm.",
      },
      {
        q: "Can I take back part of my stock?",
        a: "Yes. Each pallet or carton is barcoded, so we release exactly what you name. Retrieval is normally arranged within 24 to 48 hours.",
      },
      {
        q: "How is business storage billed?",
        a: "Monthly, on the floor space your goods occupy, with no lock-in. We give a free itemised quote before you commit.",
      },
      {
        q: "I am a free-zone company with no premises. Can you help?",
        a: "Often, yes. We can hold your goods in Sharjah and deliver them to customers or sites on your instruction. Tell us what you hold and how it moves.",
      },
      {
        q: "Is there a minimum quantity?",
        a: "No fixed minimum. A few cartons or a few pallets are both fine, and you pay for the space used.",
      },
    ],
    serviceType: "Business storage",
    areaServed: "Sharjah",
    cta: {
      h2: "Need business storage in Sharjah?",
      p: "Send the load, the location and how often you will need it back, and we will send a free itemised quote.",
    },
    siblings: ["/personal-storage-sharjah", "/business-storage-sharjah/document-storage", "/self-storage-sharjah"],
  },

  /* ----------------------------------------------------- document storage */
  {
    silo: "s14",
    path: "/business-storage-sharjah/document-storage",
    crumb: "Document storage",
    navLabel: "Document storage",
    navBlurb: "Business records held offsite and retrieved on notice.",
    title: "Document Storage in Sharjah | Offsite Business Records",
    description:
      "Document storage in Sharjah for business records and archives. Boxes collected, catalogued, held offsite and retrieved on notice. Monthly, no lock-in.",
    keywords:
      "document storage sharjah, archive storage sharjah, records storage sharjah, file storage sharjah, offsite document storage sharjah, business archive sharjah",
    ogTitle: "Document Storage in Sharjah",
    h1: "Document Storage in Sharjah: Business Records Held Offsite",
    introH2: "Document storage, in brief",
    hero: [
      "Document storage in Sharjah is for the paperwork a company must keep but does not want on its desks: old contracts, invoices, staff files, project drawings. It is one of the three services within our [self storage in Sharjah](/self-storage-sharjah), and is the one built around boxes and notice, not pallets and pick-ups.",
      "We collect your archive boxes, record what is in each, and hold them in our Sharjah warehouse. When you need one back, you tell us and it comes to your office.",
      "Below is what we store, how the catalogue works, how much notice retrieval needs, and what to prepare.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Records you keep, not records you use",
        paras: [
          "Documents in offsite storage have a different life from goods in storage. Nobody opens last year's invoices daily; they are held because a retention period, an audit or a dispute might one day require them. That is why archive retrieval works on notice rather than on the same-day basis of other storage.",
          "Archived documents need about a week's notice, because they are stored to be kept rather than accessed daily. Plan for that when you decide what stays at the office and what goes.",
        ],
      },
      {
        kind: "cards",
        h2: "What Sharjah companies archive",
        items: [
          { icon: "📦", h: "Accounts and invoices", p: "Ledgers, vouchers, invoices and bank papers held for the period your auditors or regulators expect." },
          { icon: "📦", h: "Contracts and legal files", p: "Signed agreements, trade licences, tenancy papers and correspondence." },
          { icon: "📦", h: "HR and staff files", p: "Personnel records for current and former employees." },
          { icon: "📦", h: "Project and technical drawings", p: "Plans, drawings and job files from completed projects, often bulky." },
        ],
      },
      {
        kind: "steps",
        h2: "From your office to the archive",
        items: [
          { h: "Box and label", p: "Pack files into sturdy boxes and write a department, a year range and a short description on the outside." },
          { h: "Send us the list", p: "Even a simple spreadsheet of boxes and contents is enough. It becomes your retrieval index." },
          { h: "We collect and barcode", p: "Each box receives its own barcode, tied to your list, so a request names a box, not a guess." },
          { h: "Held in Sharjah", p: "Boxes are stored together in the warehouse, billed monthly on the space used, with no lock-in." },
          { h: "Retrieve on notice", p: "Tell us which box you need; with about a week's notice it is delivered to your office." },
        ],
      },
      {
        kind: "table",
        h2: "Documents versus other storage",
        columns: ["", "Document storage", "Goods storage"],
        rows: [
          ["Packaging", "Archive boxes, indexed", "Pallets, cartons, wrapped furniture"],
          ["Retrieval", "On notice, about a week", "Normally 24 to 48 hours"],
          ["Access pattern", "Rare, specific boxes", "Part and full releases"],
          ["See", "This page", "[Business storage in Sharjah](/business-storage-sharjah)"],
        ],
        note: "A company often has both: stock in one place and records in another. Both can sit under one quote.",
      },
      {
        kind: "checklist",
        h2: "How to prepare an archive",
        items: [
          "Sort by department and year before boxing, so each box is a coherent unit.",
          "Use sturdy boxes of one size where you can, so they stack and store evenly.",
          "Write the contents on the outside and keep a copy of the index at the office.",
          "Remove anything you must keep on hand: originals needed this year, current licences.",
          "Note any confidential files so they can be handled and recorded accordingly.",
        ],
      },
      {
        kind: "prose",
        h2: "Closing or moving an office",
        paras: [
          "Many archives start at a moment of change: an office moves from [Al Nahda](/locations/sharjah/al-nahda) to a smaller space, a company winds down or a free-zone licence is restructured. The paperwork is the one thing that cannot be thrown away, and the last thing anyone wants to carry.",
          "We can collect the archive in one visit and hold it until you know where it will live. If you have furniture and equipment to clear at the same time, it can be quoted together under [business storage in Sharjah](/business-storage-sharjah).",
        ],
      },
      {
        kind: "prose",
        h2: "What we ask of you",
        paras: [
          "You decide what to keep and for how long. We store and retrieve. Check the retention rules that apply to your own business and sector before you decide what to destroy, and keep your index up to date, since the index is how a box is found again.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much notice do you need to retrieve a box?",
        a: "About a week. Archives are stored to be kept rather than accessed daily, so retrieval is planned rather than same day.",
      },
      {
        q: "Do you collect from our office?",
        a: "Yes. We collect from offices in Sharjah, tag each box with its own barcode and record it against your list.",
      },
      {
        q: "Can I bring my own boxes?",
        a: "Yes. Sturdy, uniform boxes with clear labels work best. If you do not have them, ask us before packing.",
      },
      {
        q: "How is it billed?",
        a: "Monthly, on the space the boxes occupy, with no lock-in. We give a free itemised quote and do not publish prices online.",
      },
      {
        q: "Can I retrieve just one file rather than a whole box?",
        a: "Retrieval is by box, so label your boxes carefully and keep them small enough to be sensible to return. Tell us the box and we deliver it.",
      },
      {
        q: "Is document storage the same as a data room or scanning?",
        a: "No. We store physical paper and do not run a scanning or digital archive service. Records can be returned on request or shredded at the end of their retention period, with a certificate of destruction.",
      },
    ],
    serviceType: "Document storage",
    areaServed: "Sharjah",
    cta: {
      h2: "Need to archive business records in Sharjah?",
      p: "Tell us roughly how many boxes and where they are, and we will send a free itemised quote.",
    },
    siblings: ["/personal-storage-sharjah", "/business-storage-sharjah", "/self-storage-sharjah"],
  },
]
