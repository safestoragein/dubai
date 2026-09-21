import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ClipboardList, Package, Warehouse, RotateCcw, CheckCircle2, Clock, Truck, ShieldCheck, FileSignature, MapPin, CalendarClock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { env } from "@/lib/env"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import FaqAccordion from "@/components/landing/faq-accordion"
import { processFaqs } from "./faqs"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import Reveal from "./Reveal"

// Moved from /how-it-works (308 in next.config.mjs): the
// process is the same for personal, business and moving customers, so it lives
// at a common path rather than inside the self-storage silo.
const URL = "https://safestorage.ae/how-it-works"

export const metadata: Metadata = {
  title: { absolute: "How Self Storage Works in Dubai | Step by Step" },
  description:
    "Learn how Safe Storage works in Dubai & UAE – easy booking, pickup, secure storage, and fast delivery for homes & businesses.",
  keywords:
    "how storage works in Dubai, storage process Dubai, self storage guide Dubai, storage solutions UAE, safe storage guide Dubai, household storage process UAE, secure storage services Dubai, personal storage guide UAE, business storage process Dubai, Safe Storage Dubai guide",
  alternates: {
    canonical: URL,
    languages: { en: URL, "x-default": URL },
  },
  openGraph: {
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "How SafeStorage Dubai works" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-cover-2026.jpg"],
  },
}

// `img` = the owner's step photo; `when` = short label above the title
const steps = [
  {
    Icon: ClipboardList,
    img: "/landing/how-step-1-v2.webp",
    when: "Book online",
    title: "Get a free quote & book your pickup",
    body: "Tell us what you are storing online, by phone or on WhatsApp. You get an itemised quote in minutes.",
    points: ["Instant, itemised quote", "Slots 7 days a week", "Same-day pickup before 12 PM"],
  },
  {
    Icon: Package,
    img: "/landing/how-step-2-v2.webp",
    when: "Doorstep pickup",
    title: "We collect & pack your items",
    body: "Our team arrives with boxes, wrap and covers — furniture blanket-wrapped, fragile items cushioned.",
    points: ["Optional professional packing", "Final walkthrough before we leave", "Inventory signed at your door"],
  },
  {
    Icon: Warehouse,
    img: "/landing/how-step-3-v2.webp",
    when: "Stored & catalogued",
    title: "Secure indoor storage",
    body: "Your items are catalogued and kept in our clean, dust-protected shared storage space.",
    points: ["24/7 CCTV and access control", "Fire protection and pest control", "Climate controlled as standard"],
  },
  {
    Icon: RotateCcw,
    img: "/landing/how-step-4-v2.webp",
    when: "Request delivery",
    title: "Delivery whenever you need it",
    body: "Call, WhatsApp or email and we deliver within 24–48 hours — everything, or only the boxes you name.",
    points: ["Partial retrieval supported", "No early-retrieval penalty", "Remaining items stay on the same rate"],
  },
]

// `anim` = how the icon acts out the point (see hero.module.css)
const promises = [
  { Icon: Clock, t: "Same-day pickup", b: "For bookings placed before 12 PM.", anim: "spin" },
  { Icon: Truck, t: "Our own covered vans", b: "No subcontractors, no open flatbeds.", anim: "drive" },
  { Icon: FileSignature, t: "Signed inventory", b: "Every item recorded at your door.", anim: "swing" },
  { Icon: ShieldCheck, t: "24/7 security", b: "CCTV, access control, fire protection.", anim: "pulse" },
  { Icon: CalendarClock, t: "Back in 24–48 hours", b: "Everything, or just the boxes you name.", anim: "flip" },
  { Icon: MapPin, t: "All of Dubai", b: "Every neighbourhood, door to door.", anim: "drop" },
] as const

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

const howItWorksSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "How It Works | SafeStorage Dubai Storage Process",
    description: "Learn how SafeStorage Dubai's simple 4-step process works: book, we collect, you access anytime.",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to store your belongings with SafeStorage Dubai",
    step: steps.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.title, text: st.body })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: processFaqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function HowItWorks() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "How It Works" },
        ]}
      />
      <SchemaScript schema={howItWorksSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — owner's choice: copy left, photo right (never behind the letters) */}
        <section className={`${s.hero} ${s.wrap} ${h.split2}`}>
          <div className={h.split2Inner}>
            <div className={`${s.heroContent} ${h.split2Copy}`}>
              <span className={s.heroTag}>How it works</span>
              <h1>
                How SafeStorage Dubai Works – <br className={s.mBreakDesk} />
                <em>Four Simple Steps</em>
              </h1>
              <p>No truck rental, no heavy lifting, no trip to a warehouse. We take storage off your hands entirely.</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call: 050-577-3388
                </a>
              </div>
            </div>
            <div className={h.split2Photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/how-hero-scene-v2.webp"
                alt="SafeStorage team loading boxes into a SafeStorage van in Dubai"
                width={1733}
                height={545}
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* THE PROCESS IN DETAIL — the owner's step photos */}
        <section className={`${s.section} ${s.wrap}`} id="process" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The process</span>
              <h2>
                From your door <em>and back again.</em>
              </h2>
            </div>
            <p>Exactly what happens at each step, from first call to delivery.</p>
          </div>
          <Reveal>
            <ol className={h.photoSteps}>
              {/* owner's choice: photo + title only (the detail stays in the HowTo JSON-LD) */}
              {steps.map(({ img, when, title }, i) => (
                <li className={`${h.photoStep} ${h.plan}`} style={idx(i)} key={title}>
                  <div className={h.photoFrame}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`Step ${i + 1}: ${when}`} width={375} height={452} loading="lazy" decoding="async" />
                    <span className={h.stepBadge} style={idx(i)} aria-hidden="true">
                      {i + 1}
                    </span>
                  </div>
                  <div className={h.stepBody}>
                    <h3>{title}</h3>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* PROMISES */}
        <section className={`${s.section} ${s.wrap}`} id="promises" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Our promise</span>
              <h2>
                What you can <em>count on.</em>
              </h2>
            </div>
          </div>
          <Reveal>
            <div className={s.miniGrid}>
              {promises.map(({ Icon, t: title, b, anim }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={title}>
                  <span className={`${s.miniIcon} ${h.planIcon} ${h[anim]}`} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>{title}</b>
                    <small>{b}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className={s.miniFacts}>
            <span><CheckCircle2 aria-hidden="true" /> Pay only for the space you use</span>
            <span><CheckCircle2 aria-hidden="true" /> No hidden fees</span>
            <span><CheckCircle2 aria-hidden="true" /> Month to month, no lock-in</span>
          </div>
        </section>

        <LandingReviews />

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                Questions about <em>the process.</em>
              </h2>
            </div>
            <p>
              Have more questions? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={processFaqs} />
        </section>

        <CtaBand
          title="Ready for hassle-free storage in Dubai?"
          blurb="Tell us what you're storing and we'll confirm the space, the price and a pickup slot — usually within 15 minutes."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
