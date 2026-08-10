// Per-post `lastmod` for the blog sitemap.
//
// THE PROBLEM. The safestorage.in feed carries `created_at` and nothing else —
// there is no `updated_at`, and `created_at` does not move when someone edits a
// post. app/sitemap.ts therefore published `new Date(post.updated_at ||
// post.created_at)`, which resolves to the publish date on every post forever:
// edit an article and its sitemap entry is byte-identical to yesterday's, so a
// crawler has no reason to refetch it.
//
// THE FIX. Hash the fields that reach the rendered page, store the hash next to
// a timestamp, and move the timestamp only when the hash moves. An edit to one
// article changes exactly one `lastmod`; the other 272 keep the date they
// already had, which is what makes the signal worth anything. A sitemap where
// every entry says "modified just now" on every fetch is the thing Google
// learns to ignore.
//
// WHY IT SHARES contentHash WITH THE INDEXER. lib/seo-indexing.ts decides "has
// this post changed" for the Google Indexing API using the same function. One
// definition means the sitemap and the reindex trigger can never disagree about
// what an edit is — the same save bumps the lastmod and queues the URL.
//
// Timestamps are UTC to match seo_index_log, so the two tables can be read side
// by side without a timezone in the way.
import "server-only"
import mysql from "mysql2/promise"
import { contentHash, fetchFeed, postUrl, type FeedRow } from "./seo-indexing"

let pool: mysql.Pool | null = null

function getPool(): mysql.Pool {
  if (!pool) {
    // No default for DB_NAME on purpose: a fallback would let this connect to
    // whatever database happens to share that name on the host it runs on.
    if (!process.env.DB_NAME) throw new Error("DB_NAME is not set")
    pool = mysql.createPool({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 3,
      dateStrings: true,
    })
  }
  return pool
}

let ensured = false

