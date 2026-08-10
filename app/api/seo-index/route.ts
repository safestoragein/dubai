import { NextRequest, NextResponse } from 'next/server'
import { getStatus, runIndexing } from '@/lib/seo-indexing'

// Google Indexing API runner. Cron calls this every 5 minutes; it works out
// which blog posts changed since we last told Google and submits those.
//
//   POST /api/seo-index?secret=<SEO_INDEX_SECRET>          submit
//   POST /api/seo-index?secret=<...>&dry=1                 preview, sends nothing
//   GET  /api/seo-index?secret=<...>                       status, sends nothing
//
// POST-only for submitting on purpose: a GET would let a link, a preloader or a
// crawler spend irreversible quota, and one of the things this can send is
// URL_DELETED.
//
// Runs on the Node runtime and never statically: it signs a JWT with
// node:crypto and talks to MariaDB, neither of which exists on the edge.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// A dedicated secret, falling back to the one the blog webhooks already use so
// this works on the current server without a new variable being set first.
function authorised(request: NextRequest): boolean {
  const expected = process.env.SEO_INDEX_SECRET || process.env.REVALIDATE_SECRET
  if (!expected) return false
  return request.nextUrl.searchParams.get('secret') === expected
}

export async function POST(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ status: 'error', message: 'Invalid secret' }, { status: 401 })
  }

  const dry = request.nextUrl.searchParams.get('dry') === '1'

  try {
    const summary = await runIndexing(!dry, dry ? 'dry-run' : 'cron')
    // A failed submission is a real outcome worth a non-200 so cron's exit code
    // and any uptime check notice it, but the body still carries the detail.
    return NextResponse.json(
      { status: summary.failed > 0 ? 'partial' : 'success', ...summary },
      { status: summary.failed > 0 ? 502 : 200 }
    )
  } catch (error) {
    console.error('seo-index run error:', error)
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ status: 'error', message: 'Invalid secret' }, { status: 401 })
  }

  try {
    return NextResponse.json({ status: 'success', ...(await getStatus()) })
  } catch (error) {
    console.error('seo-index status error:', error)
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    )
  }
}
