import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Dubai Silicon Oasis Storage — DSO & Academic City",
  description:
    "Storage in Dubai Silicon Oasis (DSO), Academic City & International City. Hassle-free pickup, climate-controlled, from AED 9/month. Same-day available. Call +971505773388.",
  keywords:
    "dubai silicon oasis storage, DSO storage dubai, academic city storage, international city storage dubai, storage near DSO, dubai silicon oasis self storage",
  openGraph: {
    title: "Dubai Silicon Oasis Storage — DSO & Academic City | SafeStorage",
    description: "Hassle-free pickup storage for DSO, Academic City & International City. Climate-controlled, from AED 9/month. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-silicon-oasis",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-silicon-oasis",
  },
}

const dsoSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Dubai Silicon Oasis (DSO)",
    description:
      "Climate-controlled storage for Dubai Silicon Oasis, Academic City, and International City residents and businesses. Hassle-free pickup. Flexible monthly plans from AED 9/month.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai-silicon-oasis",
    areaServed: [
      { "@type": "Place", name: "Dubai Silicon Oasis" },
      { "@type": "Place", name: "Academic City" },
      { "@type": "Place", name: "International City" },
      { "@type": "Place", name: "Dubailand" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "154",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai-silicon-oasis#webpage",
    name: "Dubai Silicon Oasis Storage — DSO & Academic City | SafeStorage",
    description: "Hassle-free pickup storage for DSO, Academic City & International City. Climate-controlled, from AED 9/month.",
    url: "https://safestorage.ae/locations/dubai-silicon-oasis",
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
      { "@type": "ListItem", position: 3, name: "Dubai Silicon Oasis", item: "https://safestorage.ae/locations/dubai-silicon-oasis" },
    ],
  },
]

