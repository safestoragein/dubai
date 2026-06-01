import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Deira & Bur Dubai Storage — Hassle-Free Pickup",
  description:
    "Storage in Deira, Bur Dubai, Karama & Oud Metha. Hassle-free pickup from your home or office. Climate-controlled units from AED 9/month. Old Dubai area specialists. Call +971505773388.",
  keywords:
    "deira storage dubai, bur dubai storage, karama storage, storage deira, self storage bur dubai, oud metha storage, old dubai storage units",
  openGraph: {
    title: "Deira & Bur Dubai Storage — Hassle-Free Pickup | SafeStorage",
    description: "Climate-controlled storage for Deira, Bur Dubai, Karama & Oud Metha. Hassle-free pickup from your door. Call +971505773388.",
    url: "https://safestorage.ae/locations/deira",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/deira",
  },
}

const deiraSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Deira, Bur Dubai & Old Dubai",
    description:
      "Climate-controlled storage for Deira, Bur Dubai, Karama, Oud Metha, and all old Dubai areas. Hassle-free door-to-door pickup. Flexible monthly plans from AED 9/month.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/deira",
    areaServed: [
      { "@type": "Place", name: "Deira" },
      { "@type": "Place", name: "Bur Dubai" },
      { "@type": "Place", name: "Karama" },
      { "@type": "Place", name: "Oud Metha" },
      { "@type": "Place", name: "Al Rigga" },
      { "@type": "Place", name: "Al Garhoud" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "203",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/deira#webpage",
    name: "Deira & Bur Dubai Storage — Hassle-Free Pickup | SafeStorage",
    description: "Climate-controlled storage for Deira, Bur Dubai, Karama & Oud Metha. Hassle-free pickup from your door.",
    url: "https://safestorage.ae/locations/deira",
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
      { "@type": "ListItem", position: 3, name: "Deira & Bur Dubai", item: "https://safestorage.ae/locations/deira" },
    ],
  },
]

