import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"
import { SHARJAH_AREAS } from "@/lib/sharjah-areas"
import { storageLocationSentence } from "@/lib/facilities"
import { emirateFaqs } from "@/lib/emirate-faqs"
import LocalProof from "@/components/locations/local-proof"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  HOURS_DISPLAY,
  FACILITY_ACCESS_NOTE,
  CCTV_COVERAGE,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  CUSTOMERS_GLOBAL,
  YEARS_SERVING,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"
import { emirateFontVars } from "@/components/locations/fonts"
import s from "@/components/locations/emirate-theme.module.css"

/*
 * ONE Sharjah page, not ten.
 *
 * The district terms (Al Nahda, Al Majaz, Muwaileh, Al Qasimia, Rolla,
 * Al Taawun, Al Khan, University City) return no measurable volume when paired
 * with storage terms, so they are covered as served-area copy INSIDE this page
 * — where they still catch the long tail — instead of ten pages nobody searches
 * for. The demand that exists is the city head terms (~620/mo combined):
 * self storage sharjah · storage in sharjah · storage space in sharjah ·
 * storage units sharjah · cheap storage sharjah · furniture storage sharjah.
 *
 * FACILITY CLAIMS: SafeStorage operates a warehouse in Sharjah. Its address is
 * not published yet, so this page states the facility exists without naming a
 * street — lib/facilities.ts owns that, and filling the address in there updates
 * this page automatically. Never invent or approximate an address (GBP
 * suspension risk). Every figure below is imported; nothing is retyped.
 */

const URL = "https://safestorage.ae/locations/sharjah"

export const metadata: Metadata = {
  title: { absolute: "Self Storage Sharjah | Storage Units With Pickup | SafeStorage" },
  description:
    `Self storage in Sharjah from ${PRICE_PER_SQFT_AED} AED/sqft. Door-to-door collection from Al Nahda, Al Majaz, Al Taawun and Muwaileh — we pack, collect and store. Pay only for the space you use.`,
  keywords:
    "self storage sharjah, storage in sharjah, storage space in sharjah, storage units sharjah, cheap storage sharjah, furniture storage sharjah, household storage sharjah, storage sharjah al nahda, storage al majaz, storage al taawun, storage muwaileh, storage near me sharjah, SafeStorage Sharjah",
  openGraph: {
    title: "Self Storage Sharjah | Storage Units With Door-to-Door Pickup",
    description: `Storage for Sharjah homes and businesses from ${PRICE_PER_SQFT_AED} AED/sqft, with collection from your door.`,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage — self storage for Sharjah" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    // Declared on BOTH sides: a one-way hreflang is ignored by Google.
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations/sharjah",
      "x-default": URL,
    },
  },
}

const faqs = emirateFaqs({
  emirate: "Sharjah",
  facilityKey: "sharjah",
  sampleDistricts: ["Al Nahda", "Al Majaz"],
  university: "Sharjah University City",
})

