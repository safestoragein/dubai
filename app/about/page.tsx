import type { Metadata } from "next"
import { CheckCircle2, Flag, Users, Award, Globe2, Plane, Home, Briefcase, GraduationCap } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingWhy } from "@/components/landing/landing-services"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import FaqAccordion from "@/components/landing/faq-accordion"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: { absolute: "Dubai's Most Trusted Storage Partner | SafeStorage About Us" },
  description:
    "Trusted storage in Dubai since 2015. Secure, clean storage with hassle-free pickup and 24/7 support.",
  keywords:
    "Storage Dubai, Self storage UAE, Business storage, Personal storage, Secure storage units, Furniture storage, Document storage, Household storage, Luggage storage, SafeStorage UAE, Storage pickup delivery, Inventory storage, Short term storage, Long term storage",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/about",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/about",
  },
}

const story = [
  {
    kicker: "The beginning",
    title: "Why we started",
    body: "Storage should be effortless, secure and built around real customer needs. Traditional options were rigid and unreliable — we knew there was a better way.",
  },
  {
    kicker: "The gap",
    title: "The problem we solved",
    body: "Long lock-ins, poor handling, limited support. Flexibility and peace of mind were missing — exactly where SafeStorage stepped in.",
  },
  {
    kicker: "Today",
    title: "What makes us different",
    points: [
      "ISO 9001:2015 certified, professionally managed facilities",
      "Secure, clean, dust-protected storage",
      "Doorstep pickup & delivery with careful handling",
      "Flexible plans with dedicated support",
    ],
  },
]

const milestones = [
  { Icon: Flag, year: "2015", t: "SafeStorage founded", b: "A full-service, door-to-door storage model." },
  { Icon: Users, year: "2019", t: "10,000+ customers", b: "Bengaluru, Chennai, Hyderabad, Mumbai · ISO 9001:2015." },
  { Icon: Globe2, year: "2023", t: "50,000+ customers", b: "Network expanded to 16 cities across India & UAE." },
  { Icon: Award, year: "2026", t: "100,000+ customers", b: "Rated 4.9★ · 3M+ sq ft of managed space." },
]

const whoWeServe = [
  { Icon: Plane, t: "Expats", b: "Flexible storage without long-term commitments." },
  { Icon: Home, t: "Families", b: "Space during renovations and moves." },
  { Icon: Briefcase, t: "Businesses", b: "Scalable storage without warehouse overhead." },
  { Icon: GraduationCap, t: "Students", b: "Affordable storage over semester breaks." },
]

const aboutFaqs = [
  {
    q: "When was SafeStorage founded and who founded it?",
    a: "SafeStorage was founded in 2015 by Ramesh Madisetty to make storage effortless through a full-service, door-to-door model. It started in India and later launched in the UAE.",
  },
  {
    q: "How many customers has SafeStorage served globally?",
    a: "100,000+ customers worldwide — 10,000 by 2019 and 50,000 by 2023 — with a 4.9/5 average rating.",
  },
  {
    q: "Is SafeStorage ISO certified?",
    a: "Yes. SafeStorage operates an ISO 9001:2015 certified quality management system, independently audited for service standards and continuous improvement.",
  },
  {
    q: "What makes SafeStorage different from other Dubai storage companies?",
    a: "We are full service: our team collects, packs, transports, stores and delivers. You pay only for the space your items use, with door-to-door service across Dubai.",
  },
  {
    q: "How much total storage space does SafeStorage manage globally?",
    a: "Over 3 million square feet across India and the UAE — enough scale to handle a few boxes or a full office clearance to the same standard.",
  },
  {
    q: "Does SafeStorage operate only in Dubai within the UAE?",
    a: "Our UAE service covers every community in Dubai door to door, and we also collect from Sharjah, Ajman and Abu Dhabi.",
  },
]

// BreadcrumbList is emitted by SiloBreadcrumb from the trail it renders.
const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://safestorage.ae/about#webpage",
    name: "About SafeStorage Dubai — Dubai's Most Trusted Storage Partner",
    description: "Learn about SafeStorage Dubai — serving Dubai since 2015 with secure storage, 24/7 security, and door-to-door service. 100,000+ customers trust us worldwide.",
    url: "https://safestorage.ae/about",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    mainEntity: { "@id": "https://safestorage.ae/#organization" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function AboutPage() {
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <SchemaScript schema={aboutSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <SplitHero
          eyebrow="About SafeStorage"
          title="Dubai's Most Trusted"
          titleAccent="Storage Partner Since 2015"
          blurb="Not just a storage facility — your trusted partner in keeping your belongings safe, secure and within reach."
          image="/about/hero-warehouse.jpg"
          imagePosition="center 50%"
          ctaLabel="Get a Free Quote"
        />

        <LandingTrust />

        {/* OUR STORY */}
        <section className={`${s.section} ${s.wrap}`} id="story">
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Our story</span>
                <h2>
                  Redefining storage, <em>one customer at a time.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  A story built on trust, flexibility and uncompromising security.
                </p>
              </div>
            }
          >
            {story.map((st, i) => (
              <article className={`${s.usp} ${i === 2 ? s.panelAccent : ""}`} key={st.title}>
                <span className={s.uspNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={s.howEyebrow} style={{ fontSize: 11 }}>{st.kicker}</span>
                <h3 style={{ marginTop: 12 }}>{st.title}</h3>
                {st.body ? <p>{st.body}</p> : null}
                {st.points ? (
                  <ul className={s.checkList}>
                    {st.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </UspRail>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* JOURNEY */}
        <section className={`${s.section} ${s.wrap}`} id="journey" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Our journey</span>
              <h2>
                Key milestones <em>in our growth.</em>
              </h2>
            </div>
            <p>From a single idea in 2015 to 100,000+ customers across India and the UAE.</p>
          </div>
          <ol className={s.milestones}>
            {milestones.map(({ Icon, year, t: title, b }) => (
              <li className={s.milestone} key={year}>
                <span className={s.milestoneDot} aria-hidden="true">
                  <Icon />
                </span>
                <span className={s.milestoneYear}>{year}</span>
                <b>{title}</b>
                <small>{b}</small>
              </li>
            ))}
          </ol>
        </section>

        {/* WHO WE SERVE */}
        <section className={`${s.section} ${s.wrap}`} id="commitment" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Our commitment</span>
              <h2>
                Built for <em>everyone in Dubai.</em>
              </h2>
            </div>
            <p>
              200+ nationalities, very different needs — and the same secure storage, door-to-door pickup and
              dedicated service for every customer.
            </p>
          </div>
          <div className={s.miniGrid}>
            {whoWeServe.map(({ Icon, t: title, b }) => (
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
            <span><CheckCircle2 aria-hidden="true" /> Never lift a heavy box</span>
            <span><CheckCircle2 aria-hidden="true" /> Never rent a van</span>
            <span><CheckCircle2 aria-hidden="true" /> No facility visit needed</span>
            <span><CheckCircle2 aria-hidden="true" /> Returned on demand</span>
          </div>
        </section>

        <LandingWhy />

        <LandingReviews />

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                About <em>SafeStorage Dubai.</em>
              </h2>
            </div>
            <p>Our company, history, standards, and what makes us different.</p>
          </div>
          <FaqAccordion items={aboutFaqs} />
        </section>

        <CtaBand
          title="Ready to store with SafeStorage?"
          blurb="Join 100,000+ customers worldwide. Get your personalised quote in 2 minutes."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
