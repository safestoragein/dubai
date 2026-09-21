import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Car, Camera, CheckCircle2, Clock, AlertTriangle, FileText, KeyRound, ShieldCheck, RotateCcw } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { SplitHero } from "@/components/landing/landing-top"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import FaqAccordion from "@/components/landing/faq-accordion"
import s from "@/components/landing/landing.module.css"
import h from "./hero.module.css"
import Reveal from "./Reveal"

/* 2026-09-19 redesign (owner's request): the live copy is kept word for word,
   only laid out in the landing design system — two-column hero with the
   owner's photo, emoji cards, animations. One change for the site rules: the
   "30 days' notice" sentence was dropped (no cancellation-notice periods). */

export const metadata: Metadata = {
  title: { absolute: "Motorcycle & Bike Storage Dubai | Secure Storage" },
  description: "Secure indoor motorcycle and bike storage in Dubai. Vehicle Storage units protect from heat. 24/7 security & CCTV.",
  keywords: "Motorcycle storage Dubai, Bike storage Dubai, Motorbike storage UAE, Secure motorcycle parking, Indoor bike storage, Motorcycle winter storage, Superbike storage Dubai, Bicycle storage Dubai, Motorcycle safety storage, Two wheeler storage, Motorbike parking Dubai, Long term bike storage, SafeStorage vehicles, Motorcycle protection Dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/car-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/car-storage" },
}

const faqs = [
  { q: "How much does car storage cost in Dubai?", a: "Car storage at SafeStorage Dubai is priced on the space your vehicle occupies, covering cars, motorcycles, and standard vehicles. Classic cars and larger vehicles are quoted individually. Long-term storage (3+ months) receives significant discounts." },
  { q: "Is your car storage indoors and covered?", a: "Yes, all our vehicle storage bays are indoors and under cover. Your vehicle is protected from direct sun, dust, sandstorms, rain, and bird droppings — the outdoor exposure that causes paint oxidation, interior fading, and body damage to cars left parked in the open across Dubai." },
  { q: "Do you offer pickup for vehicle storage?", a: "Yes, we offer drive-in options and can arrange transportation for vehicles that cannot be driven. For motorcycles and smaller vehicles, our team can coordinate transport. Contact us at +971505773388 to discuss your specific vehicle." },
  { q: "Can I access my vehicle while it's in storage?", a: "Yes, you can access your vehicle during our operating hours: Monday–Sunday 8 AM–8 PM. Simply give us 2 hours' notice and your vehicle will be ready. For business customers with special requirements, extended access can be arranged." },
  { q: "What do you do to maintain my vehicle during storage?", a: "Our team conducts regular visual inspections of stored vehicles, checks tire pressure monthly, and monitors the storage environment 24/7. For classic or long-term storage (6+ months), we recommend our premium care package which includes battery trickle charging, regular engine start-ups, and detailed condition reporting." },
]

// owner: only 5 of the longer Q&As

const stats = [
  { e: "⭐", value: "4.9★", label: "Google Rating" },
  { e: "🚗", value: "500+", label: "Vehicles Stored" },
  { e: "🏠", value: "Indoor", label: "Covered Storage Bays" },
  { e: "📝", value: "Free", label: "No-obligation quote" },
]

const outdoorRisks = [
  { e: "🎨", text: "Paint oxidises and fades — UV radiation in Dubai is among the highest in the world (UV Index 9-11+ daily in summer)" },
  { e: "🏜️", text: "Blowing sand and dust scratch paintwork and clog vents, air intakes, and door seals" },
  { e: "🐦", text: "Bird droppings, tree sap, and construction dust etch and stain exposed bodywork and glass" },
  { e: "🛞", text: "Tyres develop flat spots and crack when left stationary and unattended — replacing 4 tyres costs AED 800-3,000" },
  { e: "🚗", text: "Kerbside dents, trolley knocks, and theft are constant risks in open public parking" },
  { e: "🔋", text: "Batteries drain flat and fluids stagnate when a car sits unused for weeks with no one checking on it" },
]

