import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * ★★ SILO 5 HUB · /moving-storage-dubai/ — owns `moving and storage dubai`
 * (1,900/mo, KD 43, CPC AED 6.98).
 *
 * The single biggest untapped term in the plan: safestorage.ae had NO page for
 * it at all. This SERP is full of movers who don't store and storage companies
 * who don't move, so the wedge is being the one provider that does both under
 * one job number — and being visibly honest about price drivers, which movers
 * in this market are famously not.
 *
 * ⚠ The routing section deliberately does NOT link to the six Silo 5 children
 * (/apartment-movers/, /villa-movers/, /office-movers/, /packing-services/,
 * /inter-emirate-moving/, /leaving-uae-checklist/). They are not built. A hub
 * whose links 404 is worse than a hub that describes the routes in prose and
 * gains the links when the children land.
 *
 * ⚠ [VERIFY] in the source copy: exact permit notice periods and deposits vary
 * per building. The page says permits are normally required and that we arrange
 * them, keeps "typically 24-48 hours" as the hedged figure it is, and makes no
 * claim about deposit amounts.
 */

export const metadata: Metadata = {
  title: { absolute: "Moving and Storage Dubai | One Crew, One Job Number" },
  description:
    "Moving and storage in Dubai from one provider. Packing, moving and storage from AED 12.65/sq ft when your dates don't line up. Same-day quotes.",
  keywords:
    "moving and storage dubai, best movers dubai, movers and packers dubai, moving company dubai, movers dubai, moving and storage services uae, house shifting dubai",
  openGraph: {
    title: "Moving and Storage in Dubai — One Crew, One Job Number",
    description:
      "Pack, move and store with one provider and one barcoded inventory. Storage from AED 12.65 per sq ft per month when your dates don't line up.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/moving-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/moving-storage-dubai" },
}

const faqData = [
  {
    question: "How much does moving and storage cost in Dubai?",
    answer:
      "Moving is quoted per job on volume, access, packing scope and dismantling, and storage runs from AED 12.65 per sq ft per month — around 60–90 sq ft for a one-bedroom, 240–270 for a three-bedroom villa. Get any quote in writing with crew size, truck count and packing scope stated, or the number will move on the day.",
  },
  {
    question: "Can you store my things between two lease dates?",
    answer:
      "Yes, and it's the most common job we do. The typical gap is one to four weeks between an Ejari ending and a new handover. Storage is month to month, so if the new place slips by ten days you extend by ten days rather than renegotiating anything.",
  },
  {
    question: "Do I need a permit to move out of my building?",
    answer:
      "In most Dubai towers, yes. Buildings in Dubai Marina, JLT, Business Bay and Downtown normally require a move permit and a booked service lift slot, typically 24–48 hours in advance, and many restrict moves to evenings or weekends. We arrange it with building management at both ends.",
  },
  {
    question: "How far in advance should I book a move in Dubai?",
    answer:
      "Two to three weeks for a normal move, and longer if your date falls at the end of a month, during the June-to-August exodus, or on a weekend — those are the tightest slots in the calendar. For a handover emergency we can often move within 48 hours in Dubai.",
  },
  {
    question: "Do you pack, or do I?",
    answer:
      "Either. Full pack, fragile-only, or self-pack with us supplying materials. Packing scope is the single biggest variable in a moving quote, so decide it before you compare prices between companies — otherwise you're comparing two different jobs.",
  },
  {
    question: "Will you dismantle wardrobes and take down curtains?",
    answer:
      "Yes, including wall units, bunk beds, TV brackets and curtain rails, and we reassemble at the other end. Split AC units need a technician rather than a moving crew, so tell us at survey stage if any are being taken with you.",
  },
]

const moveTypes = [
  {
    h: "Moving out of an apartment",
    p: "Marina, JLT, Downtown, JVC, Business Bay — tower moves live and die on the service lift booking, the move permit and the hours the building allows.",
  },
  {
    h: "Moving a villa",
    p: "Arabian Ranches, Dubai Hills, DAMAC Hills, Town Square, Al Barsha. Multiple trucks, garden furniture, curtains and split AC units.",
  },
  {
    h: "Moving an office",
    p: "Desks, IT, files, two sets of building permits and a fit-out that isn't finished.",
  },
  {
    h: "Moving to another emirate",
    p: "Dubai to Abu Dhabi, Sharjah, Ajman or Al Ain — different traffic, different building rules, occasionally different paperwork.",
  },
  {
    h: "Just need the packing done",
    p: "Some people move themselves and only want the fragile items wrapped properly. We supply materials and pack what matters.",
  },
]

