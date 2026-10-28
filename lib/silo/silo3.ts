import type { SiloPageContent } from "./types"

/**
 * SILO 3 · /business-storage-dubai/* — commercial storage.
 *
 * Four MOVES: /business-storage, /warehouse-storage-dubai, /document-storage
 * and /ecommerce-storage were flat root URLs. Their route files are deleted and
 * next.config.mjs 301s each here in the same deployment. Two existing redirects
 * that pointed at those old URLs (/storage-dubai/records-archival and
 * /services/document-storage among them) were re-pointed at the new targets so
 * nothing becomes a two-hop chain.
 *
 * ⚠ RECORD RETENTION PERIODS. Gate 2 of the plan: the document- and
 * archive-storage pages must not state a UAE retention period until the
 * client's accountant confirms it. Both pages below therefore describe how
 * retention works and tell the reader to confirm the applicable period — they
 * deliberately name no number of years. Do not "complete" them by adding one
 * from a search result; the figure differs by entity type, free zone and
 * record class, and publishing a wrong one on a storage provider's site is a
 * liability rather than a helpful detail.
 */

export const SILO3_PAGES: SiloPageContent[] = [

  /* ------------------------------------------------------- archive-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/archive-storage",
    crumb: "Archive Storage",
    navLabel: "Archive storage",
    navBlurb: "Long-horizon records with a destruction schedule that actually runs.",
    title: "Archive Storage Dubai | Long-Term Records With A Destruction Schedule",
    description:
      "Archive storage in Dubai for long-horizon business records. Indexed, stored indoors, and managed to a destruction schedule so the archive shrinks instead of only growing.",
    keywords:
      "archive storage dubai, records archival dubai, long term document storage dubai, corporate archive storage uae, records management dubai",
    ogTitle: "Archive Storage in Dubai",
    h1: "Archive Storage in Dubai",
    hero: [
      "An archive differs from document storage in one respect that matters financially: it is measured in years and it grows every year. Managing that growth is the whole discipline, and it belongs inside [business storage in Dubai](/business-storage-dubai).",
      "The fix is boring and it works: index at box level, **write a destruction-eligible date on every box at the point of boxing**, and review annually. That is the difference between an archive and an accumulation.",
    ],
    sections: [
      {
        kind: "steps",
        h2: "A retention schedule you can actually run",
        intro: "Four decisions, made once, that keep an archive from becoming a decade of unexplained cartons.",
        items: [
          {
            h: "Start from the legal requirement",
            p: "A question for your accountant or legal adviser, not for us — it varies by entity type, by mainland or free-zone status, and by record class.",
          },
          {
            h: "Add your commercial requirement",
            p: "Usually longer for contracts, shorter for routine correspondence. The result is five or six record classes, not fifty.",
          },
          {
            h: "Apply it at boxing, not at review",
            p: "A box that arrives with its destruction date already on it needs one decision, while someone still knows what is inside.",
          },
          {
            h: "Diarise one review a year",
            p: "It takes an afternoon, and it is the only thing standing between a managed archive and [document storage](/business-storage-dubai/document-storage) that only grows.",
          },
        ],
      },
      {
        kind: "cards",
        h2: "What goes into a long archive",
        items: [
          {
            icon: "📑",
            h: "Statutory and financial",
            p: "The classes with a mandated retention period. Confirm the applicable period with your adviser and box by year and class.",
          },
          {
            icon: "✍️",
            h: "Contracts and agreements",
            p: "Usually kept longer than the statutory minimum — a contract's useful life outlasts its retention obligation.",
          },
          {
            icon: "👥",
            h: "HR and payroll files",
            p: "Sensitive, and subject to your own data-protection obligations, which storage does not discharge. Box these separately.",
          },
          {
            icon: "🏗️",
            h: "Project and technical",
            p: "Drawings, certifications and handover documents — needed years later and almost never indexed well at the time.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Archive hygiene that pays for itself",
        items: [
          "Uniform box sizes. Mixed cartons rack badly and the same paper takes measurably more space.",
          "One index, in your systems, not only in ours. An archive you cannot audit independently is a liability.",
          "A destruction-eligible date on every box, written at boxing.",
          "Separate anything containing personal data, and know which boxes those are.",
          "One annual review, diarised. Without it the schedule is a document rather than a practice.",
        ],
        note: "Boxes eligible for destruction should actually be destroyed — ask us to arrange it. The point of a schedule is that the archive sometimes gets smaller.",
      },
    ],
    faqs: [
      {
        q: "How is archive storage different from document storage?",
        a: "The horizon and the discipline. Document storage is boxes offsite; an archive is boxes offsite with a retention schedule, an index and an annual review. Without those three, an archive is just paper that grows.",
      },
      {
        q: "How long should we keep records?",
        a: "Confirm it with your accountant or legal adviser. It varies by entity type, by mainland or free-zone status, and by record class, and we will not publish a number for it — a wrong figure on a storage provider's website is worse than no figure.",
      },
      {
        q: "Can you destroy records when they are due?",
        a: "Ask us to arrange it when a box reaches its destruction-eligible date. The reason we ask you to write that date at boxing is precisely so this can happen without someone opening the box years later.",
      },
      {
        q: "What about records containing personal data?",
        a: "They remain subject to your own data-protection obligations, which storing them offsite does not discharge. Box them separately and know which boxes they are, because that is what makes a subject request answerable.",
      },
    ],

    serviceType: "Archive storage",
    cta: {
      h2: "Archiving a decade of paper?",
      p: "Set the destruction dates before the boxes leave. It is ten minutes a box now and an afternoon a box later.",
    },
    siblings: [
      "/business-storage-dubai/document-storage",
      "/business-storage-dubai/office-relocation-storage",
      "/business-storage-dubai/free-zone-storage",
      "/business-storage-dubai/inventory-storage",
    ],
  },

  /* ---------------------------------------------------------- 3pl-services */
  {
    silo: "s3",
    path: "/business-storage-dubai/3pl-services",
    crumb: "3PL Services",
    navLabel: "3PL services",
    navBlurb: "What third-party logistics adds beyond storage, and what it costs you.",
    title: "3PL Dubai | What Third-Party Logistics Adds Beyond Storage",
    description:
      "3PL in Dubai explained: what third-party logistics adds beyond storage, when it is worth it, what it costs you in control, and how to tell if you are ready.",
    keywords:
      "3pl dubai, third party logistics dubai, 3pl services uae, logistics provider dubai, outsourced fulfilment dubai",
    ogTitle: "3PL in Dubai — When It Is Worth It",
    h1: "3PL in Dubai — What It Adds and Costs",
    hero: [
      "3PL is where a provider takes over storage, picking, packing, shipping and returns as one service. It is a genuine step up from [business storage in Dubai](/business-storage-dubai), not a bigger version of it.",
      "It is bought too early more often than too late: it adds a per-order cost to every order and takes the packing experience out of your hands. This page is the decision framework rather than a pitch.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What 3PL actually adds",
        intro: "Four things storage does not do — worth real money once volume is high enough.",
        items: [
          {
            icon: "📦",
            h: "Picking and packing",
            p: "Somebody other than you assembles each order. This is the core of it, and the thing storage does not do.",
          },
          {
            icon: "🚚",
            h: "Courier integration",
            p: "Orders flow to a courier with tracking generated automatically, rather than you booking pickups.",
          },
          {
            icon: "↩️",
            h: "Returns handling",
            p: "Received, inspected, graded and restocked or written off — substantial labour in a high-return category.",
          },
          {
            icon: "📊",
            h: "Stock visibility",
            p: "A system you can see levels in, usually with an API into your store, rather than asking someone for a count.",
          },
        ],
      },
      {
        kind: "table",
        h2: "Are you ready for 3PL?",
        intro: "Rough thresholds. None are absolute, but if you tick fewer than three, it is probably early.",
        columns: ["Signal", "Roughly", "What it means"],
        rows: [
          ["Daily order volume", "30+ consistently", "Below this, per-order fees usually cost more than your own time"],
          ["Time on fulfilment", "Over 2 hours a day", "The point where packing displaces work only you can do"],
          ["SKU count", "Over 50", "Manual picking accuracy falls away here"],
          ["Return rate", "Over 15%", "Returns handling becomes a job rather than a task"],
          ["Growth", "Doubling year on year", "You will cross the thresholds mid-year rather than conveniently"],
        ],
        note: "If most of these are no, hold bulk stock in storage, keep working stock with you, and revisit in six months — that arrangement is reversible.",
      },
      {
        kind: "checklist",
        h2: "What to ask any 3PL before signing",
        intro: "The questions that separate providers, rather than the ones on their brochure.",
        items: [
          "What exactly is per-order pricing — pick, pack, courier handover, returns? Ask for a worked example on your actual basket.",
          "What is the cut-off for same-day dispatch, and what happens to orders after it?",
          "How are stock discrepancies handled — reported, absorbed, or charged?",
          "Can you see live stock levels, and is there an API into your store?",
          "What is the storage charge on slow-moving stock, and does it escalate over time?",
        ],
        note: "The last one catches people. Many 3PL contracts price storage to encourage turnover, which is expensive if part of your range is deliberately slow-moving — that part may be better left in [plain warehouse storage](/business-storage-dubai/warehouse-storage).",
      },
    ],
    faqs: [
      {
        q: "Do you provide full 3PL?",
        a: "Our standard service is storage with scheduled releases rather than per-order fulfilment. Tell us what you actually need at the outset and we will be straight with you about whether it is what we do — being sold the wrong service here is expensive.",
      },
      {
        q: "When is 3PL worth it?",
        a: "Broadly, once you are shipping 30 or more orders a day consistently, spending over two hours a day on fulfilment, carrying more than about 50 SKUs, or growing fast enough that you will cross those lines mid-year.",
      },
      {
        q: "Can I split — some products 3PL, some stored?",
        a: "Yes, and it is often the sensible arrangement. Fast-moving lines go to fulfilment; slow-moving or bulky lines sit in plain storage where you are not paying turnover-oriented rates on stock that does not turn over.",
      },
      {
        q: "How do I move away from a 3PL later?",
        a: "Check the notice period and the stock-return terms before you sign, not after. Getting stock out of a 3PL you are leaving is the part of the relationship that is hardest to negotiate once it has begun.",
      },
    ],

    serviceType: "Logistics advisory",
    cta: {
      h2: "Not sure if you are ready?",
      p: "Send your daily order count, SKU count and return rate. That is enough for a straight answer.",
    },
    siblings: [
      "/business-storage-dubai/ecommerce-fulfilment",
      "/business-storage-dubai/inventory-storage",
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/pallet-storage",
    ],
  },

  /* ----------------------------------------------------- inventory-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/inventory-storage",
    crumb: "Inventory Storage",
    navLabel: "Inventory storage",
    navBlurb: "Stock held with counts that reconcile to your own numbers.",
    title: "Inventory Storage Dubai | Stock Held, Counted And Reconciled",
    description:
      "Inventory storage in Dubai. Stock received, counted in, racked and released against your own references, with counts that reconcile to your system rather than replacing it.",
    keywords:
      "inventory storage dubai, stock storage dubai, stock holding dubai, inventory management storage uae, goods storage dubai",
    ogTitle: "Inventory Storage in Dubai",
    h1: "Inventory Storage in Dubai",
    hero: [
      "Storing inventory is mostly an accounting problem wearing a warehouse costume. The goods are easy; the hard part is that your system and the physical count must agree — the substance of inventory work inside [business storage in Dubai](/business-storage-dubai).",
      "Stock is **counted in against your own SKU references**, racked, and released against those same references. This does not replace your inventory system: the master record stays yours, which is the only arrangement that survives an audit.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What good inventory storage looks like",
        items: [
          {
            icon: "🔢",
            h: "Counted in, discrepancies raised",
            p: "Against your SKU list, at the point of receipt. A discrepancy found later is a dispute; one found at the gate is a fact.",
          },
          {
            icon: "🏷️",
            h: "Your references, not new ones",
            p: "Stock is held and released against the references your own system already uses.",
          },
          {
            icon: "📆",
            h: "Cycle counts you can request",
            p: "Periodic counts of part of the stock, so reconciliation is continuous rather than a January crisis.",
          },
          {
            icon: "📤",
            h: "Releases logged to the same list",
            p: "So the running balance in your system and the physical balance stay in step. Normally 24–48 hours per release.",
          },
        ],
      },
      {
        kind: "steps",
        h2: "Getting the count right at the start",
        intro: "Almost every inventory problem traces back to the first day. Stock counted badly is counted wrong forever.",
        items: [
          {
            h: "Send the SKU list first",
            p: "Before the goods arrive, in whatever format your system exports. It is what everything is counted against.",
          },
          {
            h: "Count in against it",
            p: "A short shipment, an unlisted SKU or a mixed carton is raised with you at that point — not after it has been racked.",
          },
          {
            h: "Use your own references",
            p: "Two reference systems for the same stock is the most reliable way to make goods unusable, and very hard to unwind later.",
          },
          {
            h: "Agree the unit of measure",
            p: "\"Twelve\" meaning cartons in your system and pieces in the count is the most common discrepancy there is.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Practical things that prevent count drift",
        items: [
          "Agree the unit of measure in writing before the first delivery — cartons, pieces or pallets, not a mixture.",
          "Send the SKU list in advance and update it when it changes, rather than after a mismatch.",
          "Request a cycle count on your fastest-moving lines quarterly rather than counting everything annually.",
          "Never let stock be released verbally without a written request against a reference.",
          "Flag anything with a batch number, expiry date or serial requirement at setup — retrofitting that is painful.",
        ],
        note: "For palletised stock, [pallet storage](/business-storage-dubai/pallet-storage) covers the handling side; the counting discipline above applies either way.",
      },
    ],
    faqs: [
      {
        q: "Do you provide an inventory management system?",
        a: "No, and you should be wary of a storage provider that positions itself as your master record. We hold goods and report accurately what we hold against your references; the system of record stays yours, which is what survives an audit.",
      },
      {
        q: "What happens if the count does not match?",
        a: "It is raised with you at the point of receipt rather than reconciled at our end. A discrepancy found at the gate is a fact you can chase with your supplier; one found three months later is a dispute nobody can resolve.",
      },
      {
        q: "Can I request a stock count?",
        a: "Yes. Cycle counts of part of the stock on a regular cadence are far more useful than one annual full count, because they catch drift while it is still small enough to explain.",
      },
      {
        q: "How are goods released?",
        a: "Against a written request referencing your own SKU, normally within 24 to 48 hours. Verbal releases are what break a running balance, so we do not do them.",
      },
    ],

    serviceType: "Inventory storage",
    cta: {
      h2: "Storing stock?",
      p: "Send the SKU list before the goods. Getting the first count right is most of the job.",
    },
    siblings: [
      "/business-storage-dubai/pallet-storage",
      "/business-storage-dubai/ecommerce-fulfilment",
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/retail-stock-storage",
    ],
  },

  /* -------------------------------------------------------- pallet-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/pallet-storage",
    crumb: "Pallet Storage",
    navLabel: "Pallet storage",
    navBlurb: "Racked pallets in and out, priced by the slab rather than the foot.",
    title: "Pallet Storage Dubai | Racked Pallets, In And Out On Notice",
    description:
      "Pallet storage in Dubai. Racked pallet positions, goods received and released on notice, and what to get right about pallet condition before the truck arrives.",
    keywords:
      "pallet storage dubai, pallet racking dubai, pallet space dubai, palletised storage uae, pallet warehouse dubai",
    ogTitle: "Pallet Storage in Dubai",
    h1: "Pallet Storage in Dubai",
    hero: [
      "Palletised goods are the easiest thing to store well and the easiest thing to get wrong before they arrive. Almost every problem is decided by the pallet itself rather than by the warehouse — the palletised end of [business storage in Dubai](/business-storage-dubai).",
      "Pallets are **racked rather than floor-stacked**, so any pallet can be reached without moving the ones in front of it. That is the difference between a 24-hour release and a two-day one.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What decides whether a pallet stores well",
        intro: "Four things settled at your supplier's loading bay, not at our gate.",
        items: [
          {
            icon: "🪵",
            h: "The pallet itself",
            p: "A broken, split or non-standard pallet cannot be racked safely and has to be re-palletised on arrival — a cost and a delay.",
          },
          {
            icon: "🎞️",
            h: "How it is wrapped",
            p: "Loosely wrapped loads shift in transit and arrive leaning. A leaning pallet cannot go into a rack and has to be rebuilt.",
          },
          {
            icon: "📏",
            h: "Overhang",
            p: "Goods extending past the pallet edge are the commonest reason a load cannot be racked. Rack beams are sized to the pallet, not your boxes.",
          },
          {
            icon: "⚖️",
            h: "Weight and distribution",
            p: "A heavy pallet is fine; an unexpectedly heavy one is a handling problem, and an unevenly loaded one is a safety problem.",
          },
        ],
      },
      {
        kind: "table",
        h2: "Pallet storage at a glance",
        columns: ["Question", "Standard answer", "Tell us if different"],
        rows: [
          ["Pallet type", "Standard Euro or industry pallet", "Non-standard, oversized or slip-sheeted loads"],
          ["Racking", "Racked, individually reachable", "If you want floor-stacked block storage"],
          ["Release time", "24–48 hours on notice", "If you need same-day as a regular pattern"],
          ["Inbound", "Received with advance notice", "Unannounced deliveries may be turned away"],
          ["Stacking", "Not stacked unless designed to be", "If your loads are designed to double-stack"],
          ["Counting", "Counted in against your reference", "If batch or serial tracking is needed"],
        ],
        note: "Floor-stacked block storage is slower to retrieve from, because pallets at the back sit behind pallets at the front. It suits stock that goes in and comes out as a whole batch — see [warehouse storage](/business-storage-dubai/warehouse-storage) for that shape.",
      },
      {
        kind: "steps",
        h2: "Before your pallets arrive",
        intro: "Most pallet problems are prevented before the truck leaves your supplier.",
        items: [
          {
            h: "Send the delivery note",
            p: "With the expected pallet count, in advance. Unannounced trucks are the main cause of a wasted delivery run.",
          },
          {
            h: "Confirm the weights",
            p: "Weight per pallet, and flag anything unevenly loaded so it is handled correctly on arrival.",
          },
          {
            h: "Check the footprint",
            p: "Nothing should overhang the pallet edge. This is the commonest reason a load has to be rebuilt at the gate.",
          },
          {
            h: "Wrap it properly",
            p: "Tightly, with corner boards on sharp edges. A load that shifts in transit arrives unrackable.",
          },
          {
            h: "Give us your reference",
            p: "So releases can be requested against it — [inventory storage](/business-storage-dubai/inventory-storage) covers why your references rather than new ones.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I get a specific pallet back without moving others?",
        a: "Yes, that is what racking is for — each position is individually reachable. Floor-stacked block storage does not give you that, which is the trade between the two.",
      },
      {
        q: "What if my pallets are damaged on arrival?",
        a: "We will tell you rather than rack them unsafely. A broken or split pallet has to be re-palletised, which is a cost and a delay, so it is worth checking what your supplier is sending before it ships.",
      },
      {
        q: "Do you accept unannounced deliveries?",
        a: "Advance notice is needed so goods can be received and booked in against your account. A truck arriving unannounced may have to be turned away, which is expensive for everybody.",
      },
      {
        q: "Can pallets be double-stacked?",
        a: "Only where the load is designed for it, and we will not assume it. Tell us if yours are — double-stackable loads genuinely reduce the positions needed.",
      },
    ],

    serviceType: "Pallet storage",
    cta: {
      h2: "Sending pallets?",
      p: "Send the delivery note and pallet count first. Ninety per cent of pallet problems are prevented before the truck leaves.",
    },
    siblings: [
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/inventory-storage",
      "/business-storage-dubai/ecommerce-fulfilment",
      "/business-storage-dubai/equipment-storage",
    ],
  },

  /* -------------------------------------------------- retail-stock-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/retail-stock-storage",
    crumb: "Retail Stock Storage",
    navLabel: "Retail stock storage",
    navBlurb: "Backroom overflow for shops paying mall rents for stockroom space.",
    title: "Retail Stock Storage Dubai | Stop Paying Mall Rent For A Stockroom",
    description:
      "Retail stock storage in Dubai. Move backroom overflow out of mall-rate square footage, hold seasonal ranges offsite and replenish the shop floor on notice.",
    keywords:
      "retail storage dubai, shop stock storage dubai, retail stock storage uae, backroom storage dubai, seasonal stock storage dubai",
    ogTitle: "Retail Stock Storage in Dubai",
    h1: "Retail Stock Storage in Dubai",
    hero: [
      "A stockroom in a Dubai mall is the most expensive storage in the country, and most of what is in it has not moved for months. Getting the slow half out is one of the highest-return uses of [business storage in Dubai](/business-storage-dubai).",
      "The arrangement is straightforward: **seasonal and slow-moving ranges go offsite**, the backroom holds only what replenishes the floor this week, and stock is called forward as the season turns. You are billed only on the space your stock uses.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The arithmetic that makes this obvious",
        paras: [
          "Work out your rent per square foot per month, including service charge. Then work out roughly what proportion of your backroom holds stock that has not moved in sixty days, and multiply. A prime mall unit is paying premium retail rates to warehouse last season's range.",
          "The second saving is less obvious and often larger: a backroom that is not full works better. Stock is findable, deliveries can be received without a Tetris problem, and ranges can be bought when the price is right rather than when there is space for them.",
        ],
      },
      {
        kind: "cards",
        h2: "What retailers move offsite first",
        items: [
          {
            icon: "🗓️",
            h: "Last season and next season",
            p: "The two ranges that are not selling this month. Between them they are usually most of the backroom.",
          },
          {
            icon: "🎉",
            h: "Event and campaign stock",
            p: "Ramadan, back-to-school, DSF and Christmas ranges bought early and needed for a defined window.",
          },
          {
            icon: "🪧",
            h: "Fixtures, display and VM",
            p: "Mannequins, shelving, seasonal display units and signage between campaigns. Bulky, valuable, never needed at once.",
          },
          {
            icon: "📦",
            h: "Bulk purchases",
            p: "Volume buys made on price rather than on space. Held offsite and called forward as the floor needs them.",
          },
        ],
      },
      {
        kind: "steps",
        h2: "Setting it up without disrupting trade",
        intro: "Do this once, properly, and it runs itself.",
        items: [
          {
            h: "Split the backroom by velocity",
            p: "This week's replenishment stays; sixty-days-untouched goes. Do not split by category.",
          },
          {
            h: "Collect outside trading hours",
            p: "Mall loading bays have windows and permits — tell us the centre and we will work to them.",
          },
          {
            h: "Count it in against your SKUs",
            p: "So your stock system and the offsite balance agree from day one. [Inventory storage](/business-storage-dubai/inventory-storage) covers the discipline.",
          },
          {
            h: "Call forward as the season turns",
            p: "Normally 24–48 hours' notice. Plan the seasonal changeover a week ahead rather than the night before.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How quickly can stock get back to the shop?",
        a: "Normally within 24 to 48 hours of a request. For a seasonal changeover, plan a week ahead — a full range coming forward at once is a larger job than a replenishment.",
      },
      {
        q: "Can you collect from a mall loading bay?",
        a: "Yes. Most Dubai malls have defined delivery windows and require a permit or a registered vehicle. Tell us the centre when booking and it is arranged rather than discovered.",
      },
      {
        q: "What about fixtures and display units?",
        a: "Those are among the most worthwhile things to store — bulky, valuable, and only needed for defined campaigns. Wrapped and racked they store well between seasons.",
      },
      {
        q: "Can I store for multiple branches?",
        a: "Yes, and deliveries can go to different branches from the same stock. Say so at setup so releases can be requested per branch rather than being untangled afterwards.",
      },
    ],

    serviceType: "Retail stock storage",
    cta: {
      h2: "Paying mall rent for cardboard?",
      p: "Work out your rent per square foot, then look at what has not moved in sixty days.",
    },
    siblings: [
      "/business-storage-dubai/inventory-storage",
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/exhibition-storage",
      "/business-storage-dubai/ecommerce-fulfilment",
    ],
  },

  /* ---------------------------------------------- office-relocation-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/office-relocation-storage",
    crumb: "Office Storage",
    navLabel: "Office & relocation storage",
    navBlurb: "Fit-outs, downsizing and the gap between two office leases.",
    title: "Office Storage Dubai | Fit-Outs, Downsizing And Lease Gaps",
    description:
      "Office storage in Dubai for relocations, fit-outs and downsizing. Furniture, IT and records held between leases, with collections outside working hours.",
    keywords:
      "office storage dubai, office relocation storage dubai, office furniture storage dubai, office move storage uae, office fit out storage dubai",
    ogTitle: "Office Storage in Dubai — Between Two Leases",
    h1: "Office Storage in Dubai",
    hero: [
      "Office moves in Dubai rarely line up cleanly. The old lease ends before the new fit-out finishes, or a downsizing leaves two floors of furniture with nowhere to go — the most common commercial booking in [business storage in Dubai](/business-storage-dubai).",
      "Collections are normally done **outside working hours or over a weekend**, and everything is logged at item level — desks, chairs, screens, IT — so an asset register can be reconciled afterwards rather than reconstructed.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "The three shapes an office booking takes",
        intro: "In all three the constraint is the building, not the furniture.",
        items: [
          {
            icon: "📅",
            h: "The lease gap",
            p: "The old office is handed back on a date; the new one is not ready. Everything goes in for the gap and comes out to the new address.",
          },
          {
            icon: "🔨",
            h: "The fit-out",
            p: "You stay in the building while the floor is rebuilt. Furniture and IT go out and come back in stages as areas are finished.",
          },
          {
            icon: "📉",
            h: "The downsizing",
            p: "More furniture than the new floor holds. The surplus is stored while you decide — the case where storage most often prevents a rushed decision.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Getting an office move right",
        items: [
          "Confirm the move-out window and permit requirements at **both** addresses, not just the one you are leaving.",
          "Back up and image every machine before it moves, and take the drives out of anything critical.",
          "Photograph the desk and cable layout per workstation. Reassembly without it takes far longer than anyone budgets.",
          "Label by department and destination, not by the room it came from — the new floor plan is not the old one.",
          "Decide what is not going before the day. An office move is where the surplus furniture problem gets discovered at 9pm.",
        ],
        note: "Keep original licences, leases and statutory documents with you rather than in a box — [document storage](/business-storage-dubai/document-storage) covers the archive side.",
      },
      {
        kind: "table",
        h2: "What an office collection takes",
        columns: ["Office size", "Typical crew time", "Approx. stored space"],
        rows: [
          ["Up to 10 desks", "Half a day", "80–150 sq ft"],
          ["10–30 desks", "A full day", "150–400 sq ft"],
          ["30–60 desks", "A weekend", "400–800 sq ft"],
          ["60+ desks", "Phased, quoted on survey", "Survey required"],
        ],
        note: "Sizes are estimated. Above about 30 desks we would rather survey than estimate — it is free, and on an office move a wrong estimate is a failed handover rather than an inconvenience.",
      },
    ],
    faqs: [
      {
        q: "Can you collect outside working hours?",
        a: "Yes, and for most offices that is how it is done — evenings or a weekend, because an office cannot be cleared around people working in it and most towers restrict move-outs to defined windows anyway.",
      },
      {
        q: "Do you handle the building permits?",
        a: "We arrange the service lift booking and crew registration at both addresses. Tell us both buildings when you book, because people routinely arrange the move-out and forget the move-in slot.",
      },
      {
        q: "Can you store IT equipment?",
        a: "Yes. Back up and image machines first and remove drives holding anything critical — storage should not be the only copy of your data. Screens are stored upright and cables bagged per workstation.",
      },
      {
        q: "What if the new office is not ready on time?",
        a: "That is what the storage is for. Billing is monthly with no fixed end date, so a fit-out that overruns costs the extra weeks and needs no renegotiation.",
      },
    ],

    serviceType: "Office storage",
    cta: {
      h2: "Moving or refitting an office?",
      p: "Send the desk count and both building names. That is enough to plan the whole thing.",
    },
    siblings: [
      "/business-storage-dubai/document-storage",
      "/business-storage-dubai/equipment-storage",
      "/business-storage-dubai/archive-storage",
      "/business-storage-dubai/free-zone-storage",
    ],
  },

  /* ----------------------------------------------------- equipment-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/equipment-storage",
    crumb: "Equipment Storage",
    navLabel: "Equipment storage",
    navBlurb: "Tools, plant and kit between jobs, stored so it still works.",
    title: "Equipment Storage Dubai | Tools And Plant Between Jobs",
    description:
      "Equipment storage in Dubai for contractors, trades and service businesses. Tools, plant and kit stored indoors between jobs, with the battery and fuel rules that apply.",
    keywords:
      "equipment storage dubai, tool storage dubai, plant storage dubai, contractor storage dubai, machinery storage uae",
    ogTitle: "Equipment Storage in Dubai — Between Jobs",
    h1: "Equipment Storage in Dubai",
    hero: [
      "Contractors, trades and event businesses share a problem: the kit is expensive, needed intermittently, and between jobs it lives in a van or a villa garage. Storing it properly is one of the plainer uses of [business storage in Dubai](/business-storage-dubai).",
      "Two rules govern almost everything, and both are safety rather than preference: **nothing with fuel in it**, and **lithium batteries must be raised before booking**. Everything else stores straightforwardly, indoors and racked.",
    ],
    sections: [
      {
        kind: "table",
        h2: "The fuel and battery rules",
        intro: "None of this makes equipment unstorable. It makes it a conversation before collection day.",
        columns: ["What it is", "The rule"],
        rows: [
          ["Petrol and diesel kit", "Drained and run dry before collection — generators, compactors, pressure washers, cut-off saws, pumps"],
          ["Gas equipment", "Cannot be stored while it holds a cylinder. Cylinders go back to the supplier"],
          ["Lithium batteries", "Raise at quoting. Packs stored around half charge degrade far less than full or flat ones"],
          ["Everything else", "Hand and corded tools, scaffolding, staging, cabling, test and catering kit — stores normally"],
        ],
        note: "The general list of what cannot be stored is on [what you can and cannot store](/self-storage-dubai/prohibited-items), and it is short.",
      },
      {
        kind: "cards",
        h2: "What businesses store between jobs",
        items: [
          {
            icon: "🧰",
            h: "Trade tools and small plant",
            p: "Corded tools, hand tools, ladders, staging. Clean and dry first — damp tools in humid air corrode faster than people expect.",
          },
          {
            icon: "🎪",
            h: "Event and AV kit",
            p: "Staging, lighting, cabling, flight cases. Flight-cased kit racks well — see [exhibition storage](/business-storage-dubai/exhibition-storage).",
          },
          {
            icon: "🍳",
            h: "Catering equipment",
            p: "Cleaned thoroughly first. Anything organic left on equipment is a pest problem rather than a smell one.",
          },
          {
            icon: "🧭",
            h: "Survey and test equipment",
            p: "Cased, with batteries discussed at booking. Calibration dates are worth diarising before a long gap.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Preparing equipment for a long gap",
        items: [
          "Run fuel equipment dry rather than just emptying the tank.",
          "Clean and fully dry everything. Corrosion in storage is almost always a damp-when-stored problem.",
          "Remove lithium batteries and handle them separately; raise anything non-removable at booking.",
          "Case what has a case. Flight-cased kit racks properly; loose equipment costs more space and travels worse.",
          "Note calibration and service dates before storing — kit that comes out of calibration is not usable on day one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I store a generator or a petrol tool?",
        a: "Only fully drained and run dry. Fuel cannot be stored or transported, so anything with a tank has to be emptied before collection day rather than at the gate.",
      },
      {
        q: "What about cordless tool batteries?",
        a: "Raise them at booking. Lithium packs need discussing rather than arriving in a crate, and they store best at around half charge rather than full or flat.",
      },
      {
        q: "Can you store scaffolding and staging?",
        a: "Yes, and it stores well because it stacks. Tell us the weight and the quantity so it is racked appropriately — this is one category where weight rather than bulk decides the handling.",
      },
      {
        q: "Can I get equipment out at short notice for a job?",
        a: "Normally within 24 to 48 hours. If your work pattern involves frequent short-notice call-offs, say so at setup so the kit is racked accessibly rather than densely.",
      },
    ],

    serviceType: "Equipment storage",
    cta: {
      h2: "Kit sitting in a van between jobs?",
      p: "Tell us what it is and whether anything holds fuel or a lithium pack. The rest is straightforward.",
    },
    siblings: [
      "/business-storage-dubai/exhibition-storage",
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/pallet-storage",
      "/business-storage-dubai/office-relocation-storage",
    ],
  },

  /* ---------------------------------------------------- exhibition-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/exhibition-storage",
    crumb: "Exhibition & Event Storage",
    navLabel: "Exhibition & event storage",
    navBlurb: "Stands, displays and event kit between shows, delivered to the hall.",
    title: "Exhibition & Event Storage Dubai | Between Shows, Delivered To The Hall",
    description:
      "Exhibition stand and event equipment storage in Dubai. Stands, displays and AV stored between shows and delivered to the venue for build-up, with the timing that matters.",
    keywords:
      "exhibition storage dubai, event storage dubai, exhibition stand storage dubai, trade show storage uae, event equipment storage dubai",
    ogTitle: "Exhibition and Event Storage in Dubai",
    h1: "Exhibition and Event Storage in Dubai",
    hero: [
      "Dubai's exhibition calendar is dense and concentrated — GITEX, Gulfood, Arab Health and the World Trade Centre programme put most of the year's shows into a handful of months. Stands need somewhere to be for the rest of it, inside [business storage in Dubai](/business-storage-dubai).",
      "Stands, displays, AV and collateral are stored between shows and **delivered to the venue for build-up** on the date you give us. Getting that date right is more of this job than the storage is.",
    ],
    sections: [
      {
        kind: "steps",
        h2: "Build-up timing is the whole risk",
        intro: "Venue windows are fixed, short and unforgiving. A delivery that misses its slot may not get onto the floor at all.",
        items: [
          {
            h: "Give us the date early",
            p: "The build-up date and delivery window as soon as you have them — not the week before. In the busy months the whole city's show freight moves at once.",
          },
          {
            h: "Get the venue paperwork",
            p: "Vehicle passes, contractor registration and any organiser-booked slot are yours to obtain, and must exist before the vehicle leaves.",
          },
          {
            h: "Delivery to the hall",
            p: "We deliver into the build-up window you gave us. The roads around the venue are the constraint, not the warehouse.",
          },
          {
            h: "Book the breakdown now too",
            p: "At the same time as the delivery. A stand left on the floor after its tear-down window is a problem that escalates by the hour.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Packing a stand so it survives the year",
        intro: "All of this happens at breakdown, when nobody wants to do it. It is still the moment that decides everything.",
        items: [
          "Crate rather than wrap. Panels, uprights and graphics survive a year crated and do not survive it stacked loose.",
          "Photograph the assembled stand before breakdown, and keep the photos with the crate list.",
          "Bag and label every fixing, pin and connector by section. Missing fittings are what stops a build the following year.",
          "Roll graphics rather than folding them. A folded crease in a printed panel is permanent.",
          "Keep the build instructions with the crates, not in someone's laptop.",
        ],
        note: "Note anything damaged at breakdown while you can still see it, so it is repaired before the next show rather than discovered at build-up.",
      },
      {
        kind: "table",
        h2: "What an exhibition booking looks like",
        columns: ["Stand", "Approx. stored space", "Typical arrangement"],
        rows: [
          ["Shell scheme graphics only", "5–15 sq ft", "Rolled graphics and a small crate"],
          ["Modular stand, 3×3 to 6×3", "30–80 sq ft", "Two to four crates, racked together"],
          ["Custom build, larger", "100+ sq ft", "Palletised and crated, quoted on survey"],
          ["Event AV and staging", "Varies", "Flight-cased; see [equipment storage](/business-storage-dubai/equipment-storage)"],
        ],
        note: "Sizes are estimated. Keep printed collateral separate from the structure — brochures and giveaways date, and should not be racked as though they will certainly be used again.",
      },
    ],
    faqs: [
      {
        q: "Can you deliver directly to the exhibition hall?",
        a: "Yes, to the build-up window you give us. Venue passes, contractor registration and any organiser-booked delivery slot are yours to obtain, and they need to be in place before the vehicle leaves.",
      },
      {
        q: "How far ahead should I book a build-up delivery?",
        a: "As soon as you have the date. In the busy exhibition months the whole city's show freight moves in the same weeks, and the roads around the venue are the constraint rather than the warehouse.",
      },
      {
        q: "Can you collect from the venue after the show?",
        a: "Yes, and book it at the same time as the delivery. Tear-down windows are short, and a stand left on the floor after its window becomes an escalating problem.",
      },
      {
        q: "How should a stand be packed for storage?",
        a: "Crated rather than wrapped, with graphics rolled, fixings bagged and labelled by section, and the build instructions kept with the crates. This is decided at breakdown, when nobody wants to do it, and it determines whether the next build goes smoothly.",
      },
    ],

    serviceType: "Exhibition storage",
    cta: {
      h2: "Between shows?",
      p: "Give us the next build-up date when you book the collection. That is the date everything else works back from.",
    },
    siblings: [
      "/business-storage-dubai/equipment-storage",
      "/business-storage-dubai/retail-stock-storage",
      "/business-storage-dubai/warehouse-storage",
      "/business-storage-dubai/office-relocation-storage",
    ],
  },

  /* ---------------------------------------------------- free-zone-storage */
  {
    silo: "s3",
    path: "/business-storage-dubai/free-zone-storage",
    crumb: "Free Zone Company Storage",
    navLabel: "Free zone company storage",
    navBlurb: "Storage for flexi-desk and free-zone companies with no premises.",
    title: "Free Zone Company Storage Dubai | For Flexi-Desk Businesses",
    description:
      "Storage for Dubai free zone companies. Where to put stock and records when your licence comes with a flexi-desk and no premises — and what storage cannot do for you.",
    keywords:
      "free zone company storage dubai, flexi desk storage dubai, free zone storage uae, dmcc storage dubai, ifza company storage",
    ogTitle: "Storage for Free Zone Companies in Dubai",
    h1: "Storage for Free Zone Companies in Dubai",
    hero: [
      "A great many Dubai companies hold a licence attached to a flexi-desk and have nowhere at all to put physical things. Stock, samples, records and equipment end up in a villa spare room, and that stops working about when the business starts working. This is that gap, inside [business storage in Dubai](/business-storage-dubai).",
      "**What storage does:** holds your goods and records securely, receives inbound shipments with notice, and releases what you need in 24 to 48 hours. **What it cannot do**, bluntly: it is not a licensed address, not a registered premises, and it does not satisfy any free-zone requirement to hold physical space.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What flexi-desk companies actually store",
        items: [
          {
            icon: "📦",
            h: "Stock and samples",
            p: "The first thing that outgrows a spare room. Received with notice and released as needed — see [inventory storage](/business-storage-dubai/inventory-storage).",
          },
          {
            icon: "📁",
            h: "Company records",
            p: "A licensed company generates paper whether or not it has an office. [Document storage](/business-storage-dubai/document-storage) covers the retention side.",
          },
          {
            icon: "🪑",
            h: "Furniture between offices",
            p: "Companies that took space, gave it up, and expect to take space again. Storing beats selling and rebuying.",
          },
          {
            icon: "🎪",
            h: "Marketing and event kit",
            p: "Stands, displays and collateral for the exhibition circuit, which a great many free-zone companies live on.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "The customs and free-zone point, honestly",
        paras: [
          "Goods held inside a free zone are treated differently from goods held on the mainland. **Our facility is mainland**, so goods stored with us have cleared into the mainland rather than sitting under a customs suspension. For most flexi-desk companies selling domestically that is exactly what they want, and it is the simpler arrangement.",
          "For a business re-exporting under a customs regime it is not, and a free-zone bonded facility is the right answer instead. If your model involves re-export, duty suspension or bonded goods, take advice specific to your licence and your goods before storing anything anywhere — including with us.",
        ],
      },
      {
        kind: "checklist",
        h2: "Practical points for a free-zone company",
        items: [
          "Confirm whether your licence carries any requirement to hold physical premises. Storage does not satisfy one.",
          "If your model involves re-export or bonded goods, take advice first — mainland storage is a customs decision, not just a logistics one.",
          "Give us your licence details at setup so the account is in the company name rather than a personal one.",
          "Notify inbound shipments in advance so goods are received against your account rather than turned away.",
          "Confirm the record retention period that applies to your entity with your accountant. We store to your schedule and publish no figure of our own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use your address as my company address?",
        a: "No. Storage is not a licensed premises and cannot be registered as one, in any free zone or on the mainland. If your licence requires premises, storage does not satisfy that requirement.",
      },
      {
        q: "Are your facilities inside a free zone?",
        a: "They are mainland facilities. For most companies selling domestically that is the simpler and preferable arrangement; for a business operating under a customs suspension or re-exporting, a bonded free-zone facility is the right answer instead.",
      },
      {
        q: "Can you receive shipments on my company's behalf?",
        a: "Yes, with advance notice of what is arriving and when, so goods are received and booked in against your account. Give us the licence details at setup so the account is in the company name.",
      },
      {
        q: "What happens if my licence is not renewed?",
        a: "The stored goods are yours regardless, and the storage account continues on the same terms. Tell us if the account name needs changing so it stays aligned with whoever actually owns the goods.",
      },
    ],

    serviceType: "Business storage",
    cta: {
      h2: "Licence but no premises?",
      p: "Tell us what needs storing and whether re-export is part of your model. That second answer changes the advice.",
    },
    siblings: [
      "/business-storage-dubai/document-storage",
      "/business-storage-dubai/inventory-storage",
      "/business-storage-dubai/office-relocation-storage",
      "/business-storage-dubai/warehouse-storage",
    ],
  },
]
