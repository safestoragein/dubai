import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { AJMAN_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 9 HUB · /moving-storage-ajman — owns `movers in ajman` and `movers and packers in ajman`.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(AJMAN_HUB)

export default function Page() {
  return <LandingSiloPage content={AJMAN_HUB} hub />
}
