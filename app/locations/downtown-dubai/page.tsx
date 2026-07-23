import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Downtown Dubai Storage — Door-to-door Pickup",
  description:
    "Storage in Downtown Dubai, DIFC & Burj Khalifa District. Secure units, door-to-door pickup from your tower, same-day service. Trusted by 500+ Downtown residents. Call +971505773388.",
  keywords:
    "storage downtown dubai, storage near burj khalifa, DIFC storage dubai, downtown dubai self storage, storage units downtown dubai, burj khalifa district storage",
  openGraph: {
    title: "Downtown Dubai & DIFC Storage — Door-to-door Pickup | SafeStorage",
    description: "Secure storage for Downtown Dubai, DIFC & Burj Khalifa District. Door-to-Door pickup. Same-day available. Call +971505773388.",
    url: "https://safestorage.ae/locations/downtown-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/downtown-dubai",
  },
}

const downtownSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Near Downtown Dubai & DIFC",
    description:
      "Secure storage for Downtown Dubai, DIFC, Burj Khalifa District and Business Bay residents and businesses. Door-to-Door pickup, same-day service, flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/downtown-dubai",
    areaServed: [
      { "@type": "Place", name: "Downtown Dubai" },
      { "@type": "Place", name: "DIFC" },
      { "@type": "Place", name: "Burj Khalifa District" },
      { "@type": "Place", name: "Business Bay" },
      { "@type": "Place", name: "Sheikh Zayed Road" },
    ],
    serviceType: "Self Storage",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Downtown Dubai Storage Plans",
      itemListElement: [
        { "@type": "Offer", name: "Storage", price: "12.60", priceCurrency: "AED", description: "Starts from 12.60 AED / sqft (VAT-inclusive)" },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/downtown-dubai#webpage",
    name: "Downtown Dubai Storage — Door-to-door Pickup | SafeStorage",
    description:
      "Secure storage for Downtown Dubai, DIFC & Burj Khalifa District. Door-to-Door pickup from your tower. Same-day available.",
    url: "https://safestorage.ae/locations/downtown-dubai",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-04-21",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Downtown Dubai", item: "https://safestorage.ae/locations/downtown-dubai" },
    ],
  },
]

