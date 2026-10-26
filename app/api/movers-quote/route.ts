import { NextRequest, NextResponse } from "next/server"
import { isEmailEnabled } from "@/lib/email/send"
import { clientIp } from "@/lib/client-ip"
import { getStripe, isStripeEnabled, toFils, CURRENCY } from "@/lib/stripe"
import { savePaymentAttempt, deviceFromUserAgent } from "@/lib/payment-attempt-db"
import { testCheckoutAmountAed } from "@/lib/test-checkout"
import { linkPartialToQuote, markMoversEmailSent, saveMoversQuote, setMoversStripeSession, type Pricing } from "@/lib/movers-quote-db"
import { emailTeam, getCatalogue, summaryRows } from "@/lib/movers-quote-server"
import { priceMove, validateAll, type MoversQuote } from "@/lib/movers-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Packers & movers quote intake (separate from the storage funnel — nothing here touches
// /get-quote or its CRM endpoints).
//
// Transport is priced exactly like /get-quote (lib/transport-pricing.ts) and RE-DERIVED here from
// the item names — the browser never decides what is charged. In range -> Stripe Checkout for the
// transport total; the signed webhook (purpose "movers_payment") is what marks it paid. Out of
// range, or "not sure about my items" -> no payment, the team prices it and calls.
//
// Two calls, like /get-quote's funnel: mode "quote" is sent when the customer finishes step 3 and
// saves the quotation (and emails the team); mode "book" (the final button) updates that same row
// and starts the Stripe checkout. A visitor who only typed contact details and left is captured by
// /api/movers-quote/partial instead.
//
// Every request is stored in movers_quotes / movers_quote_items first and a copy is emailed to the
// team second. If neither works the form answers 503 and shows a "call us" message — it never claims
// "received" for a lead that went nowhere (the /contact form once did — BUSINESS.md §10.1).
// MOVERS_QUOTE_TO overrides the email recipient (default: first RESEND_CC address).

const str = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "")
const coord = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null)

const unavailable = () =>
  NextResponse.json({ status: "error", message: "We could not send your request just now. Please call or WhatsApp us." }, { status: 503 })

