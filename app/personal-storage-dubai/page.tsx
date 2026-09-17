import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ShieldCheck, Truck, Clock, Package, Headphones, Star, Users, Sofa, ArrowRight, Boxes, Calendar, Lock } from "lucide-react"
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
  // PRICE_PER_SQFT_AED — and "free pickup & delivery", which df0df39 / 166d65a
  // removed sitewide because transport is charged.
  description:
    "Affordable personal storage in Dubai from 12 AED/sqft. Secure storage units with door-to-door pickup & delivery.",
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
  {
    icon: Home,
    title: "Home Decluttering",
    description: "Free up space at home by storing seasonal items, extra furniture, and belongings",
  },
  {
    icon: Truck,
    title: "Door-to-door Service",
    description: "We collect and deliver your items door-to-door",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "24/7 security surveillance with clean, secure facilities for your peace of mind",
  },
  {
    icon: Calendar,
    title: "Flexible Duration",
    description: "Store for as long as you need - no long-term commitments required",
  },
  {
    icon: Boxes,
    title: "Any Item, Any Size",
    description: "From boxes and documents to furniture and appliances - we store it all",
  },
  {
    icon: Headphones,
    title: "Easy Support",
    description: "Friendly customer service team ready to help you every step of the way",
  },
]

const useCases = [
  {
    title: "Moving & Relocation",
    description: "Store your belongings temporarily during home transitions or renovations",
    icon: Truck,
  },
  {
    title: "Downsizing",
    description: "Keep your cherished items safe when moving to a smaller space",
    icon: Home,
  },
  {
    title: "Student Storage",
    description: "Perfect for students during summer breaks or semester abroad programs",
    icon: Package,
  },
  {
    title: "Seasonal Items",
    description: "Store winter clothes, holiday decorations, and sports equipment until needed",
    icon: Calendar,
  },
]

const personalStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Household Storage Dubai',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup from your door. Personal storage from 12 AED / sqft.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/personal-storage-dubai',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Personal Storage',
    offers: { '@type': 'Offer', priceCurrency: 'AED', price: '12' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/personal-storage-dubai#webpage',
    name: 'Personal Household Storage Dubai | Furniture & Boxes from 12 AED / sqft',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup. Personal storage from 12 AED / sqft.',
    url: 'https://safestorage.ae/personal-storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
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
      {/* H1 must carry the target term. It previously read "Personal Storage
          Made Simple" — no "Dubai", so the page's strongest on-page signal did
          not match the query it is trying to rank for. */}
      <PageHero
        eyebrow="Serving Globally Since 2015"
        title="Personal Storage Dubai —"
        titleAccent="Door-to-Door"
        blurb="Affordable storage for your home, furniture and personal belongings, from 12 AED / sqft. Door-to-Door service, no hidden fees, cancel anytime."
        image="/landing/svc-household.jpg"
        imagePosition="center 40%"
        stats={[
          { Icon: Star, label: "4.9/5 (6,700+ reviews worldwide)" },
          { Icon: Users, label: "Trusted by 100,000+ customers worldwide" },
          { Icon: Lock, label: "24/7 CCTV Monitoring" },
        ]}
        ctaLabel="Get Your Free Quote in 2 Minutes"
      />

      <LandingTrust />

      {/* WHY */}
      <section className={s.wrap} id="why" style={{ paddingTop: 34 }}>
        <div className={s.darkBand}>
          <span className={s.eyebrow}>Why choose SafeStorage</span>
          <h2>
            Storage Built Around <em>Your Home</em>
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
        </div>
      </section>

      {/* USE CASES */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Who we help</span>
          <h2>Perfect For Every Situation</h2>
          <p>Whether you&apos;re moving, downsizing, or just need extra space - we&apos;ve got you covered</p>
        </div>
        <div className={s.stepGrid}>
          {useCases.map((useCase) => (
            <div className={`${s.panel} ${s.panelHover}`} key={useCase.title}>
              <div className={s.panelIcon} aria-hidden="true">
                <useCase.icon strokeWidth={1.9} />
              </div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={`${s.section} ${s.wrap}`} id="how-it-works" style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>How it works</span>
          <h2>Store Your Items in 3 Simple Steps</h2>
        </div>
        <div className={s.trio}>
          {[
            { t: "Get a Quote", b: "Tell us what you want to store and get an instant price estimate online" },
            { t: "Door-to-door Pickup", b: "We'll collect your items from your doorstep at a time that suits you" },
            { t: "Relax", b: "Your items are stored safely. Request delivery anytime you need them back" },
          ].map((step, i) => (
            <div className={s.step} key={step.t}>
              <span className={s.stepNum} aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.t}</h3>
              <p>{step.b}</p>
            </div>
          ))}
        </div>
      </section>

      <LandingReviews />

      {/* PRICING */}
      <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Pricing</span>
          <h2>
            Starting from Just <em>12 AED / sqft</em>
          </h2>
          <p>No setup fees • Door-to-Door service • Cancel anytime</p>
        </div>
        <div className={s.stats} style={{ paddingTop: 0 }}>
          <div className={s.stat}>
            <strong>24/7</strong>
            <span>Security Monitoring</span>
          </div>
          <div className={s.stat}>
            <strong>Door-to-Door</strong>
            <span>Pickup &amp; Delivery</span>
          </div>
          <div className={s.stat}>
            <strong>
              12 <i>AED</i>
            </strong>
            <span>Starting Price / sqft</span>
          </div>
          <div className={s.stat}>
            <strong>Climate Controlled</strong>
            <span>Standard on every booking</span>
          </div>
        </div>
        <div className={s.svcCta}>
          <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
            Get Your Free Quote Now →
          </Link>
        </div>
      </section>

      <CtaBand
        title="Ready to Free Up Space at Home?"
        blurb="Join the 100,000+ customers who trust SafeStorage worldwide. Get your personalized quote in just 2 minutes."
        ctaLabel="Get Your Free Quote"
      />

      {/* FAQ */}
      <section className={`${s.section} ${s.wrap}`} id="faq">
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Good to know</span>
          <h2>Personal Storage — Frequently Asked Questions</h2>
        </div>
        <FaqAccordion items={personalFaqs} />
      </section>

      {/* HOUSEHOLD STORAGE */}
      <section className={`${s.section} ${s.wrap}`}>
        <div className={s.sectionHead}>
          <span className={s.eyebrow}>Household storage</span>
          <h2>
            Personal &amp; Household Storage in <em>Dubai</em>
          </h2>
          <p>
            Extra space at home without the cost of moving to a larger apartment — collected from your
            door and delivered back when you need it.
          </p>
        </div>

        <div className={s.duo}>
          <div className={`${s.panel} ${s.panelHover}`}>
            <div className={s.panelIcon} aria-hidden="true">
              <Truck strokeWidth={1.9} />
            </div>
            <h3>Between apartment leases</h3>
            <p>
              Dubai moves often leave a gap between one lease ending and the next starting. We collect from
              the old apartment, store everything securely, and deliver it to the new one when you are ready
              — no storing with friends, no replacing furniture you could not keep.
            </p>
          </div>
          <div className={`${s.panel} ${s.panelHover}`}>
            <div className={s.panelIcon} aria-hidden="true">
              <Calendar strokeWidth={1.9} />
            </div>
            <h3>Seasonal &amp; long-term</h3>
            <p>
              Holiday decorations, winter clothing, sports gear, outgrown toys — things you use part of the
              year but cannot throw away. Store a few boxes for far less than upgrading your apartment, and
              we deliver them back within 24–48 hours.
            </p>
          </div>
        </div>

        <h3 className={s.chipsHead}>What Dubai residents typically store</h3>
        <div className={s.chips}>
          {[
            "Sofas and armchairs", "Beds and mattresses", "Dining tables and chairs",
            "Wardrobes and cabinets", "Appliances", "Clothing and seasonal wear",
            "Suitcases and travel bags", "Books and personal items", "Holiday decorations",
            "Children's toys and baby gear", "Sports equipment and bicycles", "Electronics and gadgets",
            "Artwork and sentimental items", "Rugs and soft furnishings", "Garden and outdoor furniture",
          ].map((item) => (
            <span className={`${s.chip} ${s.chipMuted}`} key={item}>
              {item}
            </span>
          ))}
        </div>

        <h3 className={s.chipsHead}>Personal storage pricing</h3>
        <p className={s.chipsNote}>From 12 AED / sqft across every unit size.</p>
        <div className={s.trio}>
          {[
            { size: "25–50 sq ft", label: "Small", fits: "10–20 boxes or a small collection of household items" },
            { size: "50–100 sq ft", label: "Medium", fits: "A 1–2 bedroom apartment's contents" },
            { size: "100–200 sq ft", label: "Large", fits: "A full 3-bedroom apartment" },
          ].map((u) => (
            <div className={`${s.panel} ${s.panelHover}`} key={u.size}>
              <strong className={s.panelSize}>{u.size}</strong>
              <h3>{u.label}</h3>
              <p>{u.fits}</p>
            </div>
          ))}
        </div>
      </section>

      <LandingConnect />
    </div>

    </>
  )
}
