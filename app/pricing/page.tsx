import PricingPage from "@/components/pricing/pricing-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Pricing Dubai | From AED 99/month | +971505773388",
  description:
    "Transparent storage pricing in Dubai starting from AED 99/month. Various unit sizes with flexible plans. Hassle-hassle-free pickup & delivery included. Call +971505773388 for best rates.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices, monthly storage cost, storage unit prices",
  openGraph: {
    title: "SafeStorage Pricing - Affordable Storage from AED 99",
    description: "Competitive storage rates in Dubai. All sizes available with hassle-free pickup & delivery. Call +971505773388.",
    url: "https://safestorage.ae/pricing",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Pricing"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Pricing - From AED 99/month",
    description: "Affordable storage units in Dubai with transparent pricing. Call +971505773388.",
    images: ["/twitter-pricing.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/pricing",
  },
}

const pricingSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/pricing#webpage',
    name: 'Storage Pricing Dubai | From AED 99/month',
    description: 'Transparent storage pricing in Dubai starting from AED 99/month. Various unit sizes with flexible plans. Hassle-free pickup & delivery included.',
    url: 'https://safestorage.ae/pricing',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Units Dubai — Transparent Pricing',
    description: 'Transparent storage pricing in Dubai. Hassle-free pickup & delivery included. Call +971505773388 for best rates.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/pricing',
    areaServed: { '@type': 'City', name: 'Dubai' },
    offers: [
      { '@type': 'Offer', name: 'Small Storage Unit (25-50 sq ft)', price: '199', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Medium Storage Unit (50-100 sq ft)', price: '599', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Large Storage Unit (100-200 sq ft)', price: '1299', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Extra Large Storage Unit (200+ sq ft)', price: '2499', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
      { '@type': 'Offer', name: 'Vehicle Storage', price: '899', priceCurrency: 'AED', availability: 'https://schema.org/InStock', priceValidUntil: '2026-12-31' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://safestorage.ae/pricing' },
    ],
  },
]

export default function Pricing() {
  return (
    <>
      <SchemaScript schema={pricingSchemas} />
      <PricingPage />
    </>
  )
}
