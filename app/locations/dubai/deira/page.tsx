import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-21 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's Deira photo, used
   exactly as they saved it. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: { absolute: "SafeStorage Dubai: Deira & Bur Dubai Door-to-Door Storage" },
  description:
    "Deira, Bur Dubai, Karama & Oud Metha storage with home or office pickup. Safe, secure units by Old Dubai area specialists.",
  keywords:
    "deira storage dubai, bur dubai storage, karama storage, storage deira, self storage bur dubai, oud metha storage, old dubai storage units",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/deira",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/deira",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/deira while Arabic sat at
    // /ar/locations/dubai/deira, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/deira",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/deira",
      "x-default": "https://safestorage.ae/locations/dubai/deira",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage cover all areas of Deira and Bur Dubai?",
    a: "Yes. SafeStorage covers all Deira and Bur Dubai areas including Al Rigga, Naif, Al Baraha, Al Muteena, Al Mamzar, Hamriya, Deira City Centre area, Bur Dubai, Al Karama, Al Mankhool, Oud Metha, Al Jaddaf, Al Garhoud, and Al Qusais. We also cover Al Nahda (Dubai side), Al Twar, and Umm Ramool. Call +971505773388 with your building name and area and we will confirm pickup availability immediately.",
  },
  {
    q: "How does SafeStorage handle older Deira and Bur Dubai buildings that may not have service lifts?",
    a: "Our team is fully equipped and experienced for older building pickups, including buildings without service lifts, narrow staircases, and older construction that requires manual carrying of items. We allocate additional team members for buildings without service lifts and use appropriate equipment (trolleys, carrying straps, furniture blankets) to move items safely without damage to your belongings or the building. We appreciate advance notice for buildings above 4 floors without a lift so we can allocate the right team size, and any applicable fees are confirmed upfront before you book.",
  },
  {
    q: "Can Deira and Bur Dubai residents store items temporarily while visiting family abroad?",
    a: "Yes. This is one of the most common use cases in Deira and Bur Dubai, where many long-term expat residents travel to their home countries for extended visits. SafeStorage provides flexible month-to-month storage with no minimum period. We can pick up your apartment contents before you leave, store everything securely during your absence, and return everything when you come back. Many Deira and Karama residents use this service annually, and we offer recurring annual storage arrangements with preferential rates for regular customers.",
  },
  {
    q: "What business storage services are available for Deira trading companies?",
    a: "SafeStorage provides dedicated business storage for Deira trading companies including inventory and stock storage with catalogued management, document archiving with barcode indexing and on-demand retrieval, office furniture storage during relocation or renovation, and equipment storage. We work with textiles traders, electronics businesses, commodity traders, and professional service firms across Deira. Commercial accounts include dedicated invoicing, multiple authorised users, and a dedicated account manager. Call +971505773388 to discuss your specific business storage requirements.",
  },
  {
    q: "Is the Karama shopping area and residential community covered?",
    a: "Yes. Al Karama is fully covered by SafeStorage. Both Karama's residential apartment blocks and its commercial areas are within our service zone. Karama residents are among our most frequent users given the high density of older apartment buildings with minimal built-in storage. We serve all Karama streets and buildings, and our team is familiar with the area's parking and access challenges. Typical pickup times from Karama are 20–25 minutes from confirmation.",
  },
]

