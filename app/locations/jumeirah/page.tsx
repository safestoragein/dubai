import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"

export const metadata: Metadata = {
  title: "Expat Storage Dubai Moving Back Home | Jumeirah Storage | SafeStorage",
  description:
    "Moving back home from Jumeirah or leaving Dubai? SafeStorage offers expat-friendly storage — keep belongings safely stored while you decide what to ship. Free pickup, flexible terms, trusted by 500+ expats. Call +971505773388.",
  keywords:
    "expat storage dubai moving back home, jumeirah expat storage, leaving dubai storage, storage for expats dubai, moving out storage jumeirah, temporary storage expat dubai, repatriation storage dubai",
  openGraph: {
    title: "Expat Storage Dubai Moving Back Home | Jumeirah | SafeStorage",
    description: "Trusted by 500+ expats leaving Dubai. Store belongings safely in Jumeirah — flexible terms, free pickup. Call +971505773388.",
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
        "Hassle-hassle-free pickup from Jumeirah villas",
        "Perfect for villa renovations",
        "Seasonal storage for beach equipment",
        "Secure storage for luxury items"
      ]}
    />
  )
}