import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Truck, ClipboardList, ShieldCheck, PackageOpen, Phone } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { manrope, sora } from "@/components/landing/fonts"
import { LandingTrust } from "@/components/landing/landing-top"
import { CtaBand } from "@/components/landing/page-hero"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import { env } from "@/lib/env"
import ls from "@/components/landing/landing.module.css"
import lp from "@/components/locations/location-landing.module.css"
import sk from "@/components/silo/silo-landing.module.css"

/**
 * ★ MONEY PAGE — Silo 1 · /self-storage-dubai/local-self-storage/
 *
 * Target: `local self storage` — 2,400/mo (AE), KD 16, CPC $3.33.
 *
 * Why this page exists and why it is nested rather than at root:
 * the query is commercial-navigational, so it needs to inherit topical
 * relevance from a hub that already says "self storage in Dubai". A root-level
 * orphan would get the exact-match URL and none of the reinforcement. Nested,
 * it receives equity from /self-storage-dubai/ plus every Silo 1 sibling.
 *
 * It replaces a BLOG post that currently ranks #7 for this term. A commercial
 * local query answered by an article URL ranks volatilely, which is why the
 * ranking kept disappearing. The 301 from that post lives in next.config.mjs
 * and must ship in the same deployment as this page.
 *
 * ⚠ Two deliberate omissions, both gated on facts only the client can confirm:
 *
 *   1. NO AggregateRating in the schema. The homepage cites 4.9/5 from 6,700+
 *      reviews, but that is a group-wide figure including India. Marking it up
 *      on a .ae LocalBusiness is a manual-action risk. Add it only with the
 *      verified UAE Google Business Profile count.
 *   2. NO record-retention period in the "business overflow" paragraph. The
 *      source copy carried a [VERIFY] marker there; the sentence is written to
 *      be true without naming a number rather than inventing one.
 *
 * ⚠ Sibling links now point at real Silo 1 pages (/prices/, /unit-sizes/,
 * /how-it-works/). The ones still pointing at a pre-silo URL are marked
 * PHASE-2 LINK below — /prohibited-items, /expat-leaving-uae, /business-storage
 * and /locations/{area} — and get re-pointed as those silo pages land. Nothing
 * here 404s in the meantime, which is the rule: build the page, then redirect.
 */

export const metadata: Metadata = {
  title: { absolute: "Local Self Storage Dubai | Nearest Unit, Door-to-Door" },
  description:
    "Local self storage across Dubai. We collect from your door in Marina, JVC, Al Barsha + 30 areas. Pay only for the space you use, no lock-in. Call us.",
  keywords:
    "local self storage, local self storage dubai, local storage near me, storage facility near me, self storage near me, storage units near me, local storage company dubai, nearest storage facility dubai",
  openGraph: {
    title: "Local Self Storage Dubai — We Come to You",
    description:
      "Door-to-door local self storage across Dubai. Pay only for the space you use. Same-day collection, itemised digital inventory, no lock-in.",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/local-self-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/local-self-storage",
  },
}

