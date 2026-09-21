import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  FileText, Truck, ClipboardCheck, Send, CalendarX, Ruler, Tags, ShieldCheck, Store,
  ShoppingCart, Instagram, Sparkles, Ship, Gift, Layers, Briefcase, Warehouse, Boxes, Package, MapPin,
  AlertTriangle, ShoppingBag,
  X, AlertCircle, Check,
  FileSignature, Hammer, Lock, PackageX,
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
  title: { absolute: "E-commerce Storage & Fulfilment Dubai | SafeStorage UAE" },
  description:
    "Flexible e-commerce storage in Dubai for Amazon & noon sellers. Stock collected, counted in and sent out on request — no warehouse lease, pay only for the space you use.",
  keywords: "E-commerce storage Dubai, Inventory management Dubai, Warehouse for rent Dubai, Small business storage, Bulk storage Dubai, Inventory tracking UAE, Scalable business storage, SafeStorage fulfilment",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/business-storage-dubai/ecommerce-fulfilment",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/business-storage-dubai/ecommerce-fulfilment" },
}

const steps = [
  { Icon: FileText, when: "Day 1", t: "Free quote", b: "Tell us your products and rough volume — same-day quote." },
  { Icon: Truck, when: "Collection", t: "We collect", b: "From your home, supplier or current store." },
  { Icon: ClipboardCheck, when: "Intake", t: "Counted in", b: "Logged against your own SKU list; mismatches flagged." },
  { Icon: Send, when: "Every day", t: "Sent out on request", b: "Same day if you ask before 12 PM." },
]

const why = [
  { Icon: CalendarX, title: "No warehouse lease", body: "No yearly lease, cheques, DEWA deposit or fit-out. Start in days, not months." },
  { Icon: Ruler, title: "Pay for the space you use", body: "Flexible storage: your stock grows or shrinks, and so does the space you pay for." },
  { Icon: Truck, title: "Door-to-door collection", body: "We pick up from your supplier, home or old store anywhere in Dubai." },
  { Icon: Tags, title: "Your SKUs, your references", body: "Stock is counted in and released against the codes your own system uses." },
  { Icon: ShieldCheck, title: "Clean, shared storage", body: "Indoor, dust-protected shared space with CCTV and logged access control." },
  { Icon: Store, title: "Visit when you need", body: "Check or pick stock yourself, 8 AM–8 PM, seven days a week." },
]

// Storage vs warehouse lease — two versus cards.
// `tone` = [icon colour, tile tint] — softer than the SafeStorage tiles
const leaseHassles = [
  { Icon: FileSignature, t: "Multi-year lease", b: "Locked in before you're ready", partly: false, tone: ["#e11d48", "#ffe4e9"] },
  { Icon: Hammer, t: "Fit-out & DEWA deposit", b: "Build and connect it yourself", partly: false, tone: ["#d97706", "#fef3c7"] },
  { Icon: Warehouse, t: "Pay for the whole floor", b: "Even the half you don't use", partly: false, tone: ["#4f46e5", "#e0e7ff"] },
  { Icon: Lock, t: "Fixed size in peak season", b: "Partly flexible, often not", partly: true, tone: ["#7c3aed", "#ede9fe"] },
  { Icon: Truck, t: "You collect the stock", b: "Your van, your time", partly: false, tone: ["#ea580c", "#ffedd5"] },
  { Icon: PackageX, t: "You move stock out", b: "No release service", partly: false, tone: ["#0891b2", "#cffafe"] },
]

// SafeStorage side: text + green tick only (no icon tiles — owner's choice)
const storageWins = [
  { t: "No long lease", b: "Month to month, not years" },
  { t: "No fit-out or DEWA deposit", b: "Nothing to build or connect" },
  { t: "Pay only for space used", b: "Not a whole floor you half fill" },
  { t: "Scale for peak seasons", b: "Ramadan, White Friday, DSF" },
  { t: "Door-to-door collection", b: "We fetch stock from suppliers" },
  { t: "Stock delivered out", b: "Released to you on request" },
]

