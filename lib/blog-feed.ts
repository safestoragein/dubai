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
// blogSlug is the SAME function /blog/[slug] canonicalises to, so a withheld
// slug here matches exactly the URL the post would otherwise be served at.
import { blogSlug } from "@/lib/blog-post"
import { isRepointedBlogSlug } from "@/lib/blog-meta"

const FEED = "https://safestorage.in/get_blog_content"
const TTL_MS = 10 * 60 * 1000

// The feed genuinely takes a while. Keep this generous: callers turn a failure
// into [], and an empty feed is what bakes a 404 into a post that exists.
const TIMEOUT_MS = 60_000

// THE STATE LIVES ON globalThis, AND THAT IS LOAD-BEARING.
//
// Next compiles route handlers and pages into SEPARATE bundles. Plain
// module-level `let`s therefore give you TWO independent copies of this module
// -- one for /api/*, one for the page render -- each with its own memo.
//
// That is what made an edit take ten minutes to appear on safestorage.ae, and it
// survived every fix aimed at the webhook. The doorbell called invalidateFeed()
// from the ROUTE bundle, so /api/blogs/<slug> went fresh instantly, while the
// PAGE bundle's copy sat untouched until its own TTL_MS expired. Measured
// 2026-09-07: post 320's page was invalidated and genuinely re-rendered at
// 09:03:45 -- the .html and .rsc were rewritten -- and it rendered the OLD body,
// because the render read the page bundle's stale memo. The API returned the new
// body at the same instant.
//
// One slot on globalThis is one memo for the whole process, so invalidateFeed()
// from any bundle is seen by all of them. Do NOT turn these back into plain
// module variables.
interface FeedState {
  cached: { at: number; rows: any[] } | null
  inFlight: Promise<any[]> | null
  // Bumped by invalidateFeed(). A download that was already in flight when an
  // invalidation arrived must not be memoised as fresh -- it was started before
  // the edit and would pin the stale rows for another full TTL.
  generation: number
  lastForced: number
}

const GLOBAL_KEY = Symbol.for("safestorage.blogFeedState")
const globalStore = globalThis as unknown as Record<symbol, FeedState | undefined>
const state: FeedState =
  globalStore[GLOBAL_KEY] ??
  (globalStore[GLOBAL_KEY] = { cached: null, inFlight: null, generation: 0, lastForced: 0 })

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
  if (state.cached && Date.now() - state.cached.at < TTL_MS) return state.cached.rows

  if (!state.inFlight) {
    const startedAt = state.generation
    state.inFlight = load()
      .then((rows) => {
        if (startedAt === state.generation) state.cached = { at: Date.now(), rows }
        return rows
      })
      .catch((error) => {
        // A stale copy beats the [] that callers turn into notFound() -- that
        // path has already baked permanent 404s into live posts.
        if (state.cached) return state.cached.rows
        throw error
      })
      .finally(() => {
        state.inFlight = null
      })
  }

  return state.inFlight
}

/**
 * Drop the memo so the very next read re-pulls the feed.
 *
 * The memo is a plain module variable, so `revalidatePath()` does NOT clear it:
 * without this, a dashboard save could invalidate every rendered page and the
 * regeneration would still be handed the same up-to-10-minute-old rows. That is
 * what made an edit on safestorage.in take up to 10 minutes to appear on
 * safestorage.ae. Called by /api/revalidate and /api/sync-blogs, which the
 * dashboard pings on every Dubai post save.
 *
 * A request already in flight is left to finish -- its callers are waiting on it
 * and cancelling would only fail them -- but the generation bump stops its result
 * being stored, so the read after it fetches the new content.
 */
export function invalidateFeed(): void {
  state.generation += 1
  state.cached = null
}

/** Same contract as the old inline call sites: [] instead of throwing. */
export async function getBlogFeedSafe(): Promise<any[]> {
  try {
    return await getBlogFeed()
  } catch {
    return []
  }
}

/**
 * The feed, guaranteed newer than the last forced refresh.
 *
 * For ONE caller: /blog/[slug] when a slug does not match any post. That is the
 * one place a stale memo is expensive rather than merely late -- the page calls
 * notFound(), the route is ISR with `revalidate = 3600`, and Next stores that 404
 * as a prerendered page. So a post published seconds after somebody first opened
 * its URL stayed dead for an hour, while the feed, the API and the sitemap all
 * had it. Post 320 did exactly that on 2026-09-07.
 *
 * Throttled because the caller is the miss path, which is also what a bot
 * spraying invented slugs hits: without this, every 404 would pull ~12 MB. One
 * forced refresh per 30 s at most; outside that window this is the normal memo
 * read, which is the right answer anyway once a refresh has just happened.
 */
