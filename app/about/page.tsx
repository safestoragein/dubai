import type { Metadata } from "next"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import WhyToggle from "@/components/about/why-toggle"
import s from "@/components/about/about.module.css"

export const metadata: Metadata = {
  title: { absolute: "Dubai's Most Trusted Storage Partner | SafeStorage About Us" },
  description:
    "Trusted storage in Dubai since 2015. 100% secure storage units with hassle-free pickup and 24/7 support.",
  keywords:
    "Storage Dubai, Self storage UAE, Business storage, Personal storage, Secure storage units, Furniture storage, Document storage, Household storage, Luggage storage, SafeStorage UAE, Storage pickup delivery, Inventory storage, Short term storage, Long term storage",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/about",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/about",
  },
}

// BreadcrumbList is emitted by SiloBreadcrumb from the trail it renders.
const aboutSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://safestorage.ae/about#webpage',
    name: 'About SafeStorage Dubai — Dubai\'s Most Trusted Storage Partner',
    description: 'Learn about SafeStorage Dubai — serving Dubai since 2015 with secure storage, 24/7 security, and door-to-door service. 100,000+ customers trust us worldwide.',
    url: 'https://safestorage.ae/about',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    mainEntity: { '@id': 'https://safestorage.ae/#organization' },
    inLanguage: 'en-AE',
  },
]

/**
 * About us — the approved about-us comp, ported as-is.
 *
 * Markup is the comp's own, converted to JSX; styling is its stylesheet in
 * components/about/about.module.css with the header/footer rules removed.
 * Only the trust figures were touched, to match the rest of the site after the
 * repricing: 12 AED ex-VAT rather than 12.65 inclusive, and 10+ years.
 */
