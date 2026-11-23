import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { AJMAN_STORAGE_HUB } from "@/lib/silo/city-ajman"

export const metadata: Metadata = metadataFor(AJMAN_STORAGE_HUB)

export default function Page() {
  return <LandingSiloPage content={AJMAN_STORAGE_HUB} hub />
}
