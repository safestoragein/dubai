import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Mirdif Storage Dubai — Villa & Family Storage",
  description:
    "Storage in Mirdif, Rashidiya & Muhaisnah Dubai. Hassle-free pickup from villas and apartments. Climate-controlled, flexible plans from AED 9/month. Same-day available. Call +971505773388.",
  keywords:
    "mirdif storage dubai, storage mirdif, mirdif self storage, rashidiya storage dubai, storage near mirdif city centre, east dubai storage, muhaisnah storage",
  openGraph: {
    title: "Mirdif Storage Dubai — Villa & Family Pickup | SafeStorage",
    description: "Hassle-free pickup storage for Mirdif villas and apartments. Climate-controlled, from AED 9/month. Rashidiya also covered. Call +971505773388.",
    url: "https://safestorage.ae/locations/mirdif",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/mirdif",
  },
}

const mirdifSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Mirdif & East Dubai",
    description:
      "Climate-controlled storage for Mirdif, Rashidiya, Muhaisnah, and east Dubai residents. Hassle-free pickup from villas and apartments. Flexible monthly plans from AED 9/month.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/mirdif",
    areaServed: [
      { "@type": "Place", name: "Mirdif" },
      { "@type": "Place", name: "Rashidiya" },
      { "@type": "Place", name: "Muhaisnah" },
      { "@type": "Place", name: "Al Warqa" },
      { "@type": "Place", name: "Nad Al Sheba" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "176",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/mirdif#webpage",
    name: "Mirdif Storage Dubai — Villa & Family Pickup | SafeStorage",
    description: "Hassle-free pickup storage for Mirdif villas and apartments. Climate-controlled. Rashidiya also covered.",
    url: "https://safestorage.ae/locations/mirdif",
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
      { "@type": "ListItem", position: 3, name: "Mirdif", item: "https://safestorage.ae/locations/mirdif" },
    ],
  },
]

