import HeroSectionQuote from "@/components/hero-section-quote"
import TrustBadges from "@/components/trust-badges"
import USPSection from "@/components/usp-section"
import WhyChooseUs from "@/components/why-choose-us"
import StorageSizes from "@/components/storage-sizes"
import ServicesOverview from "@/components/services-overview"
import UseCasesSection from "@/components/use-cases-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { blogPosts } from "@/data/blog-posts"

// Lazy-load below-fold sections — code-split to reduce initial JS bundle
const ComparisonSection = dynamic(() => import("@/components/comparison-section"))
const HowItWorks       = dynamic(() => import("@/components/how-it-works"))
const LocationSection  = dynamic(() => import("@/components/location-section"))
const CaseStudies      = dynamic(() => import("@/components/case-studies"))
const Testimonials     = dynamic(() => import("@/components/testimonials"))
const FAQSection       = dynamic(() => import("@/components/faq-section"))
const BlogSection      = dynamic(() => import("@/components/blog-section"))

export const metadata: Metadata = {
  title: { absolute: "SafeStorage Dubai — #1 Rated Storage with Hassle-Free Pickup" },
  description:
    "SafeStorage Dubai: secure, climate-controlled self-storage units with hassle-free door-to-door pickup and delivery. Personal, business, vehicle & document storage from AED 9/month. 500+ Dubai customers. Get a free quote in 2 minutes.",
  keywords:
    "safestorage dubai, climate controlled storage dubai, hassle-free pickup storage dubai, secure storage dubai, affordable storage dubai, storage facility dubai, self storage dubai, personal storage dubai, business storage dubai, furniture storage dubai, vehicle storage dubai, document storage dubai, storage units dubai, dubai storage solutions, storage with pickup and delivery dubai",
  openGraph: {
    title: "SafeStorage Dubai - Secure Storage Solutions | Hassle-Free Pickup",
    description: "Premium climate-controlled storage units in Dubai. 24/7 security, hassle-free pickup & delivery. Call +971505773388.",
    url: "https://safestorage.ae",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Dubai Facility",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Dubai - Secure Storage Solutions",
    description: "Premium storage units in Dubai with hassle-free pickup & delivery. Call +971505773388.",
    images: ["/twitter-home.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae",
  },
}

export default function LandingPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)
  return (
    <div className="flex min-h-screen flex-col">
      {/* Above-fold — loaded immediately */}
      <HeroSectionQuote />
      <TrustBadges />

      {/* Services Overview — server component, fully SSR'd for SEO */}
      <ServicesOverview />

      {/* Below-fold — dynamically imported */}
      <HowItWorks />
      <WhyChooseUs />
      <StorageSizes />

      {/* Use Cases — server component, fully SSR'd for SEO */}
      <UseCasesSection />

      <USPSection />
      <ComparisonSection />
      <div className="w-full bg-white py-8 flex justify-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/how-it-works" className="group">
            Learn More About Our Process
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      <LocationSection />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <BlogSection posts={featuredPosts} />

      {/* Comprehensive FAQ section — 20 Q&As for SEO text-to-HTML ratio */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What is self-storage?</h3>
              <p className="text-gray-700 leading-relaxed">Self-storage is a service where individuals and businesses rent a secure unit or dedicated space to store their belongings outside their home or office. At SafeStorage Dubai, we operate a valet model — our team picks up your items from your door, stores them in our climate-controlled, secured facilities, and delivers everything back whenever you need it. You never have to visit a warehouse or hire a truck. The process is entirely managed by our team from start to finish.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How much does storage cost in Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Storage at SafeStorage Dubai starts from AED 9 per month for individual items, with full household or furniture storage plans from AED 199 per month. All plans include hassle-free pickup and delivery, climate-controlled storage maintained at 20&ndash;25&deg;C, 24/7 security monitoring, and free insurance coverage up to AED 5,000. There are no setup fees, no registration costs, and no penalties for cancelling early. Long-term discounts of up to 20% are available for 6&ndash;12 month prepaid plans.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Is pickup really free?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, pickup and delivery are completely free at SafeStorage Dubai. Our trained team will come to your home or office anywhere in Dubai, carefully wrap and collect your items, and transport them to our secure warehouse facility at no additional charge. Delivery back to your address when you need your items is also free. This is included as standard in all our monthly storage plans &mdash; there are no hidden transport fees, fuel surcharges, or handling charges.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What is climate control and why does it matter?</h3>
              <p className="text-gray-700 leading-relaxed">Climate-controlled storage means the temperature and humidity inside the storage facility are actively regulated. At SafeStorage Dubai, all units are maintained at 20&ndash;25&deg;C year-round. This is critically important in Dubai, where outdoor temperatures regularly exceed 45&deg;C in summer. Without climate control, wood furniture warps, leather cracks, electronics overheat, fabric fades, and metal corrodes. Climate control ensures your belongings are returned in exactly the same condition they were collected.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How secure is SafeStorage Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai uses multiple layers of physical and digital security. All facilities are monitored 24/7 by high-definition CCTV cameras. Entry is controlled by biometric access systems, meaning only authorised personnel and customers can enter the facility. Every unit has an individual alarm. The site has on-site security staff during operating hours and remote monitoring outside hours. Additionally, all stored items are covered by free insurance up to AED 5,000, with optional enhanced coverage available for high-value items.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What is the minimum rental period?</h3>
              <p className="text-gray-700 leading-relaxed">The minimum rental period at SafeStorage Dubai is one month. There are no long-term contracts or lock-in periods. You pay monthly in advance and can cancel with as little as 7 days&apos; notice. If you retrieve your items within the first month, you will be charged for one full month. After the first month, charges are calculated on a pro-rata daily basis up to your retrieval date. This flexibility makes SafeStorage ideal for both short-term needs (renovations, travel) and long-term storage requirements.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Can I store a car at SafeStorage Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, SafeStorage Dubai offers dedicated vehicle storage for cars, motorcycles, classic cars, boats, jet skis, and caravans. Our vehicle storage bays are covered, secure, and monitored 24/7. This service is particularly popular among expatriates travelling home for extended periods, classic car collectors who need a safe environment for their vehicles, and owners of seasonal recreational vehicles. Battery maintenance and periodic check-in services are available as add-ons. Contact us for current vehicle storage rates and availability.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How does inventory tracking work?</h3>
              <p className="text-gray-700 leading-relaxed">When our team collects your items, every item is photographed, catalogued, and entered into your digital inventory account. You receive a complete itemised list via email with photos of each item, the condition it was collected in, and its location in our warehouse. This digital inventory is accessible through your online customer account at any time. When you request a retrieval, you can specify individual items from your inventory rather than retrieving everything at once. This is particularly useful for customers who store large collections of items long-term.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Can businesses use SafeStorage Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Absolutely. SafeStorage Dubai serves hundreds of businesses across Dubai, from solo freelancers and startups to large corporations and retail chains. Business storage services include office furniture storage, retail inventory storage, document and records archival, e-commerce fulfilment storage, and bulk equipment warehousing. Businesses benefit from dedicated account management, flexible scaling of storage space month to month, and regular scheduled delivery and retrieval of inventory. VAT invoices are provided for all business accounts.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What areas of Dubai are covered?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai covers every area of Dubai for hassle-free pickup and delivery. Our primary service zones include Business Bay, Downtown Dubai, DIFC, Dubai Marina, JBR, Jumeirah, Palm Jumeirah, JLT, Al Quoz, Dubai Investment Park, Motor City, Sports City, Deira, Bur Dubai, Mirdif, Arabian Ranches, The Springs, The Meadows, and all other Dubai communities. We also serve Sharjah and other UAE emirates through our extended coverage network. If you are unsure whether your location is covered, simply call us and we will confirm.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Do you offer same-day pickup?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, same-day pickup is available at SafeStorage Dubai for requests submitted before 12 noon, subject to slot availability. For planned storage needs, we recommend booking at least 24&ndash;48 hours in advance to ensure your preferred time slot is available. Our team will confirm your pickup appointment and send you a reminder. Emergency storage needs can often be accommodated on very short notice &mdash; call us directly at +971505773388 and we will do our best to arrange same-day service for urgent situations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What insurance is provided?</h3>
              <p className="text-gray-700 leading-relaxed">Every SafeStorage Dubai plan includes free insurance coverage up to AED 5,000 for all stored items. This covers fire damage, theft, and natural calamities. For customers with higher-value items, comprehensive extended insurance is available at an additional cost. We strongly recommend declaring accurate values for all items when completing your inventory during pickup, as the insurance payout is based on declared value. Enhanced coverage plans are available for antiques, art, jewellery, and high-value electronics &mdash; ask our team for details when booking.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How do I cancel my storage?</h3>
              <p className="text-gray-700 leading-relaxed">Cancelling storage at SafeStorage Dubai is simple and penalty-free. Give us at least 7 days&apos; notice before your next billing date by email or phone. We will schedule the return delivery of all your items, and your billing will stop once all items have been delivered back to you. There are no cancellation fees, no administrative charges, and no lock-in penalties. Any unused portion of a prepaid period beyond the notice period will be refunded. This flexibility is one of the key reasons customers choose SafeStorage over traditional self-storage facilities.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Can I retrieve specific items without getting everything back?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. One of the most valued features of SafeStorage Dubai is the ability to retrieve individual items from your stored inventory without requiring a full move-out. Using your digital inventory account, you can select specific items, boxes, or furniture pieces for delivery. Our team will locate and deliver only the requested items to your address, leaving the rest of your belongings safely stored. This is extremely useful for customers who store seasonal items, business inventory, or collections they access occasionally throughout the year.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What unit sizes are available?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai offers storage units ranging from 25 square feet (small locker, suitable for a few boxes or a single piece of furniture) up to 300+ square feet (large units capable of holding the full contents of a 4-bedroom villa). Common sizes include studio unit (25&ndash;50 sq ft), 1-bedroom apartment unit (50&ndash;75 sq ft), 2-bedroom apartment unit (75&ndash;125 sq ft), 3-bedroom apartment unit (125&ndash;175 sq ft), and villa-sized units (200&ndash;300+ sq ft). We can recommend the right size based on your inventory list or photos.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How long does the pickup take?</h3>
              <p className="text-gray-700 leading-relaxed">A typical residential pickup at SafeStorage Dubai takes 2&ndash;4 hours depending on the volume of items being collected. Our team arrives with all necessary packing materials including furniture blankets, bubble wrap, stretch film, and corner protectors. They will carefully wrap, photograph, and inventory each item before loading. For large villa clearances or business pickups, additional time may be needed &mdash; we recommend scheduling these in the morning to allow sufficient time. Our team will give you an accurate time estimate when you book your pickup.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What is included in the monthly storage price?</h3>
              <p className="text-gray-700 leading-relaxed">The monthly storage rate at SafeStorage Dubai includes: hassle-free door-to-door pickup from anywhere in Dubai, secure climate-controlled storage in our monitored warehouse, digital inventory management with item-level tracking, free insurance coverage up to AED 5,000, 24/7 CCTV and biometric security, and free delivery back to your address when you need your items. There are no hidden fees. The only additional charges would be for optional packing materials if requested, enhanced insurance for high-value items, or same-day express service during peak periods.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">Is VAT included in the price?</h3>
              <p className="text-gray-700 leading-relaxed">All prices quoted by SafeStorage Dubai are exclusive of UAE VAT (5%). VAT will be applied to your invoice in accordance with UAE Federal Tax Authority regulations. For VAT-registered businesses, please provide your Tax Registration Number (TRN) before your first invoice is generated so that your invoices are correctly issued for VAT reclaim purposes. Individuals and non-VAT-registered customers will simply pay the quoted rate plus 5% VAT. All invoices are sent digitally via email and are compliant with UAE VAT requirements.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">How do I pay for storage?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai accepts multiple payment methods for your convenience. You can pay by credit or debit card (Visa, Mastercard), bank transfer, online payment through the website, or cheque made in favour of SafeStorage Dubai. Payments are made monthly in advance. For long-term plans, you can prepay for 3, 6, or 12 months upfront to benefit from discounts of up to 20%. Auto-pay can be set up so you never miss a payment. Monthly invoices and payment reminders are sent by email, SMS, and WhatsApp.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-dubai-navy mb-2">What makes SafeStorage different from other storage companies in Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai combines every advantage of premium storage into one transparent, affordable package. Unlike traditional self-storage companies, we come to you &mdash; hassle-free pickup and delivery means you never need to hire a van or visit a warehouse. Every unit is climate-controlled at no extra charge, protecting belongings from Dubai&apos;s extreme heat. Free insurance up to AED 5,000 is included as standard. Our digital inventory system lets you track every item and request individual retrievals. With over 2,400 verified reviews and a 4.9/5 rating, SafeStorage is Dubai&apos;s highest-rated storage provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text section for SEO — server-rendered, below-fold */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">SafeStorage Dubai — Secure, Climate-Controlled Self Storage</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai is the UAE&apos;s leading provider of secure, climate-controlled self storage with
            hassle-free door-to-door pickup and delivery. Whether you need to store furniture during a renovation,
            keep business inventory safe, or find a long-term solution for your household items, SafeStorage
            offers flexible monthly plans with no long-term contracts.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our storage units maintain a consistent 20–25°C temperature year-round, protecting your belongings
            from Dubai&apos;s extreme summer heat. Every unit is monitored by 24/7 CCTV, secured with biometric
            access, and covered by free insurance up to AED 5,000. Storage plans start from AED 199/month
            with hassle-free pickup and delivery across all Dubai areas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-2">Personal Storage Dubai</h3>
              <p className="text-gray-700 text-sm">
                Store household items, seasonal belongings, sports equipment, and personal effects securely.
                Our smallest units start from 25 sq ft — perfect for boxes, suitcases, and small furniture.
                Hassle-free pickup from your home anywhere in Dubai.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-2">Business Storage Dubai</h3>
              <p className="text-gray-700 text-sm">
                Flexible storage for office furniture, retail inventory, documents, and business equipment.
                Scale storage space up or down monthly based on your actual needs. Dedicated business
                account management and regular delivery/retrieval service.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-2">Vehicle Storage Dubai</h3>
              <p className="text-gray-700 text-sm">
                Covered, secure bays for cars, motorcycles, boats, jet skis, and caravans. Perfect for
                expats travelling temporarily, classic car collectors, and owners of seasonal vehicles.
                24/7 monitoring and battery maintenance services available.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Why SafeStorage is Dubai&apos;s #1 Rated Storage Provider</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <p>✓ <strong>Hassle-Free Pickup &amp; Delivery</strong> — No truck rental, no heavy lifting</p>
              <p>✓ <strong>Climate Control</strong> — 20–25°C maintained year-round</p>
              <p>✓ <strong>24/7 Security</strong> — CCTV, biometric access, individual alarms</p>
              <p>✓ <strong>Free Insurance</strong> — AED 5,000 coverage included with every unit</p>
              <p>✓ <strong>No Lock-In</strong> — Monthly contracts, cancel anytime</p>
              <p>✓ <strong>Transparent Pricing</strong> — No hidden fees, no surprises</p>
              <p>✓ <strong>Same-Day Pickup</strong> — Available for requests before 12 PM</p>
              <p>✓ <strong>1 Lakh+ Customers</strong> — Trusted across Dubai and the UAE</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Storage Across All Dubai Areas</h3>
              <p className="text-gray-700 text-sm mb-3">
                SafeStorage serves every area of Dubai with hassle-free pickup and delivery. Our main service zones
                cover Business Bay, Downtown Dubai, DIFC, Dubai Marina, JBR, Jumeirah, Palm Jumeirah,
                JLT, Al Quoz, Dubai Investment Park, Motor City, Sports City, Deira, and Bur Dubai.
              </p>
              <p className="text-gray-700 text-sm">
                If your area is not listed, we still serve it. Contact us and our team will confirm
                coverage and schedule your pickup.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-3">Flexible Storage Plans from AED 199/Month</h3>
              <p className="text-gray-700 text-sm mb-3">
                Storage units are available in sizes from 25 sq ft (small locker) to 300+ sq ft
                (full villa contents). Monthly plans with no setup fees, no registration costs,
                and no penalties for early cancellation.
              </p>
              <p className="text-gray-700 text-sm">
                Long-term discounts: save 10% on 3-month plans, 15% on 6-month plans, and 20% on
                annual prepaid plans. Special rates for businesses and bulk storage requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Guides & More Services — internal links to prevent orphan pages */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-[#0A2463] mb-4">Specialized Storage Services</h2>
              <ul className="space-y-2">
                {[
                  { href: "/car-storage", label: "Car & Vehicle Storage Dubai" },
                  { href: "/art-storage", label: "Art & Valuables Storage Dubai" },
                  { href: "/electronics-storage", label: "Electronics Storage Dubai" },
                  { href: "/furniture-storage", label: "Furniture Storage Dubai" },
                  { href: "/ecommerce-storage", label: "E-commerce & Fulfilment Storage" },
                  { href: "/document-storage", label: "Document & Records Storage" },
                  { href: "/student-storage", label: "Student Storage Dubai" },
                  { href: "/storage-size-guide", label: "Storage Unit Size Guide" },
                  { href: "/expat-leaving-uae", label: "Expat Leaving UAE — Storage Guide" },
                  { href: "/international-relocation", label: "International Relocation Storage" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#0A2463] text-sm hover:text-[#D8315B] hover:underline transition-colors">
                      → {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A2463] mb-4">Dubai Living Guides 2026</h2>
              <ul className="space-y-2">
                {[
                  { href: "/moving-to-dubai-2026", label: "Moving to Dubai 2026 — Complete Guide" },
                  { href: "/dubai-cost-of-living-2026", label: "Dubai Cost of Living 2026" },
                  { href: "/dubai-shopping-guide-2026", label: "Dubai Shopping Guide 2026" },
                  { href: "/starting-business-dubai-2026", label: "Starting a Business in Dubai 2026" },
                  { href: "/top-places-dubai-2026", label: "Top Places to Visit in Dubai 2026" },
                  { href: "/top-10-storage-companies-dubai", label: "Top 10 Storage Companies in Dubai" },
                  { href: "/top-10-storage-companies-uae", label: "Top 10 Storage Companies in UAE" },
                  { href: "/storage-size-guide", label: "How Big a Storage Unit Do I Need?" },
                  { href: "/blog", label: "Storage Tips & Guides Blog" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#0A2463] text-sm hover:text-[#D8315B] hover:underline transition-colors">
                      → {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
