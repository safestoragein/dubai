import { NextResponse } from "next/server"
import { parseThankYouPass } from "@/lib/thank-you-pass"
import { claimLeadConversion } from "@/lib/lead-conversion-db"
import { tooMany } from "@/lib/leo-quote"

export const dynamic = "force-dynamic"

// The thank-you page asks here whether it may report the conversion. fire:true is returned exactly once
// per CRM lead; refreshes, re-opened links and replays of the same pass get fire:false.
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  if (tooMany(ip, "ty-claim", 20, 60_000)) return NextResponse.json({ fire: false }, { status: 429 })
  const b = (await req.json().catch(() => ({}))) as { t?: unknown }
  const pass = parseThankYouPass(typeof b.t === "string" ? b.t : null)
  if (!pass || !pass.leadId) return NextResponse.json({ fire: false }, { status: 403 })
  const fire = await claimLeadConversion(pass.leadId, pass.quotationId, "book_appointment")
  return NextResponse.json({ fire, submission_id: pass.leadId }, { headers: { "Cache-Control": "no-store" } })
}
