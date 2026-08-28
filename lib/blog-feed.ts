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
// limit does not apply.
//
// Why a raw node:https request instead of fetch()
// ----------------------------------------------
// This used to call the global fetch() with `cache: "no-store"`. That stopped
// the pointless 2 MB store attempts, but it also made every ISR blog page fail
// outright: /blog/[slug] declares `export const revalidate = 3600` and is
// prerendered by generateStaticParams, and an uncached fetch inside a static
// render makes Next abort with
//
//   Error: Page changed from static to dynamic at runtime /blog/[slug],
//   reason: revalidate: 0 fetch https://safestorage.in/get_blog_content
//
// which is served to the visitor as a bare "Internal Server Error". EVERY post
// 500'd; the listing pages survived only because they read the summaries route.
//
// The fetch here never wanted Next's cache in the first place -- the memo below
// IS the cache. So the request is made with node:https, which Next does not
// instrument: nothing is tracked, the route stays static, and no 2 MB store is
// ever attempted. Do NOT switch this back to fetch(): `no-store` breaks the
// pages, and any cached variant re-introduces the 11.7 MB store spam.
import "server-only"
import https from "node:https"

const FEED = "https://safestorage.in/get_blog_content"
const TTL_MS = 10 * 60 * 1000

// The feed genuinely takes a while. Keep this generous: callers turn a failure
// into [], and an empty feed is what bakes a 404 into a post that exists.
const TIMEOUT_MS = 60_000

let cached: { at: number; rows: any[] } | null = null
let inFlight: Promise<any[]> | null = null

function load(): Promise<any[]> {
  return new Promise<any[]>((resolve, reject) => {
    let settled = false
    const done = (fn: () => void) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      fn()
    }

    const request = https.get(
      FEED,
      { headers: { accept: "application/json" } },
      (response) => {
        const status = response.statusCode ?? 0
        if (status < 200 || status >= 300) {
          response.resume() // drain, otherwise the socket is held open
          done(() => reject(new Error(`blog feed responded ${status}`)))
          return
        }

        // ~11.7 MB arrives in a few thousand chunks; concat once at the end
        // rather than building a giant string incrementally.
        const chunks: Buffer[] = []
        response.on("data", (chunk: Buffer) => chunks.push(chunk))
        response.on("end", () =>
          done(() => {
            try {
              const data = JSON.parse(Buffer.concat(chunks).toString("utf8"))
              resolve(Array.isArray(data) ? data : [])
            } catch (error) {
              reject(error)
            }
          })
        )
        response.on("error", (error) => done(() => reject(error)))
      }
    )

    const timer = setTimeout(() => {
      request.destroy(new Error("blog feed timed out"))
    }, TIMEOUT_MS)

    request.on("error", (error) => done(() => reject(error)))
  })
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
