import PricingPage from "@/components/pricing/pricing-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Pricing in Dubai | Affordable Storage Solutions",
  description:
    "Transparent pricing for storage solutions in Dubai. Starting from AED 99/month with free pickup & delivery. No hidden fees. Compare our affordable storage plans.",
  keywords:
    "storage pricing dubai, cheap storage dubai, storage costs, affordable storage, storage rates dubai, self storage prices",
}

export default function Pricing() {
  return <PricingPage />
}
