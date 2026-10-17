import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { RAK_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 10 HUB · /moving-storage-ras-al-khaimah — owns `movers and packers in ras al khaimah`.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(RAK_HUB)

export default function Page() {
  return <LandingSiloPage content={RAK_HUB} hub />
}
