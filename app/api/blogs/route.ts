import { NextRequest, NextResponse } from 'next/server'
import { toBlogPost } from '@/lib/blog-post'

// The feed the site actually renders from. Note it is NOT under /back/app --
// that is a different system (17 rows, last written 2025-12-31, blog_id/content
// schema) which has never held the Dubai posts.
const FEED = 'https://safestorage.in/get_blog_content'

// GET the blog list for the admin dashboard.
//
// Proxied here rather than fetched from the browser for two reasons. FEED sends
// no Access-Control-Allow-Origin, so a client-side fetch is blocked outright --
// /back/app/* does send it, which is the whole reason this dashboard ended up
// pointed at the wrong system. And the feed is 8.5 MB because every row carries
// its full article body; the list needs a title and an excerpt, so the body is
// dropped here instead of being shipped to the browser on every page load.
//
// This replaces a call to get_all_blogs, which now 404s with an HTML error page
// -- response.json() threw on the HTML and every request 500ed.
export async function GET(request: NextRequest) {
  try {
    const response = await fetch(FEED, { cache: 'no-store' })
    if (!response.ok) throw new Error(`feed returned HTTP ${response.status}`)

    const rows = await response.json()
    if (!Array.isArray(rows)) throw new Error('feed did not return an array')

    const posts = rows
      .filter((row: any) => String(row.status ?? '1') === '1')
      // The feed arrives unordered; newest first is what surfaces a post that
      // was just edited, which is the reason to open this page at all.
      .sort((a: any, b: any) =>
        String(b.created_at || '').localeCompare(String(a.created_at || ''))
      )
      .map((row: any) => {
        // toBlogPost is the mapper /blog/[slug] and the listing use, so the slug
        // here is the address the post really lives at.
        const p = toBlogPost(row)
        return {
          id: p.id,
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          category: p.categories[0],
          author: p.author.name,
          date: p.date,
          image: p.image,
          readTime: p.readTime,
          views: p.views,
          likes: p.likes,
        }
      })

    return NextResponse.json({ status: 'success', count: posts.length, data: posts })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { status: 'error', error: `Failed to fetch blogs: ${(error as Error).message}` },
      { status: 502 }
    )
  }
}
