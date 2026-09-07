// Per-post `lastmod` for the blog sitemap.
//
// THE PROBLEM. app/sitemap.ts published `new Date(post.updated_at ||
// post.created_at)`. The feed has no `updated_at` at all, so that always fell
// through to `created_at` and every post's lastmod was frozen — a crawler had no
// reason to refetch anything.
//
// `created_at` is in fact rewritten by the upstream dashboard on every save
// (post 292 moved 12:02:04 -> 14:25:38 across two saves on 2026-08-10), so it
// behaves as a last-saved stamp and is part of the hash. The naive read of it
// still would not work, though: `new Date(created_at)` is the moment the CMS
// wrote the row, and a bulk re-save would move all 273 at once with nothing to
// distinguish a real edit. The hash is what makes the signal per-post.
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
import { HASH_VERSION, contentHash, postUrl, type FeedRow } from "./seo-indexing"
import { getBlogFeed } from "./blog-feed"

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
       hash_version  INT          NOT NULL DEFAULT 1,
       PRIMARY KEY (post_id),
       KEY idx_last_modified (last_modified)
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
  )
  // For tables created before hash_version existed. MariaDB supports the
  // IF NOT EXISTS form, so this is a no-op once applied.
  try {
    await getPool().query(
      `ALTER TABLE blog_lastmod ADD COLUMN IF NOT EXISTS hash_version INT NOT NULL DEFAULT 1`
    )
  } catch {
    // An older server without IF NOT EXISTS will already have the column from
    // CREATE TABLE above; a genuine failure surfaces on the next query.
  }
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
  hash_version: number
}

export interface RefreshSummary {
  examined: number
  added: number
  updated: number
  unchanged: number
  removed: number
  skipped: number
  /** Rows re-stamped after a hash-version change. Their lastmod did NOT move. */
  restamped: number
  changed: { post_id: number; url: string; reason: string }[]
}

/**
 * Everything the reconcile intends to write, worked out before anything is
 * written. Splitting the decision from the writes is what lets the read path
 * run the same logic as cron and still cost nothing when nothing has changed:
 * an unchanged feed produces an empty plan and therefore zero queries.
 */
interface Plan {
  inserts: { postId: number; url: string; hash: string; seen: string }[]
  updates: { postId: number; url: string; hash: string; reason: string }[]
  restamps: { postId: number; url: string; hash: string }[]
  untouched: number[]
  deletes: number[]
  skipped: number
}

function planReconcile(rows: FeedRow[], stored: Map<number, StoredRow>): Plan {
  const plan: Plan = {
    inserts: [],
    updates: [],
    restamps: [],
    untouched: [],
    deletes: [],
    skipped: 0,
  }
  const live = new Set<number>()

  for (const row of rows) {
    const postId = Number(row.post_id)
    if (!postId) {
      plan.skipped++
      continue
    }

    // Unpublished posts never enter the sitemap.
    if (String(row.status ?? "1") !== "1") {
      plan.skipped++
      continue
    }

    const url = postUrl(row)
    if (!url) {
      plan.skipped++
      continue
    }

    live.add(postId)
    const hash = contentHash(row)
    const prev = stored.get(postId)

    if (!prev) {
      // A post we have never seen enters at its own publish date, not at
      // "whenever this ran" — otherwise a backlog of new posts would all claim
      // to have been modified in the same second.
      plan.inserts.push({ postId, url, hash, seen: publishedAt(row) })
      continue
    }

    // A hash from an older version is not comparable with this one. Re-stamp it
    // to the current algorithm and leave last_modified exactly where it is --
    // treating it as a change would stamp all 273 posts "modified now", which is
    // the signal this whole table exists to avoid sending.
    if (Number(prev.hash_version) !== HASH_VERSION) {
      plan.restamps.push({ postId, url, hash })
      continue
    }

    if (prev.content_hash === hash && prev.url === url) {
      plan.untouched.push(postId)
      continue
    }

    plan.updates.push({
      postId,
      url,
      hash,
      reason: prev.url !== url ? "title changed — new address" : "content edited",
    })
  }

  // Drop anything the feed no longer publishes.
  for (const [postId] of stored) {
    if (!live.has(postId)) plan.deletes.push(postId)
  }

  return plan
}

/** Big IN (...) lists are split so one pass never builds a statement MariaDB refuses. */
function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}

export interface ReconcileOptions {
  /**
   * Bump `checked_at` on rows that did not change.
   *
   * Cron does — it is the audit trail that answers "is the refresher alive".
   * The read path does not: it would turn every sitemap fetch into ~290 writes
   * to record that nothing happened.
   */
  audit?: boolean
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
 *
 * Writes are batched and conditional, so the steady state — the feed unchanged
 * since the last pass — issues exactly one SELECT and no writes at all. That is
 * what makes it safe to call from the sitemap request path; see selfHeal below.
 */
export async function reconcileLastmod(options: ReconcileOptions = {}): Promise<RefreshSummary> {
  const audit = options.audit ?? false
  await ensureTable()

  // getBlogFeed rather than fetchFeed: the same ~11.7 MB download already
  // serves /api/blogs/summaries and every rendered post through one in-process
  // memo, so reconciling costs nothing extra. fetchFeed would pull the whole
  // feed again on its own.
  const rows = await getBlogFeed()

  // An empty feed is a feed that FAILED, not a blog with no posts. Believing it
  // would delete every row and publish an empty sitemap, which reads to Google
  // as "every article was removed" — the one outcome this table must never
  // produce. getBlogFeed returns [] for a response that is not a JSON array, so
  // this is reachable from a plain upstream error page.
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error("blog feed returned no rows — refusing to reconcile")
  }

