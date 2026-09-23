import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-23 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's JVC photo, used
   exactly as they saved it, with the real SafeStorage logo in place of the
   drawn one. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: "JVC Storage Dubai — Jumeirah Village Circle",
  description:
    "Self-storage for JVC, Dubai. Door-to-door pickup from apartments & townhouses. Secure units, free itemised quote. JVT is also fully covered today.",
  keywords:
    "JVC storage dubai, jumeirah village circle storage, storage near JVC, JVT storage dubai, self storage jumeirah village, storage pickup JVC dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/jumeirah-village-circle while Arabic sat at
    // /ar/locations/dubai/jumeirah-village-circle, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/jumeirah-village-circle",
      "x-default": "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage cover all JVC districts including the newer phases?",
    a: "Yes. SafeStorage covers all JVC districts — Districts 10 through 18 and all sub-sections within them. This includes both the original JVC development phases and the newer towers and communities added in recent years. Call +971505773388 with your building name and we will confirm pickup availability immediately.",
  },
  {
    q: "Is JVT (Jumeirah Village Triangle) included in the JVC service area?",
    a: "Yes. Jumeirah Village Triangle (JVT) is fully covered within our JVC service zone. JVT, which borders JVC on the southeastern side, is served with the same speed, pricing, and quality as JVC itself. Pickup times from JVT are typically 15–20 minutes from confirmation.",
  },
  {
    q: "Can SafeStorage help JVC residents moving to a smaller apartment?",
    a: "Absolutely. Downsizing is one of the most common reasons JVC residents use SafeStorage. SafeStorage stores the overflow, allowing you to take your time deciding what to keep, sell, or donate rather than making rushed decisions during a stressful move.",
  },
  {
    q: "How does SafeStorage handle JVC high-rise building access for pickup?",
    a: "Our team is experienced with JVC's diverse building types — from low-rise townhouse clusters to 30+ floor high-rise towers. For high-rise buildings, we coordinate with your building security for visitor access, use service elevators where available, and schedule pickups during loading bay access hours. You simply need to inform the front desk that our team is arriving.",
  },
  {
    q: "Can Dubai Sports City and Motor City residents use JVC-area SafeStorage?",
    a: "Yes. Dubai Sports City and Motor City are both within our JVC service zone and are fully covered by SafeStorage. Typical pickup times from Dubai Sports City and Motor City are 15–20 minutes. Many Sports City residents use SafeStorage for sports equipment storage, which is a perfect fit given the area's active lifestyle community.",
  },
]

