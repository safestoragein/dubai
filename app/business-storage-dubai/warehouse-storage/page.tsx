import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Truck, ShieldCheck, Package, Clock, Boxes, Building2, Hammer, FileText } from "lucide-react"
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

// P1 landing page from the August 2026 SEO audit.
//
// IMPORTANT — honesty constraint: SafeStorage operates ONE facility, in Dubai
// Investment Park. This page targets warehouse *storage* intent truthfully: it
// is positioned as the alternative to signing a warehouse lease, and Al Quoz /
// Jebel Ali are named as areas we collect from and compare against, never as
// locations where we operate a warehouse.
//
// 2026-10-26 redesign (owner's request): rebuilt in the landing design system
// with the owner's own photo beside the copy. Three site rules were breached by
// the old copy and are fixed here: the "30 days' notice" scale-down term (no
// cancellation-notice periods), "a monthly rate excluding VAT" (no VAT wording
// in prices), and an FAQ asserting we are cheaper than a lease.

export const metadata: Metadata = {
  title: "Warehouse Storage Dubai | Space Without a Lease",
  description:
    "Warehouse storage in Dubai. Pay for the space you use instead of leasing a whole warehouse — no long lease, no fit-out, no Ejari.",
  keywords:
    "warehouse storage dubai, warehouse dubai, warehouse for rent in dubai, warehouse al quoz, warehouse in dubai, warehouse rent dubai, small warehouse for rent dubai, warehouse space dubai, business storage dubai, jebel ali warehouse",
  alternates: {
    canonical: "https://safestorage.ae/business-storage-dubai/warehouse-storage",
    languages: {
      en: "https://safestorage.ae/business-storage-dubai/warehouse-storage",
      "x-default": "https://safestorage.ae/business-storage-dubai/warehouse-storage",
    },
  },
  openGraph: {
    url: "https://safestorage.ae/business-storage-dubai/warehouse-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "Warehouse storage in Dubai" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-cover-2026.jpg"] },
}

const SIZES = [
  { size: "100 sq ft", equiv: "~5 pallets", use: "Sample stock, spare parts, seasonal overflow" },
  { size: "250 sq ft", equiv: "~12 pallets", use: "Small e-commerce inventory, event equipment" },
  { size: "500 sq ft", equiv: "~25 pallets", use: "Growing online retailer, contractor materials" },
  { size: "1,000 sq ft", equiv: "~50 pallets", use: "Established distributor, full office relocation" },
  { size: "2,000+ sq ft", equiv: "100+ pallets", use: "Bulk inventory, archive, fit-out storage" },
]

const OURS = [
  "Month to month, with no lease to break",
  "From 100 sq ft, not 2,000",
  "Racking and fit-out included — the space is ready",
  "No Ejari or trade licence needed to store",
  "Utilities, chiller and cover included in the rate",
  "Our team loads, stores and retrieves",
  "Door-to-door collection and delivery included",
]

const THEIRS = [
  "One to three year lease, typically",
  "Usually 2,000 sq ft minimum",
  "Fit-out at your cost, plus reinstatement at exit",
  "Ejari registration required",
  "DEWA, chiller and insurance billed separately",
  "You hire or contract the labour",
  "You arrange the transport",
]

const INCLUDED = [
  { Icon: Truck, title: "Door-to-door transport", body: "We collect from your premises anywhere in Dubai and deliver back on request — no lorry to hire." },
  { Icon: ShieldCheck, title: "Security and compliance", body: "Multi-angle CCTV, logged access control, fire detection and suppression, signed inventory at intake." },
  { Icon: Package, title: "Racking and handling", body: "Pallet racking, raised platforms and trained staff. Nothing for you to buy or install." },
  { Icon: Clock, title: "24–48 hour retrieval", body: "Request full or partial retrieval and we deliver within 24–48 hours." },
]

