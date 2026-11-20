// POST /api/storage-quote — the /storage-quote quick form.
//
// Mirrors safestorage.in/storage-quote (POST /back/landing_quote/submit): the visitor is answered
// at once and the customer + a priced quotation are built in the background; nothing is e-mailed
// to the customer. Pricing/saving is the SAME sequence as /get-quote and the Leo chat
// (lib/leo-quote.ts createQuote): insert_customer_dubai -> insert_quotation_dubai -> items.
//
// The form has no basket, so the quotation is priced from a default "1 BHK" basket (India does the
// same with its default 1bhk); the team refines it on the call. If anything fails the lead is still
// saved through the plain lead endpoint, so a submission is never lost.
//
// LEO_DRY_RUN=1 skips every write (used for local testing).
import { NextResponse, after } from "next/server"
import { clientIp } from "@/lib/client-ip"
import { createQuote, getEmirates, isDryRun, postFormText, tooMany } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const maxDuration = 60

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "")
const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"] // fallback only; the live list is ss_city (AE) via getEmirates()
const FLOOR_MAP: Record<string, string> = {
  ground: "ground", basement: "basement", "above 10": ">10",
  "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",
}

/** Default "1 BHK" basket (names exist in dubai_items_list; unknown names are dropped by priceBasket). */
const DEFAULT_BASKET = [
  { name: "Queen Size Mattress", qty: 1 },
  { name: "Designer sofa 2 seater", qty: 1 },
  { name: "Fridge: Double door", qty: 1 },
  { name: "Washing Machine", qty: 1 },
  { name: "TV (Below 50 inches)", qty: 1 },
  { name: "Dining Table + 4 chairs", qty: 1 },
  { name: "Medium Size Almirah - 3 door(1.5x4.5x4ft)", qty: 1 },
  { name: "Personal box - Large", qty: 8 },
]

export async function POST(request: Request) {
  let b: Record<string, unknown>
  try {
    b = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ status: "error", message: "Bad request." }, { status: 400 })
  }

  // Honeypot: pretend success, write nothing.
  if (str(b.website)) return NextResponse.json({ status: "ok" })

  if (tooMany(clientIp(request), "storage-quote", 6, 60 * 60 * 1000)) {
    return NextResponse.json({ status: "error", message: "Too many requests. Please call us instead." }, { status: 429 })
  }

  const name = str(b.name, 80)
  const email = str(b.email, 190).toLowerCase()
  let digits = str(b.phone, 30).replace(/\D/g, "")
  if (digits.startsWith("00971")) digits = digits.slice(5)
  else if (digits.startsWith("971")) digits = digits.slice(3)
  else if (digits.startsWith("0")) digits = digits.slice(1)
  const live = await getEmirates().then((l) => l.map((e) => e.name)).catch(() => EMIRATES)
  const emirate = (live.length ? live : EMIRATES).find((e) => e.toLowerCase() === str(b.emirate, 40).toLowerCase())
  const area = str(b.area, 150)
  const floor = FLOOR_MAP[str(b.floor, 20).toLowerCase()]
  const lift = str(b.lift, 5).toLowerCase()

  const bad = (field: string, message: string) => NextResponse.json({ status: "error", field, message }, { status: 400 })
  if (name.length < 2 || /[<>]/.test(name)) return bad("name", "Please enter your name")
  if (!/^5\d{8}$/.test(digits)) return bad("mobile", "Enter a valid UAE mobile")
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return bad("email", "Enter a valid e-mail")
  if (!emirate) return bad("emirate", "Select your emirate")
  if (area.length < 2 || /[<>]/.test(area)) return bad("area", "Please enter your pickup area")
  if (!floor) return bad("floor", "Select the floor")
  if (lift !== "yes" && lift !== "no") return bad("lift", "Please choose")

  const phone = `+971${digits}`
  const attribution = b.attribution

  // Answer the visitor now; build the quotation after the response is sent.
  after(async () => {
    try {
      const out = await createQuote({
        name, phone, email, emirate, floor, lift,
        bedrooms: "1 BHK",
        address: `${area}, ${emirate}`,
        items: DEFAULT_BASKET,
        attribution,
        sendEmail: false,
      })
      if (isDryRun()) console.log("[storage-quote] DRY RUN", JSON.stringify(out))
      if (!out.ok) throw new Error(out.error || "quote not created")
    } catch (e) {
      console.error("[storage-quote] quote failed, saving plain lead:", e)
      if (isDryRun()) return
      try {
        await postFormText("insert_customer_details_dubai", {
          customer_name: name,
          customer_contact1: phone,
          customer_email: email,
          storage_size: `Quick form (/storage-quote) — ${emirate}, ${area}; floor ${floor}; lift ${lift}`,
        })
      } catch (e2) {
        // Last resort: the server log is the only record left.
        console.error(`[storage-quote] LEAD name=${name} phone=${phone} email=${email} emirate=${emirate} area=${area}`, e2)
      }
    }
  })

  return NextResponse.json({ status: "ok" })
}
