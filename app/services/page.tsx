import ServicesPage from "@/components/services/services-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Services in Dubai | Personal, Business & Vehicle Storage",
  description:
    "Secure & hassle-free storage solutions for household, personal, business, document, and vehicle storage needs in Dubai. Climate-controlled facilities with 24/7 security.",
  keywords:
    "storage services dubai, personal storage, business storage, document storage, vehicle storage, self storage dubai, climate controlled storage, secure storage dubai",
}

export default function Services() {
  return <ServicesPage />
}
