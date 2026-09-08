import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * Silo 1 · /self-storage-dubai/unit-sizes/ — owns `storage unit sizes`.
 *
 * MOVE from /storage-size-guide, which 301s here in the same commit.
 *
 * ⚠ Keyword ownership (§5.4): `storage size calculator` belongs to
 * /self-storage-dubai/storage-calculator/. This page may MENTION it, never
 * target it — so it is absent from the title, H1 and keywords.
 *
 * Low search volume, high commercial assist: this is a conversion page that
 * stops people booking the wrong size, not a traffic page. It earns its place
 * by being genuinely usable — hence the estimation method, which is the part a
 * table alone cannot do.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage Unit Sizes Dubai | 30 to 270+ Sq Ft Guide" },
  description:
    "Storage unit sizes in Dubai: 30 sq ft for a studio, 60-90 for a 1BHK, 240-270 for a 3BHK villa. See what fits each size and how to estimate yours.",
  keywords:
    "storage unit sizes, storage size guide dubai, storage unit dimensions, 1bhk storage size, how much storage space do i need dubai, 2bhk storage size dubai",
  openGraph: {
    title: "Storage Unit Sizes — How Much Space You Actually Need",
    description:
      "Storage unit sizes in Dubai from 30 to 270+ sq ft, what fits in each, and a four-step method to estimate your own load in ten minutes.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/unit-sizes",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/unit-sizes" },
}

const faqData = [
  {
    question: "What size storage unit do I need for a 1BHK in Dubai?",
    answer:
      "Between 60 and 90 sq ft if the contents are packed and beds and tables are dismantled. That covers a three-seat sofa, dining set, double bed, wardrobe, fridge, washing machine and 20–30 boxes.",
  },
  {
    question: "How big is a 30 sq ft storage unit?",
    answer:
      "About the footprint of a small bathroom. It holds a bed and mattress, one wardrobe's contents, a small fridge, a TV and 10–15 medium boxes — a studio or single room's worth.",
  },
  {
    question: "How do I work out how much storage space I need?",
    answer:
      "Count medium boxes room by room (a Dubai kitchen is typically 8–12 on its own), list large items separately, then convert: 10 stacked boxes is about 6 sq ft, a three-seat sofa about 12, a fridge-freezer about 6. Add 15% for stacking tolerance.",
  },
  {
    question: "What size storage do I need for a 3-bedroom villa?",
    answer:
      "240 to 270 sq ft covers three bedroom sets, majlis and family living furniture, an eight-seat dining set, all white goods, garden furniture and 70–90 boxes. Larger villas move into custom sizing above 270 sq ft.",
  },
  {
    question: "What if I book too small a size?",
    answer:
      "Space is re-measured after your goods are racked, so the monthly rate reflects what's actually used. The problem isn't billing, it's vehicle size on the day — which is why we do a free video walkthrough for anything above a 2BHK.",
  },
  {
    question: "Do unpacked items need more space?",
    answer:
      "Yes, roughly 30 to 40% more than the same contents properly boxed. Paying for a packing crew often reduces the monthly storage cost by more than the packing costs.",
  },
]

const sizeTable = [
  { size: "30 sq ft", named: "1 RK", like: "A small bathroom", typical: "Studio or single room" },
  { size: "60–90 sq ft", named: "1 BHK", like: "A large walk-in wardrobe", typical: "One-bedroom apartment" },
  { size: "120–150 sq ft", named: "2 BHK", like: "A single-car garage", typical: "Two-bedroom apartment" },
  { size: "240–270 sq ft", named: "3 BHK", like: "A double garage", typical: "Three-bedroom apartment or small villa" },
  { size: "270+ sq ft", named: "Custom", like: "A warehouse bay", typical: "Larger villa, office, retail stock" },
]

const estimateSteps = [
  {
    n: 1,
    h: "Count boxes, not rooms",
    p: "Walk each room and count how many medium boxes the loose contents would fill. Kitchens are always more than people expect — a normal Dubai kitchen is 8 to 12 boxes on its own. A wardrobe is 4 to 6. Books are heavy and small; use small boxes.",
  },
  {
    n: 2,
    h: "List the big items separately",
    p: "Sofas by seat count, beds by size, wardrobes by door count, appliances individually. Note anything that won't dismantle.",
  },
  {
    n: 3,
    h: "Apply the rough conversion",
    p: "Ten medium boxes stacked take about 6 sq ft of floor. A three-seat sofa is about 12 sq ft. A double bed frame flat-packed with mattress upright is about 8. A large wardrobe is 10 to 15. A fridge-freezer is 6.",
  },
  {
    n: 4,
    h: "Add 15%, not 50%",
    p: "You need aisle and stacking tolerance, not a spare room. If your total lands between two sizes, tell us both numbers and we'll rack it and bill on what it actually occupies.",
  },
]

