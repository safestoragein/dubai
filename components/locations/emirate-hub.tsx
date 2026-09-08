import Link from "next/link"
import { Button } from "@/components/ui/button"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { emirateFaqs } from "@/lib/emirate-faqs"
import { storageLocationSentence } from "@/lib/facilities"
import { SILOS, MONEY_PAGE, HUB_ORDER, moneyAnchor } from "@/lib/silo/silos"
import type { EmirateDef } from "@/lib/areas/types"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  RATING_VALUE,
  REVIEW_COUNT_DISPLAY,
  RETRIEVAL_WINDOW,
  HOURS_DISPLAY,
} from "@/lib/company-facts"

/**
 * Shared renderer for an emirate hub — /locations/{emirate}.
 *
 * Six of the eight emirate hubs did not exist before this: Dubai itself had no
 * hub at all (the Arabic tree pointed at /locations, which is a different
 * page), and Abu Dhabi, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain had
 * nothing in English. Sharjah and Ajman keep their hand-written hub pages.
 *
 * WHAT THIS PAGE HAS TO GET RIGHT
 * -------------------------------
 * The facility claim. Half of these emirates have a warehouse and half do not,
 * and the difference is read from lib/facilities.ts through the EmirateDef
 * rather than written into copy. An emirate with no facility says so plainly —
 * claiming warehouses you do not operate is a Google Business Profile
 * suspension risk as well as being untrue.
 *
 * Exception B of the linking plan applies here: a hub may link down into area
 * pages and across to the five silo hubs, and area pages link back up. That is
 * why "do you cover my area" works without flattening the silo.
 */
export default function EmirateHub({ emirate }: { emirate: EmirateDef }) {
  const base = `/locations/${emirate.slug}`
  const areas = [
    ...emirate.areas.map((a) => ({ slug: a.slug, name: a.name, blurb: a.blurb })),
    ...(emirate.staticAreas ?? []),
  ].sort((a, b) => a.name.localeCompare(b.name))

  const faqs = [
    ...emirate.hub.faqs,
    ...emirateFaqs({
      emirate: emirate.name,
      facilityKey: emirate.facilityKey,
      sampleDistricts: emirate.sampleDistricts,
      university: emirate.university,
    }),
  ]

  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: emirate.name },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-sm font-medium text-dubai-gold">
                {RATING_VALUE}/5 · {REVIEW_COUNT_DISPLAY} reviews worldwide
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{emirate.hub.h1}</h1>
              <p className="mb-4 text-lg text-white/90">{emirate.hub.blurb}</p>
              <p className="mb-8 text-lg text-white/90">
                From{" "}
                <strong className="text-dubai-gold">
                  AED {PRICE_PER_SQFT_AED} per sq ft per month, VAT included
                </strong>
                , on the space your things actually occupy. No minimum term.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a free quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-gray-100"
                  asChild
                >
                  <a href={`tel:${PHONE}`}>Call {PHONE_DISPLAY}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">
                Storage in {emirate.name}, specifically
              </h2>
              {emirate.hub.intro.map((p, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {p}
                </p>
              ))}
              {/* The facility claim, from lib/facilities.ts. Repeated on every
                  hub and every area page because either can be someone's first
                  landing, and it changes on its own if a warehouse opens. */}
              <div className="mt-8 rounded-lg border-l-4 border-dubai-gold bg-gray-50 p-5">
                <strong className="text-dubai-navy">Where your things actually go.</strong>{" "}
                <span className="text-gray-700">
                  {storageLocationSentence(emirate.facilityKey)} We collect from your address in{" "}
                  {emirate.name}, so you do not need to drive anything anywhere. Transport is quoted
                  separately and confirmed before anything is booked, and retrieval is normally arranged
                  within {RETRIEVAL_WINDOW}.
                </span>
              </div>
            </div>
          </div>
        </section>

        {areas.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-2 text-3xl font-bold text-dubai-navy">
                  {areas.length} areas we collect from
                </h2>
                <p className="mb-8 text-gray-700">
                  Each page carries the detail that actually matters locally — which buildings need lift
                  slots booked, where the loading bays are, and what people in that area typically store.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`${base}/${a.slug}`}
                      className="group rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-dubai-gold"
                    >
                      <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">
                        {a.name}
                      </span>
                      <span className="mt-1 block text-sm text-gray-600">{a.blurb}</span>
                    </Link>
                  ))}
                </div>
                <p className="mt-8 text-sm text-gray-600">
                  Not listed? These are the districts we work in constantly, not the boundary of where we
                  will drive. Send the address and we will confirm it.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">
                Questions from {emirate.name}
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <article key={f.q} className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-2 font-semibold text-dubai-navy">{f.q}</h3>
                    <p className="text-gray-700">{f.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exception B: a hub links down into areas and across to the silo
            hubs. Area pages link back up here. */}
        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold text-dubai-navy">What are you storing?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
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
                <Link href="/locations" className="font-medium text-dubai-navy underline underline-offset-4">
                  ← All emirates and areas
                </Link>
                <Link
                  href={MONEY_PAGE}
                  className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy"
                >
                  {moneyAnchor(base)}
                </Link>
                <Link href="/guides" className="text-gray-600 underline underline-offset-4 hover:text-dubai-navy">
                  Storage and moving guides
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dubai-navy py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Storing something from {emirate.name}?</h2>
              <p className="mb-8 text-white/90">
                Free quote, no survey fee, and nothing booked until you agree both numbers — the storage and
                the transport. {HOURS_DISPLAY}.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a free quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-gray-100"
                  asChild
                >
                  <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer">
                    WhatsApp us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
