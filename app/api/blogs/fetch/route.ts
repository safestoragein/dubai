import { NextResponse } from 'next/server'

// Cache this route at the Vercel edge for 5 minutes
export const revalidate = 300

export async function GET() {
  try {
    const response = await fetch('https://safestorage.in/get_blog_content', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    })

    const data = await response.json()

    const formattedResponse = {
      status: 'success',
      data: Array.isArray(data) ? data : []
    }

    return NextResponse.json(formattedResponse, {
      headers: {
        'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error fetching blogs from backend:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blogs', data: [] },
      { status: 500 }
    )
  }
}
