import ThankYouPage from "@/components/thank-you/thank-you-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | SafeStorage Dubai",
  description: "Thank you for choosing SafeStorage Dubai. We'll be in touch soon to discuss your storage needs.",
}

export default function ThankYou() {
  return <ThankYouPage />
}
