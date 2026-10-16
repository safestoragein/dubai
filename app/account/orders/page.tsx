import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import OrdersList, { type Order } from "./orders-list"
import OrdersInsights from "./orders-insights"

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
  dues?: { count: number; total: number }
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

  return (
    <AccountShell active="orders" name={name} customerId={a?.profile?.customer_unique_id} orderCount={orders.length} dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="Orders">
      <div className={c.heading}>
        <div>
          <h1>Orders</h1>
          <p>Every pickup and delivery on your account, in one place.</p>
        </div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {!a && !full ? (
        <div className={c.error}>We could not load your orders right now. Please try again in a moment.</div>
      ) : (
        <>
          <OrdersInsights orders={orders} />
          <OrdersList orders={orders} />
        </>
      )}
    </AccountShell>
  )
}
