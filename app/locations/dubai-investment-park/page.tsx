import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Document Archival Service Dubai Investment Park | SafeStorage",
  description:
    "Professional document archival and records storage in Dubai Investment Park. Fireproof, climate-controlled document storage for businesses in DIP, Motor City & JAFZA. Pickup & retrieval on demand. Call +971505773388.",
  keywords:
    "document archival service dubai investment park, records storage DIP dubai, document storage motor city dubai, business records archival JAFZA, secure document storage dubai investment park, file storage DIP",
  openGraph: {
    title: "Document Archival Service Dubai Investment Park | SafeStorage",
    description: "Business document archival & records storage near DIP, Motor City & JAFZA. On-demand retrieval. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-investment-park",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-investment-park",
  },
}

const dipSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage Near Dubai Investment Park',
    description: 'Professional document archival and records storage in Dubai Investment Park. Fireproof, climate-controlled document storage for businesses in DIP, Motor City & JAFZA.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/dubai-investment-park',
    areaServed: [
      { '@type': 'Place', name: 'Dubai Investment Park' },
      { '@type': 'Place', name: 'Motor City' },
      { '@type': 'Place', name: 'JAFZA' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/dubai-investment-park#webpage',
    name: 'Document Archival Service Dubai Investment Park | SafeStorage',
    description: 'Business document archival & records storage near DIP, Motor City & JAFZA. On-demand retrieval.',
    url: 'https://safestorage.ae/locations/dubai-investment-park',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Dubai Investment Park', item: 'https://safestorage.ae/locations/dubai-investment-park' },
    ],
  },
]

export default function DubaiInvestmentParkPage() {
  return (
    <>
    <SchemaScript schema={dipSchemas} />
    <LocationPage
      location="Dubai Investment Park"
      areas={["Dubai Investment Park 1", "Dubai Investment Park 2", "Motor City", "Dubai Production City", "Dubai Studio City", "Sports City"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for DIP warehouse and business storage",
        "Ideal for Motor City residents",
        "Hassle-hassle-free pickup from Production City",
        "Convenient for Sports City apartments"
      ]}
    />
    </>
  )
}