export default function MirdifPage() {
  return (
    <>
      <SchemaScript schema={mirdifSchemas} />
      <LocationPage
        location="Mirdif"
        areas={["Mirdif (all phases)", "Rashidiya", "Muhaisnah", "Al Warqa", "Nad Al Sheba", "Uptown Mirdif"]}
        distance="20-25 minutes"
        benefits={[
          "Hassle-free pickup from Mirdif villas and townhouses",
          "Ideal for families with large villa storage needs",
          "East Dubai specialists — experienced with Mirdif community",
          "Rashidiya and Al Warqa also fully covered",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Mirdif, Rashidiya &amp; East Dubai</h2>
          <p className="text-sm text-gray-500 mb-6">
            East Dubai storage specialists · 176+ Mirdif &amp; Rashidiya customers · Serving East Dubai since 2019
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Mirdif is one of Dubai&apos;s most established and family-oriented residential communities, known for
            its spacious villas, low-rise apartments, strong UAE national community, and proximity to Dubai
            International Airport. SafeStorage serves all parts of Mirdif — from the original Mirdif villa
            communities near Mirdif City Centre to the newer Uptown Mirdif townhouses and the surrounding areas
            of Rashidiya, Muhaisnah, Al Warqa, and Nad Al Sheba.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Mirdif&apos;s family-focused character creates distinct storage needs — larger volumes from spacious villas,
            significant demand for long-term storage during extended family travel, and a community where trusted,
            respectful service matters. SafeStorage&apos;s team brings the same professional, discreet approach to
            every Mirdif pickup, working within the community&apos;s cultural norms and residential character.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Storage — Mirdif Community</h3>
              <p className="text-gray-700 mb-3">
                Mirdif&apos;s villa communities — characterised by generous plot sizes, enclosed gardens, and multi-car
                garages — generate substantial storage volumes when families renovate, relocate, or need to free
                up space. SafeStorage provides full-villa clearance for Mirdif villas with professional packing,
                climate-controlled storage, and on-demand delivery.
              </p>
              <p className="text-gray-700">
                Our Mirdif team is experienced with the area&apos;s villa layouts and access requirements. We work
                respectfully and discreetly within Mirdif&apos;s residential character, with uniformed professional
                teams who handle your belongings with care. Large-volume villa pickups are managed with appropriate
                vehicle sizes to minimise trips and minimise disruption to neighbours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Long-Term Storage — Extended Travel &amp; Relocation</h3>
              <p className="text-gray-700 mb-3">
                Many Mirdif residents — particularly UAE national families and long-term expatriate residents —
                travel abroad for extended periods (summer holidays, Ramadan, school breaks, family visits) and
                need secure, reliable storage for their belongings during these absences. SafeStorage provides
                the ideal solution with flexible monthly plans and complete peace of mind.
              </p>
              <p className="text-gray-700">
                All stored items are maintained in climate-controlled conditions during Dubai&apos;s extreme summer
                months, protecting furniture, electronics, clothing, and personal items from heat damage and
                humidity. Your belongings are monitored 24/7 and fully insured throughout the storage period.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Mirdif &amp; East Dubai Areas Covered</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Mirdif Communities</p>
                <ul className="space-y-1 text-sm">
                  <li>• Mirdif Phase 1, 2, 3</li>
                  <li>• Uptown Mirdif</li>
                  <li>• Mirdif Hills</li>
                  <li>• Shorooq area</li>
                  <li>• Mirdif City Centre vicinity</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">East Dubai Areas</p>
                <ul className="space-y-1 text-sm">
                  <li>• Rashidiya</li>
                  <li>• Muhaisnah 1, 2, 3, 4</li>
                  <li>• Al Warqa 1, 2, 3, 4, 5</li>
                  <li>• Nad Al Sheba</li>
                  <li>• Al Mizhar</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Airport Area</p>
                <ul className="space-y-1 text-sm">
                  <li>• Garhoud</li>
                  <li>• Al Twar</li>
                  <li>• Dubai Festival City adj.</li>
                  <li>• Al Qusais</li>
                  <li>• Al Nahda (Dubai side)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">Mirdif Customer Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We were renovating our Mirdif villa and had to clear everything within a week. SafeStorage sent a professional crew, handled everything carefully, and returned our belongings in perfect condition two months later. I was impressed by how organized and respectful the team was.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Hessa A., Mirdif Villa Owner</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We travel every summer for 3 months and used SafeStorage to store our furniture and valuables while we were away. Returned to find everything exactly as we left it. Climate control made all the difference — nothing was damaged by the heat.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Tariq M., Rashidiya Community</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Storage in Mirdif — hassle-free pickup from your villa or apartment.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — Mirdif Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all parts of Mirdif including the newer Uptown Mirdif area?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers all Mirdif areas — the original Mirdif villa communities (Phases 1, 2, and 3), Uptown Mirdif townhouses, Mirdif Hills, and the Shorooq community. All Mirdif addresses qualify for our hassle-free pickup and delivery service. Call +971505773388 with your specific street or community name if you want to confirm coverage, though all Mirdif addresses are within our service zone.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store a full Mirdif villa during summer vacation?</h3>
              <p className="text-gray-700">Yes. Summer villa storage is one of our most popular services in Mirdif. Many Mirdif families — particularly UAE nationals and South Asian expats — travel abroad for extended periods during summer (May–September). SafeStorage stores your villa contents safely in climate-controlled conditions during your absence, ensuring furniture, electronics, and personal items are protected from Dubai&apos;s extreme summer heat. You return to find everything exactly as you left it. Annual plans (saving 20%) are popular with families who store regularly every summer.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How does SafeStorage handle privacy and security for Mirdif villa contents?</h3>
              <p className="text-gray-700">SafeStorage takes privacy and security seriously for all customers, particularly in family-oriented communities like Mirdif where personal belongings may include valuables, family heirlooms, and privacy-sensitive items. Our team members are uniformed, trained, and subject to background checks. All items are inventoried and stored in individually secured units. Our facility uses biometric access control and 24/7 CCTV. We never share customer information or inventory details with third parties. All staff sign confidentiality agreements as part of their employment.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is Rashidiya covered by SafeStorage?</h3>
              <p className="text-gray-700">Yes. Rashidiya — located adjacent to Mirdif near Dubai International Airport — is fully within our east Dubai service zone. Rashidiya&apos;s mix of villas and apartments is served with the same hassle-free pickup and delivery as Mirdif. Rashidiya residents use SafeStorage primarily for villa renovation storage, summer holiday storage, and between-tenancy storage. Typical pickup times from Rashidiya are 20–25 minutes from confirmation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the cost of storing a Mirdif villa&apos;s contents?</h3>
              <p className="text-gray-700">Full-villa storage pricing depends on the volume of items. A typical 3-bedroom Mirdif villa costs AED 300–500 per month to store, including hassle-free pickup, climate-controlled storage, insurance, and on-demand delivery. A 4–5 bedroom villa with full furniture and contents typically costs AED 450–700 per month. These are estimates — the most accurate quote requires an assessment of your specific villa. Send us photos or a short video via WhatsApp (+971505773388) and we will provide a confirmed price within a few hours.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage move items from Mirdif to a new address in another part of Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage provides end-to-end service: we collect from your Mirdif address, store items securely, and deliver to any Dubai address when you are ready. This is ideal for families who are relocating within Dubai — you can store your Mirdif villa contents while you set up your new property, then have everything delivered once the new home is ready. We can also deliver items in stages, returning specific rooms&apos; furniture before others, so you can set up your new home gradually without being overwhelmed by everything arriving at once.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you store vehicles from Mirdif — cars, motorcycles?</h3>
              <p className="text-gray-700">Yes. SafeStorage provides vehicle storage for cars, motorcycles, and other vehicles in our secure covered bays. This service is popular among Mirdif residents who are travelling abroad for extended periods and prefer to store vehicles safely rather than leaving them parked at home. Vehicle storage includes covered bay with security monitoring, protection from Dubai&apos;s extreme heat, and basic vehicle condition checks. Standard vehicle storage rates are available on request. Contact us at +971505773388 to arrange vehicle storage pickup from any Mirdif address.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Are there female-only pickup teams available for Mirdif villa storage?</h3>
              <p className="text-gray-700">We understand that some Mirdif families prefer female-only teams entering their home, particularly for Islamic cultural reasons. SafeStorage can accommodate this request with advance notice. Please mention this preference when booking your pickup and we will assign a female team member to lead the collection at your property, with a supporting all-female team where available. We respect our customers&apos; cultural and personal preferences and aim to make every pickup comfortable and appropriate for each family.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage available near Dubai Festival City from Mirdif?</h3>
              <p className="text-gray-700">Yes. Dubai Festival City (Garhoud area), Al Jaddaf, and the Festival City Mall area are all within our east Dubai service zone, accessible from Mirdif via the Airport Road. Residents in the Festival City residential towers, the serviced apartments at Festival City, and the surrounding Garhoud community all receive our standard hassle-free pickup and delivery service. Festival City is approximately 10–15 minutes from central Mirdif, making it easy for our team to serve both areas in a single trip.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I get a same-day pickup from Mirdif?</h3>
              <p className="text-gray-700">Same-day pickup from Mirdif is available for requests confirmed before 12 PM on working days. Given Mirdif&apos;s distance from our central operations zone (approximately 20–25 minutes), same-day availability depends on daily scheduling. We recommend calling as early in the morning as possible to secure same-day service. For planned pickups — such as villa clearance before a summer vacation — we recommend booking 2–3 days in advance to ensure we can allocate the right vehicle size and team for your specific volume of items.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What east Dubai areas besides Mirdif does SafeStorage cover?</h3>
              <p className="text-gray-700">SafeStorage&apos;s east Dubai coverage extends beyond Mirdif to include Rashidiya, Muhaisnah (1–4), Al Warqa (1–5), Nad Al Sheba, Al Mizhar, Garhoud, Al Twar, Al Qusais, and Al Nahda (Dubai side). All these communities receive hassle-free pickup and delivery with the same pricing and service standards as our primary zones. East Dubai is a large and diverse area with significant residential density and we have dedicated team capacity to serve it reliably.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for Mirdif customers?</h3>
              <p className="text-gray-700">No. There is no minimum storage period for Mirdif customers. You can store for as short as one week or as long as several years. Monthly billing applies and you can cancel at any time with 14 days&apos; notice. This is particularly useful for Mirdif families who are renovating — renovation timelines are unpredictable and you want the flexibility to extend or shorten storage without penalties. SafeStorage provides that flexibility as a standard feature of every plan, not as a premium option.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
