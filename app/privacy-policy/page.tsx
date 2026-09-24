import type { Metadata } from "next"
import Link from "next/link"

import SiloBreadcrumb from "@/components/silo-breadcrumb"
import FaqAccordion from "@/components/landing/faq-accordion"
import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import po from "@/components/legal/policy.module.css"

/**
 * /privacy-policy — redesigned on the shared landing system (owner, 2026-09-24)
 * with their own photo and the real SafeStorage logo in place of the drawn one.
 *
 * Every clause is the legal text that was already here, character for
 * character: only the inline styles were dropped so the document picks up the
 * site's type and card look.
 */

export const metadata: Metadata = {
  title: { absolute: "Dubai Secure Storage Services Privacy Policy | Safe Storage" },
  description:
    "Safe Storage Privacy Policy for Dubai & UAE: Complete transparency on data protection for all household, business, box & document storage services.",
  keywords:
    "Privacy policy, Storage Dubai, Self Storage privacy policy, Storage company in Dubai, Safe Storage Dubai privacy policy, privacy policy for storage services Dubai, secure storage data protection Dubai, personal storage privacy Dubai, household storage privacy policy UAE, storage facility privacy Dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/privacy-policy",
  },
  alternates: {
    canonical: "https://safestorage.ae/privacy-policy",
  },
}

