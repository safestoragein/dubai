"use client"

import { useState } from "react"
import { ArrowRight, Lock } from "lucide-react"
import c from "./account.module.css"

// Top-of-page strip shown on every account page while the customer has unpaid bills.
export default function PayBanner({ total, count }: { total: number; count: number }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")

  async function pay() {
    setBusy(true)
    setError("")
    try {
      const res = await fetch("/api/customer/pay", { method: "POST" })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.url) {
        window.location.href = data.url
        return
      }
      setError(data.error || "Could not start the payment. Please try again.")
    } catch {
      setError("Could not reach the server. Please check your connection.")
    }
    setBusy(false)
  }

  return (
    <div className={c.dueBar} role="status">
      <div>
        <p className={c.dueBarTitle}>
          You have {count} unpaid {count === 1 ? "bill" : "bills"} · AED {total.toLocaleString("en-AE", { maximumFractionDigits: 2 })}
        </p>
        <p className={c.dueBarSub}>{error ? <span className={c.dueBarErr}>{error}</span> : <><Lock aria-hidden="true" /> Pay securely by card</>}</p>
      </div>
      <button type="button" className={c.dueBarBtn} onClick={pay} disabled={busy}>
        {busy ? "Opening…" : <>Pay now <ArrowRight aria-hidden="true" /></>}
      </button>
    </div>
  )
}
