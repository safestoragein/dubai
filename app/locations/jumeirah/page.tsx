import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Expat Storage Dubai — Moving Back Home | Jumeirah",
  description:
    "Moving back home from Jumeirah or leaving Dubai? SafeStorage offers expat-friendly storage — keep belongings safely stored while you decide what to ship. Hassle-free pickup, flexible terms, trusted by 500+ expats. Call +971505773388.",
  keywords:
    "expat storage dubai moving back home, jumeirah expat storage, leaving dubai storage, storage for expats dubai, moving out storage jumeirah, temporary storage expat dubai, repatriation storage dubai",
  openGraph: {
    title: "Expat Storage Dubai Moving Back Home | Jumeirah | SafeStorage",
    description: "Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, hassle-free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/jumeirah",
  },
}

const jumeirahSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Expat & Villa Storage Near Jumeirah Dubai',
    description: 'Expat-friendly storage in Jumeirah — keep belongings safely stored while you decide what to ship. Hassle-free pickup, flexible terms, trusted by 500+ expats.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/jumeirah',
    areaServed: [
      { '@type': 'Place', name: 'Jumeirah' },
      { '@type': 'Place', name: 'Umm Suqeim' },
      { '@type': 'Place', name: 'Al Safa' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/jumeirah#webpage',
    name: 'Expat Storage Dubai Moving Back Home | Jumeirah Storage',
    description: 'Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, hassle-free pickup.',
    url: 'https://safestorage.ae/locations/jumeirah',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Jumeirah', item: 'https://safestorage.ae/locations/jumeirah' },
    ],
  },
]

