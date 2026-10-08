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

const T_COLORS = ["#ee5824", "#f08a5d", "#14213d", "#6684c3", "#f6b79c", "#b9c0cc"]

function TransactionsPanel({ payments }: { payments: Payment[] }) {
  const [all, setAll] = useState(false)
  if (payments.length === 0) {
    return <section className={c.panel}><p className={c.empty}>No payments received yet.</p></section>
  }
  const total = payments.reduce((a, p) => a + p.amount, 0)
  const sorted = [...payments].sort((x, y) => (new Date(y.date.replace(" ", "T")).getTime() || 0) - (new Date(x.date.replace(" ", "T")).getTime() || 0))

  // payments per month, last 6 months
  const now = new Date()
  const slots = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1)
    return { y: d.getFullYear(), m: d.getMonth(), name: d.toLocaleDateString("en-GB", { month: "short" }), v: 0 }
  })
  for (const p of payments) {
    const d = new Date(p.date.replace(" ", "T"))
    if (Number.isNaN(d.getTime())) continue
    const s2 = slots.find((x) => x.y === d.getFullYear() && x.m === d.getMonth())
    if (s2) s2.v += p.amount
  }
  const maxM = Math.max(...slots.map((x) => x.v), 1)

  // by type (funnel: widest first)
  const byType = new Map<string, number>()
  for (const p of payments) byType.set(label(p.type), (byType.get(label(p.type)) || 0) + p.amount)
  const types = [...byType.entries()].sort((x, y) => y[1] - x[1])
  const maxT = Math.max(...types.map((t) => t[1]), 1)

  // by method
  const byMethod = new Map<string, number>()
  for (const p of payments) {
    const m = /bank/i.test(p.note) ? "Bank transfer" : /google ?pay/i.test(p.note) ? "Google Pay" : /phone ?pe|phone ?pay/i.test(p.note) ? "PhonePe" : label(p.method)
    byMethod.set(m, (byMethod.get(m) || 0) + 1)
  }
  const methods = [...byMethod.entries()].sort((x, y) => y[1] - x[1])

  const list = all ? sorted : sorted.slice(0, 6)
  const W = 520, H = 190, padL = 8, padB = 28, padT = 22
  const bw = 38, gap = (W - padL * 2 - bw * 6) / 5

  return (
    <>
      <div className={c.grid2}>
        <section className={c.panel}>
          <div className={c.panelHead}><div><h2 className={c.panelTitle}>Payments over time</h2><p className={c.panelSub}>Amount received each month · last 6 months</p></div></div>
          <svg className={c.chart} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Payments per month">
            <line x1={padL} x2={W - padL} y1={H - padB} y2={H - padB} stroke="#eef0f3" />
            {slots.map((x, i) => {
              const h = x.v ? Math.max(6, (x.v / maxM) * (H - padB - padT)) : 3
              const bx = padL + i * (bw + gap)
              return (
                <g key={i}>
                  <rect x={bx} y={H - padB - h} width={bw} height={h} rx="6" fill={x.v ? "#ee5824" : "#eef0f3"} opacity={x.v ? 0.9 : 1}><title>{`${x.name}: ${aed(x.v)}`}</title></rect>
                  {x.v > 0 && <text x={bx + bw / 2} y={H - padB - h - 7} textAnchor="middle" fontSize="11" fill="#5f6978">{x.v % 1 ? x.v.toFixed(2) : x.v}</text>}
                  <text x={bx + bw / 2} y={H - 9} textAnchor="middle" fontSize="12" fill="#969daa">{x.name}</text>
                </g>
              )
            })}
          </svg>
        </section>

        <section className={c.panel}>
          <div className={c.panelHead}><div><h2 className={c.panelTitle}>Where it went</h2><p className={c.panelSub}>Payments by type</p></div></div>
          <div className={c.funnel}>
            {types.map(([name, v], i) => (
              <div key={name} className={c.funnelRow} style={{ width: `${Math.max(78, (v / maxT) * 100)}%`, background: T_COLORS[i % T_COLORS.length] }}>
                <span className={c.funnelName}>{name}</span><b>{aed(v)}</b>
              </div>
            ))}
          </div>
          <div className={c.methodRow}>
            {methods.map(([m, n], i) => (
              <span key={m} className={c.methodChip}><i style={{ background: T_COLORS[i % T_COLORS.length] }} />{m} · {n}</span>
            ))}
          </div>
        </section>
      </div>

      <section className={`${c.panel} ${c.tablePanel}`} id="history">
        <div className={c.panelHead}>
          <h2 className={c.panelTitle}>Transactions <span className={c.count}>{payments.length}</span></h2>
          <span className={c.panelSub} style={{ margin: 0 }}>Newest first</span>
        </div>
        <ul className={c.txList}>
          {list.map((p, i) => (
            <li key={p.ref || i} className={c.txItem}>
              <span className={c.txDate}><b>{new Date(p.date.replace(" ", "T")).getDate() || "—"}</b>{day(p.date).split(" ").slice(1).join(" ")}</span>
              <div className={c.txMain}>
                <p className={c.txTitle}>{label(p.type)}<span className={c.txMethod}>{label(p.method)}</span></p>
                <p className={c.txNote}>{p.note || "—"}</p>
                <p className={c.txRef}>{p.ref}</p>
              </div>
              <b className={c.txAmt}>{aed(p.amount)}</b>
            </li>
          ))}
        </ul>
        {payments.length > 6 && (
          <button type="button" className={c.showMore} onClick={() => setAll(!all)}>{all ? "Show fewer" : `Show all ${payments.length} transactions`}</button>
        )}
      </section>
    </>
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
