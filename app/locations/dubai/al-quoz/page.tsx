import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* Rebuilt in the landing design to rank for the Al Quoz storage cluster
   ("storage al quoz", "self storage al quoz", "storage space in al quoz").
   Facts only: we have NO Al Quoz facility — we collect from Al Quoz and store
   at our Dubai facility, and the page says so. No prices, no "dedicated unit",
   no fireproof / certificate-of-destruction claims. */

const TITLE = "Storage in Al Quoz: Self Storage & Storage Space | SafeStorage"
const DESCRIPTION =
  "Storage space in Al Quoz without the warehouse rent. We collect from Al Quoz Industrial, Alserkal and Al Safa, store it in Dubai and return it on request."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords:
    "storage al quoz, self storage al quoz, storage space in al quoz, storage in al quoz, al quoz storage, storage dubai al quoz, storage company al quoz, warehouse overflow storage al quoz",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/al-quoz",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/al-quoz",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/al-quoz while Arabic sat at
    // /ar/locations/dubai/al-quoz, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/al-quoz",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/al-quoz",
      "x-default": "https://safestorage.ae/locations/dubai/al-quoz",
    },
  },
}

const faqs = [
  {
    q: "Do you have a storage facility in Al Quoz?",
    a: "No. Our warehouse is in Dubai Investment Park, about 20-25 minutes from Al Quoz. We collect from your Al Quoz address, wrap and log the items, store them there and bring them back whenever you ask, so you never drive anywhere.",
  },
  {
    q: "How is this different from self storage in Al Quoz?",
    a: "A self-storage unit means you load, drive and unload yourself, and you pay for a fixed size whether it is full or not. With us the team collects, you pay monthly for the space your goods use, and there is no lock-in.",
  },
  {
    q: "Can I get storage space in Al Quoz for business stock or overflow?",
    a: "Yes. Warehouse overflow, showroom backup stock, display pieces, documents and seasonal ranges are all common. Tell us the volume and we will send a free, itemised quote.",
  },
  {
    q: "Do you collect from Alserkal Avenue, Al Safa and Umm Suqeim?",
    a: "Yes. We cover all four Al Quoz industrial areas, the residential parts of Al Quoz, Alserkal Avenue, Al Safa, Al Wasl and Umm Suqeim. WhatsApp +971505773388 and we will confirm your street.",
  },
  {
    q: "How fast can you collect from Al Quoz?",
    a: "Often within 24 to 48 hours, and Al Quoz is close to our route. Photos on WhatsApp are the quickest way to get a quote and a slot.",
  },
]

