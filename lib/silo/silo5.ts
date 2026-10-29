import type { SiloPageContent } from "./types"

/**
 * SILO 5 · /moving-storage-dubai/* — relocation, and the storage in the middle.
 *
 * The hub already existed as a hand-written route; these are its seven children
 * from §5 of the plan. `moving and storage dubai` is 1,900/mo with no page at
 * all before the hub shipped, which makes this the highest-volume unclaimed
 * cluster on the site.
 *
 * /international-relocation is a MOVE from the root URL of the same name; the
 * 301 ships in next.config.mjs in the same deployment.
 *
 * SCOPE HONESTY. SafeStorage is a storage business that moves things, not a
 * removals company with a warehouse, and these pages say so rather than
 * implying a full moving-company service list. Where the honest answer is "you
 * want a specialist mover for this part", the page says it.
 */

export const SILO5_PAGES: SiloPageContent[] = [

  /* ----------------------------------------------------------- villa-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/villa-movers",
    crumb: "Villa Movers",
    navLabel: "Villa moving",
    navBlurb: "Whole-villa moves, with the garage counted properly.",
    title: "Villa Movers and Packers in Dubai | Garage and Garden Counted",
    description:
      "Villa movers and packers in Dubai: we count the garage, garden and maid's room, wrap at your door and store everything if handover dates slip. Free quote.",
    keywords:
      "villa movers in dubai, villa movers and packers in dubai, villa movers dubai, villa moving dubai, house movers dubai, villa relocation dubai",
    ogTitle: "Villa Movers in Dubai",
    h1: "Villa Movers in Dubai: The Garage Counted",
    introH2: "Villa moving in Dubai, in brief",
    hero: [
      "A villa move is a full day's work, sometimes two, and bigger than people expect for one reason: the garage, the garden and the maid's room are not in anybody's mental model of the house. The villa end of [moving and storage in Dubai](/moving-storage-dubai).",
      "When the dates do not line up — and with villas they often do not — **everything goes into storage for the gap** and comes out to the new address when it exists.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "Why a villa move is bigger than the room count",
        intro: "Three spaces nobody counts, often a third of the job between them.",
        items: [
          {
            icon: "🚗",
            h: "The garage",
            p: "Regularly the largest space by volume — bikes, tools, garden furniture, a spare fridge.",
          },
          {
            icon: "🌴",
            h: "The garden and terrace",
            p: "Dining sets, loungers, parasols, a barbecue. Bulky, and dirtier than expected — clean it before it is wrapped.",
          },
          {
            icon: "🚪",
            h: "The maid's room",
            p: "Usually already working as overflow storage: densely packed, rarely inventoried before the day.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "Villa-specific preparation",
        items: [
          "Return the gas cylinder to the supplier — it cannot be moved or stored.",
          "Clear the garage of paint, thinners, pool chemicals and pesticides.",
          "Register the vehicle and crew with community security in a gated development.",
          "Decide about the plants. They cannot be stored and are always the last-hour problem.",
        ],
      },
      {
        kind: "table",
        h2: "What a villa move takes",
        columns: ["Villa", "Crew time", "If it goes into storage"],
        rows: [
          ["2 bed townhouse", "5–7 hours", "150–200 sq ft"],
          ["3 bed villa", "A full day", "240–270 sq ft"],
          ["4 bed villa", "A full day, sometimes two", "300–380 sq ft"],
          ["5+ bed villa", "Two days", "Quoted on survey"],
        ],
        note: "Sizes are estimated. If the dates line up the goods go straight to the new address; if not, storage covers the gap.",
      },
    ],
    faqs: [
      {
        q: "How long does a villa move take?",
        a: "A three-bedroom is a full day. Four bedrooms and above is a full day and often two, which we will tell you when quoting rather than at 5pm on the day.",
      },
      {
        q: "Do you empty the garage too?",
        a: "Yes, and it is frequently the largest single area by volume. Say it is included when asking for a quote — a villa priced on bedrooms alone will be quoted short.",
      },
      {
        q: "What if the new villa is not ready?",
        a: "Everything goes into storage for the gap and comes out when the property exists. Billing is monthly with no fixed end date, so a handover that slips costs the extra weeks and nothing else.",
      },
      {
        q: "Do you need community access permits?",
        a: "Most gated communities require the vehicle and crew to be registered with security in advance. Tell us the community at booking; arriving unregistered means waiting at the gate with a paid crew.",
      },
    ],

    serviceType: "Villa moving",
    cta: {
      h2: "Moving a villa?",
      p: "Ask for a survey rather than an estimate, and make sure it counts the garage.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/inter-emirate-moving",
      "/moving-storage-dubai/international-relocation",
    ],
  },

  /* ------------------------------------------------------- apartment-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/apartment-movers",
    crumb: "Apartment Movers",
    navLabel: "Apartment moving",
    navBlurb: "Tower to tower, including both buildings' lift bookings.",
    title: "Apartment Movers in Dubai | Tower to Tower, Both Lifts Booked",
    description:
      "Apartment movers in Dubai: we book the service lift at both buildings, handle move-out permits and work inside your tower's window, with storage if dates slip.",
    keywords:
      "apartment movers in dubai, apartment movers dubai, flat movers dubai, moving apartment dubai, tower move dubai, apartment relocation dubai",
    ogTitle: "Apartment Movers in Dubai — Both Lifts Booked",
    h1: "Apartment Movers Dubai: Both Lifts Booked",
    introH2: "Apartment moving in Dubai, in brief",
    hero: [
      "A tower-to-tower move in Dubai is a logistics problem before it is a lifting problem, and the thing that goes wrong is almost always the same: someone booked the move-out lift and forgot the move-in one. Both are arranged as part of [moving and storage in Dubai](/moving-storage-dubai).",
      "**We deal with both buildings** — lift bookings, permitted windows, move-out permits, NOCs and loading-bay access at each end. If the two dates do not meet, everything goes into storage for the gap rather than into a hotel room.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The building is the constraint, not the furniture",
        paras: [
          "The difference between a three-hour move and a seven-hour one is almost never the amount of stuff. It is whether the lift was booked, whether it is shared with another move that day, and whether the building permits work at the hour you arranged.",
          "None of it is published. Some towers want 48 hours' notice and a deposit; some restrict moves to set hours; older buildings in Deira and Bur Dubai often want a permit or an owner's NOC. Parking is the other frequent failure — several Marina and JLT towers have no usable loading bay, and a van that cannot park is a move that has not started.",
        ],
      },
      {
        kind: "steps",
        h2: "How a tower-to-tower move runs",
        items: [
          {
            h: "Both addresses at booking",
            p: "Not just the one you are leaving. This is the step people skip and the one that costs a day.",
          },
          {
            h: "We arrange both buildings",
            p: "Lift slots, permits, crew registration and the loading bay at each end.",
          },
          {
            h: "Pack, load, move, unload",
            p: "A 1BHK is three to five hours end to end when both lifts are booked — considerably longer when they are not.",
          },
          {
            h: "Or storage if the dates do not meet",
            p: "Common, and it costs the gap rather than a month. [Packing services](/moving-storage-dubai/packing-services) covers the packing half.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "What to confirm before the day",
        items: [
          "The permitted moving window at **both** buildings, and whether either restricts certain days.",
          "Whether a move-out permit or owner's NOC is needed — common in older Deira and Bur Dubai buildings.",
          "Whether the new building needs its move-in slot booked separately. Most do.",
          "Loading bay or van parking at both ends.",
        ],
        note: "Box everything loose beforehand. In a tower this matters more than in a villa, because it all goes through one lift.",
      },
    ],
    faqs: [
      {
        q: "Do you book the service lift?",
        a: "Yes, at both buildings, as part of arranging the move. Give us both addresses when you book — arranging the move-out slot and forgetting the move-in slot is the commonest reason a tower move fails.",
      },
      {
        q: "How long does a flat move take?",
        a: "A studio is two to three hours, a one-bedroom three to five, a two-bedroom five to seven — when both lifts are booked. Without that, add several hours and some uncertainty.",
      },
      {
        q: "What if the new flat is not ready on the day?",
        a: "Everything goes into storage and comes out when it is. Billing is monthly with no minimum, so a seventeen-day Ejari gap costs seventeen days.",
      },
      {
        q: "Is there parking for your van?",
        a: "Usually, though some Marina, JLT and Business Bay towers have no usable loading bay and need one reserved in advance. Tell us the buildings and we check rather than arriving and finding out.",
      },
    ],

    serviceType: "Apartment moving",
    cta: {
      h2: "Moving between towers?",
      p: "Send both building names with your enquiry. Both lift bookings are the job.",
    },
    siblings: [
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/inter-emirate-moving",
    ],
  },

  /* ---------------------------------------------------------- office-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/office-movers",
    crumb: "Office Movers",
    navLabel: "Office moving",
    navBlurb: "Out of hours, department-labelled, with the gap covered.",
    title: "Office Movers in Dubai | Out of Hours, Gap Covered",
    description:
      "Office movers in Dubai: evening and weekend collections, item-level records, and storage for the gap between an old lease ending and a new fit-out finishing.",
    keywords:
      "office movers in dubai, office movers dubai, office relocation dubai, business movers dubai, commercial movers dubai, office moving company dubai",
    ogTitle: "Office Movers in Dubai",
    h1: "Office Movers in Dubai: Evenings, Gap Covered",
    introH2: "Office moving in Dubai, in brief",
    hero: [
      "An office move is judged on one thing: whether people can work on Monday. Everything else is detail, and the way to protect it is to move outside working hours and to plan for the fit-out overrunning — which is the moving half of [moving and storage in Dubai](/moving-storage-dubai).",
      "Collections are normally **evenings or a weekend**, because an office cannot be cleared around people working in it, and most Dubai commercial towers restrict move-outs to defined windows anyway.",
      "Where the new floor is not finished — which is the normal case rather than the exception — everything goes into storage for the gap and comes back in stages as areas complete.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Plan for the fit-out overrunning",
        paras: [
          "Fit-outs overrun. Not sometimes — as a rule, and usually by weeks rather than days, because approvals, contractor scheduling and snagging all compound. An office move plan that assumes the new floor is ready on the promised date is a plan with one point of failure in it.",
          "The way to remove that failure is to decouple the two dates. Hand the old floor back on its date, store everything, and move in when the new floor is genuinely finished rather than nominally finished. Billing is monthly with no fixed end, so the overrun costs the weeks it costs and nothing else.",
          "The alternative — extending the old lease at short notice — is almost always more expensive and sometimes not available at all, because the landlord has already re-let it.",
          "Phased delivery back works well with this: as areas of the new floor are completed, the furniture for those areas comes back, so the business occupies the finished part while snagging continues elsewhere.",
        ],
      },
      {
        kind: "checklist",
        h2: "The office move checklist that protects Monday",
        items: [
          "Confirm the move-out window and permit at the old building, and the move-in window at the new one.",
          "Back up and image every machine, and take drives out of anything critical. Storage should never be the only copy.",
          "Photograph each workstation's cable layout and bag cables per desk. This is the single biggest time saving on reassembly.",
          "Label by destination department and new-floor zone, not by which room it came from.",
          "Decide what is not going before the day. An office move is where the surplus furniture problem surfaces at 9pm.",
          "Keep licences, leases and statutory originals with you rather than in a crate — see [office and relocation storage](/moving-storage-dubai/international-relocation) for the records side.",
          "Nominate one person on each side who can make decisions on the day, and make sure the crew knows who they are.",
        ],
      },
      {
        kind: "table",
        h2: "Scale and timing",
        columns: ["Office", "Typical window", "If it goes into storage"],
        rows: [
          ["Up to 10 desks", "An evening", "80–150 sq ft"],
          ["10–30 desks", "A full day or a night", "150–400 sq ft"],
          ["30–60 desks", "A weekend", "400–800 sq ft"],
          ["60+ desks", "Phased over two weekends", "Survey required"],
        ],
        note: "Above about 30 desks we would rather survey than estimate. On an office move a wrong estimate is a Monday morning with no desks, which is a different order of problem from a domestic overrun.",
      },
    ],
    faqs: [
      {
        q: "Can you move us over a weekend?",
        a: "Yes, and for most offices that is how it is done. Evenings and weekends avoid disrupting trading, and most Dubai commercial towers restrict move-outs to those windows in any case.",
      },
      {
        q: "What happens if the new fit-out is not finished?",
        a: "Everything goes into storage and comes back when the floor is genuinely ready — in stages if you want to occupy the completed areas first. Billing is monthly with no fixed end date, so an overrun costs weeks rather than triggering a renegotiation.",
      },
      {
        q: "Do you handle IT equipment?",
        a: "Yes. Back up and image machines beforehand and remove any drive holding critical data. Screens travel and are stored upright, and cables are bagged per workstation.",
      },
      {
        q: "Who arranges the building permits?",
        a: "We arrange lift bookings and crew registration at both buildings. Anything the landlord requires from you as tenant — an NOC, a clearance letter — remains yours to obtain, and it is worth starting early.",
      },
      {
        q: "Can you deliver in phases as the fit-out completes?",
        a: "Yes, and for a phased fit-out that is the sensible approach. Each delivery is quoted as its own job and areas get refurnished as they are handed over.",
      },
      {
        q: "What do we do with surplus furniture after downsizing?",
        a: "Store it rather than deciding in the final week of a lease. A few months of storage usually costs far less than the difference between a considered disposal and a rushed one.",
      },
    ],
    serviceType: "Office moving",
    cta: {
      h2: "Moving an office?",
      p: "Assume the fit-out overruns and plan the storage for it. That single assumption protects the date.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/inter-emirate-moving",
      "/moving-storage-dubai/villa-movers",
    ],
  },

  /* -------------------------------------------------------- packing-services */
  {
    silo: "s5",
    path: "/moving-storage-dubai/packing-services",
    crumb: "Packing Services",
    navLabel: "Packing services",
    navBlurb: "What we wrap as standard, and what is worth packing yourself.",
    title: "Packing and Moving Companies in Dubai | What We Wrap",
    description:
      "Packing and moving companies in Dubai: furniture wrapping is part of every collection. See what we wrap, what is worth boxing yourself, and how it lowers your bill.",
    keywords:
      "packing and moving companies dubai, packing services dubai, packing and moving dubai, professional packers dubai, moving boxes dubai, packing company dubai",
    ogTitle: "Packing Services in Dubai — What Is Included",
    h1: "Packing in Dubai: What We Wrap",
    introH2: "Packing services, in brief",
    hero: [
      "Furniture wrapping is included in every collection rather than a line item you add — worth stating plainly, because most packing and moving companies in Dubai price it separately. Part of the standard service in [moving and storage in Dubai](/moving-storage-dubai).",
      "**Included:** wrapping furniture at your property, the materials, dismantling and reassembling what comes apart, and the loading. **Worth doing yourself:** boxing loose small items — the single biggest thing that lowers your bill.",
    ],
    sections: [
      {
        kind: "cards",
        h2: "What we wrap as standard",
        items: [
          {
            icon: "🛋️",
            h: "Upholstery",
            p: "Sofas and armchairs fully wrapped at your property — not sheeted, and not wrapped later at the warehouse.",
          },
          {
            icon: "🪑",
            h: "Hard furniture",
            p: "Tables, wardrobes and units wrapped, with legs and panels off where the piece is designed to come apart.",
          },
          {
            icon: "🛏️",
            h: "Mattresses",
            p: "In covers, stored flat. Never on edge for months, which deforms them permanently.",
          },
          {
            icon: "📺",
            h: "Screens and glass",
            p: "Wrapped and carried upright, then racked upright with nothing resting on them.",
          },
        ],
      },
      {
        kind: "prose",
        h2: "Why boxing it yourself saves real money",
        paras: [
          "You are billed on the floor space your goods occupy once racked, not on item count. Sealed uniform cartons stack into a dense square block; a lamp, a laundry basket, a bag of cables and three cushions do not stack at all, and the air between them is space you pay for every month.",
          "It also shortens the collection. A flat where the small items are already boxed loads roughly a third quicker — and uniform box sizes matter, because mixed cartons rack badly for the same reason loose items do.",
        ],
      },
      {
        kind: "checklist",
        h2: "Packing well, in five lines",
        items: [
          "Heavy items in small boxes, light items in big ones — the opposite of what everyone does first.",
          "Fill every box to the top. A half-full box crushes under the one above it.",
          "Label the room it is going **to**, not the room it came from.",
          "Plates on edge like records, not stacked flat. They survive far better.",
          "Keep one suitcase of live essentials with you — documents, chargers, medication, a change of clothes.",
        ],
        note: "Do not box anything on the [prohibited list](/self-storage-dubai/prohibited-items) — the balcony, the kitchen cupboard and the garage are where all of it lives.",
      },
    ],
    faqs: [
      {
        q: "Is packing included or charged separately?",
        a: "Furniture wrapping and the materials for it are included in the collection rather than being an added line. Boxing loose small items is the part worth doing yourself, because it directly lowers what you are billed.",
      },
      {
        q: "Will you pack my small items if I ask?",
        a: "Tell us at quoting and it can be arranged, but understand the trade — you pay for the labour and for the extra space that hurried on-site packing usually occupies.",
      },
      {
        q: "Do you dismantle and reassemble furniture?",
        a: "Yes, for anything designed to come apart, and we reassemble on delivery. Flag anything assembled in place that has never been moved, because those need more time and sometimes cannot be reassembled to the same standard.",
      },
      {
        q: "What should I definitely not pack?",
        a: "Anything flammable or pressurised, anything perishable, and anything you will need at short notice. Passports, Emirates ID, medication and tenancy paperwork stay with you in a suitcase, not in a carton.",
      },
    ],

    serviceType: "Packing services",
    cta: {
      h2: "Packing before a move?",
      p: "Box the small things over a few evenings. It is the cheapest hour's work in the whole job.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/leaving-uae-checklist",
      "/moving-storage-dubai/inter-emirate-moving",
    ],
  },

  /* --------------------------------------------------- inter-emirate-moving */
  {
    silo: "s5",
    path: "/moving-storage-dubai/inter-emirate-moving",
    crumb: "Inter-Emirate Moving",
    navLabel: "Moving between emirates",
    navBlurb: "Dubai to Abu Dhabi, Sharjah and the Northern Emirates.",
    title: "Moving Between Emirates | Dubai To Abu Dhabi, Sharjah & Beyond",
    description:
      "Moving between UAE emirates. Dubai to Abu Dhabi, Sharjah, Ajman and the Northern Emirates — timing, the lease-date mismatch, and storage when the two dates do not meet.",
    keywords:
      "dubai to abu dhabi movers, moving between emirates uae, dubai to sharjah movers, inter emirate moving uae, moving to abu dhabi from dubai",
    ogTitle: "Moving Between Emirates in the UAE",
    h1: "Moving Between Emirates",
    introH2: "Moving between emirates, in brief",
    hero: [
      "Inter-emirate moves are the quiet majority of UAE relocations — Dubai to Abu Dhabi for a job, Dubai to Sharjah or Ajman for rent, Sharjah to Dubai for a commute. All handled as part of [moving and storage in Dubai](/moving-storage-dubai).",
      "We operate warehouses in **Dubai, Sharjah and Ajman**, and collect from Abu Dhabi, Al Ain and the Northern Emirates with storage at the nearest facility. The problem is almost never the distance — it is that the two tenancies run on different calendars and rarely meet.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why the dates never line up",
        paras: [
          "Each emirate runs its own tenancy registration and its own conventions, so a lease ending in Sharjah and one starting in Dubai are two unrelated calendars that happen to sit near each other. Add a landlord's handover and an employer's start date, both of which slip, and a fortnight's gap is the normal case rather than bad luck.",
          "Storage covers it with no minimum term: empty the old property on its date, hold everything, deliver when the new one exists. The other timing point is traffic rather than tenancy — a Dubai to Abu Dhabi move starting at 7am spends a long time on the E11, and one starting mid-morning does not.",
        ],
      },
      {
        kind: "table",
        h2: "Moving between emirates",
        columns: ["Route", "Typically", "Where goods are stored if needed"],
        rows: [
          ["Dubai ↔ Sharjah", "Same day", "Facility in the relevant emirate"],
          ["Dubai ↔ Ajman", "Same day", "Facility in the relevant emirate"],
          ["Dubai ↔ Abu Dhabi", "Same day, mid-morning start", "Nearest facility — Abu Dhabi is collection-only"],
          ["Dubai ↔ Al Ain", "Same day, early planning", "Nearest facility"],
          ["Dubai ↔ RAK / Fujairah / UAQ", "Same day", "Nearest facility"],
        ],
        note: "Collection coverage by district is on the [locations pages](/locations), each of which states plainly whether that emirate has a facility or is served as a collection area.",
      },
      {
        kind: "checklist",
        h2: "Inter-emirate specifics",
        items: [
          "Confirm both tenancy dates in writing before booking, and assume at least one will move.",
          "Check the new emirate's tenancy registration — it is not the same as Dubai's Ejari.",
          "Update your address for vehicle registration, and check your Salik and toll arrangements.",
          "Plan the start time around the traffic direction, not just the distance.",
        ],
        note: "If there is a gap, book the storage at the same time as the move rather than as a panic on the day.",
      },
    ],
    faqs: [
      {
        q: "Do you move between all seven emirates?",
        a: "Yes. We operate warehouses in Dubai, Sharjah and Ajman, and collect from Abu Dhabi, Al Ain and the Northern Emirates with storage at the nearest facility. Each location page states plainly which applies.",
      },
      {
        q: "How long does a Dubai to Abu Dhabi move take?",
        a: "It is a same-day job, and the variable is traffic rather than distance. A mid-morning start avoids the worst of the E11, which is why the crew will usually propose one.",
      },
      {
        q: "What if my lease dates do not line up?",
        a: "That is the normal case rather than the exception, because each emirate runs its own tenancy calendar. Storage covers the gap with no minimum term, so a fortnight costs a fortnight.",
      },
      {
        q: "Are my goods stored in the emirate I am moving to?",
        a: "In Dubai, Sharjah and Ajman, yes — we have warehouses in each. Abu Dhabi and the Northern Emirates are served as collection areas with storage at the nearest facility, and the location pages say so rather than implying a local warehouse.",
      },
    ],

    serviceType: "Inter-emirate moving",
    cta: {
      h2: "Moving to another emirate?",
      p: "Send both addresses and both dates. If there is a gap, book the storage at the same time.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/packing-services",
    ],
  },

  /* -------------------------------------------------- leaving-uae-checklist */
  {
    silo: "s5",
    path: "/moving-storage-dubai/leaving-uae-checklist",
    crumb: "Leaving The UAE Checklist",
    navLabel: "Leaving the UAE checklist",
    navBlurb: "The exit sequence, in the order it actually has to happen.",
    title: "Leaving The UAE Checklist | The Exit Sequence, In Order",
    description:
      "A leaving-the-UAE checklist in the order things actually have to happen — because several steps cannot be done once the one before it is complete.",
    keywords:
      "leaving uae checklist, moving out of dubai checklist, leaving dubai for good, exit checklist uae, cancelling visa dubai moving",
    ogTitle: "Leaving The UAE — The Checklist, In Order",
    h1: "Leaving the UAE: The Checklist, In Order",
    introH2: "Leaving the UAE, in brief",
    hero: [
      "Most leaving-the-UAE checklists are lists. The problem is that this is a **sequence**, and several steps become impossible once an earlier one is complete — which is why people discover at the airport that something needed doing three weeks ago. This sits alongside the relocation side of [moving and storage in Dubai](/moving-storage-dubai).",
      "The order below is the one that works. The single most important principle in it: **cancel the visa last**, because a great many things you still need to do require a valid residency.",
      "This is a practical checklist from a storage business rather than legal or financial advice. Confirm anything that depends on your employer, your bank or your visa status with the relevant party.",
    ],
    sections: [
      {
        kind: "steps",
        h2: "Eight to twelve weeks out",
        items: [
          { h: "Give notice on the tenancy", p: "Check the notice period in the contract — it is often 90 days and it is often missed." },
          { h: "Decide ship, sell or store", p: "Deciding early is what keeps you out of a forced sale. Storing does not preclude either of the others." },
          { h: "Tell the school", p: "Transfer certificates and attested records take longer than anyone expects, and cannot be rushed at the end." },
          { h: "Start on the car", p: "Selling or exporting a vehicle takes weeks, and any outstanding finance must clear before it can be transferred." },
        ],
      },
      {
        kind: "steps",
        h2: "Four to six weeks out",
        items: [
          { h: "Book the storage or the shipping", p: "Late June and August are the busiest weeks of the Dubai year and slots go early." },
          { h: "Get documents attested", p: "Degrees, marriage and birth certificates. Do this while you still hold a residency visa." },
          { h: "Clear loans and credit cards", p: "This one is not optional and it is slow. An outstanding liability can prevent departure." },
          { h: "Request the clearance letters", p: "From your bank once cleared, and from your landlord for the deposit." },
        ],
      },
      {
        kind: "steps",
        h2: "The final fortnight, in order",
        intro: "This order matters more than any other part of the list.",
        items: [
          { h: "Storage or shipping collection", p: "One or two days before handover, not on the day of it." },
          { h: "Final DEWA / utility settlement", p: "After the collection. A collection in an unlit flat with no lift is slower and hotter than it needs to be." },
          { h: "Property handover and deposit", p: "Get the clearance in writing at the handover itself, not afterwards." },
          { h: "Close bank accounts — but keep one open", p: "You will need somewhere for a deposit refund and a final salary to land." },
          { h: "Cancel the visa LAST", p: "Almost everything above needs a valid residency. Cancelling first is the most common and most expensive mistake on this list." },
        ],
      },
      {
        kind: "checklist",
        h2: "The things people forget",
        items: [
          "The gas cylinder. It goes back to the supplier and it cannot be stored, shipped or left behind.",
          "Salik and traffic fines, which must be settled and are checked.",
          "The final electricity and water settlement, which is separate from cancelling the account.",
          "Pet relocation, which takes months rather than weeks and cannot be compressed.",
          "Attested documents you will need abroad — get them before the visa goes.",
          "A UAE contact who can act for you after you fly, nominated in writing.",
          "Your copy of the storage inventory, kept somewhere that is not a box.",
        ],
        note: "If you are storing rather than shipping everything, [international relocation](/moving-storage-dubai/international-relocation) covers how storage fits around a container date.",
      },
    ],
    faqs: [
      {
        q: "When should I cancel my residency visa?",
        a: "Last. A great many of the steps above — attestation, banking, vehicle transfer, utility settlement — need a valid residency, and cancelling early is the mistake that turns an orderly exit into an expensive one.",
      },
      {
        q: "How far in advance should I book storage or shipping?",
        a: "Four to six weeks, and longer if you are leaving in late June or August. Those are the peak weeks of the Dubai moving year and the good slots go first.",
      },
      {
        q: "Should I close all my bank accounts?",
        a: "Keep one open until the deposit refund and any final salary have landed. Closing everything before those arrive leaves money with nowhere to go and is difficult to unwind from abroad.",
      },
      {
        q: "Can I store things and deal with them after I have left?",
        a: "Yes. Nominate someone in the UAE in writing before you fly and give us a reachable email address. Deliveries, releases and ending the booking can all be handled remotely.",
      },
      {
        q: "What about my car?",
        a: "Start eight to twelve weeks out. Any outstanding finance has to clear before a transfer, and selling in the final fortnight means selling when everyone else is also selling.",
      },
      {
        q: "How long does the whole process take?",
        a: "Plan for eight to twelve weeks. It can be done faster, but the parts that cannot be rushed — attestation, loan clearance, pet relocation, school records — are exactly the parts that block departure.",
      },
    ],
    serviceType: "Relocation guidance",
    cta: {
      h2: "Leaving the UAE?",
      p: "Book the collection early and cancel the visa last. Those two get most people through it cleanly.",
    },
    siblings: [
      "/moving-storage-dubai/international-relocation",
      "/moving-storage-dubai/packing-services",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/apartment-movers",
    ],
  },
]
