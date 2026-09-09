import type { Metadata } from "next"
import EmirateHub from "@/components/locations/emirate-hub"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { EMIRATE_BY_SLUG } from "@/lib/areas/registry"
import { emirateFaqs, faqPageSchema } from "@/lib/emirate-faqs"

/*
 * /locations/fujairah — emirate hub.
 *
 * The copy lives in lib/areas/, so the facility claim, the FAQ set and the
 * area grid all come from one place and cannot drift between the eight hubs.
 */

const emirate = EMIRATE_BY_SLUG["fujairah"]
const url = `https://safestorage.ae/locations/${emirate.slug}`

export const metadata: Metadata = {
  title: { absolute: emirate.hub.title },
  description: emirate.hub.description,
  keywords: emirate.hub.keywords,
  openGraph: {
    title: emirate.hub.title,
    description: emirate.hub.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `SafeStorage — ${emirate.name}` }],
    url,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: url,
    // No hreflang pair: this emirate has no Arabic page. The block used to
    // mirror /ar/locations/{emirate} unconditionally, which pointed Google at a
    // 404 for Al Ain, Fujairah, Ras Al Khaimah and Umm Al Quwain — and an
    // hreflang pointing at a 404 invalidates the cluster rather than simply
    // being absent from it. Add the pair back with the Arabic page, not before.
    languages: {
      "en-AE": url,
      "x-default": url,
    },
  },
}

export default function Page() {
  // The FAQ schema is built from the SAME array the hub renders, so the markup
  // cannot claim a question the page does not show.
  const faqs = [
    ...emirate.hub.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
    }),
  ]

  const schemas = [
    locationBusinessSchema({ name: emirate.name, url, serves: [emirate.name] }),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: emirate.hub.title,
      description: emirate.hub.description,
      url,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
        { "@type": "ListItem", position: 3, name: emirate.name, item: url },
      ],
    },
    faqPageSchema(faqs),
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <EmirateHub emirate={emirate} />
    </>
  )
}
