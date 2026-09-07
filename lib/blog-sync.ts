// Mirrors the blog IMAGES from the safestorage.in feed into the nginx-served
// image dir. Invoked by the /api/sync-blogs webhook (called by the PHP dashboard
// after every save) and by the cron backstop. Server-only.
//
// Blog TEXT is deliberately not copied anywhere. Every page that renders a post
// reads the feed directly at request time — lib/blog-listing.ts (the /blog listing
// and /sitemap-blog.xml) and app/blog/[slug]/page.tsx — so safestorage.in is the
// single source of truth and there is no second copy to fall out of date.
//
// This function used to also upsert every row into a local MariaDB table. Nothing
// ever read that table: 5e41b03 moved the read path back onto the feed but left the
// write behind, so the cron spent every 5 minutes writing ~290 rows that no code
// path queried. That write has been removed; lib/blog-db.ts and
// scripts/import-blogs-to-db.mjs are now unreferenced.
//
// The images are a different case and are still copied: nginx serves /blog-images/
// from /var/www/blog-images via `try_files $uri @blog_images_in`, so a local file is
// the fast path and the safestorage.in proxy is only the fallback.
import "server-only"
import { writeFile, mkdir, rename } from "fs/promises"
import { existsSync, statSync } from "fs"
import path from "path"

const FEED = "https://safestorage.in/get_blog_content"
const IMG_SRC = "https://safestorage.in/post_images"
const IMG_DIR = process.env.BLOG_IMAGES_DIR || "/var/www/blog-images"

export async function syncBlogsFromFeed(): Promise<{ posts: number; images: number }> {
  const res = await fetch(FEED, { cache: "no-store" })
  const rows = await res.json()
  if (!Array.isArray(rows)) throw new Error("Feed did not return an array")

  // Reported for the webhook response only — the posts are read live from the
  // feed, not stored here.
  const posts = rows.length

  await mkdir(IMG_DIR, { recursive: true })
  let images = 0
  const files = [...new Set(rows.map((r: any) => r.post_images).filter(Boolean))]
    .map((raw) => path.basename(String(raw))) // guard against path traversal

  // Concurrency because this is now a HEAD per existing file as well as a GET
  // per changed one, and the India box is ~0.15 s away: sequentially, 317 files
  // is minutes; twelve at a time it is seconds.
  const CONCURRENCY = 12
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = await Promise.all(files.slice(i, i + CONCURRENCY).map(syncImage))
    images += batch.filter(Boolean).length
  }

  return { posts, images }
}

/**
 * Bring one image into the local store, replacing it if the source has changed.
 *
 * THE BUG THIS FIXES. This used to be `if (existsSync(dest)) continue` -- presence
 * was treated as proof of correctness, so an image REPLACED on safestorage.in never
 * propagated. Measured 2026-09-07: 197 of 317 local files differed from the source,
 * 550 MB locally against 74 MB at the source, because safestorage.in had optimised
 * its images and this box kept serving the originals. nginx prefers the local file
 * (`try_files $uri @blog_images_in`), so every one of those was being served to
 * visitors at up to 7 MB in place of a 370 KB original, forever.
 *
 * Content-Length is the comparison. It is one HEAD, it needs no state of our own,
 * and an image edit that leaves the byte count identical is not a thing that
 * happens with real re-encodes. If the source declines to give a length, the local
 * copy is left alone rather than re-downloaded on every pass.
 */
async function syncImage(file: string): Promise<boolean> {
  const dest = path.join(IMG_DIR, file)
  const url = `${IMG_SRC}/${encodeURIComponent(file)}`

  try {
    if (existsSync(dest)) {
      const head = await fetch(url, { method: "HEAD" })
      if (!head.ok) return false
      const remote = Number(head.headers.get("content-length") || 0)
      if (!remote || remote === statSync(dest).size) return false
    }

    const res = await fetch(url)
    if (!res.ok) return false

    // Via a temp file and rename: nginx serves this directory directly, and
    // writing in place would hand a visitor a half-written image.
    const tmp = `${dest}.tmp-${process.pid}`
    await writeFile(tmp, Buffer.from(await res.arrayBuffer()))
    await rename(tmp, dest)
    return true
  } catch {
    // Individual failures are skipped; the cron backstop retries.
    return false
  }
}
