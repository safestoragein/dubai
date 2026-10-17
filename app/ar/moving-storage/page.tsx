import type { Metadata } from "next"
import ArMoversPageView from "@/components/ar/ar-movers-page"
import { arMoversMetadata, AR_MOVERS_BY_SLUG } from "@/lib/ar/movers-meta"

export const metadata: Metadata = arMoversMetadata(AR_MOVERS_BY_SLUG.uae)

export default function Page() {
  return <ArMoversPageView page={AR_MOVERS_BY_SLUG.uae} />
}
