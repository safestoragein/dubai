import ServicesPage from "@/components/services/services-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Services Dubai | Personal, Business & Vehicle | +971505773388",
  description:
    "Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage in Dubai. Climate-controlled with 24/7 security. Call +971505773388.",
  keywords:
    "storage services dubai, personal storage, business storage, document storage, vehicle storage, self storage dubai, climate controlled storage, secure storage dubai, furniture storage, moving storage",
  openGraph: {
    title: "SafeStorage Services - Personal, Business & Vehicle Storage",
    description: "Complete storage solutions in Dubai. Climate-controlled units, 24/7 security, hassle-free pickup. Call +971505773388.",
    url: "https://safestorage.ae/services",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "SafeStorage Services"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStorage Services Dubai | +971505773388",
    description: "Personal, business & vehicle storage solutions with hassle-free pickup & delivery.",
    images: ["/twitter-services.jpg"],
  },
  alternates: {
    canonical: "https://safestorage.ae/services",
  },
}

export default function Services() {
  return <ServicesPage />
}
