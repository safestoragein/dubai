import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import DocumentsView, { type Group, type Quote } from "./documents-view"

export const metadata: Metadata = {
  title: { absolute: "My Documents | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Account = { status?: string; profile?: { name: string; customer_unique_id?: string }; orders?: unknown[]; dues?: { count: number; total: number } }
type Docs = { status?: string; total?: number; quotations?: Quote[]; groups?: Group[] }

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")

export default async function DocumentsPage() {
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, doc] = await Promise.all([
    callBack<Account>("account", { customer_id: String(me.customerId) }),
    callBack<Docs>("documents", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const d = doc.ok && doc.data?.status === "success" ? doc.data : null
  const name = nameCase(a?.profile?.name || me.name) || "There"

  return (
    <AccountShell active="documents" name={name} customerId={a?.profile?.customer_unique_id} orderCount={a?.orders?.length ?? 0}
      dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="Documents">
      <div className={c.heading}>
        <div>
          <h1>Documents</h1>
          <p>Photos of your items, stacking pictures and documents, grouped by booking.</p>
        </div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {!d ? (
        <div className={c.error}>We could not load your documents right now. Please try again in a moment.</div>
      ) : (
        <DocumentsView groups={d.groups ?? []} quotations={d.quotations ?? []} />
      )}
    </AccountShell>
  )
}
