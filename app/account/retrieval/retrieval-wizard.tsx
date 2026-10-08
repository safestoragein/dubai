"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarDays, Check, Clock, MapPin, PackageCheck, PackageOpen, Truck, Boxes } from "lucide-react"
import { loadGoogleMapsScript } from "@/lib/google-maps-loader"
import c from "../account.module.css"

type Item = { id: number; quotation: string; barcode: string; name: string; type: string; qty: number }
type Opt = { slug: string; name: string }
export type Options = {
  items: Item[]
  max_partial: number
  open_orders: { ref: string; type: string; status: string; date: string }[]
  floors: Opt[]
  timeslots: Opt[]
  defaults: { address: string; lat: string | null; lng: string | null; floor: string; lift: string; phone: string }
}
type Estimate = {
  type: string; items: number; team_quote: boolean; pallets: number
  transport_cost: number; labour_cost: number; lift_cost: number; stacking_barcode: number; urgent_date_surcharge: number
  transport_subtotal: number; transport_tax: number; transport_total: number
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

export default function RetrievalWizard({ opts, name }: { opts: Options; name: string }) {
  const [type, setType] = useState<Kind | null>(null)
  const [step, setStep] = useState<1 | 2>(1)
  const [picked, setPicked] = useState<number[]>([])
  const [date, setDate] = useState("")
  const [slot, setSlot] = useState("")
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
    try {
      const res = await fetch("/api/customer/retrieval/create", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, date: toDMY(date), lat, lng, floor, lift, timeslot: slot, address, phone, note, inventory_id: type === "partial" ? picked : [] }),
      })
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

  return (
    <>
      {blocked && (
        <div className={c.notice} style={{ margin: "0 0 20px" }}>
          You already have an open retrieval request: {opts.open_orders.map((o) => `${o.ref} (${label(o.status)})`).join(", ")}. Please wait for our team, or call us to change it.
        </div>
      )}

      <div className={c.retrTypes}>
        {TYPES.map((t) => {
          const Icon = t.icon
          const disabled = noItems || blocked || (t.key === "partial" && opts.max_partial < 1)
          return (
            <button key={t.key} type="button" disabled={disabled} className={`${c.retrType} ${c[t.tone]} ${type === t.key ? c.retrTypeOn : ""}`}
              onClick={() => { setType(t.key); setPicked([]); setErr(""); setStep(1) }}>
              <span className={c.tileIcon}><Icon aria-hidden="true" /></span>
              <b>{t.title}</b>
              <span>{t.text}</span>
              {t.key === "partial" && opts.max_partial < 1 && !noItems && <em>Needs at least 2 stored items</em>}
            </button>
          )
        })}
      </div>

      {noItems && <p className={c.empty}>You have no stored items to retrieve.</p>}

      {type && !blocked && (
        <>
          <ol className={`${c.stepBar} ${c[TYPES.find((t) => t.key === type)!.tone]}`} aria-label="Retrieval steps">
            <li className={`${c.stepBlock} ${step === 1 ? c.stepBlockNow : c.stepBlockDone}`}>
              <span className={c.stepNum}>{step === 2 ? <Check aria-hidden="true" /> : 1}</span>
              <span className={c.stepText}>
                <em>Step 1 of 2</em>
                <b>Choose items</b>
                <small>{type === "partial" ? "Pick what you need" : "All stored items"}</small>
              </span>
            </li>
            <li className={`${c.stepBlock} ${step === 2 ? c.stepBlockNow : ""}`}>
              <span className={c.stepNum}>2</span>
              <span className={c.stepText}>
                <em>Step 2 of 2</em>
                <b>Delivery details</b>
                <small>Date, address and charge</small>
              </span>
            </li>
          </ol>

          {step === 1 ? (
            <section className={c.panel}>
              <div className={c.panelHead}>
                <div><h2 className={c.panelTitle}>{type === "partial" ? "Choose your items" : "Items to retrieve"}</h2>
                  <p className={c.panelSub}>{type === "partial" ? `Select up to ${opts.max_partial} of your ${opts.items.length} items` : `All ${opts.items.length} stored items will be delivered`}</p></div>
                {type === "partial" && <span className={c.count}>{picked.length} / {opts.max_partial}</span>}
              </div>
              <ul className={c.itemPick}>
                {opts.items.map((i) => {
                  const on = type !== "partial" || picked.includes(i.id)
                  const canAdd = picked.length < opts.max_partial
                  return (
                    <li key={i.id}>
                      <label className={`${c.itemRow} ${on && type === "partial" ? c.itemRowOn : ""}`}>
                        {type === "partial" ? (
                          <input type="checkbox" checked={picked.includes(i.id)} disabled={!picked.includes(i.id) && !canAdd}
                            onChange={(e) => setPicked(e.target.checked ? [...picked, i.id] : picked.filter((x) => x !== i.id))} />
                        ) : <span className={c.itemTick}><Check aria-hidden="true" /></span>}
                        <span className={c.itemName}>{i.name}<small>{i.barcode} · {label(i.type)} · {i.quotation}</small></span>
                        <b>×{i.qty}</b>
                      </label>
                    </li>
                  )
                })}
              </ul>
              <div className={c.stepActions}>
                <button type="button" className={c.retrSubmit} style={{ minWidth: 200 }} disabled={itemsForType.length === 0} onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                  Continue
                </button>
              </div>
            </section>
          ) : (
            <div className={c.retrLayout}>
              <div className={c.retrMain}>
                <section className={c.panel}>
                  <div className={c.panelHead}>
                    <div><h2 className={c.panelTitle}>Delivery details</h2><p className={c.panelSub}>{itemsForType.length} {itemsForType.length === 1 ? "item" : "items"} · where and when should we bring them?</p></div>
                    <button type="button" className={c.linkBtn} onClick={() => setStep(1)}>Change items</button>
                  </div>
                  <div className={c.formGrid}>
                    <label className={c.fLabel}><span><CalendarDays aria-hidden="true" /> Date</span>
                      <input type="date" min={tomorrowISO()} value={date} onChange={(e) => setDate(e.target.value)} /></label>
                    <label className={c.fLabel}><span><Clock aria-hidden="true" /> Time slot</span>
                      <select value={slot} onChange={(e) => setSlot(e.target.value)}>
                        <option value="">Choose a slot</option>
                        {opts.timeslots.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                      </select></label>
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
                </section>
              </div>

              <aside className={c.retrSide}>
                <section className={c.panel}>
                  <div className={c.panelHead}><h2 className={c.panelTitle}>Delivery charge</h2></div>
                  {!ready ? (
                    <p className={c.panelSub}>Choose the date, address, floor and lift to see the charge.</p>
                  ) : type === "intercity" ? (
                    <p className={c.panelSub}>Our team will quote the intercity delivery price and confirm it with you.</p>
                  ) : estErr ? (
                    <p style={{ color: "#d45f50", margin: 0 }}>{estErr}</p>
                  ) : !est ? (
                    <p className={c.panelSub}>Working out the charge…</p>
                  ) : (
                    <>
                      <ul className={c.estList}>
                        <li><span>Transport</span><b>{aed(est.transport_cost)}</b></li>
                        <li><span>Labour</span><b>{aed(est.labour_cost)}</b></li>
                        {est.lift_cost > 0 && <li><span>Lift</span><b>{aed(est.lift_cost)}</b></li>}
                        {est.stacking_barcode > 0 && <li><span>Stacking & barcode</span><b>{aed(est.stacking_barcode)}</b></li>}
                        {est.urgent_date_surcharge > 0 && <li><span>Short-notice date</span><b>{aed(est.urgent_date_surcharge)}</b></li>}
                        {est.transport_tax > 0 && <li><span>Tax</span><b>{aed(est.transport_tax)}</b></li>}
                        <li className={c.estTotal}><span>Estimated total</span><b>{aed(est.transport_total)}</b></li>
                      </ul>
                      <p className={c.panelSub} style={{ marginTop: 10 }}>This is an estimate. Our team confirms the final charge before anything is billed.</p>
                    </>
                  )}
                </section>
                {err && <div className={c.notice} style={{ margin: 0 }}>{err}</div>}
                <button type="button" className={c.retrSubmit} disabled={busy || !ready || !slot || !phone || !address || (type !== "intercity" && !est)} onClick={submit}>
                  {busy ? "Sending…" : "Request retrieval"}
                </button>
                <button type="button" className={c.retrBack} onClick={() => setStep(1)}>Back to items</button>
                <p className={c.panelSub} style={{ margin: 0, textAlign: "center" }}>No payment is taken now.</p>
              </aside>
            </div>
          )}
        </>
      )}
    </>
  )
}
