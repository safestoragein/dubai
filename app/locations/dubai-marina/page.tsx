import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Furniture Storage — Dubai Marina & JBR Renovation",
  description:
    "Renovating your Dubai Marina or JBR apartment? Store furniture safely during renovation — from 1 week. Short-term storage between leases also available. Hassle-free pickup from Marina & JBR. Call +971505773388.",
  keywords:
    "furniture storage during renovation dubai marina, short term storage between leases JBR dubai, storage JBR dubai, storage during renovation marina, temporary furniture storage marina, lease gap storage dubai marina",
  openGraph: {
    title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
    description: "Short-term storage during renovations or between leases in Dubai Marina & JBR. Hassle-free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-marina",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-marina",
  },
}

const dubaiMarinaSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Near Dubai Marina & JBR',
    description: 'Furniture storage during renovation in Dubai Marina & JBR. Short-term storage between leases. Hassle-free pickup from Marina & JBR.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/dubai-marina',
    areaServed: [
      { '@type': 'Place', name: 'Dubai Marina' },
      { '@type': 'Place', name: 'JBR' },
      { '@type': 'Place', name: 'Bluewaters' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/dubai-marina#webpage',
    name: 'Furniture Storage During Renovation Dubai Marina & JBR',
    description: 'Renovating your Dubai Marina apartment? Store furniture safely during renovation. Hassle-free pickup from Marina & JBR.',
    url: 'https://safestorage.ae/locations/dubai-marina',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Dubai Marina', item: 'https://safestorage.ae/locations/dubai-marina' },
    ],
  },
]

