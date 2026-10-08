"use client"

import { useState } from "react"
import c from "../account.module.css"

export type Item = {
  id: number; quotation: string; storage_id: string; barcode: string; name: string; type: string; qty: number
  value: number | null; location: string; start: string; end: string; status: string
}

const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return !v || Number.isNaN(d.getTime()) || String(v).startsWith("0000") ? "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
const pill = (s: string) => (s === "Stored" ? c.sDone : s === "Removed" ? c.sBad : c.sOther)
const STATUSES = ["All", "Stored", "Retrieved", "Removed"] as const
const PAGE = 10

export default function InventoryList({ items }: { items: Item[] }) {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All")
  const [qt, setQt] = useState("all")
  const [q, setQ] = useState("")
  const [page, setPage] = useState(1)

  const quotes = Array.from(new Set(items.map((i) => i.quotation).filter(Boolean)))
  const n = (s: (typeof STATUSES)[number]) => (s === "All" ? items.length : items.filter((i) => i.status === s).length)
  const rows = items.filter((i) =>
    (status === "All" || i.status === status) && (qt === "all" || i.quotation === qt) &&
    [i.barcode, i.name, i.type, i.quotation, i.location, i.storage_id].join(" ").toLowerCase().includes(q.toLowerCase()))
  const pages = Math.max(1, Math.ceil(rows.length / PAGE))
  const cur = Math.min(page, pages)
  const shown = rows.slice((cur - 1) * PAGE, cur * PAGE)

  // show a column only when at least one record has something in it
  const hasSid = items.some((i) => i.storage_id)
  const hasLoc = items.some((i) => i.location)
  const hasVal = items.some((i) => i.value !== null && i.value > 0)
  const reset = () => setPage(1)

  return (
    <section className={`${c.panel} ${c.tablePanel}`}>
      <div className={c.panelHead}>
        <h2 className={c.panelTitle}>Inventory <span className={c.count}>{items.length}</span></h2>
        <span className={c.panelSub} style={{ margin: 0 }}>Every item we hold for you</span>
      </div>

      {quotes.length > 1 && (
        <div className={c.subTabs} style={{ margin: "0 24px 4px" }} role="tablist" aria-label="Quotation">
          {["all", ...quotes].map((id) => (
            <button key={id} type="button" role="tab" aria-selected={qt === id} className={`${c.uTab} ${qt === id ? c.uTabOn : ""}`} onClick={() => { setQt(id); reset() }}>
              {id === "all" ? "All quotations" : id}
            </button>
          ))}
        </div>
      )}

      <div className={c.toolbar}>
        <div className={c.tabs} role="tablist" aria-label="Filter items">
          {STATUSES.map((s) => (
            <button key={s} type="button" role="tab" aria-selected={status === s} className={`${c.tab} ${status === s ? c.tabOn : ""}`} onClick={() => { setStatus(s); reset() }}>
              {s}<span className={c.tabN}>{n(s)}</span>
            </button>
          ))}
        </div>
        <input className={c.search} aria-label="Search items" placeholder="Search barcode or item…" value={q} onChange={(e) => { setQ(e.target.value); reset() }} />
      </div>

      <div className={c.tableWrap}>
        <table className={c.table}>
          <thead>
            <tr>
              <th>Barcode</th><th>Item</th><th>Type</th><th>Qty</th><th>Quotation</th>
              {hasSid && <th>Storage Id</th>}{hasLoc && <th>Location</th>}{hasVal && <th>Value</th>}
              <th>Stored since</th><th>Out on</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((i) => (
              <tr key={i.id}>
                <td style={{ color: "#344050", fontWeight: 500 }}>{i.barcode || "—"}</td>
                <td style={{ color: "#344050", whiteSpace: "normal", minWidth: 220 }}>{i.name}</td>
                <td>{label(i.type)}</td>
                <td>{i.qty}</td>
                <td>{i.quotation || "—"}</td>
                {hasSid && <td>{i.storage_id || "—"}</td>}
                {hasLoc && <td>{i.location || "—"}</td>}
                {hasVal && <td>{i.value !== null ? i.value.toLocaleString("en-AE", { minimumFractionDigits: 2 }) : "—"}</td>}
                <td>{day(i.start)}</td>
                <td>{day(i.end)}</td>
                <td><span className={`${c.status} ${pill(i.status)}`}>{i.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className={c.empty}>{items.length === 0 ? "No items stored yet." : "No items match."}</p>}
      </div>

      <div className={c.footer}>
        <span>{rows.length ? `Showing ${(cur - 1) * PAGE + 1}–${Math.min(cur * PAGE, rows.length)} of ${rows.length} ${rows.length === 1 ? "item" : "items"}` : "No items to show"}</span>
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
