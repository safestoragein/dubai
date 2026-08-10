// Google Indexing API — tells Google when a blog post is added or edited.
//
// WHAT IT DOES. Reads the same safestorage.in feed the blog pages read, works
// out which posts have changed since we last announced them, and sends one
// URL_UPDATED notification per changed post. Driven by cron via
// /api/seo-index; nothing here runs during a page render.
//
//   INDEXED    a post the ledger has never seen      -> URL_UPDATED
//   REINDEXED  a post it already knows, now changed  -> URL_UPDATED
//   DELETED    the address a retitle left behind     -> URL_DELETED  (opt-in)
//
// HOW "CHANGED" IS DECIDED, AND WHY IT IS A HASH. The feed has no updated_at —
// only created_at, which does not move when someone edits a post. There is no
// timestamp on either side that can answer "has this changed", so comparing
// clocks is not merely unreliable here, it is impossible. Instead every field
// that reaches the rendered page is hashed at submission time and the hash is
// stored with the row. Different hash means edited; identical means done. One
// value, one source, compared with ===, and no timezone is involved anywhere.
//
// WHAT A 200 MEANS. Google documents this API for JobPosting and BroadcastEvent
// pages only. It answers 200 for any URL on a property the service account
// owns, including blog posts, and may then discard the notification. An
// accepted call means the request was well-formed — not that the page will be
// crawled. Search Console's URL Inspection is the only honest answer to "did it
// work", and that is a separate API on a separate quota.
import "server-only"
import { createHash, createSign } from "crypto"
import { readFileSync } from "fs"
import { blogSlug } from "./blog-post"
import {
  getRetiredUrls,
  getStats,
  getSubmittedState,
  hasBaseline,
  importBaseline,
  quotaUsedToday,
  recordSubmission,
  type IndexAction,
} from "./seo-index-db"

const FEED = "https://safestorage.in/get_blog_content"
const SITE = "https://safestorage.ae"
const PUBLISH_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish"
const TOKEN_URL = "https://oauth2.googleapis.com/token"
const SCOPE = "https://www.googleapis.com/auth/indexing"

/** Google's per-project default. Raise it in the Cloud console before raising it here. */
export const QUOTA = Number(process.env.SEO_INDEX_QUOTA || 200)

/**
 * Send URL_DELETED for the address a post used to live at.
 *
 * OFF by default because URL_DELETED cannot be undone. It is correct on this
 * site — /blog/[slug] only resolves a stale slug when it carries a numeric
 * "<post-id>-" prefix, so a plain retitle leaves the old address returning a
 * genuine 404 — but "correct in principle" is not a reason to enable an
 * irreversible call without someone deciding to. Set SEO_INDEX_RETIRE_OLD=true.
 */
const RETIRE_OLD = process.env.SEO_INDEX_RETIRE_OLD === "true"

/** Cron has nobody waiting on it; giving up early just leaves the queue full. */
const TIMEOUT_MS = 30_000

export interface FeedRow {
  post_id: number | string
  title?: string | null
  seo_title?: string | null
  seo_desc?: string | null
  description?: string | null
  post_images?: string | null
  tags?: string | null
  post_category?: string | null
  status?: string | null
  created_at?: string | null
}

/* ------------------------------------------------------------------ URLs -- */

/**
 * The public address of a post.
 *
 * blogSlug is imported rather than re-implemented: it is what /blog/[slug]
 * canonicalises to and what app/sitemap.ts publishes. A URL built any other way
 * would teach Google a second address for the same content, which is worse than
 * not submitting at all.
 */
export function postUrl(row: FeedRow): string | null {
  const title = row.title || row.seo_title || ""
  const slug = blogSlug(title)
  if (!slug) return null // an empty title slugs to "", which is not a page
  return `${SITE}/blog/${slug}`
}

/**
 * Everything about a post that changes what the page says.
 *
 * post_id and created_at are excluded deliberately: the id never changes, and
 * created_at is rewritten by the upstream dashboard on saves that alter
 * nothing a reader would notice. Including it would resubmit posts for free.
 */
