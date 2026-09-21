import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-21 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro, benefits and every rich-text paragraph — laid
   out in the landing design system with the owner's Business Bay photo, used
   exactly as they saved it. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: { absolute: "Storage Units Business Bay | Secure & Safe Storage" },
  description:
    "Secure storage in Business Bay & Downtown Dubai. Self Storage units for office documents and household furniture.",
  keywords:
    "Storage Business Bay, Business Bay storage, Downtown Dubai storage, DIFC storage units, Office storage Dubai, Document archiving Dubai, Personal storage units, Secure storage Dubai, Storage with pickup, Furniture storage Dubai, Commercial storage UAE, Self storage Business Bay, SafeStorage Dubai, High-rise apartment storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/business-bay",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/business-bay",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/business-bay while Arabic sat at
    // /ar/locations/dubai/business-bay, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/business-bay",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/business-bay",
      "x-default": "https://safestorage.ae/locations/dubai/business-bay",
    },
  },
}

const faqs = [
  {
    q: "How quickly can you pick up from my Business Bay apartment?",
    a: "For requests made before 12 PM, same-day pickup from Business Bay apartments is typically available. Standard bookings can be scheduled within 24 hours with your choice of morning, afternoon, or evening time window. Our team knows the Business Bay tower access procedures and loading bay locations, ensuring a smooth and efficient pickup experience. We regularly service all major towers including The Executive Towers, Park Tower, Damac Maison, and the Waterfront Towers. Call or WhatsApp +971505773388 to check same-day availability for your specific building.",
  },
  {
    q: "Can DIFC companies use SafeStorage for document archiving?",
    a: "Yes, SafeStorage is widely used by DIFC-registered companies for document archiving and records management. We provide fireproof storage, individual box labelling with barcode indexing, and on-demand retrieval of specific files or boxes within 24–48 hours. Our document storage service helps DIFC companies meet UAE regulatory requirements for financial and legal record retention. All document handling follows strict confidentiality protocols. We serve law firms, financial institutions, fund managers, and corporate headquarters throughout the DIFC and the broader Downtown area.",
  },
  {
    q: "Is there storage available near the Burj Khalifa?",
    a: "Yes, the entire Burj Khalifa District falls within our Business Bay service zone, which is one of our fastest and most active zones. Residents of the Burj Khalifa Residences, Address Sky View, The Address Boulevard, and other Burj Khalifa area towers regularly use SafeStorage. Our team can reach most Burj Khalifa area addresses within 10–15 minutes of confirmation. The Burj Khalifa area is also one of our primary zones for corporate office storage, serving businesses in the towers surrounding Dubai Mall and the Opera District.",
  },
  {
    q: "Do you handle the packing, or do I need to pack items myself?",
    a: "SafeStorage's team handles all the heavy lifting and loading, and we can also provide professional packing services if required. For standard household items and furniture, our team will wrap, protect, and transport your belongings using quality packing materials at no extra charge for basic wrapping. For fragile items, artwork, antiques, or electronics, we offer professional packing using bubble wrap, custom crating, and specialist materials — available as an optional add-on service. You are also welcome to pre-pack your items in boxes; we will collect, label, and store them as-is.",
  },
  {
    q: "What happens if I need my items back urgently from storage?",
    a: "If you need items urgently, contact us on +971505773388 or WhatsApp as early as possible in the day. For urgent requests received before 12 PM, we can often arrange same-day delivery back to any Business Bay or Downtown Dubai address. Standard delivery is within 24–48 hours. You can request specific items from your digital inventory to be returned without having to retrieve everything. Deliveries within Dubai are handled door-to-door as part of our service, with any additional fees disclosed upfront before you book.",
  },
]

