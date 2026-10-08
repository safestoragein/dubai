// Retrieval requests for the signed-in customer: options / estimate / create.
// The customer comes from the signed session cookie, never from the request body. All checks
// and the charge itself are done on the PHP side (back/modules/dubai/controllers/Dubai_retrieval.php).
import { NextResponse } from "next/server"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import { clientIp } from "@/lib/client-ip"
import { CURRENCY, getStripe, isStripeEnabled, toFils } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const ACTIONS = ["options", "estimate", "create", "pay"] as const
type Action = "options" | "estimate" | "create"

const str = (v: unknown, max = 500) => String(v ?? "").slice(0, max)

export async function POST(request: Request, ctx: { params: Promise<{ action: string }> }) {
  const { action } = await ctx.params
  if (!(ACTIONS as readonly string[]).includes(action)) return NextResponse.json({ error: "Not found." }, { status: 404 })

  const me = await getCustomerSession()
  if (!me) return NextResponse.json({ error: "Please sign in again." }, { status: 401 })

  let body: Record<string, unknown> = {}
  try { body = await request.json() } catch { /* options needs no body */ }

  const form: Record<string, string | string[]> = { customer_id: String(me.customerId) }
  if (action !== "options") {
    form.type = str(body.type, 20)
    form.date = str(body.date, 12)
    form.lat = str(body.lat, 24)
    form.lng = str(body.lng, 24)
    form.floor = str(body.floor, 24)
    form.lift = str(body.lift, 5)
    if (Array.isArray(body.inventory_id)) form.inventory_id = body.inventory_id.slice(0, 500).map((x) => String(Number(x) || 0))
    if (action === "create" || action === "pay") {
      form.timeslot = str(body.timeslot, 40)
      form.address = str(body.address, 400)
      form.phone = str(body.phone, 20)
      form.note = str(body.note, 500)
    }
  }

  const ip = clientIp(request)
  // "pay": save the pending request on the PHP side, then open Stripe for what is due now.
  if (action === "pay") {
    const pr = await callBack<Record<string, unknown>>("prepare", form, ip, "dubai_retrieval")
    if (!pr.data) return NextResponse.json({ error: "Retrieval is not available right now. Please try again later." }, { status: 503 })
    if (pr.data.status !== "success") return NextResponse.json({ error: String(pr.data.message || "Something went wrong. Please try again.") }, { status: pr.status === 200 ? 400 : pr.status })
    if (pr.data.mode !== "pay") return NextResponse.json({ mode: "request", why: String(pr.data.why || "") })

    const stripe = getStripe()
    if (!stripe || !isStripeEnabled()) return NextResponse.json({ error: "Online payment is not available right now. Please call us." }, { status: 503 })
    const amount = Number(pr.data.amount_aed)
    const intentId = String(pr.data.intent_id)
    const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: me.email || undefined,
        line_items: [{ quantity: 1, price_data: { currency: CURRENCY, unit_amount: toFils(amount), product_data: { name: String(pr.data.description || "SafeStorage retrieval"), description: "Storage and transport charges" } } }],
        success_url: `${origin}/account/retrieval?paid=1`,
        cancel_url: `${origin}/account/retrieval?paid=0`,
        metadata: { purpose: "retrieval_payment", customer_id: String(me.customerId), intent_id: intentId, amount_aed: String(amount) },
      })
      return NextResponse.json({ mode: "pay", url: session.url })
    } catch (error) {
      console.error("[customer/retrieval/pay] Stripe session failed:", error)
      return NextResponse.json({ error: "We could not start the payment. Please try again or call us." }, { status: 500 })
    }
  }

  const r = await callBack<Record<string, unknown>>(action as Action, form, ip, "dubai_retrieval")
  if (!r.data) return NextResponse.json({ error: "Retrieval is not available right now. Please try again later." }, { status: 503 })
  if (r.data.status !== "success") {
    return NextResponse.json({ error: String(r.data.message || "Something went wrong. Please try again.") }, { status: r.status === 200 ? 400 : r.status })
  }
  return NextResponse.json(r.data)
}
