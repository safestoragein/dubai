import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * Silo 1 · /self-storage-dubai/storage-units/ — owns `storage units dubai` (720/mo, KD 46).
 *
 * MOVE from /storage-units-dubai, which 301s here in the same commit. Both pages
 * live at once is the cannibalisation the register exists to prevent.
 *
 * Links to /near-me/ and /climate-controlled/ are omitted rather than pointed
 * somewhere approximate — those Silo 1 siblings are not built yet, and a link to
 * the wrong page teaches Google the wrong relationship. Add them when they land.
 */

export const metadata: Metadata = {
  title: { absolute: "Storage Units Dubai | Sizes, Security & Prices" },
  description:
    "Storage units in Dubai from 30 to 270+ sq ft, from AED 12.65 per sq ft a month. Palletised, barcoded, CCTV-monitored. Same-day quote: 050 577 3388.",
  keywords:
    "storage units dubai, storage units, storage unit dubai, self storage units dubai, storage unit rental dubai, personal storage units, storage facilities",
  openGraph: {
    title: "Storage Units Dubai — Sizes, Security and What Actually Fits",
    description:
      "Storage units in Dubai from 30 to 270+ sq ft, from AED 12.65 per sq ft a month. Palletised, barcoded and CCTV-monitored.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/storage-units",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/self-storage-dubai/storage-units" },
}

const faqData = [
  {
    question: "How much do storage units cost in Dubai?",
    answer:
      "From AED 12.65 per square foot per month. A 30 sq ft unit suits a studio, 60–90 sq ft a one-bedroom flat, and 240–270 sq ft a three-bedroom villa. Collection, packing materials and transport are included in the quoted price.",
  },
  {
    question: "What size storage unit do I need for a one-bedroom apartment?",
    answer:
      "Between 60 and 90 sq ft if the contents are packed and stacked properly. Unpacked and loose, the same flat can need 120 sq ft, which is why using a packing crew usually reduces the monthly cost rather than adding to it.",
  },
  {
    question: "Do I get my own locked storage unit?",
    answer:
      "Goods are stored in allocated, barcoded space rather than behind a personal padlock. Nothing moves in or out without being scanned against your account, and you get a photographed digital inventory. If a private locked unit is essential, tell us and we'll say honestly whether we're the right fit.",
  },
  {
    question: "Are storage units in Dubai air conditioned?",
    answer:
      "Ours are climate-managed, which matters when Dubai passes 45°C in August. Non-climate-controlled units warp wood, crack leather and shorten the life of anything electronic. Ask any operator to confirm the storage area itself is managed, not just the reception.",
  },
  {
    question: "Can I visit my storage unit?",
    answer:
      "Retrieval is by scheduled delivery rather than walk-in access, normally with one to two working days' notice. Facility visits can be arranged on request. If you need weekly access, a drive-up unit in Al Quoz or DIP is the more honest recommendation.",
  },
  {
    question: "How long can I rent a storage unit for?",
    answer:
      "From two weeks upwards, with no lock-in contract. Most household bookings run between three weeks and eighteen months, and you can extend month by month or end with notice.",
  },
  {
    question: "Can you store a car or motorbike in a storage unit?",
    answer:
      "Vehicles are stored, but not in a standard household unit — they need a separate arrangement with fuel drained and battery disconnected. Ask about vehicle storage when you call.",
  },
  {
    question: "What happens if I need more space than I booked?",
    answer:
      "We adjust the space and the monthly rate rather than making you take a second unit. Size is re-measured after the load is racked, so you're billed on the space actually used.",
  },
]

const unitSizes = [
  {
    size: "30 sq ft",
    home: "1 RK",
    equiv: "A small bathroom",
    fits: "Single or double bed, mattress, one wardrobe's contents, 10–15 medium boxes, a small fridge, a suitcase or three",
  },
  {
    size: "60–90 sq ft",
    home: "1 BHK",
    equiv: "A large walk-in wardrobe",
    fits: "Complete one-bedroom flat: 3-seat sofa, dining table and 4 chairs, bed and mattress, wardrobe, fridge, washing machine, TV, 20–30 boxes",
  },
  {
    size: "120–150 sq ft",
    home: "2 BHK",
    equiv: "A single-car garage",
    fits: "Two full bedroom sets, living room suite, dining set, all white goods, 40–50 boxes, bikes, a few large rugs",
  },
  {
    size: "240–270 sq ft",
    home: "3 BHK",
    equiv: "A double garage",
    fits: "Full villa contents: three bedrooms, majlis furniture, outdoor and garden furniture, appliances, 70–90 boxes, sports equipment",
  },
  {
    size: "270+ sq ft",
    home: "custom",
    equiv: "Warehouse bay",
    fits: "Larger villas, office fit-outs, retail stock, exhibition kit. Quoted after a survey",
  },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://safestorage.ae/self-storage-dubai/storage-units#product",
    name: "Storage Units in Dubai",
    description:
      "Racked, palletised and barcoded storage units in Dubai from 30 to 270+ sq ft, with door-to-door collection, packing and a photographed digital inventory.",
    brand: { "@type": "Brand", name: "SafeStorage" },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: "12.65",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "AED",
        price: "12.65",
        unitText: "per square foot per month",
      },
      availability: "https://schema.org/InStock",
      url: "https://safestorage.ae/self-storage-dubai/storage-units",
    },
  },
  {
    // ItemList over the five sizes so each can surface independently. The "what
    // fits" text is descriptive, deliberately NOT marked up as an Offer.
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Storage unit sizes in Dubai",
    itemListElement: unitSizes.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${u.size} storage unit (${u.home})`,
      description: u.fits,
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

const unitTypes = [
  {
    title: "Drive-up units",
    body: "A metal shutter, a corridor, your own padlock. You drive to it, you unload, you leave. Good for weekly access. Usually the most expensive per square foot, because you're renting a private door and a corridor to reach it.",
  },
  {
    title: "Racked and palletised space",
    body: "Your goods go onto pallets or shelving in a managed warehouse, tagged to your account and kept in an allocated area. Cheaper per square foot because floor space is used vertically. This is what most household storage in Dubai actually is, whatever the website photos suggest.",
  },
  {
    title: "Containerised storage",
    body: "Goods are loaded into a sealed timber or steel container, which is then stacked. Your container isn't opened until you ask for it. Good for long-term, poor for frequent access.",
  },
]

const security = [
  {
    h: "Allocated space",
    p: "Your goods are stored together on their own pallets or in their own bay, tagged to your account. Not loose-mixed with another household's furniture.",
  },
  {
    h: "Barcode-level inventory",
    p: "Every carton and every loose item gets a label. You receive a photographed digital list before the truck leaves the pickup address. Nothing enters or leaves without being scanned against your account.",
  },
  {
    h: "CCTV around the clock",
    p: "Plus access logging on the storage areas. Handling is done by our own trained crews, not day labour hired at the gate — which changes how a wardrobe gets carried down a stairwell more than any security camera does.",
  },
  {
    h: "Pest control and climate management",
    p: "Dubai's August heat is the actual threat to stored goods, more than theft. Wood veneer separates, leather cracks, adhesives fail, electronics die.",
  },
]

export default function StorageUnitsPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Storage Units" },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Storage Units in Dubai — Sizes, Security and What Actually Fits
              </h1>
              <p className="mb-4 text-lg text-white/90">
                A storage unit in Dubai is rarely what people picture. The image in most heads is an American
                roller-shutter corridor from a film. What actually exists here is a mix: some genuine drive-up unit
                corridors in Al Quoz and DIP, and a much larger amount of racked, palletised warehouse space where goods
                are stored in allocated bays rather than behind your own door.
              </p>
              <p className="mb-4 text-lg text-white/90">
                Both are storage units. They behave differently, and the difference matters more than the price.
              </p>
              <p className="mb-4 text-lg text-white/90">
                This page sits under{" "}
                <Link href="/self-storage-dubai" className="underline decoration-dubai-gold underline-offset-4">
                  self storage in Dubai
                </Link>{" "}
                and covers what you&rsquo;re actually renting, what fits in each size, and how goods are kept apart from
                everyone else&rsquo;s. If you&rsquo;d rather skip to who serves your area,{" "}
                <Link
                  href="/self-storage-dubai/local-self-storage"
                  className="underline decoration-dubai-gold underline-offset-4"
                >
                  local storage across Dubai
                </Link>{" "}
                has the coverage detail.
              </p>
              <p className="mb-8 text-lg text-white/90">
                Our units start at 30 sq ft, from <strong className="text-dubai-gold">AED 12.65 per sq ft per month</strong>,
                month to month.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a storage quote</Link>
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
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">
                The three kinds of storage unit you&rsquo;ll find in Dubai
              </h2>
              <div className="space-y-6">
                {unitTypes.map((t) => (
                  <div key={t.title} className="border-l-4 border-dubai-gold pl-5">
                    <h3 className="mb-1 font-semibold text-dubai-navy">{t.title}</h3>
                    <p className="text-gray-700">{t.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                We use racked and palletised storage with item-level barcoding. It&rsquo;s the model that lets us pull one
                chair out of a 3BHK load without unstacking the other ninety items, which is the thing most people actually
                want six months in.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">Storage unit sizes and what fits in each</h2>
              <p className="mb-6 text-gray-700">
                Sizes here are given in square feet of floor space at standard warehouse height, which is how storage in
                the UAE is priced.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Unit size</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Equivalent</th>
                      <th className="py-3 font-semibold text-dubai-navy">What genuinely fits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unitSizes.map((u) => (
                      <tr key={u.size} className="border-b border-gray-100">
                        <td className="py-3 pr-4 whitespace-nowrap font-medium text-dubai-navy">
                          {u.size} <span className="font-normal text-gray-500">({u.home})</span>
                        </td>
                        <td className="py-3 pr-4 whitespace-nowrap text-gray-600">{u.equiv}</td>
                        <td className="py-3 text-gray-700">{u.fits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-gray-700">
                Two honest caveats. First, these assume things are packed and stacked properly — an unpacked 1BHK dumped
                loose can easily need 120 sq ft, which is why a packing crew genuinely saves money rather than adding to
                it. Second, awkward items break the maths: a piano, a treadmill, a five-metre corner sofa or a full-height
                mirror unit each eat space out of proportion to their volume.
              </p>
              <p className="mt-4 text-gray-700">
                The{" "}
                <Link href="/self-storage-dubai/unit-sizes" className="text-dubai-navy underline underline-offset-2">
                  storage unit size guide
                </Link>{" "}
                goes deeper, with a method for estimating your own load before anyone visits.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">What it costs to rent a storage unit in Dubai</h2>
              <p className="mb-4 text-gray-700">
                Our rate starts at AED 12.65 per sq ft per month. A 1BHK at 75 sq ft is a different monthly number to a
                3BHK at 250 sq ft, and both are quoted with collection, packing materials, loading, transport and the
                digital inventory included.
              </p>
              <p className="text-gray-700">
                What we don&rsquo;t do is quote a low headline rate and then bill for the rest. If you&rsquo;ve been given
                a storage unit price in Dubai that seems unusually cheap, check whether it includes transport, whether
                there&rsquo;s a minimum term, and whether the &ldquo;unit&rdquo; is a shared bay measured generously. The{" "}
                <Link href="/self-storage-dubai/prices" className="text-dubai-navy underline underline-offset-2">
                  storage prices page
                </Link>{" "}
                breaks down what varies and why.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">How goods are kept separate and secure</h2>
              <p className="mb-8 text-gray-700">
                The single biggest worry people have about a shared facility is other people&rsquo;s stuff touching
                theirs. Reasonable worry.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                {security.map((s) => (
                  <div key={s.h} className="rounded-lg bg-white p-5 shadow-sm">
                    <h3 className="mb-2 font-semibold text-dubai-navy">{s.h}</h3>
                    <p className="text-sm text-gray-600">{s.p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                Insurance is available and you should ask for the limit and exclusions in writing — from us or anyone
                else.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">The trade-off with managed units</h2>
              <p className="mb-4 text-gray-700">
                You don&rsquo;t hold a key. You can&rsquo;t drop in on a Friday evening and rummage through boxes.
                Retrieval is a scheduled delivery, usually with one to two working days&rsquo; notice, and slower in the
                June and August peak.
              </p>
              <p className="mb-10 text-gray-700">
                That&rsquo;s the cost of not carrying anything yourself. For the majority of household storage — expats
                between leases, families mid-renovation, people storing a villa&rsquo;s contents while they decide —
                it&rsquo;s a good trade. For a business rotating stock weekly, it isn&rsquo;t, and a drive-up unit or a
                small warehouse bay is the right answer.{" "}
                {/* PHASE-2 LINK: → /business-storage-dubai/ */}
                <Link href="/business-storage" className="text-dubai-navy underline underline-offset-2">
                  Business storage
                </Link>{" "}
                covers those setups.
              </p>

              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">What you can&rsquo;t put in a storage unit</h2>
              <p className="mb-4 text-gray-700">
                UAE rules and common sense overlap here. No flammable liquids, gas cylinders, paint, thinners, fireworks,
                ammunition or firearms. No perishable food, no live plants, no animals. No chemicals, no batteries stored
                loose, nothing illegal.
              </p>
              <p className="text-gray-700">
                Also worth thinking about: anything with liquid in it. Half a bottle of olive oil in a kitchen carton finds
                its way into everything within four months. We empty and drain appliances at pickup, but pantry boxes are
                usually packed by the customer. Full list on the{" "}
                {/* PHASE-2 LINK: → /self-storage-dubai/prohibited-items/ */}
                <Link href="/prohibited-items" className="text-dubai-navy underline underline-offset-2">
                  prohibited items page
                </Link>{" "}
                — ask for it before pickup day if you&rsquo;re unsure about anything in a cupboard.
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
              <h2 className="mb-4 text-3xl font-bold">Booking a unit</h2>
              <p className="mb-8 text-white/90">
                Tell us the size of your place and when you need collection. We&rsquo;ll quote the same day, and in most
                of Dubai we can be there within 24 hours.
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
