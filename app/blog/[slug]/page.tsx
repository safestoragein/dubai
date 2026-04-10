import BlogPostDetail from "@/components/blog/blog-post-detail"
import SchemaScript from "@/components/schema-script"
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
        title: { absolute: "Blog Post Not Found" },
        description: "The requested blog post could not be found.",
        robots: { index: false, follow: false },
        alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl } },
      }
    }

    // Use seo_title for browser tab / Google title, seo_desc for meta description
    // Root layout template already appends "| SafeStorage Dubai" — do NOT add it here
    const metaTitle = post.seo_title || post.title || "Blog"

    // Generate unique description: use seo_desc, fallback to first 160 chars of plain-text content
    const rawDesc = post.seo_desc || ""
    const description = rawDesc.trim()
      ? rawDesc.trim().slice(0, 160)
      : (post.description || "")
          .replace(/<[^>]+>/g, " ")   // strip HTML tags
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 160) ||
        `Learn about ${post.title || "storage tips"} from SafeStorage Dubai experts.`

    const imageUrl = post.post_images
      ? post.post_images.startsWith('http')
        ? post.post_images
        : `https://safestorage.in/post_images/${post.post_images}`
      : null

    return {
      title: { absolute: metaTitle },
      description: description,
      keywords: post.tags || "",
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl } },
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
      title: { absolute: "Storage Tips & Guides" },
      description: "Expert storage tips and guides from SafeStorage Dubai",
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl } },
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const canonicalUrl = `https://safestorage.ae/blog/${slug}`

  let post: any = null
  try {
    const blogs = await fetchAllBlogs()
    post = blogs.find((b: any) => {
      const title = b.title || b.seo_title || ''
      return generateSlug(title) === slug
    })

    if (!post) {
      notFound()
    }
  } catch (error) {
    console.error('Error checking blog post:', error)
    // API failed — treat as not found to avoid soft 404
    notFound()
  }

  const imageUrl = post?.post_images
    ? post.post_images.startsWith('http')
      ? post.post_images
      : `https://safestorage.in/post_images/${post.post_images}`
    : 'https://safestorage.ae/images/storage-facility-background.png'

  const plainText = (post?.description || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#article`,
    headline: post?.seo_title || post?.title || '',
    name: post?.title || '',
    description: post?.seo_desc?.trim() || plainText,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    url: canonicalUrl,
    datePublished: post?.created_at || new Date().toISOString(),
    dateModified: post?.updated_at || post?.created_at || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'SafeStorage Dubai',
      url: 'https://safestorage.ae',
    },
    publisher: {
      '@id': 'https://safestorage.ae/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: post?.tags || '',
    articleSection: post?.post_category || 'Storage Tips',
    inLanguage: 'en-AE',
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://safestorage.ae/blog#blog',
      name: 'SafeStorage Dubai Blog',
      publisher: { '@id': 'https://safestorage.ae/#organization' },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://safestorage.ae/blog' },
      { '@type': 'ListItem', position: 3, name: post?.title || slug, item: canonicalUrl },
    ],
  }

  return (
    <>
      <SchemaScript schema={[blogPostingSchema, breadcrumbSchema]} />
      <BlogPostDetail slug={slug} />
    </>
  )
}
