import type { Metadata } from "next"
import { feedStateReport } from "@/lib/feed-state"

// The RSC (page) bundle's view of the same memo. Its whole purpose is to be
// compared with /api/feed-state — see lib/feed-state.ts.
export const dynamic = "force-dynamic"
export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function FeedStatePage() {
  return (
    <pre style={{ padding: 16, fontFamily: "ui-monospace, monospace", fontSize: 13 }}>
      {JSON.stringify(feedStateReport("rsc-page"), null, 2)}
    </pre>
  )
}
