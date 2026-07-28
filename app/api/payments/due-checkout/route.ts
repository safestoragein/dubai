// Creates a Stripe Checkout Session for a UAE customer's outstanding storage dues.
//
// Called server-to-server by safestorage.in (Customer::stripe_due_checkout). The
// Stripe secret lives here, not in the PHP app, so the CRM never handles it.
//
// The AMOUNT IS TRUSTED from the caller here — unlike /api/checkout, which reprices
// from pallets. That is deliberate and safe only because this endpoint is not
// reachable from a browser: it is shared-secret authenticated, and the caller has
// already recomputed the figure from the customer's own Unpaid rows in the database.
//
// Settlement happens in the Stripe webhook, which calls back to
// safestorage.in/customer/stripe_due_settle once the charge is confirmed. Nothing is
// marked Paid on the strength of a browser redirect.
import { NextResponse } from "next/server"
import { getStripe, isStripeEnabled, toFils, CURRENCY } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface Body {
  secret?: string
  customerId?: number | string
  customerName?: string | null
  email?: string | null
  amountAed?: number | string
  paymentIds?: string
  description?: string
  returnUrl?: string
}

/** Stripe rejects AED charges below this. */
const MIN_AED = 2

export async function POST(request: Request) {
  const stripe = getStripe()
  if (!stripe || !isStripeEnabled()) {
    return NextResponse.json({ status: false, reason: "stripe_not_configured" }, { status: 503 })
  }

  const expected = process.env.AE_PAY_SECRET
  if (!expected) {
    // Refuse rather than run unauthenticated — this endpoint mints payment links.
    console.error("[due-checkout] AE_PAY_SECRET is not set; refusing")
    return NextResponse.json({ status: false, reason: "not_configured" }, { status: 503 })
  }

  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ status: false, reason: "bad_json" }, { status: 400 })
  }

  if ((body.secret ?? "") !== expected) {
    return NextResponse.json({ status: false, reason: "unauthorised" }, { status: 401 })
  }

  const customerId = String(body.customerId ?? "").trim()
  const paymentIds = String(body.paymentIds ?? "").trim()
  const amountAed = Number(body.amountAed)

  if (!customerId || !paymentIds) {
    return NextResponse.json({ status: false, reason: "missing_fields" }, { status: 400 })
  }
  if (!Number.isFinite(amountAed) || amountAed < MIN_AED) {
    return NextResponse.json(
      { status: false, reason: "amount_too_small", minimumAed: MIN_AED },
      { status: 400 }
    )
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"
  const returnUrl = (body.returnUrl ?? "").trim() || `${origin}/thank-you`

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.email || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: toFils(amountAed),
            product_data: {
              name: body.description || "SafeStorage dues",
              description: "Storage charges (VAT included)",
            },
          },
        },
      ],
      success_url: `${returnUrl}?paid=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${returnUrl}?paid=0`,
      // purpose is what tells the webhook to settle dues rather than place a booking.
      metadata: {
        purpose: "due_payment",
        customer_id: customerId,
        payment_ids: paymentIds,
        amount_aed: String(amountAed),
        customer_name: String(body.customerName ?? ""),
      },
    })

    return NextResponse.json({ status: true, url: session.url, id: session.id })
  } catch (error) {
    console.error("[due-checkout] Stripe session creation failed:", error)
    return NextResponse.json({ status: false, reason: "stripe_error" }, { status: 500 })
  }
}
