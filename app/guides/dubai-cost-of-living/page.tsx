import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Home, Package, TrendingDown } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import c from "@/components/guides/cost.module.css"

/**
 * /guides/dubai-cost-of-living — redesigned on the shared landing system
 * (owner, 2026-10-17) with their own banner.
 *
 * Every figure is the page's own: the budget profiles and the category price
 * lists are carried over unchanged. They are third-party market costs — rents,
 * school fees, groceries — never SafeStorage's own prices.
 */

export const metadata: Metadata = {
  title: "Dubai Cost of Living 2026: Budget Guide",
  description:
    "How much does it cost to live in Dubai in 2026? Complete breakdown of rent, food, transport, utilities & more. Real prices in AED.",
  keywords:
    "dubai cost of living 2026, living expenses dubai, dubai monthly budget, how much to live in dubai, dubai prices, cost to live in dubai, dubai rent prices, dubai salary requirements",
  openGraph: {
    url: "https://safestorage.ae/guides/dubai-cost-of-living",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-cover-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Cost of Living 2026",
      },
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/guides/dubai-cost-of-living",
  },
}

const budgetProfiles = [
  {
    id: 1,
    title: "Single Person - Budget Lifestyle",
    monthly: "6,000 - 8,000",
    icon: "👤",
    breakdown: [
      { item: "Studio apartment (shared area)", amount: "2,000 - 3,000" },
      { item: "Groceries & home cooking", amount: "800 - 1,200" },
      { item: "Transportation (taxi/metro)", amount: "400 - 600" },
      { item: "Utilities (DEWA)", amount: "200 - 400" },
      { item: "Mobile & internet", amount: "200 - 300" },
      { item: "Dining out (occasional)", amount: "500 - 800" },
      { item: "Entertainment", amount: "300 - 500" },
      { item: "Gym membership", amount: "200 - 300" },
      { item: "Misc & shopping", amount: "400 - 900" }
    ]
  },
  {
    id: 2,
    title: "Single Person - Comfortable Lifestyle",
    monthly: "10,000 - 15,000",
    icon: "🏃",
    breakdown: [
      { item: "1-bedroom apartment (nice area)", amount: "4,000 - 6,000" },
      { item: "Groceries & quality food", amount: "1,500 - 2,000" },
      { item: "Car payment + petrol", amount: "2,000 - 3,000" },
      { item: "Utilities & cooling", amount: "400 - 700" },
      { item: "Mobile & internet", amount: "300 - 400" },
      { item: "Dining out regularly", amount: "1,000 - 1,500" },
      { item: "Entertainment & hobbies", amount: "800 - 1,200" },
      { item: "Gym, fitness", amount: "400 - 600" },
      { item: "Shopping & personal", amount: "600 - 1,600" }
    ]
  },
  {
    id: 3,
    title: "Couple - No Kids",
    monthly: "15,000 - 22,000",
    icon: "👫",
    breakdown: [
      { item: "2-bedroom apartment", amount: "6,000 - 9,000" },
      { item: "Groceries for two", amount: "2,000 - 3,000" },
      { item: "Car payment + petrol", amount: "2,500 - 3,500" },
      { item: "Utilities", amount: "600 - 900" },
      { item: "Mobile & internet (2 lines)", amount: "400 - 600" },
      { item: "Dining out & date nights", amount: "1,500 - 2,500" },
      { item: "Entertainment & travel", amount: "1,000 - 1,500" },
      { item: "Gym memberships (both)", amount: "600 - 800" },
      { item: "Shopping & personal", amount: "1,000 - 2,200" }
    ]
  },
  {
    id: 4,
    title: "Family of 4 - Standard Lifestyle",
    monthly: "25,000 - 35,000",
    icon: "👨‍👩‍👧‍👦",
    breakdown: [
      { item: "3-bedroom apartment/villa", amount: "8,000 - 12,000" },
      { item: "Groceries (family of 4)", amount: "3,000 - 4,500" },
      { item: "2 cars (payments + petrol)", amount: "3,500 - 5,000" },
      { item: "Utilities & cooling", amount: "1,000 - 1,500" },
      { item: "Mobile & internet", amount: "500 - 700" },
      { item: "School fees (2 kids)", amount: "4,000 - 7,000" },
      { item: "Dining out & family activities", amount: "2,000 - 3,000" },
      { item: "Clothing & misc", amount: "1,200 - 2,100" }
    ]
  }
]

