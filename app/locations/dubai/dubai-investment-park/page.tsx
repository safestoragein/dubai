import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-23 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's DIP photo, used
   exactly as they saved it, with the real SafeStorage logo in place of the
   drawn one. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: { absolute: "Self Storage Dubai Investment Park (DIP) | SafeStorage" },
  // "free pickup" in the spec: transport is charged (df0df39 / 166d65a).
  description:
    "Secure storage in Dubai Investment Park (DIP). Self Storage units with door-to-door pickup for business and personal use.",
  keywords:
    "Storage Dubai Investment Park, Dubai Investment Park storage units, Motor City storage, Dubai Production City storage, Sports City storage, Warehouse storage DIP, Business storage Dubai, Personal storage DIP, Secure storage units, Storage with pickup, E-commerce storage DIP, Household storage DIP, SafeStorage DIP, Inventory storage Dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/dubai-investment-park",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/dubai-investment-park",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/dubai-investment-park while Arabic sat at
    // /ar/locations/dubai/dubai-investment-park, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/dubai-investment-park",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/dubai-investment-park",
      "x-default": "https://safestorage.ae/locations/dubai/dubai-investment-park",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage serve Jumeirah Village Circle (JVC)?",
    a: "Yes, Jumeirah Village Circle is fully covered within our Dubai Investment Park service zone. We regularly serve all clusters and buildings within JVC including apartment towers and townhouse communities. JVC residents can book same-day pickup (before 12 PM) or schedule a standard pickup within 24–48 hours.",
  },
  {
    q: "Can JAFZA companies use SafeStorage for document archiving?",
    a: "Yes, SafeStorage is an excellent solution for JAFZA (Jebel Ali Free Zone) companies needing document archiving and records management. Documents are individually labelled and indexed using barcodes, allowing specific files or boxes to be retrieved within 24–48 hours of a request. This helps JAFZA businesses meet UAE regulatory requirements without using valuable warehouse or office space for dead files.",
  },
  {
    q: "What types of businesses in Dubai Investment Park use SafeStorage?",
    a: "SafeStorage serves a wide variety of businesses in Dubai Investment Park, including manufacturing companies archiving production records, logistics firms storing excess inventory and equipment, food and beverage companies storing packaging and seasonal stock, professional services firms archiving client files, and engineering companies storing drawings and project documentation.",
  },
  {
    q: "Is Discovery Gardens covered for pickup and delivery?",
    a: "Yes, Discovery Gardens is fully within our Dubai Investment Park service zone. We serve all clusters in Discovery Gardens — Mediterranean, Zen, Contemporary, Mogul, and Mesoamerican — with the same door-to-door service available across all Dubai. Typical pickup time from Discovery Gardens is 15–20 minutes.",
  },
  {
    q: "How does SafeStorage handle document retrieval for DIP businesses?",
    a: "When a DIP business needs to retrieve documents from storage, they contact their dedicated storage consultant by phone, WhatsApp, or email and specify which boxes or files are needed. Our team uses barcode indexing to locate the exact requested items and deliver them to the business's DIP address within 24–48 hours. For urgent requests, same-day delivery may be possible for items requested before noon.",
  },
]

