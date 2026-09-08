import Link from "next/link"
import type { Area, EmirateDef } from "@/lib/areas/types"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  HOURS_DISPLAY,
  CCTV_COVERAGE,
  FACILITY_ACCESS_NOTE,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"
import { storageLocationSentence } from "@/lib/facilities"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { SILOS, HUB_ORDER, MONEY_PAGE, moneyAnchor } from "@/lib/silo/silos"
import { emirateFontVars } from "./fonts"
import HeroPreload from "./hero-preload"
import s from "./emirate-theme.module.css"

/**
 * Shared renderer for every district page, in every emirate.
 *
 * The DESIGN is shared; the COPY is not. Everything that varies by district —
 * hero blurb, two paragraphs of local character, three use cases, two FAQs —
 * comes from the emirate's data file and is written per district. The only
 * shared prose is the part that is genuinely identical everywhere: the price,
 * the process, and the disclosure about where goods are actually stored.
 *
 * The emirate is a PARAMETER, not a constant. This file used to hard-code
 * "Sharjah" into the breadcrumb, the FAQ localiser and the disclosure, which
 * is why adding Dubai, Abu Dhabi and Ajman would otherwise have meant copying
 * it three times and watching the four copies drift apart.
 *
 * The "where your things go" disclosure is repeated on every district page on
 * purpose: a district page is likelier than the city page to be someone's first
 * landing, so it cannot rely on the emirate hub having said it already. Its
 * wording comes from lib/facilities.ts and changes on its own when an emirate's
 * address is filled in there — or stays honest when that emirate has no
 * facility at all.
 */
export default function AreaPage({ area, emirate }: { area: Area; emirate: EmirateDef }) {
  // `nearby` may point at a data-driven area OR at one of the hand-written
  // pages listed in staticAreas — the link grid must not silently drop a
  // neighbour just because its page happens to be a .tsx file.
  const bySlug: Record<string, { slug: string; name: string }> = {
    ...Object.fromEntries(emirate.areas.map((a) => [a.slug, a])),
    ...Object.fromEntries((emirate.staticAreas ?? []).map((a) => [a.slug, a])),
  }
  const nearby = area.nearby.map((slug) => bySlug[slug]).filter(Boolean)
  const areaCount = emirate.areas.length + (emirate.staticAreas?.length ?? 0)
  const base = `/locations/${emirate.slug}`

  return (
    <div className={`${s.page} ${emirateFontVars}`}>
      <HeroPreload />
      {/* ---------- breadcrumb ---------- */}
      <nav className={`${s.wrap} ${s.crumbs}`} aria-label="Breadcrumb">
        <Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/locations">Locations</Link> &nbsp;/&nbsp;{" "}
        <Link href={base}>{emirate.name}</Link> &nbsp;/&nbsp; <span>{area.name}</span>
      </nav>

      {/* ---------- hero ---------- */}
      <section className={`${s.hero} ${s.wrap}`}>
        <div className={s.heroInner}>
          <div className={s.heroRating}>
            <strong>{RATING_VALUE}/5</strong>
            <span>{REVIEW_COUNT_DISPLAY} reviews worldwide</span>
          </div>
          <div className={s.heroContent}>
            <span className={s.heroTag}>{emirate.name} · {area.name}</span>
            <h1>
              Storage for {area.name} — <em>we collect, store and bring it back</em>
            </h1>
            <p className={s.heroSlogan}>No driving to a unit. No van hire. No lifting.</p>
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
            <strong>Where your things actually go.</strong> {storageLocationSentence(emirate.facilityKey)} We collect
            from your address in {area.name}, so you do not need to drive anything anywhere. Transport is
            quoted separately and confirmed before anything is booked.
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
          {/* The canonical ten, localised to this district. Same array the
              FAQPage schema is built from in the route. */}
          {emirateFaqs({
            emirate: emirate.name,
            facilityKey: emirate.facilityKey,
            sampleDistricts: emirate.sampleDistricts,
            university: emirate.university,
            district: area.name,
          }).map((f) => (
            <article key={f.q} className={s.faqItem}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
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
            <Link key={n.slug} href={`${base}/${n.slug}`} className={s.areaLink}>
              {n.name}
              <span>↗</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href={base} className={s.parentLink}>
            ← All {areaCount} {emirate.name} service areas
          </Link>
        </div>
      </section>

      {/* ---------- silo links ----------
          Exception B of the linking plan: an area page links out to its
          emirate hub, three or four neighbours, the money page and the five
          silo hubs — and nothing else. Rendered here rather than written into
          each area's copy so no district page can ship without them. */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>What are you storing?</span>
          <h2>
            Pick The Page That <em>Matches</em>
          </h2>
        </div>
        <div className={s.areaLinks}>
          {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
            <Link key={SILOS[k].hub} href={SILOS[k].hub} className={s.areaLink}>
              {SILOS[k].name}
              <span>↗</span>
            </Link>
          ))}
          <Link href={MONEY_PAGE} className={s.areaLink}>
            {moneyAnchor(`${base}/${area.slug}`)}
            <span>↗</span>
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
