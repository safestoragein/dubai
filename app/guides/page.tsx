import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SILOS, HUB_ORDER, MONEY_PAGE as _MONEY } from "@/lib/silo/silos"
import { navFor, pagesInSilo, HAND_WRITTEN } from "@/lib/silo/registry"
import { PHONE_DISPLAY } from "@/lib/company-facts"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import HomeReveal from "@/components/landing/home-reveal"
import FaqAccordion from "@/components/landing/faq-accordion"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import g from "@/components/guides/guides.module.css"

/**
 * /guides — the guides hub.
 *
 * The ten guides used to sit at flat root URLs, seven of them with a year in
 * the slug (/dubai-cost-of-living-2026, /moving-to-dubai-2026 …). Those pages
 * went stale every January and had no parent, so they collected no topical
 * signal and passed none on. They are now children of this hub at undated URLs,
 * with 301s from the old ones.
 *
 * Rule 5 of the linking plan: guides link DOWN into one or two silo pages, and
 * silo pages do not link back up into guides except from a hub. This page is
 * that hub, which is why it carries the links into the commercial silos.
 *
 * Redesigned on the shared landing system (owner, 2026-10-16): the copy is the
 * hub's own, laid out as cards that still render from the registry, so adding a
 * guide lists it here automatically.
 */

const MONEY_PAGE = _MONEY

const URL = "https://safestorage.ae/guides"

export const metadata: Metadata = {
  title: { absolute: "Storage & Moving Guides | SafeStorage Dubai" },
  description:
    "Practical guides to storing, moving and living in Dubai — what storage costs, how to pack for it, when the city moves, and how the operators compare.",
  keywords:
    "dubai storage guides, moving to dubai guide, dubai cost of living, storage advice dubai, dubai relocation guides",
  openGraph: {
    title: "Storage & Moving Guides | SafeStorage Dubai",
    description:
      "Practical guides to storing, moving and living in Dubai, written from ten years of doing it.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: URL },
}

/* an icon per guide, by slug — anything new falls back to the book */
const ICONS: Record<string, string> = {
  "/guides/best-places-to-live-dubai": "🏙️",
  "/guides/best-storage-companies-dubai": "🏆",
  "/guides/best-storage-companies-uae": "🇦🇪",
  "/guides/dubai-cost-of-living": "🧾",
  "/guides/dubai-shopping-guide": "🛍️",
  "/guides/dubai-tenancy-and-moving-calendar": "🗓️",
  "/guides/how-much-does-storage-cost-in-dubai": "🧮",
  "/guides/moving-to-dubai": "✈️",
  "/guides/starting-a-business-in-dubai": "💼",
  "/guides/storage-packing-checklist": "📦",
}

const faqs = [
  {
    q: "Who writes these guides?",
    a: "We do. They come out of ten years of collecting from Dubai flats, villas and offices. Nothing here is a sales page — where the honest answer is that you want a different service, or a different company, the guide says so.",
  },
  {
    q: "Which guide should I read first if I am moving to Dubai?",
    a: "Start with Moving to Dubai for the arrival sequence, from visa to Ejari to furniture. Then the Dubai tenancy and moving calendar, so your dates line up with the way the city moves, and the storage packing checklist before the crew arrives.",
  },
  {
    q: "Do the guides tell me what storage costs?",
    a: "How much storage costs in Dubai covers what the market actually charges and the costs quotes leave out. For your own number, ask for a free, itemised quote — you pay only for the space your items use.",
  },
  {
    q: "Are the guides kept up to date?",
    a: "They live at undated addresses, so each one is updated in place rather than replaced every January. If something reads out of date, tell us and we will fix it.",
  },
  {
    q: "I would rather not read — can I just get a price?",
    a: "Yes. Local self storage in Dubai is the shorter route, or call or WhatsApp us and a consultant will send a free, itemised quote for what you are storing.",
  },
]

const HUB_ICONS: Record<string, string> = {
  "/self-storage-dubai": "🏬",
  "/personal-storage-dubai": "🏠",
  "/business-storage-dubai": "🏢",
  "/moving-storage-dubai": "🚚",
  "/locations": "📍",
}

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function GuidesHubPage() {
  const guides = [
    ...pagesInSilo("guides").map((g) => g.path),
    ...Object.keys(HAND_WRITTEN).filter((g) => HAND_WRITTEN[g].silo === "guides"),
  ]
    .map(navFor)
    .filter(Boolean)
    .sort((a, b) => a!.label.localeCompare(b!.label))

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${URL}#webpage`,
      name: "Storage & Moving Guides",
      description: "Practical guides to storing, moving and living in Dubai from SafeStorage.",
      url: URL,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
      // Built from the same array the page renders, so the markup cannot list
      // a guide the page does not show.
      hasPart: guides.map((g) => ({
        "@type": "Article",
        headline: g!.label,
        url: `https://safestorage.ae${g!.href}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.slice(0, 5).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Guides" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Guides · {guides.length} of them</span>
              <h1>
                Storage and <br className={s.mBreakDesk} />
                <em>Moving Guides</em>
              </h1>
              <p>
                Ten years of collecting from Dubai flats, villas and offices produces a certain amount of
                accumulated knowledge about how this city actually moves. These are the parts of it worth
                writing down.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a free quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1730 / 909" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/guides-banner.webp"
                alt="A SafeStorage Dubai crew loading a truck outside a villa, with the city behind"
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

        {/* every guide, from the registry */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>All guides</span>
              <h2 className={p.longH2}>
                Written from doing it, <em>not from a brochure.</em>
              </h2>
            </div>
            <p>
              Nothing here is a sales page. Where the honest answer is that you want a different service, or a
              different company, the guide says so.
            </p>
          </div>

          <HomeReveal className={`${p.siloGrid} ${g.grid}`}>
            {guides.map((guide, i) => (
              <Link className={`${p.siloCard} ${p.toneSky} ${g.card}`} href={guide!.href} key={guide!.href} style={idx(i)}>
                <span className={p.siloEmoji} aria-hidden="true">
                  {ICONS[guide!.href] ?? "📘"}
                </span>
                <h3>{guide!.label}</h3>
                <p>{guide!.blurb}</p>
                <span className={p.siloArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </HomeReveal>

          <div className={s.movingTip}>
            <p>
              If what you actually want is a price rather than a guide,{" "}
              <Link href={MONEY_PAGE}>local self storage in Dubai</Link> is the shorter route.
            </p>
          </div>
        </section>

        {/* across to the commercial silos — rule 5: the hub is the one page
            that links out of guides */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Storing something else?</span>
              <h2 className={p.longH2}>
                Straight to <em>the service pages.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={`${p.siloGrid} ${g.grid}`}>
            {HUB_ORDER.filter((k) => k !== "guides").map((k, i) => (
              <Link
                className={`${p.siloCard} ${p.toneSky} ${g.card}`}
                href={SILOS[k].hub}
                key={SILOS[k].hub}
                style={idx(i)}
              >
                <span className={p.siloEmoji} aria-hidden="true">
                  {HUB_ICONS[SILOS[k].hub] ?? "📦"}
                </span>
                <h3>{SILOS[k].name}</h3>
                <p>{SILOS[k].blurb}</p>
                <span className={p.siloArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </HomeReveal>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                About these <em>guides.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Question a guide did not answer?"
          blurb="Send it. If it comes up more than a couple of times it usually becomes a guide."
          ctaLabel="Ask us"
          ctaHref="/contact"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
