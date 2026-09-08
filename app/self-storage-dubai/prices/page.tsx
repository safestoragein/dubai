import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * Silo 1 · /self-storage-dubai/prices/ — owns `storage in dubai prices` (390/mo),
 * `cheap storage dubai` (390/mo, KD 46) and `storage cost per month`.
 *
 * THIS PAGE IS A MERGE, and the merge is the point. /pricing and
 * /cheap-storage-dubai both 301 here in the same commit. Seven of this site's
 * own URLs currently compete for `storage cost per month` — the worst
 * cannibalisation cluster on the domain — and serving both the "what does it
 * cost" and the "what's cheapest" intent on one page is what ends it.
 *
 * Reframing "cheap" as "cheapest TOTAL cost" is not spin: it is a genuinely
 * different and more winnable argument than competing on headline rate, and it
 * is the honest answer for a door-to-door operator that is not the cheapest
 * quote in Dubai.
 *
 * ⚠ Two [VERIFY] markers in the source copy are handled, not ignored:
 *   - Volume discounts above 270 sq ft are NOT stated. Unconfirmed.
 *   - Long-term discount TIERS are NOT stated. The FAQ says duration affects the
 *     quote, which is true, without inventing numbers.
 * The AED 12.65/sq ft anchor is used because the site already publishes it
 * sitewide, but it still needs confirming as current — every price on this page
 * derives from it.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage in Dubai Prices | From AED 12.65/sq ft" },
  description:
    "Storage in Dubai prices explained: from AED 12.65 per sq ft a month, what changes a quote, and why cheap storage often costs more. Call 050 577 3388.",
  keywords:
    "storage in dubai prices, cheap storage dubai, storage cost per month, storage prices dubai, storage cost dubai, affordable storage dubai, low cost storage dubai, how much does storage cost in dubai",
  openGraph: {
    title: "Storage Prices in Dubai — What It Costs and Why Quotes Differ",
    description:
      "From AED 12.65 per sq ft a month, what changes a quote, and why the cheapest storage quote in Dubai is often the most expensive outcome.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/prices",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/prices" },
}

const faqData = [
  {
    question: "How much does storage cost per month in Dubai?",
    answer:
      "From AED 12.65 per square foot per month. A studio at 30 sq ft is the smallest standard booking; a one-bedroom flat needs 60–90 sq ft; a three-bedroom villa 240–270 sq ft. Collection, packing materials, transport and the digital inventory are included in the quote.",
  },
  {
    question: "What is the cheapest storage in Dubai?",
    answer:
      "The cheapest headline rates come from unserviced units in Al Quoz, Ras Al Khor and DIP where you supply your own transport and labour. Once you add two van hires and two half-days of manpower, those bookings usually cost more in total than a door-to-door quote — and most of them aren't climate-controlled.",
  },
  {
    question: "Is there a minimum storage period or deposit?",
    answer:
      "Minimum booking is two weeks and there's no lock-in contract. Storage runs month to month after that, and you can extend or end with notice.",
  },
  {
    question: "Why do storage quotes in Dubai vary so much?",
    answer:
      "Five factors: stair versus lift access, whether the company packs or you do, which emirate the pickup is in, awkward items like pianos or treadmills, and the length of the booking. A company that quotes without asking about all five will revise the price later.",
  },
  {
    question: "Does the price include collection from my home?",
    answer:
      "Inside Dubai, yes. Sharjah, Ajman and Abu Dhabi collections carry a transport charge that's quoted upfront before dispatch, never added afterwards.",
  },
  {
    question: "Do you charge more in summer?",
    answer:
      "The rate doesn't change, but availability does. June and August are the busiest weeks of the Dubai moving year, so book collection at least a week ahead in those months if your dates are fixed.",
  },
  {
    question: "Am I billed on estimated space or actual space?",
    answer:
      "Actual. Space is re-measured once your goods are racked, so if the load turns out smaller than the phone estimate, the monthly figure comes down.",
  },
  {
    question: "Can I get a discount for storing longer?",
    answer:
      "Longer bookings price better than short rolling ones because the setup cost is spread across more months. Tell us the expected duration when you ask for a quote and it will be reflected in the figure you're given.",
  },
]

const priceRows = [
  { home: "Studio / 1 RK", space: "~30 sq ft", rate: "from AED 12.65 / sq ft / month" },
  { home: "1 bedroom", space: "60–90 sq ft", rate: "from AED 12.65 / sq ft / month" },
  { home: "2 bedrooms", space: "120–150 sq ft", rate: "from AED 12.65 / sq ft / month" },
  { home: "3 bedrooms", space: "240–270 sq ft", rate: "from AED 12.65 / sq ft / month" },
  { home: "Villa / commercial", space: "270+ sq ft", rate: "Quoted after survey" },
]

