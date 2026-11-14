// POST /api/leo/lead — the chat's confirmed lead (name + phone + email).
// Household -> save_dubai_partial_lead (the /get-quote form's own lead save,
// de-duplicated on phone then email). Business / document -> the website's
// business lead form endpoint (insert_business_customer_details_dubai), because
// those are priced by the team and never get an automatic quotation.
import { NextResponse } from "next/server"
import { clientIp } from "@/lib/client-ip"
import { isDryRun, parseLooseJson, postFormText, tooMany } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  let b: Record<string, unknown>
  try {
    b = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 })
  }
  if (tooMany(clientIp(request), "leo-lead", 15, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, { status: 429 })
  }

  const name = str(b.name, 120)
  const email = str(b.email, 200)
  const phone = str(b.phone, 30)
  const digits = phone.replace(/\D/g, "")
  if (!name || /[a-z]/i.test(phone) || digits.length < 7 || digits.length > 15 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please check your name, phone and email." }, { status: 400 })
  }

  const business = str(b.storageType).toLowerCase().startsWith("business")
  if (isDryRun()) return NextResponse.json({ ok: true, id: "dry-run" })

  try {
    if (business) {
      const size = [
        str(b.propertySize, 60),
        str(b.city, 60),
        b.items ? `items: ${str(b.items, 400)}` : "",
        b.pickupLocation ? `pickup: ${str(b.pickupLocation, 200)}` : "",
        "via Leo chat",
      ].filter(Boolean).join(" · ")
      const r = await postFormText("insert_business_customer_details_dubai", {
        customer_name: name,
        company_name: "",
        customer_contact1: phone,
        customer_email: email,
        storage_size: size,
      })
      if (!r.ok || !r.text.toLowerCase().includes("success")) throw new Error(`business lead: ${r.text.slice(0, 120)}`)
      return NextResponse.json({ ok: true })
    }
    const r = await postFormText("save_dubai_partial_lead", {
      customer_name: name,
      customer_contact1: phone,
      customer_email: email,
      storage_type: "household",
    })
    let id: string | undefined
    try {
      const j = parseLooseJson<{ status?: boolean; lead_id?: number | string }>(r.text)
      if (!j.status) throw new Error("not saved")
      id = j.lead_id != null ? String(j.lead_id) : undefined
    } catch {
      throw new Error(`lead: ${r.text.slice(0, 120)}`)
    }
    return NextResponse.json({ ok: true, id })
  } catch (e) {
    console.error("[leo] lead failed:", e)
    return NextResponse.json({ ok: false, error: "Could not save your details." }, { status: 502 })
  }
}
