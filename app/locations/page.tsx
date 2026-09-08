import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { EMIRATES } from "@/lib/areas/registry"
import { SILOS, HUB_ORDER, MONEY_PAGE } from "@/lib/silo/silos"
import { facilityListSentence, FACILITY_EMIRATES } from "@/lib/facilities"
import {
  PRICE_PER_SQFT_AED,
  PHONE,
  PHONE_DISPLAY,
  HOURS_DISPLAY,
  RETRIEVAL_WINDOW,
} from "@/lib/company-facts"

/**
 * /locations — the Silo 4 hub.
 *
 * This page used to be a flat list of twelve Dubai districts with a hard-coded
 * array of names, drive times and sub-areas. It is now the index of eight
 * emirate hubs, each of which owns its own districts, which is what gives the
 * locations tree the depth a silo needs — and what finally lets the English
 * paths mirror the Arabic ones at /ar/locations/{emirate}/{area}.
 *
 * Everything below is rendered from lib/areas/registry.ts. Adding an emirate or
 * an area to that registry lists it here automatically; there is no array in
 * this file to keep in step, which is how the old one drifted out of date.
 */

const URL = "https://safestorage.ae/locations"

export const metadata: Metadata = {
  title: { absolute: "Storage Locations Across the UAE | SafeStorage" },
  description:
    "Every emirate and district we collect from — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain. Door-to-door collection from AED 12.65 per sq ft.",
  keywords:
    "storage locations uae, storage locations dubai, self storage near me uae, storage areas dubai, storage emirates uae",
  openGraph: {
    title: "Storage Locations Across the UAE | SafeStorage",
    description:
      "Every emirate and district we collect from, with the local access detail that actually matters.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage — UAE coverage" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: URL,
    languages: {
      "en-AE": URL,
      "ar-AE": "https://safestorage.ae/ar/locations",
      "x-default": URL,
    },
  },
}

export default function LocationsPage() {
  const totalAreas = EMIRATES.reduce(
    (n, e) => n + e.areas.length + (e.staticAreas?.length ?? 0),
    0,
  )

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${URL}#webpage`,
      name: "Storage Locations Across the UAE",
      description: `SafeStorage collection coverage across ${EMIRATES.length} emirates and ${totalAreas} districts.`,
      url: URL,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
      // Built from the registry the page renders, so it cannot list a hub the
      // page does not show.
      hasPart: EMIRATES.map((e) => ({
        "@type": "WebPage",
        name: e.name,
        url: `https://safestorage.ae/locations/${e.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
        { "@type": "ListItem", position: 2, name: "Locations", item: URL },
      ],
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Locations" }]} />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Where We Collect From
              </h1>
              <p className="mb-4 text-lg text-white/90">
                {EMIRATES.length} emirates and {totalAreas} districts. We come to your address, wrap and
                load, and take everything away — you do not drive anything anywhere.
              </p>
              <p className="mb-8 text-lg text-white/90">
                We operate warehouses in{" "}
                <strong className="text-dubai-gold">{facilityListSentence(FACILITY_EMIRATES)}</strong>. The
                rest is served as a collection service with storage at the nearest facility, and each
                emirate page says plainly which applies. From{" "}
                <strong className="text-dubai-gold">AED {PRICE_PER_SQFT_AED} per sq ft per month</strong>,
                VAT included.
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

        {EMIRATES.map((e, i) => {
          const areas = [
            ...e.areas.map((a) => ({ slug: a.slug, name: a.name })),
            ...(e.staticAreas ?? []).map((a) => ({ slug: a.slug, name: a.name })),
          ].sort((a, b) => a.name.localeCompare(b.name))

          return (
            <section key={e.slug} className={i % 2 === 0 ? "py-14" : "bg-gray-50 py-14"}>
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-2xl font-bold text-dubai-navy">
                      <Link href={`/locations/${e.slug}`} className="hover:text-dubai-darkgold">
                        {e.name}
                      </Link>
                    </h2>
                    <span className="text-sm text-gray-600">
                      {areas.length > 0 ? `${areas.length} districts · ` : ""}
                      {/* The facility claim is read from the EmirateDef, which
                          reads lib/facilities.ts. It is never written by hand. */}
                      {e.facilityKey ? "warehouse in this emirate" : "collection service"}
                    </span>
                  </div>
                  <p className="mb-6 max-w-2xl text-gray-700">{e.hub.blurb}</p>

                  {areas.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {areas.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/locations/${e.slug}/${a.slug}`}
                          className="rounded-full border border-gray-300 bg-white px-3.5 py-1.5 text-sm text-dubai-navy transition-colors hover:border-dubai-gold hover:text-dubai-darkgold"
                        >
                          {a.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={`/locations/${e.slug}`}
                      className="text-sm font-medium text-dubai-navy underline underline-offset-4"
                    >
                      Storage in {e.name} →
                    </Link>
                  )}
                </div>
              </div>
            </section>
          )
        })}

        <section className="border-t border-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold text-dubai-navy">What are you storing?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {HUB_ORDER.filter((k) => k !== "s4").map((k) => (
                  <Link
                    key={SILOS[k].hub}
                    href={SILOS[k].hub}
                    className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-dubai-gold hover:bg-gray-50"
                  >
                    <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">
                      {SILOS[k].name}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">{SILOS[k].blurb}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-100 pt-6 text-sm">
                <Link href={MONEY_PAGE} className="font-medium text-dubai-navy underline underline-offset-4">
                  Local self storage in Dubai
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
              <h2 className="mb-4 text-3xl font-bold">Not sure if we cover your area?</h2>
              <p className="mb-8 text-white/90">
                Send the address. The lists above are the districts we work in constantly, not the boundary
                of where we will drive. Retrieval is normally arranged within {RETRIEVAL_WINDOW}.{" "}
                {HOURS_DISPLAY}.
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
