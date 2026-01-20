import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = 'https://safestorage.in'

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
  { params }: { params: { slug: string } }
) {
  try {
    const targetSlug = params.slug
    console.log('Looking for blog with slug:', targetSlug)

    // Fetch all blogs and find the one with matching slug
    const response = await fetch(`${BACKEND_URL}/get_blog_content`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
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
      const blogSlug = generateSlug(blogTitle)
      const isMatch = blogSlug === targetSlug
      if (blogTitle.toLowerCase().includes('villa')) {
        console.log('Villa blog:', blogTitle, '-> slug:', blogSlug, 'match:', isMatch)
      }
      return isMatch
    })
    
    if (blog) {
      return NextResponse.json({
        status: 'success',
        data: blog
      })
    } else {
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Blog not found',
          error: 'Blog post with this slug does not exist'
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

// UPDATE blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()
    
    const formData = new URLSearchParams()
    Object.keys(body).forEach(key => {
      if (body[key] !== undefined && body[key] !== null) {
        formData.append(key, body[key])
      }
    })

    const response = await fetch(`${BACKEND_URL}/update_blog/${body.blog_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    )
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Assuming the slug here is the blog_id for delete
    const response = await fetch(`${BACKEND_URL}/delete_blog/${params.slug}`, {
      method: 'POST', // CodeIgniter often uses POST for delete operations
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    )
  }
}