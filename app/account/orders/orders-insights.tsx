import { CalendarCheck, CheckCircle2, Package, XCircle } from "lucide-react"
import c from "../account.module.css"
import type { Order } from "./orders-list"

// Metric cards (with a sparkline), an order-activity chart and an orders-by-status list.
// Everything is computed from the customer's own orders — nothing is invented.

type Kind = "done" | "open" | "bad" | "other"
const kind = (s: string): Kind => {
  const v = (s || "").toLowerCase()
  if (/complete|deliver|done|success/.test(v)) return "done"
  if (/cancel|fail|reject/.test(v)) return "bad"
  if (/pending|schedul|confirm|progress|open|new/.test(v)) return "open"
  return "other"
}
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "Unknown")
const parse = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return Number.isNaN(d.getTime()) ? null : d
}
const MONTHS = 6

// last 6 months, oldest first, ending with the current month
function monthSlots() {
  const now = new Date()
  return Array.from({ length: MONTHS }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (MONTHS - 1 - i), 1)
    return { y: d.getFullYear(), m: d.getMonth(), name: d.toLocaleDateString("en-GB", { month: "short" }) }
  })
}
function series(orders: Order[], pick: (o: Order) => boolean) {
  const slots = monthSlots()
  const out = slots.map(() => 0)
  for (const o of orders) {
    if (!pick(o)) continue
    const d = parse(o.date)
    if (!d) continue
    const i = slots.findIndex((s) => s.y === d.getFullYear() && s.m === d.getMonth())
    if (i >= 0) out[i]++
  }
  return out
}

function spark(values: number[]) {
  const W = 180, H = 46, max = Math.max(...values, 1)
  const pts = values.map((v, i) => [ (i / (values.length - 1)) * W, H - 4 - (v / max) * (H - 10) ])
  return pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ")
}

