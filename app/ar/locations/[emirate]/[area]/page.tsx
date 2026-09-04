import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ArAreaPage from "@/components/ar/ar-area-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { AR_EMIRATES, AR_EMIRATE_BY_SLUG, englishCounterpart } from "@/lib/ar/registry"
import { PRICE_PER_SQFT_AED } from "@/lib/company-facts"

const BASE = "https://safestorage.ae"

export const dynamicParams = false

export function generateStaticParams() {
  return AR_EMIRATES.flatMap((e) => e.areas.map((a) => ({ emirate: e.slug, area: a.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ emirate: string; area: string }>
}): Promise<Metadata> {
  const { emirate, area: areaSlug } = await params
  const e = AR_EMIRATE_BY_SLUG[emirate]
  const a = e?.areas.find((x) => x.slug === areaSlug)
  if (!e || !a) return {}

  const url = `${BASE}/ar/locations/${e.slug}/${a.slug}`
  const title = `تخزين أثاث في ${a.name}، ${e.name} | استلام من باب المنزل`
  const description = `خدمة تخزين في ${a.name} بـ ${PRICE_PER_SQFT_AED} درهم للقدم المربع شهرياً. نأتي إلى بابك، نغلّف ونحمّل ونخزّن. بلا حد أدنى للمدة واسترجاع جزئي.`
  const en = englishCounterpart(e.slug, a.slug)

  return {
    title: { absolute: title },
    description,
    keywords: `تخزين ${a.name}, تخزين اثاث ${a.name}, ${e.keywords}`,
    openGraph: {
      title,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `سيف ستوريج — تخزين في ${a.name}` }],
      url,
      siteName: "SafeStorage",
      locale: "ar_AE",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: en ? { "ar-AE": url, "en-AE": `${BASE}${en}`, "x-default": `${BASE}${en}` } : { "ar-AE": url },
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ emirate: string; area: string }>
}) {
  const { emirate, area: areaSlug } = await params
  const e = AR_EMIRATE_BY_SLUG[emirate]
  const a = e?.areas.find((x) => x.slug === areaSlug)
  if (!e || !a) notFound()

  const url = `${BASE}/ar/locations/${e.slug}/${a.slug}`
  const title = `تخزين أثاث في ${a.name}، ${e.name} | استلام من باب المنزل`

  const faqs = [
    ...a.faqs,
    {
      q: "كم تكلفة التخزين؟",
      a: `${PRICE_PER_SQFT_AED} درهم للقدم المربع شهرياً شامل ضريبة القيمة المضافة، محسوبة على المساحة التي تشغلها أغراضك. النقل من ${a.name} يُسعَّر بشكل منفصل لأنه يعتمد على العنوان وحجم الحمولة، وتحصل على الرقمين قبل أي التزام.`,
    },
  ]

  const schemas = [
    locationBusinessSchema({ name: a.nameEn, url, serves: [a.nameEn, e.nameEn] }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `تخزين الأثاث في ${a.name}، ${e.name}`,
      description: a.blurb,
      provider: { "@id": `${BASE}/#organization` },
      url,
      serviceType: "Self Storage",
      areaServed: [{ "@type": "Place", name: `${a.name}، ${e.name}` }],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: title,
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
        { "@type": "ListItem", position: 3, name: e.name, item: `${BASE}/ar/locations/${e.slug}` },
        { "@type": "ListItem", position: 4, name: a.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "ar-AE",
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
      <ArAreaPage emirate={e} area={a} />
    </>
  )
}
