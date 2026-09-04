import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ArEmiratePage from "@/components/ar/ar-emirate-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { AR_EMIRATES, AR_EMIRATE_BY_SLUG, englishCounterpart } from "@/lib/ar/registry"

const BASE = "https://safestorage.ae"

export const dynamicParams = false

export function generateStaticParams() {
  return AR_EMIRATES.map((e) => ({ emirate: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ emirate: string }>
}): Promise<Metadata> {
  const { emirate: slug } = await params
  const e = AR_EMIRATE_BY_SLUG[slug]
  if (!e) return {}
  const url = `${BASE}/ar/locations/${e.slug}`
  const en = englishCounterpart(e.slug)

  return {
    title: { absolute: e.title },
    description: e.description,
    keywords: e.keywords,
    openGraph: {
      title: e.title,
      description: e.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `سيف ستوريج — تخزين في ${e.name}` }],
      url,
      siteName: "SafeStorage",
      locale: "ar_AE",
      type: "website",
    },
    alternates: {
      canonical: url,
      // hreflang pairs this page with its English twin where one exists.
      // x-default points at English, which is the site's primary language.
      languages: en ? { "ar-AE": url, "en-AE": `${BASE}${en}`, "x-default": `${BASE}${en}` } : { "ar-AE": url },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ emirate: string }> }) {
  const { emirate: slug } = await params
  const e = AR_EMIRATE_BY_SLUG[slug]
  if (!e) notFound()

  const url = `${BASE}/ar/locations/${e.slug}`
  const schemas = [
    locationBusinessSchema({ name: e.nameEn, url, serves: [e.nameEn, ...e.areas.map((a) => a.nameEn)] }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `تخزين الأثاث في ${e.name}`,
      description: e.description,
      provider: { "@id": `${BASE}/#organization` },
      url,
      serviceType: "Self Storage",
      areaServed: [e.name, ...e.areas.map((a) => a.name)].map((name) => ({ "@type": "Place", name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: e.title,
      description: e.description,
      url,
      isPartOf: { "@id": `${BASE}/#website` },
      inLanguage: "ar-AE",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE}/ar` },
        { "@type": "ListItem", position: 2, name: "المواقع", item: `${BASE}/ar/locations` },
        { "@type": "ListItem", position: 3, name: e.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "ar-AE",
      mainEntity: e.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <ArEmiratePage emirate={e} />
    </>
  )
}
