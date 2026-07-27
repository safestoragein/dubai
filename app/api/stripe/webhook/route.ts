// Stripe webhook — the only place a payment is treated as real.
//
// The browser redirect after checkout is not proof of payment: a customer can
// close the tab, and the success_url can be visited by hand. Stripe's signed
// webhook is the authority, so the order is confirmed here and nowhere else.
import { NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { saveQuotationCapture, claimFinalizeParams } from "@/lib/quotation-db"
import { savePaymentAttempt, updateAttemptStatus } from "@/lib/payment-attempt-db"
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

  // ---- Failure / abandonment events: recorded, never order-creating ----

  if (event.type === "checkout.session.expired") {
    const s = event.data.object as Stripe.Checkout.Session
    await updateAttemptStatus(s.id, "expired", {
      event_type: event.type,
      failure_message: "Customer left checkout without paying (session expired)",
    })
    return NextResponse.json({ received: true })
  }

  if (
    event.type === "payment_intent.payment_failed" ||
    event.type === "charge.failed"
  ) {
    const obj = event.data.object as Stripe.PaymentIntent & Stripe.Charge
    const err = (obj as Stripe.PaymentIntent).last_payment_error
    const card =
      err?.payment_method?.card ??
      (obj as Stripe.Charge).payment_method_details?.card

    await savePaymentAttempt({
      status: "failed",
      event_type: event.type,
      stripe_payment_intent:
        typeof obj.payment_intent === "string" ? obj.payment_intent : obj.id,
      failure_message:
        err?.message ?? (obj as Stripe.Charge).failure_message ?? "Payment failed",
      failure_code:
        err?.code ?? (obj as Stripe.Charge).failure_code ?? null,
      decline_code: err?.decline_code ?? (obj as Stripe.Charge).outcome?.reason ?? null,
      card_brand: card?.brand ?? null,
      card_last4: card?.last4 ?? null,
      amount_aed: (obj.amount ?? 0) / 100,
      currency: obj.currency ?? null,
      customer_email:
        (obj as Stripe.Charge).billing_details?.email ??
        obj.receipt_email ??
        null,
    })
    return NextResponse.json({ received: true })
  }

  // ---- The only order-creating branch ----

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const m = session.metadata ?? {}

    // Only a paid session confirms a booking. Sessions can complete unpaid
    // (e.g. delayed payment methods), and those must not create an order.
    // Anything other than a confirmed payment creates NOTHING. Sessions can
    // complete while still unpaid or pending, and those must never book.
    if (session.payment_status !== "paid") {
      await updateAttemptStatus(session.id, "failed", {
        event_type: event.type,
        failure_message: `Checkout completed but payment_status was "${session.payment_status}" — no order created`,
        failure_code: String(session.payment_status),
      })
      return NextResponse.json({ received: true })
    }

    const amountAed = (session.amount_total ?? 0) / 100

    // ---- Due payment (UAE customer paying storage dues from the CRM link) ----
    // A different kind of session entirely: there is no quotation to finalise and no
    // order to create, only existing ss_customer_payment rows to mark Paid. Handled
    // and returned here so none of the booking logic below runs.
    if (session.metadata?.purpose === "due_payment") {
      const paymentRef =
        typeof session.payment_intent === "string" ? session.payment_intent : session.id

      let settleResult = "not_attempted"
      try {
        const res = await fetch("https://safestorage.in/customer/stripe_due_settle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.AE_PAY_SECRET,
            customerId: session.metadata.customer_id,
            paymentIds: session.metadata.payment_ids,
            amountAed,
            paymentRef,
          }),
        })
        settleResult = (await res.text()).slice(0, 300)
      } catch (error) {
        // Never throw: Stripe would retry a charge we have already taken. The
        // payment is recorded on Stripe's side and can be settled by hand.
        settleResult = `EXCEPTION: ${String(error).slice(0, 200)}`
      }

      await updateAttemptStatus(session.id, "succeeded", {
        event_type: event.type,
        stripe_payment_intent: paymentRef,
        failure_message: `due_payment settle -> ${settleResult}`,
      })

      console.log("[webhook] due_payment settled:", settleResult)
      return NextResponse.json({ received: true, purpose: "due_payment" })
    }

    // Payment is confirmed — NOW place the order. Doing it here rather than
    // before the redirect is what makes "no payment, no order" true: an
    // abandoned checkout never reaches this point. claimFinalizeParams also
    // guards against Stripe's retries creating the order twice.
    await updateAttemptStatus(session.id, "succeeded", {
      event_type: event.type,
      stripe_payment_intent:
        typeof session.payment_intent === "string" ? session.payment_intent : null,
    })

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

        // Finalising the quotation is not the booking. The booking lives in
        // ss_order, which is what the operations team dispatches from — so
        // create it here too, once payment is confirmed.
        if (orderOk) {
          const pickupType =
            m.delivery_mode === "self_drop" ? "warehouse_arrival" : "pickup"
          try {
            const orderRes = await fetch(
              "https://safestorage.in/back/app/create_order_dubai",
              {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                  quotation_id: String(finalize.quotation_id ?? m.quotation_id ?? ""),
                  customer_id: String(finalize.customer_id ?? m.customer_id ?? ""),
                  pickup_date: String(m.pickup_date ?? ""),
                  // The website does not collect a slot; the team sets it when
                  // they call. An invented slot would be worse than none.
                  pickup_timeslot: "",
                  pickup_type: pickupType,
                  payment_type: "monthly",
                  order_note: `Booked online · paid AED ${amountAed} via Stripe · ${session.id}`,
                  // Recorded in ss_customer_transaction. The payment_intent is
                  // globally unique, so it doubles as the idempotency key on
                  // transaction_order_id's UNIQUE index.
                  paid_amount: String(amountAed),
                  transaction_order_id:
                    typeof session.payment_intent === "string" ? session.payment_intent : "",
                  // Two references, as India stores TXNID and ORDERID separately:
                  // the intent goes to transaction_order_id, the session here.
                  transaction_id: session.id,
                  transaction_note: `SafeStorage ${pickupType === "pickup" ? "Transport" : "Warehouse arrival"} charges paid through Stripe`,
                }),
              }
            )
            orderResult += " | ORDER: " + (await orderRes.text()).slice(0, 300)
          } catch (error) {
            orderResult += " | ORDER FAILED: " + String(error).slice(0, 200)
            orderOk = false
          }
        }
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
