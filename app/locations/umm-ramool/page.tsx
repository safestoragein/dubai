import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: { absolute: "Storage Units Umm Ramool | Airport & Self Storage | SafeStorage" },
  description:
    "Secure storage in Umm Ramool, Dubai. Self storage and cargo overflow units with door-to-door collection for freight agents, airline crew and residents.",
  keywords:
    "Storage Umm Ramool, Umm Ramool storage units, airport storage Dubai, Al Garhoud storage, DAFZA storage, Cargo Village storage, freight forwarder storage Dubai, cabin crew storage Dubai, airline staff storage, car rental fleet storage Dubai, Al Qusais storage, Al Rashidiya storage, business storage Umm Ramool, SafeStorage Umm Ramool",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/umm-ramool",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/umm-ramool",
  },
}

const ummRamoolSchemas = [
  locationBusinessSchema({
    name: "Umm Ramool",
    url: "https://safestorage.ae/locations/umm-ramool",
    serves: ["Al Garhoud", "Dubai Airport Free Zone", "Cargo Village", "Al Qusais", "Al Rashidiya"],
  }),

  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage in Umm Ramool',
    description:
      'Fireproof, indexed archive storage for Umm Ramool freight agents, DAFZA companies and airport-side businesses, with named-file return inside 48 hours and certified destruction.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/umm-ramool',
    areaServed: [
      { '@type': 'Place', name: 'Umm Ramool' },
      { '@type': 'Place', name: 'Al Garhoud' },
      { '@type': 'Place', name: 'Dubai Airport Free Zone' },
      { '@type': 'Place', name: 'Cargo Village' },
      { '@type': 'Place', name: 'Al Qusais' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/umm-ramool#webpage',
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: 'Storage Units Umm Ramool | Airport & Self Storage | SafeStorage',
    description:
      'Secure storage in Umm Ramool, Dubai. Self storage and cargo overflow units with door-to-door collection for freight agents, airline crew and residents.',
    url: 'https://safestorage.ae/locations/umm-ramool',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Umm Ramool', item: 'https://safestorage.ae/locations/umm-ramool' },
    ],
  },
]

