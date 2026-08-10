import { notFound } from "next/navigation"
import BlogPage from "@/components/blog/blog-page"
import SchemaScript from "@/components/schema-script"
import { getListingPosts, getTotalPages, POSTS_PER_PAGE, pageHref } from "@/lib/blog-listing"
import { BLOG_AUTHOR } from "@/lib/company-facts"

// Server-rendered listing shared by /blog (page 1) and /blog/page/[page].
// Renders one page of cards into the HTML; the full post index below keeps every
// article reachable by a crawler from any page of the listing.
export default async function BlogListing({ page }: { page: number }) {
  const posts = await getListingPosts()
  const totalPages = getTotalPages(posts.length)

  if (page < 1) notFound()
  // Only 404 an out-of-range page when the feed actually returned posts — if the
  // feed is down every page would otherwise 404 and risk being de-indexed. With no
  // posts the view falls back to its client-side refetch.
  if (posts.length > 0 && page > totalPages) notFound()

  const start = (page - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE)

  // Scoped to this page's posts — the Blog node should describe what the URL shows.
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `https://safestorage.ae${pageHref(page)}#blog`,
    name: "SafeStorage Dubai Blog",
    description: "Expert storage tips, guides, and insights from SafeStorage Dubai.",
    url: `https://safestorage.ae${pageHref(page)}`,
    publisher: { "@id": "https://safestorage.ae/#organization" },
    inLanguage: "en-AE",
    blogPost: pagePosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://safestorage.ae/blog/${post.slug}`,
      datePublished: post.date,
      image: post.image,
      author: { "@type": "Organization", name: BLOG_AUTHOR },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://safestorage.ae/blog" },
      ...(page > 1
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: `Page ${page}`,
              item: `https://safestorage.ae${pageHref(page)}`,
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <SchemaScript schema={[blogSchema, breadcrumbSchema]} />
      <BlogPage initialBlogs={posts} currentPage={page} totalPages={totalPages} />

      {/* Server-rendered complete article index — ensures ALL blog posts have at least
          one internal link regardless of which page of the listing a crawler lands on. */}
      <section style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#0A2463", marginBottom: "20px" }}>
            All Storage Articles &amp; Guides ({posts.length})
          </h2>
          <ul style={{ columns: "2", columnGap: "32px", listStyle: "none", padding: 0, margin: 0 }}>
            {posts.map((post) => {
              if (!post.slug) return null
              return (
                <li key={post.id || post.slug} style={{ breakInside: "avoid", marginBottom: "8px" }}>
                  <a
                    href={`/blog/${post.slug}`}
                    style={{ color: "#0A2463", textDecoration: "none", fontSize: "0.875rem", lineHeight: "1.5" }}
                  >
                    {post.title}
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
