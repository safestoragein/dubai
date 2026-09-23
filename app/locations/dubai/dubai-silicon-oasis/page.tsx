import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-23 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's DSO photo, used
   exactly as they saved it, with the real SafeStorage logo in place of the
   drawn one. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: { absolute: "Dubai Silicon Oasis Storage: DSO & Academic City | SafeStorage" },
  description:
    "Secure storage in Dubai Silicon Oasis, Academic City & International City. Door-to-door pickup, same-day service, free itemised quote.",
  keywords:
    "dubai silicon oasis storage, DSO storage dubai, academic city storage, international city storage dubai, storage near DSO, dubai silicon oasis self storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/dubai-silicon-oasis while Arabic sat at
    // /ar/locations/dubai/dubai-silicon-oasis, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/dubai-silicon-oasis",
      "x-default": "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage cover all parts of Dubai Silicon Oasis?",
    a: "Yes. SafeStorage covers all Dubai Silicon Oasis zones — the residential towers (Silicon Heights, Cedar Silicon, and all other DSO residential buildings), the technology park office zones, and all community areas. We also cover Academic City and International City which are immediately adjacent to DSO.",
  },
  {
    q: "What are the storage options for students at Academic City universities?",
    a: "Students at Academic City universities can use SafeStorage's student-friendly pricing. Whether you are storing 8–12 boxes of personal items and study materials or more, you pay only for the space you use. There is no minimum storage period, making it ideal for storing items over summer breaks or between semesters.",
  },
  {
    q: "Can DSO tech companies store electronic equipment and server hardware?",
    a: "Yes. SafeStorage provides secure storage suitable for electronic equipment including servers, networking equipment, computers, testing equipment, and prototypes. Electronic items are individually inventoried and kept in our secured, monitored facility. Please inform us in advance if you are storing server hardware or sensitive electronics so we allocate appropriate handling resources.",
  },
  {
    q: "Can SafeStorage store bicycles and sports equipment from DSO apartments?",
    a: "Yes. Bicycles, electric scooters, skateboards, sports gear, and fitness equipment are all storable with SafeStorage. Our pricing is volume-based, so a bicycle can be stored for just the small amount of space it takes up. We wrap bicycles carefully to prevent scratches and damage during storage.",
  },
  {
    q: "Is Dubailand near DSO covered by SafeStorage?",
    a: "Yes. Dubailand and its residential sub-communities — including Wadi Al Safa, Remraam, Layan, Villanova, Mudon, and other Dubailand developments — are within our extended east Dubai service zone. Call +971505773388 with your specific Dubailand community name to confirm coverage and estimated pickup times.",
  },
]

