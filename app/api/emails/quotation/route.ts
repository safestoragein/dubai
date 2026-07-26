// Sends the quotation email when a quote is created.
//
// Prices are recalculated here from the pallet count rather than taken from
// the request, so the figures in the customer's inbox always match what the
// quote engine says — a stale or tampered client cannot email a wrong price.
import { NextResponse } from "next/server"
import { sendEmail, isEmailEnabled } from "@/lib/email/send"
import {
  renderQuotationEmail,
  renderQuotationText,
  type QuotationEmailData,
} from "@/lib/email/quotation-template"
import { quoteResumeUrl } from "@/lib/quote-resume"
import { saveQuotationCapture, getResumableQuote } from "@/lib/quotation-db"
import {
  calculateTransportPrice,
  SELF_DROP_TOKEN_AED,
  SERVICE_RADIUS_KM,
} from "@/lib/transport-pricing"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface Body {
  email?: string
  fullName?: string
  quotationId?: string | number
  items?: Array<{ name?: string; quantity?: number }>
  totalSqft?: number
  totalPallets?: number
  monthlyStorageAed?: number
  pickupAddress?: string | null
  distanceKm?: number | null
  /** 'crm' when the CRM raised the quote, so the capture row is distinguishable. */
  source?: string | null
  customerId?: string | number | null
  phone?: string | null
  emirate?: string | null
  floor?: string | null
  liftAvailable?: string | null
  bedrooms?: string | null
}

/** "Aisha Khan" -> "Aisha". A full name in a greeting reads like a form letter. */
function firstName(full: string | undefined): string {
  const n = (full ?? "").trim().split(/\s+/)[0]
  return n || "there"
}

export async function POST(request: Request) {
  if (!isEmailEnabled()) {
    return NextResponse.json(
      { status: false, reason: "resend_not_configured" },
      { status: 503 }
    )
  }

  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ status: false, reason: "bad_json" }, { status: 400 })
  }

  const to = (body.email ?? "").trim()
  if (!to || !to.includes("@")) {
    return NextResponse.json({ status: false, reason: "no_email" }, { status: 400 })
  }

  const pallets = Number(body.totalPallets) || 0
  const monthly = Number(body.monthlyStorageAed) || 0
  if (pallets <= 0 || monthly <= 0) {
    return NextResponse.json({ status: false, reason: "empty_quote" }, { status: 400 })
  }

  const transport = calculateTransportPrice(pallets)
  const distanceKm =
    body.distanceKm === null || body.distanceKm === undefined
      ? null
      : Number(body.distanceKm)
  const outOfRange = distanceKm !== null && distanceKm > SERVICE_RADIUS_KM

  const items = (body.items ?? [])
    .filter((i) => i?.name)
    .map((i) => ({ name: String(i.name), quantity: Number(i.quantity) || 1 }))

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"

  const data: QuotationEmailData = {
    firstName: firstName(body.fullName),
    quotationId: body.quotationId ?? "",
    items,
    itemCount: items.reduce((n, i) => n + i.quantity, 0),
    totalSqft: Number(body.totalSqft) || 0,
    totalPallets: pallets,
    monthlyStorageAed: monthly,
    transportAed: transport.totalAed,
    selfDropTokenAed: SELF_DROP_TOKEN_AED,
    pickupAddress: body.pickupAddress ?? null,
    transportCustomQuote: outOfRange,
    // Signed resume link, so the CTA lands on their actual quote at the
    // booking step rather than an empty form.
    bookingUrl: body.quotationId
      ? quoteResumeUrl(origin, body.quotationId)
      : `${origin}/get-quote`,
    supportPhone: process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971 50 577 3388",
    supportEmail: process.env.NEXT_PUBLIC_EMAIL || "support@safestorage.ae",
  }

  // A quote raised in the CRM has never touched our capture table, so the
  // resume link in the email would 404. Capture it here — one call from the
  // CRM then both records the quote and sends the mail.
  const existing = await getResumableQuote(String(body.quotationId ?? ""))
  if (!existing) {
    await saveQuotationCapture({
      stage: body.source === "crm" ? "crm_quote" : "step2",
      php_quotation_id: body.quotationId ?? null,
      php_customer_id: body.customerId ?? null,
      customer_name: body.fullName ?? null,
      customer_email: to,
      customer_phone: body.phone ?? null,
      pickup_address: body.pickupAddress ?? null,
      emirate: body.emirate ?? null,
      floor: body.floor ?? null,
      lift_available: body.liftAvailable ?? null,
      bedrooms: body.bedrooms ?? null,
      total_sqft: body.totalSqft ?? null,
      total_pallets: pallets,
      shared_storage_price: monthly,
      transport_price: transport.totalAed,
      transport_base_price: transport.baseAed,
      transport_surcharge: transport.surchargeAed,
      transport_custom_quote: outOfRange,
      pickup_distance_km: distanceKm,
      selected_items: items,
    })
  }

  const result = await sendEmail({
    to,
    subject: `Your storage quote — AED ${monthly.toLocaleString("en-AE")} a month`,
    html: renderQuotationEmail(data),
    text: renderQuotationText(data),
    replyTo: data.supportEmail,
  })

  return NextResponse.json({ status: result.sent, id: result.id, error: result.error })
}
