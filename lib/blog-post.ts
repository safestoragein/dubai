// One mapper from a raw feed row to the shape the article UI renders.
//
// Why this is shared
// ------------------
// /blog/[slug] already fetches the post on the server — it needs the row for
// generateMetadata, the canonical redirect and the BlogPosting schema. It then
// handed the slug to a client component that fetched the very same row again
// from /api/blogs/[slug] and rendered a spinner until it arrived, so the HTML
// every crawler received for all 284 articles was:
//
//   <h1 class="sr-only">…</h1>
//   <p>Loading article…</p>
//
// The body, the byline and the visible date existed only after JavaScript ran.
// Server and client now build the post through this one function, so the server
// can render the article into the HTML and the client hydrates the identical
// object instead of re-fetching it.

import { blogImageUrl } from "@/lib/blog-image"
import { normaliseFeedContent, readTimeFromContent, resolveCategory } from "@/lib/blog-meta"
import { BLOG_AUTHOR } from "@/lib/company-facts"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  slug: string
  author: { name: string; avatar?: string; role?: string }
  categories: string[]
  image?: string
  readTime?: string
  likes: number
  views: number
  comments?: any[]
  date: string
  tags?: string[]
}

export function blogSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Deterministic so server and client agree — these are engagement ornaments,
// not measurements, and a random value here would break hydration.
export function consistentLikes(postId: number): number {
  return ((postId * 2654435761) % 100) + 50
}

export function consistentViews(postId: number): number {
  return ((postId * 1597334677) % 400) + 100
}

function parseTags(tags: unknown): string[] {
  if (!tags) return []
  if (Array.isArray(tags)) return tags as string[]
  return String(tags)
    .split("|")
    .map((t) => t.trim())
    .filter(Boolean)
}

/**
 * Build the rendered post from a feed row. `fallbackDate` keeps the output
 * stable: the old call sites defaulted a missing `created_at` to
 * `new Date().toISOString()`, which produced a different value on the server
 * than on the client and would now be a hydration mismatch on every render.
 */
export function toBlogPost(blog: any, fallbackDate = ""): BlogPost {
  const title = blog?.title || blog?.seo_title || "Untitled"
  const id = parseInt(blog?.post_id) || 0

  return {
    id,
    slug: blogSlug(title),
    title,
    excerpt: normaliseFeedContent(blog?.seo_desc),
    content: normaliseFeedContent(blog?.description),
    author: { name: BLOG_AUTHOR },
    categories: [resolveCategory(blog?.post_category, title)],
    date: blog?.created_at || fallbackDate,
    image: blogImageUrl(blog?.post_images) || "/blog-placeholder.jpg",
    readTime: readTimeFromContent(blog?.description),
    likes: consistentLikes(id),
    views: consistentViews(id),
    comments: [],
    tags: parseTags(blog?.tags),
  }
}
