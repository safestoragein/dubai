import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-21 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits, the area's own rich text and its
   questions — laid out in the landing design system with the owner's Downtown
   photo, used exactly as they saved it. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: "Downtown Dubai Storage — Door-to-door Pickup",
  description:
    "Storage in Downtown Dubai, DIFC & Burj Khalifa District. Secure units, door-to-door pickup from your tower, same-day service.",
  keywords:
    "storage downtown dubai, storage near burj khalifa, DIFC storage dubai, downtown dubai self storage, storage units downtown dubai, burj khalifa district storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/downtown-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/downtown-dubai",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/downtown-dubai while Arabic sat at
    // /ar/locations/dubai/downtown-dubai, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/downtown-dubai",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/downtown-dubai",
      "x-default": "https://safestorage.ae/locations/dubai/downtown-dubai",
    },
  },
}

const faqs = [
  {
    q: "How quickly can SafeStorage pick up from my Downtown Dubai apartment?",
    a: "For requests confirmed before 12 PM on working days, same-day pickup is available across all Downtown Dubai areas including the Burj Khalifa District, Opera District, and Business Bay waterfront. Standard bookings are confirmed within 24 hours. Our team has completed over 2,000 pickups from Downtown and knows every major tower's loading bay and concierge procedures, so your pickup is smooth and fast. Call +971505773388 to check same-day availability for your building.",
  },
  {
    q: "Can SafeStorage store furniture from a Burj Khalifa apartment?",
    a: "Yes. The Burj Khalifa residential floors (levels 19–108 in the Armani Residences and private residences above) are within our standard Downtown service zone. We have experience with the Burj Khalifa's specific access, security check-in, and loading bay protocols. All furniture is professionally wrapped and protected before transport. Given the premium nature of Burj Khalifa apartment furnishings, we pay particular attention to high-value items including designer furniture, artwork, and luxury electronics.",
  },
  {
    q: "Does SafeStorage provide compliant document archiving for DIFC companies?",
    a: "Yes. SafeStorage is used by numerous DIFC-registered businesses for compliant document archiving. We provide fireproof storage, individual box labelling with barcode indexing, chain-of-custody documentation, confidentiality agreements, and on-demand retrieval of specific files within 24–48 hours. Our document archiving service helps DIFC companies meet retention requirements under DIFC Law and UAE Commercial Companies Law without dedicating expensive DIFC office space to inactive archives. We serve law firms, financial services firms, fund managers, and corporate offices throughout the DIFC precinct.",
  },
  {
    q: "What storage is available for Downtown Dubai apartment renovation?",
    a: "Renovation storage is one of our most common Downtown Dubai requests. The process: we arrive at your apartment, professionally wrap and remove all furniture, transport it to our secure facility, and store it safely while your contractor works. When your renovation is complete, we deliver everything back and our team places items in the rooms you specify. Renovation storage plans start from one week with no minimum contract, and you pay only for the space your items use. Call us early to book your renovation pickup date, as Downtown slots fill quickly.",
  },
  {
    q: "Can I store items from my Sheikh Zayed Road office during relocation?",
    a: "Yes, Sheikh Zayed Road (E11) is fully within our Downtown service zone. We regularly handle office clearances and storage for businesses relocating along SZR, from the Trade Centre twin towers to Emirates Towers to the cluster of towers near Business Bay. For SZR commercial pickups, we can mobilise a larger team to clear an entire floor of office furniture and equipment within a single working day. All items are catalogued on collection and stored until needed, with on-demand delivery to your new SZR or Business Bay address.",
  },
]

