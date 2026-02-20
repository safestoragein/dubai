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

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const canonicalUrl = `https://safestorage.ae/blog/${slug}`

    // Fetch directly from backend to avoid issues with calling own API
    const response = await fetch('https://safestorage.in/get_blog_content', {
      cache: 'no-store'
    })
    const data = await response.json()

    // Find the blog post by matching slug
    const blogs = Array.isArray(data) ? data : []
    const post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      return generateSlug(title) === slug
    })

    if (!post) {
      return {
        title: "Blog Post Not Found | SafeStorage Dubai",
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
      }
    }

    const title = post.title || post.seo_title || "Blog Post"
    const description = post.seo_desc || "Read this blog post on SafeStorage Dubai"

    return {
      title: `${title} | SafeStorage Dubai`,
      description: description,
      keywords: post.tags || "",
      alternates: {
        canonical: canonicalUrl,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      openGraph: {
        title: title,
        description: description,
        url: canonicalUrl,
        siteName: "SafeStorage Dubai",
        type: "article",
        images: post.post_images ? [
          {
            url: post.post_images,
            width: 1200,
            height: 630,
            alt: title,
          },
        ] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Still set canonical even on error to prevent inheriting homepage canonical
    const { slug } = await params
    return {
      title: "Blog | SafeStorage Dubai",
      description: "Expert storage tips and guides from SafeStorage Dubai",
      alternates: { canonical: `https://safestorage.ae/blog/${slug}` },
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Check if blog post exists before rendering
  try {
    const response = await fetch('https://safestorage.in/get_blog_content', {
      cache: 'no-store'
    })
    const data = await response.json()

    const blogs = Array.isArray(data) ? data : []
    const post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      return generateSlug(title) === slug
    })

    // Return 404 if post not found
    if (!post) {
      notFound()
    }
  } catch (error) {
    console.error('Error checking blog post:', error)
    // If API fails, let the component handle it (will show "Post Not Found")
  }

  return <BlogPostDetail slug={slug} />
}
