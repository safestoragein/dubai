import type { Metadata } from "next"
import Link from "next/link"
import {
  FileText, ShieldCheck, Tags, Clock, Lock, RotateCcw, Scale, Calculator, Building2, Users, Home, Landmark,
  Briefcase, Stethoscope, Truck, ClipboardCheck, Archive, Boxes, Package, Warehouse, MapPin, PiggyBank,
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

export const metadata: Metadata = {
  title: { absolute: "Document Storage & Records Archival Dubai | SafeStorage UAE" },
  description: "Secure Commercial and document storage in Dubai. Professional archival for legal, medical, and business records.",
  keywords: "Document storage Dubai, Business record storage, Legal document storage, Medical record storage, File storage Dubai, Confidential storage, Office document storage, Paper storage Dubai, Storage for compliance, SafeStorage archival",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/business-storage-dubai/document-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/business-storage-dubai/document-storage" },
}

const retention = [
  { Icon: Scale, years: "5 yrs", t: "UAE Commercial Companies Law", b: "Financial records" },
  { Icon: Calculator, years: "5 yrs", t: "UAE VAT Law", b: "Tax records & supporting documents" },
  { Icon: Building2, years: "6 yrs", t: "DIFC Company Regulations", b: "Company records after dissolution" },
  { Icon: Users, years: "2 yrs", t: "UAE Labour Law", b: "Employee records after employment ends" },
  { Icon: Home, years: "10 yrs", t: "Dubai Land Department", b: "Real estate transaction records" },
  { Icon: Landmark, years: "5–10 yrs", t: "CBUAE banking rules", b: "Banking & finance records, by type" },
]

const security = [
  { Icon: ShieldCheck, title: "Clean, secure environment", body: "Enclosed indoor storage, dust-protected and away from sun, rain and heat." },
  { Icon: Tags, title: "Labelled & inventoried", body: "Boxes logged against your own references, so one box is found without searching." },
  { Icon: Clock, title: "Timed destruction", body: "Certified shredding at the end of the retention period, with a destruction certificate." },
  { Icon: Lock, title: "Confidentiality assured", body: "Staff under confidentiality agreements; access-controlled, no other customers." },
  { Icon: RotateCcw, title: "Retrieval on request", body: "Ask with a week's notice and your box is ready on the date you choose." },
]

const steps = [
  { Icon: FileText, when: "Day 1", t: "Free quote", b: "Tell us roughly how many boxes — same-day quote." },
  { Icon: Truck, when: "Collection", t: "We collect", b: "From your office or home, boxes supplied if needed." },
  { Icon: ClipboardCheck, when: "Intake", t: "Logged & labelled", b: "Every box recorded; you get the inventory." },
  { Icon: RotateCcw, when: "Any time", t: "Retrieve or destroy", b: "Boxes back on request, or shredded on schedule." },
]

const users = [
  { Icon: Scale, title: "Law firms", body: "Client files and case records off-site — freeing DIFC and JLT office space." },
  { Icon: Calculator, title: "Accounting & finance", body: "VAT records and audit files kept 5+ years, cheaper than office cabinets." },
  { Icon: Home, title: "Real estate", body: "Title deeds, sales agreements and DLD records with 10-year retention." },
  { Icon: Briefcase, title: "HR & recruitment", body: "Contracts, visa documents and payroll files, kept as Labour Law requires." },
  { Icon: Stethoscope, title: "Clinics & healthcare", body: "Patient record archives stored off-site in a controlled environment." },
  { Icon: Users, title: "Individuals & families", body: "Passports, certificates, deeds and wills — safe from fire, theft and floods." },
]

const reviews = [
  { name: "Ibrahim S.", role: "Law Firm Partner · DIFC", text: "We store 5 years of closed client files. Boxes are always ready when we arrive, and we turned our old storage room into a meeting room." },
  { name: "Laleh K.", role: "Finance Director · Business Bay", text: "Our VAT audit needed records from 2018–2022. Everything was labelled by year and came back in perfect condition. The auditors were satisfied." },
  { name: "Dr. Mahesh R.", role: "Clinic Owner · Al Quoz", text: "Some patient records must be kept for years. Having them off-site in a secure, access-controlled environment gives me confidence." },
  // The three below are published elsewhere on the site (homepage reviews and /testimonials).
  { name: "Sarah Mitchell", role: "Managing Director · Consulting Firm", text: "As a business owner, I needed reliable document storage. Their dedicated consultant understood our compliance needs perfectly." },
  { name: "Faisal Al Rashid", role: "Palm Jumeirah", text: "We stored over 200 boxes of stock and office equipment. The indexing system made it easy to retrieve specific items. Great for businesses." },
  { name: "Priya Sharma", role: "Jumeirah", text: "We stored office furniture when we downsized. A consultant assessed the volume, gave a transparent quote and handled everything. Great value for money." },
]

const faqs = [
  {
    q: "How long do UAE businesses need to retain documents?",
    a: "It depends on the record: 5 years for financial and VAT records, 6 years after dissolution for DIFC companies, 2 years after employment for staff records, 10 years for Dubai Land Department transactions, and 5–10 years for banking records.",
  },
  {
    q: "Do you provide an inventory of my stored documents?",
    a: "Yes. Every box is logged against your own reference labels. We never open boxes or read contents, so for large archives we recommend keeping a simple spreadsheet of what each box holds.",
  },
  {
    q: "How quickly can I retrieve specific files or boxes?",
    a: "Give us a week's notice with the box reference and it will be ready on your chosen date. For regular access, we can set up a schedule so you don't need to give notice each time.",
  },
  {
    q: "Do you offer certified document destruction?",
    a: "Yes. Documents that reach the end of their retention period can be cross-cut shredded on a schedule, with a certificate of destruction for your compliance records.",
  },
  {
    q: "How is confidentiality maintained?",
    a: "All staff handling documents sign confidentiality agreements, only authorised personnel can access your archive, and nothing is opened or shared without your written instruction or a valid legal order.",
  },
  {
    q: "How do I get started with document storage?",
    a: "Call +971505773388 or request a quote with an approximate box count. We quote the same day, collect from your office or home, log every box and send you the inventory — usually within a single working day.",
  },
]

const explore = [
  { Icon: Briefcase, t: "Business storage Dubai", b: "All business storage services.", href: "/business-storage-dubai" },
  { Icon: Archive, t: "Archive storage", b: "Long-term archive boxes and files.", href: "/business-storage-dubai/archive-storage" },
  { Icon: Boxes, t: "Inventory storage", b: "Stock kept close to your customers.", href: "/business-storage-dubai/inventory-storage" },
  { Icon: Package, t: "Pallet storage", b: "Palletised goods by the pallet.", href: "/business-storage-dubai/pallet-storage" },
  { Icon: Warehouse, t: "3PL services", b: "Storage plus pick, pack and dispatch.", href: "/business-storage-dubai/3pl-services" },
  { Icon: MapPin, t: "Local self storage", b: "Storage near you across Dubai.", href: "/self-storage-dubai/local-self-storage" },
  { Icon: Truck, t: "Areas we collect from", b: "Every emirate and district.", href: "/locations" },
  { Icon: ClipboardCheck, t: "How it works", b: "From first call to delivery back.", href: "/how-it-works" },
]

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document & Records Storage Dubai",
    description: "Secure document and records storage in Dubai. Fire-resistant archive storage for business and personal documents, legal files, and confidential records.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/business-storage-dubai/document-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/business-storage-dubai/document-storage#webpage",
    name: "Document Storage Dubai — Secure Business & Personal Records Storage",
    url: "https://safestorage.ae/business-storage-dubai/document-storage",
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

export default function DocumentStoragePage() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Business Storage Dubai", href: "/business-storage-dubai" },
          { name: "Document Storage" },
        ]}
      />
      <SchemaScript schema={schemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        <SplitHero
          eyebrow="Document & records storage"
          title="Document Storage in Dubai –"
          titleAccent="Secure Archive & Records"
          blurb="Free up office space and stay compliant with UAE retention rules. Secure, access-controlled storage where you pay only for the space you use."
          image="/landing/svc-document.jpg"
          imagePosition="center 50%"
          ctaLabel="Get a Free Quote"
        />

        <LandingTrust />

        {/* RETENTION */}
        <section className={`${s.section} ${s.wrap}`} id="retention">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>UAE retention rules</span>
              <h2>
                What you must <em>legally keep.</em>
              </h2>
            </div>
            <p>
              Destroying records early can mean penalties in an audit. These are the key UAE minimum retention
              periods.
            </p>
          </div>
          <div className={s.miniGrid}>
            {retention.map(({ Icon, years, t: title, b }) => (
              <div className={s.miniCard} key={title}>
                <span className={s.miniIcon} aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>
                    <span style={{ color: "var(--accent)" }}>{years}</span> · {title}
                  </b>
                  <small>{b}</small>
                </div>
              </div>
            ))}
          </div>
          <div className={s.movingTip}>
            <PiggyBank aria-hidden="true" />
            <p>
              <b>Cost comparison:</b> off-site storage charges only for the space your boxes use, while the same floor space in a
              Business Bay office costs AED 800–1,500 a month — archive boxes rarely deserve prime office space.
            </p>
          </div>
        </section>

        {/* SECURITY */}
        <section className={s.wrap} id="security">
          <div className={`${s.darkBand} ${s.whyBand}`}>
            <div className={`${s.howHead} ${s.bandHead}`}>
              <div>
                <span className={s.howEyebrow}>Security standards</span>
                <h2>
                  How your documents <br className={s.mBreak} />
                  <em>stay protected.</em>
                </h2>
              </div>
            </div>
            <FeatScroller>
              {security.map(({ Icon, title, body }) => (
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

        {/* PROCESS */}
        <section className={`${s.section} ${s.wrap}`} id="process">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Getting started</span>
              <h2>
                Your archive moved <em>in a day.</em>
              </h2>
            </div>
            <p>Most businesses have their entire document archive collected, logged and stored within a single working day.</p>
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
        </section>

        {/* WHO USES IT */}
        <section className={`${s.section} ${s.wrap}`} id="who" style={{ paddingTop: 0 }}>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Who uses it</span>
                <h2>
                  Trusted by <em>records-heavy teams.</em>
                </h2>
              </div>
            }
          >
            {users.map(({ Icon, title, body }, i) => (
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

        {/* REVIEWS */}
        <section className={`${s.section} ${s.wrap}`} id="reviews" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Testimonials</span>
              <h2>
                What our <em>clients say.</em>
              </h2>
            </div>
          </div>
          <div className={s.revTrack}>
            {reviews.map((r) => (
              <div className={s.revCard} key={r.name}>
                <div className={s.revStars} aria-label="Rated 5 out of 5">
                  ★★★★★
                </div>
                <p className={s.revText}>&ldquo;{r.text}&rdquo;</p>
                <div className={s.revTop}>
                  <div>
                    <div className={s.revName}>{r.name}</div>
                    <div className={s.revRole}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={s.scrollHint}>Swipe for more →</p>
        </section>

        {/* FAQ */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2>
                Document storage <em>questions.</em>
              </h2>
            </div>
            <p>
              More answers? <Link href="/faq" style={{ color: "var(--accent)", fontWeight: 600 }}>View all FAQs →</Link>
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        {/* EXPLORE */}
        <section className={`${s.section} ${s.wrap}`} id="explore" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Explore</span>
              <h2>
                More in <em>business storage.</em>
              </h2>
            </div>
          </div>
          <div className={s.miniGrid}>
            {explore.map(({ Icon, t: title, b, href }) => (
              <Link className={`${s.miniCard} ${s.miniLink}`} href={href} key={href}>
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
        </section>

        <CtaBand
          title="Secure your documents today."
          blurb="Free quote for business or personal document storage — we collect from your office or home."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />

        <LandingConnect />
      </div>
    </>
  )
}
