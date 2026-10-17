import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { UAE_HUB } from "@/lib/silo/silo-regions"

/*
 * SILO 7 HUB · /moving-storage-uae — owns the UAE-wide movers-and-packers terms.
 * Rendered from lib/silo/silo-regions.ts with the landing-design silo renderer
 * in hub mode. Not in SILO_PAGES: it is the parent its children link up to.
 */

export const metadata: Metadata = metadataFor(UAE_HUB)

export default function Page() {
  return <LandingSiloPage content={UAE_HUB} hub />
}