const whoNeeds = [
  { e: "✈️", title: "Expats traveling for extended periods", desc: "Summer trips to Europe, India, or home countries lasting 1-3 months" },
  { e: "🚙", title: "Multiple vehicle owners", desc: "Second car, weekend car, or luxury vehicle not used daily" },
  { e: "🏎️", title: "Classic & vintage car collectors", desc: "Protecting investment-grade vehicles from Dubai's harsh environment" },
  { e: "🏍️", title: "Motorcycle owners", desc: "Bikes often stored April-October when Dubai heat makes riding impractical" },
  { e: "🧳", title: "Expats leaving the UAE", desc: "Storing vehicle while deciding whether to ship, sell, or return" },
  { e: "🌍", title: "Seasonal residents", desc: "Part-time Dubai residents who split time between countries" },
]

const vehicles = [
  { e: "🚗", title: "Cars & SUVs", desc: "Sedans, SUVs, sports cars, family vehicles. From hatchbacks to Range Rovers.", price: "Priced by space used" },
  { e: "🏍️", title: "Motorcycles & Scooters", desc: "All makes and models. Harley Davidson, Ducati, Yamaha, delivery scooters.", price: "Priced by space used" },
  { e: "🏎️", title: "Classic & Luxury Cars", desc: "Ferrari, Lamborghini, Porsche, vintage and collector vehicles with white-glove care.", price: "Quoted individually" },
  { e: "🚤", title: "Boats & Jet Skis", desc: "Personal watercraft, speedboats, and small leisure vessels.", price: "Quoted individually" },
  { e: "🚐", title: "Caravans & Motorhomes", desc: "Large recreational vehicles and camper vans with oversized bay options.", price: "Quoted individually" },
  { e: "🛻", title: "Light Commercial Vehicles", desc: "Pickups, vans, and small trucks for businesses between contracts.", price: "Priced by space used" },
]

const included = [
  { Icon: Car, title: "Covered Indoor Bays", desc: "Your vehicle is stored indoors under cover — shielded from direct sun, dust, sandstorms, rain, and bird droppings that damage vehicles left parked outdoors." },
  { Icon: Camera, title: "24/7 HD CCTV Coverage", desc: "Every bay is covered by high-definition CCTV cameras monitored around the clock." },
  { Icon: CheckCircle2, title: "Monthly Inspections", desc: "Our team conducts monthly visual inspections of all stored vehicles — checking for leaks, tyre condition, and any visible issues." },
  { Icon: Clock, title: "Flexible Terms", desc: "Month-to-month contracts with no penalty. Store for 1 month or 5 years. A wide range of discounts available on longer prepaid commitments." },
]

const steps = [
  { Icon: FileText, step: "1", title: "Get a Quote", desc: "Tell us your vehicle type, size, and storage duration. Get an instant quote by phone or online." },
  { Icon: KeyRound, step: "2", title: "Drive In or We Arrange Transport", desc: "Drive your vehicle to our facility, or we can arrange pickup/transport assistance. We'll do a pre-storage condition report." },
  { Icon: ShieldCheck, step: "3", title: "Secure Storage", desc: "Your vehicle is placed in its covered indoor bay. Our system logs it in with photos and condition notes." },
  { Icon: RotateCcw, step: "4", title: "Retrieve Anytime", desc: "Give us 2 hours' notice to have your vehicle ready. Drive it out or we arrange delivery." },
]

