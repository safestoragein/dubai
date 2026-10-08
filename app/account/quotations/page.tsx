import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import ItemsToggle from "./items-toggle"

export const metadata: Metadata = {
  title: { absolute: "My Quotations | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Account = { status?: string; profile?: { name: string; customer_unique_id?: string }; orders?: unknown[]; dues?: { count: number; total: number } }
type Item = { name: string; qty: number; unit: number; subtotal: number }
type Quote = {
  id: number; label: string; created: string; total: number; sqft: number; pallets: number; points: number
  bedrooms: string; floor: string; lift: string; items: Item[]; items_subtotal: number
  pickup: { date: string; slot: string; ref: string; status: string } | null
}

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
const aed = (n: number) => `AED ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const day = (v: string) => { const d = new Date(v.replace(" ", "T")); return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) }

export default async function QuotationsPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, qr] = await Promise.all([
    callBack<Account>("account", { customer_id: String(me.customerId) }),
    callBack<{ status?: string; quotations?: Quote[] }>("quotations", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const q = qr.ok && qr.data?.status === "success" ? qr.data.quotations ?? [] : null
  const name = nameCase(a?.profile?.name || me.name) || "There"

  return (
    <AccountShell active="quotations" name={name} customerId={a?.profile?.customer_unique_id} orderCount={a?.orders?.length ?? 0}
      dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="Quotations">
      <div className={c.heading}>
        <div>
          <h1>Quotations</h1>
          <p>The quotes we prepared for you, with the items and your pickup booking.</p>
        </div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {!q ? (
        <div className={c.error}>We could not load your quotations right now. Please try again in a moment.</div>
      ) : q.length === 0 ? (
        <div className={c.error}>You have no quotations yet.</div>
      ) : (
        <div className={c.qList}>
          {q.map((x) => (
            <article key={x.id} className={c.qCard}>
              <div className={c.qHead}>
                <div>
                  <p className={c.qId}>Quotation #{x.id}</p>
                  {day(x.created) && <p className={c.qWhen}>{day(x.created)}</p>}
                </div>
                <span className={`${c.qBadge} ${x.pickup ? c.qBadgeOn : ""}`}>{x.pickup ? "Pickup booked" : "Pickup not booked yet"}</span>
              </div>
              {x.pickup && (
                <p className={c.qPick}>
                  <b>Pickup:</b> {day(x.pickup.date) || "—"}{x.pickup.slot ? ` · ${x.pickup.slot}` : ""}{x.pickup.ref ? ` · ${x.pickup.ref}` : ""}
                </p>
              )}
              <div className={c.qTotal}>
                <div><small>Quotation total</small><b>{aed(x.total)}</b></div>
              </div>
              <div className={c.qTiles}>
                <div className={c.qTile}><small>Total sqft</small><b>{x.sqft > 0 ? x.sqft : "—"}</b></div>
                <div className={c.qTile}><small>Pallets</small><b>{x.pallets || "—"}</b></div>
                <div className={c.qTile}><small>Storage points</small><b>{x.points || "—"}</b></div>
                <div className={c.qTile}><small>Items</small><b>{x.items.length}</b></div>
              </div>
              <div className={c.qChips}>
                <span className={c.qChip}>{x.bedrooms ? `${x.bedrooms} BHK` : "Bedrooms —"}</span>
                <span className={c.qChip}>Floor {x.floor || "—"}</span>
                <span className={c.qChip}>Lift {x.lift ? x.lift.charAt(0).toUpperCase() + x.lift.slice(1) : "—"}</span>
              </div>
              {x.items.length > 0 && <ItemsToggle items={x.items} subtotal={x.items_subtotal} />}
            </article>
          ))}
        </div>
      )}
    </AccountShell>
  )
}
