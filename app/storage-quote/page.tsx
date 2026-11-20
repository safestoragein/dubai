import type { Metadata } from "next"
import Image from "next/image"
import { Barcode, CalendarDays, Camera, Clock, Droplets, Lock, ShieldCheck, Snowflake, UserCheck, Wind } from "lucide-react"
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

const FACTS = [
  { v: "4.9 / 5", l: "Google rating · 6,700+ reviews" },
  { v: "100,000+", l: "Happy customers worldwide" },
  { v: "10+ years", l: "Experience, since 2015" },
  { v: "15 min", l: "Average response time" },
]

const STEPS = [
  { t: "Book online", d: "Tell us what you are storing and pick a pickup date. It takes under two minutes." },
  { t: "Doorstep pickup", d: "Our team arrives at your door, wraps what needs wrapping and loads everything for you." },
  { t: "Secure storage", d: "Kept in a clean, CCTV-monitored, pest-controlled facility until you need it back." },
  { t: "Return on demand", d: "Ask for one box or everything back, delivered to your door whenever you are ready." },
]

const WHY = [
  { Icon: Camera, t: "CCTV monitoring", d: "24×7 surveillance at our facilities" },
  { Icon: Snowflake, t: "Climate controlled", d: "Indoor units, standard on every booking" },
  { Icon: Wind, t: "Pest control", d: "Regular professional treatment" },
  { Icon: Droplets, t: "Clean, dry units", d: "Moisture-free, well-maintained spaces" },
  { Icon: Lock, t: "Secure access", d: "Controlled and authorised entry only" },
  { Icon: Barcode, t: "Barcoded inventory", d: "Every item logged when it reaches us" },
  { Icon: Clock, t: "Flexible plans", d: "Store for as little as a month" },
  { Icon: UserCheck, t: "Dedicated manager", d: "One point of contact from pickup to return" },
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

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  )
}

export default function StorageQuotePage() {
  return (
    <div className={`${s.page} ${q.root} ${sora.variable} ${manrope.variable}`}>
      <section className={q.hero} id="top">
        <div className={q.wide}>
          <div className={q.topRow}>
            <div className={q.copy}>
              <div className={q.kicker}>Storage, made simple</div>
              <h1>More room for what matters.</h1>
              <p className={q.lede}>
                We pick up, securely store, and return your belongings when you need them.{" "}
                <span className={q.ctaNote}>No obligation · Reply within 15 minutes</span>
              </p>
            </div>

            <div className={q.trust}>
              <div className={q.trustItem}>
                <GoogleG />
                <span>
                  <b>4.9/5</b> on Google ·<br />6,700+ reviews
                </span>
              </div>
              <div className={q.trustItem}>
                <ShieldCheck strokeWidth={1.6} aria-hidden="true" />
                <span>
                  <b>CCTV</b>
                  <br />
                  monitored
                </span>
              </div>
              <div className={q.trustItem}>
                <CalendarDays strokeWidth={1.6} aria-hidden="true" />
                <span>
                  <b>Serving UAE</b>
                  <br />
                  since 2015
                </span>
              </div>
            </div>
          </div>

          <StorageQuoteForm />
        </div>
      </section>

      <div className={q.facts}>
        <div className={`${q.wide} ${q.factsGrid}`}>
          {FACTS.map((x) => (
            <div className={q.fact} key={x.l}>
              <strong>{x.v}</strong>
              <span>{x.l}</span>
            </div>
          ))}
        </div>
      </div>

      <section className={`${q.wide} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={q.eyebrow}>How it works</span>
          <h2>Storage made simple</h2>
          <p>From doorstep pickup to secure storage and return, we handle the truck, the lifting and the paperwork.</p>
        </div>
        <div className={q.steps}>
          {STEPS.map((x, i) => (
            <div className={q.step} key={x.t}>
              <span className={q.num}>0{i + 1}</span>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${q.wide} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={q.eyebrow}>Our facilities</span>
          <h2>Take a look inside</h2>
        </div>
        <div className={q.gallery}>
          {SHOTS.map((x) => (
            <figure className={q.shot} key={x.src}>
              <div className={q.shotImg}>
                <Image src={x.src} alt={x.alt} fill sizes="(max-width: 920px) 50vw, 380px" />
              </div>
              <figcaption>
                {x.t}
                <small>{x.d}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={`${q.wide} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={q.eyebrow}>Why SafeStorage</span>
          <h2>Built to keep your things safe</h2>
        </div>
        <ul className={q.why}>
          {WHY.map(({ Icon, t, d }) => (
            <li key={t}>
              <Icon aria-hidden="true" />
              <div>
                <b>{t}</b>
                <span>{d}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <LandingReviews padTop={72} />

      <section className={`${q.wide} ${q.faqSec}`}>
        <div className={q.secHead}>
          <span className={q.eyebrow}>Good to know</span>
          <h2>Quick answers</h2>
        </div>
        <FaqAccordion items={FAQS} />

        <div className={q.endBand}>
          <div>
            <h2>Ready to get started?</h2>
            <p>Fill in the form and our team will call you back shortly.</p>
          </div>
          <a className={`${s.btn} ${s.btnAccent} ${q.cta}`} href="#quote">Get a free quote →</a>
        </div>
      </section>
    </div>
  )
}
