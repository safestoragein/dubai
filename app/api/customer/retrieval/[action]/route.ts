// Retrieval requests for the signed-in customer: options / estimate / create.
// The customer comes from the signed session cookie, never from the request body. All checks
// and the charge itself are done on the PHP side (back/modules/dubai/controllers/Dubai_retrieval.php).
import { NextResponse } from "next/server"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const ACTIONS = ["options", "estimate", "create"] as const
type Action = (typeof ACTIONS)[number]

const str = (v: unknown, max = 500) => String(v ?? "").slice(0, max)

export async function POST(request: Request, ctx: { params: Promise<{ action: string }> }) {
  const { action } = await ctx.params
  if (!ACTIONS.includes(action as Action)) return NextResponse.json({ error: "Not found." }, { status: 404 })

  const me = await getCustomerSession()
  if (!me) return NextResponse.json({ error: "Please sign in again." }, { status: 401 })

  let body: Record<string, unknown> = {}
  try { body = await request.json() } catch { /* options needs no body */ }

  const form: Record<string, string | string[]> = { customer_id: String(me.customerId) }
  if (action !== "options") {
    form.type = str(body.type, 20)
    form.date = str(body.date, 12)
    form.lat = str(body.lat, 24)
    form.lng = str(body.lng, 24)
    form.floor = str(body.floor, 24)
    form.lift = str(body.lift, 5)
    if (Array.isArray(body.inventory_id)) form.inventory_id = body.inventory_id.slice(0, 500).map((x) => String(Number(x) || 0))
    if (action === "create") {
      form.timeslot = str(body.timeslot, 40)
      form.address = str(body.address, 400)
      form.phone = str(body.phone, 20)
      form.note = str(body.note, 500)
    }
  }

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || undefined
  const r = await callBack<Record<string, unknown>>(action as Action, form, ip, "dubai_retrieval")
  if (!r.data) return NextResponse.json({ error: "Retrieval is not available right now. Please try again later." }, { status: 503 })
  if (r.data.status !== "success") {
    return NextResponse.json({ error: String(r.data.message || "Something went wrong. Please try again.") }, { status: r.status === 200 ? 400 : r.status })
  }
  return NextResponse.json(r.data)
}
