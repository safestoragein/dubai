/**
 * Sharjah service areas.
 *
 * WHY THE COPY IS NOT TEMPLATED
 * -----------------------------
 * Fifteen district pages that differ only by a find-and-replaced place name are
 * doorway pages, and Google's spam policy names that pattern explicitly. Each
 * entry below therefore carries its own `character`, `uses` and `faqs` written
 * around what that district actually is — the lagoon towers of Al Taawun, the
 * souks of Rolla, the term cycle at University City. If a future area is added,
 * write it the same way; do not clone a neighbour and swap the name.
 *
 * HONESTY CONSTRAINT
 * ------------------
 * SafeStorage operates ONE facility, in DIP-1 Dubai. Nothing here may read as a
 * facility in Sharjah — see lib/company-facts.ts on GBP suspension risk. Every
 * page renders a disclosure banner saying so.
 */

export type SharjahArea = {
  slug: string
  /** Display name, as published in the service-area list. */
  name: string
  /** Appended after the H1's "Storage in {name}" — keeps titles from colliding. */
  headline: string
  /** Hero paragraph. */
  blurb: string
  /** Two paragraphs of genuinely local copy. */
  character: [string, string]
  uses: { icon: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  /** Slugs of neighbouring areas, for the internal-link grid. */
  nearby: string[]
  /** Extra keyword targets beyond the generated defaults. */
  keywords: string
}

export const SHARJAH_AREAS: SharjahArea[] = [
  {
    slug: "al-nahda",
    name: "Al Nahda",
    headline: "on the Dubai Border",
    blurb:
      "Al Nahda sits right on the Dubai line, which is why so many of its flats are emptied and refilled every year. We collect from your building and hold everything until the next lease starts.",
    character: [
      "Al Nahda is one of the densest residential districts in Sharjah, and almost all of it is towers. The Dubai border runs along one edge, so a very large share of residents work in Deira, Al Qusais or further into Dubai and chose Al Nahda for the rent rather than the commute. That combination produces a specific storage problem: people move often, they move across a border, and the flats they move out of are one and two-bedroom apartments with almost no cupboard space.",
      "Practically, collection here is a building-access job rather than a driveway job. Towers along Al Ittihad Road and around Al Nahda Pond Park have service lifts that need booking and loading bays with time limits. Our crew handles the permission and the slot; you do not need to be the one negotiating with building management on the day.",
    ],
    uses: [
      { icon: "🔑", title: "Lease gaps across the border", desc: "The Sharjah tenancy ends before the Dubai one begins. We hold everything in between." },
      { icon: "🛋️", title: "Furniture from a small flat", desc: "One and two-bed apartments with no storage room. The sofa goes out, the space comes back." },
      { icon: "✈️", title: "Long trips home", desc: "Rather than pay rent on an empty flat for a summer, empty it and store the contents." },
    ],
    faqs: [
      {
        q: "I live in an Al Nahda tower. Do you handle the building permission?",
        a: "Yes. Most Al Nahda buildings want notice before a move, a booked service lift and a loading-bay slot. Tell us the building name when you book and our team arranges it with management directly. You do not need to take a day off to stand in the lobby.",
      },
      {
        q: "I am moving from Al Nahda Sharjah to Al Nahda Dubai. Is that a problem?",
        a: "No, and it is a route we run constantly — the two Al Nahdas sit either side of the same border. We empty the Sharjah flat on your key-return date and deliver to the Dubai address when it is ready, however many days or weeks apart those are.",
      },
    ],
    nearby: ["al-taawun", "al-qasimia", "abu-shagara", "al-majaz"],
    keywords: "storage al nahda sharjah, self storage al nahda, furniture storage al nahda, al nahda sharjah movers storage",
  },
  {
    slug: "al-majaz",
    name: "Al Majaz",
    headline: "by Khalid Lagoon",
    blurb:
      "Al Majaz is family flats around the waterfront, many of them in buildings old enough that storage was never designed in. We collect from the door and keep it until you want it.",
    character: [
      "Al Majaz wraps around Khalid Lagoon, and the stretch by Al Majaz Waterfront and Al Noor Mosque is some of the most settled residential property in Sharjah. The buildings skew older and larger than Al Nahda's — three-bedroom flats occupied by families who have been there years rather than months. The storage problem here is rarely a move. It is accumulation.",
      "What we collect from Al Majaz tends to be the things a long-settled family has run out of room for: a dining set replaced but not disposed of, cots and prams past their use, boxes from a parent's home. Because these are long tenancies, the storage tends to be long too — and because there is no minimum term, a family storing for two years pays the same monthly rate as one storing for two weeks.",
    ],
    uses: [
      { icon: "🏠", title: "Long-tenancy overflow", desc: "Years of accumulation in a flat that has no spare room left to give." },
      { icon: "🛏️", title: "Furniture between uses", desc: "Cots, spare beds and dining sets kept but not needed in the flat right now." },
      { icon: "🎨", title: "Renovation clear-outs", desc: "Rooms emptied so work can happen, everything returned when it is finished." },
    ],
    faqs: [
      {
        q: "We are renovating our Al Majaz flat. Can you store a room at a time?",
        a: "Yes, and it is a common arrangement here. We can collect in stages as the work moves through the flat and deliver back the same way, so you are never storing more than you need to. Each collection is quoted before it happens.",
      },
      {
        q: "How long can we leave things in storage?",
        a: "As long as you like. There is no maximum and no minimum — you are billed monthly for the floor space in use, and you can end it whenever you want. Several Al Majaz customers have been with us for years.",
      },
    ],
    nearby: ["al-qasimia", "al-khan", "al-nahda", "al-taawun"],
    keywords: "storage al majaz sharjah, self storage al majaz, al majaz waterfront storage, furniture storage al majaz",
  },
  {
    slug: "al-khan",
    name: "Al Khan",
    headline: "near the Beach and Lagoon",
    blurb:
      "Al Khan mixes older low-rise with newer towers along the coast. Whichever you are in, we come to the door, wrap what is going and take it away.",
    character: [
      "Al Khan runs along the coast between the beach and Al Khan Lagoon, and it is genuinely two districts in one. There is the older, lower-rise part inland, and there are the newer towers near the corniche and the Aquarium. The people calling us from each tend to want different things — the towers produce lease-gap moves, the older buildings produce long-term family storage.",
      "One thing specific to Al Khan is the coast. Anything stored in a garage, a balcony store or an unconditioned room near the sea in Sharjah takes on damp and salt, and upholstery and veneered furniture suffer worst. Everything we collect is wrapped before it leaves the property and kept inside a covered warehouse, off the floor — which for coastal customers is usually the actual reason they call rather than a lack of space.",
    ],
    uses: [
      { icon: "🌊", title: "Getting things off the coast", desc: "Furniture and boxes out of damp, salt-air balconies and store rooms." },
      { icon: "🏄", title: "Seasonal and beach kit", desc: "Boards, chairs and outdoor gear stored through the months you are not using them." },
      { icon: "📦", title: "Tower lease gaps", desc: "Corniche apartments emptied between one tenancy and the next." },
    ],
    faqs: [
      {
        q: "Will storage protect furniture better than my balcony store room?",
        a: "For anything upholstered, wooden or veneered, yes — noticeably. A balcony store near the Al Khan coast is unconditioned and takes salt air; ours is a covered warehouse and everything goes in wrapped and stays off the floor. That difference shows up most over a summer.",
      },
      {
        q: "Do you collect from the older low-rise buildings as well as the towers?",
        a: "Both. The towers need a booked lift and loading slot, which we arrange; the older buildings usually just need a parking space near the entrance. Either way the crew does the carrying.",
      },
    ],
    nearby: ["al-majaz", "al-layyah", "al-qasimia", "al-taawun"],
    keywords: "storage al khan sharjah, self storage al khan, al khan lagoon storage, beach storage sharjah",
  },
  {
    slug: "al-taawun",
    name: "Al Taawun",
    headline: "on the Corniche",
    blurb:
      "Al Taawun is high-rise living facing the water, minutes from the Dubai border. We collect from your tower, lift booking and all, and store it in Dubai.",
    character: [
      "Al Taawun is one of the most vertical parts of Sharjah — a dense run of towers along the corniche facing Khalid Lagoon, with Al Taawun Mall in the middle and the Dubai border a few minutes west. The flats are mostly one and two-bedroom, occupied heavily by working couples and young families, and turnover is high because so many residents are on the Dubai commute and move as soon as their circumstances change.",
      "Because it is almost entirely towers, every collection here is a logistics job: service lift booked, loading bay reserved, move permission filed with building management. We do that part. What residents notice most is that the alternative — hiring a van, then queueing for the same lift yourself, twice, on a Friday — is where the real cost of a cheap storage unit hides.",
    ],
    uses: [
      { icon: "🏙️", title: "Tower moves", desc: "High-floor apartments emptied without you booking a single lift slot." },
      { icon: "🔑", title: "Commuter relocations", desc: "Moving closer to work in Dubai, with a gap between the two tenancies." },
      { icon: "🛋️", title: "Downsizing", desc: "Going from two bedrooms to one and keeping the furniture that will not fit." },
    ],
    faqs: [
      {
        q: "My building only allows moves at certain hours. Can you work around that?",
        a: "Yes. Most Al Taawun towers restrict moves to set weekday hours and require the service lift to be padded and booked. Give us the building name and rules when you book and we schedule the crew to fit them.",
      },
      {
        q: "I am on a high floor with a small lift. Does that cost more?",
        a: "It affects how long the job takes, and the transport quote reflects the real job rather than a flat rate. You are told the number before anything is booked — there is no surcharge appearing afterwards because the lift was slow.",
      },
    ],
    nearby: ["al-nahda", "al-majaz", "al-khan", "al-qasimia"],
    keywords: "storage al taawun sharjah, self storage al taawun, al taawun corniche storage, tower storage sharjah",
  },
  {
    slug: "muwaileh",
    name: "Muwaileh",
    headline: "and Al Zahia",
    blurb:
      "Muwaileh is newer, lower and more spread out than central Sharjah — villas, townhouses and family apartments. We collect from the door, including from villa communities.",
    character: [
      "Muwaileh is where a lot of Sharjah's newer family housing went. Between Muwaileh Commercial, the Al Zahia development and the streets running toward University City, the housing stock is villas, townhouses and larger apartments rather than the tower blocks of the corniche. Households are bigger and so is what they own.",
      "That changes the shape of the job. A villa clear-out in Muwaileh is a volume job — garden furniture, appliances, children's things, sometimes a whole room of a growing family's outgrown belongings — and it is one where the van matters more than the lift. It also means the storage tends to be larger, which is where being charged on measured floor space rather than a fixed unit size makes a visible difference to the bill.",
    ],
    uses: [
      { icon: "🏡", title: "Villa and townhouse clear-outs", desc: "Volume jobs where a fixed-size unit would either overflow or be half empty." },
      { icon: "👶", title: "Outgrown family things", desc: "Cots, bikes and toys kept for later without giving up a room to them." },
      { icon: "🪑", title: "Garden and outdoor furniture", desc: "Stored through the months it is too hot to use the garden at all." },
    ],
    faqs: [
      {
        q: "We are in a villa, not a flat. Is that different?",
        a: "Easier, mostly — no lift to book and usually somewhere to park close to the door. The difference is volume: villa jobs tend to be larger, so the survey matters more. Tell us roughly how many rooms are involved and we will size it properly before quoting.",
      },
      {
        q: "Can you take appliances, like a spare fridge or washing machine?",
        a: "Yes. They need to be emptied, defrosted and disconnected before we arrive, and we will wrap and store them. Tell us they are coming so the crew brings the right trolley.",
      },
    ],
    nearby: ["university-city", "maysaloon", "industrial-areas", "al-qasimia"],
    keywords: "storage muwaileh sharjah, self storage muwaileh, al zahia storage, villa storage sharjah",
  },
  {
    slug: "al-qasimia",
    name: "Al Qasimia",
    headline: "in Central Sharjah",
    blurb:
      "Al Qasimia is central, mixed and busy — flats above shops, offices beside homes. We collect from either, and we can work outside trading hours.",
    character: [
      "Al Qasimia sits in the middle of Sharjah where residential and commercial genuinely mix rather than sitting in separate zones. A single street will have flats above ground-floor shops, small offices a door away, and the traffic of both. It is central enough that parking is the constraint on almost every job we do here.",
      "The mixture means we get two kinds of call from Al Qasimia. Households behave like the rest of central Sharjah — long tenancies, accumulated things, occasional moves. Businesses want something different: stock and files off a floor they are paying retail or office rates for. Both are the same service at the same per-square-foot rate; only the timing changes, since shops usually want us before opening or after closing.",
    ],
    uses: [
      { icon: "🏪", title: "Shop stock off the floor", desc: "Slow-moving inventory out of expensive retail space, retrieved as needed." },
      { icon: "🗄️", title: "Office files and archives", desc: "Paperwork you must keep but should not be renting office space to hold." },
      { icon: "🏠", title: "Household storage", desc: "Flats above the shops, cleared for a move or simply for room." },
    ],
    faqs: [
      {
        q: "Can you collect from my shop outside opening hours?",
        a: "Yes, and in Al Qasimia we usually recommend it. Early morning or after closing means we are not moving stock past customers and parking is far easier. Tell us the window that suits and we will schedule to it.",
      },
      {
        q: "Parking on my street is impossible. How does that work?",
        a: "It is the single most common constraint here. The crew scouts the nearest workable loading point and carries from there — it may add time to the job, which is reflected in the transport quote you approve up front rather than discovered afterwards.",
      },
    ],
    nearby: ["rolla", "abu-shagara", "al-majaz", "al-nabba"],
    keywords: "storage al qasimia sharjah, self storage al qasimia, business storage al qasimia, shop stock storage sharjah",
  },
  {
    slug: "rolla",
    name: "Rolla",
    headline: "in Old Sharjah",
    blurb:
      "Rolla is the dense commercial heart of old Sharjah — souks, small shops and older flats above them. Narrow access is normal here, and our crews expect it.",
    character: [
      "Rolla is the oldest working commercial district in Sharjah, built around Rolla Square Park and thick with small traders, souks and workshops. The buildings above and behind the shopfronts are older residential blocks, often without lifts. Nothing about it is convenient for moving things, which is precisely why a service that does the carrying is worth more here than in a new tower district.",
      "Expect narrow streets, restricted vehicle access at busy hours and stairs. Our crews plan Rolla jobs around that: smaller vehicle where the street demands it, a scouted loading point, and the labour to carry from wherever the van can actually stop. A cheap self-storage rate somewhere else stops looking cheap once you have tried to get a wardrobe down three flights and along a souk street yourself.",
    ],
    uses: [
      { icon: "🛍️", title: "Trader stock", desc: "Souk and small-shop inventory held off-site and brought back as it sells." },
      { icon: "🪜", title: "Walk-up flats", desc: "Older buildings without lifts, where the stairs are the whole problem." },
      { icon: "📦", title: "Business clear-outs", desc: "Units emptied between tenancies without shutting the shop for a week." },
    ],
    faqs: [
      {
        q: "My building has no lift and I am on the third floor. Is that a problem?",
        a: "No — it is normal in Rolla and the crew is staffed for it. It does make the job longer, which is why the transport quote is worked out for your actual address rather than taken from a table. You approve that number before anything is booked.",
      },
      {
        q: "The street outside my shop is too narrow for a large van.",
        a: "Then we do not bring one. We scout the nearest point a vehicle can legally stop and carry from there, or use a smaller vehicle where the street requires it. Mention the access when you ask for the quote so it is priced correctly the first time.",
      },
    ],
    nearby: ["al-ghuwair", "al-nabba", "al-qasimia", "abu-shagara"],
    keywords: "storage rolla sharjah, self storage rolla, rolla square storage, shop storage old sharjah",
  },
  {
    slug: "abu-shagara",
    name: "Abu Shagara",
    headline: "in Central Sharjah",
    blurb:
      "Abu Shagara is dense mid-rise living with shops underneath and very little spare room anywhere. We take what will not fit and hold it for as long as you need.",
    character: [
      "Abu Shagara is one of the most densely populated parts of Sharjah — mid-rise residential blocks packed close together, retail along the main roads, and a mix of families and sharers filling the flats. Apartments are compact and storage inside them is minimal, which is the whole reason this district calls us.",
      "The jobs here are usually smaller than a full move: the contents of one room, a set of furniture, twenty boxes. That is where paying for measured floor space instead of a fixed unit matters most — a small amount of storage should cost a small amount of money, and renting a whole unit to hold a bedroom's worth of furniture is how people end up overpaying.",
    ],
    uses: [
      { icon: "📐", title: "Small storage, small bill", desc: "A room's worth of things charged as a room's worth, not as a whole unit." },
      { icon: "🛋️", title: "Furniture in the way", desc: "The set you are keeping but cannot live around in a compact flat." },
      { icon: "👥", title: "Shared flats", desc: "One person's belongings stored while the living arrangement changes." },
    ],
    faqs: [
      {
        q: "I only have about twenty boxes. Is that too small for you?",
        a: "No. Because you are billed on the floor space used, a small load is genuinely a small monthly cost — there is no minimum size to reach and no unit you have to fill. Small jobs are a large share of what we collect from Abu Shagara.",
      },
      {
        q: "Can you store just my things from a shared flat?",
        a: "Yes. The account is in your name and covers only your items — the other occupants are not involved and do not need to be. When you want them back, they come back to whatever address you give us.",
      },
    ],
    nearby: ["al-qasimia", "al-nahda", "rolla", "al-majaz"],
    keywords: "storage abu shagara sharjah, self storage abu shagara, small storage sharjah, box storage sharjah",
  },
  {
    slug: "al-nabba",
    name: "Al Nabba",
    headline: "in Central Sharjah",
    blurb:
      "Al Nabba is older central Sharjah, close to Rolla and just as tightly built. We collect from the door, stairs and narrow streets included.",
    character: [
      "Al Nabba sits in the older core of Sharjah near Rolla and Al Ghuwair, and shares their character: dense, long-established, built before anyone was designing in parking or storage. Buildings are older residential blocks, many without lifts, and the streets around them are busy through the working day.",
      "Most of what we move out of Al Nabba is long-accumulated rather than mid-move — households that have been in the same flat a long time and finally want a room back. Because the storage is usually open-ended, the absence of a minimum or maximum term matters more here than the headline rate: people store for as long as they want and stop when they want.",
    ],
    uses: [
      { icon: "🚪", title: "Getting a room back", desc: "Years of things removed from a flat that stopped having space long ago." },
      { icon: "🪜", title: "Walk-up buildings", desc: "Older blocks without lifts — the crew carries, you do not." },
      { icon: "🗓️", title: "Open-ended storage", desc: "No minimum and no maximum term. Stop whenever it suits." },
    ],
    faqs: [
      {
        q: "How soon can you come?",
        a: "Usually within a few days, and often sooner for smaller loads. Al Nabba jobs are scheduled around street access, so a morning slot is normally easier to get than an afternoon one.",
      },
      {
        q: "What if I want something back before I close the account?",
        a: "That is standard. You can ask for part of what is stored without ending the account or emptying the rest — tell us what you need and it comes back to your door, usually within 24–48 hours.",
      },
    ],
    nearby: ["rolla", "al-ghuwair", "al-qasimia", "abu-shagara"],
    keywords: "storage al nabba sharjah, self storage al nabba, old sharjah storage",
  },
  {
    slug: "university-city",
    name: "Sharjah University City",
    headline: "for Students and Staff",
    blurb:
      "University City runs on the academic calendar, and so does its storage. We collect at the end of term, hold it over the break and deliver it back for the new year.",
    character: [
      "University City holds the University of Sharjah, the American University of Sharjah and several other institutions, along with the accommodation that serves them. Its storage demand is unlike anywhere else in the emirate because it is seasonal and it is synchronised — thousands of people need the same thing in the same two weeks, twice a year.",
      "For a student the arithmetic is simple. Paying to keep a room over a summer you are not in the country for costs far more than storing what is in it. We collect from the residence at the end of term, hold the boxes over the break, and deliver back when the new year starts. Because there is no minimum term, a three-month summer is charged as three months and nothing more.",
    ],
    uses: [
      { icon: "🎓", title: "End-of-term storage", desc: "Rooms emptied at the end of the year, contents held over the summer." },
      { icon: "✈️", title: "Going home for the break", desc: "Cheaper than keeping a room you will not be in for three months." },
      { icon: "📚", title: "Between accommodation", desc: "Moving from one residence to another with a gap in the middle." },
    ],
    faqs: [
      {
        q: "Can I book collection for the end of term now?",
        a: "Yes, and you should. End of term is the busiest fortnight of the year in University City and slots go quickly. Book the date in advance and we will confirm it; the storage itself does not start being charged until we actually collect.",
      },
      {
        q: "Can my things be delivered to a different address in September?",
        a: "Yes. Delivery goes wherever you tell us — a different residence, a flat elsewhere in Sharjah, or an address in Dubai. It does not have to be where we collected from.",
      },
    ],
    nearby: ["muwaileh", "maysaloon", "industrial-areas", "al-qasimia"],
    keywords: "student storage sharjah, university city storage, sharjah university storage, AUS student storage, summer storage sharjah",
  },
  {
    slug: "al-layyah",
    name: "Al Layyah",
    headline: "near Port Khalid",
    blurb:
      "Al Layyah sits by the water near Port Khalid, with residential streets and working premises side by side. We collect from both.",
    character: [
      "Al Layyah occupies the coastal strip around Port Khalid, and it is a genuinely mixed district — residential blocks alongside marine, port-related and light commercial premises. That produces an unusual split of storage requests for a Sharjah neighbourhood: ordinary household jobs on one street, business equipment and stock on the next.",
      "Being on the water matters here for the same reason it does in Al Khan. Salt air is hard on upholstery, timber and anything metal that is not being used, and unconditioned store rooms near the port are not the place to leave things for a summer. Everything we collect is wrapped before it leaves the premises and stored inside a covered warehouse rather than a yard.",
    ],
    uses: [
      { icon: "⚓", title: "Coastal households", desc: "Getting belongings out of salt air and unconditioned store rooms." },
      { icon: "🧰", title: "Equipment and tools", desc: "Working kit stored between contracts rather than left on site." },
      { icon: "📦", title: "Business overflow", desc: "Stock off a floor you are paying commercial rates for." },
    ],
    faqs: [
      {
        q: "Do you take business items as well as household ones?",
        a: "Yes — stock, files, equipment and fit-out kit are all normal. It is the same per-square-foot rate as household storage; the difference is usually that businesses want retrieval more often, which is arranged on notice.",
      },
      {
        q: "Is it worth storing rather than using my own store room by the port?",
        a: "For anything you actually care about, generally yes. An unconditioned store room near the water takes damp and salt, and that shows up in upholstery and timber over a Sharjah summer. Ours is covered, wrapped and off the floor.",
      },
    ],
    nearby: ["al-khan", "al-majaz", "industrial-areas", "al-qasimia"],
    keywords: "storage al layyah sharjah, self storage al layyah, port khalid storage, business storage sharjah",
  },
  {
    slug: "al-qulayaah",
    name: "Al Qulayaah",
    headline: "in Central Sharjah",
    blurb:
      "Al Qulayaah is settled central Sharjah — established buildings, long tenancies and not much spare room. We take the overflow off your hands.",
    character: [
      "Al Qulayaah is one of the established central districts, sitting between Al Qasimia and the older core. Tenancies here run long, buildings are well occupied, and the flats were built to a period when nobody allowed for the amount of things a family accumulates over a decade.",
      "The result is that most Al Qulayaah storage is not urgent. It is a decision finally taken about a room that has been unusable for years, or about furniture kept out of sentiment rather than need. Because there is no minimum term and no maximum, that kind of storage can simply run for as long as it makes sense and be ended whenever it stops.",
    ],
    uses: [
      { icon: "🏠", title: "Decade of accumulation", desc: "The room that stopped being a room. Emptied, and given back." },
      { icon: "🛋️", title: "Furniture kept, not used", desc: "Sets you are not ready to part with but cannot live around." },
      { icon: "🗓️", title: "Storage with no end date", desc: "Run it as long as it suits and stop the month you decide to." },
    ],
    faqs: [
      {
        q: "Do I have to say how long I want to store for?",
        a: "No. Billing is monthly on the floor space in use, so you can decide as you go. Give notice when you want it back and we arrange delivery — there is no penalty for ending sooner or later than you first expected.",
      },
      {
        q: "Can I add more to storage later?",
        a: "Yes. A second collection is arranged the same way as the first and the additional space is added to the monthly figure. You are always paying for what is actually there.",
      },
    ],
    nearby: ["al-qasimia", "al-nabba", "abu-shagara", "maysaloon"],
    keywords: "storage al qulayaah sharjah, self storage al qulayaah, household storage central sharjah",
  },
  {
    slug: "maysaloon",
    name: "Maysaloon",
    headline: "in Inland Sharjah",
    blurb:
      "Maysaloon is quieter, lower and more spread out, with villas and family housing away from the corniche crush. Easy access, straightforward collections.",
    character: [
      "Maysaloon sits inland from the lagoon districts, off the airport road, and it is one of the more comfortable parts of Sharjah to run a collection in — lower buildings, villas and family housing, and space to park a vehicle near a door. There are no lift bookings and no souk streets to negotiate.",
      "The jobs tend to be family-sized: garden furniture through the hot months, children's things that have been outgrown, a room's worth of belongings while the house is worked on. Larger loads than the tower districts, but far simpler to collect, and the transport quote reflects that — access genuinely affects what a job costs, and Maysaloon is one of the easier addresses to reach.",
    ],
    uses: [
      { icon: "🏡", title: "Family and villa storage", desc: "Larger loads, straightforward access, no lift to book." },
      { icon: "🪑", title: "Garden furniture", desc: "Stored through the months the garden is unusable anyway." },
      { icon: "🔨", title: "Work on the house", desc: "Rooms cleared while building work happens, refilled afterwards." },
    ],
    faqs: [
      {
        q: "Is collection cheaper here than from a tower district?",
        a: "Often, yes. Transport is quoted on the actual job, and an address with parking and no lift booking takes less time than a high floor on the corniche. You get the number before you commit either way.",
      },
      {
        q: "Can you collect from a villa with a lot to move?",
        a: "Yes. Larger loads are routine — tell us roughly how many rooms are involved when you ask for the quote so we send the right size of crew and vehicle the first time.",
      },
    ],
    nearby: ["muwaileh", "university-city", "al-qulayaah", "industrial-areas"],
    keywords: "storage maysaloon sharjah, self storage maysaloon, villa storage sharjah, garden furniture storage sharjah",
  },
  {
    slug: "al-ghuwair",
    name: "Al Ghuwair",
    headline: "in Heritage Sharjah",
    blurb:
      "Al Ghuwair is old Sharjah at its densest, by the souks and the heritage quarter. Tight streets, older buildings, and a crew that expects both.",
    character: [
      "Al Ghuwair sits in the heritage heart of Sharjah near the souks and the old town, and it is one of the tightest districts in the emirate to move anything through. Streets are narrow, buildings are old, lifts are rare, and the commercial activity around the souks does not stop to let a van park.",
      "That is exactly the situation where doing it yourself goes wrong. Our crews plan Al Ghuwair jobs the way they plan Rolla ones — vehicle sized to the street, a scouted stopping point, and the labour to carry the distance from there. The quote is worked out for your specific address, because in this part of Sharjah a hundred metres of carrying distance is a real difference.",
    ],
    uses: [
      { icon: "🕌", title: "Old-town buildings", desc: "Heritage-quarter flats where stairs and narrow access are the whole job." },
      { icon: "🛍️", title: "Souk traders", desc: "Stock held off-site and returned as it is needed on the stall." },
      { icon: "📦", title: "Clear-outs", desc: "Long-occupied properties emptied without you carrying a thing." },
    ],
    faqs: [
      {
        q: "Vans cannot get down my street. Can you still collect?",
        a: "Yes. We size the vehicle to the street or stop at the nearest legal point and carry from there. Tell us the access situation when you ask for the quote and it is priced into the number you approve rather than raised on the day.",
      },
      {
        q: "Do you work around souk trading hours?",
        a: "We try to. Early morning is usually the easiest window in Al Ghuwair for both parking and carrying. Tell us what suits and we will schedule to it where we can.",
      },
    ],
    nearby: ["rolla", "al-nabba", "al-qasimia", "abu-shagara"],
    keywords: "storage al ghuwair sharjah, self storage al ghuwair, old town sharjah storage, souk stock storage",
  },
  {
    slug: "industrial-areas",
    name: "Industrial Areas 1–18",
    headline: "and Sajaa",
    blurb:
      "Sharjah's industrial areas are where the emirate's trade actually happens. We store stock, files and equipment — we are not a warehouse-leasing agent, and this page says which is which.",
    character: [
      "Sharjah Industrial Areas 1 through 18, and the wider Sajaa zone, hold a huge amount of the emirate's workshop, trading and light-manufacturing activity. Businesses here generate a specific and constant storage need: stock that is not moving yet, archived paperwork that must be kept, equipment between contracts, and fit-out material sitting on floor space that is costing money to rent.",
      "It is worth being direct about what this page is not. A large share of searches around Sharjah's industrial areas are for warehouse leasing — companies wanting to rent their own unit by the square metre. We do not do that. What we do is take custody of your goods, store them at our facility and bring them back when you ask. If you need your own leasable warehouse space in Sajaa or Industrial Area 12, a commercial property agent will serve you and we will not.",
    ],
    uses: [
      { icon: "📦", title: "Stock off the floor", desc: "Inventory that is not moving, out of space you are paying rent on." },
      { icon: "🗄️", title: "Archived records", desc: "Paperwork you are required to keep, retrieved on notice when needed." },
      { icon: "🧰", title: "Equipment between jobs", desc: "Tools and kit stored between contracts instead of filling the unit." },
    ],
    faqs: [
      {
        q: "Do you rent warehouse space in the Sharjah industrial areas?",
        a: "No, and we would rather be clear about it than waste your time. We do not lease units by the square metre — we take custody of your goods and store them at our own facility in Dubai Investments Park, charged on the floor space they occupy. If you need a warehouse to hold yourself in Sajaa or Industrial Area 10 to 18, you want a commercial property agent, not us.",
      },
      {
        q: "How quickly can we get stock back when we need it?",
        a: "Retrieval is normally arranged within 24–48 hours, and you can take back part of what is stored without touching the rest. Archived documents need about a week's notice, because they are stored to be kept rather than accessed daily.",
      },
    ],
    nearby: ["muwaileh", "al-layyah", "maysaloon", "al-qasimia"],
    keywords: "business storage sharjah industrial area, stock storage sharjah, document storage sharjah, sajaa storage, industrial area storage sharjah",
  },
]

export const AREA_BY_SLUG = Object.fromEntries(SHARJAH_AREAS.map((a) => [a.slug, a]))

/** The service-area list exactly as published. Order is the client's. */
export const SHARJAH_SERVICE_AREAS = SHARJAH_AREAS.map((a) => ({ name: a.name, slug: a.slug }))
