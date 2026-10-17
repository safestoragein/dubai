import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { ALAIN_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 11 HUB · /moving-storage-al-ain — owns `movers and packers in al ain`.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(ALAIN_HUB)

export default function Page() {
  return <LandingSiloPage content={ALAIN_HUB} hub />
}
