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
    const body = await request.json()
    
    // Generate slug from title if not provided
    const generateSlug = (title: string) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-')
    }
    
    // Prepare extra_data with additional fields
    const extraData = {
      author: body.author || 'SafeStorage Team',
      category: body.category || 'General',
      featured_image: body.featured_image || '',
      excerpt: body.excerpt || '',
      page_title: body.title || '', // H1 title for the page
      read_time: '5 min read',
      created_by: 'admin'
    }
    
    // Create FormData for CodeIgniter backend matching the insert_blog_content endpoint
    const formData = new URLSearchParams()
    formData.append('content_type', 'post')
    formData.append('content', body.content || '')
    formData.append('meta_title', body.meta_title || body.title || '')
    formData.append('meta_description', body.meta_description || '')
    formData.append('slug', body.slug || generateSlug(body.meta_title || body.title || ''))
    formData.append('tags', body.tags || '')
    formData.append('extra_data', JSON.stringify(extraData))
    formData.append('status', '1') // Active status

    const response = await fetch(`${BACKEND_URL}/insert_blog_content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    const responseText = await response.text()
    
    // Handle the response - the endpoint returns "success" on success
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