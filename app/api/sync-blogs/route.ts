import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { syncBlogsFromFeed } from '@/lib/blog-sync'

// Webhook the safestorage.in PHP dashboard calls right after a blog is added or
// edited, so the change appears on safestorage.ae within seconds instead of
// waiting for the cron. Pulls content + images into the Dubai server, then
// revalidates the blog pages. Protected by REVALIDATE_SECRET.
//
//   POST https://safestorage.ae/api/sync-blogs?secret=<REVALIDATE_SECRET>
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ status: 'error', message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const result = await syncBlogsFromFeed()
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    revalidatePath('/sitemap.xml')
    return NextResponse.json({ status: 'success', ...result })
  } catch (error) {
    console.error('sync-blogs webhook error:', error)
    return NextResponse.json({ status: 'error', message: 'Sync failed' }, { status: 500 })
  }
}

// Allow a plain GET too (some dashboards can only fire a GET webhook).
export async function GET(request: NextRequest) {
  return POST(request)
}
