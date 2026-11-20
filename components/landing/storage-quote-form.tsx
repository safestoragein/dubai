"use client"

import { useState } from "react"
import { CheckCircle2, Clock, Lock, ShieldCheck, Zap } from "lucide-react"
import { env } from "@/lib/env"
import s from "./landing.module.css"
import q from "./storage-quote.module.css"

/* ------------------------------------------------------------------ *
 * Quick storage-quote form (/storage-quote) — the Dubai twin of
 * safestorage.in/storage-quote.
 *
 * It posts to /api/insert-customer-details-dubai, the same route the
 * /get-quote funnel uses, so the lead lands in ss_leads (source
 * dubai_website, country AE) with no backend change. That route only
 * carries name / phone / email / storage_size, and storage_size becomes
 * the lead's "Storage size: …" message, so emirate, area, floor and lift
 * are packed into it as one readable line for the sales rep.
 * ------------------------------------------------------------------ */

const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
]
const FLOORS = ["Ground", "Basement", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Above 10"]

type Field = "name" | "mobile" | "email" | "emirate" | "area" | "floor" | "lift"
type Errors = Partial<Record<Field, string>>

/** UAE mobile → 9 national digits starting with 5, or null. Accepts 05x…, 5x…, +971 5x…, 00971 5x… */
function uaeMobile(raw: string): string | null {
  let d = raw.replace(/\D/g, "")
  if (d.startsWith("00971")) d = d.slice(5)
  else if (d.startsWith("971")) d = d.slice(3)
  else if (d.startsWith("0")) d = d.slice(1)
  return /^5\d{8}$/.test(d) ? d : null
}

export default function StorageQuoteForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const v = (k: string) => String(d.get(k) || "").trim()

    // Honeypot: bots fill the hidden field. Pretend it worked and send nothing.
    if (v("website")) {
      setStatus("ok")
      return
    }

    const next: Errors = {}
    if (v("name").length < 2) next.name = "Please enter your name"
    const mob = uaeMobile(v("mobile"))
    if (!mob) next.mobile = "Enter a valid UAE mobile, e.g. 50 577 3388"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid e-mail"
    if (!v("emirate")) next.emirate = "Please select your emirate"
    if (v("area").length < 2) next.area = "Please enter your pickup area"
    if (!v("floor")) next.floor = "Please select the floor"
    if (!v("lift")) next.lift = "Please choose"
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus("sending")
    try {
      const res = await fetch("/api/insert-customer-details-dubai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: v("name"),
          customer_contact1: `+971${mob}`,
          customer_email: v("email"),
          storage_type: "household",
          storage_size: `Quick form (/storage-quote) — ${v("emirate")}, ${v("area")}; floor ${v("floor")}; lift ${v("lift")}`,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus("ok")
      // Tag the conversion for GTM if the page has the data layer; harmless otherwise.
      ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "storage_quote_submit", form: "storage-quote" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "ok") {
    return (
      <div className={q.card} role="status">
        <div className={q.done}>
          <div className={q.tick}>
            <CheckCircle2 />
          </div>
          <h2>Thank you!</h2>
          <p>Our team will call you shortly with your storage quote.</p>
          <a className={`${s.btn} ${s.btnAccent}`} href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    )
  }

  const f = (k: Field) => `${q.field} ${errors[k] ? q.bad : ""}`

  return (
    <form className={q.card} onSubmit={onSubmit} noValidate>
      <div className={q.badge}>
        <Zap aria-hidden="true" /> Free quote · No obligation · Callback in ~15 min
      </div>
      <h2>Get your storage quote</h2>
      <p className={q.cardSub}>We will call you back shortly.</p>

      <div className={q.row}>
        <div className={f("name")}>
          <label htmlFor="sq-name">Your name</label>
          <input id="sq-name" name="name" autoComplete="name" placeholder="Enter your name" />
          <div className={q.err}>{errors.name}</div>
        </div>
        <div className={f("mobile")}>
          <label htmlFor="sq-mobile">Mobile number</label>
          <div className={q.phone}>
            <span>+971</span>
            <input id="sq-mobile" name="mobile" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="50 577 3388" />
          </div>
          <div className={q.err}>{errors.mobile}</div>
        </div>
      </div>

      <div className={q.row}>
        <div className={f("email")}>
          <label htmlFor="sq-email">Email</label>
          <input id="sq-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <div className={q.err}>{errors.email}</div>
        </div>
        <div className={f("emirate")}>
          <label htmlFor="sq-emirate">Emirate</label>
          <select id="sq-emirate" name="emirate" defaultValue="">
            <option value="" disabled>
              Select your emirate
            </option>
            {EMIRATES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className={q.err}>{errors.emirate}</div>
        </div>
      </div>

      <div className={`${q.row} ${q.row3}`}>
        <div className={f("area")}>
          <label htmlFor="sq-area">Pickup area</label>
          <input id="sq-area" name="area" autoComplete="address-level2" placeholder="e.g. Marina" />
          <div className={q.err}>{errors.area}</div>
        </div>
        <div className={f("floor")}>
          <label htmlFor="sq-floor">Floor</label>
          <select id="sq-floor" name="floor" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {FLOORS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className={q.err}>{errors.floor}</div>
        </div>
        <div className={f("lift")}>
          <label htmlFor="sq-lift">Lift?</label>
          <select id="sq-lift" name="lift" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <div className={q.err}>{errors.lift}</div>
        </div>
      </div>

      <input className={q.trap} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={`${s.btn} ${s.btnAccent} ${q.submit}`} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get my free quote →"}
      </button>
      <div className={q.assure}>
        <span><Lock aria-hidden="true" /> 100% privacy</span>
        <span><ShieldCheck aria-hidden="true" /> No spam, ever</span>
        <span><Clock aria-hidden="true" /> No lock-in</span>
      </div>

      {status === "error" && (
        <p className={q.formErr} role="alert">
          We couldn&apos;t send that just now. Please call{" "}
          <a href={env.PHONE_LINK}>050-577-3388</a> or WhatsApp us.
        </p>
      )}
    </form>
  )
}
