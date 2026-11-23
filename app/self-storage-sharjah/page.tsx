import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { SHARJAH_STORAGE_HUB } from "@/lib/silo/city-sharjah"

export const metadata: Metadata = metadataFor(SHARJAH_STORAGE_HUB)

export default function Page() {
  return <LandingSiloPage content={SHARJAH_STORAGE_HUB} hub />
}
