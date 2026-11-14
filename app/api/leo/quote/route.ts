// POST /api/leo/quote — price the chat's basket and create the real quotation.
// See lib/leo-quote.ts for the sequence (identical to the /get-quote form's save).
import { NextResponse } from "next/server"
import { clientIp } from "@/lib/client-ip"
import { createQuote, tooMany } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const maxDuration = 60

const FLOORS = new Set(["basement", "ground", "1", "2", "3", "4", "5", ">10"])
const LIFTS = new Set(["yes", "no"])
const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  let b: Record<string, unknown>
  try {
    b = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 })
  }

  // The quote form is a public endpoint too, but this one is cheap to hammer.
  if (tooMany(clientIp(request), "leo-quote", 8, 10 * 60 * 1000)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, { status: 429 })
  }

  const name = str(b.name, 120)
  const email = str(b.email, 200)
  const phone = str(b.phone, 30)
  const digits = phone.replace(/\D/g, "")
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[a-z]/i.test(phone) || digits.length < 7 || digits.length > 15) {
    return NextResponse.json({ ok: false, error: "Please check your name, phone and email." }, { status: 400 })
  }

  // Business / document storage is priced by the team, as on the website
  // (its business form is a lead form, not a priced quote).
  if (str(b.storageType).toLowerCase().startsWith("business")) {
    return NextResponse.json({ ok: false, unsupported: true })
  }

  const floor = str(b.pickupFloor, 10)
  const lift = str(b.pickupLift, 5)
  if (!FLOORS.has(floor) || !LIFTS.has(lift)) {
    return NextResponse.json({ ok: false, error: "Please choose the floor and whether there is a lift." }, { status: 400 })
  }

  const rawItems = Array.isArray(b.pickedItems) ? (b.pickedItems as unknown[]).slice(0, 150) : []
  const items = rawItems
    .map((i) => ({ name: str((i as Record<string, unknown>)?.name, 200), qty: Number((i as Record<string, unknown>)?.qty) }))
    .filter((i) => i.name && Number.isFinite(i.qty))

  const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null)

  try {
    const out = await createQuote({
      name,
      phone,
      email,
      emirate: str(b.city, 60),
      floor,
      lift,
      bedrooms: str(b.propertySize, 40),
      address: str(b.pickupLocation, 300),
      lat: num(b.pickupLat),
      lng: num(b.pickupLon),
      items,
      attribution: b.attribution,
    })
    return NextResponse.json(out)
  } catch (e) {
    console.error("[leo] quote failed:", e)
    // The lead is already saved by /api/leo/lead; the widget says so.
    return NextResponse.json({ ok: false, error: "Could not create the quotation." }, { status: 502 })
  }
}
