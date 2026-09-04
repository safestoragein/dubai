import type { Metadata } from "next"
import Link from "next/link"
import SchemaScript from "@/components/schema-script"
import { AR_EMIRATES } from "@/lib/ar/registry"
import { AR } from "@/lib/ar/emirates"
import { emirateFontVars } from "@/components/locations/fonts"
import s from "@/components/locations/emirate-theme.module.css"
import { PRICE_PER_SQFT_AED, PHONE, PHONE_DISPLAY, RATING_VALUE, REVIEW_COUNT_DISPLAY } from "@/lib/company-facts"

const BASE = "https://safestorage.ae"
const URL = `${BASE}/ar/locations`

export const metadata: Metadata = {
  title: { absolute: "مواقع التخزين | دبي والشارقة وعجمان وأبوظبي | سيف ستوريج" },
  description: `خدمة تخزين باستلام من باب المنزل في دبي والشارقة وعجمان وأبوظبي من ${PRICE_PER_SQFT_AED} درهم للقدم المربع شهرياً. اختر إمارتك واطّلع على المناطق التي نستلم منها.`,
  keywords: "تخزين الامارات, تخزين اثاث دبي, تخزين اثاث الشارقة, تخزين عجمان, تخزين ابوظبي, اماكن تخزين الاثاث, مستودع تخزين",
  openGraph: {
    title: "مواقع التخزين | دبي والشارقة وعجمان وأبوظبي",
    description: "خدمة تخزين باستلام من باب المنزل في أربع إمارات.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "سيف ستوريج" }],
    url: URL,
    siteName: "SafeStorage",
    locale: "ar_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: { "ar-AE": URL, "en-AE": `${BASE}/locations`, "x-default": `${BASE}/locations` },
  },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL}#webpage`,
    name: "مواقع التخزين | سيف ستوريج",
    url: URL,
    inLanguage: "ar-AE",
    isPartOf: { "@id": `${BASE}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE}/ar` },
      { "@type": "ListItem", position: 2, name: "المواقع", item: URL },
    ],
  },
]

export default function ArLocationsHub() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className={`${s.page} ${emirateFontVars}`}>
        <nav className={`${s.wrap} ${s.crumbs}`} aria-label="مسار التنقل">
          <Link href="/ar">{AR.home}</Link> &nbsp;/&nbsp; <span>{AR.locations}</span>
        </nav>

        <section className={`${s.section} ${s.wrap}`} style={{ paddingBottom: 24 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>{AR.serviceAreas}</span>
            <h2>
              نخدم <em>أربع إمارات</em>
            </h2>
            <p>
              خدمة تخزين باستلام من باب المنزل من {PRICE_PER_SQFT_AED} درهم للقدم المربع شهرياً شامل الضريبة.
              اختر إمارتك للاطّلاع على المناطق والأسعار وطريقة العمل. تقييم {RATING_VALUE}/5 من{" "}
              {REVIEW_COUNT_DISPLAY} {AR.reviewsWorldwide}.
            </p>
          </div>

          <div className={s.introGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {AR_EMIRATES.map((e, i) => (
              <article key={e.slug} className={`${s.introCard} ${i % 2 === 0 ? s.introWhite : s.introNavy}`}>
                <div>
                  <span className={`${s.eyebrow} ${i % 2 === 0 ? "" : s.eyebrowOnNavy}`}>
                    {e.areas.length} منطقة
                  </span>
                  <h3>تخزين في {e.name}</h3>
                  <p>{e.description}</p>
                </div>
                <div className={s.introFoot}>
                  <Link href={`/ar/locations/${e.slug}`} style={{ fontWeight: 700, fontSize: 13.5 }}>
                    اطّلع على {e.name} ←
                  </Link>
                  <span className={s.circleBtn}>↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* كل المناطق — روابط داخلية مباشرة */}
        {AR_EMIRATES.map((e) => (
          <section key={e.slug} className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
            <div className={s.sectionHead} style={{ marginBottom: 26 }}>
              <h2 style={{ fontSize: 26 }}>
                مناطق <em>{e.name}</em>
              </h2>
            </div>
            <div className={s.areaLinks}>
              {e.areas.map((a) => (
                <Link key={a.slug} href={`/ar/locations/${e.slug}/${a.slug}`} className={s.areaLink}>
                  {a.name}
                  <span>↗</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className={s.wrap} style={{ paddingBottom: 72 }}>
          <div className={s.finalCta}>
            <h2>
              أخبرنا بما يشغل مساحتك. <em>سنأتي ونأخذه.</em>
            </h2>
            <p>عرض سعر مجاني، بلا رسوم معاينة، ولا يُحجز شيء قبل موافقتك على الرقمين.</p>
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
    </>
  )
}