export default function DowntownDubaiPage() {
  return (
    <>
      <SchemaScript schema={downtownSchemas} />
      <LocationPage
        location="Downtown Dubai"
        areas={["Downtown Dubai", "DIFC", "Burj Khalifa District", "Business Bay", "Sheikh Zayed Road", "The Old Town"]}
        distance="10-15 minutes"
        benefits={[
          "Same-day pickup from your Downtown tower",
          "Document archiving for DIFC-registered companies",
          "Ideal for high-rise apartment residents needing extra space",
          "Office furniture storage during relocation or renovation",
        ]}
      />

      {/* E-E-A-T Rich Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage Near Downtown Dubai, DIFC &amp; Burj Khalifa</h2>
          <p className="text-sm text-gray-500 mb-6">
            Written by the SafeStorage Dubai operations team · Serving Downtown since 2018 · 500+ Downtown customers
          </p>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage is the preferred storage provider for residents and businesses in Downtown Dubai, the Dubai
            International Financial Centre (DIFC), the Burj Khalifa District, and Business Bay. Since 2018, our team
            has completed over 2,000 pickups from this zone — from compact studio apartments in Address Boulevard to
            multi-floor corporate offices in ICD Brookfield Place. We know the access protocols, loading bay
            schedules, and concierge procedures for every major tower in the area, so your pickup is seamless from
            the moment we arrive.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Apartment Storage — Downtown Dubai Towers</h3>
              <p className="text-gray-700 mb-3">
                Downtown Dubai apartments are among the most premium residential spaces in the UAE — and among the
                most space-constrained. With square-metre prices regularly exceeding AED 2,500, dedicating floor
                space to rarely-used items is simply not practical. SafeStorage solves this by giving Downtown
                residents a secure extension of their apartment — accessible on demand.
              </p>
              <p className="text-gray-700">
                We regularly serve residents of Burj Khalifa Residences, The Address Downtown, Vida Downtown, Blvd
                Heights, Act One | Act Two, Forte, Grande Signature Residences, and all towers in the Opera
                District. Our team handles everything from collection to delivery, so you never need to arrange
                a van or visit a storage facility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Document Archiving — DIFC &amp; Corporate Offices</h3>
              <p className="text-gray-700 mb-3">
                DIFC-registered companies have specific obligations under DIFC Law and UAE Commercial Companies Law
                to retain financial, legal, and corporate records for minimum periods — typically 5 to 10 years.
                SafeStorage&apos;s document archiving service provides fireproof storage, barcode-indexed retrieval,
                and same-week delivery of specific files, helping DIFC companies stay compliant without wasting
                premium office space on dead archives.
              </p>
              <p className="text-gray-700">
                Our document storage service is trusted by law firms, fund managers, and financial institutions
                across Gate Village, ICD Brookfield Place, and the DIFC Precinct. All document handling follows
                strict chain-of-custody protocols with digital access logs and confidentiality agreements available.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Downtown Dubai Storage Zone</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Downtown Core</p>
                <ul className="space-y-1 text-sm">
                  <li>• Burj Khalifa District</li>
                  <li>• The Dubai Mall precinct</li>
                  <li>• Opera District</li>
                  <li>• Souk Al Bahar &amp; Old Town</li>
                  <li>• Blvd Strip</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Financial &amp; Business</p>
                <ul className="space-y-1 text-sm">
                  <li>• DIFC Gate Village</li>
                  <li>• ICD Brookfield Place</li>
                  <li>• Business Bay Canal Front</li>
                  <li>• The Executive Towers</li>
                  <li>• Trade Centre</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Nearby Communities</p>
                <ul className="space-y-1 text-sm">
                  <li>• Sheikh Zayed Road towers</li>
                  <li>• Za&apos;abeel &amp; Oud Metha</li>
                  <li>• Al Wasl &amp; Al Safa</li>
                  <li>• City Walk</li>
                  <li>• Al Jaddaf</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Why Downtown Dubai Residents Choose SafeStorage</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="space-y-3">
                <p><strong>No van rental needed:</strong> Our team arrives at your building, carries everything from your apartment floor to our vehicle. You never need to arrange transport or visit a storage facility.</p>
                <p><strong>Tower access expertise:</strong> We know the loading bay procedures, lift access rules, and concierge requirements for every major Downtown tower. Our pickups never cause delays for building management.</p>
                <p><strong>Same-day service:</strong> For requests before 12 PM, we can collect from any Downtown address the same day. This is critical when lease dates or renovation timelines are tight.</p>
              </div>
              <div className="space-y-3">
                <p><strong>Secure indoor storage:</strong> All items are kept in our clean, indoor facility under 24/7 CCTV monitoring. In Downtown Dubai, where apartments often contain premium furniture and electronics, keeping belongings safe and dust-protected is essential.</p>
                <p><strong>Transparent pricing, no surprises:</strong> Downtown residents pay the same rates as all Dubai customers — from 12.60 AED / sqft (VAT-inclusive). No location premiums, no high-rise access fees, no surprises at billing.</p>
                <p><strong>Free insurance included:</strong> All stored items are covered by complimentary insurance against theft, fire, and accidental damage — standard on every plan with no additional paperwork.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">What Our Downtown Dubai Customers Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;I was renovating my apartment in Address Boulevard and needed to clear everything out in 48 hours. SafeStorage sent a team the next morning, cleared all my furniture, and had everything back at my door three weeks later. Flawless service.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Priya S., Address Boulevard, Downtown Dubai</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;As a law firm in DIFC, we needed compliant document archiving when we moved offices. SafeStorage indexed everything, stored it securely, and retrieved specific files within 24 hours every time we asked. Highly recommended for DIFC businesses.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Operations Manager, Law Firm, DIFC Gate Village</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Pricing for Downtown Dubai &amp; DIFC Customers</h3>
            <p className="text-gray-700 mb-4">SafeStorage pricing is identical across all Dubai locations — no location premiums for Downtown or DIFC:</p>
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-lg p-8 border-2 border-[#0A2463] text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-2">Pricing starts from 12.60 AED / sqft</p>
                <p className="text-sm text-gray-600">VAT-inclusive · all unit sizes · door-to-door service included</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Ready to free up space in your Downtown Dubai apartment or DIFC office?</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Downtown Dubai Storage</h2>
          <p className="text-gray-600 text-center mb-10">Answers from our Downtown Dubai operations team with 6+ years serving the area.</p>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How quickly can SafeStorage pick up from my Downtown Dubai apartment?</h3>
              <p className="text-gray-700">For requests confirmed before 12 PM on working days, same-day pickup is available across all Downtown Dubai areas including the Burj Khalifa District, Opera District, and Business Bay waterfront. Standard bookings are confirmed within 24 hours. Our team has completed over 2,000 pickups from Downtown and knows every major tower&apos;s loading bay and concierge procedures, so your pickup is smooth and fast. Call +971505773388 to check same-day availability for your building.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store furniture from a Burj Khalifa apartment?</h3>
              <p className="text-gray-700">Yes. The Burj Khalifa residential floors (levels 19–108 in the Armani Residences and private residences above) are within our standard Downtown service zone. We have experience with the Burj Khalifa&apos;s specific access, security check-in, and loading bay protocols. All furniture is professionally wrapped and protected before transport. Given the premium nature of Burj Khalifa apartment furnishings, we pay particular attention to high-value items including designer furniture, artwork, and luxury electronics.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage provide compliant document archiving for DIFC companies?</h3>
              <p className="text-gray-700">Yes. SafeStorage is used by numerous DIFC-registered businesses for compliant document archiving. We provide fireproof storage, individual box labelling with barcode indexing, chain-of-custody documentation, confidentiality agreements, and on-demand retrieval of specific files within 24–48 hours. Our document archiving service helps DIFC companies meet retention requirements under DIFC Law and UAE Commercial Companies Law without dedicating expensive DIFC office space to inactive archives. We serve law firms, financial services firms, fund managers, and corporate offices throughout the DIFC precinct.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What storage is available for Downtown Dubai apartment renovation?</h3>
              <p className="text-gray-700">Renovation storage is one of our most common Downtown Dubai requests. The process: we arrive at your apartment, professionally wrap and remove all furniture, transport it to our secure facility, and store it safely while your contractor works. When your renovation is complete, we deliver everything back and our team places items in the rooms you specify. Renovation storage plans start from one week with no minimum contract, and pricing starts from 12.60 AED / sqft (VAT-inclusive). Call us early to book your renovation pickup date, as Downtown slots fill quickly.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I store items from my Sheikh Zayed Road office during relocation?</h3>
              <p className="text-gray-700">Yes, Sheikh Zayed Road (E11) is fully within our Downtown service zone. We regularly handle office clearances and storage for businesses relocating along SZR, from the Trade Centre twin towers to Emirates Towers to the cluster of towers near Business Bay. For SZR commercial pickups, we can mobilise a larger team to clear an entire floor of office furniture and equipment within a single working day. All items are catalogued on collection and stored until needed, with on-demand delivery to your new SZR or Business Bay address.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage available near City Walk and Al Wasl Road?</h3>
              <p className="text-gray-700">Yes. City Walk, Al Wasl Road, and the surrounding Jumeirah and Al Safa communities are covered within our Downtown/Jumeirah service area. City Walk residents and businesses use SafeStorage for the same range of services as Downtown apartment dwellers — personal household storage, renovation storage, lease gap storage, and business document archiving. Al Wasl Road is a key artery in our service network, and pickups from addresses along Al Wasl are typically within 15–20 minutes of confirmation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the cost to store a full Downtown Dubai apartment?</h3>
              <p className="text-gray-700">SafeStorage pricing is volume-based and transparent, starting from 12.60 AED / sqft (VAT-inclusive). Whether you are storing a Downtown studio apartment (furniture, boxes, appliances), a 1-bedroom, or a 2-bedroom apartment with a full set of furniture and personal items, you pay only for the space you use. These prices include door-to-door pickup, secure storage, insurance, and one doorstep delivery per month. Get an accurate personalised quote by calling +971505773388 or submitting the online quote form with a brief description or photos of what you need to store.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you store artwork, antiques, or high-value items from Downtown properties?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores high-value items including original artwork, antique furniture, luxury carpets, sculptures, and collectibles. For valuable items, we recommend our enhanced storage option, which includes individual unit assignment (items not mixed with others) and extended insurance coverage above the standard complimentary threshold. Our team uses specialist packing materials including custom crating, acid-free wrapping, and museum-grade protection for fragile or irreplaceable pieces. Let us know during the quote process if you have high-value items so we can recommend the right protection level.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage for expats leaving Dubai from the Downtown area?</h3>
              <p className="text-gray-700">Absolutely. Many Downtown Dubai expatriates use SafeStorage when relocating internationally. Rather than rushing to ship or sell everything before a departure, many expats store their belongings with SafeStorage on a flexible monthly plan and decide what to ship, sell, or donate over the following months from their home country. SafeStorage can manage your account entirely remotely — you never need to return to Dubai to manage your storage. When you are ready, we can arrange international shipping of stored items or return them to any Dubai address if you decide to come back.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How is security handled for high-value Downtown Dubai storage?</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can my Downtown Dubai building concierge coordinate with SafeStorage directly?</h3>
              <p className="text-gray-700">Yes. For customers who prefer it, our operations team can coordinate with your building concierge or building management directly for pickup and delivery scheduling, loading bay access, and lift reservations. This is particularly useful for Downtown high-rises with strict loading bay time windows or security check-in requirements. Simply provide your concierge&apos;s contact details when booking and we will handle all building coordination on your behalf. Our team is professional and experienced with Downtown tower protocols, so building management teams consistently give positive feedback about our pickups.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for Downtown Dubai customers?</h3>
              <p className="text-gray-700">No minimum storage period applies. SafeStorage is fully flexible — you can store for one week, one month, or three years. Billing is monthly and you can cancel with 14 days&apos; notice at any time. For Downtown customers storing during apartment renovations or between lease periods, the ability to start and stop storage on short notice is one of our most valued features. There are no lock-in contracts, no cancellation fees, and no requirement to commit to a specific storage duration when you book.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
