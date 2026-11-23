import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { AD_STORAGE_HUB } from "@/lib/silo/city-abu-dhabi"

export const metadata: Metadata = metadataFor(AD_STORAGE_HUB)

export default function Page() {
  return <LandingSiloPage content={AD_STORAGE_HUB} hub />
}
