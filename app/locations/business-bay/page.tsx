import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Units Near Business Bay Dubai | Pickup in 24hrs | SafeStorage",
  description:
    "Looking for storage units near Business Bay Dubai? SafeStorage offers climate-controlled units with free pickup from Business Bay, DIFC & Downtown. Book online — space ready tomorrow. Call +971505773388.",
  keywords:
    "storage units near business bay dubai, business bay self storage, storage near DIFC, downtown dubai storage units, business bay office storage, storage pickup business bay",
  openGraph: {
    title: "Storage Units Near Business Bay Dubai - Pickup in 24hrs | SafeStorage",
    description: "Climate-controlled storage near Business Bay & DIFC. Free pickup from your address. Call +971505773388.",
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
    description: 'Climate-controlled storage near Business Bay & DIFC. Free pickup from Business Bay, DIFC & Downtown Dubai. Space ready in 24 hours.',
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
    description: 'Climate-controlled storage near Business Bay & DIFC. Free pickup from your address.',
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
        "Hassle-hassle-free pickup from Downtown Dubai",
        "Ideal for residents in high-rise apartments"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Near Business Bay, DIFC &amp; Downtown Dubai</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage serves residents and businesses in Business Bay, Downtown Dubai, DIFC, and Sheikh Zayed Road
          with premium climate-controlled storage units, free pickup and delivery, and flexible monthly plans.
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
              hours. Items are transported to our secure, climate-controlled facility and can be retrieved on demand.
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
    </>
  )
}