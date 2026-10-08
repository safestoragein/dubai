import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { CheckCircle2, CreditCard, Mail, MapPin, Package, Phone, PhoneCall, Truck, UserRound } from "lucide-react"
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

type Account = {
  status?: string
  profile?: { customer_unique_id: string; name: string; email: string; phone: string; city: string }
  orders?: { type: string; sub_type: string; date: string; status: string }[]
  dues?: { count: number; total: number; items: { billing_date: string; note: string; amount: number }[] }
}

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? v || "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
const statusClass = (s: string) => {
  const v = (s || "").toLowerCase()
  if (/complete|deliver|done|success/.test(v)) return c.sDone
  if (/cancel|fail|reject/.test(v)) return c.sBad
  if (/pending|schedul|confirm|progress|open|new/.test(v)) return c.sOpen
  return c.sOther
}

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

  return (
    <div className={`${c.page} ${sora.variable} ${manrope.variable}`}>
      <header className={c.bar}>
        <div className={`${c.wrap} ${c.barIn}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={c.logo} src="/images/design-mode/logo.png" alt="SafeStorage Dubai" />
          <div className={c.who}>
            <span className={c.avatar} aria-hidden="true">{first.charAt(0).toUpperCase()}</span>
            <div className={c.whoText}>
              <div className={c.whoName}>{name}</div>
              {a?.profile?.customer_unique_id && <div className={c.whoId}>ID {a.profile.customer_unique_id}</div>}
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <section className={c.hero}>
        <div className={c.wrap}>
          <p className={c.eyebrow}>My account</p>
          <h1>Welcome back, <em>{first}</em></h1>
          <p className={c.heroSub}>Your storage orders, payments and details in one place.</p>
          {a?.profile?.customer_unique_id && (
            <span className={c.pill}><UserRound size={16} aria-hidden="true" /> Customer ID: {a.profile.customer_unique_id}</span>
          )}
        </div>
      </section>

      <main className={c.wrap}>
        {!a ? (
          <div className={c.error}>We could not load your account details right now. Please try again in a moment.</div>
        ) : (
          <>
            <div className={c.stats}>
              <div className={c.stat}>
                <span className={`${c.statIcon} ${c.tBlue}`}><Package aria-hidden="true" /></span>
                <div>
                  <p className={c.statLabel}>Recent orders</p>
                  <p className={c.statValue}>{orders.length}</p>
                </div>
              </div>
              <div className={c.stat}>
                <span className={`${c.statIcon} ${hasDue ? c.tOrange : c.tGreen}`}><CreditCard aria-hidden="true" /></span>
                <div>
                  <p className={c.statLabel}>Amount due</p>
                  <p className={`${c.statValue} ${hasDue ? c.statValueDue : c.statValueOk}`}>{hasDue ? aed(dues!.total) : "All clear"}</p>
                </div>
              </div>
              <div className={c.stat}>
                <span className={`${c.statIcon} ${c.tGreen}`}><MapPin aria-hidden="true" /></span>
                <div>
                  <p className={c.statLabel}>City</p>
                  <p className={c.statValue}>{label(a.profile?.city || "")}</p>
                </div>
              </div>
            </div>

            <div className={c.grid}>
              <div className={c.col}>
                <section className={c.card}>
                  <div className={c.cardHead}>
                    <h2 className={c.cardTitle}>Recent orders</h2>
                    {orders.length > 0 && <span className={c.count}>{orders.length} latest</span>}
                  </div>
                  {orders.length ? (
                    <ul className={c.orders}>
                      {orders.map((o, i) => (
                        <li key={i} className={c.order}>
                          <span className={c.orderIcon}><Truck aria-hidden="true" /></span>
                          <div className={c.orderBody}>
                            <div>
                              <p className={c.orderTitle}>{label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}</p>
                              <p className={c.orderDate}>{day(o.date)}</p>
                            </div>
                            <span className={`${c.status} ${statusClass(o.status)}`}>{label(o.status)}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : <p className={c.empty}>No orders yet.</p>}
                </section>

                <section className={c.card}>
                  <div className={c.cardHead}><h2 className={c.cardTitle}>Payments due</h2></div>
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
                    <p className={c.clear}><CheckCircle2 aria-hidden="true" /> Nothing is due. Thank you!</p>
                  )}
                </section>
              </div>

              <section className={c.card}>
                <div className={c.cardHead}><h2 className={c.cardTitle}>Your details</h2></div>
                <ul className={c.details}>
                  <li className={c.detail}>
                    <span className={c.detailIcon}><UserRound aria-hidden="true" /></span>
                    <div><p className={c.detailLabel}>Name</p><p className={c.detailValue}>{name}</p></div>
                  </li>
                  <li className={c.detail}>
                    <span className={c.detailIcon}><Mail aria-hidden="true" /></span>
                    <div><p className={c.detailLabel}>Email</p><p className={c.detailValue}>{a.profile?.email || "—"}</p></div>
                  </li>
                  <li className={c.detail}>
                    <span className={c.detailIcon}><Phone aria-hidden="true" /></span>
                    <div><p className={c.detailLabel}>Phone</p><p className={c.detailValue}>{a.profile?.phone || "—"}</p></div>
                  </li>
                  <li className={c.detail}>
                    <span className={c.detailIcon}><MapPin aria-hidden="true" /></span>
                    <div><p className={c.detailLabel}>City</p><p className={c.detailValue}>{label(a.profile?.city || "")}</p></div>
                  </li>
                </ul>
              </section>
            </div>
          </>
        )}

        <div className={c.help}>
          <p className={c.helpText}>Need help with an order or a payment?<small>Our team replies fast, every day of the week.</small></p>
          <div className={c.helpBtns}>
            <a className={`${c.btn} ${c.btnPrimary}`} href={`tel:${PHONE}`}><PhoneCall aria-hidden="true" /> {PHONE_DISPLAY}</a>
            <a className={`${c.btn} ${c.btnGhost}`} href={`mailto:${EMAIL}`}><Mail aria-hidden="true" /> Email us</a>
          </div>
        </div>
      </main>
    </div>
  )
}
