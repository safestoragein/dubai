import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Shield, Clock, MapPin, Info, CheckCircle2 } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import AreaLinks from "@/components/locations/area-links"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { env } from "@/lib/env"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import Reveal from "./Reveal"

/* 2026-09-19 redesign (owner's request): the live copy is kept word for word —
   including what the shared LocationPage rendered for this area — laid out in
   the landing design system with the owner's photo. The shared LocationPage is
   no longer used here (16 other pages still use it, untouched). FAQs cut to
   the owner's limit of 5. */

export const metadata: Metadata = {
  title: { absolute: "Self Storage Dubai Marina | Door-to-Door Collection" },
  // "free pickup" in the spec: transport is charged (df0df39 / 166d65a).
  description:
    "Secure storage in Dubai Marina with door-to-door pickup. 24/7 security & secure storage for furniture, sports gear, and more.",
  keywords:
    "Storage Dubai Marina, Self storage Marina, JBR storage, Marina Walk storage, Bluewaters storage, Household storage Marina, Furniture storage Dubai, Secure storage units, Storage with pickup, Personal storage Dubai, Apartment storage Marina, Short term storage, Business storage Marina, SafeStorage Marina",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/dubai/dubai-marina",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai/dubai-marina",
    // The Arabic counterpart uses the SAME slug on purpose — see
    // lib/ar/emirates.ts. Translating it would break this pairing, and the
    // pairing is precisely why this page was re-pathed under /dubai/: English
    // sat at /locations/dubai-marina while Arabic sat at
    // /ar/locations/dubai/dubai-marina, so the two never resolved as alternates.
    languages: {
      "en-AE": "https://safestorage.ae/locations/dubai/dubai-marina",
      "ar-AE": "https://safestorage.ae/ar/locations/dubai/dubai-marina",
      "x-default": "https://safestorage.ae/locations/dubai/dubai-marina",
    },
  },
}

const faqs = [
  { q: "How do I store furniture during my Dubai Marina apartment renovation?", a: "The process is very simple with SafeStorage. Contact us by phone or WhatsApp (+971505773388), share a list or photos of the furniture you need to store, and receive a transparent quote. Once confirmed, we arrive at your Marina apartment on the scheduled date, professionally wrap and protect all furniture pieces, load them into our covered vehicle, and transport them to our secure facility. We store everything until your renovation is complete, then return all items to your apartment floor. Renovation storage plans start from one week with no minimum commitment required." },
  { q: "Can SafeStorage help when my JBR lease ends before my new apartment is ready?", a: "Absolutely — this is one of our most common service requests in JBR and across Dubai Marina. When your JBR lease ends and your new apartment is not yet available, SafeStorage bridges the gap by storing all your belongings safely while you are in temporary accommodation. We can pick up from your current apartment on or before your lease end date and deliver everything to your new address once it is ready. The storage plan runs month-to-month with no penalties for short stays. Call us early to secure a pickup slot on your preferred move-out date." },
  { q: "Is Palm Jumeirah included in the Dubai Marina service zone?", a: "Yes, Palm Jumeirah is fully covered within our Dubai Marina service zone. We serve all parts of the Palm — the Trunk, all numbered Fronds, and the Crescent including Atlantis, One Palm, and the Waldorf Astoria residences. Given the Palm's unique layout and the value of property there, we treat all Palm Jumeirah pickups with the same care and professionalism as any luxury residential service. Our team is experienced with the Palm's access roads and building procedures for both the Signature Villas and the Shoreline Apartments." },
  { q: "What is the fastest way to get same-day pickup in Dubai Marina?", a: "The fastest way to secure same-day pickup in Dubai Marina is to WhatsApp us on +971505773388 before 10 AM on any day of the week. This gives our scheduling team the maximum time to fit you into the day's pickup schedule. In your WhatsApp message, include your building name and unit number, a brief description of what you need to store (or photos), and your preferred time window for the same day. We will confirm availability and pricing within minutes. Same-day service is subject to availability but is possible in most Dubai Marina, JBR, and JLT locations on most working days." },
  { q: "Do you collect from JLT and Bluewaters as well as Dubai Marina?", a: "Yes. The Dubai Marina zone covers JLT, Marina Walk, the Marina Mall towers, Bluewaters Island and JBR, all served by the same team on the same schedule. JLT does not have a separate location page because it is collected as part of this zone. Building access in Marina and JLT towers usually needs a booked loading bay slot, so give us the tower name when you book and we will arrange it with building management." },
]