export async function ensureTable(): Promise<void> {
  if (ensured) return
  await getPool().query(
    `CREATE TABLE IF NOT EXISTS blog_lastmod (
       post_id       INT UNSIGNED NOT NULL,
       url           VARCHAR(500) NOT NULL,
       content_hash  CHAR(64)     NOT NULL,
       last_modified DATETIME     NOT NULL,
       first_seen    DATETIME     NOT NULL,
       checked_at    DATETIME     NOT NULL,
       PRIMARY KEY (post_id),
       KEY idx_last_modified (last_modified)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  ensured = true
}

function utcNow(): string {
  return new Date().toISOString().slice(0, 19).replace("T", " ")
}

/**
 * The feed's `created_at` as a UTC DATETIME, or now if it is missing or junk.
 *
 * Used only the first time a post is seen, so a newly published article enters
 * the sitemap with its real publish date rather than "whenever cron noticed".
 */
function publishedAt(row: FeedRow): string {
  const raw = row.created_at
  if (!raw) return utcNow()
  const d = new Date(String(raw).replace(" ", "T"))
  if (Number.isNaN(d.getTime())) return utcNow()
  // A feed date in the future would publish a lastmod Google should not believe.
  if (d.getTime() > Date.now()) return utcNow()
  return d.toISOString().slice(0, 19).replace("T", " ")
}

interface StoredRow {
  post_id: number
  url: string
  content_hash: string
  last_modified: string
}

export interface RefreshSummary {
  examined: number
  added: number
  updated: number
  unchanged: number
  removed: number
  skipped: number
  changed: { post_id: number; url: string; reason: string }[]
}

/**
 * Reconcile the table against the feed.
 *
 * `last_modified` moves in exactly two cases: a post we have never seen (set to
 * its publish date) and a post whose content hash differs from the stored one
 * (set to now — the moment the edit was detected, which is the only honest
 * value available when the source carries no edit timestamp).
 *
 * Unpublished posts are deleted from the table rather than left behind: a
 * sitemap should not advertise a URL that no longer resolves.
 */
export async function refreshLastmod(): Promise<RefreshSummary> {
  await ensureTable()
  const rows = await fetchFeed()
  const pool = getPool()

  const [existing] = await pool.query(
    `SELECT post_id, url, content_hash, last_modified FROM blog_lastmod`
  )
  const stored = new Map<number, StoredRow>()
  for (const r of existing as StoredRow[]) stored.set(Number(r.post_id), r)

  const summary: RefreshSummary = {
    examined: rows.length,
    added: 0,
    updated: 0,
    unchanged: 0,
    removed: 0,
    skipped: 0,
    changed: [],
  }

  const now = utcNow()
  const live = new Set<number>()

  for (const row of rows) {
    const postId = Number(row.post_id)
    if (!postId) {
      summary.skipped++
      continue
    }

    // Unpublished posts never enter the sitemap.
    if (String(row.status ?? "1") !== "1") {
      summary.skipped++
      continue
    }

    const url = postUrl(row)
    if (!url) {
      summary.skipped++
      continue
    }

    live.add(postId)
    const hash = contentHash(row)
    const prev = stored.get(postId)

    if (!prev) {
      const seen = publishedAt(row)
      await pool.query(
        `INSERT INTO blog_lastmod
           (post_id, url, content_hash, last_modified, first_seen, checked_at)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
           url = VALUES(url),
           content_hash = VALUES(content_hash),
           last_modified = VALUES(last_modified),
           checked_at = VALUES(checked_at)`,
        [postId, url, hash, seen, seen, now]
      )
      summary.added++
      summary.changed.push({ post_id: postId, url, reason: "new post" })
      continue
    }

    if (prev.content_hash === hash && prev.url === url) {
      // The common case by a wide margin: touch only the audit column, so the
      // published lastmod stays exactly where it was.
      await pool.query(`UPDATE blog_lastmod SET checked_at = ? WHERE post_id = ?`, [now, postId])
      summary.unchanged++
      continue
    }

    await pool.query(
      `UPDATE blog_lastmod
          SET url = ?, content_hash = ?, last_modified = ?, checked_at = ?
        WHERE post_id = ?`,
      [url, hash, now, now, postId]
    )
    summary.updated++
    summary.changed.push({
      post_id: postId,
      url,
      reason: prev.url !== url ? "title changed — new address" : "content edited",
    })
  }

  // Drop anything the feed no longer publishes.
  for (const [postId] of stored) {
    if (live.has(postId)) continue
    await pool.query(`DELETE FROM blog_lastmod WHERE post_id = ?`, [postId])
    summary.removed++
  }

  return summary
}

export interface SitemapEntry {
  url: string
  lastModified: string // ISO 8601 with Z, the W3C form <lastmod> wants
}

/**
 * Every published blog URL with the date its content last changed.
 *
 * Seeds itself on the first call so the sitemap is never empty just because
 * cron has not run yet. After that it is a single indexed read.
 */
export async function getBlogSitemapEntries(): Promise<SitemapEntry[]> {
  await ensureTable()
  const pool = getPool()

  let [rows] = await pool.query(
    `SELECT url, last_modified FROM blog_lastmod ORDER BY last_modified DESC`
  )

  if ((rows as unknown[]).length === 0) {
    await refreshLastmod()
    ;[rows] = await pool.query(
      `SELECT url, last_modified FROM blog_lastmod ORDER BY last_modified DESC`
    )
  }

  return (rows as { url: string; last_modified: string }[]).map((r) => ({
    url: r.url,
    // dateStrings gives "YYYY-MM-DD HH:MM:SS", already UTC.
    lastModified: `${String(r.last_modified).replace(" ", "T")}Z`,
  }))
}

export interface LastmodStats {
  posts: number
  newest: string | null
  oldest: string | null
  last_checked: string | null
  changed_last_24h: number
}

export async function getStats(): Promise<LastmodStats> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT COUNT(*)                AS posts,
            MAX(last_modified)      AS newest,
            MIN(last_modified)      AS oldest,
            MAX(checked_at)         AS last_checked,
            SUM(last_modified >= UTC_TIMESTAMP() - INTERVAL 1 DAY) AS changed_last_24h
       FROM blog_lastmod`
  )
  const s = (rows as Record<string, unknown>[])[0] || {}
  return {
    posts: Number(s.posts || 0),
    newest: (s.newest as string) || null,
    oldest: (s.oldest as string) || null,
    last_checked: (s.last_checked as string) || null,
    changed_last_24h: Number(s.changed_last_24h || 0),
  }
}