const jvcSchemas = [
  locationBusinessSchema({
    name: "Jumeirah Village Circle",
    url: "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    serves: ["Jumeirah Village Triangle", "Dubai Sports City", "Motor City"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Jumeirah Village Circle (JVC) Dubai",
    description:
      "Secure storage for JVC and JVT residents. Door-to-Door pickup from apartments and townhouses. Flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    areaServed: [
      { "@type": "Place", name: "Jumeirah Village Circle" },
      { "@type": "Place", name: "Jumeirah Village Triangle" },
      { "@type": "Place", name: "Dubai Sports City" },
      { "@type": "Place", name: "Motor City" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/jumeirah-village-circle#webpage",
    // Must equal the rendered <title>: the `title` above is a plain string, so the
    // root layout template appends " | SafeStorage Dubai" to it.
    name: "JVC Storage Dubai — Jumeirah Village Circle | SafeStorage Dubai",
    description:
      "Self-storage for JVC, Dubai. Door-to-door pickup from apartments & townhouses. Secure units, free itemised quote. JVT is also fully covered today.",
    url: "https://safestorage.ae/locations/dubai/jumeirah-village-circle",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-09-23",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function JumeirahVillageCirclePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "JVC" },
        ]}
      />
      <SchemaScript schema={jvcSchemas} />
      <LocationLanding
        name="JVC"
        heroImage="/landing/jvc-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        ratingBottomLeft
        eyebrow="Jumeirah Village Circle"
        title="Storage in"
        titleAccent="JVC"
        blurb="Storage for JVC's compact apartments and townhouses, with flexible month-to-month terms suited to the area's high turnover of short leases."
        areas={["JVC District 10–18", "JVC Apartments", "JVC Townhouses", "Jumeirah Village Triangle (JVT)", "Dubai Sports City", "Motor City"]}
        distance="15-20 minutes"
        benefits={[
          { e: "🚪", text: "Door-to-Door pickup from all JVC districts and buildings" },
          { e: "👨‍👩‍👧", text: "Ideal for growing families needing extra space" },
          { e: "💡", text: "Affordable storage that matches JVC's value-focused community" },
          { e: "📍", text: "JVT and Sports City also fully covered" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from your JVC address and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage in JVC —",
          accent: "Dubai's fastest-growing community.",
          paras: [
            "JVC storage specialists · 198+ JVC customers · Serving all JVC districts since 2019",
            "Jumeirah Village Circle (JVC) is one of Dubai's fastest-growing residential communities, home to over 300,000 residents in a diverse mix of apartments, townhouses, and villas. JVC's popularity stems from its relatively affordable property prices for Dubai, family-friendly environment, and central location between Sheikh Mohammed bin Zayed Road (E311) and Al Khail Road (E44). SafeStorage has been serving JVC residents since 2019 and has completed over 1,500 pickups across the community.",
            "As a growing community where many residents are first-time renters or buyers in Dubai, JVC has a strong demand for affordable, flexible storage. SafeStorage's volume-based pricing makes quality storage accessible to all JVC residents.",
          ],
        }}
        panels={[
          {
            e: "🏢",
            title: "Apartment Storage — JVC Studios & 1–3 Bedrooms",
            paras: [
              "JVC has a large inventory of studio and 1-bedroom apartments that, while affordable by Dubai standards, come with limited storage space. SafeStorage provides the practical solution: store the items that are cluttering your apartment — seasonal clothes, sports equipment, suitcases, extra furniture, boxes of belongings from a previous larger home — and reclaim your living space.",
              "Our volume-based pricing means JVC studio residents can store just a few boxes. This makes it financially practical for JVC's younger, value-conscious residents who need flexible, affordable storage without long-term commitment.",
            ],
          },
          {
            e: "🏡",
            title: "Townhouse & Villa Storage — JVC Families",
            paras: [
              "JVC also has a significant supply of townhouses and villas that attract families. These larger properties generate greater storage needs — garden furniture, children's equipment, seasonal decorations, tools and DIY equipment, and items accumulated over years of Dubai life. SafeStorage provides full-property clearance services for JVC families whether renovating, relocating, or simply decluttering.",
              "For JVC townhouse owners renovating or changing tenants, SafeStorage can clear the entire property within a day and return everything when needed. Our team handles all packing, loading, and transport — you simply point to what needs to go.",
            ],
          },
          {
            e: "⭐",
            title: "What JVC residents say",
            paras: [
              "“We moved from a 3-bedroom Dubai Marina apartment to a smaller JVC 2-bedroom. SafeStorage stored everything that didn't fit. Six months later they delivered it all back perfectly.” — Sarah L., JVC District 14",
              "“As a JVC townhouse owner renting out the property, I needed to store my personal items between tenants. SafeStorage picked up, stored everything safely for 3 months, and brought it all back when I moved back in.” — Khalid N., JVC Townhouse Owner",
            ],
          },
        ]}
        uses={[
          { e: "🧳", title: "Apartment overflow", text: "Seasonal clothes, suitcases and the furniture a studio cannot hold" },
          { e: "🛋️", title: "Downsizing furniture", text: "What does not fit when a bigger home becomes a JVC flat" },
          { e: "🔑", title: "Between-lease storage", text: "Held from your lease end until the new place is ready" },
          { e: "🌿", title: "Garden and garage items", text: "Townhouse furniture, barbecues, tools and outdoor play gear" },
          { e: "🚲", title: "Children's equipment", text: "Bikes, scooters, prams, cots and large toys" },
          { e: "🏸", title: "Sports equipment", text: "Popular with Dubai Sports City's active community" },
        ]}
        zones={[
          { title: "JVC Districts", items: ["JVC District 10 – Circle Mall area", "JVC District 11, 12", "JVC District 13, 14, 15", "JVC District 16, 17, 18", "All JVC apartments & townhouses"] },
          { title: "Adjacent Communities", items: ["Jumeirah Village Triangle (JVT)", "Dubai Sports City", "Motor City", "Dubai Production City", "Arjan & Dubailand adj."] },
          { title: "Road Access Points", items: ["Sheikh Mohammed bin Zayed Rd (E311)", "Al Khail Road (E44)", "Hessa Street", "Sports City Road", "Al Barsha South boundary"] },
        ]}
        ctaLine="Get door-to-door storage pickup from your JVC apartment or townhouse today."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup across JVC, JVT, Dubai Sports City and Motor City. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="jumeirah-village-circle"
      />
    </>
  )
}
