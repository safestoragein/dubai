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
  pickupTimeSlot?: string | null
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
  const amountAed = selfDrop ? SELF_DROP_TOKEN_AED : transport.totalAed
  const label = selfDrop
    ? "Self Drop booking token"
    : `Door-to-door transport (${transport.tierLabel})`

  if (amountAed <= 0) {
    return NextResponse.json({ status: false, reason: "zero_amount" }, { status: 400 })
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"

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
        pickup_time_slot: String(body.pickupTimeSlot ?? ""),
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
      transport_price: selfDrop ? 0 : transport.totalAed,
      transport_base_price: transport.baseAed,
      transport_surcharge: transport.surchargeAed,
      token_amount: amountAed,
      pickup_distance_km: distanceKm,
      selected_items: {
        stripe_session_id: session.id,
        pickup_date: body.pickupDate,
        pickup_time_slot: body.pickupTimeSlot,
      },
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