const dipSchemas = [
  locationBusinessSchema({
    name: "Dubai Investment Park",
    url: "https://safestorage.ae/locations/dubai/dubai-investment-park",
    serves: ["Motor City", "JAFZA"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document Archival & Storage Near Dubai Investment Park",
    description:
      "Professional document archival and records storage in Dubai Investment Park. Fireproof, secure document storage for businesses in DIP, Motor City & JAFZA.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/dubai-investment-park",
    areaServed: [
      { "@type": "Place", name: "Dubai Investment Park" },
      { "@type": "Place", name: "Motor City" },
      { "@type": "Place", name: "JAFZA" },
    ],
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/dubai-investment-park#webpage",
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: "Storage Units Dubai Investment Park | DIP | SafeStorage",
    description:
      "Secure storage in Dubai Investment Park (DIP). Self Storage units with door-to-door pickup for business and personal use.",
    url: "https://safestorage.ae/locations/dubai/dubai-investment-park",
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

export default function DubaiInvestmentParkPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Dubai Investment Park" },
        ]}
      />
      <SchemaScript schema={dipSchemas} />
      <LocationLanding
        name="Dubai Investment Park"
        heroImage="/landing/dip-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        ratingBottomLeft
        eyebrow="DIP & Motor City"
        title="Storage in"
        titleAccent="Dubai Investment Park"
        blurb="Our own facility is in DIP, so collections here are the fastest we run — useful for Green Community residents and DIP, Motor City and Dubai Production City businesses."
        areas={["Dubai Investment Park 1", "Dubai Investment Park 2", "Motor City", "Dubai Production City", "Dubai Studio City", "Sports City"]}
        distance="10-15 minutes"
        benefits={[
          { e: "🏭", text: "Perfect for DIP warehouse and business storage" },
          { e: "🏘️", text: "Ideal for Motor City residents" },
          { e: "🚪", text: "Door-to-Door pickup from Production City" },
          { e: "🏟️", text: "Convenient for Sports City apartments" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from your DIP address and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Document archival & storage —",
          accent: "Dubai Investment Park.",
          paras: [
            "SafeStorage serves businesses and residents in Dubai Investment Park (DIP), Motor City, Dubai Production City, Dubai Studio City, and Sports City with professional document archiving, commercial storage, and personal self-storage solutions. Our facility is conveniently located with easy access from the major road networks serving these communities.",
            "The DIP service zone also covers several popular residential communities including Motor City, Dubai Sports City, and Discovery Gardens, each with thousands of residents who benefit from SafeStorage's convenient door-to-door service.",
          ],
        }}
        panels={[
          {
            e: "🗂️",
            title: "Document Archival for DIP & JAFZA Businesses",
            paras: [
              "Dubai Investment Park hosts hundreds of manufacturing, logistics, and industrial companies that generate significant volumes of business records, contracts, financial documents, and regulatory filings. SafeStorage provides professional document archiving services with fireproof storage, individual box labelling, and barcode-indexed retrieval.",
              "Our document storage meets UAE regulatory requirements for record retention. Boxes are collected directly from your DIP or JAFZA premises, securely stored, and specific files or boxes can be retrieved within 24–48 hours on request. Bulk shredding services are available for expired records.",
            ],
          },
          {
            e: "🏭",
            title: "Business & Warehouse Storage — DIP",
            paras: [
              "For companies in Dubai Investment Park that need flexible overflow storage — whether for excess inventory, seasonal stock, or equipment not in current use — SafeStorage offers commercial storage from 50 sq ft to 300+ sq ft on flexible monthly contracts.",
              "Unlike traditional warehouse leases that require long-term commitments and large capital outlay, SafeStorage lets businesses scale storage space up or down each month based on actual needs. This is especially valuable for e-commerce businesses, importers, and distributors operating from DIP or JAFZA.",
            ],
          },
          {
            e: "🏘️",
            title: "Residential Storage — Motor City & Sports City",
            paras: [
              "Motor City and Sports City are popular residential communities in Dubai, offering affordable, spacious apartments and townhouses. Residents use SafeStorage for renovation storage, sports equipment, seasonal items, moving storage between properties, and home-business stock.",
              "Discovery Gardens is one of Dubai's most densely populated residential communities. The community's mid-size apartments often lack sufficient storage space for all a household's needs, making SafeStorage a popular and practical solution for Discovery Gardens residents.",
            ],
          },
        ]}
        uses={[
          { e: "📁", title: "Compliance records", text: "Fireproof document storage with barcode-indexed retrieval" },
          { e: "📦", title: "Inventory overflow", text: "Excess and seasonal stock, scaled up or down each month" },
          { e: "⚙️", title: "Equipment and machinery", text: "Kept safe while it is not in current use" },
          { e: "🪑", title: "Office furniture", text: "Stored during a facility upgrade or move" },
          { e: "🚴", title: "Sports equipment", text: "Cycling gear, golf clubs and gym kit from Motor City and Sports City" },
          { e: "🔑", title: "Moving storage", text: "Short-term storage between properties or during a lease transition" },
        ]}
        zones={[
          { title: "DIP & Free Zone", items: ["Dubai Investment Park 1 & 2", "JAFZA (Jebel Ali Free Zone)", "Jebel Ali", "DIP residential sections", "DIP industrial zones"] },
          { title: "Residential Communities", items: ["Motor City", "Dubai Sports City", "Discovery Gardens", "Jumeirah Village Circle", "Green Community"] },
          { title: "Media & Studio Zones", items: ["Dubai Production City", "Dubai Studio City", "Dubai Investment Park retail", "Sports City apartments", "Motor City townhouses"] },
        ]}
        ctaLine="Business or resident in DIP, Motor City, or Sports City? Get your free quote now."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup across Dubai Investment Park, Motor City, Sports City and Discovery Gardens. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="dubai-investment-park"
      />
    </>
  )
}
