// Shared data layer for the paginated /blog listing.
//
// IMPORTANT: the post body (`description` in the feed) is deliberately NOT mapped
// here. The listing only ever renders `excerpt`, but the view is a client component,
// so every prop crosses the server->client boundary and gets serialised into the RSC
// flight payload embedded in the HTML. Carrying the body as `content` put all 263
// article bodies (~8.8 MB escaped) into <script> tags that nothing rendered and blew
// /blog up to 12 MB. Only /blog/[slug] needs the body, and it loads its own.
//
// Kept free of "server-only" on purpose: the client listing imports POSTS_PER_PAGE
// so the server slice and the hydrated slice can never drift apart.

import { getStaticListingPosts } from "@/lib/static-blog-posts"
import { blogImageUrl } from "@/lib/blog-image"
import { normaliseFeedContent, readTimeFromContent, resolveCategory } from "@/lib/blog-meta"

export const POSTS_PER_PAGE = 50

export interface ListingPost {
  id: number
  slug: string
  title: string
  excerpt: string
  author: { name: string }
  categories: string[]
  date: string
  image: string
  readTime: string
  likes: number
  views: number
  comments: any[]
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Serve blog images from safestorage.ae rather than hotlinking the safestorage.in
// India domain. blogImageUrl() rewrites to /blog-images/<file>, which next.config
// proxies to the origin store — the bytes are unchanged but crawlers and social
// see .ae URLs, and the image carries SEO value for this domain.
export function constructImageUrl(postImages: string | null | undefined): string {
  return blogImageUrl(postImages) || "/blog-placeholder.jpg"
}

export function getConsistentLikes(postId: number): number {
  return ((postId * 2654435761) % 100) + 50
}

export function getConsistentViews(postId: number): number {
  return ((postId * 1597334677) % 400) + 100
}

export function mapListingPost(blog: any): ListingPost {
  const title = blog.title || blog.seo_title || "Untitled"
  const postId = parseInt(blog.post_id) || 1
  return {
    id: postId,
    slug: generateSlug(title),
    title,
    excerpt: normaliseFeedContent(blog.seo_desc),
    author: { name: "SafeStorage Dubai Editorial Team" },
    categories: [resolveCategory(blog.post_category, title)],
    // The feed row carries the body, so read time is measured here — the body
    // itself is still not mapped onto ListingPost (see the note at the top).
    date: blog.created_at || new Date().toISOString(),
    image: constructImageUrl(blog.post_images),
    readTime: readTimeFromContent(blog.description),
    likes: getConsistentLikes(postId),
    views: getConsistentViews(postId),
    comments: [],
  }
}

// Highest post_id first — the newest row in the dashboard leads the listing.
// Deliberately NOT sorted by created_at: rows are synced from safestorage.in and
// their dates are edited/backdated, so publish date does not track insertion order.
export function sortNewestFirst(posts: ListingPost[]): ListingPost[] {
  return [...posts].sort((a, b) => b.id - a.id)
}

// Raw feed rows. Returns [] on any error so the page degrades to the client-side
// refetch instead of throwing.
export async function fetchBlogPosts(): Promise<any[]> {
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

// Feed posts plus the hand-written static routes under app/blog/<slug>/. The static
// posts are not in the feed, so without this merge nothing on the site links to them
// and they are orphan URLs reachable only from the sitemap.
export async function getListingPosts(): Promise<ListingPost[]> {
  const raw = await fetchBlogPosts()
  const staticPosts = getStaticListingPosts()
  const staticSlugs = new Set(staticPosts.map((p) => p.slug))
  // A static route always wins a slug clash — Next.js serves it over /blog/[slug].
  const feedPosts = raw.map(mapListingPost).filter((p) => !staticSlugs.has(p.slug))
  return sortNewestFirst([...staticPosts, ...feedPosts])
}

export function getTotalPages(postCount: number): number {
  return Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE))
}

// Page 1 stays on the bare /blog URL so the canonical listing URL never changes.
export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`
}