const downtownSchemas = [
  locationBusinessSchema({
    name: "Downtown Dubai",
    url: "https://safestorage.ae/locations/dubai/downtown-dubai",
    serves: ["DIFC", "Burj Khalifa District", "Business Bay", "Sheikh Zayed Road"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Near Downtown Dubai, DIFC & Burj Khalifa",
    description:
      "Secure storage for Downtown Dubai, DIFC and the Burj Khalifa District. Door-to-door pickup from your tower, same-day service.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/downtown-dubai",
    areaServed: [
      { "@type": "Place", name: "Downtown Dubai" },
      { "@type": "Place", name: "DIFC" },
      { "@type": "Place", name: "Burj Khalifa District" },
      { "@type": "Place", name: "Business Bay" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/downtown-dubai#webpage",
    name: "Downtown Dubai Storage — Door-to-door Pickup",
    description:
      "Storage in Downtown Dubai, DIFC & Burj Khalifa District. Secure units, door-to-door pickup from your tower, same-day service.",
    url: "https://safestorage.ae/locations/dubai/downtown-dubai",
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

export default function DowntownDubaiPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Downtown Dubai" },
        ]}
      />
      <SchemaScript schema={downtownSchemas} />
      <LocationLanding
        name="Downtown Dubai"
        heroImage="/landing/downtown-dubai-photo.webp"
        heroPosition="center"
        heroAspect="1746 / 901"
        eyebrow="Downtown Dubai"
        title="Storage in"
        titleAccent="Downtown Dubai"
        blurb="Storage for Downtown apartments and Burj Khalifa District offices, collected floor-to-door from towers where lift and loading-bay access must be booked in advance."
        areas={["Downtown Dubai", "DIFC", "Burj Khalifa District", "Business Bay", "Sheikh Zayed Road", "The Old Town"]}
        distance="10-15 minutes"
        benefits={[
          { e: "⚡", text: "Same-day pickup from your Downtown tower" },
          { e: "🗂️", text: "Document archiving for DIFC-registered companies" },
          { e: "🏙️", text: "Ideal for high-rise apartment residents needing extra space" },
          { e: "🪑", text: "Office furniture storage during relocation or renovation" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from Downtown Dubai and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage Near Downtown Dubai, DIFC",
          accent: "& Burj Khalifa.",
          paras: [
            "SafeStorage is the preferred storage provider for residents and businesses in Downtown Dubai, the Dubai International Financial Centre (DIFC), the Burj Khalifa District, and Business Bay. Since 2018, our team has completed over 2,000 pickups from this zone — from compact studio apartments in Address Boulevard to multi-floor corporate offices in ICD Brookfield Place. We know the access protocols, loading bay schedules, and concierge procedures for every major tower in the area, so your pickup is seamless from the moment we arrive.",
          ],
        }}
        panels={[
          {
            e: "🏙️",
            title: "Apartment Storage — Downtown Dubai Towers",
            paras: [
              "Downtown Dubai apartments are among the most premium residential spaces in the UAE — and among the most space-constrained. With square-metre prices regularly exceeding AED 2,500, dedicating floor space to rarely-used items is simply not practical. SafeStorage solves this by giving Downtown residents a secure extension of their apartment — accessible on demand.",
              "We regularly serve residents of Burj Khalifa Residences, The Address Downtown, Vida Downtown, Blvd Heights, Act One | Act Two, Forte, Grande Signature Residences, and all towers in the Opera District. Our team handles everything from collection to delivery, so you never need to arrange a van or visit a storage facility.",
            ],
          },
          {
            e: "🗂️",
            title: "Document Archiving — DIFC & Corporate Offices",
            paras: [
              "DIFC-registered companies have specific obligations under DIFC Law and UAE Commercial Companies Law to retain financial, legal, and corporate records for minimum periods — typically 5 to 10 years. SafeStorage's document archiving service provides fireproof storage, barcode-indexed retrieval, and same-week delivery of specific files, helping DIFC companies stay compliant without wasting premium office space on dead archives.",
              "Our document storage service is trusted by law firms, fund managers, and financial institutions across Gate Village, ICD Brookfield Place, and the DIFC Precinct. All document handling follows strict chain-of-custody protocols with digital access logs and confidentiality agreements available.",
            ],
          },
        ]}
        uses={[
          { e: "🚐", title: "No van rental needed", text: "Our team arrives at your building, carries everything from your apartment floor to our vehicle. You never need to arrange transport or visit a storage facility." },
          { e: "🛗", title: "Tower access expertise", text: "We know the loading bay procedures, lift access rules, and concierge requirements for every major Downtown tower. Our pickups never cause delays for building management." },
          { e: "⚡", title: "Same-day service", text: "For requests before 12 PM, we can collect from any Downtown address the same day. This is critical when lease dates or renovation timelines are tight." },
          { e: "🔒", title: "Secure indoor storage", text: "All items are kept in our clean, indoor facility under 24/7 CCTV monitoring. In Downtown Dubai, where apartments often contain premium furniture and electronics, keeping belongings safe and dust-protected is essential." },
          { e: "🏷️", title: "Transparent pricing, no surprises", text: "Downtown residents pay the same rates as all Dubai customers. No location premiums, no high-rise access fees, no surprises at billing." },
        ]}
        zones={[
          { title: "Downtown Core", items: ["Burj Khalifa District", "The Dubai Mall precinct", "Opera District", "Souk Al Bahar & Old Town", "Blvd Strip"] },
          { title: "Financial & Business", items: ["DIFC Gate Village", "ICD Brookfield Place", "Business Bay Canal Front", "The Executive Towers", "Trade Centre"] },
          { title: "Nearby Communities", items: ["Sheikh Zayed Road towers", "Za'abeel & Oud Metha", "Al Wasl & Al Safa", "City Walk", "Al Jaddaf"] },
        ]}
        ctaLine="Ready to free up space in your Downtown Dubai apartment or DIFC office?"
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Same-day pickup from Downtown Dubai, DIFC and the Burj Khalifa District. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="downtown-dubai"
      />
    </>
  )
}