const faqData = [
  {
    question: "What is local self storage?",
    answer:
      "Local self storage means renting storage space near where you live rather than in a distant warehouse. In Dubai it usually means a facility in an industrial area like Al Quoz, Ras Al Khor or DIP. SafeStorage works differently — we collect from your home anywhere in Dubai and store the goods for you, so how far the facility is stops mattering.",
  },
  {
    question: "How much does local self storage cost in Dubai?",
    answer:
      "You pay only for the space your items use. A one-bedroom apartment typically needs 60–90 sq ft; a three-bedroom villa around 240–270 sq ft. Collection, packing materials and transport are included in a free, itemised quote rather than added afterwards.",
  },
  {
    question: "Do you have a storage facility near me?",
    answer:
      "We collect from and deliver to every area of Dubai, plus Sharjah, Ajman and Abu Dhabi. You don't travel to the facility — our team comes to your building. Send your community name to +971 50 577 3388 and we'll confirm the next available pickup window.",
  },
  {
    question: "Can I access my items while they're in storage?",
    answer:
      "Yes. Because everything is itemised and barcoded, you can request a single item rather than the whole load. Give us notice and we'll schedule delivery to your address. There's no need to visit the facility yourself.",
  },
  {
    question: "Is there a minimum storage period?",
    answer:
      "No lock-in. Storage is month to month. Most household bookings run between three weeks and eighteen months, and you can extend or end with notice.",
  },
  {
    question: "How quickly can you collect?",
    answer:
      "Same-day or next-day across most of Dubai. Larger villa moves need a day or two to schedule the right crew and vehicle. Pickups from Sharjah, Ajman and Abu Dhabi are quoted with transport upfront.",
  },
  {
    question: "Are my belongings insured?",
    answer:
      "Goods are stored in a CCTV-monitored, access-controlled and pest-controlled facility, and insurance cover is available. Ask for the specific limit and exclusions in writing before you book — with any storage company, not just us.",
  },
  {
    question: "What can't I store?",
    answer:
      "No flammables, no perishables, no illegal items, no firearms, no chemicals. The full list is on our prohibited items page. If you're unsure about something specific, ask before pickup day rather than at the door.",
  },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#business",
    name: "SafeStorage — Local Self Storage Dubai",
    // address is REQUIRED on a LocalBusiness subtype, and SelfStorage is one.
    // Without it the entity is invalid and the local signals on this page — the
    // money page for "local self storage" — are simply not read.
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building 23, Warehouse 5, DIP-1",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    url: "https://safestorage.ae/self-storage-dubai/local-self-storage",
    telephone: "+971505773388",
    email: "support@safestorage.ae",
    currenciesAccepted: "AED",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Self storage unit sizes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "1 RK storage — 30 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "1 BHK storage — 60–90 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "2 BHK storage — 120–150 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3 BHK storage — 240–270 sq ft" } },
      ],
    },
    // NO aggregateRating — see the file header. Blocked on the UAE-only review count.
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#service",
    serviceType: "Local self storage",
    name: "Local Self Storage in Dubai",
    description:
      "Door-to-door local self storage across Dubai. We collect from your address, pack, itemise and store, and deliver items back on request. Billed on the space used, with no lock-in.",
    provider: { "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#business" },
    areaServed: { "@type": "City", name: "Dubai" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.slice(0, 5).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
]

const coverage = [
  {
    band: "Central and coastal",
    areas: [
      { name: "Dubai Marina", href: "/locations/dubai/dubai-marina" },
      { name: "JBR" },
      { name: "Palm Jumeirah", href: "/locations/dubai/palm-jumeirah" },
      { name: "Jumeirah 1–3", href: "/locations/dubai/jumeirah" },
      { name: "Umm Suqeim" },
      { name: "Al Wasl" },
      { name: "Downtown Dubai", href: "/locations/dubai/downtown-dubai" },
      { name: "Business Bay", href: "/locations/dubai/business-bay" },
      { name: "DIFC" },
      { name: "JLT" },
    ],
  },
  {
    band: "New Dubai and the villa communities",
    areas: [
      { name: "JVC", href: "/locations/dubai/jumeirah-village-circle" },
      { name: "JVT" },
      { name: "Dubai Hills", href: "/locations/dubai/dubai-hills" },
      { name: "Arabian Ranches" },
      { name: "DAMAC Hills" },
      { name: "Town Square" },
      { name: "Motor City" },
      { name: "Sports City" },
      { name: "Al Furjan" },
      { name: "Discovery Gardens" },
    ],
  },
  {
    band: "Established Dubai",
    areas: [
      { name: "Al Barsha 1–3", href: "/locations/dubai/al-barsha" },
      { name: "Barsha Heights" },
      { name: "Mirdif", href: "/locations/dubai/mirdif" },
      { name: "Al Warqa" },
      { name: "Rashidiya" },
      { name: "Deira", href: "/locations/dubai/deira" },
      { name: "Bur Dubai" },
      { name: "Karama" },
      { name: "Oud Metha" },
      { name: "Al Garhoud" },
    ],
  },
  {
    band: "East and south",
    areas: [
      { name: "Dubai Silicon Oasis", href: "/locations/dubai/dubai-silicon-oasis" },
      { name: "Academic City" },
      { name: "International City" },
      { name: "Dubai Investment Park", href: "/locations/dubai/dubai-investment-park" },
      { name: "Dubai South" },
      { name: "Al Quoz", href: "/locations/dubai/al-quoz" },
      { name: "Ras Al Khor", href: "/locations/dubai/ras-al-khor" },
      { name: "Umm Ramool", href: "/locations/dubai/umm-ramool" },
      { name: "Al Qusais", href: "/locations/dubai/al-qusais" },
    ],
  },
]