export async function POST(request: NextRequest) {
  let raw: Record<string, unknown>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ status: "error", message: "Invalid request" }, { status: 400 })
  }

  // Honeypot: bots fill the hidden field; answer as if it worked and drop it.
  if (str(raw.website)) return NextResponse.json({ status: "success", reference: "MV-0" })

  const mode = raw.mode === "quote" ? "quote" : "book"
  const existingRef = /^MV-[A-Z0-9]{3,20}$/.test(str(raw.reference, 24)) ? str(raw.reference, 24) : undefined
  const leadKey = /^[A-Za-z0-9_-]{8,64}$/.test(str(raw.leadKey, 64)) ? str(raw.leadKey, 64) : ""

  const items: Record<string, number> = {}
  if (raw.items && typeof raw.items === "object") {
    for (const [k, v] of Object.entries(raw.items as Record<string, unknown>)) {
      const n = Number(v)
      if (k.length <= 120 && Number.isInteger(n) && n > 0 && n <= 99) items[k] = n
    }
  }
  const list = (v: unknown) => (Array.isArray(v) ? v.map((x) => str(x, 40)).filter(Boolean).slice(0, 12) : [])

  const q: MoversQuote = {
    name: str(raw.name, 100), phone: str(raw.phone, 30), email: str(raw.email, 120),
    moveType: str(raw.moveType, 20), homeSize: str(raw.homeSize, 30), moveDate: str(raw.moveDate, 10),
    flexibleDate: raw.flexibleDate === true,
    fromAddress: str(raw.fromAddress, 300), fromEmirate: str(raw.fromEmirate, 30), fromFloor: str(raw.fromFloor, 10),
    fromLift: raw.fromLift === "yes" ? "yes" : raw.fromLift === "no" ? "no" : "",
    fromLat: coord(raw.fromLat), fromLng: coord(raw.fromLng),
    toAddress: str(raw.toAddress, 300), toEmirate: str(raw.toEmirate, 30), toFloor: str(raw.toFloor, 10),
    toLift: raw.toLift === "yes" ? "yes" : raw.toLift === "no" ? "no" : "",
    services: [], packing: str(raw.packing, 20), items, itemsUnsure: raw.itemsUnsure === true,
    extras: list(raw.extras), notes: str(raw.notes, 1000),
  }

  const errors = validateAll(q)
  if (Object.keys(errors).length) {
    return NextResponse.json({ status: "error", message: "Please check the highlighted fields", errors }, { status: 422 })
  }

  // ---- price it, server-side, from the same item list /get-quote uses ----
  const catalogue = await getCatalogue()
  if (!catalogue) return unavailable() // cannot price without the item list; do not guess
  const price = priceMove(q.itemsUnsure ? {} : q.items, catalogue, q.fromEmirate, q.fromLat, q.fromLng)
  if (price.unknownItems.length) {
    return NextResponse.json({ status: "error", message: "Some items are no longer available. Please re-select your items.", errors: { items: "Please re-select your items" } }, { status: 422 })
  }

  const stripe = getStripe()
  const payable = mode === "book" && !q.itemsUnsure && price.pallets > 0 && !price.outOfRange && price.transport.totalAed > 0 && !!stripe && isStripeEnabled()
  // Same live-mode tester override /api/checkout honours; a no-op unless TEST_CHECKOUT_EMAILS is set.
  const amountAed = payable ? testCheckoutAmountAed(q.email) ?? price.transport.totalAed : null

  const pricing: Pricing = {
    points: price.points,
    pallets: price.pallets,
    baseAed: price.transport.baseAed,
    surchargeAed: price.transport.surchargeAed,
    totalAed: price.transport.totalAed,
    distanceKm: price.distanceKm,
    amountDueAed: amountAed,
    paymentStatus: payable ? "pending" : price.outOfRange ? "custom_quote" : "none",
  }

  let reference = `MV-${Date.now().toString(36).toUpperCase()}`
  let created = true
  const ua = request.headers.get("user-agent") || undefined
  const ip = clientIp(request)

  // 1) database
  let saved = false
  try {
    const r = await saveMoversQuote(reference, q, pricing, catalogue, { ip, userAgent: ua, sourcePage: "/packers-and-movers/get-quote" }, existingRef)
    reference = r.reference
    created = r.created
    saved = true
    if (leadKey) await linkPartialToQuote(leadKey, reference)
  } catch (e) {
    console.error("[movers-quote] database save failed", reference, e)
  }

  // 2) email the team a copy (for a payable request this is the "payment pending" lead; the
  //    webhook sends the "PAID" mail when the money lands)
  const status = mode === "quote" ? "quotation saved (not booked yet)" : payable ? "payment pending" : price.outOfRange ? "out of service area — custom quote" : q.itemsUnsure ? "survey needed" : "no payment (Stripe off)"
  // Only the first save of a quotation emails the team; later updates (back/forward, booking) do not.
  const emailed = !created ? true : await emailTeam(
    `Movers quote ${reference} — ${q.name} (${q.fromEmirate} → ${q.toEmirate}, ${q.moveDate})`,
    summaryRows(q, [
      ["Reference", reference], ["Status", status],
      ["Pallets", `${price.pallets} (${price.points.toFixed(1)} points)`],
      ["Transport", price.transport.totalAed ? `AED ${price.transport.totalAed} (est. AED ${price.range.lowAed}–${price.range.highAed})` : "-"],
      ["Distance", price.distanceKm === null ? "unknown (address not picked from suggestions)" : `${price.distanceKm.toFixed(1)} km`],
    ]),
    q.email
  )
  if (emailed && saved && created) await markMoversEmailSent(reference).catch(() => {})

  if (!saved && !emailed) {
    if (process.env.NODE_ENV !== "production" && !isEmailEnabled()) {
      // Development with no database and no Resend: log so the flow can still be tested.
      console.info("[movers-quote] dev submission (not stored)", reference, JSON.stringify({ q, price: pricing }))
    } else {
      return unavailable()
    }
  }

  // The quotation step ends here: saved, team notified, nothing to pay yet.
  if (mode === "quote") return NextResponse.json({ status: "success", reference, payment: "none" })

  // 3) payment
  if (payable && amountAed) {
    const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"
    try {
      const session = await stripe!.checkout.sessions.create({
        mode: "payment",
        customer_email: q.email,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: CURRENCY,
              unit_amount: toFils(amountAed),
              product_data: {
                name: `Packers & movers transport (${price.transport.tierLabel})`,
                description: `${price.pallets} pallet${price.pallets === 1 ? "" : "s"} · ${q.moveDate} · ref ${reference}`,
              },
            },
          },
        ],
        success_url: `${origin}/packers-and-movers/get-quote?paid=1&ref=${reference}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/packers-and-movers/get-quote?payment=cancelled`,
        // Everything the webhook needs; it never trusts what the browser sends back.
        metadata: {
          purpose: "movers_payment",
          reference,
          customer_name: q.name,
          customer_phone: q.phone,
          pallets: String(price.pallets),
          amount_aed: String(amountAed),
          pickup_date: q.moveDate,
        },
      })
      if (saved) await setMoversStripeSession(reference, session.id).catch(() => {})
      // Same ledger /api/checkout writes, so the existing expired/failed webhook handling covers it.
      await savePaymentAttempt({
        status: "initiated",
        event_type: "movers_frontend",
        stripe_session_id: session.id,
        amount_aed: amountAed,
        currency: CURRENCY,
        customer_name: q.name,
        customer_email: q.email,
        customer_phone: q.phone,
        delivery_mode: "transport",
        total_pallets: price.pallets,
        transport_price: amountAed,
        pickup_date: q.moveDate,
        pickup_address: q.fromAddress,
        emirate: q.fromEmirate,
        pickup_distance_km: price.distanceKm,
        pickup_lat: q.fromLat,
        pickup_lng: q.fromLng,
        source_page: "/packers-and-movers/get-quote",
        referrer: request.headers.get("referer"),
        user_agent: ua ?? null,
        device_type: deviceFromUserAgent(ua),
        ip_address: ip ?? null,
      })
      return NextResponse.json({ status: "success", reference, payment: "checkout", url: session.url })
    } catch (e) {
      console.error("[movers-quote] Stripe session creation failed", reference, e)
      // The request itself is saved/emailed, so the team can still follow up.
      return NextResponse.json({ status: "success", reference, payment: "unavailable" })
    }
  }

  return NextResponse.json({
    status: "success",
    reference,
    payment: price.outOfRange ? "custom_quote" : "none",
  })
}
