import type { Metadata } from "next"
import Link from "next/link"
import { ClipboardList, Package, Warehouse, RotateCcw, CheckCircle2, Clock, Truck, ShieldCheck, FileSignature, MapPin, CalendarClock } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingSteps } from "@/components/landing/landing-services"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import FaqAccordion from "@/components/landing/faq-accordion"
import { processFaqs } from "./faqs"
import s from "@/components/landing/landing.module.css"

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

const steps = [
  {
    Icon: ClipboardList,
    title: "Get a free quote & book your pickup",
    body: "Tell us what you are storing online, by phone or on WhatsApp. You get an itemised quote in minutes.",
    points: ["Instant, itemised quote", "Slots 7 days a week", "Same-day pickup before 12 PM"],
  },
  {
    Icon: Package,
    title: "We collect & pack your items",
    body: "Our team arrives with boxes, wrap and covers — furniture blanket-wrapped, fragile items cushioned.",
    points: ["Optional professional packing", "Final walkthrough before we leave", "Inventory signed at your door"],
  },
  {
    Icon: Warehouse,
    title: "Secure indoor storage",
    body: "Your items are catalogued and kept in our clean, dust-protected shared storage space.",
    points: ["24/7 CCTV and access control", "Fire protection and pest control", "Climate controlled as standard"],
  },
  {
    Icon: RotateCcw,
    title: "Delivery whenever you need it",
    body: "Call, WhatsApp or email and we deliver within 24–48 hours — everything, or only the boxes you name.",
    points: ["Partial retrieval supported", "No early-retrieval penalty", "Remaining items stay on the same rate"],
  },
]

const promises = [
  { Icon: Clock, t: "Same-day pickup", b: "For bookings placed before 12 PM." },
  { Icon: Truck, t: "Our own covered vans", b: "No subcontractors, no open flatbeds." },
  { Icon: FileSignature, t: "Signed inventory", b: "Every item recorded at your door." },
  { Icon: ShieldCheck, t: "24/7 security", b: "CCTV, access control, fire protection." },
  { Icon: CalendarClock, t: "Back in 24–48 hours", b: "Everything, or just the boxes you name." },
  { Icon: MapPin, t: "All of Dubai", b: "Every neighbourhood, door to door." },
]

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
    mainEntity: processFaqs.map((f) => ({
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
        <SplitHero
          eyebrow="How it works"
          title="How SafeStorage Dubai Works –"
          titleAccent="Four Simple Steps"
          blurb="No truck rental, no heavy lifting, no trip to a warehouse. We take storage off your hands entirely."
          image="/landing/movers-illustration.jpg"
          imagePosition="center 60%"
          ctaLabel="Get a Free Quote"
        />

        <LandingTrust />

        <LandingSteps />

        {/* THE PROCESS IN DETAIL */}
        <section className={`${s.section} ${s.wrap}`} id="process" style={{ paddingTop: 0 }}>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>The process</span>
                <h2>
                  From your door <em>and back again.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  Exactly what happens at each step, from first call to delivery.
                </p>
              </div>
            }
          >
            {steps.map(({ Icon, title, body, points }, i) => (
              <article className={s.usp} key={title}>
                <span className={s.uspNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={s.uspIcon} aria-hidden="true">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <ul className={s.checkList}>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </UspRail>
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
          <div className={s.miniGrid}>
            {promises.map(({ Icon, t: title, b }) => (
              <div className={s.miniCard} key={title}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <small>{b}</small>
                </div>
              </div>
            ))}
          </div>
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
