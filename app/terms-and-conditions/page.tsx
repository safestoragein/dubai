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
 * /terms-and-conditions — redesigned on the shared landing system
 * (owner, 2026-09-24) with their own photo and the real SafeStorage logo in
 * place of the drawn one.
 *
 * Every clause is the page's own wording: each one keeps its heading and its
 * paragraphs and list items, joined up and cut to three or four lines. The
 * clause numbering is left exactly as it was found, gap and all.
 */

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions for Secure Safe Storage Services in Dubai" },
  description:
    "Read the Terms & Conditions for Safe Storage in Dubai & UAE. Legal info for household, business, document & box storage services you can trust.",
  keywords:
    "Terms and Conditions Safe Storage Dubai, Self Storage Dubai, Safe Storage Dubai terms, terms and conditions UAE storage, storage service T&Cs Dubai, UAE self storage terms and conditions, SafeStorageGlobal UAE terms, storage facility terms Dubai, household storage conditions Dubai, secure storage policy Dubai",
  openGraph: {
    images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/terms-and-conditions",
  },
  alternates: {
    canonical: "https://safestorage.ae/terms-and-conditions",
  },
}

const clauses = [
  { q: "1. General Terms", a: "Customer accepts that it is their responsibility to ensure that information such as Emirates ID, Passport, Address Proof or any other demographics shared with SafeStorage are accurate. Customer agrees to update SafeStorage in case of any changes; SafeStorage reserves the right to undertake all necessary steps to ensure the security, safety and integrity of Customer goods; SafeStorage may take various steps to verify and confirm the authenticity and enforce the validity of the orders placed by the customer." },
  { q: "2. Restrictions on Stored Material", a: "Prohibited Items - Customer shall NOT store: Food, grocery, and perishable goods; Masala or spice items; Liquids, detergents, and gases; Cosmetics; Medicines; Ornaments and jewellery; Narcotics, arms, ammunition; Living or dead plants or animals; Waste materials; Flammable, explosive, or toxic materials; Polluted, contaminated, or radioactive materials; Organic material that might attract vermin or insects; Any materials that are illegal, dangerous or unsafe." },
  { q: "3. Limitation of Liability", a: "The Company shall exercise such care in regards to the Material as a reasonably careful person would exercise in like circumstances. The Company shall not be liable for any loss or damage to stored Material, however caused, unless such loss or damage resulted from a failure of Company to exercise such degree of care. Company's liability, if any, for loss, damage, or destruction, however caused, to part or all of the Material stored hereunder shall be limited to one month rental charges or the declared value (whichever is lower)." },
  { q: "5. Payment, Cancellation and Refunds", a: "The Customer agrees to pay the Company according to the rates agreed as per quotation; The Customer agrees to pay for storage and service in one-month advance; The Customer also agrees to pay additional storage and packing charges for items that are not mentioned in the quotation, calculated according to the space the items occupy; Additional Item Charges: Storage charges are based on the space your items actually occupy. You pay only for that space." },
  { q: "6. Force Majeure", a: "SafeStorage shall not be liable for its failure to perform under this agreement as a result of any Force Majeure events including but not limited to: Acts of God; Fire, flood, earthquake; War, terrorism, sabotage; Civil unrest or labor unrest; Pandemics or epidemics; Action of government authorities; Change in laws, rules or regulations; Any other events beyond the reasonable control of SafeStorage." },
  { q: "7. Language, Disputes, Governing Law and Jurisdiction", a: "These Terms of Service have been written in English. To the extent any translated version conflicts with the English version, the English version controls; The laws of the United Arab Emirates and the Emirate of Dubai shall govern these Terms of Service; The parties agree to submit to the exclusive jurisdiction of the courts of Dubai, UAE for the purpose of litigating all claims or disputes arising from these terms." },
  { q: "8. Customer Declaration", a: "By using SafeStorage services, the Customer declares and agrees that: I am the rightful owner of the goods and the goods have not been stolen or illegally obtained from anyone else; I authorize SafeStorage Dubai to store all goods on my behalf; SafeStorage has authority to relocate the goods from one warehouse to another warehouse if necessary for operational reasons; No material which is considered illegal/immoral as per UAE laws, and/or otherwise for which storage license is required, will be stored." },
  { q: "9. Liability Disclaimer", a: "SafeStorage and its affiliates have no liability and will make no refund in the event of: Any delay or cancellation; Strike or labor disputes; Force majeure events; Other causes beyond direct control; Acts of any government or authority; SafeStorage has no responsibility for any additional expense, omissions, or delays arising from the above events." },
  { q: "10. Changes to Terms", a: "SafeStorage reserves the right to modify these Terms and Conditions at any time: Changes will be effective immediately upon posting on our website; Continued use of our services after changes constitutes acceptance of modified terms; Customers are encouraged to review these terms periodically." },
]