export default function JumeirahPage() {
  return (
    <>
    <SchemaScript schema={jumeirahSchemas} />
    <LocationPage
      location="Jumeirah"
      areas={["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Safa", "Al Wasl"]}
      distance="20-25 minutes"
      benefits={[
        "Hassle-free pickup from Jumeirah villas",
        "Perfect for villa renovations",
        "Seasonal storage for beach equipment",
        "Secure storage for luxury items"
      ]}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage for Jumeirah Residents &amp; Expats</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage provides trusted, climate-controlled storage for villa owners, families, and expatriates
          across Jumeirah 1, 2, 3, Umm Suqeim, Al Safa, and Al Wasl. Whether you are renovating your Jumeirah
          villa, preparing to move back home, or simply need extra space, our hassle-free pickup and delivery service
          makes storing easy from anywhere in Jumeirah.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Expat Storage — Moving Back Home from Dubai</h3>
            <p className="text-gray-700 mb-3">
              Thousands of expatriates leave Dubai every year, and deciding what to ship, sell, or store is one
              of the biggest challenges. SafeStorage offers expat-friendly storage solutions that let you keep
              your belongings safely in Dubai while you settle in your home country and figure out what you
              want to do with them.
            </p>
            <p className="text-gray-700">
              Our flexible month-to-month plans have no lock-in period and no cancellation penalties. Items can
              be shipped internationally on request, or returned to a Dubai address if you come back. Trusted
              by hundreds of expats from Jumeirah, Umm Suqeim, and Al Wasl communities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Renovation Storage — Jumeirah</h3>
            <p className="text-gray-700 mb-3">
              Jumeirah villas are frequently renovated, and managing furniture during a major renovation can be
              chaotic. SafeStorage provides comprehensive villa storage — we collect all your furniture,
              appliances, and personal items from your Jumeirah property, store them in climate-controlled
              security, and return everything once your renovation is complete.
            </p>
            <p className="text-gray-700">
              Our team is experienced with high-value furniture and can wrap, protect, and store antiques,
              custom furniture, and luxury items with the care they deserve. Storage periods range from 2 weeks
              to multiple years with no long-term commitment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">What Jumeirah Residents Store with SafeStorage</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>• Villa furniture during renovation or sale</li>
              <li>• Antiques and high-value collectibles</li>
              <li>• Luxury wardrobe and seasonal clothing</li>
              <li>• Children&apos;s items and toys between growth stages</li>
              <li>• Beach gear, kayaks, and paddleboards</li>
            </ul>
            <ul className="space-y-2">
              <li>• Household appliances not in current use</li>
              <li>• Art, sculptures, and decorative items</li>
              <li>• Office equipment and business documents</li>
              <li>• Bicycles and outdoor sports equipment</li>
              <li>• Personal belongings during extended travel</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Jumeirah &amp; Surrounding Communities</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
            <ul className="space-y-1">
              <li>• Jumeirah 1</li>
              <li>• Jumeirah 2</li>
              <li>• Jumeirah 3</li>
              <li>• Umm Suqeim 1, 2, 3</li>
            </ul>
            <ul className="space-y-1">
              <li>• Al Safa 1 &amp; 2</li>
              <li>• Al Wasl</li>
              <li>• Madinat Jumeirah area</li>
              <li>• Satwa</li>
            </ul>
            <ul className="space-y-1">
              <li>• Mankhool</li>
              <li>• Bur Dubai</li>
              <li>• Al Quoz</li>
              <li>• City Walk area</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Jumeirah resident looking for secure, flexible storage? Get your free quote now.
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
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage for Jumeirah, Al Barsha, Umm Suqeim &amp; Surrounding Communities</h2>
        <p className="text-lg text-gray-700 mb-6">
          Jumeirah is Dubai&apos;s most prestigious villa district — a coastal strip of low-rise villas, beachfront properties, and family communities stretching from Jumeirah 1 near the creek all the way to Umm Suqeim and beyond. Residents of Jumeirah have very different storage needs compared to high-rise apartment dwellers in Marina or Downtown. Villa owners typically need to store larger volumes — full rooms of furniture during renovations, excess from multiple-bedroom homes, or the accumulated belongings of families who have lived in Dubai for a decade or more.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          SafeStorage is the most trusted storage provider among Jumeirah villa owners and expat families precisely because we handle the scale and complexity of villa storage without any hassle. Our teams are equipped to clear large villas efficiently, wrap and protect high-value furniture and antiques, and store everything in properly secured, climate-controlled units. We have served hundreds of Jumeirah families over the years, and many are repeat customers who use SafeStorage every time they renovate, relocate, or need to clear space.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Al Barsha &amp; Umm Suqeim Storage</h3>
            <p className="text-gray-700 mb-3">Al Barsha is one of Dubai&apos;s most popular family communities, offering a mix of villas, apartments, and townhouses at more accessible price points than central Jumeirah. Al Barsha 1, 2, 3, and 4 residents regularly use SafeStorage for renovation clearances, lease transitions, and long-term personal storage. Al Barsha&apos;s proximity to The Mall of the Emirates also makes it a key area for families who frequently update their home furnishings and need storage for replaced items.</p>
            <p className="text-gray-700">Umm Suqeim, known for its beautiful beachfront villas and proximity to the iconic Burj Al Arab, is home to some of Dubai&apos;s wealthiest families. SafeStorage handles Umm Suqeim storage with the premium care and discretion that residents expect, including specialist wrapping for antiques, art, and luxury furnishings.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Satwa, Bur Dubai &amp; Karama Coverage</h3>
            <p className="text-gray-700 mb-3">Satwa, Bur Dubai, and Karama are older, established communities in Dubai with dense populations and a mix of long-term residents and recent arrivals. These communities are within our Jumeirah service zone and are served with the same standards as more upscale areas. Residents in these communities frequently use SafeStorage for downsizing moves, renovation clearances, and business storage.</p>
            <p className="text-gray-700">Al Quoz, which borders Jumeirah and serves as a major industrial and creative hub, is also within our coverage. Al Quoz businesses — particularly art studios, creative agencies, and small manufacturers — use SafeStorage for equipment storage, document archiving, and inventory overflow. The Al Quoz art district&apos;s gallery owners also use our specialist art storage service.</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">The SafeStorage Expat Moving-Out Service — Designed for Jumeirah Families</h3>
          <p className="text-gray-700 mb-4">Thousands of expatriate families leave Jumeirah every year, and the moving-out process is one of the most stressful experiences in Dubai life. SafeStorage has developed a dedicated expat moving-out service that takes the stress away completely:</p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Before You Leave Dubai</p>
              <ul className="space-y-1 text-sm">
                <li>• We collect all items from your Jumeirah villa or apartment</li>
                <li>• Everything is photographed and inventoried digitally</li>
                <li>• Items are stored in climate-controlled, secure units</li>
                <li>• You pay month-to-month — no long-term commitment</li>
                <li>• Access your inventory online anytime from abroad</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">While You&apos;re Away</p>
              <ul className="space-y-1 text-sm">
                <li>• Items remain secure with 24/7 CCTV and alarms</li>
                <li>• Covered by complimentary insurance throughout</li>
                <li>• Cancel or extend your plan anytime remotely</li>
                <li>• Arrange international shipping from storage if needed</li>
                <li>• Deliver back to Dubai address if you return</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Jumeirah &amp; Al Barsha Storage</h2>
        <p className="text-gray-600 text-center mb-10">Common questions from Jumeirah villa owners, expat families, Al Barsha residents, and customers across the Jumeirah belt.</p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How does SafeStorage handle large Jumeirah villa clearances?</h3>
            <p className="text-gray-700">For large Jumeirah villa clearances — typically required during renovations, property sales, or expatriate departures — SafeStorage deploys a dedicated team with appropriate vehicles and packing materials. We begin with a site assessment (either in-person or via WhatsApp video walkthrough) to estimate the volume and number of team members required. Entire villa clearances, including furniture, appliances, personal items, and garden equipment, are typically completed in a single day. Everything is professionally wrapped, inventoried, and transported to our facility. Prices for full villa storage are provided after assessment with no hidden charges.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can SafeStorage store high-value antiques and luxury furniture from Jumeirah villas?</h3>
            <p className="text-gray-700">Yes, SafeStorage regularly stores high-value antiques, custom furniture, luxury pieces, and collectibles for Jumeirah villa residents. Our specialist packing team uses museum-grade materials for fragile and valuable items including acid-free tissue paper, custom crating for fragile pieces, and climate-controlled units with precise temperature and humidity control. We recommend declaring high-value items at booking so we can advise on extended insurance coverage. Our facility security — 24/7 CCTV, biometric access, individual unit alarms — provides the highest standard of protection for luxury items.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What storage options are available for expats leaving Dubai from Jumeirah?</h3>
            <p className="text-gray-700">SafeStorage offers several options for expats leaving Dubai. The most popular is our flexible month-to-month storage plan with no lock-in: we collect your belongings from your Jumeirah home, store them securely, and you can request delivery back to a Dubai address or arrange international shipping when you are ready. Alternatively, if you are permanently relocating, we can coordinate with international shipping partners to deliver your stored items to your new home country. Our expat storage plans are designed with the realities of international relocation in mind — flexible, transparent, and managed with minimal effort required from you.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage cover the Madinat Jumeirah residential area?</h3>
            <p className="text-gray-700">Yes, the Madinat Jumeirah area including residential properties nearby is fully within our Jumeirah service zone. We cover the Umm Suqeim area, Al Safa, and the communities adjacent to Madinat Jumeirah. Residents in this prestigious part of Dubai benefit from the same hassle-free pickup, climate-controlled storage, and flexible monthly plans as all other Jumeirah customers. The nearby Al Wasl Road corridor, City Walk developments, and the surrounding villa communities are all within our coverage area.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How long does a typical Jumeirah villa storage pickup take?</h3>
            <p className="text-gray-700">The time required for a Jumeirah villa pickup depends on the volume of items and the number of rooms being cleared. For a partial villa clearance (1–2 rooms), our team typically completes the pickup within 2–3 hours. A full villa clearance for a 3-bedroom property usually takes 4–6 hours with a team of 3–4 staff. We provide a realistic time estimate before the pickup day based on your description of the items. For very large properties or valuable items requiring specialist packing, we may recommend a two-day process to ensure everything is handled with appropriate care and attention.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is Al Barsha covered by the Jumeirah service zone?</h3>
            <p className="text-gray-700">Yes, Al Barsha (1, 2, 3, and 4) is fully covered within our Jumeirah service zone. Al Barsha is one of our most active residential pickup areas due to its large and growing population. The proximity of Al Barsha to Mall of the Emirates and the community&apos;s mix of apartments and villas means we serve a wide variety of customers there — from families clearing space in villas to apartment residents storing seasonal items to small business owners using SafeStorage for home-office inventory. We can usually provide same-day or next-day pickup from Al Barsha locations.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I store children&apos;s furniture and baby items between uses?</h3>
            <p className="text-gray-700">Absolutely. Storing children&apos;s furniture between growth stages is one of the most practical uses of SafeStorage for Jumeirah families. Cots, prams, high chairs, baby bouncers, toddler beds, and large play equipment can all be stored safely in our climate-controlled units. Items are kept clean and protected, ready to be returned when needed for a younger sibling or when you would like to sell or donate them. Families also store board games, toys, educational materials, and sports equipment that are not needed in the current season, keeping their homes organised without permanently discarding useful items.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What are the storage options for residents of Satwa?</h3>
            <p className="text-gray-700">Satwa is fully within our Jumeirah service zone and we regularly serve Satwa&apos;s dense residential community. Satwa&apos;s residents include long-term Dubai families, working professionals, and a significant business community. We offer the full range of personal, household, and commercial storage options for Satwa customers with the same hassle-free pickup, climate-controlled security, and flexible monthly plans. Satwa residents appreciate our affordable pricing starting from 12.65 AED / sqft (VAT-inclusive), making SafeStorage accessible to residents across all income levels.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you offer short-term storage for Jumeirah residents who are travelling for a few weeks?</h3>
            <p className="text-gray-700">Yes, SafeStorage offers storage for any duration, including short-term plans for residents travelling for a few weeks. While most customers store for longer periods, we accommodate short stays with the same quality of service. If you are travelling for 2–8 weeks and want to store some of your valuables or personal items safely rather than leaving them unattended, SafeStorage is an ideal solution. With no minimum contract and flexible week-by-week or month-by-month billing, you pay only for the duration you actually need. Many Jumeirah expats use this service when taking extended summer holidays.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage store bicycles and outdoor sports equipment?</h3>
            <p className="text-gray-700">Yes, bicycles, electric bikes, road bikes, mountain bikes, and outdoor sports equipment are among the most commonly stored items in our Jumeirah service zone. We provide proper bicycle hanging or standing storage to prevent tyre flat spots and frame damage. Other outdoor equipment we store regularly includes golf clubs and bags, tennis and squash equipment, camping gear, hiking equipment, and water sports accessories. All sports equipment is stored in our climate-controlled facility, which prevents heat damage to components like carbon fibre frames, rubber seals, and electronic components on e-bikes.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I get started with SafeStorage from my Jumeirah home?</h3>
            <p className="text-gray-700">Getting started is quick and easy. Simply WhatsApp or call us on +971505773388 and describe what you need to store — you can share photos via WhatsApp to make the quote process even faster. We will provide a transparent, itemised quote within minutes. Once you confirm, we schedule a pickup at your preferred time (same-day, next-day, or a date of your choice). Our professional team arrives, handles all the packing, wrapping, and loading, and your items are stored in our climate-controlled facility within hours. Most customers complete the entire booking process in under 10 minutes. There is no paperwork to fill in — everything is handled digitally.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I store garden furniture and outdoor items from my Jumeirah villa?</h3>
            <p className="text-gray-700">Yes, garden and outdoor furniture including sun loungers, patio tables and chairs, garden parasols, barbecues, planters, and outdoor rugs can all be stored with SafeStorage. Outdoor furniture benefits particularly from climate-controlled storage during Dubai&apos;s extremely hot summers, when exposure to 45°C+ temperatures, UV radiation, and sandstorms can rapidly degrade fabrics, metals, and plastics. Storing outdoor furniture indoors during summer and retrieving it when the cool season returns can significantly extend its lifespan. We wrap all outdoor furniture to prevent scratches and transport damage.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}