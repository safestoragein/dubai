import PricingPage from "@/components/pricing/pricing-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Storage Pricing Dubai — From AED 99/Month",
  description:
    "Transparent storage pricing in Dubai starting from AED 99/month. Various unit sizes with flexible plans. Hassle-hassle-free pickup & delivery included. Call +971505773388 for best rates.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices, monthly storage cost, storage unit prices",
  openGraph: {
    title: "SafeStorage Pricing - Affordable Storage from AED 99",
    description: "Competitive storage rates in Dubai. All sizes available with hassle-free pickup & delivery. Call +971505773388.",
    url: "https://safestorage.ae/pricing",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Pricing"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Pricing - From AED 99/month",
    description: "Affordable storage units in Dubai with transparent pricing. Call +971505773388.",
    images: ["/twitter-pricing.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/pricing",
  },
}

const pricingSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/pricing#webpage',
    name: 'Storage Pricing Dubai | From AED 99/month',
    description: 'Transparent storage pricing in Dubai starting from AED 99/month. Various unit sizes with flexible plans. Hassle-free pickup & delivery included.',
    url: 'https://safestorage.ae/pricing',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Units Dubai — Transparent Pricing',
    description: 'Transparent storage pricing in Dubai. Hassle-free pickup & delivery included. Call +971505773388 for best rates.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/pricing',
    areaServed: { '@type': 'City', name: 'Dubai' },
    offers: [
      { '@type': 'Offer', name: 'Small Storage Unit (25-50 sq ft)', price: '199', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Medium Storage Unit (50-100 sq ft)', price: '599', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Large Storage Unit (100-200 sq ft)', price: '1299', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Extra Large Storage Unit (200+ sq ft)', price: '2499', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Vehicle Storage', price: '899', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://safestorage.ae/pricing' },
    ],
  },
]

export default function Pricing() {
  return (
    <>
      <SchemaScript schema={pricingSchemas} />
      <PricingPage />
      {/* Static rich-text section for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Pricing in Dubai — Transparent & Affordable</h2>
          <p className="text-lg text-gray-700 mb-8">
            SafeStorage Dubai offers some of the most competitive storage rates in the UAE. Our pricing is fully
            transparent — no hidden charges, no setup fees, and no long-term lock-ins. Choose a monthly plan that
            fits your budget and upgrade or downgrade at any time.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Small Unit</h3>
              <p className="text-sm text-gray-600 mb-2">25 – 50 sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">AED 199<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-600">Perfect for boxes, suitcases, small furniture & seasonal items</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Medium Unit</h3>
              <p className="text-sm text-gray-600 mb-2">50 – 100 sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">AED 599<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-600">Ideal for 1–2 bedroom apartment contents or business inventory</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Large Unit</h3>
              <p className="text-sm text-gray-600 mb-2">100 – 200 sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">AED 1,299<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-600">Suitable for 3 bedroom villa or full office clearance storage</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Extra Large</h3>
              <p className="text-sm text-gray-600 mb-2">200+ sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">AED 2,499<span className="text-base font-normal text-gray-500">/mo</span></p>
              <p className="text-sm text-gray-600">For large villas, full business stock & commercial requirements</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">What's Included in Every Storage Plan</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="mb-2">✓ <strong>Climate-controlled unit</strong> — 20–25°C maintained year-round</p>
                <p className="mb-2">✓ <strong>24/7 CCTV security</strong> — HD cameras monitoring all areas</p>
                <p className="mb-2">✓ <strong>Biometric access</strong> — only you can access your unit</p>
                <p className="mb-2">✓ <strong>Fire protection</strong> — detection and suppression systems</p>
              </div>
              <div>
                <p className="mb-2">✓ <strong>Free insurance</strong> — up to AED 5,000 coverage included</p>
                <p className="mb-2">✓ <strong>Pickup &amp; delivery</strong> — free across Dubai</p>
                <p className="mb-2">✓ <strong>No hidden fees</strong> — price quoted is price charged</p>
                <p className="mb-2">✓ <strong>Flexible terms</strong> — cancel anytime, no penalties</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Long-Term Storage Discounts</h3>
            <p className="text-gray-700 mb-4">
              Planning to store for 3 months or more? SafeStorage rewards commitment with attractive discounts:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>3-month prepaid:</strong> Save 10% on total storage cost</li>
              <li>• <strong>6-month prepaid:</strong> Save 15% on total storage cost</li>
              <li>• <strong>12-month prepaid:</strong> Save 20% on total storage cost</li>
              <li>• <strong>Business accounts:</strong> Custom rates available for multi-unit or long-term commercial arrangements</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Vehicle Storage Rates</h3>
            <p className="text-gray-700 mb-3">
              SafeStorage provides secure covered parking and storage bays for cars, motorcycles, boats, jet skis,
              and caravans. Vehicle storage starts from <strong>AED 899 per month</strong> and includes 24/7 CCTV
              monitoring, covered protection from the elements, and battery maintenance services for long-term stays.
              Our facility is ideal for expats leaving Dubai temporarily, classic car collectors, and owners of
              seasonal recreational vehicles.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions About Pricing</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">Are there any setup or admin fees?</p>
                <p>No. SafeStorage charges no setup, admin, or registration fees. You only pay the monthly storage rate.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Is pickup and delivery really free?</p>
                <p>Yes. Pickup and delivery within Dubai is included in your storage plan at no extra cost. There are no fuel or handling surcharges.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">What payment methods are accepted?</p>
                <p>We accept credit/debit cards (Visa, Mastercard), bank transfer, cash, and cheques. Monthly, quarterly, or annual billing is available.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Can I get a custom quote for large amounts of storage?</p>
                <p>Absolutely. For villa clearances, office moves, or bulk commercial storage, call +971505773388 for a tailored quote with preferential rates.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Get an exact quote for your storage needs in under 2 minutes.
            </p>
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
