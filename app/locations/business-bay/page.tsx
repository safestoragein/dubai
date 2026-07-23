import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Units Near Business Bay Dubai | 24hr Pickup",
  description:
    "Looking for storage units near Business Bay Dubai? SafeStorage offers secure units with door-to-door pickup from Business Bay, DIFC & Downtown. Book online — space ready tomorrow. Call +971505773388.",
  keywords:
    "storage units near business bay dubai, business bay self storage, storage near DIFC, downtown dubai storage units, business bay office storage, storage pickup business bay",
  openGraph: {
    title: "Storage Units Near Business Bay Dubai - Pickup in 24hrs | SafeStorage",
    description: "Secure storage near Business Bay & DIFC. Door-to-Door pickup from your address. Call +971505773388.",
    url: "https://safestorage.ae/locations/business-bay",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/business-bay",
  },
}

const businessBaySchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Near Business Bay & DIFC Dubai',
    description: 'Secure storage near Business Bay & DIFC. Door-to-Door pickup from Business Bay, DIFC & Downtown Dubai. Space ready in 24 hours.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/business-bay',
    areaServed: [
      { '@type': 'Place', name: 'Business Bay' },
      { '@type': 'Place', name: 'DIFC' },
      { '@type': 'Place', name: 'Downtown Dubai' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/business-bay#webpage',
    name: 'Storage Units Near Business Bay Dubai | Pickup in 24hrs',
    description: 'Secure storage near Business Bay & DIFC. Door-to-Door pickup from your address.',
    url: 'https://safestorage.ae/locations/business-bay',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Business Bay', item: 'https://safestorage.ae/locations/business-bay' },
    ],
  },
]

