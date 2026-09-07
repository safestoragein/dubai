import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { syncBlogsFromFeed } from '@/lib/blog-sync'
import { invalidateFeed } from '@/lib/blog-feed'
import { publishSideEffects, revalidateRecentPostPaths } from '@/lib/blog-publish'

// Webhook the safestorage.in PHP dashboard calls right after a blog is added or
// edited (Manage_posts::notify_dubai_sync), so the change appears on
// safestorage.ae within seconds instead of waiting for the cron.
// Protected by REVALIDATE_SECRET.
//
// ORDER MATTERS. The blog pages render from the live safestorage.in feed, so
// dropping the feed memo and marking the pages stale is the whole of what makes
// an edit go live -- and it must not queue behind syncBlogsFromFeed(), which
// pulls ~12 MB plus any new images and takes minutes. It used to run second,
// which is why a save still took ~10 minutes to appear: the caller's curl gives
// up after 20 s, so the revalidation could be abandoned before it was reached.
// The row/image sync still runs after, and the */5 cron remains the backstop.
//
//   POST https://safestorage.ae/api/sync-blogs?secret=<REVALIDATE_SECRET>
//
//   POST https://safestorage.ae/api/sync-blogs?secret=<REVALIDATE_SECRET>
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ status: 'error', message: 'Invalid secret' }, { status: 401 })
  }

  // Cheap and first: this is what publishes the edit.
  invalidateFeed()
  revalidatePath('/blog')
  revalidatePath('/blog/[slug]', 'page')
  revalidatePath('/sitemap.xml')
  revalidatePath('/sitemap-blogs.xml')

  // The route-pattern revalidate above does NOT clear the individual prerendered
  // /blog/<slug> pages, so the edited post kept serving stale HTML. Awaited, and
  // here rather than in the background pass, because revalidatePath needs the
  // request store. One feed read (~0.15 s, and the memo was just dropped anyway).
  await revalidateRecentPostPaths()

  // Not awaited, by design. Reconciles the sitemap and tells Google, both of
  // which used to wait on a cron tick -- up to ten minutes for a <loc> on a post
  // whose page was already live. The caller's cURL gives up after 20 s and this
  // starts with an ~11.7 MB feed pull, so it must not be in front of the
  // response. See lib/blog-publish.ts for why that is safe on this server.
  publishSideEffects('webhook')

  // Then the slow part: rows + images into the local store. A failure here must
  // not report the whole call as failed -- the content is already live.
  try {
    const result = await syncBlogsFromFeed()
    return NextResponse.json({ status: 'success', revalidated: true, ...result })
  } catch (error) {
    console.error('sync-blogs webhook: revalidated, but the row/image sync failed:', error)
    return NextResponse.json(
      { status: 'partial', revalidated: true, message: 'Pages revalidated; row/image sync failed' },
      { status: 200 }
    )
  }
}

// Allow a plain GET too (some dashboards can only fire a GET webhook).
export async function GET(request: NextRequest) {
  return POST(request)
}
