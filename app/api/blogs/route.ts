import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogs, insertBlog } from '@/lib/blog-db'
import { saveBlogImage } from '@/lib/blog-upload'

// GET all blogs (from local EC2 MariaDB)
export async function GET() {
  try {
    const data = await getAllBlogs()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

// POST new blog (writes to local DB; uploaded image saved to the blog-images dir)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const title = (formData.get('title') as string) || ''
    const content = (formData.get('content') as string) || ''
    const metaTitle = (formData.get('meta_title') as string) || title
    const metaDescription = (formData.get('meta_description') as string) || ''
    const tags = (formData.get('tags') as string) || ''
    const category = (formData.get('category') as string) || 'General'
    const featuredImage = (formData.get('featured_image') as string) || ''

    // Save the first uploaded image, if any; else fall back to a provided URL.
    let postImages = featuredImage
    const images = formData.getAll('images').filter((v): v is File => v instanceof File && v.size > 0)
    if (images.length > 0) {
      postImages = await saveBlogImage(images[0])
    }

    const postId = await insertBlog({
      title,
      description: content,
      seo_title: metaTitle,
      seo_desc: metaDescription,
      tags,
      post_category: category,
      post_images: postImages,
      status: '1',
    })

    return NextResponse.json({
      status: 'success',
      message: 'Blog post created successfully',
      post_id: postId,
    })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json({ status: 'error', message: 'Failed to create blog post' }, { status: 500 })
  }
}
