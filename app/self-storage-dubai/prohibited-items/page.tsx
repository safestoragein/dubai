import Image from "next/image"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Flame,
  Biohazard,
  Apple,
  Droplets,
  Gem,
  Scale,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldOff,
  Receipt,
  AlertTriangle,
} from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"

/*
 * Silo 1 · /self-storage-dubai/prohibited-items — what cannot go into storage.
 *
 * Redesigned in the homepage style (owner, 2026-10-23) with their own picture,
 * which carries the nine categories as artwork. The copy is the page's own,
 * shortened: the six reasons, the quick yes/no/ask list, what happens if
 * prohibited items turn up, and the five questions. Nothing new was invented
 * and no item moved between lists.
 */

export const metadata: Metadata = {
  // The root layout appends "| SafeStorage Dubai" through its title template,
  // so this must not repeat it. (openGraph.title below is not templated.)
  title: "Prohibited Items — What You Cannot Store",
  description:
    "What SafeStorage Dubai cannot accept into storage: flammables, gas cylinders, food, liquids, cash and jewellery. Check before your pickup. Call +971505773388.",
  keywords:
    "prohibited items storage dubai, what can i store dubai, restricted items self storage, storage rules dubai, items not allowed storage uae",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/prohibited-items",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/prohibited-items" },
}

