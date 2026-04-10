import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
  description:
    "Renovating your Dubai Marina or JBR apartment? Store furniture safely during renovation — from 1 week. Short-term storage between leases also available. Free pickup from Marina & JBR. Call +971505773388.",
  keywords:
    "furniture storage during renovation dubai marina, short term storage between leases JBR dubai, storage JBR dubai, storage during renovation marina, temporary furniture storage marina, lease gap storage dubai marina",
  openGraph: {
    title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
    description: "Short-term storage during renovations or between leases in Dubai Marina & JBR. Free pickup. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-marina",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-marina",
  },
}

const dubaiMarinaSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Near Dubai Marina & JBR',
    description: 'Furniture storage during renovation in Dubai Marina & JBR. Short-term storage between leases. Free pickup from Marina & JBR.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/dubai-marina',
    areaServed: [
      { '@type': 'Place', name: 'Dubai Marina' },
      { '@type': 'Place', name: 'JBR' },
      { '@type': 'Place', name: 'Bluewaters' },
    ],
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/dubai-marina#webpage',
    name: 'Furniture Storage During Renovation Dubai Marina & JBR',
    description: 'Renovating your Dubai Marina apartment? Store furniture safely during renovation. Free pickup from Marina & JBR.',
    url: 'https://safestorage.ae/locations/dubai-marina',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Dubai Marina', item: 'https://safestorage.ae/locations/dubai-marina' },
    ],
  },
]

export default function DubaiMarinaPage() {
  return (
    <>
    <SchemaScript schema={dubaiMarinaSchemas} />
    <LocationPage
      location="Dubai Marina"
      areas={["Dubai Marina", "JBR", "Marina Walk", "Dubai Marina Mall area", "Bluewaters"]}
      distance="15-20 minutes"
      benefits={[
        "Hassle-hassle-free pickup from your Marina apartment",
        "Quick access via Sheikh Zayed Road",
        "Ideal for Marina residents downsizing",
        "Perfect for storing beach and water sports equipment"
      ]}
    />
    </>
  )
}