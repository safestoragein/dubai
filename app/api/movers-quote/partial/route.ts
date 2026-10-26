import { NextRequest, NextResponse } from "next/server"
import { clientIp } from "@/lib/client-ip"
import { savePartialLead } from "@/lib/movers-quote-db"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Abandoned-enquiry capture for /packers-and-movers/get-quote, same idea as /api/save-partial-lead:
// the browser beacons here when a visitor who typed any one of name / phone / email leaves before
// reaching a quotation. Same-origin so the write still completes during page teardown.
// Beacons often arrive as text/plain, so the body is parsed from text.

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: NextRequest) {
  let d: Record<string, unknown> = {}
  try {
    d = JSON.parse(await request.text())
  } catch {}

  const leadKey = str(d.leadKey, 64)
  const name = str(d.name, 100)
  const phone = str(d.phone, 30)
  const email = str(d.email, 120)
  const step = Math.max(0, Math.min(3, Number(d.step) || 0))

  if (!/^[A-Za-z0-9_-]{8,64}$/.test(leadKey) || (!name && !phone && !email)) {
    return NextResponse.json({ status: false }, { status: 400 })
  }

  await savePartialLead({ leadKey, name, phone, email, step, ip: clientIp(request), userAgent: request.headers.get("user-agent") || undefined })
  return NextResponse.json({ status: true })
}
