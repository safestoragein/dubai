import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  FileText, Truck, ShieldCheck, Home, MapPin, Ruler, Tags, Clock, Users, Globe, Wallet, Luggage, Hourglass,
  EyeOff, ShoppingCart, Check, X, AlertCircle, Info, Wind, Shirt, User, Sun, Plane, Sofa, Building2,
  ClipboardCheck, CheckCircle2,
} from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import { MilestonesPlayer } from "@/components/landing/milestones-player"
import FaqAccordion from "@/components/landing/faq-accordion"
import s from "@/components/landing/landing.module.css"
import r from "./reveal.module.css"
import Reveal from "./Reveal"
import c from "./compare.module.css"
import CompareToggle from "./CompareToggle"

export const metadata: Metadata = {
  title: "Student Storage Dubai — Budget Plans",
  description:
    "Safe, flexible student storage in Dubai between semesters, summer holidays or graduation. Door-to-door pickup from your accommodation. Get a free, itemised quote.",
  keywords: "student storage dubai, university storage dubai, semester storage dubai, summer student storage dubai, student accommodation storage, UAEU student storage, AUD student storage",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai/student-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/personal-storage-dubai/student-storage" },
}

// When students store — carried over from the previous version of this page.
const situations = [
  { emoji: "☀️", title: "Summer holiday break", body: "Dubai universities break for around three months. Store across summer instead of paying for an empty room." },
  { emoji: "📅", title: "Between academic years", body: "Lease ended and next year's housing not confirmed? Bridge the gap and search without rushing." },
  { emoji: "✈️", title: "Semester abroad", body: "Heading off on exchange? Store your room and come back to the same things — nothing to replace." },
  { emoji: "🎓", title: "Graduation", body: "Job search or visa transition? Keep everything safe until you're settled." },
  { emoji: "📦", title: "Moving to a smaller room", body: "Store the overflow instead of throwing out things you'll want later." },
  { emoji: "💼", title: "Internship in another emirate", body: "Interning in Abu Dhabi or Sharjah? Stop paying for your Dubai room and store the lot." },
]

const steps = [
  { Icon: FileText, when: "Day 1", t: "Message us", b: "WhatsApp your address, a rough list and your date." },
  { Icon: Truck, when: "Pickup", t: "We collect", b: "From your accommodation — protective materials included." },
  { Icon: ShieldCheck, when: "While away", t: "Stored safely", b: "Every item logged, with 24/7 security." },
  { Icon: Home, when: "You're back", t: "Delivered", b: "To your new place with 24–48 hours' notice." },
]

const why = [
  { Icon: MapPin, title: "Pickup near every campus", body: "Door-to-door from student accommodation across Dubai — no car or van needed." },
  { Icon: Ruler, title: "Pay for the space you use", body: "Shared, racked storage billed on the space your things take — never an empty room." },
  { Icon: Tags, title: "No hidden fees", body: "What we quote is what you pay. No admin charges, no surprises on the invoice." },
  { Icon: Clock, title: "Visit 7 days a week", body: "Need something mid-break? Collect it 8 AM–8 PM with your ID and booking reference." },
  { Icon: Users, title: "Share with friends", body: "Each student's items labelled separately, with split invoices and separate returns." },
  { Icon: Globe, title: "Manage it from abroad", body: "Authorise someone in Dubai and pay by international card while you're away." },
]

// Storage vs keeping your room — `tone` = [icon colour, tile tint]
const roomHassles = [
  { Icon: Wallet, t: "Rent on an empty room", b: "Months of rent while you're away", partly: false, tone: ["#e11d48", "#ffe4e9"] },
  { Icon: Luggage, t: "Haul it all home", b: "Or leave things behind", partly: false, tone: ["#d97706", "#fef3c7"] },
  { Icon: Hourglass, t: "Rushed housing choice", b: "Signing the next place in a hurry", partly: true, tone: ["#4f46e5", "#e0e7ff"] },
  { Icon: EyeOff, t: "Left unattended", b: "Nobody watching your things", partly: false, tone: ["#7c3aed", "#ede9fe"] },
  { Icon: Truck, t: "Move it back yourself", b: "Your car, your time", partly: false, tone: ["#ea580c", "#ffedd5"] },
  { Icon: ShoppingCart, t: "Rebuy what you sold", b: "Replacing it all next term", partly: false, tone: ["#0891b2", "#cffafe"] },
]

