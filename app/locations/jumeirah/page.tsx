import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Expat Storage Dubai Moving Back Home | Jumeirah Storage | SafeStorage",
  description:
    "Moving back home from Jumeirah or leaving Dubai? SafeStorage offers expat-friendly storage — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms, trusted by 500+ expats. Call +971505773388.",
  keywords:
    "expat storage dubai moving back home, jumeirah expat storage, leaving dubai storage, storage for expats dubai, moving out storage jumeirah, temporary storage expat dubai, repatriation storage dubai",
  openGraph: {
    title: "Expat Storage Dubai Moving Back Home | Jumeirah | SafeStorage",
    description: "Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/jumeirah",
  },
}

const jumeirahSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Expat & Villa Storage Near Jumeirah Dubai',
    description: 'Expat-friendly storage in Jumeirah — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms, trusted by 500+ expats.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/jumeirah',
    areaServed: [
      { '@type': 'Place', name: 'Jumeirah' },
      { '@type': 'Place', name: 'Umm Suqeim' },
      { '@type': 'Place', name: 'Al Safa' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/jumeirah#webpage',
    name: 'Expat Storage Dubai Moving Back Home | Jumeirah Storage',
    description: 'Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, free pickup.',
    url: 'https://safestorage.ae/locations/jumeirah',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Jumeirah', item: 'https://safestorage.ae/locations/jumeirah' },
    ],
  },
]

export default function JumeirahPage() {
  return (
    <>
    <SchemaScript schema={jumeirahSchemas} />
    <LocationPage
      location="Jumeirah"
      areas={["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Safa", "Al Wasl"]}
      distance="20-25 minutes"
      benefits={[
        "Hassle-hassle-free pickup from Jumeirah villas",
        "Perfect for villa renovations",
        "Seasonal storage for beach equipment",
        "Secure storage for luxury items"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage for Jumeirah Residents &amp; Expats</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage provides trusted, climate-controlled storage for villa owners, families, and expatriates
          across Jumeirah 1, 2, 3, Umm Suqeim, Al Safa, and Al Wasl. Whether you are renovating your Jumeirah
          villa, preparing to move back home, or simply need extra space, our free pickup and delivery service
          makes storing easy from anywhere in Jumeirah.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Expat Storage — Moving Back Home from Dubai</h3>
            <p className="text-gray-700 mb-3">
              Thousands of expatriates leave Dubai every year, and deciding what to ship, sell, or store is one
              of the biggest challenges. SafeStorage offers expat-friendly storage solutions that let you keep
              your belongings safely in Dubai while you settle in your home country and figure out what you
              want to do with them.
            </p>
            <p className="text-gray-700">
              Our flexible month-to-month plans have no lock-in period and no cancellation penalties. Items can
              be shipped internationally on request, or returned to a Dubai address if you come back. Trusted
              by hundreds of expats from Jumeirah, Umm Suqeim, and Al Wasl communities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Renovation Storage — Jumeirah</h3>
            <p className="text-gray-700 mb-3">
              Jumeirah villas are frequently renovated, and managing furniture during a major renovation can be
              chaotic. SafeStorage provides comprehensive villa storage — we collect all your furniture,
              appliances, and personal items from your Jumeirah property, store them in climate-controlled
              security, and return everything once your renovation is complete.
            </p>
            <p className="text-gray-700">
              Our team is experienced with high-value furniture and can wrap, protect, and store antiques,
              custom furniture, and luxury items with the care they deserve. Storage periods range from 2 weeks
              to multiple years with no long-term commitment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">What Jumeirah Residents Store with SafeStorage</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>• Villa furniture during renovation or sale</li>
              <li>• Antiques and high-value collectibles</li>
              <li>• Luxury wardrobe and seasonal clothing</li>
              <li>• Children&apos;s items and toys between growth stages</li>
              <li>• Beach gear, kayaks, and paddleboards</li>
            </ul>
            <ul className="space-y-2">
              <li>• Household appliances not in current use</li>
              <li>• Art, sculptures, and decorative items</li>
              <li>• Office equipment and business documents</li>
              <li>• Bicycles and outdoor sports equipment</li>
              <li>• Personal belongings during extended travel</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Jumeirah &amp; Surrounding Communities</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
            <ul className="space-y-1">
              <li>• Jumeirah 1</li>
              <li>• Jumeirah 2</li>
              <li>• Jumeirah 3</li>
              <li>• Umm Suqeim 1, 2, 3</li>
            </ul>
            <ul className="space-y-1">
              <li>• Al Safa 1 &amp; 2</li>
              <li>• Al Wasl</li>
              <li>• Madinat Jumeirah area</li>
              <li>• Satwa</li>
            </ul>
            <ul className="space-y-1">
              <li>• Mankhool</li>
              <li>• Bur Dubai</li>
              <li>• Al Quoz</li>
              <li>• City Walk area</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Jumeirah resident looking for secure, flexible storage? Get your free quote now.
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