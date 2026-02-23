import BlogPostDetail from "@/components/blog/blog-post-detail"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// Force dynamic generation for blog posts
export const dynamic = 'force-dynamic'

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function fetchAllBlogs() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch('https://safestorage.in/get_blog_content', {
      cache: 'no-store',
      signal: controller.signal,
    })
    clearTimeout(timeout)
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch {
    clearTimeout(timeout)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const canonicalUrl = `https://safestorage.ae/blog/${slug}`

  try {
    const blogs = await fetchAllBlogs()

    const post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      return generateSlug(title) === slug
    })

    if (!post) {
      return {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
        alternates: { canonical: canonicalUrl },
      }
    }

    // Use seo_title for browser tab / Google title, seo_desc for meta description
    // Root layout template already appends "| SafeStorage Dubai" — do NOT add it here
    const metaTitle = post.seo_title || post.title || "Blog"
    const description = post.seo_desc || "Read this blog post on SafeStorage Dubai"

    const imageUrl = post.post_images
      ? post.post_images.startsWith('http')
        ? post.post_images
        : `https://safestorage.in/post_images/${post.post_images}`
      : null

    return {
      title: metaTitle,
      description: description,
      keywords: post.tags || "",
      alternates: { canonical: canonicalUrl },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      },
      openGraph: {
        title: metaTitle,
        description: description,
        url: canonicalUrl,
        siteName: "SafeStorage Dubai",
        type: "article",
        images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: metaTitle }] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: "Storage Tips & Guides",
      description: "Expert storage tips and guides from SafeStorage Dubai",
      alternates: { canonical: canonicalUrl },
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Check if blog post exists before rendering
  try {
    const blogs = await fetchAllBlogs()
    const post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      return generateSlug(title) === slug
    })

    if (!post) {
      notFound()
    }
  } catch (error) {
    console.error('Error checking blog post:', error)
    // If API fails, let the component handle it
  }

  return <BlogPostDetail slug={slug} />
}
