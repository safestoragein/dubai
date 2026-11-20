"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Clock, Lock, ShieldCheck } from "lucide-react"
import { env } from "@/lib/env"
import s from "./landing.module.css"
import q from "./storage-quote.module.css"

/* ------------------------------------------------------------------ *
 * Quick storage-quote form (/storage-quote) — the Dubai twin of
 * safestorage.in/storage-quote, as a two-step bar.
 *
 *  Step 1  name · mobile · emirate   → "Continue" also saves a partial lead
 *                                       (/api/save-partial-lead, the route
 *                                       /get-quote uses) so a visitor who
 *                                       stops after step 1 is not lost.
 *  Step 2  email · area · floor · lift → posts to /api/insert-customer-
 *                                       details-dubai (ss_leads, source
 *                                       dubai_website, country AE).
 *
 * That route only carries name / phone / email / storage_size, and
 * storage_size becomes the lead's "Storage size: …" message, so emirate,
 * area, floor and lift are packed into it as one readable line.
 * ------------------------------------------------------------------ */

const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"]
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
  const [step, setStep] = useState<1 | 2>(1)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")

  const read = (form: HTMLFormElement) => {
    const d = new FormData(form)
    return (k: string) => String(d.get(k) || "").trim()
  }

  function validateStep1(v: (k: string) => string): Errors {
    const e: Errors = {}
    if (v("name").length < 2) e.name = "Please enter your name"
    if (!uaeMobile(v("mobile"))) e.mobile = "Enter a valid UAE mobile"
    if (!v("emirate")) e.emirate = "Please select your emirate"
    return e
  }

  function onContinue(form: HTMLFormElement | null) {
    if (!form) return
    const v = read(form)
    if (v("website")) return
    const e = validateStep1(v)
    setErrors(e)
    if (Object.keys(e).length) return
    setStep(2)
    // Keep step-1 details even if the visitor stops here. Fire-and-forget.
    try {
      fetch("/api/save-partial-lead", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: v("name"),
          customer_contact1: `+971${uaeMobile(v("mobile"))}`,
          customer_email: "",
          storage_type: `storage-quote step 1 — ${v("emirate")}`,
        }),
      }).catch(() => {})
    } catch {
      /* never block the form on this */
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const v = read(e.currentTarget)

    // Honeypot: bots fill the hidden field. Pretend it worked and send nothing.
    if (v("website")) {
      setStatus("ok")
      return
    }
    if (step === 1) return onContinue(e.currentTarget)

    const next: Errors = validateStep1(v)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid e-mail"
    if (v("area").length < 2) next.area = "Enter your pickup area"
    if (!v("floor")) next.floor = "Select floor"
    if (!v("lift")) next.lift = "Choose"
    setErrors(next)
    if (next.name || next.mobile || next.emirate) {
      setStep(1)
      return
    }
    if (Object.keys(next).length) return

    setStatus("sending")
    try {
      const res = await fetch("/api/insert-customer-details-dubai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: v("name"),
          customer_contact1: `+971${uaeMobile(v("mobile"))}`,
          customer_email: v("email"),
          storage_type: "household",
          storage_size: `Quick form (/storage-quote) — ${v("emirate")}, ${v("area")}; floor ${v("floor")}; lift ${v("lift")}`,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus("ok")
      ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "storage_quote_submit", form: "storage-quote" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "ok") {
    return (
      <div className={q.bar} id="quote" role="status">
        <div className={q.done}>
          <div className={q.tick}>
            <CheckCircle2 />
          </div>
          <div>
            <h2>Thank you!</h2>
            <p>Our team will call you shortly with your storage quote.</p>
          </div>
          <a className={`${s.btn} ${s.btnAccent}`} href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    )
  }

  const f = (k: Field) => `${q.field} ${errors[k] ? q.bad : ""}`

  return (
    <form className={q.bar} id="quote" onSubmit={onSubmit} noValidate>
      <div className={q.stepper} aria-label={`Step ${step} of 2`}>
        <div className={`${q.st} ${step === 1 ? q.on : q.done}`}>
          <span className={q.n}>{step === 1 ? "1" : "✓"}</span> Your details
        </div>
        <span className={q.ln} aria-hidden="true" />
        <div className={`${q.st} ${step === 2 ? q.on : ""}`}>
          <span className={q.n}>2</span> Storage needs
        </div>
      </div>

      {/* STEP 1 */}
      <div className={`${q.fields} ${q.cols4}`} hidden={step !== 1}>
        <div className={f("name")}>
          <label htmlFor="sq-name">Name</label>
          <input id="sq-name" name="name" autoComplete="name" placeholder="Enter your name" />
          <div className={q.err}>{errors.name}</div>
        </div>
        <div className={f("mobile")}>
          <label htmlFor="sq-mobile">Mobile</label>
          <div className={q.phone}>
            <span>+971</span>
            <input id="sq-mobile" name="mobile" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="50 577 3388" />
          </div>
          <div className={q.err}>{errors.mobile}</div>
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
        <div className={q.go}>
          <button
            type="button"
            className={`${s.btn} ${s.btnAccent} ${q.submit}`}
            onClick={(e) => onContinue(e.currentTarget.form)}
          >
            Continue <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* STEP 2 */}
      <div className={`${q.fields} ${q.cols5}`} hidden={step !== 2}>
        <div className={f("email")}>
          <label htmlFor="sq-email">Email</label>
          <input id="sq-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <div className={q.err}>{errors.email}</div>
        </div>
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
        <div className={q.go}>
          <button type="button" className={q.back} onClick={() => setStep(1)}>
            Back
          </button>
          <button className={`${s.btn} ${s.btnAccent} ${q.submit}`} type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : (<>Get my free quote <ArrowRight size={18} aria-hidden="true" /></>)}
          </button>
        </div>
      </div>

      <input className={q.trap} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={q.assure}>
        <span><Lock aria-hidden="true" /> 100% privacy</span>
        <span><ShieldCheck aria-hidden="true" /> No spam, ever</span>
        <span><Clock aria-hidden="true" /> No lock-in</span>
      </div>

      {status === "error" && (
        <p className={q.formErr} role="alert">
          We couldn&apos;t send that just now. Please call <a href={env.PHONE_LINK}>050-577-3388</a> or WhatsApp us.
        </p>
      )}
    </form>
  )
}
