import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = 'https://safestorage.in/back/app'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check if the slug is a numeric ID
    const isId = /^\d+$/.test(params.slug)
    
    const url = isId 
      ? `${BACKEND_URL}/get_blog/${params.slug}` 
      : `${BACKEND_URL}/get_blog_by_slug/${params.slug}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return NextResponse.json(data)
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