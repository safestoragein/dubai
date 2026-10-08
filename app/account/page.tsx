import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { manrope, sora } from "@/components/landing/fonts"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import s from "@/components/landing/landing.module.css"
import LogoutButton from "./logout-button"

export const metadata: Metadata = {
  title: { absolute: "My Account | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Account = {
  status?: string
  profile?: { customer_unique_id: string; name: string; email: string; phone: string; city: string }
  orders?: { type: string; sub_type: string; date: string; status: string }[]
  dues?: { count: number; total: number; items: { billing_date: string; note: string; amount: number }[] }
}

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? v || "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export default async function AccountPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const r = await callBack<Account>("account", { customer_id: String(me.customerId) })
  const a = r.ok && r.data?.status === "success" ? r.data : null

  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      <section className={s.section}>
        <div className={s.wrap} style={{ maxWidth: 860 }}>
          <div className={s.sectionHead}>
            <p className={s.eyebrow}>My account</p>
            <h1>Hello, {a?.profile?.name || me.name || "there"}</h1>
            {a?.profile?.customer_unique_id && <p>Customer ID: {a.profile.customer_unique_id}</p>}
          </div>

          {!a ? (
            <div className={s.card}><p>We could not load your account details right now. Please try again in a moment.</p></div>
          ) : (
            <>
              <div className={s.card}>
                <h2>Your details</h2>
                <ul className={s.checkList}>
                  <li>Email: {a.profile?.email || "—"}</li>
                  <li>Phone: {a.profile?.phone || "—"}</li>
                  <li>City: {a.profile?.city || "—"}</li>
                </ul>
              </div>

              <div className={s.card} style={{ marginTop: 16 }}>
                <h2>Recent orders</h2>
                {a.orders?.length ? (
                  <ul className={s.checkList}>
                    {a.orders.map((o, i) => (
                      <li key={i}>{label(o.type)}{o.sub_type ? ` (${label(o.sub_type)})` : ""} · {day(o.date)} · {label(o.status)}</li>
                    ))}
                  </ul>
                ) : <p>No orders yet.</p>}
              </div>

              <div className={s.card} style={{ marginTop: 16 }}>
                <h2>Payments due</h2>
                {a.dues?.count ? (
                  <>
                    <p><strong>{a.dues.count} unpaid</strong> · total {aed(a.dues.total)}</p>
                    <ul className={s.checkList}>
                      {a.dues.items.map((d, i) => <li key={i}>{day(d.billing_date)} · {d.note || "Storage charges"} · {aed(d.amount)}</li>)}
                    </ul>
                  </>
                ) : <p>Nothing is due. Thank you!</p>}
              </div>
            </>
          )}

          <div style={{ marginTop: 24 }}><LogoutButton /></div>
        </div>
      </section>
    </div>
  )
}
