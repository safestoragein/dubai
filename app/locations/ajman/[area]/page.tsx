import { arabicCounterpart } from "@/lib/ar/registry"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AreaPage from "@/components/locations/area-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { EMIRATE_BY_SLUG, dynamicAreaParams } from "@/lib/areas/registry"
import { emirateFaqs, faqPageSchema } from "@/lib/emirate-faqs"
import { PRICE_PER_SQFT_AED, RETRIEVAL_WINDOW } from "@/lib/company-facts"

/*
 * District pages for ajman.
 *
 * generateStaticParams prerenders every data-driven area at build time, so
 * these are static HTML. dynamicParams = false makes an unknown slug a real
 * 404 instead of a rendered page for an area we do not serve.
 *
 * Any hand-written district page in this directory is a STATIC sibling route
 * and wins over this dynamic segment in Next's route precedence, so the two
 * coexist — and dynamicAreaParams() returns only the data-driven slugs, so no
 * URL is ever prerendered twice.
 */

export const dynamicParams = false

const emirate = EMIRATE_BY_SLUG["ajman"]
const BY_SLUG = Object.fromEntries(emirate.areas.map((a) => [a.slug, a]))

export function generateStaticParams() {
  return dynamicAreaParams("ajman")
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>
}): Promise<Metadata> {
  const { area: slug } = await params
  const area = BY_SLUG[slug]
  if (!area) return {}

  const url = `https://safestorage.ae/locations/${emirate.slug}/${area.slug}`

  const ar = arabicCounterpart(emirate.slug, area.slug)
  const title = `Storage in ${area.name}, ${emirate.name} | Collection From Your Door`
  const description = `Self storage for ${area.name}, ${emirate.name} from ${PRICE_PER_SQFT_AED} AED/sqft. We collect from your door, wrap and load. No minimum term, partial retrieval.`

  return {
    title: { absolute: title },
    description,
    keywords: `${area.keywords}, storage ${emirate.name.toLowerCase()}, self storage ${emirate.name.toLowerCase()}`,
    openGraph: {
      title,
      description,
      images: [
        { url: "/og-image.jpg", width: 1200, height: 630, alt: `SafeStorage — storage for ${area.name}` },
      ],
      url,
      siteName: "SafeStorage Dubai",
      locale: "en_AE",
      type: "website",
    },
    alternates: {
      canonical: url,
      // Only claim an Arabic alternate when the Arabic page exists. Fifteen
      // Dubai areas are English-only, and this used to advertise a 404 for
      // every one of them.
      languages: ar
        ? { "en-AE": url, "ar-AE": `https://safestorage.ae${ar}`, "x-default": url }
        : { "en-AE": url, "x-default": url },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params
  const area = BY_SLUG[slug]
  if (!area) notFound()

  const url = `https://safestorage.ae/locations/${emirate.slug}/${area.slug}`

  // Must be the SAME list the template renders: the area's own two questions
  // followed by the canonical ten, localised.
  const faqs = [
    ...area.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
      district: area.name,
    }),
  ]

  const schemas = [
    locationBusinessSchema({ name: area.name, url, serves: [area.name, emirate.name] }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Storage Collection in ${area.name}, ${emirate.name}`,
      description: `Household and business storage collected from ${area.name}, ${emirate.name}. Retrieval normally within ${RETRIEVAL_WINDOW}.`,
      provider: { "@id": "https://safestorage.ae/#organization" },
      url,
      serviceType: "Self Storage",
      areaServed: [{ "@type": "Place", name: `${area.name}, ${emirate.name}` }],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: `Storage in ${area.name}, ${emirate.name}`,
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
        {
          "@type": "ListItem",
          position: 3,
          name: emirate.name,
          item: `https://safestorage.ae/locations/${emirate.slug}`,
        },
        { "@type": "ListItem", position: 4, name: area.name, item: url },
      ],
    },
    faqPageSchema(faqs),
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <AreaPage area={area} emirate={emirate} />
    </>
  )
}
