import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { BadgeCheck, CreditCard, Receipt, Wallet } from "lucide-react"
import { getCustomerSession } from "@/lib/customer-session"
import { callBack } from "@/lib/customer-back"
import c from "../account.module.css"
import AccountShell from "../shell"
import PayBanner from "../pay-banner"
import PaymentsTabs, { type Bill, type Payment, type Summary } from "./payments-list"

export const metadata: Metadata = {
  title: { absolute: "My Payments | Safe Storage Dubai" },
  robots: { index: false, follow: false },
}
export const dynamic = "force-dynamic" // per-customer data: never cache or prerender

type PaymentsReply = {
  status?: string
  totals?: { unpaid: number; unpaid_count: number; paid: number }
  bills?: Bill[]
  payments?: Payment[]
  summary?: Summary
  wallet?: number
}
type AccountReply = {
  status?: string
  profile?: { name: string; customer_unique_id?: string }
  orders?: unknown[]
  dues?: { count: number; total: number; items: { billing_date: string; note: string; amount: number }[] }
}

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const nameCase = (v: string) =>
  (v || "").trim().split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export default async function PaymentsPage({ searchParams }: { searchParams: Promise<{ paid?: string }> }) {
  const { paid: paidFlag } = await searchParams
  const me = await getCustomerSession()
  if (!me) redirect("/back/customer_login")

  const [acc, pay] = await Promise.all([
    callBack<AccountReply>("account", { customer_id: String(me.customerId) }),
    callBack<PaymentsReply>("payments", { customer_id: String(me.customerId) }),
  ])
  const a = acc.ok && acc.data?.status === "success" ? acc.data : null
  const full = pay.ok && pay.data?.status === "success" ? pay.data : null

  // If the full list is not available yet, fall back to the unpaid bills the account call returns.
  const bills: Bill[] = full?.bills ?? (a?.dues?.items ?? []).map((d, i) => ({
    id: `BILL-${i + 1}`, description: d.note, kind: "", date: d.billing_date, amount: d.amount, late: 0, status: "Unpaid",
  }))
  const payments: Payment[] = full?.payments ?? []
  const unpaid = full?.totals?.unpaid ?? a?.dues?.total ?? 0
  const unpaidCount = full?.totals?.unpaid_count ?? a?.dues?.count ?? 0
  const paid = full?.totals?.paid ?? 0
  const last = payments[0]
  const name = nameCase(a?.profile?.name || me.name) || "There"

  return (
    <AccountShell active="payments" name={name} customerId={a?.profile?.customer_unique_id}
      orderCount={a?.orders?.length ?? 0} dueCount={unpaidCount} dueTotal={unpaid} crumb="Payments">
      <div className={c.heading}>
        <div>
          <h1>Payments</h1>
          <p>Your bills, what you owe and every payment we have received.</p>
        </div>
      </div>

      {unpaidCount > 0 && unpaid > 0 && <PayBanner total={unpaid} count={unpaidCount} />}

      {paidFlag === "1" && <div className={`${c.notice} ${c.noticeOk}`} style={{ margin: "0 0 24px" }}>Thank you. Your payment was received and your bills will update in a minute.</div>}
      {paidFlag === "0" && <div className={c.notice} style={{ margin: "0 0 24px" }}>The payment was cancelled. You can try again with the Pay now button.</div>}

      {!a && !full ? (
        <div className={c.error}>We could not load your payments right now. Please try again in a moment.</div>
      ) : (
        <>
          <div className={c.kpis}>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Amount due</p><span className={c.tileIcon}><CreditCard aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{aed(unpaid)}</p>
              <p className={c.kpiNote}>{unpaidCount ? <><span style={{ color: "#d45f50", fontWeight: 500, marginRight: 6 }}>Payment pending</span>on your unpaid bills</> : <><b>All paid</b>nothing outstanding</>}</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Unpaid bills</p><span className={c.tileIcon}><Receipt aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{unpaidCount}</p>
              <p className={c.kpiNote}>{unpaidCount ? "Please settle to avoid late fees" : "You are all caught up"}</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Wallet balance</p><span className={c.tileIcon}><Wallet aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{aed(full?.wallet ?? 0)}</p>
              <p className={c.kpiNote}>Credit available on your account</p>
            </div>
            <div className={`${c.card} ${c.kpi}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>Paid so far</p><span className={c.tileIcon}><BadgeCheck aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{aed(paid)}</p>
              <p className={c.kpiNote}>{full ? `${bills.filter((b) => b.status === "Paid").length} paid bills${last ? ` · last ${day(last.date)}` : ""}` : "Available shortly"}</p>
            </div>
          </div>

          <PaymentsTabs bills={bills} payments={payments} summary={full?.summary ?? null} dueCount={unpaidCount} wallet={full ? full.wallet ?? 0 : null} />
        </>
      )}
    </AccountShell>
  )
}
