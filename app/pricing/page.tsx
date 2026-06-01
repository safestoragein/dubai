import PricingPage from "@/components/pricing/pricing-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Storage Pricing Dubai — From 12.6 AED / Sqft",
  description:
    "Transparent storage pricing in Dubai from 12.6 AED / Sqft (VAT-inclusive). Various unit sizes with flexible plans. Hassle-free pickup & delivery included. Call +971505773388 for best rates.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices, monthly storage cost, storage unit prices",
  openGraph: {
    title: "SafeStorage Pricing - Storage from 12.6 AED / Sqft",
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
    title: "SafeStorage Pricing - From 12.6 AED / Sqft",
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
    name: 'Storage Pricing Dubai | From 12.6 AED / Sqft',
    description: 'Transparent storage pricing in Dubai from 12.6 AED / Sqft (VAT-inclusive). Various unit sizes with flexible plans. Hassle-free pickup & delivery included.',
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
      { '@type': 'Offer', name: 'Small Storage Unit (25-50 sq ft)', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.6', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Medium Storage Unit (50-100 sq ft)', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.6', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Large Storage Unit (100-200 sq ft)', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.6', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Extra Large Storage Unit (200+ sq ft)', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.6', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Vehicle Storage', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.6', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
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
              <p className="text-2xl font-bold text-[#D8315B] mb-2">from 12.6 AED / Sqft</p>
              <p className="text-sm text-gray-600">Perfect for boxes, suitcases, small furniture & seasonal items</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Medium Unit</h3>
              <p className="text-sm text-gray-600 mb-2">50 – 100 sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">from 12.6 AED / Sqft</p>
              <p className="text-sm text-gray-600">Ideal for 1–2 bedroom apartment contents or business inventory</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Large Unit</h3>
              <p className="text-sm text-gray-600 mb-2">100 – 200 sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">from 12.6 AED / Sqft</p>
              <p className="text-sm text-gray-600">Suitable for 3 bedroom villa or full office clearance storage</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <h3 className="font-bold text-[#0A2463] mb-2">Extra Large</h3>
              <p className="text-sm text-gray-600 mb-2">200+ sq ft</p>
              <p className="text-2xl font-bold text-[#D8315B] mb-2">from 12.6 AED / Sqft</p>
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
              and caravans. Vehicle storage starts from <strong>12.6 AED / Sqft</strong> and includes 24/7 CCTV
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

      {/* Complete Storage Pricing Guide — extensive SEO content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">

          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Complete Storage Pricing Guide for Dubai</h2>
          <p className="text-lg text-gray-700 mb-8">
            Understanding exactly what you are paying for before you commit to a storage plan is important. This guide covers every aspect of SafeStorage Dubai&apos;s pricing — our single, transparent rate of 12.6 AED / Sqft (VAT-inclusive), long-term discounts, VAT information, and what is included in every single plan at no extra charge.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">One Simple, Transparent Price</h3>
            <p className="text-gray-700 mb-6">SafeStorage Dubai keeps pricing simple. Whether you are storing a few boxes or clearing an entire villa, our rate starts from <strong>12.6 AED / Sqft</strong> (VAT-inclusive). You pay only for the space you actually use, with no wasted space and no unnecessary charges — one clear price for every storage need.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-[#0A2463]">
                <h4 className="font-bold text-[#0A2463] text-lg mb-3">Flexible Item & Box Storage</h4>
                <p className="text-gray-700 mb-4">Ideal for customers storing fewer than 20–25 items. Each item is individually catalogued, photographed, and stored. You pay only for the space your belongings occupy — starting from <strong>12.6 AED / Sqft</strong>.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cardboard boxes and small items</li>
                  <li>• Suitcases and bags</li>
                  <li>• Bicycles and mattresses</li>
                  <li>• Chairs and small furniture</li>
                  <li>• Sofas, wardrobes, and large appliances</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-[#D8315B]">
                <h4 className="font-bold text-[#0A2463] text-lg mb-3">Dedicated Private Units</h4>
                <p className="text-gray-700 mb-4">Rent a private, dedicated storage unit measured by square footage. Ideal for full apartment contents, villa clearances, or business inventory. The rate is the same simple <strong>12.6 AED / Sqft</strong>, whatever size you need.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Small unit (25–50 sq ft)</li>
                  <li>• Medium unit (50–100 sq ft)</li>
                  <li>• Large unit (100–200 sq ft)</li>
                  <li>• Extra Large (200+ sq ft)</li>
                  <li>• Vehicle, motorcycle, and boat bays</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Everything Included — Zero Hidden Charges</h3>
            <p className="text-gray-700 mb-5">Many storage companies in Dubai advertise a low headline rate but then add charges for climate control, insurance, pickup, delivery, and administration. At SafeStorage, every plan — at every price point — includes all of the following with absolutely no additional charge:</p>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#0A2463]">Climate Control (18–22°C)</p>
                  <p className="text-sm">Industrial HVAC systems maintain optimal temperature and 45–55% humidity in every unit year-round. Protects furniture, electronics, documents, clothing, and artwork from Dubai&apos;s extreme heat and humidity fluctuations. This is not an upgrade — it is standard.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">Hassle-Free Door-to-Door Pickup in Dubai</p>
                  <p className="text-sm">Our professional team collects your belongings from any Dubai address at your chosen time. They bring all necessary equipment, wrap furniture, and handle all heavy lifting. No van rental, no labour charges, no fuel surcharges. Completely free.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">Hassle-Free Return Delivery in Dubai</p>
                  <p className="text-sm">When you need items back, we deliver them to your door within 24–48 hours at no charge. Same-day delivery is available for urgent requests. Partial retrieval — getting some but not all items back — is also free.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#0A2463]">Free Insurance Up to AED 5,000</p>
                  <p className="text-sm">Every storage plan automatically includes complimentary insurance coverage protecting against fire, theft, flood, and accidental damage. Coverage applies from the moment our team picks up your items. No paperwork, no waiting — it is automatic.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">24/7 Multi-Layer Security</p>
                  <p className="text-sm">HD CCTV covering every area of the facility, biometric access control on all units, individual unit alarms, fire detection and suppression systems, and on-site security personnel. Your belongings are protected every hour of every day.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">Dedicated Storage Consultant</p>
                  <p className="text-sm">Every customer is assigned a personal consultant who manages pickups, deliveries, account queries, and any special requirements. You always have one point of contact who knows your account in detail — no call centres, no being transferred between departments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">VAT Information — All Prices Are Inclusive</h3>
            <p className="text-gray-700 mb-4">
              The UAE Government applies a 5% Value Added Tax (VAT) to storage services. All prices quoted by SafeStorage Dubai are fully VAT-inclusive. You will never see a VAT charge added at checkout — what we quote is what you pay. A VAT-compliant tax invoice is issued automatically each month for every customer, which can be used for business accounting and expense claims. SafeStorage Dubai is a registered VAT entity in the UAE.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Unit Size Guide — How Much Storage Do You Need?</h3>
            <p className="text-gray-700 mb-5">Choosing the right storage unit size is crucial — too small and your items do not fit, too large and you overpay. Our consultants provide free volume assessments, but the following guide covers most common scenarios:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700 border-collapse">
                <thead>
                  <tr className="bg-[#0A2463] text-white">
                    <th className="p-3 text-left rounded-tl-lg">Unit Size</th>
                    <th className="p-3 text-left">Square Footage</th>
                    <th className="p-3 text-left">Best For</th>
                    <th className="p-3 text-left rounded-tr-lg">Monthly Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-semibold">Small</td>
                    <td className="p-3">25–50 sq ft</td>
                    <td className="p-3">10–20 boxes, studio apartment, seasonal items, suitcases, small furniture</td>
                    <td className="p-3 font-bold text-[#D8315B]">from 12.6 AED / Sqft</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-semibold">Medium</td>
                    <td className="p-3">50–100 sq ft</td>
                    <td className="p-3">1–2 bedroom apartment, small office clearance, 20–50 boxes plus furniture</td>
                    <td className="p-3 font-bold text-[#D8315B]">from 12.6 AED / Sqft</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-3 font-semibold">Large</td>
                    <td className="p-3">100–200 sq ft</td>
                    <td className="p-3">3–4 bedroom villa contents, large office clearance, commercial inventory</td>
                    <td className="p-3 font-bold text-[#D8315B]">from 12.6 AED / Sqft</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-3 font-semibold">Extra Large</td>
                    <td className="p-3">200+ sq ft</td>
                    <td className="p-3">Full villa, large business stock, warehouse overflow, commercial requirements</td>
                    <td className="p-3 font-bold text-[#D8315B]">from 12.6 AED / Sqft</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold rounded-bl-lg">Vehicle</td>
                    <td className="p-3">Covered bay</td>
                    <td className="p-3">Cars, motorcycles, boats, jet skis, caravans — indoor covered secure bays</td>
                    <td className="p-3 font-bold text-[#D8315B] rounded-br-lg">from 12.6 AED / Sqft</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 15 pricing FAQ items */}
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6 mt-4">Frequently Asked Questions About Storage Pricing in Dubai</h2>

          <div className="space-y-5 mb-10">

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">1. What is the cheapest storage option available at SafeStorage Dubai?</h3>
              <p className="text-gray-700">Our storage starts from just 12.6 AED / Sqft (VAT-inclusive). This is perfect for customers who only need to store a few things and do not want to pay for an entire private unit — you pay only for the space your belongings actually use. Contact us for an accurate quote based on exactly what you need to store.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">2. Is there a security deposit required to start storage?</h3>
              <p className="text-gray-700">No. SafeStorage Dubai does not require a security deposit to start your storage plan. There are no upfront deposits, no registration fees, and no administration charges. You simply pay your first month of storage in advance when you confirm your booking, and subsequent months are billed on your chosen billing cycle — monthly, quarterly, or annually. This makes it easy to start storing without any large upfront financial commitment.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">3. Do prices increase after I have been a customer for several months?</h3>
              <p className="text-gray-700">SafeStorage is committed to pricing stability. For customers on fixed-term plans (3, 6, or 12 months prepaid), your price is locked in for the entire term and cannot be changed. For customers on rolling monthly plans, any price adjustment would be communicated with a minimum of 30 days&apos; written notice before the change takes effect, giving you ample time to adjust your plans or switch to a prepaid plan that locks in your current rate.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">4. How are storage prices calculated for irregular or oversized items?</h3>
              <p className="text-gray-700">For standard items, our fixed item pricing applies. For oversized, unusually shaped, or very heavy items — such as a grand piano, industrial machinery, large sculpture, or oversized vehicle — our team will provide a custom quote. This is typically calculated based on the floor space or volume the item occupies in our facility. Send us photos via WhatsApp to +971505773388 and we will provide a quote within hours for any unusual item.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">5. Are there any additional charges for accessing my items?</h3>
              <p className="text-gray-700">No. Accessing your items — whether by visiting the facility personally or requesting a delivery — is included in your monthly plan at no extra charge. There are no per-visit fees, no access surcharges, and no charges for partial retrievals. The only scenario where an additional fee applies is if you request delivery outside Dubai (such as to Sharjah, Abu Dhabi, or Al Ain), in which case a small fixed transport fee applies, which your consultant will confirm before the delivery is scheduled.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">6. Can I get a corporate or bulk storage discount?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai offers preferential corporate rates for businesses storing large volumes of items, multiple storage units, or with ongoing high-frequency pickup and delivery requirements. Corporate accounts include custom pricing, dedicated account management, itemised monthly invoicing, multi-user access credentials, and priority scheduling. Contact our business team on +971505773388 or email safestoragedubai@gmail.com to discuss your organisation&apos;s storage requirements and receive a customised commercial proposal.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">7. Is packing material included in the storage price?</h3>
              <p className="text-gray-700">Standard furniture wrapping materials — protective blankets, bubble wrap for fragile items, and strapping — are included in the cost of our pickup service at no additional charge. Additional packing materials such as cardboard boxes, tape, wardrobe boxes, and mattress bags are available for purchase at competitive prices. If you want our team to fully pack your home or office from scratch, our professional packing service is available at an additional per-hour fee — ask your consultant for a packing service quote when you book your pickup.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">8. What is the best value storage option for someone moving apartments in Dubai?</h3>
              <p className="text-gray-700">For apartment moves in Dubai — where there is often a gap between your old tenancy ending and your new tenancy beginning — our medium unit (50–100 sq ft) at 12.6 AED / Sqft is typically the best value option for a one to two-bedroom apartment. This includes hassle-free pickup from your old apartment, climate-controlled storage for the duration between leases, and hassle-free delivery to your new address. Compared to the cost of rush storage elsewhere or keeping a hotel room, SafeStorage is significantly more economical and completely hassle-free.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">9. Do you offer any student storage discounts in Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai partners with several universities and higher education institutions in Dubai to offer student storage discounts. Students can access our storage plans from 12.6 AED / Sqft, which is ideal for storing belongings between semesters or during summer holidays. Mention your student status and university affiliation when requesting a quote and we will apply the applicable student discount. Student plans are available on a minimum one-month basis with no long-term commitment required.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">10. How does billing work — monthly, quarterly, or annually?</h3>
              <p className="text-gray-700">SafeStorage offers flexible billing cycles to suit your preferences. Monthly billing is the default option — you pay one month in advance and continue month-by-month with no commitment. Quarterly billing (every three months) offers a 10% discount. Semi-annual billing (every six months) offers a 15% discount. Annual billing (pay once per year) offers the maximum 20% discount. You can switch billing cycles at any time by contacting your storage consultant. All billing is handled via secure online payment, bank transfer, cash, or cheque.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">11. What is the cost of upgrading to higher insurance coverage?</h3>
              <p className="text-gray-700">Every SafeStorage plan includes free insurance up to AED 5,000. For customers with higher-value items — artwork, jewellery, antique furniture, high-end electronics, or luxury goods — we offer enhanced insurance options at competitive rates. Enhanced coverage typically ranges from AED 20 to AED 80 per month depending on the declared value of your items and the level of coverage required. Our team will help you assess the value of your stored belongings and recommend the appropriate coverage level when you sign up.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">12. Are document storage rates different from regular storage?</h3>
              <p className="text-gray-700">Document and archive storage follows a separate pricing structure designed for businesses and individuals needing to store large volumes of paper records. Our document storage service includes indexed cataloguing of all boxes for easy retrieval, fireproof storage areas with enhanced fire suppression systems, humidity-controlled archival conditions to prevent paper deterioration, and a same-day retrieval service for urgent document access. Document storage starts from 12.6 AED / Sqft (VAT-inclusive). Call +971505773388 for a detailed document storage quotation.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">13. What does same-day pickup cost?</h3>
              <p className="text-gray-700">Same-day pickup for requests made before 12 PM on any day is available at no additional charge. It is included in the standard hassle-free pickup service that comes with every storage plan. Subject to availability, our team will arrive at your address the same day, typically within 4 to 6 hours of booking confirmation. For very last-minute requests where same-day pickup is needed urgently (for example, a sudden eviction or emergency relocation), call +971505773388 directly and our dispatch team will confirm availability immediately.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">14. Can I see a full cost breakdown before committing?</h3>
              <p className="text-gray-700">Absolutely. Before you confirm any storage plan, SafeStorage provides a detailed written quote showing the monthly storage fee, what is included, any optional add-ons you have requested, and the VAT breakdown. You will never be asked to pay or sign anything without seeing a full cost breakdown first. Our quotes are valid for 14 days, giving you time to compare options and make a decision without pressure. To receive your personalised quote, call +971505773388 or fill in the online quote form on this website.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">15. What is the price for storing a full villa worth of furniture in Dubai?</h3>
              <p className="text-gray-700">For a typical 4–5 bedroom villa with full furniture, appliances, and personal belongings, a Large or Extra Large unit is usually required, starting from 12.6 AED / Sqft (VAT-inclusive). This includes hassle-free pickup from your villa, climate-controlled storage, 24/7 security, free insurance, and hassle-free delivery back whenever required. For very large villas or homes with significant volumes of items, we recommend requesting a free volume assessment — our consultant will visit your property to measure and advise on the exact unit size needed, ensuring you do not pay for more space than necessary.</p>
            </div>

          </div>

          <div className="text-center bg-gradient-to-r from-[#0A2463] to-[#3E92CC] rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Get a Precise, No-Obligation Pricing Quote</h3>
            <p className="text-white/85 mb-6 text-lg">Our storage consultants are available 7 days a week. Call us, WhatsApp us, or fill in the online form — we respond within 15 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c02a50] transition-colors"
              >
                Get Free Quote Online
              </Link>
              <a
                href="tel:+971505773388"
                className="inline-block bg-white text-[#0A2463] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Call +971505773388
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
