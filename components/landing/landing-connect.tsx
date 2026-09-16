"use client"

import { useState } from "react"
import Link from "next/link"
import { env } from "@/lib/env"
import s from "./landing.module.css"

/* ------------------------------------------------------------------ *
 * CONNECT — comp section 10.
 * The comp's form was inert. This one posts to /api/save-partial-lead,
 * the route the get-quote page already uses for abandoned-lead capture,
 * so a callback request actually reaches the CRM. The visitor is then
 * pointed at /get-quote to complete the full quote.
 * ------------------------------------------------------------------ */
type Status = "idle" | "sending" | "ok" | "error"

export function LandingConnect() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      customer_name: String(data.get("name") || "").trim(),
      customer_contact1: String(data.get("phone") || "").trim(),
      customer_email: String(data.get("email") || "").trim(),
      storage_type: [String(data.get("storage_type") || ""), String(data.get("details") || "").trim()]
        .filter(Boolean)
        .join(" — "),
    }

    if (!payload.customer_name || !payload.customer_contact1) {
      setStatus("error")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/api/save-partial-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus("ok")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className={`${s.section} ${s.wrap}`} id="connect">
      <div className={s.connect}>
        <div className={s.connectForm}>
          <span className={s.eyebrow}>Let&apos;s connect</span>
          <h2>Get Your Free Storage Quote</h2>
          <p className={s.connectIntro}>
            Tell us what you&apos;d like to store and our team will call you back with a tailored plan.
          </p>

          <form onSubmit={onSubmit} noValidate>
            <div className={s.fRow}>
              <div className={s.fField}>
                <label htmlFor="ls-name">Your name</label>
                <input id="ls-name" name="name" type="text" placeholder="Full name" autoComplete="name" required />
              </div>
              <div className={s.fField}>
                <label htmlFor="ls-phone">Phone</label>
                <input id="ls-phone" name="phone" type="tel" placeholder="+971 50 000 0000" autoComplete="tel" required />
              </div>
            </div>

            <div className={s.fRow}>
              <div className={s.fField}>
                <label htmlFor="ls-email">Email</label>
                <input id="ls-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" />
              </div>
              <div className={s.fField}>
                <label htmlFor="ls-type">Storage type</label>
                <select id="ls-type" name="storage_type" defaultValue="Household storage">
                  <option>Household storage</option>
                  <option>Business storage</option>
                  <option>Document storage</option>
                  <option>Vehicle storage</option>
                </select>
              </div>
            </div>

            <div className={s.fField} style={{ marginBottom: 20 }}>
              <label htmlFor="ls-details">What are you storing?</label>
              <textarea
                id="ls-details"
                name="details"
                rows={3}
                placeholder="e.g. 2 BHK apartment contents for 6 months"
              />
            </div>

            <button className={`${s.btn} ${s.btnAccent}`} type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Request a Callback →"}
            </button>

            {status === "ok" && (
              <p className={`${s.formNote} ${s.formOk}`}>
                Thanks — we&apos;ve got your details and will call you back during business hours.{" "}
                <Link href="/get-quote" style={{ textDecoration: "underline" }}>
                  Get an instant estimate instead →
                </Link>
              </p>
            )}
            {status === "error" && (
              <p className={`${s.formNote} ${s.formErr}`}>
                We couldn&apos;t send that. Please check your name and phone number, or call{" "}
                <a href={env.PHONE_LINK} style={{ textDecoration: "underline" }}>
                  050-577-3388
                </a>
                .
              </p>
            )}
            {status === "idle" && (
              <p className={s.formNote}>
                Door-to-door pickup anywhere in Dubai · No long-term contract · VAT excluded pricing
              </p>
            )}
          </form>
        </div>

        <div className={s.connectMedia}>
          <div className={s.connectNote}>
            <p>
              <b>Prefer to talk?</b>
              <br />
              Call us on <a href={env.PHONE_LINK}>+971 50 577 3388</a> or fill in the form and we&apos;ll
              get back to you within business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
