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
  title: "SafeStorage Dubai — #1 Climate-Controlled Storage with Free Pickup | +971505773388",
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
    </div>
  )
}
