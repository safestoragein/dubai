// "Pay now": sends the signed-in customer straight to the Dubai payment page on
// safestorage.in (the one that lists the unpaid bills with the "Pay AED x" button),
// skipping the make_payment email / mobile step.
//
// The customer comes from the signed session cookie, never from the request, and the link is
// only handed out while that customer really has unpaid bills. The payment itself (Stripe
// checkout, amount recomputed from the unpaid rows, settlement by webhook) is the existing
// safestorage.in flow — nothing is marked Paid here.
import { NextResponse } from "next/server"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const PAY_BASE = (process.env.AE_PAY_PAGE_URL || "https://safestorage.in/customer/make_payment").replace(/\?.*$/, "")

const MIN_AED = 2 // Stripe rejects AED charges below this

type Bill = { status: string; amount: number }
type Reply = { status?: string; bills?: Bill[] }

/** Same encoding make_payment decodes: base64 with + / = swapped for . _ - */
const encodeId = (id: number) => Buffer.from(String(id)).toString("base64").replace(/\+/g, ".").replace(/\//g, "_").replace(/=/g, "-")

export async function POST() {
  const me = await getCustomerSession()
  if (!me) return NextResponse.json({ error: "Please sign in again." }, { status: 401 })

  const r = await callBack<Reply>("payments", { customer_id: String(me.customerId) })
  if (!r.ok || r.data?.status !== "success") {
    return NextResponse.json({ error: "We could not load your bills. Please try again." }, { status: 502 })
  }
  const unpaid = (r.data.bills ?? []).filter((b) => b.status === "Unpaid" && b.amount > 0)
  if (!unpaid.length) return NextResponse.json({ error: "There is nothing outstanding to pay." }, { status: 400 })
  const total = Math.round(unpaid.reduce((a, b) => a + b.amount, 0) * 100) / 100
  if (total < MIN_AED) {
    // The card payment page cannot take less than AED 2, so say so instead of sending the customer to an error page.
    return NextResponse.json({ error: `Online card payment starts from AED ${MIN_AED}. Please call us to pay this bill.` }, { status: 400 })
  }

  return NextResponse.json({ url: `${PAY_BASE}?id=${encodeId(me.customerId)}` })
}
