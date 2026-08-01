import BlogListing from "@/components/blog/blog-listing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Tips & Guides | SafeStorage Dubai Blog",
  description:
    "Expert storage tips, guides, and insights from SafeStorage Dubai. Learn how to organize, pack, and maximize your storage space in Dubai.",
  keywords: "storage tips dubai, storage guides, packing tips, organizing storage, storage blog dubai, storage advice",
  alternates: {
    canonical: "https://safestorage.ae/blog",
    languages: { 'en': 'https://safestorage.ae/blog', 'x-default': 'https://safestorage.ae/blog' },
  },
  openGraph: {
    title: "Storage Tips & Guides | SafeStorage Dubai Blog",
    description: "Expert storage tips, guides, and insights from SafeStorage Dubai.",
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
