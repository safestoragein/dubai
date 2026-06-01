import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Al Barsha Storage Dubai — Free Home Pickup",
  description:
    "Storage in Al Barsha 1, 2, 3 & 4 Dubai. Hassle-free pickup from your home or office. Climate-controlled units from AED 9/month. Barsha Heights & Tecom also covered. Call +971505773388.",
  keywords:
    "al barsha storage dubai, storage al barsha 1, storage al barsha 2, storage near mall of the emirates, barsha heights storage, tecom storage dubai, al barsha self storage",
  openGraph: {
    title: "Al Barsha Storage Dubai — Hassle-Free Pickup | SafeStorage",
    description: "Climate-controlled storage for Al Barsha 1, 2, 3, 4, Barsha Heights & Tecom. Free home pickup. From AED 9/month. Call +971505773388.",
    url: "https://safestorage.ae/locations/al-barsha",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/al-barsha",
  },
}

const alBarshaSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Al Barsha Dubai",
    description:
      "Climate-controlled storage for Al Barsha 1, 2, 3, 4, Barsha Heights and Tecom. Hassle-free pickup from your home or office. Flexible monthly plans from AED 9/month.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/al-barsha",
    areaServed: [
      { "@type": "Place", name: "Al Barsha 1" },
      { "@type": "Place", name: "Al Barsha 2" },
      { "@type": "Place", name: "Al Barsha 3" },
      { "@type": "Place", name: "Al Barsha South" },
      { "@type": "Place", name: "Barsha Heights (IMPZ)" },
      { "@type": "Place", name: "Tecom" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "241",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/al-barsha#webpage",
    name: "Al Barsha Storage Dubai — Hassle-Free Pickup | SafeStorage",
    description: "Climate-controlled storage for Al Barsha 1, 2, 3, 4, Barsha Heights and Tecom. Free home pickup.",
    url: "https://safestorage.ae/locations/al-barsha",
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
      { "@type": "ListItem", position: 3, name: "Al Barsha", item: "https://safestorage.ae/locations/al-barsha" },
    ],
  },
]

