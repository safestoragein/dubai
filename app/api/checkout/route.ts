// Creates a Stripe Checkout Session for the transport charge.
//
// The amount is recalculated here from the pallet count rather than trusted
// from the browser — otherwise anyone could post their own price and book a
// villa move for AED 1. The client sends pallets and delivery mode; the server
// decides what that costs.
import { NextResponse } from "next/server"
import { getStripe, isStripeEnabled, toFils, CURRENCY } from "@/lib/stripe"
import {
  calculateTransportPrice,
  SELF_DROP_TOKEN_AED,
  SERVICE_RADIUS_KM,
} from "@/lib/transport-pricing"
import { saveQuotationCapture } from "@/lib/quotation-db"
import { savePaymentAttempt, deviceFromUserAgent } from "@/lib/payment-attempt-db"
import { testCheckoutAmountAed } from "@/lib/test-checkout"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface CheckoutRequest {
  pallets?: number
  deliveryMode?: string
  distanceKm?: number | null
  quotationId?: string | number | null
  customerId?: string | number | null
  customerName?: string | null
  customerEmail?: string | null
  customerPhone?: string | null
  pickupDate?: string | null
  /** Exact params for insert_quotation_dubai, replayed after payment. */
  finalizeParams?: Record<string, string>
  // Context about where the attempt came from
  sourcePage?: string | null
  referrer?: string | null
  pickupAddress?: string | null
  emirate?: string | null
  storagePrice?: number | null
}

