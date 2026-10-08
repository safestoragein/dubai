// Starts a Stripe Checkout for the signed-in customer's own unpaid bills.
//
// The customer is taken from the signed session cookie (never from the request), the unpaid
// rows and amount come from the back office through the key-guarded PHP endpoint, and the
// session carries the same `due_payment` metadata /api/payments/due-checkout uses — so the
// existing Stripe webhook settles the bills (safestorage.in/customer/stripe_due_settle).
// Nothing is marked Paid here, only when Stripe confirms the charge.
import { NextResponse } from "next/server"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import { CURRENCY, getStripe, isStripeEnabled, toFils } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MIN_AED = 2 // Stripe rejects AED charges below this

type Bill = { payment_id?: number; amount: number; status: string }
type Reply = { status?: string; bills?: Bill[] }

export async function POST() {
  const me = await getCustomerSession()
  if (!me) return NextResponse.json({ error: "Please sign in again." }, { status: 401 })

  const stripe = getStripe()
  if (!stripe || !isStripeEnabled()) {
    return NextResponse.json({ error: "Online payment is not available right now. Please call us to pay." }, { status: 503 })
  }

  const r = await callBack<Reply>("payments", { customer_id: String(me.customerId) })
  if (!r.ok || r.data?.status !== "success") {
    return NextResponse.json({ error: "We could not load your bills. Please try again." }, { status: 502 })
  }
  const unpaid = (r.data.bills ?? []).filter((b) => b.status === "Unpaid" && b.payment_id && b.amount > 0)
  const amount = Math.round(unpaid.reduce((a, b) => a + b.amount, 0) * 100) / 100
  if (!unpaid.length || amount <= 0) {
    return NextResponse.json({ error: "There is nothing outstanding to pay." }, { status: 400 })
  }
  if (amount < MIN_AED) {
    return NextResponse.json({ error: `Online payment starts from AED ${MIN_AED}. Please call us to pay this bill.` }, { status: 400 })
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: me.email || undefined,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          unit_amount: toFils(amount),
          product_data: { name: `SafeStorage dues - ${me.name || me.customerId}`, description: "Storage charges" },
        },
      }],
      success_url: `${origin}/account/payments?paid=1`,
      cancel_url: `${origin}/account/payments?paid=0`,
      metadata: {
        purpose: "due_payment",
        customer_id: String(me.customerId),
        payment_ids: unpaid.map((b) => b.payment_id).join(","),
        amount_aed: String(amount),
        customer_name: me.name || "",
      },
    })
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[customer/pay] Stripe session creation failed:", error)
    return NextResponse.json({ error: "We could not start the payment. Please try again or call us." }, { status: 500 })
  }
}
