import type { SiloPageContent } from "./types"

/**
 * SILO 5 · area pages for movers — /moving-storage-dubai/<area>-movers
 *
 * One page per area where the movers-and-packers search is real and the
 * difficulty is low (Semrush UAE, 16–17 Oct 2026; volume / KD):
 *   dubai-marina-movers    movers in dubai marina 880/11 · movers and packers
 *                          in dubai marina 320/18 · dubai marina movers and
 *                          packers 390/19
 *   jvc-movers             movers and packers in jvc 480/7 · jvc 110/6
 *   business-bay-movers    movers and packers in business bay 260/6 · 110/7
 *   palm-jumeirah-movers   movers and packers in palm jumeirah 140/9
 *   silicon-oasis-movers   movers and packers in dubai silicon oasis 90/6 · 50/5
 *
 * DOORWAY GUARD. What separates these from each other is the BUILDING: how a
 * tower, a mid-rise block, a gated frond or a student residence is actually
 * accessed. Swapping the district name into another page's paragraph would not
 * produce a valid page here, and that is the test each one was written against.
 * They link to the storage-side area pages under /locations (a coverage link,
 * exception B of the linking plan) rather than repeating that content.
 *
 * Only facts from the fact pack in silo5-movers.ts are stated about the
 * company. Statements about buildings describe how Dubai buildings generally
 * operate and are phrased as "many" or "most" where practice varies.
 */