export async function POST(request: Request) {
  const stripe = getStripe()
  if (!stripe || !isStripeEnabled()) {
    // Payments not configured — the caller falls back to the old flow.
    return NextResponse.json(
      { status: false, reason: "stripe_not_configured" },
      { status: 503 }
    )
  }

  let body: CheckoutRequest
  try {
    body = (await request.json()) as CheckoutRequest
  } catch {
    return NextResponse.json({ status: false, reason: "bad_json" }, { status: 400 })
  }

  const pallets = Number(body.pallets)
  if (!Number.isFinite(pallets) || pallets <= 0) {
    return NextResponse.json({ status: false, reason: "no_items" }, { status: 400 })
  }

  const selfDrop = body.deliveryMode === "self_drop"
  const distanceKm =
    body.distanceKm === null || body.distanceKm === undefined
      ? null
      : Number(body.distanceKm)
  const outOfRange =
    !selfDrop && distanceKm !== null && distanceKm > SERVICE_RADIUS_KM

  // Beyond the radius there is no tier price to charge, so there is nothing to
  // collect. The team prices the run and follows up.
  if (outOfRange) {
    return NextResponse.json(
      { status: false, reason: "custom_quote_required" },
      { status: 409 }
    )
  }

  const transport = calculateTransportPrice(pallets)
  const realAmountAed = selfDrop ? SELF_DROP_TOKEN_AED : transport.totalAed

  // Live-mode test override — applies only to emails listed in
  // TEST_CHECKOUT_EMAILS, and is a no-op when that variable is unset.
  const testAmount = testCheckoutAmountAed(body.customerEmail)
  const amountAed = testAmount ?? realAmountAed

  // The recorded transport price follows the override too, so the quotation,
  // the balance in the confirmation email and the amount actually charged all
  // agree. Otherwise a 2 AED test charge would still show a full balance due.
  const recordedTransportAed = selfDrop ? 0 : (testAmount ?? transport.totalAed)

  if (testAmount !== null) {
    console.warn(
      `[checkout] TEST OVERRIDE active for ${body.customerEmail}: charging AED ${amountAed} instead of ${realAmountAed}. ` +
        `Clear TEST_CHECKOUT_EMAILS to disable.`
    )
  }

  const label = selfDrop
    ? "Self Drop booking token"
    : `Door-to-door transport (${transport.tierLabel})`

  if (amountAed <= 0) {
    return NextResponse.json({ status: false, reason: "zero_amount" }, { status: 400 })
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"

  // finalizeParams is replayed verbatim into insert_quotation_dubai once payment
  // lands, so the override has to be stamped into it as well — otherwise the
  // quotation would keep the full transport price the browser sent.
  const finalizeParams = body.finalizeParams
    ? testAmount !== null
      ? { ...body.finalizeParams, transport_price: String(testAmount), transport_surcharge: "0", transport_base_price: String(testAmount) }
      : body.finalizeParams
    : null

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      // Stripe emails the receipt here and prefills the form.
      customer_email: body.customerEmail || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: toFils(amountAed),
            product_data: {
              name: label,
              description: selfDrop
                ? "Adjusted against your storage bill"
                : `${pallets} pallet${pallets === 1 ? "" : "s"} · collection from your address`,
            },
          },
        },
      ],
      success_url: `${origin}/thank-you?paid=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/get-quote?payment=cancelled`,
      // Everything the webhook needs to confirm the booking without trusting
      // anything the browser sends back after the redirect.
      metadata: {
        quotation_id: String(body.quotationId ?? ""),
        customer_id: String(body.customerId ?? ""),
        customer_name: String(body.customerName ?? ""),
        customer_phone: String(body.customerPhone ?? ""),
        delivery_mode: selfDrop ? "self_drop" : "transport",
        pallets: String(pallets),
        amount_aed: String(amountAed),
        pickup_date: String(body.pickupDate ?? ""),
        distance_km: distanceKm === null ? "" : String(distanceKm),
      },
    })

    // Record the attempt, so an abandoned checkout is still a visible lead.
    await saveQuotationCapture({
      stage: "payment_pending",
      php_quotation_id: body.quotationId ?? null,
      php_customer_id: body.customerId ?? null,
      customer_name: body.customerName ?? null,
      customer_email: body.customerEmail ?? null,
      customer_phone: body.customerPhone ?? null,
      delivery_mode: selfDrop ? "self_drop" : "transport",
      total_pallets: pallets,
      transport_price: recordedTransportAed,
      transport_base_price: transport.baseAed,
      transport_surcharge: transport.surchargeAed,
      token_amount: amountAed,
      pickup_distance_km: distanceKm,
      selected_items: {
        stripe_session_id: session.id,
        pickup_date: body.pickupDate,
      },
      stripe_session_id: session.id,
      // Held until the webhook confirms payment; the order is placed then.
      finalize_params: finalizeParams,
    })

    const ua = request.headers.get("user-agent")
    const fwd = request.headers.get("x-forwarded-for")
    await savePaymentAttempt({
      status: "initiated",
      event_type: "frontend",
      stripe_session_id: session.id,
      amount_aed: amountAed,
      currency: CURRENCY,
      customer_name: body.customerName ?? null,
      customer_email: body.customerEmail ?? null,
      customer_phone: body.customerPhone ?? null,
      php_customer_id: body.customerId ?? null,
      php_quotation_id: body.quotationId ?? null,
      delivery_mode: selfDrop ? "self_drop" : "transport",
      total_pallets: pallets,
      storage_price: body.storagePrice ?? null,
      transport_price: recordedTransportAed,
      pickup_date: body.pickupDate ?? null,
      pickup_address: body.pickupAddress ?? null,
      emirate: body.emirate ?? null,
      pickup_distance_km: distanceKm,
      source_page: body.sourcePage ?? null,
      referrer: body.referrer ?? request.headers.get("referer"),
      user_agent: ua,
      device_type: deviceFromUserAgent(ua),
      ip_address: fwd ? fwd.split(",")[0].trim() : null,
    })

    return NextResponse.json({ status: true, url: session.url, id: session.id })
  } catch (error) {
    console.error("[checkout] Stripe session creation failed:", error)
    return NextResponse.json(
      { status: false, reason: "stripe_error" },
      { status: 500 }
    )
  }
}
