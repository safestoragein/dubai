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
  title: { absolute: "SafeStorage Dubai — #1 Rated Storage with Free Pickup" },
  description:
    "SafeStorage Dubai: secure, climate-controlled self-storage units with free door-to-door pickup and delivery. Personal, business, vehicle & document storage from AED 9/month. 500+ Dubai customers. Get a free quote in 2 minutes.",
  keywords:
    "safestorage dubai, climate controlled storage dubai, free pickup storage dubai, secure storage dubai, affordable storage dubai, storage facility dubai, self storage dubai, personal storage dubai, business storage dubai, furniture storage dubai, vehicle storage dubai, document storage dubai, storage units dubai, dubai storage solutions, storage with pickup and delivery dubai",
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

      {/* Static rich-text section for SEO — server-rendered, below-fold */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">SafeStorage Dubai — Secure, Climate-Controlled Self Storage</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai is the UAE&apos;s leading provider of secure, climate-controlled self storage with
            free door-to-door pickup and delivery. Whether you need to store furniture during a renovation,
            keep business inventory safe, or find a long-term solution for your household items, SafeStorage
            offers flexible monthly plans with no long-term contracts.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our storage units maintain a consistent 20–25°C temperature year-round, protecting your belongings
            from Dubai&apos;s extreme summer heat. Every unit is monitored by 24/7 CCTV, secured with biometric
            access, and covered by free insurance up to AED 5,000. Storage plans start from AED 199/month
            with free pickup and delivery across all Dubai areas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-[#0A2463] mb-2">Personal Storage Dubai</h3>
              <p className="text-gray-700 text-sm">
                Store household items, seasonal belongings, sports equipment, and personal effects securely.
                Our smallest units start from 25 sq ft — perfect for boxes, suitcases, and small furniture.
                Free pickup from your home anywhere in Dubai.
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
              <p>✓ <strong>Free Pickup &amp; Delivery</strong> — No truck rental, no heavy lifting</p>
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
                SafeStorage serves every area of Dubai with free pickup and delivery. Our main service zones
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
    </div>
  )
}