const reviews = [
  { initials: "JR", name: "James R.", role: "Dubai Marina • Porsche 911", text: "Stored my Porsche for 4 months while I was back in the UK on family leave. Collected it in exactly the same condition — battery perfect, no paint issues. The monthly inspection reports gave me complete peace of mind. Wouldn't trust anyone else with my car in Dubai." },
  { initials: "MA", name: "Mohammed A.", role: "Business Bay • Harley Davidson", text: "Dubai summer heat makes riding impossible from June to September. SafeStorage is where my Harley lives for 4 months every year. Secure, covered indoors, and the team actually cares about the bikes. The battery maintenance service is worth every dirham." },
  { initials: "SK", name: "Sarah K.", role: "Jumeirah • Classic Mercedes 280SL", text: "My 1971 Mercedes is irreplaceable. When I found SafeStorage I visited in person before committing — the facility is immaculate. Clean, covered indoor bays, professional staff, and they understood exactly what a classic car needs. My car is in better shape now than when I dropped it off." },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/car-storage#webpage",
    name: "Car Storage Dubai — Secure Indoor Vehicle Storage",
    url: "https://safestorage.ae/personal-storage-dubai/car-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
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

/** Stagger index for an animated card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function CarStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Car Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* HERO — full width like the business page; photo shifted right so the
            people sit beside the text, never washed out under it */}
        <div className={h.heroVivid}>
          <SplitHero
            eyebrow="Vehicle Storage Specialists"
            title="Car Storage Dubai —"
            titleAccent="Secure Covered Indoor Vehicle Storage"
            blurb="You pay only for the space your vehicle uses."
            image="/landing/car-storage-hero-wide.webp"
            imagePosition="right 30%"
            ctaLabel="Get a Free Quote"
            phoneLabel="+971505773388"
          />
        </div>

        {/* STATS */}
        <section className={s.wrap} style={{ paddingBlock: "10px 0" }}>
          <Reveal>
            <div className={s.miniGrid}>
              {stats.map(({ e, value, label }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={label}>
                  <span className={`${s.miniIcon} ${h.planIcon}`} aria-hidden="true">
                    <span className={h.emoji}>{e}</span>
                  </span>
                  <div>
                    <b>
                      <span style={{ color: "var(--accent)" }}>{value}</span>
                    </b>
                    <small>{label}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WHY OUTDOORS IS COSTLY */}
        <section className={`${s.section} ${s.wrap}`} id="outdoors">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Why it matters</span>
              <h2 className={h.longH2}>
                Why Leaving Your Vehicle Parked Outdoors is <em>a Costly Mistake</em>
              </h2>
            </div>
            <p>
              A vehicle left parked in the open in Dubai takes a beating the moment you walk away. Between the relentless
              sun, blowing sand, and the risk of knocks and theft in public parking, here&apos;s what happens to cars
              stored outdoors:
            </p>
          </div>
          <Reveal>
            <div className={s.miniGrid}>
              {outdoorRisks.map(({ e, text }, i) => (
                <div className={`${s.miniCard} ${h.plan} ${h.lift}`} style={idx(i)} key={text}>
                  <span className={`${s.miniIcon} ${h.planIcon}`} aria-hidden="true">
                    <span className={h.emoji}>{e}</span>
                  </span>
                  <div>
                    <small style={{ color: "var(--ink)", fontSize: 14 }}>{text}</small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className={s.movingTip}>
            <AlertTriangle aria-hidden="true" />
            <p>
              A single Dubai summer in exposed outdoor parking can reduce a vehicle&apos;s resale value by AED 5,000-20,000
              and result in AED 2,000-8,000 in preventable repairs.
            </p>
          </div>
        </section>

        {/* WHO NEEDS IT */}
        <section className={`${s.section} ${s.wrap}`} id="who" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Who it&apos;s for</span>
                  <h2>
                    Who Needs Car Storage <em>in Dubai?</em>
                  </h2>
                </div>
              }
            >
              {whoNeeds.map(({ e, title, desc }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={title}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* VEHICLES WE STORE */}
        <section className={`${s.section} ${s.wrap}`} id="vehicles" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>What we store</span>
                  <h2>
                    Vehicles <em>We Store</em>
                  </h2>
                </div>
              }
            >
              {vehicles.map(({ e, title, desc, price }, i) => (
                <article className={`${s.usp} ${h.plan}`} style={idx(i)} key={title}>
                  <span className={h.bigEmoji} aria-hidden="true">
                    {e}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className={h.pricePill}>{price}</span>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* WHAT'S INCLUDED — dark band */}
        <section className={s.wrap} id="included">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Every vehicle</span>
                <h2>
                  What&apos;s Included with <br className={s.mBreak} />
                  <em>Every Vehicle Storage</em>
                </h2>
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)" }}>
                No hidden extras. No surprise charges. Everything your vehicle needs to stay in perfect condition.
              </p>
            </div>
            <Reveal>
              <FeatScroller>
                {included.map(({ Icon, title, desc }, i) => (
                  <div className={`${s.feat} ${h.plan}`} style={idx(i)} key={title}>
                    <div className={s.featIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </FeatScroller>
            </Reveal>
            <p className={s.scrollHint}>Swipe for more →</p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${s.section} ${s.wrap}`} id="how">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>How it works</span>
              <h2>
                How Vehicle Storage <em>Works</em>
              </h2>
            </div>
          </div>
          <MilestonesPlayer>
            <ol className={s.milestones}>
              {steps.map(({ Icon, step, title, desc }, i) => (
                <li className={s.milestone} key={step} style={{ ["--i" as string]: i }}>
                  <span className={s.milestoneDot} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={s.milestoneYear}>Step {step}</span>
                  <b>{title}</b>
                  <small>{desc}</small>
                </li>
              ))}
            </ol>
          </MilestonesPlayer>
        </section>

        {/* REVIEWS */}
        <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Testimonials</span>
              <h2>
                What Our Customers <em>Say</em>
              </h2>
            </div>
          </div>
          <Reveal>
            <div className={`${s.revTrack} ${h.revFill}`} style={{ paddingTop: 14, paddingBottom: 56, marginBottom: -30 }}>
              {reviews.map((rv, i) => (
                <div className={`${s.revCard} ${h.plan}`} style={idx(i)} key={rv.name}>
                  <div className={s.revTop}>
                    <span className={`${s.revAvatar} ${i % 2 ? s.revAvatarAlt : ""}`} aria-hidden="true">
                      {rv.initials}
                    </span>
                    <div>
                      <div className={s.revName}>{rv.name}</div>
                      <div className={s.revRole}>{rv.role}</div>
                    </div>
                  </div>
                  <p className={s.revText}>&ldquo;{rv.text}&rdquo;</p>
                  <div className={s.revStars} aria-label="Rated 5 out of 5">
                    ★★★★★
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2>
                Frequently Asked <em>Questions</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Ready to Protect Your Vehicle?"
          blurb="Get a free quote in 2 minutes. You pay only for the space your vehicle uses. No commitment required."
          ctaLabel="Get a Free Quote"
          callLabel="Call +971505773388"
        />

        {/* ABOUT + COMPREHENSIVE FAQS */}
        <section className={`${s.section} ${s.wrap}`} id="about">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>About</span>
              <h2>
                About Our Car &amp; Vehicle Storage <em>Service in Dubai</em>
              </h2>
            </div>
          </div>
          <div className={s.panel} style={{ marginBottom: 40 }}>
            <p className={h.panelText}>
              SafeStorage Dubai provides specialist covered indoor vehicle storage for cars, motorcycles, classic and
              luxury vehicles, boats, caravans, and light commercial vehicles across Dubai. Every vehicle is stored
              indoors under cover &mdash; shielded from the direct sun, UV, blowing sand, dust, rain, and bird droppings
              that damage cars left parked in the open. Dubai&apos;s outdoor conditions are uniquely destructive to
              vehicles left in exposed parking, where paintwork oxidises, bodywork is scratched and stained, and tyres
              crack while a car sits unattended. A single summer in inadequate outdoor parking can reduce a
              vehicle&apos;s resale value by AED 5,000&ndash;20,000 and result in thousands of dirhams in preventable
              repairs.
            </p>
          </div>
        </section>
      </div>
      <SiloLinks path="/personal-storage-dubai/car-storage" />
    </>
  )
}
