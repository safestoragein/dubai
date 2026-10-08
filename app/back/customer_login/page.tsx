import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { Camera, ShieldCheck, Truck } from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import { getCustomerSession } from "@/lib/customer-session"
import c from "./login.module.css"
import LoginForm from "./login-form"

export const metadata: Metadata = {
  title: { absolute: "Customer Login | Safe Storage Dubai" },
  description: "Sign in to your Safe Storage Dubai customer account.",
  alternates: { canonical: "https://safestorage.ae/back/customer_login" },
  robots: { index: false, follow: false }, // a sign-in page has no search value
}

const FEATURES = [
  { icon: Camera, tone: c.tGold, v: "24/7", label: "CCTV Monitoring", sub: "Round-the-clock cameras" },
  { icon: ShieldCheck, tone: c.tBlue, v: "Secure", label: "Safe Facility", sub: "Protected storage units" },
  { icon: Truck, tone: c.tPurple, v: "Door-to-Door", label: "Pickup & Delivery", sub: "Within Dubai" },
]

export default async function LoginPage() {
  if (await getCustomerSession()) redirect("/account")

  return (
    <div className={`${c.page} ${sora.variable} ${manrope.variable}`}>
      {/* left: brand panel */}
      <section className={c.brand} aria-label="SafeStorage Dubai">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={c.brandLogo} src="/images/design-mode/logo.png" alt="SafeStorage Dubai" />
        <h1 className={c.headline}>
          Secure Storage <br />
          for a <em>Better Tomorrow</em>
        </h1>
        <hr className={c.rule} />
        <p className={c.lead}>Your trusted storage partner for home, business and everything in between.</p>
        <ul className={c.features}>
          {FEATURES.map(({ icon: Icon, tone, v, label, sub }) => (
            <li key={label} className={c.feature}>
              <span className={`${c.featureIcon} ${tone}`}><Icon aria-hidden="true" /></span>
              <strong className={`${c.featureValue} ${tone}`}>{v}</strong>
              <b>{label}</b>
              <small>{sub}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* right: sign-in card */}
      <div className={c.cardWrap}>
        <div className={c.card}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={c.cardLogo} src="/images/design-mode/logo.png" alt="SafeStorage" />
          <h2 className={c.title}>Welcome Back!</h2>
          <p className={c.sub}>Login to access your SafeStorage account</p>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
