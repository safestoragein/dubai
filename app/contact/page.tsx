import ContactPage from "@/components/contact/contact-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact SafeStorage Dubai | Get in Touch",
  description:
    "Contact SafeStorage Dubai for secure storage solutions. Call us, visit our locations, or get a free quote. We're here to help with all your storage needs in Dubai.",
  keywords:
    "contact storage dubai, storage company dubai, storage locations dubai, storage customer service, dubai storage contact",
  alternates: {
    canonical: "https://safestorage.ae/contact",
  },
}

const contactSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://safestorage.ae/contact#webpage',
    name: 'Contact SafeStorage Dubai',
    description: 'Contact SafeStorage Dubai for storage solutions. Call +971505773388, email safestoragedubai@gmail.com, or get a free quote online.',
    url: 'https://safestorage.ae/contact',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    mainEntity: { '@id': 'https://safestorage.ae/#organization' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://safestorage.ae/contact' },
    ],
  },
]

export default function Contact() {
  return (
    <>
      <SchemaScript schema={contactSchemas} />
      <ContactPage />
    </>
  )
}
