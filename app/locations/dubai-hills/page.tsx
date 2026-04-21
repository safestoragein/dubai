import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Dubai Hills Estate Storage — Free Pickup",
  description:
    "Storage for Dubai Hills Estate villas and apartments. Free pickup service, climate-controlled units, flexible plans from AED 9/month. Al Quoz also covered. Call +971505773388.",
  keywords:
    "dubai hills estate storage, storage dubai hills, storage near dubai hills mall, al quoz storage, dubai hills villa storage, storage emaar dubai hills",
  openGraph: {
    title: "Dubai Hills Estate Storage — Free Pickup | SafeStorage",
    description: "Free pickup storage for Dubai Hills villas and apartments. Climate-controlled. Al Quoz & Umm Suqeim also covered. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-hills",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-hills",
  },
}

const dubaiHillsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Dubai Hills Estate",
    description:
      "Premium climate-controlled storage for Dubai Hills Estate villas and apartments. Free pickup from all Dubai Hills communities. Al Quoz and Umm Suqeim also covered.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai-hills",
    areaServed: [
      { "@type": "Place", name: "Dubai Hills Estate" },
      { "@type": "Place", name: "Al Quoz" },
      { "@type": "Place", name: "Umm Suqeim" },
      { "@type": "Place", name: "Nad Al Sheba" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "167",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai-hills#webpage",
    name: "Dubai Hills Estate Storage — Free Pickup | SafeStorage",
    description: "Premium climate-controlled storage for Dubai Hills Estate. Free pickup from all Dubai Hills communities.",
    url: "https://safestorage.ae/locations/dubai-hills",
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
      { "@type": "ListItem", position: 3, name: "Dubai Hills", item: "https://safestorage.ae/locations/dubai-hills" },
    ],
  },
]

