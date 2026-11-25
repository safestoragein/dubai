import { NextResponse } from "next/server"
import { parseThankYouPass } from "@/lib/thank-you-pass"
import { claimLeadConversion, confirmLeadConversion } from "@/lib/lead-conversion-db"
import { tooMany } from "@/lib/leo-quote"

export const dynamic = "force-dynamic"
const NO_STORE = { "Cache-Control": "no-store" }

// POST {t}             -> may this page report the conversion now?  { fire, claim, submission_id, lead_id }
// POST {t, confirm}    -> the tags really fired (GTM eventCallback); closes the lease for good
// submission_id = quotation id (unique per submission); lead_id = CRM customer id (reused for a returning phone/email).
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  if (tooMany(ip, "ty-claim", 30, 60_000)) return NextResponse.json({ fire: false }, { status: 429 })
  const b = (await req.json().catch(() => ({}))) as { t?: unknown; confirm?: unknown }
  const pass = parseThankYouPass(typeof b.t === "string" ? b.t : null)
  if (!pass || !pass.leadId) return NextResponse.json({ fire: false }, { status: 403 })

  if (typeof b.confirm === "string" && /^[0-9a-f]{32}$/.test(b.confirm)) {
    const ok = await confirmLeadConversion(pass.quotationId, pass.leadId, b.confirm)
    return NextResponse.json({ confirmed: ok }, { headers: NO_STORE })
  }
  const claim = await claimLeadConversion(pass.quotationId, pass.leadId)
  if (!claim) return NextResponse.json({ fire: false }, { headers: NO_STORE })
  return NextResponse.json({ fire: true, claim, submission_id: pass.quotationId, lead_id: pass.leadId }, { headers: NO_STORE })
}
