import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { CalendarDays, CheckCircle2, CreditCard, Package, PackageCheck, Receipt, Truck } from "lucide-react"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "./account.module.css"
import AccountShell from "./shell"
import PayBanner from "./pay-banner"

export const metadata: Metadata = {
  title: { absolute: "My Account | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Order = { ref?: string; quotation?: string; type: string; sub_type: string; type_text?: string; date: string; status: string; status_label?: string }
type Account = {
  status?: string
  profile?: { customer_unique_id: string; name: string; email: string; phone: string; city: string }
  orders?: Order[]
  dues?: { count: number; total: number; items: { billing_date: string; note: string; amount: number }[] }
}

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
// Names always show Capitalised Like This, whatever case they were typed in.
const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const parse = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? null : d
}
const day = (v: string) => {
  const d = parse(v)
  return d ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : v || "—"
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

export default async function AccountPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const r = await callBack<Account>("account", { customer_id: String(me.customerId) })
  const a = r.ok && r.data?.status === "success" ? r.data : null

  const name = nameCase(a?.profile?.name || me.name) || "There"
  const first = name.split(" ")[0] || "There"
  const orders = a?.orders ?? []
  const dues = a?.dues
  const hasDue = !!dues?.count
  const latest = orders[0]
  const cid = a?.profile?.customer_unique_id

  const nDone = orders.filter((o) => kind(o.status) === "done").length
  const nOpen = orders.filter((o) => kind(o.status) === "open").length
  const nRest = orders.length - nDone - nOpen
  const pct = (n: number) => (orders.length ? Math.round((n / orders.length) * 100) : 0)
  const pDone = pct(nDone)
  const pOpen = pct(nOpen)
  const ringBg = orders.length
    ? `conic-gradient(#ee5824 0 ${pDone}%, #ffac88 ${pDone}% ${pDone + pOpen}%, #edf0f4 ${pDone + pOpen}%)`
    : "#edf0f4"

  // Recent activity, built from the customer's real orders and unpaid bills.
  const activity = [
    ...orders.slice(0, 3).map((o) => ({
      icon: kind(o.status) === "done" ? PackageCheck : Truck,
      title: `${label(o.type)} ${kind(o.status) === "done" ? "completed" : label(o.status).toLowerCase()}`,
      sub: o.sub_type && o.sub_type !== o.type ? label(o.sub_type) : "Your order",
      when: day(o.date),
    })),
    ...(dues?.items ?? []).slice(0, 2).map((d) => ({
      icon: Receipt, title: "Payment due", sub: `${d.note || "Storage charges"} · ${aed(d.amount)}`, when: day(d.billing_date),
    })),
  ]

  return (
    <AccountShell active="overview" name={name} customerId={cid} orderCount={orders.length} dueCount={dues?.count ?? 0} dueTotal={dues?.total ?? 0} crumb="Overview">
      <div className={c.heading}>
        <div>
          <h1>Welcome back, {first}</h1>
          <p>A clear view of your storage orders and payments.</p>
        </div>
        <div className={c.actions}>
          <span className={c.button}><CalendarDays aria-hidden="true" /> {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</span>
          <a className={`${c.button} ${c.buttonOrange}`} href="/account/orders"><Package aria-hidden="true" /> View orders</a>
        </div>
      </div>

      {hasDue && dues!.total > 0 && <PayBanner total={dues!.total} count={dues!.count} />}

      {!a ? (
        <div className={c.error}>We could not load your account details right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.kpis}>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Total orders</p><span className={c.tileIcon}><Package aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{orders.length}</p>
              <p className={c.kpiNote}><b>{nDone}</b>completed · {nOpen} upcoming</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Amount due</p><span className={c.tileIcon}><CreditCard aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{hasDue ? aed(dues!.total) : aed(0)}</p>
              <p className={c.kpiNote}>{hasDue ? <><span className="warn" style={{ color: "#d45f50", fontWeight: 500, marginRight: 6 }}>Payment pending</span>on your unpaid bills</> : <><b>All paid</b>nothing outstanding</>}</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Unpaid bills</p><span className={c.tileIcon}><Receipt aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{dues?.count ?? 0}</p>
              <p className={c.kpiNote}>{hasDue ? "Please settle to avoid late fees" : "You are all caught up"}</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Latest order</p><span className={c.tileIcon}><Truck aria-hidden="true" /></span></div>
              <p className={`${c.kpiValue} ${c.kpiValueSm}`}>{latest ? label(latest.type) : "—"}
                {latest && <span className={`${c.status} ${pill[kind(latest.status)]}`}>{(latest.status_label || label(latest.status))}</span>}
              </p>
              <p className={c.kpiNote}>{latest ? day(latest.date) : "No orders yet"}</p>
            </div>
          </div>

          <div className={c.grid2}>
            <section className={`${c.panel} ${c.tablePanel}`}>
              <div className={c.panelHead}>
                <div><h2 className={c.panelTitle}>Recent orders</h2><p className={c.panelSub}>The latest activity on your account</p></div>
                <a className={c.link} href="/account/orders">View all orders</a>
              </div>
              {orders.length ? (
                <div className={c.tableWrap}>
                  <table className={c.table}>
                    <thead><tr><th>Workorder Id</th><th>Quotation Id</th><th>Order Type</th><th>Pickup Date</th><th>Order Status</th></tr></thead>
                    <tbody>
                      {orders.map((o, i) => (
                        <tr key={i}>
                          <td><a className={c.orderLink} href="/account/orders">{o.ref || "—"}</a></td>
                          <td>{o.quotation || "—"}</td>
                          <td><span className={c.cellMain}><span className={c.cellIcon}><Truck aria-hidden="true" /></span>
                            <span>{o.type_text || `${label(o.type)}${o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}`}</span></span></td>
                          <td>{day(o.date)}</td>
                          <td><span className={`${c.status} ${pill[kind(o.status)]}`}>{o.status_label || label(o.status)}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : <p className={c.empty}>No orders yet.</p>}
            </section>

            <section className={c.panel}>
              <div className={c.panelHead}><h2 className={c.panelTitle}>Recent activity</h2></div>
              {activity.length ? activity.map((x, i) => (
                <div key={i} className={c.activity}>
                  <span className={c.tileIcon}><x.icon aria-hidden="true" /></span>
                  <div><b>{x.title}</b><p>{x.sub}</p></div>
                  <time>{x.when}</time>
                </div>
              )) : <p className={c.panelSub}>Nothing to show yet.</p>}
              <div className={`${c.notice} ${hasDue ? "" : c.noticeOk}`}>{hasDue ? `You have ${dues!.count} unpaid ${dues!.count === 1 ? "bill" : "bills"}.` : "Your account is up to date."}</div>
            </section>
          </div>

          <div className={c.grid2} id="payments">
            <section className={`${c.panel} ${c.tablePanel}`}>
              <div className={c.panelHead}>
                <div><h2 className={c.panelTitle}>Payments</h2><p className={c.panelSub}>Bills waiting to be paid</p></div>
                <a className={c.link} href="/account/payments">View all payments</a>
              </div>
              {hasDue ? (
                <div className={c.tableWrap}>
                  <table className={c.table}>
                    <thead><tr><th>Bill date</th><th>Description</th><th>Amount</th><th>Status</th></tr></thead>
                    <tbody>
                      {dues!.items.map((d, i) => (
                        <tr key={i}>
                          <td>{day(d.billing_date)}</td>
                          <td style={{ color: "#344050" }}>{d.note || "Storage charges"}</td>
                          <td><b>{aed(d.amount)}</b></td>
                          <td><span className={`${c.status} ${c.sBad}`}>Unpaid</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className={c.emptyOk}>
                  <span className={c.emptyOkIcon}><CheckCircle2 aria-hidden="true" /></span>
                  <b>All clear</b>
                  <span>Nothing is due. Thank you!</span>
                </div>
              )}
            </section>

            <section className={c.panel} id="details">
            <div className={c.panelHead}><div><h2 className={c.panelTitle}>Your details</h2><p className={c.panelSub}>The information we have on file</p></div><a className={c.link} href="/account/details">View all details</a></div>
            <div className={`${c.fields} ${c.fieldsOne}`}>
              {([["Name", name], ["Customer ID", cid || "—"], ["Email", a.profile?.email || "—"], ["Phone", a.profile?.phone || "—"], ["City", label(a.profile?.city || "")]] as [string, string][]).map(([k, v]) => (
                <div key={k} className={c.field}><span>{k}</span><b>{v}</b></div>
              ))}
            </div>
            </section>
          </div>
        </>
      )}
    </AccountShell>
  )
}
