import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
  description:
    "Renovating your Dubai Marina or JBR apartment? Store furniture safely during renovation — from 1 week. Short-term storage between leases also available. Free pickup from Marina & JBR. Call +971505773388.",
  keywords:
    "furniture storage during renovation dubai marina, short term storage between leases JBR dubai, storage JBR dubai, storage during renovation marina, temporary furniture storage marina, lease gap storage dubai marina",
  openGraph: {
    title: "Furniture Storage During Renovation Dubai Marina & JBR | SafeStorage",
    description: "Short-term storage during renovations or between leases in Dubai Marina & JBR. Free pickup. Call +971505773388.",
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
        "Hassle-hassle-free pickup from your Marina apartment",
        "Quick access via Sheikh Zayed Road",
        "Ideal for Marina residents downsizing",
        "Perfect for storing beach and water sports equipment"
      ]}
    />
  )
}