export default function UmmRamoolPage() {
  return (
    <>
    <SchemaScript schema={ummRamoolSchemas} />
    <LocationPage
      location="Umm Ramool"
      areas={[
        "Umm Ramool Industrial",
        "Umm Ramool Residential",
        "Al Garhoud",
        "Dubai Airport Free Zone (DAFZA)",
        "Cargo Village",
        "Al Qusais",
      ]}
      distance="25-30 minutes"
      intro="Umm Ramool sits in the airport's shadow, and the businesses here move at the airport's pace. Freight agents, fleet operators and crew on rotation all need somewhere to put things down between one movement and the next. We collect from your unit or your building, hold it under cover, and hand it back on the date you name."
      benefits={[
        "Suited to air freight and cargo agent overflow",
        "Practical for car rental and fleet operators",
        "Collection from DAFZA and Cargo Village premises",
        "Long-stay plans for airline crew on rotation",
      ]}
      features={{
        doorToDoor: "We come to your unit or building in Umm Ramool and return your things whenever you say the word",
        security: "Camera coverage on every approach, arrivals recorded at the gate, movement alarms once the site is closed",
        clean: "Enclosed indoor space that keeps grit, damp and airport-road dust away from what you leave with us",
      }}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Storage — Umm Ramool</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage looks after freight agents, fleet companies, airport-side businesses and households right across
          Umm Ramool, taking in Al Garhoud, DAFZA, Cargo Village and Al Qusais. Our vehicles reach the area off the
          Airport Road and Marrakech Street approaches, which keeps loading simple whether you are in a workshop unit,
          a warehouse bay or a residential tower.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Records Management for Freight &amp; Trading Firms</h3>
            <p className="text-gray-700 mb-3">
              Few sectors generate paper like air freight. Every consignment leaves behind airway bills, customs
              declarations, delivery receipts, insurance certificates and correspondence, and the retention rules mean
              almost none of it can be discarded for years.
            </p>
            <p className="text-gray-700">
              We lift that burden off your premises. Archive boxes are numbered, tagged and entered against an index
              before they go into fireproof space. When you need a particular file later, quote the reference and our
              team pulls it and returns it to your Umm Ramool address inside 48 hours. Once the retention window
              closes, we arrange certified destruction and send you the paperwork that proves it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Overflow Space for Airport-Side Businesses</h3>
            <p className="text-gray-700 mb-3">
              Ground close to the airport is priced for speed, not for keeping things still. Yet most units around
              here surrender part of their floor to goods and equipment that only move a few times a year.
            </p>
            <p className="text-gray-700">
              We take that volume on month-by-month agreements. Space runs from small shared lots up to areas beyond
              1,000 sq ft, and you adjust it whenever your workload changes. Agents handling seasonal peaks use us as
              a holding point between arrivals, drawing goods down as bookings come in instead of paying all year for
              a second unit that stands idle through the quiet months.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Household Storage — Al Garhoud, Al Qusais &amp; Umm Ramool</h3>
          <p className="text-gray-700 mb-4">
            The residential blocks and villa plots around the airport road fall comfortably inside our collection
            route. Households here usually get in touch for:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Postings abroad:</strong> belongings held while a contract takes someone out of the country</li>
            <li>• <strong>Flat handover gaps:</strong> possessions kept safe between one tenancy ending and the next beginning</li>
            <li>• <strong>Family visits:</strong> spare beds and furniture cleared aside when relatives arrive for a season</li>
            <li>• <strong>Study breaks:</strong> room contents held while students travel home over the summer</li>
            <li>• <strong>Home trading stock:</strong> samples and packed goods for businesses run out of the flat</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Umm Ramool &amp; Neighbouring Communities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1">
              <li>• Umm Ramool Industrial</li>
              <li>• Umm Ramool Residential</li>
              <li>• Al Garhoud</li>
              <li>• Al Rashidiya</li>
              <li>• Dubai Airport Terminals 1, 2 &amp; 3</li>
            </ul>
            <ul className="space-y-1">
              <li>• Al Qusais 1, 2 &amp; 3</li>
              <li>• Dubai Airport Free Zone</li>
              <li>• Cargo Village</li>
              <li>• Airport Road corridor</li>
              <li>• Marrakech Street</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Working the cargo side, running a fleet, or living near the airport? Get your free quote now.
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
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Umm Ramool Storage — Comprehensive Guide for Businesses &amp; Residents</h2>
        <p className="text-lg text-gray-700 mb-6">
          Umm Ramool is defined by what sits next to it. Dubai International lies on one side, the free zone and the
          cargo terminals on another, and the whole district has grown around servicing the traffic that passes
          through them. Freight consolidators, customs agents, rental fleets, aviation suppliers and workshops occupy
          the industrial plots, while apartment blocks and villa streets house a large share of the people who staff
          them.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Storage demand here follows that rhythm. Someone is always arriving, departing, expanding for a peak or
          contracting after one. Our approach suits that: priced on the volume you occupy, collected from your door,
          held indoors, released when you ask. Nothing is tied to a fixed term.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Air Freight, Cargo Agents &amp; Customs Brokers</h3>
            <p className="text-gray-700 mb-3">
              The consolidators and forwarding agents clustered near Cargo Village work to a schedule they do not
              control. Consignments land early, clear late, or sit awaiting an onward booking, and floor space near
              the terminals is far too costly to use as a waiting room.
            </p>
            <p className="text-gray-700">
              We absorb the wait. Packaged goods pending onward movement, pallets parked between bookings, packing and
              dunnage stock, and shipment records going back years are all things we routinely hold for agents in this
              district. Each item is entered on a manifest as it arrives, which means a consignment can go out in
              stages once the booking firms up rather than being released in a single block. Commercial terms are set
              out in full on our{" "}
              <a href="/business-storage" className="text-[#3E92CC] hover:underline">business storage page</a>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Airline Crew &amp; Aviation Staff</h3>
            <p className="text-gray-700 mb-3">
              The airport is the district&apos;s largest employer, and a great many cabin crew, engineers, ground staff
              and pilots live within a few minutes of it. That workforce moves constantly. Crew take long postings,
              transfer between bases, go home for extended leave, or shift accommodation as rosters change.
            </p>
            <p className="text-gray-700">
              Emptying a flat every time is expensive and exhausting. We hold the contents instead — furniture, boxes,
              appliances, the lot — for however long the posting runs, on terms that can be ended with notice rather
              than a fixed contract. When you come back or settle somewhere new in Dubai, we deliver to the new
              address. Several crew store with us for a year or longer, and the monthly cost is generally well below
              keeping an empty flat on a lease.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Car Rental Fleets &amp; Vehicle Operators</h3>
            <p className="text-gray-700 mb-3">
              Rental and chauffeur companies gather around the airport for obvious reasons, and their storage needs
              follow the tourist calendar. Fleets swell before the winter season and shrink afterwards, leaving spare
              parts, roof boxes, child seats, signage, cleaning equipment and branded material with nowhere to go.
            </p>
            <p className="text-gray-700">
              We hold all of it between peaks, plus the registration files, service histories and rental agreements
              that regulations require you to keep. The cars stay with you — we take everything around the fleet, not
              the fleet itself.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">DAFZA &amp; Free Zone Companies</h3>
            <p className="text-gray-700 mb-3">
              Dubai Airport Free Zone borders the district and sits inside this collection area. Free zone companies
              work from compact offices and units where every square metre is accounted for, which makes offsite space
              particularly useful.
            </p>
            <p className="text-gray-700">
              We take archived records, sample and demonstration stock, exhibition materials between events, IT
              equipment held during an office move, and inventory that outgrows the unit. Where a company generates a
              steady flow, we put a repeating collection in the diary so nobody has to raise a fresh request every
              week.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Al Garhoud, Al Qusais &amp; Al Rashidiya</h3>
          <p className="text-gray-700 mb-4">
            The residential communities ringing Umm Ramool are long-established and densely occupied, with a high
            proportion of working residents attached to the airport and the trade around it.
          </p>
          <p className="text-gray-700">
            People here store for reasons that reflect that. Belongings held during an overseas posting. A gap between
            two tenancies. Furniture set aside while family stay for a season. Room contents kept while a student
            travels home. We clear, catalogue and photograph on collection, hold everything in space assigned to your
            account, and deliver back on request. Al Garhoud residents can also arrange collection through our{" "}
            <a href="/locations/deira" className="text-[#3E92CC] hover:underline">Deira and Bur Dubai zone</a>, and Al
            Rashidiya through the{" "}
            <a href="/locations/mirdif" className="text-[#3E92CC] hover:underline">Mirdif zone</a> — both reach the
            same team.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Commercial Storage Options for Umm Ramool Businesses</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Records &amp; Document Management</p>
              <ul className="space-y-1 text-sm">
                <li>• Fireproof space for customs, financial and regulated files</li>
                <li>• Indexed reference against every archive box received</li>
                <li>• Named-file return inside 48 hours of the request</li>
                <li>• Certified destruction once retention periods expire</li>
                <li>• Documented handling trail suitable for inspection</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Trade &amp; Equipment Storage</p>
              <ul className="space-y-1 text-sm">
                <li>• Space from small shared lots to 1,000+ sq ft</li>
                <li>• Consignment overflow and goods awaiting onward booking</li>
                <li>• Fleet spares, seasonal equipment and branded material</li>
                <li>• Exhibition stands and demonstration stock between events</li>
                <li>• Month-by-month agreements, ended with notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Umm Ramool Storage</h2>
        <p className="text-gray-600 text-center mb-10">
          Common questions from Umm Ramool freight agents, DAFZA companies, fleet operators, airline crew and
          residents of Al Garhoud and Al Qusais.
        </p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage collect from the Umm Ramool industrial units?</h3>
            <p className="text-gray-700">Yes. Both the industrial plots and the residential side of Umm Ramool sit inside this collection area, along with Al Garhoud, DAFZA, Cargo Village and Al Qusais. Our crews come in off Airport Road and Marrakech Street, so a unit tucked behind the front row is no harder for us to load from than one on the main strip. If your goods move on a predictable cycle, we can fix a repeating slot in the diary and simply turn up. Ring or message +971505773388 to arrange it.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can freight forwarders store consignments awaiting onward booking?</h3>
            <p className="text-gray-700">Yes, and it is among the most frequent requests we handle here. Packaged goods held between bookings, pallets waiting on an onward movement, and packing materials all come to us regularly. All items are recorded upon arrival, so a consignment can be partially released once the booking confirms. We do not accept any dangerous, perishable, or restricted goods, so please send us the manifest or a description in advance.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">I am cabin crew going on a posting. Can you hold my flat contents?</h3>
            <p className="text-gray-700">Yes, this is a service a lot of airport-based crew use. We empty the flat, wrap and photograph everything, and hold it for as long as the posting runs. There is no fixed term — you end the arrangement with notice whenever you return, and we deliver to whichever Dubai address you move into. Storage generally costs significantly less than leaving an apartment sitting empty on a lease. Long-stay pricing applies to any stay above six months, so please give us your dates when you request a quote.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you cover Dubai Airport Free Zone?</h3>
            <p className="text-gray-700">Yes, DAFZA falls inside this collection area. Free zone companies use us for archived records, sample and demonstration stock, exhibition materials between shows, IT equipment during an office move, and inventory that no longer fits the unit. Companies with a steady flow can set up a recurring collection rather than raising a fresh request each time. Access arrangements at the free zone gates are handled by our team before we arrive.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is this cheaper than taking extra space near the airport?</h3>
            <p className="text-gray-700">For anything that sits still, usually by a wide margin. Land beside the terminals commands a premium because of how fast goods move through it, and none of that speed benefits a pallet that has not shifted since March. Charging with us opens at 12.65 AED per sqft with VAT included and follows the volume you genuinely occupy, with nothing added for setup and no yearly commitment. Tell us roughly what you are holding and we will work out what it currently costs you in rent versus what it would cost here.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I get a specific archived file back?</h3>
            <p className="text-gray-700">Contact your consultant by phone, WhatsApp or email with the box reference or a description of the file. Our team locates it against the index and delivers it to your Umm Ramool address inside 48 hours. Ask before midday and same-day return is often achievable. Delivery within Dubai is included in the service, and anything chargeable beyond that appears in your agreement before you commit.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Are Al Garhoud, Al Qusais and Al Rashidiya included?</h3>
            <p className="text-gray-700">All three are covered, together with the Airport Road corridor and the terminal areas. They are consistent residential collection spots for us, usually overseas assignments, temporary periods without housing and families creating space for visitors. Travel time is roughly 25 to 30 minutes. Message +971505773388 with your building and community to confirm a slot. Al Garhoud is additionally served through our <a href="/locations/deira" className="text-[#3E92CC] hover:underline">Deira zone</a> and Al Rashidiya through the <a href="/locations/mirdif" className="text-[#3E92CC] hover:underline">Mirdif zone</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What does storage cost for an Umm Ramool business?</h3>
            <p className="text-gray-700">Charging is by volume, starting at 12.65 AED per sqft with VAT included, so you pay for the space your goods take up rather than a fixed unit size. Business requirements run from small shared lots up to 1,000 sq ft and beyond. There is no setup fee, no minimum period, and nothing introduced later. A consultant prices against your volume, how often you need access, and collection frequency. Everything is set out on our <a href="/pricing" className="text-[#3E92CC] hover:underline">pricing page</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can you store fleet equipment for a car rental company?</h3>
            <p className="text-gray-700">Yes. Seasonal fleets leave a lot behind when they shrink — spare parts, roof boxes, child seats, signage, cleaning equipment and branded material all need holding until the next peak. We take the lot, along with registration files, service histories and rental agreements you are required to retain. What we cannot do is park the cars — vehicle storage is not a service we offer, so this covers everything except the fleet itself.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can you clear a whole office or unit in Umm Ramool?</h3>
            <p className="text-gray-700">Yes. Tell us the size of the site and we will send enough people and vehicles to finish it properly. Most offices and workshops here are emptied between morning and evening. If shutting down for a full day would cost you bookings, we split the job across several visits scheduled around your quiet periods instead. Contents are recorded and photographed as they leave the building and go into space held under your account name, and you call items back as the new premises come together.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you offer long-stay plans for people working abroad?</h3>
            <p className="text-gray-700">Yes. Anything beyond six months qualifies for long-stay pricing, which is where most overseas postings and extended assignments land. Your belongings stay in space assigned to your account and are photographed at collection, so you have a record while you are away. Payment can be arranged in advance or monthly by card or transfer. Tell us your expected dates when you request a quote and we will price accordingly.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Which goods will you refuse to take?</h3>
            <p className="text-gray-700">Safety rules and UAE regulation put certain categories off limits everywhere we operate. We turn away food and groceries, liquids, detergents, cosmetics, jewellery and ornaments, medicines, and masala or spice items. Also excluded: hazardous material, flammable liquids and gases, explosives, perishables, live plants or animals, illegal substances, cash or negotiable instruments, and anything with a strong smell. Vehicles are excluded outright — we do not store cars, vans or bikes. Cargo agents should note that these restrictions apply regardless of how a consignment is documented, so send the manifest across first if there is any doubt. Nearly everything ordinary is fine. The complete list lives on our <a href="/prohibited-items" className="text-[#3E92CC] hover:underline">prohibited items page</a>.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
