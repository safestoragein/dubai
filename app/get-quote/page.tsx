import QuotePage from "@/components/quote/quote-page-alternative2"
import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Get Free Storage Quote | SafeStorage Dubai",
  description:
    "Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing. Book your storage space with SafeStorage Dubai today.",
  keywords:
    "free storage quote dubai, storage estimate, storage booking dubai, get storage quote, storage calculator dubai",
  alternates: {
    canonical: "https://safestorage.ae/get-quote",
  },
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
            Storage units start from AED 199/month with free pickup and delivery across Dubai.
          </p>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <QuotePage />
      </Suspense>
      {/* Static informational content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">How Our Free Quote Process Works</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">1</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Tell Us What You Need</h3>
              <p className="text-gray-700 text-sm">
                Fill in the quote form with details about what you need to store — furniture, boxes, a vehicle, or
                business inventory. The more details you provide, the more accurate your quote will be.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">2</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Get Your Personalised Quote</h3>
              <p className="text-gray-700 text-sm">
                Our storage consultant reviews your request and sends you a detailed, transparent quote — no hidden
                fees, no surprises. You&apos;ll know exactly what you&apos;re paying before you commit.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-[#D8315B] mb-3">3</div>
              <h3 className="font-bold text-[#0A2463] mb-2">Schedule Your Free Pickup</h3>
              <p className="text-gray-700 text-sm">
                Once you&apos;re happy with the quote, we schedule a free pickup from your home or office at a time
                that suits you. Our team handles all the heavy lifting and transports your items safely to our
                climate-controlled facility.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Why SafeStorage Dubai?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>✓ Storage units from AED 199/month — no setup fees</p>
              <p>✓ Free pickup and delivery anywhere in Dubai</p>
              <p>✓ Climate-controlled units — 20–25°C year-round</p>
              <p>✓ 24/7 CCTV and biometric security</p>
              <p>✓ No long-term contracts — cancel anytime</p>
              <p>✓ Free insurance up to AED 5,000 included</p>
              <p>✓ Same-day pickup available for requests before 12 PM</p>
              <p>✓ Dedicated storage consultant for every customer</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Solutions We Offer</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage Dubai provides storage for every need — from a few boxes to an entire villa. Our most
              popular services include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Household storage:</strong> Furniture, appliances, personal belongings during moves or renovations</li>
              <li>• <strong>Business storage:</strong> Office furniture, retail inventory, documents and archives</li>
              <li>• <strong>Furniture storage:</strong> Full furniture protection during renovation, lease transition, or relocation</li>
              <li>• <strong>Vehicle storage:</strong> Cars, motorcycles, boats, jet skis in covered, secure bays</li>
              <li>• <strong>Document storage:</strong> Fireproof archive storage with indexed retrieval</li>
              <li>• <strong>Student storage:</strong> Affordable short-term storage between university semesters</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Not sure which service you need? <Link href="/contact" className="text-[#0A2463] font-semibold underline">Contact us</Link> and
              our team will recommend the best solution for your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
