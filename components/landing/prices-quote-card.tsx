"use client"

import { useState } from "react"
import { Box, CheckCircle2 } from "lucide-react"
import { getAdAttribution } from "@/lib/ad-attribution"
import { env } from "@/lib/env"
import c from "./prices-quote-card.module.css"

/** Hero quote form for /self-storage-dubai/prices: size + name / e-mail / mobile.
 *  Posts to /api/insert-customer-details-dubai -> safestorage.in app/insert_customer_details_dubai -> ss_leads
 *  (source dubai_website, country AE). That endpoint only carries name / phone / email / storage_size, and
 *  storage_size becomes the lead's message, so the size and where the visitor came from are packed
 *  into it as one readable line for the sales rep. No price is shown. */

/** UAE mobile -> 9 national digits starting with 5, or null. */
function uaeMobile(raw: string): string | null {
  let d = raw.replace(/\D/g, "")
  if (d.startsWith("00971")) d = d.slice(5)
  else if (d.startsWith("971")) d = d.slice(3)
  else if (d.startsWith("0")) d = d.slice(1)
  return /^5\d{8}$/.test(d) ? d : null
}
const SIZES = [16, 32, 50, 100]
export default function PricesQuoteCard({ placement = "hero" }: { placement?: "hero" | "bottom" | "site" }) {
  const [size, setSize] = useState(16)
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "mobile", string>>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending") return
    const fd = new FormData(e.currentTarget)
    const v = (k: string) => String(fd.get(k) ?? "").trim()
    if (v("website")) return setStatus("ok") // honeypot: pretend success, save nothing

    const next: typeof errors = {}
    if (v("name").length < 2) next.name = "Please enter your name"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid e-mail"
    const mob = uaeMobile(v("mobile"))
    if (!mob) next.mobile = "Enter a valid UAE mobile"
    setErrors(next)
    if (Object.keys(next).length || !mob) return

    // Where the visitor came from: this page, the site/page that sent them, and the ad landing page if captured.
    const attr = getAdAttribution()
    const page = window.location.origin + window.location.pathname
    const parts = [
      `${size} sqft`,
      `Page: ${page}`,
      `Form: ${placement}`,
      `Source link: ${document.referrer || "direct"}`,
      attr.ads_landing_page ? `Landing page: ${attr.ads_landing_page}` : "",
      attr.utm_source ? `UTM: ${attr.utm_source} / ${attr.utm_medium ?? ""} / ${attr.utm_campaign ?? ""}` : "",
      attr.gclid_field ? "gclid: yes" : "",
    ].filter(Boolean)

    setStatus("sending")
    try {
      const res = await fetch("/api/insert-customer-details-dubai", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: v("name"),
          customer_email: v("email"),
          customer_contact1: `+971${mob}`,
          storage_type: "household",
          storage_size: parts.join("\n").replace(/[<>]/g, "").slice(0, 480),
        }),
      })
      if (!res.ok) return setStatus("error")
      ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "storage_quote_submit", form: `prices-${placement}` })
      setStatus("ok")
    } catch {
      setStatus("error")
    }
  }

  if (status === "ok") {
    return (
      <div className={c.card} role="status">
        <div className={c.done}>
          <CheckCircle2 aria-hidden="true" />
          <h2>Thank you!</h2>
          <p>Our team will call you shortly with your free itemised storage quote.</p>
          <a className={c.go} href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    )
  }

  return (
    <form className={c.card} onSubmit={onSubmit} noValidate>
      <p className={c.label}>Select Storage Size</p>
      <div className={c.sizes}>
        {SIZES.map((n) => (
          <button key={n} type="button" className={c.size} aria-pressed={size === n} onClick={() => setSize(n)}>
            <Box aria-hidden="true" />
            {n} sqft
          </button>
        ))}
      </div>
      <div className={c.fields}>
        <div>
          <input name="name" autoComplete="name" placeholder="Your name" aria-label="Your name" aria-invalid={!!errors.name} />
          {errors.name && <span className={c.err}>{errors.name}</span>}
        </div>
        <div>
          <input name="email" type="email" autoComplete="email" placeholder="E-mail" aria-label="E-mail" aria-invalid={!!errors.email} />
          {errors.email && <span className={c.err}>{errors.email}</span>}
        </div>
        <div>
          <div className={c.phone}>
            <span>+971</span>
            <input name="mobile" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="50 577 3388" aria-label="Mobile number" aria-invalid={!!errors.mobile} />
          </div>
          {errors.mobile && <span className={c.err}>{errors.mobile}</span>}
        </div>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className={c.hp} />
      </div>
      <button type="submit" className={c.go} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get Your Quote →"}
      </button>
      {status === "error" && <p className={c.err} role="alert" style={{ textAlign: "center", marginTop: 10 }}>Something went wrong — please call us or try again.</p>}
    </form>
  )
}
