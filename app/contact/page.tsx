import ContactPage from "@/components/contact/contact-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact SafeStorage Dubai | Get in Touch",
  description:
    "Contact SafeStorage Dubai for secure storage solutions. Call us, visit our locations, or get a free quote. We're here to help with all your storage needs in Dubai.",
  keywords:
    "contact storage dubai, storage company dubai, storage locations dubai, storage customer service, dubai storage contact",
  alternates: {
    canonical: "https://safestorage.ae/contact",
  },
}

export default function Contact() {
  return <ContactPage />
}
