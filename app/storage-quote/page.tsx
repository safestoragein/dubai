import type { Metadata } from "next"
import Image from "next/image"
import { Award, Barcode, Bike, Boxes, Bug, Building2, CalendarDays, Camera, Check, Clock, Droplet, Droplets, FileText, Home, Lock, MapPin, Package, ShieldCheck, Snowflake, Star, Truck, User, UserCheck, UserRound, Users, Video, Warehouse, Wind, X, Zap } from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import FacilityReel from "@/components/landing/facility-reel"
import QuoteLinkIntercept from "@/components/landing/quote-link-intercept"
import { WHY_ART } from "@/components/landing/why-art"
import { LandingReviews } from "@/components/landing/landing-reviews"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import { LandingSteps } from "@/components/landing/landing-services"
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

const CHIPS = [
  { Icon: Truck, t: "Doorstep pickup" },
  { Icon: ShieldCheck, t: "CCTV secured" },
  { Icon: CalendarDays, t: "No lock-in" },
  { Icon: Zap, t: "Quote in 2 mins" },
]

const FACTS = [
  { Icon: Star, v: "4.9 / 5", l: "Google rating globally", s: "10,000+ reviews" },
  { Icon: Users, v: "100,000+", l: "Happy customers", s: "Homes & businesses worldwide" },
  { Icon: Award, v: "10+ years", l: "Of experience", s: "Serving customers since 2015" },
  { Icon: Clock, v: "15 min", l: "Average response", s: "Quick support guarantee" },
]


// "Why SafeStorage" cards — same eight as safestorage.in/storage-quote, same order, with the
// illustration for each from components/landing/why-art.ts (index-matched).
const WHY = [
  { Icon: Video, t: "CCTV monitoring", d: "24×7 surveillance at our facilities" },
  { Icon: Bug, t: "Pest control", d: "Regular and professional treatment" },
  { Icon: Droplet, t: "Clean, dry units", d: "Moisture-free and well-maintained spaces" },
  { Icon: Lock, t: "Secure access", d: "Controlled and authorised entry only" },
  { Icon: Package, t: "Packing materials", d: "High-quality boxes, wraps and more" },
  { Icon: Truck, t: "Doorstep pickup", d: "We pick up and deliver back to you" },
  { Icon: CalendarDays, t: "Flexible plans", d: "Store for as little as a month" },
  { Icon: UserRound, t: "Dedicated manager", d: "A single point of contact for a smooth experience" },
]

const SHOTS = [
  { src: "/landing/facility-1.webp", t: "Multi-level racking", alt: "Multi-level orange and blue pallet racking inside a SafeStorage warehouse, with wrapped furniture and boxes below" },
  { src: "/landing/facility-2.webp", t: "Wrapped & palletised", alt: "Furniture shrink-wrapped and stored on pallets along a clean warehouse aisle" },
  { src: "/landing/facility-3.webp", t: "Furniture, protected", alt: "Sofas and mattresses wrapped for storage on racking with a clean concrete floor" },
  { src: "/landing/facility-4.webp", t: "Proper handling equipment", alt: "Double-height pallet racking with a pallet truck, ladder and wrapped items" },
]

const SERVICES = [
  { Icon: Home, t: "Household Storage", d: "Furniture, appliances and full homes, kept safe.", img: "/landing/household-hero-v2.webp", pos: "60% center" },
  { Icon: Warehouse, t: "Self Storage", d: "Your own space, secured and monitored.", img: "/landing/svc-self-hero.webp", pos: "center 35%" },
  { Icon: Bike, t: "Bike Storage", d: "Motorbikes stored covered and CCTV-monitored.", img: "/landing/motorbike-storage-hero.webp", pos: "35% center" },
  { Icon: FileText, t: "Document Storage", d: "Archives and records, organised for easy retrieval.", img: "/landing/svc-document.webp", pos: "center 40%" },
  { Icon: Building2, t: "Business Storage", d: "Inventory, files and office assets for your business.", img: "/landing/svc-business-hero.webp", pos: "55% center" },
]

const COMPARE = [
  { Icon: Lock, t: "Security", us: "24/7 CCTV + Biometric + Barcode", them: "Lock & key only" },
  { Icon: Bug, t: "Pest Control", us: "Regular fumigation included", them: "Rarely done" },
  { Icon: Truck, t: "Pickup & Delivery", us: "Hassle-free door-to-door service", them: "Self-transport" },
  { Icon: CalendarDays, t: "Minimum Duration", us: "1 month (flexible)", them: "6-12 month lock-in" },
  { Icon: Package, t: "Item Tracking", us: "Barcode per item", them: "No tracking" },
  { Icon: ShieldCheck, t: "Insurance", us: "Available (Free)", them: "Rarely offered" },
]

