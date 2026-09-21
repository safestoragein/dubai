import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-21 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's Jumeirah photo, used
   exactly as they saved it. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: { absolute: "Safe Storage Units Jumeirah | Secure Storage Dubai" },
  // "free villa pickup" in the spec: transport is charged (df0df39 / 166d65a).
  description:
    "Secure storage in Jumeirah with door-to-door villa pickup. Self Storage units for furniture, luxury items, and renovations.",
  keywords:
    "Storage Jumeirah, Self storage Jumeirah, Jumeirah villa storage, Umm Suqeim storage, Al Safa storage, Al Wasl storage, Household storage Dubai, Furniture storage Jumeirah, Luxury item storage, Secure storage Dubai, Storage with pickup, Villa renovation storage, Personal storage units, SafeStorage Jumeirah",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/jumeirah",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/jumeirah while Arabic sat at
    // /ar/locations/dubai/jumeirah, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/jumeirah",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/jumeirah",
      "x-default": "https://safestorage.ae/locations/dubai/jumeirah",
    },
  },
}

const faqs = [
  {
    q: "How does SafeStorage handle large Jumeirah villa clearances?",
    a: "For large Jumeirah villa clearances — typically required during renovations, property sales, or expatriate departures — SafeStorage deploys a dedicated team with appropriate vehicles and packing materials. We begin with a site assessment (either in-person or via WhatsApp video walkthrough) to estimate the volume and number of team members required. Entire villa clearances, including furniture, appliances, personal items, and garden equipment, are typically completed in a single day. Everything is professionally wrapped, inventoried, and transported to our facility. Prices for full villa storage are provided after assessment with no hidden charges.",
  },
  {
    q: "What storage options are available for expats leaving Dubai from Jumeirah?",
    a: "SafeStorage offers several options for expats leaving Dubai. The most popular is our flexible month-to-month storage plan with no lock-in: we collect your belongings from your Jumeirah home, store them securely, and you can request delivery back to a Dubai address or arrange international shipping when you are ready. Alternatively, if you are permanently relocating, we can coordinate with international shipping partners to deliver your stored items to your new home country. Our expat storage plans are designed with the realities of international relocation in mind — flexible, transparent, and managed with minimal effort required from you.",
  },
  {
    q: "Does SafeStorage cover the Madinat Jumeirah residential area?",
    a: "Yes, the Madinat Jumeirah area including residential properties nearby is fully within our Jumeirah service zone. We cover the Umm Suqeim area, Al Safa, and the communities adjacent to Madinat Jumeirah. Residents in this prestigious part of Dubai benefit from the same door-to-door pickup, secure storage, and flexible monthly plans as all other Jumeirah customers. The nearby Al Wasl Road corridor, City Walk developments, and the surrounding villa communities are all within our coverage area.",
  },
  {
    q: "How long does a typical Jumeirah villa storage pickup take?",
    a: "The time required for a Jumeirah villa pickup depends on the volume of items and the number of rooms being cleared. For a partial villa clearance (1–2 rooms), our team typically completes the pickup within 2–3 hours. A full villa clearance for a 3-bedroom property usually takes 4–6 hours with a team of 3–4 staff. We provide a realistic time estimate before the pickup day based on your description of the items. For very large properties or valuable items requiring specialist packing, we may recommend a two-day process to ensure everything is handled with appropriate care and attention.",
  },
  {
    q: "Is Al Barsha covered by the Jumeirah service zone?",
    a: "Yes, Al Barsha (1, 2, 3, and 4) is fully covered within our Jumeirah service zone. Al Barsha is one of our most active residential pickup areas due to its large and growing population. The proximity of Al Barsha to Mall of the Emirates and the community's mix of apartments and villas means we serve a wide variety of customers there — from families clearing space in villas to apartment residents storing seasonal items to small business owners using SafeStorage for stock.",
  },
]