const storageWins = [
  { t: "Pay only for space used", b: "Not rent for an empty room" },
  { t: "Door-to-door pickup", b: "From your accommodation" },
  { t: "No rush to find housing", b: "Store while you search" },
  { t: "24/7 security", b: "Safe while you're away" },
  { t: "Delivered back to you", b: "To your new place, on your date" },
  { t: "Manage it from abroad", b: "Authorise someone in Dubai" },
]

// each item with a small colour emoji (owner's choice, as on the category cards)
const items = [
  { e: "💻", t: "Laptop and chargers" }, { e: "📚", t: "Books and textbooks" }, { e: "👕", t: "Clothes and shoes" },
  { e: "🛏️", t: "Bedding and pillows" }, { e: "📺", t: "Small TV or monitor" }, { e: "🍳", t: "Kitchen appliances" },
  { e: "🧊", t: "Mini fridge" }, { e: "🪑", t: "Study desk and chair" }, { e: "🧥", t: "Wardrobe" },
  { e: "⚽", t: "Sports equipment" }, { e: "🎸", t: "Musical instruments" }, { e: "🎨", t: "Art supplies and portfolios" },
  { e: "🚲", t: "Bike or scooter" }, { e: "🧳", t: "Suitcases and bags" },
]

// `anim` = how the icon acts out the tip (see reveal.module.css)
const tips = [
  { Icon: Tags, t: "Label boxes by category", b: "BOOKS, CLOTHES, KITCHEN — take back only what you need.", anim: "swing" },
  { Icon: Wind, t: "Vacuum-bag your bedding", b: "Duvets and pillows shrink to a fraction of their size.", anim: "squeeze" },
  { Icon: Shirt, t: "Pad fragile items with clothes", b: "Fewer boxes, and breakables stay protected.", anim: "bounce" },
] as const

const universities = [
  "American University in Dubai", "University of Wollongong Dubai", "Heriot-Watt University Dubai", "Middlesex University Dubai",
  "Zayed University", "Canadian University Dubai", "British University in Dubai", "SP Jain School of Global Management",
  "BITS Pilani Dubai Campus", "Manipal Academy of Higher Education Dubai",
]
const areas = [
  "Dubai Silicon Oasis", "Academic City", "Knowledge Park", "Knowledge Village", "Media City", "DIFC",
  "JVC", "Al Barsha", "Sports City", "Jumeirah",
]

// Student reviews already published on this page.
const reviews = [
  { initials: "YK", name: "Yasmin K.", role: "American University in Dubai · DIFC", text: "Going back to Lebanon for 3 months summer. My Dubai room was AED 2,500/mo — I wasn't going to keep paying it empty. SafeStorage stored all my stuff. Saved over AED 7,000 vs keeping the room. Came back and everything was exactly as I left it." },
  { initials: "SP", name: "Siddharth P.", role: "University of Wollongong Dubai · Dubai Silicon Oasis", text: "Exchange semester in Australia — stored all my Dubai apartment contents with SafeStorage. The pickup was super easy, they came to my building. When I came back 5 months later, collected everything in one go. No damage, no missing items. Exactly what I needed." },
  { initials: "EL", name: "Emma L.", role: "Middlesex University Dubai · JVC", text: "Graduated in May and had a month before my visa expired. Stored everything with SafeStorage — they picked up from student residence. Had all my belongings safely stored while I sorted out my employment visa. Way less stressful than trying to move everything at once." },
]

