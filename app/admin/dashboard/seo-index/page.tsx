"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Google Indexing — what we have told Google about each blog post, and what the
// next cron run would tell it.
//
// Rows load once and filter in the browser. At a few hundred submissions that
// beats a round trip per tab click, and the page keeps working if the queue
// lookup (which pulls the 8.5 MB feed) is slow or fails.

type Row = {
  id: number
  created_at: string
  action: string | null
  notify_type: string
  url: string
  post_id: number | null
  ok: number
  http_status: number | null
  error: string | null
  source: string
}

type QueueItem = {
  post_id: number
  url: string
  action: string
  type: string
  reason: string
}

type Data = {
  stats: {
    indexed: number
    reindexed: number
    deleted: number
    failed: number
    baseline: number
    today: number
    last_run: string | null
  }
  rows: Row[]
  quota: { used: number; limit: number }
  queue?: { pending: number; skipped: number; items: QueueItem[] }
  queue_error?: string
  feed_posts?: number
  service_account?: string | null
  service_account_source?: string | null
  service_account_error?: string | null
  retire_old?: boolean
}

const ACTION_STYLE: Record<string, string> = {
  INDEXED: "bg-emerald-100 text-emerald-800 border-emerald-200",
  REINDEXED: "bg-blue-100 text-blue-800 border-blue-200",
  DELETED: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
  FAILED: "bg-red-100 text-red-800 border-red-200",
  DUE: "bg-amber-100 text-amber-800 border-amber-200",
}

function Pill({ label }: { label: string }) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-[11px] font-semibold tracking-wide ${
        ACTION_STYLE[label] || "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      {label}
    </span>
  )
}

type View = "due" | "all" | "INDEXED" | "REINDEXED" | "DELETED" | "FAILED"

