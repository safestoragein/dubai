import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import { CalendarCheck, CheckCircle2, Package, XCircle } from "lucide-react"
import AccountShell from "../shell"
import OrdersList, { type Order } from "./orders-list"

export const metadata: Metadata = {
  title: { absolute: "My Orders | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type OrdersReply = { status?: string; orders?: Order[] }
type AccountReply = {
  status?: string
  profile?: { name: string; customer_unique_id?: string }
  orders?: Order[]
  dues?: { count: number }
}

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
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

  const count = (k: "done" | "open" | "bad") =>
    orders.filter((o) => {
      const v = (o.status || "").toLowerCase()
      const kk = /complete|deliver|done|success/.test(v) ? "done" : /cancel|fail|reject/.test(v) ? "bad" : /pending|schedul|confirm|progress|open|new/.test(v) ? "open" : "other"
      return kk === k
    }).length

  return (
    <AccountShell active="orders" name={name} customerId={a?.profile?.customer_unique_id} orderCount={orders.length} dueCount={a?.dues?.count ?? 0} crumb="Orders">
      <div className={c.heading}>
        <div>
          <h1>Orders</h1>
          <p>Every pickup and delivery on your account, in one place.</p>
        </div>
      </div>

      {!a && !full ? (
        <div className={c.error}>We could not load your orders right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.kpis}>
            {([
              ["All orders", orders.length, Package, "Everything on your account"],
              ["Upcoming", count("open"), CalendarCheck, "Scheduled or in progress"],
              ["Completed", count("done"), CheckCircle2, "Collected and safe with us"],
              ["Cancelled", count("bad"), XCircle, "Orders that were cancelled"],
            ] as const).map(([t, v, Icon, note]) => (
              <div key={t} className={`${c.card} ${c.kpi}`}>
                <div className={c.kpiHead}><p className={c.kpiLabel}>{t}</p><span className={c.tileIcon}><Icon aria-hidden="true" /></span></div>
                <p className={c.kpiValue}>{v}</p>
                <p className={c.kpiNote}>{note}</p>
              </div>
            ))}
          </div>
          <OrdersList orders={orders} />
        </>
      )}
    </AccountShell>
  )
}
