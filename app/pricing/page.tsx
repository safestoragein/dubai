import PricingPage from "@/components/pricing/pricing-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Storage Pricing Dubai — From 12.60 AED / sqft",
  description:
    "Transparent storage pricing in Dubai from 12.60 AED / sqft (VAT-inclusive). Various unit sizes with flexible plans. Hassle-free pickup & delivery included. Call +971505773388 for best rates.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices, monthly storage cost, storage unit prices",
  openGraph: {
    title: "SafeStorage Pricing - Storage from 12.60 AED / sqft",
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
    title: "SafeStorage Pricing - From 12.60 AED / sqft",
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
    name: 'Storage Pricing Dubai | From 12.60 AED / sqft',
    description: 'Transparent storage pricing in Dubai from 12.60 AED / sqft (VAT-inclusive). Various unit sizes with flexible plans. Hassle-free pickup & delivery included.',
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
      { '@type': 'Offer', name: 'Storage in Dubai', priceSpecification: { '@type': 'UnitPriceSpecification', price: '12.60', priceCurrency: 'AED', unitText: 'per sq ft' }, availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
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

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-10 border-2 border-[#0A2463] text-center max-w-xl w-full">
              <p className="text-2xl md:text-3xl font-bold text-[#0A2463]">Pricing starts from 12.60 AED / sqft</p>
              <p className="text-sm text-gray-500 mt-3">VAT-inclusive · secure indoor storage · hassle-free pickup &amp; delivery included</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">What's Included in Every Storage Plan</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="mb-2">✓ <strong>Secure indoor unit</strong> — clean, dust-protected storage</p>
                <p className="mb-2">✓ <strong>24/7 CCTV security</strong> — HD cameras monitoring all areas</p>
                <p className="mb-2">✓ <strong>Fire protection</strong> — detection and suppression systems</p>
              </div>
              <div>
                <p className="mb-2">✓ <strong>Free insurance</strong> — up to AED 5,000 coverage included</p>
                <p className="mb-2">✓ <strong>Pickup &amp; delivery</strong> — hassle-free door-to-door across Dubai</p>
                <p className="mb-2">✓ <strong>No hidden fees</strong> — price quoted is price charged</p>
                <p className="mb-2">✓ <strong>Flexible terms</strong> — cancel anytime, no penalties</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Long-Term Storage Discounts</h3>
            <p className="text-gray-700 mb-4">
              Planning to store for the longer term? SafeStorage rewards commitment with a wide range of discounts:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Prepaid plans:</strong> Save more when you pay several months upfront</li>
              <li>• <strong>Long-term storage:</strong> The longer you store, the bigger your discount</li>
              <li>• <strong>Business accounts:</strong> Custom rates available for multi-unit or long-term commercial arrangements</li>
              <li>• <strong>Best rate guaranteed:</strong> Contact our team for the best available discount on your storage duration</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Vehicle Storage Rates</h3>
            <p className="text-gray-700 mb-3">
              SafeStorage provides secure covered parking and storage bays for cars, motorcycles, boats, jet skis,
              and caravans. Vehicle storage starts from <strong>12.60 AED / sqft</strong> and includes 24/7 CCTV
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
                <p className="font-semibold mb-1">How does pickup and delivery work?</p>
                <p>Door-to-door pickup and delivery across Dubai is part of our hassle-free service — our team handles collection and return so you never need to hire a van. For locations outside Dubai (Sharjah, Ajman, Abu Dhabi) a modest fixed transport fee applies, confirmed before you book.</p>
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
            Understanding exactly what you are paying for before you commit to a storage plan is important. This guide covers every aspect of SafeStorage Dubai&apos;s pricing — our single, transparent rate of 12.60 AED / sqft (VAT-inclusive), long-term discounts, VAT information, and what is included in every single plan at no extra charge.
          </p>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">One Simple, Transparent Price</h3>
            <p className="text-gray-700 mb-6">SafeStorage Dubai keeps pricing simple. Whether you are storing a few boxes or clearing an entire villa, our rate starts from <strong>12.60 AED / sqft</strong> (VAT-inclusive). You pay only for the space you actually use, with no wasted space and no unnecessary charges — one clear price for every storage need.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-[#0A2463]">
                <h4 className="font-bold text-[#0A2463] text-lg mb-3">Flexible Item & Box Storage</h4>
                <p className="text-gray-700 mb-4">Ideal for customers storing fewer than 20 to 25 items. Each item is individually catalogued, photographed, and stored. You pay only for the space your belongings occupy — starting from <strong>12.60 AED / sqft</strong>.</p>
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
                <p className="text-gray-700 mb-4">Rent a private, dedicated storage space measured by square footage — for full apartment contents, villa clearances, business inventory, or vehicles. No fixed tiers and no guesswork: the rate is the same simple <strong>12.60 AED / sqft</strong>, whatever space you need. You pay only for the area you use.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Everything Included — Zero Hidden Charges</h3>
            <p className="text-gray-700 mb-5">Many storage companies in Dubai advertise a low headline rate but then add charges for insurance, pickup, delivery, and administration. At SafeStorage, every plan — at every price point — includes all of the following with absolutely no additional charge:</p>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#0A2463]">Secure Indoor Storage</p>
                  <p className="text-sm">Every unit is a clean, dust-protected indoor space. Items are carefully wrapped, stored on raised platforms, and kept away from external walls to help protect furniture, electronics, documents, clothing, and artwork. This is not an upgrade — it is standard.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">Hassle-Free Door-to-Door Pickup in Dubai</p>
                  <p className="text-sm">Our professional team collects your belongings from any Dubai address at your chosen time. They bring all necessary equipment, wrap furniture, and handle all heavy lifting — so there is no van rental or heavy lifting needed on your part.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">Hassle-Free Return Delivery in Dubai</p>
                  <p className="text-sm">When you need items back, we deliver them to your door within 24–48 hours. Same-day delivery is available for urgent requests. Partial retrieval — getting some but not all items back — is fully supported.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#0A2463]">Free Insurance Up to AED 5,000</p>
                  <p className="text-sm">Every storage plan automatically includes complimentary insurance coverage protecting against fire, theft, flood, and accidental damage. Coverage applies from the moment our team picks up your items. No paperwork, no waiting — it is automatic.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0A2463]">24/7 Multi-Layer Security</p>
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
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">How Much Storage Do You Need?</h3>
            <p className="text-gray-700">There are no fixed unit tiers to choose between and no risk of overpaying for empty space. You pay only for the square footage your belongings actually occupy, at one simple rate of <strong>12.60 AED / sqft</strong> (VAT-inclusive). Not sure how much space you need? Our consultants provide a free, no-obligation volume assessment — just send photos via WhatsApp or call +971505773388 and we will confirm exactly what your storage will cost.</p>
          </div>

          {/* 15 pricing FAQ items */}
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6 mt-4">Frequently Asked Questions About Storage Pricing in Dubai</h2>

          <div className="space-y-5 mb-10">

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">1. What is the cheapest storage option available at SafeStorage Dubai?</h3>
              <p className="text-gray-700">Our storage starts from just 12.60 AED / sqft (VAT-inclusive). This is perfect for customers who only need to store a few things and do not want to pay for an entire private unit — you pay only for the space your belongings actually use. Contact us for an accurate quote based on exactly what you need to store.</p>
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
              <p className="text-gray-700">You are welcome to access your items by visiting the facility personally or by requesting a delivery. There are no per-visit fees and no limit on how often you can access or partially retrieve your belongings. For deliveries within Dubai our team handles door-to-door collection and return as part of our hassle-free service. The only scenario where a transport fee applies is if you request delivery outside Dubai (such as to Sharjah, Abu Dhabi, or Al Ain), in which case a small fixed transport fee applies, which your consultant will confirm before the delivery is scheduled.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">6. Can I get a corporate or bulk storage discount?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai offers preferential corporate rates for businesses storing large volumes of items, multiple storage units, or with ongoing high-frequency pickup and delivery requirements. Corporate accounts include custom pricing, dedicated account management, itemised monthly invoicing, multi-user access credentials, and priority scheduling. Contact our business team on +971505773388 or email support@safestorage.ae to discuss your organisation&apos;s storage requirements and receive a customised commercial proposal.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">7. Is packing material included in the storage price?</h3>
              <p className="text-gray-700">Standard furniture wrapping materials — protective blankets, bubble wrap for fragile items, and strapping — are included in the cost of our pickup service at no additional charge. Additional packing materials such as cardboard boxes, tape, wardrobe boxes, and mattress bags are available for purchase at competitive prices. If you want our team to fully pack your home or office from scratch, our professional packing service is available at an additional per-hour fee — ask your consultant for a packing service quote when you book your pickup.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">8. What is the best value storage option for someone moving apartments in Dubai?</h3>
              <p className="text-gray-700">For apartment moves in Dubai — where there is often a gap between your old tenancy ending and your new tenancy beginning — storage is priced simply at 12.60 AED / sqft (VAT-inclusive), so a one to two-bedroom apartment is straightforward and economical to store. This includes hassle-free pickup from your old apartment, secure storage for the duration between leases, and hassle-free delivery to your new address. Compared to the cost of rush storage elsewhere or keeping a hotel room, SafeStorage is significantly more economical and completely hassle-free.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">9. Do you offer any student storage discounts in Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage Dubai partners with several universities and higher education institutions in Dubai to offer student storage discounts. Students can access our storage plans from 12.60 AED / sqft, which is ideal for storing belongings between semesters or during summer holidays. Mention your student status and university affiliation when requesting a quote and we will apply the applicable student discount. Student plans are available on a minimum one-month basis with no long-term commitment required.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">10. How does billing work — monthly, quarterly, or annually?</h3>
              <p className="text-gray-700">SafeStorage offers flexible billing cycles to suit your preferences. Monthly billing is the default option — you pay one month in advance and continue month-by-month with no commitment. Quarterly, semi-annual, and annual billing cycles each unlock a wide range of discounts — the longer the cycle you prepay, the more you save. You can switch billing cycles at any time by contacting your storage consultant. All billing is handled via secure online payment, bank transfer, cash, or cheque.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">11. What is the cost of upgrading to higher insurance coverage?</h3>
              <p className="text-gray-700">Every SafeStorage plan includes free insurance up to AED 5,000. For customers with higher-value items — artwork, antique furniture, high-end electronics, or luxury goods — we offer enhanced insurance options at competitive rates. Enhanced coverage typically ranges from AED 20 to AED 80 per month depending on the declared value of your items and the level of coverage required. Our team will help you assess the value of your stored belongings and recommend the appropriate coverage level when you sign up.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">12. Are document storage rates different from regular storage?</h3>
              <p className="text-gray-700">Document and archive storage follows a separate pricing structure designed for businesses and individuals needing to store large volumes of paper records. Our document storage service includes indexed cataloguing of all boxes for easy retrieval, fireproof storage areas with enhanced fire suppression systems, clean and dust-protected archival shelving that keeps records in good condition, and a same-day retrieval service for urgent document access. Document storage starts from 12.60 AED / sqft (VAT-inclusive). Call +971505773388 for a detailed document storage quotation.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">13. Is same-day pickup available?</h3>
              <p className="text-gray-700">Yes. Same-day pickup is available for requests made before 12 PM on any day, as part of the standard hassle-free pickup service that comes with every storage plan. Subject to availability, our team will arrive at your address the same day, typically within 4 to 6 hours of booking confirmation. For very last-minute requests where same-day pickup is needed urgently (for example, a sudden eviction or emergency relocation), call +971505773388 directly and our dispatch team will confirm availability immediately.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">14. Can I see a full cost breakdown before committing?</h3>
              <p className="text-gray-700">Absolutely. Before you confirm any storage plan, SafeStorage provides a detailed written quote showing the monthly storage fee, what is included, any optional add-ons you have requested, and the VAT breakdown. You will never be asked to pay or sign anything without seeing a full cost breakdown first. Our quotes are valid for 14 days, giving you time to compare options and make a decision without pressure. To receive your personalised quote, call +971505773388 or fill in the online quote form on this website.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">15. What is the price for storing a full villa worth of furniture in Dubai?</h3>
              <p className="text-gray-700">For a typical 4–5 bedroom villa with full furniture, appliances, and personal belongings, storage is priced simply at 12.60 AED / sqft (VAT-inclusive) — you pay only for the space your belongings occupy. This includes hassle-free pickup from your villa, secure storage, 24/7 security, free insurance, and hassle-free delivery back whenever required. For very large villas or homes with significant volumes of items, we recommend requesting a free volume assessment — our consultant will visit your property to measure and advise on the exact unit size needed, ensuring you do not pay for more space than necessary.</p>
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
