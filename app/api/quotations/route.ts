// Capture endpoint for quote submissions.
//
// The quote form posts here alongside the safestorage.in PHP calls, so every
// detail lands in our own database even when the PHP backend drops fields it
// does not have columns for. Fire-and-forget from the client: this must never
// be able to block or fail a customer's quote.
import { NextResponse } from "next/server"
import { saveQuotationCapture, type QuotationCapture } from "@/lib/quotation-db"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  let body: QuotationCapture
  try {
    body = (await request.json()) as QuotationCapture
  } catch {
    return NextResponse.json(
      { status: false, message: "Invalid JSON body" },
      { status: 400 }
    )
  }

  const id = await saveQuotationCapture(body)

  // A failed capture is logged server-side; the client is told plainly but
  // still returns 200 so a DB blip never surfaces as an error to the customer.
  return NextResponse.json({ status: id !== null, id })
}