export default function DubaiSiliconOasisPage() {
  return (
    <>
      <SchemaScript schema={dsoSchemas} />
      <LocationPage
        location="Dubai Silicon Oasis (DSO)"
        areas={["Dubai Silicon Oasis (all zones)", "Academic City", "International City", "Dubailand", "Liwan", "Majan"]}
        distance="25-30 minutes"
        benefits={[
          "Ideal for DSO tech companies needing equipment storage",
          "Student-friendly rates for Academic City residents",
          "Affordable storage for International City apartment dwellers",
          "Hassle-free pickup from all DSO residential buildings",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Dubai Silicon Oasis, Academic City &amp; International City</h2>
          <p className="text-sm text-gray-500 mb-6">
            East Dubai storage specialists · 154+ DSO &amp; Academic City customers · Serving this zone since 2020
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dubai Silicon Oasis (DSO) is a purpose-built technology park and residential community in eastern Dubai,
            offering a unique mix of tech company offices, residential towers, and community amenities. Adjacent to
            DSO are Academic City — home to over 25 universities and thousands of students — and International City,
            one of Dubai&apos;s most affordable residential communities. SafeStorage serves all three areas with the
            same quality, flexible storage service available across Dubai.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            The DSO zone has distinct storage needs: tech companies need equipment and document storage; Academic City
            students need affordable short-term storage between semesters; International City residents need the most
            cost-effective per-item pricing available. SafeStorage&apos;s flexible volume-based model — starting from
            just AED 9 per month — is perfectly matched to the diverse, value-conscious community of this zone.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Tech Company Storage — Dubai Silicon Oasis</h3>
              <p className="text-gray-700 mb-3">
                DSO-registered technology companies have specific storage needs: server hardware being decommissioned,
                office equipment and furniture during office reconfiguration, prototype and R&amp;D equipment not
                currently in active use, and business documents requiring compliant archiving. SafeStorage provides
                secure, climate-controlled commercial storage for all these needs with appropriate handling protocols.
              </p>
              <p className="text-gray-700">
                Electronics and server hardware require the same 18–22°C climate control that SafeStorage provides
                as standard. Sensitive equipment is inventoried with photographs and stored in individually secured
                units. DSO companies benefit from our document archiving service with barcode-indexed retrieval
                for compliance and operational requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Student Storage — Academic City</h3>
              <p className="text-gray-700 mb-3">
                Academic City is home to a large student population attending universities including Murdoch
                University Dubai, Manipal Academy, Heriot-Watt University Dubai, Amity University Dubai, and many
                others. Students regularly need affordable short-term storage between semesters, during summer breaks,
                or when transitioning between university accommodations.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s student plans start from AED 9 per month per item — making quality storage accessible
                on a student budget. Students can store just their essentials: a few boxes of personal items, a bicycle,
                a laptop and study materials. No minimum contract and no long commitment required. Ask about our
                student discounts when booking.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">DSO, Academic City &amp; International City Areas Covered</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Dubai Silicon Oasis</p>
                <ul className="space-y-1 text-sm">
                  <li>• DSO residential towers</li>
                  <li>• DSO technology park</li>
                  <li>• Silicon Heights 1 &amp; 2</li>
                  <li>• Cedar, Binghatti &amp; nearby</li>
                  <li>• DSO community retail</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Academic &amp; International</p>
                <ul className="space-y-1 text-sm">
                  <li>• Dubai Academic City</li>
                  <li>• International City Phases 1–3</li>
                  <li>• Dragon Mart area</li>
                  <li>• Liwan</li>
                  <li>• Majan</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Dubailand &amp; Beyond</p>
                <ul className="space-y-1 text-sm">
                  <li>• Dubailand residential</li>
                  <li>• Wadi Al Safa</li>
                  <li>• Remraam</li>
                  <li>• Layan Community</li>
                  <li>• Villanova &amp; Mudon adj.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">DSO &amp; Academic City Customer Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;Our DSO startup needed to store server hardware and office furniture when we downsized our office. SafeStorage handled the electronics with care and the retrieval process for specific equipment was very efficient. Exactly what a growing tech company needs.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Vikram S., Technology Startup, Dubai Silicon Oasis</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;As a student at Heriot-Watt University in Academic City, I needed somewhere affordable to store my things over summer. SafeStorage picked up from my apartment and stored 8 boxes for AED 90/month. Best solution for students by far.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Aisha M., Student, Heriot-Watt Dubai, Academic City</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Storage in DSO, Academic City or International City — get your free quote today.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — DSO &amp; Academic City Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Does SafeStorage cover all parts of Dubai Silicon Oasis?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers all Dubai Silicon Oasis zones — the residential towers (Silicon Heights, Cedar Silicon, and all other DSO residential buildings), the technology park office zones, and all community areas. We also cover Academic City and International City which are immediately adjacent to DSO. If you are in DSO or any of these surrounding communities, call +971505773388 to confirm pickup availability for your specific address.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What are the storage options for students at Academic City universities?</h3>
              <p className="text-gray-700">Students at Academic City universities can use SafeStorage&apos;s student-friendly item-based pricing, starting from AED 9 per month per stored item. A typical student storing 8–12 boxes of personal items and study materials would pay AED 80–150 per month total. There is no minimum storage period, making it ideal for storing items over summer breaks or between semesters. Many Academic City students use SafeStorage annually at the end of each academic year and retrieve their items at the start of the new term. Ask about student discounts when booking — mention your university.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can DSO tech companies store electronic equipment and server hardware?</h3>
              <p className="text-gray-700">Yes. SafeStorage provides climate-controlled storage suitable for electronic equipment including servers, networking equipment, computers, testing equipment, and prototypes. All storage is maintained at 18–22°C with controlled humidity (45–55%), preventing condensation, static buildup issues, and heat damage that occur in non-climate-controlled environments. Electronic items are individually inventoried and stored in secured units. For very sensitive or valuable equipment, we can provide additional handling protocols on request. Please inform us in advance if you are storing server hardware or sensitive electronics so we allocate appropriate handling resources.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How affordable is storage for International City residents?</h3>
              <p className="text-gray-700">International City is one of Dubai&apos;s most affordable residential areas and our pricing reflects that. With item-based storage starting at AED 9 per month, International City residents can store just what they need without paying for a full unit. A typical International City 1-bedroom apartment contents (furniture, appliances, personal items) costs AED 100–160 per month. Studio contents typically cost AED 60–100 per month. These are among the most competitively priced storage options in this part of Dubai, with no compromise on quality — the same climate control, insurance, and service apply regardless of area.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store bicycles and sports equipment from DSO apartments?</h3>
              <p className="text-gray-700">Yes. Bicycles, electric scooters, skateboards, sports gear, and fitness equipment are all storable with SafeStorage. DSO and Academic City have active cycling and outdoor activity communities, and storing bikes in small apartments is a common challenge. Our item-based pricing means a bicycle can be stored from AED 25–49 per month depending on size. We wrap bicycles carefully to prevent scratches and damage during storage. Electric bikes and scooters are also accepted — please inform us at booking if you are storing battery-powered vehicles as we have specific handling protocols for lithium batteries.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is Dubailand near DSO covered by SafeStorage?</h3>
              <p className="text-gray-700">Yes. Dubailand and its residential sub-communities — including Wadi Al Safa, Remraam, Layan, Villanova, Mudon, and other Dubailand developments — are within our extended east Dubai service zone. Dubailand is a large area with ongoing development, and many new communities in Dubailand receive hassle-free pickup and delivery from SafeStorage. Call +971505773388 with your specific Dubailand community name to confirm coverage and estimated pickup times.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can SafeStorage store document archives for DSO-registered companies?</h3>
              <p className="text-gray-700">Yes. DSO-registered companies with compliance document retention requirements use SafeStorage for document archiving. We provide fireproof storage, individual box labelling with barcode indexing, chain-of-custody documentation, and on-demand retrieval of specific files within 24–48 hours. This service is particularly relevant for technology companies that generate significant compliance documentation — software license records, HR files, financial records, client contracts — that must be retained for specific periods under UAE law. Contact us to discuss your document archiving requirements and volume.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What is the pickup time from Dubai Silicon Oasis to the storage facility?</h3>
              <p className="text-gray-700">Our facility is located in the Dubai Investment Park area, which is approximately 35–40 minutes from Dubai Silicon Oasis via E311 and E44. However, this drive time is irrelevant to you as a customer — our team manages all transport and you never need to visit the facility. Pickup appointment times from DSO are available with the same morning, afternoon, and evening windows as all Dubai areas. For same-day service from DSO, please confirm before 11 AM to allow sufficient scheduling time given the distance.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there storage for Dragon Mart and International City commercial traders?</h3>
              <p className="text-gray-700">Yes. Dragon Mart traders and International City businesses use SafeStorage for excess inventory storage, seasonal stock management, and document archiving. Dragon Mart&apos;s retail and wholesale trading community often has fluctuating stock levels that require flexible external storage — particularly during seasonal peaks. SafeStorage provides volume-based commercial storage with easy retrieval of specific stock on request. Commercial accounts include detailed inventory management and regular reporting. Call +971505773388 to discuss commercial storage for your Dragon Mart or International City business.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How do students book SafeStorage for Academic City?</h3>
              <p className="text-gray-700">Students can book SafeStorage by calling +971505773388, WhatsApping us, or using the online quote form. When booking, mention that you are a student and your university — we will apply the applicable student discount. Before semester end, contact us at least 3–5 days in advance to schedule a convenient pickup time that works around your exams and move-out deadline. We can collect from university accommodation buildings, off-campus apartments, and shared flats in Academic City and the surrounding Dubailand communities. Student storage is particularly popular in May–June (end of academic year) and January (mid-year break).</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is there a minimum storage period for DSO and Academic City customers?</h3>
              <p className="text-gray-700">No. There is no minimum storage period for DSO, Academic City, or International City customers. You can store for one week or several years. Monthly billing with 14 days&apos; cancellation notice applies. For students needing storage for 2–3 months between semesters, this flexibility means you pay only for the exact months your items are in storage — typically June to August or January to February. There are no setup fees, administrative fees, or cancellation charges.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can I manage my DSO storage account remotely if I leave Dubai?</h3>
              <p className="text-gray-700">Yes. SafeStorage accounts can be managed entirely remotely by phone, WhatsApp, or our online portal. Many DSO and Academic City residents — particularly students and tech workers on contract assignments — use this feature when they leave Dubai temporarily. You can request delivery of specific items to a Dubai address even while you are abroad, change your billing payment method remotely, extend your plan, or arrange for items to be returned to a different Dubai address when you return. Our customer service team is available Monday through Saturday to assist with remote account management.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
