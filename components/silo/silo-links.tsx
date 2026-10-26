import Link from "next/link"
import {
  Banknote, Bike, Boxes, Building2, CalendarDays, Calculator, Car, ClipboardList, Clock, Dumbbell,
  FileText, Hammer, Home, Layers, Lock, Luggage, MapPin, Package, Plane, ShieldCheck, Shirt,
  ShoppingBag, Snowflake, Sofa, Sun, Truck, Warehouse, Wrench,
} from "lucide-react"
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

/** A colour per card, in order, so a row of links is not four grey boxes. */
const TINTS = [
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

/** The icon that fits what the link is about, by its own words. Areas are
 *  checked first: "Business Bay" is a place, not a business service. */
function linkIcon(label: string) {
  const t = label.toLowerCase()
  if (/marina|bay|jvc|jlt|barsha|mirdif|jumeirah|deira|karama|bur dubai|silicon|international city/.test(t)) return MapPin
  if (/near me|near you/.test(t)) return MapPin
  if (/calculator|size/.test(t)) return Calculator
  if (/insurance/.test(t)) return ShieldCheck
  if (/24 hour|access/.test(t)) return Clock
  if (/climate|controlled/.test(t)) return Snowflake
  if (/secure|safe/.test(t)) return Lock
  if (/warehouse/.test(t)) return Warehouse
  if (/pallet/.test(t)) return Layers
  if (/archive|document/.test(t)) return FileText
  if (/inventory|stock|3pl/.test(t)) return Boxes
  if (/retail/.test(t)) return ShoppingBag
  if (/equipment storage|exhibition|event/.test(t)) return Wrench
  if (/motorbike|bike/.test(t)) return Bike
  if (/car|vehicle/.test(t)) return Car
  if (/luggage/.test(t)) return Luggage
  if (/wardrobe|clothes/.test(t)) return Shirt
  if (/sports/.test(t)) return Dumbbell
  if (/seasonal/.test(t)) return Sun
  if (/renovation/.test(t)) return Hammer
  if (/furniture/.test(t)) return Sofa
  if (/villa|household|house|home/.test(t)) return Home
  if (/apartment|flat|office|company|free zone|companies|business/.test(t)) return Building2
  if (/international|leaving the uae/.test(t)) return Plane
  if (/movers|moving|relocation/.test(t)) return Truck
  if (/packing/.test(t)) return Package
  if (/checklist/.test(t)) return ClipboardList
  if (/calendar|tenancy|long term|monthly/.test(t)) return CalendarDays
  if (/cost|price|how much/.test(t)) return Banknote
  return Boxes
}

const CARD =
  "group flex items-start gap-3 rounded-lg border border-gray-200 p-5 transition-colors hover:border-dubai-gold hover:bg-gray-50"

function Card({ href, label, blurb, i = 0 }: { href: string; label: string; blurb: string; i?: number }) {
  const Icon = linkIcon(label)
  const tint = TINTS[i % TINTS.length]
  return (
    <Link href={href} className={CARD}>
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]"
        style={{ background: tint.bg, color: tint.fg }}
      >
        <Icon size={18} strokeWidth={1.9} />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">{label}</span>
        <span className="mt-1 block text-sm text-gray-600">{blurb}</span>
      </span>
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
            {resolved.map((s, i) => (
              <Card key={s!.href} {...s!} i={i} />
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
              {children.map((c, i) => (
                <Card key={c!.href} {...c!} i={i} />
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
              {otherHubs.map((h, i) => (
                <Card key={h.hub} href={h.hub} label={h.name} blurb={h.blurb} i={i} />
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
