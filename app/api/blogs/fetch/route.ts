import { NextResponse } from 'next/server'
import { getBlogFeed } from '@/lib/blog-feed'

// Full feed, bodies included. Prefer /api/blogs/summaries from the browser --
// this response is ~8.7 MB and nothing in the UI renders every body.
//
// The old `next: { revalidate: 300 }` here never cached anything: the upstream
// payload is ~11.7 MB and Next's data cache rejects entries over 2 MB, so every
// single call re-downloaded it from safestorage.in. getBlogFeed() memoises it in
// the process instead.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const data = await getBlogFeed()

    return NextResponse.json(
      { status: 'success', data },
      {
        headers: {
          'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
        },
      },
    )
  } catch (error) {
    console.error('Error fetching blogs from backend:', error)
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch blogs', data: [] },
      { status: 500 },
    )
  }
}