const sellers = [
  { Icon: ShoppingCart, title: "Amazon & noon sellers", body: "Stock for FBM orders and FBA replenishment runs, released when you need it." },
  { Icon: Instagram, title: "Instagram & TikTok shops", body: "Get the boxes out of your home — keep a few days' stock to hand, the rest with us." },
  { Icon: Sparkles, title: "D2C brands", body: "Launch stock and seasonal collections held safely until they go on sale." },
  { Icon: Ship, title: "Importers & distributors", body: "Shipments counted in on arrival and released in batches to your buyers." },
  { Icon: Gift, title: "Subscription boxes", body: "Bulk components stored and sent out for each packing cycle." },
  { Icon: Layers, title: "Multi-channel sellers", body: "One stock location serving every marketplace you sell on." },
]

// Categories and items as published on the previous version of this page.
// Emoji icons as on the old page (owner's choice for this section).
const categories = [
  { emoji: "👗", title: "Fashion & Apparel", items: ["Clothing and accessories", "Bags and footwear", "Seasonal collections", "Sample inventory", "Return stock"] },
  { emoji: "📱", title: "Electronics & Gadgets", items: ["Consumer electronics", "Accessories and cables", "Smart home devices", "Phone cases and peripherals", "Refurbished devices"] },
  { emoji: "🏠", title: "Home & Living", items: ["Home décor", "Kitchenware", "Bedding and linens", "Cleaning products", "Small appliances"] },
  { emoji: "💄", title: "Health & Beauty", items: ["Cosmetics and skincare", "Wellness products", "Fitness equipment", "Nutritional supplements", "Medical devices"] },
  { emoji: "📚", title: "Books & Media", items: ["Books and textbooks", "DVD/Blu-ray inventory", "Educational materials", "Print media stock", "Digital products packaged"] },
  { emoji: "⚽", title: "Sports & Outdoor", items: ["Sports equipment", "Outdoor gear", "Fitness accessories", "Water sports items", "Camping equipment"] },
]

// Testimonials already published on the site (homepage reviews and /testimonials).
const reviews = [
  { initials: "MT", name: "Mark Thompson", role: "E-commerce Business Owner", text: "Best storage solution in Dubai! We store our e-commerce inventory here. The flexible terms and easy access make managing stock so much easier. Highly recommend for small businesses!" },
  { initials: "FA", name: "Faisal Al Rashid", role: "Palm Jumeirah", text: "SafeStorage handled our company's warehouse clearance efficiently. We stored over 200 boxes of stock and office equipment, and the team was professional and fast. The indexing system made it easy to retrieve specific items. Great for businesses." },
  { initials: "PS", name: "Priya Sharma", role: "Jumeirah", text: "I used SafeStorage to store my office furniture when we downsized our team. The process was simple — they sent a consultant to assess the volume, gave me a transparent quote, and handled everything from packing to storage. Great value for money." },
  { initials: "FA", name: "Fatima Al-Rashid", role: "Apartment Resident, JLT", text: "Moving from JLT to Business Bay, I needed short-term storage. The team was incredibly professional, handled everything with care, and the pricing was transparent with no hidden fees!" },
  { initials: "JL", name: "Jennifer Lee", role: "Expat, Downtown Dubai", text: "I left Dubai for eight months and needed somewhere safe for my whole apartment. They packed everything, sent me the inventory, and delivered it all back the week I returned — not a single item missing or damaged." },
]

