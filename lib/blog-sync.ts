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
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
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
  for (const raw of files) {
    const file = path.basename(String(raw)) // guard against path traversal
    const dest = path.join(IMG_DIR, file)
    if (existsSync(dest)) continue
    try {
      const ir = await fetch(`${IMG_SRC}/${encodeURIComponent(file)}`)
      if (!ir.ok) continue
      await writeFile(dest, Buffer.from(await ir.arrayBuffer()))
      images++
    } catch {
      // skip individual image failures; the cron backstop will retry later
    }
  }

  return { posts, images }
}
