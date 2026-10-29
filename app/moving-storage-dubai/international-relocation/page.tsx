import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Boxes, Plane, Tag, CalendarClock, Home, FileCheck, RotateCcw } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/* 2026-10-29 redesign (owner's request): rebuilt in the landing design system
   with the owner's own photo beside the copy, and cut from 306 lines.
   The old copy breached several site rules, all removed here:
     - three testimonials written for this page and published nowhere else
     - "most expats save AED 10,000-20,000 by storing first" (an own-price
       saving claim built on an invented figure)
     - "88% of expats who leave Dubai say they'd consider returning" (no source)
     - "30 days' notice" in three places (no cancellation-notice periods)
     - "dedicated" units and "your storage unit" throughout (storage is shared
       space; no lockers, no private units)
     - "helped hundreds of families", "our longest-serving customers have
       stored for 4-5 years" (unverifiable)
     - 21 FAQs across two blocks, now five
   The destination freight figures stay: they are third-party costs, which the
   rules allow, and they are the most useful thing on the page. */

export const metadata: Metadata = {
  title: "International Relocation from Dubai | Store or Ship",
  description:
    "Moving internationally from Dubai? Store your belongings while you settle abroad, then decide what is worth shipping. Free, itemised quote.",
  keywords:
    "international relocation storage dubai, moving abroad from dubai storage, dubai international moving storage, shipping vs storage dubai, expat relocation dubai, moving overseas dubai storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/moving-storage-dubai/international-relocation",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/moving-storage-dubai/international-relocation" },
}

/* Third-party freight costs, not ours. Market rates for household moves out of
   Dubai, which is exactly the comparison people arrive on this page to make. */
const FREIGHT = [
  { to: "UK / Europe", sea: "AED 12,000–25,000", air: "AED 20–40 / kg", time: "4–8 weeks by sea" },
  { to: "India / South Asia", sea: "AED 6,000–15,000", air: "AED 15–30 / kg", time: "2–4 weeks by sea" },
  { to: "USA / Canada", sea: "AED 18,000–35,000", air: "AED 25–50 / kg", time: "6–10 weeks by sea" },
  { to: "Australia / NZ", sea: "AED 15,000–30,000", air: "AED 20–45 / kg", time: "5–8 weeks by sea" },
]

const DECIDE = [
  {
    icon: "📦",
    h: "Store it",
    p: "Furniture that costs more to replace than to hold. Seasonal things. Anything you are not sure about, and anything you would want if you came back.",
  },
  {
    icon: "✈️",
    h: "Ship it",
    p: "Irreplaceable and sentimental items, originals of important documents, children's essentials, and whatever you need in the first week.",
  },
  {
    icon: "🏷️",
    h: "Sell it",
    p: "Anything cheap to replace where you are going, appliances on the wrong voltage, and anything you have not used in a year.",
  },
]

const WHY = [
  {
    Icon: CalendarClock,
    h: "You are not sure it is permanent",
    p: "Contracts end and circumstances change. Ship everything, come back in six months, and you have paid freight twice.",
  },
  {
    Icon: Home,
    h: "You have not seen the new place",
    p: "You rarely know the size of the new home until you arrive. A full container of Dubai furniture does not fit a London flat.",
  },
  {
    Icon: FileCheck,
    h: "Customs and duty",
    p: "Shipping triggers customs checks and duty, and not everything enters freely — electronics especially. Storing removes that for now.",
  },
  {
    Icon: RotateCcw,
    h: "You might come back",
    p: "If returning to Dubai is even a possibility, holding the bulk here keeps that door open without a second freight bill.",
  },
]

