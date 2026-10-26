// Pushes packers & movers leads / quotations / payments to the CRM (safestorage.in), where the
// "Dubai Packers & Movers" screens read them (application_back/modules/dubai_movers, controller
// Dubai_movers_intake). Server-to-server with the same shared key as the customer login
// (X-Dubai-Key = DUBAI_BACK_KEY). Never throws and never blocks the customer: a failed push is
// logged, and the row is still in this site's movers_* tables.
import "server-only"
import type { CatalogueItem, MoversQuote } from "@/lib/movers-quote"

// DUBAI_BACK_URL points at .../back/dubai/dubai_auth (see lib/customer-back.ts); the movers module
// is a sibling module, so strip back to .../back.
const BACK_ROOT = (process.env.DUBAI_BACK_URL || "https://safestorage.in/back/dubai/dubai_auth")
  .replace(/\/$/, "")
  .replace(/\/dubai_auth$/, "")
  .replace(/\/dubai$/, "")

async function push(path: "partial" | "quote" | "paid", form: Record<string, string | number | null | undefined>): Promise<boolean> {
  const key = process.env.DUBAI_BACK_KEY || ""
  if (key.length < 32) return false // not configured (e.g. local dev)
  const body = new URLSearchParams()
  for (const [k, v] of Object.entries(form)) if (v !== null && v !== undefined && v !== "") body.set(k, String(v))
  try {
    const res = await fetch(`${BACK_ROOT}/dubai_movers/dubai_movers_intake/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Dubai-Key": key },
      body: body.toString(),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) console.error(`[movers-crm] ${path} -> HTTP ${res.status}`, (await res.text()).slice(0, 200))
    return res.ok
  } catch (e) {
    console.error(`[movers-crm] ${path} failed`, e)
    return false
  }
}

export const pushMoversPartial = (p: { leadKey: string; name: string; phone: string; email: string; step: number }) =>
  push("partial", { lead_key: p.leadKey, name: p.name, phone: p.phone, email: p.email, step: p.step, created_at: new Date().toISOString() })

export function pushMoversQuote(args: {
  reference: string
  leadKey?: string
  q: MoversQuote
  catalogue: CatalogueItem[]
  pricing: { points: number; pallets: number; totalAed: number; distanceKm: number | null; amountDueAed: number | null; paymentStatus: string }
  stripeSessionId?: string
}) {
  const { q, pricing } = args
  const points = new Map(args.catalogue.map((c) => [c.name, c.points]))
  const items = Object.entries(q.items).map(([name, quantity]) => ({ name, quantity, points: points.get(name) ?? null }))
  return push("quote", {
    reference: args.reference,
    lead_key: args.leadKey,
    name: q.name, phone: q.phone, email: q.email,
    move_type: q.moveType, home_size: q.homeSize, move_date: q.moveDate,
    from_address: q.fromAddress, from_emirate: q.fromEmirate, from_floor: q.fromFloor, from_lift: q.fromLift,
    to_address: q.toAddress, to_emirate: q.toEmirate, to_floor: q.toFloor, to_lift: q.toLift,
    distance_km: pricing.distanceKm, total_points: pricing.points, pallets: pricing.pallets,
    transport_total_aed: pricing.totalAed, amount_due_aed: pricing.amountDueAed,
    payment_status: pricing.paymentStatus,
    stripe_session_id: args.stripeSessionId,
    items: JSON.stringify(items),
    created_at: new Date().toISOString(),
  })
}

export const pushMoversPaid = (p: { reference: string; sessionId: string; paymentRef: string; amountAed: number }) =>
  push("paid", { reference: p.reference, stripe_session_id: p.sessionId, payment_ref: p.paymentRef, amount_aed: p.amountAed, paid_at: new Date().toISOString() })