export const SILO5_AREA_PAGES: SiloPageContent[] = [
  /* ------------------------------------------------------ dubai-marina-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/dubai-marina-movers",
    crumb: "Dubai Marina Movers",
    navLabel: "Dubai Marina",
    navBlurb: "Tower moves in Marina, JBR, JLT and Bluewaters, with the lift booked.",
    title: "Movers in Dubai Marina | Tower Moves, Lift Slots Booked",
    description:
      "Movers and packers in Dubai Marina, JBR and JLT. We book the service lift and move permit, wrap at your door and store between leases. Free, itemised quote.",
    keywords:
      "movers in dubai marina, movers and packers in dubai marina, dubai marina movers and packers, jbr movers, marina moving company, apartment movers marina",
    ogTitle: "Movers and Packers in Dubai Marina",
    h1: "Movers and Packers in Dubai Marina: No Lobby Waiting",
    introH2: "Moving in the Marina, in brief",
    hero: [
      "Movers in Dubai Marina spend as much of the day on building logistics as on lifting, because the Marina is a district of towers, and every tower has its own lift, loading bay and moving window. We handle those as part of [moving and storage in Dubai](/moving-storage-dubai): we book the service lift and any move permit at both buildings, wrap at your door, and move or store from there.",
      "This page is for people moving into, out of or within the Marina, JBR, JLT and Bluewaters. It covers how a tower move is actually scheduled, what differs between the four neighbourhoods, and how to keep a move inside the window your building allows.",
      "The usual problem is not distance. It is a lift slot booked for the wrong hour, or a move permit requested too late, and a paid crew waiting at the kerb.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "How a tower move in the Marina is scheduled",
        paras: [
          "Most Marina towers run a moving procedure through building management. You request a move-out or move-in slot, the building confirms a service lift and a time window, and many ask for a permit or notice in advance. Windows are often limited to certain hours, and some restrict moving at weekends or in the evening.",
          "The slots that matter are at both ends. A flat leaving Marina for JVC needs a slot here and a slot there, and the two buildings will not coordinate with each other. We make both bookings, so the crew arrives at a time each building has agreed to.",
          "The practical rule is to ask for the slot as soon as your date is fixed. Popular windows, especially at month-end, fill early, and a move pushed into a later window can mean paying a crew for waiting time.",
        ],
      },
      {
        kind: "table",
        h2: "Four neighbourhoods, four kinds of access",
        columns: ["Area", "What the buildings are like", "What to plan for"],
        rows: [
          ["Dubai Marina", "High-rise towers along the waterfront, many with shared service lifts", "A booked lift slot, a short loading-bay window, a permit"],
          ["JBR", "Beachfront towers in rows, with busy approach roads", "Kerb access timing, and plenty of notice for the day"],
          ["JLT", "Clusters of towers around a shared lake and podium", "Confirm which tower and which entrance, because clusters share names"],
          ["Bluewaters Island", "Residences on an island reached by a bridge", "Confirm access routes and timing with the building in advance"],
        ],
        note: "Check the building's own rules before the day. Practice differs between towers, and the management office is the authority on windows and permits.",
      },
      {
        kind: "prose",
        h2: "Why Marina moves so often include storage",
        paras: [
          "Marina flats are compact and storage rooms are small, so households tend to hold more than the apartment comfortably takes. That makes a move a decision point: what comes with you, what is sold, and what waits.",
          "Two situations account for most of the storage we see in the area. The first is the lease gap, where a tenancy ends before the next begins. The second is a renovation, where furniture has to leave for a few weeks and come back. In both cases, goods go from your flat to our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and return when you ask. Detail on the storage side is on our [Dubai Marina storage page](/locations/dubai/dubai-marina).",
        ],
      },
      {
        kind: "checklist",
        h2: "Tower move checklist",
        items: [
          "Ask building management for the moving procedure, the window and any permit, at both addresses.",
          "Book the service lift for the whole job, not for the first hour of it.",
          "Measure large pieces against the new tower's lift and doorways.",
          "Find out where the crew can park and how far the carry is from the bay to the lift.",
          "Tell the front desk the crew is arriving, so visitor access does not delay the first hour.",
          "Protect shared corridors if the building requires it, and confirm who is responsible for that.",
          "Keep valuables, documents and chargers with you rather than on the vehicle.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Marina move",
        items: [
          { h: "Send the tower and floor", p: "The building name, the floor and a rough list of what is moving. For larger flats we do a video walkthrough, so the quote reflects the real contents." },
          { h: "We book the building", p: "The service lift and any permit at both addresses, inside the window each building allows." },
          { h: "Wrap and load", p: "Furniture is wrapped at your door, wrapping being part of every collection. Beds, wardrobes and tables that come apart are taken apart and labelled." },
          { h: "Move or store", p: "To your next address, into storage under a barcoded inventory, or split between the two." },
          { h: "Deliver and rebuild", p: "Beds go up first. What we took apart is put back together." },
        ],
      },
      {
        kind: "prose",
        h2: "Moving beyond the Marina",
        paras: [
          "Most Marina moves are to somewhere else in Dubai, and some go further. If you are leaving for another emirate, the timing and the tenancy dates work differently, which is covered in [moving between emirates](/moving-storage-dubai/inter-emirate-moving). If you are only moving a few pieces rather than a whole flat, [furniture movers](/moving-storage-dubai/furniture-movers) is a better starting point. And for the cost side, our [guide to what movers and packers cost](/moving-storage-dubai/moving-cost) lists every factor in a quote.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you book the service lift and permit for me?",
        a: "Yes. We arrange the service lift and any move permit at both buildings and plan the move inside the window each allows, so you are not negotiating slots yourself.",
      },
      {
        q: "Do you cover JBR, JLT and Bluewaters as well as the Marina?",
        a: "Yes, we collect from all four. Each has different access, so send the building and tower name and we will confirm the details before you book.",
      },
      {
        q: "Can you store my things if my new place is not ready?",
        a: "Yes. Goods go to our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and come back when the new address is ready.",
      },
      {
        q: "How far ahead should I book a Marina move?",
        a: "As soon as your date is fixed. Moving windows in popular towers fill early, particularly at month-end and in summer, and the lift slot is the first thing to secure.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small loose items is separate, and doing it yourself is the easiest way to reduce the quote.",
      },
    ],
    serviceType: "Moving in Dubai Marina",
    areaServed: "Dubai Marina",
    cta: {
      h2: "Moving in or out of the Marina?",
      p: "Send the tower and the floor, and we will book the lift and confirm the window before you commit.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/furniture-movers",
      "/moving-storage-dubai/jvc-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------------------- jvc-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/jvc-movers",
    crumb: "JVC Movers",
    navLabel: "JVC (Jumeirah Village Circle)",
    navBlurb: "Studios to townhouses in JVC and JVT, with high-turnover leases covered.",
    title: "Movers and Packers in JVC | Studios to Townhouses, Dubai",
    description:
      "Movers and packers in JVC and JVT for studios, mid-rise flats and townhouses. We wrap at your door, handle the building's rules and store goods between leases.",
    keywords:
      "movers and packers in jvc, movers and packers jvc, jvc movers, jumeirah village circle movers, jvt movers, moving company jvc",
    ogTitle: "Movers and Packers in JVC, Dubai",
    h1: "Movers and Packers in JVC: Studios to Townhouses",
    introH2: "Moving in JVC, in brief",
    hero: [
      "Movers and packers in JVC deal with an unusual mix: Jumeirah Village Circle holds studios, mid-rise flats, high-rise towers and townhouses side by side, so no two jobs in the community look alike. We cover all of it as part of [moving and storage in Dubai](/moving-storage-dubai), with the building's rules handled and storage for any gap in your dates.",
      "This page is for people moving into, out of or within JVC and the neighbouring Jumeirah Village Triangle. It explains what differs by building type, why JVC leases turn over so often, and how to keep a move simple when the next place is not quite ready.",
      "The practical difference from a tower district is that many JVC buildings are low-rise or mid-rise, so the question is as often stairs and parking as it is service lifts.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why JVC moves are different",
        paras: [
          "JVC is a large community, laid out in numbered districts, and it is known for compact, relatively affordable homes. That has two consequences for moving. People move in and out more often than in most communities, because short leases and the step up to a larger home are both common. And a lot of the stock is small, so households often hold more than the home takes comfortably.",
          "For a mover, the useful thing to know is that the building type decides the job, not the community. A third-floor walk-up, a mid-rise with one lift and a gated townhouse cluster are three different jobs inside the same postcode.",
        ],
      },
      {
        kind: "table",
        h2: "Three building types, three kinds of move",
        columns: ["Building type", "What to expect", "What we plan for"],
        rows: [
          ["Low-rise block, often no lift", "Stairs for every item, and a short carry from the entrance", "Extra time for carrying, and early notice if a piece is large"],
          ["Mid-rise or high-rise tower", "A shared lift, a booking window, sometimes a move permit", "The lift slot and permit, booked for both ends"],
          ["Townhouse cluster", "Gated access and a driveway, garage and terrace to count", "Gate registration and the garage as part of the volume"],
        ],
        note: "Confirm the building's own moving rules before the day, since they vary between developments in JVC.",
      },
      {
        kind: "prose",
        h2: "Moving up, moving down, and the gap in between",
        paras: [
          "JVC moves cluster around two patterns. One is the household that has outgrown a studio or one-bedroom and is moving to a bigger flat or a townhouse, often in JVC itself or in JVT next door. The other is the household that is downsizing, or leaving, and has more than the next place holds.",
          "In both, the dates tend not to line up. When a tenancy ends before the next begins, everything goes into storage at our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and comes out when the new place is ready. The storage side is described on our [JVC storage page](/locations/dubai/jumeirah-village-circle).",
        ],
      },
      {
        kind: "checklist",
        h2: "JVC move checklist",
        items: [
          "Ask your building or community management what it requires for a move: notice, permit and permitted hours.",
          "For a low-rise block, tell us the floor and whether there is a lift, so the crew is sized for the stairs.",
          "For a townhouse, count the garage, terrace and any store room, since they are part of the volume.",
          "Register the crew and vehicle with security if your community is gated.",
          "Measure the largest pieces against the new home's doorways and stairwell.",
          "Box small items yourself if you can. Sealed cartons lower the bill and load faster.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a JVC move",
        items: [
          { h: "Tell us the building type", p: "A flat in a block, a tower or a townhouse. That is the single fact that tells us how the job will run." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for anything larger than a flat." },
          { h: "Book the access", p: "The service lift or gate registration, at both addresses, inside the permitted window." },
          { h: "Wrap, move or store", p: "Furniture is wrapped at your door, since wrapping is part of every collection. Goods go to the new address or into storage." },
          { h: "Rebuild", p: "Beds, wardrobes and tables that were taken apart go back together at the other end." },
        ],
      },
      {
        kind: "prose",
        h2: "Related moves from JVC",
        paras: [
          "If you are moving a whole townhouse, read how we handle the garage and garden in [villa movers](/moving-storage-dubai/villa-movers). If you are going from a flat to a flat, [apartment movers](/moving-storage-dubai/apartment-movers) covers the lift and permit side. Moving in the Marina instead? The access there is very different, set out in [Dubai Marina movers](/moving-storage-dubai/dubai-marina-movers).",
        ],
      },
      {
        kind: "prose",
        h2: "What gets forgotten in a JVC move",
        paras: [
          "The items people forget are the ones that live outside the main rooms: balcony furniture, the cupboard under the stairs in a townhouse, the spare room that has become a store, and everything stacked on top of wardrobes. Together they add up to more volume than expected, and they are the usual reason a quote runs short.",
          "Walk through the home with a notepad before the survey, including balconies and, in a townhouse, the terrace and any roof area, and tell us what you find. It costs nothing and it keeps the quote close to the real job. Also check for storage that belongs to your flat but is out of sight, such as a store cage in a parking area.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover all of JVC and JVT?",
        a: "Yes. We collect from JVC across its districts and from Jumeirah Village Triangle next door. Send the building or community name and we will confirm access before you book.",
      },
      {
        q: "Can you move me out of a building with no lift?",
        a: "Yes. Tell us the floor when you ask for a quote so the crew and the time are planned for the stairs. A walk-up is quoted differently from a tower with a service lift.",
      },
      {
        q: "What if my new place is not ready?",
        a: "Goods go into storage under a barcoded inventory, billed monthly on the space used with no lock-in. You collect them, or we deliver, when the new home is ready.",
      },
      {
        q: "Do you handle townhouse garages and terraces?",
        a: "Yes. They are counted as part of the volume, because a garage is often the largest single area in a townhouse, and a quote on bedrooms alone comes in short.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing loose items is separate and is the biggest saving you can make yourself.",
      },
    ],
    serviceType: "Moving in JVC",
    areaServed: "Jumeirah Village Circle, Dubai",
    cta: {
      h2: "Moving in or out of JVC?",
      p: "Tell us the building type and the floor, and we will quote the move you actually have.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/dubai-marina-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* -------------------------------------------------- business-bay-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/business-bay-movers",
    crumb: "Business Bay Movers",
    navLabel: "Business Bay",
    navBlurb: "Home and office moves along the canal, out of hours where needed.",
    title: "Movers and Packers in Business Bay | Home and Office Moves",
    description:
      "Movers and packers in Business Bay for flats and offices alike. We book the lift at both buildings, move out of hours where needed, and store between dates.",
    keywords:
      "movers and packers in business bay, movers and packers in dubai business bay, business bay movers, office movers business bay, moving company business bay",
    ogTitle: "Movers and Packers in Business Bay, Dubai",
    h1: "Movers and Packers in Business Bay: Flats and Offices",
    introH2: "Moving in Business Bay, in brief",
    hero: [
      "Movers and packers in Business Bay handle two different jobs in the same towers: residential flats on the canal, and offices on the floors below or beside them. Both are part of [moving and storage in Dubai](/moving-storage-dubai), and both depend on getting the lift, the loading bay and the moving window right.",
      "This page is for people moving into, out of or within Business Bay, whether that is a flat, a studio office or a larger team. It covers how mixed-use towers work, what changes between a home and an office move, and what to do when the new fit-out or the new lease is not ready on time.",
      "The thing that makes Business Bay different is that residential and commercial traffic share towers and sometimes lifts, so the moving rules depend on which part of the building you are in.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Mixed-use towers and what it means for a move",
        paras: [
          "Many Business Bay towers combine apartments and offices in one building, often with separate entrances and sometimes separate lifts. A residential move typically uses the service lift and a loading bay, within hours the building sets. An office move is often restricted to evenings or weekends so it does not disrupt other tenants.",
          "The first step on either job is to find out which procedure applies to your flat or office, and ask building management for the slot and any permit. We do that at both addresses, so the crew arrives at a time each building has confirmed.",
          "Towers we are regularly asked about in the area include the Executive Towers, Park Tower, DAMAC Maison and the Waterfront Towers, but the same approach applies to any building along the canal.",
        ],
      },
      {
        kind: "table",
        h2: "Home move or office move: what differs",
        columns: ["", "Flat or studio", "Office"],
        rows: [
          ["Typical window", "A booked daytime slot", "Evening or weekend, outside working hours"],
          ["What is moved", "Furniture, wardrobes, boxes", "Desks, IT, files, storage cabinets"],
          ["How it is labelled", "By room", "By department or desk"],
          ["Biggest risk", "A missed lift slot", "The new floor not being ready"],
          ["Where it goes if dates slip", "Storage under a barcoded inventory", "Storage, coming back in stages as areas complete"],
        ],
      },
      {
        kind: "prose",
        h2: "When the fit-out is not finished",
        paras: [
          "For offices, the most common problem is the new floor not being ready when the old lease ends. Fit-outs overrun, and the answer is to plan for it rather than hope. Goods go into storage for the gap, labelled by department, and come back in stages as areas are completed, so teams are not waiting for everything at once.",
          "The same logic applies to a residential move: a tenancy ends before a handover. Everything is wrapped, taken to our warehouse and held under a barcoded inventory, billed monthly on the space used with no lock-in. The detailed office side is covered in [office movers](/moving-storage-dubai/office-movers).",
        ],
      },
      {
        kind: "checklist",
        h2: "Business Bay move checklist",
        items: [
          "Confirm with building management whether your flat or office uses the residential or commercial moving procedure.",
          "Book the lift and loading bay for the full job, and confirm any permit at both addresses.",
          "For an office, agree the date with your landlord and the fit-out contractor, and assume the new floor may be late.",
          "Label office items by department and desk, so they land where they are needed.",
          "Back up IT and take sensitive documents with you rather than on the vehicle.",
          "Measure large pieces against the lift and doorways at the new building.",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Business Bay move",
        items: [
          { h: "Tell us home or office", p: "That decides the window and the way the job is labelled and recorded." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for any office or larger flat." },
          { h: "Book both buildings", p: "Lift, bay and permit at each address, planned inside the allowed window." },
          { h: "Wrap, pack, load", p: "Furniture is wrapped at the door, wrapping being part of every collection, and items are packed and labelled." },
          { h: "Move or store", p: "To the new address, or into storage under a barcoded inventory until it is ready." },
        ],
      },
      {
        kind: "prose",
        h2: "Records, documents and what to keep close",
        paras: [
          "Business Bay offices often hold paper records that are neither being moved nor thrown away. If that applies to you, [business storage in Dubai](/business-storage-dubai) covers archiving and retrieval separately from a move, and the two can be arranged together. The local storage side of the area is on our [Business Bay storage page](/locations/dubai/business-bay).",
        ],
      },
      {
        kind: "prose",
        h2: "Handover day, and the time between the crew leaving and the inspection",
        paras: [
          "For a rented flat, moving out is not finished when the crew leaves. Many landlords and managers inspect the property afterwards, and a handover can involve cleaning and a final check. Allow time for that between the end of the move and your handover time, rather than booking the crew to finish at the last minute. Photograph the empty rooms before you hand back the keys.",
          "For an office, the equivalent is the landlord's hand-back inspection, which often needs the floor completely clear, including the items nobody claimed. If the next place is not ready, goods go into storage straight away, which is the safest way to keep a gap in your own timetable from becoming a gap in your handover.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you do both home and office moves in Business Bay?",
        a: "Yes. They follow different procedures, so tell us which when you ask for a quote. Office moves are normally planned for evenings or weekends, and home moves for a booked daytime slot.",
      },
      {
        q: "Can you move out of hours?",
        a: "Yes, and for offices it is usually required. We plan the move inside the window your building permits and book the lift and bay at both addresses.",
      },
      {
        q: "What if my new office is not ready?",
        a: "Goods go into storage, labelled by department, under a barcoded inventory. They come back in stages as areas are completed. Storage is billed monthly on the space used with no lock-in.",
      },
      {
        q: "Do you handle the lift and permit?",
        a: "Yes. We arrange the service lift and any move permit at both buildings and plan the move around the slot each one confirms.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Packing small items and equipment into cartons is separate, and doing it yourself is the biggest saving.",
      },
    ],
    serviceType: "Moving in Business Bay",
    areaServed: "Business Bay, Dubai",
    cta: {
      h2: "Moving in Business Bay?",
      p: "Tell us whether it is a home or an office, and which tower, and we will confirm the window and book the lift.",
    },
    siblings: [
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/dubai-marina-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------- palm-jumeirah-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/palm-jumeirah-movers",
    crumb: "Palm Jumeirah Movers",
    navLabel: "Palm Jumeirah",
    navBlurb: "Frond villas, Shoreline flats and the Crescent, with gated access handled.",
    title: "Movers and Packers in Palm Jumeirah | Villas and Flats",
    description:
      "Movers and packers in Palm Jumeirah for Frond villas, Shoreline apartments and Crescent residences. Careful wrapping, gate access arranged, storage between dates.",
    keywords:
      "movers and packers in palm jumeirah, palm jumeirah movers, palm jumeirah moving company, villa movers palm jumeirah, shoreline apartment movers",
    ogTitle: "Movers and Packers in Palm Jumeirah",
    h1: "Movers and Packers in Palm Jumeirah: Gates Arranged",
    introH2: "Moving on the Palm, in brief",
    hero: [
      "Movers and packers in Palm Jumeirah work in three very different settings: villas on the Fronds, apartments along the Trunk and Shoreline, and residences on the Crescent. We move all three as part of [moving and storage in Dubai](/moving-storage-dubai), with careful wrapping for the higher-value pieces these homes tend to hold and gate and building access arranged in advance.",
      "This page is for people moving in, out or within the Palm. It explains how access differs between the three areas, how a Frond villa is planned, and why storage between addresses is so often part of a Palm move.",
      "The distinctive feature of the Palm is that access is controlled: one main approach, and most communities and buildings behind their own security. So the success of a move depends on access being arranged before the vehicle is on the island.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Why the Palm is its own kind of move",
        paras: [
          "The Palm is a single island reached by one main approach, with most communities and buildings behind their own security. A crew cannot simply turn up. Vehicles and names usually need to be registered with the community or building before the day, and the timing needs to avoid the periods when approach roads are at their busiest.",
          "The homes also tend to hold larger and more valuable collections of furniture than the Dubai average, which changes how the job is wrapped, inventoried and carried. A move here is slower and more careful, and the quote should reflect it.",
        ],
      },
      {
        kind: "table",
        h2: "Three settings on the Palm",
        columns: ["Where", "What the homes are like", "What to plan for"],
        rows: [
          ["The Fronds", "Villas with gardens, garages and several floors", "A full day or more, community gate registration, outdoor furniture"],
          ["Trunk and Shoreline", "Apartment buildings with shared lifts", "A booked lift slot, a building permit, a short moving window"],
          ["The Crescent", "Residences with private entrances and building concierge", "Advance notice to management, careful protection of finishes"],
        ],
        note: "Confirm access with your community or building management before you book a date. Rules differ between developments.",
      },
      {
        kind: "prose",
        h2: "Planning a Frond villa",
        paras: [
          "A villa on a Frond is planned as a full job. The garage, garden and terrace are counted as part of the volume, because they are often as large as the house itself, and a quote on bedrooms alone will be short. The same planning notes in [villa movers](/moving-storage-dubai/villa-movers) apply here, with extra attention to access.",
          "For larger pieces and anything fragile, the inventory is written item by item before the day, so there is a record of what leaves and what arrives. Furniture wrapping is part of every collection, and items that need more than standard protection are agreed in advance rather than on the day.",
        ],
      },
      {
        kind: "checklist",
        h2: "Palm move checklist",
        items: [
          "Ask your community or building management for the procedure, the permitted hours and any permit.",
          "Register the crew and vehicle with security before the day, or ask us to coordinate it.",
          "Count the garage, garden and terrace in the volume, and flag any piece you consider high-value.",
          "Clean and drain outdoor furniture before it is wrapped.",
          "Photograph pieces you want recorded in their current condition.",
          "Allow extra time for the approach, and avoid the busiest periods where you can.",
        ],
      },
      {
        kind: "prose",
        h2: "Storage between addresses on the Palm",
        paras: [
          "Many Palm moves involve a gap: a sale completes before a purchase, or a renovation takes the property out of use for weeks. In those cases goods are wrapped at the door, taken to our warehouse and held under a barcoded inventory, billed monthly on the space used with no lock-in, and returned when the property is ready.",
          "The storage side of the Palm is described on our [Palm Jumeirah storage page](/locations/dubai/palm-jumeirah).",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a Palm move",
        items: [
          { h: "Tell us where on the Palm", p: "Frond, Shoreline or Crescent. It tells us the access, the likely scale and the planning needed." },
          { h: "Quote and survey", p: "A written, itemised quote after a video walkthrough or a visit, since a Palm property is rarely quotable from a list." },
          { h: "Arrange access", p: "Gate registration, lift booking and any permit, in advance." },
          { h: "Wrap and inventory", p: "Furniture is wrapped at your door, and higher-value pieces are recorded item by item." },
          { h: "Move or store", p: "To the new address, or into storage under a barcoded inventory until it is ready." },
        ],
      },
      {
        kind: "prose",
        h2: "Protecting finishes, glass and large screens",
        paras: [
          "Palm homes tend to have large glass tables, big mirrors, wall-mounted televisions and polished floors, and each needs a plan. Glass and mirrors are wrapped and carried upright, so tell us in advance if a piece is larger than a standard doorway and we will check the route. Televisions travel in their own protection and never flat under other items.",
          "Buildings often require floors and lift interiors to be protected, and some specify what they want, so ask management and we plan for it. Pieces that are unusually large or valuable are best seen by us beforehand, from photographs or a visit, so the right materials and the right number of people are there on the day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you arrange gate access on the Palm?",
        a: "Yes. We coordinate crew and vehicle registration with the community or building ahead of the day, and plan the move inside the hours it allows.",
      },
      {
        q: "Can you handle a whole Frond villa?",
        a: "Yes. A Frond villa is planned as a full job, with the garage, garden and terrace counted in the volume. We survey first, because a quote based on bedrooms alone comes in short.",
      },
      {
        q: "How do you protect higher-value furniture?",
        a: "Furniture wrapping is part of every collection, and pieces needing more protection are agreed in advance. Higher-value items are recorded individually in the inventory.",
      },
      {
        q: "Can I store things between addresses?",
        a: "Yes. Goods go to our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, and come back when your property is ready.",
      },
      {
        q: "Do you cover the Shoreline and Crescent as well as the Fronds?",
        a: "Yes. Each has different access, so tell us where on the Palm you are, and we will confirm the details before you book.",
      },
    ],
    serviceType: "Moving in Palm Jumeirah",
    areaServed: "Palm Jumeirah, Dubai",
    cta: {
      h2: "Moving on the Palm?",
      p: "Tell us which part of the Palm, and we will plan the access before we plan the day.",
    },
    siblings: [
      "/moving-storage-dubai/villa-movers",
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/furniture-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },

  /* ------------------------------------------------ silicon-oasis-movers */
  {
    silo: "s5",
    path: "/moving-storage-dubai/silicon-oasis-movers",
    crumb: "Silicon Oasis Movers",
    navLabel: "Dubai Silicon Oasis",
    navBlurb: "Flats, student moves and DSO businesses, timed for the run from DIP.",
    title: "Movers and Packers in Dubai Silicon Oasis | Flats and Students",
    description:
      "Movers and packers in Dubai Silicon Oasis and Academic City. Flat moves, student moves between semesters and business equipment, with storage between dates.",
    keywords:
      "movers and packers in dubai silicon oasis, movers and packers in silicon oasis, dso movers, silicon oasis moving company, academic city movers",
    ogTitle: "Movers and Packers in Dubai Silicon Oasis",
    h1: "Movers and Packers in Silicon Oasis: Flats and Students",
    introH2: "Moving in Silicon Oasis, in brief",
    hero: [
      "Movers and packers in Dubai Silicon Oasis get three kinds of job: flat moves in the residential towers, student moves around Academic City, and equipment moves for businesses in the technology park. We handle all three as part of [moving and storage in Dubai](/moving-storage-dubai), planned around the fact that DSO is a long run from our warehouse in DIP.",
      "This page is for people moving into, out of or within DSO and the adjacent communities. It explains how each type of move differs, how to plan a student move across a semester break, and what to do with equipment that is not ready to go into a new space.",
      "The thing that distinguishes DSO is distance and timing. It sits on the east side of the city, so the schedule is built around the drive, not just the lift slot.",
    ],
    sections: [
      {
        kind: "prose",
        h2: "Planning a move on the east side of the city",
        paras: [
          "Dubai Silicon Oasis is a self-contained community of residential towers, a technology park and a large student population, set towards the east of the city. For a moving crew based at our DIP warehouse, it is among the longer runs we make, so the day is scheduled with the drive built in rather than assumed.",
          "That is a reason to book a little earlier than you would for a central district, and to give us the access details in advance. A move that starts at the right time of morning finishes comfortably, while one squeezed into a late slot leaves no margin if the building runs behind.",
        ],
      },
      {
        kind: "table",
        h2: "Three kinds of move in DSO",
        columns: ["Who", "What moves", "What to plan for"],
        rows: [
          ["Residents of DSO towers", "Furniture, wardrobes, boxes", "A booked lift slot and permit at both buildings"],
          ["Students near Academic City", "Beds, desks, boxes, a few appliances", "Semester dates, and storage over the break"],
          ["Technology and trade businesses", "Equipment, desks, files, stock", "Out-of-hours moves, and careful handling of electronics"],
        ],
      },
      {
        kind: "prose",
        h2: "Student moves between semesters",
        paras: [
          "Student housing near Academic City moves in waves, in the weeks around semester end and the summer break. The pattern is predictable: a room is cleared on a fixed date, the next term starts weeks or months later, and everything in between needs somewhere to go.",
          "Goods can go to our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, so a short break costs a short break. If you are storing for a term rather than moving, our [personal storage in Dubai](/personal-storage-dubai) hub explains the options. Book ahead for peak weeks, because crews and building slots fill when many students leave at once.",
        ],
      },
      {
        kind: "checklist",
        h2: "DSO move checklist",
        items: [
          "Ask building management for the move procedure, permitted hours and any permit.",
          "Give us the tower name and floor, so the lift slot and timing can be planned.",
          "For a student move, confirm your out and in dates, and decide what stays in storage over the break.",
          "For equipment, tell us in advance if it includes servers, networking gear or anything that needs special handling.",
          "Back up data before any IT equipment is moved.",
          "Box small items yourself and label by room or desk.",
        ],
      },
      {
        kind: "prose",
        h2: "Business and technology equipment",
        paras: [
          "Businesses in DSO often move or store equipment that is not meant for a standard furniture job: desks and chairs, but also monitors, networking equipment and decommissioned hardware. These are handled item by item, recorded in the inventory, and carried with the same care as furniture.",
          "If the new space is not ready, the equipment goes into storage and comes back in stages. The area-specific storage detail is on our [Silicon Oasis storage page](/locations/dubai/dubai-silicon-oasis), and the office-moving approach is in [office movers](/moving-storage-dubai/office-movers).",
        ],
      },
      {
        kind: "steps",
        h2: "How we run a DSO move",
        items: [
          { h: "Tell us who you are", p: "A resident, a student or a business. It sets the window, the labelling and the likely storage need." },
          { h: "Quote and survey", p: "A written, itemised quote, with a video walkthrough or a visit for larger moves." },
          { h: "Plan the day", p: "Lift and permit at both buildings, and a start time that allows for the run." },
          { h: "Wrap and load", p: "Furniture is wrapped at your door, since wrapping is part of every collection." },
          { h: "Move or store", p: "To your new address, or into storage under a barcoded inventory until you need it." },
        ],
      },
      {
        kind: "prose",
        h2: "Timing a DSO move so the drive does not cost you the window",
        paras: [
          "Aim to have the crew at your building at the start of your permitted window, not the end. Everything after that point is slack that can absorb a delayed lift or a long carry. If your building's window is short, say so when you book, so the start time can be set accordingly.",
          "For a student move, avoid the final weekend of term, when the most people leave at once and lift slots and crews are both scarce. For a business, plan the heavy equipment for the first hours of the window, so the floor is clear well before the building needs it back.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover Academic City and International City as well as DSO?",
        a: "Yes, we collect from Silicon Oasis and the communities around it. Send the building name and we will confirm access before you book.",
      },
      {
        q: "Can you store a student's things over the summer?",
        a: "Yes. Goods go to our warehouse under a barcoded inventory, billed monthly on the space used with no lock-in, so a break of a few weeks costs a few weeks.",
      },
      {
        q: "Do you move business and technology equipment?",
        a: "Yes. Tell us in advance if it includes servers or networking gear so it can be handled and recorded item by item. Back up your data before any IT equipment moves.",
      },
      {
        q: "Why should I book earlier for DSO?",
        a: "It is a long run from our warehouse, so the day is scheduled with the drive built in. Early notice also helps when many people move at once, such as at semester end.",
      },
      {
        q: "Is wrapping included?",
        a: "Furniture wrapping is part of every collection. Boxing small items is separate and is the easiest saving to make yourself.",
      },
    ],
    serviceType: "Moving in Dubai Silicon Oasis",
    areaServed: "Dubai Silicon Oasis, Dubai",
    cta: {
      h2: "Moving in Silicon Oasis?",
      p: "Tell us if you are a resident, a student or a business, and we will plan the day around the run.",
    },
    siblings: [
      "/moving-storage-dubai/apartment-movers",
      "/moving-storage-dubai/office-movers",
      "/moving-storage-dubai/jvc-movers",
      "/moving-storage-dubai/moving-cost",
    ],
  },
]
