import type { Metadata } from "next"
import Link from "next/link"
import { Home, Truck, Lock, Calendar, Boxes, Headphones, Package, Sofa, CheckCircle2, GraduationCap } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust, SplitHero } from "@/components/landing/landing-top"
import { LandingSteps } from "@/components/landing/landing-services"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
import { UspRail } from "@/components/landing/usp-rail"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import { personalFaqs } from "./faqs"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  // `absolute` so the root template does not append a second brand; the full
  // string stays inside Google's ~60-character display limit.
  // The spec lists this URL twice; the later entry wins, as it did for
  // /document-storage in ee17df0.
  title: { absolute: "Personal Storage Dubai | Affordable Household storage Units" },
  // Spec wording with two corrections. It reads "starting AED 24/mo", a figure
  // published nowhere else on the site — the only price we publish is
  // our own price (the site no longer publishes pricing) — and "free pickup & delivery", which df0df39 / 166d65a
  // removed sitewide because transport is charged.
  description:
    "Affordable personal storage in Dubai. Secure storage space with door-to-door pickup & delivery — pay only for the space you use.",
  keywords:
    "Personal storage Dubai, Household storage, Home storage Dubai, Furniture storage, Self storage Dubai, Decluttering storage, Student storage Dubai, Seasonal storage, Short term storage, Long term storage, Luggage storage Dubai, Apartment storage, Storage with pickup, SafeStorage personal",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/personal-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/personal-storage-dubai",
  },
}

const features = [
  { Icon: Home, title: "Home Decluttering", body: "Free up space by storing seasonal items, extra furniture and belongings." },
  { Icon: Truck, title: "Door-to-door Service", body: "We collect and deliver your items door-to-door." },
  { Icon: Lock, title: "Secure & Safe", body: "24/7 surveillance in a clean, secure facility." },
  { Icon: Calendar, title: "Flexible Duration", body: "Store for as long as you need — no long-term commitment." },
  { Icon: Boxes, title: "Any Item, Any Size", body: "From boxes and documents to furniture and appliances." },
  { Icon: Headphones, title: "Easy Support", body: "A friendly team ready to help at every step." },
]

const useCases = [
  { Icon: Truck, title: "Moving & Relocation", body: "Between leases or renovating? We collect from the old home and deliver to the new one." },
  { Icon: Home, title: "Downsizing", body: "Keep your cherished items safe when moving to a smaller space." },
  { Icon: GraduationCap, title: "Student Storage", body: "For summer breaks or a semester abroad." },
  { Icon: Calendar, title: "Seasonal Items", body: "Winter clothes, decorations and sports gear, stored until you need them." },
]

const items = [
  "Sofas and armchairs", "Beds and mattresses", "Dining tables and chairs",
  "Wardrobes and cabinets", "Appliances", "Clothing and seasonal wear",
  "Suitcases and travel bags", "Books and personal items", "Holiday decorations",
  "Children's toys and baby gear", "Sports equipment and bicycles", "Electronics and gadgets",
  "Artwork and sentimental items", "Rugs and soft furnishings", "Garden and outdoor furniture",
]

const sizes = [
  { Icon: Package, size: "25–50 sq ft", label: "Small", fits: "10–20 boxes or a few household items" },
  { Icon: Sofa, size: "50–100 sq ft", label: "Medium", fits: "A 1–2 bedroom apartment's contents" },
  { Icon: Home, size: "100–200 sq ft", label: "Large", fits: "A full 3-bedroom apartment" },
]

const personalStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Household Storage Dubai',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup from your door. Pay only for the space you use.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/personal-storage-dubai',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Personal Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/personal-storage-dubai#webpage',
    name: 'Personal Household Storage Dubai | Furniture & Boxes',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup. Pay only for the space you use.',
    url: 'https://safestorage.ae/personal-storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: personalFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function PersonalStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Personal Storage Dubai" },
        ]}
      />
      <SchemaScript schema={personalStorageSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* H1 carries the target term "Personal Storage Dubai". */}
        <SplitHero
          eyebrow="Personal storage Dubai"
          title="Personal Storage in Dubai –"
          titleAccent="Furniture, Boxes & More"
          blurb="Affordable storage for your home and belongings, with door-to-door pickup and no hidden fees."
          image="/landing/svc-household.jpg"
          imagePosition="center 40%"
          ctaLabel="Get Your Free Quote"
        />

        <LandingTrust />

        <LandingSteps />

        {/* WHY */}
        <section className={s.wrap} id="why">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Why SafeStorage</span>
                <h2>
                  Storage built around <br className={s.mBreak} />
                  <em>your home.</em>
                </h2>
              </div>
            </div>
            <FeatScroller>
              {features.map(({ Icon, title, body }) => (
                <div className={s.feat} key={title}>
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
        </section>

        {/* WHO WE HELP */}
        <section className={`${s.section} ${s.wrap}`} id="who-we-help">
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Who we help</span>
                <h2>
                  Perfect for <em>every situation.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  Moving, downsizing, or just need extra space — we&apos;ve got you covered.
                </p>
              </div>
            }
          >
            {useCases.map(({ Icon, title, body }, i) => (
              <article className={s.usp} key={title}>
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
        </section>

        {/* WHAT YOU CAN STORE + PRICING */}
        <section className={`${s.section} ${s.wrap}`} id="pricing" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Pricing</span>
              <h2>
                Pay only for <em>the space you use.</em>
              </h2>
            </div>
            <p>From a few boxes to a full apartment — get a free, itemised quote for exactly what you store.</p>
          </div>

          <div className={s.miniGrid}>
            {sizes.map(({ Icon, size, label, fits }) => (
              <div className={s.miniCard} key={size}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>
                    {size} · {label} <span style={{ fontWeight: 600, fontSize: 12, color: "var(--muted)" }}>(Estimated)</span>
                  </b>
                  <small>{fits}</small>
                </div>
              </div>
            ))}
          </div>

          <div className={s.miniFacts}>
            <span><CheckCircle2 aria-hidden="true" /> No setup fees</span>
            <span><CheckCircle2 aria-hidden="true" /> Door-to-door service</span>
            <span><CheckCircle2 aria-hidden="true" /> 24/7 security monitoring</span>
            <span><CheckCircle2 aria-hidden="true" /> Climate controlled as standard</span>
          </div>

          <h3 className={s.miniHead}>What Dubai residents typically store</h3>
          <div className={s.areaMarquees}>
            {[items.slice(0, 8), items.slice(8)].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                      {row.map((item) => (
                        <li key={item}>
                          <span className={s.chip}>
                            <CheckCircle2 size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px", color: "var(--accent)" }} />
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <LandingReviews />

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                FAQs: personal storage <em>in Dubai.</em>
              </h2>
            </div>
            <p>
              Have more questions? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={personalFaqs} />
        </section>

        <CtaBand
          title="Ready to Free Up Space at Home?"
          blurb="Join the 100,000+ customers who trust SafeStorage worldwide. Get your personalized quote in just 2 minutes."
          ctaLabel="Get Your Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
