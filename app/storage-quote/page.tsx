import type { Metadata } from "next"
import Image from "next/image"
import {
  Barcode, Camera, CalendarCheck, Check, Clock, Droplets, Lock, Phone, Snowflake, Truck, Undo2, UserCheck, Warehouse, Wind,
} from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import { LandingReviews } from "@/components/landing/landing-reviews"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import q from "@/components/landing/storage-quote.module.css"

// Quick lead form, the Dubai twin of safestorage.in/storage-quote. It is a
// campaign landing page, so it is kept out of the index: /get-quote is the page
// that owns the "storage quote" intent and the two must not compete.
// No public pricing anywhere on this page (owner decision 2026-09-17).
export const metadata: Metadata = {
  title: { absolute: "Get Your Storage Quote in 2 Minutes | SafeStorage Dubai" },
  description:
    "Tell us where you are and what you need to store. SafeStorage Dubai calls you back with a free quote. Doorstep pickup, CCTV secured, no lock-in.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://safestorage.ae/get-quote" },
}

const CHECKS = [
  "Free doorstep pickup",
  "CCTV monitored, 24×7",
  "Climate-controlled units",
  "No lock-in, month to month",
]

const STATS = [
  { v: "4.9", em: "/5", l: "Google rating · 6,700+ reviews" },
  { v: "100,000", em: "+", l: "Happy customers worldwide" },
  { v: "10", em: "+", l: "Years of experience, since 2015" },
  { v: "15", em: " min", l: "Average response time" },
]

const STEPS = [
  { Icon: CalendarCheck, t: "Book online", d: "Tell us what you are storing and pick a pickup date. It takes under two minutes." },
  { Icon: Truck, t: "Doorstep pickup", d: "Our team arrives at your door, wraps what needs wrapping and loads everything for you." },
  { Icon: Warehouse, t: "Secure storage", d: "Kept in a clean, CCTV-monitored, pest-controlled facility until you need it back." },
  { Icon: Undo2, t: "Return on demand", d: "Ask for one box or everything back, delivered to your door whenever you are ready." },
]

const WHY = [
  { Icon: Camera, t: "CCTV monitoring", d: "24×7 surveillance at our facilities" },
  { Icon: Snowflake, t: "Climate controlled", d: "Indoor units, standard on every booking" },
  { Icon: Wind, t: "Pest control", d: "Regular professional treatment" },
  { Icon: Droplets, t: "Clean, dry units", d: "Moisture-free, well-maintained spaces" },
  { Icon: Lock, t: "Secure access", d: "Controlled and authorised entry only" },
  { Icon: Barcode, t: "Barcoded inventory", d: "Every item logged when it reaches us" },
  { Icon: Clock, t: "Flexible plans", d: "Store for as little as a month" },
  { Icon: UserCheck, t: "Dedicated manager", d: "One point of contact for a smooth experience" },
]

const SHOTS = [
  { src: "/landing/warehouse-storage-hero-v2.webp", t: "Clean, organised racking", d: "Every item stored with care", alt: "Organised racking inside a SafeStorage Dubai warehouse" },
  { src: "/landing/secure-storage-hero-v2.webp", t: "Secure, monitored units", d: "CCTV and controlled access", alt: "Secure storage unit at SafeStorage Dubai" },
  { src: "/landing/warehouse-fleet.jpg", t: "Our own pickup fleet", d: "Door-to-door, handled by us", alt: "SafeStorage Dubai pickup trucks at the warehouse" },
]

const FAQS = [
  {
    q: "What happens after I submit the form?",
    a: "A member of our team calls you, usually within about 15 minutes in business hours. We ask what you are storing and about access at your address, then send you a written quote. There is no obligation to go ahead.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Storage is month to month, so you can extend, add items or collect everything back when it suits you.",
  },
  {
    q: "Do you collect from my home or office?",
    a: "Yes. We offer door-to-door pickup and delivery in Dubai. If you are in another emirate, select it in the form and we will confirm coverage when we call.",
  },
  {
    q: "How do I know my items are looked after?",
    a: "Your goods are logged against a barcoded inventory when they reach our facility, then kept in clean, climate-controlled, CCTV-monitored units with controlled access.",
  },
  {
    q: "Can I get my things back whenever I want?",
    a: "Yes. Ask for a single box or everything, and we deliver it back to your door on a date you choose.",
  },
]

export default function StorageQuotePage() {
  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      <section className={q.hero} id="top">
        <div className={`${s.wrap} ${q.heroGrid}`}>
          <div className={q.copy}>
            <div className={q.rating}>
              <span className={q.g} aria-hidden="true">G</span>
              <div>
                <strong>4.9</strong>
              </div>
              <div>
                <span className={q.stars} aria-label="5 out of 5 stars">★★★★★</span>
                <small>6,700+ Google reviews</small>
              </div>
            </div>
            <h1>
              Dubai&apos;s trusted <em>doorstep storage</em>, quoted in 2 minutes
            </h1>
            <p className={q.lede}>
              Tell us where you are and what you need to store. We pick up, store it safely and bring it back whenever
              you ask — with no lock-in.
            </p>
            <ul className={q.checks}>
              {CHECKS.map((c) => (
                <li key={c}><Check aria-hidden="true" /> {c}</li>
              ))}
            </ul>
            <div className={q.callRow}>
              <Phone size={16} aria-hidden="true" />
              Prefer to talk? <a href={env.PHONE_LINK}>050-577-3388</a>
            </div>
          </div>

          <StorageQuoteForm />
        </div>

      <div className={`${s.wrap} ${q.statsWrap}`}>
        <div className={q.stats}>
          {STATS.map((x) => (
            <div className={q.stat} key={x.l}>
              <strong>{x.v}<em>{x.em}</em></strong>
              <span>{x.l}</span>
            </div>
          ))}
        </div>
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
          <span className={s.howEyebrow}>Our facilities</span>
          <h2>Take a look inside</h2>
          <p>Clean aisles, sturdy racking and every item stored with care.</p>
        </div>
        <div className={q.gallery}>
          {SHOTS.map((x) => (
            <figure className={q.shot} key={x.src}>
              <Image src={x.src} alt={x.alt} fill sizes="(max-width: 920px) 100vw, 40vw" />
              <figcaption>
                {x.t}
                <small>{x.d}</small>
              </figcaption>
            </figure>
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
      </section>

      <LandingReviews />

      <section className={`${s.wrap} ${q.faqSec}`}>
        <div className={q.secHead}>
          <span className={s.howEyebrow}>Good to know</span>
          <h2>Quick answers</h2>
        </div>
        <FaqAccordion items={FAQS} />

        <div className={q.endBand}>
          <div>
            <h2>Ready to get started?</h2>
            <p>Fill in the form and our team will call you back shortly.</p>
          </div>
          <a className={`${s.btn} ${s.btnAccent}`} href="#top">Get a free quote →</a>
        </div>
      </section>
    </div>
  )
}
