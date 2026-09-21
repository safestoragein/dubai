import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-21 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's Al Barsha photo, used
   exactly as they saved it. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: "Al Barsha Storage Dubai — Home Pickup",
  // Spec wording, minus its "pickup included!" — transport is charged, and the
  // site stopped advertising it as free or included in df0df39 / 166d65a.
  description:
    "Storage in Al Barsha 1, 2, 3 & 4, Barsha Heights & Tecom. Door-to-door home or office pickup available. Secure, modern storage units.",
  keywords:
    "al barsha storage dubai, storage al barsha 1, storage al barsha 2, storage near mall of the emirates, barsha heights storage, tecom storage dubai, al barsha self storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/al-barsha",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/al-barsha",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/al-barsha while Arabic sat at
    // /ar/locations/dubai/al-barsha, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/al-barsha",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/al-barsha",
      "x-default": "https://safestorage.ae/locations/dubai/al-barsha",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage cover all Al Barsha sub-communities?",
    a: "Yes. SafeStorage covers every Al Barsha sub-community including Al Barsha 1, Al Barsha 2, Al Barsha 3, Al Barsha South 1, 2, and 3, Barsha Heights (IMPZ), Tecom, and Arjan. All addresses within these communities qualify for door-to-door service. If your address is in or around the Mall of the Emirates area, Al Quoz, or JVT, please call us on +971505773388 and we will confirm coverage instantly — we serve all of these areas too.",
  },
  {
    q: "How quickly can SafeStorage pick up from Al Barsha 1 or Al Barsha 2?",
    a: "For requests confirmed before 12 PM, same-day pickup is typically available in Al Barsha 1 and 2. Standard pickups can be scheduled within 24 hours, with morning, afternoon, or evening time windows available seven days a week. Al Barsha's location in central Dubai makes it one of our fastest service zones. For villa pickups in Al Barsha 2 or 3, we recommend booking at least 48 hours ahead to ensure the right vehicle and crew size is allocated for larger volumes.",
  },
  {
    q: "Can I store furniture from a villa in Al Barsha during renovation?",
    a: "Yes. Villa renovation storage in Al Barsha is one of our most common services. Our team can clear a 3–4 bedroom villa in Al Barsha in a single day, professionally packing and loading all furniture, appliances, and household contents. Everything is transported to our secure facility and stored safely until your renovation is complete. Get an accurate quote by sharing photos or a video of your villa contents via WhatsApp (+971505773388).",
  },
  {
    q: "Does SafeStorage serve Barsha Heights apartment residents?",
    a: "Yes. Barsha Heights (IMPZ) is fully covered by SafeStorage. Barsha Heights apartment residents use our service primarily for between-lease storage, apartment renovation storage, and personal household storage for items that don't fit in compact Barsha Heights units. Our team knows the building access and loading procedures for major Barsha Heights towers and can manage pickups efficiently without causing inconvenience to building management. You pay only for the space your items use.",
  },
  {
    q: "What business storage services are available for Tecom companies?",
    a: "For Tecom-based businesses, SafeStorage offers document archiving with barcode-indexed retrieval, office furniture storage during office moves or downsizing, inventory and stock storage, and equipment storage for media and production companies. All business storage includes dedicated account management and detailed invoicing for your accounts department. Commercial pickup from Tecom offices is available same-day for requests before 12 PM. We regularly serve technology, media, and professional service companies across Tecom and the adjacent Dubai Internet City and Media City zones.",
  },
]