const faqs = [
  {
    q: "Can I send stock out every day for orders?",
    a: "Yes. Ask before 12 PM and your stock is delivered the same day; requests by 5 PM go out the next business day. High-volume sellers can set up a scheduled daily collection.",
  },
  {
    q: "Do you offer pick, pack and ship?",
    a: "Our standard service is storage with releases on request, not full per-order 3PL. You can also visit 8 AM–8 PM, seven days a week, to check or pick stock yourself.",
  },
  {
    q: "Can suppliers deliver stock straight to you?",
    a: "Yes, by prior arrangement. Tell us before the first delivery and we receive it during business hours and count it in against your SKU list.",
  },
  {
    q: "How do you keep track of my inventory?",
    a: "Stock is counted in and released against your own SKU references, and any mismatch is flagged at intake. Your own system — Shopify, a marketplace account or a spreadsheet — stays the master record.",
  },
  {
    q: "What if my stock grows quickly?",
    a: "You pay for the space you use, so more stock simply means more space — no new lease. Tell us ahead of peaks like White Friday and Ramadan so the space is ready.",
  },
  {
    q: "Which products can't be stored?",
    a: "Flammable, explosive, corrosive or other dangerous goods, and perishable food that needs cold storage. Not sure? Send the product sheet and we'll confirm before you book.",
  },
]

