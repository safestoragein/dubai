import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar, FileText, Home, Package, ShoppingCart, School, CreditCard, Users,
  Clock, PiggyBank, Sparkles, type LucideIcon,
} from "lucide-react"

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
import m from "@/components/guides/moving.module.css"

/**
 * /guides/moving-to-dubai — redesigned on the shared landing system
 * (owner, 2026-10-19) with their own pictures, one per step.
 *
 * Every step, checklist line, storage note and answer is the copy that was
 * already here; only the layout changed. The figures are third-party costs
 * (rent, shipping, school fees), never SafeStorage's own.
 */

export const metadata: Metadata = {
  title: "Moving to Dubai 2026: Relocation Guide",
  description:
    "Moving to Dubai in 2026? The complete relocation guide: visas, housing, shipping, schools, cost of living and the first month, step by step.",
  keywords:
    "moving to dubai, relocating to dubai, dubai relocation guide, expat moving dubai, dubai visa process, cost of living dubai, moving to dubai 2026",
  openGraph: {
    url: "https://safestorage.ae/guides/moving-to-dubai",
    siteName: "SafeStorage Dubai",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "Moving to Dubai 2026" }],
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/guides/moving-to-dubai" },
}

const sections = [
  {
    id: 1,
    title: "Before You Move: Essential Planning",
    subtitle: "3-6 Months Before Departure",
    content: "Start planning your Dubai move early. Research job opportunities, understand visa requirements, and create a realistic budget. Dubai offers amazing opportunities but requires proper preparation. Consider selling items you won't need - Dubai has everything available locally, and shipping costs can be high.",
    checklist: [
      "Research job market in your field",
      "Understand visa sponsorship requirements",
      "Create a moving budget (flights, shipping, initial housing)",
      "Decide what to bring vs. buy in Dubai",
      "Research neighborhoods and schools (if applicable)"
    ],
    storageConnection: "Not sure what to bring? Store non-essential items with SafeStorage while you settle in. Many people keep belongings in storage for 3-6 months until they understand what they actually need in Dubai.",
  },
  {
    id: 2,
    title: "Visas & Documentation Made Simple",
    subtitle: "What You Actually Need",
    content: "Most people moving to Dubai get a residence visa sponsored by their employer. The process typically takes 2-4 weeks once you arrive. You'll need your passport (valid for 6+ months), photos, degree certificates, and medical test results. Don't worry - your company usually handles most paperwork!",
    checklist: [
      "Passport valid for at least 6 months",
      "Educational certificates (attested/notarized)",
      "Marriage certificate (if applicable)",
      "Birth certificates for children",
      "Medical fitness test upon arrival",
      "Emirates ID application (done in Dubai)"
    ],
    storageConnection: "Important documents need safe keeping! Store original certificates, family records, and sensitive paperwork in our clean, secure facility. Access them anytime you need.",
  },
  {
    id: 3,
    title: "Finding Your Perfect Home",
    subtitle: "Apartments, Villas & Neighborhoods",
    content: "Dubai offers everything from affordable studios (AED 30,000/year) to luxury villas (AED 200,000+/year). Most people start with hotel apartments for 1-2 months while house hunting. Popular areas: Marina (waterfront lifestyle), Downtown (city center), Arabian Ranches (family villas), Business Bay (professionals). Rent is typically paid in 1-4 cheques annually.",
    checklist: [
      "Budget: Studios from AED 30k, 1-beds from AED 50k/year",
      "Stay in hotel apartment first (1-2 months)",
      "Understand cheque payment system",
      "Get DEWA (utilities) connection",
      "Register Ejari (rental contract)",
      "Consider proximity to work/schools"
    ],
    storageConnection: "Moving between hotel and apartment? Store your belongings safely with us during the transition. Door-to-Door pickup from anywhere in Dubai - focus on finding the right home, not managing boxes!",
  },
  {
    id: 4,
    title: "Packing & Shipping: What to Bring",
    subtitle: "Smart Moving Strategy",
    content: "Ship only essentials. Electronics, furniture, and appliances are readily available (and often cheaper) in Dubai. Bring personal items, photos, important documents, and items with sentimental value. Shipping costs AED 500-2000 per cubic meter by sea (6-8 weeks) or AED 8-15 per kg by air (1 week). Most people ship 2-5 cubic meters.",
    checklist: [
      "Personal clothing & accessories",
      "Important documents & photos",
      "Prescription medications (3-6 month supply)",
      "Electronics (220V compatible or bring converters)",
      "Children's favorite toys & books",
      "Items NOT to bring: Large furniture, heavy appliances"
    ],
    storageConnection: "Can't decide what to bring? Ship everything to SafeStorage first! Store items while you settle, then request delivery of what you need. No rush decisions - take your time figuring out your new life.",
  },
  {
    id: 5,
    title: "First Month Essentials",
    subtitle: "What to Do Immediately",
    content: "Your first month is about setting up. Get a local SIM (Etisalat/Du, AED 100-200/month), open a bank account (Emirates NBD, ADCB, or Mashreq are foreigner-friendly), buy a car or arrange transport, and register for utilities. Dubai moves fast - you'll be settled before you know it!",
    checklist: [
      "Day 1: Get local SIM card & phone number",
      "Week 1: Open bank account (bring Emirates ID, passport, salary letter)",
      "Week 1: Set up home (IKEA, Carrefour, Dragon Mart for affordable items)",
      "Week 2: Get driving license (exchange or take test)",
      "Month 1: Buy or lease a car (public transport limited)",
      "Month 1: Explore your neighborhood & make connections"
    ],
    storageConnection: "Bought too much too fast? We've all been there! Store seasonal items, extra furniture, or bulk purchases until you actually need them. Your apartment will thank you for the extra space.",
  },
  {
    id: 6,
    title: "Schools & Healthcare",
    subtitle: "For Families Moving to Dubai",
    checklist: [
      "Research schools early (long waiting lists)",
      "Budget AED 20,000-80,000 per child annually",
      "Get school admission test dates",
      "Register with a GP/clinic near home",
      "Get vaccinations up to date"
    ],
    storageConnection: "Kids outgrow everything quickly! Store seasonal clothes, toys, and sports equipment. When they move up a school year, swap stored items instead of buying new - saves money and space.",
  },
  {
    id: 7,
    title: "Cost of Living Reality Check",
    subtitle: "Monthly Budget Breakdown",
    content: "Dubai can be affordable or expensive depending on lifestyle. A single person needs AED 6,000-10,000/month for comfortable living. A family of 4 needs AED 20,000-35,000/month. The advantage? No income tax! Your entire salary is yours. Groceries, dining, and entertainment are reasonably priced.",
    checklist: [
      "Rent: AED 30,000-120,000 per year",
      "Groceries: AED 1,500-3,000/month (family)",
      "Utilities: AED 500-1,500/month",
      "Car payment: AED 1,500-3,000/month",
      "Petrol: AED 300-600/month",
      "Dining out: AED 50-150 per meal",
      "Entertainment: Variable (beach is free!)",
      "School fees: AED 15,000-100,000/child/year"
    ],
    storageConnection: "Save money on rent! Instead of paying for a bigger apartment, store seasonal items, sports gear, and rarely-used belongings. Paying only for the storage space you use beats paying AED 3,000+ extra rent annually for a bigger place.",
  },
  {
    id: 8,
    title: "Culture & Lifestyle Tips",
    subtitle: "Living Like a Local",
    content: "Dubai is welcoming, safe, and multicultural. Respect local customs: dress modestly in public, don't drink alcohol in public areas, and be mindful during Ramadan. Friday-Saturday is the weekend. Dubai is incredibly safe - you can walk alone at night, leave your car unlocked, and trust people. The biggest adjustment? Summer heat (May-September)!",
    checklist: [
      "Dress code: Modest in malls/public (shoulders & knees covered)",
      "Weekend: Friday-Saturday (not Saturday-Sunday)",
      "Ramadan: No eating/drinking in public during fasting hours",
      "Alcohol: Only in licensed venues (hotels, restaurants)",
      "Public displays of affection: Keep it minimal",
      "Summer strategy: Stay indoors 12-5 PM (40°C+)"
    ],
    storageConnection: "Summer in Dubai means 6 months of indoor life. Store your winter clothes, outdoor gear, and seasonal decorations. When winter arrives (November), swap them out and store your summer items instead!",
  }
]

