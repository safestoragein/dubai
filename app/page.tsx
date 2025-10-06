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
import LandingQuoteSection from "@/components/landing-quote-section"
import type { Metadata } from "next"
import BlogSection from "@/components/blog-section"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Secure Storage Solutions in Dubai | SafeStorage Dubai",
  description:
    "SafeStorage Dubai offers secure, climate-controlled storage solutions with free pickup & delivery. Personal, business & vehicle storage available across Dubai.",
  keywords:
    "storage dubai, self storage, secure storage, climate controlled storage, business storage, personal storage, dubai storage solutions, storage units dubai",
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
      <LandingQuoteSection />
    </div>
  )
}
