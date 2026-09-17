import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2, ShieldCheck, Truck, Clock, FileBox, Headphones, Package, Store, Boxes, UserCheck, Tags, CheckCircle2,
} from "lucide-react"
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
import { businessFaqs } from "./faqs"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: { absolute: "Business Storage Solutions in Dubai & UAE | Safe Storage" },
  description:
    "Professional business storage in Dubai. Secure units, flexible plans & reliable service for inventory, equipment & documents. Protect your assets.",
  keywords:
    "Business Storage Facilities, Business Storage Solutions, Commercial Storage Dubai, Self Storage, Storage in Dubai, Business Storage Dubai, Office Storage Solutions Dubai, Warehouse Storage For Companies Dubai, Corporate Storage Unit Rental Dubai, Storage For Business Inventory Dubai, Affordable Business Storage Dubai",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/business-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/business-storage-dubai",
  },
}

const features = [
  { Icon: FileBox, title: "Document Archiving", body: "Secure storage for business records and important documents." },
  { Icon: ShieldCheck, title: "24/7 Security", body: "Round-the-clock surveillance and access control." },
  { Icon: Truck, title: "Door-to-door Service", body: "We collect and deliver your items at your convenience." },
  { Icon: Clock, title: "Flexible Terms", body: "Monthly contracts with no long-term commitments." },
  { Icon: Building2, title: "Clean, Secure Space", body: "Dust-protected indoor storage that keeps your assets safe." },
  { Icon: Headphones, title: "Dedicated Support", body: "A personal account manager for your business needs." },
]

const useCases = [
  { Icon: Building2, title: "Office clearance & renovation", body: "Same-day or next-day pickups for furniture, IT and fixtures — returned to match your fit-out schedule." },
  { Icon: Store, title: "Retail & seasonal stock", body: "Scale up for Ramadan, DSF and White Friday, then scale back. Same-day restocking to your store." },
  { Icon: Boxes, title: "Inventory overflow", body: "More stock than your space allows — no lease, no DEWA, no fit-out. Grow and shrink with demand." },
]

const includes = [
  { Icon: Clock, t: "No minimum contract", b: "Scale up or down month to month." },
  { Icon: UserCheck, t: "Account manager", b: "One contact for pickups and deliveries." },
  { Icon: Tags, t: "Bulk discounts", b: "Multi-space bookings and annual prepayments." },
  { Icon: FileBox, t: "Document archiving", b: "Compliant records storage as an add-on." },
  { Icon: Truck, t: "Door-to-door service", b: "Available across Dubai." },
  { Icon: Package, t: "Pay per sq ft", b: "Only for the space you use." },
]

const industries = [
  "Retail and fashion brands", "E-commerce and online sellers", "Food and beverage distributors",
  "Technology and electronics", "Healthcare and pharmaceutical", "Construction and engineering",
  "Event management", "Real estate and property", "Media and production",
]

const businessStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Storage Dubai',
    description: 'Business storage solutions for Dubai companies — store excess inventory, office equipment, trade show materials, and retail stock. Flexible monthly contracts, pickup & delivery on demand.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/business-storage-dubai',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Business Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/business-storage-dubai#webpage',
    name: 'Business Storage Dubai | Inventory & Office Storage for Companies',
    description: 'Flexible storage for Dubai businesses — inventory, office equipment & stock. Monthly contracts, on-demand delivery.',
    url: 'https://safestorage.ae/business-storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function BusinessStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Business Storage Dubai" },
        ]}
      />
      <SchemaScript schema={businessStorageSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <SplitHero
          eyebrow="Business storage Dubai"
          title="Business Storage in Dubai –"
          titleAccent="Stock, Equipment & Records"
          blurb="Secure, flexible storage for your business. Focus on growing while we handle the storage."
          image="/landing/svc-business.jpg"
          imagePosition="center 55%"
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
                  Why businesses choose <br className={s.mBreak} />
                  <em>SafeStorage.</em>
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

        {/* WHAT WE STORE */}
        <section className={`${s.section} ${s.wrap}`} id="what-we-store">
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>What we store</span>
                <h2>
                  Storage for <em>Dubai companies.</em>
                </h2>
                <p className={s.splitBlurb} style={{ marginBottom: 0 }}>
                  A flexible alternative to a warehouse lease — pay monthly for the space you use.
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

        {/* PLAN INCLUDES + INDUSTRIES */}
        <section className={`${s.section} ${s.wrap}`} id="includes" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Every plan</span>
              <h2>
                What every business <em>plan includes.</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {includes.map(({ Icon, t: title, b }) => (
              <div className={s.miniCard} key={title}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <small>{b}</small>
                </div>
              </div>
            ))}
          </div>

          <h3 className={s.miniHead}>Industries we serve in Dubai</h3>
          <div className={s.areaMarquees}>
            {[industries.slice(0, 5), industries.slice(5)].map((row, r) => (
              <div className={s.marquee} key={r}>
                <div className={`${s.marqueeTrack} ${r === 1 ? s.marqueeReverse : ""}`}>
                  {[0, 1].map((copy) => (
                    <ul className={`${s.marqueeGroup} ${s.chipGroup}`} aria-hidden={copy === 1 || undefined} key={copy}>
                      {row.map((industry) => (
                        <li key={industry}>
                          <span className={s.chip}>
                            <CheckCircle2 size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px", color: "var(--accent)" }} />
                            {industry}
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
                FAQs: business storage <em>in Dubai.</em>
              </h2>
            </div>
            <p>
              Have more questions? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={businessFaqs} />
        </section>

        <CtaBand
          title="Ready to Simplify Your Business Storage?"
          blurb="Join the 100,000+ customers who trust SafeStorage worldwide. Get a customized quote in just 2 minutes."
          ctaLabel="Get Your Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
