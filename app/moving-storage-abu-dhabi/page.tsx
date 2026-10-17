import type { Metadata } from "next"
import LandingSiloPage from "@/components/silo/landing-silo-page"
import { metadataFor } from "@/lib/silo/registry"
import { AD_HUB } from "@/lib/silo/silo6"

/*
 * SILO 6 HUB · /moving-storage-abu-dhabi — owns `movers and packers in abu dhabi`.
 *
 * Rendered from lib/silo/silo6.ts with the shared silo renderer (hub mode), so
 * its linking rules, schema and design match every other silo page. The hub is
 * NOT in SILO_PAGES: it is the parent the children link up to, and it lists
 * them through SiloHubLinks.
 */

export const metadata: Metadata = metadataFor(AD_HUB)

export default function Page() {
  return <LandingSiloPage content={AD_HUB} hub />
}
