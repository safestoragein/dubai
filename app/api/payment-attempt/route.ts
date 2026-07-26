// Records a payment attempt reported by the browser.
//
// Stripe tells us about failures it sees, but not about a customer who reaches
// checkout and walks away, or bounces back via the cancel URL. The frontend
// reports those here so the attempt is still chased.
import { NextResponse } from "next/server"
import {
  savePaymentAttempt,
  deviceFromUserAgent,
  type PaymentAttempt,
} from "@/lib/payment-attempt-db"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  let body: PaymentAttempt
  try {
    body = (await request.json()) as PaymentAttempt
  } catch {
    return NextResponse.json({ status: false, reason: "bad_json" }, { status: 400 })
  }

  const ua = request.headers.get("user-agent")
  // Behind nginx, the socket address is the proxy — the real client is first
  // in the forwarded chain.
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0].trim() : null

  const id = await savePaymentAttempt({
    ...body,
    user_agent: body.user_agent ?? ua,
    device_type: body.device_type ?? deviceFromUserAgent(ua),
    ip_address: body.ip_address ?? ip,
    referrer: body.referrer ?? request.headers.get("referer"),
  })

  return NextResponse.json({ status: id !== null, id })
}
