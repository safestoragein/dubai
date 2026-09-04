import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { SHARJAH_AREAS } from "@/lib/sharjah-areas"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { emirateFontVars } from "@/components/locations/fonts"
import s from "@/components/locations/emirate-theme.module.css"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  HOURS_DISPLAY,
  CCTV_COVERAGE,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"

/*
 * The highest-volume page in the Sharjah set (~5,100/mo, all low competition):
 * movers in sharjah (2,900) · movers and packers sharjah (1,000) ·
 * furniture movers sharjah (720) · best movers in sharjah (320) ·
 * cheap movers sharjah (170).
 *
 * ⚠ SCOPE HONESTY — the reason this page is worded the way it is.
 * That demand is for REMOVALS: A to B, van, men, done in a day. SafeStorage is
 * a storage company that collects and delivers; it is not a point-to-point
 * removals firm and there is nothing on this site claiming otherwise. Writing a
 * page that ranks for "movers in sharjah" and then reads like a mover would buy
 * traffic we convert badly and annoy.
 *
 * So this page targets the honest overlap, which is genuinely large: the move
 * where the dates do NOT line up and something has to be held in between. It
 * says what we do and do not do in the first screen, and again in the FAQ.
 * If the business later adds a true removals product, this page should be
 * rewritten rather than quietly re-pointed.
 */

const URL = "https://safestorage.ae/locations/sharjah/moving-storage"

export const metadata: Metadata = {
  title: { absolute: "Moving Storage Sharjah | Storage Between Two Tenancies" },
  description: `Moving in or out of Sharjah and the dates do not line up? We collect on your key-return date, store from ${PRICE_PER_SQFT_AED} AED/sqft with no minimum term, and deliver when the new place is ready.`,
  keywords:
    "moving storage sharjah, storage while moving sharjah, movers and packers sharjah storage, furniture storage while moving sharjah, storage between tenancies sharjah, sharjah to dubai move storage, short term storage sharjah moving",
  openGraph: {
    title: "Moving Storage Sharjah | Storage Between Two Tenancies",
    description: "We hold everything between the tenancy that ends and the one that has not started.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage — moving storage for Sharjah" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: URL },
}

/* The scope disclosure (we are not a removals company) has to stay first here —
   it is the whole point of this page — so the canonical ten follow it rather
   than replace it. */
const faqs = [
  {
    q: "Are you a moving company? Will you move me from A to B?",
    a: "No — and it matters that we say so before you book. SafeStorage is a storage company. We collect from your Sharjah address, store your belongings, and deliver them to wherever you tell us later. If your old and new places are available on the same day and you just need a van and two men for a single afternoon, a removals firm is the right call and will be cheaper. Where we fit is the move where the dates do not meet and something has to be held in between.",
  },
  ...emirateFaqs({
    emirate: "Sharjah",
    facilityKey: "sharjah",
    sampleDistricts: ["Al Nahda", "Al Majaz"],
    university: "Sharjah University City",
  }),
]

