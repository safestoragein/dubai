import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Sun, Wind, Bird, CircleDot, BatteryLow, Camera, Car, Clock, FileText, KeyRound, ShieldCheck, RotateCcw } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { FeatScroller } from "@/components/landing/feat-scroller"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/* 2026-10-26 redesign (owner's request): the owner's own photo beside the copy,
   content cut hard, and the page's own metadata — it had been carrying the
   motorcycle page's title, description and keywords. The three testimonials
   written for this page were replaced with the published ones (LandingReviews),
   and the discount claims and unsourced AED damage figures were removed. */

export const metadata: Metadata = {
  title: { absolute: "Car Storage Dubai | Secure Covered Indoor Vehicle Storage" },
  description:
    "Covered indoor car and vehicle storage in Dubai. Cars, motorcycles, classic and luxury vehicles stored out of the sun, sand and dust, with 24/7 CCTV. Pay only for the space your vehicle uses.",
  keywords:
    "car storage dubai, vehicle storage dubai, indoor car storage dubai, classic car storage dubai, covered parking storage dubai, long term car storage uae",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/car-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/car-storage" },
}

const faqs = [
  {
    q: "How much does car storage cost in Dubai?",
    a: "You pay only for the space your vehicle occupies, so a motorcycle costs less than an SUV. Classic cars and oversized vehicles are quoted individually after we know the model. Ask for a free, itemised quote and there is no obligation.",
  },
  {
    q: "Is your car storage indoors and covered?",
    a: "Yes, every vehicle bay is indoors and under cover — out of the direct sun, dust, sandstorms, rain and bird droppings that cause paint oxidation and interior fading on cars left parked in the open.",
  },
  {
    q: "Do you offer pickup for vehicle storage?",
    a: "Yes. You can drive in, or we can arrange transport for a vehicle that cannot be driven. Tell us the vehicle and where it is and we will quote the move with the storage.",
  },
  {
    q: "Can I access my vehicle while it is in storage?",
    a: "Yes, during operating hours, Monday to Sunday 8am to 8pm. Give us two hours' notice and the vehicle will be ready to drive out.",
  },
  {
    q: "What happens to my vehicle while it is stored?",
    a: "The team carries out regular visual inspections, checks tyre pressure monthly and monitors the storage environment around the clock. Tell us if the car is going away for a long period and we will talk through what it needs before it goes in.",
  },
]

const risks = [
  { Icon: Sun, h: "Paint oxidises", p: "UV in Dubai is among the highest anywhere, and it fades and dulls paintwork on a car left in the open." },
  { Icon: Wind, h: "Sand and dust", p: "Blowing sand scratches paintwork and clogs vents, air intakes and door seals." },
  { Icon: Bird, h: "Droppings and sap", p: "Bird droppings, tree sap and construction dust etch and stain exposed bodywork and glass." },
  { Icon: CircleDot, h: "Tyres flat-spot", p: "Tyres develop flat spots and crack when a vehicle is left standing and unattended for weeks." },
  { Icon: BatteryLow, h: "Batteries go flat", p: "Batteries drain and fluids stagnate when a car sits unused with nobody checking on it." },
]

const vehicles = [
  { icon: "🚗", name: "Cars and SUVs", desc: "Sedans, SUVs, sports and family cars — hatchbacks to Range Rovers." },
  { icon: "🏍️", name: "Motorcycles and scooters", desc: "All makes and models, from superbikes to delivery scooters." },
  { icon: "🏎️", name: "Classic and luxury", desc: "Vintage and collector vehicles, handled and quoted individually." },
  { icon: "🚤", name: "Boats and jet skis", desc: "Personal watercraft, speedboats and small leisure vessels." },
  { icon: "🚐", name: "Caravans and motorhomes", desc: "Campers and recreational vehicles, with oversized bay options." },
  { icon: "🛻", name: "Light commercial", desc: "Pickups, vans and small trucks for businesses between contracts." },
]

