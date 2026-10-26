import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Shield, Clock } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { locationBusinessSchema } from "@/lib/structured-data"
import { EMIRATE_BY_SLUG, EMIRATES } from "@/lib/areas/registry"
import { emirateFaqs, faqPageSchema } from "@/lib/emirate-faqs"
import { storageLocationSentence } from "@/lib/facilities"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import { RETRIEVAL_WINDOW } from "@/lib/company-facts"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/*
 * /locations/al-ain — emirate hub, redesigned in the landing style
 * (owner, 2026-10-23) with their own Al Ain photo, used exactly as saved.
 *
 * Laid out like /locations/dubai, with the two differences that matter here:
 * Al Ain has NO area pages, so there is no area marquee and nothing links down
 * — the districts are named as plain chips, not links to pages that do not
 * exist. And it has NO warehouse: the facility line comes from
 * lib/facilities.ts and says plainly that things are stored at our nearest
 * facility, which is what the shared hub said too.
 *
 * The copy still lives in lib/areas/, so the facility claim and the FAQ set
 * cannot drift from the other seven hubs; this page only lays it out.
 */

const emirate = EMIRATE_BY_SLUG["al-ain"]
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
    // No hreflang pair: this emirate has no Arabic page. The block used to
    // mirror /ar/locations/{emirate} unconditionally, which pointed Google at a
    // 404 for Al Ain, Fujairah, Ras Al Khaimah and Umm Al Quwain — and an
    // hreflang pointing at a 404 invalidates the cluster rather than simply
    // being absent from it. Add the pair back with the Arabic page, not before.
    languages: {
      "en-AE": url,
      "x-default": url,
    },
  },
}

/* the districts named in the hub blurb — chips, not links: Al Ain has no area pages */
const DISTRICTS = ["Al Jimi", "Al Muwaiji", "Al Towayya", "Al Mutawaa"]

/* sky blue on every card, as on the Dubai hub */
const SILO_TONE = [p.toneSky, p.toneSky, p.toneSky, p.toneSky]
const SILO_EMOJI = ["📦", "🏠", "🏢", "🚚"]

const features = [
  { Icon: Truck, title: "Door-to-door Service", text: "We collect from your Al Ain address and deliver back when you need it" },
  { Icon: Shield, title: "24/7 Security", text: "Multi-angle CCTV, logged entry and after-hours motion alerts, around the clock" },
  { Icon: Clock, title: "Clean & Dust-Protected", text: "Indoor units kept clean and dust-protected year-round" },
]

export default function Page() {
  // The FAQ schema is built from the SAME array the page renders, so the markup
  // cannot claim a question the page does not show.
  const faqs = [
    ...emirate.hub.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
    }),
  ].slice(0, 5)

  const others = EMIRATES.filter((e) => e.slug !== emirate.slug)

  const schemas = [
    locationBusinessSchema({ name: emirate.name, url, serves: [emirate.name] }),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: emirate.hub.title,
      description: emirate.hub.description,
      url,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
        { "@type": "ListItem", position: 3, name: emirate.name, item: url },
      ],
    },
    faqPageSchema(faqs, url),
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
        {/* hero: copy on the left, the owner's Al Ain photo on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.split2Tight}`}>
              <span className={s.heroTag}>Al Ain</span>
              <h1>
                Self Storage <br className={s.mBreakDesk} />
                <em>in Al Ain</em>
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
            <div className={p.split2Photo} style={{ aspectRatio: "1734 / 907" } as CSSProperties}>
              <Image
                src="/landing/al-ain-hero.webp"
                alt="SafeStorage crew loading boxes and suitcases outside a villa in Al Ain"
                width={1734}
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

        {/* the hub's own words */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How we work in Al Ain</span>
              <h2 className={p.longH2}>
                We come to your door — <em>you never visit a unit.</em>
              </h2>
            </div>
          </div>
          {emirate.hub.intro.map((t, i) => (
            // a gap between the two paragraphs: without it they read as one block
            <p className={p.panelText} key={t.slice(0, 40)} style={i === 0 ? { marginBottom: 14 } : undefined}>
              {t}
            </p>
          ))}
          {/* the facility claim, from lib/facilities.ts — Al Ain has no warehouse */}
          <div className={s.movingTip}>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence(emirate.facilityKey)}{" "}
              We collect from your address in Al Ain, so you do not need to drive anything anywhere, and
              retrieval is normally arranged within {RETRIEVAL_WINDOW}.
            </p>
          </div>
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

        {/* the districts we collect from — one moving line, named not linked:
            there are no Al Ain area pages to link to */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Areas we cover</span>
              <h2 className={p.longH2}>
                Collections across <em>the city.</em>
              </h2>
            </div>
          </div>
          <div className={s.areaMarquees}>
            <div className={s.marquee}>
              <div className={s.marqueeTrack}>
                {/* two identical halves: the track slides exactly one half, so the loop has no seam */}
                {[0, 1].map((half) => (
                  <div className={`${s.marqueeGroup} ${s.chipGroup}`} key={half} aria-hidden={half === 1}>
                    {[0, 1].map((pass) =>
                      DISTRICTS.map((d) => (
                        <span className={s.chip} key={`${pass}-${d}`}>
                          <span aria-hidden="true">📍</span> {d}
                        </span>
                      )),
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
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2 className={p.longH2}>
                What are you <em>storing?</em>
              </h2>
            </div>
          </div>
          <div className={p.siloGrid}>
            {HUB_ORDER.filter((k) => k !== "s4").map((k, i) => (
              <Link className={`${p.siloCard} ${SILO_TONE[i % SILO_TONE.length]}`} href={SILOS[k].hub} key={SILOS[k].hub}>
                <span className={p.siloEmoji} aria-hidden="true">
                  {SILO_EMOJI[i % SILO_EMOJI.length]}
                </span>
                <h3>{SILOS[k].name}</h3>
                <p>{SILOS[k].blurb}</p>
                <span className={p.siloArrow} aria-hidden="true">
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
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 28 }}>
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
          title="Storing something from Al Ain?"
          blurb="Door-to-door collection across the city. Tell us what you are storing and we will send a free, itemised quote."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        {/* the other emirates — the same moving line, running the other way */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 20, paddingBottom: 28 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Other emirates</span>
              <h2 className={p.longH2}>
                We also collect <em>across the UAE.</em>
              </h2>
            </div>
          </div>
          <div className={s.areaMarquees}>
            <div className={s.marquee}>
              <div className={`${s.marqueeTrack} ${s.marqueeReverse}`}>
                {[0, 1].map((half) => (
                  <div className={`${s.marqueeGroup} ${s.chipGroup}`} key={half} aria-hidden={half === 1}>
                    {others.map((e) =>
                      half === 0 ? (
                        <Link className={`${s.chip} ${p.areaChip}`} href={`/locations/${e.slug}`} key={e.slug}>
                          <span aria-hidden="true">📍</span> {e.name}
                        </Link>
                      ) : (
                        <span className={s.chip} key={e.slug}>
                          <span aria-hidden="true">📍</span> {e.name}
                        </span>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