export default function DeiraPage() {
  return (
    <>
      <SchemaScript schema={deiraSchemas} />
      <LocationPage
        location="Deira & Bur Dubai"
        areas={["Deira", "Bur Dubai", "Karama", "Oud Metha", "Al Rigga", "Al Garhoud", "Al Mankhool", "Al Qusais"]}
        distance="20-25 minutes"
        benefits={[
          "Hassle-free pickup from apartments and flats across old Dubai",
          "Ideal for traders and businesses storing inventory",
          "Affordable rates that suit old Dubai&apos;s diverse community",
          "Experienced team familiar with old Dubai building access",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Deira, Bur Dubai &amp; Karama</h2>
          <p className="text-sm text-gray-500 mb-6">
            Old Dubai storage specialists · 203+ customers in Deira &amp; Bur Dubai · Active since 2019
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Deira and Bur Dubai are the historical heart of Dubai — a vibrant, densely populated mosaic of
            residential apartments, trading businesses, souks, and commercial zones. With some of the highest
            population densities in the emirate, these areas have significant demand for affordable, accessible
            storage. SafeStorage serves all of old Dubai with the same hassle-free door-to-door pickup and flexible
            monthly pricing available elsewhere in the city.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Old Dubai&apos;s diverse resident population — including long-established South Asian communities,
            Arab families, and a constantly moving expat workforce — creates a wide range of storage needs.
            From a Karama family storing furniture between flats to a Deira trader archiving business records,
            SafeStorage provides practical, trustworthy storage accessible to everyone.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Apartment &amp; Residential Storage — Deira &amp; Bur Dubai</h3>
              <p className="text-gray-700 mb-3">
                Deira and Bur Dubai are characterised by high-density residential blocks — largely older buildings
                with compact apartments and limited built-in storage. Residents frequently need external storage
                for items that simply don&apos;t fit: spare furniture, seasonal items, suitcases, electronics,
                and accumulated household belongings.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s volume-based pricing is ideal for Deira and Bur Dubai residents who want to store
                specific items rather than pay for an entire storage unit. Starting from AED 9 per month per item,
                residents can store just what they need and pay only for that — no wasted space, no fixed unit costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Business &amp; Trade Storage — Deira Traders</h3>
              <p className="text-gray-700 mb-3">
                Deira is one of Dubai&apos;s most important trading districts, home to the Gold Souk, Spice Souk,
                textile traders, electronics traders, and thousands of small businesses. Many Deira businesses
                need flexible, affordable storage for excess stock, seasonal inventory, business documents, and
                office equipment.
              </p>
              <p className="text-gray-700">
                SafeStorage provides dedicated business storage accounts for Deira traders and companies, with
                multiple-access options, barcode-indexed document archiving, and inventory management. Commercial
                pickups from Deira warehouses, offices, and shops are available with appropriate vehicle sizes
                for any volume of commercial stock.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Covered — Deira, Bur Dubai &amp; Surroundings</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Deira Areas</p>
                <ul className="space-y-1 text-sm">
                  <li>• Deira City Centre area</li>
                  <li>• Al Rigga &amp; Al Muteena</li>
                  <li>• Al Baraha</li>
                  <li>• Naif &amp; Gold Souk area</li>
                  <li>• Al Mamzar &amp; Hamriya</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Bur Dubai &amp; Karama</p>
                <ul className="space-y-1 text-sm">
                  <li>• Bur Dubai (all areas)</li>
                  <li>• Al Karama</li>
                  <li>• Al Mankhool</li>
                  <li>• Oud Metha</li>
                  <li>• Al Jaddaf</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Extended Coverage</p>
                <ul className="space-y-1 text-sm">
                  <li>• Al Garhoud</li>
                  <li>• Al Qusais</li>
                  <li>• Al Nahda (Dubai)</li>
                  <li>• Al Twar</li>
                  <li>• Umm Ramool</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">What Old Dubai Customers Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;I needed to store my entire flat contents from Karama for 2 months while I visited family in India. SafeStorage picked everything up in one morning and returned it perfectly when I came back. Honest pricing and very trustworthy team.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Rajan K., Karama Apartment Resident</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;My Deira trading business needed to archive 5 years of documents and store excess stock. SafeStorage organized everything with barcodes and retrieved exactly what I needed within a day. Very professional.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Imran A., Trading Business, Deira</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Storage in Deira, Bur Dubai or Karama — get your free quote today.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — Deira &amp; Bur Dubai Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all areas of Deira and Bur Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers all Deira and Bur Dubai areas including Al Rigga, Naif, Al Baraha, Al Muteena, Al Mamzar, Hamriya, Deira City Centre area, Bur Dubai, Al Karama, Al Mankhool, Oud Metha, Al Jaddaf, Al Garhoud, and Al Qusais. We also cover Al Nahda (Dubai side), Al Twar, and Umm Ramool. Call +971505773388 with your building name and area and we will confirm pickup availability immediately.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How does SafeStorage handle older Deira and Bur Dubai buildings that may not have service lifts?</h3>
              <p className="text-gray-700">Our team is fully equipped and experienced for older building pickups, including buildings without service lifts, narrow staircases, and older construction that requires manual carrying of items. We allocate additional team members for buildings without service lifts and use appropriate equipment (trolleys, carrying straps, furniture blankets) to move items safely without damage to your belongings or the building. There is no extra charge for older buildings or walkup floors in most cases — though we appreciate advance notice for buildings above 4 floors without a lift so we can allocate the right team size.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can Deira and Bur Dubai residents store items temporarily while visiting family abroad?</h3>
              <p className="text-gray-700">Yes. This is one of the most common use cases in Deira and Bur Dubai, where many long-term expat residents travel to their home countries for extended visits. SafeStorage provides flexible month-to-month storage with no minimum period. We can pick up your apartment contents before you leave, store everything securely in climate-controlled conditions during your absence, and return everything when you come back. Many Deira and Karama residents use this service annually, and we offer recurring annual storage arrangements with preferential rates for regular customers.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What business storage services are available for Deira trading companies?</h3>
              <p className="text-gray-700">SafeStorage provides dedicated business storage for Deira trading companies including inventory and stock storage with catalogued management, document archiving with barcode indexing and on-demand retrieval, office furniture storage during relocation or renovation, and equipment storage. We work with textiles traders, electronics businesses, commodity traders, and professional service firms across Deira. Commercial accounts include dedicated invoicing, multiple authorised users, and a dedicated account manager. Call +971505773388 to discuss your specific business storage requirements.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is the Karama shopping area and residential community covered?</h3>
              <p className="text-gray-700">Yes. Al Karama is fully covered by SafeStorage. Both Karama&apos;s residential apartment blocks and its commercial areas are within our service zone. Karama residents are among our most frequent users given the high density of older apartment buildings with minimal built-in storage. We serve all Karama streets and buildings, and our team is familiar with the area&apos;s parking and access challenges. Typical pickup times from Karama are 20–25 minutes from confirmation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage handle shared room or flatshare storage in Deira?</h3>
              <p className="text-gray-700">Yes. Many Deira residents live in shared accommodation where they have personal belongings but limited private space. SafeStorage can store an individual&apos;s personal items — clothes, electronics, personal boxes — under a single account even from a shared living situation. For small volumes, our item-based pricing from AED 9 per month makes storage accessible for individuals rather than requiring a full apartment clearance. Simply list or photograph your specific items and we will store them separately from any shared household contents.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How much does it cost to store a Karama or Bur Dubai apartment?</h3>
              <p className="text-gray-700">SafeStorage pricing is the same across all Dubai areas — including Karama and Bur Dubai. A typical Karama 1-bedroom apartment contents cost AED 100–180 per month to store. A Bur Dubai 2-bedroom apartment typically costs AED 180–300 per month. For smaller volumes — a few boxes, a sofa, seasonal items — item-based pricing starts from AED 9/month per item. All prices include hassle-free pickup, climate-controlled storage, insurance, and on-demand delivery. Get an accurate quote by calling +971505773388 or submitting our online form.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage serve the Oud Metha and Al Jaddaf areas?</h3>
              <p className="text-gray-700">Yes. Oud Metha and Al Jaddaf are both within our Deira and Bur Dubai service zone. Oud Metha&apos;s mix of hospitals, schools, residential blocks, and the Oud Metha metro area are all covered. Al Jaddaf — a rapidly developing area with a mix of older and newer residential buildings adjacent to the Dubai Creek — is also fully covered. Residents in both areas receive hassle-free pickup and the full range of SafeStorage services. Typical pickup times from Oud Metha and Al Jaddaf are 20 minutes.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage available near Deira City Centre mall?</h3>
              <p className="text-gray-700">Yes. The Deira City Centre area — including all residential towers and apartments within walking distance of the mall and in the surrounding Al Rigga and Muteena communities — is fully covered by SafeStorage. This is a high-density residential area with many apartments and a correspondingly high demand for storage. Our team can reach most Deira City Centre area addresses within 20–25 minutes of confirmation.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store furniture from an Oud Metha hospital accommodation?</h3>
              <p className="text-gray-700">Yes. Oud Metha is home to several hospitals and medical facilities with associated staff accommodation. Healthcare workers on contract in Dubai often need temporary storage when transitioning between accommodation placements, returning home between contracts, or arriving in Dubai and waiting for permanent housing. SafeStorage provides flexible storage for healthcare workers and other professionals in transient or contract housing situations. Month-to-month plans with no minimum period are ideal for the unpredictable timelines of contract work.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How does SafeStorage reach Deira across the Creek from areas like Bur Dubai?</h3>
              <p className="text-gray-700">SafeStorage operates across both sides of the Dubai Creek using the Al Maktoum Bridge and Al Garhoud Bridge to serve both Deira and Bur Dubai efficiently. For very large commercial pickups requiring multiple vehicle trips, we plan routes to minimise crossing time. For standard residential pickups, our team in the area uses the most efficient route available based on real-time traffic. There is no additional charge or delay associated with the Creek crossing — all Deira and Bur Dubai pickups are priced and timed the same as any other service in the area.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for Deira and Bur Dubai customers?</h3>
              <p className="text-gray-700">No minimum storage period applies for any SafeStorage customer, including those in Deira and Bur Dubai. You can store for one week, one month, or several years. Monthly billing means you pay only for the time you use. Cancellations require just 14 days&apos; notice. This flexible approach is well-suited to old Dubai&apos;s transient community where residents often have uncertain timelines — whether waiting for a new apartment, between job contracts, or visiting family abroad.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