export default function DubaiHillsPage() {
  return (
    <>
      <SchemaScript schema={dubaiHillsSchemas} />
      <LocationPage
        location="Dubai Hills Estate"
        areas={["Dubai Hills Estate", "Emaar Hills", "Park Heights", "Park Ridge", "Golf Place", "Al Quoz", "Nad Al Sheba"]}
        distance="15-20 minutes"
        benefits={[
          "Expert care for premium Dubai Hills villa contents",
          "Free pickup from all Dubai Hills sub-communities",
          "Ideal for new residents awaiting villa completion",
          "Al Quoz warehousing and business storage also covered",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Dubai Hills Estate &amp; Al Quoz</h2>
          <p className="text-sm text-gray-500 mb-6">
            Dubai Hills storage specialists · 167+ Dubai Hills customers · Premium service since 2020
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dubai Hills Estate is one of Emaar&apos;s flagship master-planned communities — a prestigious collection
            of golf-course-facing villas, townhouses, and apartment towers set around the 18-hole Dubai Hills Golf
            Club. As one of Dubai&apos;s fastest-growing and most sought-after residential addresses, Dubai Hills
            attracts premium buyers and renters who expect the same quality in their storage provider as in their
            home. SafeStorage has been serving Dubai Hills residents since 2020 and is the trusted choice for villa
            furniture storage, renovation clearance, and apartment storage in the community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Storage — Dubai Hills &amp; Golf Place</h3>
              <p className="text-gray-700 mb-3">
                Dubai Hills villas — particularly those in Golf Place, Fairway Vistas, and Maple — are premium,
                large-format properties that generate substantial storage volumes when renovating or between tenancies.
                SafeStorage provides full-villa clearance with premium packing, climate-controlled storage, and
                white-glove delivery back on request.
              </p>
              <p className="text-gray-700">
                Our Dubai Hills team brings premium-grade packing materials for all villa pickups — thick blankets,
                corner protectors, custom stretch wrap, and bubble wrap for delicate surfaces. For villas being
                staged for sale, we provide photo-catalogued storage so specific pieces can be easily retrieved
                for the staging layout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">New Resident Storage — Awaiting Villa Handover</h3>
              <p className="text-gray-700 mb-3">
                Dubai Hills Estate has substantial ongoing development, meaning many residents buy off-plan and
                await handover of their villa or apartment. In the interim, they often need to clear their current
                property but have nowhere to take their belongings until the new property is ready. SafeStorage
                bridges this gap perfectly.
              </p>
              <p className="text-gray-700">
                We store your current home&apos;s contents on flexible monthly terms until your Dubai Hills property
                is handed over and ready to move into. There is no penalty if the handover is delayed — you simply
                continue month-to-month until the move-in day, then we deliver everything to your new address.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Dubai Hills &amp; Surrounding Areas Covered</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Dubai Hills Communities</p>
                <ul className="space-y-1 text-sm">
                  <li>• Golf Place I &amp; II</li>
                  <li>• Fairway Vistas</li>
                  <li>• Maple (1, 2, 3)</li>
                  <li>• Park Heights I &amp; II</li>
                  <li>• Park Ridge</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">More Dubai Hills</p>
                <ul className="space-y-1 text-sm">
                  <li>• Acacia &amp; Golfville</li>
                  <li>• Sidra (I, II, III)</li>
                  <li>• Elysian Mansions</li>
                  <li>• Dubai Hills Mall area</li>
                  <li>• Address Dubai Hills</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Adjacent Areas</p>
                <ul className="space-y-1 text-sm">
                  <li>• Al Quoz (1, 2, 3, 4)</li>
                  <li>• Umm Suqeim 2 &amp; 3</li>
                  <li>• Nad Al Sheba 1, 2, 3, 4</li>
                  <li>• Al Barsha South</li>
                  <li>• Mohammed Bin Rashid City</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">Dubai Hills Customer Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We bought in Golf Place and had to leave our Marina apartment 3 months before handover. SafeStorage stored everything perfectly — every piece of furniture came back in the same condition it left. Premium service that matched the quality we expected.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— James W., Golf Place I, Dubai Hills Estate</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;Renovating our Maple 3 villa took 4 months instead of 2. SafeStorage stored all our furniture without complaint and extended our plan easily. When we finally moved back in, the team placed furniture in exactly the rooms we requested. Brilliant.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Anna T., Maple 3 Villa, Dubai Hills</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Free pickup storage for Dubai Hills villas and apartments — get your quote today.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — Dubai Hills Estate Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all Dubai Hills Estate sub-communities?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers all Dubai Hills Estate sub-communities including Golf Place I and II, Fairway Vistas, Maple 1/2/3, Park Heights I and II, Park Ridge, Acacia, Golfville, Sidra I/II/III, Elysian Mansions, and all apartment towers within Dubai Hills. We also cover the Address Dubai Hills hotel residences and all buildings in the Dubai Hills Mall area. If your community isn&apos;t listed, call +971505773388 — all Dubai Hills addresses qualify for our free pickup service.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store villa contents while waiting for a Dubai Hills handover?</h3>
              <p className="text-gray-700">Yes. Storing your current home&apos;s contents while waiting for a Dubai Hills handover is one of our most common requests. We provide flexible month-to-month storage — you start when you need to vacate your current property and end when your Dubai Hills villa or apartment is ready for move-in. There is no penalty if the handover is delayed (a common occurrence in Dubai real estate). We simply extend your plan month by month until you confirm the move-in date, then coordinate delivery to your new Dubai Hills address.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What packing standards does SafeStorage use for Dubai Hills premium furniture?</h3>
              <p className="text-gray-700">For Dubai Hills villa and apartment pickups, we use premium packing standards throughout. All furniture is wrapped with thick professional blankets. Polished, lacquered, and painted surfaces receive stretch film and soft padding. Glass surfaces get tempered glass protection or custom cardboard covers. Marble-top furniture receives foam-padded edge protection. Large art pieces are wrapped in acid-free tissue and sandwiched between foam boards. All items are documented with photographs before and after wrapping. We recognise that Dubai Hills residents have invested significantly in their properties and belongings.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text="[#0A2463] mb-2">Is Al Quoz industrial area covered for business storage?</h3>
              <p className="text-gray-700">Yes. Al Quoz is fully covered by SafeStorage — both the residential areas (Al Quoz 1, 2, 3, 4) and the industrial area. Al Quoz is a major hub for businesses, workshops, showrooms, and warehouses. SafeStorage provides commercial storage for Al Quoz businesses including excess stock storage, document archiving, equipment storage, and office furniture storage. We regularly serve businesses along the Sheikh Zayed Road-facing Al Quoz strip and the industrial Al Quoz 3 and 4 areas. Commercial pickup from Al Quoz businesses is available with appropriate vehicle sizing for any volume.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How long does pickup take from Dubai Hills Estate?</h3>
              <p className="text-gray-700">Our team typically reaches Dubai Hills Estate addresses within 20–25 minutes of confirmation, depending on daily traffic on Al Khail Road. For large-volume villa pickups, we allocate a multi-person team with the appropriate vehicle and typically complete the pickup within 3–6 hours depending on the villa size. For same-day service, please confirm your request before 12 PM. For large villa clearances, we recommend booking 2–3 days in advance to ensure the right crew size is available for your specific volume.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store a Dubai Hills villa for 6–12 months during an international assignment?</h3>
              <p className="text-gray-700">Yes. Long-term villa storage for professionals on international assignments is a popular service in Dubai Hills. For 6-month or 12-month storage, we offer prepaid discounts (15% for 6 months, 20% for 12 months) that significantly reduce the monthly cost. Your villa contents are maintained in climate-controlled conditions for the entire storage period, fully insured, and returned to any Dubai address when you return. We can manage your account entirely remotely — you never need to visit the facility while abroad.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is Mohammed Bin Rashid City (MBR City) near Dubai Hills covered?</h3>
              <p className="text-gray-700">Yes. Mohammed Bin Rashid City (MBR City) — including District One, Meydan, and the various MBR City residential sub-developments — is within our Dubai Hills service zone. MBR City residents have access to the same free pickup and delivery service as Dubai Hills. Meydan Racecourse area and the various Meydan residential developments are also covered. Pickup times from MBR City are typically 15–25 minutes depending on the specific community within the large MBR City development.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the cost of storing a Dubai Hills 4-bedroom villa?</h3>
              <p className="text-gray-700">A typical Dubai Hills 4-bedroom villa (Maple, Sidra, or Golf Place) with full furniture and personal contents costs approximately AED 400–650 per month to store. This includes free pickup, climate-controlled storage, insurance, and on-demand delivery. For villas with premium furniture, artwork, or high-value electronics, extended insurance is available at a small additional cost. For the most accurate quote, share a video walkthrough of your villa via WhatsApp (+971505773388) and we will provide a confirmed price within a few hours.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage handle golf equipment storage for Dubai Hills Golf Club members?</h3>
              <p className="text-gray-700">Yes. Golf equipment storage is a popular seasonal service for Dubai Hills residents and Dubai Hills Golf Club members. We store full sets of golf clubs, golf bags, electric trolleys, push trolleys, golf shoes, apparel, and related equipment. For the hot summer months (May–September) when golf is less actively played, many Dubai Hills residents store their full golf kit with us rather than leaving it in car boots or garages where heat can damage club grips, bags, and electronic components. Contact us to arrange seasonal golf equipment storage.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Are Nad Al Sheba residents covered by Dubai Hills SafeStorage?</h3>
              <p className="text-gray-700">Yes. Nad Al Sheba — all four sections (1, 2, 3, 4) — is within our Dubai Hills service zone. Nad Al Sheba has both older villa communities and newer developments and all receive free pickup and delivery from SafeStorage. Nad Al Sheba 3 and 4, being newer Emaar-developed communities, are particularly active for our renovation and new-handover storage services. Pickup times from Nad Al Sheba are typically 15–20 minutes.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I access or retrieve specific items stored from my Dubai Hills villa?</h3>
              <p className="text-gray-700">Yes. All items stored from your Dubai Hills villa are photographed and catalogued in a digital inventory you can access. If you need specific items returned — for example, a specific chair for your temporary apartment, a specific document, or seasonal clothing — you can request those specific items and we will deliver them to any Dubai address within 24–48 hours. There is no requirement to retrieve everything at once. Partial retrievals are handled at no extra charge on most plans. This is particularly useful for customers waiting for long Dubai Hills villa renovations.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for Dubai Hills customers?</h3>
              <p className="text-gray-700">No. There is no minimum storage period for Dubai Hills or any other SafeStorage area. You can store for as little as one week or as long as you need. Monthly billing with 14 days&apos; cancellation notice applies. This flexibility is particularly important for Dubai Hills customers waiting for villa handovers or renovation completions, where timelines are often uncertain and may extend beyond initial estimates without warning.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
