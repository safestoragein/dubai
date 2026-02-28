import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Storage Units Near Business Bay Dubai | Pickup in 24hrs | SafeStorage",
  description:
    "Looking for storage units near Business Bay Dubai? SafeStorage offers climate-controlled units with free pickup from Business Bay, DIFC & Downtown. Book online — space ready tomorrow. Call +971505773388.",
  keywords:
    "storage units near business bay dubai, business bay self storage, storage near DIFC, downtown dubai storage units, business bay office storage, storage pickup business bay",
  openGraph: {
    title: "Storage Units Near Business Bay Dubai - Pickup in 24hrs | SafeStorage",
    description: "Climate-controlled storage near Business Bay & DIFC. Free pickup from your address. Call +971505773388.",
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
        "Hassle-hassle-free pickup from Downtown Dubai",
        "Ideal for residents in high-rise apartments"
      ]}
    />
  )
}