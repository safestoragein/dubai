"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import c from "../account.module.css"

export type Bill = { id: string; description: string; kind: string; date: string; amount: number; charges?: number; tax?: string; total?: number; late: number; status: string; quotation?: string; order?: string }
export type QuoteSummary = {
  id: string; storage: number; extra_storage: number; removed: number; extra_insurance: number; coupon: string
  revised: number; tax_rate: number; total_monthly: number; extra_transport: number; extra_stack: number
}
export type Summary = {
  quotations: QuoteSummary[]
  all: { storage: number; extra_storage: number; revised: number; tax_rate: number; total_monthly: number }
}
export type Payment = { ref: string; date: string; amount: number; type: string; method: string; note: string }

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) || String(v).startsWith("0000") ? "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
const money = (n: number) => n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const dmy = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) || String(v).startsWith("0000") ? "—" : `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`
}
const pill = (s: string) => (s === "Paid" ? c.sDone : s === "Unpaid" ? c.sOpen : c.sOther)
const TABS = ["All", "Unpaid", "Paid"] as const
const PAGE = 8

function BillsPanel({ bills }: { bills: Bill[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All")
  const [q, setQ] = useState("")
  const [page, setPage] = useState(1)

  const n = (t: (typeof TABS)[number]) => (t === "All" ? bills.length : bills.filter((b) => b.status === t).length)
  const rows = bills.filter((b) => (tab === "All" || b.status === tab) &&
    [b.id, b.description, b.quotation, b.order, b.kind, b.status].join(" ").toLowerCase().includes(q.toLowerCase()))
  const pages = Math.max(1, Math.ceil(rows.length / PAGE))
  const cur = Math.min(page, pages)
  const shown = rows.slice((cur - 1) * PAGE, cur * PAGE)

  return (
      <section className={`${c.panel} ${c.tablePanel}`}>
        <div className={c.panelHead}>
          <h2 className={c.panelTitle}>Bills <span className={c.count}>{bills.length}</span></h2>
          <span className={c.panelSub} style={{ margin: 0 }}>Charges on your account</span>
        </div>
        <div className={c.toolbar}>
          <div className={c.tabs} role="tablist" aria-label="Filter bills">
            {TABS.map((t) => (
              <button key={t} type="button" role="tab" aria-selected={tab === t} className={`${c.tab} ${tab === t ? c.tabOn : ""}`}
                onClick={() => { setTab(t); setPage(1) }}>{t}<span className={c.tabN}>{n(t)}</span></button>
            ))}
          </div>
          <input className={c.search} aria-label="Search bills" placeholder="Search description or status…" value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1) }} />
        </div>
        <div className={c.tableWrap}>
          <table className={c.table}>
            <thead><tr><th>Billing Date</th><th>Charges</th><th>Tax</th><th>Total Amount</th><th>Payable Amount</th><th>Description</th><th>Payment Status</th></tr></thead>
            <tbody>
              {shown.map((b) => (
                <tr key={b.id}>
                  <td>{dmy(b.date)}</td>
                  <td>{b.charges != null ? money(b.charges) : "—"}</td>
                  <td>{b.tax ? `${b.tax}%` : "—"}</td>
                  <td>{b.total != null ? money(b.total) : "—"}</td>
                  <td><b>{money(b.amount)}</b>{b.late > 0 && <span className={c.refLine}>incl. {money(b.late)} late fee</span>}</td>
                  <td style={{ color: "#344050", whiteSpace: "normal", minWidth: 220 }}>{b.description || label(b.kind) || "Storage charges"}</td>
                  <td><span className={`${c.status} ${pill(b.status)}`}>{b.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && <p className={c.empty}>{bills.length === 0 ? "No bills yet." : "No bills match your search."}</p>}
        </div>
        <div className={c.footer}>
          <span>{rows.length ? `Showing ${(cur - 1) * PAGE + 1}–${Math.min(cur * PAGE, rows.length)} of ${rows.length} ${rows.length === 1 ? "bill" : "bills"}` : "No bills to show"}</span>
          <div className={c.pagination}>
            <button type="button" disabled={cur <= 1} onClick={() => setPage(cur - 1)}>Prev</button>
            {Array.from({ length: pages }, (_, p) => p + 1).map((p) => (
              <button key={p} type="button" className={p === cur ? c.pageOn : ""} aria-label={`Page ${p}`} onClick={() => setPage(p)}>{p}</button>
            ))}
            <button type="button" disabled={cur >= pages} onClick={() => setPage(cur + 1)}>Next</button>
          </div>
        </div>
      </section>
  )
}

function TransactionsPanel({ payments }: { payments: Payment[] }) {
  return (
      <section className={`${c.panel} ${c.tablePanel}`} id="history">
        <div className={c.panelHead}>
          <h2 className={c.panelTitle}>Payment history <span className={c.count}>{payments.length}</span></h2>
          <span className={c.panelSub} style={{ margin: 0 }}>Payments we have received from you</span>
        </div>
        {payments.length ? (
          <div className={c.tableWrap}>
            <table className={c.table}>
              <thead><tr><th>Date</th><th>Reference</th><th>Type</th><th>Method</th><th>Note</th><th>Amount</th></tr></thead>
              <tbody>
                {payments.map((p, i) => (
                  <tr key={p.ref || i}>
                    <td>{day(p.date)}</td>
                    <td style={{ color: "#344050" }}>{p.ref || "—"}</td>
                    <td>{label(p.type)}</td>
                    <td>{label(p.method)}</td>
                    <td style={{ whiteSpace: "normal", minWidth: 160 }}>{p.note || "—"}</td>
                    <td><b>{aed(p.amount)}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className={c.empty}>No payments received yet.</p>}
      </section>
  )
}

const num = (n: number) => n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

function Row({ label: l, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <tr className={bold ? c.sumTotal : ""}>
      <td>{l}</td>
      <td className={c.sumAmt}>{value}</td>
    </tr>
  )
}

function SummaryPanel({ summary }: { summary: Summary | null }) {
  const [sel, setSel] = useState("all")
  if (!summary || summary.quotations.length === 0) {
    return <section className={c.panel}><p className={c.empty}>{summary ? "No active quotations on your account yet." : "Your account summary will appear here shortly."}</p></section>
  }
  const q = summary.quotations.find((x) => x.id === sel)
  return (
    <section className={c.panel}>
      <div className={c.subTabs} role="tablist" aria-label="Quotations">
        {["all", ...summary.quotations.map((x) => x.id)].map((id) => (
          <button key={id} type="button" role="tab" aria-selected={sel === id} className={`${c.uTab} ${sel === id ? c.uTabOn : ""}`} onClick={() => setSel(id)}>
            {id === "all" ? "All" : id}
          </button>
        ))}
      </div>

      <h3 className={c.sumHead}>{q ? q.id : "Total charges"}</h3>
      <div className={c.sumGrid}>
        <table className={c.sumTable}>
          <thead><tr><th>Storage charges</th><th className={c.sumAmt}>Amount</th></tr></thead>
          <tbody>
            {q ? (
              <>
                <Row label="Monthly Storage Charges" value={num(q.storage)} />
                <Row label="Extra Items Storage Charges" value={num(q.extra_storage)} />
                <Row label="Removed Item Charges" value={num(q.removed)} />
                {q.extra_insurance > 0 && <Row label="Monthly Extra Insurance Charges" value={num(q.extra_insurance)} />}
                {q.coupon && <Row label="Coupon" value={q.coupon} />}
                <Row label="Revised Monthly Storage Charges" value={num(q.revised)} />
                <Row label="Total Tax" value={`${q.tax_rate}%`} />
                <Row label="Total Monthly Storage Charges" value={num(q.total_monthly)} bold />
              </>
            ) : (
              <>
                <Row label="Monthly Storage Charges" value={num(summary.all.storage)} />
                <Row label="Extra Items Storage Charges" value={num(summary.all.extra_storage)} />
                <Row label="Revised Monthly Storage Charges" value={num(summary.all.revised)} />
                <Row label="Total Tax" value={`${summary.all.tax_rate}%`} />
                <Row label="Total Monthly Storage Charges" value={num(summary.all.total_monthly)} bold />
              </>
            )}
          </tbody>
        </table>

        {q && (
          <table className={c.sumTable}>
            <thead><tr><th>Other charges</th><th className={c.sumAmt}>Amount</th></tr></thead>
            <tbody>
              <Row label="Extra Items Transport Charges" value={num(q.extra_transport)} />
              <Row label="Items stacking & barcode or packing charges" value={num(q.extra_stack)} />
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

const MAIN_TABS = [
  { key: "summary", text: "Account Summary" },
  { key: "due", text: "Due Payments" },
  { key: "tx", text: "Transactions" },
] as const

export default function PaymentsTabs({ bills, payments, summary, dueCount }: { bills: Bill[]; payments: Payment[]; summary: Summary | null; dueCount: number }) {
  const [tab, setTab] = useState<(typeof MAIN_TABS)[number]["key"]>("summary")
  return (
    <>
      <div className={c.mainTabs} role="tablist" aria-label="Payments sections">
        {MAIN_TABS.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} className={`${c.uTab} ${tab === t.key ? c.uTabOn : ""}`} onClick={() => setTab(t.key)}>
            {t.text}{t.key === "due" && dueCount > 0 && <span className={c.badge} style={{ display: "inline-block", marginLeft: 8 }}>{dueCount}</span>}
          </button>
        ))}
      </div>
      {tab === "summary" && <SummaryPanel summary={summary} />}
      {tab === "due" && <BillsPanel bills={bills} />}
      {tab === "tx" && <TransactionsPanel payments={payments} />}
    </>
  )
}
