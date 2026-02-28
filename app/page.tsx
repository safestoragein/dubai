import HeroSectionQuote from "@/components/hero-section-quote"
import TrustBadges from "@/components/trust-badges"
import USPSection from "@/components/usp-section"
import WhyChooseUs from "@/components/why-choose-us"
import StorageSizes from "@/components/storage-sizes"
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
  title: "SafeStorage Dubai — Climate-Controlled Storage with Free Pickup | +971505773388",
  description:
    "SafeStorage Dubai: secure, climate-controlled units with hassle-free free pickup from your door. Personal, business & vehicle storage from AED 99/month. 500+ happy customers. Get a free quote in 2 minutes.",
  keywords:
    "safestorage dubai, climate controlled storage dubai, free pickup storage dubai, secure storage with pickup dubai, affordable storage dubai AED 99, storage facility dubai, 24/7 storage access dubai, dubai storage solutions near me",
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
      <StorageSizes />
      <WhyChooseUs />
      <USPSection />

      {/* Below-fold — dynamically imported */}
      <ComparisonSection />
      <HowItWorks />
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
    </div>
  )
}
