import type { SiloPageContent } from "./types"

/**
 * AJMAN self-storage silo (s15): one hub plus three children.
 * No public pricing anywhere on AE pages (owner rule) - the quote is free and itemised.
 * No street address is published; pages say the Ajman warehouse exists and stop.
 */

const HUB = "/self-storage-ajman"
const PERSONAL = "/personal-storage-ajman"
const BUSINESS = "/business-storage-ajman"
const DOCS = "/business-storage-ajman/document-storage"

export const AJMAN_STORAGE_HUB: SiloPageContent = {
  silo: "s15",
  path: HUB,
  crumb: "Self Storage Ajman",
  navLabel: "Self storage in Ajman",
  navBlurb: "Collection, barcoded storage and delivery back, all inside Ajman.",
  title: "Self Storage Ajman | Collected, Stored Locally",
  description:
    "Self storage in Ajman where we collect from your door, barcode every item, store it in our Ajman warehouse and bring it back when asked. No lock-in.",
  keywords:
    "self storage ajman, storage ajman, storage units ajman, furniture storage ajman, short term storage ajman, business storage ajman, تخزين عجمان",
  ogTitle: "Self Storage in Ajman",
  h1: "Self Storage in Ajman: We Collect, Store and Deliver Back",
  introH2: "What self storage means here",
  hero: [
    "Self storage in Ajman usually means renting a box and doing the carrying yourself. Ours works the other way round: a crew comes to your address, wraps what you are keeping, and takes it to our Ajman warehouse. You pay for the space your belongings use, month to month, and nothing ties you in. Dubai and Sharjah have their own pages at [self storage in Dubai](/self-storage-dubai) and [moving and storage in the UAE](/moving-storage-uae).",
    "The service suits the way Ajman actually lives. Plenty of residents work across the border, flats are compact, and leases end on dates that rarely match the next home. A warehouse inside the emirate means goods collected here are kept here, and a retrieval is a short local delivery rather than a cross-emirate haul.",
    "This page explains how the process runs, what fits, how retrieval works and who tends to use it. For household goods, company stock or office records, follow the pages below.",
  ],
  sections: [
    {
      kind: "steps",
      h2: "From a phone call to a stored inventory",
      intro: "Every job follows the same five steps, whether it is a few boxes or a full flat.",
      items: [
        { h: "Describe what you have", p: "Tell us the district, the building, the floor and roughly what is going into storage. Photos help more than adjectives." },
        { h: "Receive a free itemised quote", p: "It is written down line by line, so you can see what is included before anyone arrives. Request it on the [quote page](/get-quote)." },
        { h: "Wrapping at the door", p: "The crew wraps furniture and packs loose items at your address, so nothing is handled bare on the way down." },
        { h: "Barcoding and inventory", p: "Each item or carton is labelled and listed. That list is how we find and return exactly what you ask for." },
        { h: "Storage and delivery back", p: "Goods sit in the Ajman warehouse. When you want some or all of it back, we deliver to the address you give us." },
      ],
    },
    {
      kind: "cards",
      h2: "Who uses storage in Ajman",
      items: [
        { icon: "🛋️", h: "Households between leases", p: "A tenancy ends on the 30th and the new one starts on the 15th. The furniture waits in between instead of crowding a friend's spare room." },
        { icon: "🚗", h: "Commuters trimming a flat", p: "Moving to a smaller place closer to a Dubai or Sharjah job often leaves one room's worth of belongings with nowhere to go." },
        { icon: "✈️", h: "People leaving or travelling", p: "Expats on a long trip home, or students going away for the summer, keep things safe without paying to keep a flat." },
        { icon: "📦", h: "Free Zone and industrial firms", p: "Companies licensed in the Free Zone or working from Al Jurf units often have stock and equipment but little room." },
        { icon: "🗄️", h: "Offices with paper to keep", p: "Records that must be retained but are rarely opened move offsite, and come back on notice." },
        { icon: "🏠", h: "Homes being renovated", p: "Furniture out of the way, protected and listed, while the work is done." },
      ],
    },
    {
      kind: "table",
      h2: "What fits, and what to ask about first",
      intro: "Most household and business goods are straightforward. A few categories need a conversation before collection.",
      columns: ["Kind of item", "How we handle it", "Mention it when you ask"],
      rows: [
        ["Sofas, beds, wardrobes, tables", "Wrapped at the door, taken apart where they are built to be", "Anything that will not fit a stairwell or lift"],
        ["Boxes and loose household goods", "Packed or labelled, and listed on the inventory", "Fragile or high-value items"],
        ["Appliances and electronics", "Wrapped and labelled for the right shelf", "Large fridges or washing machines"],
        ["Business stock and pallets", "Received, listed and held by line or pallet", "Pallet count and how often you need pick-outs"],
        ["Files and archive boxes", "Held as sealed, numbered cartons", "Retention needs; see [document storage](/business-storage-ajman/document-storage)"],
        ["Hazardous, perishable or illegal goods", "Not accepted", "Ask first if you are unsure"],
      ],
      note: "We give guidance on what goes into storage, not a guarantee that every item suits it. If something is delicate, say so at the quote stage.",
    },
    {
      kind: "prose",
      h2: "Retrieval in Ajman",
      paras: [
        "Getting things back is half of what storage is for, so it is built into the service. Tell us what you want, and where and when, and we bring it. A single sofa for a guest room is a legitimate request, as is the whole lot when you move in.",
        "Because the warehouse and your address are both in Ajman, deliveries do not depend on a long drive across the border. Buildings with tower lifts or a gate procedure are arranged in advance, the same way they were at collection, so the day runs without waiting.",
        "Keep a note of the building and floor you will be delivering to, and tell us if it differs from where we collected. We would rather adjust the plan a day early than discover a narrow door on the day.",
      ],
    },
    {
      kind: "prose",
      h2: "Where in Ajman we collect",
      paras: [
        "We collect across the emirate: the towers of [Al Nuaimiya](/locations/ajman/al-nuaimiya), central [Al Rashidiya](/locations/ajman/al-rashidiya), the waterfront at the [Corniche](/locations/ajman/corniche), villas around [Al Mowaihat](/locations/ajman/al-mowaihat) and [Garden City](/locations/ajman/garden-city), newer homes in [Emirates City](/locations/ajman/emirates-city), and business premises in [Al Jurf](/locations/ajman/al-jurf) and the [Free Zone](/locations/ajman/free-zone). The full list is on our [Ajman coverage page](/locations/ajman). If your district is not named, send the address.",
        "The same Ajman team also moves furniture and households between addresses. If you need that rather than storage alone, see [movers in Ajman](/moving-storage-ajman).",
      ],
    },
    {
      kind: "checklist",
      h2: "Getting your goods ready",
      intro: "A little preparation shortens the collection and makes the inventory more useful.",
      items: [
        "Empty and defrost fridges and freezers the day before, and leave the doors ajar.",
        "Drain washing machines and disconnect anything plumbed in.",
        "Set aside anything you will need in the next few weeks so it does not go in.",
        "Take valuables, documents and passports with you.",
        "Tell us the size of the lift and any booking window the building imposes.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have a warehouse in Ajman?",
      a: "Yes. Goods collected in Ajman are stored in our Ajman warehouse and are not taken to another emirate and back.",
    },
    {
      q: "How am I charged?",
      a: "Monthly, on the space your goods use. There is no lock-in, so you can reduce or end storage when you are ready. Ask for a free itemised quote and we will set it out in writing.",
    },
    {
      q: "Can I visit my belongings?",
      a: "Items are retrieved and delivered to your address on request. If you need to inspect something, tell us when you ask and we will arrange it.",
    },
    {
      q: "Do I have to move the items myself?",
      a: "No. The crew wraps, loads and carries from your address, and delivers back to wherever you tell us.",
    },
    {
      q: "Can businesses use the same service?",
      a: "Yes. Companies in the Free Zone, Al Jurf and elsewhere store stock, equipment and records with us. See our [business storage in Ajman](/business-storage-ajman).",
    },
    {
      q: "How do I get a quote?",
      a: "Use the [quote form](/get-quote) or [contact us](/contact) with your district, building and rough list. The quote is free and itemised.",
    },
  ],
  serviceType: "Self storage with collection and delivery",
  areaServed: "Ajman",
  cta: {
    h2: "Tell us what you are storing in Ajman",
    p: "Send the district, the building and a rough list. We will reply with a free itemised quote.",
  },
  siblings: [PERSONAL, BUSINESS, DOCS],
}

export const AJMAN_STORAGE_PAGES: SiloPageContent[] = [
  // ---------------------------------------------------------------- personal
  {
    silo: "s15",
    path: PERSONAL,
    crumb: "Personal Storage Ajman",
    navLabel: "Personal storage",
    navBlurb: "Furniture and household goods held while your plans catch up.",
    title: "Personal Storage Ajman | Furniture and Home Items",
    description:
      "Personal storage in Ajman for furniture, flat and villa contents. We collect, wrap and barcode, store locally and deliver back. Billed monthly, no lock-in.",
    keywords:
      "personal storage ajman, furniture storage ajman, household storage ajman, home storage ajman, storage between leases ajman, expat storage ajman",
    h1: "Personal Storage in Ajman for Furniture and Household Goods",
    introH2: "Storage for the things you are not ready to part with",
    hero: [
      "Personal storage is for the moment your belongings and your address stop matching. It is part of our wider [self storage in Ajman](/self-storage-ajman) service, aimed at furniture, flat or villa contents, boxes and seasonal items that need a safe place for a few weeks or a few years.",
      "Ajman's housing makes that moment common. Many people rent compact flats in towers and commute to Dubai or Sharjah, so a change of job, a rent rise or a lease that ends before the next one starts can leave a household with a sofa and nowhere to put it.",
      "We collect from your home, wrap each piece at the door, barcode a written inventory and store it in Ajman. You pay monthly for the space used and can stop whenever you like.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Situations where personal storage helps",
        items: [
          { icon: "🔑", h: "The gap between two leases", p: "The old tenancy ends before the new one begins. Everything goes into storage on the day and out again when you have the keys." },
          { icon: "📉", h: "Downsizing a flat", p: "Moving to a smaller place nearer work rarely means giving up the dining table. Store the extra instead of selling it at a loss." },
          { icon: "✈️", h: "Leaving for months or for good", p: "Expats heading home or abroad for a long stay can clear the flat on time and decide later what to ship." },
          { icon: "🔨", h: "Renovation or repainting", p: "Furniture out and wrapped for the duration, then returned to the finished room." },
          { icon: "🎓", h: "Students and short postings", p: "Summer and semester breaks, or a short contract away, without paying rent on an empty room." },
          { icon: "🎄", h: "Seasonal and rarely used items", p: "Fans, decorations, sports kit and spare mattresses live elsewhere until the season returns." },
        ],
      },
      {
        kind: "prose",
        h2: "Towers, villas and the lift question",
        paras: [
          "Most Ajman collections start in a tower. In places like [Al Nuaimiya](/locations/ajman/al-nuaimiya) and the [Corniche](/locations/ajman/corniche), the service lift is shared and often has to be booked. Tell us the building and we arrange the slot with the crew, so wrapping and carrying happen inside the time you were given.",
          "Villa and compound homes around [Al Mowaihat](/locations/ajman/al-mowaihat) and [Garden City](/locations/ajman/garden-city) bring a different set of details: a garage with a lifetime of boxes, a majlis with heavy seating, and a gate procedure that needs the visitors named in advance. We ask for these upfront so nothing is left until the morning.",
          "Newer neighbourhoods such as [Emirates City](/locations/ajman/emirates-city) often involve furniture that arrives before the home is ready. Holding it for a month is a normal reason to call.",
        ],
      },
      {
        kind: "steps",
        h2: "How a household collection runs",
        items: [
          { h: "Share a rough list", p: "Rooms, large pieces, number of boxes, and the district and floor. A video walk-through of the flat works well." },
          { h: "Quote in writing", p: "A free itemised quote through the [quote form](/get-quote), before any booking is confirmed." },
          { h: "The crew arrives", p: "They wrap furniture, pack the loose items and take apart what is built to come apart, labelling the fixings." },
          { h: "Every item is barcoded", p: "The inventory is yours to see, so you know what is stored and what to ask for." },
          { h: "Ask for it back", p: "Whole or in part, to the same flat or a new address, on a date you choose." },
        ],
      },
      {
        kind: "table",
        h2: "What people store and how it is handled",
        columns: ["Item", "Preparation", "Good to know"],
        rows: [
          ["Sofas and armchairs", "Wrapped whole or in sections", "Tell us if the cushions are loose"],
          ["Beds and mattresses", "Frame taken apart, mattress covered and kept flat", "Keep the hardware labelled"],
          ["Wardrobes and shelving", "Panels protected, fixings bagged to the piece", "Measure doors and lifts first"],
          ["Dining sets and glass", "Padded, glass edges protected", "Mention anything fragile"],
          ["Boxes of clothes and books", "Packed and numbered", "Heavy small boxes are easier to lift than big ones"],
          ["Appliances", "Emptied, dried and wrapped", "Defrost fridges a day early"],
        ],
      },
      {
        kind: "checklist",
        h2: "Before the crew comes",
        items: [
          "Walk through the flat and decide what stays out, so the inventory is correct.",
          "Keep passports, jewellery, cash and important papers with you.",
          "Empty drawers of anything liquid, sharp or breakable.",
          "Book the building's lift or loading bay if it needs a slot.",
          "Photograph valuable pieces for your own records.",
        ],
        note: "If you are not sure whether an item suits storage, ask when you request the quote.",
      },
      {
        kind: "prose",
        h2: "Moving as well as storing",
        paras: [
          "If your goods are going to a new home rather than simply waiting, the same team handles the move. See [movers in Ajman](/moving-storage-ajman) for how packing and moving run, and our [UAE moving and storage](/moving-storage-uae) page for moves between emirates.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can I store household items?",
        a: "As long as you like. Billing is monthly on the space used with no lock-in, so a fortnight and a year are both normal.",
      },
      {
        q: "Will you collect from my building if the lift needs booking?",
        a: "Yes. Give us the building and floor and we plan around its lift booking, loading bay or gate procedure.",
      },
      {
        q: "Can I take back a single item?",
        a: "Yes. The inventory lets us find one piece and deliver just that, without disturbing the rest.",
      },
      {
        q: "Is my furniture wrapped?",
        a: "Yes. Wrapping at the door is part of collection, and what is built to come apart is taken apart and labelled.",
      },
      {
        q: "I am leaving the UAE. Can you hold my belongings?",
        a: "Yes. Many people store while they decide what to ship or sell. There is no minimum term.",
      },
      {
        q: "How do I find out the cost?",
        a: "Request a free itemised quote with your district, building and rough list. Prices are given in the quote rather than on this page.",
      },
    ],
    serviceType: "Household storage with collection and delivery",
    areaServed: "Ajman",
    cta: {
      h2: "Get your Ajman household storage quote",
      p: "Tell us the district and what you are keeping. The quote is free and itemised.",
    },
    siblings: [HUB, BUSINESS, DOCS],
  },

  // ---------------------------------------------------------------- business
  {
    silo: "s15",
    path: BUSINESS,
    crumb: "Business Storage Ajman",
    navLabel: "Business storage",
    navBlurb: "Stock, equipment and pallets for Ajman companies.",
    title: "Business Storage Ajman | Stock and Equipment",
    description:
      "Business storage in Ajman for stock, equipment, pallets and records. Collected from Free Zone, Al Jurf or office, stored locally and billed monthly.",
    keywords:
      "business storage ajman, commercial storage ajman, warehouse storage ajman, free zone storage ajman, al jurf storage, pallet storage ajman, stock storage ajman",
    h1: "Business Storage in Ajman for Stock, Equipment and Pallets",
    introH2: "Storage that follows the size of your business",
    hero: [
      "Business storage is the commercial side of our [self storage in Ajman](/self-storage-ajman) service. We take stock, equipment, fixtures and pallets from your premises, hold them in the Ajman warehouse, and deliver them to a customer, a site or back to you.",
      "Companies in the emirate come in two kinds. Some operate from industrial units in [Al Jurf](/locations/ajman/al-jurf) with more activity than space. Others hold a licence in the [Free Zone](/locations/ajman/free-zone) and run lean, with stock that needs to be somewhere but not in the office.",
      "Space is billed monthly on what you use, with no long contract to outgrow. A seasonal peak can be held through the busy months and cleared afterwards.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What Ajman businesses put into storage",
        items: [
          { icon: "📦", h: "Inventory and retail stock", p: "Goods for online sellers and small shops that outgrew a back room. Cartons are listed and can be pulled by line." },
          { icon: "🧱", h: "Pallets", p: "Palletised goods held and released in lots, useful for distributors and importers working to delivery windows." },
          { icon: "🛠️", h: "Tools and site equipment", p: "Contractors and fit-out firms keep kit between projects instead of leaving it at a site." },
          { icon: "🪑", h: "Office furniture and fixtures", p: "Desks and shelving from a closed or downsized office, held until the next premises is ready." },
          { icon: "🎪", h: "Event and display material", p: "Stands, banners and props between trade shows." },
          { icon: "🗄️", h: "Archives and files", p: "Records that are kept for compliance. See [document storage](/business-storage-ajman/document-storage)." },
        ],
      },
      {
        kind: "prose",
        h2: "Free Zone and Al Jurf, two different needs",
        paras: [
          "A Free Zone company often holds a licence and a desk but not a warehouse. Its stock may arrive in bulk and be sold out in small orders. Storage that expands and shrinks with each shipment suits that rhythm better than a fixed unit.",
          "Al Jurf is where Ajman's industrial and workshop activity sits. Businesses there tend to have space for production but lack a place for overflow: surplus material, spare machinery, finished goods waiting for dispatch. We collect directly from the unit so your own people stay on the job.",
          "In both cases, tell us the nature of the goods and how often you will need them back. A pallet you touch weekly is handled differently from equipment that sits for six months.",
        ],
      },
      {
        kind: "table",
        h2: "Matching the service to the stock",
        columns: ["What you hold", "How it is stored", "Retrieval pattern"],
        rows: [
          ["Cartons of retail stock", "Listed by carton or line", "Frequent small pick-outs"],
          ["Palletised imports", "Held per pallet", "Release in lots on notice"],
          ["Machinery and tools", "Wrapped or crated, noted by item", "Occasional, project-led"],
          ["Office contents", "Wrapped and barcoded", "Usually one return"],
          ["Seasonal goods", "Held through the quiet months", "Clear in one or two deliveries"],
        ],
        note: "Perishable, hazardous or restricted goods are not accepted. Ask before booking if you are unsure whether something qualifies.",
      },
      {
        kind: "steps",
        h2: "How a commercial collection works",
        items: [
          { h: "Brief us", p: "The location, goods, approximate pallet or carton count, and whether the loading area has a dock or a ground-level door." },
          { h: "Written quote", p: "Free and itemised. Ask on the [quote page](/get-quote)." },
          { h: "Collection", p: "The crew loads at your premises and wraps or secures goods for the trip." },
          { h: "Inventory and barcodes", p: "Each item or pallet is listed so a pick-out request refers to something specific." },
          { h: "Pick-outs and returns", p: "Send a request with the lines and the delivery address, and we deliver." },
        ],
      },
      {
        kind: "checklist",
        h2: "Questions to settle before you store",
        items: [
          "How many pallets or cartons, and how heavy is each?",
          "How often do you expect to need goods back?",
          "Is the delivery address a customer, a site or your own premises?",
          "Do the goods need protection from dust or damp?",
          "Does the loading point have restrictions on vehicle size or access times?",
          "Who is authorised to request releases from your side?",
        ],
      },
      {
        kind: "prose",
        h2: "Company moves and office clear-outs",
        paras: [
          "If the reason for storage is a relocation, the same crew can do both parts. See [movers in Ajman](/moving-storage-ajman) for how a move is run, and [contact us](/contact) if you want the two arranged together.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a Free Zone company use your storage?",
        a: "Yes. You give us the collection address and the goods, and we store them in our Ajman warehouse. Tell us about any licence or customs paperwork that applies to your stock.",
      },
      {
        q: "Do you collect from Al Jurf?",
        a: "Yes. Al Jurf is within our Ajman coverage. Send the unit location and the loading arrangements.",
      },
      {
        q: "Can I store pallets?",
        a: "Yes. Give us the pallet count, approximate weight and how often you will need them released.",
      },
      {
        q: "Is there a minimum contract?",
        a: "No lock-in. Storage is billed monthly on the space used.",
      },
      {
        q: "Can you deliver stock to my customers?",
        a: "We deliver to the address you give us on request. Send the lines and the address with your release request.",
      },
      {
        q: "How do I get a price?",
        a: "Ask for a free itemised quote through the [quote page](/get-quote). We do not publish prices on this page.",
      },
    ],
    serviceType: "Business storage with collection and delivery",
    areaServed: "Ajman",
    cta: {
      h2: "Request a business storage quote in Ajman",
      p: "Tell us what you hold and where it is. We reply with a free itemised quote.",
    },
    siblings: [HUB, PERSONAL, DOCS],
  },

  // ---------------------------------------------------------------- documents
  {
    silo: "s15",
    path: DOCS,
    crumb: "Document Storage Ajman",
    navLabel: "Document storage",
    navBlurb: "Business records and archives held offsite, back on notice.",
    title: "Document Storage Ajman | Business Records Offsite",
    description:
      "Offsite document and archive storage in Ajman for businesses. Sealed, numbered boxes held in our Ajman warehouse and retrieved on notice. No lock-in.",
    keywords:
      "document storage ajman, archive storage ajman, records storage ajman, file storage ajman, offsite document storage ajman, office archive storage",
    h1: "Document Storage in Ajman: Business Records Held Offsite",
    introH2: "Keep the records, free up the office",
    hero: [
      "Document storage moves the paper your business must keep out of the office and into our Ajman warehouse, as part of our [self storage in Ajman](/self-storage-ajman) service. Records stay in sealed, numbered cartons, and come back to you when you ask.",
      "Most firms collect archives without meaning to: old contracts, invoices, personnel files, licence paperwork and project folders. Few need these every week, yet many are retained for years. Filing cabinets in small Ajman offices and Free Zone desks take up room that costs money.",
      "We collect, number and list the boxes, hold them, and deliver a box or a folder's worth on notice. Billing is monthly on the space used with no lock-in.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "What counts as an archive",
        paras: [
          "A box qualifies when you need to keep it but rarely open it. Typical contents are financial records, signed contracts, staff files, supplier paperwork, client files from closed projects and old licence documents.",
          "Anything you use daily, or anything legally required to be held on the premises, should stay with you. If you are unsure which rule applies to your business, check with your accountant or the authority concerned before sending it. We store and return boxes; we do not advise on retention periods.",
        ],
      },
      {
        kind: "steps",
        h2: "How the archive process runs",
        intro: "Order matters more than speed here. A box nobody can find is worse than a cabinet in the corner.",
        items: [
          { h: "Sort before packing", p: "Group by year, department or client so each carton has a single theme." },
          { h: "Box and label", p: "Use sturdy cartons, and write a short contents note and date range on the outside." },
          { h: "We collect", p: "The crew comes to your office, in a tower or a unit, and loads the boxes." },
          { h: "Numbered and listed", p: "Each carton is barcoded and entered on an inventory that matches your contents notes." },
          { h: "Retrieve on notice", p: "Request a box by its number and we deliver it to your office." },
        ],
      },
      {
        kind: "cards",
        h2: "Who keeps records offsite",
        items: [
          { icon: "🏢", h: "Free Zone companies", p: "A licence and a desk leave little room for filing. Store the paper offsite and keep the desk clear." },
          { icon: "🧾", h: "Small firms and accountants", p: "Years of client files and statements that must be available but do not need cabinet space." },
          { icon: "🏗️", h: "Contractors", p: "Completed project files, drawings and certificates." },
          { icon: "🏥", h: "Clinics and service businesses", p: "Administrative and supplier records separate from active client work." },
          { icon: "🔄", h: "Offices moving or closing", p: "Records go into storage while the new premises is fitted out or the company is wound down." },
        ],
      },
      {
        kind: "table",
        h2: "Boxes, retrieval and what to expect",
        columns: ["Step", "What happens", "What you do"],
        rows: [
          ["Request a box", "We find the numbered carton in the inventory", "Give the box number or a description"],
          ["Delivery", "We bring it to the address you name", "Tell us a time window and the receiving person"],
          ["Return", "Collected again and re-shelved", "Ask for the pick-up when you finish"],
          ["Permanent removal", "The carton leaves storage", "Tell us if the box should not return"],
        ],
        note: "Request a box a day or two before you need it so there is time to find and deliver it.",
      },
      {
        kind: "checklist",
        h2: "Good habits for an archive",
        items: [
          "One date range or subject per carton.",
          "A written contents list kept in your own files as well.",
          "Remove staples-heavy bundles and loose, unfastened sheets.",
          "Never pack originals you may need urgently.",
          "Name the people allowed to request boxes.",
          "Check the retention period before you destroy anything.",
        ],
      },
      {
        kind: "prose",
        h2: "Alongside other business storage",
        paras: [
          "Many companies send paper and equipment together, for example after an office clear-out. Stock, pallets and fixtures are covered on [business storage in Ajman](/business-storage-ajman), and personal items for owners or staff on [personal storage in Ajman](/personal-storage-ajman). For coverage by district, see [Ajman locations](/locations/ajman).",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get a document back?",
        a: "Request the box by its number, or describe what you need and we will find it from the inventory. We deliver to your office address.",
      },
      {
        q: "Are the boxes kept sealed?",
        a: "Yes. Cartons are sealed, numbered and listed, and stay that way until you ask for one.",
      },
      {
        q: "Can I store originals?",
        a: "Yes, but keep anything you may need urgently with you. Retrieval takes time to arrange.",
      },
      {
        q: "Do you advise how long to keep records?",
        a: "No. Retention requirements depend on your business and the authority concerned, so check them with your adviser. We store and return the boxes.",
      },
      {
        q: "Is there a minimum term?",
        a: "No lock-in. Billing is monthly on the space used.",
      },
      {
        q: "How do I get a quote?",
        a: "Tell us roughly how many boxes and where they are, through the [quote form](/get-quote). The quote is free and itemised.",
      },
    ],
    serviceType: "Offsite document and archive storage",
    areaServed: "Ajman",
    cta: {
      h2: "Move your archive out of the office",
      p: "Tell us how many boxes you have and where. We will send a free itemised quote.",
    },
    siblings: [HUB, PERSONAL, BUSINESS],
  },
]
