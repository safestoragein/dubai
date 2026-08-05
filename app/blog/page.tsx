import BlogListing from "@/components/blog/blog-listing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Storage Tips & News in Dubai & UAE | Safe Storage Blog" },
  description:
    "Explore storage tips, guides & news for Dubai & UAE. Helpful articles on self-storage, packing, business storage & space optimization.",
  keywords: "Self-Storage Tips, Storage Company in Dubai, Self Storage, Storage Dubai, Storage Tips Dubai, Business Storage Tips UAE, Safe Storage Best Practices Dubai, Warehouse Storage Insights Dubai, How To Store Furniture In Dubai, Dubai Storage Blog",
  alternates: {
    canonical: "https://safestorage.ae/blog",
    languages: { 'en': 'https://safestorage.ae/blog', 'x-default': 'https://safestorage.ae/blog' },
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/blog",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
}

// ISR: regenerate at most once every 10 minutes
export const revalidate = 600

// Page 1 of the listing. Pages 2+ live at /blog/page/[page].
export default async function Blog() {
  return <BlogListing page={1} />
}
