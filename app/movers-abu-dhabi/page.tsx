import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { PAGE_BY_PATH, metadataFor } from "@/lib/silo/registry"

// Head-term page for "movers abu dhabi". Copy lives in lib/silo/silo6-head.ts; this route exists
// because the URL sits outside the /moving-storage-abu-dhabi/ prefix the [page] segment serves.
const content = PAGE_BY_PATH["/movers-abu-dhabi"]

export const metadata: Metadata = metadataFor(content)

export default function Page() {
  return <LandingSiloPage content={content} />
}