const schemas = [
  locationBusinessSchema({ name: "Sharjah", url: URL, serves: SHARJAH_AREAS.map((a) => a.name) }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Moving Storage in Sharjah",
    description:
      "Storage for the gap between two tenancies in Sharjah. Belongings are collected on the key-return date, held at the SafeStorage facility in Sharjah, and delivered to the new address when it is ready.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    serviceType: "Self Storage",
    areaServed: ["Sharjah", ...SHARJAH_AREAS.map((a) => a.name)].map((name) => ({ "@type": "Place", name })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Moving Storage Sharjah | Storage Between Two Tenancies",
    url: URL,
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://safestorage.ae/locations" },
      { "@type": "ListItem", position: 3, name: "Sharjah", item: "https://safestorage.ae/locations/sharjah" },
      { "@type": "ListItem", position: 4, name: "Moving Storage", item: URL },
    ],
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

export default function MovingStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${emirateFontVars}`}>
        <nav className={`${s.wrap} ${s.crumbs}`} aria-label="Breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/locations">Locations</Link> &nbsp;/&nbsp;{" "}
          <Link href="/locations/sharjah">Sharjah</Link> &nbsp;/&nbsp; <span>Moving Storage</span>
        </nav>

        {/* ---------- hero ---------- */}
        <section className={`${s.hero} ${s.wrap}`}>
          <div className={s.heroInner}>
            <div className={s.heroRating}>
              <strong>{RATING_VALUE}/5</strong>
              <span>{REVIEW_COUNT_DISPLAY} reviews worldwide</span>
            </div>
            <div className={s.heroContent}>
              <span className={s.heroTag}>Sharjah · Moving Storage</span>
              <h1>
                Moving in Sharjah and the <em>Dates Do Not Meet?</em>
              </h1>
              <p className={s.heroSlogan}>We hold everything in the middle.</p>
              <p>
                The lease ends on the 30th. The new place is ready on the 12th. We collect on your key-return
                date, store it from {PRICE_PER_SQFT_AED} AED per sqft with no minimum term, and deliver when
                you can actually receive it.
              </p>
              <div className={s.heroCta}>
                <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                  Get a free quote →
                </Link>
                <a href={`tel:${PHONE}`} className={`${s.btn} ${s.btnGhost}`}>
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- scope disclosure, high up on purpose ---------- */}
        <section className={s.wrap} style={{ paddingTop: 26 }}>
          <div className={s.prose}>
            <div className={s.disclosure}>
              <strong>Straight answer first: we are not a removals company.</strong> If your old and new
              places are both available on the same day and you need a van and two men for one afternoon, hire
              a Sharjah mover — it will be cheaper and it is the right tool. SafeStorage is a storage company.
              We are worth calling when the dates do <em>not</em> line up and your belongings need somewhere to
              live in between. That is the job this page is about.
            </div>
          </div>
        </section>

        {/* ---------- trust strip ---------- */}
        <section className={s.wrap}>
          <div className={s.trust}>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tGold}`}>🗓️</div>
              <strong className={s.vGold}>No minimum</strong>
              <b>12 days is 12 days</b>
              <small>not a month</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tOrange}`}>💰</div>
              <strong className={s.vOrange}>{PRICE_PER_SQFT_AED} AED</strong>
              <b>Per sqft, per month</b>
              <small>VAT included</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tBlue}`}>🚚</div>
              <strong className={s.vBlue}>We load</strong>
              <b>Wrapped and carried</b>
              <small>you lift nothing</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tPurple}`}>📍</div>
              <strong className={s.vPurple}>Any address</strong>
              <b>Sharjah or Dubai</b>
              <small>delivery is your choice</small>
            </div>
          </div>
          <hr className={s.rule} />
        </section>

        {/* ---------- the three shapes of this job ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>When this is the right call</span>
            <h2>
              Three Moves That <em>Need Storage</em>
            </h2>
          </div>
          <div className={s.useGrid}>
            <article className={s.useCard}>
              <div className={s.useIcon}>🔑</div>
              <h3>The handover gap</h3>
              <p>
                Keys due back before the new place is ready. Rather than pay a month of overlapping rent, the
                contents go into storage for exactly the number of days the gap runs.
              </p>
            </article>
            <article className={s.useCard}>
              <div className={s.useIcon}>🌍</div>
              <h3>Leaving, then deciding</h3>
              <p>
                Leaving the country or between jobs and not ready to commit to a new address. Empty the flat
                now, decide where it goes later.
              </p>
            </article>
            <article className={s.useCard}>
              <div className={s.useIcon}>📦</div>
              <h3>Downsizing mid-move</h3>
              <p>
                The new place is smaller. Move what fits, store what does not, and take your time deciding
                what to do with the rest.
              </p>
            </article>
          </div>
        </section>

        {/* ---------- dark band ---------- */}
        <section className={s.wrap}>
          <div className={s.darkBand}>
            <span className={s.eyebrow}>Why the gap costs more than you think</span>
            <h2>
              Paying Two Rents Is <em>The Expensive Option</em>
            </h2>
            <div className={s.featGrid}>
              <article className={s.feat}>
                <div className={s.featIcon}>💸</div>
                <h3>Overlapping rent</h3>
                <p>Holding the old Sharjah lease an extra month to bridge a two-week gap costs far more than storing.</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>🏨</div>
                <h3>Hotel plus a van</h3>
                <p>The other common bridge — short-let plus twice-hired transport — adds up quickly.</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>🔒</div>
                <h3>Not a relative&apos;s spare room</h3>
                <p>{CCTV_COVERAGE}</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>↩️</div>
                <h3>Delivered when ready</h3>
                <p>Ask for it back and it is normally at the new address within {RETRIEVAL_WINDOW}.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- steps ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>How the gap works</span>
            <h2>Four Steps, Two Dates</h2>
          </div>
          <div className={s.steps}>
            <article className={s.step}>
              <span className={s.stepNo}>STEP 01</span>
              <h3>Tell us both dates</h3>
              <p>When the keys go back, and when the new place is ready. Rough is fine — they change.</p>
            </article>
            <article className={s.step}>
              <span className={s.stepNo}>STEP 02</span>
              <h3>We empty the property</h3>
              <p>On your key-return date. Wrapped, loaded and out, including the lift booking.</p>
            </article>
            <article className={s.step}>
              <span className={s.stepNo}>STEP 03</span>
              <h3>It waits with us</h3>
              <p>For as long as the gap actually runs. If the handover slips, tell us a new date.</p>
            </article>
            <article className={s.step}>
              <span className={s.stepNo}>STEP 04</span>
              <h3>Delivered to the new place</h3>
              <p>Sharjah, Dubai or elsewhere. It does not have to be the emirate we collected from.</p>
            </article>
          </div>
        </section>

        {/* ---------- pricing ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.priceBand}>
            <div>
              <span className={s.eyebrow}>Pricing</span>
              <h2>
                You Pay For The Gap, <em>Not A Contract</em>
              </h2>
              <p>
                Storage is billed monthly on the floor space in use. Collection and delivery are quoted
                separately against your actual addresses. Every number is agreed before anything is booked.
              </p>
              <ul className={s.priceList}>
                <li>No minimum term — a twelve-day gap is charged as twelve days</li>
                <li>No penalty if the handover date slips again</li>
                <li>Wrapping and loading included in the collection</li>
                <li>Delivery to a different emirate if you want it</li>
              </ul>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                Get your moving quote →
              </Link>
            </div>
            <div className={s.priceTag}>
              <strong>{PRICE_PER_SQFT_AED} AED</strong>
              <span>
                per square foot, per month
                <br />
                VAT included
              </span>
            </div>
          </div>
        </section>

        {/* ---------- prose ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.prose}>
            <h2>The Sharjah Move That Never Lines Up</h2>
            <p>
              Almost every tenancy in Sharjah ends on a fixed date, and almost no new one begins on that same
              date. Somewhere between the two sits a gap of days or weeks, and it is the single most common
              reason people in this emirate call a storage company rather than a mover. The Dubai commute makes
              it worse: a large share of Sharjah residents eventually move across the border, and cross-emirate
              handovers rarely align at all.
            </p>
            <p>
              The instinct is to bridge the gap by paying for the old place a month longer, or by putting
              everything in a relative&apos;s spare room, or by booking a short-let and hiring a van twice. All
              three cost more than storing, and the last one means paying for transport you could have paid for
              once. Storage at {PRICE_PER_SQFT_AED} AED per square foot per month, charged on space actually
              used with no minimum term, is usually the cheapest way through — particularly because the gap
              nearly always turns out to be longer than planned.
            </p>
            <h3>What we do and do not do</h3>
            <p>
              We collect from your Sharjah address, wrap and load, store at our Sharjah warehouse, and deliver
              to wherever you tell us afterwards. We do not do same-day point-to-point removals, we do not
              quote per truck, and if that is what you need this is the wrong page. Being clear about the
              boundary saves both of us a wasted call.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Moving questions</span>
            <h2>
              Before You <em>Book</em>
            </h2>
          </div>
          <div className={s.faqList}>
            {faqs.map((f) => (
              <article key={f.q} className={s.faqItem}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- internal links ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Where we collect</span>
            <h2>
              Moving Out Of <em>One of These?</em>
            </h2>
          </div>
          <div className={s.areaLinks}>
            {SHARJAH_AREAS.map((a) => (
              <Link key={a.slug} href={`/locations/sharjah/${a.slug}`} className={s.areaLink}>
                {a.name}
                <span>↗</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/locations/sharjah" className={s.parentLink}>
              ← Storage in Sharjah
            </Link>
          </div>
        </section>

        {/* ---------- closing CTA ---------- */}
        <section className={s.wrap} style={{ paddingBottom: 72 }}>
          <div className={s.finalCta}>
            <h2>
              Tell Us Both Dates. <em>We Will Cover The Middle.</em>
            </h2>
            <p>
              Free quote, no survey fee, nothing booked until you agree the storage and the transport.{" "}
              {HOURS_DISPLAY}.
            </p>
            <div className={s.finalCtaBtns}>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                Get a free quote →
              </Link>
              <a href={`tel:${PHONE}`} className={`${s.btn} ${s.btnGhost}`}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
