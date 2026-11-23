import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { PAGE_BY_PATH } from "@/lib/silo/registry"

export const metadata: Metadata = metadataFor(PAGE_BY_PATH["/business-storage-abu-dhabi"])

export default function Page() {
  return <LandingSiloPage content={PAGE_BY_PATH["/business-storage-abu-dhabi"]} />
}
