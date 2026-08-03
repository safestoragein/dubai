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

export function constructImageUrl(postImages: string | null | undefined): string {
  if (!postImages) return "/blog-placeholder.jpg"
  if (postImages.startsWith("http://") || postImages.startsWith("https://")) return postImages
  if (postImages.startsWith("post_images/")) return `https://safestorage.in/${postImages}`
  return `https://safestorage.in/post_images/${postImages}`
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
    excerpt: blog.seo_desc || "",
    author: { name: "SafeStorage Team" },
    categories: [blog.post_category || "Storage Tips"],
    date: blog.created_at || new Date().toISOString(),
    image: constructImageUrl(blog.post_images),
    readTime: "5 min read",
    likes: getConsistentLikes(postId),
    views: getConsistentViews(postId),
    comments: [],
  }
}

// Newest first by publish date. post_id is NOT a proxy for date — rows are synced
// from the dashboard, so ids and created_at diverge. Falls back to post_id for
// same-day posts and for rows with an unparseable date.
export function sortNewestFirst(posts: ListingPost[]): ListingPost[] {
  return [...posts].sort((a, b) => {
    const ta = new Date(a.date).getTime()
    const tb = new Date(b.date).getTime()
    const va = Number.isNaN(ta) ? 0 : ta
    const vb = Number.isNaN(tb) ? 0 : tb
    return vb - va || b.id - a.id
  })
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
