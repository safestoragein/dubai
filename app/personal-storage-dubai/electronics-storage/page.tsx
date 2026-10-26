import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Wind, Zap, Layers, Bug, Lock, BatteryLow, Package, Shield, Cpu, Box, Plane, Building2, Hammer, Sun, ShoppingCart, Server } from "lucide-react"

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

/*
 * Silo 2 · /personal-storage-dubai/electronics-storage
 *
 * Redesigned in the homepage style (owner, 2026-10-24) with their own picture.
 * The copy is the page's own, shortened: two FAQ blocks become one accordion
 * of five, and the three customer quotes — which are not in the published set
 * — are replaced by the shared reviews band.
 */

export const metadata: Metadata = {
  title: "Electronics Storage Dubai — Dust-Protected & Secure",
  description:
    "Electronics storage in Dubai: laptops, TVs, servers and gaming gear packed anti-static, sealed against dust and stored indoors. Door-to-door pickup and a free, itemised quote.",
  keywords:
    "electronics storage dubai, computer storage dubai, tv storage dubai, server storage dubai, laptop storage dubai, gaming pc storage dubai, it equipment storage dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/electronics-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/electronics-storage" },
}

const faqs = [
  {
    q: "How should I prepare electronics before storage?",
    a: "Power everything down fully rather than leaving it in sleep. Take out removable batteries, and leave lithium batteries around half charged rather than full or empty. Back up anything you cannot lose, and keep the original boxes if you still have them.",
  },
  {
    q: "Can you store a gaming PC or desktop?",
    a: "Routinely. Towers are stored upright rather than on their side, in sealed cartons with anti-static packing, so nothing shifts against a GPU or a cooler.",
  },
  {
    q: "Can I store servers or network equipment?",
    a: "Yes — rack-mounted servers, NAS units, switches and UPS systems. Tell us at collection what is sensitive and it is logged and racked accordingly.",
  },
  {
    q: "How long can electronics safely stay in storage?",
    a: "Indefinitely, in clean indoor storage with sealed packing and anti-static handling. The things that shorten it are dust, heat and batteries left at full or empty charge — all of which are handled at collection.",
  },
  {
    q: "What about data on the drives?",
    a: "It stays yours and nothing is powered on in storage. Back up before collection, and if a device holds sensitive data, say so and it is recorded on the inventory against your account.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Electronics Storage Dubai",
    description:
      "Dust-protected, anti-static electronics storage in Dubai for laptops, TVs, servers, gaming equipment and professional gear, with door-to-door collection.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/personal-storage-dubai/electronics-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Electronics Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/electronics-storage#webpage",
    name: "Electronics Storage Dubai",
    url: "https://safestorage.ae/personal-storage-dubai/electronics-storage",
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

const risks = [
  { Icon: Wind, h: "Dust and sand", p: "Fine desert dust settles in vents, fans and ports, and shows up as overheating the first time a device is switched back on." },
  { Icon: Zap, h: "Static discharge", p: "Careless handling of exposed boards, GPUs and RAM causes invisible damage that leaves a device dead on arrival." },
  { Icon: Layers, h: "Knocks and stacking", p: "Screens crack and connectors bend when equipment is stacked without padding and anti-shock packing." },
  { Icon: Bug, h: "Pests", p: "Cables and insulation are chewed through in open, poorly kept spaces." },
  { Icon: Lock, h: "Theft and tampering", p: "High-value tech is a target, and open warehouse bays without access control leave it exposed." },
  { Icon: BatteryLow, h: "Batteries in disuse", p: "Lithium cells left at full or empty charge for months degrade. Preparation at collection prevents it." },
]

const categories = [
  {
    icon: "💻",
    name: "Computing",
    items: ["Laptops and desktops", "Servers and NAS units", "Monitors and displays", "External drives and SSDs", "Routers and switches", "UPS and power equipment", "Printers and scanners", "Point-of-sale systems"],
  },
  {
    icon: "📺",
    name: "Consumer",
    items: ["Flat-screen TVs, all sizes", "Home theatre systems", "Consoles — PS5, Xbox, Nintendo", "Smart home devices", "Tablets and iPads", "Cameras and photography gear", "Drones and accessories", "Streaming devices and speakers"],
  },
  {
    icon: "🎛️",
    name: "Professional",
    items: ["DJ and audio equipment", "Audio and video production gear", "Medical and diagnostic devices", "Lab and measurement instruments", "CCTV and security systems", "Broadcast equipment", "Industrial control units", "Scientific instruments"],
  },
]

const standards = [
  { Icon: Package, h: "Sealed against dust", p: "Sealed cartons and anti-static bags inside a clean, enclosed indoor unit — not an open bay." },
  { Icon: Cpu, h: "Anti-static handling", p: "The crew uses anti-static procedure around boards, storage media and anything with exposed pins." },
  { Icon: Shield, h: "Indoors and covered", p: "No yard, no container. Heat and dust are what finish electronics off in this region." },
  { Icon: Box, h: "Original boxes where possible", p: "If you still have them they are the best protection there is; if not, we pack to the same standard." },
]

const who = [
  { Icon: Plane, h: "Expats leaving Dubai", p: "Two suitcases on the plane and a home office left behind — storing here costs a fraction of shipping it." },
  { Icon: Building2, h: "Businesses between offices", p: "IT equipment, monitors and peripherals held while the new space is fitted out." },
  { Icon: Hammer, h: "Renovation", p: "Construction dust is as hard on electronics as heat. Out of the villa while the work runs." },
  { Icon: Sun, h: "Seasonal residents", p: "A summer away rather than a hot flat with the AC off and a TV in it." },
  { Icon: ShoppingCart, h: "Resellers", p: "Stock kept in sellable condition — no dust damage, no packaging deterioration." },
  { Icon: Server, h: "IT asset management", p: "Surplus equipment awaiting refresh, donation or resale, logged item by item." },
]

/* a colour per card, cycled */
const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

export default function ElectronicsStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Electronics Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>Electronics storage Dubai</span>
              <h1>
                Electronics Storage — <br className={s.mBreakDesk} />
                <em>Sealed Against the Dust</em>
              </h1>
              <p>
                Laptops, TVs, servers and gaming gear packed anti-static, sealed in cartons and stored
                indoors. Collected from your door, logged item by item.
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
                src="/landing/electronics-storage-hero.webp"
                alt="A SafeStorage crew member bubble-wrapping a television in a Dubai apartment"
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

        {/* why electronics fail in the wrong storage — dark band */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why it matters</span>
              <h2>
                What kills electronics <br className={s.mBreak} />
                <em>in the wrong storage.</em>
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
                From a laptop <em>to a server rack.</em>
              </h2>
            </div>
            <p>If it plugs in, it has been through here.</p>
          </div>
          <HomeReveal className={`${p.siloGrid} ${p.trio}`}>
            {categories.map((c, i) => (
              <article className={p.siloCard} key={c.name} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span className={s.miniIcon} aria-hidden="true" style={{ fontSize: 18, background: TINTS[i % TINTS.length].bg }}>
                  {c.icon}
                </span>
                <h3>{c.name}</h3>
                <ul className={s.yesList}>
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* how it is packed */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How it is packed</span>
              <h2 className={p.longH2}>
                Four standards, <em>every booking.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {standards.map((x, i) => (
              <div className={s.miniCard} key={x.h} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon} style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}>
                  <x.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{x.h}</b>
                  <small>{x.p}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* who stores electronics */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Who stores it</span>
              <h2 className={p.longH2}>
                Six reasons <em>tech ends up here.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`}>
            {who.map((x, i) => (
              <div className={s.miniCard} key={x.h} style={{ ["--i"]: i } as CSSProperties}>
                <span className={s.miniIcon} style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}>
                  <x.Icon strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>{x.h}</b>
                  <small>{x.p}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <p>
              Storing a whole home rather than just the tech?{" "}
              <Link href="/personal-storage-dubai/furniture-storage">Furniture storage</Link> covers the
              rest of it, and the{" "}
              <Link href="/self-storage-dubai/storage-calculator">size calculator</Link> gives you a
              figure before anyone quotes.
            </p>
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
          title="Store your electronics safely"
          blurb="Door-to-door pickup across Dubai, anti-static packing included, and a free itemised quote before anything is booked."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/personal-storage-dubai/electronics-storage" />
    </>
  )
}
