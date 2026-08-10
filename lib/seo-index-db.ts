// Submission ledger for the Google Indexing API.
//
// WHY A TABLE AND NOT A FILE. The deploy hook runs `git checkout -f main` into
// /home/ubuntu/dubai, so anything written inside the repo is reverted on the
// next push. This state has to outlive deploys: losing it means the module
// forgets what it already told Google and resubmits all 272 posts, which is more
// than a day's quota.
//
// It lives in the same `safestorage_dubai` MariaDB the quotation and
// payment-attempt layers use, in its OWN table. Deliberately not `blog_content`
// — that table is dead (see ISSUE-blog-content-cleanup.md) and nothing should
// add a reason to keep it.
//
// Timestamps are UTC because that is the calendar Google's daily quota resets
// on, so the rows and the counter always agree about which day a submission
// belongs to. The server runs Asia/Dubai; a local date would roll the counter
// over four hours late and hand back 429s in the gap.
import "server-only"
import mysql from "mysql2/promise"

export type IndexAction = "INDEXED" | "REINDEXED" | "DELETED"
export type NotifyType = "URL_UPDATED" | "URL_DELETED" | "BASELINE"

export interface SubmittedState {
  post_id: number
  url: string
  content_hash: string | null
}

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

// Created on demand rather than by a migration, because importing a production
// dump over a local database is routine here and silently reverts schema
// changes. Idempotent; the static flag keeps it to one round trip per process.
let ensured = false

export async function ensureTable(): Promise<void> {
  if (ensured) return
  await getPool().query(
    `CREATE TABLE IF NOT EXISTS seo_index_log (
       id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
       post_id      INT UNSIGNED DEFAULT NULL,
       url          VARCHAR(500) NOT NULL,
       notify_type  VARCHAR(20)  NOT NULL DEFAULT 'URL_UPDATED',
       action       VARCHAR(12)  DEFAULT NULL,
       content_hash CHAR(64)     DEFAULT NULL,
       ok           TINYINT(1)   NOT NULL DEFAULT 0,
       http_status  SMALLINT     DEFAULT NULL,
       error        VARCHAR(500) DEFAULT NULL,
       response     TEXT         DEFAULT NULL,
       source       VARCHAR(20)  NOT NULL DEFAULT 'cron',
       created_at   DATETIME     NOT NULL,
       day          DATE         NOT NULL,
       PRIMARY KEY (id),
       KEY idx_day_ok (day, ok),
       KEY idx_post   (post_id),
       KEY idx_url    (url(191)),
       KEY idx_action (action)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  ensured = true
}

function utcNow(): string {
  return new Date().toISOString().slice(0, 19).replace("T", " ")
}

function utcDay(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * The last URL and content hash we successfully announced for each post.
 *
 * Keyed on post_id, not URL: a retitle moves the URL, and the question this
 * answers is "where does this post currently stand", which has to survive that.
 * BASELINE rows count — they record what already existed when the module went
 * in, and treating them as unknown would announce every one of them as new.
 */
export async function getSubmittedState(): Promise<Map<number, SubmittedState>> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT l.post_id, l.url, l.content_hash
       FROM seo_index_log l
       JOIN (SELECT post_id, MAX(id) AS id
               FROM seo_index_log
              WHERE post_id IS NOT NULL
                AND (notify_type = 'BASELINE' OR (ok = 1 AND notify_type = 'URL_UPDATED'))
              GROUP BY post_id) n ON n.id = l.id`
  )
  const out = new Map<number, SubmittedState>()
  for (const r of rows as SubmittedState[]) out.set(Number(r.post_id), r)
  return out
}

/** URLs already retired, so a delete is never sent twice. URL_DELETED is not free. */
export async function getRetiredUrls(): Promise<Set<string>> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT DISTINCT url FROM seo_index_log WHERE ok = 1 AND notify_type = 'URL_DELETED'`
  )
  return new Set((rows as { url: string }[]).map((r) => r.url))
}

/**
 * Accepted notifications today, in UTC.
 *
 * Only accepted ones: a 403 does not consume quota, and counting failures would
 * make a run of broken calls look like an exhausted budget, suppressing the
 * retries that would fix it.
 */
export async function quotaUsedToday(): Promise<number> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT COUNT(*) AS n FROM seo_index_log WHERE ok = 1 AND day = ?`,
    [utcDay()]
  )
  return Number((rows as { n: number }[])[0]?.n || 0)
}

