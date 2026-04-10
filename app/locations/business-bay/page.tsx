import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Units Near Business Bay Dubai | Pickup in 24hrs | SafeStorage",
  description:
    "Looking for storage units near Business Bay Dubai? SafeStorage offers climate-controlled units with free pickup from Business Bay, DIFC & Downtown. Book online — space ready tomorrow. Call +971505773388.",
  keywords:
    "storage units near business bay dubai, business bay self storage, storage near DIFC, downtown dubai storage units, business bay office storage, storage pickup business bay",
  openGraph: {
    title: "Storage Units Near Business Bay Dubai - Pickup in 24hrs | SafeStorage",
    description: "Climate-controlled storage near Business Bay & DIFC. Free pickup from your address. Call +971505773388.",
    url: "https://safestorage.ae/locations/business-bay",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/business-bay",
  },
}

const businessBaySchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Near Business Bay & DIFC Dubai',
    description: 'Climate-controlled storage near Business Bay & DIFC. Free pickup from Business Bay, DIFC & Downtown Dubai. Space ready in 24 hours.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/business-bay',
    areaServed: [
      { '@type': 'Place', name: 'Business Bay' },
      { '@type': 'Place', name: 'DIFC' },
      { '@type': 'Place', name: 'Downtown Dubai' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/business-bay#webpage',
    name: 'Storage Units Near Business Bay Dubai | Pickup in 24hrs',
    description: 'Climate-controlled storage near Business Bay & DIFC. Free pickup from your address.',
    url: 'https://safestorage.ae/locations/business-bay',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Business Bay', item: 'https://safestorage.ae/locations/business-bay' },
    ],
  },
]

export default function BusinessBayPage() {
  return (
    <>
    <SchemaScript schema={businessBaySchemas} />
    <LocationPage
      location="Business Bay"
      areas={["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road", "Al Khail Road"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for Business Bay office storage",
        "Document archiving for DIFC companies",
        "Hassle-hassle-free pickup from Downtown Dubai",
        "Ideal for residents in high-rise apartments"
      ]}
    />
    </>
  )
}