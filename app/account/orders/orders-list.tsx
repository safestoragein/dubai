"use client"

import { Fragment, useState } from "react"
import { Truck } from "lucide-react"
import c from "../account.module.css"

export type Order = {
  ref?: string; type: string; sub_type: string; status: string
  date: string; timeslot?: string; address?: string; note?: string; created?: string
}

type Kind = "done" | "open" | "bad" | "other"
const kind = (s: string): Kind => {
  const v = (s || "").toLowerCase()
  if (/complete|deliver|done|success/.test(v)) return "done"
  if (/cancel|fail|reject/.test(v)) return "bad"
  if (/pending|schedul|confirm|progress|open|new/.test(v)) return "open"
  return "other"
}
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "—")
const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? v || "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
const pill: Record<Kind, string> = { done: c.sDone, open: c.sOpen, bad: c.sBad, other: c.sOther }
const FILTERS: { key: "all" | Kind; text: string }[] = [
  { key: "all", text: "All" },
  { key: "open", text: "Upcoming" },
  { key: "done", text: "Completed" },
  { key: "bad", text: "Cancelled" },
]
const PAGE = 8

export default function OrdersList({ orders }: { orders: Order[] }) {
  const [f, setF] = useState<"all" | Kind>("all")
  const [q, setQ] = useState("")
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState<number | null>(null)

  const n = (k: "all" | Kind) => (k === "all" ? orders.length : orders.filter((o) => kind(o.status) === k).length)
  const rows = orders.filter((o) =>
    (f === "all" || kind(o.status) === f) &&
    [o.ref, o.type, o.sub_type, o.address, o.status].join(" ").toLowerCase().includes(q.toLowerCase()))
  const pages = Math.max(1, Math.ceil(rows.length / PAGE))
  const cur = Math.min(page, pages)
  const shown = rows.slice((cur - 1) * PAGE, cur * PAGE)
  const reset = () => { setPage(1); setOpen(null) }

  return (
    <section className={`${c.panel} ${c.tablePanel}`}>
      <div className={c.toolbar}>
        <div className={c.tabs} role="tablist" aria-label="Filter orders">
          {FILTERS.map((x) => (
            <button key={x.key} type="button" role="tab" aria-selected={f === x.key}
              className={`${c.tab} ${f === x.key ? c.tabOn : ""}`} onClick={() => { setF(x.key); reset() }}>
              {x.text}<span className={c.tabN}>{n(x.key)}</span>
            </button>
          ))}
        </div>
        <input className={c.search} aria-label="Search orders" placeholder="Search order, type or address…" value={q}
          onChange={(e) => { setQ(e.target.value); reset() }} />
      </div>

      <div className={c.tableWrap}>
        <table className={c.table}>
          <thead>
            <tr><th>Order ID</th><th>Service</th><th>Date</th><th>Time slot</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {shown.map((o, i) => {
              const idx = (cur - 1) * PAGE + i
              const k = kind(o.status)
              const isOpen = open === idx
              const step = k === "done" ? 3 : k === "open" ? 2 : 1
              return (
                <Fragment key={o.ref || idx}>
                  <tr className={isOpen ? c.rowOpen : ""}>
                    <td><button type="button" className={c.orderLink} onClick={() => setOpen(isOpen ? null : idx)}>#{o.ref || `ORD-${idx + 1}`}</button></td>
                    <td><span className={c.cellMain}><span className={c.cellIcon}><Truck aria-hidden="true" /></span>
                      <span>{label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}</span></span></td>
                    <td>{day(o.date)}</td>
                    <td>{o.timeslot || "—"}</td>
                    <td><span className={`${c.status} ${pill[k]}`}>{label(o.status)}</span></td>
                    <td><button type="button" className={c.linkBtn} onClick={() => setOpen(isOpen ? null : idx)}>{isOpen ? "Hide" : "View"}</button></td>
                  </tr>
                  {isOpen && (
                    <tr className={c.detailRow}>
                      <td colSpan={6}>
                        <div className={c.detailGrid}>
                          <div>
                            <h3 className={c.dTitle}>Order details</h3>
                            <div className={c.dFields}>
                              <div className={c.dField}><span>Order ID</span><b>#{o.ref || `ORD-${idx + 1}`}</b></div>
                              <div className={c.dField}><span>Service</span><b>{label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}</b></div>
                              <div className={c.dField}><span>Scheduled for</span><b>{day(o.date)}</b></div>
                              {o.timeslot && <div className={c.dField}><span>Time slot</span><b>{o.timeslot}</b></div>}
                              {o.address && <div className={c.dField}><span>Address</span><b>{o.address}</b></div>}
                              {o.note && <div className={c.dField}><span>Note</span><b>{o.note}</b></div>}
                              {o.created && <div className={c.dField}><span>Booked on</span><b>{day(o.created)}</b></div>}
                            </div>
                          </div>
                          <div>
                            <h3 className={c.dTitle}>Order timeline</h3>
                            {k === "bad" ? (
                              <p className={c.cancelNote}>This order was cancelled.</p>
                            ) : (
                              <div className={c.steps}>
                                <div className={`${c.step} ${step >= 1 ? c.stepDone : ""}`}><b>Booking confirmed</b>We have your request</div>
                                <div className={`${c.step} ${step >= 2 ? c.stepDone : ""}`}><b>Pickup scheduled</b>{day(o.date)}</div>
                                <div className={`${c.step} ${step >= 3 ? c.stepDone : ""}`}><b>Completed</b>{step >= 3 ? "Items collected" : "Pending"}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
          </tbody>
        </table>
        {rows.length === 0 && <p className={c.empty}>{orders.length === 0 ? "No orders yet. When you book a pickup, it will show up here." : "No orders match your search."}</p>}
      </div>

      <div className={c.footer}>
        <span>{rows.length ? `Showing ${(cur - 1) * PAGE + 1}–${Math.min(cur * PAGE, rows.length)} of ${rows.length} ${rows.length === 1 ? "order" : "orders"}` : "No orders to show"}</span>
        <div className={c.pagination}>
          <button type="button" disabled={cur <= 1} onClick={() => { setPage(cur - 1); setOpen(null) }}>Prev</button>
          {Array.from({ length: pages }, (_, p) => p + 1).map((p) => (
            <button key={p} type="button" className={p === cur ? c.pageOn : ""} aria-label={`Page ${p}`} onClick={() => { setPage(p); setOpen(null) }}>{p}</button>
          ))}
          <button type="button" disabled={cur >= pages} onClick={() => { setPage(cur + 1); setOpen(null) }}>Next</button>
        </div>
      </div>
    </section>
  )
}
