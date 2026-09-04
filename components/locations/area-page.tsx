import Link from "next/link"
import type { SharjahArea } from "@/lib/sharjah-areas"
import { AREA_BY_SLUG, SHARJAH_AREAS } from "@/lib/sharjah-areas"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  HOURS_DISPLAY,
  CCTV_COVERAGE,
  FACILITY_ACCESS_NOTE,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  ADDRESS_FULL,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"
import { emirateFontVars } from "./fonts"
import s from "./emirate-theme.module.css"

/**
 * Shared renderer for the Sharjah district pages.
 *
 * The DESIGN is shared; the COPY is not. Everything that varies by district —
 * hero blurb, two paragraphs of local character, three use cases, two FAQs —
 * comes from lib/sharjah-areas.ts and is written per district. The only shared
 * prose is the part that is genuinely identical everywhere: the price, the
 * process, and the disclosure that the warehouse is in Dubai.
 *
 * That disclosure is repeated on every district page on purpose. A district
 * page is more likely than the city page to be someone's first landing, so it
 * cannot rely on /locations/sharjah having already said it.
 */
export default function AreaPage({ area }: { area: SharjahArea }) {
  const nearby = area.nearby.map((slug) => AREA_BY_SLUG[slug]).filter(Boolean)

  return (
    <div className={`${s.page} ${emirateFontVars}`}>
      {/* ---------- breadcrumb ---------- */}
      <nav className={`${s.wrap} ${s.crumbs}`} aria-label="Breadcrumb">
        <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/locations">Locations</Link> &nbsp;/&nbsp;{" "}
        <Link href="/locations/sharjah">Sharjah</Link> &nbsp;/&nbsp; <span>{area.name}</span>
      </nav>

      {/* ---------- hero ---------- */}
      <section className={`${s.hero} ${s.wrap}`}>
        <div className={s.heroInner}>
          <div className={s.heroRating}>
            <strong>{RATING_VALUE}/5</strong>
            <span>{REVIEW_COUNT_DISPLAY} reviews worldwide</span>
          </div>
          <div className={s.heroContent}>
            <span className={s.heroTag}>Sharjah · {area.name}</span>
            <h1>
              Storage in <em>{area.name}</em> {area.headline}
            </h1>
            <p className={s.heroSlogan}>We come to you. You lift nothing.</p>
            <p>{area.blurb}</p>
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
            <div className={`${s.trustIcon} ${s.tBlue}`}>🚚</div>
            <strong className={s.vBlue}>Door to door</strong>
            <b>Collected in {area.name}</b>
            <small>We pack and load</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tGold}`}>🗓️</div>
            <strong className={s.vGold}>No minimum</strong>
            <b>Store a fortnight</b>
            <small>or for years</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tPurple}`}>↩️</div>
            <strong className={s.vPurple}>{RETRIEVAL_WINDOW}</strong>
            <b>Typical retrieval</b>
            <small>all of it or part</small>
          </div>
        </div>
        <hr className={s.rule} />
      </section>

      {/* ---------- what people here store ---------- */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>What {area.name} stores</span>
          <h2>
            Why People Here <em>Call Us</em>
          </h2>
        </div>
        <div className={s.useGrid}>
          {area.uses.map((u) => (
            <article key={u.title} className={s.useCard}>
              <div className={s.useIcon}>{u.icon}</div>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- local character prose ---------- */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.prose}>
          <h2>Storage in {area.name}, Specifically</h2>
          <p>{area.character[0]}</p>
          <p>{area.character[1]}</p>
          <div className={s.disclosure}>
            <strong>Where your things actually go.</strong> SafeStorage does not operate a facility in{" "}
            {area.name} or anywhere else in Sharjah. There is one warehouse and it is at {ADDRESS_FULL}. What
            we run in {area.name} is the collection and delivery service. Transport is quoted separately and
            confirmed before anything is booked.
          </div>
        </div>
      </section>

      {/* ---------- dark band: what is included ---------- */}
      <section className={s.wrap}>
        <div className={s.darkBand}>
          <span className={s.eyebrow}>What the price includes</span>
          <h2>
            Everything Except <em>The Bit You Were Dreading</em>
          </h2>
          <div className={s.featGrid}>
            <article className={s.feat}>
              <div className={s.featIcon}>🚚</div>
              <h3>Collection from your door</h3>
              <p>Our crew comes to your {area.name} address, wraps what is going and loads it.</p>
            </article>
            <article className={s.feat}>
              <div className={s.featIcon}>📐</div>
              <h3>Measured, not guessed</h3>
              <p>Billed on the floor space your items occupy, not on a unit size you have to fill.</p>
            </article>
            <article className={s.feat}>
              <div className={s.featIcon}>🔒</div>
              <h3>Indoors and covered</h3>
              <p>{CCTV_COVERAGE}</p>
            </article>
            <article className={s.feat}>
              <div className={s.featIcon}>↩️</div>
              <h3>Partial retrieval</h3>
              <p>Take back one box or everything, normally within {RETRIEVAL_WINDOW}.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- steps ---------- */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>How it works</span>
          <h2>Four Steps</h2>
        </div>
        <div className={s.steps}>
          <article className={s.step}>
            <span className={s.stepNo}>STEP 01</span>
            <h3>Tell us what you have</h3>
            <p>A call, a WhatsApp or the quote form. A rough list is enough for us to size it.</p>
          </article>
          <article className={s.step}>
            <span className={s.stepNo}>STEP 02</span>
            <h3>We come to {area.name}</h3>
            <p>The crew arrives on the agreed date, wraps everything and loads the van.</p>
          </article>
          <article className={s.step}>
            <span className={s.stepNo}>STEP 03</span>
            <h3>Stored and logged</h3>
            <p>Items go into the covered facility under camera, logged so they can be found again.</p>
          </article>
          <article className={s.step}>
            <span className={s.stepNo}>STEP 04</span>
            <h3>Delivered back</h3>
            <p>All of it or part of it, back at the address you choose, usually within {RETRIEVAL_WINDOW}.</p>
          </article>
        </div>
      </section>

      {/* ---------- pricing ---------- */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.priceBand}>
          <div>
            <span className={s.eyebrow}>Pricing</span>
            <h2>
              One Rate, <em>VAT Included</em>
            </h2>
            <p>
              Charged on the space your things actually take up. Transport from {area.name} is quoted
              separately and told to you up front rather than added afterwards.
            </p>
            <ul className={s.priceList}>
              <li>No minimum storage term</li>
              <li>No charge for the quote or the survey</li>
              <li>Wrapping and loading included in the collection</li>
              <li>Partial retrieval without closing the account</li>
            </ul>
            <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
              Get your {area.name} quote →
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

      {/* ---------- FAQ ---------- */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Questions from {area.name}</span>
          <h2>
            Before You <em>Book</em>
          </h2>
        </div>
        <div className={s.faqList}>
          {area.faqs.map((f) => (
            <article key={f.q} className={s.faqItem}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
          <article className={s.faqItem}>
            <h3>How much does storage cost?</h3>
            <p>
              {PRICE_PER_SQFT_AED} AED per square foot per month, VAT included, on the floor space your items
              occupy. Transport from {area.name} is quoted separately because it depends on the address and the
              load. You are given both numbers before anything is booked.
            </p>
          </article>
          <article className={s.faqItem}>
            <h3>Is my furniture safe over a Sharjah summer?</h3>
            <p>
              Everything is wrapped before it leaves your property, kept off the floor and stored inside a
              covered warehouse rather than a yard or a container. {CCTV_COVERAGE} {FACILITY_ACCESS_NOTE}.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- internal links: neighbouring areas ---------- */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Nearby</span>
          <h2>
            We Also Collect From <em>These Areas</em>
          </h2>
        </div>
        <div className={s.areaLinks}>
          {nearby.map((n) => (
            <Link key={n.slug} href={`/locations/sharjah/${n.slug}`} className={s.areaLink}>
              {n.name}
              <span>↗</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/locations/sharjah" className={s.parentLink}>
            ← All {SHARJAH_AREAS.length} Sharjah service areas
          </Link>
        </div>
      </section>

      {/* ---------- closing CTA ---------- */}
      <section className={s.wrap} style={{ paddingBottom: 72 }}>
        <div className={s.finalCta}>
          <h2>
            Storing Something From {area.name}? <em>We Will Come And Get It.</em>
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
          </div>
        </div>
      </section>
    </div>
  )
}