const sizes = [
  { home: "Studio / 1 RK", space: "around 30 sq ft", fits: "Bed, wardrobe contents, 10–15 boxes, a few appliances" },
  { home: "1 bedroom", space: "60–90 sq ft", fits: "Full 1BHK including sofa, dining set, white goods" },
  { home: "2 bedrooms", space: "120–150 sq ft", fits: "Two bedroom sets, living room, kitchen contents" },
  { home: "3 bedrooms", space: "240–270 sq ft", fits: "Full villa contents, garden furniture, bikes" },
  { home: "Larger / commercial", space: "270+ sq ft", fits: "Quoted per site survey" },
]

const localMeans = [
  ["You rent a unit, you drive to it", "We collect from your door"],
  ["You hire a van for the move-in", "Transport included in the quote"],
  ["You pack, label and stack", "We pack, itemise and photograph"],
  ["You remember what's in there", "Digital inventory on your phone"],
  ["You go to the facility to retrieve one item", "We deliver the item to you"],
  ["Access limited to facility hours", "Retrieval scheduled when you need it"],
]

const steps = [
  {
    icon: Phone,
    title: "Tell us what you have",
    body: "A phone call or a WhatsApp voice note is enough. Rough room count, rough timeline. We'll quote on that. For anything above a 2BHK we'll do a free video survey so the truck arrives the right size.",
  },
  {
    icon: Truck,
    title: "We come to you",
    body: "Team arrives in the agreed window with boxes, bubble wrap and blankets. Fragile items are wrapped on site. Every item or carton gets a barcode label.",
  },
  {
    icon: ClipboardList,
    title: "You get an inventory",
    body: "Before the truck leaves, you get a digital list with photos. This is the part people underestimate — six months later, “which box has the winter clothes” is a solved problem rather than an afternoon.",
  },
  {
    icon: ShieldCheck,
    title: "It goes into a secured facility",
    body: "CCTV around the clock, pest-controlled, access-logged. Your goods stay palletised and separate — not loose-stacked against someone else's.",
  },
  {
    icon: PackageOpen,
    title: "You get it back when you want it",
    body: "Whole load, or one item. Give us notice and we'll schedule delivery. If you're leaving the UAE, we can hand it to a freight forwarder instead.",
  },
]

const trustQuestions = [
  {
    q: "Is the facility temperature-managed?",
    a: "Dubai hits 45°C+ in August and non-climate-controlled units warp wood, crack leather and destroy electronics. Ask specifically — “air conditioned” and “climate controlled” are not the same claim.",
  },
  { q: "Do I get an itemised inventory?", a: "If the answer is “we'll label the boxes”, you'll be opening every one of them later." },
  { q: "What's the notice period to get things back?", a: "Some operators need a week. Ask before you need it urgently." },
  { q: "Is there a minimum term or lock-in?", a: "Ours is month to month. Several competitors quote low and bind you for six." },
  { q: "What's insured, and to what value?", a: "Get the limit in writing. Read what's excluded." },
  {
    q: "Who actually handles the goods — staff or subcontracted labour?",
    a: "It changes how carefully your things get carried down a stairwell.",
  },
]

const comparison = [
  ["Getting things in", "Team collects and packs", "You hire a van and do it"],
  ["Access to your goods", "Scheduled retrieval, item-level", "Walk in during facility hours"],
  ["Best for", "Storing 1 month to 3 years without needing regular access", "Frequent access, business stock rotation"],
  ["Real cost", "One quote covering transport, labour, materials", "Unit rent + van + labour + boxes"],
  ["Effort", "Roughly one phone call", "A weekend, twice"],
  ["Inventory", "Digital, photographed", "Whatever you wrote on the box"],
]

