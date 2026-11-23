import QuotePage from "@/components/quote/quote-page-alternative2"
import type { Metadata } from "next"
import { Suspense } from "react"
import SchemaScript from "@/components/schema-script"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}): Promise<Metadata> {
  const params = await searchParams
  const hasParams = Object.keys(params).length > 0

  return {
    // `absolute` — the root layout's "%s | SafeStorage Dubai" template would
    // otherwise append a second brand to a title that already carries one.
    title: { absolute: "Free Storage Quote & Instant Pricing | SafeStorage Dubai" },
    description:
      "Get an instant storage quote in Dubai. Quick 3-step estimate for personal, business, and household storage solutions.",
    keywords:
      "Storage quotation Dubai, Get free Quotation, Storage price calculator, Self storage rates, Dubai storage costs, Request storage quote, Cheap storage quotation, Personal storage price, Business storage estimate, Household storage quotation, Secure storage pricing, SafeStorage Dubai quote, Furniture storage cost, Inventory storage rates",
    alternates: {
      canonical: "https://safestorage.ae/get-quote",
    },
    // og:url must be set per page — the root layout deliberately omits it, so a
    // page without its own openGraph block emits no og:url at all. Images must be
    // repeated here too: Next replaces the parent openGraph object rather than
    // merging into it, so declaring one drops the root's images.
    openGraph: {
      url: "https://safestorage.ae/get-quote",
      images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    },
    ...(hasParams && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

const quoteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/get-quote#webpage',
    name: 'Get Free Storage Quote | SafeStorage Dubai',
    description: 'Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing.',
    url: 'https://safestorage.ae/get-quote',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Get Quote', item: 'https://safestorage.ae/get-quote' },
    ],
  },
]

export default function GetQuote() {
  return (
    <>
      <SchemaScript schema={quoteSchemas} />
      {/* the quote flow is the page: hide the floating Get Free Quote / call / WhatsApp bar here only,
          and the body padding that keeps it clear of the footer */}
      <style>{"[data-sticky-cta],[data-site-footer]{display:none!important}body{padding-bottom:0!important}"}</style>
      <Suspense fallback={<div>Loading...</div>}>
        <QuotePage />
      </Suspense>
    </>
  )
}