const FAC_POINTS = [
  { Icon: Video, t: "CCTV monitored" },
  { Icon: Boxes, t: "Clean, organised facility" },
  { Icon: Truck, t: "Handled by our pickup team" },
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
      {/* Storo/Leo chat launcher is not wanted on this lead-form page. Its host node is appended to <body>
          by the widget bundle, so hide it by id (the loader also skips the script where it can). */}
      <QuoteLinkIntercept />
      <style>{"#safestorage-leo-root,[data-floating-toast],[data-sticky-cta] a[href='/get-quote']{display:none!important}[data-sticky-cta]{padding-left:0!important;padding-right:14px!important;padding-bottom:calc(16px + env(safe-area-inset-bottom))!important}[data-sticky-cta]>div{margin:0 0 0 auto!important;width:fit-content!important;max-width:none!important;align-items:flex-end!important;flex-direction:column!important;gap:10px!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}[data-sticky-cta] a{width:48px!important;height:48px!important;box-shadow:0 8px 20px rgba(10,36,99,.3)!important}"}</style>
      <section className={q.hero} id="top">
        <div className={`${q.wide} ${q.heroRow}`}>
          <div className={q.left}>
            <div className={q.kicker}>Storage, made simple</div>
            <h1>
              UAE&apos;s <em>No.1</em> Most Trusted Storage Service
            </h1>
            <p className={q.lede}>
              We pick up, securely store, and return your belongings when you need them. Doorstep service across the UAE,
              with no lock-in.
            </p>

            <a className={q.heroCta} href="#quote">
              Get a free quote <span aria-hidden="true">→</span>
            </a>

            <div className={q.chipRow}>
              {CHIPS.map(({ Icon, t }) => (
                <div className={q.chip} key={t}>
                  <Icon aria-hidden="true" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <figure className={q.quote}>
              <div className={q.stars} aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                Stored my entire villa furniture for 6 months during renovation. Everything came back in perfect
                condition thanks to their careful handling and clean units.
              </blockquote>
              <figcaption>
                <span className={q.av}>AH</span>
                <span>
                  <b>Ahmed Hassan</b>
                  <small>Villa owner, Dubai Marina</small>
                </span>
              </figcaption>
            </figure>

            <div className={q.proof}>
              <div className={q.score}>
                <strong>4.9</strong>
                <span className={q.stars} aria-hidden="true">★</span>
                <small>
                  Google rating
                  <br />
                  globally
                </small>
              </div>
              <span className={q.vr} aria-hidden="true" />
              <div className={q.count}>
                <GoogleG />
                <span>
                  <strong>10,000+</strong>
                  <small>Google reviews</small>
                </span>
              </div>
            </div>
          </div>

          <StorageQuoteForm />
        </div>
      </section>

      <div className={q.facts}>
        <div className={`${q.wide} ${q.factsGrid}`}>
          {FACTS.map(({ Icon, v, l, s: sub }) => (
            <div className={q.fact} key={l}>
              <span className={q.factIcon}>
                <Icon aria-hidden="true" />
              </span>
              <div>
                <strong>{v}</strong>
                <b>{l}</b>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The homepage's animated van journey, unchanged; only its button is pointed at the form here. */}
      <div className={`${q.wide} ${q.journey}`}>
        <LandingSteps ctaHref="#quote" showMore={false} />
      </div>

      <section className={`${q.wide} ${q.sec}`} id="services">
        <div className={q.secHead}>
          <span className={s.howEyebrow}>Our services</span>
          <h2>Discover our range of storage services</h2>
          <p>Flexible, secure and convenient storage for every need.</p>
        </div>

        <div className={q.svcGrid}>
          {SERVICES.map(({ Icon, t, d, img, pos }) => (
            <article className={q.svc} key={t}>
              <div className={q.svcImg}>
                <Image src={img} alt={`${t} in Dubai`} fill loading="eager" sizes="(max-width: 680px) 240px, (max-width: 1100px) 33vw, 20vw" style={{ objectPosition: pos }} />
                <span className={q.svcIcon}>
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <div className={q.svcBody}>
                <h3>{t}</h3>
                <p>{d}</p>
                <a className={q.svcCta} href="#quote">
                  Get Quote <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${q.wide} ${q.sec}`}>
        <div className={q.secHead}>
          <span className={s.howEyebrow}>Our facilities</span>
          <h2>Take a look inside</h2>
          <p>A closer look at where your belongings are handled and stored.</p>
        </div>

        <div className={q.reelRow}>
          <figure className={`${q.tileImg} ${q.reelTile}`}>
            <FacilityReel
              className={q.reelBox}
              src="/landing/facility-reel.mp4"
              poster="/landing/facility-reel-poster.webp"
              label="SafeStorage Dubai facility reel"
            />
            <figcaption>Inside SafeStorage Dubai</figcaption>
          </figure>
          <figure className={`${q.tileImg} ${q.reelTile}`}>
            <FacilityReel
              className={q.reelBox}
              src="/landing/facility-ad.mp4"
              poster="/landing/facility-ad-poster.webp"
              label="SafeStorage Dubai warehouse, 24/7 protected, safe, secure"
            />
            <figcaption>Our Dubai warehouse</figcaption>
          </figure>
          {SHOTS.map((x) => (
            <figure className={q.tileImg} key={x.src}>
              <Image src={x.src} alt={x.alt} fill sizes="(max-width: 680px) 62vw, (max-width: 1100px) 30vw, 19vw" />
              <figcaption>{x.t}</figcaption>
            </figure>
          ))}
        </div>

        <ul className={q.facPoints}>
          {FAC_POINTS.map(({ Icon, t }) => (
            <li key={t}>
              <Icon strokeWidth={1.6} aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${q.wide} ${q.sec} ${q.whySec}`}>
        <div className={q.whyHead}>
          <div className={q.eyeWrap}>
            <i className={q.ln} />
            <span className={q.eyePill}>
              <Package aria-hidden="true" /> WHY SAFESTORAGE
            </span>
            <i className={`${q.ln} ${q.lnr}`} />
          </div>
          <h2>Built to keep your things safe</h2>
          <p>The same high standards whether it&apos;s a few boxes or a full home.</p>
        </div>

        <ul className={q.wGrid}>
          {WHY.map(({ Icon, t, d }, i) => (
            <li className={q.wCard} key={t}>
              <div className={q.wText}>
                <span className={q.wIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <b>{t}</b>
                <small>{d}</small>
              </div>
              <div className={q.wArt} aria-hidden="true" dangerouslySetInnerHTML={{ __html: WHY_ART[i] }} />
            </li>
          ))}
        </ul>

        <div className={q.wStats}>
          <div>
            <Star aria-hidden="true" />
            <span><b>4.9</b>Google rating globally</span>
          </div>
          <div>
            <User aria-hidden="true" />
            <span><b>10,000+</b>Google reviews</span>
          </div>
          <div>
            <MapPin aria-hidden="true" />
            <span><b>UAE</b>Pickup &amp; delivery across the UAE</span>
          </div>
        </div>
      </section>

      <section className={`${q.wide} ${q.sec}`} id="compare">
        <div className={q.whyHead}>
          <span className={s.howEyebrow}>Compare</span>
          <h2>Why SafeStorage</h2>
          <p>SafeStorage vs a traditional warehouse.</p>
        </div>
        <div className={q.cxScroll}>
          <table className={q.cx}>
            <thead>
              <tr>
                <th scope="col"><span className={q.vh}>Feature</span></th>
                <th scope="col" className={q.cxh}>SafeStorage <em>Best value</em></th>
                <th scope="col" className={q.cxh2}>Traditional warehouse</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(({ Icon, t, us, them }) => (
                <tr key={t}>
                  <th scope="row"><span className={q.cxt}><Icon aria-hidden="true" /></span>{t}</th>
                  <td><div className={q.cxc}><span className={`${q.cxi} ${q.cxy}`}><Check aria-hidden="true" /></span><span>{us}</span></div></td>
                  <td><div className={q.cxc}><span className={`${q.cxi} ${q.cxn}`}><X aria-hidden="true" /></span><span>{them}</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LandingReviews padTop={72} reviewCount="10,000+" />

      <section className={`${q.wide} ${q.faqSec}`}>
        <div className={q.secHead}>
          <span className={q.eyebrow}>Good to know</span>
          <h2>Quick answers</h2>
        </div>
        <FaqAccordion items={FAQS} />

        <div className={q.endBand}>
          <Package className={q.endIcon} strokeWidth={1.7} aria-hidden="true" />
          <div className={q.endText}>
            <span>Let&apos;s make space</span>
            <h2>Ready for simpler storage?</h2>
            <p>Request a free quote. Our team will be in touch shortly.</p>
          </div>
          <a className={q.endBtn} href="#quote">Get my free quote →</a>
        </div>
      </section>
    </div>
  )
}
