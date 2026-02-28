import TestimonialVideosPage from "@/components/testimonials/testimonial-videos-page"
import type { Metadata } from "next"

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

export default function TestimonialsPage() {
  return <TestimonialVideosPage />
}
