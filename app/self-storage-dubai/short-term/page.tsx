import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * Silo 1 · /self-storage-dubai/short-term/ — owns `short term storage dubai`
 * (1,900/mo), the highest-volume keyword in the silo.
 *
 * MOVE from /short-term-storage-dubai, which 301s here in the same commit.
 *
 * Intent is urgent-transactional: the searcher almost always has a date problem
 * — a lease ending, a handover slipping, a flight booked. Minimum term,
 * collection speed and lock-in are the three things that convert here, so they
 * are all above the fold. General storage marketing does not work on this query.
 *
 * ⚠ The source copy carried a [VERIFY] on part-month and two-week billing
 * policy. This page states the minimum booking and monthly billing, which are
 * confirmed, and does NOT claim pro-rating. Add that only once confirmed.
 */

export const metadata: Metadata = {
  title: { absolute: "Short Term Storage Dubai | 2 Weeks to 3 Months" },
  description:
    "Short term storage in Dubai for the gap between Ejari leases. Two weeks to three months, no lock-in, from AED 12.65 per sq ft. Same-day pickup.",
  keywords:
    "short term storage dubai, short term storage, temporary storage dubai, monthly storage dubai, storage for 1 month dubai, storage between leases dubai, 2 week storage dubai, interim storage dubai",
  openGraph: {
    title: "Short Term Storage in Dubai — From Two Weeks, No Lock-In",
    description:
      "Storage for the gap between leases. Two weeks to three months, no lock-in, same-day collection across most of Dubai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/short-term",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/short-term" },
}

const faqData = [
  {
    question: "What's the minimum term for short term storage in Dubai?",
    answer:
      "Two weeks. There's no lock-in and no six-month minimum, which is the point — most bookings exist because an Ejari ended before the next lease started, and that gap is usually 17 to 30 days.",
  },
  {
    question: "Can you collect my things the same day?",
    answer:
      "Across most of Dubai, yes, for a 2BHK or smaller if you call before midday. Villa loads above three bedrooms need one to two days. In late June and August, book about a week ahead — those are the busiest weeks of the Dubai moving year.",
  },
  {
    question: "How much does one month of storage cost in Dubai?",
    answer:
      "From AED 12.65 per square foot per month. A one-bedroom flat needs 60–90 sq ft, a studio around 30 sq ft. Collection, packing materials, transport and return delivery are included in the quote.",
  },
  {
    question: "Can I extend a short term booking?",
    answer:
      "Yes, month by month with no penalty. Past three months the booking usually shifts onto long-term pricing, which works out better per month than repeatedly extending a short one.",
  },
  {
    question: "Can I get something out mid-booking?",
    answer:
      "Yes, with one to two working days' notice. Tell the crew at pickup which cartons you might want early and they'll be stored where they're reachable — short bookings are packed densely, so unplanned retrievals are slower.",
  },
  {
    question: "Do you deliver to the new address when the lease starts?",
    answer:
      "Yes. Return delivery to any address in Dubai is part of the quote. Give us the new address and a date and we'll schedule it; deliveries into towers usually need the building's move-in slot booked in advance.",
  },
  {
    question: "What if my new place is delayed again?",
    answer:
      "You keep the storage running month to month and tell us the new date when you have it. There's no re-booking fee and nothing to renegotiate. Delayed handovers are one of the main reasons this service exists.",
  },
  {
    question: "Is short term storage climate controlled?",
    answer:
      "Yes, the same facilities as long-term bookings. Three weeks in an unmanaged shed during a Dubai August is long enough to lift veneer and bloom mould in upholstery, so this isn't something to skip on a short booking.",
  },
]

const bookingShapes = [
  { len: "2–3 weeks", reason: "Ejari gap", pack: "Dense, sealed, nothing needs reaching" },
  { len: "1 month", reason: "Lease overlap or short trip", pack: "Dense, with day-one boxes accessible" },
  { len: "6–10 weeks", reason: "Renovation", pack: "Grouped by room for a clean move-back" },
  { len: "2–3 months", reason: "Summer away, job probation", pack: "Standard racked, seasonal items at the front" },
  { len: "3 months+", reason: "Rolls into long-term pricing", pack: "Racked with access lanes" },
]

const bookingNeeds = [
  { h: "Rough size", p: "Number of bedrooms is enough for a first quote." },
  {
    h: "Pickup address and floor",
    p: "Plus whether there's a service lift, because that changes the crew.",
  },
  { h: "Collection date and target return date", p: "Even approximate." },
  { h: "Whether you're packing or we are", p: "It changes both the crew size and the space you'll need." },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/short-term#service",
    serviceType: "Short term storage",
    name: "Short Term Storage in Dubai",
    description:
      "Short term storage in Dubai from two weeks with no lock-in. Door-to-door collection, packing, itemised inventory and return delivery to the new address, from AED 12.65 per sq ft per month.",
    areaServed: { "@type": "City", name: "Dubai" },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: "12.65",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "AED",
        price: "12.65",
        unitText: "square foot per month",
      },
      url: "https://safestorage.ae/self-storage-dubai/short-term",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
]

