// One-time (idempotent) import of blog posts from the safestorage.in feed into
// the local EC2 MariaDB `blog_content` table.
//
// Run ON THE SERVER so it can reach both the feed and localhost MariaDB:
//   cd /home/ubuntu/dubai
//   export $(grep -E '^DB_' .env.local | xargs)
//   node scripts/import-blogs-to-db.mjs
//
// Safe to re-run: uses INSERT ... ON DUPLICATE KEY UPDATE keyed on post_id, so
// existing rows are refreshed and new ones added. It never deletes rows.
import mysql from "mysql2/promise"

const FEED = "https://safestorage.in/get_blog_content"

const conn = await mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "safestorage_dubai",
})

console.log("Fetching feed:", FEED)
const res = await fetch(FEED)
const rows = await res.json()
if (!Array.isArray(rows)) {
  console.error("Feed did not return an array; aborting.")
  process.exit(1)
}
console.log("Feed rows:", rows.length)

let inserted = 0
for (const r of rows) {
  const postId = parseInt(r.post_id)
  if (!postId) continue
  await conn.execute(
    `INSERT INTO blog_content
       (post_id, title, post_category, post_images, description, seo_title, seo_desc, tags, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       title=VALUES(title), post_category=VALUES(post_category), post_images=VALUES(post_images),
       description=VALUES(description), seo_title=VALUES(seo_title), seo_desc=VALUES(seo_desc),
       tags=VALUES(tags), status=VALUES(status), created_at=VALUES(created_at)`,
    [
      postId,
      r.title ?? null,
      r.post_category ?? null,
      r.post_images ?? null,
      r.description ?? null,
      r.seo_title ?? null,
      r.seo_desc ?? null,
      r.tags ?? null,
      r.status ?? "1",
      r.created_at ? String(r.created_at).slice(0, 19).replace("T", " ") : null,
    ]
  )
  inserted++
}

const [[{ count }]] = await conn.query("SELECT COUNT(*) AS count FROM blog_content")
console.log(`Imported/updated ${inserted} rows. Table now has ${count} posts.`)
await conn.end()
