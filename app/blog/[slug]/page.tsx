import BlogPostDetail from "@/components/blog/blog-post-detail"
import SchemaScript from "@/components/schema-script"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// ISR: regenerate at most once per hour
export const revalidate = 3600

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
      next: { revalidate: 3600 },
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
        alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
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
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
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
      alternates: { canonical: canonicalUrl, languages: { 'en': canonicalUrl, 'x-default': canonicalUrl } },
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
      {/* Server-rendered H1 — for Google/crawlers only, visually hidden to avoid duplicate with client title */}
      <h1 style={{ position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: "0" }}>
        {post.title}
      </h1>
      <BlogPostDetail slug={slug} />

      {/* Static section — server-rendered, boosts word count and internal linking */}
      <section style={{ padding: "48px 24px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
            Why Dubai Residents Trust SafeStorage
          </h2>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            SafeStorage Dubai is the city&apos;s most trusted self-storage provider, offering climate-controlled units that maintain a steady 20–25°C year-round. Dubai&apos;s extreme summer heat — regularly exceeding 45°C outdoors — can warp wooden furniture, crack leather, destroy electronics, and damage documents stored in ordinary spaces. Our facility eliminates that risk entirely, giving every customer peace of mind whether they are storing for a week or a year.
          </p>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            With over 500 satisfied customers across Dubai and a 4.9-star average rating, we have helped households, businesses, expats, students, and e-commerce sellers manage their belongings efficiently. Every unit is monitored by 24/7 CCTV, secured with individual PIN access, and covered by complimentary insurance up to AED 5,000 — something very few storage providers in the UAE offer as standard.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            What We Store
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            We accept a wide range of items: sofas, beds, dining sets, wardrobes, white goods, boxes, seasonal clothing, sports equipment, business inventory, office furniture, trade show displays, documents and files, vehicles (cars, motorcycles, classic cars), artwork, antiques, and e-commerce stock. Our unit sizes range from small lockers to full-villa-sized rooms — so you only pay for exactly the space you need.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            Free Door-to-Door Pickup Across Dubai
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "16px" }}>
            One of our most popular features is our free pickup service. You do not need to rent a lorry, hire movers separately, or make multiple trips. Our team comes to your door, carefully loads your belongings, transports them to our secure facility, and delivers them back when you need them — all included in your monthly plan. We serve every neighbourhood in Dubai including Business Bay, Dubai Marina, Jumeirah, JBR, DIFC, Downtown, Deira, Bur Dubai, Al Barsha, Dubai Investment Park, Motor City, and beyond.
          </p>

          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginBottom: "12px", marginTop: "24px" }}>
            Flexible Plans Starting from AED 99/Month
          </h3>
          <p style={{ color: "#374151", lineHeight: "1.75", marginBottom: "24px" }}>
            There are no long-term lock-ins. Plans start at AED 99/month for small units and scale up based on size. You can start with as little as one week of storage, extend month by month, or book long-term for the best rates. Getting started takes less than two minutes: visit our website, select your unit size, book your pickup slot, and we handle everything else. Most customers have their items picked up within 24 hours of booking.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://safestorage.ae/get-quote"
              style={{
                display: "inline-block",
                background: "#f97316",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.95rem"
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="https://safestorage.ae/self-storage-dubai/how-it-works"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#111827",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "1px solid #d1d5db"
              }}
            >
              How It Works
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
