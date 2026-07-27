// Sends the pickup confirmation email. Two callers, both in the PHP backend:
//
//   1. App::create_order_dubai       — website booking, after Stripe confirms the
//      token payment and the order row exists. Sends showPayment:true, so the
//      email doubles as a receipt. "No payment, no confirmation" holds because an
//      abandoned checkout never reaches that method.
//
//   2. Dubai::save_pickup_schedule   — the team books from /back/dubai/schedule_pickup.
//      Sends showPayment:false: no token is necessarily collected at booking time,
//      so the email says nothing at all about money.
//
// Neither caller is the Stripe webhook itself, because the portal password exists
// in plaintext for exactly one moment — inside create_order_dubai, where the
// ss_user row is created. Nothing downstream can recover it.
import { NextResponse } from "next/server"
import { sendEmail, isEmailEnabled, ccAddresses } from "@/lib/email/send"
import {
  renderPickupConfirmationEmail,
  renderPickupConfirmationText,
  type PickupConfirmationData,
} from "@/lib/email/pickup-confirmation-template"
import { env } from "@/lib/env"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface Body {
  email?: string
  fullName?: string
  bookingRef?: string
  pickupDate?: string
  pickupSlot?: string | null
  pickupType?: string | null
  pickupAddress?: string | null
  totalSqft?: number | string
  totalPallets?: number | string
  monthlyStorageAed?: number | string
  showPayment?: boolean
  tokenPaidAed?: number | string
  balanceAed?: number | string | null
  rmName?: string | null
  username?: string | null
  password?: string | null
}

/** "Aisha Khan" -> "Aisha". A full name in a greeting reads like a form letter. */
function firstName(full: string | undefined): string {
  const n = (full ?? "").trim().split(/\s+/)[0]
  return n || "there"
}

function num(v: unknown): number {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
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

  // A confirmation without a date is worse than no email at all — it tells the
  // customer their booking exists but not when anyone is coming.
  const pickupDate = (body.pickupDate ?? "").trim()
  if (!pickupDate) {
    return NextResponse.json({ status: false, reason: "no_pickup_date" }, { status: 400 })
  }

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://safestorage.ae"

  const balance = body.balanceAed === null || body.balanceAed === undefined
    ? null
    : num(body.balanceAed)

  const data: PickupConfirmationData = {
    firstName: firstName(body.fullName),
    bookingRef: (body.bookingRef ?? "").trim() || "—",
    pickupDate,
    pickupSlot: body.pickupSlot ?? null,
    pickupType: body.pickupType ?? null,
    pickupAddress: body.pickupAddress ?? null,

    totalSqft: num(body.totalSqft),
    totalPallets: num(body.totalPallets),
    monthlyStorageAed: num(body.monthlyStorageAed),

    // Backend bookings taken by the team pass showPayment:false — no token has
    // necessarily been collected, so the email says nothing about money.
    showPayment: body.showPayment !== false,
    tokenPaidAed: num(body.tokenPaidAed),
    balanceAed: balance,

    rmName: body.rmName ?? null,
    username: body.username ?? null,
    password: body.password ?? null,

    loginUrl: `${origin}/login`,
    kycUrl: `${origin}/kyc`,
    warehouseMapUrl: process.env.NEXT_PUBLIC_WAREHOUSE_MAP_URL || `${origin}/contact`,
    prohibitedUrl: `${origin}/prohibited-items`,
    supportPhone: env.CONTACT_NUMBER,
    supportEmail: "support@safestorage.ae",
  }

  const isSelfDrop = data.pickupType === "warehouse_arrival"
  const when = new Date(`${pickupDate}T00:00:00`)
  const nice = isNaN(when.getTime())
    ? pickupDate
    : when.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })

  const subject = data.pickupSlot
    ? `${isSelfDrop ? "Drop-off" : "Pickup"} confirmed — ${nice}, ${data.pickupSlot}`
    : `${isSelfDrop ? "Drop-off" : "Pickup"} confirmed — ${nice}`

  const result = await sendEmail({
    to,
    subject,
    html: renderPickupConfirmationEmail(data),
    text: renderPickupConfirmationText(data),
    replyTo: data.supportEmail,
    cc: ccAddresses(),
  })

  if (!result.sent) {
    // 200, not 5xx: the booking is already paid for and recorded. Reporting a
    // failure upstream must never make the caller retry the booking itself.
    console.error("[pickup-confirmation] send failed:", result.error)
    return NextResponse.json({ status: false, reason: result.error })
  }

  return NextResponse.json({ status: true, id: result.id })
}
