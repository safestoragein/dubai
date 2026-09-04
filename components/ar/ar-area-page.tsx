import Link from "next/link"
import type { ArArea, ArEmirate } from "@/lib/ar/emirates"
import { AR, arStorageLocation } from "@/lib/ar/emirates"
import { emirateFontVars } from "@/components/locations/fonts"
import s from "@/components/locations/emirate-theme.module.css"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  HOURS_DISPLAY,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"

/**
 * Arabic district page.
 *
 * Sibling links are the four areas following this one in its emirate's list,
 * wrapping around — so every area both links out and is linked to, and no page
 * is reachable only from the emirate page. Same guarantee the English Sharjah
 * set has, implemented positionally instead of by a hand-kept `nearby` list.
 */
export default function ArAreaPage({ emirate: e, area }: { emirate: ArEmirate; area: ArArea }) {
  const i = e.areas.findIndex((a) => a.slug === area.slug)
  const siblings = Array.from({ length: 4 }, (_, k) => e.areas[(i + k + 1) % e.areas.length]).filter(
    (a) => a && a.slug !== area.slug
  )
  const storage = arStorageLocation(e.facilityKey, e.name)

  return (
    <div className={`${s.page} ${emirateFontVars}`}>
      <nav className={`${s.wrap} ${s.crumbs}`} aria-label="مسار التنقل">
        <Link href="/ar">{AR.home}</Link> &nbsp;/&nbsp; <Link href="/ar/locations">{AR.locations}</Link>{" "}
        &nbsp;/&nbsp; <Link href={`/ar/locations/${e.slug}`}>{e.name}</Link> &nbsp;/&nbsp;{" "}
        <span>{area.name}</span>
      </nav>

      <section className={`${s.hero} ${s.wrap}`}>
        <div className={s.heroInner}>
          <div className={s.heroRating}>
            <strong>{RATING_VALUE}/5</strong>
            <span>
              {REVIEW_COUNT_DISPLAY} {AR.reviewsWorldwide}
            </span>
          </div>
          <div className={s.heroContent}>
            <span className={s.heroTag}>
              {e.name} · {area.name}
            </span>
            <h1>
              تخزين في <em>{area.name}</em>
            </h1>
            <p className={s.heroSlogan}>نأتي إليك، ولا تحمل شيئاً.</p>
            <p>{area.blurb}</p>
            <div className={s.heroCta}>
              <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
                {AR.getQuote} ←
              </Link>
              <a href={`tel:${PHONE}`} className={`${s.btn} ${s.btnGhost}`}>
                {AR.call} {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.wrap}>
        <div className={s.trust}>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tOrange}`}>💰</div>
            <strong className={s.vOrange}>{PRICE_PER_SQFT_AED}</strong>
            <b>{AR.perSqft}</b>
            <small>{AR.vatIncl}</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tBlue}`}>🚚</div>
            <strong className={s.vBlue}>من الباب</strong>
            <b>استلام في {area.name}</b>
            <small>نغلّف ونحمّل</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tGold}`}>🗓️</div>
            <strong className={s.vGold}>بلا حد أدنى</strong>
            <b>أسبوعان أو سنوات</b>
            <small>تنهيها متى شئت</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tPurple}`}>↩️</div>
            <strong className={s.vPurple}>{RETRIEVAL_WINDOW}</strong>
            <b>الاسترجاع المعتاد</b>
            <small>كلياً أو جزئياً</small>
          </div>
        </div>
        <hr className={s.rule} />
      </section>

      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.prose}>
          <h2>
            التخزين في {area.name} تحديداً
          </h2>
          <p>{area.body}</p>
          <div className={s.disclosure}>
            <strong>أين تُحفظ أغراضك.</strong> {storage} نستلم من عنوانك في {area.name}، فلا تحتاج إلى نقل أي
            شيء بنفسك. النقل يُسعَّر بشكل منفصل ويُؤكَّد قبل أي حجز.
          </div>
        </div>
      </section>

      <section className={s.wrap}>
        <div className={s.darkBand}>
          <span className={s.eyebrow}>ما يشمله السعر</span>
          <h2>
            كل شيء عدا <em>الجزء الذي كنت تخشاه</em>
          </h2>
          <div className={s.featGrid}>
            {AR.included.map((f, k) => (
              <article key={f.t} className={s.feat}>
                <div className={s.featIcon}>{["🚚", "📐", "🔒", "↩️"][k]}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.howItWorks}</span>
          <h2>أربع خطوات</h2>
        </div>
        <div className={s.steps}>
          {AR.steps.map((st) => (
            <article key={st.n} className={s.step}>
              <span className={s.stepNo}>{st.n}</span>
              <h3>{st.t}</h3>
              <p>{st.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.priceBand}>
          <div>
            <span className={s.eyebrow}>{AR.pricing}</span>
            <h2>
              سعر واحد، <em>شامل الضريبة</em>
            </h2>
            <p>
              يُحتسب على المساحة التي تشغلها أغراضك فعلاً. النقل من {area.name} يُسعَّر بشكل منفصل ويُعلَن لك
              مقدماً.
            </p>
            <ul className={s.priceList}>
              {AR.priceBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
              {AR.getQuote} ←
            </Link>
          </div>
          <div className={s.priceTag}>
            <strong>{PRICE_PER_SQFT_AED}</strong>
            <span>
              {AR.perSqft}
              <br />
              {AR.vatIncl}
            </span>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.faqTitle}</span>
          <h2>
            قبل أن <em>تحجز</em>
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
            <h3>كم تكلفة التخزين؟</h3>
            <p>
              {PRICE_PER_SQFT_AED} {AR.perSqft} {AR.vatIncl}، محسوبة على المساحة التي تشغلها أغراضك. النقل من{" "}
              {area.name} يُسعَّر بشكل منفصل لأنه يعتمد على العنوان وحجم الحمولة، وتحصل على الرقمين قبل أي
              التزام.
            </p>
          </article>
        </div>
      </section>

      {/* روابط داخلية للمناطق المجاورة */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.nearbyAreas}</span>
          <h2>
            نستلم أيضاً من <em>هذه المناطق</em>
          </h2>
        </div>
        <div className={s.areaLinks}>
          {siblings.map((a) => (
            <Link key={a.slug} href={`/ar/locations/${e.slug}/${a.slug}`} className={s.areaLink}>
              {a.name}
              <span>↗</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href={`/ar/locations/${e.slug}`} className={s.parentLink}>
            ← {AR.allAreasIn} {e.name} ({e.areas.length})
          </Link>
        </div>
      </section>

      <section className={s.wrap} style={{ paddingBottom: 72 }}>
        <div className={s.finalCta}>
          <h2>
            لديك ما تريد تخزينه في {area.name}؟ <em>سنأتي ونأخذه.</em>
          </h2>
          <p>
            عرض سعر مجاني، بلا رسوم معاينة، ولا يُحجز شيء قبل موافقتك على الرقمين — التخزين والنقل.{" "}
            {HOURS_DISPLAY}.
          </p>
          <div className={s.finalCtaBtns}>
            <Link href="/get-quote" className={`${s.btn} ${s.btnAccent}`}>
              {AR.getQuote} ←
            </Link>
            <a href={`tel:${PHONE}`} className={`${s.btn} ${s.btnGhost}`}>
              {AR.call} {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
