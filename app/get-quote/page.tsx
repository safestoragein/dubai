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
    title: "Get Free Storage Quote | SafeStorage Dubai",
    description:
      "Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing. Book your storage space with SafeStorage Dubai today.",
    keywords:
      "free storage quote dubai, storage estimate, storage booking dubai, get storage quote, storage calculator dubai",
    alternates: {
      canonical: "https://safestorage.ae/get-quote",
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
      {/* Static introductory content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-12 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Storage Quote in Dubai</h1>
          <p className="text-lg text-white/90 mb-2">
            Tell us what you need to store and we&apos;ll give you a transparent, no-obligation quote in minutes.
            Storage units start from 12.65 AED / sqft with door-to-door service across Dubai.
          </p>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <QuotePage />
      </Suspense>
    </>
  )
}
