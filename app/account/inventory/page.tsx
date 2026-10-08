import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Boxes, FileText, PackageCheck, PackageX } from "lucide-react"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import InventoryList, { type Item } from "./inventory-list"

export const metadata: Metadata = {
  title: { absolute: "My Inventory | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Account = { status?: string; profile?: { name: string; customer_unique_id?: string }; orders?: unknown[]; dues?: { count: number; total: number } }
type Inv = { status?: string; items?: Item[] }

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")

export default async function InventoryPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, inv] = await Promise.all([
    callBack<Account>("account", { customer_id: String(me.customerId) }),
    callBack<Inv>("inventory", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const d = inv.ok && inv.data?.status === "success" ? inv.data : null
  const items = d?.items ?? []
  const name = nameCase(a?.profile?.name || me.name) || "There"

  const stored = items.filter((i) => i.status === "Stored")
  const storedQty = stored.reduce((s, i) => s + i.qty, 0)
  const out = items.filter((i) => i.status !== "Stored")
  const quotes = new Set(items.map((i) => i.quotation).filter(Boolean)).size

  return (
    <AccountShell active="inventory" name={name} customerId={a?.profile?.customer_unique_id} orderCount={a?.orders?.length ?? 0}
      dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="Inventory">
      <div className={c.heading}>
        <div>
          <h1>Inventory</h1>
          <p>All the items stored with us, each tracked by its barcode.</p>
        </div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {!d ? (
        <div className={c.error}>We could not load your inventory right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.kpis}>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Items stored</p><span className={c.tileIcon}><Boxes aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{storedQty}</p>
              <p className={c.kpiNote}>Safe in our warehouse now</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Item records</p><span className={c.tileIcon}><PackageCheck aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{stored.length}</p>
              <p className={c.kpiNote}>{items.length} in total, including returned</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Quotations</p><span className={c.tileIcon}><FileText aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{quotes}</p>
              <p className={c.kpiNote}>Bookings your items belong to</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Returned or removed</p><span className={c.tileIcon}><PackageX aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{out.length}</p>
              <p className={c.kpiNote}>{out.length ? "No longer in storage" : "Nothing has left storage"}</p>
            </div>
          </div>

          <InventoryList items={items} />
        </>
      )}
    </AccountShell>
  )
}