// smooth line through the points (Catmull-Rom -> cubic Bezier)
function smooth(pts: number[][]) {
  if (pts.length < 2) return ""
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`
  }
  return d
}

const STATUS_COLORS = ["#e0592f", "#eb9a79", "#7b8fcf", "#dfb867", "#14213d", "#b9c0cc"]

export function OrdersCharts({ orders }: { orders: Order[] }) {
  // activity chart: orders per month
  const all = series(orders, () => true)
  const slots = monthSlots()
  const total = all.reduce((a, b) => a + b, 0)
  const top = Math.max(...all, 1)
  const maxY = top <= 4 ? 4 : Math.ceil(top / 5) * 5
  const W = 600, H = 220, padL = 34, padR = 12, padT = 14, padB = 30
  const xs = (i: number) => padL + (i / (MONTHS - 1)) * (W - padL - padR)
  const ys = (v: number) => padT + (1 - v / maxY) * (H - padT - padB)
  const pts = all.map((v, i) => [Number(xs(i).toFixed(1)), Number(ys(v).toFixed(1))])
  const line = smooth(pts)
  const area = `${line} L${pts[pts.length - 1][0]},${H - padB} L${pts[0][0]},${H - padB} Z`
  const ticks = [0, 1, 2, 3, 4].map((t) => Math.round((maxY / 4) * t * 10) / 10)

  // orders by status label
  const counts = new Map<string, number>()
  for (const o of orders) { const nm = o.status_label || label(o.status); counts.set(nm, (counts.get(nm) || 0) + 1) }
  const rows = [...counts.entries()].sort((a, b) => b[1] - a[1])
  const maxRow = Math.max(...rows.map((r) => r[1]), 1)

  return (
    <div className={c.grid2}>
        <section className={c.panel}>
          <div className={c.panelHead}>
            <div><h2 className={c.panelTitle}>Order activity</h2><p className={c.panelSub}>Orders by month · {slots[0].name} – {slots[MONTHS - 1].name}</p></div>
            <span className={c.button}>Last 6 months</span>
          </div>
          <div className={c.bigRow}><span className={c.bigNum}>{total}</span><span className={c.bigNote}>{total === 1 ? "order" : "orders"} in this period</span></div>
          <svg className={c.chart} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Orders per month">
            <defs>
              <linearGradient id="oa" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ee5824" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ee5824" stopOpacity="0" />
              </linearGradient>
            </defs>
            {ticks.map((t) => (
              <g key={t}>
                <line x1={padL} x2={W - padR} y1={ys(t)} y2={ys(t)} stroke="#eef0f3" strokeDasharray="4 4" />
                <text x={padL - 8} y={ys(t) + 4} textAnchor="end" fontSize="11" fill="#99a0ab">{t}</text>
              </g>
            ))}
            <path d={area} fill="url(#oa)" />
            <path d={line} fill="none" stroke="#e0592f" strokeWidth="2.5" strokeLinecap="round" />
            {pts.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#fff" stroke="#e0592f" strokeWidth="2"><title>{`${slots[i].name}: ${all[i]}`}</title></circle>
            ))}
            {slots.map((s, i) => (
              <text key={i} x={xs(i)} y={H - 8} textAnchor="middle" fontSize="12" fill="#969daa">{s.name}</text>
            ))}
          </svg>
        </section>

        <section className={c.panel}>
          <div className={c.panelHead}>
            <div><h2 className={c.panelTitle}>Orders by status</h2><p className={c.panelSub}>How your orders are spread</p></div>
            <span className={c.tileIcon}><Package aria-hidden="true" /></span>
          </div>
          {rows.length ? (
            <ul className={c.statusList}>
              {rows.map(([name, n], i) => (
                <li key={name}>
                  <span className={c.slName}>{name}</span>
                  <span className={c.slTrack}><i style={{ width: `${Math.max(8, (n / maxRow) * 100)}%`, background: STATUS_COLORS[i % STATUS_COLORS.length] }} /></span>
                  <b className={c.slCount}>{n}</b>
                </li>
              ))}
            </ul>
          ) : <p className={c.panelSub}>No orders yet.</p>}
          <div className={c.slFoot}>{orders.length} {orders.length === 1 ? "order" : "orders"} across {rows.length} {rows.length === 1 ? "status" : "statuses"}</div>
        </section>
      </div>
  )
}

export default function OrdersInsights({ orders }: { orders: Order[] }) {
  const cards: { title: string; note: string; icon: typeof Package; pick: (o: Order) => boolean; stroke: string }[] = [
    { title: "All orders", note: "Everything on your account", icon: Package, pick: () => true, stroke: "#ee5824" },
    { title: "Upcoming", note: "Scheduled or in progress", icon: CalendarCheck, pick: (o) => kind(o.status) === "open", stroke: "#14213d" },
    { title: "Completed", note: "Collected and safe with us", icon: CheckCircle2, pick: (o) => kind(o.status) === "done", stroke: "#ee5824" },
    { title: "Cancelled", note: "Orders that were cancelled", icon: XCircle, pick: (o) => kind(o.status) === "bad", stroke: "#d45f50" },
  ]

  return (
    <>
      <div className={c.kpis}>
        {cards.map((k) => {
          const s = series(orders, k.pick)
          const now = s[MONTHS - 1], prev = s[MONTHS - 2]
          const value = orders.filter(k.pick).length
          const diff = now - prev
          const Icon = k.icon
          return (
            <div key={k.title} className={`${c.card} ${c.kpi} ${c.kpiSpark}`}>
              <div className={c.kpiHead}><p className={c.kpiLabel}>{k.title}</p><span className={c.tileIcon}><Icon aria-hidden="true" /></span></div>
              <p className={c.kpiValue}>{value}</p>
              <svg className={c.spark} viewBox="0 0 180 46" preserveAspectRatio="none" aria-hidden="true">
                <path d={spark(s)} fill="none" stroke={k.stroke} strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
              <p className={c.kpiNote}>
                {diff === 0 ? <>No change</> : <b className={diff > 0 ? c.up : c.down}>{diff > 0 ? "↗" : "↘"} {Math.abs(diff)}</b>}
                {diff === 0 ? " vs. last month" : " vs. last month"}
              </p>
            </div>
          )
        })}
      </div>

    </>
  )
}
