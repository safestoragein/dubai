import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import SchemaScript from "@/components/schema-script"
import { renderRich } from "./rich-text"
import { SILOS } from "@/lib/silo/silos"
import { SiloLinks } from "./silo-links"
import type { Section, SiloPageContent } from "@/lib/silo/types"
import { PHONE, PHONE_DISPLAY, EMAIL, PRICE_PER_SQFT_AED } from "@/lib/company-facts"

/**
 * The shared renderer for every Silo 1/2/3/5 child page and every guide.
 *
 * Visual language is deliberately identical to the hand-built pages that
 * shipped first (/self-storage-dubai/short-term and the money page): navy hero,
 * alternating white and gray-50 body bands, accordion FAQs, navy closing CTA.
 * A reader should not be able to tell which pages were hand-built.
 *
 * WHAT THIS COMPONENT OWNS, AND WHY
 * ---------------------------------
 * The three internal-link blocks at the bottom are rendered HERE rather than
 * written into each page's copy, because they are the silo rules themselves:
 *
 *   · the sibling block  — rule 2, three to five same-silo links
 *   · the hub link       — rule 1's visible counterpart
 *   · the money-page rail — Exception A, one named URL linkable from anywhere
 *
 * Writing them per page is how they end up on some pages and not others.
 * Rendering them from the registry means a page cannot ship without them.
 */
export default function SiloPage({ content }: { content: SiloPageContent }) {
  const silo = SILOS[content.silo]

  return (
    <>
      <SchemaScript schema={pageSchemas(content)} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: silo.name, href: silo.hub },
          { name: content.crumb },
        ]}
      />

      <main className="min-h-screen">
        {/* ---------- hero ---------- */}
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{content.h1}</h1>
              {content.hero.map((p, i) => (
                <p
                  key={i}
                  className={i === content.hero.length - 1 ? "mb-8 text-lg text-white/90" : "mb-4 text-lg text-white/90"}
                >
                  {renderRich(p, true)}
                </p>
              ))}
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

        {/* ---------- body ---------- */}
        {content.sections.map((section, i) => (
          <section key={i} className={i % 2 === 0 ? "py-16" : "bg-gray-50 py-16"}>
            <div className="container mx-auto px-4">
              <div className={section.kind === "table" ? "mx-auto max-w-4xl" : "mx-auto max-w-3xl"}>
                <SectionBody section={section} />
              </div>
            </div>
          </section>
        ))}

        {/* ---------- FAQ ---------- */}
        {content.faqs.length > 0 && (
          <section className={content.sections.length % 2 === 0 ? "py-16" : "bg-gray-50 py-16"}>
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-3xl font-bold text-dubai-navy">Common questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {content.faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-medium text-dubai-navy">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        <SiloLinks path={content.path} siblings={content.siblings} />

        {/* ---------- closing CTA ---------- */}
        <section className="bg-dubai-navy py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">{content.cta.h2}</h2>
              <p className="mb-8 text-white/90">{content.cta.p}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a storage quote</Link>
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
              <p className="mt-6 text-sm text-white/80">
                {PHONE_DISPLAY} · {EMAIL} · from {PRICE_PER_SQFT_AED} AED per sq ft, VAT included
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

/* -------------------------------------------------------------------------- */

function SectionBody({ section }: { section: Section }) {
  switch (section.kind) {
    case "prose":
      return (
        <>
          <h2 className="mb-6 text-3xl font-bold text-dubai-navy">{section.h2}</h2>
          {section.paras.map((p, i) => (
            <p key={i} className="mb-4 text-gray-700 last:mb-0">
              {renderRich(p)}
            </p>
          ))}
        </>
      )

    case "table":
      return (
        <>
          <h2 className="mb-6 text-3xl font-bold text-dubai-navy">{section.h2}</h2>
          {section.intro && <p className="mb-8 text-gray-700">{renderRich(section.intro)}</p>}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  {section.columns.map((c) => (
                    <th key={c} className="py-3 pr-4 font-semibold text-dubai-navy">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-gray-100">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={
                          i === 0
                            ? "py-3 pr-4 whitespace-nowrap font-medium text-dubai-navy"
                            : "py-3 pr-4 text-gray-700"
                        }
                      >
                        {renderRich(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.note && <p className="mt-8 text-gray-700">{renderRich(section.note)}</p>}
        </>
      )

    case "steps":
      return (
        <>
          <h2 className="mb-6 text-3xl font-bold text-dubai-navy">{section.h2}</h2>
          {section.intro && <p className="mb-8 text-gray-700">{renderRich(section.intro)}</p>}
          <ol className="space-y-4">
            {section.items.map((item, i) => (
              <li key={item.h} className="flex gap-4">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-dubai-gold text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-gray-700">
                  <strong className="text-dubai-navy">{item.h}</strong> — {renderRich(item.p)}
                </p>
              </li>
            ))}
          </ol>
        </>
      )

    case "cards":
      return (
        <>
          <h2 className="mb-6 text-3xl font-bold text-dubai-navy">{section.h2}</h2>
          {section.intro && <p className="mb-8 text-gray-700">{renderRich(section.intro)}</p>}
          <div className="grid gap-6 sm:grid-cols-2">
            {section.items.map((item) => (
              <article key={item.h} className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="mb-3 text-2xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-dubai-navy">{item.h}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{renderRich(item.p)}</p>
              </article>
            ))}
          </div>
        </>
      )

    case "checklist":
      return (
        <>
          <h2 className="mb-6 text-3xl font-bold text-dubai-navy">{section.h2}</h2>
          {section.intro && <p className="mb-6 text-gray-700">{renderRich(section.intro)}</p>}
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="mt-1 flex-none text-dubai-gold" aria-hidden="true">
                  ✓
                </span>
                <span>{renderRich(item)}</span>
              </li>
            ))}
          </ul>
          {section.note && <p className="mt-6 text-gray-700">{renderRich(section.note)}</p>}
        </>
      )
  }
}

/* -------------------------------------------------------------------------- */

const SITE = "https://safestorage.ae"

/**
 * Service + FAQPage + WebPage, built from the SAME arrays the page renders.
 *
 * The FAQPage node is generated from `content.faqs`, which is the array the
 * accordion above iterates. Google treats an FAQPage that marks up questions
 * the page does not display as a structured-data violation, and hand-maintained
 * schema drifts from the rendered copy within about two edits.
 */
export function pageSchemas(content: SiloPageContent) {
  const url = `${SITE}${content.path}`
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: content.title,
      description: content.description,
      url,
      isPartOf: { "@id": `${SITE}/#website` },
      inLanguage: "en-AE",
    },
  ]

  if (content.serviceType) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: content.serviceType,
      name: content.h1,
      description: content.schemaDescription ?? content.description,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "City", name: "Dubai" },
      url,
      offers: {
        "@type": "Offer",
        priceCurrency: "AED",
        price: PRICE_PER_SQFT_AED,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "AED",
          price: PRICE_PER_SQFT_AED,
          unitText: "square foot per month",
        },
        url,
      },
    })
  }

  if (content.datePublished) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: content.h1,
      description: content.description,
      datePublished: content.datePublished,
      dateModified: content.datePublished,
      author: { "@id": `${SITE}/#organization` },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    })
  }

  if (content.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    })
  }

  return schemas
}