export default function LocalSelfStoragePage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Local Self Storage" },
        ]}
      />

      {/* sk.body forced every h2 to navy, which made the dark band and the CTA
          band headings invisible once the body moved to the landing design. The
          old Tailwind sections it was styling are gone. */}
      <main className={`min-h-screen ${ls.page} ${sora.variable} ${manrope.variable}`}>
        {/* Hero — copy left, the owner's photo right */}
        <section className={`${ls.hero} ${ls.wrap} ${lp.split2}`}>
          {/* alignItems start: the copy column is taller than the picture, and a
              centred picture leaves a hole above it */}
          <div className={lp.split2Inner} style={{ alignItems: "start" }}>
            <div className={`${ls.heroContent} ${lp.split2Copy}`}>
              <span className={ls.heroTag}>Local self storage</span>
              <h1>
                Local Self Storage in Dubai — <em>We Come to You</em>
              </h1>
              <p>
                In Dubai, “close” is a strange idea: the affordable yards sit in Al Quoz, Ras Al Khor and
                DIP, and the convenient ones charge for being convenient. We solve it from the other end —
                a{" "}
                <Link href="/self-storage-dubai" className={sk.inlineLink}>
                  local self storage
                </Link>{" "}
                operator that does not ask you to drive anywhere.
              </p>
              <p>
                We come to your building, pack, itemise every box and move it to a secured facility. You
                pay only for <strong>the space your items use</strong> — no lock-in, and the quote you get
                is the price you pay.
              </p>
              <div className={ls.heroCta}>
                <Link className={`${ls.btn} ${ls.btnAccent}`} href="/get-quote">
                  Get a storage quote →
                </Link>
                <a className={`${ls.btn} ${ls.btnGhost} ${ls.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={ls.phIco}>📞</span> Call +971 50 577 3388
                </a>
              </div>
            </div>
            <div className={lp.split2Photo} style={{ aspectRatio: "1733 / 907" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/local-self-storage-photo.webp"
                alt="SafeStorage team collecting and packing a home in Dubai"
                loading="eager" decoding="async"
              />
              <div className={ls.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* What "local" actually means */}
        {/* WHAT "LOCAL" MEANS — the two columns as a compare board */}
        <section className={`${ls.section} ${ls.wrap}`} id="local" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={ls.howHead}>
            <div>
              <span className={ls.howEyebrow}>What local means</span>
              <h2 className={lp.longH2}>
                Proximity matters less <em>than access.</em>
              </h2>
            </div>
            <p>
              A yard fifteen minutes away is only useful if you can get in when you need to, park a loaded
              car beside it and find the right box. If the storage company drives, distance stops being
              your problem.
            </p>
          </div>
          <HomeReveal className={`${lp.siloGrid} ${lp.trio}`} style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <article className={lp.siloCard} style={{ cursor: "default" }}>
              <h3 style={{ color: "#c22e2e" }}>Most local storage</h3>
              <ul className={ls.crossList}>
                {localMeans.map(([a]) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
            <article className={lp.siloCard} style={{ cursor: "default" }}>
              <h3 style={{ color: "#117a4a" }}>With SafeStorage</h3>
              <ul className={ls.yesList}>
                {localMeans.map(([, b]) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          </HomeReveal>
          <div className={ls.movingTip}>
            <p>
              The honest trade: you give up walking into your own unit at midnight, and in exchange you
              never move a box yourself. If you need to visit twice a week, a drive-up unit in Al Quoz is
              the better recommendation and we will say so on the phone.
            </p>
          </div>
        </section>

        {/* COVERAGE — one moving line per band */}
        <section className={`${ls.section} ${ls.wrap}`} id="coverage" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={ls.howHead}>
            <div>
              <span className={ls.howEyebrow}>Areas we cover</span>
              <h2 className={lp.longH2}>
                Every part <em>of Dubai.</em>
              </h2>
            </div>
            <p>Pickup is usually same-day or next-day, depending on where you are and when you call.</p>
          </div>
          <HomeReveal
            className={`${lp.siloGrid} ${lp.trio}`}
            style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
          >
            {coverage.map((band, i) => (
              <article className={lp.siloCard} key={band.band} style={{ ["--i"]: i, cursor: "default" } as CSSProperties}>
                <span className={ls.miniIcon} aria-hidden="true">
                  <MapPin strokeWidth={1.9} />
                </span>
                <h3>{band.band}</h3>
                <div className={lp.cardMarquee}>
                  <div className={lp.cardMarqueeTrack}>
                    {/* two identical halves, so the loop has no seam */}
                    {[0, 1].map((half) => (
                      <div className={lp.cardMarqueeHalf} key={half} aria-hidden={half === 1}>
                        {band.areas.map((a) =>
                          a.href && half === 0 ? (
                            <Link className={`${ls.chip} ${lp.areaChip}`} href={a.href} key={a.name}>
                              <span aria-hidden="true">📍</span> {a.name}
                            </Link>
                          ) : (
                            <span className={ls.chip} key={a.name}>
                              <span aria-hidden="true">📍</span> {a.name}
                            </span>
                          ),
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* WHAT IT COSTS — sizes as cards */}
        <section className={`${ls.section} ${ls.wrap}`} id="cost" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={ls.howHead}>
            <div>
              <span className={ls.howEyebrow}>What it costs</span>
              <h2 className={lp.longH2}>
                You pay for the space <em>your things take.</em>
              </h2>
            </div>
            <p>Sizes are estimates — the space is re-measured once your goods are racked.</p>
          </div>
          <HomeReveal className={`${ls.miniGrid} ${ls.miniTight}`}>
            {sizes.map((z, i) => (
              <div className={ls.miniCard} key={z.home} style={{ ["--i"]: i } as CSSProperties}>
                <span className={ls.miniIcon}>
                  <MapPin strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <b>
                    {z.home} · {z.space}
                  </b>
                  <small>{z.fits}</small>
                </span>
              </div>
            ))}
          </HomeReveal>
          <div className={ls.movingTip}>
            <p>
              One rate on measured space, with collection, materials, transport and the inventory in the
              quote. The{" "}
              <Link href="/self-storage-dubai/prices">storage prices page</Link> sets out what varies.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS — the five steps as the timeline */}
        <section className={`${ls.section} ${ls.wrap}`} id="how" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={ls.howHead}>
            <div>
              <span className={ls.howEyebrow}>How it works</span>
              <h2 className={lp.longH2}>
                One phone call, <em>then we drive.</em>
              </h2>
            </div>
          </div>
          <MilestonesPlayer>
            <ol className={ls.milestones} style={{ ["--steps"]: steps.length } as CSSProperties}>
              {steps.map((st, i) => (
                <li className={ls.milestone} key={st.title} style={{ ["--i"]: i } as CSSProperties}>
                  <span className={ls.milestoneDot} aria-hidden="true">
                    <st.icon />
                  </span>
                  <span className={ls.milestoneYear}>Step {i + 1}</span>
                  <b>{st.title}</b>
                  <small>{st.body}</small>
                </li>
              ))}
            </ol>
          </MilestonesPlayer>
        </section>

        {/* WHAT TO ASK — dark band */}
        <section className={`${ls.darkBand} ${ls.whyBand}`}>
          <div className={ls.wrap}>
            <div className={ls.bandHead}>
              <span className={ls.howEyebrow}>Before you book anyone</span>
              <h2>
                Six questions <br className={ls.mBreak} />
                <em>worth asking.</em>
              </h2>
            </div>
            <FeatScroller>
              {trustQuestions.map((q) => (
                <article className={ls.feat} key={q.q}>
                  <div className={ls.featIcon}>
                    <ShieldCheck strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{q.q}</h3>
                  <p>{q.a}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${ls.section} ${ls.wrap}`} id="faq" style={{ paddingTop: 0, paddingBottom: 26 }}>
          <div className={ls.howHead}>
            <div>
              <span className={ls.howEyebrow}>Good to know</span>
              <h2 className={lp.longH2}>
                Common <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqData.slice(0, 5).map((f) => ({ q: f.question, a: f.answer }))} />
          <div className={ls.movingTip}>
            <p>
              Some things cannot be stored at all — the{" "}
              <Link href="/self-storage-dubai/prohibited-items">prohibited items page</Link> has the list.
            </p>
          </div>
        </section>

        {/* Get a quote today */}
        <CtaBand
          title="Get a quote today"
          blurb="Two things and we can price it: how big the place is, and roughly when you want it gone. Most of Dubai gets a collection slot inside 24 hours."
          ctaLabel="Get a storage quote"
          whatsAppLabel="WhatsApp us"
          callLabel="+971 50 577 3388"
        />
      </main>
    </>
  )
}