const quoteFactors = [
  {
    n: 1,
    h: "Stairs and lifts",
    p: "Carrying a two-seater down four flights in August is a different job to rolling it into a service lift. Older buildings in Deira, Bur Dubai, Karama and parts of Al Barsha often have no goods lift, or one that's booked out. This is the single most common reason a quote moves.",
  },
  {
    n: 2,
    h: "Who packs",
    p: "If you've boxed everything yourself, the crew is faster and the load is denser, which reduces both labour and stored volume. If we pack, that's materials and hours. Counter-intuitively, paying for packing often lowers the monthly bill, because professionally packed goods take up meaningfully less space than loose ones.",
  },
  {
    n: 3,
    h: "Distance and emirate",
    p: "Inside Dubai, collection is in the quote. Sharjah, Ajman and Abu Dhabi carry a transport charge, quoted before we dispatch. Nobody should surprise you with this after the truck is loaded.",
  },
  {
    n: 4,
    h: "Awkward items",
    p: "A piano, a treadmill, a marble table top, a five-metre corner sofa, a full-height wardrobe that can't be dismantled. These need extra crew, sometimes a hoist, and they consume floor space out of proportion to their volume.",
  },
  {
    n: 5,
    h: "How long you're storing",
    p: "Short bookings carry more setup cost per month than long ones, so a two-week booking and one running past six months are priced differently for that reason.",
  },
]

const cheapTraps = [
  {
    h: "The rate excludes transport",
    p: "A very low per-square-foot rate usually means you're getting a shelf, not a service. Add a pickup with two men for a half day, twice — once in, once out. That's often more than three months of the storage itself.",
  },
  {
    h: "There's a minimum term",
    p: "A quote of “AED X per month” tied to a six-month lock-in is not cheap if your Ejari gap is nineteen days. We take bookings from two weeks with no lock-in for exactly this reason.",
  },
  {
    h: "The space is measured generously",
    p: "If nobody re-measures after your goods are racked, you're paying for the estimate rather than the reality. Ask whether the final bill is based on actual space used.",
  },
  {
    h: "No climate management",
    p: "This is the expensive one, and it's invisible until you unpack. A non-climate-controlled shed in Al Quoz through July and August will lift veneer off MDF, crack leather, bloom mould inside upholstery and finish off laptops and speakers.",
  },
  {
    h: "No itemised inventory",
    p: "With a labelled-boxes-only system, retrieving one specific item means opening a lot of boxes, or paying for a facility visit and an afternoon. Barcoded inventory is not a luxury feature; it's the thing that keeps the storage useful.",
  },
  {
    h: "Undeclared handling",
    p: "Subcontracted labour hired for the day is cheaper for the operator. It's also how a wardrobe door arrives with a corner missing, and how nobody is quite responsible for it.",
  },
]

const compareQuestions = [
  "Does this price include collection and delivery, or is transport extra?",
  "Is there a minimum term or a lock-in period?",
  "Is the storage area climate-controlled, or just the office?",
  "Will I get an itemised inventory with photographs, or labelled boxes?",
  "What notice do you need to return an item, and what does it cost?",
  "Is the final bill based on estimated space or space actually used?",
]