/** Has the one-time baseline snapshot been taken? */
export async function hasBaseline(): Promise<boolean> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT id FROM seo_index_log WHERE notify_type = 'BASELINE' LIMIT 1`
  )
  return (rows as unknown[]).length > 0
}

/**
 * Seed the ledger with what already exists, submitting nothing.
 *
 * Without this the first run treats all 272 published posts as brand new: more
 * than a day's quota spent announcing the oldest pages on the site, every one
 * of them labelled INDEXED when Google has known about them for months via the
 * sitemap.
 *
 * It must be a snapshot, not a running import — taken once, it means exactly
 * "what existed the day this went in", and everything after that is correctly
 * new. The guard is the presence of any BASELINE row.
 *
 * Rows go in with ok = 0 so they never count toward the quota.
 */
export async function importBaseline(
  entries: { post_id: number; url: string; content_hash: string }[]
): Promise<number> {
  await ensureTable()
  if (await hasBaseline()) return 0
  if (entries.length === 0) return 0

  const now = utcNow()
  const day = utcDay()
  const pool = getPool()

  // Chunked: max_allowed_packet is not infinite and this is a few hundred rows.
  let n = 0
  for (let i = 0; i < entries.length; i += 200) {
    const chunk = entries.slice(i, i + 200)
    await pool.query(
      `INSERT INTO seo_index_log
         (post_id, url, notify_type, action, content_hash, ok, source, created_at, day)
       VALUES ${chunk.map(() => "(?, ?, 'BASELINE', NULL, ?, 0, 'existing', ?, ?)").join(", ")}`,
      chunk.flatMap((e) => [e.post_id, e.url, e.content_hash, now, day])
    )
    n += chunk.length
  }
  return n
}

export interface RecordInput {
  post_id: number | null
  url: string
  notify_type: NotifyType
  action: IndexAction
  content_hash: string | null
  ok: boolean
  http_status: number | null
  error?: string | null
  response?: unknown
  source: string
}

export async function recordSubmission(r: RecordInput): Promise<void> {
  await ensureTable()
  await getPool().query(
    `INSERT INTO seo_index_log
       (post_id, url, notify_type, action, content_hash, ok, http_status, error, response, source, created_at, day)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      r.post_id,
      r.url.slice(0, 500),
      r.notify_type,
      r.action,
      r.content_hash,
      r.ok ? 1 : 0,
      r.http_status,
      r.error ? String(r.error).slice(0, 500) : null,
      r.response ? JSON.stringify(r.response).slice(0, 4000) : null,
      r.source,
      utcNow(),
      utcDay(),
    ]
  )
}

export interface LedgerStats {
  total: number
  baseline: number
  indexed: number
  reindexed: number
  deleted: number
  failed: number
  today: number
  last_run: string | null
}

export async function getStats(): Promise<LedgerStats> {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT
       COUNT(*)                                                        AS total,
       SUM(notify_type = 'BASELINE')                                   AS baseline,
       SUM(action = 'INDEXED'   AND ok = 1)                            AS indexed,
       SUM(action = 'REINDEXED' AND ok = 1)                            AS reindexed,
       SUM(action = 'DELETED'   AND ok = 1)                            AS deleted,
       SUM(ok = 0 AND notify_type <> 'BASELINE')                       AS failed,
       SUM(ok = 1 AND day = ?)                                         AS today,
       MAX(CASE WHEN notify_type <> 'BASELINE' THEN created_at END)    AS last_run
     FROM seo_index_log`,
    [utcDay()]
  )
  const s = (rows as Record<string, unknown>[])[0] || {}
  const int = (k: string) => Number(s[k] || 0)
  return {
    total: int("total"),
    baseline: int("baseline"),
    indexed: int("indexed"),
    reindexed: int("reindexed"),
    deleted: int("deleted"),
    failed: int("failed"),
    today: int("today"),
    last_run: (s.last_run as string) || null,
  }
}

/** Most recent submissions, newest first — what the status endpoint shows. */
export async function getRecent(limit = 20) {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT created_at, action, url, ok, http_status, error, source
       FROM seo_index_log
      WHERE notify_type <> 'BASELINE'
      ORDER BY id DESC
      LIMIT ?`,
    [Math.max(1, Math.min(200, limit))]
  )
  return rows as Record<string, unknown>[]
}

/**
 * Every submission the dashboard lists, newest first.
 *
 * BASELINE rows are excluded. There are several hundred of them and they record
 * what already existed rather than anything we did — as a list they would bury
 * the handful that were submitted, retired or failed, which is the entire
 * question the dashboard exists to answer.
 */
export async function getLedgerRows(limit = 500) {
  await ensureTable()
  const [rows] = await getPool().query(
    `SELECT id, created_at, action, notify_type, url, post_id, ok, http_status, error, source
       FROM seo_index_log
      WHERE notify_type <> 'BASELINE'
      ORDER BY id DESC
      LIMIT ?`,
    [Math.max(1, Math.min(2000, limit))]
  )
  return rows as Record<string, unknown>[]
}
