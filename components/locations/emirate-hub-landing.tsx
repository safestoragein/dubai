import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"
import { MapPin, Boxes, Truck, Building2, Archive, Package, Home, ShieldCheck, Ruler, ClipboardList, PackageOpen, RotateCcw } from "lucide-react"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { storageLocationSentence } from "@/lib/facilities"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import type { EmirateDef } from "@/lib/areas/types"
import { EMIRATES } from "@/lib/areas/registry"
import { RETRIEVAL_WINDOW } from "@/lib/company-facts"
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

/**
 * The homepage-design renderer for an emirate hub — /locations/{emirate}.
 *
 * WHY IT IS GATED ON A PHOTO. EmirateHub draws six pages. Only the emirates
 * the owner has supplied a photo for are drawn here; the rest keep the older
 * renderer untouched, so converting one hub never silently restyles five
 * others. Add a photo to HUB_HERO in emirate-hub.tsx and that hub moves over.
 *
 * WHAT THIS PAGE HAS TO GET RIGHT. The facility claim. Half of these emirates
 * have a warehouse and half do not, and the difference is read from
 * lib/facilities.ts rather than written into copy. That sentence is reproduced
 * here verbatim and must not be softened: claiming warehouses we do not operate
 * is a Google Business Profile suspension risk as well as being untrue.
 */

const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

const SILO_ICON: Record<string, typeof Boxes> = {
  s1: Boxes,
  s2: Package,
  s3: Building2,
  s5: Truck,
  s6: Archive,
}

