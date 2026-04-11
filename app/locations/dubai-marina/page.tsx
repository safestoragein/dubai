import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Furniture Storage — Dubai Marina & JBR Renovation",
  description:
    "Renovating your Dubai Marina or JBR apartment? Store furniture safely during renovation — from 1 week. Short-term storage between leases also available. Free pickup from Marina & JBR. Call +971505773388.",
  keywords:
    "furniture storage during renovation dubai marina, short term storage between leases JBR dubai, storage JBR dubai, storage during renovation marina, temporary furniture storage marina, lease gap storage dubai marina",
  openGraph: {
    title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
    description: "Short-term storage during renovations or between leases in Dubai Marina & JBR. Free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-marina",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-marina",
  },
}

const dubaiMarinaSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Near Dubai Marina & JBR',
    description: 'Furniture storage during renovation in Dubai Marina & JBR. Short-term storage between leases. Free pickup from Marina & JBR.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/dubai-marina',
    areaServed: [
      { '@type': 'Place', name: 'Dubai Marina' },
      { '@type': 'Place', name: 'JBR' },
      { '@type': 'Place', name: 'Bluewaters' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/dubai-marina#webpage',
    name: 'Furniture Storage During Renovation Dubai Marina & JBR',
    description: 'Renovating your Dubai Marina apartment? Store furniture safely during renovation. Free pickup from Marina & JBR.',
    url: 'https://safestorage.ae/locations/dubai-marina',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Dubai Marina', item: 'https://safestorage.ae/locations/dubai-marina' },
    ],
  },
]

export default function DubaiMarinaPage() {
  return (
    <>
    <SchemaScript schema={dubaiMarinaSchemas} />
    <LocationPage
      location="Dubai Marina"
      areas={["Dubai Marina", "JBR", "Marina Walk", "Dubai Marina Mall area", "Bluewaters"]}
      distance="15-20 minutes"
      benefits={[
        "Hassle-hassle-free pickup from your Marina apartment",
        "Quick access via Sheikh Zayed Road",
        "Ideal for Marina residents downsizing",
        "Perfect for storing beach and water sports equipment"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Near Dubai Marina &amp; JBR</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage provides premium, climate-controlled storage for residents of Dubai Marina, Jumeirah Beach
          Residence (JBR), Marina Walk, and Bluewaters Island. Our facility is easily accessible from Sheikh Zayed
          Road, with free pickup and delivery service direct to your doorstep across the Marina area.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Furniture Storage During Renovation — Dubai Marina</h3>
            <p className="text-gray-700 mb-3">
              Dubai Marina and JBR apartments frequently undergo renovations, and storing furniture during that
              period is a common challenge. SafeStorage makes it simple: we collect your sofas, beds, dining
              tables, wardrobes, and appliances from your apartment, store them in a fully climate-controlled unit,
              and return everything once your renovation is complete.
            </p>
            <p className="text-gray-700">
              Our short-term storage plans start from as little as 1 week, with no minimum contract required.
              Prices are transparent and based on the volume of items stored, not a fixed unit size. This makes
              SafeStorage the most flexible and cost-effective option for Marina residents.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Short-Term Storage Between Leases — JBR</h3>
            <p className="text-gray-700 mb-3">
              The gap between lease end dates and new tenancy start dates is one of the most stressful periods
              for Dubai Marina residents. SafeStorage bridges that gap, storing your belongings safely for days,
              weeks, or months while you transition between apartments.
            </p>
            <p className="text-gray-700">
              With same-day pickup available (for requests before 12 PM) and next-day delivery, you can move out
              of one property, place your items in secure storage, and collect them when your new home is ready.
              Our team handles all the heavy lifting at both ends.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Covered from Our Dubai Marina Service Zone</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Marina &amp; JBR</p>
              <ul className="space-y-1 text-sm">
                <li>• Dubai Marina Towers</li>
                <li>• Jumeirah Beach Residence</li>
                <li>• Marina Walk</li>
                <li>• The Walk at JBR</li>
                <li>• Bluewaters Island</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Nearby Communities</p>
              <ul className="space-y-1 text-sm">
                <li>• JLT (Jumeirah Lake Towers)</li>
                <li>• Dubai Media City</li>
                <li>• Dubai Internet City</li>
                <li>• Knowledge Park</li>
                <li>• Al Sufouh</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Palm &amp; Beyond</p>
              <ul className="space-y-1 text-sm">
                <li>• Palm Jumeirah</li>
                <li>• The Greens</li>
                <li>• The Views</li>
                <li>• Dubai Sports City</li>
                <li>• Motor City</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Popular Storage Uses in Dubai Marina</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Apartment renovation storage:</strong> Keep your furniture and belongings protected while contractors work</li>
            <li>• <strong>Between-lease storage:</strong> Bridge the gap between old and new tenancy with flexible short-term plans</li>
            <li>• <strong>Downsizing storage:</strong> Moving to a smaller unit? Keep the overflow in secure climate-controlled storage</li>
            <li>• <strong>Beach &amp; water sports equipment:</strong> Kayaks, paddleboards, jet skis, and sports gear stored safely year-round</li>
            <li>• <strong>Expat repatriation storage:</strong> Keep belongings safely in Dubai while you decide what to ship home</li>
            <li>• <strong>Seasonal items:</strong> Holiday decorations, winter clothes, and items not needed year-round</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Need storage in Dubai Marina or JBR? Get your free quote now.
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