const included = [
  { Icon: Car, title: "Covered indoor bays", desc: "Stored indoors under cover, out of the sun, dust, sandstorms, rain and droppings." },
  { Icon: Camera, title: "24/7 HD CCTV", desc: "Every bay is covered by high-definition cameras monitored around the clock." },
  { Icon: ShieldCheck, title: "Monthly inspections", desc: "Regular visual checks for leaks, tyre condition and anything visible that needs attention." },
  { Icon: Clock, title: "Flexible terms", desc: "Month to month, with no penalty. Store for one month or for years." },
]

const steps = [
  { Icon: FileText, step: "1", title: "Get a quote", desc: "Tell us the vehicle, its size and roughly how long. A free, itemised quote by phone or online." },
  { Icon: KeyRound, step: "2", title: "Drive in, or we collect", desc: "Drive it to the facility, or we arrange transport. Either way there is a condition report before it goes in." },
  { Icon: ShieldCheck, step: "3", title: "Into its covered bay", desc: "The vehicle is logged in with photos and condition notes, then parked indoors under cover." },
  { Icon: RotateCcw, step: "4", title: "Out whenever you need", desc: "Two hours' notice and it is ready. Drive it out, or we arrange delivery." },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/car-storage#webpage",
    name: "Car Storage Dubai — Secure Indoor Vehicle Storage",
    url: "https://safestorage.ae/personal-storage-dubai/car-storage",
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
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

export default function CarStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Car Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>Vehicle storage Dubai</span>
              <h1>
                Car Storage in Dubai — <br className={s.mBreakDesk} />
                <em>Covered, Indoors</em>
              </h1>
              <p>
                Cars, bikes, classics and campers stored out of the sun, sand and dust. Drive in or we
                collect, and you pay only for the space your vehicle uses.
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
                src="/landing/car-storage-hero-side.webp"
                alt="A SafeStorage crew member handing a car back to its owner outside the covered vehicle bays in Dubai"
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

        {/* what outdoor parking does — dark band */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why it matters</span>
              <h2>
                What a Dubai summer does <br className={s.mBreak} />
                <em>to a car left outside.</em>
              </h2>
            </div>
            <FeatScroller>
              {risks.map((r) => (
                <article className={s.feat} key={r.h}>
                  <div className={s.featIcon}>
                    <r.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{r.h}</h3>
                  <p>{r.p}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* what we store */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>What we store</span>
              <h2 className={p.longH2}>
                From a scooter <em>to a motorhome.</em>
              </h2>
            </div>
            <p>If it has wheels, it has been through here.</p>
          </div>
          <HomeReveal className={p.siloRail}>
            {vehicles.map((v, i) => (
              <article className={p.siloCard} key={v.name} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ fontSize: 18, background: TINTS[i % TINTS.length].bg }}
                >
                  {v.icon}
                </span>
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* what is included */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Every vehicle</span>
              <h2 className={p.longH2}>
                Included with <em>every booking.</em>
              </h2>
            </div>
            <p>No hidden extras and no surprise charges.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`} style={{ ["--cols"]: 4 } as CSSProperties}>
            {included.map((c, i) => (
              <article className={s.miniCard} key={c.title} style={{ ["--i"]: i } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}
                >
                  <c.Icon size={17} strokeWidth={1.9} />
                </span>
                <div>
                  <b>{c.title}</b>
                  <small>{c.desc}</small>
                </div>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* how it works */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How it works</span>
              <h2 className={p.longH2}>
                Four steps, <em>start to finish.</em>
              </h2>
            </div>
          </div>
          <MilestonesPlayer>
            <ol className={s.milestones} style={{ ["--steps"]: 4 } as CSSProperties}>
              {steps.map(({ Icon, step, title, desc }, i) => (
                <li className={s.milestone} key={step} style={{ ["--i"]: i } as CSSProperties}>
                  <span className={s.milestoneDot} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={s.milestoneYear}>Step {step}</span>
                  <b>{title}</b>
                  <small>{desc}</small>
                </li>
              ))}
            </ol>
          </MilestonesPlayer>
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
          title="Ready to get the car under cover?"
          blurb="Tell us the vehicle and roughly how long. A free, itemised quote, and you pay only for the space it uses."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/personal-storage-dubai/car-storage" />
    </>
  )
}
