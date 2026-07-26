// Stripe webhook — the only place a payment is treated as real.
//
// The browser redirect after checkout is not proof of payment: a customer can
// close the tab, and the success_url can be visited by hand. Stripe's signed
// webhook is the authority, so the order is confirmed here and nowhere else.
import { NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { saveQuotationCapture, claimFinalizeParams } from "@/lib/quotation-db"
import type Stripe from "stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const stripe = getStripe()
  const secret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripe || !secret) {
    console.error("[stripe-webhook] not configured (missing key or webhook secret)")
    return NextResponse.json({ received: false }, { status: 503 })
  }

  const signature = request.headers.get("stripe-signature")
  if (!signature) {
    return NextResponse.json({ received: false }, { status: 400 })
  }

  // Signature is checked against the exact bytes, so the raw body is required.
  const raw = await request.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(raw, signature, secret)
  } catch (error) {
    console.error("[stripe-webhook] signature verification failed:", error)
    return NextResponse.json({ received: false }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const m = session.metadata ?? {}

    // Only a paid session confirms a booking. Sessions can complete unpaid
    // (e.g. delayed payment methods), and those must not create an order.
    if (session.payment_status !== "paid") {
      console.warn(
        "[stripe-webhook] session completed but not paid:",
        session.id,
        session.payment_status
      )
      return NextResponse.json({ received: true })
    }

    const amountAed = (session.amount_total ?? 0) / 100

    // Payment is confirmed — NOW place the order. Doing it here rather than
    // before the redirect is what makes "no payment, no order" true: an
    // abandoned checkout never reaches this point. claimFinalizeParams also
    // guards against Stripe's retries creating the order twice.
    const finalize = await claimFinalizeParams(session.id)
    let orderResult = "not_attempted"
    let orderOk = false

    if (finalize) {
      try {
        const res = await fetch(
          "https://safestorage.in/back/app/insert_quotation_dubai",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(finalize),
          }
        )
        orderResult = (await res.text()).slice(0, 500)
        orderOk = res.ok && !/\"status\"\s*:\s*false/.test(orderResult)
      } catch (error) {
        // The payment succeeded, so never fail the webhook here — that would
        // make Stripe retry a charge we have already taken.
        orderResult = `EXCEPTION: ${String(error).slice(0, 400)}`
      }
    }

    // Route-handler console output does not reach journald on this setup, so
    // the outcome is written to the database instead — a paid-but-unordered
    // booking must never be invisible.
    const stage = !finalize
      ? "paid_duplicate"
      : orderOk
        ? "paid"
        : "order_failed"

    await saveQuotationCapture({
      stage,
      php_quotation_id: m.quotation_id || null,
      php_customer_id: m.customer_id || null,
      customer_name: m.customer_name || null,
      customer_email: session.customer_details?.email || null,
      customer_phone: m.customer_phone || null,
      delivery_mode: m.delivery_mode || null,
      total_pallets: m.pallets || null,
      token_amount: amountAed,
      transport_price: m.delivery_mode === "self_drop" ? 0 : amountAed,
      pickup_distance_km: m.distance_km || null,
      stripe_session_id: session.id,
      order_created: finalize ? 1 : 0,
      selected_items: {
        stripe_session_id: session.id,
        stripe_payment_intent: session.payment_intent,
        amount_paid_aed: amountAed,
        pickup_date: m.pickup_date,
        order_result: orderResult,
      },
    })

  }

  return NextResponse.json({ received: true })
}
