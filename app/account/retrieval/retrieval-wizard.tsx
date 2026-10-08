"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, PackageCheck, PackageOpen, Truck, Boxes } from "lucide-react"
import { loadGoogleMapsScript } from "@/lib/google-maps-loader"
import c from "../account.module.css"

type Item = { id: number; quotation: string; barcode: string; name: string; type: string; qty: number }
type Opt = { slug: string; name: string }
export type Options = {
  rules: { min_date: string; max_date: string; blocked_days: number[]; booked_dates: string[] }
  items: Item[]
  max_partial: number
  open_orders: { ref: string; type: string; status: string; date: string }[]
  floors: Opt[]
  timeslots: Opt[]
  defaults: { address: string; lat: string | null; lng: string | null; floor: string; lift: string; phone: string }
}
type Estimate = {
  type: string; items: number; team_quote: boolean; out_of_area: boolean; distance_km: number | null
  points: number; pallets: number; tier: string
  transport_base: number; transport_surcharge: number; transport_total: number
  monthly_amount: number; storage_till_date: number; storage_from: string; storage_to: string
  unpaid_dues: number; wallet: number; storage_due: number; storage_return: number
  final_payable_amt: number; final_return_amt: number
  plan: { mode: "pay" | "request"; why: string; unpaid_dues: number; storage: number; transport: number; bills_total: number; wallet_used: number; amount_due_now: number }
}
type Kind = "partial" | "full" | "intercity"

