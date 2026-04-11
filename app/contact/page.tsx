import ContactPage from "@/components/contact/contact-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

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
      {/* Static header content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-14 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact SafeStorage Dubai</h1>
          <p className="text-lg text-white/90 mb-6">
            Get in touch for a free quote, storage advice, or any questions about our services.
            Our team responds within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971505773388"
              className="inline-block bg-white text-[#0A2463] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call: +971 50 577 3388
            </a>
            <a
              href="https://wa.me/971505773388"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      <ContactPage />
      {/* Static informational content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">How to Reach SafeStorage Dubai</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Phone</h3>
              <p className="text-gray-700 mb-2">
                Call us directly for immediate assistance, storage quotes, and booking:
              </p>
              <p className="font-semibold text-[#D8315B]">+971 50 577 3388</p>
              <p className="text-sm text-gray-500 mt-2">Monday–Saturday: 8 AM – 8 PM</p>
              <p className="text-sm text-gray-500">Sunday: 10 AM – 6 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">WhatsApp</h3>
              <p className="text-gray-700 mb-2">
                Send us photos of items to store, ask questions, or request a callback via WhatsApp:
              </p>
              <p className="font-semibold text-green-600">+971 50 577 3388</p>
              <p className="text-sm text-gray-500 mt-2">Typical response time: under 15 minutes</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Online Quote</h3>
              <p className="text-gray-700 mb-2">
                Fill in our online quote form to get a personalised storage quote emailed to you:
              </p>
              <Link
                href="/get-quote"
                className="inline-block text-[#0A2463] font-semibold underline"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Frequently Asked Contact Questions</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold mb-1">How quickly will you respond to my query?</p>
                <p>Our team responds to all queries within 15 minutes during business hours. WhatsApp and phone calls are answered immediately during operating hours.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Can I visit the storage facility?</p>
                <p>Yes, you are welcome to visit our storage facility. Please call ahead on +971 50 577 3388 to schedule a tour and ensure a consultant is available to assist you.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">What information do I need to provide to get a quote?</p>
                <p>For an accurate quote, let us know what you need to store (type and quantity of items), how long you plan to store, and your pickup location in Dubai. Photos via WhatsApp are helpful for bulk or unusual items.</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Do you have customer support in English and Arabic?</p>
                <p>Yes. Our team provides support in both English and Arabic. All correspondence, contracts, and documentation are available in both languages.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Services Available Across Dubai</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage provides pickup and delivery services covering all major areas of Dubai including:
            </p>
            <div className="grid md:grid-cols-3 gap-2 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Dubai Marina &amp; JBR</li>
                <li>• Business Bay &amp; DIFC</li>
                <li>• Downtown Dubai</li>
                <li>• Jumeirah 1, 2, 3</li>
              </ul>
              <ul className="space-y-1">
                <li>• JLT &amp; Media City</li>
                <li>• Palm Jumeirah</li>
                <li>• Al Quoz</li>
                <li>• Dubai Investment Park</li>
              </ul>
              <ul className="space-y-1">
                <li>• Motor City &amp; Sports City</li>
                <li>• Deira &amp; Bur Dubai</li>
                <li>• Mirdif &amp; Rashidiya</li>
                <li>• And all other Dubai areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