const deiraSchemas = [
  locationBusinessSchema({
    name: "Deira",
    url: "https://safestorage.ae/locations/dubai/deira",
    serves: ["Bur Dubai", "Karama", "Oud Metha", "Al Rigga", "Al Garhoud"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Deira, Bur Dubai & Old Dubai",
    description:
      "Secure storage for Deira, Bur Dubai, Karama, Oud Metha, and all old Dubai areas. Door-to-Door pickup. Flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/deira",
    areaServed: [
      { "@type": "Place", name: "Deira" },
      { "@type": "Place", name: "Bur Dubai" },
      { "@type": "Place", name: "Karama" },
      { "@type": "Place", name: "Oud Metha" },
      { "@type": "Place", name: "Al Rigga" },
      { "@type": "Place", name: "Al Garhoud" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/deira#webpage",
    name: "SafeStorage Dubai: Deira & Bur Dubai Door-to-Door Storage",
    description:
      "Deira, Bur Dubai, Karama & Oud Metha storage with home or office pickup. Safe, secure units by Old Dubai area specialists.",
    url: "https://safestorage.ae/locations/dubai/deira",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-04-21",
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

export default function DeiraPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Deira & Bur Dubai" },
        ]}
      />
      <SchemaScript schema={deiraSchemas} />
      <LocationLanding
        name="Deira & Bur Dubai"
        heroImage="/landing/deira-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        eyebrow="Deira & Bur Dubai"
        title="Storage in"
        titleAccent="Deira & Bur Dubai"
        blurb="Storage for Deira's older apartment buildings and Gold Souk-area businesses, with team access arranged for narrow streets and buildings without loading bays."
        areas={["Deira", "Bur Dubai", "Karama", "Oud Metha", "Al Rigga", "Al Garhoud", "Al Mankhool", "Al Qusais"]}
        distance="20-25 minutes"
        benefits={[
          { e: "🚪", text: "Door-to-Door pickup from apartments and flats across old Dubai" },
          { e: "📦", text: "Ideal for traders and businesses storing inventory" },
          { e: "💰", text: "Affordable rates that suit old Dubai's diverse community" },
          { e: "🧭", text: "Experienced team familiar with old Dubai building access" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from Deira and Bur Dubai and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage in Deira, Bur Dubai",
          accent: "& Karama.",
          paras: [
            "Old Dubai storage specialists · 203+ customers in Deira & Bur Dubai · Active since 2019",
            "Deira and Bur Dubai are the historical heart of Dubai — a vibrant, densely populated mosaic of residential apartments, trading businesses, souks, and commercial zones. With some of the highest population densities in the emirate, these areas have significant demand for affordable, accessible storage. SafeStorage serves all of old Dubai with the same door-to-door pickup and flexible monthly pricing available elsewhere in the city.",
            "Old Dubai's diverse resident population — including long-established South Asian communities, Arab families, and a constantly moving expat workforce — creates a wide range of storage needs. From a Karama family storing furniture between flats to a Deira trader archiving business records, SafeStorage provides practical, trustworthy storage accessible to everyone.",
          ],
        }}
        panels={[
          {
            e: "🏢",
            title: "Apartment & Residential Storage — Deira & Bur Dubai",
            paras: [
              "Deira and Bur Dubai are characterised by high-density residential blocks — largely older buildings with compact apartments and limited built-in storage. Residents frequently need external storage for items that simply don't fit: spare furniture, seasonal items, suitcases, electronics, and accumulated household belongings.",
              "SafeStorage's volume-based pricing is ideal for Deira and Bur Dubai residents who want to store specific items rather than pay for an entire storage unit. Residents can store just what they need and pay only for that — no wasted space, no fixed unit costs.",
            ],
          },
          {
            e: "🛍️",
            title: "Business & Trade Storage — Deira Traders",
            paras: [
              "Deira is one of Dubai's most important trading districts, home to the Gold Souk, Spice Souk, textile traders, electronics traders, and thousands of small businesses. Many Deira businesses need flexible, affordable storage for excess stock, seasonal inventory, business documents, and office equipment.",
              "SafeStorage provides dedicated business storage accounts for Deira traders and companies, with multiple-access options, barcode-indexed document archiving, and inventory management. Commercial pickups from Deira warehouses, offices, and shops are available with appropriate vehicle sizes for any volume of commercial stock.",
            ],
          },
          {
            e: "⭐",
            title: "What old Dubai customers say",
            paras: [
              "“I needed to store my entire flat contents from Karama for 2 months while I visited family in India. SafeStorage picked everything up in one morning and returned it perfectly when I came back. Honest pricing and very trustworthy team.” — Rajan K., Karama Apartment Resident",
              "“My Deira trading business needed to archive 5 years of documents and store excess stock. SafeStorage organized everything with barcodes and retrieved exactly what I needed within a day. Very professional.” — Imran A., Trading Business, Deira",
            ],
          },
        ]}
        uses={[
          { e: "🛋️", title: "Spare furniture", text: "Items that simply don't fit in compact older apartments" },
          { e: "🧳", title: "Suitcases and seasonal items", text: "Stored while residents travel home for extended visits" },
          { e: "📦", title: "Excess stock", text: "Seasonal inventory for Deira traders and small businesses" },
          { e: "🗂️", title: "Business documents", text: "Barcode-indexed archiving with on-demand retrieval" },
          { e: "🪑", title: "Office equipment", text: "Stored during relocation or renovation" },
          { e: "📺", title: "Electronics and appliances", text: "Household belongings kept safe between flats" },
        ]}
        zones={[
          { title: "Deira Areas", items: ["Deira City Centre area", "Al Rigga & Al Muteena", "Al Baraha", "Naif & Gold Souk area", "Al Mamzar & Hamriya"] },
          { title: "Bur Dubai & Karama", items: ["Bur Dubai (all areas)", "Al Karama", "Al Mankhool", "Oud Metha", "Al Jaddaf"] },
          { title: "Extended Coverage", items: ["Al Garhoud", "Al Qusais", "Al Nahda (Dubai)", "Al Twar", "Umm Ramool"] },
        ]}
        ctaLine="Storage in Deira, Bur Dubai or Karama — get your free quote today."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup across Deira, Bur Dubai, Karama and Oud Metha. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="deira"
      />
    </>
  )
}
