import type { Metadata } from "next"
import { AR_MOVERS_PAGES, type ArMoversPage } from "./movers-pages"

const BASE = "https://safestorage.ae"

export const AR_MOVERS_BY_SLUG: Record<string, ArMoversPage> = Object.fromEntries(
  AR_MOVERS_PAGES.map((p) => [p.slug, p]),
)

/** Metadata for an Arabic movers page; hreflang pairs it with its English twin when one exists. */
export function arMoversMetadata(p: ArMoversPage): Metadata {
  const url = `${BASE}${p.path}`
  return {
    title: { absolute: p.title },
    description: p.description,
    keywords: p.keywords,
    openGraph: {
      title: p.ogTitle,
      description: p.description,
      images: [{ url: "/og-cover-2026.jpg", width: 1200, height: 630, alt: p.ogTitle }],
      url,
      siteName: "SafeStorage",
      locale: "ar_AE",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: p.enPath
        ? { "ar-AE": url, "en-AE": `${BASE}${p.enPath}`, "x-default": `${BASE}${p.enPath}` }
        : { "ar-AE": url },
    },
  }
}
