import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Palm Jumeirah Storage — Villa & Apartment",
  description:
    "Storage for Palm Jumeirah villas and apartments. Hassle-free pickup from all Fronds, Trunk & Crescent. Secure, 24/7 monitored, free insurance. Same-day available. Call +971505773388.",
  keywords:
    "palm jumeirah storage, storage palm jumeirah dubai, villa storage palm jumeirah, furniture storage palm fronds, palm jumeirah self storage, storage near palm jumeirah",
  openGraph: {
    title: "Palm Jumeirah Storage — Villa & Apartment Pickup | SafeStorage",
    description: "Hassle-free pickup from all Palm Jumeirah Fronds, Trunk & Crescent. Secure villa & apartment storage. Call +971505773388.",
    url: "https://safestorage.ae/locations/palm-jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/palm-jumeirah",
  },
}

const palmJumeirahSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Services for Palm Jumeirah",
    description:
      "Premium villa and apartment storage for Palm Jumeirah residents. Hassle-free pickup from all Fronds, Trunk, and Crescent. Secure, fully insured, flexible monthly plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/palm-jumeirah",
    areaServed: [
      { "@type": "Place", name: "Palm Jumeirah" },
      { "@type": "Place", name: "Palm Fronds" },
      { "@type": "Place", name: "Palm Trunk" },
      { "@type": "Place", name: "Palm Crescent" },
      { "@type": "Place", name: "Shoreline Apartments" },
    ],
    serviceType: "Self Storage",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "189",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/palm-jumeirah#webpage",
    name: "Palm Jumeirah Storage — Villa & Apartment Pickup | SafeStorage",
    description: "Hassle-free pickup from all Palm Jumeirah Fronds, Trunk & Crescent. Secure villa and apartment storage.",
    url: "https://safestorage.ae/locations/palm-jumeirah",
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
      { "@type": "ListItem", position: 3, name: "Palm Jumeirah", item: "https://safestorage.ae/locations/palm-jumeirah" },
    ],
  },
]

