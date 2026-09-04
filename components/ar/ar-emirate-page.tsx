import Link from "next/link"
import type { ArEmirate } from "@/lib/ar/emirates"
import { AR, arStorageLocation } from "@/lib/ar/emirates"
import { emirateFontVars } from "@/components/locations/fonts"
import HeroPreload from "@/components/locations/hero-preload"
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
 * Arabic emirate page (دبي / الشارقة / عجمان / أبوظبي).
 *
 * Shares the English stylesheet; direction comes from app/ar/layout.tsx and the
 * [dir="rtl"] block at the bottom of emirate-theme.module.css. Prices, phone and
 * review counts come from company-facts so the Arabic and English sites can
 * never publish different numbers.
 */
export default function ArEmiratePage({ emirate: e }: { emirate: ArEmirate }) {
  const storage = arStorageLocation(e.facilityKey, e.name)

  return (
    <div className={`${s.page} ${emirateFontVars}`}>
      <HeroPreload />
      <nav className={`${s.wrap} ${s.crumbs}`} aria-label="مسار التنقل">
        <Link href="/ar">{AR.home}</Link> &nbsp;/&nbsp; <Link href="/ar/locations">{AR.locations}</Link>{" "}
        &nbsp;/&nbsp; <span>{e.name}</span>
      </nav>

      {/* هيرو */}
      <section className={`${s.hero} ${s.wrap}`}>
        <div className={s.heroInner}>
          <div className={s.heroRating}>
            <strong>{RATING_VALUE}/5</strong>
            <span>
              {REVIEW_COUNT_DISPLAY} {AR.reviewsWorldwide}
            </span>
          </div>
          <div className={s.heroContent}>
            <span className={s.heroTag}>{e.name}</span>
            <h1>
              تخزين الأثاث في <em>{e.name}</em> — من باب منزلك
            </h1>
            <p className={s.heroSlogan}>لا تحزم شيئاً. لا تحمل شيئاً. لا تقود إلى أي مكان.</p>
            <p>{e.heroBlurb}</p>
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

      {/* شريط الثقة */}
      <section className={s.wrap}>
        <div className={s.trust}>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tOrange}`}>💰</div>
            <strong className={s.vOrange}>{PRICE_PER_SQFT_AED}</strong>
            <b>{AR.perSqft}</b>
            <small>{AR.vatIncl}</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tGold}`}>★</div>
            <strong className={s.vGold}>{RATING_VALUE}/5</strong>
            <b>{REVIEW_COUNT_DISPLAY}</b>
            <small>{AR.reviewsWorldwide}</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tBlue}`}>🚚</div>
            <strong className={s.vBlue}>من الباب</strong>
            <b>استلام في {e.name}</b>
            <small>نغلّف ونحمّل</small>
          </div>
          <div className={s.trustItem}>
            <div className={`${s.trustIcon} ${s.tPurple}`}>🗓️</div>
            <strong className={s.vPurple}>بلا حد أدنى</strong>
            <b>أسبوعان أو سنوات</b>
            <small>تنهيها متى شئت</small>
          </div>
        </div>
        <hr className={s.rule} />
      </section>

      {/* لماذا نحن */}
      <section className={s.wrap}>
        <div className={s.darkBand} style={{ marginTop: 34 }}>
          <span className={s.eyebrow}>ما يشمله السعر</span>
          <h2>
            كل شيء عدا <em>الجزء الذي كنت تخشاه</em>
          </h2>
          <div className={s.featGrid}>
            {AR.included.map((f, i) => (
              <article key={f.t} className={s.feat}>
                <div className={s.featIcon}>{["🚚", "📐", "🔒", "↩️"][i]}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* المقدمة */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.prose}>
          <h2>التخزين في {e.name}</h2>
          <p>{e.intro[0]}</p>
          <p>{e.intro[1]}</p>
          <div className={s.disclosure}>
            <strong>أين تُحفظ أغراضك.</strong> {storage} النقل يُسعَّر بشكل منفصل ويُؤكَّد قبل أي حجز.
          </div>
        </div>
      </section>

      {/* الخطوات */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.howItWorks}</span>
          <h2>أربع خطوات، ولا تحمل شيئاً</h2>
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

      {/* الأسعار */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.priceBand}>
          <div>
            <span className={s.eyebrow}>{AR.pricing}</span>
            <h2>
              سعر واحد، <em>شامل الضريبة</em>
            </h2>
            <p>
              يُحتسب على المساحة التي تشغلها أغراضك فعلاً. النقل من {e.name} يُسعَّر بشكل منفصل ويُعلَن لك
              مقدماً لا بعد التنفيذ.
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

      {/* الأسئلة */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.faqTitle}</span>
          <h2>
            قبل أن <em>تحجز</em>
          </h2>
        </div>
        <div className={s.faqList}>
          {e.faqs.map((f) => (
            <article key={f.q} className={s.faqItem}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* المناطق — روابط داخلية */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>{AR.serviceAreas}</span>
          <h2>
            كل منطقة في {e.name} <em>نستلم منها</em>
          </h2>
          <p>لكل منطقة صفحتها التي تشرح كيف يجري الاستلام في شوارعها وما يخزّنه أهلها عادة.</p>
        </div>
        <div className={s.areaLinks}>
          {e.areas.map((a) => (
            <Link key={a.slug} href={`/ar/locations/${e.slug}/${a.slug}`} className={s.areaLink}>
              {a.name}
              <span>↗</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/ar/locations" className={s.parentLink}>
            ← جميع الإمارات التي نخدمها
          </Link>
        </div>
      </section>

      {/* دعوة أخيرة */}
      <section className={s.wrap} style={{ paddingBottom: 72 }}>
        <div className={s.finalCta}>
          <h2>
            أخبرنا بما يشغل مساحتك. <em>سنأتي ونأخذه.</em>
          </h2>
          <p>
            عرض سعر مجاني، بلا رسوم معاينة، ولا يُحجز شيء قبل موافقتك على الرقمين — التخزين والنقل. الاسترجاع
            عادة خلال {RETRIEVAL_WINDOW}. {HOURS_DISPLAY}.
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
