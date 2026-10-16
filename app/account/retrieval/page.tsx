import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import RetrievalWizard, { type Options } from "./retrieval-wizard"

export const metadata: Metadata = {
  title: { absolute: "Retrieval | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type Account = { status?: string; profile?: { name: string; customer_unique_id?: string }; orders?: unknown[]; dues?: { count: number; total: number } }
type OptReply = Options & { status?: string }

const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")

export default async function RetrievalPage({ searchParams }: { searchParams: Promise<{ paid?: string }> }) {
  const { paid } = await searchParams
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, op] = await Promise.all([
    callBack<Account>("account", { customer_id: String(me.customerId) }),
    callBack<OptReply>("options", { customer_id: String(me.customerId) }, undefined, "dubai_retrieval"),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const o = op.ok && op.data?.status === "success" ? op.data : null
  const name = nameCase(a?.profile?.name || me.name) || "There"

  return (
    <AccountShell active="retrieval" name={name} customerId={a?.profile?.customer_unique_id} orderCount={a?.orders?.length ?? 0}
      dueCount={a?.dues?.count ?? 0} dueTotal={a?.dues?.total ?? 0} crumb="Retrieval">
      <div className={c.heading}>
        <div>
          <h1>Retrieval</h1>
          <p>Get your stored items back. Choose what you need, tell us where and when.</p>
        </div>
      </div>

      {(a?.dues?.count ?? 0) > 0 && (a?.dues?.total ?? 0) > 0 && <PayBanner total={a!.dues!.total} count={a!.dues!.count} />}

      {paid === "1" && <div className={`${c.notice} ${c.noticeOk}`} style={{ margin: "0 0 24px" }}>Thank you. Your payment was received and your retrieval request is with our team. You will see it under Orders shortly, and we will confirm the delivery time with you.</div>}
      {paid === "0" && <div className={c.notice} style={{ margin: "0 0 24px" }}>The payment was cancelled and nothing was charged. Your chosen date stays held for a few minutes if you want to try again.</div>}

      {!o ? (
        <div className={c.error}>Retrieval is not available right now. Please try again in a moment, or call us.</div>
      ) : (
        <RetrievalWizard opts={o} name={name} />
      )}
    </AccountShell>
  )
}
