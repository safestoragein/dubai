// Sends the welcome note.
//
// Called by Dubai::save_inventory when the team presses "Send Welcome Note" —
// i.e. once the goods are checked in, the quotation has been re-priced from the
// actual items, and the storage/transport dues have been raised.
//
// The caller is responsible for the send rules (AE only, order scheduled today or
// later, welcome-note button only). This route just renders and sends.
import { NextResponse } from "next/server"
import { sendEmail, isEmailEnabled, ccAddresses } from "@/lib/email/send"
import {
  renderWelcomeNoteEmail,
  renderWelcomeNoteText,
  type WelcomeNoteData,
} from "@/lib/email/welcome-note-template"
import { env } from "@/lib/env"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface Body {
  email?: string
  fullName?: string
  transportTotalAed?: number | string
  transportPaidAed?: number | string
  transportDueAed?: number | string
  storageTotalAed?: number | string
  vatRate?: number | string
  rmName?: string | null
  paymentUrl?: string | null
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
    return NextResponse.json({ status: false, reason: "resend_not_configured" }, { status: 503 })
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

  const storageTotalAed = num(body.storageTotalAed)
  if (storageTotalAed <= 0) {
    // A welcome note quoting AED 0 a month would be worse than none at all — it
    // usually means the inventory was saved before any items were entered.
    return NextResponse.json({ status: false, reason: "no_storage_amount" }, { status: 400 })
  }

  const data: WelcomeNoteData = {
    firstName: firstName(body.fullName),
    transportTotalAed: num(body.transportTotalAed),
    transportPaidAed: num(body.transportPaidAed),
    transportDueAed: num(body.transportDueAed),
    storageTotalAed,
    vatRate: num(body.vatRate) || 5,
    // No payment page configured yet — the template then tells the customer their
    // consultant will send a link, instead of rendering a dead button.
    paymentUrl: (body.paymentUrl ?? "").trim() || process.env.NEXT_PUBLIC_PAYMENT_URL || null,
    rmName: body.rmName ?? null,
    supportPhone: env.CONTACT_NUMBER,
    supportEmail: "support@safestorage.ae",
  }

  const payable = data.transportDueAed + data.storageTotalAed
  const subject = `Your goods are in storage — AED ${payable.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} payable`

  const result = await sendEmail({
    to,
    subject,
    html: renderWelcomeNoteEmail(data),
    text: renderWelcomeNoteText(data),
    replyTo: data.supportEmail,
    cc: ccAddresses(),
  })

  if (!result.sent) {
    // 200, not 5xx: the goods are stored and the dues are raised. A mail failure
    // must never make the caller retry work that has already been committed.
    console.error("[welcome-note] send failed:", result.error)
    return NextResponse.json({ status: false, reason: result.error })
  }

  return NextResponse.json({ status: true, id: result.id })
}
