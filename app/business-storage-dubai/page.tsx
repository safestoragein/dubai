import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, Truck, Clock, FileBox, Headphones, Star, Users, Award, ArrowRight } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import PageHero, { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingConnect } from "@/components/landing/landing-connect"
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
  {
    icon: FileBox,
    title: "Document Archiving",
    description: "Secure storage for business records and important documents",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock surveillance and access control",
  },
  {
    icon: Truck,
    title: "Door-to-door Service",
    description: "We collect and deliver your items at your convenience",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Monthly contracts with no long-term commitments",
  },
  {
    icon: Building2,
    title: "Secure Enclosed Units",
    description: "Clean, dust-protected indoor units to keep your assets safe",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your business needs",
  },
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
    offers: { '@type': 'Offer', priceCurrency: 'AED', price: '12' },
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
      <PageHero
        eyebrow="Serving Globally Since 2015"
        title="Business Storage"
        titleAccent="Dubai"
        blurb="Secure, flexible storage for your business documents, inventory, and equipment. Focus on growing your business while we handle the storage."
        image="/landing/svc-business.jpg"
        imagePosition="center 55%"
        stats={[
          { Icon: Star, label: "4.9/5 (6,700+ reviews worldwide)" },
          { Icon: Users, label: "Trusted by 100,000+ customers worldwide" },
          { Icon: Award, label: "10+ Years Global Experience" },
        ]}
        ctaLabel="Get Your Free Quote in 2 Minutes"
      />

      <LandingTrust />

      {/* WHY */}
      <section className={s.wrap} id="why" style={{ paddingTop: 34 }}>
        <div className={s.darkBand}>
          <span className={s.eyebrow}>Why choose SafeStorage</span>
          <h2>
            Why Choose SafeStorage for <em>Business?</em>
          </h2>
          <div className={`${s.featGrid} ${s.featGrid3}`}>
            {features.map((feature) => (
              <div className={s.feat} key={feature.title}>
                <div className={s.featIcon} aria-hidden="true">
                  <feature.icon strokeWidth={2} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <p className={s.bandNote}>
            Trusted by businesses across Dubai for secure and reliable storage solutions
          </p>
        </div>
      </section>

      <LandingReviews />

      <CtaBand
        title="Ready to Simplify Your Business Storage?"
        blurb="Join the 100,000+ customers who trust SafeStorage worldwide. Get a customized quote in just 2 minutes."
        ctaLabel="Get Your Free Quote"
      />

      {/* WHAT WE STORE FOR BUSINESSES */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>What we store</span>
          <h2>
            Business Storage for <em>Dubai Companies</em>
          </h2>
          <p>
            A flexible alternative to a warehouse lease — pay for the space you actually use, month by
            month, and keep it accessible on demand.
          </p>
        </div>

        <div className={s.trio}>
          <div className={`${s.panel} ${s.panelHover}`}>
            <div className={s.panelIcon} aria-hidden="true">
              <Building2 strokeWidth={1.9} />
            </div>
            <h3>Office clearance &amp; renovation</h3>
            <p>
              Same-day or next-day pickups for surplus furniture, IT equipment and fixtures. We dismantle,
              wrap and transport, then return it floor by floor to match your fit-out schedule.
            </p>
          </div>
          <div className={`${s.panel} ${s.panelHover}`}>
            <div className={s.panelIcon} aria-hidden="true">
              <Truck strokeWidth={1.9} />
            </div>
            <h3>Retail &amp; seasonal stock</h3>
            <p>
              Scale up for Ramadan, DSF, White Friday and back-to-school, then scale back. Same-day delivery
              to your store or mall loading bay when you need restocking.
            </p>
          </div>
          <div className={`${s.panel} ${s.panelHover}`}>
            <div className={s.panelIcon} aria-hidden="true">
              <FileBox strokeWidth={1.9} />
            </div>
            <h3>Inventory overflow</h3>
            <p>
              More stock than your space allows, but not enough to justify a warehouse. No minimum lease,
              no DEWA connection, no fit-out cost — increase and reduce as demand moves.
            </p>
          </div>
        </div>

        <h3 className={s.chipsHead}>What every business plan includes</h3>
        <div className={s.duo} style={{ marginTop: 20 }}>
          <div className={s.panel}>
            <ul className={s.checkList} style={{ marginTop: 0 }}>
              <li>
                <b>No minimum contract</b> — scale up or down month to month
              </li>
              <li>
                <b>Business account manager</b> — one contact for pickups and deliveries
              </li>
              <li>
                <b>Bulk discounts</b> — multi-unit bookings and annual prepayments
              </li>
            </ul>
          </div>
          <div className={s.panel}>
            <ul className={s.checkList} style={{ marginTop: 0 }}>
              <li>
                <b>Document archiving</b> — compliant records storage as an add-on
              </li>
              <li>
                <b>Door-to-door service</b> — available across Dubai
              </li>
              <li>
                <b>From 12 AED / sqft</b> — 50 to 300+ sq ft units
              </li>
            </ul>
          </div>
        </div>

        <h3 className={s.chipsHead}>Industries we serve in Dubai</h3>
        <div className={s.chips}>
          {[
            "Retail and fashion brands", "E-commerce and online sellers", "Food and beverage distributors",
            "Technology and electronics", "Healthcare and pharmaceutical", "Construction and engineering",
            "Event management", "Real estate and property", "Media and production",
          ].map((industry) => (
            <span className={`${s.chip} ${s.chipMuted}`} key={industry}>
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${s.section} ${s.wrap}`} id="faq">
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Good to know</span>
          <h2>Frequently Asked Questions — Business Storage Dubai</h2>
        </div>
        <FaqAccordion items={businessFaqs} />
      </section>

      <LandingConnect />
    </div>

    </>
  )
}