export function contentHash(row: FeedRow): string {
  return createHash("sha256")
    .update(
      JSON.stringify([
        row.title ?? "",
        row.seo_title ?? "",
        row.seo_desc ?? "",
        row.description ?? "",
        row.post_images ?? "",
        row.tags ?? "",
        row.post_category ?? "",
        row.status ?? "",
      ])
    )
    .digest("hex")
}

/* --------------------------------------------------------------- Google -- */

interface ServiceAccount {
  client_email: string
  private_key: string
}

export type KeySource =
  | "GOOGLE_INDEXING_KEY_FILE"
  | "GOOGLE_INDEXING_KEY_B64"
  | "GOOGLE_INDEXING_KEY_JSON"

export interface KeyStatus {
  loaded: boolean
  /** Which variable the key was read from, or null when none is set. */
  source: KeySource | null
  client_email: string | null
  /** Why it is not loaded, in terms an operator can act on. null when loaded. */
  error: string | null
}

interface Resolved {
  creds: ServiceAccount | null
  status: KeyStatus
}

let resolvedMemo: Resolved | undefined

/**
 * Resolve the service-account key, recording *why* when it cannot be.
 *
 * The key comes from the environment only. Never from a file inside the repo:
 * `git checkout -f` on every deploy would fight it, and a key under the app
 * directory is one nginx location block from being served.
 *
 * Three sources, in the order they are preferred:
 *
 *   GOOGLE_INDEXING_KEY_FILE  a path outside the repo, mode 600. Preferred:
 *                             the file is the JSON exactly as downloaded, so
 *                             nothing can mangle it in transit.
 *   GOOGLE_INDEXING_KEY_B64   base64 of that file. For hosts where only env
 *                             vars are available — survives any .env parser
 *                             because it contains no quotes, spaces or newlines.
 *   GOOGLE_INDEXING_KEY_JSON  the JSON inline, which must be on ONE line.
 *
 * Every failure returns a specific reason rather than a bare null. "Not loaded"
 * on its own cannot distinguish an unset variable from an unreadable path, a
 * truncated paste or an OAuth client download, and an operator staring at a
 * dashboard has no way to tell which of those they are looking at.
 */
function resolveServiceAccount(): Resolved {
  if (resolvedMemo) return resolvedMemo

  const fail = (error: string, source: KeySource | null = null): Resolved =>
    (resolvedMemo = { creds: null, status: { loaded: false, source, client_email: null, error } })

  let raw = ""
  let source: KeySource

  if (process.env.GOOGLE_INDEXING_KEY_FILE) {
    source = "GOOGLE_INDEXING_KEY_FILE"
    const path = process.env.GOOGLE_INDEXING_KEY_FILE
    try {
      raw = readFileSync(path, "utf8")
    } catch (e) {
      const code = (e as NodeJS.ErrnoException).code
      const why =
        code === "ENOENT"
          ? "no such file"
          : code === "EACCES"
            ? "permission denied — the file must be readable by the user running the app"
            : code || (e as Error).message
      return fail(`cannot read ${path}: ${why}`, source)
    }
  } else if (process.env.GOOGLE_INDEXING_KEY_B64) {
    source = "GOOGLE_INDEXING_KEY_B64"
    raw = Buffer.from(process.env.GOOGLE_INDEXING_KEY_B64, "base64").toString("utf8")
  } else if (process.env.GOOGLE_INDEXING_KEY_JSON) {
    source = "GOOGLE_INDEXING_KEY_JSON"
    raw = process.env.GOOGLE_INDEXING_KEY_JSON
  } else {
    return fail(
      "no key configured. Set GOOGLE_INDEXING_KEY_FILE to a path outside the repo " +
        "(mode 600), or GOOGLE_INDEXING_KEY_B64, or GOOGLE_INDEXING_KEY_JSON on one line."
    )
  }

  raw = raw.trim()
  // Some .env parsers keep the wrapping quotes as part of the value.
  if ((raw.startsWith("'") && raw.endsWith("'")) || (raw.startsWith('"') && raw.endsWith('"'))) {
    raw = raw.slice(1, -1).trim()
  }
  if (!raw) return fail(`${source} is set but empty`, source)

  // Advice only makes sense against the source it came from: telling someone
  // reading a file that "inline JSON must be on one line" sends them to fix
  // something they are not using.
  const fromFile = source === "GOOGLE_INDEXING_KEY_FILE"

  let j: Record<string, unknown>
  try {
    j = JSON.parse(raw)
  } catch (e) {
    return fail(
      `${source} is not valid JSON (${(e as Error).message}). ` +
        (fromFile
          ? `The file is not the key as Google issued it — re-download it.`
          : `Inline JSON must be on a single line; GOOGLE_INDEXING_KEY_FILE avoids the problem entirely.`),
      source
    )
  }

  // The "Desktop app" OAuth client download is the common mix-up and Google's
  // own error for it is unhelpful, so name it here instead.
  if (j.installed || j.web) {
    return fail(
      `${source} holds an OAuth client download, not a service-account key. Download ` +
        `the key from the service account's own Keys tab.`,
      source
    )
  }
  if (j.type && j.type !== "service_account") {
    return fail(`${source} has type "${String(j.type)}", expected "service_account"`, source)
  }

  const missing = [!j.client_email && "client_email", !j.private_key && "private_key"].filter(
    Boolean
  )
  if (missing.length) return fail(`${source} is missing ${missing.join(" and ")}`, source)

  // Survives being pasted into .env.local, where the newlines arrive escaped.
  const privateKey = String(j.private_key).replace(/\\n/g, "\n")

  // Sign once here so a mangled PEM fails at load with a reason, rather than on
  // the first submission inside a cron run nobody is watching.
  try {
    const probe = createSign("RSA-SHA256")
    probe.update("preflight")
    probe.sign(privateKey)
  } catch (e) {
    return fail(
      `${source} private_key is not a usable RSA key (${(e as Error).message}). ` +
        (fromFile
          ? `The PEM in the file is damaged — re-download the key from Google.`
          : `Its newlines were most likely lost in the paste; GOOGLE_INDEXING_KEY_FILE avoids that.`),
      source
    )
  }

  const clientEmail = String(j.client_email)
  return (resolvedMemo = {
    creds: { client_email: clientEmail, private_key: privateKey },
    status: { loaded: true, source, client_email: clientEmail, error: null },
  })
}

