import type { SiloPageContent } from "./types"
import { PRICE_PER_SQFT_AED } from "@/lib/company-facts"

/**
 * GUIDES · /guides/* — the three NEW guides from §5 of the plan.
 *
 * WHY ONLY THREE. Seven of the ten guides are MOVES of existing pages —
 * /guides/best-storage-companies-dubai, /guides/dubai-cost-of-living and the rest —
 * and those are substantial hand-written pages of 425 to 767 lines each with
 * researched content. They were physically relocated to their new /guides/
 * paths with their route files intact, NOT rewritten into this data format.
 *
 * That distinction matters most for /guides/best-storage-companies-dubai:
 * §12 gate of the plan flags that the old URL ranks #6 for `best storage
 * company in dubai` (390/mo) and must be handled carefully. Moving the file
 * preserves the content that earned that ranking; regenerating the page would
 * have thrown it away to hit a page count.
 *
 * Their labels live in HAND_WRITTEN in lib/silo/registry.ts so sibling and hub
 * links resolve to them normally.
 *
 * Guides carry `datePublished` (which produces an Article node) and no
 * `serviceType` — they are editorial, not a service offer, and marking them up
 * with an Offer would be wrong.
 */

const PUBLISHED = "2026-09-08"

export const GUIDE_PAGES: SiloPageContent[] = [
  /* -------------------------------------- how-much-does-storage-cost-in-dubai */
  {
    silo: "guides",
    path: "/guides/how-much-does-storage-cost-in-dubai",
    crumb: "How Much Does Storage Cost in Dubai?",
    navLabel: "How much storage costs in Dubai",
    navBlurb: "What the market actually charges, and the costs quotes leave out.",
    title: "How Much Does Storage Cost in Dubai? | A Straight Answer",
    description:
      "What storage actually costs in Dubai — how the market prices it, the four costs most quotes leave out, and how to compare two quotes that are not comparable.",
    keywords:
      "how much does storage cost in dubai, storage cost dubai, storage prices dubai, cost of storage unit dubai, storage cost per month dubai",
    ogTitle: "How Much Does Storage Cost in Dubai?",
    datePublished: PUBLISHED,
    h1: "How Much Does Storage Cost in Dubai?",
    hero: [
      "This is the most-asked question in the category and it is almost always answered badly, because the honest answer has two parts and most quotes only show one. This guide is part of our [storage and moving guides](/guides).",
      "The two parts are **the storage** and **getting it there and back**. A quote that shows a low monthly rate and omits two van journeys is not a cheaper quote; for a short booking it is frequently the more expensive one.",
      "Our own rate is **AED 12.65 per sq ft per month, VAT included**, charged on the floor space your goods occupy. That is a number to compare against, not a claim that it is the lowest in the market.",
    ],
    sections: [
      {
        kind: "table",
        h2: "What storage costs by what you are storing",
        intro:
          "Space is the whole of the monthly figure when you are billed on measured floor area. These are real bands from Dubai collections.",
        columns: ["What you are storing", "Typical space", "Monthly at AED 12.65/sq ft"],
        rows: [
          ["10–15 cartons", "15–20 sq ft", "Around AED 190–255"],
          ["One room emptied", "25–40 sq ft", "Around AED 315–505"],
          ["Studio", "~30 sq ft", "Around AED 380"],
          ["1 bedroom flat", "60–90 sq ft", "Around AED 760–1,140"],
          ["2 bedroom flat", "120–150 sq ft", "Around AED 1,520–1,900"],
          ["3 bedroom villa", "240–270 sq ft", "Around AED 3,035–3,415"],
        ],
        note: "Transport is quoted separately on your address and access, and it is a one-off rather than monthly. [The full price breakdown](/self-storage-dubai/prices) sets out both halves.",
      },
      {
        kind: "prose",
        h2: "The four costs quotes leave out",
        paras: [
          "**Getting it there.** A self-drive unit at a lower rate needs a van, fuel, tolls and most of a day, usually twice — once in, once out. On a three-month booking those two days can exceed the entire rate difference.",
          "**Fixed unit sizes.** Most operators sell 25, 50 or 100 square foot units. Almost nobody fits neatly, so you take the next size up and pay for space you do not use for the whole booking. Being billed on measured space removes this, and it is worth roughly the difference between two tiers.",
          "**Minimum terms.** A six-month minimum on a booking you needed for seven weeks is four and a half months of storage you did not want. Check for this before comparing rates, because it changes the total more than the rate does.",
          "**Retrieval charges.** Some operators charge per access or per retrieval. If you expect to want things back, price that in — a cheap rate with expensive retrievals is not cheap for a booking you actually use.",
        ],
      },
      {
        kind: "checklist",
        h2: "How to compare two storage quotes properly",
        intro: "Put both on the same basis before comparing anything. Most quotes are not comparable as written.",
        items: [
          "Total for the whole expected booking, not the monthly rate.",
          "Include both transport journeys — in and out — in both columns.",
          "Is it VAT-inclusive? A five per cent difference is often the whole apparent gap.",
          "Fixed unit size or measured space? If fixed, price the size you would actually have to take.",
          "Is there a minimum term, and does your booking exceed it?",
          "What does a retrieval cost, and how many do you realistically expect?",
          "Indoor covered storage, or a yard or container? In this climate that is not a detail.",
          "Is wrapping included, or is it a separate line?",
        ],
        note: "Do this once on a spreadsheet and the ranking of your quotes usually changes. [Working out how much space you need](/self-storage-dubai/storage-calculator) is the other half of the arithmetic.",
      },
      {
        kind: "prose",
        h2: "What actually moves your bill",
        paras: [
          "**Volume, and nothing else comes close.** You are billed on space, so an afternoon deciding what genuinely comes back is worth more than any negotiation with any operator. People routinely store a third of a household they would not miss.",
          "**Boxing loose items.** Sealed cartons stack; loose belongings do not. The same possessions can occupy around 30 per cent more floor space unboxed, every month of the booking.",
          "**Being honest about the term.** A long booking packed as if it were short costs more, because it gets a dense stack that then has to be dug into. Tell the operator the real expected duration.",
          "**Not storing what should be sold.** The furniture you are storing because deciding is hard is the furniture you will pay to store for two years and then sell anyway. That is the single most expensive habit in this category.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the average cost of storage in Dubai?",
        a: `There is no meaningful average, because the two variables — how much space and how many transport journeys — swamp the rate. As a reference point, our rate is AED ${PRICE_PER_SQFT_AED} per square foot per month, VAT included, on measured space.`,
      },
      {
        q: "Is it cheaper to rent a self-storage unit myself?",
        a: "The rate often looks lower. The total frequently is not, once van hire, fuel, your time and the return journey are in the same column, and once you account for paying for a fixed unit size rather than the space you use.",
      },
      {
        q: "Why do storage quotes vary so much in Dubai?",
        a: "Mostly because they are not quoting the same thing. Indoor covered storage versus a yard, measured space versus a fixed unit, VAT-inclusive versus not, transport included versus not — any one of those explains a large gap.",
      },
      {
        q: "Does storage get cheaper the longer I store?",
        a: "The rate does not change with us. What makes a long booking cheaper in practice is that the one-off transport cost is spread over more months, and that a well-packed long booking usually occupies less space than a hurried short one.",
      },
      {
        q: "How much does it cost to store a one-bedroom flat?",
        a: "A 1BHK is typically 60 to 90 square feet once racked, which at AED 12.65 per sq ft per month VAT included is roughly AED 760 to 1,140 a month, plus a one-off transport figure quoted on your address and access.",
      },
      {
        q: "Is VAT included in storage prices in Dubai?",
        a: "Not always, and it is worth checking before comparing. Our figure is VAT-inclusive, so it is the number on the invoice rather than one you add five per cent to.",
      },
    ],
    cta: {
      h2: "Want a real number?",
      p: "Send photos of each room. Both figures — storage and transport — usually come back the same day.",
    },
    siblings: [
      "/guides/storage-packing-checklist",
      "/guides/dubai-tenancy-and-moving-calendar",
      "/guides/best-storage-companies-dubai",
      "/guides/moving-to-dubai",
    ],
  },

  /* ------------------------------------------------- storage-packing-checklist */
  {
    silo: "guides",
    path: "/guides/storage-packing-checklist",
    crumb: "Storage Packing Checklist",
    navLabel: "Storage packing checklist",
    navBlurb: "Room by room, plus the Dubai-specific things nobody tells you.",
    title: "Storage Packing Checklist | Room By Room, Dubai Specific",
    description:
      "A storage packing checklist for Dubai. Room by room, what to do before collection day, and the climate-specific steps that decide whether things come back usable.",
    keywords:
      "storage packing checklist, packing checklist dubai, how to pack for storage, moving checklist dubai, packing tips storage",
    ogTitle: "The Storage Packing Checklist",
    datePublished: PUBLISHED,
    h1: "The Storage Packing Checklist",
    hero: [
      "Almost everything that goes wrong in storage was decided in the two days before collection, not during the months afterwards. This checklist is the two days, and it is one of our [storage and moving guides](/guides).",
      "It is ordered by room, because that is how you will actually work through it, with a separate section for the things specific to this climate — which are the ones people from elsewhere reliably skip.",
      "The one-line version: **box everything loose, dry everything wet, and take every battery out.** Those three prevent most of it.",
    ],
    sections: [
      {
        kind: "steps",
        h2: "One week before",
        items: [
          { h: "Decide by room, not by item", p: "Item-by-item decisions are what make a clearance take three days. Pick a room and empty it." },
          { h: "Get boxes, uniform ones", p: "Mixed sizes rack badly and cost measurably more floor space than matching cartons." },
          { h: "Defrost the fridge", p: "It needs a full day open to dry afterwards. This is the most common source of a smell on return." },
          { h: "Book the lift", p: "Or tell us to. Most Dubai towers need 48 hours and some restrict the hours." },
        ],
      },
      {
        kind: "cards",
        h2: "Room by room",
        intro: "The specific thing that goes wrong in each.",
        items: [
          {
            icon: "🛋️",
            h: "Living room",
            p: "Screens travel and store upright, never flat. Bag cables per device and photograph the back of anything complicated before unplugging.",
          },
          {
            icon: "🛏️",
            h: "Bedrooms",
            p: "Mattress in a proper cover, stored flat. Wash all clothing before boxing — body oils oxidise into yellow marks over months.",
          },
          {
            icon: "🍽️",
            h: "Kitchen",
            p: "No food of any kind, including sealed tins. Plates on edge like records rather than stacked. Empty and dry every appliance.",
          },
          {
            icon: "🚿",
            h: "Bathroom and balcony",
            p: "No aerosols, no liquids that can leak. The balcony and store cupboard hold more than anyone counts — check both.",
          },
        ],
      },
      {
        kind: "checklist",
        h2: "The Dubai-specific list",
        intro: "The steps that are not on a checklist written for a temperate climate.",
        items: [
          "Take every battery out — remotes, keyboards, torches, toys, clocks. Leaked alkaline ruins more stored items here than heat does.",
          "Return the gas cylinder to the supplier. Villa kitchens and barbecues almost always have one and it cannot travel.",
          "No candles, aerosols or cosmetics. They melt, and they melt into everything packed with them.",
          "Documents and photographs into sealed plastic boxes rather than cardboard.",
          "Clean outdoor furniture before it is wrapped, or the sand travels with it.",
          "Dry everything completely — tents, appliances, dive gear, anything that has been near water.",
          "Do not vacuum-bag natural fibres. It traps moisture against fabric, which in this humidity does the opposite of protecting it.",
          "Check the garage and the balcony last. Everything that cannot be stored lives in one of those two places — see [the prohibited list](/self-storage-dubai/prohibited-items).",
        ],
      },
      {
        kind: "checklist",
        h2: "The day before, and the day itself",
        items: [
          "Pack a suitcase of live essentials: passport, Emirates ID, medication, chargers, tenancy paperwork, a change of clothes.",
          "Walk the property once more, specifically the balcony, the cupboard under the sink and the garage.",
          "Photograph anything valuable before it is wrapped, and keep the photos with your inventory copy.",
          "Decide which cartons you might want back early and say so to the crew — they get racked accessibly, and it costs nothing.",
          "Be present for the first twenty minutes and the last ten. The start is pointing at what goes; the end is signing the list.",
          "Keep your signed inventory copy somewhere that is not a box.",
        ],
        note: "For what happens after the van leaves, [how the storage service works](/self-storage-dubai/how-it-works) covers the rest.",
      },
    ],
    faqs: [
      {
        q: "What is the single most useful thing to do before collection?",
        a: "Box every loose small item. It shortens the collection by roughly a third and reduces the floor space your goods occupy by around 30 per cent — which you pay for every month, not just once.",
      },
      {
        q: "How should I label boxes?",
        a: "By the room they are going TO and by what is inside, not by where they came from. Label the side as well as the top, because racked boxes are seen from the side.",
      },
      {
        q: "Should I use vacuum bags for clothes?",
        a: "Not for natural fibres in this climate. Vacuum bags trap moisture against fabric and prevent it breathing, which over a Dubai summer causes exactly the problem they appear to solve.",
      },
      {
        q: "What is the most commonly forgotten item?",
        a: "The gas cylinder, followed by the contents of the balcony and the store cupboard. All three are discovered on collection day rather than before it.",
      },
      {
        q: "Do I need to empty the washing machine?",
        a: "Yes — drain the drum, the filter and the hoses, then leave it a day to dry. Residual water in a sealed appliance over months in this climate is the main cause of the smell people describe on return.",
      },
      {
        q: "How do I pack plates and glassware?",
        a: "Plates on edge like records rather than stacked flat, in small boxes, with padding between them. Stacked flat they take the full weight of everything above and break far more often.",
      },
    ],
    cta: {
      h2: "Collection booked?",
      p: "Work through this the weekend before. It is two evenings and it prevents most of what goes wrong.",
    },
    siblings: [
      "/guides/how-much-does-storage-cost-in-dubai",
      "/guides/dubai-tenancy-and-moving-calendar",
      "/guides/moving-to-dubai",
      "/guides/best-storage-companies-dubai",
    ],
  },

  /* ------------------------------------------ dubai-tenancy-and-moving-calendar */
  {
    silo: "guides",
    path: "/guides/dubai-tenancy-and-moving-calendar",
    crumb: "Dubai Tenancy & Moving Calendar",
    navLabel: "Dubai tenancy & moving calendar",
    navBlurb: "When the city moves, and why your date is harder than you think.",
    title: "Dubai Tenancy & Moving Calendar | When The City Actually Moves",
    description:
      "The Dubai moving year: when leases turn over, which weeks every mover is booked, and how to plan a move around the two windows when the whole city relocates at once.",
    keywords:
      "dubai moving season, best time to move dubai, dubai tenancy calendar, ejari renewal dubai, when to move house dubai",
    ogTitle: "The Dubai Moving Calendar",
    datePublished: PUBLISHED,
    h1: "The Dubai Tenancy and Moving Calendar",
    hero: [
      "Dubai moves in waves rather than evenly, and if your date lands inside one of them everything is harder and slower — not because of price, but because capacity across the whole city is gone. Knowing the shape of the year is the cheapest planning you can do, and it is one of our [storage and moving guides](/guides).",
      "The two peaks are **late June** and **most of August**. Between them they carry a large share of the year's residential moves, driven by the school year ending, expat exits, and lease cycles that were themselves set in a previous summer.",
      "Everything about a move is easier in the eight quiet months, including your choice of date.",
    ],
    sections: [
      {
        kind: "table",
        h2: "The Dubai moving year",
        intro: "Broad shape rather than precise dates. Ramadan and Eid shift each year and move the pattern with them.",
        columns: ["Period", "What is happening", "What it means for a move"],
        rows: [
          ["January–March", "Quiet, steady demand", "The easiest time of year to move. Choose your date."],
          ["Ramadan", "Reduced working hours across the city", "Shorter working days; building access windows narrow. Plan longer."],
          ["Eid periods", "Effectively shut", "Avoid entirely for anything time-critical."],
          ["Late June", "School year ends, first exit wave", "Peak. Book about a week ahead minimum."],
          ["July", "Slight lull, extreme heat", "Available, but plan around the temperature for a villa clearance."],
          ["August", "The main exit and arrival wave", "The busiest weeks of the year. Book well ahead."],
          ["September", "New academic year, arrivals settle", "Busy for deliveries into new homes rather than collections."],
          ["October–December", "Steady, pleasant weather", "The second-best window, and the best for anything outdoors."],
        ],
        note: "If you are storing across a peak week rather than moving through it, [short term storage](/self-storage-dubai/short-term) is the page that covers the gap-between-leases case.",
      },
      {
        kind: "prose",
        h2: "Why lease dates never line up",
        paras: [
          "A Dubai tenancy is registered for a fixed twelve months, and the notice period in most contracts is 90 days — which is longer than people remember and is the most commonly missed date in the whole cycle. Diarise it the day you sign.",
          "The mismatch happens because the property you are leaving and the property you are taking were let by different landlords on different anniversaries. A seventeen-day gap between an Ejari ending and a handover is entirely typical and is nobody's mistake.",
          "Handovers slip, and they slip in one direction only. A new build's handover date, a renovation's completion, a landlord's snagging — all of these move later and none of them move earlier. Plan for the gap being longer than quoted.",
          "That is why storage exists as a category in this city rather than as an afterthought. Billing month to month with no minimum means a gap costs the gap, whether it turns out to be twelve days or six weeks.",
        ],
      },
      {
        kind: "checklist",
        h2: "Planning a Dubai move around the calendar",
        items: [
          "Diarise your 90-day notice date the day you sign the tenancy, not the month before it expires.",
          "If your move must be in late June or August, book the collection three to four weeks out rather than one.",
          "Assume the new property's handover slips. Build a fortnight of slack into the plan and be pleasantly surprised.",
          "Avoid Eid entirely for anything with a hard date attached.",
          "During Ramadan, expect shorter working days and narrower building access windows — a job that takes a day takes longer.",
          "For a villa or anything with a garden, October to April is materially easier than a July clearance.",
          "Book the storage at the same time as the move if there is any gap at all, rather than as a decision on the day.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the best time to move in Dubai?",
        a: "January to March, or October to December. Both are outside the peak waves, both have workable weather, and in both you can choose your date rather than take what is left.",
      },
      {
        q: "Why is August so busy?",
        a: "It is the main expat exit and arrival wave, driven by the academic year. Leases were originally set around it, so they keep turning over in it, which compounds the effect year after year.",
      },
      {
        q: "How far ahead should I book during peak weeks?",
        a: "Three to four weeks for late June or August, against two to three days at a quiet time of year. In those weeks the constraint is city-wide capacity rather than any one company's schedule.",
      },
      {
        q: "What is the notice period on a Dubai tenancy?",
        a: "Most contracts specify 90 days, and it is the date people most often miss. Check your own contract and diarise it when you sign rather than when you are thinking about moving.",
      },
      {
        q: "Does Ramadan affect moving?",
        a: "Yes. Working hours across the city are reduced and building access windows narrow, so a job that takes a day at another time of year takes longer. It is workable with realistic expectations and difficult without them.",
      },
      {
        q: "What if my handover date slips?",
        a: "Assume it will. Storage with monthly billing and no minimum term is what turns a slipped handover from a crisis into a line on an invoice — a gap of twelve days costs twelve days.",
      },
    ],
    cta: {
      h2: "Moving in a peak week?",
      p: "Book three to four weeks out. In late June and August the constraint is the whole city, not one company.",
    },
    siblings: [
      "/guides/how-much-does-storage-cost-in-dubai",
      "/guides/storage-packing-checklist",
      "/guides/moving-to-dubai",
      "/guides/best-places-to-live-dubai",
    ],
  },
]
