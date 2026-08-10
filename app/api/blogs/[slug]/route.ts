import { NextRequest, NextResponse } from 'next/server'

// Cache this route at the Vercel edge for 5 minutes
export const revalidate = 300

// The one blog source. Named for what it is: "BACKEND_URL" invited the reading
// that it meant the /back/app back office, which is a different content store
// and has never held the Dubai posts.
//
// Read-only. The PUT and DELETE handlers that used to live below called
// /update_blog/<id> and /delete_blog/<slug>, both of which now 404 -- and blog
// publishing does not belong in this dashboard in any case.
const FEED = 'https://safestorage.in'

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

    // Fetch all blogs and find the one with matching slug
    const response = await fetch(`${FEED}/get_blog_content`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    })

    const data = await response.json()
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

    // Find blog by slug (generate slug from title since new API doesn't have slug field)
    const blog = blogs.find((b: any) => {
      const blogTitle = b.title || b.seo_title || ''
      const blogPostId = parseInt(b.post_id) || 0
      const idMatch = targetSlug.match(/^(\d+)-/)
      if (idMatch) return parseInt(idMatch[1]) === blogPostId
      return generateSlug(blogTitle) === targetSlug
    })
    
    if (blog) {
      return NextResponse.json({
        status: 'success',
        data: blog
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
