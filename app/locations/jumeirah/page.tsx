import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Storage Units Jumeirah Dubai | SafeStorage | +971505773388",
  description:
    "Premium storage solutions for Jumeirah residents. Secure, climate-controlled units with free pickup from all Jumeirah areas. Call +971505773388 for instant quote.",
  keywords:
    "storage jumeirah, jumeirah storage units, self storage jumeirah dubai, storage umm suqeim, storage near jumeirah beach",
  openGraph: {
    title: "Storage Jumeirah - SafeStorage Premium Solutions",
    description: "Secure storage in Jumeirah with free pickup & delivery service. Call +971505773388.",
    url: "https://safestorage.ae/locations/jumeirah",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/jumeirah",
  },
}

export default function JumeirahPage() {
  return (
    <LocationPage
      location="Jumeirah"
      areas={["Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Umm Suqeim", "Al Safa", "Al Wasl"]}
      distance="20-25 minutes"
      benefits={[
        "Free pickup from Jumeirah villas",
        "Perfect for villa renovations",
        "Seasonal storage for beach equipment",
        "Secure storage for luxury items"
      ]}
    />
  )
}