export function loadServiceAccount(): ServiceAccount | null {
  return resolveServiceAccount().creds
}

/** Whether a key is loaded and, when it is not, precisely what is wrong. */
export function serviceAccountStatus(): KeyStatus {
  return resolveServiceAccount().status
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

let tokenMemo: { token: string; expires: number } | null = null

/**
 * A service-account JWT exchanged for an OAuth2 access token.
 *
 * Hand-rolled with node:crypto rather than pulling in googleapis — this is one
 * signature and one form post, and the dependency is 50 MB. Treated as expired
 * two minutes early so a token never dies mid-flight.
 */
export async function getAccessToken(force = false): Promise<{ ok: true; token: string } | { ok: false; error: string }> {
  const creds = loadServiceAccount()
  if (!creds) {
    // The resolver already worked out exactly what is wrong; repeating a
    // generic message here would throw that away.
    return { ok: false, error: serviceAccountStatus().error || "no service account key" }
  }

  if (!force && tokenMemo && tokenMemo.expires > Date.now() + 120_000) {
    return { ok: true, token: tokenMemo.token }
  }

  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const claim = b64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      exp: now + 3600,
      iat: now,
    })
  )

  let signature: string
  try {
    const signer = createSign("RSA-SHA256")
    signer.update(`${header}.${claim}`)
    signature = b64url(signer.sign(creds.private_key))
  } catch {
    return { ok: false, error: "could not sign the JWT — private_key is not a usable RSA key" }
  }

  let res: Response
  try {
    res = await fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: `${header}.${claim}.${signature}`,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    })
  } catch (e) {
    return { ok: false, error: `token request failed: ${(e as Error).message}` }
  }

  const body = await res.text()
  let j: Record<string, unknown> = {}
  try {
    j = JSON.parse(body)
  } catch {
    /* fall through to the error below */
  }

  if (!res.ok || !j.access_token) {
    let why = String(j.error_description || body.slice(0, 200))
    // invalid_grant on a key that used to work is almost always the server
    // clock: Google rejects a JWT issued in its own future. The raw message
    // never says so.
    if (body.includes("invalid_grant")) why += " (if the key is unchanged, check the server clock)"
    return { ok: false, error: `token HTTP ${res.status}: ${why}` }
  }

  tokenMemo = {
    token: String(j.access_token),
    expires: Date.now() + Number(j.expires_in || 3600) * 1000,
  }
  return { ok: true, token: tokenMemo.token }
}

