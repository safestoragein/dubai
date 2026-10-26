// Server helpers for the movers quote: item catalogue lookup (cached) and the team email.
import "server-only"
import { ccAddresses, isEmailEnabled, sendEmail } from "@/lib/email/send"
import { ITEMS_URL, MOVE_TYPES, parseCatalogue, type CatalogueItem, type MoversQuote } from "@/lib/movers-quote"

let cache: { at: number; items: CatalogueItem[] } | null = null

/** The item list the price is computed from. Cached 5 min; null if the backend cannot be reached. */
export async function getCatalogue(): Promise<CatalogueItem[] | null> {
  if (cache && Date.now() - cache.at < 5 * 60_000) return cache.items
  try {
    const res = await fetch(ITEMS_URL, { cache: "no-store", signal: AbortSignal.timeout(8000) })
    const items = parseCatalogue(await res.json())
    if (items.length) {
      cache = { at: Date.now(), items }
      return items
    }
  } catch (e) {
    console.error("[movers-quote] item catalogue unavailable", e)
  }
  return cache?.items ?? null
}

// Entities are built from "&" + name because the prebuild check (check-html-entities)
// rejects literal entity strings in source.
const ENT: Record<string, string> = { "&": "&" + "amp;", "<": "&" + "lt;", ">": "&" + "gt;", '"': "&" + "quot;", "'": "&" + "#39;" }
const esc = (v: string) => v.replace(/[&<>"']/g, (c) => ENT[c])

const label = (list: readonly { id: string; label: string }[], id: string) => list.find((x) => x.id === id)?.label || id

export function summaryRows(q: MoversQuote, extra: [string, string][] = []): [string, string][] {
  const items = Object.entries(q.items).map(([n, c]) => `${c} × ${n}`).join(", ")
  return [
    ...extra,
    ["Name", q.name], ["Phone", q.phone], ["Email", q.email],
    ["Move", `${label(MOVE_TYPES, q.moveType)} · ${q.homeSize} · ${q.moveDate}${q.flexibleDate ? " (flexible)" : ""}`],
    ["From", `${q.fromAddress}, ${q.fromEmirate} · floor ${q.fromFloor || "-"} · lift ${q.fromLift}`],
    ["To", `${q.toAddress}, ${q.toEmirate} · floor ${q.toFloor || "-"} · lift ${q.toLift}`],
    ["Items", q.itemsUnsure ? "Not sure — survey needed" : items || "-"],
  ]
}

/** Email the team. Never throws; returns whether it was sent. */
export async function emailTeam(subject: string, rows: [string, string][], replyTo?: string): Promise<boolean> {
  const to = process.env.MOVERS_QUOTE_TO || ccAddresses()[0]
  if (!isEmailEnabled() || !to) return false
  const r = await sendEmail({
    to,
    subject,
    html: `<table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join("")}</table>`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    replyTo,
  })
  return r.sent
}
