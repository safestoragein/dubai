// Emirate list for the Leo chat widget — the same get_dubai_emirates feed the
// /get-quote emirate dropdown uses. Widget shape: { emirates: [{ slug, name }] }.
import { NextResponse } from "next/server"
import { getEmirates } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    return NextResponse.json({ emirates: await getEmirates() })
  } catch (e) {
    console.error("[leo] emirates:", e)
    // Empty list -> the widget falls back to "call us", it never dead-ends.
    return NextResponse.json({ emirates: [] })
  }
}
