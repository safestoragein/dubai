import Link from "next/link"
import { CalendarCheck, CheckCircle2, Home, MessageCircle, PhoneCall, Search, Truck } from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import { PHONE, PHONE_DISPLAY } from "@/lib/company-facts"
import ThankYouName from "./thank-you-name"
import LeadTracker from "./lead-tracker"
import t from "./thank-you.module.css"

const STEPS = [
  { Icon: Search, h: "We review your details", p: "Your emirate, pickup area, floor and lift are already with our team." },
  { Icon: PhoneCall, h: "We call you back", p: "Our storage expert confirms your items and your quote." },
  { Icon: Truck, h: "We pick up from your door", p: "Book a pickup date that suits you and we handle the rest." },
]

const WA = `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I just requested a storage quote on safestorage.ae.")}`

export default function ThankYouPage() {
  return (
    <main className={`${t.page} ${sora.variable} ${manrope.variable}`}>
      <LeadTracker />
      {/* Already submitted: no "Get Free Quote" bar, booking toast or chat launcher over the confirmation. */}
      <style>{"#safestorage-leo-root,[data-floating-toast],[data-sticky-cta] a[href='/get-quote']{display:none!important}[data-sticky-cta]>div{margin:0 0 0 auto!important;width:fit-content!important;max-width:none!important;flex-direction:column!important;align-items:flex-end!important;gap:10px!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;backdrop-filter:none!important}[data-sticky-cta]{padding-left:0!important;padding-right:14px!important;padding-bottom:calc(16px + env(safe-area-inset-bottom))!important}[data-sticky-cta] a{width:48px!important;height:48px!important;box-shadow:0 8px 20px rgba(10,36,99,.3)!important}"}</style>
      <section className={t.wrap}>
        <div className={t.tick} aria-hidden="true">
          <CheckCircle2 />
        </div>
        <span className={t.kicker}>Quote request received</span>
        <h1>
          <ThankYouName />
        </h1>
        <p className={t.lede}>
          We have received your request. Our storage expert will call you back shortly with your free quote.
        </p>

        <ol className={t.steps}>
          {STEPS.map(({ Icon, h, p }, i) => (
            <li key={h}>
              <span className={t.num}>{i + 1}</span>
              <span className={t.ico}>
                <Icon aria-hidden="true" />
              </span>
              <div>
                <b>{h}</b>
                <small>{p}</small>
              </div>
            </li>
          ))}
        </ol>

        <div className={t.actions}>
          <a className={`${t.btn} ${t.primary}`} href={`tel:${PHONE}`}>
            <PhoneCall aria-hidden="true" /> Call us now · {PHONE_DISPLAY}
          </a>
          <a className={`${t.btn} ${t.wa}`} href={WA} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> Chat on WhatsApp
          </a>
          <Link className={`${t.btn} ${t.ghost}`} href="/">
            <Home aria-hidden="true" /> Back to home
          </Link>
        </div>

        <p className={t.note}>
          <CalendarCheck aria-hidden="true" /> Open Monday–Sunday, 8 AM–8 PM · 4.9 Google rating · 10,000+ reviews
        </p>
      </section>
    </main>
  )
}
