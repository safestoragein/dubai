// What has to happen the moment a post is saved on safestorage.in.
//
// The doorbell (Manage_posts::notify_dubai_sync) POSTs /api/sync-blogs on every
// Dubai blog save. That call already publishes the CONTENT in seconds: it drops
// the feed memo and marks the pages stale, so the next render reads the new
// rows. Two things were not on that path and ran on cron instead —
//
//   the sitemap        blog_lastmod was reconciled by a */10 cron, so a new post
//                      waited up to ten minutes for a <loc> even though its page
//                      was already live
//   the Google ping    /api/seo-index ran on a */5 cron, so Google was told up to
//                      five minutes late
//
// — and this module moves both onto the doorbell. Nothing a reader or a crawler
// sees now waits for a scheduler.
//
// WHY IT IS NOT AWAITED BY THE ROUTE. The PHP caller's cURL gives up after 20 s,
// and this work starts with an ~11.7 MB feed download (the memo was just dropped,
// which is the point) followed by up to a few HTTPS round trips to Google. Making
// the webhook wait for that would time the caller out and teach it that the
// doorbell fails. This is safe here because the site is self-hosted `next start`
// — a long-lived Node process, not a serverless invocation that is frozen the
// moment the response is flushed, so a promise the handler does not await still
// runs to completion.
//
// COALESCED, NOT QUEUED. An author re-saving a post fires the doorbell once per
// save (eleven times in twelve minutes, on 2026-09-01). Running a pass per save
// would stack 11.7 MB downloads on a 2-vCPU box. So at most one pass runs at a
// time and at most one more is pending: a burst collapses into "run now, then run
// once more after", which is all a burst can actually need — the second pass sees
// the final state of every save in it.
import "server-only"
import { revalidatePath } from "next/cache"
import { getBlogFeed } from "./blog-feed"
import { blogSlug } from "./blog-post"
import { reconcileLastmod } from "./blog-lastmod"
import { runIndexing } from "./seo-indexing"

let running: Promise<void> | null = null
let pending = false

async function pass(source: string): Promise<void> {
  // Sitemap first. It is the cheap half (one SELECT and only the writes that
  // are real), it needs no third party to be up, and it is the half a crawler
  // reaches on its own — so it must not be behind a Google call that can hang.
  try {
    const summary = await reconcileLastmod({ audit: true })
    if (summary.added || summary.updated || summary.removed) {
      console.log(
        `blog-publish(${source}): sitemap +${summary.added} ~${summary.updated} -${summary.removed}`
      )
    }

  } catch (error) {
    console.error(`blog-publish(${source}): sitemap reconcile failed:`, error)
  }

  // Then tell Google. runIndexing submits only what its ledger says changed, so
  // a re-save storm costs one submission per save and not 290; the quota guard
  // inside it is the backstop.
  try {
    const summary = await runIndexing(true, source)
    if (summary.indexed || summary.reindexed || summary.failed) {
      console.log(
        `blog-publish(${source}): google +${summary.indexed} ~${summary.reindexed} !${summary.failed}`
      )
    }
  } catch (error) {
    console.error(`blog-publish(${source}): indexing failed:`, error)
  }
}

/**
 * Run the post-save pipeline in the background. Never throws, never blocks.
 *
 * Deliberately returns void rather than a promise: a caller that could await it
 * would eventually be made to, and that is the mistake this exists to prevent.
 */
export function publishSideEffects(source: string): void {
  if (running) {
    pending = true
    return
  }

  const start = (src: string): void => {
    running = pass(src)
      .catch((error) => {
        // pass() already swallows both halves; this is only here so a bug in
        // the wrapper itself cannot become an unhandled rejection, which on
        // Node is a process-level crash.
        console.error("blog-publish: unexpected failure:", error)
      })
      .finally(() => {
        running = null
        if (pending) {
          pending = false
          start(`${src}+coalesced`)
        }
      }) as Promise<void>
  }

  start(source)
}

/**
 * Mark the most recently saved posts' EXACT paths stale.
 *
 * WHY THIS EXISTS. `revalidatePath('/blog/[slug]', 'page')` — which the webhook
 * already calls — does NOT clear the individual prerendered pages of a route
 * that has generateStaticParams. Measured 2026-09-07: an edit that removed a
 * sentence reached the feed and /api/blogs/<slug> immediately, while
 * /blog/<slug> kept serving the old HTML with `x-nextjs-cache: HIT` through
 * repeated webhook calls. Only revalidatePath() on the concrete path clears it.
 *
 * 🔴 IT MUST BE CALLED FROM A ROUTE HANDLER, NOT FROM publishSideEffects().
 * revalidatePath needs Next's request store; called from the detached background
 * pass it throws and the catch there swallowed it, which is exactly why the
 * first attempt at this looked like it worked and did nothing.
 *
 * Takes the N most recently saved rather than trying to work out which changed:
 * the webhook fires within seconds of a save, so the edited post is always at
 * the top, and `created_at` (which the dashboard rewrites on every save) is IST
 * written as if it were UTC — comparing it to a clock invites an off-by-5:30
 * bug for no benefit.
 */
export async function revalidateRecentPostPaths(limit = 25): Promise<number> {
  let rows: any[]
  try {
    rows = await getBlogFeed()
  } catch (error) {
    console.error("blog-publish: could not read the feed to revalidate paths:", error)
    return 0
  }

  const recent = [...rows]
    .sort((a, b) => String(b?.created_at ?? "").localeCompare(String(a?.created_at ?? "")))
    .slice(0, limit)

  let done = 0
  for (const row of recent) {
    const slug = blogSlug(row?.title || row?.seo_title || "")
    if (!slug) continue
    try {
      revalidatePath(`/blog/${slug}`)
      done++
    } catch (error) {
      console.error(`blog-publish: revalidatePath failed for /blog/${slug}:`, error)
    }
  }
  return done
}
