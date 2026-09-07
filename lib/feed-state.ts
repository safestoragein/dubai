// A read-only window onto the blog-feed memo, so "is the page seeing the same
// cache as the API" is a question with an answer instead of a theory.
//
// This exists because that question cost four failed fixes. Next compiles route
// handlers and pages into separate bundles, and lib/blog-feed.ts used plain
// module-level state, so there were TWO memos: invalidateFeed() from the webhook
// cleared the route bundle's copy while the page bundle kept serving rows up to
// ten minutes old. Every check of /api/blogs/<slug> said the sync worked,
// because the API was the half that was working.
//
// The state now lives on globalThis. `generation` is the proof: it is bumped by
// invalidateFeed(), so if the route bundle and the RSC bundle report the SAME
// generation after a doorbell, they are sharing one memo. If they ever diverge,
// the split has come back.
import "server-only"
import { peekFeedState } from "./blog-feed"

export interface FeedStateReport {
  bundle: string
  generation: number
  cachedAt: string | null
  ageSeconds: number | null
  rows: number
  inFlight: boolean
}

export function feedStateReport(bundle: string): FeedStateReport {
  const s = peekFeedState()
  return {
    bundle,
    generation: s.generation,
    cachedAt: s.cachedAt ? new Date(s.cachedAt).toISOString() : null,
    ageSeconds: s.cachedAt ? Math.round((Date.now() - s.cachedAt) / 1000) : null,
    rows: s.rows,
    inFlight: s.inFlight,
  }
}
