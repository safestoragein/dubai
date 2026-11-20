"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Building2, CalendarDays, CheckCircle2, ChevronDown, Mail, MapPin, Phone, ShieldCheck, User, ArrowUpDown } from "lucide-react"
import { env } from "@/lib/env"
import { getAdAttribution } from "@/lib/ad-attribution"
import s from "./landing.module.css"
import q from "./storage-quote.module.css"

/* ------------------------------------------------------------------ *
 * Quick storage-quote form (/storage-quote) — the Dubai twin of
 * safestorage.in/storage-quote. One complete card, all fields visible.
 *
 * Submit posts to /api/insert-customer-details-dubai (ss_leads, source
 * dubai_website, country AE). That route only carries name / phone /
 * email / storage_size, and storage_size becomes the lead's "Storage
 * size: …" message, so emirate, area, floor and lift are packed into it
 * as one readable line for the sales rep.
 *
 * A visitor who types a valid name + mobile and then leaves is not lost:
 * once, when the mobile field loses focus, the partial lead is saved via
 * /api/save-partial-lead (the route /get-quote uses).
 * ------------------------------------------------------------------ */

const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"]
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
  // Emirates come from ss_city (country AE) so the list follows what the business has switched on;
  // the static list only shows until that answers (or if it fails).
  const [emirates, setEmirates] = useState<string[]>(EMIRATES)
  useEffect(() => {
    fetch("/api/leo/emirates")
      .then((r) => r.json())
      .then((j: { emirates?: { name: string }[]; data?: { name: string }[] }) => {
        const list = (j.emirates || j.data || []).map((e) => e.name).filter(Boolean)
        if (list.length) setEmirates(list)
      })
      .catch(() => {})
  }, [])
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const partialSent = useRef(false)

  function savePartial(form: HTMLFormElement | null) {
    if (!form || partialSent.current) return
    const d = new FormData(form)
    const name = String(d.get("name") || "").trim()
    const mob = uaeMobile(String(d.get("mobile") || ""))
    if (name.length < 2 || !mob || String(d.get("website") || "")) return
    partialSent.current = true
    try {
      fetch("/api/save-partial-lead", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          customer_contact1: `+971${mob}`,
          customer_email: String(d.get("email") || "").trim(),
          storage_type: `storage-quote partial — ${String(d.get("emirate") || "")}`.trim(),
        }),
      }).catch(() => {})
    } catch {
      /* never block the form on this */
    }
  }

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
    if (!mob) next.mobile = "Enter a valid UAE mobile"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid e-mail"
    if (!v("emirate")) next.emirate = "Select your emirate"
    if (v("area").length < 2) next.area = "Please enter your pickup area"
    if (!v("floor")) next.floor = "Select the floor"
    if (!v("lift")) next.lift = "Please choose"
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus("sending")
    // Like safestorage.in: the server answers as soon as the details check out and builds the customer +
    // quotation in the background. If even that answer is slow, go to the thank-you page anyway
    // (keepalive lets the request finish after we leave).
    let gone = false
    const leave = () => {
      if (gone) return
      gone = true
      try {
        sessionStorage.setItem("ssl_name", v("name"))
      } catch {
        /* ignore */
      }
      ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "storage_quote_submit", form: "storage-quote" })
      window.location.href = "/thank-you"
    }
    const slow = window.setTimeout(leave, 3500)
    try {
      const res = await fetch("/api/storage-quote", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v("name"),
          phone: `+971${mob}`,
          email: v("email"),
          emirate: v("emirate"),
          area: v("area"),
          floor: v("floor"),
          lift: v("lift"),
          website: v("website"),
          attribution: getAdAttribution(),
        }),
      })
      const j = (await res.json().catch(() => ({}))) as { status?: string; field?: Field; message?: string }
      window.clearTimeout(slow)
      if (j.status === "ok") return leave()
      if (gone) return
      if (j.field) setErrors({ [j.field]: j.message || "Please check this field" })
      setStatus("error")
    } catch {
      window.clearTimeout(slow)
      if (!gone) setStatus("error")
    }
  }

  const shell = (children: React.ReactNode) => (
    <div className={q.formCol} id="quote">
      <span className={q.pill}>
        <ShieldCheck aria-hidden="true" /> Pickup &amp; Delivery · Across the UAE
      </span>
      {children}
    </div>
  )

  if (status === "ok") {
    return shell(
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
      </div>,
    )
  }

  const f = (k: Field) => `${q.field} ${errors[k] ? q.bad : ""}`

  return shell(
    <form className={q.card} onSubmit={onSubmit} noValidate>
      <div className={q.cardHead}>
        <span className={q.cardIcon}>
          <CalendarDays aria-hidden="true" />
        </span>
        <div>
          <h2>Get your storage quote</h2>
          <p>We will call you back shortly.</p>
        </div>
      </div>

      <div className={q.row}>
        <div className={f("name")}>
          <label htmlFor="sq-name">Your name</label>
          <div className={q.in}>
            <User aria-hidden="true" />
            <input id="sq-name" name="name" autoComplete="name" placeholder="Enter your name" />
          </div>
          <div className={q.err}>{errors.name}</div>
        </div>
        <div className={f("mobile")}>
          <label htmlFor="sq-mobile">Mobile number</label>
          <div className={q.in}>
            <Phone aria-hidden="true" />
            <span className={q.cc}>+971</span>
            <input
              id="sq-mobile"
              name="mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="50 577 3388"
              onBlur={(e) => savePartial(e.currentTarget.form)}
            />
          </div>
          <div className={q.err}>{errors.mobile}</div>
        </div>
      </div>

      <div className={q.row}>
        <div className={f("email")}>
          <label htmlFor="sq-email">Email</label>
          <div className={q.in}>
            <Mail aria-hidden="true" />
            <input id="sq-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </div>
          <div className={q.err}>{errors.email}</div>
        </div>
        <div className={f("emirate")}>
          <label htmlFor="sq-emirate">Emirate</label>
          <div className={q.in}>
            <MapPin aria-hidden="true" />
            <select id="sq-emirate" name="emirate" defaultValue="">
              <option value="" disabled>
                Select your emirate
              </option>
              {emirates.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className={q.chev} aria-hidden="true" />
          </div>
          <div className={q.err}>{errors.emirate}</div>
        </div>
      </div>

      <div className={`${f("area")} ${q.full}`}>
        <label htmlFor="sq-area">Pickup area</label>
        <div className={q.in}>
          <MapPin aria-hidden="true" />
          <input id="sq-area" name="area" autoComplete="address-level2" placeholder="Area or building, e.g. Dubai Marina" />
        </div>
        <div className={q.err}>{errors.area}</div>
      </div>

      <div className={q.row}>
        <div className={f("floor")}>
          <label htmlFor="sq-floor">Floor</label>
          <div className={q.in}>
            <Building2 aria-hidden="true" />
            <select id="sq-floor" name="floor" defaultValue="">
              <option value="" disabled>
                Select floor
              </option>
              {FLOORS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className={q.chev} aria-hidden="true" />
          </div>
          <div className={q.err}>{errors.floor}</div>
        </div>
        <div className={f("lift")}>
          <label htmlFor="sq-lift">Lift available?</label>
          <div className={q.in}>
            <ArrowUpDown aria-hidden="true" />
            <select id="sq-lift" name="lift" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <ChevronDown className={q.chev} aria-hidden="true" />
          </div>
          <div className={q.err}>{errors.lift}</div>
        </div>
      </div>

      <input className={q.trap} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className={`${s.btn} ${s.btnAccent} ${q.submit}`} type="submit" disabled={status === "sending"}>
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            <Phone size={18} aria-hidden="true" /> Get my free quote <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <p className={q.privacy}>
        <ShieldCheck aria-hidden="true" /> 100% privacy. We never spam.
      </p>

      {status === "error" && (
        <p className={q.formErr} role="alert">
          We couldn&apos;t send that just now. Please call <a href={env.PHONE_LINK}>050-577-3388</a> or WhatsApp us.
        </p>
      )}
    </form>,
  )
}