const expenses = [
  {
    id: 1,
    category: "Housing & Rent",
    description: "Biggest expense! Rent varies wildly by area and property type. Paid in 1-4 cheques annually (not monthly).",
    prices: [
      { item: "Studio apartment (Deira, International City)", price: "25,000 - 35,000/year" },
      { item: "Studio apartment (JBR, Marina)", price: "40,000 - 60,000/year" },
      { item: "1-bedroom (Barsha, Tecom)", price: "45,000 - 65,000/year" },
      { item: "1-bedroom (Downtown, Marina)", price: "70,000 - 100,000/year" },
      { item: "2-bedroom apartment (mid-range)", price: "70,000 - 110,000/year" },
      { item: "3-bedroom apartment (family areas)", price: "90,000 - 150,000/year" },
      { item: "Villa (Arabian Ranches, Springs)", price: "150,000 - 250,000/year" }
    ],
    savingTip: "Consider a smaller place and use storage for extra items. A 1-bed vs 2-bed saves you AED 20,000-40,000 annually!"
  },
  {
    id: 2,
    category: "Groceries & Food",
    description: "Food costs depend on where you shop and eating habits. Local supermarkets are cheaper than imported brands.",
    prices: [
      { item: "Milk (1 liter)", price: "AED 6 - 8" },
      { item: "Bread (standard loaf)", price: "AED 3 - 6" },
      { item: "Rice (1 kg)", price: "AED 8 - 15" },
      { item: "Chicken (1 kg)", price: "AED 18 - 25" },
      { item: "Eggs (12 pack)", price: "AED 8 - 12" },
      { item: "Weekly groceries (1 person)", price: "AED 200 - 400" },
      { item: "Monthly groceries (family of 4)", price: "AED 2,500 - 4,000" },
      { item: "Eating out (budget meal)", price: "AED 25 - 40" },
      { item: "Mid-range restaurant (2 people)", price: "AED 150 - 250" },
      { item: "Fast food combo meal", price: "AED 25 - 35" }
    ],
    savingTip: "Shop at Carrefour, Lulu, or Nesto for best prices. Cook at home - eating out adds up fast!"
  },
  {
    id: 3,
    category: "Transportation",
    description: "Most people need a car in Dubai. Public transport exists but limited. Taxis and Uber are affordable.",
    prices: [
      { item: "New car (monthly payment)", price: "AED 1,500 - 3,500" },
      { item: "Used car (monthly payment)", price: "AED 800 - 2,000" },
      { item: "Petrol per month (regular use)", price: "AED 300 - 600" },
      { item: "Taxi (5 km ride)", price: "AED 20 - 30" },
      { item: "Metro daily pass", price: "AED 20" },
      { item: "Metro monthly pass", price: "AED 350" },
      { item: "Uber/Careem (average ride)", price: "AED 25 - 50" }
    ],
    savingTip: "Buy a reliable used car instead of new. Save AED 1,000+ monthly in payments!"
  },
  {
    id: 4,
    category: "Utilities & Bills",
    description: "DEWA (Dubai Electricity & Water) is your main utility. AC costs spike in summer (May-September).",
    prices: [
      { item: "DEWA (studio, summer)", price: "AED 400 - 700" },
      { item: "DEWA (2-bed apt, summer)", price: "AED 800 - 1,200" },
      { item: "DEWA (villa, summer)", price: "AED 1,500 - 2,500" },
      { item: "Internet (home)", price: "AED 300 - 500/month" },
      { item: "Mobile plan (basic)", price: "AED 100 - 200/month" },
      { item: "Mobile plan (unlimited)", price: "AED 250 - 400/month" },
      { item: "Streaming services (Netflix, etc)", price: "AED 35 - 60/month" }
    ],
    savingTip: "Set AC to 24°C (not 18°C!) to save 30-40% on cooling costs. Turn off when you leave!"
  },
  {
    id: 5,
    category: "Education & Schools",
    description: "School fees are expensive! Varies by curriculum (British, American, IB) and school reputation.",
    prices: [
      { item: "Budget schools (local curriculum)", price: "AED 12,000 - 20,000/year" },
      { item: "Mid-range international schools", price: "AED 35,000 - 60,000/year" },
      { item: "Premium schools (British/IB)", price: "AED 60,000 - 95,000/year" },
      { item: "Top-tier schools (GEMS, etc)", price: "AED 90,000 - 120,000/year" },
      { item: "Nursery/Kindergarten", price: "AED 15,000 - 45,000/year" },
      { item: "School bus (annual)", price: "AED 4,000 - 8,000/year" },
      { item: "School supplies & extras", price: "AED 2,000 - 5,000/year" }
    ],
    savingTip: "Apply early for affordable schools - they fill up fast! Some employers offer education allowance."
  },
  {
    id: 7,
    category: "Entertainment & Lifestyle",
    description: "Dubai has something for every budget. Beach is free! Many affordable activities available.",
    prices: [
      { item: "Gym membership (basic)", price: "AED 200 - 400/month" },
      { item: "Gym membership (premium)", price: "AED 500 - 1,000/month" },
      { item: "Cinema ticket", price: "AED 35 - 75" },
      { item: "Theme park (single day)", price: "AED 250 - 400" },
      { item: "Burj Khalifa ticket", price: "AED 150 - 500" },
      { item: "Beach club (day pass)", price: "AED 100 - 300" },
      { item: "Golf (18 holes)", price: "AED 300 - 800" },
      { item: "Desert safari", price: "AED 150 - 350" }
    ],
    savingTip: "Free activities: beaches, parks, Dubai Mall fountain, outdoor markets. Dubai doesn't have to be expensive!"
  },
  {
    id: 8,
    category: "Clothing & Shopping",
    description: "Shopping ranges from budget to ultra-luxury. Sales happen during Dubai Shopping Festival and Summer Surprises.",
    prices: [
      { item: "Jeans (Levi's)", price: "AED 200 - 350" },
      { item: "Dress shirt", price: "AED 100 - 300" },
      { item: "Sneakers (Nike, Adidas)", price: "AED 250 - 600" },
      { item: "Business shoes", price: "AED 200 - 500" },
      { item: "Summer outfit", price: "AED 150 - 400" },
      { item: "Formal suit", price: "AED 800 - 2,500" }
    ],
    savingTip: "Shop during sales (Jan-Feb, June-Aug) for 50-70% discounts! Outlet malls have great deals year-round."
  }
]

