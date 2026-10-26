import { NextResponse } from "next/server"
import { getEmirates } from "@/lib/movers-crm"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Emirate dropdown for the packers & movers form (source: CRM ss_city, cached server-side).
export async function GET() {
  return NextResponse.json({ emirates: await getEmirates() })
}
