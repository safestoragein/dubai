import ServicesPage from "@/components/services/services-page"
import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Services Dubai | Personal, Business & Vehicle | +971505773388",
  description:
    "Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage in Dubai. Climate-controlled with 24/7 security. Call +971505773388.",
  keywords:
    "storage services dubai, personal storage, business storage, document storage, vehicle storage, self storage dubai, climate controlled storage, secure storage dubai, furniture storage, moving storage",
  openGraph: {
    title: "SafeStorage Services - Personal, Business & Vehicle Storage",
    description: "Complete storage solutions in Dubai. Climate-controlled units, 24/7 security, hassle-free pickup. Call +971505773388.",
    url: "https://safestorage.ae/services",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Services"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Services Dubai | +971505773388",
    description: "Personal, business & vehicle storage solutions with hassle-free pickup & delivery.",
    images: ["/twitter-services.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/services",
  },
}

const servicesSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/services#webpage',
    name: 'Storage Services Dubai | Personal, Business & Vehicle',
    description: 'Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage in Dubai.',
    url: 'https://safestorage.ae/services',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://safestorage.ae/services' },
    ],
  },
]

export default function Services() {
  return (
    <>
      <SchemaScript schema={servicesSchemas} />
      <ServicesPage />
      {/* Static rich-text section for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Complete Storage Services in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai offers a comprehensive range of secure, climate-controlled storage services designed for
            individuals, families, and businesses across Dubai. Whether you need to store furniture during a renovation,
            keep business inventory safe, or find a long-term solution for household items, we have the right storage
            unit for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Personal & Household Storage</h3>
              <p className="text-gray-700 mb-3">
                Our personal storage units are ideal for Dubai residents who need extra space at home. Store seasonal
                clothes, sports equipment, holiday decorations, bicycles, and bulky furniture in climate-controlled
                units that protect your belongings from Dubai's extreme heat and humidity. We offer units starting from
                25 sq ft up to 300+ sq ft, so you only pay for the space you actually need.
              </p>
              <p className="text-gray-700">
                Our hassle-free pickup service means you never need to rent a truck or struggle with heavy lifting.
                Our trained team collects your items from your home, packs them securely if needed, and returns them
                to you whenever you call. Most Dubai areas are covered with same-day or next-day pickup options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Business & Commercial Storage</h3>
              <p className="text-gray-700 mb-3">
                Businesses across Dubai trust SafeStorage for flexible, cost-effective storage of office furniture,
                retail inventory, documents, equipment, and seasonal stock. Our commercial storage solutions help
                companies reduce overhead costs by eliminating the need for expensive warehouse space.
              </p>
              <p className="text-gray-700">
                We serve startups, SMEs, and large corporations with dedicated storage consultants, flexible monthly
                plans, and the option to scale storage space up or down as your business needs change. Regular
                delivery and retrieval services keep your supply chain running smoothly.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Furniture Storage Dubai</h3>
              <p className="text-gray-700">
                Renovating your home or moving between apartments? Our dedicated furniture storage service keeps
                sofas, beds, wardrobes, dining tables, and appliances safe during transition periods. All furniture
                is wrapped in protective covers, stored on raised platforms to prevent moisture damage, and kept in
                temperature-controlled units to avoid warping, cracking, or fading. Storage periods range from
                1 week to multiple years with no long-term lock-in required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Vehicle & Car Storage</h3>
              <p className="text-gray-700">
                SafeStorage offers covered, secure vehicle storage for cars, motorcycles, boats, jet skis, and
                caravans. Our vehicle storage bays are monitored by 24/7 CCTV cameras, protected by perimeter
                security, and include battery maintenance options for long-term storage. Ideal for expatriates
                returning home temporarily, owners of seasonal vehicles, and collectors needing secure facilities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Document & Archive Storage</h3>
              <p className="text-gray-700">
                Businesses and professionals needing secure document storage in Dubai rely on SafeStorage for
                compliant, organised archive solutions. Our document storage service includes fireproof units,
                barcode-indexed retrieval, and secure shredding for expired records. Meeting Dubai and UAE
                regulatory requirements for document retention has never been easier.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Climate-Controlled Storage</h3>
              <p className="text-gray-700">
                All SafeStorage units in Dubai are fully climate-controlled, maintaining temperatures between 20°C
                and 25°C and humidity between 45% and 55% year-round. This prevents damage to electronics, wooden
                furniture, artwork, wine, musical instruments, leather goods, and sensitive documents. Dubai's
                summer temperatures regularly exceed 45°C outdoors — climate control is not optional, it's essential.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-4">Why Choose SafeStorage Dubai?</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Free Pickup &amp; Delivery:</strong> We collect from anywhere in Dubai and return your items on demand — no truck rental needed.</li>
              <li><strong>24/7 Security:</strong> HD CCTV, biometric access control, individual unit alarms, and on-site security personnel protect your belongings around the clock.</li>
              <li><strong>Flexible Plans:</strong> Monthly contracts with no long-term commitment required. Scale up or down at any time.</li>
              <li><strong>Free Insurance:</strong> Every unit comes with complimentary insurance coverage up to AED 5,000, with optional extended coverage available.</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees, no surprise charges. Prices include storage, climate control, security, and basic insurance.</li>
              <li><strong>Professional Packing:</strong> Our team offers expert packing services using quality materials to ensure your items arrive safely.</li>
              <li><strong>Dedicated Consultant:</strong> Every customer gets a personal storage consultant available via phone, WhatsApp, or email.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Ready to find the perfect storage solution in Dubai? Get your free, no-obligation quote today.
            </p>
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
