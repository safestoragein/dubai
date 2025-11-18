import QuotePage from "@/components/quote/quote-page-alternative2"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Storage Pricing & Quote Confirmation | SafeStorage Dubai",
  description:
    "Review your storage pricing options and confirm your quote. Choose between closed containers or shared storage space. Book your storage with SafeStorage Dubai.",
  keywords:
    "storage pricing dubai, storage quote confirmation, storage booking dubai, storage cost calculator dubai",
}

export default function GetQuoteStep3() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuotePage />
    </Suspense>
  )
}