// Item list for the Leo chat widget (dubai_items_list). Only names go to the
// browser — points and prices stay server-side and the quote is priced here.
import { NextResponse } from "next/server"
import { getCatalogue } from "@/lib/leo-quote"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const rows = await getCatalogue()
    const seen = new Set<string>()
    const items = rows
      // Items with no points cannot change a price; the form lists them anyway,
      // so the chat does too (it is how a customer says "and also a ladder").
      .filter((r) => (seen.has(r.name) ? false : (seen.add(r.name), true)))
      .map((r) => ({ id: r.name, slug: r.name, name: r.name }))
    return NextResponse.json({ items })
  } catch (e) {
    console.error("[leo] catalogue:", e)
    return NextResponse.json({ items: [] })
  }
}