export default function PalmJumeirahPage() {
  return (
    <>
      <SchemaScript schema={palmJumeirahSchemas} />
      <LocationPage
        location="Palm Jumeirah"
        areas={["Palm Trunk", "Palm Fronds (all 16)", "Palm Crescent", "Shoreline Apartments", "Garden Homes", "Signature Villas"]}
        distance="20-25 minutes"
        benefits={[
          "Full villa clearance and furniture storage service",
          "Expert team familiar with Palm access roads and security",
          "Premium packing for high-value villa contents",
          "Flexible short and long-term plans for Palm residents",
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage for Palm Jumeirah Villas &amp; Apartments</h2>
          <p className="text-sm text-gray-500 mb-6">
            Specialist Palm Jumeirah storage team · Serving all 16 Fronds since 2019 · 189+ Palm Jumeirah customers
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Palm Jumeirah is home to some of Dubai&apos;s most prestigious residential properties — from the iconic
            Signature Villas and Garden Homes on the Fronds to the Shoreline Apartments on the Trunk and the ultra-luxury
            residences on the Crescent. SafeStorage serves every part of the Palm with the same premium, hands-off
            storage service that has made us the trusted choice for Dubai&apos;s most discerning residents since 2018.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our dedicated Palm Jumeirah team understands the unique logistics of this iconic community — from navigating
            the Palm Monorail corridor to managing access through the Atlantis and One Palm entry checkpoints. Whether
            you are storing a villa&apos;s worth of furniture during a full renovation or simply need secure storage for
            seasonal garden furniture, water sports equipment, or personal belongings, SafeStorage delivers the same
            white-glove service that Palm Jumeirah residents expect.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Storage — Palm Fronds &amp; Garden Homes</h3>
              <p className="text-gray-700 mb-3">
                Palm Jumeirah villas — particularly the Signature Villas and Garden Homes on the 16 Fronds — are among
                the largest and most valuable residential properties in the UAE. When these properties undergo renovation,
                are being sold, or require seasonal clearance, the volume of items to be stored can be substantial.
                SafeStorage provides full-villa clearance with professional packing, transport, and secure
                storage for all contents.
              </p>
              <p className="text-gray-700">
                Our team can mobilise a multi-person crew to clear a Palm Frond villa within a single day. All furniture
                is wrapped with premium blankets, corner protectors, and stretch film. Fragile items, artwork, and
                luxury furniture pieces receive individual attention with specialist packing materials. Everything is
                inventoried with photographs before storage so you always know exactly what is held and where.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Apartment Storage — Shoreline &amp; Crescent</h3>
              <p className="text-gray-700 mb-3">
                The Shoreline Apartments on the Palm Trunk and the luxury residences on the Crescent — including One
                Palm, Atlantis The Royal Residences, and Waldorf Astoria Residences — represent a different storage
                need. Apartment residents typically need storage for overflow items, seasonal belongings, water sports
                equipment, and furniture during renovation.
              </p>
              <p className="text-gray-700">
                SafeStorage serves the Shoreline Apartments (all 11 buildings), the Golden Mile, the Fairmont
                Residences, and all Crescent-facing residential developments. Our team handles building access and
                security protocols at each development, ensuring smooth pickups without inconvenience to building
                management or other residents.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Popular Storage Uses — Palm Jumeirah Residents</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Villa renovation storage:</strong> Clear an entire villa into secure storage while contractors work — fully insured, professionally packed</li>
              <li>• <strong>Property sale staging:</strong> Declutter and store personal items before professional photography and viewings to maximise sale appeal</li>
              <li>• <strong>Seasonal item storage:</strong> Garden furniture, holiday decorations, winter clothing, and items not needed year-round</li>
              <li>• <strong>Water sports equipment:</strong> Jet skis (in-water or trailered), kayaks, paddleboards, diving gear, wetsuits, and water toys</li>
              <li>• <strong>Expat departure storage:</strong> Keep villa contents safely stored while you decide what to ship, sell, or donate after leaving Dubai</li>
              <li>• <strong>Between-tenancy storage:</strong> Store belongings during the gap between lease end and new property possession</li>
            </ul>
          </div>

          <div className="bg-[#0A2463] rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-3">What Palm Jumeirah Residents Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;We were renovating our Signature Villa on Frond N and needed to store the entire contents — 6 bedrooms worth of furniture and art. SafeStorage sent a crew of four and cleared everything in one day. Eight months later, everything came back in perfect condition.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— Ahmed K., Signature Villa, Frond N, Palm Jumeirah</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm mb-3">&ldquo;Stored my paddleboards, kayak, and jet ski trailer with SafeStorage over the summer. They picked up from my Shoreline apartment parking, stored everything safely, and brought it back when the season started. Excellent service, will use every year.&rdquo;</p>
                <p className="text-white/70 text-xs font-semibold">— David M., Shoreline Apartments, Palm Jumeirah</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Need storage for your Palm Jumeirah villa or apartment? Get your free quote now.</p>
            <a href="/get-quote" className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Frequently Asked Questions — Palm Jumeirah Storage</h2>
          <div className="space-y-5">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you cover all parts of Palm Jumeirah including the Crescent?</h3>
              <p className="text-gray-700">Yes. SafeStorage covers every part of Palm Jumeirah — the Trunk (including Shoreline Apartments and Golden Mile), all 16 numbered Fronds (Signature Villas, Garden Homes, and Frond-facing apartments), and the Crescent (including One Palm, Atlantis The Royal Residences, Waldorf Astoria Residences, and all Crescent-facing developments). We have dedicated access arrangements for each section of the Palm and are familiar with the security and entry procedures at all residential developments.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can you store the entire contents of a Palm Jumeirah Signature Villa?</h3>
              <p className="text-gray-700">Yes. Full-villa clearance is one of our most common Palm Jumeirah services. Signature Villas typically have 4–6 bedrooms with substantial furniture and personal contents. Our team can mobilise a multi-person crew with a large vehicle fleet to clear the entire villa in a single day. All items are professionally packed, photographed, and catalogued before transport. We store everything in secure units and return items to any Dubai address when your villa renovation, sale, or lease transition is complete. Request a villa assessment quote by calling +971505773388.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is parking accessible for pickup trucks on the Palm Fronds?</h3>
              <p className="text-gray-700">Yes, our team is fully experienced with Palm Frond access and vehicle logistics. Each Frond has designated access roads and residential driveways. We use appropriately sized vehicles for each Frond — smaller vehicles for tighter Frond ends and larger vehicles for Frond-side access where space permits. Our team contacts you before the pickup to confirm the best access approach for your specific Frond and villa location. We have never had a logistics issue on the Palm that prevented a successful pickup.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How much does it cost to store a full Palm villa during renovation?</h3>
              <p className="text-gray-700">Full-villa storage pricing starts from 12.60 AED / sqft (VAT-inclusive) and depends on the volume of items. Whether you are storing a 4-bedroom Signature Villa or a larger 5–6 bedroom villa, you pay only for the space your furniture and personal items occupy — including hassle-free pickup, secure storage, insurance, and on-demand delivery. For the most accurate quote, we carry out a brief assessment of your specific villa contents. Send us photos via WhatsApp (+971505773388) or a video walkthrough and we will provide a confirmed price within a few hours.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can you store a jet ski or personal watercraft from Palm Jumeirah?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores jet skis, personal watercraft, RIBs, and small boats in our vehicle storage bays. For jet skis on the Palm, we coordinate collection from private jetties, marinas, or home driveways. The jet ski is secured on its trailer or we can arrange trailer hire if needed. All watercraft are stored in covered, secure bays rather than outdoor spaces. Water sports equipment including kayaks, paddleboards, and inflatable watercraft can also be stored and are available for same-week retrieval when the season begins.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you provide specialist packing for valuable art and antiques from Palm villas?</h3>
              <p className="text-gray-700">Yes. Many Palm Jumeirah villas contain significant artwork, antiques, luxury carpets, and sculptures. SafeStorage provides specialist packing for high-value items using museum-grade materials including acid-free tissue, custom crating, foam padding, and protective wrap. For particularly valuable or irreplaceable pieces, we can arrange specialist fine art storage in individually secured vault conditions. We always recommend disclosing high-value items when booking so we can prepare the appropriate materials and ensure sufficient insurance coverage is in place.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">What happens to my belongings while the Palm villa is on the market for sale?</h3>
              <p className="text-gray-700">Storing belongings during a sale is a smart approach — decluttered, minimally furnished properties photograph better and sell faster. SafeStorage stores all personal items, excess furniture, and non-essential belongings during your Palm villa&apos;s sale period. Our flexible monthly plans mean you only pay for the months you actually need storage. When your villa sells and you have your new property, we deliver everything to your new address. Many Palm villa sellers find that storage actually accelerates their sale by enabling professional staging with minimal personal items visible.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is the Atlantis and One Palm Crescent area fully covered?</h3>
              <p className="text-gray-700">Yes. The Palm Crescent — including Atlantis The Palm residences, Atlantis The Royal Residences, One Palm, Waldorf Astoria Residences, Royal Atlantis Residences, and all other Crescent-facing developments — is fully within our Palm Jumeirah service zone. The Crescent has specific security and access protocols that our team is familiar with, ensuring smooth pickups without delays. For residences within gated Crescent developments, we recommend calling ahead to schedule access with your building security team and our logistics coordinator simultaneously.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Can an expat leaving Palm Jumeirah store their villa contents long-term?</h3>
              <p className="text-gray-700">Absolutely. Long-term expat storage is one of our most popular Palm Jumeirah services. When Palm residents relocate internationally, the cost and logistics of shipping an entire villa&apos;s worth of furniture and belongings overseas is often impractical. SafeStorage provides an affordable alternative: secure storage on flexible monthly terms while you settle in your home country and decide what to keep, ship, sell, or donate. We manage your account entirely remotely. Annual prepaid plans (with a wide range of discounts) are particularly popular with expats who know they will be abroad for at least a year.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">How long does it take to return items to my Palm Jumeirah villa after storage?</h3>
              <p className="text-gray-700">Standard delivery back to Palm Jumeirah is within 24–48 hours of requesting return. For full-villa deliveries, we schedule a specific date and time and our full team arrives to unload and place items in the rooms you specify. For partial retrievals of specific items, we deliver those items within 24 hours in most cases. Same-day delivery for urgent requests is available if confirmed before 12 PM. During the delivery, our team carries all items to your specified rooms — you do not need to do any lifting or organising beyond telling us where you want each piece placed.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Do you store garden furniture from Palm Jumeirah villas seasonally?</h3>
              <p className="text-gray-700">Yes. Garden furniture storage is a popular seasonal service for Palm Frond villa owners. During summer (May–September), when Dubai&apos;s heat peaks, high-quality garden furniture can degrade rapidly if left outdoors. SafeStorage collects outdoor furniture, planters, outdoor cushions and covers, barbecue equipment, and garden accessories at the start of summer and stores them safely indoors until October when the outdoor season resumes. Seasonal storage plans with automatic renewal are available for Palm residents who want to make this a regular annual arrangement.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">Is insurance standard for Palm Jumeirah storage, including high-value villa contents?</h3>
              <p className="text-gray-700">Yes. Every SafeStorage plan includes complimentary insurance covering theft, fire, flood, and accidental damage while in our facility and during transport. For Palm Jumeirah villa contents, which often include high-value designer furniture, artwork, and electronics, we strongly recommend declaring the full value of your items at booking. The standard complimentary coverage applies up to a declared value threshold. Extended insurance for higher-value collections is available as an affordable add-on. Our consultant will advise on the appropriate coverage level when you discuss your specific Palm villa contents.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
