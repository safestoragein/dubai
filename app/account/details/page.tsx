import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Boxes, CalendarClock, CreditCard, MapPin } from "lucide-react"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import PrintButton from "./print-button"

export const metadata: Metadata = {
  title: { absolute: "My Details | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Item = { quotation: string; barcode: string; name: string; type: string; qty: number; start: string; end: string; status: string }
type Details = {
  status?: string
  profile?: { id: string; name: string; email: string; phone: string; phone2: string; city: string; address: string; pickup_address: string; active: boolean; since: string }
  storage?: { items: number; item_rows: number; monthly: number; next_bill: string }
  timeline?: { booked: string; pickup: string; pickup_done: boolean; checked_in: string; in_storage: boolean }
  items?: Item[]
}
type Account = { status?: string; orders?: unknown[]; dues?: { count: number; total: number } }

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const parse = (v?: string) => {
  if (!v || v.startsWith("0000")) return null
  const d = new Date(v.replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? null : d
}
const day = (v?: string) => parse(v)?.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) ?? "—"
const dayTime = (v?: string) => {
  const d = parse(v)
  return d ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + ", " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "—"
}

export default async function DetailsPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, det] = await Promise.all([
    callBack<Account>("account", { customer_id: String(me.customerId) }),
    callBack<Details>("details", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const d = det.ok && det.data?.status === "success" ? det.data : null
  const p = d?.profile
  const name = nameCase(p?.name || me.name) || "There"
  const initial = name.charAt(0).toUpperCase()
  const since = parse(p?.since)
  const t = d?.timeline

  return (
    <AccountShell active="details" name={name} customerId={p?.id} orderCount={a?.orders?.length ?? 0}
      dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="My details">
      <div className={c.heading}>
        <div>
          <h1>My details</h1>
          <p>{p ? `${p.id} · ${p.city ? label(p.city) : "Dubai"}` : "Your profile, storage and stored items."}</p>
        </div>
        <div className={c.actions}><PrintButton /></div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {!d || !p ? (
        <div className={c.error}>We could not load your details right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.detailLayout}>
            <section className={`${c.panel} ${c.profile}`}>
              <div className={c.profileAvatar}>{initial}</div>
              <h2 className={c.profileName}>{name}</h2>
              <p className={c.profileSince}>{since ? `Customer since ${since.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}` : "SafeStorage customer"}</p>
              <span className={`${c.status} ${p.active ? c.sDone : c.sBad}`}>{p.active ? "Active" : "Inactive"}</span>
              <div className={`${c.fields} ${c.fieldsOne} ${c.profileFields}`}>
                {([["Customer ID", p.id], ["Email", p.email || "—"], ["Phone", p.phone || "—"], ...(p.phone2 ? [["Alternate phone", p.phone2]] : []), ["City", label(p.city)], ["Address", p.address || "—"]] as [string, string][]).map(([k, v]) => (
                  <div key={k} className={c.field}><span>{k}</span><b>{v}</b></div>
                ))}
              </div>
            </section>

            <div className={c.detailCol}>
              <section className={c.panel}>
                <div className={c.panelHead}><h2 className={c.panelTitle}>Storage summary</h2><span className={c.panelSub} style={{ margin: 0 }}>{p.id}</span></div>
                <div className={c.miniCards}>
                  <div className={c.miniCard}><span className={c.tileIcon}><Boxes aria-hidden="true" /></span><p>Stored items</p><b>{d.storage?.items ?? 0}</b></div>
                  <div className={c.miniCard}><span className={c.tileIcon}><CreditCard aria-hidden="true" /></span><p>Monthly amount</p><b>{aed(d.storage?.monthly ?? 0)}</b></div>
                  <div className={c.miniCard}><span className={c.tileIcon}><CalendarClock aria-hidden="true" /></span><p>Next invoice</p><b>{day(d.storage?.next_bill)}</b></div>
                </div>
                <div className={c.fields} style={{ marginTop: 18 }}>
                  <div className={c.field}><span>Warehouse</span><b>SafeStorage Dubai · DIP-1</b></div>
                  <div className={c.field}><span>Billing cycle</span><b>Monthly</b></div>
                  <div className={c.field}><span>Pickup address</span><b>{p.pickup_address || "—"}</b></div>
                  <div className={c.field}><span>Item records</span><b>{d.storage?.item_rows ?? 0}</b></div>
                </div>
              </section>

              <section className={c.panel}>
                <div className={c.panelHead}><h2 className={c.panelTitle}>Order timeline</h2></div>
                <div className={c.steps}>
                  <div className={`${c.step} ${t?.booked ? c.stepDone : ""}`}><b>Booking confirmed</b>{dayTime(t?.booked)}</div>
                  <div className={`${c.step} ${t?.pickup_done ? c.stepDone : ""}`}><b>{t?.pickup_done ? "Pickup completed" : "Pickup scheduled"}</b>{day(t?.pickup)}</div>
                  <div className={`${c.step} ${t?.checked_in ? c.stepDone : ""}`}><b>Warehouse check-in</b>{day(t?.checked_in)}</div>
                  <div className={`${c.step} ${t?.in_storage ? c.stepDone : ""}`}><b>In storage</b>{t?.in_storage ? "Ongoing" : "Pending"}</div>
                </div>
              </section>
            </div>
          </div>

          <section className={`${c.panel} ${c.tablePanel}`} style={{ marginTop: 24 }}>
            <div className={c.panelHead}>
              <div><h2 className={c.panelTitle}>Item inventory</h2><p className={c.panelSub}>Items stored for you, tracked by barcode</p></div>
              <span className={c.count}>{d.items?.length ?? 0} items</span>
            </div>
            {d.items?.length ? (
              <div className={c.tableWrap}>
                <table className={c.table}>
                  <thead><tr><th>Barcode</th><th>Item</th><th>Type</th><th>Quantity</th><th>Quotation</th><th>Stored since</th><th>Status</th></tr></thead>
                  <tbody>
                    {d.items.map((i, k) => (
                      <tr key={`${i.barcode}-${k}`}>
                        <td style={{ color: "#344050" }}>{i.barcode || "—"}</td>
                        <td style={{ color: "#344050", whiteSpace: "normal", minWidth: 200 }}>{i.name}</td>
                        <td>{label(i.type)}</td>
                        <td>{i.qty}</td>
                        <td>{i.quotation || "—"}</td>
                        <td>{day(i.start)}</td>
                        <td><span className={`${c.status} ${i.status === "Active" ? c.sDone : c.sOther}`}>{i.status === "Active" ? "Checked in" : i.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : <p className={c.empty}>No stored items yet.</p>}
          </section>
        </>
      )}
    </AccountShell>
  )
}
