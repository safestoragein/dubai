import Link from "next/link"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import { navFor, pagesInSilo, HAND_WRITTEN, siloOf } from "@/lib/silo/registry"
import type { SiloKey } from "@/lib/silo/types"

/**
 * The two internal-link blocks the silo plan requires, as components rather
 * than as copy written into each page.
 *
 * They are here and not in the page bodies for one reason: §8 of the plan is a
 * set of RULES, and rules that have to be retyped on every page get followed on
 * the first ten and forgotten on the rest. Rendering them from the registry
 * means a page physically cannot ship without its up-link, its sibling links,
 * and — where allowed — the money-page link.
 *
 *   <SiloLinks>    goes at the foot of a CHILD page   (rules 1, 2 and 3)
 *   <SiloHubLinks> goes at the foot of a HUB page     (rule 4)
 */

const CARD =
  "group rounded-lg border border-gray-200 p-5 transition-colors hover:border-dubai-gold hover:bg-gray-50"

function Card({ href, label, blurb }: { href: string; label: string; blurb: string }) {
  return (
    <Link href={href} className={CARD}>
      <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">{label}</span>
      <span className="mt-1 block text-sm text-gray-600">{blurb}</span>
    </Link>
  )
}

/**
 * Child-page block: three to five same-silo siblings, the up-link to the hub,
 * and the money page.
 *
 * `siblings` may be omitted on a hand-written page that is not in the content
 * registry — in that case up to four same-silo pages are chosen from the
 * registry so the page still satisfies rule 2.
 */
export function SiloLinks({
  path,
  siblings,
}: {
  path: string
  siblings?: string[]
}) {
  const silo = siloOf(path)
  if (!silo) return null
  const def = SILOS[silo]

  const chosen =
    siblings ??
    [...pagesInSilo(silo).map((p) => p.path), ...Object.keys(HAND_WRITTEN)]
      .filter((p) => siloOf(p) === silo && p !== path)
      .slice(0, 4)

  const resolved = chosen.map(navFor).filter(Boolean)
  const isMoneyPage = path === MONEY_PAGE

  return (
    <section className="border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-2xl font-bold text-dubai-navy">More in {def.name}</h2>
          <p className="mb-8 text-gray-600">
            Everything below is part of the same service — pick the page that matches what you are storing.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {resolved.map((s) => (
              <Card key={s!.href} {...s!} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-100 pt-6 text-sm">
            <Link href={def.hub} className="font-medium text-dubai-navy underline underline-offset-4">
              ← All of {def.name}
            </Link>
            {/* Exception A of the linking plan: the money page is the one named
                URL that any page on the site may link to, regardless of silo. */}
            {!isMoneyPage && (
              <Link href={MONEY_PAGE} className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy">
                {moneyAnchor(path)}
              </Link>
            )}
            {/* Exception B: coverage links down into the locations silo. */}
            <Link href="/locations" className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy">
              Areas we collect from
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Hub block: every child of this silo, then sideways to the other hubs.
 *
 * Rule 4 — hubs link down to all their children and across to the other hubs.
 * Hubs are the ONLY cross-silo connectors on the site, which is what stops the
 * structure flattening back into the sitewide footer it replaced.
 */
export function SiloHubLinks({ silo }: { silo: SiloKey }) {
  const def = SILOS[silo]

  const children = [
    ...pagesInSilo(silo).map((p) => p.path),
    ...Object.keys(HAND_WRITTEN).filter((p) => HAND_WRITTEN[p].silo === silo),
  ]
    .map(navFor)
    .filter(Boolean)
    .sort((a, b) => a!.label.localeCompare(b!.label))

  const otherHubs = HUB_ORDER.filter((k) => k !== silo).map((k) => SILOS[k])

  return (
    <>
      <section className="border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-dubai-navy">Everything in {def.name}</h2>
            <p className="mb-8 text-gray-600">
              {children.length} pages, each covering one thing properly rather than all of it vaguely.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {children.map((c) => (
                <Card key={c!.href} {...c!} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-dubai-navy">Storing something else?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherHubs.map((h) => (
                <Card key={h.hub} href={h.hub} label={h.name} blurb={h.blurb} />
              ))}
              <Card
                href="/guides"
                label={SILOS.guides.name}
                blurb={SILOS.guides.blurb}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
