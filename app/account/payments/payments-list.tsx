"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import c from "../account.module.css"

export type Bill = { id: string; description: string; kind: string; date: string; amount: number; late: number; status: string; quotation?: string; order?: string }
export type Payment = { ref: string; date: string; amount: number; type: string; method: string; note: string }

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { maximumFractionDigits: 2 })}`
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) || String(v).startsWith("0000") ? "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
const pill = (s: string) => (s === "Paid" ? c.sDone : s === "Unpaid" ? c.sOpen : c.sOther)
const TABS = ["All", "Unpaid", "Paid"] as const
const PAGE = 8

export default function PaymentsList({ bills, payments }: { bills: Bill[]; payments: Payment[] }) {
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
    <>
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
          <input className={c.search} aria-label="Search bills" placeholder="Search bill, description or order…" value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1) }} />
        </div>
        <div className={c.tableWrap}>
          <table className={c.table}>
            <thead><tr><th>Bill</th><th>Description</th><th>Bill date</th><th>Order</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              {shown.map((b) => (
                <tr key={b.id}>
                  <td><span className={c.cellMain}><span className={c.cellIcon}><FileText aria-hidden="true" /></span>{b.id}</span></td>
                  <td style={{ color: "#344050", whiteSpace: "normal", minWidth: 200 }}>{b.description || label(b.kind) || "Storage charges"}
                    {b.quotation && <span className={c.refLine}>{b.quotation}</span>}</td>
                  <td>{day(b.date)}</td>
                  <td>{b.order || "—"}</td>
                  <td><b>{aed(b.amount)}</b>{b.late > 0 && <span className={c.refLine}>incl. {aed(b.late)} late fee</span>}</td>
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
    </>
  )
}
