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
    
    // Create FormData for CodeIgniter backend
    const formData = new URLSearchParams()
    formData.append('title', body.title || '')
    formData.append('content', body.content || '')
    formData.append('meta_description', body.meta_description || '')
    formData.append('tags', body.tags || '')
    formData.append('author', body.author || 'SafeStorage Team')
    formData.append('category', body.category || 'General')
    formData.append('featured_image', body.featured_image || '')

    const response = await fetch(`${BACKEND_URL}/insert_blog_post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}