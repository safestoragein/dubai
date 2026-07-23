// Local blog data-layer backed by the EC2 MariaDB `blog_content` table.
// Replaces the runtime dependency on safestorage.in/get_blog_content.
//
// Rows are returned in the exact shape the app already expects from the old
// feed (post_id, title, post_category, post_images, description, seo_title,
// seo_desc, tags, status, created_at) so the blog/admin code consumes them
// unchanged. Server-only — never import this from a client component.
import "server-only"
import mysql from "mysql2/promise"

export interface BlogRow {
  post_id: number
  title: string | null
  post_category: string | null
  post_images: string | null
  description: string | null
  seo_title: string | null
  seo_desc: string | null
  tags: string | null
  status: string | null
  created_at: string | null
}

const COLUMNS =
  "post_id, title, post_category, post_images, description, seo_title, seo_desc, tags, status, created_at"

// SafeStorage Dubai no longer advertises climate/temperature/humidity control.
// Blog rows are synced from the safestorage.in dashboard, which still contains the
// old wording, so any DB-level cleanup gets overwritten on the next sync. Instead we
// strip the "control" wording at READ time here — every consumer (blog pages, sitemap,
// admin) gets cleaned text, and slugs (derived from title) stay clean and stable.
// NOTE: intentionally does NOT touch post_images (URLs/filenames).
function scrubClimate<T extends string | null | undefined>(value: T): T {
  if (value == null) return value
  const secure = (m: string) => (m[0] === m[0].toUpperCase() ? "Secure" : "secure")
  const secureStorage = (m: string) =>
    m[0] === m[0].toUpperCase() ? "Secure Storage" : "secure storage"
  let s = String(value)
  // "<climate|temperature|humidity>[- ]controlled" -> secure
  s = s.replace(/(?:climate|temperature|humidity)[- ]controlled/gi, secure)
  // standalone "<...>[- ]control" (not "controlled") -> secure storage
  s = s.replace(/(?:climate|temperature|humidity)[- ]control(?![a-z])/gi, secureStorage)
  // collapse the duplicate "secure" the substitutions can create (prose form)
  s = s.replace(/\bsecure(?:,?\s+|\s+and\s+)secure\b/gi, secure)
  // ...and the hyphenated slug form found inside body hyperlinks
  s = s.replace(/secure-and-secure/gi, "secure").replace(/(?:secure-)+secure/gi, "secure")
  return s as T
}

function scrubRow(row: BlogRow): BlogRow {
  return {
    ...row,
    title: scrubClimate(row.title),
    post_category: scrubClimate(row.post_category),
    description: scrubClimate(row.description),
    seo_title: scrubClimate(row.seo_title),
    seo_desc: scrubClimate(row.seo_desc),
    tags: scrubClimate(row.tags),
  }
}

let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || "safestorage_dubai",
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    })
  }
  return pool
}

// All posts, newest first. Returns [] on any DB error so pages degrade
// gracefully instead of throwing (matches the old fetch-with-catch behaviour).
export async function getAllBlogs(): Promise<BlogRow[]> {
  try {
    const [rows] = await getPool().query(
      `SELECT ${COLUMNS} FROM blog_content ORDER BY created_at DESC, post_id DESC`
    )
    return (rows as BlogRow[]).map(scrubRow)
  } catch (error) {
    console.error("getAllBlogs DB error:", error)
    return []
  }
}

export async function getBlogById(postId: number): Promise<BlogRow | null> {
  try {
    const [rows] = await getPool().query(
      `SELECT ${COLUMNS} FROM blog_content WHERE post_id = ? LIMIT 1`,
      [postId]
    )
    const list = rows as BlogRow[]
    return list[0] ? scrubRow(list[0]) : null
  } catch (error) {
    console.error("getBlogById DB error:", error)
    return null
  }
}

export interface BlogInput {
  title?: string
  post_category?: string
  post_images?: string
  description?: string
  seo_title?: string
  seo_desc?: string
  tags?: string
  status?: string
}

// Insert a new post; returns the new post_id.
export async function insertBlog(data: BlogInput): Promise<number> {
  const [result] = await getPool().query(
    `INSERT INTO blog_content
       (title, post_category, post_images, description, seo_title, seo_desc, tags, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.title ?? null,
      data.post_category ?? null,
      data.post_images ?? null,
      data.description ?? null,
      data.seo_title ?? null,
      data.seo_desc ?? null,
      data.tags ?? null,
      data.status ?? "1",
    ]
  )
  return (result as mysql.ResultSetHeader).insertId
}

// Update only the provided fields of an existing post.
export async function updateBlog(postId: number, data: BlogInput): Promise<boolean> {
  const fields: string[] = []
  const values: unknown[] = []
  for (const key of [
    "title",
    "post_category",
    "post_images",
    "description",
    "seo_title",
    "seo_desc",
    "tags",
    "status",
  ] as const) {
    if (data[key] !== undefined) {
      fields.push(`${key} = ?`)
      values.push(data[key])
    }
  }
  if (fields.length === 0) return false
  values.push(postId)
  const [result] = await getPool().query(
    `UPDATE blog_content SET ${fields.join(", ")} WHERE post_id = ?`,
    values
  )
  return (result as mysql.ResultSetHeader).affectedRows > 0
}

export async function deleteBlog(postId: number): Promise<boolean> {
  const [result] = await getPool().query(
    `DELETE FROM blog_content WHERE post_id = ?`,
    [postId]
  )
  return (result as mysql.ResultSetHeader).affectedRows > 0
}

// Bulk upsert of feed rows (post_id-keyed) — captures both new posts and edits.
// Used by the sync from the safestorage.in dashboard.
export async function upsertBlogs(rows: any[]): Promise<number> {
  const pool = getPool()
  let n = 0
  for (const r of rows) {
    const postId = parseInt(r.post_id)
    if (!postId) continue
    await pool.query(
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
    n++
  }
  return n
}
