import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Storage Units Dubai Marina | SafeStorage | +971505773388",
  description:
    "Premium storage solutions in Dubai Marina. Climate-controlled units, 24/7 security, free pickup from Marina, JBR, and nearby areas. Call +971505773388.",
  keywords:
    "storage dubai marina, storage units marina, self storage dubai marina, storage jbr, storage near me dubai marina",
  openGraph: {
    title: "Storage Dubai Marina - SafeStorage Premium Units",
    description: "Secure storage in Dubai Marina with free pickup & delivery. Call +971505773388.",
    url: "https://safestorage.ae/locations/dubai-marina",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/dubai-marina",
  },
}

export default function DubaiMarinaPage() {
  return (
    <LocationPage
      location="Dubai Marina"
      areas={["Dubai Marina", "JBR", "Marina Walk", "Dubai Marina Mall area", "Bluewaters"]}
      distance="15-20 minutes"
      benefits={[
        "Free pickup from your Marina apartment",
        "Quick access via Sheikh Zayed Road",
        "Ideal for Marina residents downsizing",
        "Perfect for storing beach and water sports equipment"
      ]}
    />
  )
}