export interface PublishResult {
  ok: boolean
  url: string
  type: "URL_UPDATED" | "URL_DELETED"
  action: IndexAction
  post_id: number | null
  http_status: number | null
  error: string | null
}

/** Send one notification, record it, return what happened. */
async function publish(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED",
  action: IndexAction,
  postId: number | null,
  hash: string | null,
  source: string
): Promise<PublishResult> {
  // Never spend a quota unit on a URL Google will reject anyway.
  if (!url.startsWith(`${SITE}/`)) {
    const r: PublishResult = {
      ok: false, url, type, action, post_id: postId, http_status: null,
      error: `not a URL on ${SITE}`,
    }
    await recordSubmission({
      post_id: postId, url, notify_type: type, action, content_hash: hash,
      ok: false, http_status: null, error: r.error, source,
    })
    return r
  }

  let tok = await getAccessToken()
  if (!tok.ok) {
    const r: PublishResult = {
      ok: false, url, type, action, post_id: postId, http_status: null, error: tok.error,
    }
    await recordSubmission({
      post_id: postId, url, notify_type: type, action, content_hash: hash,
      ok: false, http_status: null, error: tok.error, source,
    })
    return r
  }

  const call = (token: string) =>
    fetch(PUBLISH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url, type }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    })

  let status: number | null = null
  let parsed: unknown = null
  let error: string | null = null

  try {
    let res = await call(tok.token)

    // A cached token can expire between the check and the call. One forced
    // refresh, then give up — a 401 loop would be worse than a miss.
    if (res.status === 401) {
      tok = await getAccessToken(true)
      if (tok.ok) res = await call(tok.token)
    }

    status = res.status
    const text = await res.text()
    try {
      parsed = JSON.parse(text)
    } catch {
      parsed = text.slice(0, 500)
    }

    if (!res.ok) {
      const msg = (parsed as { error?: { message?: string } })?.error?.message || `HTTP ${res.status}`
      error = msg
      const email = loadServiceAccount()?.client_email || "the service account"
      if (res.status === 403) {
        error += ` (add ${email} as an OWNER of the safestorage.ae property in Search Console, and enable the Indexing API)`
      } else if (res.status === 429) {
        error += ` (daily quota exhausted — the project default is ${QUOTA}/day)`
      }
    }
  } catch (e) {
    error = `request failed: ${(e as Error).message}`
  }

  const ok = error === null
  await recordSubmission({
    post_id: postId, url, notify_type: type, action, content_hash: hash,
    ok, http_status: status, error, response: parsed, source,
  })

  return { ok, url, type, action, post_id: postId, http_status: status, error }
}

/* ------------------------------------------------------------------- run -- */

export interface PendingItem {
  post_id: number
  url: string
  action: IndexAction
  type: "URL_UPDATED" | "URL_DELETED"
  hash: string | null
  reason: string
}

export interface RunSummary {
  mode: "live" | "dry-run"
  examined: number
  pending: number
  indexed: number
  reindexed: number
  deleted: number
  failed: number
  skipped: number
  quota_used: number
  quota_limit: number
  quota_stopped: boolean
  baseline_imported: number
  results: PublishResult[]
  items?: PendingItem[]
  error?: string
}

export async function fetchFeed(): Promise<FeedRow[]> {
  const res = await fetch(FEED, { cache: "no-store", signal: AbortSignal.timeout(60_000) })
  if (!res.ok) throw new Error(`feed HTTP ${res.status}`)
  const rows = await res.json()
  if (!Array.isArray(rows)) throw new Error("feed did not return an array")
  return rows as FeedRow[]
}

/**
 * Work out what needs announcing, without announcing any of it.
 *
 * Used by the dry run and the status endpoint, and by the live run itself, so a
 * preview can never disagree with what the run will actually do.
 */
