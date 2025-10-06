import BlogPage from "@/components/blog/blog-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Tips & Guides | SafeStorage Dubai Blog",
  description:
    "Expert storage tips, guides, and insights from SafeStorage Dubai. Learn about organizing, packing, and maximizing your storage space in Dubai.",
  keywords: "storage tips dubai, storage guides, packing tips, organizing storage, storage blog dubai, storage advice",
}

export default function Blog() {
  return <BlogPage />
}