export default function SeoIndexPage() {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(true)
  const [queueLoading, setQueueLoading] = useState(false)
  const [running, setRunning] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<View>("all")
  const [q, setQ] = useState("")

  const load = useCallback(async (withQueue: boolean) => {
    if (withQueue) setQueueLoading(true)
    try {
      const res = await fetch(`/api/admin/seo-index${withQueue ? "?queue=1" : ""}`, {
        credentials: "include",
      })
      const j = await res.json()
      if (j.status !== "success") throw new Error(j.message || "Request failed")
      setData((prev) => (withQueue ? j : { ...j, ...(prev?.queue ? { queue: prev.queue } : {}) }))
      setError(null)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
      setQueueLoading(false)
    }
  }, [])

  useEffect(() => {
    // First paint shows the history immediately; the queue arrives after.
    load(false).then(() => load(true))
  }, [load])

  async function run(dry: boolean) {
    setRunning(true)
    setMessage(null)
    try {
      const res = await fetch(`/api/admin/seo-index${dry ? "?dry=1" : ""}`, {
        method: "POST",
        credentials: "include",
      })
      const j = await res.json()
      if (j.status !== "success") throw new Error(j.message || "Run failed")
      setMessage(
        dry
          ? `Dry run: ${j.pending} would be submitted, ${j.skipped} unchanged. Nothing was sent.`
          : `Sent — indexed ${j.indexed}, reindexed ${j.reindexed}, deleted ${j.deleted}, failed ${j.failed}.` +
            (j.quota_stopped ? " Stopped at the daily quota." : "")
      )
      await load(true)
    } catch (e) {
      setMessage(`Error: ${(e as Error).message}`)
    } finally {
      setRunning(false)
    }
  }

  const rows = data?.rows || []
  const queue = data?.queue?.items || []

  const filtered = (() => {
    const needle = q.trim().toLowerCase()
    if (view === "due") {
      return queue.filter(
        (i) => !needle || i.url.toLowerCase().includes(needle) || String(i.post_id) === needle
      )
    }
    return rows
      .filter((r) => {
        if (view === "all") return true
        if (view === "FAILED") return !r.ok
        return r.ok === 1 && r.action === view
      })
      .filter(
        (r) => !needle || r.url.toLowerCase().includes(needle) || String(r.post_id) === needle
      )
  })()

  const counts = {
    due: data?.queue?.pending ?? null,
    all: rows.length,
    INDEXED: rows.filter((r) => r.ok === 1 && r.action === "INDEXED").length,
    REINDEXED: rows.filter((r) => r.ok === 1 && r.action === "REINDEXED").length,
    DELETED: rows.filter((r) => r.ok === 1 && r.action === "DELETED").length,
    FAILED: rows.filter((r) => !r.ok).length,
  }

  const quotaPct = data ? Math.min(100, (data.quota.used / data.quota.limit) * 100) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Google Indexing</h2>
          <p className="mt-1 text-gray-600">
            What we have told Google about each blog post, and what the next run would tell it.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => load(true)} disabled={queueLoading}>
            {queueLoading ? "Refreshing…" : "Refresh"}
          </Button>
          <Button variant="outline" size="sm" onClick={() => run(true)} disabled={running}>
            Dry run
          </Button>
          <Button size="sm" onClick={() => run(false)} disabled={running || counts.due === 0}>
            {running ? "Working…" : `Send now${counts.due ? ` (${counts.due})` : ""}`}
          </Button>
        </div>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
          {message}
        </div>
      )}

      {data?.queue_error && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <b>Could not work out what is due:</b> {data.queue_error} — the history below is
          unaffected.
        </div>
      )}

      {/* The reason comes from the resolver rather than being restated here, so
          the page can tell an unset variable apart from an unreadable path, a
          truncated paste or an OAuth client download. */}
      {data && !data.service_account && (
        <div className="space-y-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <div>
            <b>No service account key loaded.</b> Nothing can be submitted until this is fixed.
          </div>
          {data.service_account_error && (
            <div className="font-mono text-xs leading-relaxed text-red-900">
              {data.service_account_error}
            </div>
          )}
          <div className="text-xs text-red-900/80">
            The key is read from the environment at startup, so it takes a restart of{" "}
            <code>safestorage.service</code> to pick up — not a rebuild. Keep it outside the
            repo: the deploy hook runs <code>git checkout -f</code>.
          </div>
        </div>
      )}

      {/* Headline counters */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Stat label="Due next run" value={counts.due} tone="text-amber-600" />
        <Stat label="Indexed" value={data?.stats.indexed ?? 0} tone="text-emerald-600" />
        <Stat label="Reindexed" value={data?.stats.reindexed ?? 0} tone="text-blue-600" />
        <Stat label="Deleted" value={data?.stats.deleted ?? 0} tone="text-fuchsia-600" />
        <Stat label="Failed" value={data?.stats.failed ?? 0} tone="text-red-600" />
        <Stat label="Sent today" value={data?.stats.today ?? 0} tone="text-gray-900" />
      </div>

      {/* Quota + context strip */}
      <Card>
        <CardContent className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-sm">
          <div className="min-w-[190px]">
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
              Quota today (UTC)
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded bg-gray-200">
              <div
                className={`h-full ${quotaPct > 85 ? "bg-red-500" : "bg-emerald-500"}`}
                style={{ width: `${quotaPct}%` }}
              />
            </div>
            <div className="mt-1 text-gray-600">
              {data?.quota.used ?? 0} of {data?.quota.limit ?? 0} used
            </div>
          </div>

          <Field label="Posts in feed" value={data?.feed_posts ?? "—"} />
          <Field label="Already existed" value={data?.stats.baseline ?? 0} />
          <Field
            label="Retire old URLs"
            value={data?.retire_old ? "on" : "off"}
          />
          <Field
            label="Last submission"
            value={data?.stats.last_run ? `${data.stats.last_run} UTC` : "never"}
          />
          <Field
            label="Service account"
            value={
              data?.service_account
                ? `${data.service_account}${data.service_account_source ? ` (via ${data.service_account_source})` : ""}`
                : "not loaded"
            }
          />
        </CardContent>
      </Card>

      {/* Tabs + search */}
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            ["due", `Due next run${counts.due !== null ? ` (${counts.due})` : ""}`],
            ["all", `All activity (${counts.all})`],
            ["INDEXED", `Indexed (${counts.INDEXED})`],
            ["REINDEXED", `Reindexed (${counts.REINDEXED})`],
            ["DELETED", `Deleted (${counts.DELETED})`],
            ["FAILED", `Failed (${counts.FAILED})`],
          ] as [View, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
              view === key
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {label}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by URL or post id…"
          className="ml-auto w-64 rounded-md border border-gray-200 px-3 py-1.5 text-sm outline-none focus:border-gray-900"
        />
      </div>

      {/* The list */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">
            {view === "due" ? "Queued — nothing here has been submitted" : "Submission history"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-y bg-gray-50 text-left text-[11px] uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-2.5 font-semibold">Action</th>
                  <th className="px-4 py-2.5 font-semibold">URL</th>
                  <th className="px-4 py-2.5 font-semibold">Post</th>
                  {view === "due" ? (
                    <th className="px-4 py-2.5 font-semibold">Why</th>
                  ) : (
                    <>
                      <th className="px-4 py-2.5 font-semibold">HTTP</th>
                      <th className="px-4 py-2.5 font-semibold">Source</th>
                      <th className="px-4 py-2.5 font-semibold">When (UTC)</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                      {view === "due" ? (
                        <>
                          <b className="block text-gray-700">Nothing queued</b>
                          Every published post matches what we last sent Google. Edit a post
                          and it appears here.
                        </>
                      ) : (
                        <>
                          <b className="block text-gray-700">Nothing yet</b>
                          {data?.stats.baseline
                            ? `${data.stats.baseline} posts were recorded as already existing, so they are not announced as new.`
                            : "No submissions recorded."}
                        </>
                      )}
                    </td>
                  </tr>
                )}

                {view === "due"
                  ? (filtered as QueueItem[]).map((i) => (
                      <tr key={`${i.post_id}-${i.url}`} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="px-4 py-2.5">
                          <Pill label={i.action} />
                        </td>
                        <td className="px-4 py-2.5">
                          <a
                            href={i.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 hover:underline"
                          >
                            {i.url.replace("https://safestorage.ae", "")}
                          </a>
                        </td>
                        <td className="px-4 py-2.5 tabular-nums text-gray-600">{i.post_id}</td>
                        <td className="px-4 py-2.5 text-gray-600">{i.reason}</td>
                      </tr>
                    ))
                  : (filtered as Row[]).map((r) => (
                      <tr key={r.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="px-4 py-2.5">
                          <Pill label={r.ok ? r.action || "SUBMITTED" : "FAILED"} />
                        </td>
                        <td className="px-4 py-2.5">
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 hover:underline"
                          >
                            {r.url.replace("https://safestorage.ae", "")}
                          </a>
                          {r.error && (
                            <div className="mt-0.5 text-xs text-red-700">{r.error}</div>
                          )}
                        </td>
                        <td className="px-4 py-2.5 tabular-nums text-gray-600">
                          {r.post_id ?? "—"}
                        </td>
                        <td className="px-4 py-2.5 tabular-nums text-gray-600">
                          {r.http_status ?? "—"}
                        </td>
                        <td className="px-4 py-2.5 text-gray-600">{r.source}</td>
                        <td className="px-4 py-2.5 whitespace-nowrap tabular-nums text-gray-600">
                          {r.created_at}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs leading-relaxed text-gray-500">
        A 200 from Google means the request was accepted, not that the page will be crawled —
        the Indexing API is documented for JobPosting and BroadcastEvent pages only, and may
        discard notifications for anything else. Times are UTC, which is the calendar the
        daily quota resets on.
      </p>
    </div>
  )
}

function Stat({ label, value, tone }: { label: string; value: number | null; tone: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</div>
        <div className={`mt-1 text-3xl font-bold tabular-nums ${tone}`}>
          {value === null ? "…" : value}
        </div>
      </CardContent>
    </Card>
  )
}

function Field({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-0.5 break-all text-gray-800">{value}</div>
    </div>
  )
}
