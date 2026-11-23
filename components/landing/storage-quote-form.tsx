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

 * No partial lead is saved: a submitted quote goes straight into the customer + quotation
 * tables (no ss_leads row); a lead row is only written if the quotation could not be created.
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

/** Always record where the quote was requested: ads_landing_page = the ad landing page if there was one, else
 *  this page; the referrer (where the visitor came from) is appended so one column carries both. */
function withPageSource(a: Record<string, string>): Record<string, string> {
  const page = window.location.origin + window.location.pathname
  const ref = document.referrer || "direct"
  const landing = a.ads_landing_page || page
  return { ...a, ads_landing_page: `${landing} | from: ${ref}`.slice(0, 255) }
}

export default function StorageQuoteForm({ anchorId = "quote" }: { anchorId?: string } = {}) {
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

  // Pickup area: Google Places suggestions (UAE only). The script loads on first touch of the field so it
  // never costs page speed. The picked place also gives us coordinates for a distance-based transport price.
  const areaRef = useRef<HTMLInputElement>(null)
  const geo = useRef<{ ac: boolean; picked: boolean; saw: boolean; lat: number | null; lng: number | null }>({ ac: false, picked: false, saw: false, lat: null, lng: null })
  const mapsLoading = useRef(false)
  function loadPlaces() {
    if (mapsLoading.current) return
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!key) return
    mapsLoading.current = true
    const init = () => {
      try {
        const el = areaRef.current
        if (!el) return
        const ac = new google.maps.places.Autocomplete(el, {
          componentRestrictions: { country: "ae" },
          fields: ["formatted_address", "name", "geometry"],
        })
        geo.current.ac = true
        el.setAttribute("autocomplete", "off")
        // If Google rejects the key/referrer, drop the "pick a suggestion" rule: free text must still submit.
        ;(window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => {
          geo.current.ac = false
        }
        el.addEventListener("input", () => {
          geo.current.picked = false
          geo.current.lat = geo.current.lng = null
          // Only insist on a pick once Google has actually shown suggestions.
          window.setTimeout(() => {
            if (document.querySelector(".pac-container .pac-item")) geo.current.saw = true
          }, 600)
        })
        ac.addListener("place_changed", () => {
          const pl = ac.getPlace()
          const loc = pl?.geometry?.location
          if (loc && (pl.formatted_address || pl.name)) {
            el.value = pl.formatted_address || pl.name || ""
            geo.current.picked = true
            geo.current.lat = loc.lat()
            geo.current.lng = loc.lng()
            setErrors((prev) => ({ ...prev, area: undefined }))
          }
        })
      } catch {
        /* suggestions are an enhancement: free text still works if they fail */
      }
    }
    if (typeof google !== "undefined" && google.maps?.places) return init()
    ;(window as unknown as { __sqMapsInit?: () => void }).__sqMapsInit = init
    const sc = document.createElement("script")
    sc.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=__sqMapsInit`
    sc.async = true
    document.head.appendChild(sc)
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
    else if (geo.current.ac && geo.current.saw && !geo.current.picked) next.area = "Please select your address from the suggestions"
    if (!v("floor")) next.floor = "Select the floor"
    if (!v("lift")) next.lift = "Please choose"
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus("sending")
    // The server answers once the quotation exists and hands back a signed pass; /thank-you only opens with it.
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
          lat: geo.current.picked ? geo.current.lat : null,
          lng: geo.current.picked ? geo.current.lng : null,
          floor: v("floor"),
          lift: v("lift"),
          website: v("website"),
          attribution: withPageSource(getAdAttribution()),
          page: window.location.origin + window.location.pathname,
          referrer: document.referrer || "direct",
        }),
      })
      const j = (await res.json().catch(() => ({}))) as { status?: string; pass?: string; field?: Field; message?: string }
      ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "storage_quote_submit", form: "storage-quote" })
      if (j.status === "ok" && j.pass) {
        try {
          sessionStorage.setItem("ssl_name", v("name"))
        } catch {
          /* ignore */
        }
        window.location.href = `/thank-you?t=${encodeURIComponent(j.pass)}`
        return
      }
      // Saved, but no quotation/pass: confirm in place (the thank-you page is for created quotations only).
      if (j.status === "ok" || j.status === "saved") return setStatus("ok")
      if (j.field) setErrors({ [j.field]: j.message || "Please check this field" })
      setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  const shell = (children: React.ReactNode) => (
    <div className={q.formCol} id={anchorId}>
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
          <input id="sq-area" name="area" ref={areaRef} onFocus={loadPlaces} onPointerDown={loadPlaces} autoComplete="off" placeholder="Area or building, e.g. Dubai Marina" />
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
