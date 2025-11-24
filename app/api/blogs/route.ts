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
    
    // Create FormData for CodeIgniter backend matching the expected fields
    const formData = new URLSearchParams()
    formData.append('content_type', 'post')
    formData.append('content', body.content || '')
    formData.append('meta_title', body.title || '')
    formData.append('meta_description', body.meta_description || '')
    formData.append('tags', body.tags || '')
    formData.append('author', body.author || 'SafeStorage Team')
    formData.append('category', body.category || 'General')
    formData.append('featured_image', body.featured_image || '')
    formData.append('excerpt', body.meta_description || '')

    const response = await fetch(`${BACKEND_URL}/insert_blog_post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    const responseText = await response.text()
    
    // Try to parse as JSON, fallback to text
    let data
    try {
      data = JSON.parse(responseText)
    } catch (e) {
      // If response is not JSON, create a standard response
      if (response.ok) {
        data = { status: 'success', message: 'Blog post created successfully' }
      } else {
        data = { status: 'error', message: responseText || 'Failed to create blog post' }
      }
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}