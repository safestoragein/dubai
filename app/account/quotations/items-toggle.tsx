"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import c from "../account.module.css"

type Item = { name: string; qty: number; unit: number; subtotal: number }
const aed = (n: number) => `AED ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

// The item list stays folded until the customer opens it.
export default function ItemsToggle({ items, subtotal }: { items: Item[]; subtotal: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={c.qItemsWrap}>
      <button type="button" className={c.qToggle} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span>{open ? "Hide items" : "View items"} ({items.length})</span>
        <ChevronDown aria-hidden="true" className={open ? c.qChevOpen : ""} />
      </button>
      {open && (
        <div className={c.qItems}>
          <table className={c.table}>
            <thead><tr><th>#</th><th>Item</th><th>Qty</th><th>AED / unit</th><th>Subtotal</th></tr></thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}><td>{i + 1}</td><td>{it.name}</td><td>{it.qty}</td><td>{aed(it.unit)}</td><td>{aed(it.subtotal)}</td></tr>
              ))}
            </tbody>
            <tfoot><tr><td colSpan={4} style={{ textAlign: "right", fontWeight: 600 }}>Items subtotal</td><td style={{ fontWeight: 600 }}>{aed(subtotal)}</td></tr></tfoot>
          </table>
        </div>
      )}
    </div>
  )
}
