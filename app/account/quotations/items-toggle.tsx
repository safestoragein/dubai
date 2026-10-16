"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import c from "../account.module.css"

type Item = { name: string; qty: number }

// The item list stays folded until the customer opens it.
export default function ItemsToggle({ items }: { items: Item[] }) {
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
            <thead><tr><th>#</th><th>Item</th><th>Qty</th></tr></thead>
            <tbody>
              {items.map((it, i) => (
                <tr key={i}><td>{i + 1}</td><td>{it.name}</td><td>{it.qty}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
