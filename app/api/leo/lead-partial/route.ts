// POST /api/leo/lead-partial — abandoned-chat lead (the visitor gave a phone or
// email and left). Same backend call as the /get-quote form's abandoned-lead
// beacon (save_dubai_partial_lead, which de-duplicates and only fills blanks).
// Accepts JSON or text/plain JSON, because a sendBeacon from an unloading page
// is sent as text/plain to avoid a CORS preflight it would never survive.
import { NextResponse } from "next/server"
import { clientIp } from "@/lib/client-ip"
import { isDryRun, postFormText, tooMany } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  let b: Record<string, unknown> = {}
  try {
    b = JSON.parse(await request.text()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  if (tooMany(clientIp(request), "leo-partial", 20, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false }, { status: 429 })
  }

  const name = str(b.name, 120)
  const email = str(b.email)
  const phone = str(b.phone, 30)
  const digits = phone.replace(/\D/g, "")
  // Same hygiene as the form: a "phone" that is really a name, or an address
  // that is not one, is dropped rather than stored.
  const goodPhone = phone && !/[a-z]/i.test(phone) && digits.length >= 7 && digits.length <= 15 ? phone : ""
  const goodEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : ""
  if (!name && !goodPhone && !goodEmail) return NextResponse.json({ ok: false }, { status: 400 })
  if (isDryRun()) return NextResponse.json({ ok: true, dryRun: true })

  try {
    await postFormText("save_dubai_partial_lead", {
      customer_name: name,
      customer_contact1: goodPhone,
      customer_email: goodEmail,
      storage_type: str(b.storageType).toLowerCase().startsWith("business") ? "business" : "household",
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[leo] partial lead failed:", e)
    return NextResponse.json({ ok: false }, { status: 502 })
  }
}