const dsoSchemas = [
  locationBusinessSchema({
    name: "Dubai Silicon Oasis",
    url: "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
    serves: ["Academic City", "International City", "Dubailand"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Dubai Silicon Oasis (DSO)",
    description:
      "Secure storage for Dubai Silicon Oasis, Academic City, and International City residents and businesses. Door-to-Door pickup. Flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
    areaServed: [
      { "@type": "Place", name: "Dubai Silicon Oasis" },
      { "@type": "Place", name: "Academic City" },
      { "@type": "Place", name: "International City" },
      { "@type": "Place", name: "Dubailand" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/dubai-silicon-oasis#webpage",
    name: "Dubai Silicon Oasis Storage: DSO & Academic City | SafeStorage",
    description:
      "Secure storage in Dubai Silicon Oasis, Academic City & International City. Door-to-door pickup, same-day service, free itemised quote.",
    url: "https://safestorage.ae/locations/dubai/dubai-silicon-oasis",
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

export default function DubaiSiliconOasisPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Dubai Silicon Oasis" },
        ]}
      />
      <SchemaScript schema={dsoSchemas} />
      <LocationLanding
        name="Dubai Silicon Oasis"
        heroImage="/landing/dso-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        ratingBottomLeft
        eyebrow="DSO & Academic City"
        title="Storage in"
        titleAccent="Dubai Silicon Oasis"
        blurb="Storage for Silicon Oasis apartments, Academic City student housing and DSO free-zone businesses, with scheduling to match the longest run from our DIP facility."
        areas={["Dubai Silicon Oasis (all zones)", "Academic City", "International City", "Dubailand", "Liwan", "Majan"]}
        distance="25-30 minutes"
        benefits={[
          { e: "💻", text: "Ideal for DSO tech companies needing equipment storage" },
          { e: "🎓", text: "Student-friendly rates for Academic City residents" },
          { e: "🏙️", text: "Affordable storage for International City apartment dwellers" },
          { e: "🚪", text: "Door-to-Door pickup from all DSO residential buildings" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from your DSO address and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage in DSO, Academic City",
          accent: "& International City.",
          paras: [
            "East Dubai storage specialists · 154+ DSO & Academic City customers · Serving this zone since 2020",
            "Dubai Silicon Oasis (DSO) is a purpose-built technology park and residential community in eastern Dubai, offering a unique mix of tech company offices, residential towers, and community amenities. Adjacent to DSO are Academic City — home to over 25 universities and thousands of students — and International City, one of Dubai's most affordable residential communities. SafeStorage serves all three areas with the same quality, flexible storage service available across Dubai.",
            "The DSO zone has distinct storage needs: tech companies need equipment and document storage; Academic City students need affordable short-term storage between semesters; International City residents need the most cost-effective per-item pricing available.",
          ],
        }}
        panels={[
          {
            e: "💻",
            title: "Tech Company Storage — Dubai Silicon Oasis",
            paras: [
              "DSO-registered technology companies have specific storage needs: server hardware being decommissioned, office equipment and furniture during office reconfiguration, prototype and R&D equipment not currently in active use, and business documents requiring compliant archiving. SafeStorage provides secure commercial storage for all these needs with appropriate handling protocols.",
              "Sensitive equipment is inventoried with photographs and kept in our secured, monitored facility. DSO companies benefit from our document archiving service with barcode-indexed retrieval for compliance and operational requirements.",
            ],
          },
          {
            e: "🎓",
            title: "Student Storage — Academic City",
            paras: [
              "Academic City is home to a large student population attending universities including Murdoch University Dubai, Manipal Academy, Heriot-Watt University Dubai, Amity University Dubai, and many others. Students regularly need affordable short-term storage between semesters, during summer breaks, or when transitioning between university accommodations.",
              "SafeStorage's student plans charge only for the space you use. Students can store just their essentials: a few boxes of personal items, a bicycle, a laptop and study materials. No minimum contract and no long commitment required.",
            ],
          },
          {
            e: "⭐",
            title: "What DSO & Academic City customers say",
            paras: [
              "“Our DSO startup needed to store server hardware and office furniture when we downsized our office. SafeStorage handled the electronics with care and the retrieval process for specific equipment was very efficient.” — Vikram S., Technology Startup, Dubai Silicon Oasis",
              "“As a student at Heriot-Watt University in Academic City, I needed somewhere affordable to store my things over summer. SafeStorage picked up from my apartment and stored 8 boxes at a great rate.” — Aisha M., Student, Heriot-Watt Dubai, Academic City",
            ],
          },
        ]}
        uses={[
          { e: "🖥️", title: "Server and office equipment", text: "Hardware stored while a DSO office is reconfigured or downsized" },
          { e: "🗂️", title: "Compliance documents", text: "Barcode-indexed archiving with on-demand retrieval" },
          { e: "📦", title: "Student boxes", text: "Personal items and study materials over the summer break" },
          { e: "🚲", title: "Bicycles and scooters", text: "Wrapped and stored for the space they actually take" },
          { e: "🛋️", title: "Apartment furniture", text: "Spare pieces that will not fit a compact DSO flat" },
          { e: "🛍️", title: "Trader stock", text: "Seasonal inventory for Dragon Mart and International City businesses" },
        ]}
        zones={[
          { title: "Dubai Silicon Oasis", items: ["DSO residential towers", "DSO technology park", "Silicon Heights 1 & 2", "Cedar, Binghatti & nearby", "DSO community retail"] },
          { title: "Academic & International", items: ["Dubai Academic City", "International City Phases 1–3", "Dragon Mart area", "Liwan", "Majan"] },
          { title: "Dubailand & Beyond", items: ["Dubailand residential", "Wadi Al Safa", "Remraam", "Layan Community", "Villanova & Mudon adj."] },
        ]}
        ctaLine="Storage in DSO, Academic City or International City — get your free quote today."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup across Dubai Silicon Oasis, Academic City, International City and Dubailand. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="dubai-silicon-oasis"
      />
    </>
  )
}