  const pool = getPool()
  const [existing] = await pool.query(
    `SELECT post_id, url, content_hash, last_modified, hash_version FROM blog_lastmod`
  )
  const stored = new Map<number, StoredRow>()
  for (const r of existing as StoredRow[]) stored.set(Number(r.post_id), r)

  const plan = planReconcile(rows, stored)
  const now = utcNow()

  for (const batch of chunk(plan.inserts, 100)) {
    await pool.query(
      `INSERT INTO blog_lastmod
         (post_id, url, content_hash, last_modified, first_seen, checked_at, hash_version)
       VALUES ${batch.map(() => "(?, ?, ?, ?, ?, ?, ?)").join(", ")}
       ON DUPLICATE KEY UPDATE
         url = VALUES(url),
         content_hash = VALUES(content_hash),
         last_modified = VALUES(last_modified),
         checked_at = VALUES(checked_at),
         hash_version = VALUES(hash_version)`,
      batch.flatMap((i) => [i.postId, i.url, i.hash, i.seen, i.seen, now, HASH_VERSION])
    )
  }

  for (const u of plan.updates) {
    await pool.query(
      `UPDATE blog_lastmod
          SET url = ?, content_hash = ?, last_modified = ?, checked_at = ?, hash_version = ?
        WHERE post_id = ?`,
      [u.url, u.hash, now, now, HASH_VERSION, u.postId]
    )
  }

  for (const r of plan.restamps) {
    await pool.query(
      `UPDATE blog_lastmod SET content_hash = ?, hash_version = ?, url = ?, checked_at = ?
        WHERE post_id = ?`,
      [r.hash, HASH_VERSION, r.url, now, r.postId]
    )
  }

  if (audit) {
    for (const batch of chunk(plan.untouched, 500)) {
      await pool.query(
        `UPDATE blog_lastmod SET checked_at = ? WHERE post_id IN (${batch.map(() => "?").join(", ")})`,
        [now, ...batch]
      )
    }
  }

  for (const batch of chunk(plan.deletes, 500)) {
    await pool.query(
      `DELETE FROM blog_lastmod WHERE post_id IN (${batch.map(() => "?").join(", ")})`,
      batch
    )
  }

  return {
    examined: rows.length,
    added: plan.inserts.length,
    updated: plan.updates.length,
    unchanged: plan.untouched.length,
    removed: plan.deletes.length,
    skipped: plan.skipped,
    restamped: plan.restamps.length,
    changed: [
      ...plan.inserts.map((i) => ({ post_id: i.postId, url: i.url, reason: "new post" })),
      ...plan.updates.map((u) => ({ post_id: u.postId, url: u.url, reason: u.reason })),
    ],
  }
}

/** What cron and POST /api/blog-lastmod call: a reconcile that also records that it ran. */
export async function refreshLastmod(): Promise<RefreshSummary> {
  return reconcileLastmod({ audit: true })
}

// The sitemap is only as current as the last reconcile, and for a month it had
// none: /api/blog-lastmod was written for a cron that was never installed, so
// the table kept the snapshot it seeded itself with on 2026-08-10 and the 17
// posts published after it appeared in NO sitemap at all — app/sitemap.ts had
// already stopped emitting individual post URLs.
//
// The lesson is not "install the cron" (it should be, and is, installed — see
// scripts/blog-lastmod.sh). It is that correctness here must not depend on a
// crontab line anyone can forget, lose to a rebuild, or leave failing quietly.
// So the read path reconciles too: a post cannot be missing from the sitemap
// that is being served, because serving it is what puts the post in.
//
// This is affordable only because reconcileLastmod writes nothing when nothing
// changed and reads the feed through the shared memo. The throttle below caps
// it regardless, and a failure is swallowed — rows already in the table are
// still correct and still worth serving.
const SELF_HEAL_INTERVAL_MS = 5 * 60 * 1000

let lastSelfHeal = 0
let selfHealInFlight: Promise<void> | null = null

async function selfHeal(): Promise<void> {
  if (Date.now() - lastSelfHeal < SELF_HEAL_INTERVAL_MS) return

  if (!selfHealInFlight) {
    selfHealInFlight = reconcileLastmod({ audit: false })
      .then((summary) => {
        if (summary.added || summary.updated || summary.removed) {
          console.log(
            `blog-lastmod self-heal: +${summary.added} ~${summary.updated} -${summary.removed}`
          )
        }
      })
      .catch((error) => {
        console.error("blog-lastmod self-heal failed:", error)
      })
      // Stamped on success and failure alike: a feed that is down should be
      // retried on the next interval, not on every crawler hit in between.
      .finally(() => {
        lastSelfHeal = Date.now()
        selfHealInFlight = null
      })
  }

  return selfHealInFlight
}

export interface SitemapEntry {
  url: string
  lastModified: string // ISO 8601 with Z, the W3C form <lastmod> wants
}

/**
 * Every published blog URL with the date its content last changed.
 *
 * Reconciles against the feed first (throttled, and a no-op when the feed has
 * not moved), so a post published since the last pass is in the document this
 * call returns rather than in the one after the next cron run.
 */
export async function getBlogSitemapEntries(): Promise<SitemapEntry[]> {
  await ensureTable()
  await selfHeal()

  const [rows] = await getPool().query(
    `SELECT url, last_modified FROM blog_lastmod ORDER BY last_modified DESC`
  )

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
