import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { FUJAIRAH_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 12 HUB · /moving-storage-fujairah — owns `movers in fujairah`.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(FUJAIRAH_HUB)

export default function Page() {
  return <LandingSiloPage content={FUJAIRAH_HUB} hub />
}
