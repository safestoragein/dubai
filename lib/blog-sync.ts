// Pulls the latest blog content + images from the safestorage.in feed into the
// Dubai server (local MariaDB + the nginx-served image dir). Invoked by the
// /api/sync-blogs webhook (called by the PHP dashboard after every save) and
// usable by the cron backstop. Server-only.
import "server-only"
import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import { upsertBlogs } from "./blog-db"

const FEED = "https://safestorage.in/get_blog_content"
const IMG_SRC = "https://safestorage.in/post_images"
const IMG_DIR = process.env.BLOG_IMAGES_DIR || "/var/www/blog-images"

export async function syncBlogsFromFeed(): Promise<{ posts: number; images: number }> {
  const res = await fetch(FEED, { cache: "no-store" })
  const rows = await res.json()
  if (!Array.isArray(rows)) throw new Error("Feed did not return an array")

  const posts = await upsertBlogs(rows)

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
