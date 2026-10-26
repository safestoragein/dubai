import { NextRequest, NextResponse } from "next/server"
import { ccAddresses, isEmailEnabled, sendEmail } from "@/lib/email/send"
import { EXTRAS, ITEM_GROUPS, MOVE_TYPES, PACKING_LEVELS, validateAll, type MoversQuote } from "@/lib/movers-quote"

// Packers & movers quote intake (separate from the storage funnel — nothing here touches
// /get-quote or its CRM endpoints).
//
// There is no CRM endpoint for movers leads yet, so each request is emailed to the team via
// Resend (reply-to = the customer). If the email cannot be sent the form answers 503 and shows
// the customer a "call us" message — it never claims "received" for a lead that went nowhere
// (the /contact form once swallowed every enquiry this way — BUSINESS.md §10.1).
// Development without RESEND_API_KEY: the lead is logged and the form succeeds.
// MOVERS_QUOTE_TO overrides the recipient (default: first RESEND_CC address).

// HTML-escape for the email body. Entities are built from "&" + name because the prebuild
// check (check-html-entities) rejects literal entity strings in source.
const ENT: Record<string, string> = { "&": "&" + "amp;", "<": "&" + "lt;", ">": "&" + "gt;", '"': "&" + "quot;", "'": "&" + "#39;" }
const esc = (v: string) => v.replace(/[&<>"']/g, (c) => ENT[c])
const unavailable = () =>
  NextResponse.json({ status: "error", message: "We could not send your request just now. Please call or WhatsApp us." }, { status: 503 })

function summary(q: MoversQuote): [string, string][] {
  const name = (list: readonly { id: string; label: string }[], id: string) => list.find((x) => x.id === id)?.label || id
  const all = ITEM_GROUPS.flatMap((g) => g.items)
  const items = Object.entries(q.items).map(([id, n]) => `${n} × ${name(all, id)}`).join(", ")
  return [
    ["Name", q.name], ["Phone", q.phone], ["Email", q.email],
    ["Move", `${name(MOVE_TYPES, q.moveType)} · ${q.homeSize} · ${q.moveDate}${q.flexibleDate ? " (flexible)" : ""}`],
    ["From", `${q.fromAddress}, ${q.fromEmirate} · floor ${q.fromFloor || "-"} · lift ${q.fromLift}`],
    ["To", `${q.toAddress}, ${q.toEmirate} · floor ${q.toFloor || "-"} · lift ${q.toLift}`],
    ["Packing", name(PACKING_LEVELS, q.packing)],
    ["Extras", q.extras.map((x) => name(EXTRAS, x)).join(", ") || "-"],
    ["Items", q.itemsUnsure ? "Not sure — survey needed" : items || "-"],
    ["Notes", q.notes || "-"],
  ]
}

const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: NextRequest) {
  let raw: Record<string, unknown>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ status: "error", message: "Invalid request" }, { status: 400 })
  }

  // Honeypot: bots fill the hidden field; answer as if it worked and drop it.
  if (str(raw.website)) return NextResponse.json({ status: "success", reference: "MV-0" })

  const items: Record<string, number> = {}
  if (raw.items && typeof raw.items === "object") {
    for (const [k, v] of Object.entries(raw.items as Record<string, unknown>)) {
      const n = Number(v)
      if (/^[a-z_]{2,30}$/.test(k) && Number.isInteger(n) && n > 0 && n <= 99) items[k] = n
    }
  }
  const list = (v: unknown) => (Array.isArray(v) ? v.map((x) => str(x, 40)).filter(Boolean).slice(0, 12) : [])

  const q: MoversQuote = {
    name: str(raw.name, 100), phone: str(raw.phone, 30), email: str(raw.email, 120),
    moveType: str(raw.moveType, 20), homeSize: str(raw.homeSize, 30), moveDate: str(raw.moveDate, 10),
    flexibleDate: raw.flexibleDate === true,
    fromAddress: str(raw.fromAddress, 300), fromEmirate: str(raw.fromEmirate, 30), fromFloor: str(raw.fromFloor, 10),
    fromLift: raw.fromLift === "yes" ? "yes" : raw.fromLift === "no" ? "no" : "",
    toAddress: str(raw.toAddress, 300), toEmirate: str(raw.toEmirate, 30), toFloor: str(raw.toFloor, 10),
    toLift: raw.toLift === "yes" ? "yes" : raw.toLift === "no" ? "no" : "",
    services: list(raw.services), packing: str(raw.packing, 20), items, itemsUnsure: raw.itemsUnsure === true,
    extras: list(raw.extras), notes: str(raw.notes, 1000),
  }

  const errors = validateAll(q)
  if (Object.keys(errors).length) {
    return NextResponse.json({ status: "error", message: "Please check the highlighted fields", errors }, { status: 422 })
  }

  const reference = `MV-${Date.now().toString(36).toUpperCase()}`

  if (!isEmailEnabled()) {
    if (process.env.NODE_ENV === "production") return unavailable()
    console.info("[movers-quote] dev submission", reference, JSON.stringify(q))
    return NextResponse.json({ status: "success", reference })
  }

  const to = process.env.MOVERS_QUOTE_TO || ccAddresses()[0]
  if (!to) return unavailable()
  const rows = summary(q)
  const sent = await sendEmail({
    to,
    subject: `Movers quote ${reference} — ${q.name} (${q.fromEmirate} → ${q.toEmirate}, ${q.moveDate})`,
    html: `<h2>New packers and movers request ${reference}</h2><table cellpadding="6" style="border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`)
      .join("")}</table>`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    replyTo: q.email,
  })
  if (!sent.sent) return unavailable()

  return NextResponse.json({ status: "success", reference })
}