const faqs = [
  {
    q: "Can I store food in my storage unit in Dubai?",
    a: "No. No food of any kind — including sealed and packaged food, rice, flour, spices, cooking oil, ghee tins and pet food. Food attracts insects and rodents, and in Dubai's heat sealed items still spoil and leak. A single bag of rice can affect every customer's goods in the warehouse.",
  },
  {
    q: "Can I store gas cylinders?",
    a: "Not as a rule. Pressurised cylinders, including BBQ and camping gas, cannot go into storage. If your cylinder is completely empty, speak to our team before pickup day and we will tell you whether we can take it.",
  },
  {
    q: "Can I store jewellery, gold or cash?",
    a: "No. Cash, gold, jewellery, watches, gems and precious metals are not accepted. They are not covered by our insurance, so if anything happened there would be no way to make you whole. A bank locker is the right place for these.",
  },
  {
    q: "What happens if prohibited items are found in my storage?",
    a: "Insurance cover is void for the affected goods, penalty charges apply, and we may ask you to collect the items. If something leaks, smells or attracts pests, you may also be liable for damage caused to other customers' belongings. Tell us in advance instead — we will help you find another option.",
  },
  {
    q: "Is this list of prohibited items complete?",
    a: "No. This list is not comprehensive and restrictions change. If an item is not listed and you are unsure, call or WhatsApp +971 50 577 3388 before your pickup date and we will confirm.",
  },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/self-storage-dubai/prohibited-items#webpage",
    name: "Prohibited Items — What You Cannot Store",
    description:
      "The items SafeStorage Dubai cannot accept into storage, grouped by reason, with a quick-reference list of common questions.",
    url: "https://safestorage.ae/self-storage-dubai/prohibited-items",
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

const categories = [
  {
    Icon: Flame,
    title: "Flammable, explosive & pressurised",
    why: "One ignition source puts every customer's goods at risk.",
    items: ["Petrol, diesel and engine oil", "Paint, thinners, solvents, varnish", "Gas cylinders — BBQ, camping, LPG", "Aerosols and spray cans", "Lighter fluid, matches, fireworks", "Tools with fuel in the tank"],
  },
  {
    Icon: Biohazard,
    title: "Corrosive, toxic & hazardous",
    why: "These can injure our team and destroy goods stored nearby.",
    items: ["Acids, bleach, pool chemicals", "Pesticides, insecticides, weedkiller", "Asbestos or asbestos-containing material", "Radioactive material", "Biological, medical or toxic waste", "Compressed or liquefied gases"],
  },
  {
    Icon: Apple,
    title: "Food, plants & living things",
    why: "Food draws pests, and pests do not stay inside one unit.",
    items: ["All food — sealed, packaged or fresh", "Rice, flour, grains, spices, pet food", "Cooking oil and ghee tins", "Plants, seeds and soil", "Animals or any living thing", "Anything perishable"],
  },
  {
    Icon: Droplets,
    title: "Liquids & strong smells",
    why: "A leak travels, and odour transfers into fabric and wood.",
    items: ["Any container of liquid", "Bulk cosmetics, perfume, toiletries", "Cleaning liquids and detergents", "Alcohol and liquor", "Strongly scented goods", "White goods not drained and dried"],
  },
  {
    Icon: Gem,
    title: "Money, valuables & irreplaceables",
    why: "Our insurance does not cover these, so a loss could not be put right.",
    items: ["Cash, currency and bullion", "Gold, silver, platinum, silverware", "Jewellery, watches, gems, pearls", "Share certificates, bonds, deeds", "Stamp and coin collections", "Passports and identity documents"],
  },
  {
    Icon: Scale,
    title: "Illegal or restricted",
    why: "We cannot knowingly store these under any circumstances.",
    items: ["Narcotics and controlled substances", "Firearms, ammunition and weapons", "Counterfeit or smuggled goods", "Anything obtained unlawfully", "Items you cannot legally possess", "Anything restricted under UAE law"],
  },
]

const quickAnswers = [
  { item: "Furniture, beds and mattresses", ok: "yes" },
  { item: "TVs, computers and electronics", ok: "yes" },
  { item: "White goods — drained and dried", ok: "yes" },
  { item: "Boxes, files and business documents", ok: "yes" },
  { item: "Suitcases, clothing and books", ok: "yes" },
  { item: "Cars, bikes and boats", ok: "yes" },
  { item: "Sealed packaged food", ok: "no" },
  { item: "Cooking oil or ghee tins", ok: "no" },
  { item: "Paint tins, even part-used", ok: "no" },
  { item: "Perfume and cosmetics in bulk", ok: "no" },
  { item: "Cash, gold and jewellery", ok: "no" },
  { item: "Completely empty gas cylinder", ok: "ask" },
  { item: "Antiques and fine art", ok: "ask" },
  { item: "Musical instruments", ok: "ask" },
]

const consequences = [
  { Icon: ShieldOff, h: "Insurance is void", p: "Cover lapses on the affected goods, so a claim cannot be paid." },
  { Icon: Receipt, h: "Penalty charges apply", p: "Charged on the account, alongside any cost of safe removal." },
  { Icon: AlertTriangle, h: "Liability for damage", p: "If a leak, smell or pest reaches other customers' goods, that is on the account too." },
]

/* the verdict board: three cards, green / amber / red, each with its own list */
const VERDICT = [
  { key: "yes", Icon: CheckCircle2, title: "Fine to store", color: "#117a4a", tint: "#e4f4ec", list: "yesList" },
  { key: "ask", Icon: HelpCircle, title: "Ask us first", color: "#b4740c", tint: "#fdf1dd", list: "askList" },
  { key: "no", Icon: XCircle, title: "Not accepted", color: "#c22e2e", tint: "#fbe6e6", list: "crossList" },
] as const

/* a colour per group, the way the "what are you storing" cards do it */
const GROUP_TINT = [
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
]

export default function ProhibitedItemsPage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "What You Can Store" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero: copy on the left, the owner's picture on the right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy} ${p.split2Tight}`}>
              <span className={s.heroTag}>Before your pickup day</span>
              <h1>
                What you cannot put <br className={s.mBreakDesk} />
                <em>into storage</em>
              </h1>
              <p>
                Almost everything in a home or office is fine. A small number of things are not — because
                they catch fire, leak, attract pests, or cannot be insured.
              </p>
              <div className={s.heroCta}>
                <a className={`${s.btn} ${s.btnAccent}`} href={env.WHATSAPP_LINK}>
                  Ask About an Item →
                </a>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1734 / 907" } as CSSProperties}>
              <Image
                src="/landing/prohibited-items-hero.webp"
                alt="The nine groups SafeStorage cannot store: liquids and chemicals, food, flammables and gas, weapons, drugs, paints, animals, valuables and cash"
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

        {/* the short answer */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The short answer</span>
              <h2 className={p.longH2}>
                The things people <em>ask about most.</em>
              </h2>
            </div>
            <p>Anything marked “Ask us” depends on the item — a quick call settles it.</p>
          </div>
          <HomeReveal className={`${p.siloGrid} ${p.trio}`}>
            {VERDICT.map((v, i) => (
              <article className={p.siloCard} key={v.key} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span className={s.miniIcon} style={{ background: v.tint, color: v.color }} aria-hidden="true">
                  <v.Icon strokeWidth={2} />
                </span>
                <h3 style={{ color: v.color }}>{v.title}</h3>
                <ul className={s[v.list]}>
                  {quickAnswers
                    .filter((q) => q.ok === v.key)
                    .map((q) => (
                      <li key={q.item}>{q.item}</li>
                    ))}
                </ul>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* the full list, grouped by reason */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The full list</span>
              <h2 className={p.longH2}>
                Six groups, <em>and why each one.</em>
              </h2>
            </div>
            <p>Grouped by the reason, because the reason is usually the answer to “what about…?”</p>
          </div>
          <HomeReveal className={p.siloRail}>
            {categories.map((c, i) => (
              <article
                className={p.siloCard}
                key={c.title}
                style={{ ["--i"]: i, cursor: "default" } as CSSProperties}
              >
                <span
                  className={s.miniIcon}
                  style={{ background: GROUP_TINT[i].bg, color: GROUP_TINT[i].fg }}
                  aria-hidden="true"
                >
                  <c.Icon strokeWidth={1.9} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.why}</p>
                <ul className={s.crossList}>
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* what happens if they turn up */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>If they turn up</span>
              <h2>
                Telling us costs nothing. <br className={s.mBreak} />
                <em>Finding out later does.</em>
              </h2>
            </div>
            <FeatScroller>
              {consequences.map((c) => (
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

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingBottom: 24 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Common <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
          <div className={s.movingTip}>
            <p>
              This list is not exhaustive and restrictions change. If an item is not here and you are
              unsure, ask before pickup day — everything else, we collect from your door.
            </p>
          </div>
        </section>

        <CtaBand
          title="Not sure about something?"
          blurb="Send us a photo or a message before pickup day and we will tell you straight away whether it can go into storage."
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/self-storage-dubai/prohibited-items" />
    </>
  )
}
