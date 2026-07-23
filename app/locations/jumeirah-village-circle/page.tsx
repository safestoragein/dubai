import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "JVC Storage Dubai — Jumeirah Village Circle",
  description:
    "Self storage for JVC (Jumeirah Village Circle) Dubai. Hassle-free pickup from apartments & townhouses. Secure units from 12.60 AED / sqft. JVT also covered. Call +971505773388.",
  keywords:
    "JVC storage dubai, jumeirah village circle storage, storage near JVC, JVT storage dubai, self storage jumeirah village, storage pickup JVC dubai",
  openGraph: {
    title: "JVC Storage Dubai — Jumeirah Village Circle | SafeStorage",
    description: "Hassle-free pickup storage for JVC apartments and townhouses. Secure, flexible monthly plans. JVT also covered. Call +971505773388.",
    url: "https://safestorage.ae/locations/jumeirah-village-circle",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/jumeirah-village-circle",
  },
}

const jvcSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Jumeirah Village Circle (JVC) Dubai",
    description:
      "Secure storage for JVC and JVT residents. Hassle-free pickup from apartments and townhouses. Flexible plans from 12.60 AED / sqft.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/jumeirah-village-circle",
    areaServed: [
      { "@type": "Place", name: "Jumeirah Village Circle" },
      { "@type": "Place", name: "Jumeirah Village Triangle" },
      { "@type": "Place", name: "Dubai Sports City" },
      { "@type": "Place", name: "Motor City" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "198",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/jumeirah-village-circle#webpage",
    name: "JVC Storage Dubai — Jumeirah Village Circle | SafeStorage",
    description: "Hassle-free pickup storage for JVC apartments and townhouses. Secure, flexible monthly plans. JVT also covered.",
    url: "https://safestorage.ae/locations/jumeirah-village-circle",
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
      { "@type": "ListItem", position: 3, name: "Jumeirah Village Circle", item: "https://safestorage.ae/locations/jumeirah-village-circle" },
    ],
  },
]

