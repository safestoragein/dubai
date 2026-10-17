import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ArMoversPageView from "@/components/ar/ar-movers-page"
import { arMoversMetadata, AR_MOVERS_BY_SLUG } from "@/lib/ar/movers-meta"
import { AR_MOVERS_PAGES } from "@/lib/ar/movers-pages"

export const dynamicParams = false

export function generateStaticParams() {
  return AR_MOVERS_PAGES.filter((p) => p.slug !== "uae").map((p) => ({ emirate: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ emirate: string }> }): Promise<Metadata> {
  const { emirate } = await params
  const p = AR_MOVERS_BY_SLUG[emirate]
  return p && emirate !== "uae" ? arMoversMetadata(p) : {}
}

export default async function Page({ params }: { params: Promise<{ emirate: string }> }) {
  const { emirate } = await params
  const p = AR_MOVERS_BY_SLUG[emirate]
  if (!p || emirate === "uae") notFound()
  return <ArMoversPageView page={p} />
}
