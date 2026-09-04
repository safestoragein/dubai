import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { storageLocationSentence } from "@/lib/facilities"
import { emirateFontVars } from "@/components/locations/fonts"
import s from "@/components/locations/emirate-theme.module.css"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  HOURS_DISPLAY,
  CCTV_COVERAGE,
  FACILITY_ACCESS_NOTE,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"

/*
 * Ajman — the smallest of the three (~110/mo: self storage ajman, storage in
 * ajman, storage space in ajman) but the cheapest storage CPC in the UAE at
 * roughly ₹196, which is why it is worth a page at all.
 *
 * SafeStorage operates a warehouse in Ajman, so goods collected here stay in
 * the emirate. That address is NOT published yet — lib/facilities.ts owns which
 * facilities exist and which addresses may be shown, and every claim on this
 * page reads from it. Fill in the Ajman address there and this page updates
 * itself. Never invent or approximate one.
 */

const URL = "https://safestorage.ae/locations/ajman"

const AJMAN_AREAS = [
  "Al Nuaimiya",
  "Al Rashidiya",
  "Al Jurf",
  "Ajman Corniche",
  "Al Rumailah",
  "Al Mowaihat",
  "Al Hamidiya",
  "Emirates City",
  "Ajman Free Zone",
  "Al Bustan",
  "Garden City",
  "Al Zahra",
]

const faqs = [
  {
    q: "Do you have a storage facility in Ajman?",
    a: `Yes. SafeStorage operates a warehouse in Ajman, so goods collected here stay in the emirate. On top of that we run the collection service: our crew comes to your address, wraps and loads everything, and takes it to the facility. What we do not offer is a unit you hold the key to and visit at will — if that is what you need, an Ajman self-storage yard is the better fit and we would rather say so now.`,
  },
  {
    q: "How much is the transport on top?",
    a: "Transport is quoted on the actual job — your address, the access, and how much there is. Because we store within Ajman rather than driving everything to another emirate, the journey is a local one. You are given the transport figure and the storage figure before anything is booked, so you judge the total rather than discover it.",
  },
  {
    q: "How much is the storage itself?",
    a: `${PRICE_PER_SQFT_AED} AED per square foot per month, VAT included, charged on the floor space your items actually occupy rather than a fixed unit size. No minimum term — a fortnight is charged as a fortnight.`,
  },
  {
    q: "Which parts of Ajman do you collect from?",
    a: "Al Nuaimiya, Al Rashidiya, Al Jurf, the Corniche, Al Rumailah, Al Mowaihat, Al Hamidiya, Emirates City, Al Bustan, Garden City, Al Zahra and the Free Zone are all inside our normal run. If your area is not listed, tell us the address and we will confirm rather than guess.",
  },
  {
    q: "How quickly can I get things back?",
    a: `Delivery back to an Ajman address is normally arranged within ${RETRIEVAL_WINDOW} on notice. You can take back part of what is stored without closing the account or disturbing the rest.`,
  },
  {
    q: "Can you deliver to Dubai or Sharjah instead?",
    a: "Yes. Delivery goes to whatever address you give us — it does not have to be the emirate we collected from. Moving from Ajman into Dubai with a gap in between is one of the more common reasons people here call.",
  },
]

export const metadata: Metadata = {
  title: { absolute: "Self Storage Ajman | Storage Space With Door-to-Door Pickup" },
  description: `Self storage in Ajman from ${PRICE_PER_SQFT_AED} AED/sqft. We collect from Al Nuaimiya, Al Rashidiya, Al Jurf and the Corniche — we wrap, load and store. No minimum term.`,
  keywords:
    "self storage ajman, storage in ajman, storage space in ajman, storage units ajman, cheap storage ajman, furniture storage ajman, household storage ajman, storage near me ajman, SafeStorage Ajman",
  openGraph: {
    title: "Self Storage Ajman | Storage Space With Door-to-Door Pickup",
    description: `Storage for Ajman homes and businesses from ${PRICE_PER_SQFT_AED} AED/sqft, collected from your door.`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage — self storage for Ajman" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/ajman",
      "x-default": URL,
    },
  },
}

