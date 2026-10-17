import type { SiloPageContent } from "./types"

/**
 * SILO 5 · second area batch (Oct 2026), from the "movers in <area>" sweep of the
 * Semrush UAE database. Phrase patterns differ from "movers and packers in …":
 *   jlt-movers       movers in jlt 320/6
 *   al-barsha-movers movers in al barsha 170/6
 *   mirdif-movers    movers in mirdif 140/8
 *   jumeirah-movers  movers in jumeirah 140/9
 *
 * Doorway guard: each page is organised around the BUILDING TYPE of its area, as
 * the site's own /locations pages describe it (JLT clusters of towers; Al Barsha
 * villas and mid-rise flats; Mirdif established family villas; Jumeirah older
 * low-rise villas with gardens). Facts about SafeStorage come only from the fact
 * pack in silo5-movers.ts.
 */

export const SILO5_AREA2_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------------- jlt-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/jlt-movers",
    crumb: "JLT Movers",
    navLabel: "JLT (Jumeirah Lakes Towers)",
    navBlurb: "Cluster and tower moves around the lakes, with lifts booked.",
    title: "Movers in JLT, Dubai | Tower and Cluster Moves, Lift Booked",
    description:
      "Movers in JLT, Dubai: we book the service lift at both towers, work cluster by cluster, wrap at your door and store between leases. Free, itemised quote.",
    keywords:
      "movers in jlt, movers and packers jlt, jlt movers, jumeirah lakes towers movers, moving company jlt, packers and movers jlt",
    ogTitle: "Movers in JLT, Dubai",
    h1: "Movers in JLT: Cluster by Cluster, Tower by Tower",
    introH2: "Moving in JLT, in brief",
    hero: [
      "Movers in JLT work in a district of towers grouped into clusters around shared lakes and podiums, where the first thing a crew needs is not the street but the cluster and the tower. We handle JLT moves as part of [moving and storage in Dubai](/moving-storage-dubai): we book the service lift and any permit at both buildings, wrap at your door, and move or store from there.",
      "This page is for people moving into, out of or within Jumeirah Lakes Towers. It covers why clusters matter, how a tower move is scheduled, and what to do when your lease and your next place do not line up.",
      "The common delay is not distance. It is arriving at the right cluster, the right tower and the right entrance with a lift slot that the building has actually confirmed.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why the cluster is part of the address",
        paras: [
          "JLT is laid out in clusters named by letter, and each cluster holds several towers. Names repeat across clusters, entrances are not always where you expect, and a crew sent to the wrong tower loses time that is paid for. A quote that names the cluster, the tower and the floor is a quote for a move that can actually be planned.",
          "Send all three with your first message, and a photo of the entrance if you have one. We use them to book the right lift, agree where the vehicle can stand and tell you how long the carry will be.",
        ],
      },
      {
        kind: "table",
        h2: "What a JLT tower move involves",
        columns: ["Step", "What happens", "What to have ready"],
        rows: [
          ["Building booking", "A service lift slot and, in most towers, a move permit", "Your tower's management contact, or ask us to find it"],
          ["Loading", "A limited loading bay or podium access, inside a set window", "Where the vehicle can stand, and for how long"],
          ["Carry", "From your door to the service lift and out to the vehicle", "Large pieces measured against the lift and doorways"],
          ["Second tower", "The same procedure again at the new building", "Slot and permit confirmed for the delivery date"],
        ],
        note: "Rules differ between towers, so check yours with management. The storage side of the district is on our [JLT location page](/locations/dubai/jlt).",
      },
      {
        kind: "prose",
        h2: "Homes, offices and the gap in between",
        paras: [
          "JLT has a large rental population, so leases turn over often and dates rarely meet. When a tenancy ends before the next begins, everything goes into our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and comes back when the new place is ready.",
          "The towers also hold offices, and an office move follows different rules: evenings or weekends, department labelling, and a plan for the new floor not being ready. Our [office movers](/moving-storage-dubai/office-movers) page sets that out.",
        ],
      },
      {
        kind: "checklist",
        h2: "JLT move checklist",
        items: [
          "Send the cluster, the tower and the floor, with a photo of the entrance if you can.",
          "Ask management for the service lift booking, the permitted hours and any permit, at both buildings.",
          "Agree where the vehicle can stand and how far that is from the service entrance.",
          "Measure large pieces against the service lift and your new doorways.",
          "Box small items yourself, sealed and labelled, to shorten the carry.",
          "Keep valuables, documents and chargers with you rather than on the vehicle.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a JLT move",
        items: [
          { h: "Send the cluster and tower", p: "Cluster, tower, floor and your dates. If you know where the goods are going, tell us that too." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough for anything larger than a flat." },
          { h: "We book both buildings", p: "Lift, bay and permit at each address, inside the window each tower allows." },
          { h: "Wrap and carry", p: "Furniture wrapped at your door, since wrapping is part of every collection, with pieces taken apart where the lift requires." },
          { h: "Move or store", p: "To the new address, or into storage under a barcoded inventory until it is ready." },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you book the service lift and permit in JLT?",
        a: "Yes. We arrange the lift and any permit at both towers and plan the move inside the window each building allows.",
      },
      {
        q: "Why do you need the cluster and tower?",
        a: "Towers in different clusters can share names and similar entrances. The cluster, tower and floor save a paid crew from searching for the right door.",
      },
      {
        q: "Can you store my things if my lease ends first?",
        a: "Yes. Goods go into our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and are delivered when your new place is ready.",
      },
      {
        q: "Do you move offices in JLT as well as homes?",
        a: "Yes. Offices move out of hours with department labelling, and storage covers a fit-out that finishes late.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in JLT",
    areaServed: "Jumeirah Lakes Towers, Dubai",
    cta: {
      h2: "Moving in or out of JLT?",
      p: "Send the cluster, the tower and the floor, and we will book the lift and confirm the window.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/dubai-marina-movers",
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------------ al-barsha-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/al-barsha-movers",
    crumb: "Al Barsha Movers",
    navLabel: "Al Barsha",
    navBlurb: "Villas, mid-rise flats and Barsha Heights moves.",
    title: "Movers in Al Barsha | Villas, Flats and Barsha Heights",
    description:
      "Movers in Al Barsha, Dubai, for villas, mid-rise flats and Barsha Heights towers. We plan around the building, wrap at your door and store goods between leases.",
    keywords:
      "movers in al barsha, al barsha movers, movers and packers al barsha, barsha heights movers, tecom movers, moving company al barsha",
    ogTitle: "Movers in Al Barsha, Dubai",
    h1: "Movers in Al Barsha: Villas, Flats, Barsha Heights",
    introH2: "Moving in Al Barsha, in brief",
    hero: [
      "Movers in Al Barsha deal with two different kinds of neighbourhood in one postcode: villas and mid-rise flats behind Mall of the Emirates, and the tower district of Barsha Heights next door. We handle both as part of [moving and storage in Dubai](/moving-storage-dubai), planned by building type, because the building decides the job.",
      "This page is for people moving into, out of or within Al Barsha. It covers how a villa move differs from a flat, what Barsha Heights towers need, and how to plan a move when the next home is not ready.",
      "The practical question to answer first is simple: are you leaving a villa, a mid-rise block or a tower? The plan for each is different.",
    ],
    sections: [
      {
        kind: "table",
        h2: "Three kinds of move in the same area",
        columns: ["Where", "What the homes are like", "What decides the day"],
        rows: [
          ["Al Barsha villas and townhouses", "Family homes with gardens and garages", "The garage and outdoor volume, and any community gate"],
          ["Mid-rise flats", "Blocks of a few floors, some with a lift and some without", "Stairs or lift, and where the vehicle can stand"],
          ["Barsha Heights towers", "High-rise towers with shared service lifts", "The lift booking, loading bay and permit"],
        ],
        note: "More local detail is on our [Al Barsha location page](/locations/dubai/al-barsha).",
      },
      {
        kind: "prose",
        h2: "Villa moves: count the garage and the garden",
        paras: [
          "A villa is bigger than its bedroom count, because the garage, the garden and the store room are rarely counted. Outdoor furniture, bikes, tools and boxes from the last move add up to more volume than the house itself in some homes, and a quote on bedrooms alone comes in low.",
          "For a villa we survey by video or visit first, count the outbuildings as part of the job, and register the crew with community security if the development is gated. Our [villa movers](/moving-storage-dubai/villa-movers) page covers the detail.",
        ],
      },
      {
        kind: "prose",
        h2: "Flats and towers: stairs, lifts and permits",
        paras: [
          "In a mid-rise block the question is whether there is a lift at all. If there is not, the job is carrying, and the width of the stairwell decides what can go down whole. In a Barsha Heights tower, the question is the service lift and the permit, and slots fill early at month-end.",
          "Tell us the building, the floor and the lift situation, and we plan the day around them. We book the lift and any permit ourselves, at both buildings, so the crew is not waiting at a locked door.",
        ],
      },
      {
        kind: "checklist",
        h2: "Al Barsha move checklist",
        items: [
          "Tell us whether it is a villa, a mid-rise flat or a tower, and the floor.",
          "Ask management or the community for the move procedure, permitted hours and any permit.",
          "For a villa, count the garage, garden and store room, and tell us about gate access.",
          "For a flat without a lift, measure large pieces against the stairwell.",
          "Box small items yourself, sealed and labelled, to lower the quote.",
          "Confirm access at the new address, since the same issues may apply.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run an Al Barsha move",
        items: [
          { h: "Tell us the building type", p: "Villa, block or tower, and the floor, plus your dates." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for villas and larger flats." },
          { h: "Book the access", p: "Lift and permit for towers, gate registration for villas, and a carrying plan for blocks without a lift." },
          { h: "Wrap and move", p: "Furniture wrapped at your door, wrapping being part of every collection." },
          { h: "Deliver or store", p: "To the new address, or into storage under a barcoded inventory until it is ready, billed monthly with no lock-in." },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover Barsha Heights as well as Al Barsha?",
        a: "Yes. They are different building types with different access, so tell us which when you ask for a quote.",
      },
      {
        q: "Can you move a whole villa in Al Barsha?",
        a: "Yes. A villa is planned from a survey, with the garage, garden and store room counted, and any community gate registered in advance.",
      },
      {
        q: "What if my building has no lift?",
        a: "Tell us the floor and we plan for carrying, and say beforehand if a piece will not come down the stairwell.",
      },
      {
        q: "Can you store my things between homes?",
        a: "Yes. Goods go into our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in Al Barsha",
    areaServed: "Al Barsha, Dubai",
    cta: {
      h2: "Moving in or out of Al Barsha?",
      p: "Tell us whether it is a villa, a flat or a tower, and the floor, and we will plan the access first.",
    },
    siblings: [
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/jlt-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* --------------------------------------------------------- mirdif-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/mirdif-movers",
    crumb: "Mirdif Movers",
    navLabel: "Mirdif",
    navBlurb: "Established family villas, long tenancies and big households.",
    title: "Movers in Mirdif | Family Villa Moves, Packed and Stored",
    description:
      "Movers in Mirdif, Dubai, for established family villas. We count the garage and outbuildings, wrap at your door and store goods if your dates do not line up.",
    keywords:
      "movers in mirdif, mirdif movers, movers and packers mirdif, villa movers mirdif, moving company mirdif, packers and movers mirdif",
    ogTitle: "Movers in Mirdif, Dubai",
    h1: "Movers in Mirdif: Family Villas, Long Tenancies",
    introH2: "Moving in Mirdif, in brief",
    hero: [
      "Movers in Mirdif spend most of their time in established family villas near the old airport road, where households have often lived for years and the contents show it. We handle Mirdif moves as part of [moving and storage in Dubai](/moving-storage-dubai), planned around the volume, because a long tenancy means a lot to move.",
      "This page is for families moving into, out of or within Mirdif. It explains why long-tenancy moves are larger than the bedroom count suggests, how to plan the sorting that comes first, and what to do when the next home is not ready.",
      "The usual surprise is volume. Years of living in a villa fill the garage, the store room and every cupboard, and it all has to be counted before a quote means anything.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why a long tenancy makes a bigger move",
        paras: [
          "A household that has been in the same villa for years has had time to accumulate. Garages hold tools, bicycles and outdoor furniture. Store rooms hold boxes from earlier moves that were never opened. Wardrobes hold clothes from several sizes ago. The bedroom count says very little about the volume.",
          "That is why we survey larger villas by video or visit before we quote, and count the garage and outbuildings as part of the job. A quote built on bedrooms alone comes in low, and a crew sized for it runs out of day.",
        ],
      },
      {
        kind: "table",
        h2: "What to sort before the survey",
        columns: ["Area", "What tends to be there", "What to decide"],
        rows: [
          ["Garage", "Tools, bikes, outdoor furniture, paint", "What goes, what is sold, what is stored, and what cannot travel at all"],
          ["Store room", "Old boxes, seasonal items", "Whether it is worth moving unopened boxes"],
          ["Garden", "Dining sets, loungers, planters", "Clean and drain before wrapping, and decide about plants"],
          ["Bedrooms", "Wardrobes and bulky furniture", "What comes apart and what comes whole"],
        ],
        note: "Local detail on the district is on our [Mirdif location page](/locations/dubai/mirdif).",
      },
      {
        kind: "checklist",
        h2: "Mirdif villa checklist",
        items: [
          "Return gas cylinders to the supplier. They cannot be moved or stored.",
          "Clear paint, thinners, pool chemicals and fuel from the garage. None of them can travel.",
          "Ask your community or landlord about vehicle access and any gate procedure.",
          "Clean outdoor furniture before the day, and drain anything holding water.",
          "Sort the store room, and decide what to do about boxes that have not been opened in years.",
          "Check any restrictions on delivery hours or vehicle size at the new property.",
        ],
      },
      {
        kind: "prose",
        h2: "Moving a family in stages",
        paras: [
          "A family move rarely goes in a single day. Children's schooling, a lease that ends before a handover, and a villa that needs painting before anyone moves in all push the timetable apart. When that happens, everything goes into our warehouse under a barcoded inventory and comes out in the order you need it.",
          "Storage is billed monthly on the space your goods occupy, with no lock-in, so the stages cost only the weeks they last. Furniture wrapping is part of every collection, and the same crew that wraps it carries it. Our [house movers](/moving-storage-dubai/house-movers) page sets out the order of work for a whole-home move.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Mirdif move",
        items: [
          { h: "Sort first", p: "Decide what is going, what is being sold and what is staying, so the quote is for the move you are making." },
          { h: "Survey", p: "A video walkthrough or a visit, with the garage, store room and garden counted." },
          { h: "Quote", p: "Written and itemised, with the access and the date stated." },
          { h: "Wrap and carry", p: "Furniture wrapped at your door, with pieces that come apart taken apart and labelled." },
          { h: "Move or store", p: "To the new home, or into storage under a barcoded inventory until it is ready." },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you survey Mirdif villas before quoting?",
        a: "Yes. A video walkthrough or a visit counts the garage, store room and garden, which is where a villa quote usually comes in short.",
      },
      {
        q: "Can you move a family in stages?",
        a: "Yes. Goods can go into storage and come out in the order you need them, with the inventory showing what is where.",
      },
      {
        q: "What cannot be moved or stored?",
        a: "Gas cylinders, paint, thinners, pool chemicals and fuel. Sort them before the day, since they are the items most often found on the morning.",
      },
      {
        q: "What about community gates and access?",
        a: "Tell us the community and we arrange crew and vehicle registration with security in advance, so the crew is not waiting at the gate.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in Mirdif",
    areaServed: "Mirdif, Dubai",
    cta: {
      h2: "Moving a family home in Mirdif?",
      p: "Ask for a survey, and make sure the quote counts the garage, the store room and the garden.",
    },
    siblings: [
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/house-movers",
      "/moving-storage-dubai/al-barsha-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------------ jumeirah-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/jumeirah-movers",
    crumb: "Jumeirah Movers",
    navLabel: "Jumeirah",
    navBlurb: "Older low-rise villas with generous gardens.",
    title: "Movers in Jumeirah | Low-Rise Villas and Garden Moves",
    description:
      "Movers in Jumeirah, Dubai, for older low-rise villas with generous gardens. We count the outbuildings, wrap at your door and store goods if your dates slip.",
    keywords:
      "movers in jumeirah, jumeirah movers, movers and packers jumeirah, villa movers jumeirah, moving company jumeirah, jumeirah 1 movers",
    ogTitle: "Movers in Jumeirah, Dubai",
    h1: "Movers in Jumeirah: Low-Rise Villas and Gardens",
    introH2: "Moving in Jumeirah, in brief",
    hero: [
      "Movers in Jumeirah work in one of Dubai's older residential districts, where low-rise villas sit on generous plots with gardens, and a lot of what needs moving is outside the house. We handle Jumeirah moves as part of [moving and storage in Dubai](/moving-storage-dubai), planned around the plot, not just the rooms.",
      "This page is for people moving into, out of or within Jumeirah. It covers how a garden villa differs from a flat, what to count before you ask for a quote, and how to use storage when a renovation or a handover keeps you out of a home for a few weeks.",
      "The usual surprise is the size of the outside: outbuildings, a large garden and a garage that holds more than the house suggests.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "The plot is part of the move",
        paras: [
          "A villa with a generous garden brings outdoor furniture, planters, a shed, pool equipment and often a separate staff or storage building. None of it appears in the bedroom count, and all of it has to be moved or stored. A quote that ignores the plot comes in low.",
          "Walk the whole plot before the survey, including every outbuilding, and tell us what you find. We count it as part of the job, and if something is large or awkward, we say beforehand whether it can be taken.",
        ],
      },
      {
        kind: "table",
        h2: "What to count in a garden villa",
        columns: ["Area", "What tends to be there", "What to plan for"],
        rows: [
          ["Garden and terrace", "Dining sets, loungers, parasols, planters", "Cleaning, draining and wrapping before they travel"],
          ["Outbuildings and store rooms", "Tools, boxes, seasonal items", "A realistic list of what is staying and what is going"],
          ["Garage", "Bikes, tools, spare furniture", "Items that cannot travel, such as paint, fuel and gas cylinders"],
          ["The house", "Furniture, wardrobes, wall units", "What comes apart and what must go whole"],
        ],
        note: "Local detail on the district is on our [Jumeirah location page](/locations/dubai/jumeirah).",
      },
      {
        kind: "prose",
        h2: "Renovation and the gap between homes",
        paras: [
          "Older villas are often renovated, and a renovation can take a home out of use for weeks. Furniture has to leave, stay safe and come back in the right order. We wrap it at your door, take it to our warehouse under a barcoded inventory and return it when the work is finished, billed monthly on the space used with no lock-in.",
          "The same applies to a sale that completes before a purchase. Furniture waits in storage instead of in a hotel room, and our [villa movers](/moving-storage-dubai/villa-movers) page sets out how a whole-villa move runs.",
        ],
      },
      {
        kind: "checklist",
        h2: "Jumeirah villa checklist",
        items: [
          "Walk the whole plot and list every outbuilding, shed and store room.",
          "Return gas cylinders to the supplier, and clear paint, thinners, pool chemicals and fuel.",
          "Clean outdoor furniture and drain anything holding water before it is wrapped.",
          "Decide about plants early, because they cannot be stored and become the last-hour problem.",
          "Ask about vehicle access and where a large vehicle can stand at both addresses.",
          "Photograph any piece you want recorded in its current condition.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Jumeirah move",
        items: [
          { h: "Walk the plot", p: "List the house, the garden, the garage and every outbuilding." },
          { h: "Survey and quote", p: "A video walkthrough or a visit, with a written, itemised quote." },
          { h: "Plan the access", p: "Where a large vehicle can stand, and the length of the carry, at both addresses." },
          { h: "Wrap and carry", p: "Furniture wrapped at your door, with pieces that come apart taken apart and labelled." },
          { h: "Move or store", p: "To the new home, or into storage under a barcoded inventory until it is ready." },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you count the garden and outbuildings?",
        a: "Yes. They are part of the volume, and a quote on bedrooms alone comes in short. We survey by video or visit to count them.",
      },
      {
        q: "Can you store furniture during a renovation?",
        a: "Yes. It is wrapped at your door and held under a barcoded inventory, billed monthly on the space used with no lock-in, then returned when the work is done.",
      },
      {
        q: "Can you move outdoor furniture?",
        a: "Yes. Clean it first and drain anything holding water, since sand and dust otherwise transfer to everything packed near it.",
      },
      {
        q: "What cannot be moved or stored?",
        a: "Gas cylinders, paint, thinners, pool chemicals and fuel. Sort them before the day.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in Jumeirah",
    areaServed: "Jumeirah, Dubai",
    cta: {
      h2: "Moving a villa in Jumeirah?",
      p: "Walk the whole plot first, and we will quote the move you actually have.",
    },
    siblings: [
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/house-movers",
      "/moving-storage-dubai/palm-jumeirah-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },
]
