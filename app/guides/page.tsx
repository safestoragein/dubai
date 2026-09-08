import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloHubLinks } from "@/components/silo/silo-links"
import { navFor, pagesInSilo, HAND_WRITTEN } from "@/lib/silo/registry"
import { MONEY_PAGE } from "@/lib/silo/silos"
import { PHONE, PHONE_DISPLAY } from "@/lib/company-facts"

/**
 * /guides — the guides hub.
 *
 * The ten guides used to sit at flat root URLs, seven of them with a year in
 * the slug (/dubai-cost-of-living-2026, /moving-to-dubai-2026 …). Those pages
 * went stale every January and had no parent, so they collected no topical
 * signal and passed none on. They are now children of this hub at undated URLs,
 * with 301s from the old ones.
 *
 * Rule 5 of the linking plan: guides link DOWN into one or two silo pages, and
 * silo pages do not link back up into guides except from a hub. This page is
 * that hub, which is why it carries the links into the commercial silos.
 */

const URL = "https://safestorage.ae/guides"

export const metadata: Metadata = {
  title: { absolute: "Storage & Moving Guides | SafeStorage Dubai" },
  description:
    "Practical guides to storing, moving and living in Dubai — what storage costs, how to pack for it, when the city moves, and how the operators compare.",
  keywords:
    "dubai storage guides, moving to dubai guide, dubai cost of living, storage advice dubai, dubai relocation guides",
  openGraph: {
    title: "Storage & Moving Guides | SafeStorage Dubai",
    description:
      "Practical guides to storing, moving and living in Dubai, written from ten years of doing it.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: URL,
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: URL },
}

export default function GuidesHubPage() {
  const guides = [
    ...pagesInSilo("guides").map((p) => p.path),
    ...Object.keys(HAND_WRITTEN).filter((p) => HAND_WRITTEN[p].silo === "guides"),
  ]
    .map(navFor)
    .filter(Boolean)
    .sort((a, b) => a!.label.localeCompare(b!.label))

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${URL}#webpage`,
      name: "Storage & Moving Guides",
      description:
        "Practical guides to storing, moving and living in Dubai from SafeStorage.",
      url: URL,
      isPartOf: { "@id": "https://safestorage.ae/#website" },
      inLanguage: "en-AE",
      // Built from the same array the page renders, so the markup cannot list
      // a guide the page does not show.
      hasPart: guides.map((g) => ({
        "@type": "Article",
        headline: g!.label,
        url: `https://safestorage.ae${g!.href}`,
      })),
    },
  ]

  return (
    <>
      <SchemaScript schema={schemas} />
      <SiloBreadcrumb trail={[{ name: "Home", href: "/" }, { name: "Guides" }]} />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Storage and Moving Guides
              </h1>
              <p className="mb-4 text-lg text-white/90">
                Ten years of collecting from Dubai flats, villas and offices produces a certain amount of
                accumulated knowledge about how this city actually moves. These are the parts of it worth
                writing down.
              </p>
              <p className="mb-8 text-lg text-white/90">
                Nothing here is a sales page. Where the honest answer is that you want a different service, or
                a different company, the guide says so.
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
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">All guides</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {guides.map((g) => (
                  <Link
                    key={g!.href}
                    href={g!.href}
                    className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-dubai-gold hover:bg-gray-50"
                  >
                    <span className="block font-semibold text-dubai-navy group-hover:text-dubai-darkgold">
                      {g!.label}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">{g!.blurb}</span>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                If what you actually want is a price rather than a guide,{" "}
                <Link
                  href={MONEY_PAGE}
                  className="text-dubai-navy underline decoration-dubai-gold/60 underline-offset-2"
                >
                  local self storage in Dubai
                </Link>{" "}
                is the shorter route.
              </p>
            </div>
          </div>
        </section>

        <SiloHubLinks silo="guides" />

        <section className="bg-dubai-navy py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Question a guide did not answer?</h2>
              <p className="mb-8 text-white/90">
                Send it. If it comes up more than a couple of times it usually becomes a guide.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/contact">Ask us</Link>
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
