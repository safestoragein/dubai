import Link from "next/link"
import { EMIRATE_BY_SLUG } from "@/lib/areas/registry"
import { SILOS, MONEY_PAGE, moneyAnchor } from "@/lib/silo/silos"

/**
 * The link block for a hand-written district page.
 *
 * Dubai's sixteen original area pages were written as flat /locations/{area}
 * URLs before an emirate level existed, so none of them link up to a hub —
 * which is exactly what the re-path was for. Rather than hand-edit sixteen
 * files with sixteen chances to get the link set wrong, they render this.
 *
 * It mirrors what the shared AreaPage template already renders for the
 * data-driven districts: neighbouring areas, the emirate hub, the money page
 * and the five silo hubs. Neighbours come from lib/areas/<emirate>.ts, so
 * adding an area to that file links it from its neighbours automatically.
 */
export default function AreaLinks({ emirate: slug, area }: { emirate: string; area: string }) {
  const emirate = EMIRATE_BY_SLUG[slug]
  if (!emirate) return null

  const base = `/locations/${emirate.slug}`
  const all = [
    ...emirate.areas.map((a) => ({ slug: a.slug, name: a.name })),
    ...(emirate.staticAreas ?? []).map((a) => ({ slug: a.slug, name: a.name })),
  ]

  // Neighbours: whoever names this area as nearby, then fill from the list.
  // Four is the cap — rule 2 of the linking plan is that extra sibling links
  // dilute rather than reinforce.
  const named = emirate.areas.filter((a) => a.nearby.includes(area)).map((a) => a.slug)
  const nearby = [...new Set([...named, ...all.map((a) => a.slug)])]
    .filter((s) => s !== area)
    .slice(0, 4)
    .map((s) => all.find((a) => a.slug === s)!)
    .filter(Boolean)

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-dubai-navy">We also collect from these areas</h2>
          <div className="mb-8 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`${base}/${n.slug}`}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-dubai-navy transition-colors hover:border-dubai-gold hover:text-dubai-darkgold"
              >
                {n.name} ↗
              </Link>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-bold text-dubai-navy">What are you storing?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {(["s1", "s2", "s3", "s5"] as const).map((k) => (
              <Link
                key={SILOS[k].hub}
                href={SILOS[k].hub}
                className="group rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-dubai-gold"
              >
                <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">
                  {SILOS[k].name}
                </span>
                <span className="mt-1 block text-sm text-gray-600">{SILOS[k].blurb}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-6 text-sm">
            <Link href={base} className="font-medium text-dubai-navy underline underline-offset-4">
              ← All {emirate.name} service areas
            </Link>
            <Link href={MONEY_PAGE} className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy">
              {moneyAnchor(`${base}/${area}`)}
            </Link>
            <Link href="/locations" className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy">
              All emirates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
