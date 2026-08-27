// One shared, in-process cache for the safestorage.in blog feed.
//
// Why this exists
// ---------------
// The feed is ~11.7 MB. Next.js silently REFUSES to store anything that big in
// its data cache -- the box logs
//
//   Failed to set Next.js data cache for https://safestorage.in/get_blog_content,
//   items over 2MB can not be cached (11731304 bytes)
//
// hundreds of times an hour. So `next: { revalidate: N }` on these fetches is a
// no-op: every ISR regeneration, every /api/blogs/* call and every sitemap build
// re-downloaded the whole 11.7 MB from the India box. On the 2-vCPU AE box that
// produced 504s on blog pages and on /sitemap.xml, and periodic 502s on /.
//
// This memo lives in the Node process instead of the data cache, so the 2 MB
// limit does not apply, and `cache: "no-store"` stops Next from retrying (and
// re-logging) a store it will always reject.
import "server-only"

const FEED = "https://safestorage.in/get_blog_content"
const TTL_MS = 10 * 60 * 1000

// The feed genuinely takes a while. Keep this generous: callers turn a failure
// into [], and an empty feed is what bakes a 404 into a post that exists.
const TIMEOUT_MS = 60_000

let cached: { at: number; rows: any[] } | null = null
let inFlight: Promise<any[]> | null = null

async function load(): Promise<any[]> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(FEED, {
      cache: "no-store",
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(`blog feed responded ${response.status}`)
    const data = await response.json()
    return Array.isArray(data) ? data : []
  } finally {
    clearTimeout(timer)
  }
}

/**
 * The raw feed rows, at most one upstream fetch per TTL_MS per process.
 *
 * Concurrent callers share the in-flight request: a burst of crawler hits on
 * different posts triggers one 11.7 MB download, not one per hit.
 */
export async function getBlogFeed(): Promise<any[]> {
  if (cached && Date.now() - cached.at < TTL_MS) return cached.rows

  if (!inFlight) {
    inFlight = load()
      .then((rows) => {
        cached = { at: Date.now(), rows }
        return rows
      })
      .catch((error) => {
        // A stale copy beats the [] that callers turn into notFound() -- that
        // path has already baked permanent 404s into live posts.
        if (cached) return cached.rows
        throw error
      })
      .finally(() => {
        inFlight = null
      })
  }

  return inFlight
}

/** Same contract as the old inline call sites: [] instead of throwing. */
export async function getBlogFeedSafe(): Promise<any[]> {
  try {
    return await getBlogFeed()
  } catch {
    return []
  }
}