const savings = [
  {
    h: "One inventory, not two",
    p: "When a mover hands your goods to a storage company, your belongings get counted twice by two firms with two lists and two liability positions. Anything missing sits in the gap between them. With one provider there's one barcoded inventory from your old flat to your new one.",
  },
  {
    h: "No double handling",
    p: "Every extra load and unload is a chance for a scratch. Goods going into storage get loaded once, stored, and delivered once.",
  },
  {
    h: "Flexible dates without a penalty",
    p: "Your handover moves. It nearly always moves. On a month-to-month storage account you extend by a week; with a separate mover you're re-booking a truck at short notice at whatever price is available.",
  },
  {
    h: "One number to call when something goes wrong",
    p: "Not two companies each explaining that it's the other one's part of the job.",
  },
]

const priceDrivers = [
  ["Volume", "Rooms and furniture count, not floor area. A sparsely furnished 3BHK can be a smaller job than a full 1BHK."],
  ["Floors and lift access", "A tower with a booked service lift is straightforward. Four flights of stairs in an older Bur Dubai building is a different crew size."],
  ["Packing scope", "Full pack, fragile-only, or you've packed everything yourself. This is the biggest single variable."],
  ["Dismantling", "Wardrobes, bunk beds, wall units, curtains, TV brackets, split AC units."],
  ["Distance", "Within Dubai, to Sharjah or Ajman, or down to Abu Dhabi."],
  ["Timing", "Weekend and evening slots and end-of-month dates are the busiest windows in Dubai and they price accordingly."],
  ["Storage", "Whether any of it needs storing, and for how long."],
]