/* the owner's picture per step (saved 2026-10-19, used as given); the two
   steps without one show their icon on a tinted panel instead */
const STEP_IMG: Record<number, string> = {
  1: "/landing/moving-planning-photo.webp",
  2: "/landing/moving-visas-photo.webp",
  3: "/landing/moving-home-photo.webp",
  4: "/landing/moving-packing-photo.webp",
  5: "/landing/moving-first-month-photo.webp",
  6: "/landing/moving-schools-photo.webp",
  7: "/landing/moving-cost-photo.webp",
  8: "/landing/moving-culture-photo.webp",
}

const STEP_ICON: Record<number, LucideIcon> = {
  1: Calendar, 2: FileText, 3: Home, 4: Package,
  5: ShoppingCart, 6: School, 7: CreditCard, 8: Users,
}

/* keep each step short: the first couple of sentences, four lines of list */
const brief = (text: string, sentences = 2) =>
  text.split(/(?<=[.!?])\s+/).slice(0, sentences).join(" ")

const ticksFor = (step: { checklist: string[] }) => step.checklist.slice(0, 4)

const why = [
  { Icon: Clock, title: "Flexible timeline", text: "Store for weeks or months. No rush to decide what you need — settle in first." },
  { Icon: PiggyBank, title: "Save on rent", text: "Take the smaller flat and store the rest, instead of renting space you use twice a year." },
  { Icon: Sparkles, title: "Clean and secure", text: "Indoor space, wrapped and dust-protected throughout its stay." },
]