const WHO = [
  { Icon: Boxes, title: "E-commerce retailers", body: "Hold stock without committing to a warehouse before volumes justify one.", href: "/business-storage-dubai/ecommerce-fulfilment" },
  { Icon: Building2, title: "Between premises", body: "Office relocations, showroom refits and lease gaps, for weeks or years.", href: "/business-storage-dubai" },
  { Icon: Hammer, title: "Contractors and fit-out", body: "Materials, tools and site equipment between projects, delivered to the next job.", href: "/get-quote" },
  { Icon: FileText, title: "Companies with archives", body: "Records you must retain but that do not belong in office space. Catalogued and retrievable.", href: "/business-storage-dubai/document-storage" },
]

const AREAS = [
  "Al Quoz 1–4",
  "Jebel Ali",
  "JAFZA",
  "Dubai Investment Park",
  "Ras Al Khor",
  "Dubai South",
  "Techno Park",
  "Al Qusais",
  "Umm Ramool",
  "Dubai Industrial City",
  "Business Bay",
  "DIFC",
]

const FAQS = [
  {
    q: "Do you have a warehouse for rent in Dubai?",
    a: "Not in the traditional sense, and for most businesses that is the point. Rather than an empty shell you fit out, insure and commit to for years, you get a defined, secure area inside our Dubai Investment Park warehouse, charged by the square foot you occupy, with racking, security, utilities and handling included.",
  },
  {
    q: "Can I get a small warehouse for rent in Dubai?",
    a: "Small units are where conventional leasing breaks down — most Dubai landlords will not split a warehouse below about 2,000 sq ft. We start at 100 sq ft, roughly five pallets, and you move up in increments as stock grows, without renegotiating a lease.",
  },
  {
    q: "Do you cover Al Quoz, Jebel Ali and Ras Al Khor?",
    a: "Yes — we collect from and deliver to Al Quoz, Jebel Ali, JAFZA, Ras Al Khor, Dubai South, DIP, Techno Park and every other industrial area in Dubai. Your goods are stored at our Dubai Investment Park facility, on the Al Quoz–Jebel Ali corridor, so transit either way is short.",
  },
  {
    q: "Can I access my stock or send items out?",
    a: "Yes. Tell us what you need and we retrieve and deliver it, typically within 24 to 48 hours, anywhere in Dubai. You can also visit during business hours, Monday to Sunday 8am to 8pm, to check or pick stock yourself.",
  },
  {
    q: "Do I need a trade licence to store business goods?",
    a: "No trade licence or Ejari is required, which is why new and overseas businesses use this route while their Dubai entity is being set up. We do need to know what you are storing, as hazardous, flammable, perishable and unlicensed goods cannot be accepted.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/business-storage-dubai/warehouse-storage#webpage",
    name: "Warehouse Storage Dubai | Space Without a Lease",
    description:
      "Flexible warehouse storage in Dubai. Pay for the space you use instead of leasing a whole warehouse.",
    url: "https://safestorage.ae/business-storage-dubai/warehouse-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    about: { "@id": "https://safestorage.ae/#business" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Warehouse Storage Dubai",
    description:
      "Flexible warehouse storage space in Dubai charged per square foot, including racking, security, utilities and door-to-door collection and delivery.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    areaServed: { "@type": "City", name: "Dubai" },
    url: "https://safestorage.ae/business-storage-dubai/warehouse-storage",
    serviceType: "Warehouse Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
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

export default function WarehouseStorageDubaiPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Business Storage Dubai", href: "/business-storage-dubai" },
          { name: "Warehouse Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>Warehouse storage Dubai</span>
              <h1>
                Warehouse Storage Dubai <br className={s.mBreakDesk} />
                <em>Space Without the Lease</em>
              </h1>
              <p>
                Pay for the square footage you actually use, from 100 sq ft up. Racking,
                security, utilities and door-to-door collection included. No long lease, no
                fit-out, no Ejari.
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
                src="/landing/warehouse-storage-hero.webp"
                alt="SafeStorage staff moving pallets into the Dubai Investment Park warehouse"
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

        {/* what's included — dark band */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Every booking</span>
              <h2>
                The space comes ready <br className={s.mBreak} />
                <em>to put stock in.</em>
              </h2>
            </div>
            <FeatScroller>
              {INCLUDED.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* sizes */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>At a glance</span>
              <h2 className={p.longH2}>
                What fits in <em>how much space.</em>
              </h2>
            </div>
            <p>Pallet counts assume standard 1.2 × 1.0 m pallets at normal stacking height.</p>
          </div>
          <HomeReveal className={p.siloRail}>
            {SIZES.map((z, i) => (
              <article className={p.siloCard} key={z.size} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}
                >
                  <Boxes size={17} strokeWidth={1.9} />
                </span>
                <h3>{z.size}</h3>
                <ul className={s.miniFacts}>
                  <li>{z.equiv}</li>
                  <li>{z.use}</li>
                </ul>
              </article>
            ))}
          </HomeReveal>
          <div className={s.movingTip}>
            <span aria-hidden="true">📐</span>
            <p>
              Sizes are estimated. Not sure which you need? Tell us what you are storing and we will size it
              for you — <Link href="/self-storage-dubai/unit-sizes">see the full size guide</Link>.
            </p>
          </div>
        </section>

        {/* vs leasing */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The comparison</span>
              <h2 className={p.longH2}>
                Storing with us <em>vs leasing a warehouse.</em>
              </h2>
            </div>
            <p>Most businesses searching for a warehouse want somewhere secure to put stock, not a building.</p>
          </div>
          <HomeReveal className={`${p.siloGrid} ${p.duo}`}>
            <article className={p.siloCard} style={{ ["--i"]: 0, cursor: "default" } as CSSProperties}>
              <h3>Space with SafeStorage</h3>
              <ul className={s.yesList}>
                {OURS.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article className={p.siloCard} style={{ ["--i"]: 1, cursor: "default" } as CSSProperties}>
              <h3>A conventional Dubai lease</h3>
              <ul className={s.crossList}>
                {THEIRS.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          </HomeReveal>
        </section>

        {/* who uses it */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Who uses it</span>
              <h2 className={p.longH2}>
                Four businesses <em>that store here.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${s.miniGrid} ${s.miniTight}`} style={{ ["--cols"]: 4 } as CSSProperties}>
            {WHO.map((w, i) => (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={w.href} key={w.title} style={{ ["--i"]: i } as CSSProperties}>
                <span
                  className={s.miniIcon}
                  aria-hidden="true"
                  style={{ background: TINTS[i % TINTS.length].bg, color: TINTS[i % TINTS.length].fg }}
                >
                  <w.Icon size={17} strokeWidth={1.9} />
                </span>
                <div>
                  <b>{w.title}</b>
                  <small>{w.body}</small>
                </div>
                <span className={s.miniArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </HomeReveal>
        </section>

        {/* areas */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Where we collect</span>
              <h2 className={p.longH2}>
                Every Dubai <em>industrial area.</em>
              </h2>
            </div>
            <p>
              Our facility is at Building 23, Warehouse 5, Dubai Investment Park — on the corridor between
              Al Quoz and Jebel Ali. You never need to travel to it; we collect and deliver.
            </p>
          </div>
          <div className={s.areaMarquees}>
            {[AREAS.slice(0, 6), AREAS.slice(6)].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                      {row.map((area) => (
                        <li key={area}>
                          <span className={s.chip}>{area}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
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
          <FaqAccordion items={FAQS} />
        </section>

        <CtaBand
          title="Tell us what you need to store"
          blurb="Send a rough idea of your stock — pallets, boxes, equipment — and we will size the space and send a free, itemised quote. No obligation."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/business-storage-dubai/warehouse-storage" />
    </>
  )
}
