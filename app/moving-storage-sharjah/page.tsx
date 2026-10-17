import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { SHARJAH_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 8 HUB · /moving-storage-sharjah — owns `movers in sharjah` and `movers and packers in sharjah`.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(SHARJAH_HUB)

export default function Page() {
  return <LandingSiloPage content={SHARJAH_HUB} hub />
}