const schemas = [
  locationBusinessSchema({
    name: "Al Quoz",
    url: "https://safestorage.ae/locations/dubai/al-quoz",
    serves: ["Alserkal Avenue", "Al Safa", "Al Wasl", "Umm Suqeim", "Al Manara", "Dubai Marina"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Al Quoz",
    description:
      "Collection-based storage for Al Quoz businesses and residents: we collect, store in Dubai and return on request, billed monthly on the space used.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/al-quoz",
    areaServed: [
      { "@type": "Place", name: "Al Quoz" },
      { "@type": "Place", name: "Alserkal Avenue" },
      { "@type": "Place", name: "Al Safa" },
      { "@type": "Place", name: "Umm Suqeim" },
      { "@type": "Place", name: "Dubai Marina" },
    ],
    serviceType: "Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/al-quoz#webpage",
    name: TITLE,
    description: DESCRIPTION,
    url: "https://safestorage.ae/locations/dubai/al-quoz",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-10-18",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://safestorage.ae/locations/dubai/al-quoz#faq",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function AlQuozPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Al Quoz" },
        ]}
      />
      <SchemaScript schema={schemas} />
      <LocationLanding
        name="Al Quoz"
        heroImage="/landing/dubai-hub-photo.webp"
        heroPosition="center"
        eyebrow="Al Quoz & Sheikh Zayed Road"
        title="Storage in"
        titleAccent="Al Quoz"
        blurb="Storage space for Al Quoz warehouses, showrooms, studios and villas. We collect, store it in Dubai and bring it back."
        areas={[
          "Al Quoz Industrial 1",
          "Al Quoz Industrial 2",
          "Al Quoz Industrial 3",
          "Al Quoz Industrial 4",
          "Al Quoz 1, 2, 3 & 4",
          "Alserkal Avenue",
          "Al Safa",
          "Al Wasl",
          "Umm Suqeim",
          "Al Manara",
          "Al Khail Gate",
          "Dubai Marina",
        ]}
        distance="20-25 minutes"
        benefits={[
          { e: "🏭", text: "Move dead stock out of expensive warehouse floor space" },
          { e: "🎨", text: "Indoor storage for Alserkal studios between shows" },
          { e: "🚪", text: "We collect from your door, so you never drive anywhere" },
          { e: "🏡", text: "Al Safa and Umm Suqeim villas emptied for renovation" },
        ]}
        features={[
          { Icon: Truck, title: "Collection included", text: "We collect from Al Quoz, wrap the items and deliver back on request" },
          { Icon: Shield, title: "Logged and monitored", text: "Every item is logged on collection and stored in a CCTV-monitored facility" },
          { Icon: Clock, title: "Month to month", text: "Billed monthly on the space your goods use, with no lock-in" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage space in Al Quoz,",
          accent: "without the warehouse rent.",
          paras: [
            "Al Quoz is short on space: warehouses are full, studios are full and many Al Safa villas are mid-renovation. Our warehouse is in Dubai Investment Park, 20-25 minutes away, so we do not rent you a unit in Al Quoz. We collect from your address and bring your things back when you ask.",
            "That is a different product from self storage in Al Quoz. You do not load, drive or unload, and you pay monthly for the space your goods use rather than for a fixed unit size.",
          ],
        }}
        panels={[
          {
            e: "🏭",
            title: "Warehouse overflow and dead stock",
            paras: [
              "Most Al Quoz warehouses have the same problem: boxes nobody has opened in two years, display units from a finished campaign, spare parts for a replaced machine, all on floor space you pay industrial rates for.",
              "Move the dead volume to us and keep your warehouse for the work that earns. Take more space in the busy season and give it back when it ends. A free, itemised quote shows the figure before you commit.",
            ],
          },
          {
            e: "🎨",
            title: "Art, studio and exhibition storage",
            paras: [
              "Al Quoz is where Dubai's art and design businesses settled. Between shows the work needs somewhere indoors. We wrap, photograph and log each piece on collection, so you can call back one piece and not the whole lot.",
              "If you work to a show calendar, give us the dates and we will book collections and returns around them.",
            ],
          },
          {
            e: "🛋️",
            title: "Showrooms, retail stock and villas",
            paras: [
              "Showroom space on Sheikh Zayed Road is too expensive to fill with backup stock. We hold bulk inventory, ex-display pieces and seasonal ranges, and you call them forward as space frees up.",
              "For Al Safa, Al Wasl and Umm Suqeim renovations we empty the villa, store everything and return it when the work is done.",
            ],
          },
        ]}
        uses={[
          { e: "📦", title: "Warehouse overflow", text: "Dead stock and spare parts off your floor" },
          { e: "🖼️", title: "Artwork and props", text: "Indoor storage between exhibitions" },
          { e: "🪑", title: "Showroom backup stock", text: "Called forward as display space frees up" },
          { e: "🗄️", title: "Business documents", text: "Boxes logged and returned on request" },
          { e: "🏡", title: "Villa renovation", text: "Whole rooms stored and returned afterwards" },
          { e: "🛒", title: "E-commerce inventory", text: "Held between restocks" },
        ]}
        zones={[
          { title: "Al Quoz", items: ["Al Quoz Industrial 1, 2, 3, 4", "Al Quoz 1, 2, 3, 4", "Alserkal Avenue", "Al Khail Gate"] },
          { title: "Residential nearby", items: ["Al Safa", "Al Wasl", "Umm Suqeim", "Al Manara"] },
          { title: "Along Sheikh Zayed Road", items: ["Dubai Marina", "JBR", "Media City", "Internet City"] },
        ]}
        ctaLine="Storage in Al Quoz: we collect, store it in Dubai and bring it back."
        faqs={faqs}
        ctaTitle="Need storage space in Al Quoz?"
        ctaBlurb="Send a few photos on WhatsApp. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="al-quoz"
      />
    </>
  )
}
