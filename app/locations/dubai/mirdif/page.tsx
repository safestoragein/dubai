import type { Metadata } from "next"
import { Truck, Shield, Clock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import LocationLanding from "@/components/locations/location-landing"

/* 2026-09-22 redesign (owner's request): the live copy is carried over word for
   word — the LocationPage intro and benefits and every rich-text paragraph —
   laid out in the landing design system with the owner's Mirdif photo, used
   exactly as they saved it, with the real SafeStorage logo in place of the
   drawn one. FAQs cut to the owner's limit of five. */

export const metadata: Metadata = {
  title: "Mirdif Storage Dubai — Villa & Family Storage",
  description:
    "Storage in Mirdif, Rashidiya & Muhaisnah Dubai. Door-to-Door pickup from villas and apartments. Secure, flexible plans.",
  keywords:
    "mirdif storage dubai, storage mirdif, mirdif self storage, rashidiya storage dubai, storage near mirdif city centre, east dubai storage, muhaisnah storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/mirdif",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/mirdif",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/mirdif while Arabic sat at
    // /ar/locations/dubai/mirdif, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/mirdif",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/mirdif",
      "x-default": "https://safestorage.ae/locations/dubai/mirdif",
    },
  },
}

const faqs = [
  {
    q: "Does SafeStorage cover all parts of Mirdif including the newer Uptown Mirdif area?",
    a: "Yes. SafeStorage covers all Mirdif areas — the original Mirdif villa communities (Phases 1, 2, and 3), Uptown Mirdif townhouses, Mirdif Hills, and the Shorooq community. All Mirdif addresses qualify for our door-to-door service. Call +971505773388 with your specific street or community name if you want to confirm coverage, though all Mirdif addresses are within our service zone.",
  },
  {
    q: "Can SafeStorage store a full Mirdif villa during summer vacation?",
    a: "Yes. Summer villa storage is one of our most popular services in Mirdif. Many Mirdif families travel abroad for extended periods during summer (May–September). SafeStorage stores your villa contents safely and securely during your absence, keeping furniture, electronics, and personal items protected while you are away.",
  },
  {
    q: "Is Rashidiya covered by SafeStorage?",
    a: "Yes. Rashidiya — located adjacent to Mirdif near Dubai International Airport — is fully within our east Dubai service zone. Rashidiya's mix of villas and apartments is served with the same door-to-door service as Mirdif. Typical pickup times from Rashidiya are 20–25 minutes from confirmation.",
  },
  {
    q: "Can SafeStorage move items from Mirdif to a new address in another part of Dubai?",
    a: "Yes. SafeStorage provides end-to-end service: we collect from your Mirdif address, store items securely, and deliver to any Dubai address when you are ready. We can also deliver items in stages, returning specific rooms' furniture before others, so you can set up your new home gradually.",
  },
  {
    q: "Are there female-only pickup teams available for Mirdif villa storage?",
    a: "We understand that some Mirdif families prefer female-only teams entering their home. SafeStorage can accommodate this request with advance notice. Please mention this preference when booking your pickup and we will assign a female team member to lead the collection at your property, with a supporting all-female team where available.",
  },
]