const aed = (n: number) => `AED ${n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const label = (v: string) => (v ? v.replace(/_/g, " ").replace(/^\w/, (ch) => ch.toUpperCase()) : "")
const TYPES: { key: Kind; title: string; text: string; icon: typeof Boxes; tone: string }[] = [
  { key: "partial", title: "Partial Retrieval", text: "Get some of your items back. Choose up to half of what is stored.", icon: PackageOpen, tone: "toneOrange" },
  { key: "full", title: "Full Retrieval", text: "Get everything back and close your storage.", icon: PackageCheck, tone: "toneNavy" },
  { key: "intercity", title: "Intercity Full Retrieval", text: "Get everything delivered to another city. Our team quotes the price.", icon: Truck, tone: "toneBlue" },
]

// d/m/Y from an <input type="date"> value (yyyy-mm-dd)
const toDMY = (iso: string) => (iso ? iso.split("-").reverse().join("/") : "")
const tomorrowISO = () => { const d = new Date(Date.now() + 86400000); return d.toISOString().slice(0, 10) }

// Calendar with the Indian dashboard's rules: nothing before min, nothing after max, and some days of the month blocked.
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
function RtCalendar({ value, onChange, min, max, blocked, booked }: { value: string; onChange: (v: string) => void; min: string; max: string; blocked: number[]; booked: string[] }) {
  const [open, setOpen] = useState(false)
  const start = value ? new Date(value + "T00:00:00") : new Date(min + "T00:00:00")
  const [view, setView] = useState(new Date(start.getFullYear(), start.getMonth(), 1))
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener("mousedown", h)
    return () => document.removeEventListener("mousedown", h)
  }, [])
  const first = new Date(view.getFullYear(), view.getMonth(), 1)
  const lead = (first.getDay() + 6) % 7                               // Monday first
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
  const cells: (Date | null)[] = [...Array(lead).fill(null), ...Array.from({ length: days }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))]
  const inWindow = (d: Date) => iso(d) >= min && iso(d) <= max && !blocked.includes(d.getDate())
  const isBooked = (d: Date) => inWindow(d) && booked.includes(iso(d))
  const ok = (d: Date) => inWindow(d) && !booked.includes(iso(d))
  const canPrev = iso(new Date(view.getFullYear(), view.getMonth(), 0)) >= min
  const canNext = iso(new Date(view.getFullYear(), view.getMonth() + 1, 1)) <= max
  return (
    <div className={c.cal} ref={ref}>
      <button type="button" className={c.calBtn} onClick={() => setOpen(!open)}>
        <span>{value ? toDMY(value) : "dd/mm/yyyy"}</span><CalendarDays aria-hidden="true" />
      </button>
      {open && (
        <div className={c.calPop} role="dialog" aria-label="Choose a date">
          <div className={c.calHead}>
            <button type="button" disabled={!canPrev} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))} aria-label="Previous month"><ArrowLeft aria-hidden="true" /></button>
            <b>{view.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</b>
            <button type="button" disabled={!canNext} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))} aria-label="Next month"><ArrowRight aria-hidden="true" /></button>
          </div>
          <div className={c.calGrid}>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((w) => <span key={w} className={c.calDow}>{w}</span>)}
            {cells.map((d, i) => d ? (
              <button key={i} type="button" disabled={!ok(d)} title={isBooked(d) ? "Booked" : ok(d) ? "Available" : undefined}
                className={`${c.calDay} ${isBooked(d) ? c.calDayBooked : ok(d) ? c.calDayFree : ""} ${iso(d) === value ? c.calDayOn : ""}`}
                onClick={() => { onChange(iso(d)); setOpen(false) }}>{d.getDate()}</button>
            ) : <span key={i} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default function RetrievalWizard({ opts, name }: { opts: Options; name: string }) {
  const [type, setType] = useState<Kind | null>(null)
  const [step, setStep] = useState<1 | 2>(1)
  const [picked, setPicked] = useState<number[]>([])
  const [date, setDate] = useState("")
  const [address, setAddress] = useState(opts.defaults.address || "")
  const [lat, setLat] = useState(opts.defaults.lat || "")
  const [lng, setLng] = useState(opts.defaults.lng || "")
  const [floor, setFloor] = useState(opts.defaults.floor || "")
  const [lift, setLift] = useState(opts.defaults.lift?.toLowerCase() === "no" ? "no" : opts.defaults.lift ? "yes" : "")
  const [phone, setPhone] = useState(opts.defaults.phone || "")
  const [note, setNote] = useState("")
  const [est, setEst] = useState<Estimate | null>(null)
  const [estErr, setEstErr] = useState("")
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState("")
  const [done, setDone] = useState<string | null>(null)
  const addrRef = useRef<HTMLInputElement>(null)

  // Google address suggestions → text + coordinates (the price depends on the location)
  useEffect(() => {
    let off = false
    loadGoogleMapsScript().then(() => {
      if (off || !addrRef.current || !window.google?.maps?.places) return
      const ac = new window.google.maps.places.Autocomplete(addrRef.current, {
        fields: ["formatted_address", "geometry"],
        ...(type === "intercity" ? {} : { componentRestrictions: { country: "ae" } }),
      })
      ac.addListener("place_changed", () => {
        const p = ac.getPlace()
        if (p?.geometry?.location) {
          setAddress(p.formatted_address || addrRef.current?.value || "")
          setLat(String(p.geometry.location.lat()))
          setLng(String(p.geometry.location.lng()))
        }
      })
    }).catch(() => {})
    return () => { off = true }
  }, [type])

  // A saved address has no coordinates yet: look it up ourselves so the charges can be worked out
  // without the customer having to re-pick the address from the suggestions.
  useEffect(() => {
    if (step !== 2 || !address || lat) return
    let off = false
    const t = setTimeout(async () => {
      try {
        await loadGoogleMapsScript()
        if (off || !window.google?.maps) return
        new window.google.maps.Geocoder().geocode({ address, region: "ae" }, (res, status) => {
          if (off || status !== "OK" || !res?.[0]?.geometry?.location) return
          setLat(String(res[0].geometry.location.lat()))
          setLng(String(res[0].geometry.location.lng()))
        })
      } catch { /* the hint below tells the customer to pick a suggestion */ }
    }, 600)
    return () => { off = true; clearTimeout(t) }
  }, [step, address, lat])

  const itemsForType = type === "partial" ? picked : opts.items.map((i) => i.id)
  const ready = !!type && !!date && !!address && !!floor && !!lift && (type === "intercity" || (lat && lng)) && itemsForType.length > 0

  // live estimate
  useEffect(() => {
    setEst(null); setEstErr("")
    if (!ready || !type) return
    const t = setTimeout(async () => {
      try {
        const res = await fetch("/api/customer/retrieval/estimate", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, date: toDMY(date), lat, lng, floor, lift, inventory_id: type === "partial" ? picked : [] }),
        })
        const d = await res.json().catch(() => ({}))
        if (res.ok && d.estimate) setEst(d.estimate as Estimate); else setEstErr(d.error || "Could not work out the charge.")
      } catch { setEstErr("Could not reach the server.") }
    }, 450)
    return () => clearTimeout(t)
  }, [ready, type, date, lat, lng, floor, lift, picked])

  async function submit() {
    setBusy(true); setErr("")
    const payload = { type, date: toDMY(date), lat, lng, floor, lift, address, phone, note, inventory_id: type === "partial" ? picked : [] }
    try {
      // 1. is there something to pay online? (this also holds the date for 30 minutes)
      if (est?.plan.mode === "pay") {
        const res = await fetch("/api/customer/retrieval/pay", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
        const d = await res.json().catch(() => ({}))
        if (res.ok && d.mode === "pay" && d.url) { window.location.href = d.url; return }
        if (!(res.ok && d.mode === "request")) { setErr(d.error || "Could not start the payment. Please try again."); setBusy(false); return }
      }
      // 2. nothing to pay online here: send the request to our team
      const res = await fetch("/api/customer/retrieval/create", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      const d = await res.json().catch(() => ({}))
      if (res.ok && d.ref) { setDone(d.ref); window.scrollTo({ top: 0, behavior: "smooth" }) } else setErr(d.error || "Could not send your request. Please try again.")
    } catch { setErr("Could not reach the server. Please check your connection.") }
    setBusy(false)
  }

  if (done) {
    return (
      <section className={`${c.panel} ${c.retrDone}`}>
        <span className={c.emptyOkIcon}><Check aria-hidden="true" /></span>
        <h2 className={c.panelTitle}>Request received, {name.split(" ")[0]}</h2>
        <p className={c.panelSub} style={{ maxWidth: 520 }}>
          Your {TYPES.find((t) => t.key === type)?.title.toLowerCase()} request <b>{done}</b> for {toDMY(date)} is with our team. They will confirm the date and the final charge with you shortly. You can follow it under Orders.
        </p>
        <div className={c.actions} style={{ justifyContent: "center", marginTop: 8 }}>
          <a className={`${c.button} ${c.buttonOrange}`} href="/account/orders">View my orders</a>
        </div>
      </section>
    )
  }

  const noItems = opts.items.length === 0
  const blocked = opts.open_orders.length > 0
  const cur = TYPES.find((t) => t.key === type)
  const floorName = opts.floors.find((x) => x.slug === floor)?.name

  return (
    <div className={c.rt}>
      {blocked && (
        <div className={c.notice} style={{ margin: "0 0 20px" }}>
          You already have an open retrieval request: {opts.open_orders.map((o) => `${o.ref} (${label(o.status)})`).join(", ")}. Please wait for our team, or call us to change it.
        </div>
      )}

      {/* 1 — what kind of retrieval */}
      <div className={c.rtTypes} role="radiogroup" aria-label="Retrieval type">
        {TYPES.map((t) => {
          const Icon = t.icon
          const disabled = noItems || blocked || (t.key === "partial" && opts.max_partial < 1)
          const on = type === t.key
          return (
            <button key={t.key} type="button" role="radio" aria-checked={on} disabled={disabled}
              className={`${c.rtType} ${c[t.tone]} ${on ? c.rtTypeOn : ""}`}
              onClick={() => { setType(t.key); setPicked([]); setErr(""); setStep(1) }}>
              <span className={c.rtIcon}><Icon aria-hidden="true" /></span>
              <span className={c.rtTypeText}>
                <b>{t.title}</b>
                <small>{t.key === "partial" && opts.max_partial < 1 && !noItems ? "Needs at least 2 stored items" : t.text}</small>
              </span>
            </button>
          )
        })}
      </div>

      {noItems && <p className={c.empty}>You have no stored items to retrieve.</p>}

      {!type && !noItems && !blocked && (
        <div className={c.rtHint}>Choose a retrieval type above to start.</div>
      )}

      {/* 2 — the two-step request card */}
      {type && cur && !blocked && (
        <section className={`${c.rtCard} ${c[cur.tone]}`}>
          <header className={c.rtHead}>
            <div className={c.rtHeadTitle}>
              <span className={c.rtIconSm}><cur.icon aria-hidden="true" /></span>
              <div><h2>{cur.title}</h2><p>{itemsForType.length} {itemsForType.length === 1 ? "item" : "items"} selected</p></div>
            </div>
            <ol className={c.rtSteps} aria-label="Steps">
              <li className={`${c.rtStep} ${step === 1 ? c.rtStepNow : c.rtStepDone}`}><span>{step === 2 ? <Check aria-hidden="true" /> : 1}</span>Items</li>
              <li className={c.rtStepLine} aria-hidden="true" />
              <li className={`${c.rtStep} ${step === 2 ? c.rtStepNow : ""}`}><span>2</span>Delivery</li>
            </ol>
          </header>

          {step === 1 ? (
            <div className={c.rtBody}>
              <div className={c.rtBodyHead}>
                <div>
                  <h3>{type === "partial" ? "Choose your items" : "Items to retrieve"}</h3>
                  <p>{type === "partial" ? `Select up to ${opts.max_partial} of your ${opts.items.length} items.` : `All ${opts.items.length} stored items will be delivered.`}</p>
                </div>
                {type === "partial" && <span className={c.rtCounter}>{picked.length} / {opts.max_partial}</span>}
              </div>
              <ul className={c.rtItems}>
                {opts.items.map((i) => {
                  const on = type !== "partial" || picked.includes(i.id)
                  const canAdd = picked.length < opts.max_partial
                  return (
                    <li key={i.id}>
                      <label className={`${c.rtItem} ${on ? c.rtItemOn : ""}`}>
                        {type === "partial" ? (
                          <input type="checkbox" checked={picked.includes(i.id)} disabled={!picked.includes(i.id) && !canAdd}
                            onChange={(e) => setPicked(e.target.checked ? [...picked, i.id] : picked.filter((x) => x !== i.id))} />
                        ) : <span className={c.rtItemTick}><Check aria-hidden="true" /></span>}
                        <span className={c.rtItemName}>{i.name}<small>{i.barcode} · {label(i.type)}</small></span>
                        <span className={c.rtItemQty}>×{i.qty}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
              <footer className={c.rtFoot}>
                <span className={c.rtFootNote}>{type === "partial" ? "You can change your selection later in the next step." : "Everything stored will be returned and your storage closed."}</span>
                <button type="button" className={c.rtPrimary} disabled={itemsForType.length === 0}
                  onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                  Continue <ArrowRight aria-hidden="true" />
                </button>
              </footer>
            </div>
          ) : (
            <div className={c.rtBody}>
              <div className={c.rtCols}>
                <div className={c.rtForm}>
                  <h3>Delivery details</h3>
                  <p className={c.rtFormSub}>Where and when should we bring your items?</p>
                  <div className={c.formGrid}>
                    <div className={c.fLabel}><span><CalendarDays aria-hidden="true" /> Date</span>
                      <RtCalendar value={date} onChange={(v) => setDate(v)} min={opts.rules.min_date} max={opts.rules.max_date} blocked={opts.rules.blocked_days} booked={opts.rules.booked_dates} /></div>
                    <label className={`${c.fLabel} ${c.fWide}`}><span><MapPin aria-hidden="true" /> Delivery address</span>
                      <input ref={addrRef} type="text" value={address} placeholder="Start typing and pick your address"
                        onChange={(e) => { setAddress(e.target.value); setLat(""); setLng("") }} />
                      {type !== "intercity" && address && !lat && <em className={c.fHint}>Pick your address from the suggestions so we can price the delivery.</em>}
                    </label>
                    <label className={c.fLabel}><span>Floor</span>
                      <select value={floor} onChange={(e) => setFloor(e.target.value)}>
                        <option value="">Choose floor</option>
                        {opts.floors.map((f) => <option key={f.slug} value={f.slug}>{f.name}</option>)}
                      </select></label>
                    <label className={c.fLabel}><span>Lift available?</span>
                      <select value={lift} onChange={(e) => setLift(e.target.value)}>
                        <option value="">Choose</option><option value="yes">Yes</option><option value="no">No</option>
                      </select></label>
                    <label className={c.fLabel}><span>Phone</span>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
                    <label className={`${c.fLabel} ${c.fWide}`}><span>Note for our team (optional)</span>
                      <textarea rows={2} maxLength={500} value={note} onChange={(e) => setNote(e.target.value)} /></label>
                  </div>
                </div>

                <aside className={c.rtSummary}>
                  <h3>Summary</h3>
                  <ul className={c.rtRecap}>
                    <li><span>Type</span><b>{cur.title}</b></li>
                    <li><span>Items</span><b>{itemsForType.length}</b></li>
                    <li><span>Date</span><b>{date ? toDMY(date) : "—"}</b></li>
                    <li><span>Floor / lift</span><b>{floorName ? `${floorName} · ${lift === "yes" ? "lift" : lift === "no" ? "no lift" : "—"}` : "—"}</b></li>
                  </ul>

                  <div className={c.rtCharge}>
                    {!ready ? (
                      <p className={c.rtMuted}>Fill in the date, address, floor and lift to see the charges.</p>
                    ) : estErr ? (
                      <p style={{ color: "#d45f50", margin: 0, fontSize: 13 }}>{estErr}</p>
                    ) : !est ? (
                      <p className={c.rtMuted}>Working out the charges…</p>
                    ) : (
                      <>
                        <p className={c.rtChargeTitle}>Storage charges</p>
                        <ul className={c.estList}>
                          <li><span>Monthly storage</span><b>{aed(est.monthly_amount)}</b></li>
                          {est.plan.unpaid_dues > 0 && <li><span>Bills already due</span><b>{aed(est.plan.unpaid_dues)}</b></li>}
                          <li><span>Storage till {est.storage_to || "the retrieval date"}</span><b>{aed(est.plan.storage)}</b></li>
                          {est.storage_return > 0 && <li><span>Prepaid storage coming back</span><b>{aed(est.storage_return)}</b></li>}
                        </ul>

                        <p className={c.rtChargeTitle} style={{ marginTop: 16 }}>Transport charges</p>
                        {est.team_quote ? (
                          <p className={c.rtMuted}>{type === "intercity" ? "Our team will quote the intercity delivery price and confirm it with you." : `This address is ${est.distance_km} km away, outside our 60 km delivery area. Our team will quote the transport price.`}</p>
                        ) : (
                          <ul className={c.estList}>
                            <li><span>{est.pallets} {est.pallets === 1 ? "pallet" : "pallets"} · {est.tier}</span><b>{aed(est.transport_base)}</b></li>
                            <li><span>Handling</span><b>{aed(est.transport_surcharge)}</b></li>
                            <li className={c.estSub}><span>Transport total</span><b>{aed(est.transport_total)}</b></li>
                          </ul>
                        )}

                        <ul className={c.estList} style={{ marginTop: 14 }}>
                          <li className={c.estSub}><span>Total charges</span><b>{aed(est.plan.bills_total)}</b></li>
                          {est.plan.wallet_used > 0 && <li><span>Wallet credit used</span><b>− {aed(est.plan.wallet_used)}</b></li>}
                          <li className={c.estTotal}>
                            <span>{est.plan.mode === "pay" ? "To pay now" : est.final_return_amt > 0 ? "Refund to you" : "Estimated total"}</span>
                            <b>{aed(est.plan.mode === "pay" ? est.plan.amount_due_now : est.final_return_amt > 0 ? est.final_return_amt : est.plan.amount_due_now)}</b>
                          </li>
                        </ul>
                        <p className={c.rtMuted} style={{ marginTop: 8 }}>
                          {est.plan.mode === "pay" ? "You pay by card, then your request goes to our team, who confirm the delivery time." : (est.plan.why || "") + " "}
                          Final amounts are confirmed by our team.
                        </p>
                      </>
                    )}
                  </div>

                  {err && <div className={c.notice} style={{ margin: "12px 0 0" }}>{err}</div>}
                  <button type="button" className={c.rtPrimary} style={{ width: "100%", justifyContent: "center", marginTop: 14 }}
                    disabled={busy || !ready || !phone || !address || (type !== "intercity" && !est)} onClick={submit}>
                    {busy ? "Please wait…" : est?.plan.mode === "pay" ? `Pay ${aed(est.plan.amount_due_now)} & request` : "Request retrieval"}
                  </button>
                  <p className={c.rtMuted} style={{ textAlign: "center", margin: "8px 0 0" }}>{est?.plan.mode === "pay" ? "Secure card payment. Our team will confirm the delivery time with you." : "No payment is taken now. Our team will confirm the delivery time with you."}</p>
                </aside>
              </div>
              <footer className={c.rtFoot}>
                <button type="button" className={c.rtGhost} onClick={() => setStep(1)}><ArrowLeft aria-hidden="true" /> Back to items</button>
              </footer>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
