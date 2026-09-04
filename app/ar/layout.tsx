import type { Metadata } from "next"
import HtmlLangSync from "@/components/ar/html-lang-sync"

export const metadata: Metadata = {
  // Every /ar page is Arabic; declaring it once here means each page only has
  // to supply its own title/description.
  openGraph: { locale: "ar_AE" },
}

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar">
      <HtmlLangSync />
      {children}
    </div>
  )
}
