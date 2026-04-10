import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Expat Storage Dubai Moving Back Home | Jumeirah Storage | SafeStorage",
  description:
    "Moving back home from Jumeirah or leaving Dubai? SafeStorage offers expat-friendly storage — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms, trusted by 500+ expats. Call +971505773388.",
  keywords:
    "expat storage dubai moving back home, jumeirah expat storage, leaving dubai storage, storage for expats dubai, moving out storage jumeirah, temporary storage expat dubai, repatriation storage dubai",
  openGraph: {
    title: "Expat Storage Dubai Moving Back Home | Jumeirah | SafeStorage",
    description: "Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/jumeirah",
  },
}

const jumeirahSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Expat & Villa Storage Near Jumeirah Dubai',
    description: 'Expat-friendly storage in Jumeirah — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms, trusted by 500+ expats.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/jumeirah',
    areaServed: [
      { '@type': 'Place', name: 'Jumeirah' },
      { '@type': 'Place', name: 'Umm Suqeim' },
      { '@type': 'Place', name: 'Al Safa' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/jumeirah#webpage',
    name: 'Expat Storage Dubai Moving Back Home | Jumeirah Storage',
    description: 'Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, free pickup.',
    url: 'https://safestorage.ae/locations/jumeirah',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Jumeirah', item: 'https://safestorage.ae/locations/jumeirah' },
    ],
  },
]

export default function JumeirahPage() {
  return (
    <>
    <SchemaScript schema={jumeirahSchemas} />
    <LocationPage
      location="Jumeirah"
      areas={["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Safa", "Al Wasl"]}
      distance="20-25 minutes"
      benefits={[
        "Hassle-hassle-free pickup from Jumeirah villas",
        "Perfect for villa renovations",
        "Seasonal storage for beach equipment",
        "Secure storage for luxury items"
      ]}
    />
    </>
  )
}