const schemas = [
  locationBusinessSchema({
    name: "Sharjah",
    url: URL,
    serves: SHARJAH_AREAS.map((a) => a.name),
  }),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Self Storage in Sharjah with Door-to-Door Collection",
    description:
      "Household, furniture and business storage for Sharjah residents. Items are collected from your Sharjah address and stored at the SafeStorage facility in Sharjah.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: URL,
    serviceType: "Self Storage",
    areaServed: ["Sharjah", ...SHARJAH_AREAS.map((a) => a.name)].map((name) => ({
      "@type": "Place",
      name,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    name: "Self Storage Sharjah | Storage Units With Pickup | SafeStorage",
    description: `Self storage in Sharjah from ${PRICE_PER_SQFT_AED} AED/sqft with door-to-door collection.`,
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
      { "@type": "ListItem", position: 3, name: "Sharjah", item: URL },
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

export default function SharjahPage() {
  return (
    <>
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${emirateFontVars}`}>
        {/* ---------- breadcrumb ---------- */}
        <nav className={`${s.wrap} ${s.crumbs}`} aria-label="Breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/locations">Locations</Link> &nbsp;/&nbsp;{" "}
          <span>Sharjah</span>
        </nav>

        {/* ---------- hero ---------- */}
        <section className={`${s.hero} ${s.wrap}`}>
          <div className={s.heroInner}>
            <div className={s.heroRating}>
              <strong>{RATING_VALUE}/5</strong>
              <span>{REVIEW_COUNT_DISPLAY} reviews worldwide</span>
            </div>
            <div className={s.heroContent}>
              <span className={s.heroTag}>Serving Sharjah</span>
              <h1>
                Storage for Sharjah — <em>we collect, store and bring it back</em>
              </h1>
              <p className={s.heroSlogan}>No driving to a unit. No van hire. No lifting.</p>
              <p>
                We pick up from your door in Sharjah, store it securely in our Sharjah facility, and deliver it
                back whenever you ask. From {PRICE_PER_SQFT_AED} AED per sqft per month, VAT included — and you
                pay for the space your things actually occupy, not a unit size you have to fill.
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
              <b>Collected in Sharjah</b>
              <small>We pack and load</small>
            </div>
            <div className={s.trustItem}>
              <div className={`${s.trustIcon} ${s.tPurple}`}>🏆</div>
              <strong className={s.vPurple}>{YEARS_SERVING}</strong>
              <b>Years of storage</b>
              <small>{CUSTOMERS_GLOBAL} customers worldwide</small>
            </div>
          </div>
          <hr className={s.rule} />
        </section>

        {/* ---------- intro cards ---------- */}
        <section className={`${s.wrap} ${s.introGrid}`}>
          <article className={`${s.introCard} ${s.introWhite}`}>
            <div>
              <span className={s.eyebrow}>Pay for space, not a unit</span>
              <h3>No fixed unit size to grow into</h3>
              <p>
                A traditional Sharjah storage unit charges you for the whole room whether you fill it or not. We
                measure the floor space your things actually occupy and bill that.
              </p>
            </div>
            <div className={s.introFoot}>
              <small>Transparent pricing</small>
              <span className={s.circleBtn}>↗</span>
            </div>
          </article>

          <article className={`${s.introCard} ${s.introAccent}`}>
            <div>
              <span className={`${s.eyebrow} ${s.eyebrowOnAccent}`}>No minimum term</span>
              <h3>Store for a fortnight or for years</h3>
              <p>
                Most Sharjah customers call us because two tenancy dates do not meet. A two-week gap is charged as
                two weeks — there is no three-month minimum to sign.
              </p>
            </div>
            <div className={s.introFoot}>
              <small>Flexible</small>
              <span className={`${s.circleBtn} ${s.circleBtnInvert}`}>↗</span>
            </div>
          </article>

          <article className={`${s.introCard} ${s.introNavy}`}>
            <div>
              <span className={`${s.eyebrow} ${s.eyebrowOnNavy}`}>One warehouse, not a yard</span>
              <h3>Stored indoors, under camera, off the floor</h3>
              <p>
                Everything is wrapped before it leaves your home and kept inside a covered facility — not a
                container in a compound.
              </p>
            </div>
            <div className={s.introFoot}>
              <small>Secure</small>
              <span className={s.circleBtn}>↗</span>
            </div>
          </article>
        </section>

        {/* ---------- what we store ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>What Sharjah stores with us</span>
            <h2>
              Storage Space in Sharjah for <em>Whatever Is In The Way</em>
            </h2>
            <p>
              Same collection service, same per-square-foot price. The only thing that changes is what we are
              picking up.
            </p>
          </div>

          <div className={s.svcGrid}>
            {[
              { m: s.m1, icon: "🛋️", t: "Furniture storage", d: "Sofas, beds, wardrobes, dining sets — wrapped and stored flat" },
              { m: s.m2, icon: "🏠", t: "Household storage", d: "The contents of a flat while you move, renovate or travel" },
              { m: s.m3, icon: "📦", t: "Short-term storage", d: "For the gap between one tenancy ending and the next starting" },
              { m: s.m4, icon: "🏢", t: "Business storage", d: "Stock, files, equipment and fit-out kit off your rented floor" },
              { m: s.m5, icon: "🎓", t: "Student storage", d: "University City terms and summer breaks, boxed and held" },
              { m: s.m6, icon: "📄", t: "Document storage", d: "Archive boxes retrieved on notice rather than kept in the office" },
            ].map((c) => (
              <article key={c.t} className={s.card}>
                <div className={`${s.svcMedia} ${c.m}`}>{c.icon}</div>
                <div className={s.svcBody}>
                  <h3>
                    {c.t}
                    <span>{c.d}</span>
                  </h3>
                  <span className={s.circleBtn}>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- why (dark band) ---------- */}
        <section className={s.wrap}>
          <div className={s.darkBand}>
            <span className={s.eyebrow}>What a Sharjah unit does not include</span>
            <h2>
              Golden Box, SafeZone and Easy Storage Have Units in Sharjah. <em>None of Them Come and Get It.</em>
            </h2>
            <div className={s.featGrid}>
              {[
                { i: "🚚", t: "We do the lifting", d: "A quoted unit price never includes the van, the driver or the two men. Ours includes the collection." },
                { i: "📐", t: "Measured, not guessed", d: "You are billed on the floor space your items occupy, so a half-empty room is not your problem." },
                { i: "🔒", t: "Indoors and covered", d: CCTV_COVERAGE },
                { i: "↩️", t: "Partial retrieval", d: `Take back one box or everything. Delivery back to Sharjah is normally arranged within ${RETRIEVAL_WINDOW}.` },
              ].map((f) => (
                <article key={f.t} className={s.feat}>
                  <div className={s.featIcon}>{f.i}</div>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- coverage ---------- */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.split}>
            <div>
              <span className={s.eyebrow}>Collection coverage</span>
              <h2>
                We Come to <em>Your Address</em> in Sharjah
              </h2>
              <p className={s.splitBlurb}>
                We operate a warehouse in Sharjah itself, so your things stay in the emirate. The collection
                service on top of it reaches every district below.
              </p>
              <div className={s.typeList}>
                <div className={s.typeRow}>
                  <div>
                    <h3>Flats and villas</h3>
                    <p>Lift access, building permissions and loading slots handled by our crew</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </div>
                <div className={s.typeRow}>
                  <div>
                    <h3>Offices and shops</h3>
                    <p>Out-of-hours collection so trading and staff are not disrupted</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </div>
                <Link href="/locations/sharjah/university-city" className={s.typeRow}>
                  <div>
                    <h3>Student accommodation</h3>
                    <p>University City pickups at end of term, held over the summer</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </Link>
                <Link href="/locations/sharjah/moving-storage" className={s.typeRow}>
                  <div>
                    <h3>Moving between tenancies</h3>
                    <p>The gap when the lease ends before the new place is ready</p>
                  </div>
                  <span className={s.circleBtn}>↗</span>
                </Link>
              </div>
            </div>

            <aside className={s.areaCard}>
              <h3>Districts we collect from</h3>
              <p>Not a list of facilities — a list of places our van comes to.</p>
              <div className={s.areaChips}>
                {SHARJAH_AREAS.map((a) => (
                  <Link key={a.slug} href={`/locations/sharjah/${a.slug}`}>
                    {a.name}
                  </Link>
                ))}
              </div>
              <p className={s.areaNote}>
                {storageLocationSentence("sharjah")} Transport between your address and the facility is quoted
                separately and confirmed by our team before anything is booked — so the number you are given is
                the number you pay.
              </p>
            </aside>
          </div>
        </section>

        {/* ---------- how it works ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>How it works</span>
            <h2>Four Steps, and You Lift Nothing</h2>
          </div>
          <div className={s.steps}>
            {[
              { n: "STEP 01", t: "Tell us what you have", d: "A call, a WhatsApp or the quote form. Rough list is fine — we size it for you." },
              { n: "STEP 02", t: "We come to Sharjah", d: "Our team arrives on the agreed date, wraps everything and loads the van." },
              { n: "STEP 03", t: "Stored and inventoried", d: "Items go into the covered facility under camera, logged so they can be found again." },
              { n: "STEP 04", t: "Delivered back", d: `Ask for all of it or part of it. Back at your door, usually within ${RETRIEVAL_WINDOW}.` },
            ].map((st) => (
              <article key={st.n} className={s.step}>
                <span className={s.stepNo}>{st.n}</span>
                <h3>{st.t}</h3>
                <p>{st.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- pricing ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.priceBand}>
            <div>
              <span className={s.eyebrow}>Pricing</span>
              <h2>
                Cheap Storage in Sharjah, <em>Without The Asterisk</em>
              </h2>
              <p>
                One rate, VAT included, charged on the space you actually use. Transport is quoted separately and
                told to you up front rather than added later.
              </p>
              <ul className={s.priceList}>
                <li>No minimum storage term</li>
                <li>No charge for the quote or the survey</li>
                <li>Wrapping and loading included in the collection</li>
                <li>Partial retrieval without closing the account</li>
              </ul>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                Get your Sharjah quote →
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

        {/* ---------- prose (SEO body) ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.prose}>
            <h2>Storage in Sharjah, Explained Properly</h2>
            <p>
              Sharjah has plenty of self storage units. What it has less of is anyone willing to come and get your
              things. Almost every quoted unit price assumes you will arrive with a van, carry the load in
              yourself, and repeat the trip every time something needs to come out. For a family clearing a
              two-bedroom flat in Al Majaz, that hidden cost is usually larger than the storage itself.
            </p>
            <p>
              SafeStorage works the other way round. You tell us roughly what there is, we come to your address in
              Sharjah, wrap it, load it and take it to our Sharjah warehouse. Storage is charged at{" "}
              {PRICE_PER_SQFT_AED} AED per square foot per month, VAT included, on the floor space your items
              genuinely occupy. When you want any of it back, we bring it to you.
            </p>

            <h3>The Sharjah move that never lines up</h3>
            <p>
              The most common call we take from Sharjah is not really about storage at all — it is about dates. A
              tenancy in Al Nahda ends on the 30th and the new place in Dubai is not ready until the 12th. Rather
              than pay a fortnight of rent on a flat you have left, or wedge everything into a relative&apos;s
              spare room, we empty the property on the day you return the keys and deliver to the new address when
              you can receive it. No minimum term applies, so a twelve-day gap is charged as twelve days. It works
              identically in reverse for people moving into Sharjah from Dubai.
            </p>

            <h3>Furniture storage and the Sharjah summer</h3>
            <p>
              Furniture is the thing people worry about most, and reasonably so. Anything soft or wooden left in an
              uncovered yard or a metal container through a Gulf summer will not come back the way it went in.
              Everything we collect is wrapped before it leaves your home, kept off the floor and stored inside a
              covered warehouse. {CCTV_COVERAGE} {FACILITY_ACCESS_NOTE}.
            </p>

            <h3>Businesses, students and everyone in between</h3>
            <p>
              Shops around Rolla and Al Qasimia use us to move slow stock off expensive retail floor. Offices in Al
              Taawun send archive boxes rather than rent a bigger unit. Students at University City store a term&apos;s
              worth of belongings over the summer instead of paying to keep a room they are not in. It is the same
              service and the same rate in each case — only the contents of the van change.
            </p>

            <h3>Where your things are actually kept</h3>
            <p>
              SafeStorage operates a warehouse in Sharjah, so goods collected in the emirate are stored in the
              emirate rather than driven to another one and back.
            </p>
            <p>
              What we do not offer is a unit you hold the key to and visit at will. This is a managed service:
              we collect, we store, and we deliver back on request, normally within {RETRIEVAL_WINDOW}. If what
              you actually want is a door you can open at midnight, a self-storage yard will suit you better,
              and we would rather say that now than after you have booked.
            </p>
          </div>
        </section>

        {/* Sharjah-specific proof. Renders nothing until real quotes exist —
            see lib/local-proof.ts. */}
        <LocalProof emirateSlug="sharjah" emirate="Sharjah" />

        {/* ---------- FAQ ---------- */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Questions from Sharjah</span>
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

        {/* ---------- internal links: every service area ----------
             The client's point: Al Quoz names 12 neighbourhoods and Sharjah named
             none. These are links rather than plain text so the district pages are
             reachable in one hop from here, not only from the sitemap. */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Service areas</span>
            <h2>
              Every Part of Sharjah <em>We Collect From</em>
            </h2>
            <p>
              Each one has its own page covering how collection works on those streets — lifts, parking,
              access and what people there usually store.
            </p>
          </div>
          <div className={s.areaLinks}>
            {SHARJAH_AREAS.map((a) => (
              <Link key={a.slug} href={`/locations/sharjah/${a.slug}`} className={s.areaLink}>
                {a.name}
                <span>↗</span>
              </Link>
            ))}
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
