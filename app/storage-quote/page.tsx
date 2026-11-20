import type { Metadata } from "next"
import { CalendarCheck, Camera, Clock, ShieldCheck, Truck, Warehouse, Undo2, Wind, Droplets, UserCheck, Lock, Phone } from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import q from "@/components/landing/storage-quote.module.css"

// Quick lead form, the Dubai twin of safestorage.in/storage-quote. It is a
// campaign landing page, so it is kept out of the index: /get-quote is the page
// that owns the "storage quote" intent and the two must not compete.
export const metadata: Metadata = {
  title: { absolute: "Get Your Storage Quote in 2 Minutes | SafeStorage Dubai" },
  description:
    "Tell us where you are and what you need to store. SafeStorage Dubai calls you back with a free quote. Doorstep pickup, CCTV secured, no lock-in.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://safestorage.ae/get-quote" },
}

const STEPS = [
  { Icon: CalendarCheck, t: "Book online", d: "Tell us what you are storing and pick a pickup date. It takes under two minutes." },
  { Icon: Truck, t: "Doorstep pickup", d: "Our team arrives at your door, wraps what needs wrapping and loads everything for you." },
  { Icon: Warehouse, t: "Secure storage", d: "Kept in a clean, CCTV-monitored, pest-controlled facility until you need it back." },
  { Icon: Undo2, t: "Return on demand", d: "Ask for one box or everything back, delivered to your door whenever you are ready." },
]

const WHY = [
  { Icon: Camera, t: "CCTV monitoring", d: "24×7 surveillance at our facilities" },
  { Icon: Wind, t: "Pest control", d: "Regular professional treatment" },
  { Icon: Droplets, t: "Clean, dry units", d: "Moisture-free, well-maintained spaces" },
  { Icon: Lock, t: "Secure access", d: "Controlled and authorised entry only" },
  { Icon: Clock, t: "Flexible plans", d: "Store for as little as a month" },
  { Icon: UserCheck, t: "Dedicated manager", d: "One point of contact for a smooth experience" },
]

export default function StorageQuotePage() {
  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      <section className={q.hero} id="top">
        <div className={`${s.wrap} ${q.heroGrid}`}>
          <div className={q.copy}>
            <span className={q.eyebrow}>Self storage across the UAE</span>
            <h1>
              Dubai&apos;s trusted <em>doorstep storage</em>, quoted in 2 minutes
            </h1>
            <p className={q.lede}>
              Tell us where you are and what you need to store. We pick up, store it safely and bring it back whenever
              you ask — with no lock-in.
            </p>
            <div className={q.chips}>
              <span className={q.chip}><Truck aria-hidden="true" /> Doorstep pickup</span>
              <span className={q.chip}><Camera aria-hidden="true" /> CCTV secured</span>
              <span className={q.chip}><ShieldCheck aria-hidden="true" /> No lock-in</span>
              <span className={q.chip}><Clock aria-hidden="true" /> Quote in 2 mins</span>
            </div>
            <div className={q.callRow}>
              <Phone size={16} aria-hidden="true" />
              Prefer to talk? <a href={env.PHONE_LINK}>050-577-3388</a>
            </div>
          </div>

          <StorageQuoteForm />
        </div>
      </section>

      <section className={`${s.wrap} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={s.howEyebrow}>How it works</span>
          <h2>Storage made completely effortless</h2>
          <p>From doorstep pickup to secure storage and return, we handle the truck, the lifting and the paperwork.</p>
        </div>
        <div className={q.grid4}>
          {STEPS.map(({ Icon, t, d }, i) => (
            <div className={q.tile} key={t}>
              <div className={q.ico}><Icon aria-hidden="true" /></div>
              <span className={q.num}>0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${s.wrap} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={s.howEyebrow}>Why SafeStorage</span>
          <h2>Built to keep your things safe</h2>
          <p>The same high standards whether it&apos;s a few boxes or a full home.</p>
        </div>
        <div className={q.grid4}>
          {WHY.map(({ Icon, t, d }) => (
            <div className={q.tile} key={t}>
              <div className={q.ico}><Icon aria-hidden="true" /></div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>

        <div className={q.endBand}>
          <div>
            <h2>Ready to get started?</h2>
            <p>Fill in the form above and our team will call you back shortly.</p>
          </div>
          <a className={`${s.btn} ${s.btnAccent}`} href="#top" >Get a free quote →</a>
        </div>
      </section>
    </div>
  )
}