const explore = [
  { Icon: Briefcase, t: "Business storage Dubai", b: "All business storage services.", href: "/business-storage-dubai" },
  { Icon: Warehouse, t: "3PL services", b: "When full fulfilment is worth it.", href: "/business-storage-dubai/3pl-services" },
  { Icon: Boxes, t: "Inventory storage", b: "Stock counted and reconciled.", href: "/business-storage-dubai/inventory-storage" },
  { Icon: Package, t: "Pallet storage", b: "Palletised goods by the pallet.", href: "/business-storage-dubai/pallet-storage" },
  { Icon: ShoppingBag, t: "Retail stock storage", b: "Seasonal and overflow shop stock.", href: "/business-storage-dubai/retail-stock-storage" },
  { Icon: Warehouse, t: "Warehouse storage", b: "Warehouse space without the lease.", href: "/business-storage-dubai/warehouse-storage" },
  { Icon: MapPin, t: "Local self storage", b: "Storage near you across Dubai.", href: "/self-storage-dubai/local-self-storage" },
  { Icon: ClipboardCheck, t: "How it works", b: "From first call to delivery back.", href: "/how-it-works" },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-Commerce & Inventory Storage Dubai",
    description: "Flexible inventory and e-commerce storage in Dubai. No warehouse lease required — stock collected, counted in and sent out on request. Scale up or down as your business needs change.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/business-storage-dubai/ecommerce-fulfilment",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "E-Commerce Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/business-storage-dubai/ecommerce-fulfilment#webpage",
    name: "E-Commerce Storage Dubai — Flexible Inventory Storage",
    url: "https://safestorage.ae/business-storage-dubai/ecommerce-fulfilment",
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

export default function EcommerceStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Business Storage Dubai", href: "/business-storage-dubai" },
          { name: "E-commerce Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      {/* --cream override: this page's softer cream (#FAF7F0) */}
      <div
        className={`${s.page} ${sora.variable} ${manrope.variable}`}
        style={{ ["--cream" as string]: "#faf7f0" } as CSSProperties}
      >
        {/* wrapper only swaps the hero wash for a lighter one (see reveal.module.css) */}
        <div className={r.heroVivid}>
          <SplitHero
            eyebrow="E-commerce inventory storage"
            title="E-commerce Storage Dubai"
            titleAccent="that grows with you."
            blurb="Flexible inventory space for online sellers — no warehouse lease. Pay only for the space you use."
            image="/landing/svc-ecommerce-hero.webp"
            imagePosition="72% 40%"
            ctaLabel="Get a Business Quote"
          />
        </div>

        <LandingTrust />

        {/* PROCESS */}
        <section className={`${s.section} ${s.wrap}`} id="process">
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>How it works</span>
                <h2>
                  Supplier to customer, <em>no warehouse.</em>
                </h2>
              </div>
              <p>We hold your stock and send it out when orders come in — you focus on selling.</p>
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
                  <span className={s.howEyebrow}>Why sellers choose us</span>
                  <h2>
                    Built for growing <br className={s.mBreak} />
                    <em>online stores.</em>
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
                  Storage vs <em>Warehouse Lease</em>
                </h2>
              </div>
              <p>Why growing Dubai sellers hold stock with us before committing to a warehouse of their own.</p>
            </div>

            <CompareToggle>
              {/* WAREHOUSE LEASE */}
              <div className={`${c.card} ${c.them}`}>
                <div className={c.cardHead}>
                  <div>
                    <b>Warehouse</b>
                    <small>Lease</small>
                  </div>
                  <span className={c.pill}>6 hassles</span>
                </div>
                <ul className={c.list}>
                  {leaseHassles.map(({ Icon, t: title, b, partly, tone }) => (
                    <li className={c.row} key={title}>
                      <div
                        className={c.ic}
                        style={{ color: tone[0], background: tone[1] }}
                        aria-hidden="true"
                      >
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
                Start in days — no lease to sign.
                <span>Pay only for the space you use.</span>
              </p>
              <Link className={`${s.btn} ${s.btnAccent} ${c.stripBtn}`} href="/get-quote">
                Get a free quote →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* WHAT E-COMMERCE BUSINESSES STORE */}
        <section className={`${s.section} ${s.wrap}`} id="products" style={{ paddingTop: 0 }}>
          <Reveal>
            {/* all 6 categories in one swipeable row (owner's choice: less height) */}
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>What you can store</span>
                  <h2>
                    What E-Commerce Businesses <em>Store with Us</em>
                  </h2>
                  <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                    Boxed or on pallets, one SKU or hundreds — tell us what you sell and we&apos;ll confirm.
                  </p>
                </div>
              }
            >
              {categories.map(({ emoji, title, items }, i) => (
                <article className={`${s.usp} ${r.card}`} style={idx(i)} key={title}>
                  <span className={r.emoji} aria-hidden="true">
                    {emoji}
                  </span>
                  <h3>{title}</h3>
                  <ul className={r.itemList}>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
            <div className={s.movingTip}>
              <AlertTriangle aria-hidden="true" />
              <p>
                <b>Not accepted:</b> flammable, explosive, corrosive or other dangerous goods, and perishable food that needs
                cold storage. Unsure about a product? Send us its product sheet first.
              </p>
            </div>
          </Reveal>
        </section>

        {/* WHO IT'S FOR */}
        <section className={`${s.section} ${s.wrap}`} id="sellers" style={{ paddingTop: 0 }}>
          <Reveal>
            <UspRail
              head={
                <div className={s.uspHead}>
                  <span className={s.howEyebrow}>Who it&apos;s for</span>
                  <h2>
                    Storage for every <em>kind of seller.</em>
                  </h2>
                </div>
              }
            >
              {sellers.map(({ Icon, title, body }, i) => (
                <article className={`${s.usp} ${r.card}`} style={idx(i)} key={title}>
                  <span className={s.uspNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={s.uspIcon} aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </UspRail>
            <p className={s.scrollHint}>Swipe for more →</p>
          </Reveal>
        </section>

        {/* REVIEWS */}
        <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className={s.howHead}>
              <div>
                <span className={s.howEyebrow}>Testimonials</span>
                <h2>
                  What our <em>customers say.</em>
                </h2>
              </div>
            </div>
            {/* extra bottom room so the hover shadow isn't clipped by the scroller */}
            <div className={s.revTrack} style={{ paddingTop: 14, paddingBottom: 56, marginBottom: -30 }}>
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
                  E-commerce storage <em>questions.</em>
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
                  More in <em>business storage.</em>
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
            title="Start in days — no lease to sign."
            blurb="Flexible storage for your e-commerce business. Pay only for the space you use."
            ctaLabel="Get a free quote"
            callLabel="Call: 050-577-3388"
          />
        </Reveal>

        <LandingConnect />
      </div>
    </>
  )
}
