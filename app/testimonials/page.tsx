import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, Truck, Wallet, CalendarClock } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { CUSTOMERS_GLOBAL } from "@/lib/company-facts"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import rv from "@/components/testimonials/reviews.module.css"
import z from "@/components/silo/size-cards.module.css"
import fx from "@/components/landing/home-fx.module.css"

/**
 * /testimonials — redesigned on the shared landing system (owner, 2026-09-23)
 * with their own photo, the real SafeStorage logo in place of the two drawn
 * ones, and the "Reilable" typo on the review card corrected.
 *
 * Every review, story block and answer is the copy that was already here; only
 * the layout changed, and the FAQ is cut to the owner's five.
 */

export const metadata: Metadata = {
  title: { absolute: "Customer Reviews & Testimonials | SafeStorage Dubai" },
  description:
    "See why 100,000+ customers trust SafeStorage Dubai. Read real reviews about our secure safe storage.",
  keywords:
    "SafeStorage Dubai reviews, Storage testimonials UAE, Customer stories Dubai, Trusted storage Dubai, Storage company reviews, SafeStorage feedback, Best storage Dubai reviews, Reliable storage UAE, Business storage testimonials, Household storage reviews, Secure storage ratings, Storage service feedback, Dubai storage experiences, SafeStorage customer success",
  alternates: {
    canonical: "https://safestorage.ae/testimonials",
  },
  // og:url must be set per page — the root layout deliberately omits it, so a
  // page without its own openGraph block emits no og:url at all. Images must be
  // repeated here too: Next replaces the parent openGraph object rather than
  // merging into it, so declaring one drops the root's images.
  openGraph: {
    url: "https://safestorage.ae/testimonials",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
  },
}

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai Marina",
    initials: "AM",
    rating: 5,
    text: "SafeStorage made my apartment renovation completely stress-free. They picked up all my furniture within 24 hours, kept everything in perfect condition for 6 weeks, and delivered it all back when I called. Everything came back exactly as it went in. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    location: "Business Bay",
    initials: "SJ",
    rating: 5,
    text: "As an expat relocating back to the UK temporarily, I needed somewhere safe to keep my belongings for 8 months. SafeStorage was the perfect solution — professional pickup, secure facility, and easy retrieval when I returned. The customer service was excellent throughout.",
  },
  {
    name: "Priya Sharma",
    location: "Jumeirah",
    initials: "PS",
    rating: 5,
    text: "I used SafeStorage to store my office furniture when we downsized our team. The process was simple — they sent a consultant to assess the volume, gave me a transparent quote, and handled everything from packing to storage. Great value for money.",
  },
  {
    name: "Mohammed Al Hassan",
    location: "Downtown Dubai",
    initials: "MH",
    rating: 5,
    text: "Excellent service from start to finish. The team arrived on time, handled my furniture with great care, and the storage space was exactly as described — clean, secure, and well-kept. I'll definitely use SafeStorage again for my next move.",
  },
  {
    name: "Emily Chen",
    location: "JLT",
    initials: "EC",
    rating: 5,
    text: "I was nervous about storing my grandmother's antique furniture, but SafeStorage put my mind at ease. Every piece was carefully wrapped and protected, keeping the wood and upholstery in great shape. Everything was returned in the same condition it was collected. Outstanding!",
  },
  {
    name: "Faisal Al Rashid",
    location: "Palm Jumeirah",
    initials: "FR",
    rating: 5,
    text: "SafeStorage handled our company's warehouse clearance efficiently. We stored over 200 boxes of stock and office equipment, and the team was professional and fast. The indexing system made it easy to retrieve specific items. Great for businesses.",
  },
]

const whyChoose = [
  { Icon: Truck, title: "Door-to-door service", text: "We handle all the heavy lifting — pickup, storage, and delivery at your convenience" },
  { Icon: ShieldCheck, title: "Clean, secure storage", text: "Indoor space keeps furniture, electronics, and sensitive items dust-protected and safe" },
  { Icon: Wallet, title: "Transparent pricing", text: "No hidden fees, no surprises — the price you see is the price you pay" },
  { Icon: CalendarClock, title: "Flexible terms", text: "Monthly contracts, no long-term commitments — store for a week or a year" },
]

const story = [
  {
    e: "📖",
    title: "A decade of serving Dubai",
    text: "Founded over a decade ago to make storage in the UAE convenient, affordable and trustworthy.",
  },
  {
    e: "🤝",
    title: "Service quality Dubai trusts",
    text: "You are assigned a dedicated storage consultant who manages your account personally.",
  },
  {
    e: "🧼",
    title: "Clean storage built for Dubai",
    text: "Every item is kept in clean, indoor space, off the floor on pallets or shelving, and handled with real care.",
  },
  {
    e: "🛡️",
    title: "Security that never sleeps",
    text: "24/7 HD CCTV covers every corridor, loading bay, entrance and exit, reviewed by our security team.",
  },
  {
    e: "💬",
    title: "Transparent pricing",
    text: "The price quoted is the price charged, every time. Flexible monthly contracts, no long-term commitments.",
  },
]