const mirdifSchemas = [
  locationBusinessSchema({
    name: "Mirdif",
    url: "https://safestorage.ae/locations/dubai/mirdif",
    serves: ["Rashidiya", "Muhaisnah", "Al Warqa", "Nad Al Sheba"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage in Mirdif & East Dubai",
    description:
      "Secure storage for Mirdif, Rashidiya, Muhaisnah, and east Dubai residents. Door-to-Door pickup from villas and apartments. Flexible plans.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/mirdif",
    areaServed: [
      { "@type": "Place", name: "Mirdif" },
      { "@type": "Place", name: "Rashidiya" },
      { "@type": "Place", name: "Muhaisnah" },
      { "@type": "Place", name: "Al Warqa" },
      { "@type": "Place", name: "Nad Al Sheba" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/mirdif#webpage",
    // Must equal the rendered <title>: the `title` above is a plain string, so the
    // root layout template appends " | SafeStorage Dubai" to it.
    name: "Mirdif Storage Dubai — Villa & Family Storage | SafeStorage Dubai",
    description:
      "Storage in Mirdif, Rashidiya & Muhaisnah Dubai. Door-to-Door pickup from villas and apartments. Secure, flexible plans.",
    url: "https://safestorage.ae/locations/dubai/mirdif",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
    dateModified: "2026-09-22",
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

export default function MirdifPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Mirdif" },
        ]}
      />
      <SchemaScript schema={mirdifSchemas} />
      <LocationLanding
        name="Mirdif"
        heroImage="/landing/mirdif-photo.webp"
        heroAspect="1672 / 941"
        heroPosition="center"
        ratingBottomLeft
        eyebrow="Mirdif & East Dubai"
        title="Storage in"
        titleAccent="Mirdif"
        blurb="Family storage for Mirdif and Uptown villas — school-holiday clutter, extra furniture, and full clearances when families move between villas."
        areas={["Mirdif (all phases)", "Rashidiya", "Muhaisnah", "Al Warqa", "Nad Al Sheba", "Uptown Mirdif"]}
        distance="20-25 minutes"
        benefits={[
          { e: "🚪", text: "Door-to-Door pickup from Mirdif villas and townhouses" },
          { e: "🏡", text: "Ideal for families with large villa storage needs" },
          { e: "🧭", text: "East Dubai specialists — experienced with Mirdif community" },
          { e: "📍", text: "Rashidiya and Al Warqa also fully covered" },
        ]}
        features={[
          { Icon: Truck, title: "Door-to-door Service", text: "We collect from your Mirdif address and deliver back when needed" },
          { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
          { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
        ]}
        lead={{
          eyebrow: "Good to know",
          title: "Storage in Mirdif, Rashidiya",
          accent: "& East Dubai.",
          paras: [
            "East Dubai storage specialists · 176+ Mirdif & Rashidiya customers · Serving East Dubai since 2019",
            "Mirdif is one of Dubai's most established and family-oriented residential communities, known for its spacious villas, low-rise apartments, strong UAE national community, and proximity to Dubai International Airport. SafeStorage serves all parts of Mirdif — from the original Mirdif villa communities near Mirdif City Centre to the newer Uptown Mirdif townhouses and the surrounding areas of Rashidiya, Muhaisnah, Al Warqa, and Nad Al Sheba.",
            "Mirdif's family-focused character creates distinct storage needs — larger volumes from spacious villas, significant demand for long-term storage during extended family travel, and a community where trusted, respectful service matters.",
          ],
        }}
        panels={[
          {
            e: "🏡",
            title: "Villa Storage — Mirdif Community",
            paras: [
              "Mirdif's villa communities — characterised by generous plot sizes, enclosed gardens, and multi-car garages — generate substantial storage volumes when families renovate, relocate, or need to free up space. SafeStorage provides full-villa clearance for Mirdif villas with professional packing, secure storage, and on-demand delivery.",
              "Our Mirdif team is experienced with the area's villa layouts and access requirements. Large-volume villa pickups are managed with appropriate vehicle sizes to minimise trips and minimise disruption to neighbours.",
            ],
          },
          {
            e: "✈️",
            title: "Long-Term Storage — Extended Travel & Relocation",
            paras: [
              "Many Mirdif residents travel abroad for extended periods (summer holidays, Ramadan, school breaks, family visits) and need secure, reliable storage for their belongings during these absences. SafeStorage provides the ideal solution with flexible monthly plans and complete peace of mind.",
            ],
          },
          {
            e: "⭐",
            title: "What Mirdif customers say",
            paras: [
              "“We were renovating our Mirdif villa and had to clear everything within a week. SafeStorage sent a professional crew, handled everything carefully, and returned our belongings in perfect condition two months later.” — Hessa A., Mirdif Villa Owner",
              "“We travel every summer for 3 months and used SafeStorage to store our furniture and valuables while we were away. Returned to find everything exactly as we left it.” — Tariq M., Rashidiya Community",
            ],
          },
        ]}
        uses={[
          { e: "🛋️", title: "Villa furniture", text: "Full-villa clearances during renovation or a move between villas" },
          { e: "🧳", title: "Summer travel storage", text: "Belongings kept safe while families are abroad for months" },
          { e: "🎒", title: "School-holiday clutter", text: "The extra that builds up in a family villa over the year" },
          { e: "🚗", title: "Vehicle storage", text: "Cars and motorcycles in secure covered bays while you travel" },
          { e: "📦", title: "Between-home storage", text: "Stored while the new Dubai property is being set up" },
          { e: "🗄️", title: "Spare rooms of furniture", text: "Returned in stages so a new home fills up gradually" },
        ]}
        zones={[
          { title: "Mirdif Communities", items: ["Mirdif Phase 1, 2, 3", "Uptown Mirdif", "Mirdif Hills", "Shorooq area", "Mirdif City Centre vicinity"] },
          { title: "East Dubai Areas", items: ["Rashidiya", "Muhaisnah 1, 2, 3, 4", "Al Warqa 1, 2, 3, 4, 5", "Nad Al Sheba", "Al Mizhar"] },
          { title: "Airport Area", items: ["Garhoud", "Al Twar", "Dubai Festival City adj.", "Al Qusais", "Al Nahda (Dubai side)"] },
        ]}
        ctaLine="Storage in Mirdif — door-to-door pickup from your villa or apartment."
        faqs={faqs}
        ctaTitle="Ready to Store with SafeStorage?"
        ctaBlurb="Door-to-door pickup across Mirdif, Rashidiya, Muhaisnah and Al Warqa. Tell us what you are storing and we will send a free, itemised quote."
        emirate="dubai"
        area="mirdif"
      />
    </>
  )
}
