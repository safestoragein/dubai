import { NextRequest, NextResponse } from 'next/server'
import { getBlogFeed, publishedOnly } from '@/lib/blog-feed'
import { unlinkDeadBlogLinks } from '@/lib/blog-meta'

// Cache this route at the Vercel edge for 5 minutes
export const revalidate = 300

// The one blog source is safestorage.in/get_blog_content, reached through
// lib/blog-feed.ts. Not the /back/app back office, which is a different content
// store and has never held the Dubai posts.
//
// Read-only. The PUT and DELETE handlers that used to live below called
// /update_blog/<id> and /delete_blog/<slug>, both of which now 404 -- and blog
// publishing does not belong in this dashboard in any case.

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const targetSlug = slug
    console.log('Looking for blog with slug:', targetSlug)

    // Fetch all blogs and find the one with matching slug.
    // Shared memo: `next: { revalidate: 300 }` never cached this -- the payload
    // is ~11.7 MB and Next's data cache rejects entries over 2 MB, so every
    // request re-downloaded the whole feed from the India box.
    const data = publishedOnly(await getBlogFeed())
    console.log('Backend response type:', Array.isArray(data) ? 'array' : typeof data, 'Length:', Array.isArray(data) ? data.length : 'N/A')

    // Handle different response formats - backend returns array directly
    let blogs: any[] = []
    if (Array.isArray(data)) {
      blogs = data
    } else if (data.status === 'success' && data.data) {
      blogs = Array.isArray(data.data) ? data.data : [data.data]
    } else if (data.all_content) {
      blogs = Array.isArray(data.all_content) ? data.all_content : [data.all_content]
    }

    console.log('Total blogs to search:', blogs.length)

    // TITLE FIRST, id-prefix only as a fallback — the same order /blog/[slug]
    // uses. This route read it the other way round, and blog-post-detail.tsx
    // re-fetches through it on mount: a post titled "10 Best Movers and Packers
    // in Dubai 2026" was served correctly by the server, then `/^(\d+)-/`
    // matched it to post id 10 here and the client replaced the article with a
    // different one a moment after the page appeared. Four posts did that.
    const blog =
      blogs.find((b: any) => generateSlug(b.title || b.seo_title || '') === targetSlug) ??
      (() => {
        const idMatch = targetSlug.match(/^(\d+)-/)
        if (!idMatch) return undefined
        const wanted = parseInt(idMatch[1])
        return blogs.find((b: any) => (parseInt(b.post_id) || 0) === wanted)
      })()

    if (blog) {
      // `blogs` is publishedOnly(), so this is the same definition of "served"
      // the page uses. A link to a post that has since been unpublished is
      // unwrapped rather than handed to the client as a 404.
      const liveSlugs = new Set(blogs.map((b: any) => generateSlug(b.title || b.seo_title || '')))
      return NextResponse.json({
        status: 'success',
        data: {
          ...blog,
          description: unlinkDeadBlogLinks(blog.description || '', (s: string) => liveSlugs.has(s)),
        },
      })
    } else {
      // Return debug info to help troubleshoot
      const allSlugs = blogs.map((b: any) => {
        const t = b.title || b.seo_title || ''
        return generateSlug(t)
      })
      return NextResponse.json(
        {
          status: 'error',
          message: 'Blog not found',
          error: 'Blog post with this slug does not exist',
          debug: {
            searchedSlug: targetSlug,
            totalBlogs: blogs.length,
            availableSlugs: allSlugs.slice(0, 5)
          }
        },
        { status: 404 }
      )
    }
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    )
  }
}
