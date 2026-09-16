import type { Metadata } from "next"
import SchemaScript from "@/components/schema-script"
import { homePageSchema } from "@/lib/structured-data"

import { manrope, sora } from "@/components/landing/fonts"
import { LandingHero, LandingTrust, LandingIntro } from "@/components/landing/landing-top"
import { LandingServices, LandingSteps, LandingWhy } from "@/components/landing/landing-services"
import { LandingTypes } from "@/components/landing/landing-types"
import { LandingReviews } from "@/components/landing/landing-reviews"
import { LandingInsights } from "@/components/landing/landing-insights"
import { LandingConnect } from "@/components/landing/landing-connect"
import { LandingFaq } from "@/components/landing/landing-faq"
import s from "@/components/landing/landing.module.css"

export const metadata: Metadata = {
  title: { absolute: "Best Secured Safe Storage Solution Dubai | Safe Storage UAE" },
  description:
    "Secure Storage in Dubai & the UAE for homes, offices & businesses. Flexible plans, affordable rates & 24/7 access to monitoring.",
  keywords:
    "Best Self Storage in Dubai, Self Storage Company in Dubai, Personal and Business Self Storage, Storage Service in Dubai, Premium Self Storage, Self Storage Dubai, Self Storage in Dubai, Storage Dubai, Storage in Dubai, Household Storage Dubai, Safe Storage UAE",
  // og:title now matches the page title — they previously disagreed, and both
  // image paths (/og-home.jpg, /twitter-home.jpg) pointed at files that did not
  // exist in public/, so every share rendered with a broken image.
  openGraph: {
    url: "https://safestorage.ae",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Dubai Facility",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae",
  },
}

/**
 * Homepage — rebuilt on the approved SafeStorage UAE comp.
 *
 * Every section below is the comp's layout carrying this site's own copy,
 * pricing and internal links. Styling is scoped to components/landing/
 * landing.module.css so the rest of the site is untouched; the Sora/Manrope
 * font variables are applied on the wrapper rather than in the root layout
 * for the same reason.
 *
 * The FAQ accordion is the one section with no equivalent in the comp; it is
 * kept because it answers the questions that stop people booking.
 */
export default function LandingPage() {
  return (
    <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
      {/* WebPage node for the homepage only — see lib/structured-data.ts */}
      <SchemaScript schema={homePageSchema} />

      <LandingHero />
      <LandingTrust />
      <LandingIntro />
      <LandingServices />
      <LandingSteps />
      <LandingWhy />
      <LandingTypes />
      <LandingReviews />
      <LandingInsights />
      <LandingFaq />
      <LandingConnect />
    </div>
  )
}