const businessBaySchemas = [
  locationBusinessSchema({
    name: "Business Bay",
    url: "https://safestorage.ae/locations/dubai/business-bay",
    serves: ["DIFC", "Downtown Dubai"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Near Business Bay & DIFC Dubai",
    description:
      "Secure storage near Business Bay & DIFC. Door-to-Door pickup from Business Bay, DIFC & Downtown Dubai. Space ready in 24 hours.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/business-bay",
    areaServed: [
      { "@type": "Place", name: "Business Bay" },
      { "@type": "Place", name: "DIFC" },
      { "@type": "Place", name: "Downtown Dubai" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/business-bay#webpage",
    name: "Storage Units Business Bay | Secure & Safe Storage",
    description:
      "Secure storage in Business Bay & Downtown Dubai. Self Storage units for office documents and household furniture.",
    url: "https://safestorage.ae/locations/dubai/business-bay",
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

export default function BusinessBayPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Business Bay" },
        ]}
      />
      <SchemaScript schema={businessBaySchemas} />
      <LocationLanding
        name="Business Bay"
        heroImage="/landing/business-bay-newone.webp"
        heroPosition="center"
        heroAspect="1746 / 901"
        eyebrow="Business Bay"
        title="Storage Units in"
        titleAccent="Business Bay"
        blurb="Office clearances, DIFC document archiving and high-rise apartment storage, collected from any tower between Sheikh Zayed Road and the Dubai Canal."
        areas={["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road", "Al Khail Road"]}
        distance="10-15 minutes"
        benefits={[
          { e: "🏢", text: "Perfect for Business Bay office storage" },
          { e: "🗂️", text: "Document archiving for DIFC companies" },
          { e: "🚪", text: "Door-to-Door pickup from Downtown Dubai" },
          { e: "🏙️", text: "Ideal for residents in high-rise apartments" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from Business Bay and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage Near Business Bay, DIFC",
          accent: "& Downtown Dubai.",
          paras: [
            "SafeStorage serves residents and businesses in Business Bay, Downtown Dubai, DIFC, and Sheikh Zayed Road with premium secure storage units, door-to-door service, and flexible monthly plans. Whether you are a high-rise apartment resident or a DIFC-registered company, we have the right storage solution for you.",
            "Business Bay is Dubai's most dynamic commercial district, with thousands of offices, luxury residential towers, and corporate headquarters lining the Dubai Canal. The district attracts professionals from around the world, creating a constant demand for flexible, premium storage solutions. Whether you're a corporate tenant clearing out an office, a Downtown resident between leases, or a DIFC law firm archiving client files, SafeStorage provides the most convenient, secure, and affordable solution in the area.",
          ],
        }}
        panels={[
          {
            e: "🏢",
            title: "Office & Business Storage — Business Bay",
            paras: [
              "Business Bay is one of Dubai's busiest commercial hubs, home to thousands of offices, co-working spaces, and corporate headquarters. When businesses in Business Bay need to clear office space, store excess furniture, or archive documents, SafeStorage provides a fast, reliable solution.",
              "Our same-day pickup service can clear an entire office floor of furniture, equipment, and files within hours. Items are transported to our secure facility and can be retrieved on demand. We serve startups, SMEs, and large corporations with tailored business storage plans.",
            ],
          },
          {
            e: "🗂️",
            title: "Document Archiving — DIFC Companies",
            paras: [
              "DIFC-registered businesses are required to maintain specific financial, legal, and corporate records for defined periods under UAE regulations. SafeStorage provides compliant document archiving with fireproof storage, barcode indexing, and on-demand retrieval.",
              "Our document storage service is trusted by law firms, financial institutions, and corporate offices across DIFC and the broader Downtown area. Regular document pickup and delivery keeps your office uncluttered while maintaining complete access to archived records whenever needed.",
            ],
          },
        ]}
        uses={[
          { e: "🔨", title: "Renovation storage", text: "Full apartment furniture clearance while contractors work" },
          { e: "🔑", title: "Lease gap storage", text: "Bridge the gap between old and new apartment leases" },
          { e: "📦", title: "Downsizing", text: "Store overflow items when moving to a smaller unit" },
          { e: "🎄", title: "Seasonal storage", text: "Holiday items, winter clothes, sports equipment" },
          { e: "✈️", title: "Expat storage", text: "Keep belongings safely stored while travelling or relocating" },
        ]}
        zones={[
          {
            title: "Business Bay & the canal",
            items: ["Business Bay (all towers)", "Downtown Dubai", "Dubai International Financial Centre (DIFC)", "Sheikh Zayed Road (E11)", "Al Khail Road corridor"],
          },
          {
            title: "Downtown & Trade Centre",
            items: ["Dubai Mall area", "The Old Town", "Burj Khalifa District", "Za'abeel", "Trade Centre"],
          },
        ]}
        tips={[
          "Residents of Downtown Dubai and Business Bay high-rise apartments often face space constraints common to urban living. SafeStorage provides flexible storage for seasonal items, excess furniture, sports equipment, and personal belongings — freeing up valuable apartment space without long-term commitment.",
        ]}
        ctaLine="Need storage in Business Bay, DIFC, or Downtown Dubai? Get your free quote now."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Same-day pickup from Business Bay, DIFC and Downtown Dubai. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="business-bay"
      />
    </>
  )
}
