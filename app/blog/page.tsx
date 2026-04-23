import BlogPage from "@/components/blog/blog-page"
import SchemaScript from "@/components/schema-script"
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

// Fetch blog posts on the server so crawlers see full article list in HTML
async function fetchBlogPosts() {
  try {
    const response = await fetch("https://safestorage.in/get_blog_content", {
      next: { revalidate: 600 },
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

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://safestorage.ae/blog#blog',
    name: 'SafeStorage Dubai Blog',
    description: 'Expert storage tips, guides, and insights from SafeStorage Dubai.',
    url: 'https://safestorage.ae/blog',
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    inLanguage: 'en-AE',
    blogPost: initialBlogs.map((post: any) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://safestorage.ae/blog/${post.slug}`,
      datePublished: post.date,
      image: post.image,
      author: { '@type': 'Organization', name: 'SafeStorage Dubai' },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://safestorage.ae/blog' },
    ],
  }

  return (
    <>
      <SchemaScript schema={[blogSchema, breadcrumbSchema]} />
      <BlogPage initialBlogs={initialBlogs} />

      {/* Server-rendered complete article index — ensures ALL blog posts have at least one internal link */}
      <section style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#0A2463", marginBottom: "20px" }}>
            All Storage Articles &amp; Guides ({rawBlogs.length})
          </h2>
          <ul style={{ columns: "2", columnGap: "32px", listStyle: "none", padding: 0, margin: 0 }}>
            {rawBlogs.map((blog: any) => {
              const title = blog.title || blog.seo_title || ""
              const slug = generateSlug(title)
              if (!slug) return null
              return (
                <li key={blog.post_id || slug} style={{ breakInside: "avoid", marginBottom: "8px" }}>
                  <a
                    href={`/blog/${slug}`}
                    style={{ color: "#0A2463", textDecoration: "none", fontSize: "0.875rem", lineHeight: "1.5" }}
                  >
                    {title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
