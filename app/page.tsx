import HeroSectionQuote from "@/components/hero-section-quote"
import USPSection from "@/components/usp-section"
import ComparisonSection from "@/components/comparison-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import LocationSection from "@/components/location-section"
import CaseStudies from "@/components/case-studies"
// import VideoSection from "@/components/video-section"
// import DubaiMapSection from "@/components/dubai-map-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import StorageSizes from "@/components/storage-sizes"
import type { Metadata } from "next"
import BlogSection from "@/components/blog-section"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Secure Storage Solutions in Dubai | SafeStorage Dubai | +971505773388",
  description:
    "SafeStorage Dubai offers secure, climate-controlled storage solutions with hassle-free pickup & delivery. Personal, business & vehicle storage. Call +971505773388 for instant quote.",
  keywords:
    "storage dubai, self storage, secure storage, climate controlled storage, business storage, personal storage, dubai storage solutions, storage units dubai, safestorage, storage facility dubai, furniture storage, document storage",
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
        alt: "SafeStorage Dubai Facility"
      }
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
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSectionQuote />
      <StorageSizes />
      <USPSection />
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
      {/* <VideoSection /> */}
      {/* <div className="flex justify-center mt-8">
        <Button variant="outline" size="lg" asChild>
          <Link href="/testimonials" className="group">
            View More Testimonials
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div> */}
      {/* <DubaiMapSection /> */}
      <BlogSection posts={blogPosts.filter((post) => post.featured).slice(0, 3)} />
    </div>
  )
}