export async function buildQueue(rows: FeedRow[]): Promise<{ items: PendingItem[]; skipped: number; baseline: number }> {
  // First run only: learn what already exists. Everything after is measured
  // against that snapshot.
  let baseline = 0
  if (!(await hasBaseline())) {
    const seed = rows
      .filter((r) => String(r.status ?? "1") === "1")
      .map((r) => {
        const url = postUrl(r)
        return url ? { post_id: Number(r.post_id), url, content_hash: contentHash(r) } : null
      })
      .filter((e): e is { post_id: number; url: string; content_hash: string } => e !== null)
    baseline = await importBaseline(seed)
  }

  const state = await getSubmittedState()
  const retired = RETIRE_OLD ? await getRetiredUrls() : new Set<string>()

  const items: PendingItem[] = []
  let skipped = 0

  for (const row of rows) {
    const postId = Number(row.post_id)
    if (!postId) continue

    // Unpublished posts are not announced. If one was live and has since been
    // pulled, that is a deletion the team should make deliberately, not a side
    // effect of a status flag.
    if (String(row.status ?? "1") !== "1") {
      skipped++
      continue
    }

    const url = postUrl(row)
    if (!url) {
      skipped++
      continue
    }

    const hash = contentHash(row)
    const prev = state.get(postId)

    // Retire the address a retitle left behind, before announcing the new one.
    // The other order leaves a window in which the last thing Google heard is
    // that the page is gone.
    if (RETIRE_OLD && prev && prev.url !== url && !retired.has(prev.url)) {
      items.push({
        post_id: postId,
        url: prev.url,
        action: "DELETED",
        type: "URL_DELETED",
        hash: null,
        reason: "title changed — this address now 404s",
      })
    }

    if (prev && prev.content_hash === hash && prev.url === url) {
      skipped++ // unchanged since we last announced it
      continue
    }

    items.push({
      post_id: postId,
      url,
      action: prev ? "REINDEXED" : "INDEXED",
      type: "URL_UPDATED",
      hash,
      reason: !prev
        ? "new post"
        : prev.url !== url
          ? "title changed — new address"
          : "content changed since last submission",
    })
  }

  return { items, skipped, baseline }
}

/**
 * One pass.
 *
 * @param live   false builds the queue and sends nothing
 * @param source what the ledger records this run as
 */
export async function runIndexing(live: boolean, source = "cron"): Promise<RunSummary> {
  const summary: RunSummary = {
    mode: live ? "live" : "dry-run",
    examined: 0, pending: 0, indexed: 0, reindexed: 0, deleted: 0,
    failed: 0, skipped: 0,
    quota_used: 0, quota_limit: QUOTA, quota_stopped: false,
    baseline_imported: 0,
    results: [],
  }

  const rows = await fetchFeed()
  summary.examined = rows.length

  const { items, skipped, baseline } = await buildQueue(rows)
  summary.skipped = skipped
  summary.baseline_imported = baseline
  summary.pending = items.length

  const used = await quotaUsedToday()
  summary.quota_used = used
  let remaining = Math.max(0, QUOTA - used)

  if (!live) {
    summary.items = items
    return summary
  }

  for (const item of items) {
    // Stop before the call that would exceed the budget, not after.
    if (remaining < 1) {
      summary.quota_stopped = true
      break
    }

    const r = await publish(item.url, item.type, item.action, item.post_id, item.hash, source)
    summary.results.push(r)
    remaining--

    if (r.ok) {
      if (r.action === "INDEXED") summary.indexed++
      else if (r.action === "REINDEXED") summary.reindexed++
      else summary.deleted++
    } else {
      summary.failed++
    }
  }

  summary.quota_used = await quotaUsedToday()
  return summary
}

/** Read-only snapshot for the status endpoint. Sends nothing, spends nothing. */
export async function getStatus() {
  const key = serviceAccountStatus()
  const rows = await fetchFeed()
  const { items, skipped } = await buildQueue(rows)

  return {
    site: SITE,
    feed_posts: rows.length,
    service_account: key.client_email,
    service_account_source: key.source,
    service_account_error: key.error,
    retire_old: RETIRE_OLD,
    quota: { used: await quotaUsedToday(), limit: QUOTA },
    queue: { pending: items.length, skipped, items: items.slice(0, 25) },
    ledger: await getStats(),
  }
}