export default function AlBarshaPage() {
  return (
    <>
      <SchemaScript schema={alBarshaSchemas} />
      <LocationPage
        location="Al Barsha"
        areas={["Al Barsha 1", "Al Barsha 2", "Al Barsha 3", "Al Barsha South", "Barsha Heights (IMPZ)", "Tecom"]}
        distance="15-20 minutes"
        benefits={[
          "Hassle-free pickup from all Al Barsha sub-communities",
          "Ideal for families downsizing or renovating",
          "Business storage for Tecom and IMPZ offices",
          "Convenient mid-Dubai location — near Mall of the Emirates",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Al Barsha — Serving All Sub-Communities</h2>
          <p className="text-sm text-gray-500 mb-6">
            Al Barsha storage specialists · 241+ Al Barsha customers served · Established 2018
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Al Barsha is one of Dubai&apos;s most diverse and densely populated residential areas, encompassing
            Al Barsha 1, 2, 3, Al Barsha South, Barsha Heights (IMPZ), and Tecom. The area attracts a wide mix of
            Dubai residents — young professionals in Barsha Heights apartments, families in Al Barsha 1 and 2 villas
            and townhouses, and businesses across the Tecom and IMPZ commercial zones. SafeStorage serves every
            part of Al Barsha with the same free door-to-door pickup service and flexible plans.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Al Barsha 1 &amp; 2 — Residential Storage</h3>
              <p className="text-gray-700 mb-3">
                Al Barsha 1 and 2 are established villa and apartment communities popular with families. The mix of
                villas, townhouses, and low-rise apartment buildings creates a diverse set of storage needs — from
                families storing furniture during home renovation to residents downsizing from a villa to an apartment.
              </p>
              <p className="text-gray-700">
                SafeStorage provides hassle-free pickup from all Al Barsha 1 and 2 addresses with no parking or access
                challenges in this relatively low-density area. Our team is experienced with villa storage in
                Al Barsha, including garden furniture, swimming pool equipment, and the larger volume of contents
                that villa properties generate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Barsha Heights &amp; Tecom — Business Storage</h3>
              <p className="text-gray-700 mb-3">
                Barsha Heights (formerly IMPZ) and Tecom are home to hundreds of companies across media, technology,
                and professional services. Businesses in these zones use SafeStorage for document archiving, office
                furniture storage during relocation, and excess inventory management.
              </p>
              <p className="text-gray-700">
                Our Barsha Heights service is particularly popular with media and production companies that need
                to store equipment seasonally, and with Tecom-based businesses that archive physical documents as
                part of their compliance obligations. Same-day commercial pickup is available for Barsha Heights
                and Tecom offices for requests before 12 PM.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">All Al Barsha Areas Covered</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Al Barsha Residential</p>
                <ul className="space-y-1 text-sm">
                  <li>• Al Barsha 1 (villas &amp; apts)</li>
                  <li>• Al Barsha 2</li>
                  <li>• Al Barsha 3</li>
                  <li>• Al Barsha South 1, 2, 3</li>
                  <li>• Arjan community</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Business &amp; Commercial</p>
                <ul className="space-y-1 text-sm">
                  <li>• Barsha Heights (IMPZ)</li>
                  <li>• Tecom (Dubai Internet City adj.)</li>
                  <li>• Al Barsha 1 commercial strip</li>
                  <li>• Dubai Science Park</li>
                  <li>• Dubai Knowledge Park adj.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Nearby Areas Also Covered</p>
                <ul className="space-y-1 text-sm">
                  <li>• Mall of the Emirates area</li>
                  <li>• Al Quoz 1 &amp; 2</li>
                  <li>• Umm Suqeim 3</li>
                  <li>• Jumeirah Village Triangle (JVT)</li>
                  <li>• JVC (northern boundary)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-4">Al Barsha Customer Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We were renovating our Al Barsha 2 villa and needed to store everything for two months. SafeStorage picked everything up in one day and delivered back perfectly. Even brought back the items in the same arrangement I described. Five stars.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Fatima A., Al Barsha 2 Villa Owner</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;Our Barsha Heights office was downsizing and we needed to store 3 years of document files and some office furniture. SafeStorage indexed everything properly and retrieved specific files when we needed them. Exactly what we needed.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Mohammed R., Media Company, Barsha Heights</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Storage in Al Barsha — get your free quote in 15 minutes.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — Al Barsha Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all Al Barsha sub-communities?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers every Al Barsha sub-community including Al Barsha 1, Al Barsha 2, Al Barsha 3, Al Barsha South 1, 2, and 3, Barsha Heights (IMPZ), Tecom, and Arjan. All addresses within these communities qualify for hassle-free pickup and delivery. If your address is in or around the Mall of the Emirates area, Al Quoz, or JVT, please call us on +971505773388 and we will confirm coverage instantly — we serve all of these areas too.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How quickly can SafeStorage pick up from Al Barsha 1 or Al Barsha 2?</h3>
              <p className="text-gray-700">For requests confirmed before 12 PM, same-day pickup is typically available in Al Barsha 1 and 2. Standard pickups can be scheduled within 24 hours, with morning, afternoon, or evening time windows available Monday through Saturday. Al Barsha&apos;s location in central Dubai makes it one of our fastest service zones. For villa pickups in Al Barsha 2 or 3, we recommend booking at least 48 hours ahead to ensure the right vehicle and crew size is allocated for larger volumes.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I store furniture from a villa in Al Barsha during renovation?</h3>
              <p className="text-gray-700">Yes. Villa renovation storage in Al Barsha is one of our most common services. Our team can clear a 3–4 bedroom villa in Al Barsha in a single day, professionally packing and loading all furniture, appliances, and household contents. Everything is transported to our climate-controlled facility and stored securely until your renovation is complete. Villa renovation storage in Al Barsha typically costs AED 200–400 per month depending on the volume of contents. Get an accurate quote by sharing photos or a video of your villa contents via WhatsApp (+971505773388).</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage serve Barsha Heights apartment residents?</h3>
              <p className="text-gray-700">Yes. Barsha Heights (IMPZ) is fully covered by SafeStorage. Barsha Heights apartment residents use our service primarily for between-lease storage, apartment renovation storage, and personal household storage for items that don&apos;t fit in compact Barsha Heights units. Our team knows the building access and loading procedures for major Barsha Heights towers and can manage pickups efficiently without causing inconvenience to building management. Typical Barsha Heights 1-bedroom apartment storage costs AED 100–200 per month.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What business storage services are available for Tecom companies?</h3>
              <p className="text-gray-700">For Tecom-based businesses, SafeStorage offers document archiving with barcode-indexed retrieval, office furniture storage during office moves or downsizing, inventory and stock storage, and equipment storage for media and production companies. All business storage includes dedicated account management and detailed invoicing for your accounts department. Commercial pickup from Tecom offices is available same-day for requests before 12 PM. We regularly serve technology, media, and professional service companies across Tecom and the adjacent Dubai Internet City and Media City zones.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage near Mall of the Emirates in Al Barsha 1?</h3>
              <p className="text-gray-700">Yes. Al Barsha 1, which surrounds and includes the Mall of the Emirates area, is fully within our service zone. Residents and businesses in the Al Barsha 1 commercial strip, the residential blocks behind Mall of the Emirates, and the villa communities in Al Barsha 1 and 2 all benefit from our full pickup and delivery service. The Mall of the Emirates proximity makes Al Barsha one of our most accessible service zones in terms of our team reaching your address quickly.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can families in Al Barsha store items during home renovation or tenant change?</h3>
              <p className="text-gray-700">Absolutely. Al Barsha families represent one of our largest customer groups. The common scenarios we handle for Al Barsha families include: full villa clearance during renovation, temporary storage between lease periods when a new tenant requires the property vacant, storage of excess furniture when downsizing, and seasonal storage for items not needed year-round. Our team handles all the heavy lifting and transport — families simply indicate what to store and we do the rest, returning everything when needed.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the nearest storage facility to Al Barsha?</h3>
              <p className="text-gray-700">SafeStorage operates on a door-to-door model, meaning you never need to visit a storage facility — we come to you and store your items at our secure facility. Our facility is centrally located in the Dubai Investment Park area, which is approximately 20–25 minutes from most Al Barsha addresses. However, this distance is irrelevant to you as a customer because you never need to visit. We collect from your door and deliver back to your door. All account management is done remotely by phone, WhatsApp, or our online portal.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How does SafeStorage pricing work for Al Barsha residents?</h3>
              <p className="text-gray-700">SafeStorage pricing is volume-based and identical across all Dubai areas including Al Barsha. Starting from AED 9 per month for a small box or single item, you pay only for the actual volume you store — not a fixed unit size. A typical Al Barsha 1-bedroom apartment costs AED 100–200 per month to store. A 3-bedroom villa contents would typically be AED 250–450 per month. All prices include hassle-free pickup, climate-controlled storage, insurance, and on-demand delivery. There are no additional charges based on location or building type.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you store large appliances like washing machines and fridges from Al Barsha apartments?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores all types of household appliances including washing machines, dryers, refrigerators, dishwashers, air conditioning units, and other large appliances. For appliances, we recommend basic preparation (draining water from washing machines, defrosting fridges) before collection, or our team can assist with this during pickup for a small additional charge. All appliances are wrapped and stored upright where required (washing machines, fridges) to prevent damage. Appliances stored in our climate-controlled facility are protected from the humidity and temperature extremes that can damage electronics and seals if stored outdoors or in non-climate-controlled spaces.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for Al Barsha customers?</h3>
              <p className="text-gray-700">No. There is no minimum storage period for Al Barsha or any other area. SafeStorage can store items for as short as one week. Our billing is monthly with no lock-in contract. You can cancel at any time with 14 days&apos; notice. This flexibility is particularly valued by Al Barsha residents undergoing flat renovations with unpredictable completion timelines — you pay only for the months you actually use, with no penalties if renovation finishes sooner than expected.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I retrieve specific items from my Al Barsha storage without collecting everything?</h3>
              <p className="text-gray-700">Yes. Partial retrieval is fully supported. When you book storage with SafeStorage, all your items are photographed and catalogued in your digital inventory. If you want specific items back — for example, a specific piece of furniture or a box of documents — simply request those specific items via phone or WhatsApp, and we deliver only those items to your Al Barsha address within 24–48 hours. The rest of your items remain in storage. There is no requirement to collect everything at once, and no penalty for frequent partial retrievals.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
