import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = 'https://safestorage.in/back/app'

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}/get_all_blogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data
    const formData = await request.formData()
    
    // Generate slug from title if not provided
    const generateSlug = (title: string) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
    }
    
    // Get form fields
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const metaTitle = formData.get('meta_title') as string || title
    const metaDescription = formData.get('meta_description') as string
    const tags = formData.get('tags') as string
    const author = formData.get('author') as string || 'SafeStorage Team'
    const category = formData.get('category') as string || 'General'
    const featuredImage = formData.get('featured_image') as string || ''
    const excerpt = formData.get('excerpt') as string || ''
    
    // Prepare extra_data
    const extraData = {
      author: author,
      category: category,
      featured_image: featuredImage,
      excerpt: excerpt,
      page_title: title,
      read_time: '5 min read',
      created_by: 'admin'
    }
    
    // Create new FormData for backend
    const backendFormData = new FormData()
    backendFormData.append('content_type', 'post')
    backendFormData.append('content', content)
    backendFormData.append('meta_title', metaTitle)
    backendFormData.append('meta_description', metaDescription)
    backendFormData.append('slug', generateSlug(metaTitle))
    backendFormData.append('tags', tags)
    backendFormData.append('extra_data', JSON.stringify(extraData))
    backendFormData.append('status', '1')
    
    // Handle multiple image uploads
    const images = formData.getAll('images') as File[]
    if (images && images.length > 0) {
      // Add each image to FormData as 'image[]' for PHP array handling
      images.forEach((image, index) => {
        backendFormData.append('image[]', image, image.name)
      })
    }
    
    // Send to backend with FormData
    const response = await fetch(`${BACKEND_URL}/insert_blog_content`, {
      method: 'POST',
      body: backendFormData, // Send as FormData
    })

    const responseText = await response.text()
    
    // Handle the response
    if (response.ok && responseText.includes('success')) {
      return NextResponse.json({
        status: 'success',
        message: 'Blog post created successfully'
      })
    } else {
      return NextResponse.json({
        status: 'error',
        message: responseText || 'Failed to create blog post'
      }, { status: response.status || 400 })
    }

  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}