const faqs = [
  {
    q: "Why do so many Dubai residents recommend SafeStorage to friends?",
    a: "The most common reason customers recommend SafeStorage is the ease of the entire experience. Unlike traditional self-storage where you do all the work yourself, SafeStorage handles everything — pickup, packing, transport, storage, and delivery. Customers are consistently surprised by how smooth and stress-free the process is.",
  },
  {
    q: "How do customers rate SafeStorage Dubai?",
    a: "SafeStorage Dubai maintains a consistently high customer satisfaction rating across all review platforms. Our customers regularly highlight the professionalism of our pickup team, the reliability of our service, the quality of our clean and secure facilities, and the helpfulness of our customer support team.",
  },
  {
    q: "Do expats living in Dubai find SafeStorage particularly useful?",
    a: "Yes. Expats are one of our largest customer groups. SafeStorage allows customers to manage their storage accounts entirely by phone or email, and we can coordinate pickup and delivery even when the customer is not physically in Dubai. Many expats leave their belongings with us between assignments and simply notify us when they need delivery to their new address.",
  },
  {
    q: "What do customers say about the condition of their items when returned?",
    a: "Overwhelmingly positive. The most frequent comment in customer reviews is that items are returned in exactly the same condition as when they were collected — sometimes in better condition because our team wraps furniture properly before storage. Careful wrapping and clean, secure storage mean no dust damage, no scuffs, and no pest issues.",
  },
  {
    q: "What languages does the SafeStorage customer support team speak?",
    a: "Our customer support team provides assistance in both English and Arabic, reflecting the diverse nature of Dubai's population. All contracts, invoices, and correspondence are available in both languages. We also have team members who can communicate in Hindi, Urdu, and Tagalog to serve our South Asian and Filipino customer base.",
  },
]

const testimonialsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/testimonials#webpage",
    name: "Customer Testimonials | SafeStorage Dubai Reviews",
    description:
      "Real reviews and testimonials from satisfied SafeStorage Dubai customers. See why we're trusted by 100,000+ customers.",
    url: "https://safestorage.ae/testimonials",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Testimonials", item: "https://safestorage.ae/testimonials" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function TestimonialsPage() {
  return (
    <>
      <SchemaScript schema={testimonialsSchemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Testimonials" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Testimonials</span>
              <h1>
                What Our <br className={s.mBreakDesk} />
                <em>Customers Say</em>
              </h1>
              <p>
                over 100,000 satisfied customers globally trust SafeStorage with their most valuable
                belongings. Read their stories below.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            {/* owner, 2026-09-23: the 4.9 card goes top-right, over the
                "More Space Happier Lives" banner, not over the review cards */}
            <div className={p.split2Photo} style={{ aspectRatio: "1670 / 942" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/testimonials-photo.webp"
                alt="SafeStorage Dubai customers holding five-star review cards in the reception"
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* the written reviews */}
        <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingTop: 8 }}>
          <HomeReveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Customer reviews</span>
                  <h2 className={p.longH2}>
                    Real stories from <em>SafeStorage Dubai.</em>
                  </h2>
                </div>
              }
            >
            {reviews.map((r, i) => (
              <article className={`${rv.card} ${rv.railCard}`} style={idx(i)} key={r.name}>
                <span className={rv.mark} aria-hidden="true">
                  &ldquo;
                </span>
                <div className={rv.stars} aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(r.rating)}
                </div>
                <p className={rv.text}>{r.text}</p>
                <div className={rv.who}>
                  <span className={rv.avatar} aria-hidden="true">
                    {r.initials}
                  </span>
                  <div>
                    <b className={rv.name}>{r.name}</b>
                    <span className={rv.place}>{r.location}, Dubai</span>
                  </div>
                </div>
              </article>
            ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </HomeReveal>
        </section>

        {/* why Dubai residents choose us */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Why they choose us</span>
              <h2>
                What sets <em>SafeStorage apart.</em>
              </h2>
              <p>
                With over 10 years of experience serving Dubai, SafeStorage has built a reputation for
                reliability, security, and outstanding customer service.
              </p>
            </div>
            <FeatScroller>
              {whyChoose.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
          </div>
        </section>

        {/* the longer story */}
        <section className={`${s.section} ${s.wrap}`}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Behind the reviews</span>
              <h2 className={p.longH2}>
                Why {CUSTOMERS_GLOBAL} customers <em>trust SafeStorage Dubai.</em>
              </h2>
            </div>
            <p>
              Our history, service philosophy, and the standards that have earned us thousands of five-star
              reviews.
            </p>
          </div>
          <HomeReveal className={`${z.steps} ${z.steps5} ${z.moves}`}>
            {story.map((b, i) => (
              <div className={`${z.step} ${fx.floatBox}`} style={idx(i)} key={b.title}>
                <span className={z.stepEmoji} aria-hidden="true">
                  {b.e}
                </span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                What our <em>customers ask.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Join thousands of happy customers"
          blurb="Experience Dubai's most trusted storage service. Door-to-Door pickup, clean and secure storage, 24/7 security — transparent pricing with no hidden fees."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
