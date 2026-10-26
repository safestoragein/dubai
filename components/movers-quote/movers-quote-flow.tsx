"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight, Minus, Plus, PhoneCall, MessageCircle, Search, Truck } from "lucide-react"
import { env } from "@/lib/env"
import AddressInput from "./address-input"
import {
  EMIRATES, EMPTY_QUOTE, EXTRAS, HOME_SIZES, ITEMS_URL, MOVE_TYPES, PACKING_LEVELS,
  parseCatalogue, priceMove, validateStep, type CatalogueItem, type MoversQuote,
} from "@/lib/movers-quote"

const STEPS = ["Your move", "Addresses", "Items", "Quote & book"]

// Shown before the customer searches (matched by name against the live item list).
const POPULAR = /^(bed|double|queen|king|single|wardrobe|sofa|couch|tv|television|fridge|refrigerator|washing|dining|table|chair|desk|mattress|cabinet|carton|box|bicycle|cycle|treadmill|oven|dishwasher)/i
const STORAGE_KEY = "movers-quote-draft-v1"

const field =
  "w-full rounded-lg border border-[#e1e4e9] bg-white px-3 py-2.5 text-base text-[#19212e] outline-none focus:border-[#ee5824] focus:ring-2 focus:ring-[#ee5824]/20"
const label = "mb-1 block text-sm font-semibold text-[#344050]"

function Err({ m }: { m?: string }) {
  return m ? <p role="alert" className="mt-1 text-sm text-[#d45f50]">{m}</p> : null
}

