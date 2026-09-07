import { NextResponse } from "next/server"
import { getBlogFeed, publishedOnly } from "@/lib/blog-feed"
import { toBlogPost } from "@/lib/blog-post"

// Everything the browser needs about every post EXCEPT the article body.
//
// Why this exists
// ---------------
// The article body (`description` in the feed) is ~8.1 MB of the ~8.7 MB that
// /api/blogs/fetch returns, and no client caller renders it: the listing shows
// excerpts, and the article page only wants two related-post cards plus the
// slugs getTagUrl() matches against. Every blog page view was pulling all 281
// bodies into the browser -- Googlebot included, which spent ~0.8 GB/day here
// and timed out often enough to fail Search Console's live test.
//
// Same mapper as the server (toBlogPost) so the shapes cannot drift; only
// `content` is dropped. ~160 KB instead of ~8.7 MB.
export const dynamic = "force-dynamic"

// Mapping 281 rows through toBlogPost costs ~200 ms, and this route is hit on
// every blog page view. getBlogFeed() hands back the same array identity until
// its TTL expires, so that reference is the cache key: one map per feed refresh
// instead of one per request. Two vCPUs do not have 200 ms of event loop to
// spare per visitor.
let memo: { rows: any[]; data: any[] } | null = null

function summarise(rows: any[]) {
  if (memo && memo.rows === rows) return memo.data
  const data = rows.map((row) => ({ ...toBlogPost(row), content: "" }))
  memo = { rows, data }
  return data
}

export async function GET() {
  try {
    const data = summarise(publishedOnly(await getBlogFeed()))

    return NextResponse.json(
      { status: "success", data },
      {
        headers: {
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1800",
        },
      },
    )
  } catch (error) {
    console.error("Error building blog summaries:", error)
    return NextResponse.json(
      { status: "error", message: "Failed to fetch blogs", data: [] },
      { status: 500 },
    )
  }
}