/* the live page's storage note for the categories that had one */
const STORAGE_NOTE: Record<string, string> = {
  "Housing & Rent":
    "Paying AED 90,000/year for a 2-bed apartment? Get a 1-bed for AED 60,000 and store extra items, paying only for the space they use.",
  Transportation:
    "Don't pay AED 2,000+ monthly for a car you rarely use. Store seasonal sports equipment, camping gear and winter clothes instead of buying a bigger car.",
  "Education & Schools":
    "Kids outgrow everything. Store last year's school uniforms, sports gear and toys, and swap seasonally instead of buying new every year.",
  "Clothing & Shopping":
    "Bought too much during the sales? Store seasonal clothes, extra furniture and bulk buys rather than renting a bigger place for them.",
}

/* the owner's own picture per category (saved 2026-10-17, used as given) */
const CAT_IMG: Record<string, string> = {
  "Housing & Rent": "/landing/cost-housing.webp",
  "Groceries & Food": "/landing/cost-food.webp",
  Transportation: "/landing/cost-transport.webp",
  "Utilities & Bills": "/landing/cost-utilities.webp",
  "Education & Schools": "/landing/cost-education.webp",
  "Entertainment & Lifestyle": "/landing/cost-lifestyle.webp",
  "Clothing & Shopping": "/landing/cost-shopping.webp",
}

/* five lines per category, so the prices sit level with the picture.
   Housing keeps the villa and the mid-range 2-bed rather than the first five. */
const SHOW: Record<string, number[]> = { "Housing & Rent": [0, 1, 2, 4, 6] }
const linesFor = (e: { category: string; prices: { item: string; price: string }[] }) =>
  SHOW[e.category] ? SHOW[e.category].map((n) => e.prices[n]) : e.prices.slice(0, 5)

/* an icon per category, in the order above */
const CAT_EMOJI: Record<string, string> = {
  "Housing & Rent": "🏠",
  "Groceries & Food": "🛒",
  "Transportation": "🚗",
  "Utilities & Bills": "💡",
  "Education & Schools": "🎓",
  "Entertainment & Lifestyle": "🎟️",
  "Clothing & Shopping": "👕",
}

const smart = [
  { Icon: Home, title: "Smaller = cheaper", text: "A 1-bed instead of a 2-bed can be AED 30,000 a year less in rent" },
  { Icon: Package, title: "Pay only for space used", text: "Against AED 2,500+ a month for the extra rented room" },
  { Icon: TrendingDown, title: "Keep what you own", text: "Store what will not fit rather than replacing it later" },
]

const faqs = [
  {
    q: "What salary do I need to live comfortably in Dubai?",
    a: "Single person: AED 10,000-15,000/month for comfortable life. Couple: AED 18,000-25,000. Family of 4: AED 30,000-40,000. Remember - no tax, so your full salary is yours!",
  },
  {
    q: "Is Dubai more expensive than other cities?",
    a: "Comparable to London or New York for rent, but cheaper for: groceries, transport, dining out, and fuel. Plus 0% income tax makes your salary go further!",
  },
  {
    q: "Can I save money living in Dubai?",
    a: "Absolutely! Most people save 30-50% of their salary because there's no income tax. Live smart (cook at home, smaller apartment, use storage for extra stuff) and you'll save a lot.",
  },
  {
    q: "What's the most expensive thing in Dubai?",
    a: "Rent and school fees! Rent is 40-50% of expenses. International schools cost AED 40,000-100,000 per child annually. Plan your budget around these two big items.",
  },
]

const costOfLivingSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://safestorage.ae/guides/dubai-cost-of-living#article',
    headline: 'Dubai Cost of Living 2026: Complete Budget Guide',
    description: 'How much does it cost to live in Dubai in 2026? Complete breakdown of rent, food, transport, utilities & more. Real prices in AED.',
    url: 'https://safestorage.ae/guides/dubai-cost-of-living',
    image: 'https://safestorage.ae/og-cover-2026.jpg',
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'SafeStorage Dubai', url: 'https://safestorage.ae' },
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safestorage.ae/guides/dubai-cost-of-living' },
    inLanguage: 'en-AE',
    about: { '@type': 'City', name: 'Dubai' },
  },  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function DubaiCostOfLiving2026() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Dubai Cost of Living" },
        ]}
      />
      <SchemaScript schema={costOfLivingSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Real prices 2026 · Updated January 2026</span>
              <h1>
                Dubai <br className={s.mBreakDesk} />
                <em>cost of living 2026</em>
              </h1>
              <p>
                Complete budget breakdown with real prices in AED. How much do you really need to live
                comfortably in Dubai?
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a free quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1730 / 909" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/cost-of-living-photo.webp"
                alt="The cost of living in Dubai — rent, groceries, a car and the Downtown skyline"
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

        {/* what a month costs, by household */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Monthly budget</span>
              <h2 className={p.longH2}>
                How much do <em>you need?</em>
              </h2>
            </div>
            <p>Four households, and where the money actually goes each month.</p>
          </div>
          <HomeReveal className={c.profiles}>
            {budgetProfiles.map((b, i) => (
              <article className={c.profile} style={idx(i)} key={b.id}>
                <span className={c.face} aria-hidden="true">
                  {b.icon}
                </span>
                <h3>{b.title}</h3>
                <p className={c.amount}>
                  AED {b.monthly}
                  <small>per month</small>
                </p>
                <ul className={c.rows}>
                  {b.breakdown.map((r) => (
                    <li key={r.item}>
                      <span>{r.item}</span>
                      <b>{r.amount}</b>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* category by category */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Price breakdown</span>
              <h2 className={p.longH2}>
                What things cost, <em>category by category.</em>
              </h2>
            </div>
          </div>
          <HomeReveal className={c.list}>
            {expenses.map((e, i) => (
              <article className={c.row} style={idx(i)} key={e.id}>
                <div className={c.shot}>
                  <Image src={CAT_IMG[e.category]} alt={e.category} width={1730} height={909} />
                </div>
                <div className={c.body}>
                  <div className={c.catTop}>
                    <span className={c.catIcon} aria-hidden="true">
                      {CAT_EMOJI[e.category] ?? "💷"}
                    </span>
                    <h3>{e.category}</h3>
                  </div>
                  <p>{e.description}</p>
                  <ul className={c.rows}>
                    {linesFor(e).map((r) => (
                      <li key={r.item}>
                        <span>{r.item}</span>
                        <b>{r.price}</b>
                      </li>
                    ))}
                  </ul>
                  <p className={c.tip}>
                    <b>Tip</b> {e.savingTip}
                  </p>
                  {STORAGE_NOTE[e.category] ? (
                    <p className={c.store}>
                      <b>Where storage helps</b> {STORAGE_NOTE[e.category]}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* living smaller */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Where storage fits</span>
              <h2>
                Rent the space <br className={s.mBreak} />
                <em>you actually live in.</em>
              </h2>
              <p>
                Rent is the biggest line in every budget on this page. Taking a smaller home and storing what
                will not fit is the simplest way to cut it — you pay only for the space your items use.
              </p>
            </div>
            <FeatScroller>
              {smart.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
            <div className={s.bandCta} style={{ flexWrap: "wrap", gap: 14 }}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                Get a free quote →
              </Link>
              <Link className={`${s.btn} ${s.btnGhost}`} href="/self-storage-dubai/prices">
                How storage is priced
              </Link>
            </div>
          </div>
        </section>

        {/* the questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Common money questions <em>about Dubai.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Live smart. Save more. Enjoy Dubai."
          blurb="Don't let high rent eat your salary. Tell us what you would rather store than pay rent for, and we will send a free, itemised quote."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/guides/dubai-cost-of-living" />
    </>
  )
}
