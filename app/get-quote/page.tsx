import QuotePage from "@/components/quote/quote-page-alternative2"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Free Storage Quote | SafeStorage Dubai",
  description:
    "Get a free, instant quote for storage solutions in Dubai. No obligations, transparent pricing. Book your storage space with SafeStorage Dubai today.",
  keywords:
    "free storage quote dubai, storage estimate, storage booking dubai, get storage quote, storage calculator dubai",
}

export default function GetQuote() {
  return <QuotePage />
}