const faqs = [
  {
    q: "How do I book pickup from my accommodation?",
    a: "WhatsApp or call us with your address, a rough list of what you're storing and your preferred date. We confirm a time, give you an estimate and send a team — we cover Dubai Silicon Oasis, DIFC, Al Barsha, JVC, Jumeirah, Sports City and every other student area.",
  },
  {
    q: "How quickly can I get my things back before term starts?",
    a: "Standard delivery needs 24–48 hours' notice, and same-day requests made before 12 PM are accommodated where possible. Late August to September is our busiest time, so book your return about a week ahead.",
  },
  {
    q: "Can I share storage with other students?",
    a: "Yes. Each student's items are labelled separately at pickup, invoices can be split, and everyone can collect their own things independently — even if you return at different times.",
  },
  {
    q: "Can someone else manage my storage while I'm abroad?",
    a: "Yes. Authorise a friend or family member when you book and they can access or collect on your behalf. We can also coordinate with shipping companies to send specific items to you abroad.",
  },
  {
    q: "Do international students need a UAE residency visa?",
    a: "No. A valid student ID, your passport and a UAE contact number are enough, and you can pay by international credit or debit card.",
  },
  {
    q: "What can't I store?",
    a: "Hazardous materials, perishables, live animals and anything prohibited under UAE law. Everything else in a typical student room — furniture, electronics, books, bikes — is fine.",
  },
]