const savings = [
  ["Pack it yourself, properly.", "Uniform boxes stack. Bin bags don't. Dense, square packing can cut required space by 20–30%."],
  ["Sell before you store.", "The rule of thumb: if replacing an item costs less than two years of the storage space it occupies, sell it. Dubizzle clears furniture in Dubai fast, especially in June."],
  ["Dismantle beds and tables.", "A flat-packed bed frame takes a fraction of the space of an assembled one."],
  ["Be honest about the timeline.", "If you know it's eighteen months, say so. Long bookings price better than a rolling series of short ones."],
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://safestorage.ae/self-storage-dubai/prices#product",
    name: "Storage in Dubai — Pricing",
    description:
      "Door-to-door storage in Dubai from AED 12.65 per square foot per month, with collection, packing materials, transport and a photographed digital inventory included in the quote.",
    brand: { "@type": "Brand", name: "SafeStorage" },
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
      availability: "https://schema.org/InStock",
      url: "https://safestorage.ae/self-storage-dubai/prices",
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

export default function StoragePricesPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Prices" },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Storage Prices in Dubai — What It Costs and Why Quotes Differ
              </h1>
              <p className="mb-4 text-lg text-white/90">
                Storage in Dubai starts at <strong className="text-dubai-gold">AED 12.65 per square foot per month</strong>{" "}
                with us. That&rsquo;s the number, up front, before you scroll.
              </p>
              <p className="mb-4 text-lg text-white/90">
                What it multiplies by is the part people get wrong. Storage is priced by space and by time, so the honest
                answer to &ldquo;how much does storage cost&rdquo; depends entirely on how much stuff you have — and most
                people overestimate their own volume by about a third.
              </p>
              <p className="mb-8 text-lg text-white/90">
                This page sits under{" "}
                <Link href="/self-storage-dubai" className="underline decoration-dubai-gold underline-offset-4">
                  self storage in Dubai
                </Link>{" "}
                and does three things: gives you a price table you can actually use, explains what makes one quote differ
                from another, and explains why the cheapest quote in Dubai is quite often the most expensive outcome. If
                you want to see the service the price buys,{" "}
                <Link
                  href="/self-storage-dubai/local-self-storage"
                  className="underline decoration-dubai-gold underline-offset-4"
                >
                  our local storage offer
                </Link>{" "}
                covers the door-to-door model.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get an exact price</Link>
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
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">Storage prices by home size</h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Your place</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Space usually needed</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Rate</th>
                      <th className="py-3 font-semibold text-dubai-navy">What&rsquo;s included</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceRows.map((r) => (
                      <tr key={r.home} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium text-dubai-navy">{r.home}</td>
                        <td className="py-3 pr-4 whitespace-nowrap text-gray-700">{r.space}</td>
                        <td className="py-3 pr-4 whitespace-nowrap text-gray-700">{r.rate}</td>
                        <td className="py-3 text-gray-600">
                          Collection, packing materials, loading, transport, digital inventory
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-gray-700">
                Two things about that table. The rate is a &ldquo;from&rdquo; rate, because a fourth-floor walk-up in Deira
                and a Marina tower with a booked service lift are not the same job. And the space is re-measured once your
                goods are racked, so you&rsquo;re billed on the space actually used rather than the space we guessed on the
                phone.
              </p>
              <p className="mt-4 text-gray-700">
                Use the{" "}
                <Link href="/self-storage-dubai/unit-sizes" className="text-dubai-navy underline underline-offset-2">
                  storage unit size guide
                </Link>{" "}
                if you want to sanity-check the square footage before you call. If you&rsquo;d rather be told than work it
                out, send a WhatsApp voice note listing your rooms.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">
                The five things that genuinely change a storage quote in Dubai
              </h2>
              <p className="mb-8 text-gray-700">
                Any storage company that gives you a firm price without asking about these is guessing, and the guess will
                be corrected later at your expense.
              </p>
              <div className="space-y-5">
                {quoteFactors.map((f) => (
                  <div key={f.n} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-dubai-navy text-sm font-semibold text-white">
                      {f.n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-semibold text-dubai-navy">{f.h}</h3>
                      <p className="text-sm text-gray-600">{f.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700">
                Short bookings are covered in more detail on{" "}
                <Link href="/self-storage-dubai/short-term" className="text-dubai-navy underline underline-offset-2">
                  short term storage
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">
                Why cheap storage in Dubai is sometimes the expensive option
              </h2>
              <p className="mb-4 text-gray-700">
                &ldquo;Cheap storage Dubai&rdquo; is a heavily searched phrase and we understand exactly why. Storage feels
                like paying rent on something you&rsquo;re not using. Nobody wants to overpay for a room full of boxes.
              </p>
              <p className="mb-8 text-gray-700">
                But storage is one of those purchases where the headline number and the total number diverge badly.
                Here&rsquo;s how, specifically.
              </p>
              <div className="space-y-5">
                {cheapTraps.map((t) => (
                  <div key={t.h} className="border-l-4 border-dubai-gold pl-5">
                    <h3 className="mb-1 font-semibold text-dubai-navy">{t.h}</h3>
                    <p className="text-gray-700">{t.p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                We&rsquo;re not the cheapest quote in Dubai and we don&rsquo;t try to be. What we do is put transport,
                materials, labour, inventory and climate management inside one number, so the number you agree is the
                number you pay.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">How to compare storage quotes properly</h2>
              <p className="mb-6 text-gray-700">
                Ask every company these six questions, including us. The answers separate operators faster than any price
                list.
              </p>
              <ol className="space-y-3">
                {compareQuestions.map((q, i) => (
                  <li key={q} className="flex gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-dubai-gold text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{q}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-gray-700">
                Then compare like for like on a total-cost basis over the number of months you&rsquo;ll actually store. A
                three-month booking and a two-year booking reward completely different choices.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">Ways to genuinely reduce your storage bill</h2>
              <p className="mb-6 text-gray-700">Real ones, not padding.</p>
              <div className="space-y-4">
                {savings.map(([h, p]) => (
                  <p key={h} className="text-gray-700">
                    <strong className="text-dubai-navy">{h}</strong> {p}
                  </p>
                ))}
                <p className="text-gray-700">
                  {/* PHASE-2 LINK: → /business-storage-dubai/ */}
                  <strong className="text-dubai-navy">Don&rsquo;t store paperwork you can scan.</strong> Boxes of documents
                  are dense and heavy and mostly replaceable with a PDF. Businesses with a legal retention requirement are
                  a different case —{" "}
                  <Link href="/business-storage" className="text-dubai-navy underline underline-offset-2">
                    business storage
                  </Link>{" "}
                  covers archive rates.
                </p>
              </div>
              <p className="mt-6 text-gray-700">
                One cost people leave out of the comparison entirely: the driving. Two round trips to Al Quoz in a hired
                van is real money and half a weekend.
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
              <h2 className="mb-4 text-3xl font-bold">Get an exact price</h2>
              <p className="mb-8 text-white/90">
                We&rsquo;ll ask about rooms, floor, lift access, dates and whether you&rsquo;re packing. Then you get a
                fixed figure, usually the same day.
              </p>
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
