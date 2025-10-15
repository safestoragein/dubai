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
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching blogs from backend:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}