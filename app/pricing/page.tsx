import PricingPage from "@/components/pricing/pricing-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Pricing Dubai | From AED 99/month | +971505773388",
  description:
    "Transparent storage pricing in Dubai starting from AED 99/month. Various unit sizes with flexible plans. Hassle-free pickup & delivery included. Call +971505773388 for best rates.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices, monthly storage cost, storage unit prices",
  openGraph: {
    title: "SafeStorage Pricing - Affordable Storage from AED 99",
    description: "Competitive storage rates in Dubai. All sizes available with hassle-free pickup & delivery. Call +971505773388.",
    url: "https://safestorage.ae/pricing",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Pricing"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Pricing - From AED 99/month",
    description: "Affordable storage units in Dubai with transparent pricing. Call +971505773388.",
    images: ["/twitter-pricing.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/pricing",
  },
}

export default function Pricing() {
  return <PricingPage />
}
