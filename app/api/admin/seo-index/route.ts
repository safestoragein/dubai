import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getStatus, runIndexing, serviceAccountStatus } from '@/lib/seo-indexing'
import { getLedgerRows, getStats, quotaUsedToday } from '@/lib/seo-index-db'
import { QUOTA } from '@/lib/seo-indexing'

// Data behind /admin/dashboard/seo-index.
//
// Gated on the admin cookie, not the cron secret: middleware.ts deliberately
// excludes /api/admin from its redirect (so the login flow can work), which
// means every route under it has to check for itself.
//
//   GET  ?queue=1   include what the next run would submit (refetches the feed)
//   POST ?dry=1     preview a run          POST  run it for real
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 })
  }

  const withQueue = request.nextUrl.searchParams.get('queue') === '1'

  try {
    // The ledger is cheap and always loads. The queue is not: working out what
    // is due means pulling the 8.5 MB feed, so it is opt-in and the page asks
    // for it separately rather than paying for it on every poll.
    const [stats, rows, used] = await Promise.all([
      getStats(),
      getLedgerRows(500),
      quotaUsedToday(),
    ])

    // Reported on every poll, not just when the queue is asked for: reading the
    // key is a local operation, and a missing or broken one is the single most
    // useful thing the page can say. It used to ride along with the queue, so
    // the warning only appeared after an 8.5 MB feed fetch had succeeded --
    // exactly the request most likely to be slow or failing at the same time.
    const key = serviceAccountStatus()
    const body: Record<string, unknown> = {
      status: 'success',
      stats,
      rows,
      quota: { used, limit: QUOTA },
      service_account: key.client_email,
      service_account_source: key.source,
      service_account_error: key.error,
    }

    if (withQueue) {
      try {
        const s = await getStatus()
        body.queue = s.queue
        body.feed_posts = s.feed_posts
        body.retire_old = s.retire_old
      } catch (e) {
        // A feed or key problem must not blank the page — the history below is
        // still the useful half.
        body.queue_error = (e as Error).message
      }
    }

    return NextResponse.json(body)
  } catch (error) {
    console.error('admin seo-index error:', error)
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 })
  }

  const dry = request.nextUrl.searchParams.get('dry') === '1'

  try {
    const summary = await runIndexing(!dry, dry ? 'dry-run' : 'manual')
    return NextResponse.json({ status: 'success', ...summary })
  } catch (error) {
    console.error('admin seo-index run error:', error)
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    )
  }
}
