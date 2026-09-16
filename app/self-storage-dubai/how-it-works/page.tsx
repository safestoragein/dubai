import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import type { Metadata } from "next"
import { Clock, ShieldCheck, Truck } from "lucide-react"

import { manrope, sora } from "@/components/landing/fonts"
import PageHero, { CtaBand } from "@/components/landing/page-hero"
import FaqAccordion from "@/components/landing/faq-accordion"
import { LandingConnect } from "@/components/landing/landing-connect"
import { processFaqs } from "./faqs"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: { absolute: "How Self Storage Works in Dubai | Step by Step" },
  description:
    "Learn how Safe Storage works in Dubai & UAE – easy booking, pickup, secure storage, and fast delivery for homes & businesses.",
  keywords:
    "how storage works in Dubai, storage process Dubai, self storage guide Dubai, storage solutions UAE, safe storage guide Dubai, household storage process UAE, how to use storage units Dubai, secure storage services Dubai, personal storage guide UAE, business storage process Dubai, Safe Storage Dubai guide",
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/how-it-works",
    languages: { 'en': 'https://safestorage.ae/self-storage-dubai/how-it-works', 'x-default': 'https://safestorage.ae/self-storage-dubai/how-it-works' },
  },
  // See app/contact/page.tsx — omitting openGraph here made this page emit the
  // homepage og:url and og:title, contradicting its own canonical.
  openGraph: {
    url: "https://safestorage.ae/self-storage-dubai/how-it-works",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "How SafeStorage Dubai works" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.jpg"],
  },
}

const howItWorksSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/self-storage-dubai/how-it-works#webpage',
    name: 'How It Works | SafeStorage Dubai Storage Process',
    description: 'Learn how SafeStorage Dubai\'s simple 4-step process works: book, we collect, you access anytime.',
    url: 'https://safestorage.ae/self-storage-dubai/how-it-works',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://safestorage.ae/self-storage-dubai/how-it-works' },
    ],
  },
]

const steps = [
  {
    icon: "📝",
    title: "Get a free quote & book your pickup",
    body: "Tell us what you need to store online, by phone or over WhatsApp with photos. You get an itemised quote in minutes — no hidden fees, no estimate ranges.",
    points: ["Instant, itemised quote", "Morning, afternoon or evening slots, 7 days", "Same-day pickup if booked before 12 PM"],
  },
  {
    icon: "📦",
    title: "We collect & pack your items",
    body: "Our team arrives with boxes, bubble wrap, furniture covers and straps. Furniture is blanket-wrapped, fragile items cushioned individually, electronics packed anti-static.",
    points: ["Optional professional packing", "Final walkthrough before we leave", "Inventory signed at your door"],
  },
  {
    icon: "🏢",
    title: "Secure indoor storage",
    body: "Items go into your own dedicated unit — clean, dust-protected, on raised platforms and away from external walls.",
    points: ["24/7 CCTV and access control", "Fire protection and pest control", "Climate controlled as standard"],
  },
  {
    icon: "🔁",
    title: "Request delivery whenever you need it",
    body: "Call, WhatsApp or email and we deliver to your address within 24–48 hours — everything, or only the boxes you name.",
    points: ["Partial retrieval supported", "No early-retrieval penalty", "Remaining items stay on the same rate"],
  },
]

export default function HowItWorks() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "How It Works" },
        ]}
      />
      <SchemaScript schema={howItWorksSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <PageHero
          eyebrow="Serving Globally Since 2015"
          title="How SafeStorage"
          titleAccent="Dubai Works"
          blurb="A four-step process that takes storage off your hands entirely — no truck rental, no heavy lifting, no trip to a warehouse."
          image="/landing/movers-illustration.jpg"
          imagePosition="center 60%"
          stats={[
            { Icon: Clock, label: "Same-day pickup before 12 PM" },
            { Icon: Truck, label: "Door-to-door across Dubai" },
            { Icon: ShieldCheck, label: "Inventory signed at your door" },
          ]}
          ctaLabel="Get a Free Quote"
        />

        {/* THE PROCESS */}
        <section className={`${s.section} ${s.wrap}`} id="process">
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>The process</span>
            <h2>
              From Your Door to <em>Our Warehouse</em>, and Back
            </h2>
            <p>
              Exactly what happens from the moment you get in touch to the day your items are returned.
            </p>
          </div>

          <div className={s.duo}>
            {steps.map((step, i) => (
              <div className={`${s.panel} ${s.panelHover}`} key={step.title}>
                <span className={s.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <div className={s.panelIcon} aria-hidden="true">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <ul className={s.checkList}>
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.sectionHead}>
            <span className={s.eyebrow}>Good to know</span>
            <h2>Questions About the Process</h2>
          </div>
          <FaqAccordion items={processFaqs} />
        </section>

        <LandingConnect />

        <CtaBand
          title="Ready for hassle-free storage in Dubai?"
          blurb="Tell us what you're storing and we'll confirm the size, the price and a pickup slot — usually within 15 minutes."
          ctaLabel="Get a Free Quote"
        />
      </div>
    </>
  )
}