export default function JumeirahVillageCirclePage() {
  return (
    <>
      <SchemaScript schema={jvcSchemas} />
      <LocationPage
        location="Jumeirah Village Circle (JVC)"
        areas={["JVC District 10–18", "JVC Apartments", "JVC Townhouses", "Jumeirah Village Triangle (JVT)", "Dubai Sports City", "Motor City"]}
        distance="15-20 minutes"
        benefits={[
          "Hassle-free pickup from all JVC districts and buildings",
          "Ideal for growing families needing extra space",
          "Affordable storage that matches JVC's value-focused community",
          "JVT and Sports City also fully covered",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in JVC — Dubai&apos;s Fastest-Growing Community</h2>
          <p className="text-sm text-gray-500 mb-6">
            JVC storage specialists · 198+ JVC customers · Serving all JVC districts since 2019
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Jumeirah Village Circle (JVC) is one of Dubai&apos;s fastest-growing residential communities, home to
            over 300,000 residents in a diverse mix of apartments, townhouses, and villas. JVC&apos;s popularity stems
            from its relatively affordable property prices for Dubai, family-friendly environment, and central location
            between Sheikh Mohammed bin Zayed Road (E311) and Al Khail Road (E44). SafeStorage has been serving JVC
            residents since 2019 and has completed over 1,500 pickups across the community.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            As a growing community where many residents are first-time renters or buyers in Dubai, JVC has a strong
            demand for affordable, flexible storage. SafeStorage&apos;s volume-based pricing — starting from 12.60 AED / sqft
            (VAT-inclusive) — makes quality storage accessible to all JVC residents, from compact studio apartment dwellers
            to families in spacious JVC townhouses and villas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Apartment Storage — JVC Studios &amp; 1–3 Bedrooms</h3>
              <p className="text-gray-700 mb-3">
                JVC has a large inventory of studio and 1-bedroom apartments that, while affordable by Dubai standards,
                come with limited storage space. SafeStorage provides the practical solution: store the items that
                are cluttering your apartment — seasonal clothes, sports equipment, suitcases, extra furniture,
                boxes of belongings from a previous larger home — and reclaim your living space.
              </p>
              <p className="text-gray-700">
                Our volume-based pricing means JVC studio residents can store just a few boxes from 12.60 AED / sqft (VAT-inclusive) without
                committing to a full storage unit. This makes it financially practical for JVC&apos;s younger,
                value-conscious residents who need flexible, affordable storage without long-term commitment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Townhouse &amp; Villa Storage — JVC Families</h3>
              <p className="text-gray-700 mb-3">
                JVC also has a significant supply of townhouses and villas that attract families. These larger
                properties generate greater storage needs — garden furniture, children&apos;s equipment, seasonal
                decorations, tools and DIY equipment, and items accumulated over years of Dubai life. SafeStorage
                provides full-property clearance services for JVC families whether renovating, relocating, or
                simply decluttering.
              </p>
              <p className="text-gray-700">
                For JVC townhouse owners renovating or changing tenants, SafeStorage can clear the entire property
                within a day and return everything when needed. Our team handles all packing, loading, and
                transport — you simply point to what needs to go.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">JVC, JVT &amp; Surrounding Areas Served</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">JVC Districts</p>
                <ul className="space-y-1 text-sm">
                  <li>• JVC District 10 – Circle Mall area</li>
                  <li>• JVC District 11, 12</li>
                  <li>• JVC District 13, 14, 15</li>
                  <li>• JVC District 16, 17, 18</li>
                  <li>• All JVC apartments &amp; townhouses</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Adjacent Communities</p>
                <ul className="space-y-1 text-sm">
                  <li>• Jumeirah Village Triangle (JVT)</li>
                  <li>• Dubai Sports City</li>
                  <li>• Motor City</li>
                  <li>• Dubai Production City</li>
                  <li>• Arjan &amp; Dubailand adj.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Road Access Points</p>
                <ul className="space-y-1 text-sm">
                  <li>• Sheikh Mohammed bin Zayed Rd (E311)</li>
                  <li>• Al Khail Road (E44)</li>
                  <li>• Hessa Street</li>
                  <li>• Sports City Road</li>
                  <li>• Al Barsha South boundary</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">What JVC Residents Say About SafeStorage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We moved from a 3-bedroom Dubai Marina apartment to a smaller JVC 2-bedroom. SafeStorage stored everything that didn&apos;t fit. Six months later they delivered it all back perfectly. Incredibly convenient service.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Sarah L., JVC District 14</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;As a JVC townhouse owner renting out the property, I needed to store my personal items between tenants. SafeStorage picked up, stored everything safely for 3 months, and brought it all back when I moved back in. Will definitely use again.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Khalid N., JVC Townhouse Owner</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Get hassle-free storage pickup from your JVC apartment or townhouse today.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — JVC Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all JVC districts including the newer phases?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers all JVC districts — Districts 10 through 18 and all sub-sections within them. This includes both the original JVC development phases and the newer towers and communities added in recent years. Whether you live in a Circle Mall-adjacent apartment, a JVC District 12 villa, or one of the newer high-rise towers in the northern sections of JVC, our team will collect from your address. Call +971505773388 with your building name and we will confirm pickup availability immediately.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the cheapest storage option for JVC studio apartment residents?</h3>
              <p className="text-gray-700">For JVC studio residents, our volume-based storage plan is the most cost-effective option. Rather than renting a full storage unit, you pay only for the space you use — starting from 12.60 AED / sqft (VAT-inclusive). Whether you are storing a single box or 10–15 items (suitcases, boxes, a small piece of furniture), you pay only for the space they occupy. This is significantly cheaper than renting a storage unit in traditional self-storage facilities, which typically have minimum unit sizes costing AED 400–600/month regardless of how little you store.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is JVT (Jumeirah Village Triangle) included in the JVC service area?</h3>
              <p className="text-gray-700">Yes. Jumeirah Village Triangle (JVT) is fully covered within our JVC service zone. JVT, which borders JVC on the southeastern side, is served with the same speed, pricing, and quality as JVC itself. JVT townhouses and apartments use SafeStorage for the same range of services — renovation storage, lease transition storage, and personal household overflow. Pickup times from JVT are typically 15–20 minutes from confirmation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage help JVC residents moving to a smaller apartment?</h3>
              <p className="text-gray-700">Absolutely. Downsizing is one of the most common reasons JVC residents use SafeStorage. When moving from a larger property (perhaps from another area of Dubai) to a JVC apartment, or from a 3-bedroom JVC flat to a 1-bedroom, there will inevitably be furniture and personal items that don&apos;t fit. SafeStorage stores the overflow at competitive prices, allowing you to take your time deciding what to keep, sell, or donate rather than making rushed decisions during a stressful move.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How does SafeStorage handle JVC high-rise building access for pickup?</h3>
              <p className="text-gray-700">Our team is experienced with JVC&apos;s diverse building types — from low-rise townhouse clusters to 30+ floor high-rise towers. For high-rise buildings, we coordinate with your building security for visitor access, use service elevators where available, and schedule pickups during loading bay access hours. You simply need to inform the front desk that our team is arriving. We handle all the logistics. Our team arrives in professional uniforms with identification, ensuring smooth entry at any JVC building.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can Dubai Sports City and Motor City residents use JVC-area SafeStorage?</h3>
              <p className="text-gray-700">Yes. Dubai Sports City and Motor City are both within our JVC service zone and are fully covered by SafeStorage. Dubai Sports City residents in the various residential towers and Motor City residents in the apartment and townhouse communities all receive the same hassle-free pickup and delivery service as JVC. Typical pickup times from Dubai Sports City and Motor City are 15–20 minutes. Many Sports City residents use SafeStorage for sports equipment storage, which is a perfect fit given the area&apos;s active lifestyle community.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What storage is available for JVC residents between lease periods?</h3>
              <p className="text-gray-700">Between-lease storage is one of our most popular JVC services. When your JVC lease ends and your new apartment isn&apos;t ready yet, SafeStorage bridges the gap. We pick up from your current JVC address on or before your lease end date, store everything safely, and deliver to your new address when it&apos;s ready. This eliminates the need to rush a move or sleep in an unfurnished apartment. Plans are month-to-month with no minimum period — you pay only for the weeks or months you actually need.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Are JVC townhouse garden items like furniture and tools included in storage?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores garden furniture, outdoor equipment, barbecue sets, tools, bicycles, children&apos;s outdoor play equipment, and other garden and garage items from JVC townhouses. Outdoor items should ideally be cleaned and dried before collection to prevent mould during storage. Our team provides standard furniture blanket wrapping for outdoor furniture. For seasonal garden storage (e.g., storing garden furniture during Dubai summer), we offer annual plans that can be automatically renewed each year for convenience.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How much does it cost to store a full JVC 1-bedroom apartment?</h3>
              <p className="text-gray-700">Storing a JVC 1-bedroom apartment (furniture, appliances, personal items) with SafeStorage starts from 12.60 AED / sqft (VAT-inclusive). This includes hassle-free pickup from your JVC address, secure storage, free insurance, and on-demand delivery back. The same per-square-foot rate applies to JVC 2-bedroom apartments — you simply pay for the additional space. For the most accurate quote, share a brief description or WhatsApp photos of your items and we&apos;ll provide a confirmed price within 30 minutes during business hours.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the average pickup time from JVC to SafeStorage facility?</h3>
              <p className="text-gray name text-gray-700">Our SafeStorage facility is located in the Dubai Investment Park area, which is approximately 15–20 minutes from most JVC addresses via Al Khail Road. However, the transit time is managed entirely by our team — you never need to know or care about the route. We collect from your JVC door and transport your items safely to the facility. For full-villa or large-apartment moves, multiple trips may be made on the same day to ensure everything is moved efficiently.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store children&apos;s items like bikes, toys, and prams from JVC?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores children&apos;s equipment including bicycles, scooters, pushchairs (prams/strollers), cots, high chairs, large toys, and play equipment. JVC is a very family-oriented community and we regularly store children&apos;s equipment for families who are between homes, have outgrown certain items but aren&apos;t ready to give them away, or simply need to free up space in their apartment. Children&apos;s items are stored with the same care as adult furniture and personal belongings.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