const jumeirahSchemas = [
  locationBusinessSchema({
    name: "Jumeirah",
    url: "https://safestorage.ae/locations/dubai/jumeirah",
    serves: ["Umm Suqeim", "Al Safa"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Expat & Villa Storage Near Jumeirah Dubai",
    description:
      "Expat-friendly storage in Jumeirah — keep belongings safely stored while you decide what to ship. Door-to-Door pickup, flexible terms, trusted by 500+ expats.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/jumeirah",
    areaServed: [
      { "@type": "Place", name: "Jumeirah" },
      { "@type": "Place", name: "Umm Suqeim" },
      { "@type": "Place", name: "Al Safa" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/jumeirah#webpage",
    name: "Safe Storage Units Jumeirah | Secure Storage Dubai",
    description:
      "Secure storage in Jumeirah with door-to-door villa pickup. Self Storage units for furniture, luxury items, and renovations.",
    url: "https://safestorage.ae/locations/dubai/jumeirah",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
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

export default function JumeirahPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Jumeirah" },
        ]}
      />
      <SchemaScript schema={jumeirahSchemas} />
      <LocationLanding
        name="Jumeirah"
        heroImage="/landing/jumeirah-photo.webp"
        heroAspect="1746 / 901"
        heroPosition="center"
        eyebrow="Jumeirah"
        title="Storage in"
        titleAccent="Jumeirah"
        blurb="Villa storage across Jumeirah 1, 2 and 3, Umm Suqeim and Al Wasl, most often during renovations, extensions and garden works."
        areas={["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Safa", "Al Wasl"]}
        distance="15-20 minutes"
        benefits={[
          { e: "🚪", text: "Door-to-Door pickup from Jumeirah villas" },
          { e: "🔨", text: "Perfect for villa renovations" },
          { e: "🏖️", text: "Seasonal storage for beach equipment" },
          { e: "💎", text: "Secure storage for luxury items" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from Jumeirah and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage for Jumeirah Residents",
          accent: "& Expats.",
          paras: [
            "SafeStorage provides trusted, secure storage for villa owners, families, and expatriates across Jumeirah 1, 2, 3, Umm Suqeim, Al Safa, and Al Wasl. Whether you are renovating your Jumeirah villa, preparing to move back home, or simply need extra space, our door-to-door service makes storing easy from anywhere in Jumeirah.",
            "Jumeirah is Dubai's most prestigious villa district — a coastal strip of low-rise villas, beachfront properties, and family communities stretching from Jumeirah 1 near the creek all the way to Umm Suqeim and beyond. Residents of Jumeirah have very different storage needs compared to high-rise apartment dwellers in Marina or Downtown. Villa owners typically need to store larger volumes — full rooms of furniture during renovations, excess from multiple-bedroom homes, or the accumulated belongings of families who have lived in Dubai for a decade or more.",
            "SafeStorage is the most trusted storage provider among Jumeirah villa owners and expat families precisely because we handle the scale and complexity of villa storage without any hassle. Our teams are equipped to clear large villas efficiently, wrap and protect high-value furniture and antiques, and store everything in properly secured units. We have served hundreds of Jumeirah families over the years, and many are repeat customers who use SafeStorage every time they renovate, relocate, or need to clear space.",
          ],
        }}
        panels={[
          {
            e: "✈️",
            title: "Expat Storage — Moving Back Home from Dubai",
            paras: [
              "Thousands of expatriates leave Dubai every year, and deciding what to ship, sell, or store is one of the biggest challenges. SafeStorage offers expat-friendly storage solutions that let you keep your belongings safely in Dubai while you settle in your home country and figure out what you want to do with them.",
              "Our flexible month-to-month plans have no lock-in period and no cancellation penalties. Items can be shipped internationally on request, or returned to a Dubai address if you come back. Trusted by hundreds of expats from Jumeirah, Umm Suqeim, and Al Wasl communities.",
            ],
          },
          {
            e: "🔨",
            title: "Villa Renovation Storage — Jumeirah",
            paras: [
              "Jumeirah villas are frequently renovated, and managing furniture during a major renovation can be chaotic. SafeStorage provides comprehensive villa storage — we collect all your furniture, appliances, and personal items from your Jumeirah property, store them in secure conditions, and return everything once your renovation is complete.",
              "Our team is experienced with high-value furniture and can wrap, protect, and store antiques, custom furniture, and luxury items with the care they deserve. Storage periods range from 2 weeks to multiple years with no long-term commitment.",
            ],
          },
          {
            e: "🏡",
            title: "Al Barsha & Umm Suqeim Storage",
            paras: [
              "Al Barsha is one of Dubai's most popular family communities, offering a mix of villas, apartments, and townhouses at more accessible price points than central Jumeirah. Al Barsha 1, 2, 3, and 4 residents regularly use SafeStorage for renovation clearances, lease transitions, and long-term personal storage. Al Barsha's proximity to The Mall of the Emirates also makes it a key area for families who frequently update their home furnishings and need storage for replaced items.",
              "Umm Suqeim, known for its beautiful beachfront villas and proximity to the iconic Burj Al Arab, is home to some of Dubai's wealthiest families. SafeStorage handles Umm Suqeim storage with the premium care and discretion that residents expect, including specialist wrapping for antiques, art, and luxury furnishings.",
            ],
          },
          {
            e: "🏙️",
            title: "Satwa, Bur Dubai & Karama Coverage",
            paras: [
              "Satwa, Bur Dubai, and Karama are older, established communities in Dubai with dense populations and a mix of long-term residents and recent arrivals. These communities are within our Jumeirah service zone and are served with the same standards as more upscale areas. Residents in these communities frequently use SafeStorage for downsizing moves, renovation clearances, and business storage.",
              "Al Quoz, which borders Jumeirah and serves as a major industrial and creative hub, is also within our coverage. Al Quoz businesses — particularly art studios, creative agencies, and small manufacturers — use SafeStorage for equipment storage, document archiving, and inventory overflow. The Al Quoz art district's gallery owners also use our specialist art storage service.",
            ],
          },
        ]}
        uses={[
          { e: "🛋️", title: "Villa furniture during renovation or sale", text: "" },
          { e: "🏺", title: "Antiques and high-value collectibles", text: "" },
          { e: "👗", title: "Luxury wardrobe and seasonal clothing", text: "" },
          { e: "🧸", title: "Children's items and toys between growth stages", text: "" },
          { e: "🏄", title: "Beach gear, kayaks, and paddleboards", text: "" },
          { e: "🧺", title: "Household appliances not in current use", text: "" },
          { e: "🖼️", title: "Art, sculptures, and decorative items", text: "" },
          { e: "🗂️", title: "Office equipment and business documents", text: "" },
          { e: "🚲", title: "Bicycles and outdoor sports equipment", text: "" },
          { e: "✈️", title: "Personal belongings during extended travel", text: "" },
        ]}
        zones={[
          { title: "Jumeirah & the coast", items: ["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim 1, 2, 3", "Al Safa 1 & 2", "Al Wasl", "Madinat Jumeirah area"] },
          { title: "Nearby communities", items: ["Satwa", "Mankhool", "Bur Dubai", "Al Quoz", "City Walk area"] },
        ]}
        ctaLine="Jumeirah resident looking for secure, flexible storage? Get your free quote now."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup from Jumeirah villas, Umm Suqeim and Al Wasl. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="jumeirah"
      />
    </>
  )
}