const steps = [
  { n: 1, h: "Survey", p: "Video walkthrough or a site visit. Ten minutes for an apartment. We're sizing the truck and the crew, and looking for the things that catch people out — a wall unit that won't come apart, a sofa that came in through a window, a lift that's out of service." },
  { n: 2, h: "Written quote", p: "Crew size, vehicles, packing scope, dismantling, storage if needed, and the date. On one page." },
  { n: 3, h: "Permits and access", p: "We book the service lift and the move permit with building management at both ends. Most towers in Marina, JLT, Business Bay and Downtown need 24–48 hours' notice and restrict move hours." },
  { n: 4, h: "Pack", p: "Cartons, wrap, blankets, wardrobe boxes for hanging clothes. Every box labelled by room. Fragile items wrapped individually, not layered into a carton and hoped for." },
  { n: 5, h: "Move or store", p: "Delivered to the new address, or into storage with a photographed digital inventory, or split between the two — which is what most of our jobs actually are." },
  { n: 6, h: "Reassemble", p: "What we dismantled, we rebuild. Beds made accessible first, because the first night matters more than the last box." },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/moving-storage-dubai#service",
    serviceType: "Moving and storage",
    name: "Moving and Storage in Dubai",
    description:
      "Packing, moving and storage in Dubai from one provider, on one barcoded inventory and one job number. Storage from AED 12.65 per sq ft per month with no lock-in.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    provider: {
      "@type": "Organization",
      name: "SafeStorage",
      telephone: "+971505773388",
      email: "support@safestorage.ae",
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

export default function MovingStorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[{ name: "Home", href: "/" }, { name: "Moving and Storage Dubai" }]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Moving and Storage in Dubai</h1>
              <p className="mb-4 text-lg text-white/90">
                Most Dubai moves need storage and most people don&rsquo;t find that out until two weeks before the truck.
              </p>
              <p className="mb-4 text-lg text-white/90">
                The lease ends on the 8th. The new place is available from the 25th. Or the villa handover slips, or
                you&rsquo;re going from a three-bedroom in Mirdif to a two-bedroom in JVC and a third of the furniture has
                nowhere to go. Seventeen days with your entire home in a hotel room isn&rsquo;t a plan.
              </p>
              <p className="mb-4 text-lg text-white/90">
                We do both halves. <strong className="text-dubai-gold">Moving and storage</strong> with one crew, one
                inventory and one job number — we pack your home or office, move what&rsquo;s going to the new address,
                and store whatever needs storing from{" "}
                <strong className="text-dubai-gold">AED 12.65 per sq ft per month</strong> with no lock-in. If the dates
                change, and in this city they usually do, we hold the goods and re-book the delivery instead of leaving
                you to find a warehouse on a Thursday afternoon.
              </p>
              <p className="mb-8 text-lg text-white/90">
                That&rsquo;s the practical difference between a mover and a moving-and-storage company. A mover&rsquo;s job
                ends when the truck is empty.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a moving quote</Link>
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
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">The kind of move you&rsquo;re making</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {moveTypes.map((m) => (
                  <div key={m.h} className="rounded-lg border border-gray-200 p-5">
                    <h3 className="mb-2 font-semibold text-dubai-navy">{m.h}</h3>
                    <p className="text-sm text-gray-600">{m.p}</p>
                  </div>
                ))}
                <div className="rounded-lg border border-gray-200 p-5">
                  <h3 className="mb-2 font-semibold text-dubai-navy">Leaving the UAE</h3>
                  <p className="text-sm text-gray-600">
                    Sea freight, air freight, or store here while you decide.{" "}
                    <Link href="/international-relocation" className="text-dubai-navy underline underline-offset-2">
                      International relocation from Dubai
                    </Link>{" "}
                    explains the options and the real timelines.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-700">
                Arriving rather than leaving? If this is your first move into the country, our{" "}
                <Link href="/moving-to-dubai-2026" className="text-dubai-navy underline underline-offset-2">
                  moving to Dubai guide
                </Link>{" "}
                covers the visa, housing and shipping sequence before any of the above applies to you.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">
                What &ldquo;moving and storage&rdquo; together actually saves you
              </h2>
              <p className="mb-8 text-gray-700">It isn&rsquo;t just convenience. There are four concrete differences.</p>
              <div className="grid gap-5 md:grid-cols-2">
                {savings.map((s) => (
                  <div key={s.h} className="rounded-lg bg-white p-5 shadow-sm">
                    <h3 className="mb-2 font-semibold text-dubai-navy">{s.h}</h3>
                    <p className="text-sm text-gray-600">{s.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">
                What a Dubai move actually costs, and what changes it
              </h2>
              <p className="mb-8 text-gray-700">
                Nobody can quote a house move accurately from a web page, and anyone who gives you a firm price without
                asking these questions is going to revise it on the day. Here&rsquo;s what genuinely drives the number.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Factor</th>
                      <th className="py-3 font-semibold text-dubai-navy">Why it changes the price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceDrivers.map(([f, w]) => (
                      <tr key={f} className="border-b border-gray-100">
                        <td className="py-3 pr-4 whitespace-nowrap font-medium text-dubai-navy">{f}</td>
                        <td className="py-3 text-gray-700">{w}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-gray-700">
                Storage is billed by space and time from AED 12.65 per sq ft per month. As a rough sizing guide: a
                studio&rsquo;s contents need around 30 sq ft, a one-bed 60–90, a two-bed 120–150, a three-bed villa
                240–270. The{" "}
                <Link href="/self-storage-dubai/unit-sizes" className="text-dubai-navy underline underline-offset-2">
                  unit size guide
                </Link>{" "}
                and the{" "}
                <Link href="/self-storage-dubai/prices" className="text-dubai-navy underline underline-offset-2">
                  storage price breakdown
                </Link>{" "}
                cover the storage half properly.
              </p>
              <div className="mt-6 border-l-4 border-dubai-gold bg-gray-50 p-5">
                <p className="text-gray-700">
                  Two warnings that will save you money with any company in this market. First, get the quote in writing
                  with the crew size, truck count and packing scope stated — &ldquo;AED X for a 2BHK&rdquo; is not a quote.
                  Second, be wary of a price that&rsquo;s far below everyone else&rsquo;s, because in Dubai&rsquo;s moving
                  market that gap gets recovered on the day through packing materials, &ldquo;stairs charges&rdquo; or a
                  smaller crew that takes twice as long.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">How our moves run</h2>
              <ol className="grid gap-5 md:grid-cols-2">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-dubai-navy text-sm font-semibold text-white">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-semibold text-dubai-navy">{s.h}</h3>
                      <p className="text-sm text-gray-600">{s.p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">When your dates don&rsquo;t line up</h2>
              <p className="mb-4 text-gray-700">
                This is the situation we&rsquo;re built for, so it&rsquo;s worth spelling out what actually happens.
              </p>
              <p className="mb-4 text-gray-700">
                Say your Ejari ends on the 8th and the new place is handed over on the 25th. We pack and clear the old flat
                on the 7th, everything goes into storage on one barcoded inventory, and on the 25th we deliver it into the
                new place and rebuild the furniture. You live out of a suitcase for seventeen days instead of living around
                thirty boxes.
              </p>
              <p className="mb-4 text-gray-700">
                Two variations come up constantly. The first is a partial store: most of it goes to the new address and the
                surplus furniture stays with us while you decide whether to sell it. Downsizing from a villa to an apartment
                almost always ends up here. The second is an open-ended hold, where you&rsquo;re leaving the country and the
                shipment isn&rsquo;t booked yet.
              </p>
              <p className="text-gray-700">
                Both work because storage is billed monthly, not by contract term. If the handover slips a fortnight — and
                Dubai handovers slip — you pay for a fortnight. Nobody renegotiates anything. For a gap you already know
                about,{" "}
                <Link href="/self-storage-dubai/short-term" className="text-dubai-navy underline underline-offset-2">
                  short term storage
                </Link>{" "}
                covers the storage-only version.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">Where we move, and where we don&rsquo;t</h2>
              <p className="mb-4 text-gray-700">
                Across Dubai — Marina, JBR, Palm Jumeirah, JLT, Downtown, Business Bay, DIFC, Jumeirah, Umm Suqeim, Al
                Barsha, Barsha Heights, JVC, JVT, Dubai Hills, Arabian Ranches, DAMAC Hills, Town Square, Motor City,
                Sports City, Al Furjan, Discovery Gardens, Mirdif, Al Warqa, Deira, Bur Dubai, Karama, Al Qusais, Silicon
                Oasis, International City, DIP, Dubai South. Plus Sharjah, Ajman and Abu Dhabi, with transport quoted
                upfront. The full list is in our{" "}
                <Link href="/locations" className="text-dubai-navy underline underline-offset-2">
                  locations directory
                </Link>
                .
              </p>
              <div className="my-6 border-l-4 border-dubai-gold bg-white p-5">
                <p className="text-gray-700">
                  <strong className="text-dubai-navy">The honest limitation:</strong> we&rsquo;re a storage company that
                  moves, not a moving company that happens to have a warehouse. That&rsquo;s an advantage on anything with
                  a storage leg or an uncertain date, and it&rsquo;s a neutral on a straightforward same-day move where a
                  good local mover will serve you just as well. If your move is a one-bedroom from JVC to Al Furjan on a
                  fixed date with no storage at all, get three quotes and pick on price and reviews. We&rsquo;ll still
                  quote it, but we won&rsquo;t pretend we&rsquo;re structurally different for that job.
                </p>
              </div>
              <p className="text-gray-700">
                For storage without a move, the{" "}
                <Link href="/self-storage-dubai" className="text-dubai-navy underline underline-offset-2">
                  self storage hub
                </Link>{" "}
                covers sizes, access and security. Household and long-stay storage sits under{" "}
                {/* PHASE-2 LINK: → /personal-storage-dubai/ */}
                <Link href="/personal-storage" className="text-dubai-navy underline underline-offset-2">
                  personal storage
                </Link>
                , and commercial jobs are on{" "}
                {/* PHASE-2 LINK: → /business-storage-dubai/ */}
                <Link href="/business-storage" className="text-dubai-navy underline underline-offset-2">
                  business storage
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
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
              <h2 className="mb-4 text-3xl font-bold">Get a moving and storage quote</h2>
              <p className="mb-8 text-white/90">
                Tell us the two addresses, the date, and whether anything needs storing in between. Same-day written quote,
                and in most of Dubai we can move inside 48 hours if you&rsquo;re up against a handover.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a moving quote</Link>
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
