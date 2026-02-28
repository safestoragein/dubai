import BlogPage from "@/components/blog/blog-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Tips & Guides | SafeStorage Dubai Blog",
  description:
    "Expert storage tips, guides, and insights from SafeStorage Dubai. Learn how to organize, pack, and maximize your storage space in Dubai.",
  keywords: "storage tips dubai, storage guides, packing tips, organizing storage, storage blog dubai, storage advice",
  alternates: {
    canonical: "https://safestorage.ae/blog",
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

// Fetch blog posts on the server so crawlers see full article list in HTML
async function fetchBlogPosts() {
  try {
    const response = await fetch("https://safestorage.in/get_blog_content", {
      cache: "no-store", // Response is 3.8MB — too large for Next.js Data Cache (2MB limit)
    })
    if (!response.ok) return []
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function constructImageUrl(postImages: string | null | undefined): string {
  if (!postImages) return "/blog-placeholder.jpg"
  if (postImages.startsWith("http://") || postImages.startsWith("https://")) return postImages
  if (postImages.startsWith("post_images/")) return `https://safestorage.in/${postImages}`
  return `https://safestorage.in/post_images/${postImages}`
}

function getConsistentLikes(postId: number) {
  return ((postId * 2654435761) % 100) + 50
}

function getConsistentViews(postId: number) {
  return ((postId * 1597334677) % 400) + 100
}

export default async function Blog() {
  const rawBlogs = await fetchBlogPosts()

  const initialBlogs = rawBlogs
    .map((blog: any) => {
      const title = blog.title || blog.seo_title || "Untitled"
      const postId = parseInt(blog.post_id) || 1
      return {
        id: postId,
        slug: generateSlug(title),
        title,
        excerpt: blog.seo_desc || "",
        content: blog.description || "",
        author: { name: "SafeStorage Team" },
        categories: [blog.post_category || "Storage Tips"],
        date: blog.created_at || new Date().toISOString(),
        image: constructImageUrl(blog.post_images),
        readTime: "5 min read",
        likes: getConsistentLikes(postId),
        views: getConsistentViews(postId),
        comments: [],
      }
    })
    .sort((a: any, b: any) => b.id - a.id)

  return <BlogPage initialBlogs={initialBlogs} />
}
