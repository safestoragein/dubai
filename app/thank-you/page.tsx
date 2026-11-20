import ThankYouPage from "@/components/thank-you/thank-you-page"
import { verifyThankYouPass } from "@/lib/thank-you-pass"
import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for choosing SafeStorage Dubai. We'll be in touch soon to discuss your storage needs.",
  alternates: {
    canonical: "https://safestorage.ae/thank-you",
  },
  robots: { index: false, follow: false },
}

// Per-visitor: the pass in ?t= is checked on every request, so this page can never be static or cached.
export const dynamic = "force-dynamic"

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ t?: string | string[] }> }) {
  const { t } = await searchParams
  const pass = Array.isArray(t) ? t[0] : t
  // Only reachable right after a quotation was created. Direct visits go back to the quote form.
  if (!verifyThankYouPass(pass)) redirect("/storage-quote")
  return <ThankYouPage />
}
