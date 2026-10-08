import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Building2, Camera, ShieldCheck, Truck, Users, Boxes } from "lucide-react"
import { manrope, sora } from "@/components/landing/fonts"
import { getCustomerSession } from "@/lib/customer-session"
import { EMAIL, PHONE_DISPLAY } from "@/lib/company-facts"
import c from "./login.module.css"
import LoginForm from "./login-form"

export const metadata: Metadata = {
  title: { absolute: "Customer Login | Safe Storage Dubai" },
  description: "Sign in to your Safe Storage Dubai customer account.",
  alternates: { canonical: "https://safestorage.ae/back/customer_login" },
  robots: { index: false, follow: false }, // a sign-in page has no search value
}

const FEATURES = [
  { icon: Camera, label: "24/7 CCTV Monitoring" },
  { icon: ShieldCheck, label: "Secure & Safe Facility" },
  { icon: Boxes, label: "Organised Inventory Management" },
  { icon: Truck, label: "Door-to-Door Pickup" },
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
          {FEATURES.map(({ icon: Icon, label }) => (
            <li key={label} className={c.feature}>
              <span className={c.featureIcon}><Icon aria-hidden="true" /></span>
              {label}
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

          <div className={c.or}>OR</div>
          <div className={c.tiles}>
            <a className={c.tile} href="https://safestorage.in/back/employee_login" rel="noopener">
              <Users aria-hidden="true" /> For Employees
            </a>
            <Link className={c.tile} href="/contact">
              <Building2 aria-hidden="true" /> For Partners
            </Link>
            <Link className={c.tile} href="/privacy-policy">
              <ShieldCheck aria-hidden="true" /> Secure Access
            </Link>
          </div>
          <p className={c.help}>
            Need an account or a new password? Call {PHONE_DISPLAY} or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
