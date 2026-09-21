import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Shield, Clock } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { locationBusinessSchema } from "@/lib/structured-data"
import { EMIRATE_BY_SLUG, EMIRATES } from "@/lib/areas/registry"
import { emirateFaqs, faqPageSchema } from "@/lib/emirate-faqs"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/*
 * /locations/dubai — emirate hub, redesigned in the landing style
 * (owner, 2026-09-21) with their own Dubai photo, used exactly as saved.
 *
 * The copy still lives in lib/areas/, so the facility claim, the FAQ set and
 * the area grid all come from one place and cannot drift between the eight
 * hubs; this page only lays it out. Exception B of the linking plan still
 * applies: the hub links down into all thirty area pages and across to the
 * silo hubs, and the FAQ shows — and marks up — the same five questions.
 */

const emirate = EMIRATE_BY_SLUG["dubai"]
const url = `https://safestorage.ae/locations/${emirate.slug}`
const base = `/locations/${emirate.slug}`

export const metadata: Metadata = {
  title: { absolute: emirate.hub.title },
  description: emirate.hub.description,
  keywords: emirate.hub.keywords,
  openGraph: {
    title: emirate.hub.title,
    description: emirate.hub.description,
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: `SafeStorage — ${emirate.name}` }],
    url,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: url,
    languages: {
      "en-AE": url,
      // Mirrors the Arabic tree at /ar/locations/{emirate}. The English and
      // Arabic paths now match segment for segment, which is what makes these
      // hreflang pairs resolve — they did not before the re-path.
      "ar-AE": `https://safestorage.ae/ar/locations/${emirate.slug}`,
      "x-default": url,
    },
  },
}

/* one colour per silo card heading, from the palette the trust strip uses */
const SILO_TONE = [p.toneOrange, p.toneBlue, p.tonePurple, p.toneGreen]

const features = [
  { Icon: Truck, title: "Door-to-door Service", text: "We collect from your Dubai address and deliver back when needed" },
  { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
  { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
]

export default function Page() {
  // the fourteen data-driven areas plus the sixteen hand-written ones, as the
  // shared hub lists them
  const areas = [
    ...emirate.areas.map((a) => ({ slug: a.slug, name: a.name, blurb: a.blurb })),
    ...(emirate.staticAreas ?? []),
  ].sort((a, b) => a.name.localeCompare(b.name))
  // The FAQ schema is built from the SAME array the hub renders, so the markup
  // cannot claim a question the page does not show.
  const faqs = [
    ...emirate.hub.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
    }),
  ]

  const schemas = [
    locationBusinessSchema({ name: emirate.name, url, serves: [emirate.name] }),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      name: emirate.hub.title,
      description: emirate.hub.description,
      url,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
    },
    faqPageSchema(faqs.slice(0, 5), url),
  ]

  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: emirate.name },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's Dubai photo on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Dubai</span>
              <h1>
                Self Storage Facilities <br className={s.mBreakDesk} />
                <em>in Dubai</em>
              </h1>
              <p>{emirate.hub.blurb}</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get Instant Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1771 / 888" } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/landing/dubai-hub-photo.webp" alt="SafeStorage crew collecting boxes and furniture in Dubai" fetchPriority="high" />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* the hub's own words */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How we work in Dubai</span>
              <h2 className={p.longH2}>
                We come to your door — <em>you never visit a unit.</em>
              </h2>
            </div>
          </div>
          {emirate.hub.intro.map((t) => (
            <p className={p.panelText} key={t.slice(0, 40)}>
              {t}
            </p>
          ))}
        </section>

        {/* what every plan includes */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Our storage features</span>
              <h2>
                Everything included <em>in every plan.</em>
              </h2>
            </div>
            <FeatScroller>
              {features.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* the thirty areas */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Areas we cover</span>
              <h2 className={p.longH2}>
                {areas.length} areas <em>we collect from.</em>
              </h2>
            </div>
          </div>
          {/* one moving line of area names, each linking to its page */}
          <div className={s.areaMarquees}>
            <div className={s.marquee}>
              <div className={s.marqueeTrack}>
                {[0, 1].map((copy) => (
                  <div className={`${s.marqueeGroup} ${s.chipGroup}`} key={copy} aria-hidden={copy === 1}>
                    {areas.map((a) =>
                      copy === 0 ? (
                        <Link className={`${s.chip} ${p.areaChip}`} href={`${base}/${a.slug}`} key={a.slug}>
                          <span aria-hidden="true">📍</span> {a.name}
                        </Link>
                      ) : (
                        <span className={s.chip} key={a.slug}>
                          <span aria-hidden="true">📍</span> {a.name}
                        </span>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={s.movingTip}>
            <p>
              Not listed? These are the districts we work in constantly, not the boundary of where we
              will drive. Send the address and we will confirm it.
            </p>
          </div>
        </section>

        {/* across to the silos */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2 className={p.longH2}>
                What are you <em>storing?</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {HUB_ORDER.filter((k) => k !== "s4").map((k, i) => (
              <Link className={`${s.miniCard} ${s.miniLink} ${SILO_TONE[i % SILO_TONE.length]}`} href={SILOS[k].hub} key={SILOS[k].hub}>
                <h3>{SILOS[k].name}</h3>
                <p>{SILOS[k].blurb}</p>
                <span className={s.miniArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <div className={s.howCta}>
            <Link className={s.howMore} href="/locations">
              ← All emirates and areas
            </Link>
            <Link className={s.howMore} href={MONEY_PAGE}>
              {moneyAnchor(base)}
            </Link>
            <Link className={s.howMore} href="/guides">
              Storage and moving guides
            </Link>
          </div>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Questions from <em>{emirate.name}.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Ready to Store with SafeStorage?"
          blurb="Door-to-door collection from every Dubai area. Tell us what you are storing and we will send a free, itemised quote."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        {/* the other emirates */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Other emirates</span>
              <h2 className={p.longH2}>
                We also collect <em>across the UAE.</em>
              </h2>
            </div>
          </div>
          <div className={p.areaPills}>
            {EMIRATES.filter((e) => e.slug !== emirate.slug).map((e) => (
              <Link className={p.areaPill} href={`/locations/${e.slug}`} key={e.slug}>
                <span aria-hidden="true">📍</span> {e.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
