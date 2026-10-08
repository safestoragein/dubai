"use client"

import { useState } from "react"
import { CalendarDays, Check, Clock, MapPin, PackageOpen, StickyNote, Truck, X } from "lucide-react"
import c from "../account.module.css"

export type Order = {
  ref?: string; type: string; sub_type: string; status: string
  date: string; timeslot?: string; address?: string; note?: string
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
const parse = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? null : d
}
const STEPS = ["Booked", "Scheduled", "Completed"]
// how far along the journey an order is: 0-based index of the current step
const stepOf = (k: Kind) => (k === "done" ? 2 : k === "open" ? 1 : 0)
const pill: Record<Kind, string> = { done: c.sDone, open: c.sOpen, bad: c.sBad, other: c.sOther }

const FILTERS: { key: "all" | Kind; text: string }[] = [
  { key: "all", text: "All" },
  { key: "open", text: "Upcoming" },
  { key: "done", text: "Completed" },
  { key: "bad", text: "Cancelled" },
]

export default function OrdersList({ orders }: { orders: Order[] }) {
  const [f, setF] = useState<"all" | Kind>("all")
  const shown = f === "all" ? orders : orders.filter((o) => kind(o.status) === f)
  const n = (k: "all" | Kind) => (k === "all" ? orders.length : orders.filter((o) => kind(o.status) === k).length)

  return (
    <>
      <div className={c.tabs} role="tablist" aria-label="Filter orders">
        {FILTERS.map((x) => (
          <button key={x.key} type="button" role="tab" aria-selected={f === x.key}
            className={`${c.tab} ${f === x.key ? c.tabOn : ""}`} onClick={() => setF(x.key)}>
            {x.text}<span className={c.tabN}>{n(x.key)}</span>
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <div className={c.emptyBox}>
          <span className={c.emptyIcon}><PackageOpen aria-hidden="true" /></span>
          <b>{orders.length === 0 ? "No orders yet" : "Nothing in this view"}</b>
          <span>{orders.length === 0 ? "When you book a pickup, it will show up here." : "Try another tab above."}</span>
        </div>
      ) : (
        <div className={c.orderGrid}>
          {shown.map((o, i) => {
            const k = kind(o.status)
            const d = parse(o.date)
            const step = stepOf(k)
            return (
              <article key={o.ref || i} className={`${c.orderCard} ${k === "bad" ? c.orderCardBad : ""}`}>
                <div className={c.orderTop}>
                  <div className={c.dateBlock} aria-label={d ? d.toDateString() : o.date}>
                    <span className={c.dateMon}>{d ? d.toLocaleDateString("en-GB", { month: "short" }) : "—"}</span>
                    <span className={c.dateDay}>{d ? d.getDate() : "—"}</span>
                    <span className={c.dateYear}>{d ? d.getFullYear() : ""}</span>
                  </div>
                  <div className={c.orderInfo}>
                    <div className={c.orderTitleRow}>
                      <h3 className={c.orderName}><Truck aria-hidden="true" />{label(o.type)}{o.sub_type && o.sub_type !== o.type ? ` · ${label(o.sub_type)}` : ""}</h3>
                      <span className={`${c.status} ${pill[k]}`}>{label(o.status)}</span>
                    </div>
                    {o.ref && <p className={c.orderRef}>{o.ref}</p>}
                    <ul className={c.orderMeta}>
                      {o.timeslot && <li><Clock aria-hidden="true" />{o.timeslot}</li>}
                      {o.address && <li><MapPin aria-hidden="true" />{o.address}</li>}
                      {o.note && <li><StickyNote aria-hidden="true" />{o.note}</li>}
                      {!o.timeslot && !o.address && !o.note && <li className={c.metaNone}><CalendarDays aria-hidden="true" />Details will appear here once scheduled</li>}
                    </ul>
                  </div>
                </div>

                {k === "bad" ? (
                  <div className={c.cancelled}><X aria-hidden="true" /> This order was cancelled</div>
                ) : (
                  <ol className={c.steps} aria-label="Order progress">
                    {STEPS.map((s, idx) => (
                      <li key={s} className={`${c.step} ${idx < step || (k === "done" && idx === step) ? c.stepDone : ""} ${idx === step && k !== "done" ? c.stepNow : ""}`}>
                        <span className={c.stepDot}>{idx < step || (k === "done" && idx === step) ? <Check aria-hidden="true" /> : idx + 1}</span>
                        <span className={c.stepText}>{s}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </article>
            )
          })}
        </div>
      )}
    </>
  )
}
