import TestimonialVideosPage from "@/components/testimonials/testimonial-videos-page"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Customer Testimonials | SafeStorage Dubai Reviews",
  description:
    "Read what our customers say about SafeStorage Dubai. Real reviews and testimonials from satisfied clients across Dubai. See why we're the trusted storage solution.",
  keywords:
    "storage reviews dubai, customer testimonials, storage company reviews, safestorage reviews, dubai storage feedback",
  alternates: {
    canonical: "https://safestorage.ae/testimonials",
  },
}

const testimonialsSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/testimonials#webpage',
    name: 'Customer Testimonials | SafeStorage Dubai Reviews',
    description: 'Real reviews and testimonials from satisfied SafeStorage Dubai customers. See why we\'re trusted by 1 Lakh+ customers.',
    url: 'https://safestorage.ae/testimonials',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://safestorage.ae/testimonials' },
    ],
  },
]

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai Marina",
    rating: 5,
    text: "SafeStorage made my apartment renovation completely stress-free. They picked up all my furniture within 24 hours, kept everything in perfect condition for 6 weeks, and delivered it all back when I called. The climate-controlled unit meant nothing was damaged by Dubai's summer heat. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    location: "Business Bay",
    rating: 5,
    text: "As an expat relocating back to the UK temporarily, I needed somewhere safe to keep my belongings for 8 months. SafeStorage was the perfect solution — professional pickup, secure facility, and easy retrieval when I returned. The customer service was excellent throughout.",
  },
  {
    name: "Priya Sharma",
    location: "Jumeirah",
    rating: 5,
    text: "I used SafeStorage to store my office furniture when we downsized our team. The process was simple — they sent a consultant to assess the volume, gave me a transparent quote, and handled everything from packing to storage. Great value for money.",
  },
  {
    name: "Mohammed Al Hassan",
    location: "Downtown Dubai",
    rating: 5,
    text: "Excellent service from start to finish. The team arrived on time, handled my furniture with great care, and the storage unit was exactly as described — cool, clean, and secure. I'll definitely use SafeStorage again for my next move.",
  },
  {
    name: "Emily Chen",
    location: "JLT",
    rating: 5,
    text: "I was nervous about storing my grandmother's antique furniture, but SafeStorage put my mind at ease. The climate-controlled environment was perfect for protecting the wood and upholstery. Everything was returned in the same condition it was collected. Outstanding!",
  },
  {
    name: "Faisal Al Rashid",
    location: "Palm Jumeirah",
    rating: 5,
    text: "SafeStorage handled our company's warehouse clearance efficiently. We stored over 200 boxes of stock and office equipment, and the team was professional and fast. The indexing system made it easy to retrieve specific items. Great for businesses.",
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <SchemaScript schema={testimonialsSchemas} />
      {/* Static header content for SEO — server-rendered */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] py-14 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-lg text-white/90">
            Over 1 Lakh satisfied customers across Dubai trust SafeStorage with their most valuable belongings.
            Read their stories below.
          </p>
        </div>
      </section>
      <TestimonialVideosPage />
      {/* Static review content for SEO — server-rendered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 text-center">Customer Reviews — SafeStorage Dubai</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#0A2463]">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}, Dubai</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Why Dubai Residents Choose SafeStorage</h3>
            <p className="text-gray-700 mb-4">
              With over 10 years of experience serving Dubai, SafeStorage has built a reputation for reliability,
              security, and outstanding customer service. Here is what sets us apart:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Hassle-free service:</strong> We handle all the heavy lifting — pickup, storage, and delivery at your convenience</li>
              <li>• <strong>Climate control:</strong> All units maintained at 20–25°C to protect furniture, electronics, and sensitive items from Dubai heat</li>
              <li>• <strong>Transparent pricing:</strong> No hidden fees, no surprises — the price you see is the price you pay</li>
              <li>• <strong>24/7 security:</strong> CCTV, biometric access, individual alarms and on-site security for complete peace of mind</li>
              <li>• <strong>Flexible terms:</strong> Monthly contracts, no long-term commitments — store for a week or a year</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">Join over 1 Lakh+ happy customers. Get your free quote today.</p>
            <Link
              href="/get-quote"
              className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
