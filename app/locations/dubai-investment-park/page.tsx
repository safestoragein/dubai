import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Document Archival — Dubai Investment Park",
  description:
    "Professional document archival and records storage in Dubai Investment Park. Fireproof, climate-controlled document storage for businesses in DIP, Motor City & JAFZA. Pickup & retrieval on demand. Call +971505773388.",
  keywords:
    "document archival service dubai investment park, records storage DIP dubai, document storage motor city dubai, business records archival JAFZA, secure document storage dubai investment park, file storage DIP",
  openGraph: {
    title: "Document Archival Service Dubai Investment Park | SafeStorage",
    description: "Business document archival & records storage near DIP, Motor City & JAFZA. On-demand retrieval. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-investment-park",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-investment-park",
  },
}

const dipSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage Near Dubai Investment Park',
    description: 'Professional document archival and records storage in Dubai Investment Park. Fireproof, climate-controlled document storage for businesses in DIP, Motor City & JAFZA.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/dubai-investment-park',
    areaServed: [
      { '@type': 'Place', name: 'Dubai Investment Park' },
      { '@type': 'Place', name: 'Motor City' },
      { '@type': 'Place', name: 'JAFZA' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/dubai-investment-park#webpage',
    name: 'Document Archival Service Dubai Investment Park | SafeStorage',
    description: 'Business document archival & records storage near DIP, Motor City & JAFZA. On-demand retrieval.',
    url: 'https://safestorage.ae/locations/dubai-investment-park',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Dubai Investment Park', item: 'https://safestorage.ae/locations/dubai-investment-park' },
    ],
  },
]

export default function DubaiInvestmentParkPage() {
  return (
    <>
    <SchemaScript schema={dipSchemas} />
    <LocationPage
      location="Dubai Investment Park"
      areas={["Dubai Investment Park 1", "Dubai Investment Park 2", "Motor City", "Dubai Production City", "Dubai Studio City", "Sports City"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for DIP warehouse and business storage",
        "Ideal for Motor City residents",
        "Hassle-hassle-free pickup from Production City",
        "Convenient for Sports City apartments"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Storage — Dubai Investment Park</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage serves businesses and residents in Dubai Investment Park (DIP), Motor City, Dubai Production
          City, Dubai Studio City, and Sports City with professional document archiving, commercial storage, and
          personal self-storage solutions. Our facility is conveniently located with easy access from the major
          road networks serving these communities.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Document Archival for DIP &amp; JAFZA Businesses</h3>
            <p className="text-gray-700 mb-3">
              Dubai Investment Park hosts hundreds of manufacturing, logistics, and industrial companies that
              generate significant volumes of business records, contracts, financial documents, and regulatory
              filings. SafeStorage provides professional document archiving services with fireproof storage,
              individual box labelling, and barcode-indexed retrieval.
            </p>
            <p className="text-gray-700">
              Our document storage meets UAE regulatory requirements for record retention. Boxes are collected
              directly from your DIP or JAFZA premises, securely stored, and specific files or boxes can be
              retrieved within 24–48 hours on request. Bulk shredding services are available for expired records.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Business &amp; Warehouse Storage — DIP</h3>
            <p className="text-gray-700 mb-3">
              For companies in Dubai Investment Park that need flexible overflow storage — whether for excess
              inventory, seasonal stock, or equipment not in current use — SafeStorage offers commercial storage
              units ranging from 50 sq ft to 300+ sq ft on flexible monthly contracts.
            </p>
            <p className="text-gray-700">
              Unlike traditional warehouse leases that require long-term commitments and large capital outlay,
              SafeStorage lets businesses scale storage space up or down each month based on actual needs.
              This is especially valuable for e-commerce businesses, importers, and distributors operating
              from DIP or JAFZA.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Residential Storage — Motor City &amp; Sports City</h3>
          <p className="text-gray-700 mb-4">
            Motor City and Sports City are popular residential communities in Dubai, offering affordable,
            spacious apartments and townhouses. Residents in these areas use SafeStorage for:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Apartment renovation storage:</strong> Furniture and appliances kept safe while work is completed</li>
            <li>• <strong>Sports equipment:</strong> Cycling gear, golf clubs, gym equipment, and outdoor furniture</li>
            <li>• <strong>Seasonal items:</strong> Decorations, luggage, and items not needed year-round</li>
            <li>• <strong>Moving storage:</strong> Short-term storage between properties or during lease transition</li>
            <li>• <strong>Business storage:</strong> Home-based business inventory, samples, and stock</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — DIP &amp; Surrounding Communities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1">
              <li>• Dubai Investment Park 1 &amp; 2</li>
              <li>• JAFZA (Jebel Ali Free Zone)</li>
              <li>• Motor City</li>
              <li>• Dubai Production City</li>
            </ul>
            <ul className="space-y-1">
              <li>• Dubai Studio City</li>
              <li>• Dubai Sports City</li>
              <li>• Jumeirah Village Circle</li>
              <li>• Discovery Gardens</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Business or resident in DIP, Motor City, or Sports City? Get your free quote now.
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
