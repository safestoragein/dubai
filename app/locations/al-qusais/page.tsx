import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: { absolute: "Storage Units Al Qusais | Industrial & Home Storage | SafeStorage" },
  description:
    "Secure storage in Al Qusais, Dubai. Home and industrial units with door-to-door collection for Al Nahda flats, printing firms and Sharjah-border movers.",
  keywords:
    "Storage Al Qusais, Al Qusais storage units, Al Qusais Industrial storage, Al Nahda storage, storage near Sharjah border, Dubai Sharjah moving storage, printing press storage Dubai, packaging storage Al Qusais, school storage Dubai, staff accommodation storage, Muhaisnah storage, Al Twar storage, Abu Hail storage, SafeStorage Al Qusais",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/al-qusais",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/al-qusais",
  },
}

const alQusaisSchemas = [
  locationBusinessSchema({
    name: "Al Qusais",
    url: "https://safestorage.ae/locations/al-qusais",
    serves: ["Al Nahda", "Al Twar", "Abu Hail", "Hor Al Anz", "Muhaisnah", "Al Mamzar"],
  }),

  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage in Al Qusais',
    description:
      'Fireproof, indexed records storage for Al Qusais trading houses, contractors and workshops, with requested files returned within two days and certified destruction on expiry.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/al-qusais',
    areaServed: [
      { '@type': 'Place', name: 'Al Qusais' },
      { '@type': 'Place', name: 'Al Nahda' },
      { '@type': 'Place', name: 'Al Twar' },
      { '@type': 'Place', name: 'Abu Hail' },
      { '@type': 'Place', name: 'Hor Al Anz' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/al-qusais#webpage',
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: 'Storage Units Al Qusais | Industrial & Home Storage | SafeStorage',
    description:
      'Secure storage in Al Qusais, Dubai. Home and industrial units with door-to-door collection for Al Nahda flats, printing firms and Sharjah-border movers.',
    url: 'https://safestorage.ae/locations/al-qusais',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Al Qusais', item: 'https://safestorage.ae/locations/al-qusais' },
    ],
  },
]

