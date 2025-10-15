import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Storage Units Business Bay Dubai | SafeStorage | +971505773388",
  description:
    "Secure storage solutions for Business Bay residents and businesses. Climate-controlled units with free pickup from Downtown & Business Bay. Call +971505773388.",
  keywords:
    "storage business bay, business bay storage units, self storage business bay dubai, downtown dubai storage, storage near burj khalifa",
  openGraph: {
    title: "Storage Business Bay - SafeStorage Dubai",
    description: "Premium storage in Business Bay with free pickup & 24/7 security. Call +971505773388.",
    url: "https://safestorage.ae/locations/business-bay",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/business-bay",
  },
}

export default function BusinessBayPage() {
  return (
    <LocationPage
      location="Business Bay"
      areas={["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road", "Al Khail Road"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for Business Bay office storage",
        "Document archiving for DIFC companies",
        "Free pickup from Downtown Dubai",
        "Ideal for residents in high-rise apartments"
      ]}
    />
  )
}