function Chip({ on, children, onClick }: { on: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
        on ? "border-[#ee5824] bg-[#fff0e9] text-[#d9481a]" : "border-[#e1e4e9] bg-white text-[#56606f] hover:border-[#ee5824]/50"
      }`}
    >
      {children}
    </button>
  )
}

function YesNo({ value, onChange }: { value: string; onChange: (v: "yes" | "no") => void }) {
  return (
    <div className="flex gap-2">
      <Chip on={value === "yes"} onClick={() => onChange("yes")}>Yes</Chip>
      <Chip on={value === "no"} onClick={() => onChange("no")}>No</Chip>
    </div>
  )
}

const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

export default function MoversQuoteFlow() {
  const [q, setQ] = useState<MoversQuote>(EMPTY_QUOTE)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [hp, setHp] = useState("") // honeypot
  const [busy, setBusy] = useState(false)
  const [serverError, setServerError] = useState("")
  const [reference, setReference] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [payment, setPayment] = useState<"" | "none" | "custom_quote" | "unavailable" | "paid">("")
  const [catalogue, setCatalogue] = useState<CatalogueItem[]>([])
  const [catalogueState, setCatalogueState] = useState<"loading" | "ready" | "error">("loading")
  const [search, setSearch] = useState("")
  const top = useRef<HTMLDivElement>(null)

  // Restore a saved draft (browser only). Never blocks the form if storage is unavailable.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const d = JSON.parse(raw) as { q?: MoversQuote; step?: number }
        if (d.q) setQ({ ...EMPTY_QUOTE, ...d.q })
        if (typeof d.step === "number" && d.step >= 0 && d.step < STEPS.length) setStep(d.step)
      }
    } catch {}
    setLoaded(true)
  }, [])

  // The same item list (and storage points) /get-quote prices from.
  useEffect(() => {
    fetch(ITEMS_URL)
      .then((r) => r.json())
      .then((d) => {
        const items = parseCatalogue(d).sort((a, b) => a.name.localeCompare(b.name))
        setCatalogue(items)
        setCatalogueState(items.length ? "ready" : "error")
      })
      .catch(() => setCatalogueState("error"))
  }, [])

  // Back from Stripe: ?paid=1 shows the confirmation (the signed webhook is what actually books it);
  // ?payment=cancelled returns to the quote with the draft intact.
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    if (sp.get("paid") === "1") {
      setReference(sp.get("ref") || "")
      setPayment("paid")
      try { localStorage.removeItem(STORAGE_KEY) } catch {}
    } else if (sp.get("payment") === "cancelled") {
      setServerError("Payment was cancelled. Your quote is saved. You can pay now or call us.")
      setStep(3)
    }
  }, [])

  useEffect(() => {
    if (!loaded || reference) return
    const t = setTimeout(() => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ q, step })) } catch {}
    }, 400)
    return () => clearTimeout(t)
  }, [q, step, loaded, reference])

  const set = <K extends keyof MoversQuote>(k: K, v: MoversQuote[K]) => {
    setQ((p) => ({ ...p, [k]: v }))
    if (errors[k as string]) setErrors((p) => { const n = { ...p }; delete n[k as string]; return n })
  }

  const go = (n: number) => {
    setStep(n)
    setServerError("")
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const next = () => {
    const e = validateStep(step, q)
    setErrors(e)
    if (Object.keys(e).length === 0) go(step + 1)
  }

  const setItem = (id: string, delta: number) => {
    const n = Math.max(0, Math.min(99, (q.items[id] || 0) + delta))
    const items = { ...q.items }
    if (n === 0) delete items[id]
    else items[id] = n
    set("items", items)
    if (n > 0 && q.itemsUnsure) set("itemsUnsure", false)
  }

  const itemCount = Object.values(q.items).reduce((a, b) => a + b, 0)
  const pricing = priceMove(q.itemsUnsure ? {} : q.items, catalogue, q.fromEmirate, q.fromLat, q.fromLng)
  // Payment is offered only when there is a priced, in-area load (the server decides whether Stripe is on).
  const canPay = !q.itemsUnsure && pricing.pallets > 0 && !pricing.outOfRange && pricing.transport.totalAed > 0

  async function submit() {
    // Re-check every step so a stale draft can't slip through.
    for (const s of [0, 1, 2]) {
      const e = validateStep(s, q)
      if (Object.keys(e).length) { setErrors(e); go(s); return }
    }
    setBusy(true)
    setServerError("")
    try {
      const res = await fetch("/api/movers-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...q, website: hp }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.status === "success") {
        // Priced, in-area load -> hand off to Stripe. The signed webhook books it; this redirect is not proof.
        if (data.payment === "checkout" && data.url) {
          window.location.href = data.url
          return
        }
        setPayment(data.payment || "none")
        setReference(data.reference || "")
        try { localStorage.removeItem(STORAGE_KEY) } catch {}
        top.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors)
        go(0)
      } else {
        setServerError(data.message || "Something went wrong. Please try again or call us.")
      }
    } catch {
      setServerError("We could not reach the server. Please check your connection or call us.")
    } finally {
      setBusy(false)
    }
  }

  // Earliest move date is two days out (as on /get-quote). Built from local parts: toISOString() is UTC
  // and would shift the date back a day for anyone booking in the Dubai evening.
  const today = (() => {
    const d = new Date()
    d.setDate(d.getDate() + 2)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
  })()
  const labelOf = (list: readonly { id: string; label: string }[], id: string) => list.find((x) => x.id === id)?.label || id

  if (reference) {
    return (
      <div ref={top} className="mx-auto max-w-2xl px-4 py-14 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#14a44d]" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold text-[#19212e]">{payment === "paid" ? "Payment received. Thank you!" : `Thanks ${q.name.split(" ")[0]}, we have your request`}</h2>
        <p className="mt-2 text-[#56606f]">
          {reference && <>Reference <b>{reference}</b>. </>}
          {payment === "paid"
            ? "Your transport payment is confirmed. Our team will call you to confirm the details of your move."
            : payment === "custom_quote"
              ? "Your pickup is outside our standard area, so our team will price the transport and call you. No payment was taken."
              : payment === "unavailable"
                ? "Online payment is not available right now. Our team will call you to confirm the details and take payment."
                : "Our team will call you to confirm the details and send a written, itemised quote."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={env.PHONE_LINK} className="inline-flex items-center gap-2 rounded-lg bg-[#ee5824] px-5 py-3 font-semibold text-white">
            <PhoneCall className="h-5 w-5" aria-hidden="true" /> Call now
          </a>
          <a href={env.WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-lg border border-[#e1e4e9] px-5 py-3 font-semibold text-[#19212e]">
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp us
          </a>
        </div>
      </div>
    )
  }

  return (
    <div ref={top} className="mx-auto max-w-3xl scroll-mt-4 px-4 py-8 md:py-12" style={{ fontFamily: "var(--font-manrope)" }}>
      {/* progress */}
      <ol className="mb-8 grid grid-cols-4 gap-2" aria-label="Progress">
        {STEPS.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined}>
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-[#ee5824]" : "bg-[#e6e9ed]"}`} />
            <p className={`mt-2 hidden text-xs font-semibold sm:block ${i === step ? "text-[#19212e]" : "text-[#8b93a0]"}`}>
              {i + 1}. {s}
            </p>
          </li>
        ))}
      </ol>
      <p className="mb-4 text-sm font-semibold text-[#8b93a0] sm:hidden">Step {step + 1} of 4 · {STEPS[step]}</p>

      <div className="rounded-2xl border border-[#e6e9ed] bg-white p-5 shadow-sm md:p-8">
        {step === 0 && (
          <div className="grid gap-5">
            <h2 className="text-xl font-bold text-[#19212e]" style={{ fontFamily: "var(--font-sora)" }}>Tell us about your move</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className={label} htmlFor="mv-name">Full name</label>
                <input id="mv-name" autoComplete="name" className={field} value={q.name} onChange={(e) => set("name", e.target.value)} /><Err m={errors.name} /></div>
              <div><label className={label} htmlFor="mv-phone">Phone / WhatsApp</label>
                <input id="mv-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+971 50 000 0000" className={field} value={q.phone} onChange={(e) => set("phone", e.target.value)} /><Err m={errors.phone} /></div>
            </div>
            <div><label className={label} htmlFor="mv-email">Email</label>
              <input id="mv-email" type="email" autoComplete="email" className={field} value={q.email} onChange={(e) => set("email", e.target.value)} /><Err m={errors.email} /></div>
            <div><span className={label}>What are you moving?</span>
              <div className="flex flex-wrap gap-2">{MOVE_TYPES.map((m) => <Chip key={m.id} on={q.moveType === m.id} onClick={() => set("moveType", m.id)}>{m.label}</Chip>)}</div>
              <Err m={errors.moveType} /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className={label} htmlFor="mv-size">Size</label>
                <select id="mv-size" className={field} value={q.homeSize} onChange={(e) => set("homeSize", e.target.value)}>
                  <option value="">Select size</option>{HOME_SIZES.map((h) => <option key={h}>{h}</option>)}
                </select><Err m={errors.homeSize} /></div>
              <div><label className={label} htmlFor="mv-date">Moving date</label>
                <input id="mv-date" type="date" min={today} className={field} value={q.moveDate} onChange={(e) => set("moveDate", e.target.value)} /><Err m={errors.moveDate} /></div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-6">
            <h2 className="text-xl font-bold text-[#19212e]" style={{ fontFamily: "var(--font-sora)" }}>Where are you moving?</h2>
            {([["from", "Pickup (moving from)"], ["to", "Drop-off (moving to)"]] as const).map(([p, title]) => (
              <fieldset key={p} className="grid gap-4 rounded-xl border border-[#e6e9ed] p-4">
                <legend className="px-2 text-sm font-bold text-[#ee5824]">{title}</legend>
                <div><label className={label} htmlFor={`mv-${p}-addr`}>Address / building / area</label>
                  <AddressInput id={`mv-${p}-addr`} placeholder="Start typing — building, area or street" className={field} value={q[`${p}Address`]}
                    onChange={(v, geo) => {
                      set(`${p}Address`, v)
                      // Coordinates only come from a picked suggestion; typing by hand clears them.
                      if (p === "from") setQ((x) => ({ ...x, fromLat: geo?.lat ?? null, fromLng: geo?.lng ?? null }))
                    }} />
                  <Err m={errors[`${p}Address`]} /></div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div><label className={label} htmlFor={`mv-${p}-em`}>Emirate</label>
                    <select id={`mv-${p}-em`} className={field} value={q[`${p}Emirate`]} onChange={(e) => set(`${p}Emirate`, e.target.value)}>
                      {EMIRATES.map((x) => <option key={x}>{x}</option>)}</select></div>
                  <div><label className={label} htmlFor={`mv-${p}-fl`}>Floor</label>
                    <input id={`mv-${p}-fl`} inputMode="numeric" placeholder="e.g. 12 or Ground" className={field} value={q[`${p}Floor`]} onChange={(e) => set(`${p}Floor`, e.target.value)} /></div>
                  <div><span className={label}>Lift available?</span>
                    <YesNo value={q[`${p}Lift`]} onChange={(v) => set(`${p}Lift`, v)} /><Err m={errors[`${p}Lift`]} /></div>
                </div>
              </fieldset>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-5">
            <div>
              <h2 className="text-xl font-bold text-[#19212e]" style={{ fontFamily: "var(--font-sora)" }}>What are we moving?</h2>
              <p className="mt-1 text-sm text-[#56606f]">Search and add your items. This sizes the load and the transport price. Rough numbers are fine.</p>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b93a0]" aria-hidden="true" />
              <input aria-label="Search items" placeholder="Search items, e.g. sofa, fridge, bed" className={`${field} pl-9`} value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {catalogueState === "loading" && <p className="text-sm text-[#8b93a0]">Loading items…</p>}
            {catalogueState === "error" && (
              <p role="alert" className="rounded-lg bg-[#fff0ee] p-3 text-sm text-[#d45f50]">
                We could not load the item list. Tick “I’m not sure” below and our team will survey, or call us.
              </p>
            )}
            {catalogueState === "ready" && (() => {
              const term = search.trim().toLowerCase()
              const shown = term
                ? catalogue.filter((c) => c.name.toLowerCase().includes(term)).slice(0, 40)
                : catalogue.filter((c) => POPULAR.test(c.name)).slice(0, 24)
              return (
                <div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#8b93a0]">{term ? "Results" : "Popular items"}</h3>
                  {shown.length === 0 ? <p className="text-sm text-[#56606f]">No items match “{search}”.</p> : (
                    <div className="grid gap-2 sm:grid-cols-2">
                      {shown.map((it) => {
                        const n = q.items[it.name] || 0
                        return (
                          <div key={it.name} className={`flex items-center justify-between rounded-lg border px-3 py-2 ${n ? "border-[#ee5824]/50 bg-[#fff8f4]" : "border-[#e6e9ed]"}`}>
                            <span className="pr-2 text-sm font-medium text-[#344050]">{it.name}</span>
                            <span className="flex flex-none items-center gap-2">
                              <button type="button" aria-label={`Remove one ${it.name}`} disabled={!n} onClick={() => setItem(it.name, -1)} className="grid h-8 w-8 place-items-center rounded-full border border-[#e1e4e9] disabled:opacity-40"><Minus className="h-4 w-4" /></button>
                              <b className="w-6 text-center tabular-nums">{n}</b>
                              <button type="button" aria-label={`Add one ${it.name}`} onClick={() => setItem(it.name, 1)} className="grid h-8 w-8 place-items-center rounded-full bg-[#ee5824] text-white"><Plus className="h-4 w-4" /></button>
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })()}
            {itemCount > 0 && (
              <div className="rounded-xl bg-[#f5f6f8] p-4">
                <h3 className="mb-2 text-sm font-bold text-[#19212e]">Your list ({itemCount} item{itemCount === 1 ? "" : "s"})</h3>
                <ul className="grid gap-1 text-sm text-[#344050] sm:grid-cols-2">
                  {Object.entries(q.items).map(([name, n]) => (
                    <li key={name} className="flex justify-between gap-2"><span>{name}</span><b>× {n}</b></li>
                  ))}
                </ul>
              </div>
            )}
            <label className="flex items-center gap-2 text-sm text-[#56606f]">
              <input type="checkbox" checked={q.itemsUnsure} onChange={(e) => { set("itemsUnsure", e.target.checked); if (e.target.checked) set("items", {}) }} />
              I’m not sure. The team will survey or call me. (No online payment.)
            </label>
            <Err m={errors.items} />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6">
            <h2 className="text-xl font-bold text-[#19212e]" style={{ fontFamily: "var(--font-sora)" }}>Packing, extras and review</h2>
            <div><span className={label}>How much packing?</span>
              <div className="grid gap-2 sm:grid-cols-3">
                {PACKING_LEVELS.map((p) => (
                  <button key={p.id} type="button" aria-pressed={q.packing === p.id} onClick={() => set("packing", p.id)}
                    className={`rounded-lg border p-3 text-left ${q.packing === p.id ? "border-[#ee5824] bg-[#fff0e9]" : "border-[#e1e4e9]"}`}>
                    <b className="block text-sm text-[#19212e]">{p.label}</b><span className="text-xs text-[#56606f]">{p.note}</span>
                  </button>
                ))}
              </div></div>
            <div><span className={label}>Extras (optional)</span>
              <div className="flex flex-wrap gap-2">{EXTRAS.map((x) => <Chip key={x.id} on={q.extras.includes(x.id)} onClick={() => set("extras", toggle(q.extras, x.id))}>{x.label}</Chip>)}</div></div>
            <div><label className={label} htmlFor="mv-notes">Anything else we should know?</label>
              <textarea id="mv-notes" rows={3} maxLength={1000} className={field} value={q.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Parking restrictions, building move-in hours, fragile items…" /></div>

            {/* Transport quote — same tiers, estimate range and 60 km rule as /get-quote */}
            <div className="rounded-xl border border-[#e6e9ed] bg-[#f5f6f8] p-4 text-sm text-[#344050]">
              <h3 className="mb-2 font-bold text-[#19212e]">Your request</h3>
              <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-[auto_1fr]">
                <dt className="font-semibold">Contact</dt><dd>{q.name} · {q.phone} · {q.email}</dd>
                <dt className="font-semibold">Move</dt><dd>{labelOf(MOVE_TYPES, q.moveType)} · {q.homeSize} · {q.moveDate}</dd>
                <dt className="font-semibold">From</dt><dd>{q.fromAddress}, {q.fromEmirate}{q.fromFloor ? ` · floor ${q.fromFloor}` : ""} · lift {q.fromLift}</dd>
                <dt className="font-semibold">To</dt><dd>{q.toAddress}, {q.toEmirate}{q.toFloor ? ` · floor ${q.toFloor}` : ""} · lift {q.toLift}</dd>
                <dt className="font-semibold">Items</dt><dd>{q.itemsUnsure ? "Not sure — survey needed" : `${itemCount} items · ${pricing.pallets} pallet${pricing.pallets === 1 ? "" : "s"}`}</dd>
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e6e9ed]">
              <div className="flex items-center gap-3 bg-[#19212e] px-4 py-3 text-white">
                <Truck className="h-5 w-5 text-[#ffac88]" aria-hidden="true" />
                <div><b className="block text-sm">Door-to-door transport</b><span className="text-xs text-white/70">Collection from your address</span></div>
              </div>
              <div className="p-4 text-center">
                {pricing.outOfRange ? (
                  <p className="font-semibold text-[#19212e]">Our team will get back to you regarding a customised quote</p>
                ) : q.itemsUnsure || pricing.pallets === 0 ? (
                  <p className="font-semibold text-[#19212e]">Our team will survey your items and send a quote</p>
                ) : (
                  <>
                    <p className="text-3xl font-bold text-[#19212e]">
                      {pricing.range.lowAed !== pricing.range.highAed
                        ? <>AED {pricing.range.lowAed.toLocaleString()} <span className="font-normal text-[#8b93a0]">–</span> {pricing.range.highAed.toLocaleString()}</>
                        : <>AED {pricing.transport.totalAed.toLocaleString()}</>}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#8b93a0]">One-time · estimated</p>
                  </>
                )}
                <p className="mt-2 text-xs text-[#56606f]">
                  {pricing.outOfRange
                    ? "Your pickup address is outside our standard area, so no payment is taken now."
                    : "Our team will confirm the exact transport price based on your actual list of items."}
                </p>
              </div>
              {canPay && (
                <div className="flex items-center justify-between border-t border-[#e6e9ed] bg-[#f5f6f8] px-4 py-3">
                  <span className="font-semibold text-[#19212e]">Pay now</span>
                  <span className="text-lg font-bold text-[#ee5824]">AED {pricing.transport.totalAed.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* honeypot — hidden from people, bots fill it */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <label>Website<input tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} /></label>
            </div>
            {serverError && <p role="alert" className="rounded-lg bg-[#fff0ee] p-3 text-sm text-[#d45f50]">{serverError} <a className="font-semibold underline" href={env.PHONE_LINK}>Call us</a></p>}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button type="button" onClick={() => go(step - 1)} className="inline-flex items-center gap-1 rounded-lg border border-[#e1e4e9] px-4 py-3 font-semibold text-[#56606f]">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
            </button>
          ) : <span />}
          {step < 3 ? (
            <button type="button" onClick={next} className="inline-flex items-center gap-1 rounded-lg bg-[#ee5824] px-6 py-3 font-semibold text-white hover:bg-[#d9481a]">
              Continue <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <button type="button" onClick={submit} disabled={busy} className="rounded-lg bg-[#ee5824] px-6 py-3 font-semibold text-white hover:bg-[#d9481a] disabled:opacity-60">
              {busy ? "Please wait…" : canPay ? `Pay AED ${pricing.transport.totalAed.toLocaleString()} & book` : "Send my request"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
