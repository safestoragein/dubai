import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://safestorage.in/back/app/get_blog_content', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })
    
    const data = await response.json()
    
    // The API returns an array directly, so wrap it in our expected format
    const formattedResponse = {
      status: 'success',
      data: Array.isArray(data) ? data : []
    }
    
    return NextResponse.json(formattedResponse)
  } catch (error) {
    console.error('Error fetching blogs from backend:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blogs', data: [] },
      { status: 500 }
    )
  }
}