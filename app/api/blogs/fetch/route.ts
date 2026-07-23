import { NextResponse } from 'next/server'
import { getAllBlogs } from '@/lib/blog-db'

export const revalidate = 300

export async function GET() {
  try {
    // Served from the local EC2 MariaDB (see lib/blog-db.ts).
    const data = await getAllBlogs()

    return NextResponse.json(
      { status: 'success', data },
      {
        headers: {
          'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching blogs from DB:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blogs', data: [] },
      { status: 500 }
    )
  }
}