const faqs = [
  {
    q: "How much money do I need to move to Dubai?",
    a: "Minimum AED 15,000-20,000 for first month (flights, hotel, deposit, initial expenses). Ideally have 3 months of living expenses saved (AED 30,000-50,000).",
  },
  {
    q: "Can I move to Dubai without a job?",
    a: "Difficult - you need visa sponsorship. Options: job offer, start a business, or get sponsored by family member already here. Tourist visa gives you 30-90 days to job hunt.",
  },
  {
    q: "Is Dubai expensive to live in?",
    a: "It can be affordable or expensive based on lifestyle. Single person: AED 6,000-10,000/month comfortable. Family: AED 20,000-35,000/month. Remember - no income tax means you keep all your salary!",
  },
  {
    q: "Do I need to speak Arabic?",
    a: "No! English is widely spoken everywhere. Signs, menus, and business are conducted in English. Learning basic Arabic phrases is respectful but not necessary.",
  },
]

const movingToDubaiSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://safestorage.ae/guides/moving-to-dubai#article',
    headline: 'Moving to Dubai 2026 — Complete Relocation Guide',
    description: 'Everything you need to know about moving to Dubai in 2026 — visas, housing, cost of living, schools & more.',
    url: 'https://safestorage.ae/guides/moving-to-dubai',
    image: 'https://safestorage.ae/og-cover-2026.jpg',
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'SafeStorage Dubai', url: 'https://safestorage.ae' },
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safestorage.ae/guides/moving-to-dubai' },
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

export default function MovingToDubai2026() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Moving to Dubai" },
        ]}
      />
      <SchemaScript schema={movingToDubaiSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Relocation guide · Updated January 2026</span>
              <h1>
                Moving to <br className={s.mBreakDesk} />
                <em>Dubai in 2026</em>
              </h1>
              <p>
                Visas, housing, shipping, schools and the first month — the whole move in eight steps, in the
                order you will actually need them.
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
              <Image
                src="/landing/moving-hero-photo-v2.webp"
                alt="A SafeStorage crew packing a family's home in Dubai, with the skyline behind"
                width={1730}
                height={909}
                sizes="(max-width: 900px) 94vw, 50vw"
                priority
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* the eight steps */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The move, step by step</span>
              <h2 className={p.longH2}>
                Eight things to get right, <em>in order.</em>
              </h2>
            </div>
            <p>From the planning months before you fly to the week you feel settled.</p>
          </div>

          <HomeReveal className={m.list}>
            {sections.map((step, i) => {
              const Icon = STEP_ICON[step.id]
              const img = STEP_IMG[step.id]
              return (
                <article className={m.step} style={idx(i)} key={step.id}>
                  {img ? (
                    <div className={m.shot}>
                      <Image
                        src={img}
                        alt={step.title}
                        width={1730}
                        height={909}
                        sizes="(max-width: 900px) 94vw, 48vw"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ) : (
                    <div className={`${m.shot} ${m.noShot}`}>
                      <span aria-hidden="true">
                        <Icon strokeWidth={1.6} />
                      </span>
                      <b>{step.subtitle}</b>
                    </div>
                  )}
                  <div className={m.body}>
                    <span className={m.num}>
                      <i>{String(step.id).padStart(2, "0")}</i> {step.subtitle}
                    </span>
                    <h3>{step.title}</h3>
                    {step.content ? <p>{brief(step.content)}</p> : null}
                    <ul className={m.ticks}>
                      {ticksFor(step).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <p className={m.store}>
                      <b>Where storage helps</b> {brief(step.storageConnection)}
                    </p>
                  </div>
                </article>
              )
            })}
          </HomeReveal>
        </section>

        {/* why store while you settle */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>While you settle</span>
              <h2>
                One less thing <br className={s.mBreak} />
                <em>to sort out.</em>
              </h2>
              <p>
                Moving country is enough on its own. Leave what you cannot place yet with us and bring it over
                when the new home is sorted — you pay only for the space it uses.
              </p>
            </div>
            <FeatScroller>
              {why.map((f) => (
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
              <Link className={`${s.btn} ${s.btnGhost}`} href="/self-storage-dubai">
                Learn about storage
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
                Common questions <em>about moving here.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Start your Dubai move the easy way."
          blurb="Tell us what is coming with you and what can wait in storage, and we will send a free, itemised quote."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/guides/moving-to-dubai" />
    </>
  )
}