export default function ShortTermStoragePage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Short Term Storage" },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Short Term Storage in Dubai — From Two Weeks, No Lock-In
              </h1>
              <p className="mb-4 text-lg text-white/90">
                Almost every short term storage enquiry we get in Dubai starts the same way: a date that doesn&rsquo;t line
                up with another date.
              </p>
              <p className="mb-4 text-lg text-white/90">
                Your Ejari ends on the 3rd. The new place is ready on the 20th. That&rsquo;s seventeen days of owning a
                flat&rsquo;s worth of furniture and having nowhere to put it. Hotels don&rsquo;t take sofas.
              </p>
              <p className="mb-4 text-lg text-white/90">
                We take bookings from <strong className="text-dubai-gold">two weeks</strong>, with no lock-in and no
                six-month minimum. Our team collects from your building, packs, itemises everything, stores it, and brings
                it to the new address when you&rsquo;re ready. Rates start at{" "}
                <strong className="text-dubai-gold">AED 12.65 per sq ft per month</strong>, which is part of the wider{" "}
                <Link href="/self-storage-dubai" className="underline decoration-dubai-gold underline-offset-4">
                  self storage in Dubai
                </Link>{" "}
                service.
              </p>
              <p className="mb-8 text-lg text-white/90">
                Across most of Dubai we can collect the same day if you call before midday. If your dates are already
                tight, that matters more than anything else on this page.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer">
                    WhatsApp — send your dates
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white bg-white text-black hover:bg-gray-100" asChild>
                  <a href="tel:+971505773388">Call +971 50 577 3388</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">What a short booking actually looks like</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Booking length</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Common reason</th>
                      <th className="py-3 font-semibold text-dubai-navy">How we pack it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingShapes.map((b) => (
                      <tr key={b.len} className="border-b border-gray-100">
                        <td className="py-3 pr-4 whitespace-nowrap font-medium text-dubai-navy">{b.len}</td>
                        <td className="py-3 pr-4 text-gray-700">{b.reason}</td>
                        <td className="py-3 text-gray-600">{b.pack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-gray-700">
                Short bookings get packed differently. If nothing needs to come out for three weeks, we can stack tighter
                and you pay for less space. Tell us the return date and we&rsquo;ll use it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">How fast we can actually collect</h2>
              <p className="mb-4 text-gray-700">
                Call before noon with a 2BHK or smaller and you&rsquo;ll normally get a truck the same day. Next-day is
                close to certain. Anything larger than a three-bedroom villa wants a day or two of lead time so we can put
                the right crew and the right vehicle on it.
              </p>
              <p className="mb-4 text-gray-700">
                The exceptions are worth naming. Late June and most of August are the peak of the Dubai moving season —
                school year ending, expat exits, lease cycles all landing at once. In those weeks, same-day is not
                guaranteed and we&rsquo;ll tell you so on the call rather than at 9am on moving day. If your dates are
                fixed and they fall in that window, book a week ahead.
              </p>
              <p className="text-gray-700">
                Sharjah, Ajman and Abu Dhabi collections are usually next-day, with transport quoted before dispatch.{" "}
                <Link href="/locations" className="text-dubai-navy underline underline-offset-2">
                  All areas we serve
                </Link>{" "}
                are listed by emirate.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">What it costs for a short period</h2>
              <p className="mb-4 text-gray-700">
                From AED 12.65 per sq ft per month, billed monthly, with a two-week minimum booking.
              </p>
              <p className="mb-4 text-gray-700">
                A one-bedroom flat at 75 sq ft for a three-week Ejari gap is a genuinely modest bill compared with the
                alternatives, and the quote includes collection, packing materials, loading, transport, storage and the
                return delivery. That last point matters: a cheap unit rate that excludes two van trips is not cheaper for
                a three-week booking, it&rsquo;s considerably more expensive. The{" "}
                <Link href="/self-storage-dubai/prices" className="text-dubai-navy underline underline-offset-2">
                  storage price breakdown
                </Link>{" "}
                sets out the comparison properly.
              </p>
              <p className="text-gray-700">
                Sizes: 30 sq ft for a studio, 60–90 for a 1BHK, 120–150 for a 2BHK, 240–270 for a 3BHK. Detail on the{" "}
                <Link href="/self-storage-dubai/unit-sizes" className="text-dubai-navy underline underline-offset-2">
                  unit size guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">
                The honest limitation of short-term storage
              </h2>
              <p className="mb-4 text-gray-700">
                Short bookings are the ones where retrieval requests hurt most, and we&rsquo;d rather say it plainly.
              </p>
              <p className="mb-4 text-gray-700">
                If you store a 1BHK densely for three weeks and then decide on day four that you need the winter coats,
                the blender and one specific box of paperwork, that&rsquo;s a retrieval — one to two working days&rsquo;
                notice, and possibly a charge depending on what&rsquo;s involved. Dense packing is what makes a short
                booking cheap. It&rsquo;s also what makes mid-booking access awkward.
              </p>
              <p className="mb-4 text-gray-700">
                The fix is thirty seconds of thought at pickup. Tell the crew which cartons you might want, and they go on
                the outside where we can reach them. Almost nobody does this and almost everybody wishes they had.
              </p>
              <p className="text-gray-700">
                Also: don&rsquo;t store your passport, your Emirates ID, medication, laptop chargers or the documents you
                need for the new tenancy contract. Keep a single suitcase of live essentials with you. Every month somebody
                stores their car registration papers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">What we need from you to book</h2>
              <p className="mb-8 text-gray-700">Four things, and a WhatsApp message covers all of them.</p>
              <ol className="space-y-4">
                {bookingNeeds.map((b, i) => (
                  <li key={b.h} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-dubai-gold text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="text-gray-700">
                      <strong className="text-dubai-navy">{b.h}</strong> — {b.p}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-gray-700">
                Plan to be around for the first twenty minutes and the last ten. The start is where you point at what goes.
                The end is where you sign off the list. Everything between those two is ours to run. A studio takes two to
                three hours, a 1BHK three to five, a 3BHK villa most of a day.
              </p>
              <p className="mt-4 text-gray-700">
                If you want a specific facility close to your community,{" "}
                <Link
                  href="/self-storage-dubai/local-self-storage"
                  className="text-dubai-navy underline underline-offset-2"
                >
                  local self storage in Dubai
                </Link>{" "}
                covers coverage by area.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">Common questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, i) => (
                  <AccordionItem key={item.question} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-dubai-navy">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="bg-dubai-navy py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Send us your dates</h2>
              <p className="mb-8 text-white/90">Two dates and a bedroom count. That&rsquo;s enough for a price today.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a storage quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white bg-white text-black hover:bg-gray-100" asChild>
                  <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer">
                    WhatsApp us
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/80">+971 50 577 3388 · support@safestorage.ae</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