const throwsOff = [
  {
    h: "Awkward-shaped items",
    p: "A piano, a treadmill, a corner sofa that won't separate, a marble table top, a full-height mirrored wardrobe. Each of these eats floor space well beyond its volume because nothing stacks on top of it.",
  },
  {
    h: "Unpacked goods",
    p: "The biggest single variable. Loose contents can need 40% more space than the same contents boxed. This is why paying for packing frequently lowers the total bill instead of raising it.",
  },
  {
    h: "Fragile items that can't be stacked",
    p: "Glass table tops, framed art, mirrors, TVs. They get crated and stood, not layered.",
  },
  {
    h: "The “while we're at it” pile",
    p: "Nearly every household adds 10 to 20% on the day — the balcony stuff, the maid's room, the boxes in the wardrobe that nobody counted. Assume it.",
  },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Storage unit sizes in Dubai",
    itemListElement: sizeTable.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.size} (${s.named})`,
      description: `${s.like}. Typically suits: ${s.typical}.`,
    })),
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

export default function UnitSizesPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Unit Sizes" },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Storage Unit Sizes — How Much Space You Actually Need
              </h1>
              <p className="mb-4 text-lg text-white/90">
                Most people booking storage in Dubai for the first time guess high. It makes sense: you&rsquo;re standing
                in a flat that feels full, and the idea that all of it fits into something the size of a garage seems
                optimistic.
              </p>
              <p className="mb-4 text-lg text-white/90">
                Packed properly, it usually does. A complete one-bedroom apartment — sofa, dining set, bed, wardrobe,
                fridge, washing machine, thirty boxes — fits into 60 to 90 square feet of racked storage. That&rsquo;s a
                large walk-in wardrobe.
              </p>
              <p className="mb-8 text-lg text-white/90">
                This guide is part of our{" "}
                <Link href="/self-storage-dubai" className="underline decoration-dubai-gold underline-offset-4">
                  self storage in Dubai
                </Link>{" "}
                resources. If you already know your size and want to book,{" "}
                <Link
                  href="/self-storage-dubai/local-self-storage"
                  className="underline decoration-dubai-gold underline-offset-4"
                >
                  local storage with door-to-door collection
                </Link>{" "}
                is the page you want. Sizes run from 30 sq ft upwards, from{" "}
                <strong className="text-dubai-gold">AED 12.65 per sq ft per month</strong>.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get your size confirmed</Link>
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
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">The five standard storage sizes in Dubai</h2>
              <p className="mb-8 text-gray-700">
                UAE storage is sold in square feet of floor space at standard warehouse height. Sizes here are matched to
                Dubai apartment types, because that&rsquo;s how people actually think about it.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Size</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Named as</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Roughly like</th>
                      <th className="py-3 font-semibold text-dubai-navy">Typical home</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeTable.map((s) => (
                      <tr key={s.size} className="border-b border-gray-100">
                        <td className="py-3 pr-4 whitespace-nowrap font-medium text-dubai-navy">{s.size}</td>
                        <td className="py-3 pr-4 whitespace-nowrap text-gray-600">{s.named}</td>
                        <td className="py-3 pr-4 text-gray-700">{s.like}</td>
                        <td className="py-3 text-gray-700">{s.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Contents assume goods are packed, dismantled where possible, and stacked — not dumped loose. A full
                breakdown of what fits each size is on the{" "}
                <Link href="/self-storage-dubai/storage-units" className="text-dubai-navy underline underline-offset-2">
                  storage units page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">How to estimate your own size without a survey</h2>
              <p className="mb-8 text-gray-700">
                Four steps. Takes about ten minutes and gets you within roughly 15% most of the time.
              </p>
              <div className="space-y-5">
                {estimateSteps.map((s) => (
                  <div key={s.n} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-dubai-navy text-sm font-semibold text-white">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-semibold text-dubai-navy">{s.h}</h3>
                      <p className="text-sm text-gray-600">{s.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">What throws the estimate off</h2>
              <p className="mb-8 text-gray-700">
                Being straight about this saves an awkward conversation on pickup day.
              </p>
              <div className="space-y-5">
                {throwsOff.map((t) => (
                  <div key={t.h} className="border-l-4 border-dubai-gold pl-5">
                    <h3 className="mb-1 font-semibold text-dubai-navy">{t.h}</h3>
                    <p className="text-gray-700">{t.p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                And the honest downside: if you underbook badly, the crew can&rsquo;t magic space out of a full truck on
                the day. We&rsquo;d rather do a two-minute video walkthrough beforehand than turn up with the wrong
                vehicle. It costs nothing and it&rsquo;s the difference between a three-hour job and a rescheduled one.
              </p>
              <p className="mt-4 text-gray-700">
                Loose goods needing 40% more space is also why packing usually lowers the bill — the{" "}
                <Link href="/self-storage-dubai/prices" className="text-dubai-navy underline underline-offset-2">
                  pricing page
                </Link>{" "}
                explains that maths.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">Choosing a size for how long you&rsquo;ll store</h2>
              <p className="text-gray-700">
                Space and duration interact. A three-week booking between leases can be packed tight and dense because
                nobody needs to reach anything — see{" "}
                <Link href="/self-storage-dubai/short-term" className="text-dubai-navy underline underline-offset-2">
                  short term storage
                </Link>
                . A booking running two years is better racked with access lanes so single items can be pulled without
                unstacking, which uses slightly more space and is worth it.
              </p>
              <p className="mt-4 text-gray-700">
                If you want a fixed area rather than a service-based booking, that is priced by the square foot from 30 sq
                ft up, and the number you land on here is the number you&rsquo;d be renting.
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
              <h2 className="mb-4 text-3xl font-bold">Get your size confirmed</h2>
              <p className="mb-8 text-white/90">
                Send a WhatsApp voice note with your rooms, or a two-minute video walkthrough. We&rsquo;ll give you a size
                and a price the same day.
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