export default function AboutPage() {
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <SchemaScript schema={aboutSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* ===================== HERO ===================== */}
        <section className={s.hero}>
          {/* Hero photo. In production swap the data URI for src="/hero-warehouse.jpg" */}
          <img className={s.scene} src="/about/hero-warehouse.jpg" alt="" width="1500" height="695" fetchPriority="high" />

          <div className={s.wrap}>
            <h1>Dubai's Most Trusted <span className={s.accent}>Storage Partner</span> Since 2015</h1>
            <p className={s["hero-sub"]}>We're not just a storage facility — we're your trusted partner in keeping your belongings safe, secure, and accessible whenever you need them.</p>
            <ul className={s.trust}>
              <li>
                <svg className={s.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>
                4.9/5 Rating
              </li>
              <li>
                <svg className={s.mark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3.4"/><path d="M2.6 20c0-3.5 2.9-6 6.4-6s6.4 2.5 6.4 6"/><path d="M16.2 5.2a3.2 3.2 0 0 1 0 6M17.8 14.4c2.2.7 3.6 2.6 3.6 5.6"/></svg>
                100,000+ Happy Customers
              </li>
              <li>
                <svg className={s.mark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="8.2" r="5.2"/><path d="m8.6 13.4-1.4 7.4 4.8-2.6 4.8 2.6-1.4-7.4"/></svg>
                10+ Years Global Experience
              </li>
            </ul>
          </div>
        </section>

        {/* ===================== INTRO / JOURNEY ===================== */}
        <section className={`${s.section} ${s["section--lean"]}`}>
          <div className={s.wrap}>
            <span className={s.eyebrow}>Our Story</span>
            <h2 className={s["section-title"]}>Redefining Storage,<br />One Customer at a Time</h2>
            <p className={s["intro-sub"]}>A story built on trust, flexibility, and uncompromising security.</p>

            <div className={s.journey}>
              <div className={s.jSteps}>
                <div className={s.jStep}>
                  <span className={s.jDot} aria-hidden="true">01</span>
                  <div className={s.jCard}>
                    <span className={s.jKicker}>The beginning</span>
                    <h3>Why We Started</h3>
                    <p>SafeStorage was founded on a simple belief — storage should be effortless, secure and built around real customer needs. Traditional options were rigid and unreliable. We knew there had to be a better way.</p>
                  </div>
                </div>

                <div className={s.jStep}>
                  <span className={s.jDot} aria-hidden="true">02</span>
                  <div className={s.jCard}>
                    <span className={s.jKicker}>The gap</span>
                    <h3>The Problem We Solved</h3>
                    <p>Customers faced long lock-ins, poor handling, limited support and unsafe units. Flexibility and peace of mind were missing — exactly where SafeStorage stepped in.</p>
                  </div>
                </div>

                <div className={s.jStep}>
                  <span className={s.jDot} aria-hidden="true">03</span>
                  <div className={s.jCard}>
                    <span className={s.jKicker}>Today</span>
                    <h3>What Makes Us Different Today</h3>
                    <ul className={s["diff-list"]}>
                      <li><span className={s.tick} aria-hidden="true"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M8 14.5 3.5 10l1.6-1.6L8 11.3l6.9-6.9L16.5 6z"/></svg></span>ISO 9001:2015 certified, professionally managed facilities</li>
                      <li><span className={s.tick} aria-hidden="true"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M8 14.5 3.5 10l1.6-1.6L8 11.3l6.9-6.9L16.5 6z"/></svg></span>Secure, clean, dust-protected storage units</li>
                      <li><span className={s.tick} aria-hidden="true"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M8 14.5 3.5 10l1.6-1.6L8 11.3l6.9-6.9L16.5 6z"/></svg></span>Doorstep pickup &amp; delivery with careful handling</li>
                      <li><span className={s.tick} aria-hidden="true"><svg viewBox="0 0 20 20" fill="currentColor"><path d="M8 14.5 3.5 10l1.6-1.6L8 11.3l6.9-6.9L16.5 6z"/></svg></span>Flexible plans with dedicated customer support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <figure className={s.jMedia}>
                <img src="/about/reviews-customer.jpg" alt="Customer leaving a five-star review on a phone" width="880" height="660" loading="lazy" />
                <figcaption className={s.jMediaCap}>
                  <b>4.9/5</b> from 6,700+ reviews worldwide
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ===================== TIMELINE ===================== */}
        <section className={`${s.section} ${s["section--alt"]} ${s["section--flat"]}`}>
          <div className={s.wrap}>
            <div className={s["sec-head"]}>
              <h2 className={s["section-title"]}>Our Journey</h2>
              <p>Key milestones in our growth.</p>
            </div>
            <div className={s.canvas}>
              <svg className={s.wires} viewBox="0 0 1100 410" aria-hidden="true">
                <path className={s.solid} d="M270 196 H 290 Q 300 196 300 186 V 95 Q 300 85 310 85"/>
                <path className={s.solid} d="M270 196 H 290 Q 300 196 300 206 V 316 Q 300 326 310 326"/>
                <path className={s.solid} d="M610 85 H 640 Q 650 85 650 75 V 74 Q 650 64 660 64"/>
                <path className={s.solid} d="M580 326 H 610 Q 620 326 620 316 V 275 Q 620 265 630 265 H 660"/>
                <path className={s.dash} d="M460 141 C 505 180, 575 185, 650 232" markerEnd="url(#tip)"/>
                <path className={s.solid} d="M810 321 V 340"/>
                <defs>
                  <marker id="tip" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0 1 L9 5 L0 9 z" fill="#f3bd9c"/>
                  </marker>
                </defs>
                <circle className={s.port} cx="270" cy="196" r="4"/>
                <circle className={s.port} cx="310" cy="85" r="4"/>
                <circle className={s.port} cx="310" cy="326" r="4"/>
                <circle className={s.port} cx="610" cy="85" r="4"/>
                <circle className={s.port} cx="660" cy="64" r="4"/>
                <circle className={s.port} cx="580" cy="326" r="4"/>
                <circle className={s.port} cx="660" cy="265" r="4"/>
                <circle className={s.port} cx="460" cy="141" r="4"/>
                <circle className={s.port} cx="810" cy="340" r="4"/>
              </svg>

              <div className={s.node} style={{ left: '1.818%', top: '41.463%', width: '22.727%' }}>
                <div className={s.kicker}><span className={s.stamp}>S</span><b>SafeStorage</b><span className={s.muted}>2015</span></div>
              </div>

              <div className={s.node} style={{ left: '28.182%', top: '7.317%', width: '27.273%' }}>
                <h3>10,000+ Customers</h3>
                <p className={s.meta}>First major milestone <span className={s.muted}>· 2019</span></p>
                <div className={s.chips}>
                  <span className={s.sq} style={{ background: '#e8541c' }}>BLR</span>
                  <span className={s.sq} style={{ background: '#17275c' }}>CHN</span>
                  <span className={s.sq} style={{ background: '#3d8fa3' }}>HYD</span>
                  <span className={s.sq} style={{ background: '#c9543a' }}>MUM</span>
                </div>
              </div>

              <div className={s.node} style={{ left: '28.182%', top: '73.171%', width: '24.545%' }}>
                <div className={s.kicker}><span className={s.stamp}>✓</span><b>ISO 9001:2015</b><span className={s.muted}>Certified</span></div>
              </div>

              <div className={s["flow-pill"]} style={{ left: '45.909%', top: '45.122%', width: '10.909%' }}>Growth</div>

              <div className={`${s.node} ${s["node--stack"]}`} style={{ left: '60.0%', top: '6.098%', width: '26.364%' }}>
                <h3>50,000+ Customers</h3>
                <p className={s.meta}>Network expanded <span className={s.muted}>· 2023</span></p>
              </div>

              <div className={`${s.node} ${s["node--stack2"]}`} style={{ left: '62.727%', top: '28.049%', width: '26.364%' }}>
                <div className={s.kicker}><span className={s.stamp}>16</span><b>Cities covered</b><span className={s.muted}>India &amp; UAE</span></div>
              </div>

              <div className={s.node} style={{ left: '60.0%', top: '51.22%', width: '27.273%' }}>
                <h3>100,000+ Customers</h3>
                <p className={s.meta}>Trusted globally <span className={s.muted}>· 2026</span></p>
                <div className={s.chips}>
                  <span className={s.tag}>4.9 ★ Rated</span>
                  <span className={s.tag}>10+ Years</span>
                </div>
              </div>

              <div className={s.node} style={{ left: '62.727%', top: '82.927%', width: '26.364%' }}>
                <div className={s.kicker}><span className={s.stamp}>▦</span><b>3M+ sq ft</b><span className={s.muted}>Managed space</span></div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== STORY & MISSION ===================== */}
        <section className={`${s.section} ${s["section--story"]}`}>
          <div className={s.wrap}>
            <h2 className={s["story-h"]}>About SafeStorage Dubai — Our Story &amp; Mission</h2>
            <p className={s["about-lede"]}>SafeStorage was founded with one mission: to make storage in Dubai completely hassle-free. We looked at the traditional storage industry — where customers had to rent lorries, load heavy furniture themselves, and visit a facility to access their items — and decided there had to be a better way. The result is SafeStorage: a full-service, secure storage solution where our team does everything from collection to delivery.</p>

            <div className={s["about-cols"]}>
              <div>
                <h3>Our Commitment to Dubai Customers</h3>
                <p>Dubai is a unique city — fast-paced, diverse, and filled with residents from over 200 nationalities who have very different storage needs. Expats need flexible storage without long-term commitments. Families need space during home renovations. Businesses need scalable commercial storage without warehouse overhead. Students need affordable semester-break storage.</p>
                <p>SafeStorage serves all of these customers with the same commitment to quality, transparency and convenience. Every customer — whether storing a few boxes for three weeks or a full villa for three years — receives the same secure storage, door-to-door pickup and dedicated customer service.</p>
              </div>
              <div>
                <h3>What Sets SafeStorage Apart</h3>
                <p>Most Dubai storage providers operate traditional self-service facilities where you do all the work. SafeStorage is different. Our full-service model means customers never lift a heavy box, never rent a van, and never need to visit the facility if they prefer not to. We come to you, collect your items with care, and return them on demand.</p>
                <p>Every item is wrapped and handled with care, then kept in a secure, clean, dust-protected facility. We believe every stored item deserves proper protection, so careful handling and secure storage come as standard.</p>
              </div>
            </div>

            <div className={s["stats-card"]}>
              <h3>SafeStorage by the Numbers</h3>
              <div className={s["stats-grid"]}>
                <div className={s.stat}><b>100,000+</b><span>Happy Customers Worldwide</span></div>
                <div className={s.stat}><b>10+</b><span>Years of Experience</span></div>
                <div className={s.stat}><b>4.9<span className={s.st}>&#9733;</span></b><span>Average Customer Rating</span></div>
                <div className={s.stat}><b>24/7</b><span>Security Monitoring</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHY CHOOSE US ===================== */}
        <section className={`${s.section} ${s["section--compact"]}`}>
          <div className={s.wrap}>
            <div className={s["sec-head"]}>
              <span className={s.eyebrow}>Why Choose Us</span>
              <h2 className={s["section-title"]}>Why 100,000+ Customers Trust <span className={s.accent}>SafeStorage Worldwide</span></h2>
              <p>We're not just a storage facility — we're your trusted partner in keeping your belongings safe.</p>
            </div>

            <div className={`${s["why-grid"]} ${s["is-collapsed"]}`} id="whyGrid">
              <article className={s.why}>
                <span className={s.ribbon}>Anywhere Dubai</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h11v9H3zM14 10h3.6l2.4 3.4V16h-6z"/><circle cx="7" cy="18.5" r="1.7"/><circle cx="17.5" cy="18.5" r="1.7"/></svg></span>
                <h3>Door-to-door Service</h3>
                <p>We bring packing materials, load your items and transport them safely. No van rental, no lifting.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>Personal Expert</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2"/></svg></span>
                <h3>Dedicated Storage Consultant</h3>
                <p>One direct point of contact from booking to retrieval. No call centres, no ticket systems.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>No Hidden Fees</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.6"/><path d="M12 7v10M14.6 9.4c-.6-.8-1.6-1.2-2.6-1.2-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2.1 2.7.9 2.7 2.1-1.2 2-2.7 2c-1.1 0-2.1-.4-2.7-1.3"/></svg></span>
                <h3>Transparent Pricing</h3>
                <p>What we quote is what you pay. From 12 AED / sq ft, price-match guaranteed.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>Book by 12 PM</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.6"/><path d="M12 6.8v5.5l3.6 2.1"/></svg></span>
                <h3>Same-Day Pickup Available</h3>
                <p>Book before 12 PM anywhere in Dubai and we collect the same day. Emergency storage available.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>No Lock-In</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h11M4 16h11"/><path d="m16.5 5 3.5 3-3.5 3M16.5 13l3.5 3-3.5 3"/></svg></span>
                <h3>Flexible Monthly Plans</h3>
                <p>Store for one month or two years. Upgrade, downsize or pause anytime with 48 hours' notice.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>Round the Clock</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.7 4.4 5.9v5.6c0 4.6 3.2 8.6 7.6 9.8 4.4-1.2 7.6-5.2 7.6-9.8V5.9z"/><circle cx="12" cy="11" r="2.6"/></svg></span>
                <h3>24/7 CCTV Monitoring</h3>
                <p>Multi-angle cameras cover every corridor, entry point and storage zone, with motion alerts after hours.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>All Areas</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.8a6.6 6.6 0 0 0-6.6 6.6c0 4.9 6.6 11.8 6.6 11.8s6.6-6.9 6.6-11.8A6.6 6.6 0 0 0 12 2.8z"/><circle cx="12" cy="9.4" r="2.4"/></svg></span>
                <h3>Multiple Dubai Locations</h3>
                <p>Facilities near Dubai Marina, Business Bay, Jumeirah and Dubai Investment Park. Pick the closest to you.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>Certified Clean</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h3v4H9zM7.5 7h6l1.2 5H6.3z"/><path d="M6.3 12h8.4v8.5H6.3z"/><path d="M17.5 5.5h2.6M17.5 9h2.6M17.5 12.5h2.6"/></svg></span>
                <h3>Pest-Free, Clean Environment</h3>
                <p>Professional pest control and regular cleaning. Every unit sealed against dust, moisture and insects.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
              <article className={s.why}>
                <span className={s.ribbon}>Full Visibility</span>
                <span className={s.ico} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3.6 7.4 12 3.5l8.4 3.9v9.2L12 20.5l-8.4-3.9z"/><path d="M3.6 7.4 12 11.3l8.4-3.9M12 11.3v9.2"/></svg></span>
                <h3>Inventory Management</h3>
                <p>We photograph and catalogue everything at pickup. Check your inventory anytime and retrieve single items.</p>
                <span className={s.avail}><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Available with SafeStorage</span>
              </article>
            </div>

            <div className={s["why-cta"]}>
              <button className={`${s.btn} ${s["btn--pill"]} ${s["btn--ghost"]}`} id="whyToggle" type="button" aria-expanded="false" aria-controls="whyGrid">
                <span className={s.label}>View all 9 reasons</span>
                <svg className={s.arrow} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className={`${s.section} ${s["section--alt"]} ${s["section--tight"]}`}>
          <div className={s.wrap}>
            <div className={s["sec-head"]}>
              <span className={s["rating-pill"]}>
                <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
                <b>4.9</b>
                <span>6,700+ Google reviews worldwide</span>
              </span>
              <h2 className={s["section-title"]}>What Our Customers Say</h2>
              <p>Real experiences from the 100,000+ customers SafeStorage serves worldwide.</p>
            </div>

          </div>

          <div className={s["ts-wrap"]}>
              <button className={s["ts-nav"]} type="button" data-dir="-1" aria-label="Previous reviews">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 10l7 7"/></svg>
              </button>
              <button className={s["ts-nav"]} type="button" data-dir="1" aria-label="Next reviews">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 7 7-7 7"/></svg>
              </button>
          <div className={s["ts-track"]} id="tsTrack" tabIndex="0" role="region" aria-label="Customer reviews, scrollable">
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>Villa Renovation</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>Stored my villa furniture for 6 months during renovation. Everything came back in perfect condition. The pickup and delivery service was a lifesaver.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Ahmed Hassan</span><br />
                <span className={s.rl}>Villa Owner, Dubai Marina</span>
              </figcaption>
            </figure>
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>Business Documents</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>I needed reliable document storage. Secure, clean units with 24/7 access, and a consultant who understood our compliance needs perfectly.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Sarah Mitchell</span><br />
                <span className={s.rl}>Managing Director, Consulting Firm</span>
              </figcaption>
            </figure>
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>Relocation Storage</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>Moving from JLT to Business Bay, I needed short-term storage. Incredibly professional, handled with care, and priced with no hidden fees.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Fatima Al-Rashid</span><br />
                <span className={s.rl}>Apartment Resident, JLT</span>
              </figcaption>
            </figure>
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>E-commerce Inventory</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>We store our e-commerce inventory here. Flexible terms and easy access make managing stock far simpler. Highly recommend for small businesses.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Mark Thompson</span><br />
                <span className={s.rl}>E-commerce Business Owner</span>
              </figcaption>
            </figure>
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>Vehicle Storage</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>I was worried about storing my classic car over summer. Secure indoor storage kept it safe from Dubai's dust. Staff are knowledgeable and trustworthy.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Khalid Rahman</span><br />
                <span className={s.rl}>Car Enthusiast</span>
              </figcaption>
            </figure>
            <figure className={s.tcard}>
              <div className={s.top}><span className={s.ttag}>Personal Storage</span><span className={s.verified}><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.7a8.3 8.3 0 1 0 0 16.6 8.3 8.3 0 0 0 0-16.6zm-1.2 12L5 9.9l1.5-1.5 2.3 2.3 5-5L15.3 7z"/></svg>Verified</span></div>
              <span className={s.stars} aria-label="5 out of 5"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg></span>
              <blockquote>I left Dubai for eight months. They packed my whole apartment, sent me the inventory, and returned everything — not a single item missing.</blockquote>
              <figcaption className={s.who}>
                <span className={s.nm}>Jennifer Lee</span><br />
                <span className={s.rl}>Expat, Downtown Dubai</span>
              </figcaption>
            </figure>
          </div>

          <div className={s.wrap}>
            <div className={s["why-cta"]}>
              <a className={`${s.btn} ${s["btn--pill"]}`} href="#">Join 100,000+ Happy Customers
                <svg className={s.arrow} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M1 6h17M13 1l5 5-5 5"/></svg>
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className={`${s.section} ${s["section--faq"]}`}>
          <div className={s.wrap}>
            <div className={s["faq-head"]}>
              <h2>Frequently Asked Questions — About SafeStorage Dubai</h2>
              <p>Common questions about SafeStorage Dubai, our company, history, standards, and what makes us different from other Dubai storage companies.</p>
            </div>

            <div className={s.faq}>
              <details className={s["faq-item"]} name="faq" open>
                <summary>When was SafeStorage founded and who founded it?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>SafeStorage was founded in 2015 by Ramesh Madisetty. The company was established with the mission of making storage completely effortless through a full-service, door-to-door model that handles every aspect of the storage experience on behalf of the customer. Starting in India, SafeStorage expanded its operations and subsequently launched in the UAE, including Dubai, to serve the large expatriate and business communities with the same premium, convenient storage service. The vision was to build a storage company that people actually enjoyed using — where the service genuinely reduced stress rather than adding to it.</p>
              </details>
              <details className={s["faq-item"]} name="faq">
                <summary>How many customers has SafeStorage served globally?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>SafeStorage has served 100,000+ customers worldwide. Key milestones include reaching 10,000 customers in 2019, growing to 50,000 by 2023, and passing 100,000+ as the company's scale and reputation continued to grow. SafeStorage holds a 4.9/5 average rating, reflecting the company's commitment to service quality and customer satisfaction. These reviews are available on Google and on the SafeStorage website for prospective customers to read before booking.</p>
              </details>
              <details className={s["faq-item"]} name="faq">
                <summary>Is SafeStorage ISO certified?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>Yes, SafeStorage operates an ISO 9001:2015 certified quality management system. ISO 9001:2015 is the internationally recognised standard for quality management, covering operational processes, service delivery standards, customer satisfaction measurement and continuous improvement practices. Certification requires regular independent audits by accredited certification bodies to verify ongoing compliance. For customers, this means the quality of service they experience is systematically managed and documented — not dependent on individual staff effort alone — and is subject to ongoing review and improvement.</p>
              </details>
              <details className={s["faq-item"]} name="faq">
                <summary>What makes SafeStorage different from other Dubai storage companies?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>SafeStorage differs from traditional Dubai storage providers in several fundamental ways. First, we are a full-service provider: our team handles collection, packing, transport, storage and delivery, so customers never need to do any physical work or visit our facility. Second, every SafeStorage unit is secure, clean and dust-protected as standard. Third, we use a volume-based pricing model, so customers pay only for the space their items actually occupy rather than for a fixed unit size. Fourth, door-to-door pickup and delivery is available across Dubai. Fifth, our ISO 9001:2015 certification and global scale provide a service quality standard that most local providers cannot match.</p>
              </details>
              <details className={s["faq-item"]} name="faq">
                <summary>How much total storage space does SafeStorage manage globally?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>SafeStorage manages over 3 million square feet of storage space across its operations in India and the UAE, making it one of the larger organised storage providers in the region. That scale enables significant operational advantages: purpose-built secure facilities, investment in technology and digital inventory management systems, staff training infrastructure, packing materials purchased in bulk, and the ability to handle both individual customer needs (a few boxes) and large commercial requirements such as entire office or factory clearances, all to the same professional standard.</p>
              </details>
              <details className={s["faq-item"]} name="faq">
                <summary>Does SafeStorage operate only in Dubai within the UAE?<svg className={s.chev} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3l8 7 8-7"/></svg></summary>
                <p className={s["faq-body"]}>SafeStorage's UAE operations at safestorage.ae primarily serve the Dubai emirate with the full door-to-door service, and within Dubai we cover every community and area. For customers in Sharjah, Ajman and the Northern Emirates, pickup may be available with a small additional transport fee — contact us to confirm for your specific location. SafeStorage also operates in India across multiple cities under safestorage.in. The UAE and India operations share the same quality standards, technology platform and service philosophy, but run independently with local teams and facilities.</p>
              </details>
            </div>
          </div>
        </section>


      </div>

      <WhyToggle />
    </>
  )
}