const explore = [
  { Icon: User, t: "Personal storage Dubai", b: "All personal storage services.", href: "/personal-storage-dubai" },
  { Icon: Luggage, t: "Luggage storage", b: "Suitcases and bags between trips.", href: "/personal-storage-dubai/luggage-storage" },
  { Icon: Sun, t: "Seasonal storage", b: "Out-of-season items stored.", href: "/personal-storage-dubai/seasonal-storage" },
  { Icon: Plane, t: "Expat storage", b: "Storage while you're overseas.", href: "/personal-storage-dubai/expat-storage" },
  { Icon: Sofa, t: "Furniture storage", b: "Beds, desks and wardrobes.", href: "/personal-storage-dubai/furniture-storage" },
  { Icon: Building2, t: "Apartment storage", b: "A whole apartment, between leases.", href: "/personal-storage-dubai/apartment-storage" },
  { Icon: MapPin, t: "Local self storage", b: "Storage near you across Dubai.", href: "/self-storage-dubai/local-self-storage" },
  { Icon: ClipboardCheck, t: "How it works", b: "From first call to delivery back.", href: "/how-it-works" },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Student Storage Dubai",
    description: "Student storage in Dubai for semester breaks, summer holidays and graduation. Shared, secure storage with door-to-door pickup from student accommodation.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/personal-storage-dubai/student-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Student Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/personal-storage-dubai/student-storage#webpage",
    name: "Student Storage Dubai — Affordable Between-Semester Storage",
    url: "https://safestorage.ae/personal-storage-dubai/student-storage",
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

/** Stagger index for a revealed card. */
const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

type Chip = string | { e: string; t: string }

/** Two chip rows sliding in opposite directions; a chip shows its emoji, or a tick. */
function Marquee({ rows }: { rows: Chip[][] }) {
  return (
    <div className={s.areaMarquees}>
      {rows.map((row, ri) => (
        <div className={s.marquee} key={ri}>
          <div className={`${s.marqueeTrack} ${ri === 1 ? s.marqueeReverse : ""}`}>
            {[0, 1].map((copy) => (
              <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                {row.map((chip) => {
                  const label = typeof chip === "string" ? chip : chip.t
                  return (
                    <li key={label}>
                      <span className={s.chip}>
                        {typeof chip === "string" ? (
                          <CheckCircle2 size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px", color: "var(--accent)" }} />
                        ) : (
                          <span className={r.chipEmoji} style={{ marginRight: 7 }} aria-hidden="true">
                            {chip.e}
                          </span>
                        )}
                        {label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function StudentStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai", href: "/personal-storage-dubai" },
          { name: "Student Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      {/* --cream override: the softer cream (#FAF7F0) used on the redesigned silo pages */}
      <div
        className={`${s.page} ${sora.variable} ${manrope.variable}`}
        style={{ ["--cream" as string]: "#faf7f0" } as CSSProperties}
      >
        {/* wrapper only swaps the hero wash for a lighter one (see reveal.module.css) */}
        <div className={r.heroVivid}>
          <SplitHero
            eyebrow="Student storage Dubai"
            title="Student Storage in Dubai"
            titleAccent="between semesters."
            blurb="Going home for summer or a semester abroad? We collect from your accommodation — pay only for the space you use."
            image="/landing/svc-student-hero.webp"
            imagePosition="center 30%"
            ctaLabel="Get a Student Quote"
          />
        </div>

        <LandingTrust />

        {/* WHEN STUDENTS STORE */}
        <section className={`${s.section} ${s.wrap}`} id="when">
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>When students store</span>
                  <h2>
                    Storage for every <em>break and move.</em>
                  </h2>
                </div>
              }
            >
              {situations.map(({ emoji, title, body }, i) => (
                <article className={`${s.usp} ${r.card}`} style={idx(i)} key={title}>
                  <span className={r.emoji} aria-hidden="true">
                    {emoji}
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${s.section} ${s.wrap}`} id="process" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>How it works</span>
                <h2>
                  From your room to storage <em>and back.</em>
                </h2>
              </div>
              <p>Book on WhatsApp, we collect, and everything comes back when you do.</p>
            </div>
            <MilestonesPlayer>
              <ol className={s.milestones}>
                {steps.map(({ Icon, when, t: title, b }, i) => (
                  <li className={s.milestone} key={title} style={{ ["--i" as string]: i }}>
                    <span className={s.milestoneDot} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={s.milestoneYear}>{when}</span>
                    <b>{title}</b>
                    <small>{b}</small>
                  </li>
                ))}
              </ol>
            </MilestonesPlayer>
          </Reveal>
        </section>

        {/* WHY */}
        <section className={s.wrap} id="why">
          <Reveal>
            <div className={`${s.darkBand} ${s.whyBand}`}>
              <div className={`${s.howHead} ${s.bandHead}`}>
                <div>
                  <span className={s.howEyebrow}>Why students choose us</span>
                  <h2>
                    Built around your <br className={s.mBreak} />
                    <em>academic calendar.</em>
                  </h2>
                </div>
              </div>
              <FeatScroller>
                {why.map(({ Icon, title, body }, i) => (
                  <div className={`${s.feat} ${r.card}`} style={idx(i)} key={title}>
                    <div className={s.featIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                ))}
              </FeatScroller>
              <p className={s.scrollHint}>Swipe for more →</p>
            </div>
          </Reveal>
        </section>

        {/* COMPARE */}
        <section className={`${s.section} ${s.wrap}`} id="compare">
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Compare</span>
                <h2>
                  Storage vs <em>keeping your room.</em>
                </h2>
              </div>
              <p>Why students store over the break instead of paying for a room they&apos;re not in.</p>
            </div>

            <CompareToggle>
              {/* KEEPING YOUR ROOM */}
              <div className={`${c.card} ${c.them}`}>
                <div className={c.cardHead}>
                  <div>
                    <b>Your room</b>
                    <small>Kept empty</small>
                  </div>
                  <span className={c.pill}>6 hassles</span>
                </div>
                <ul className={c.list}>
                  {roomHassles.map(({ Icon, t: title, b, partly, tone }) => (
                    <li className={c.row} key={title}>
                      <div className={c.ic} style={{ color: tone[0], background: tone[1] }} aria-hidden="true">
                        <Icon strokeWidth={2} />
                      </div>
                      <div>
                        <b>{title}</b>
                        <span>{b}</span>
                      </div>
                      <div className={`${c.cross} ${partly ? c.crossPartly : ""}`} aria-label={partly ? "Partly" : "Not included"}>
                        {partly ? <AlertCircle strokeWidth={2.6} aria-hidden="true" /> : <X strokeWidth={3} aria-hidden="true" />}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SAFESTORAGE */}
              <div className={`${c.card} ${c.us}`}>
                <span className={c.badge}>RECOMMENDED</span>
                <div className={c.cardHead}>
                  <div>
                    <b>SafeStorage</b>
                    <small>Dubai</small>
                  </div>
                  <span className={c.pill}>All 6 included</span>
                </div>
                <ul className={c.list}>
                  {storageWins.map(({ t: title, b }) => (
                    <li className={c.row} key={title}>
                      <div>
                        <b>{title}</b>
                        <span>{b}</span>
                      </div>
                      <div className={c.tick} aria-label="Included">
                        <Check strokeWidth={3} aria-hidden="true" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CompareToggle>

            <div className={c.strip}>
              <p>
                Pack up, go home, come back to everything.
                <span>Pay only for the space you use.</span>
              </p>
              <Link className={`${s.btn} ${s.btnAccent} ${c.stripBtn}`} href="/get-quote">
                Get a student quote →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* WHAT STUDENTS STORE */}
        <section className={`${s.section} ${s.wrap}`} id="items" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>What students store</span>
                <h2>
                  Your whole room, <em>packed and safe.</em>
                </h2>
              </div>
              <p>From a few boxes to a full room — bed, desk, wardrobe and all.</p>
            </div>
            <Marquee rows={[items.slice(0, 7), items.slice(7)]} />

            <h3 className={s.miniHead}>Packing tips for students</h3>
            <div className={s.miniGrid}>
              {tips.map(({ Icon, t: title, b, anim }, i) => (
                <div className={`${s.miniCard} ${r.card} ${r.tip}`} style={idx(i)} key={title}>
                  <span className={`${s.miniIcon} ${r.tipIcon} ${r[anim]}`} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>{title}</b>
                    <small>{b}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.movingTip}>
              <Info aria-hidden="true" />
              <p>
                <b>Rough guide:</b> about 25 sq ft (Estimated) of shared space holds 10–15 boxes, suitcases, bags and
                bedding. A full room with bed, desk and wardrobe needs more — we confirm it in your free quote.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CAMPUSES */}
        <section className={`${s.section} ${s.wrap}`} id="campuses" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Near your campus</span>
                <h2>
                  Pickup from student areas <em>across Dubai.</em>
                </h2>
              </div>
              <p>We collect from accommodation near every major Dubai university.</p>
            </div>
            <Marquee rows={[universities, areas]} />
          </Reveal>
        </section>

        {/* REVIEWS */}
        <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Testimonials</span>
                <h2>
                  What students <em>say.</em>
                </h2>
              </div>
            </div>
            {/* extra bottom room so the hover shadow isn't clipped by the scroller */}
            <div className={`${s.revTrack} ${r.revFill}`} style={{ paddingTop: 14, paddingBottom: 56, marginBottom: -30 }}>
              {reviews.map((rv, i) => (
                <div className={`${s.revCard} ${r.card}`} style={idx(i)} key={rv.name}>
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
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Good to know</span>
                <h2>
                  Student storage <em>questions.</em>
                </h2>
              </div>
              <p>
                More answers? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
              </p>
            </div>
            <FaqAccordion items={faqs} />
          </Reveal>
        </section>

        {/* EXPLORE */}
        <section className={`${s.section} ${s.wrap}`} id="explore" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Explore</span>
                <h2>
                  More in <em>personal storage.</em>
                </h2>
              </div>
            </div>
            <div className={s.miniGrid}>
              {explore.map(({ Icon, t: title, b, href }, i) => (
                <Link className={`${s.miniCard} ${s.miniLink} ${r.card}`} style={idx(i)} href={href} key={href}>
                  <span className={s.miniIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <b>{title}</b>
                    <small>{b}</small>
                  </div>
                  <span className={s.miniArrow} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <CtaBand
            title="Store smart this semester break."
            blurb="Don't haul everything home or pay for an empty room. Free student quote — we collect from your accommodation."
            ctaLabel="Get a Student Quote"
            whatsAppLabel="WhatsApp Us"
            callLabel="Call Now"
          />
        </Reveal>

        <LandingConnect />
      </div>
    </>
  )
}