const schemas = [
  locationBusinessSchema({ name: "Ajman", url: URL, serves: AJMAN_AREAS }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Self Storage in Ajman with Door-to-Door Collection",
    description:
      "Household and business storage for Ajman residents. Items are collected from your Ajman address and stored at the SafeStorage facility in Ajman.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    serviceType: "Self Storage",
    areaServed: ["Ajman", ...AJMAN_AREAS].map((name) => ({ "@type": "Place", name })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Self Storage Ajman | Storage Space With Door-to-Door Pickup",
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
      { "@type": "ListItem", position: 3, name: "Ajman", item: URL },
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

export default function AjmanPage() {
  return (
    <>
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${emirateFontVars}`}>
        <nav className={`${s.wrap} ${s.crumbs}`} aria-label="Breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/locations">Locations</Link> &nbsp;/&nbsp;{" "}
          <span>Ajman</span>
        </nav>

        {/* ---------- hero ---------- */}
        <section className={`${s.hero} ${s.wrap}`}>
          <div className={s.heroInner}>
            <div className={s.heroRating}>
              <strong>{RATING_VALUE}/5</strong>
              <span>{REVIEW_COUNT_DISPLAY} reviews worldwide</span>
            </div>
            <div className={s.heroContent}>
              <span className={s.heroTag}>Serving Ajman</span>
              <h1>
                Self Storage in <em>Ajman</em>, Collected From Your Door
              </h1>
              <p className={s.heroSlogan}>You pack nothing. You carry nothing. You drive nowhere.</p>
              <p>
                Storage space in Ajman normally means renting a unit and hauling everything there yourself. We
                come to your flat or villa instead, wrap it, load it and store it — from{" "}
                {PRICE_PER_SQFT_AED} AED per sqft, billed on the space you actually use.
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

        {/* ---------- trust strip ---------- */}
        <section className={s.wrap}>
          <div className={s.trust}>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tOrange}`}>💰</div>
              <strong className={s.vOrange}>{PRICE_PER_SQFT_AED} AED</strong>
              <b>Per sqft, per month</b>
              <small>VAT included</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tGold}`}>★</div>
              <strong className={s.vGold}>{RATING_VALUE}/5</strong>
              <b>{REVIEW_COUNT_DISPLAY} reviews</b>
              <small>worldwide</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tBlue}`}>🚚</div>
              <strong className={s.vBlue}>Door to door</strong>
              <b>Collected in Ajman</b>
              <small>We pack and load</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tPurple}`}>🗓️</div>
              <strong className={s.vPurple}>No minimum</strong>
              <b>Store a fortnight</b>
              <small>or for years</small>
            </div>
          </div>
          <hr className={s.rule} />
        </section>

        {/* ---------- uses ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>What Ajman stores with us</span>
            <h2>
              Storage Space in Ajman for <em>Whatever Is In The Way</em>
            </h2>
          </div>
          <div className={s.useGrid}>
            <article className={s.useCard}>
              <div className={s.useIcon}>🔑</div>
              <h3>Moving to Dubai or Sharjah</h3>
              <p>
                A great many Ajman residents work further down the coast and eventually move. We hold
                everything between the tenancy that ends and the one that starts.
              </p>
            </article>
            <article className={s.useCard}>
              <div className={s.useIcon}>🛋️</div>
              <h3>Furniture from a family flat</h3>
              <p>
                Ajman flats are larger and cheaper than Dubai&apos;s, and they fill up accordingly. The
                furniture you are keeping but cannot live around comes to us.
              </p>
            </article>
            <article className={s.useCard}>
              <div className={s.useIcon}>🏢</div>
              <h3>Business and Free Zone stock</h3>
              <p>
                Inventory, files and equipment off floor space you are paying commercial rates for, brought
                back when you need it.
              </p>
            </article>
          </div>
        </section>

        {/* ---------- coverage ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.split}>
            <div>
              <span className={s.eyebrow}>Collection coverage</span>
              <h2>
                We Come to <em>Your Address</em> in Ajman
              </h2>
              <p className={s.splitBlurb}>
                We operate a warehouse in Ajman itself, so your things stay in the emirate. Transport is a
                local job, quoted on your actual address and told to you up front.
              </p>
              <div className={s.typeList}>
                <div className={s.typeRow}>
                  <div>
                    <h3>Flats and villas</h3>
                    <p>Lift bookings and building permissions handled by our crew</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </div>
                <div className={s.typeRow}>
                  <div>
                    <h3>Businesses and Free Zone units</h3>
                    <p>Stock and equipment collected outside trading hours where needed</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </div>
                <div className={s.typeRow}>
                  <div>
                    <h3>Cross-emirate moves</h3>
                    <p>Delivery to Dubai or Sharjah rather than back to Ajman, if that is where you are going</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </div>
              </div>
            </div>

            <aside className={s.areaCard}>
              <h3>Districts we collect from</h3>
              <p>Not a list of facilities — a list of places our van comes to.</p>
              <div className={s.areaChips}>
                {AJMAN_AREAS.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
              <p className={s.areaNote}>
                {storageLocationSentence("ajman")} Transport between your address and the facility is quoted
                separately and confirmed before anything is booked — so the number you are given is the number
                you pay.
              </p>
            </aside>
          </div>
        </section>

        {/* ---------- dark band ---------- */}
        <section className={s.wrap}>
          <div className={s.darkBand}>
            <span className={s.eyebrow}>Why not a self-storage unit</span>
            <h2>
              A Cheap Ajman Unit Stops Being Cheap Once You Add <em>The Van</em>
            </h2>
            <div className={s.featGrid}>
              <article className={s.feat}>
                <div className={s.featIcon}>🚚</div>
                <h3>We do the lifting</h3>
                <p>A quoted unit rate never includes the van, the driver or the two men. Our collection does.</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>📐</div>
                <h3>Measured, not guessed</h3>
                <p>Billed on the floor space your items occupy, so a half-empty unit is not your problem.</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>🔒</div>
                <h3>Indoors and covered</h3>
                <p>{CCTV_COVERAGE}</p>
              </article>
              <article className={s.feat}>
                <div className={s.featIcon}>↩️</div>
                <h3>Partial retrieval</h3>
                <p>One box or all of it, normally within {RETRIEVAL_WINDOW}.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- pricing ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.priceBand}>
            <div>
              <span className={s.eyebrow}>Pricing</span>
              <h2>
                One Rate, <em>Told To You Up Front</em>
              </h2>
              <p>
                Storage is charged on the space you actually use. Transport is quoted separately against your
                actual address — you see both numbers before you commit.
              </p>
              <ul className={s.priceList}>
                <li>No minimum storage term</li>
                <li>No charge for the quote or the survey</li>
                <li>Wrapping and loading included in the collection</li>
                <li>Partial retrieval without closing the account</li>
              </ul>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                Get your Ajman quote →
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
            <h2>Storage in Ajman, Explained Properly</h2>
            <p>
              Ajman is the most affordable place to rent on this stretch of coast, which is exactly why so many
              of its residents work somewhere else. Al Nuaimiya, Al Rashidiya and the Corniche towers are full
              of people commuting into Sharjah and Dubai, and that produces the same storage pattern as the
              rest of the northern emirates: frequent moves, cross-border handovers that never align, and flats
              with more furniture than cupboard space.
            </p>
            <p>
              We operate a warehouse in Ajman, so goods collected in the emirate are stored in the emirate
              rather than driven down the coast and back. Storage costs the
              same {PRICE_PER_SQFT_AED} AED per square foot per month wherever you are, charged on the floor
              space your items actually occupy, and transport is quoted against your real address rather than
              a table.
            </p>
            <h3>What we do not offer</h3>
            <p>
              This is a managed service, not a yard with keys. We collect, we store and we deliver back on
              request — normally within {RETRIEVAL_WINDOW}. What you do not get is a unit you can drive to and
              open at any hour. If that is what you actually want, an Ajman self-storage yard will serve you
              better than we will, and we would rather say it here than after you have booked.{" "}
              {FACILITY_ACCESS_NOTE}.
            </p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Questions from Ajman</span>
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
            <span className={s.eyebrow}>Also serving</span>
            <h2>
              Storage Elsewhere in <em>the Northern Emirates</em>
            </h2>
          </div>
          <div className={s.areaLinks}>
            <Link href="/locations/sharjah" className={s.areaLink}>
              Sharjah
              <span>↗</span>
            </Link>
            <Link href="/locations/sharjah/moving-storage" className={s.areaLink}>
              Moving storage
              <span>↗</span>
            </Link>
            <Link href="/locations/sharjah/al-nahda" className={s.areaLink}>
              Al Nahda
              <span>↗</span>
            </Link>
            <Link href="/locations" className={s.areaLink}>
              All locations
              <span>↗</span>
            </Link>
          </div>
        </section>

        {/* ---------- closing CTA ---------- */}
        <section className={s.wrap} style={{ paddingBottom: 72 }}>
          <div className={s.finalCta}>
            <h2>
              Tell Us What Is In The Way. <em>We Will Come And Get It.</em>
            </h2>
            <p>
              Free quote, no survey fee, nothing booked until you agree both numbers — the storage and the
              transport. {HOURS_DISPLAY}.
            </p>
            <div className={s.finalCtaBtns}>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                Get a free quote →
              </Link>
              <a href={`tel:${PHONE}`} className={`${s.btn} ${s.btnGhost}`}>
                Call {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className={`${s.btn} ${s.btnGhost}`}>
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