const clauses = [
  { q: "1. Information We Collect", a: "We collect personal information that you provide to us when using our services: Full name and contact details (phone number, email address); Emirates ID or Passport information; Residential or business address; Payment information (credit card details, billing address); Inventory details of items stored with us; Communication preferences; IP address and browser type; Device information; Access times and referring website addresses; Pages viewed and links clicked; Cookies and similar tracking technologies." },
  { q: "2. How We Use Your Information", a: "We use the collected information for the following purposes: To provide and manage storage services; To process payments and prevent fraud; To schedule pickup and delivery services; To communicate with you about your storage account; To send invoices and payment reminders; To improve our services and customer experience; To send marketing communications (with your consent); To comply with legal obligations and regulatory requirements; To verify your identity and prevent unauthorized access." },
  { q: "3. Information Sharing and Disclosure", a: "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances: Service Providers: We may share information with trusted third-party service providers who assist us in operating our business (payment processors, delivery partners, IT support); Legal Requirements: When required by law, court order, or government regulations; Business Transfers: In connection with a merger, acquisition, or sale of business assets." },
  { q: "4. Data Security", a: "We implement appropriate technical and organizational measures to protect your personal information: Encryption of sensitive data during transmission and storage; Secure servers with firewall protection; Regular security audits and updates; Limited access to personal information (only authorized personnel); 24/7 CCTV surveillance at storage facilities; Regular backup of data to prevent loss." },
  { q: "5. Your Rights and Choices", a: "You have the following rights regarding your personal information: Access: You can request a copy of the personal information we hold about you; Correction: You can request correction of inaccurate or incomplete information; Deletion: You can request deletion of your personal information (subject to legal retention requirements); Opt-Out: You can opt-out of marketing communications at any time by clicking \"unsubscribe\" in emails or contacting us." },
  { q: "6. Cookies and Tracking Technologies", a: "We use cookies and similar tracking technologies to enhance your experience: Essential Cookies: Required for the website to function properly; Analytics Cookies: Help us understand how visitors use our website; Marketing Cookies: Used to deliver relevant advertisements; Preference Cookies: Remember your settings and preferences; You can control cookies through your browser settings. However, disabling cookies may affect website functionality." },
  { q: "7. Data Retention", a: "We retain your personal information for as long as necessary to: Provide our storage services to you; Comply with legal, tax, and accounting obligations; Resolve disputes and enforce our agreements; Maintain business records as required by UAE law; When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policy and UAE regulations." },
  { q: "8. Third-Party Links", a: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit." },
  { q: "9. Children's Privacy", a: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly." },
  { q: "10. International Data Transfers", a: "Your information is primarily stored and processed in the United Arab Emirates. If we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws." },
  { q: "11. Changes to This Privacy Policy", a: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by: Posting the updated policy on our website; Updating the \"Last Updated\" date at the top of this policy; Sending you an email notification (for significant changes); Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy." },
  { q: "12. Compliance with UAE Laws", a: "SafeStorage Dubai operates in compliance with UAE data protection laws and regulations, including: UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data; Dubai Data Law (Law No. 26 of 2015); Other applicable UAE federal and emirate-level regulations." },
]

const faqs = [
  { q: "How is my personal data used by SafeStorage Dubai?", a: "Your personal data is used exclusively to deliver the storage services you have requested and to maintain your customer account. Specifically, we use your data to process your storage booking, schedule and coordinate pickup and delivery appointments, generate invoices and process payments, send service notifications and account updates, verify your identity as required by UAE regulations, and respond to your customer service enquiries." },
  { q: "Who has access to my personal data at SafeStorage Dubai?", a: "Access to your personal data within SafeStorage Dubai is strictly limited to employees and contractors who require it to deliver your storage service — specifically our operations team who coordinate pickups and deliveries, our customer support team who handle account enquiries, and our finance team who process billing. All staff with access to personal data are trained in data protection and bound by confidentiality obligations." },
  { q: "How long does SafeStorage retain my personal data?", a: "SafeStorage Dubai retains customer personal data for the duration of your active storage account plus a minimum of 5 years after account closure. This retention period is required to comply with UAE tax laws, UAE Commercial Transactions Law record-keeping requirements, and potential legal dispute resolution. Your inventory records and account history are retained for 7 years after your last transaction in accordance with UAE financial regulations. Analytics and website usage data is retained for 2 years." },
  { q: "Can I request deletion of my personal data?", a: "Yes. You have the right to request deletion of your personal data under UAE Federal Decree-Law No. 45 of 2021. ae with the subject line 'Data Deletion Request' and your full name and account email address. We will confirm receipt within 2 business days and complete the deletion within 30 days, subject to any legal retention obligations (for example, we are legally required to retain billing records for a minimum of 5 years). We will inform you of any data that cannot be deleted due to legal requirements." },
  { q: "Is my personal data shared with third parties?", a: "SafeStorage Dubai does not sell, rent, or trade your personal data to third parties for marketing or commercial purposes. We share limited data with trusted service providers who assist in delivering our storage services, including: our payment processor (for payment transactions), our SMS and email communication provider (for account notifications), and our cloud IT infrastructure provider (for data storage). We may also share data with UAE government authorities when legally required to do so." },
  { q: "How is my payment data handled?", a: "Payment card data at SafeStorage Dubai is processed exclusively through PCI-DSS compliant payment gateways. We do not store full card numbers, CVV codes, or other sensitive payment card data on our own systems. When you make a payment, your card details are transmitted directly from your browser to our payment processor via encrypted HTTPS connection. Only tokenised payment references are retained in our systems to facilitate recurring monthly billing." },
  { q: "How do I contact SafeStorage Dubai's data protection team?", a: "ae with the subject line 'Data Protection Enquiry'. You can also call +971505773388 during business hours (Monday to Friday, 9 AM to 6 PM UAE time). Our registered address for formal written correspondence is Building 23, Warehouse 5, DIP-1, Dubai, UAE. We aim to acknowledge all data protection enquiries within 2 business days and provide a full response within 30 days in compliance with UAE data protection law." },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Legal · Last updated February 2026</span>
              <h1>
                Privacy <em>Policy</em>
              </h1>
              <p>
                SafeStorage Dubai is committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our storage services.
              </p>
              <div className={s.heroCta}>
                <a className={`${s.btn} ${s.btnAccent}`} href="mailto:support@safestorage.ae">
                  Email our data team →
                </a>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1670 / 942" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/policy-photo.webp"
                alt="A SafeStorage Dubai team member working at the front desk beside the secure storage floor"
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* the policy itself — the same clauses, in the site's type */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The policy</span>
              <h2 className={p.longH2}>
                How we handle <em>your information.</em>
              </h2>
            </div>
          </div>
          {/* owner, 2026-09-24: read straight off the page, not opened one by
              one — every point shows its heading and its text */}
          <div className={po.doc}>
            {clauses.map((c) => (
              <div key={c.q}>
                <h2>{c.q}</h2>
                <p>{c.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* five questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Data privacy</span>
              <h2 className={p.longH2}>
                Frequently asked <em>questions.</em>
              </h2>
            </div>
          </div>
          {/* the questions use the site's accordion (owner, 2026-09-24) */}
          <FaqAccordion items={faqs} max={7} />
        </section>

        {/* how to reach the data team */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={po.doc}>
            <div>
              <h2>Contact us about privacy</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data
                practices:
              </p>
              <div className={po.contact}>
                <span>
                  <span aria-hidden="true">📧</span>{" "}
                  <a href="mailto:support@safestorage.ae">support@safestorage.ae</a>
                </span>
                <span>
                  <span aria-hidden="true">📞</span> <a href={env.PHONE_LINK}>+971 50 577 3388</a>
                </span>
                <span>
                  <span aria-hidden="true">📍</span> Building 23, Warehouse 5, DIP-1, Dubai, UAE
                </span>
              </div>
            </div>
          </div>
          <p className={po.stamp}>
            Last Updated: February 2026 | © 2026 SafeStorage Dubai. All rights reserved.
          </p>
          <div className={s.howCta}>
            <Link className={s.howMore} href="/contact">
              Contact SafeStorage Dubai
            </Link>
            <Link className={s.howMore} href="/faq">
              Storage questions and answers
            </Link>
          </div>
        </section>

        <CtaBand
          title="Questions about your data?"
          blurb="Our data team answers privacy enquiries within 2 business days. For anything about your storage account, call or WhatsApp us any time."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