export default function BusinessBayPage() {
  return (
    <>
    <SchemaScript schema={businessBaySchemas} />
    <LocationPage
      location="Business Bay"
      areas={["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road", "Al Khail Road"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for Business Bay office storage",
        "Document archiving for DIFC companies",
        "Door-to-Door pickup from Downtown Dubai",
        "Ideal for residents in high-rise apartments"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Near Business Bay, DIFC &amp; Downtown Dubai</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage serves residents and businesses in Business Bay, Downtown Dubai, DIFC, and Sheikh Zayed Road
          with premium secure storage units, door-to-door service, and flexible monthly plans.
          Whether you are a high-rise apartment resident or a DIFC-registered company, we have the right storage
          solution for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Office &amp; Business Storage — Business Bay</h3>
            <p className="text-gray-700 mb-3">
              Business Bay is one of Dubai's busiest commercial hubs, home to thousands of offices, co-working spaces,
              and corporate headquarters. When businesses in Business Bay need to clear office space, store excess
              furniture, or archive documents, SafeStorage provides a fast, reliable solution.
            </p>
            <p className="text-gray-700">
              Our same-day pickup service can clear an entire office floor of furniture, equipment, and files within
              hours. Items are transported to our secure facility and can be retrieved on demand.
              We serve startups, SMEs, and large corporations with tailored business storage plans.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Document Archiving — DIFC Companies</h3>
            <p className="text-gray-700 mb-3">
              DIFC-registered businesses are required to maintain specific financial, legal, and corporate records
              for defined periods under UAE regulations. SafeStorage provides compliant document archiving with
              fireproof storage, barcode indexing, and on-demand retrieval.
            </p>
            <p className="text-gray-700">
              Our document storage service is trusted by law firms, financial institutions, and corporate offices
              across DIFC and the broader Downtown area. Regular document pickup and delivery keeps your office
              uncluttered while maintaining complete access to archived records whenever needed.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Apartment Storage — Downtown Dubai &amp; Business Bay Residents</h3>
          <p className="text-gray-700 mb-4">
            Residents of Downtown Dubai and Business Bay high-rise apartments often face space constraints common
            to urban living. SafeStorage provides flexible storage for seasonal items, excess furniture, sports
            equipment, and personal belongings — freeing up valuable apartment space without long-term commitment.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Renovation storage:</strong> Full apartment furniture clearance while contractors work</li>
            <li>• <strong>Lease gap storage:</strong> Bridge the gap between old and new apartment leases</li>
            <li>• <strong>Downsizing:</strong> Store overflow items when moving to a smaller unit</li>
            <li>• <strong>Seasonal storage:</strong> Holiday items, winter clothes, sports equipment</li>
            <li>• <strong>Expat storage:</strong> Keep belongings safely stored while travelling or relocating</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Business Bay Storage Zone</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="space-y-1">
              <li>• Business Bay (all towers)</li>
              <li>• Downtown Dubai</li>
              <li>• Dubai International Financial Centre (DIFC)</li>
              <li>• Sheikh Zayed Road (E11)</li>
              <li>• Al Khail Road corridor</li>
            </ul>
            <ul className="space-y-1">
              <li>• Dubai Mall area</li>
              <li>• The Old Town</li>
              <li>• Burj Khalifa District</li>
              <li>• Za&apos;abeel</li>
              <li>• Trade Centre</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Need storage in Business Bay, DIFC, or Downtown Dubai? Get your free quote now.
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
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Why Business Bay &amp; DIFC Residents and Businesses Choose SafeStorage</h2>
        <p className="text-lg text-gray-700 mb-6">
          Business Bay is Dubai&apos;s most dynamic commercial district, with thousands of offices, luxury residential towers, and corporate headquarters lining the Dubai Canal. The district attracts professionals from around the world, creating a constant demand for flexible, premium storage solutions. Whether you&apos;re a corporate tenant clearing out an office, a Downtown resident between leases, or a DIFC law firm archiving client files, SafeStorage provides the most convenient, secure, and affordable solution in the area.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our Business Bay service zone is staffed with dedicated logistics teams who know the district intimately — including building access procedures, loading bay locations, and optimal routes for the fastest possible service. We regularly serve clients in The Executive Towers, Park Tower, Damac Maison, Bay Square, and all towers along Business Bay waterfront. For DIFC clients, we understand the security and compliance requirements specific to the financial centre and handle all document archiving with appropriate confidentiality protocols.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">High-Rise Apartment Storage — Business Bay Towers</h3>
            <p className="text-gray-700 mb-3">Living in a Business Bay high-rise means paying a premium for every square metre of living space. Residents commonly find themselves storing items they rarely use — extra furniture from a previous larger home, seasonal decorations, sports equipment, suitcases, or clothing for a different climate. These items take up valuable space in apartments where storage rooms are often tiny or non-existent.</p>
            <p className="text-gray-700">SafeStorage solves this by offering flexible, volume-based storage starting from 12.60 AED / sqft (VAT-inclusive). You pay only for the actual volume you store, not a fixed unit size. Our team collects directly from your apartment floor, handles all the carrying and loading, and returns items to your door whenever you need them — usually within 24 hours of a delivery request.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Corporate Office Storage — Business Bay &amp; Sheikh Zayed Road</h3>
            <p className="text-gray-700 mb-3">Businesses on Sheikh Zayed Road and in Business Bay frequently need to store excess office furniture, equipment, and files when downsizing, relocating, or remodelling their offices. SafeStorage provides a faster and more cost-effective solution than leasing additional warehouse space or paying for removalist storage.</p>
            <p className="text-gray-700">We offer same-day commercial pickups (subject to availability) and can clear an entire office floor within a single working day with our larger team options. All office furniture is professionally wrapped and stored in secure units, ready to be returned to any Dubai address when your new office is ready or when needed again.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Directions &amp; Access — Business Bay Service Zone</h3>
          <p className="text-gray-700 mb-4">Our Business Bay service zone covers all properties accessible from Sheikh Zayed Road (E11), Al Khail Road (E44), Business Bay Road, and the Dubai Canal Promenade. Key landmarks within our Business Bay coverage include:</p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1 text-sm">
              <li>• Business Bay Metro Station area (Red Line)</li>
              <li>• Bay Avenue Mall and surrounding towers</li>
              <li>• Dubai Canal Waterfront developments</li>
              <li>• DIFC Gate Village and ICD Brookfield Place</li>
              <li>• Burj Khalifa and The Dubai Mall precinct</li>
              <li>• The Old Town and Souk Al Bahar</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li>• Sheikh Zayed Road towers (SZR)</li>
              <li>• Trade Centre apartments &amp; offices</li>
              <li>• Za&apos;abeel residential community</li>
              <li>• Al Wasl Road corridor</li>
              <li>• Oud Metha and Al Jaddaf areas</li>
              <li>• Festival City adjacent areas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Business Bay Storage</h2>
        <p className="text-gray-600 text-center mb-10">Common questions from Business Bay, DIFC, and Downtown Dubai residents and businesses about SafeStorage.</p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How quickly can you pick up from my Business Bay apartment?</h3>
            <p className="text-gray-700">For requests made before 12 PM, same-day pickup from Business Bay apartments is typically available. Standard bookings can be scheduled within 24 hours with your choice of morning, afternoon, or evening time window. Our team knows the Business Bay tower access procedures and loading bay locations, ensuring a smooth and efficient pickup experience. We regularly service all major towers including The Executive Towers, Park Tower, Damac Maison, and the Waterfront Towers. Call or WhatsApp +971505773388 to check same-day availability for your specific building.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can DIFC companies use SafeStorage for document archiving?</h3>
            <p className="text-gray-700">Yes, SafeStorage is widely used by DIFC-registered companies for document archiving and records management. We provide fireproof storage, individual box labelling with barcode indexing, and on-demand retrieval of specific files or boxes within 24–48 hours. Our document storage service helps DIFC companies meet UAE regulatory requirements for financial and legal record retention. All document handling follows strict confidentiality protocols. We serve law firms, financial institutions, fund managers, and corporate headquarters throughout the DIFC and the broader Downtown area.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the best storage option for Downtown Dubai apartment residents?</h3>
            <p className="text-gray-700">For Downtown Dubai residents, our personal household storage service is the most popular option. It works on a volume-based pricing model — you pay for the actual space your items take up, not a fixed unit size. This is ideal for residents who have a mix of small and large items to store. Most Downtown residents store seasonal clothing, suitcases, sporting equipment, extra furniture, and items from previous larger homes. Plans start from 12.60 AED / sqft (VAT-inclusive) and include door-to-door pickup, secure storage, insurance, and on-demand delivery.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there storage available near the Burj Khalifa?</h3>
            <p className="text-gray-700">Yes, the entire Burj Khalifa District falls within our Business Bay service zone, which is one of our fastest and most active zones. Residents of the Burj Khalifa Residences, Address Sky View, The Address Boulevard, and other Burj Khalifa area towers regularly use SafeStorage. Our team can reach most Burj Khalifa area addresses within 10–15 minutes of confirmation. The Burj Khalifa area is also one of our primary zones for corporate office storage, serving businesses in the towers surrounding Dubai Mall and the Opera District.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you handle the packing, or do I need to pack items myself?</h3>
            <p className="text-gray-700">SafeStorage&apos;s team handles all the heavy lifting and loading, and we can also provide professional packing services if required. For standard household items and furniture, our team will wrap, protect, and transport your belongings using quality packing materials at no extra charge for basic wrapping. For fragile items, artwork, antiques, or electronics, we offer professional packing using bubble wrap, custom crating, and specialist materials — available as an optional add-on service. You are also welcome to pre-pack your items in boxes; we will collect, label, and store them as-is.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What happens if I need my items back urgently from storage?</h3>
            <p className="text-gray-700">If you need items urgently, contact us on +971505773388 or WhatsApp as early as possible in the day. For urgent requests received before 12 PM, we can often arrange same-day delivery back to any Business Bay or Downtown Dubai address. Standard delivery is within 24–48 hours. You can request specific items from your digital inventory to be returned without having to retrieve everything. Deliveries within Dubai are handled door-to-door as part of our service, with any additional fees disclosed upfront before you book.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I store office furniture from a Business Bay office during relocation?</h3>
            <p className="text-gray-700">Yes, this is one of our most common commercial services. When businesses in Business Bay relocate their offices, they often need temporary storage for furniture, equipment, and files during the transition period. SafeStorage can collect an entire office floor of furniture within a day, store everything in secure units, and return specific items to your new address as you need them. We work with businesses of all sizes from small startup offices to multi-floor corporate suites, and we can handle the entire process with minimal disruption to your operations.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage offer storage for Sheikh Zayed Road office towers?</h3>
            <p className="text-gray-700">Yes, Sheikh Zayed Road (E11) is fully within our Business Bay service zone. We regularly serve businesses and residents in the SZR towers including World Trade Centre, Chelsea Tower, Jumeirah Emirates Towers, Rose Tower, and other iconic SZR high-rises. For businesses, we offer same-day commercial pickups, document archiving, and flexible monthly storage plans. For residents, we provide personal and household storage with door-to-door pickup directly from your apartment floor.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there a minimum storage period for Business Bay customers?</h3>
            <p className="text-gray-700">No, there is no minimum storage period for Business Bay or any other area. SafeStorage plans are completely flexible — you can store for as short as one week and as long as several years. Monthly billing means you only pay for the time you actually need. You can cancel with 14 days&apos; notice at any time. This makes SafeStorage ideal for Business Bay residents who need storage during a short apartment renovation, a brief trip abroad, or while waiting for a new lease to begin.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What security measures does SafeStorage use?</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is included in the free insurance provided with SafeStorage?</h3>
            <p className="text-gray-700">Every SafeStorage unit comes with complimentary insurance coverage protecting your items against theft, fire, flood, and accidental damage while in our facility. The standard free insurance covers items up to a declared value, with extended coverage available as an optional add-on for high-value items such as artwork, antiques, or expensive electronics. At the time of booking, you will be asked to declare the approximate value of your stored items so we can ensure the standard coverage is sufficient. Our storage consultant will advise if additional insurance is recommended based on what you are storing.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}