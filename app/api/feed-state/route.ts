import { NextResponse } from "next/server"
import { feedStateReport } from "@/lib/feed-state"

// The ROUTE-handler bundle's view of the blog-feed memo.
// Compare with /feed-state, which reports the RSC bundle's view: equal
// `generation` means one shared memo, different means the split is back.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json(feedStateReport("route-handler"), {
    headers: { "Cache-Control": "no-store" },
  })
}