export default function DubaiMarinaPage() {
  return (
    <>
    <SchemaScript schema={dubaiMarinaSchemas} />
    <LocationPage
      location="Dubai Marina"
      areas={["Dubai Marina", "JBR", "Marina Walk", "Dubai Marina Mall area", "Bluewaters"]}
      distance="15-20 minutes"
      benefits={[
        "Hassle-free pickup from your Marina apartment",
        "Quick access via Sheikh Zayed Road",
        "Ideal for Marina residents downsizing",
        "Perfect for storing beach and water sports equipment"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Near Dubai Marina &amp; JBR</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage provides premium, secure storage for residents of Dubai Marina, Jumeirah Beach
          Residence (JBR), Marina Walk, and Bluewaters Island. Our facility is easily accessible from Sheikh Zayed
          Road, with hassle-free pickup and delivery service direct to your doorstep across the Marina area.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Furniture Storage During Renovation — Dubai Marina</h3>
            <p className="text-gray-700 mb-3">
              Dubai Marina and JBR apartments frequently undergo renovations, and storing furniture during that
              period is a common challenge. SafeStorage makes it simple: we collect your sofas, beds, dining
              tables, wardrobes, and appliances from your apartment, store them in a fully secure unit,
              and return everything once your renovation is complete.
            </p>
            <p className="text-gray-700">
              Our short-term storage plans start from as little as 1 week, with no minimum contract required.
              Prices are transparent and based on the volume of items stored, not a fixed unit size. This makes
              SafeStorage the most flexible and cost-effective option for Marina residents.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Short-Term Storage Between Leases — JBR</h3>
            <p className="text-gray-700 mb-3">
              The gap between lease end dates and new tenancy start dates is one of the most stressful periods
              for Dubai Marina residents. SafeStorage bridges that gap, storing your belongings safely for days,
              weeks, or months while you transition between apartments.
            </p>
            <p className="text-gray-700">
              With same-day pickup available (for requests before 12 PM) and next-day delivery, you can move out
              of one property, place your items in secure storage, and collect them when your new home is ready.
              Our team handles all the heavy lifting at both ends.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Covered from Our Dubai Marina Service Zone</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Marina &amp; JBR</p>
              <ul className="space-y-1 text-sm">
                <li>• Dubai Marina Towers</li>
                <li>• Jumeirah Beach Residence</li>
                <li>• Marina Walk</li>
                <li>• The Walk at JBR</li>
                <li>• Bluewaters Island</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Nearby Communities</p>
              <ul className="space-y-1 text-sm">
                <li>• JLT (Jumeirah Lake Towers)</li>
                <li>• Dubai Media City</li>
                <li>• Dubai Internet City</li>
                <li>• Knowledge Park</li>
                <li>• Al Sufouh</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Palm &amp; Beyond</p>
              <ul className="space-y-1 text-sm">
                <li>• Palm Jumeirah</li>
                <li>• The Greens</li>
                <li>• The Views</li>
                <li>• Dubai Sports City</li>
                <li>• Motor City</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Popular Storage Uses in Dubai Marina</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Apartment renovation storage:</strong> Keep your furniture and belongings protected while contractors work</li>
            <li>• <strong>Between-lease storage:</strong> Bridge the gap between old and new tenancy with flexible short-term plans</li>
            <li>• <strong>Downsizing storage:</strong> Moving to a smaller unit? Keep the overflow in secure storage</li>
            <li>• <strong>Beach &amp; water sports equipment:</strong> Kayaks, paddleboards, jet skis, and sports gear stored safely year-round</li>
            <li>• <strong>Expat repatriation storage:</strong> Keep belongings safely in Dubai while you decide what to ship home</li>
            <li>• <strong>Seasonal items:</strong> Holiday decorations, winter clothes, and items not needed year-round</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Need storage in Dubai Marina or JBR? Get your free quote now.
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>

    {/* Extended Detail Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Dubai Marina Storage — Everything You Need to Know</h2>
        <p className="text-lg text-gray-700 mb-6">
          Dubai Marina is one of the most sought-after residential addresses in the UAE — a vibrant waterfront community packed with luxury towers, marina-front dining, and easy beach access. With premium real estate comes premium square-metre prices, which means apartment storage is minimal and residents frequently need external storage for the overflow. SafeStorage is the preferred storage provider for Dubai Marina, JBR, JLT, and the surrounding western Dubai communities precisely because we eliminate every inconvenience of the storage process.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our Dubai Marina service zone is staffed with teams who know the area&apos;s tower access protocols intimately — from marina-front towers on the promenade to JBR&apos;s Murjan and Bahar clusters to the residential blocks of JLT. We manage building concierge requirements, loading bay access, lift logistics, and parking in high-density zones like Marina and JBR without any inconvenience to you. Simply pack your items if desired or leave everything to us, and we handle the rest from collection to secure storage to on-demand delivery.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">JLT (Jumeirah Lake Towers) Storage</h3>
            <p className="text-gray-700 mb-3">Jumeirah Lake Towers is a major mixed-use community adjacent to Dubai Marina, home to both residential towers and significant office space. JLT residents benefit from SafeStorage&apos;s same standards of hassle-free pickup, secure storage, and flexible monthly plans. JLT is also a hub for small and medium businesses, many of which use SafeStorage for document archiving and commercial storage.</p>
            <p className="text-gray-700">The proximity of JLT to the DMCC Free Zone makes it a key area for businesses with document archiving needs. SafeStorage collects directly from JLT offices and provides on-demand retrieval, helping DMCC-registered companies manage their compliance records efficiently without using expensive office space for dead files.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">The Greens, The Views &amp; JVC Coverage</h3>
            <p className="text-gray-700 mb-3">The Greens and The Views are established, mature communities popular with long-term Dubai residents and families. These villa-apartment communities have a strong demand for household storage, particularly for residents who are renovating, downsizing, or in the middle of lease transitions. SafeStorage covers both The Greens and The Views within our Dubai Marina service zone.</p>
            <p className="text-gray-700">Jumeirah Village Circle (JVC), bordering both the Marina zone and the DIP zone, is also fully covered. JVC&apos;s large residential population and mix of apartments and townhouses creates significant demand for flexible storage — both short-term for renovations and lease gaps, and long-term for personal storage needs.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Pricing for Dubai Marina &amp; JBR Residents</h3>
          <p className="text-gray-700 mb-4">SafeStorage pricing is transparent, volume-based, and identical across all Dubai areas including premium zones like Marina and JBR. There are no location premiums or surcharges for high-rise access:</p>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg p-8 border-2 border-[#0A2463] text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-2">Pricing starts from 12.60 AED / sqft</p>
              <p className="text-sm text-gray-600">VAT-inclusive · all unit sizes · hassle-free pickup &amp; delivery included</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Dubai Marina &amp; JBR Storage</h2>
        <p className="text-gray-600 text-center mb-10">Everything residents of Dubai Marina, JBR, JLT, The Greens, and Palm Jumeirah need to know about SafeStorage.</p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I store furniture during my Dubai Marina apartment renovation?</h3>
            <p className="text-gray-700">The process is very simple with SafeStorage. Contact us by phone or WhatsApp (+971505773388), share a list or photos of the furniture you need to store, and receive a transparent quote. Once confirmed, we arrive at your Marina apartment on the scheduled date, professionally wrap and protect all furniture pieces, load them into our covered vehicle, and transport them to our secure facility. We store everything until your renovation is complete, then return all items to your apartment floor. Renovation storage plans start from one week with no minimum commitment required.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can SafeStorage help when my JBR lease ends before my new apartment is ready?</h3>
            <p className="text-gray-700">Absolutely — this is one of our most common service requests in JBR and across Dubai Marina. When your JBR lease ends and your new apartment is not yet available, SafeStorage bridges the gap by storing all your belongings safely while you are in temporary accommodation. We can pick up from your current apartment on or before your lease end date and deliver everything to your new address once it is ready. The storage plan runs month-to-month with no penalties for short stays. Call us early to secure a pickup slot on your preferred move-out date.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is Palm Jumeirah included in the Dubai Marina service zone?</h3>
            <p className="text-gray-700">Yes, Palm Jumeirah is fully covered within our Dubai Marina service zone. We serve all parts of the Palm — the Trunk, all numbered Fronds, and the Crescent including Atlantis, One Palm, and the Waldorf Astoria residences. Given the Palm&apos;s unique layout and the value of property there, we treat all Palm Jumeirah pickups with the same care and professionalism as any luxury residential service. Our team is experienced with the Palm&apos;s access roads and building procedures for both the Signature Villas and the Shoreline Apartments.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you store water sports equipment like kayaks, paddleboards, and jet skis?</h3>
            <p className="text-gray-700">Yes, SafeStorage stores a wide range of water sports and beach equipment including kayaks, paddleboards, surfboards, bodyboards, wetsuits, diving equipment, fishing gear, and inflatable watercraft. We provide appropriate wrapping and support to prevent damage during storage. Jet skis and personal watercraft can also be stored in our vehicle storage bays with proper preparation. Dubai Marina and JBR residents are some of our biggest customers for water sports storage given the proximity to the beach and marina. Contact us to discuss the specific equipment you need to store.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the fastest way to get same-day pickup in Dubai Marina?</h3>
            <p className="text-gray-700">The fastest way to secure same-day pickup in Dubai Marina is to WhatsApp us on +971505773388 before 10 AM on a working day (Monday through Saturday). This gives our scheduling team the maximum time to fit you into the day&apos;s pickup schedule. In your WhatsApp message, include your building name and unit number, a brief description of what you need to store (or photos), and your preferred time window for the same day. We will confirm availability and pricing within minutes. Same-day service is subject to availability but is possible in most Dubai Marina, JBR, and JLT locations on most working days.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage serve Dubai Media City and Dubai Internet City residents?</h3>
            <p className="text-gray-700">Yes, Dubai Media City and Dubai Internet City residential communities are fully covered within our Dubai Marina service zone. Both free zones have growing residential populations in addition to their office communities. Residents in Media City and Internet City apartment complexes use SafeStorage for the same range of services as Marina residents — renovation storage, between-lease storage, and personal household storage. Businesses based in these free zones also use our document archiving and commercial storage services.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How are my furniture items protected during collection and storage?</h3>
            <p className="text-gray-700">SafeStorage takes careful handling seriously, especially for the high-quality furniture common in Marina and JBR apartments. All furniture is protected using thick furniture blankets, corner protectors, stretch film wrapping, and bubble wrap for delicate surfaces and glass components. Mattresses are protected in sealed mattress covers. Items are loaded into our enclosed, clean moving vehicles and secured during transport. In storage, all furniture is placed on raised platforms to keep it off the floor and stored away from walls to ensure proper airflow, keeping your belongings clean and protected.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I access my stored items in person if needed?</h3>
            <p className="text-gray-700">Yes, customers can arrange to visit the SafeStorage facility by appointment to access their stored items in person. Simply contact your storage consultant to schedule a visit during facility operating hours. However, most customers find the on-demand delivery service more convenient — simply request the specific items you need and they will be delivered to your Dubai Marina address within 24 hours. For large quantities, we can deliver in batches. There is no requirement to visit the facility, and many customers manage their entire storage experience remotely.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What happens to my insurance if something is damaged during pickup or delivery?</h3>
            <p className="text-gray-700">All items stored with SafeStorage are covered by complimentary insurance against theft, fire, flood, and accidental damage while in our facility. Our insurance also covers damage during the pickup and delivery process caused by our team. In the unlikely event of damage, customers should report it to their storage consultant within 48 hours of delivery. We will initiate a claims process to assess the damage and arrange appropriate compensation or replacement. Extended insurance is available for high-value items at an additional premium — ask your consultant if you have items worth more than the standard coverage threshold.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I get a quote for storing my entire Marina apartment during a long trip abroad?</h3>
            <p className="text-gray-700">For whole-apartment storage during an extended trip, the quickest way to get a quote is to share a short video walkthrough of your apartment via WhatsApp (+971505773388). This allows our team to assess the volume of items and give you an accurate quote within a few hours. Alternatively, you can call us and answer a few questions about your apartment size and the items you want to store. Whole-apartment storage for a 1-bedroom Dubai Marina apartment starts from 12.60 AED / sqft (VAT-inclusive), and includes free collection, secure storage, insurance, and one hassle-free delivery when you return.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there parking available when SafeStorage collects from my JBR apartment?</h3>
            <p className="text-gray-700">Our experienced Dubai Marina team knows JBR&apos;s parking and access procedures well. For JBR pickups, we typically use designated loading bays available in each cluster, and our team coordinates with building management as required. In busy areas like JBR where parking is limited, we plan pickup times to minimise disruption and use the most appropriate vehicle size for efficient access. You do not need to arrange parking for our team — just let us know your cluster and building number when booking and we will handle the logistics.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can an expat leaving Dubai from the Marina area store their belongings long-term?</h3>
            <p className="text-gray-700">Yes, SafeStorage is an excellent solution for expats leaving Dubai who are not ready to ship all their belongings home immediately. Our flexible month-to-month plans have no lock-in and no minimum contract length. Many expats from Dubai Marina and JBR store their furniture, clothing, and personal items with us while they settle in their home country and decide what to ship, sell, or donate. We can arrange international shipping for your stored items when you are ready, or return items to a Dubai address if you decide to come back. This approach is often far more cost-effective than paying for international shipping before you know what you actually want.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}