const alBarshaSchemas = [
  locationBusinessSchema({
    name: "Al Barsha 1",
    url: "https://safestorage.ae/locations/dubai/al-barsha",
    serves: ["Al Barsha 2", "Al Barsha 3", "Al Barsha South", "Barsha Heights (IMPZ)", "Tecom"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Al Barsha Dubai",
    description:
      "Secure storage for Al Barsha 1, 2, 3, 4, Barsha Heights and Tecom. Door-to-Door pickup from your home or office. Flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/al-barsha",
    areaServed: [
      { "@type": "Place", name: "Al Barsha 1" },
      { "@type": "Place", name: "Al Barsha 2" },
      { "@type": "Place", name: "Al Barsha 3" },
      { "@type": "Place", name: "Al Barsha South" },
      { "@type": "Place", name: "Barsha Heights (IMPZ)" },
      { "@type": "Place", name: "Tecom" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/al-barsha#webpage",
    // Must equal the rendered <title>: the `title` above is a plain string, so the
    // root layout template appends " | SafeStorage Dubai" to it.
    name: "Al Barsha Storage Dubai — Home Pickup | SafeStorage Dubai",
    description:
      "Storage in Al Barsha 1, 2, 3 & 4, Barsha Heights & Tecom. Door-to-door home or office pickup available. Secure, modern storage units.",
    url: "https://safestorage.ae/locations/dubai/al-barsha",
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

export default function AlBarshaPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Al Barsha" },
        ]}
      />
      <SchemaScript schema={alBarshaSchemas} />
      <LocationLanding
        name="Al Barsha"
        heroImage="/landing/al-barsha-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        eyebrow="Al Barsha"
        title="Storage in"
        titleAccent="Al Barsha"
        blurb="Villa and apartment storage across Al Barsha 1, 2 and 3, with collection from Mall of the Emirates, Barsha Heights and the Tecom towers."
        areas={["Al Barsha 1", "Al Barsha 2", "Al Barsha 3", "Al Barsha South", "Barsha Heights (IMPZ)", "Tecom"]}
        distance="15-20 minutes"
        benefits={[
          { e: "🚪", text: "Door-to-Door pickup from all Al Barsha sub-communities" },
          { e: "🏡", text: "Ideal for families downsizing or renovating" },
          { e: "🏢", text: "Business storage for Tecom and IMPZ offices" },
          { e: "🛍️", text: "Convenient mid-Dubai location — near Mall of the Emirates" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from Al Barsha and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage in Al Barsha —",
          accent: "serving all sub-communities.",
          paras: [
            "Al Barsha storage specialists · 241+ Al Barsha customers served · Established 2018",
            "Al Barsha is one of Dubai's most diverse and densely populated residential areas, encompassing Al Barsha 1, 2, 3, Al Barsha South, Barsha Heights (IMPZ), and Tecom. The area attracts a wide mix of Dubai residents — young professionals in Barsha Heights apartments, families in Al Barsha 1 and 2 villas and townhouses, and businesses across the Tecom and IMPZ commercial zones. SafeStorage serves every part of Al Barsha with the same door-to-door pickup service and flexible plans.",
          ],
        }}
        panels={[
          {
            e: "🏘️",
            title: "Al Barsha 1 & 2 — Residential Storage",
            paras: [
              "Al Barsha 1 and 2 are established villa and apartment communities popular with families. The mix of villas, townhouses, and low-rise apartment buildings creates a diverse set of storage needs — from families storing furniture during home renovation to residents downsizing from a villa to an apartment.",
              "SafeStorage provides door-to-door pickup from all Al Barsha 1 and 2 addresses with no parking or access challenges in this relatively low-density area. Our team is experienced with villa storage in Al Barsha, including garden furniture, swimming pool equipment, and the larger volume of contents that villa properties generate.",
            ],
          },
          {
            e: "🏢",
            title: "Barsha Heights & Tecom — Business Storage",
            paras: [
              "Barsha Heights (formerly IMPZ) and Tecom are home to hundreds of companies across media, technology, and professional services. Businesses in these zones use SafeStorage for document archiving, office furniture storage during relocation, and excess inventory management.",
              "Our Barsha Heights service is particularly popular with media and production companies that need to store equipment seasonally, and with Tecom-based businesses that archive physical documents as part of their compliance obligations. Same-day commercial pickup is available for Barsha Heights and Tecom offices for requests before 12 PM.",
            ],
          },
          {
            e: "⭐",
            title: "Al Barsha customer testimonials",
            paras: [
              "“We were renovating our Al Barsha 2 villa and needed to store everything for two months. SafeStorage picked everything up in one day and delivered back perfectly. Even brought back the items in the same arrangement I described. Five stars.” — Fatima A., Al Barsha 2 Villa Owner",
              "“Our Barsha Heights office was downsizing and we needed to store 3 years of document files and some office furniture. SafeStorage indexed everything properly and retrieved specific files when we needed them. Exactly what we needed.” — Mohammed R., Media Company, Barsha Heights",
            ],
          },
        ]}
        uses={[
          { e: "🔨", title: "Villa renovation storage", text: "Families storing furniture during home renovation" },
          { e: "📦", title: "Downsizing", text: "Residents downsizing from a villa to an apartment" },
          { e: "🗂️", title: "Document archiving", text: "Tecom and Barsha Heights businesses archiving physical documents" },
          { e: "🪑", title: "Office furniture storage", text: "Office furniture storage during relocation" },
          { e: "🎬", title: "Media equipment", text: "Media and production companies storing equipment seasonally" },
          { e: "🛋️", title: "Between-lease storage", text: "Barsha Heights apartment residents between leases" },
        ]}
        zones={[
          { title: "Al Barsha Residential", items: ["Al Barsha 1 (villas & apts)", "Al Barsha 2", "Al Barsha 3", "Al Barsha South 1, 2, 3", "Arjan community"] },
          { title: "Business & Commercial", items: ["Barsha Heights (IMPZ)", "Tecom (Dubai Internet City adj.)", "Al Barsha 1 commercial strip", "Dubai Science Park", "Dubai Knowledge Park adj."] },
          { title: "Nearby Areas Also Covered", items: ["Mall of the Emirates area", "Al Quoz 1 & 2", "Umm Suqeim 3", "Jumeirah Village Triangle (JVT)", "JVC (northern boundary)"] },
        ]}
        ctaLine="Storage in Al Barsha — get your free quote in 15 minutes."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup from every Al Barsha sub-community, Barsha Heights and Tecom. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="al-barsha"
      />
    </>
  )
}