export default function EmirateHubLanding({
  emirate,
  heroImage,
  heroAlt,
}: {
  emirate: EmirateDef
  heroImage: string
  heroAlt: string
}) {
  const others = EMIRATES.filter((e) => e.slug !== emirate.slug)
  const base = `/locations/${emirate.slug}`
  const areas = [
    ...emirate.areas.map((a) => ({ slug: a.slug, name: a.name, blurb: a.blurb })),
    ...(emirate.staticAreas ?? []),
  ].sort((a, b) => a.name.localeCompare(b.name))

  const faqs = [
    ...emirate.hub.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
    }),
  ].slice(0, 5)

  // the orange ending the rest of the site uses: split before the emirate name
  const h1 = emirate.hub.h1
  const cut = h1.lastIndexOf(" in ")
  const h1Lead = cut > 0 ? h1.slice(0, cut) : h1
  const h1Rest = cut > 0 ? h1.slice(cut + 1) : ""

  const silos = HUB_ORDER.filter((k) => k !== "s4")

  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: emirate.name },
        ]}
      />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.heroH1Tight}`}>
              <span className={s.heroTag}>Storage in {emirate.name}</span>
              <h1>
                {h1Lead}{" "}
                <em>{h1Rest}</em>
              </h1>
              <p>{emirate.hub.blurb}</p>
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
                src={heroImage}
                alt={heroAlt}
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

        {/* dark band: breaks the page up and states the service plainly */}
        <section className={`${s.darkBand} ${s.whyBand}`} style={{ marginTop: 18 }}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>How it works here</span>
              <h2>
                We come to you in {emirate.name} <br className={s.mBreak} />
                <em>and take it from there.</em>
              </h2>
            </div>
            <FeatScroller>
              {[
                { Icon: Home, h: `Collected from your address`, p: `The crew comes to you anywhere in ${emirate.name}. You do not drive anything anywhere.` },
                { Icon: PackageOpen, h: `Wrapped where it stands`, p: `Furniture is wrapped at your property before it moves, not later at the warehouse.` },
                { Icon: ShieldCheck, h: `Stored indoors`, p: `Logged in on an inventory you sign, and held indoors away from sun, dust and rain.` },
                { Icon: Ruler, h: `Only the space you use`, p: `Billed on the floor space your things occupy, with no minimum term.` },
              ].map((c) => (
                <article className={s.feat} key={c.h}>
                  <div className={s.featIcon}>
                    <c.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* the intro, and the facility claim that must never be softened */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 26, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>In brief</span>
              <h2 className={p.longH2}>
                Storage in {emirate.name}, <em>specifically.</em>
              </h2>
            </div>
          </div>
          <div className={s.prose}>
            {emirate.hub.intro.slice(0, 2).map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
          <div className={s.movingTip}>
            <span aria-hidden="true">📍</span>
            <p>
              <strong>Where your things actually go.</strong> {storageLocationSentence(emirate.facilityKey)}{" "}
              We collect from your address in {emirate.name}, so you do not need to drive anything
              anywhere. Retrieval is normally arranged within {RETRIEVAL_WINDOW}.
            </p>
          </div>
        </section>

        {/* the collection, as the four steps it actually is */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The process</span>
              <h2 className={p.longH2}>
                Four steps, <em>door to door.</em>
              </h2>
            </div>
          </div>
          <MilestonesPlayer>
            <ol className={s.milestones} style={{ ["--steps"]: 4 } as CSSProperties}>
              {[
                { Icon: ClipboardList, t: `Tell us what you have`, b: `A room count or a rough list is enough for a free, itemised quote.` },
                { Icon: Truck, t: `We collect and wrap`, b: `The crew wraps, carries and loads at your address on the date you choose.` },
                { Icon: ShieldCheck, t: `Logged and stored`, b: `Everything is listed on the inventory you sign, then racked indoors.` },
                { Icon: RotateCcw, t: `Back whenever you need`, b: `Ask for all of it or part of it. Retrieval is normally arranged within ${RETRIEVAL_WINDOW}.` },
              ].map((st, i) => (
                <li className={s.milestone} key={st.t} style={{ ["--i"]: i } as CSSProperties}>
                  <span className={s.milestoneDot} aria-hidden="true">
                    <st.Icon />
                  </span>
                  <span className={s.milestoneYear}>Step {i + 1}</span>
                  <b>{st.t}</b>
                  <small>{st.b}</small>
                </li>
              ))}
            </ol>
          </MilestonesPlayer>
        </section>

        {/* the districts */}
        {areas.length > 0 && (
          <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }}>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Where we collect</span>
                <h2 className={p.longH2}>
                  {areas.length} areas <em>we collect from.</em>
                </h2>
              </div>
              <p>
                Each page carries the detail that matters locally — which buildings need lift slots
                booked, where the loading bays are, and what people there typically store.
              </p>
            </div>
            <HomeReveal className={p.siloRail}>
              {areas.map((a, i) => (
                <Link
                  className={p.siloCard}
                  href={`${base}/${a.slug}`}
                  key={a.slug}
                  style={{ ["--i"]: i } as CSSProperties}
                >
                  {/* the pin sits inline, right in front of the district name */}
                  <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 24,
                        height: 24,
                        borderRadius: 8,
                        flex: "none",
                        background: TINTS[i % TINTS.length].bg,
                        color: TINTS[i % TINTS.length].fg,
                      }}
                    >
                      <MapPin size={14} strokeWidth={2.1} />
                    </span>
                    {a.name}
                  </h3>
                  <p>{a.blurb}</p>
                </Link>
              ))}
            </HomeReveal>
            <div className={s.movingTip}>
              <span aria-hidden="true">🗺️</span>
              <p>
                Not listed? These are the districts we work in constantly, not the boundary of where we
                will drive. Send the address and we will confirm it.
              </p>
            </div>
          </section>
        )}

        <LandingReviews padTop={0} />

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Questions from <em>{emirate.name}.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        {/* The silo cards were removed at the owner's request. The up-link,
            the money-page link and the guides link stay: without them this hub
            would have no outbound links into the rest of the site. */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 10 }}>
          <div className={s.miniFacts} style={{ marginTop: 20 }}>
            <li style={{ listStyle: "none" }}>
              <Link href="/locations">All emirates and areas</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link href={MONEY_PAGE}>{moneyAnchor(base)}</Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link href="/guides">Storage and moving guides</Link>
            </li>
          </div>
        </section>

        {/* the other emirates — these hubs have few inbound links otherwise */}
        {others.length > 0 && (
          <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 30 }}>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Nearby</span>
                <h2 className={p.longH2}>
                  We store for <em>the other emirates too.</em>
                </h2>
              </div>
              <p>Same service, same crews. Pick an emirate to see what we collect from there.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {others.map((e, i) => (
                <Link
                  href={`/locations/${e.slug}`}
                  className={s.chip}
                  key={e.slug}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      borderRadius: 6,
                      flex: "none",
                      background: TINTS[i % TINTS.length].bg,
                      color: TINTS[i % TINTS.length].fg,
                    }}
                  >
                    <MapPin size={12} strokeWidth={2.2} />
                  </span>
                  {e.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <CtaBand
          title={`Storing something from ${emirate.name}?`}
          blurb="Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and the transport."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
