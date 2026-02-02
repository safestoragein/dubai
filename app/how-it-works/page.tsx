import HowItWorksPage from "@/components/how-it-works/how-it-works-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | SafeStorage Dubai Process",
  description:
    "Learn how SafeStorage Dubai's simple 3-step process works: Book online, we collect your items, and access them anytime. Hassle-hassle-free pickup and delivery in Dubai.",
  keywords:
    "how storage works dubai, storage process, pickup delivery dubai, storage booking, self storage process dubai",
}

export default function HowItWorks() {
  return <HowItWorksPage />
}