const faqs = [
  {
    q: "Should I store or ship when leaving Dubai?",
    a: "If the move is certain, the new home is confirmed and you know what you need, shipping specific things makes sense. For most people a mix works better: hold the bulk in Dubai, ship only what you need on arrival, and decide the rest once you know the space you actually have.",
  },
  {
    q: "How quickly can you collect before I fly?",
    a: "Same-day collection can usually be arranged for a request made before midday. For a whole apartment or villa, book three to five days ahead so the right crew and vehicle are allocated. Evening slots are available where daytime access is restricted.",
  },
  {
    q: "Can I get specific things out once I have settled abroad?",
    a: "Yes. Tell us what you need and we locate it, prepare it for transit and have it ready for your courier or freight company to collect. You arrange the shipping contract; we handle the physical side.",
  },
  {
    q: "Can someone else access my goods while I am abroad?",
    a: "Yes. Authorise anyone in Dubai in writing and they can collect on your behalf with their own ID. You can add or revoke an authorised person remotely at any time, so you do not need to fly back to deal with it.",
  },
  {
    q: "How do I pay while living abroad?",
    a: "Billing runs automatically from any international Visa, Mastercard or Amex, with a receipt by email each month. You can update the card remotely by email or WhatsApp.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "International Relocation Storage Dubai",
    description:
      "Storage for expats relocating internationally from Dubai. Hold belongings while settling abroad, then decide what is worth shipping.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/moving-storage-dubai/international-relocation",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Relocation Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/moving-storage-dubai/international-relocation#webpage",
    name: "International Relocation Storage Dubai — Moving Abroad?",
    url: "https://safestorage.ae/moving-storage-dubai/international-relocation",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
]

export default function InternationalRelocationPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Moving & Storage Dubai", href: "/moving-storage-dubai" },
          { name: "International Relocation" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>International relocation</span>
              <h1>
                Leaving Dubai? <br />
                <em>Store While You Settle</em>
              </h1>
              <p>
                Before committing to a container, hold the bulk in Dubai and decide what is worth
                shipping once you know the space you are moving into.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1733 / 907" } as CSSProperties}>
              <Image
                src="/landing/international-relocation-hero.webp"
                alt="A SafeStorage crew loading a shipping container for an international move from Dubai"
                width={1733}
                height={907}
                sizes="(max-width: 900px) 94vw, 50vw"
                quality={85}
                loading="eager"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* what shipping actually costs — third-party market rates */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>At a glance</span>
              <h2 className={p.longH2}>
                What shipping out of Dubai <em>actually costs.</em>
              </h2>
            </div>
            <p>Market freight rates for a household move. Figures are from shipping agents, not from us.</p>
          </div>
          <HomeReveal className={p.siloRail}>
            {FREIGHT.map((f, i) => (
              <article className={p.siloCard} key={f.to} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}
                >
                  <Plane size={17} strokeWidth={1.9} />
                </span>
                <h3>{f.to}</h3>
                <ul className={s.miniFacts}>
                  <li>Sea, full container: {f.sea}</li>
                  <li>Air freight: {f.air}</li>
                  <li>{f.time}</li>
                </ul>
              </article>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <span aria-hidden="true">🚢</span>
            <p>
              Once a container sails there is no changing your mind. Storing in Dubai costs only the space your
              goods occupy and keeps every option open — ask for a free, itemised quote and compare it against
              the freight quotes you have.
            </p>
          </div>
        </section>

        {/* store / ship / sell */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The framework</span>
              <h2 className={p.longH2}>
                Store it, ship it, <em>or sell it.</em>
              </h2>
            </div>
            <p>Sort everything into three piles before you price anything.</p>
          </div>
          <HomeReveal className={`${p.siloGrid} ${p.trio}`}>
            {DECIDE.map((c, i) => (
              <article className={p.siloCard} key={c.h} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ fontSize: 18, background: TINTS[i % TINTS.length].bg }}
                >
                  {c.icon}
                </span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* why store first — dark band */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why it matters</span>
              <h2>
                Four reasons people hold <br className={s.mBreak} />
                <em>the bulk in Dubai.</em>
              </h2>
            </div>
            <FeatScroller>
              {WHY.map((f) => (
                <article className={s.feat} key={f.h}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        <LandingReviews padTop={0} />

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 28 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Common <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Do not rush the decision"
          blurb="Hold the bulk in Dubai and decide once you have landed. Free, itemised quote, and we collect from your door."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/moving-storage-dubai/international-relocation" />
    </>
  )
}
