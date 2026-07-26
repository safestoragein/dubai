// Loads a saved quote behind a signed resume link.
//
// The quotation email links here so a customer can book their pickup without
// re-entering name, address and every item. The code is verified before any
// data is returned — quotation ids are sequential, so without it anyone could
// walk them and read other customers' details.
import { NextResponse } from "next/server"
import { verifyQuoteResumeCode } from "@/lib/quote-resume"
import { getResumableQuote } from "@/lib/quotation-db"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const id = (url.searchParams.get("id") || "").trim()
  const code = (url.searchParams.get("code") || "").trim()

  if (!id) {
    return NextResponse.json({ status: false, reason: "no_id" }, { status: 400 })
  }

  // Same response for a bad code and an unknown quote, so the endpoint cannot
  // be used to discover which quotation ids exist.
  if (!verifyQuoteResumeCode(id, code)) {
    return NextResponse.json({ status: false, reason: "invalid_link" }, { status: 404 })
  }

  const quote = await getResumableQuote(id)
  if (!quote) {
    return NextResponse.json({ status: false, reason: "invalid_link" }, { status: 404 })
  }

  return NextResponse.json({ status: true, quote })
}
