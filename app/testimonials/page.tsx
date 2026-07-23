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
    text: "SafeStorage made my apartment renovation completely stress-free. They picked up all my furniture within 24 hours, kept everything in perfect condition for 6 weeks, and delivered it all back when I called. Everything came back exactly as it went in. Highly recommended!",
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
    text: "Excellent service from start to finish. The team arrived on time, handled my furniture with great care, and the storage unit was exactly as described — clean, secure, and well-kept. I'll definitely use SafeStorage again for my next move.",
  },
  {
    name: "Emily Chen",
    location: "JLT",
    rating: 5,
    text: "I was nervous about storing my grandmother's antique furniture, but SafeStorage put my mind at ease. Every piece was carefully wrapped and protected, keeping the wood and upholstery in great shape. Everything was returned in the same condition it was collected. Outstanding!",
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
              <li>• <strong>Door-to-door service:</strong> We handle all the heavy lifting — pickup, storage, and delivery at your convenience</li>
              <li>• <strong>Clean, secure units:</strong> Dedicated indoor units keep furniture, electronics, and sensitive items dust-protected and safe</li>
              <li>• <strong>Transparent pricing:</strong> No hidden fees, no surprises — the price you see is the price you pay</li>
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

      {/* Why 10,000+ Customers Trust SafeStorage — detailed text for SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">

          <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Why 10,000+ Customers Trust SafeStorage Dubai</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover the story behind Dubai&apos;s most trusted storage company — our history, service philosophy, and the standards that have earned us thousands of five-star reviews.
          </p>

          <div className="space-y-8 mb-14">

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Our Story: A Decade of Serving Dubai</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SafeStorage Dubai was founded over a decade ago with a single mission: to make storage in the UAE genuinely convenient, affordable, and trustworthy. In a market dominated by basic self-storage facilities that required customers to hire vans, do their own heavy lifting, and navigate industrial estates, we saw an opportunity to create something completely different — a full-service, door-to-door storage experience that treated customers&apos; belongings with the care and respect they deserved.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Starting with a small team and a single facility, SafeStorage quickly gained a reputation for reliability and exceptional service. Word spread rapidly across Dubai&apos;s expat and local communities, and today we serve thousands of customers across the UAE — from individual residents storing a few boxes to major corporations managing tonnes of inventory. Our growth has been driven entirely by customer recommendations, which is the most meaningful measure of a service business&apos;s quality.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Unmatched Service Quality That Dubai Trusts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                What sets SafeStorage apart from every other storage company in Dubai is our obsessive focus on service quality. From the moment you contact us, you are assigned a dedicated storage consultant who manages your account personally from start to finish. This means you always have one point of contact who knows your situation, your items, and your preferences — no repeating yourself every time you call, no being passed between departments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our pickup teams are professional, uniformed, and trained to handle belongings with extreme care. Every item is wrapped, photographed, and catalogued before being loaded into our vehicles. Our drivers are experienced in navigating Dubai&apos;s diverse residential communities — from high-rise apartments in Marina to villa communities in Arabian Ranches. We arrive on time, communicate proactively, and treat every pickup as if we were storing our own family&apos;s possessions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Clean, Dedicated Storage Built for Dubai</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every item you store with SafeStorage is kept in a clean, dedicated indoor unit and handled with real care. Before anything is stored, our team wraps furniture in protective covers, adds foam padding and corner protection, and catalogues each piece so nothing gets lost or damaged in handling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Items are kept off the floor on pallets or shelving where appropriate and stored in a clean, dust-protected environment. For SafeStorage customers, this means antique furniture, electronics, documents, and clothing are looked after carefully throughout their stay — even after months or years. This standard of care is included in every plan at no extra charge; we believe responsible storage should never be an optional luxury.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Security That Never Sleeps</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SafeStorage Dubai operates one of the most comprehensively secured storage facilities in the UAE. Our security infrastructure was designed from the ground up to ensure that every item stored in our care is protected around the clock. The facility features 24/7 HD CCTV surveillance covering every corridor, every loading bay, every entrance, and every exit — with footage retained and reviewed by our security team. The perimeter is secured with reinforced fencing and controlled access gates monitored at all times.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Transparent Pricing That Customers Praise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most consistent themes in our customer reviews is the relief customers feel when they discover our pricing is genuinely transparent. In an industry often criticised for hidden fees, lock-in contracts, and confusing pricing structures, SafeStorage has built its reputation on the opposite: the price quoted is the price charged, every time. Storage pricing starts from 12.60 AED / sqft (VAT-inclusive), with door-to-door service included.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We offer flexible monthly contracts with no long-term commitments, making SafeStorage suitable for customers at every stage — from those storing during a two-week renovation to businesses needing multi-year storage solutions. Long-term customers benefit from a wide range of discounts on prepaid plans — the longer you store, the more you save. We are proud that our Net Promoter Score consistently exceeds industry benchmarks because our customers know exactly what they are paying for and feel they are receiving excellent value. Call +971505773388 today for a personalised quote with no obligation.
              </p>
            </div>

          </div>

          {/* FAQ section for testimonials page */}
          <h2 className="text-2xl font-bold text-[#0A2463] mb-6">Frequently Asked Questions — What Our Customers Ask</h2>

          <div className="space-y-5 mb-12">

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">1. Why do so many Dubai residents recommend SafeStorage to friends?</h3>
              <p className="text-gray-700">The most common reason customers recommend SafeStorage is the ease of the entire experience. Unlike traditional self-storage where you do all the work yourself, SafeStorage handles everything — pickup, packing, transport, storage, and delivery. Customers are consistently surprised by how smooth and stress-free the process is. Combined with transparent pricing, responsive support, and the reassurance of clean, secure storage, it is a service people feel genuinely good about recommending.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">2. How do customers rate SafeStorage Dubai?</h3>
              <p className="text-gray-700">SafeStorage Dubai maintains a consistently high customer satisfaction rating across all review platforms. Our customers regularly highlight the professionalism of our pickup team, the reliability of our service, the quality of our clean and secure facilities, and the helpfulness of our customer support team. We actively monitor all reviews and respond to any concerns promptly — we take every piece of feedback seriously and use it to continuously improve our service.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">3. Do expats living in Dubai find SafeStorage particularly useful?</h3>
              <p className="text-gray-700">Yes. Expats are one of our largest customer groups, and SafeStorage is particularly well-suited to the expat lifestyle in Dubai. When relocating between apartments, returning home temporarily, or moving to a new country, expats need a storage solution that is flexible, reliable, and easy to manage remotely. SafeStorage allows customers to manage their storage accounts entirely by phone or email, and we can coordinate pickup and delivery even when the customer is not physically in Dubai. Many expats leave their belongings with us between assignments and simply notify us when they need delivery to their new address.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">4. What do customers say about the condition of their items when returned?</h3>
              <p className="text-gray-700">Overwhelmingly positive. The most frequent comment in customer reviews is that items are returned in exactly the same condition as when they were collected — sometimes in better condition because our team wraps furniture properly before storage, protecting it from dust and minor impacts. Careful wrapping and clean, secure storage mean no dust damage, no scuffs, and no pest issues. Customers storing antique furniture, sensitive electronics, and high-quality clothing consistently report that their items emerge from storage in perfect condition.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">5. Has SafeStorage ever had a security incident at its facility?</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">6. Do customers find the pricing competitive compared to other Dubai storage companies?</h3>
              <p className="text-gray-700">Customers consistently tell us that SafeStorage offers excellent value when they consider everything that is included. While the headline price may appear similar to some competitors, what distinguishes SafeStorage is that our service includes free insurance at no extra charge, door-to-door service, and dedicated customer support. Many customers who previously used basic storage facilities in Dubai report that they were paying separately for each of these services, making SafeStorage significantly better value overall.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">7. How does SafeStorage handle customers who need to store for a very short period?</h3>
              <p className="text-gray-700">SafeStorage&apos;s minimum storage period is one month, making it suitable for customers who only need temporary storage for a few weeks during a move or renovation. There are no penalties for short-term storage, and we treat every customer — regardless of their storage volume or duration — with the same level of care and professionalism. Many customers who start with a one-month plan end up staying for much longer because they discover how convenient and cost-effective the service is.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">8. Do business customers have different experiences to residential customers?</h3>
              <p className="text-gray-700">Business customers typically benefit from additional services such as dedicated account management, itemised invoicing, multi-user account access, and higher-frequency pickup and delivery scheduling. Businesses consistently highlight the reliability and professionalism of our team as key to their ongoing relationship with SafeStorage. Whether it is a law firm archiving client documents, an e-commerce retailer storing inventory, or a hotel managing seasonal equipment, our business storage programmes are tailored to commercial requirements and professional standards.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">9. What languages does the SafeStorage customer support team speak?</h3>
              <p className="text-gray-700">Our customer support team provides assistance in both English and Arabic, reflecting the diverse nature of Dubai&apos;s population. All contracts, invoices, and correspondence are available in both languages. We also have team members who can communicate in Hindi, Urdu, and Tagalog to serve our South Asian and Filipino customer base. For any language requirement not covered, we use professional interpretation services to ensure every customer can communicate clearly and confidently about their storage needs.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">10. How do customers typically find out about SafeStorage Dubai?</h3>
              <p className="text-gray-700">The majority of our new customers come through word-of-mouth recommendations from existing customers — the clearest possible indicator of genuine satisfaction. We also receive significant enquiries through Google search, where we rank prominently for storage-related searches in Dubai. Our social media presence, particularly on Instagram and Facebook, reaches Dubai&apos;s large expat community. And many customers find us through property management companies, real estate agents, and relocation specialists who recommend us to clients moving within or out of Dubai.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">11. What is the best way to leave a review for SafeStorage Dubai?</h3>
              <p className="text-gray-700">We genuinely value customer feedback and encourage all customers to share their experience. The best ways to leave a review are on Google, where your feedback helps other Dubai residents find a trustworthy storage solution. You can search &quot;SafeStorage Dubai&quot; on Google and select the option to write a review. We read every review personally and respond to all feedback — positive and constructive alike. Your review helps us maintain our high standards and helps future customers make informed decisions.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">12. What happens if I have a complaint or issue with my storage?</h3>
              <p className="text-gray-700">We have a clear, responsive complaints process. Contact your dedicated storage consultant directly, or email support@safestorage.ae or call +971505773388. All complaints are acknowledged within 2 hours during business hours and resolved within 48 hours wherever possible. If an item has been damaged or lost, our insurance coverage applies immediately and our team will process your claim without delay. Customer satisfaction is our highest priority, and we will go above and beyond to resolve any issue to your full satisfaction.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">13. Has SafeStorage won any industry recognition or awards?</h3>
              <p className="text-gray-700">SafeStorage Dubai is part of the broader SafeStorage group which serves over 1 Lakh customers globally. Our Dubai operation has earned strong recognition through consistently high customer satisfaction scores, numerous five-star reviews across all major platforms, and partnerships with leading Dubai property management companies, real estate agencies, and corporate relocation services. While we let our customer reviews speak louder than awards, we are proud to be the storage partner of choice for thousands of Dubai residents and businesses.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">14. Do customers ever store with SafeStorage for years at a time?</h3>
              <p className="text-gray-700">Yes. We have many long-term customers who have been storing with SafeStorage for three, five, or even eight or more years. Long-term customers include families who acquired furniture and belongings faster than their apartments could accommodate them, expats who permanently retained Dubai storage as a base while working internationally, and businesses with ongoing archive and inventory storage requirements. Long-term customers benefit from preferential pricing, priority scheduling, and the assurance of a storage partner who knows their account history in detail.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2463] mb-2">15. Is there anything customers wish they had known before starting storage with SafeStorage?</h3>
              <p className="text-gray-700">The most common piece of feedback from new customers is that they wish they had contacted SafeStorage sooner. Many customers initially planned to manage their move or renovation themselves, only to realise part-way through how much easier and more affordable professional storage would have been. Another common point is that customers are often pleasantly surprised by how affordable storage is — with pricing starting from 12.60 AED / sqft (VAT-inclusive) — and wish they had not spent months moving items between locations when SafeStorage could have handled everything seamlessly from the start.</p>
            </div>

          </div>

          <div className="text-center bg-gradient-to-r from-[#0A2463] to-[#3E92CC] rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Join Thousands of Happy SafeStorage Customers</h3>
            <p className="text-white/85 mb-6 text-lg">Experience Dubai&apos;s most trusted storage service. Door-to-Door pickup, clean and secure units, 24/7 security — from 12.60 AED / sqft.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c02a50] transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+971505773388"
                className="inline-block bg-white text-[#0A2463] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Call +971505773388
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