const dubaiMarinaSchemas = [
  locationBusinessSchema({
    name: "Dubai Marina",
    url: "https://safestorage.ae/locations/dubai/dubai-marina",
    serves: ["JBR", "Bluewaters"],
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Storage Near Dubai Marina & JBR",
    description: "Furniture storage during renovation in Dubai Marina & JBR. Short-term storage between leases. Door-to-Door pickup from Marina & JBR.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/locations/dubai/dubai-marina",
    areaServed: [
      { "@type": "Place", name: "Dubai Marina" },
      { "@type": "Place", name: "JBR" },
      { "@type": "Place", name: "Bluewaters" },
    ],
    serviceType: "Self Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/locations/dubai/dubai-marina#webpage",
    name: "Secure SafeStorage Units Dubai Marina | Self Storage",
    description: "Secure storage in Dubai Marina with door-to-door pickup. 24/7 security & secure storage for furniture, sports gear, and more.",
    url: "https://safestorage.ae/locations/dubai/dubai-marina",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 5).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
]

const areas = ["Dubai Marina", "JBR", "Marina Walk", "Dubai Marina Mall area", "Bluewaters"]

const benefits = [
  { e: "🚪", text: "Door-to-Door pickup from your Marina apartment" },
  { e: "🛣️", text: "Quick access via Sheikh Zayed Road" },
  { e: "📦", text: "Ideal for Marina residents downsizing" },
  { e: "🏄", text: "Perfect for storing beach and water sports equipment" },
]

const features = [
  { Icon: Truck, title: "Door-to-door Service", body: "We collect from Dubai Marina and deliver back when needed" },
  { Icon: Shield, title: "24/7 Security", body: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
  { Icon: Clock, title: "Clean & Dust-Protected", body: "Indoor units kept clean and dust-protected year-round" },
]

const coverage = [
  { e: "🌊", title: "Marina & JBR", items: ["Dubai Marina Towers", "Jumeirah Beach Residence", "Marina Walk", "The Walk at JBR", "Bluewaters Island"] },
  { e: "🏙️", title: "Nearby Communities", items: ["JLT (Jumeirah Lake Towers)", "Dubai Media City", "Dubai Internet City", "Knowledge Park", "Al Sufouh"] },
  { e: "🌴", title: "Palm & Beyond", items: ["Palm Jumeirah", "The Greens", "The Views", "Dubai Sports City", "Motor City"] },
]

const uses = [
  { e: "🔨", title: "Apartment renovation storage", body: "Keep your furniture and belongings protected while contractors work" },
  { e: "🔑", title: "Between-lease storage", body: "Bridge the gap between old and new tenancy with flexible short-term plans" },
  { e: "📦", title: "Downsizing storage", body: "Moving to a smaller unit? Keep the overflow in secure storage" },
  { e: "🏄", title: "Beach & water sports equipment", body: "Kayaks, paddleboards, jet skis, and sports gear stored safely year-round" },
  { e: "✈️", title: "Expat repatriation storage", body: "Keep belongings safely in Dubai while you decide what to ship home" },
  { e: "🎄", title: "Seasonal items", body: "Holiday decorations, winter clothes, and items not needed year-round" },
]

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function DubaiMarinaPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: "Dubai", href: "/locations/dubai" },
          { name: "Dubai Marina" },
        ]}
      />
      <SchemaScript schema={dubaiMarinaSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — copy left, owner's photo right (bigger, owner's choice) */}
        <section className={`${s.hero} ${s.wrap} ${h.split2}`}>
          <div className={h.split2Inner}>
            <div className={`${s.heroContent} ${h.split2Copy}`}>
              <span className={s.heroTag}>Dubai Marina</span>
              <h1>
                Storage Solutions in <br className={s.mBreakDesk} />
                <em>Dubai Marina</em>
              </h1>
              <p>
                Apartment storage for Marina, JLT, JBR and Bluewaters, built around towers where storage rooms are
                small and loading-bay slots have to be booked.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get Instant Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={h.split2Photo}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/landing/dubai-marina-hero-m.webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/dubai-marina-hero-side.webp"
                  alt="SafeStorage movers collecting boxes from a Dubai Marina apartment"
                  width={1733}
                  height={907}
                  fetchPriority="high"
                />
              </picture>
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* AREAS WE SERVE */}
        <section className={`${s.section} ${s.wrap}`} id="areas">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Coverage</span>
              <h2>
                Areas We Serve in <em>Dubai Marina</em>
              </h2>
            </div>
          </div>
          <div className={s.areaMarquees}>
            {[areas, [...areas].reverse()].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1, 2].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy > 0 || r === 1 || undefined} key={copy}>
                      {row.map((area) => (
                        <li key={area}>
                          <span className={s.chip}>
                            <MapPin size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px", color: "var(--accent)" }} />
                            {area}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={s.movingTip}>
            <Clock aria-hidden="true" />
            <p>
              <b>Distance from Dubai Marina:</b> 15-20 minutes
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className={`${s.section} ${s.wrap}`} id="why-marina" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Why SafeStorage</span>
                  <h2>
                    Why Choose SafeStorage for <em>Dubai Marina?</em>
                  </h2>
                </div>
              }
            >
              {benefits.map(({ e, text }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={text}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{text}</h3>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* FEATURES — dark band */}
        <section className={s.wrap} id="features">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Features</span>
                <h2>
                  Our Storage <em>Features</em>
                </h2>
              </div>
            </div>
            <Reveal>
              <div className={s.trio}>
                {features.map(({ Icon, title, body }, i) => (
                  <div className={`${s.feat} ${h.plan}`} style={idx(i)} key={title}>
                    <div className={s.featIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* STORAGE NEAR MARINA & JBR */}
        <section className={`${s.section} ${s.wrap}`} id="near">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Marina &amp; JBR</span>
              <h2>
                Storage Near <em>Dubai Marina &amp; JBR</em>
              </h2>
            </div>
            <p>
              SafeStorage provides premium, secure storage for residents of Dubai Marina, Jumeirah Beach Residence (JBR),
              Marina Walk, and Bluewaters Island. Our facility is easily accessible from Sheikh Zayed Road, with
              door-to-door service direct to your doorstep across the Marina area.
            </p>
          </div>
          <Reveal>
            <div className={s.duo}>
              <div className={`${s.panel} ${s.panelHover} ${h.plan}`} style={idx(0)}>
                <span className={h.bigEmoji} aria-hidden="true">🛋️</span>
                <h3 className={h.panelTitle}>Furniture Storage During Renovation — Dubai Marina</h3>
                <p className={h.panelText}>
                  Dubai Marina and JBR apartments frequently undergo renovations, and storing furniture during that period
                  is a common challenge. SafeStorage makes it simple: we collect your sofas, beds, dining tables, wardrobes,
                  and appliances from your apartment, store them in a fully secure unit, and return everything once your
                  renovation is complete.
                </p>
                <p className={h.panelText}>
                  Our short-term storage plans start from as little as 1 week, with no minimum contract required. Prices
                  are transparent and based on the volume of items stored, not a fixed unit size. This makes SafeStorage
                  the most flexible and cost-effective option for Marina residents.
                </p>
              </div>
              <div className={`${s.panel} ${s.panelHover} ${h.plan}`} style={idx(1)}>
                <span className={h.bigEmoji} aria-hidden="true">🔑</span>
                <h3 className={h.panelTitle}>Short-Term Storage Between Leases — JBR</h3>
                <p className={h.panelText}>
                  The gap between lease end dates and new tenancy start dates is one of the most stressful periods for
                  Dubai Marina residents. SafeStorage bridges that gap, storing your belongings safely for days, weeks, or
                  months while you transition between apartments.
                </p>
                <p className={h.panelText}>
                  With same-day pickup available (for requests before 12 PM) and next-day delivery, you can move out of one
                  property, place your items in secure storage, and collect them when your new home is ready. Our team
                  handles all the heavy lifting at both ends.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* AREAS COVERED */}
        <section className={`${s.section} ${s.wrap}`} id="coverage" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Service zone</span>
                  <h2>
                    Areas Covered from Our <em>Dubai Marina Service Zone</em>
                  </h2>
                </div>
              }
            >
              {coverage.map(({ e, title, items }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={title}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{title}</h3>
                  <ul className={s.checkList}>
                    {items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* POPULAR USES */}
        <section className={`${s.section} ${s.wrap}`} id="uses" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Popular uses</span>
                  <h2>
                    Popular Storage Uses <em>in Dubai Marina</em>
                  </h2>
                </div>
              }
            >
              {uses.map(({ e, title, body }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={title}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
          <div className={s.howCta}>
            <span>Need storage in Dubai Marina or JBR? Get your free quote now.</span>
            <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
              Get a Free Quote →
            </Link>
          </div>
        </section>

        {/* EVERYTHING YOU NEED TO KNOW */}
        <section className={`${s.section} ${s.wrap}`} id="know" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={h.longH2}>
                Dubai Marina Storage — <em>Everything You Need to Know</em>
              </h2>
            </div>
          </div>
          <div className={s.movingTip} style={{ marginTop: 0 }}>
            <Info aria-hidden="true" />
            <p>
              Dubai Marina is one of the most sought-after residential addresses in the UAE — a vibrant waterfront
              community packed with luxury towers, marina-front dining, and easy beach access. With premium real estate
              comes premium square-metre prices, which means apartment storage is minimal and residents frequently need
              external storage for the overflow. SafeStorage is the preferred storage provider for Dubai Marina, JBR, JLT,
              and the surrounding western Dubai communities precisely because we eliminate every inconvenience of the
              storage process.
            </p>
          </div>
          <div className={s.movingTip}>
            <CheckCircle2 aria-hidden="true" />
            <p>
              Our Dubai Marina service zone is staffed with teams who know the area&apos;s tower access protocols intimately
              — from marina-front towers on the promenade to JBR&apos;s Murjan and Bahar clusters to the residential blocks
              of JLT. We manage building concierge requirements, loading bay access, lift logistics, and parking in
              high-density zones like Marina and JBR without any inconvenience to you. Simply pack your items if desired or
              leave everything to us, and we handle the rest from collection to secure storage to on-demand delivery.
            </p>
          </div>
          <Reveal>
            <div className={s.duo} style={{ marginTop: 24 }}>
              <div className={`${s.panel} ${s.panelHover} ${h.plan}`} style={idx(0)}>
                <span className={h.bigEmoji} aria-hidden="true">🏢</span>
                <h3 className={h.panelTitle}>JLT (Jumeirah Lake Towers) Storage</h3>
                <p className={h.panelText}>
                  Jumeirah Lake Towers is a major mixed-use community adjacent to Dubai Marina, home to both residential
                  towers and significant office space. JLT residents benefit from SafeStorage&apos;s same standards of
                  door-to-door pickup, secure storage, and flexible monthly plans. JLT is also a hub for small and medium
                  businesses, many of which use SafeStorage for document archiving and commercial storage.
                </p>
                <p className={h.panelText}>
                  The proximity of JLT to the DMCC Free Zone makes it a key area for businesses with document archiving
                  needs. SafeStorage collects directly from JLT offices and provides on-demand retrieval, helping
                  DMCC-registered companies manage their compliance records efficiently without using expensive office
                  space for dead files.
                </p>
              </div>
              <div className={`${s.panel} ${s.panelHover} ${h.plan}`} style={idx(1)}>
                <span className={h.bigEmoji} aria-hidden="true">🏡</span>
                <h3 className={h.panelTitle}>The Greens, The Views &amp; JVC Coverage</h3>
                <p className={h.panelText}>
                  The Greens and The Views are established, mature communities popular with long-term Dubai residents and
                  families. These villa-apartment communities have a strong demand for household storage, particularly for
                  residents who are renovating, downsizing, or in the middle of lease transitions. SafeStorage covers both
                  The Greens and The Views within our Dubai Marina service zone.
                </p>
                <p className={h.panelText}>
                  Jumeirah Village Circle (JVC), bordering both the Marina zone and the DIP zone, is also fully covered.
                  JVC&apos;s large residential population and mix of apartments and townhouses creates significant demand for
                  flexible storage — both short-term for renovations and lease gaps, and long-term for personal storage
                  needs.
                </p>
              </div>
            </div>
          </Reveal>
          <div className={`${s.panel} ${s.panelAccent}`} style={{ marginTop: 24 }}>
            <h3 className={h.panelTitle}>Storage Pricing for Dubai Marina &amp; JBR Residents</h3>
            <p className={h.panelText}>
              SafeStorage pricing is transparent, volume-based, and identical across all Dubai areas including premium
              zones like Marina and JBR. There are no location premiums or surcharges for high-rise access:
            </p>
            <p className={h.panelText} style={{ color: "var(--navy)", fontWeight: 700, fontSize: 18 }}>
              Get a free, itemised quote
            </p>
            <p className={h.panelText}>All unit sizes · door-to-door pickup &amp; delivery</p>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={h.longH2}>
                Frequently Asked Questions — <em>Dubai Marina &amp; JBR Storage</em>
              </h2>
            </div>
            <p>
              Everything residents of Dubai Marina, JBR, JLT, The Greens, and Palm Jumeirah need to know about SafeStorage.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Ready to Store with SafeStorage?"
          blurb="Get your free quote today and experience the best storage service in Dubai Marina"
          ctaLabel="Get Your Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
      <AreaLinks emirate="dubai" area="dubai-marina" />
    </>
  )
}
