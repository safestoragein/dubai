import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Storage Units Dubai Investment Park | SafeStorage | +971505773388",
  description:
    "Secure storage solutions for Dubai Investment Park residents and businesses. Climate-controlled units with hassle-free pickup from DIP, Motor City & nearby areas. Call +971505773388.",
  keywords:
    "storage dubai investment park, dip storage units, self storage dubai investment park, motor city storage, production city storage",
  openGraph: {
    title: "Storage Dubai Investment Park - SafeStorage Dubai",
    description: "Premium storage in Dubai Investment Park with hassle-free pickup & 24/7 security. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-investment-park",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-investment-park",
  },
}

export default function DubaiInvestmentParkPage() {
  return (
    <LocationPage
      location="Dubai Investment Park"
      areas={["Dubai Investment Park 1", "Dubai Investment Park 2", "Motor City", "Dubai Production City", "Dubai Studio City", "Sports City"]}
      distance="10-15 minutes"
      benefits={[
        "Perfect for DIP warehouse and business storage",
        "Ideal for Motor City residents",
        "Hassle-free pickup from Production City",
        "Convenient for Sports City apartments"
      ]}
    />
  )
}
