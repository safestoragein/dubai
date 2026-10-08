import type { Metadata } from "next"
import { redirect } from "next/navigation"
import {
  CalendarDays, CheckCircle2, CreditCard, HelpCircle, LayoutDashboard, Mail, MapPin, Package,
  Phone, PhoneCall, Receipt, Truck, UserRound,
} from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import { EMAIL, PHONE, PHONE_DISPLAY } from "@/lib/company-facts"
import c from "./account.module.css"
import LogoutButton from "./logout-button"

export const metadata: Metadata = {
  title: { absolute: "My Account | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Order = { type: string; sub_type: string; date: string; status: string }
type Account = {
  status?: string
  profile?: { customer_unique_id: string; name: string; email: string; phone: string; city: string }
  orders?: Order[]
  dues?: { count: number; total: number; items: { billing_date: string; note: string; amount: number }[] }
}

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
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

export default async function AccountPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const r = await callBack<Account>("account", { customer_id: String(me.customerId) })
  const a = r.ok && r.data?.status === "success" ? r.data : null

  const name = a?.profile?.name || me.name || "there"
  const first = name.trim().split(/\s+/)[0] || "there"
  const orders = a?.orders ?? []
  const dues = a?.dues
  const hasDue = !!dues?.count
  const latest = orders[0]
  const mix = {
    done: orders.filter((o) => kind(o.status) === "done").length,
    open: orders.filter((o) => kind(o.status) === "open").length,
    other: orders.filter((o) => ["bad", "other"].includes(kind(o.status))).length,
  }

  return (
    <div className={`${c.page} ${sora.variable} ${manrope.variable}`}>
      <div className={c.shell}>
        {/* ---------------- sidebar ---------------- */}
        <aside className={c.side}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={c.logo} src="/images/design-mode/logo.png" alt="SafeStorage Dubai" />
          <nav className={c.nav} aria-label="Account">
            <a className={`${c.navItem} ${c.navActive}`} href="#top"><LayoutDashboard aria-hidden="true" /> Dashboard</a>
            <a className={c.navItem} href="#orders"><Package aria-hidden="true" /> Orders{orders.length > 0 && <span className={c.badge}>{orders.length}</span>}</a>
            <a className={c.navItem} href="#payments"><CreditCard aria-hidden="true" /> Payments{hasDue && <span className={c.badge}>{dues!.count}</span>}</a>
            <a className={c.navItem} href="#details"><UserRound aria-hidden="true" /> My details</a>
            <div className={c.navSep} />
            <a className={c.navItem} href={`mailto:${EMAIL}`}><HelpCircle aria-hidden="true" /> Help &amp; Support</a>
          </nav>
          <div className={c.sideBottom}>
            <LogoutButton />
            <div className={c.promo}>
              <span className={c.promoIcon}><PhoneCall aria-hidden="true" /></span>
              <h3>Need a hand?</h3>
              <p>Questions about an order, a pickup or a payment? We reply fast, every day.</p>
              <a className={c.promoBtn} href={`tel:${PHONE}`}><PhoneCall aria-hidden="true" /> {PHONE_DISPLAY}</a>
            </div>
          </div>
        </aside>

        {/* ---------------- main ---------------- */}
        <div className={c.main} id="top">
          <div className={c.top}>
            <div className={c.crumb}><LayoutDashboard aria-hidden="true" /> My account</div>
            <div className={c.topRight}>
              <span className={c.chip}><CalendarDays aria-hidden="true" /> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
              <span className={c.avatar} title={name}>{first.charAt(0).toUpperCase()}</span>
            </div>
          </div>

          <div className={c.content}>
            <div className={c.heading}>
              <div>
                <h1>Welcome back, {first}</h1>
                <p>Your storage orders, payments and details in one place.</p>
              </div>
              {a?.profile?.customer_unique_id && (
                <span className={c.idPill}><UserRound aria-hidden="true" /> Customer ID: {a.profile.customer_unique_id}</span>
              )}
            </div>

            {!a ? (
              <div className={c.error}>We could not load your account details right now. Please try again in a moment.</div>
            ) : (
              <>
                {/* KPI cards */}
                <div className={c.kpis}>
                  <div className={`${c.card} ${c.kpi}`}>
                    <div className={c.kpiHead}><p className={c.kpiLabel}>Orders</p><Package className={`${c.kpiIcon} ${c.cBlue}`} aria-hidden="true" /></div>
                    <p className={c.kpiValue}>{orders.length}</p>
                    <p className={c.kpiNote}>Latest {orders.length === 1 ? "order" : "orders"} on your account</p>
                  </div>
                  <div className={`${c.card} ${c.kpi}`}>
                    <div className={c.kpiHead}><p className={c.kpiLabel}>Amount due</p><CreditCard className={`${c.kpiIcon} ${hasDue ? c.cOrange : c.cGreen}`} aria-hidden="true" /></div>
                    <p className={`${c.kpiValue} ${c.kpiValueSm}`}>
                      {hasDue ? aed(dues!.total) : aed(0)}
                      <span className={`${c.delta} ${hasDue ? c.dOrange : c.dGreen}`}>{hasDue ? "Due" : "Paid up"}</span>
                    </p>
                    <p className={c.kpiNote}>{hasDue ? "Across your unpaid bills" : "Nothing outstanding"}</p>
                  </div>
                  <div className={`${c.card} ${c.kpi}`}>
                    <div className={c.kpiHead}><p className={c.kpiLabel}>Unpaid bills</p><Receipt className={`${c.kpiIcon} ${hasDue ? c.cRed : c.cGreen}`} aria-hidden="true" /></div>
                    <p className={c.kpiValue}>{dues?.count ?? 0}</p>
                    <p className={c.kpiNote}>{hasDue ? "Please settle to avoid late fees" : "You are all caught up"}</p>
                  </div>
                  <div className={`${c.card} ${c.kpi}`}>
                    <div className={c.kpiHead}><p className={c.kpiLabel}>Latest order</p><Truck className={`${c.kpiIcon} ${c.cOrange}`} aria-hidden="true" /></div>
                    <p className={`${c.kpiValue} ${c.kpiValueSm}`}>
                      {latest ? label(latest.type) : "—"}
                    </p>
                    <p className={c.kpiNote}>
                      {latest ? <><span className={`${c.status} ${pill[kind(latest.status)]}`}>{label(latest.status)}</span> · {day(latest.date)}</> : "No orders yet"}
                    </p>
                  </div>
                </div>

                <div className={c.row}>
                  <div className={c.col}>
                    {/* order status mix */}
                    <section className={c.card}>
                      <div className={c.panelHead}><h2 className={c.panelTitle}>Order status</h2></div>
                      <div className={c.mix}>
                        <div className={c.mixItem} style={{ ["--bar" as string]: "#1f8a56" }}><p className={c.mixNum}>{mix.done}</p><p className={c.mixLabel}>Completed</p><div className={c.mixBar} /></div>
                        <div className={c.mixItem} style={{ ["--bar" as string]: "#f26a1b" }}><p className={c.mixNum}>{mix.open}</p><p className={c.mixLabel}>In progress</p><div className={c.mixBar} /></div>
                        <div className={c.mixItem} style={{ ["--bar" as string]: "#3b6fe0" }}><p className={c.mixNum}>{mix.other}</p><p className={c.mixLabel}>Other</p><div className={c.mixBar} /></div>
                      </div>
                    </section>

                    {/* orders table */}
                    <section className={c.card} id="orders">
                      <div className={c.panelHead}>
                        <h2 className={c.panelTitle}>Recent orders</h2>
                        {orders.length > 0 && <span className={c.count}>{orders.length} latest</span>}
                      </div>
                      {orders.length ? (
                        <div className={c.tableWrap}>
                          <table className={c.table}>
                            <thead><tr><th>Order</th><th>Date</th><th>Status</th></tr></thead>
                            <tbody>
                              {orders.map((o, i) => (
                                <tr key={i}>
                                  <td>
                                    <span className={c.cellMain}>
                                      <span className={c.cellIcon}><Truck aria-hidden="true" /></span>
                                      {label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}
                                    </span>
                                  </td>
                                  <td className={c.muted}>{day(o.date)}</td>
                                  <td><span className={`${c.status} ${pill[kind(o.status)]}`}>{label(o.status)}</span></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : <p className={c.empty}>No orders yet.</p>}
                    </section>
                  </div>

                  <div className={c.col}>
                    {/* payments */}
                    <section className={c.card} id="payments">
                      <div className={c.panelHead}><h2 className={c.panelTitle}>Payments due</h2></div>
                      {hasDue ? (
                        <>
                          <p className={c.dueTotal}><b>{aed(dues!.total)}</b><span>{dues!.count} unpaid</span></p>
                          <ul className={c.dues}>
                            {dues!.items.map((d, i) => (
                              <li key={i} className={c.due}>
                                <div>
                                  <div className={c.dueNote}>{d.note || "Storage charges"}</div>
                                  <div className={c.dueDate}>{day(d.billing_date)}</div>
                                </div>
                                <span className={c.dueAmt}>{aed(d.amount)}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <div className={c.clearBox}>
                          <span className={c.clearRing}><CheckCircle2 aria-hidden="true" /></span>
                          <b>All clear</b>
                          <span>Nothing is due. Thank you!</span>
                        </div>
                      )}
                    </section>

                    {/* details */}
                    <section className={c.card} id="details">
                      <div className={c.panelHead}><h2 className={c.panelTitle}>Your details</h2></div>
                      <ul className={c.details}>
                        <li className={c.detail}><span className={c.detailIcon}><UserRound aria-hidden="true" /></span><div><p className={c.detailLabel}>Name</p><p className={c.detailValue}>{name}</p></div></li>
                        <li className={c.detail}><span className={c.detailIcon}><Mail aria-hidden="true" /></span><div><p className={c.detailLabel}>Email</p><p className={c.detailValue}>{a.profile?.email || "—"}</p></div></li>
                        <li className={c.detail}><span className={c.detailIcon}><Phone aria-hidden="true" /></span><div><p className={c.detailLabel}>Phone</p><p className={c.detailValue}>{a.profile?.phone || "—"}</p></div></li>
                        <li className={c.detail}><span className={c.detailIcon}><MapPin aria-hidden="true" /></span><div><p className={c.detailLabel}>City</p><p className={c.detailValue}>{label(a.profile?.city || "")}</p></div></li>
                      </ul>
                    </section>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
