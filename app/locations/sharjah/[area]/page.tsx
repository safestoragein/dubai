import type { Metadata } from "next"
import { notFound } from "next/navigation"
import AreaPage from "@/components/locations/area-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { SHARJAH_AREAS, AREA_BY_SLUG } from "@/lib/sharjah-areas"
import { PRICE_PER_SQFT_AED, CCTV_COVERAGE, FACILITY_ACCESS_NOTE, RETRIEVAL_WINDOW } from "@/lib/company-facts"

/*
 * One dynamic route for the fifteen Sharjah service areas.
 *
 * generateStaticParams prerenders every one at build time, so these are static
 * HTML like the hand-written district pages under /locations/*, not on-demand
 * renders. `dynamicParams = false` makes an unknown slug a real 404 instead of
 * a rendered page for an area we do not serve.
 *
 * /locations/sharjah/moving-storage is a STATIC sibling route and wins over
 * this dynamic segment in Next's route precedence, so the two coexist.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return SHARJAH_AREAS.map((a) => ({ area: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>
}): Promise<Metadata> {
  const { area: slug } = await params
  const area = AREA_BY_SLUG[slug]
  if (!area) return {}

  const url = `https://safestorage.ae/locations/sharjah/${area.slug}`
  const title = `Storage in ${area.name}, Sharjah | Collection From Your Door`
  const description = `Self storage for ${area.name}, Sharjah from ${PRICE_PER_SQFT_AED} AED/sqft. We collect from your door, wrap and load. No minimum term, partial retrieval.`

  return {
    title: { absolute: title },
    description,
    keywords: `${area.keywords}, storage sharjah, self storage sharjah, storage units sharjah`,
    openGraph: {
      title,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `SafeStorage — storage for ${area.name}, Sharjah` }],
      url,
      siteName: "SafeStorage Dubai",
      locale: "en_AE",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        "en-AE": url,
        "ar-AE": `https://safestorage.ae/ar/locations/sharjah/${area.slug}`,
        "x-default": url,
      },
    },
  }
}

export default async function SharjahAreaPage({
  params,
}: {
  params: Promise<{ area: string }>
}) {
  const { area: slug } = await params
  const area = AREA_BY_SLUG[slug]
  if (!area) notFound()

  const url = `https://safestorage.ae/locations/sharjah/${area.slug}`

  // The two generic FAQs the template appends are marked up here too, so the
  // FAQPage node matches what is actually rendered rather than a subset.
  const faqs = [
    ...area.faqs,
    {
      q: "How much does storage cost?",
      a: `${PRICE_PER_SQFT_AED} AED per square foot per month, VAT included, on the floor space your items occupy. Transport from ${area.name} is quoted separately because it depends on the address and the load. You are given both numbers before anything is booked.`,
    },
    {
      q: "Is my furniture safe over a Sharjah summer?",
      a: `Everything is wrapped before it leaves your property, kept off the floor and stored inside a covered warehouse rather than a yard or a container. ${CCTV_COVERAGE} ${FACILITY_ACCESS_NOTE}.`,
    },
  ]

  const schemas = [
    locationBusinessSchema({ name: area.name, url, serves: [area.name, "Sharjah"] }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Storage Collection in ${area.name}, Sharjah`,
      description: `Household and business storage collected from ${area.name}, Sharjah and held at the SafeStorage facility in Sharjah. Retrieval normally within ${RETRIEVAL_WINDOW}.`,
      provider: { "@id": "https://safestorage.ae/#organization" },
      url,
      serviceType: "Self Storage",
      areaServed: [{ "@type": "Place", name: `${area.name}, Sharjah` }],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: `Storage in ${area.name}, Sharjah | Collection From Your Door`,
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
        { "@type": "ListItem", position: 3, name: "Sharjah", item: "https://safestorage.ae/locations/sharjah" },
        { "@type": "ListItem", position: 4, name: area.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <AreaPage area={area} />
    </>
  )
}
