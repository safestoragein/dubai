import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Truck, CalendarDays, Clock, MapPin } from "lucide-react"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"

export const metadata: Metadata = {
  title: { absolute: "My Orders | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Order = { ref?: string; type: string; sub_type: string; status: string; date: string; timeslot?: string; address?: string; note?: string }
type OrdersReply = { status?: string; orders?: Order[] }
type AccountReply = {
  status?: string
  profile?: { name: string }
  orders?: Order[]
  dues?: { count: number }
}

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? v || "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
type Kind = "done" | "open" | "bad" | "other"
const kind = (s: string): Kind => {
  const v = (s || "").toLowerCase()
  if (/complete|deliver|done|success/.test(v)) return "done"
  if (/cancel|fail|reject/.test(v)) return "bad"
  if (/pending|schedul|confirm|progress|open|new/.test(v)) return "open"
  return "other"
}
const pill: Record<Kind, string> = { done: c.sDone, open: c.sOpen, bad: c.sBad, other: c.sOther }

export default async function OrdersPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, ord] = await Promise.all([
    callBack<AccountReply>("account", { customer_id: String(me.customerId) }),
    callBack<OrdersReply>("orders", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const full = ord.ok && ord.data?.status === "success" ? ord.data.orders ?? [] : null
  // If the full list is not available yet, fall back to the latest orders the account call returns.
  const orders: Order[] = full ?? a?.orders ?? []
  const name = nameCase(a?.profile?.name || me.name) || "There"

  const count = (k: Kind) => orders.filter((o) => kind(o.status) === k).length
  const stats = [
    { label: "All orders", value: orders.length, cls: c.cBlue },
    { label: "Scheduled / in progress", value: count("open"), cls: c.cOrange },
    { label: "Completed", value: count("done"), cls: c.cGreen },
    { label: "Cancelled", value: count("bad"), cls: c.cRed },
  ]

  return (
    <AccountShell active="orders" name={name} orderCount={orders.length} dueCount={a?.dues?.count ?? 0} crumb="Orders">
      <div className={c.heading}>
        <div>
          <h1>My orders</h1>
          <p>Every pickup and delivery on your account, newest first.</p>
        </div>
      </div>

      {!a && !full ? (
        <div className={c.error}>We could not load your orders right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.kpis}>
            {stats.map((s) => (
              <div key={s.label} className={`${c.card} ${c.kpi}`}>
                <div className={c.kpiHead}><p className={c.kpiLabel}>{s.label}</p><Truck className={`${c.kpiIcon} ${s.cls}`} aria-hidden="true" /></div>
                <p className={c.kpiValue}>{s.value}</p>
              </div>
            ))}
          </div>

          <section className={c.card}>
            <div className={c.panelHead}>
              <h2 className={c.panelTitle}>Order history</h2>
              {orders.length > 0 && <span className={c.count}>{orders.length} {orders.length === 1 ? "order" : "orders"}</span>}
            </div>
            {orders.length ? (
              <div className={c.tableWrap}>
                <table className={c.table}>
                  <thead>
                    <tr><th>Order</th><th>Date</th><th>Time</th><th>Address</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {orders.map((o, i) => (
                      <tr key={o.ref || i}>
                        <td>
                          <span className={c.cellMain}>
                            <span className={c.cellIcon}><Truck aria-hidden="true" /></span>
                            <span>
                              {label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}
                              {o.ref && <span className={c.refLine}>{o.ref}</span>}
                            </span>
                          </span>
                        </td>
                        <td className={c.muted}><span className={c.inline}><CalendarDays aria-hidden="true" />{day(o.date)}</span></td>
                        <td className={c.muted}>{o.timeslot ? <span className={c.inline}><Clock aria-hidden="true" />{o.timeslot}</span> : "—"}</td>
                        <td className={`${c.muted} ${c.addrCell}`}>{o.address ? <span className={c.inline}><MapPin aria-hidden="true" />{o.address}</span> : "—"}</td>
                        <td><span className={`${c.status} ${pill[kind(o.status)]}`}>{label(o.status)}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : <p className={c.empty}>No orders yet.</p>}
          </section>
        </>
      )}
    </AccountShell>
  )
}
