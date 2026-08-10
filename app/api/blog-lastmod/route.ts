import { NextRequest, NextResponse } from "next/server"
import { getStats, refreshLastmod } from "@/lib/blog-lastmod"

// Keeps the blog sitemap's <lastmod> values current. Cron calls this every 10
// minutes; it compares the live feed against the stored content hashes and
// moves a timestamp only for posts that actually changed.
//
//   POST /api/blog-lastmod?secret=<SEO_INDEX_SECRET>   refresh
//   GET  /api/blog-lastmod?secret=<...>                stats, changes nothing
//
// POST for the refresh so a crawler or preloader cannot rewrite lastmod values
// by following a link. Nothing here talks to Google — it only maintains the
// table /sitemap-blogs.xml reads, and spends no Indexing API quota.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Shares the secret with /api/seo-index deliberately: both are the same
// operator running the same blog pipeline, and a second variable is a second
// thing to forget to set on the server.
function authorised(request: NextRequest): boolean {
  const expected = process.env.SEO_INDEX_SECRET || process.env.REVALIDATE_SECRET
  if (!expected) return false
  return request.nextUrl.searchParams.get("secret") === expected
}

export async function POST(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ status: "error", message: "Invalid secret" }, { status: 401 })
  }

  try {
    const summary = await refreshLastmod()
    return NextResponse.json({ status: "success", ...summary })
  } catch (error) {
    console.error("blog-lastmod refresh error:", error)
    return NextResponse.json(
      { status: "error", message: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ status: "error", message: "Invalid secret" }, { status: 401 })
  }

  try {
    return NextResponse.json({ status: "success", ...(await getStats()) })
  } catch (error) {
    console.error("blog-lastmod stats error:", error)
    return NextResponse.json(
      { status: "error", message: (error as Error).message },
      { status: 500 }
    )
  }
}