const faqs = [
  { q: "What happens if I miss a payment?", a: "If payment is not received within 15 days of the invoice date, late payment charges of 2% per month are applied to the outstanding balance. SafeStorage will contact you by email, SMS, and WhatsApp to notify you of the overdue payment and request settlement. If storage charges remain unpaid for 90 days, SafeStorage is entitled under these terms to: withhold delivery of your stored items, terminate the storage agreement, and ultimately sell, auction, or dispose of stored goods in accordance with UAE law to recover the outstanding amount. We strongly recommend setting up auto-pay to avoid accidental missed payments." },
  { q: "What happens if my stored items are damaged?", a: "If your items are damaged while in SafeStorage's care due to a failure of reasonable care on SafeStorage's part, their liability is limited to the lower of: one month's storage charges for the damaged items, or the declared value of the damaged items at the time of pickup. Claims must be made in writing promptly upon discovery of damage. SafeStorage is not liable for gradual deterioration, pre-existing damage, scratches during transport, rust or corrosion caused by moisture within the items themselves, or damage from extreme weather events beyond their control. The photographic inventory taken at pickup provides the baseline for any damage assessment." },
  { q: "How are disputes with SafeStorage resolved?", a: "Any disputes arising from the SafeStorage Dubai storage agreement are subject to the laws of the United Arab Emirates and the Emirate of Dubai. The parties agree that the courts of Dubai, UAE have exclusive jurisdiction for resolving any legal disputes arising from these terms. SafeStorage encourages customers to first contact the customer service team at support@safestorage.ae or +971505773388 to resolve any issue informally before pursuing formal legal action. In most cases, concerns about billing, service quality, or item condition can be resolved quickly through direct communication with our customer experience team." },
  { q: "What law governs the storage agreement?", a: "The SafeStorage Dubai storage agreement is governed exclusively by the laws of the United Arab Emirates and, specifically, the laws of the Emirate of Dubai. Any translation of these terms into Arabic or other languages is for customer convenience only — in the event of any conflict between the English version and a translated version, the English version takes precedence. By using SafeStorage Dubai's services, you confirm that you accept and agree to these terms and to the exclusive jurisdiction of Dubai courts for any legal matters arising from the storage agreement." },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Terms and Conditions" }]} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's photo right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Legal · Last updated February 2026</span>
              <h1>
                Terms and <em>Conditions</em>
              </h1>
              <p>
                <strong>SafeStorage.ae</strong> is a unit of SafeStorage, a globally trusted storage facility
                founded in 2015. SafeStorage Dubai operates under the laws of the United Arab Emirates, serving
                Dubai and surrounding areas. Please read the following terms carefully before using our services.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a Free Quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1670 / 942" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/terms-photo.webp"
                alt="A SafeStorage Dubai consultant going through the storage agreement with a customer"
                fetchPriority="high"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* the terms themselves */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>The terms</span>
              <h2 className={p.longH2}>
                What you agree to <em>when you store with us.</em>
              </h2>
            </div>
            <p>
              The SafeStorage brand, logo and mascot are the properties of SafeStorage Dubai and are subject to
              trademark protection.
            </p>
          </div>
          <div className={po.doc}>
            {clauses.map((c) => (
              <div key={c.q}>
                <h2>{c.q}</h2>
                <p>{c.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* the questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq" style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Good to know</span>
              <h2 className={p.longH2}>
                Frequently asked <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} max={5} />
        </section>

        {/* how to reach us */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={po.doc}>
            <div>
              <h2>Questions about these terms?</h2>
              <p>If anything here is unclear, our team will talk it through with you before you book:</p>
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
            <Link className={s.howMore} href="/privacy-policy">
              Privacy policy
            </Link>
            <Link className={s.howMore} href="/contact">
              Contact SafeStorage Dubai
            </Link>
          </div>
        </section>

        <CtaBand
          title="Ready to store with SafeStorage?"
          blurb="Tell us what you are storing and we will send a free, itemised quote — no obligation, and the price we quote is the price you pay."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>
    </>
  )
}
