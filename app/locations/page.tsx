import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { EMIRATES } from "@/lib/areas/registry"
import { SILOS, HUB_ORDER, MONEY_PAGE } from "@/lib/silo/silos"
import { facilityListSentence, FACILITY_EMIRATES } from "@/lib/facilities"
import { PHONE, PHONE_DISPLAY, HOURS_DISPLAY, RETRIEVAL_WINDOW } from "@/lib/company-facts"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/**
 * /locations — the Silo 4 hub, redesigned in the landing style
 * (owner, 2026-09-22) with their own photo, used exactly as saved.
 *
 * Everything is still rendered from lib/areas/registry.ts and lib/facilities.ts,
 * so adding an emirate or an area lists it here automatically and the facility
 * claim is never written by hand. Every link the old page had is kept.
 */

const URL = "https://safestorage.ae/locations"

export const metadata: Metadata = {
  title: { absolute: "Storage Locations Across the UAE | SafeStorage" },
  description:
    "Every emirate and district we collect from — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain. Door-to-door collection with a free, itemised quote.",
  keywords:
    "storage locations uae, storage locations dubai, self storage near me uae, storage areas dubai, storage emirates uae",
  openGraph: {
    title: "Storage Locations Across the UAE | SafeStorage",
    description:
      "Every emirate and district we collect from, with the local access detail that actually matters.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage — UAE coverage" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations",
      "x-default": URL,
    },
  },
}

/* the owner asked for sky blue on these cards */
const SILO_TONE = [p.toneSky, p.toneSky, p.toneSky, p.toneSky]
const SILO_EMOJI = ["📦", "🏠", "🏢", "🚚"]

export default function LocationsPage() {
  const totalAreas = EMIRATES.reduce((n, e) => n + e.areas.length + (e.staticAreas?.length ?? 0), 0)

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${URL}#webpage`,
      name: "Storage Locations Across the UAE",
      description: `SafeStorage collection coverage across ${EMIRATES.length} emirates and ${totalAreas} districts.`,
      url: URL,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
      // Built from the registry the page renders, so it cannot list a hub the
      // page does not show.
      hasPart: EMIRATES.map((e) => ({
        "@type": "WebPage",
        name: e.name,
        url: `https://safestorage.ae/locations/${e.slug}`,
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Locations" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's photo on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Locations</span>
              <h1>
                Where We <em>Collect From</em>
              </h1>
              <p>
                {EMIRATES.length} emirates and {totalAreas} districts. We come to your address, wrap and
                load, and take everything away — you do not drive anything anywhere.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a free quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={`tel:${PHONE}`}>
                  <span className={s.phIco}>📞</span> Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1774 / 887" } as CSSProperties}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/locations-photo.webp"
                alt="SafeStorage crew collecting boxes and furniture across the UAE"
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

        {/* where the warehouses are */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.movingTip} style={{ marginTop: 0 }}>
            <p>
              We operate warehouses in <strong>{facilityListSentence(FACILITY_EMIRATES)}</strong>. The rest
              is served as a collection service with storage at the nearest facility, and each emirate page
              says plainly which applies. You pay only for the space your items use.
            </p>
          </div>
        </section>

        {/* every emirate, with its districts as one moving line */}
        {EMIRATES.map((e) => {
          const areas = [
            ...e.areas.map((a) => ({ slug: a.slug, name: a.name })),
            ...(e.staticAreas ?? []).map((a) => ({ slug: a.slug, name: a.name })),
          ].sort((a, b) => a.name.localeCompare(b.name))

          return (
            <section className={`${s.section} ${s.wrap}`} key={e.slug} style={{ paddingTop: 0 }}>
              <div className={s.howHead}>
                <div>
                  <span className={s.howEyebrow}>
                    {areas.length > 0 ? `${areas.length} districts · ` : ""}
                    {/* The facility claim is read from the EmirateDef, which
                        reads lib/facilities.ts. It is never written by hand. */}
                    {e.facilityKey ? "warehouse in this emirate" : "collection service"}
                  </span>
                  <h2 className={p.longH2}>
                    <Link href={`/locations/${e.slug}`}>
                      Storage in <em>{e.name}</em>
                    </Link>
                  </h2>
                </div>
                <p>{e.hub.blurb}</p>
              </div>

              {areas.length > 0 ? (
                <div className={s.areaMarquees}>
                  <div className={s.marquee}>
                    <div className={s.marqueeTrack}>
                      {[0, 1].map((copy) => (
                        <div className={`${s.marqueeGroup} ${s.chipGroup}`} key={copy} aria-hidden={copy === 1}>
                          {areas.map((a) =>
                            copy === 0 ? (
                              <Link
                                className={`${s.chip} ${p.areaChip}`}
                                href={`/locations/${e.slug}/${a.slug}`}
                                key={a.slug}
                              >
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
              ) : (
                <div className={s.howCta}>
                  <Link className={s.howMore} href={`/locations/${e.slug}`}>
                    Storage in {e.name} →
                  </Link>
                </div>
              )}
            </section>
          )
        })}

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
            <Link className={s.howMore} href={MONEY_PAGE}>
              Local self storage in Dubai
            </Link>
            <Link className={s.howMore} href="/guides">
              Storage and moving guides
            </Link>
          </div>
        </section>

        <CtaBand
          title="Not sure if we cover your area?"
          blurb={`Send the address. The lists above are the districts we work in constantly, not the boundary of where we will drive. Retrieval is normally arranged within ${RETRIEVAL_WINDOW}. ${HOURS_DISPLAY}.`}
          ctaLabel="Get a free quote"
          whatsAppLabel="WhatsApp us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
