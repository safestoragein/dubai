import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Document Archival — Dubai Investment Park",
  description:
    "Professional document archival and records storage in Dubai Investment Park. Fireproof, secure document storage for businesses in DIP, Motor City & JAFZA. Pickup & retrieval on demand. Call +971505773388.",
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
    description: 'Professional document archival and records storage in Dubai Investment Park. Fireproof, secure document storage for businesses in DIP, Motor City & JAFZA.',
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
        "Door-to-Door pickup from Production City",
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

    {/* Extended Detail Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Dubai Investment Park Storage — Comprehensive Guide for Businesses &amp; Residents</h2>
        <p className="text-lg text-gray-700 mb-6">
          Dubai Investment Park (DIP) is one of the UAE&apos;s most strategically important industrial and mixed-use zones, housing hundreds of manufacturing facilities, logistics companies, warehouses, and residential communities. SafeStorage serves the entire DIP area with premium document archiving, commercial storage, and residential storage solutions — all delivered with the same door-to-door pickup, secure storage, and flexible monthly plans available across all Dubai zones.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          The DIP service zone also covers several popular residential communities including Motor City, Dubai Sports City, and Discovery Gardens, each with thousands of residents who benefit from SafeStorage&apos;s convenient door-to-door service. Whether you are a factory manager needing to archive a decade of compliance records, a resident of Motor City storing a season&apos;s worth of cycling equipment, or a Jumeirah Village Circle apartment owner clearing space during a renovation, our team is ready to serve you efficiently and professionally.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Discovery Gardens &amp; Jebel Ali Coverage</h3>
            <p className="text-gray-700 mb-3">Discovery Gardens is one of Dubai&apos;s most densely populated residential communities, home to thousands of families and working professionals. The community&apos;s mid-size apartments often lack sufficient storage space for all a household&apos;s needs, making SafeStorage a popular and practical solution for Discovery Gardens residents.</p>
            <p className="text-gray-700">Jebel Ali and JAFZA (Jebel Ali Free Zone) are also within our DIP service zone. Businesses operating in JAFZA — one of the world&apos;s largest free zones — frequently use our document archiving service for compliance records, contracts, and import/export documentation. We offer regular scheduled pickups from JAFZA premises on a weekly or monthly basis for businesses with ongoing archiving needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Jumeirah Village Circle (JVC) Storage</h3>
            <p className="text-gray-700 mb-3">Jumeirah Village Circle has grown into one of Dubai&apos;s most popular mid-market residential communities, with thousands of apartments and townhouses. JVC residents have diverse storage needs — from students needing semester-break storage to families storing renovation overflow to small business owners keeping inventory.</p>
            <p className="text-gray-700">SafeStorage covers all of JVC including the apartment clusters, townhouse communities, and the village&apos;s growing commercial strip. Our service is especially popular among JVC residents who are moving between apartments within the community, where lease-end and lease-start dates frequently create a gap requiring temporary storage.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Industrial &amp; Commercial Storage Solutions for DIP Businesses</h3>
          <p className="text-gray-700 mb-4">Dubai Investment Park businesses have unique storage needs that differ from residential customers. SafeStorage provides tailored solutions for industrial and commercial clients in DIP, JAFZA, and surrounding zones:</p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Document &amp; Records Management</p>
              <ul className="space-y-1 text-sm">
                <li>• Fireproof document storage for compliance records</li>
                <li>• Barcode-indexed retrieval system</li>
                <li>• On-demand file delivery within 24–48 hours</li>
                <li>• Secure shredding for expired records</li>
                <li>• Audit-ready chain of custody documentation</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Commercial &amp; Equipment Storage</p>
              <ul className="space-y-1 text-sm">
                <li>• Flexible units from 50 sq ft to 1,000+ sq ft</li>
                <li>• Inventory overflow and seasonal stock storage</li>
                <li>• Equipment and machinery not in current use</li>
                <li>• Office furniture during facility upgrades</li>
                <li>• Month-to-month contracts, no long-term lock-in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Dubai Investment Park Storage</h2>
        <p className="text-gray-600 text-center mb-10">Common questions from DIP businesses, Motor City residents, JVC apartment owners, and other customers in southern Dubai.</p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage serve Jumeirah Village Circle (JVC)?</h3>
            <p className="text-gray-700">Yes, Jumeirah Village Circle is fully covered within our Dubai Investment Park service zone. We regularly serve all clusters and buildings within JVC including apartment towers and townhouse communities. JVC residents can book same-day pickup (before 12 PM) or schedule a standard pickup within 24–48 hours. Our service is particularly popular in JVC for between-lease storage, renovation clearances, and personal storage for residents in the community&apos;s compact apartments. Contact us on +971505773388 to book your JVC pickup.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can JAFZA companies use SafeStorage for document archiving?</h3>
            <p className="text-gray-700">Yes, SafeStorage is an excellent solution for JAFZA (Jebel Ali Free Zone) companies needing document archiving and records management. We provide regular scheduled pickups from JAFZA facilities, with all documents stored in fireproof, secure units at our facility. Documents are individually labelled and indexed using barcodes, allowing specific files or boxes to be retrieved within 24–48 hours of a request. This service helps JAFZA businesses meet UAE regulatory requirements for document retention without using valuable warehouse or office space for dead files.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What types of businesses in Dubai Investment Park use SafeStorage?</h3>
            <p className="text-gray-700">SafeStorage serves a wide variety of businesses in Dubai Investment Park, including manufacturing companies archiving production records and quality certificates, logistics firms storing excess inventory and equipment, food and beverage companies storing packaging and seasonal stock, professional services firms archiving client files and contracts, engineering companies storing drawings, specifications, and project documentation, and small business owners from DIP who need flexible overflow storage on monthly terms. We offer dedicated commercial storage consultants for business clients who need regular or high-volume storage solutions.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is Discovery Gardens covered for pickup and delivery?</h3>
            <p className="text-gray-700">Yes, Discovery Gardens is fully within our Dubai Investment Park service zone. We serve all clusters in Discovery Gardens — Mediterranean, Zen, Contemporary, Mogul, and Mesoamerican — with the same door-to-door pickup and delivery service available across all Dubai. Discovery Gardens residents frequently use our service for personal storage, seasonal items, renovation clearance, and between-lease storage. Typical pickup time from Discovery Gardens is 15–20 minutes. WhatsApp us on +971505773388 to check availability for your specific cluster and building.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How does SafeStorage handle document retrieval for DIP businesses?</h3>
            <p className="text-gray-700">When a DIP business needs to retrieve documents from storage, they simply contact their dedicated storage consultant by phone, WhatsApp, or email and specify which boxes or files are needed. Our team uses barcode indexing to locate the exact requested items in our facility and deliver them to the business&apos;s DIP address within 24–48 hours. For urgent requests, same-day delivery may be possible for items requested before noon. Retrievals within Dubai are handled door-to-door as part of our hassle-free service, with any additional fees disclosed in your contract before you book.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Are Motor City and Dubai Sports City covered by the DIP service zone?</h3>
            <p className="text-gray-700">Yes, both Motor City and Dubai Sports City are fully covered within our Dubai Investment Park service zone. Motor City, with its large residential towers and townhouse communities, is one of our most active residential pickup zones in southern Dubai. Sports City apartment residents are also frequent customers, particularly for sports equipment storage, personal storage during renovations, and between-lease storage. We know the communities well and our team can navigate Motor City and Sports City efficiently for fast pickups.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the pricing for commercial storage near Dubai Investment Park?</h3>
            <p className="text-gray-700">Commercial storage pricing for DIP and surrounding areas follows the same transparent volume-based model as all SafeStorage plans, starting from 12.60 AED / sqft (VAT-inclusive). For businesses, we also offer dedicated commercial units from 100 sq ft to 1,000+ sq ft. There are no setup fees, no long-term contracts required, and no hidden charges. Your dedicated commercial storage consultant will prepare a customised quote based on your specific volume, access requirements, and service frequency. Call +971505773388 or email us for a commercial quote.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can SafeStorage handle a full factory or warehouse clearance in DIP?</h3>
            <p className="text-gray-700">Yes, SafeStorage can handle large-scale commercial clearances in Dubai Investment Park. For full factory or warehouse clearances, we deploy a dedicated team with the appropriate number of trucks and staff based on the volume involved. We can clear entire facilities within a day or over multiple scheduled pickups based on your operational requirements. All items are catalogued, photographed, and stored in your dedicated units. We can then return specific items as your operations require them, making SafeStorage an effective short-term storage solution during major facility moves or upgrades.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage provide secure shredding for expired documents?</h3>
            <p className="text-gray-700">Yes, SafeStorage offers secure document shredding for records that have exceeded their required retention period. When you request shredding, we retrieve the specified boxes from storage and arrange for secure, certified destruction. You receive a certificate of destruction confirming the records have been destroyed in compliance with UAE data protection and privacy regulations. This service is particularly valuable for DIP and JAFZA businesses that must manage large volumes of regulatory records with specific retention and destruction requirements.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there student storage available near Dubai Production City and Studio City?</h3>
            <p className="text-gray-700">Yes, SafeStorage offers student storage plans for students at institutions near Dubai Production City and Dubai Studio City, including those studying at media, film, and broadcasting institutions in the area. Student storage plans are designed to be affordable and flexible, covering semester breaks when students return home and need to store their room&apos;s worth of belongings securely. Plans start from 12.60 AED / sqft (VAT-inclusive) and include door-to-door pickup from your accommodation and delivery back when your new semester begins. Contact us for our dedicated student storage discount.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do residents in the DIP residential community book storage?</h3>
            <p className="text-gray-700">Residents in the Dubai Investment Park residential community (DIP 1 and DIP 2 residential sections) can book storage by calling +971505773388, sending a WhatsApp message, or filling in the online quote form. The process takes just a few minutes: describe what you need to store (or share photos via WhatsApp), receive a transparent quote, confirm your preferred pickup date and time, and our team arrives at your door. Payment is by credit card, debit card, or bank transfer. Most DIP residential pickups can be confirmed within 24 hours of initial contact.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What items are NOT allowed in SafeStorage units?</h3>
            <p className="text-gray-700">For safety and regulatory compliance, certain items cannot be stored in SafeStorage units. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. We also cannot accept hazardous materials, flammable liquids and gases, explosives, perishable food, live plants or animals, illegal substances, currency or negotiable instruments, and items that emit strong odours. Vehicles with fuel in the tank should have the tank partially drained before storage. If you are unsure whether a specific item can be stored, contact us before booking and we will advise. The vast majority of household, business, and commercial items are fully acceptable for storage in our secure units.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
