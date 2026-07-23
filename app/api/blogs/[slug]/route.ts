import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogs, updateBlog, deleteBlog } from '@/lib/blog-db'

export const revalidate = 300

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

    // Served from the local EC2 MariaDB (see lib/blog-db.ts).
    const blogs: any[] = await getAllBlogs()

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

// UPDATE blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await params
    const body = await request.json()
    const postId = parseInt(body.blog_id || body.post_id)
    if (!postId) {
      return NextResponse.json({ status: 'error', message: 'Missing blog id' }, { status: 400 })
    }

    const ok = await updateBlog(postId, {
      title: body.title,
      description: body.content ?? body.description,
      seo_title: body.meta_title ?? body.seo_title,
      seo_desc: body.meta_description ?? body.seo_desc,
      tags: body.tags,
      post_category: body.category ?? body.post_category,
      post_images: body.post_images,
      status: body.status,
    })

    return NextResponse.json({ status: ok ? 'success' : 'error' })
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
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    // The [slug] segment carries the blog_id for delete.
    const postId = parseInt(slug)
    if (!postId) {
      return NextResponse.json({ status: 'error', message: 'Invalid blog id' }, { status: 400 })
    }
    const ok = await deleteBlog(postId)
    return NextResponse.json({ status: ok ? 'success' : 'error' })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    )
  }
}