export default function AlQusaisPage() {
  return (
    <>
    <SchemaScript schema={alQusaisSchemas} />
    <LocationPage
      location="Al Qusais"
      areas={[
        "Al Qusais 1, 2 & 3",
        "Al Qusais Industrial 1–5",
        "Al Nahda 1 & 2",
        "Al Twar",
        "Abu Hail",
        "Hor Al Anz",
      ]}
      distance="30-35 minutes"
      intro="Al Qusais holds a lot of people and a lot of trade in not much room. Flats fill up, workshop units fill up, and the Sharjah border a few minutes away means somebody is always mid-move. We arrive at your building or your unit, take what is in the way, and return it on the date you choose."
      benefits={[
        "Built around compact Al Nahda and Al Qusais flats",
        "Suited to printing, packaging and light workshop trades",
        "A holding point for moves across the Sharjah border",
        "Summer plans for the schools clustered in the district",
      ]}
      features={{
        doorToDoor: "We take the stairs or the lift, load at your door, and bring everything back on the date you name",
        security: "Cameras watching every approach, arrivals written down at the gate, alarms live once the site shuts",
        clean: "Sealed indoor rooms that keep damp, dust and pests away from paper, fabric and packed goods",
      }}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Storage — Al Qusais</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage looks after households, trading firms and workshops throughout Al Qusais, reaching Al Qusais
          Industrial 1 through 5, the residential districts, Al Nahda, Al Twar, Abu Hail and Hor Al Anz. Our vans come
          in off Damascus Street and Amman Street, so a tower flat and a back-row industrial unit are equally
          reachable.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Records Management for Al Qusais Firms</h3>
            <p className="text-gray-700 mb-3">
              Trading houses, contractors and workshops in this district hold onto paper for years because the law
              requires it. Ledgers, purchase orders, labour files, tenancy paperwork and tax records build steadily,
              and there is rarely a spare room for any of it.
            </p>
            <p className="text-gray-700">
              We take it away and organise it. Every file box gets a number, a label and a line on your index before
              it enters fireproof storage. Ask for a particular file months later and we find it against that index
              and bring it to your Al Qusais address within two days of asking. When a retention period finally
              expires, we destroy the records under certificate and send you the confirmation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Workshop &amp; Trading Unit Overflow</h3>
            <p className="text-gray-700 mb-3">
              Industrial rents in Al Qusais are low compared to those elsewhere in Dubai — and that is precisely why
              these places are stuffed with goods. Low prices encourage stockpiling, and soon the entire working floor
              is buried under stock that has not moved in a year.
            </p>
            <p className="text-gray-700">
              We clear that back out. Areas start small and consolidated and run up past 1,000 sq ft, billed monthly
              with no fixed term, so you can take more before a busy stretch and hand it back afterwards. Firms
              bringing in goods on irregular cycles use us as a buffer, calling stock forward as orders arrive instead
              of renting a second unit that spends most of the year half empty.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Household Storage — Al Nahda, Al Qusais &amp; Al Twar</h3>
          <p className="text-gray-700 mb-4">
            The apartment blocks here are among the most densely lived-in anywhere in Dubai, and flats are used hard.
            Households in these buildings usually contact us about:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Flatshare changes:</strong> possessions kept aside when a room or a housemate changes over</li>
            <li>• <strong>Family arriving:</strong> furniture moved out to free a bedroom for visiting relatives</li>
            <li>• <strong>Moves to Sharjah:</strong> belongings held while a new tenancy across the border is finalised</li>
            <li>• <strong>Leaving the country:</strong> everything kept safe when a job ends before the next one starts</li>
            <li>• <strong>Growing families:</strong> cots, prams and outgrown furniture stored rather than thrown away</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Al Qusais &amp; Neighbouring Communities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1">
              <li>• Al Qusais 1, 2 &amp; 3</li>
              <li>• Al Qusais Industrial 1–5</li>
              <li>• Abu Hail</li>
              <li>• Muhaisnah</li>
              <li>• Dubai–Sharjah border corridor</li>
            </ul>
            <ul className="space-y-1">
              <li>• Al Nahda 1 &amp; 2</li>
              <li>• Al Twar 1, 2 &amp; 3</li>
              <li>• Hor Al Anz</li>
              <li>• Al Mamzar</li>
              <li>• Damascus Street</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Living in a flat here, running a unit, or moving across the border? Get your free quote now.
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>

    {/* Extended Detail Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Al Qusais Storage — Comprehensive Guide for Businesses &amp; Residents</h2>
        <p className="text-lg text-gray-700 mb-6">
          Al Qusais is one of the most populous districts in Dubai. Apartment blocks line Damascus Street, five
          industrial sub-districts sit behind them, and the Sharjah border is close enough that thousands of residents
          cross it every day. Schools, workshops, print houses and trading offices are folded into the same few square
          kilometres.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Storage demand follows from all of that. Flats are small and shared. Units are cheap enough to overfill.
          Families move across the emirate line constantly as rents shift on either side. What people need is
          somewhere to put things for a while without signing up to anything permanent, and that is precisely what we
          do — priced on volume, collected from the door, held indoors, given back on request.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Moving Between Dubai and Sharjah</h3>
            <p className="text-gray-700 mb-3">
              This is the storage need that defines Al Qusais more than any other. Rents move at different speeds in
              the two emirates, so households cross the border in both directions all year, and the dates almost never
              line up. A tenancy ends on the 30th and the new one starts on the 15th of the following month, leaving a
              fortnight with nowhere to put a flat&apos;s worth of belongings.
            </p>
            <p className="text-gray-700">
              We bridge that gap. Your things come out on the day you hand back the keys, sit with us for as long as
              the wait lasts, and arrive at the new address when you are ready to receive them. There is no minimum
              period, so a two-week gap costs two weeks. We also handle the reverse case, where a family moving into
              Dubai stores in advance and takes delivery once the new lease begins.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Printing, Packaging &amp; Paper Trades</h3>
            <p className="text-gray-700 mb-3">
              There is a very high concentration of printing and packaging companies in Al Qusais. All these
              industries share one problematic feature: the raw materials they use are bulky, very sensitive to
              moisture and bought in huge volumes.
            </p>
            <p className="text-gray-700">
              We take reels and stock paper, finished print runs waiting on a client, packaging inventory, mounted
              signage between installations, and machine spares. Storage is sealed and indoors, which matters
              enormously for paper — damp stock is ruined stock, and a warehouse yard will not do. Print houses
              running seasonal contract work often keep a standing area with us and draw against it through the year.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Schools &amp; Education Suppliers</h3>
            <p className="text-gray-700 mb-3">
              An unusual number of Dubai&apos;s schools sit in and around Al Qusais, and every one of them empties out
              each summer. Classrooms are freshly painted, furnishings are rearranged, and there is nowhere within the
              school premises to store any of it.
            </p>
            <p className="text-gray-700">
              We store desks and chairs over the summer break, library and textbook stock between curriculum changes,
              sports and PE equipment out of season, stage sets and event materials, and archived student records that
              regulations require schools to retain. Collections are booked around term dates so the work happens
              while the buildings are empty. Ask about term-length pricing, which suits a fixed eight or ten week
              break better than an open monthly plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Staff Accommodation Providers</h3>
            <p className="text-gray-700 mb-3">
              Companies housing staff across Al Qusais and neighbouring Muhaisnah deal with constant turnover.
              Occupants arrive, leave, transfer between rooms and go home on long leave, and each movement leaves
              belongings and furniture in limbo.
            </p>
            <p className="text-gray-700">
              We hold room contents between occupants, bunks and lockers during refurbishment, and belongings left by
              staff away on extended leave. Everything is recorded against the individual it belongs to, so returning
              the right items to the right person months later is straightforward. Muhaisnah residents can also
              arrange collection through our{" "}
              <a href="/locations/mirdif" className="text-[#3E92CC] hover:underline">Mirdif service zone</a>.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Abu Hail, Hor Al Anz &amp; Al Mamzar</h3>
          <p className="text-gray-700">
            The older residential streets running west toward the creek fall inside this collection area. Housing here
            is a mix of ageing low-rise blocks and family villas, many occupied by the same families for decades, and
            storage requests tend to reflect long occupancy — decades of accumulated belongings, furniture kept
            through a renovation, and possessions consolidated when an older relative moves in. These communities also
            sit close to our{" "}
            <a href="/locations/deira" className="text-[#3E92CC] hover:underline">Deira and Bur Dubai zone</a>, and
            either page reaches the same team.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Commercial Storage Options for Al Qusais Businesses</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Records &amp; Document Management</p>
              <ul className="space-y-1 text-sm">
                <li>• Fireproof rooms for ledgers, labour files and tax records</li>
                <li>• Numbered index entry for every file box taken in</li>
                <li>• Requested files returned within two days of asking</li>
                <li>• Destruction under certificate once retention ends</li>
                <li>• Written handling record available for inspection</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Trade &amp; Equipment Storage</p>
              <ul className="space-y-1 text-sm">
                <li>• Areas from small consolidated lots to 1,000+ sq ft</li>
                <li>• Paper reels, print stock and packaging inventory</li>
                <li>• Signage and display material between installations</li>
                <li>• Furniture held over school and seasonal breaks</li>
                <li>• Billed monthly with no fixed term</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Al Qusais Storage</h2>
        <p className="text-gray-600 text-center mb-10">
          Common questions from Al Nahda and Al Qusais residents, industrial unit operators, print houses, schools and
          families moving across the Sharjah border.
        </p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you collect from Al Qusais Industrial?</h3>
            <p className="text-gray-700">Yes, all five industrial sub-districts are inside this collection area, together with the residential parts of Al Qusais, Al Nahda, Al Twar, Abu Hail and Hor Al Anz. Our drivers come in from Damascus Street and Amman Street, so a unit at the back of a block is no trouble to reach. Where a business generates goods on a repeating cycle, we will put a recurring visit in the diary rather than waiting for a call each time. Ring or message +971505773388.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">I am moving from Dubai to Sharjah and the dates do not match. Can you help?</h3>
            <p className="text-gray-700">This is one of the most common reasons people in Al Qusais call us, and the arrangement is simple. We empty the flat on the day you return the keys, keep everything for however long the gap lasts, and deliver to the Sharjah address once you can receive it. No minimum period applies, so a fortnight is charged as a fortnight. It works the same way in reverse if you are coming into Dubai and want your belongings held until the new lease starts. Tell us both dates when you ask for a quote.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can print houses store paper stock and finished runs?</h3>
            <p className="text-gray-700">Yes, and paper is a good fit for how we store. Reels, sheet stock, completed runs awaiting collection by a client, packaging inventory and machine spares all come to us from this district. Everything sits in sealed indoor rooms rather than a yard, which is the important part — paper that takes on damp is worth nothing, and open storage will ruin it. Print firms with seasonal contracts often keep a standing area with us and draw against it as the year goes on.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you work with schools in Al Qusais over the summer?</h3>
            <p className="text-gray-700">Yes, and several do exactly that. Desks and chairs come out while classrooms are painted, along with library stock, PE and sports equipment, stage sets and archived student records. We book collection and return around your term dates so everything happens while the site is closed. Ask about term-length pricing when you enquire, since a fixed eight- or ten week break prices better than an open-ended monthly plan.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How small a job will you take from an Al Nahda flat?</h3>
            <p className="text-gray-700">Any size. Plenty of what we collect around here is a few boxes and a piece of furniture from a shared flat, not a whole household. Because charging follows the volume you occupy rather than a fixed unit size, a small load is billed as a small load. If you are storing while a housemate changes over or a relative visits, that is entirely normal work for us and there is no minimum you have to reach.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is storing cheaper than keeping a bigger flat or a second unit?</h3>
            <p className="text-gray-700">For most people here, comfortably so. Paying rent on an extra bedroom or a second industrial unit purely to hold things is expensive by any measure. Our rate opens at 12.65 AED per sqft with VAT included and applies only to the volume you actually use, with no setup charge and no annual commitment. Give us a rough idea of what you are holding — photographs are easiest — and we will tell you what it would cost here so you can weigh it against your rent.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I get a stored file back?</h3>
            <p className="text-gray-700">Contact your consultant by phone, WhatsApp or email with the box number or a description. We locate it against your index and deliver to your Al Qusais address within two days of the request. Ask in the morning and it can often go out the same day. Delivery inside Dubai is part of what you already pay for, and anything chargeable beyond that is written into your agreement before you sign.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Are Muhaisnah, Abu Hail and Al Mamzar covered?</h3>
            <p className="text-gray-700">Yes, along with Hor Al Anz and Al Twar. These sit at the edge of this collection area and are served on the same terms as central Al Qusais, roughly 30 to 35 minutes from us. Muhaisnah is also reachable through our <a href="/locations/mirdif" className="text-[#3E92CC] hover:underline">Mirdif zone</a> and the creek-side streets through our <a href="/locations/deira" className="text-[#3E92CC] hover:underline">Deira zone</a> — whichever you contact, the same team responds. Message +971505773388 with your building.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What does it cost for an Al Qusais business?</h3>
            <p className="text-gray-700">Pricing is volume-based and opens at 12.65 AED per sqft including VAT, so you are charged for the area your goods take up rather than a fixed room size. Business requirements run from small shared lots to beyond 1,000 sq ft. Nothing is charged for setup, no minimum term applies, and no cost appears later that was not discussed. A consultant will price against your volume and how often you need to get at it. Detail sits on our <a href="/pricing" className="text-[#3E92CC] hover:underline">pricing page</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can you empty a whole unit or flat in one visit?</h3>
            <p className="text-gray-700">Usually, yes. We match the crew and vehicle count to the job, and a standard industrial unit or apartment is typically finished in a single visit. Larger sites can be broken into stages if closing for a full day would cost you work. Everything is listed and photographed as it is loaded, then held under your account name and released back to you piece by piece or all at once, whichever suits.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you store things for staff who are away on long leave?</h3>
            <p className="text-gray-700">Yes, and accommodation providers across the district use us for it. Room contents are held while an occupant is out of the country, bunks and lockers are stored during refurbishment, and belongings are logged against the individual they belong to so the right things go back to the right person, however many months later. Companies managing several buildings can run it all through one account.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Which goods will you not accept?</h3>
            <p className="text-gray-700">Regulation and basic safety put some categories out of bounds at every SafeStorage site. We will not take food or groceries, liquids, detergents, cosmetics, jewellery and ornaments, medicines, or masala and spice items. Equally excluded are hazardous materials, flammable liquids and gases, explosives, perishables, live plants and animals, illegal substances, cash or negotiable instruments, and anything strongly scented. Vehicles are not accepted at any of our sites. Print and packaging firms should note that solvents, inks and cleaning chemicals count as flammable and cannot come in, though paper, board and finished goods are all fine. Check with us on anything you are unsure about. The full list is on our <a href="/prohibited-items" className="text-[#3E92CC] hover:underline">prohibited items page</a>.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
