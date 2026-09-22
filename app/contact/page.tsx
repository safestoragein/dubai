import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, CheckCircle2 } from "lucide-react"
import ContactForm from "@/components/contact/contact-form"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import { ADDRESS_FULL, EMAIL, HOURS_DISPLAY, PHONE_DISPLAY } from "@/lib/company-facts"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import fx from "@/components/contact/contact-fx.module.css"

export const metadata: Metadata = {
  title: { absolute: "Contact The Self Storage Services in Dubai | Safe Storage" },
  description:
    "Get in touch for household, business, document & box storage in Dubai & UAE. Ask about quotes, locations, plans & 24/7 support.",
  keywords:
    "Contact Self Storage Solutions in Dubai, Secure Storage Booking Dubai, Contact Storage Services Dubai, Business Storage Inquiries Dubai, Document Safe Storage Dubai, storage solutions Dubai, secure storage contact UAE, self storage units Dubai, storage facility enquiry, 24/7 storage support Dubai, home storage",
  alternates: {
    canonical: "https://safestorage.ae/contact",
  },
  // Without its own openGraph block this page inherited the root layout's, which
  // sets url: "https://safestorage.ae" — so every share of /contact pointed back
  // at the homepage and contradicted this page's own canonical tag.
  openGraph: {
    url: "https://safestorage.ae/contact",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "Contact SafeStorage Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-cover-2026.jpg"],
  },
}

const contactFaqs = [
  {
    q: "How quickly will you respond to my query?",
    a: "Within 15 minutes during business hours. Phone calls and WhatsApp messages are answered straight away during operating hours.",
  },
  {
    q: "Can I visit the storage facility?",
    a: "Yes. Call ahead on +971 50 577 3388 to schedule a visit so a consultant is available to show you around.",
  },
  {
    q: "What information do I need to provide to get a quote?",
    a: "What you need to store, roughly how long, and your pickup location in Dubai. Photos on WhatsApp help for bulk or unusual items.",
  },
  {
    q: "Do you have customer support in English and Arabic?",
    a: "Yes. Our team supports customers in both English and Arabic.",
  },
  {
    q: "What areas of Dubai do you serve?",
    a: "All of Dubai door to door — from Palm Jumeirah and Dubai Marina to Deira, Mirdif and Dubai Investment Park — plus Sharjah, Ajman and Abu Dhabi.",
  },
  {
    q: "How do I get started?",
    a: "Call, WhatsApp or send the form. A consultant confirms what you need, gives you a clear quote and books a pickup — usually within 24 hours.",
  },
]

const channels = [
  { e: "📞", t: "Call us", b: PHONE_DISPLAY, href: env.PHONE_LINK },
  { e: "💬", t: "WhatsApp", b: "Send photos, get a quote fast", href: env.WHATSAPP_LINK, external: true },
  { e: "✉️", t: "Email", b: EMAIL, href: `mailto:${EMAIL}` },
  { e: "📍", t: "Visit us", b: "DIP-1, Dubai — call ahead", href: "https://maps.app.goo.gl/eimPkShrQADHTq3N7", external: true },
]

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://safestorage.ae/contact#webpage",
    name: "Contact SafeStorage Dubai",
    description: "Contact SafeStorage Dubai for storage solutions. Call +971505773388, email support@safestorage.ae, or get a free quote online.",
    url: "https://safestorage.ae/contact",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    mainEntity: { "@id": "https://safestorage.ae/#organization" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function Contact() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />
      <SchemaScript schema={contactSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right (owner, 2026-09-22) */}
        <section className={`${s.hero} ${s.wrap} ${p.split2} ${fx.tightHead}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Contact us</span>
              <h1>
                Contact SafeStorage Dubai <br className={s.mBreakDesk} />
                <em>We Reply in 15 Minutes</em>
              </h1>
              <p>A free quote, storage advice or a quick question — call, WhatsApp or send us a message.</p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call: {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1672 / 941" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/contact-photo.webp"
                alt="A SafeStorage Dubai consultant helping a customer at the front desk"
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* WAYS TO REACH US */}
        <section className={`${s.section} ${s.wrap}`} id="reach-us" style={{ paddingBottom: 30 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Get in touch</span>
              <h2>
                How to <em>reach us.</em>
              </h2>
            </div>
            <p>{HOURS_DISPLAY}. Pick whichever is easiest for you.</p>
          </div>
          <HomeReveal className={`${s.miniGrid} ${fx.channels}`}>
            {channels.map(({ e, t: title, b, href, external }, i) => (
              <a
                className={`${s.miniCard} ${s.miniLink}`}
                href={href}
                key={title}
                style={{ ["--i"]: i } as CSSProperties}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={`${p.bigEmoji} ${fx.rowEmoji}`} aria-hidden="true">
                  {e}
                </span>
                <div>
                  <b>{title}</b>
                  <small>{b}</small>
                </div>
                <span className={s.miniArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </HomeReveal>
        </section>

        <LandingTrust />

        {/* MESSAGE + MAP */}
        <section className={`${s.section} ${s.wrap}`} id="message">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Send a message</span>
              <h2>
                Prefer to write? <em>Send us a message.</em>
              </h2>
            </div>
            <p>Tell us what you need and a storage consultant will come back to you within 15 minutes during business hours.</p>
          </div>
          <div className={s.contactDuo}>
            <ContactForm />
            <div className={s.contactVisit}>
              <div className={s.contactMap}>
                {/* Keyless maps embed, loaded lazily so it does not affect LCP.
                    Same pin as the Google Business Profile record. */}
                <iframe
                  title="SafeStorage Dubai facility location — Building 23, Warehouse 5, DIP-1"
                  src="https://maps.google.com/maps?q=24.9903469,55.1539764&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className={s.contactFacts}>
                <span><MapPin aria-hidden="true" /> {ADDRESS_FULL}</span>
                <span><Clock aria-hidden="true" /> {HOURS_DISPLAY}</span>
                <span><CheckCircle2 aria-hidden="true" /> Call ahead to arrange a visit</span>
              </div>
              <a
                className={`${s.btn} ${s.btnGhost} ${s.contactMapBtn}`}
                href="https://maps.app.goo.gl/eimPkShrQADHTq3N7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                Questions before <em>you get in touch.</em>
              </h2>
            </div>
            <p>
              More answers? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={contactFaqs} />
        </section>

        <CtaBand
          title="Ready to free up space?"
          blurb="Get your personalised storage quote in 2 minutes — or talk to a consultant right now."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