const MIN_FORCED_REFRESH_MS = 30_000

export async function getBlogFeedFresh(): Promise<any[]> {
  if (Date.now() - state.lastForced < MIN_FORCED_REFRESH_MS) return getBlogFeed()
  state.lastForced = Date.now()
  invalidateFeed()
  return getBlogFeed()
}

/**
 * Read-only snapshot of the shared memo, for diagnostics.
 *
 * `generation` is the useful field: it only moves when invalidateFeed() runs, so
 * comparing it between the route bundle and the RSC bundle answers "is this one
 * memo or two" — the question that made an edit take ten minutes to appear.
 */
export function peekFeedState(): {
  generation: number
  cachedAt: number | null
  rows: number
  inFlight: boolean
} {
  return {
    generation: state.generation,
    cachedAt: state.cached ? state.cached.at : null,
    rows: state.cached ? state.cached.rows.length : 0,
    inFlight: state.inFlight !== null,
  }
}

/**
 * Only the posts the dashboard has published (`status = '1'`).
 *
 * The Dubai dashboard's trash button is a SOFT delete: it flips
 * tbl_dubai_posts.status to '0' and keeps the row, so the feed keeps returning
 * it. Nothing on this site used to look at that column, so a "deleted" post went
 * on rendering at its own URL and in the listing — only the sitemap dropped it.
 *
 * A missing status counts as published, matching every other reader of this feed
 * (see blog-lastmod and seo-indexing): an absent column must not blank the blog.
 *
 * Memoised on the raw array's identity, so filtering 291 rows happens once per
 * feed refresh rather than once per request. That key is safe across bundles
 * because the array itself comes from the one shared memo above.
 */
let publishedMemo: { rows: any[]; out: any[] } | null = null

/**
 * Posts withheld by decision here, regardless of what the feed says.
 *
 * WHY THIS EXISTS
 * ---------------
 * Blog content is authored in the safestorage.in dashboard, so the only way to
 * unpublish a post was to flip its status there. That is the right long-term
 * fix and it should still be done — but it leaves this site advertising
 * something it does not offer until somebody gets to the dashboard, and the
 * post keeps appearing in the listing, the sitemap and the feed in the
 * meantime.
 *
 * WHAT IS WITHHELD, AND WHY
 * -------------------------
 * The wine-storage post is an entire article selling wine and spirits storage.
 * /self-storage-dubai/prohibited-items lists "Alcohol and liquor" as an item we
 * do not store, so the article contradicted the site's own policy page, and
 * alcohol storage in the UAE carries a licensing dimension beyond storage
 * itself. The matching claims on /personal-storage-dubai/art-storage,
 * /blog/what-can-you-store and /blog/summer-storage-dubai were removed at
 * source; this one could not be, because it is not a file in this repo.
 *
 * Matching is on the SLUG, which is derived from the title (see blogSlug in
 * lib/blog-post.ts) — so renaming the post in the dashboard changes its slug
 * and it would reappear. Unpublishing it there is the durable answer.
 *
 * next.config.mjs 301s the URL to /self-storage-dubai/climate-controlled, which
 * covers what heat and humidity actually do to stored goods. That is a real
 * answer for anyone arriving on the old link, and it is why this is a redirect
 * rather than the 410 used for posts that were genuinely deleted.
 */
const WITHHELD_SLUGS = new Set([
  "wine-storage-dubai-keeping-your-collection-safe-in-the-uae-climate",
])

/**
 * True when a post is withheld by decision.
 *
 * publishedOnly() keeps withheld posts out of the listing, the feed readers and
 * the sitemap. /blog/[slug] reads the RAW feed rather than the filtered one —
 * deliberately, so that a soft-deleted post still resolves at its own URL — so
 * it has to check this itself, or the build emits a page that only the redirect
 * in next.config.mjs keeps anyone from reading.
 */
export function isWithheldSlug(slug: string): boolean {
  return WITHHELD_SLUGS.has(slug)
}

export function publishedOnly(rows: any[]): any[] {
  if (!Array.isArray(rows)) return []
  if (publishedMemo && publishedMemo.rows === rows) return publishedMemo.out
  const out = rows.filter((r) => {
    if (String(r?.status ?? "1") !== "1") return false
    const slug = blogSlug(r?.title ?? "")
    // A post whose URL is redirected away is not reachable at its own address,
    // so a listing card pointing at it is a redirect hop and the sitemap entry
    // is an error. isRepointedBlogSlug covers the local-self-storage guide,
    // whose commercial intent moved to /self-storage-dubai/local-self-storage.
    return !WITHHELD_SLUGS.has(slug) && !isRepointedBlogSlug(slug)
  })
  publishedMemo = { rows, out }
  return out
}

