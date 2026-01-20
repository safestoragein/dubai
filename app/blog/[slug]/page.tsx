import BlogPostDetail from "@/components/blog/blog-post-detail"
import type { Metadata } from "next"

// Force dynamic generation for blog posts
export const dynamic = 'force-dynamic'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    console.log('Generating metadata for slug:', params.slug)
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL || 'https://safestorage.ae'

    const response = await fetch(`${baseUrl}/api/blogs/${params.slug}`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    const data = await response.json()

    console.log('API Response for metadata:', data)

    if (data.status !== 'success' || !data.data) {
      console.log('Blog not found, using fallback metadata')
      return {
        title: "Blog Post Not Found | SafeStorage Dubai",
        description: "The requested blog post could not be found.",
      }
    }

    const post = data.data

    // Use new field names: title/seo_title, seo_desc, post_images
    const title = post.title || post.seo_title || "Blog Post"
    const description = post.seo_desc || "Read this blog post on SafeStorage Dubai"

    return {
      title: `${title} | SafeStorage Dubai`,
      description: description,
      keywords: post.tags || "",
      openGraph: {
        title: title,
        description: description,
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
    return {
      title: "Blog | SafeStorage Dubai",
      description: "Expert storage tips and guides from SafeStorage Dubai",
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostDetail slug={params.slug} />
}
