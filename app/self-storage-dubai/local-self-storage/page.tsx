import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Truck, ClipboardList, ShieldCheck, PackageOpen, Phone } from "lucide-react"
import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"

/**
 * ★ MONEY PAGE — Silo 1 · /self-storage-dubai/local-self-storage/
 *
 * Target: `local self storage` — 2,400/mo (AE), KD 16, CPC $3.33.
 *
 * Why this page exists and why it is nested rather than at root:
 * the query is commercial-navigational, so it needs to inherit topical
 * relevance from a hub that already says "self storage in Dubai". A root-level
 * orphan would get the exact-match URL and none of the reinforcement. Nested,
 * it receives equity from /self-storage-dubai/ plus every Silo 1 sibling.
 *
 * It replaces a BLOG post that currently ranks #7 for this term. A commercial
 * local query answered by an article URL ranks volatilely, which is why the
 * ranking kept disappearing. The 301 from that post lives in next.config.mjs
 * and must ship in the same deployment as this page.
 *
 * ⚠ Two deliberate omissions, both gated on facts only the client can confirm:
 *
 *   1. NO AggregateRating in the schema. The homepage cites 4.9/5 from 6,700+
 *      reviews, but that is a group-wide figure including India. Marking it up
 *      on a .ae LocalBusiness is a manual-action risk. Add it only with the
 *      verified UAE Google Business Profile count.
 *   2. NO record-retention period in the "business overflow" paragraph. The
 *      source copy carried a [VERIFY] marker there; the sentence is written to
 *      be true without naming a number rather than inventing one.
 *
 * ⚠ Outbound links point at URLs that are live TODAY. Where the silo target
 * does not exist yet (/self-storage-dubai/prices/, /unit-sizes/, /how-it-works/,
 * /prohibited-items/, /personal-storage-dubai/, /business-storage-dubai/,
 * /moving-storage-dubai/, /locations/dubai/{area}/) this page links to the
 * current equivalent so nothing 404s. Re-point them as each silo page lands —
 * they are marked PHASE-2 LINK below.
 */

export const metadata: Metadata = {
  title: { absolute: "Local Self Storage Dubai | Nearest Unit, Door-to-Door" },
  description:
    "Local self storage across Dubai from AED 12.65/sq ft. We collect from your door in Marina, JVC, Al Barsha + 30 areas. Same-day pickup, no lock-in. Call us.",
  keywords:
    "local self storage, local self storage dubai, local storage near me, storage facility near me, self storage near me, storage units near me, local storage company dubai, nearest storage facility dubai",
  openGraph: {
    title: "Local Self Storage Dubai — We Come to You",
    description:
      "Door-to-door local self storage across Dubai from AED 12.65/sq ft. Same-day collection, itemised digital inventory, no lock-in.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/self-storage-dubai/local-self-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/local-self-storage",
  },
}

const faqData = [
  {
    question: "What is local self storage?",
    answer:
      "Local self storage means renting storage space near where you live rather than in a distant warehouse. In Dubai it usually means a facility in an industrial area like Al Quoz, Ras Al Khor or DIP. SafeStorage works differently — we collect from your home anywhere in Dubai and store the goods for you, so how far the facility is stops mattering.",
  },
  {
    question: "How much does local self storage cost in Dubai?",
    answer:
      "Rates start at AED 12.65 per square foot per month. A one-bedroom apartment typically needs 60–90 sq ft; a three-bedroom villa around 240–270 sq ft. Collection, packing materials and transport are included in the quote rather than added afterwards.",
  },
  {
    question: "Do you have a storage facility near me?",
    answer:
      "We collect from and deliver to every area of Dubai, plus Sharjah, Ajman and Abu Dhabi. You don't travel to the facility — our team comes to your building. Send your community name to +971 50 577 3388 and we'll confirm the next available pickup window.",
  },
  {
    question: "Can I access my items while they're in storage?",
    answer:
      "Yes. Because everything is itemised and barcoded, you can request a single item rather than the whole load. Give us notice and we'll schedule delivery to your address. There's no need to visit the facility yourself.",
  },
  {
    question: "Is there a minimum storage period?",
    answer:
      "No lock-in. Storage is month to month. Most household bookings run between three weeks and eighteen months, and you can extend or end with notice.",
  },
  {
    question: "How quickly can you collect?",
    answer:
      "Same-day or next-day across most of Dubai. Larger villa moves need a day or two to schedule the right crew and vehicle. Pickups from Sharjah, Ajman and Abu Dhabi are quoted with transport upfront.",
  },
  {
    question: "Are my belongings insured?",
    answer:
      "Goods are stored in a CCTV-monitored, access-controlled and pest-controlled facility, and insurance cover is available. Ask for the specific limit and exclusions in writing before you book — with any storage company, not just us.",
  },
  {
    question: "What can't I store?",
    answer:
      "No flammables, no perishables, no illegal items, no firearms, no chemicals. The full list is on our prohibited items page. If you're unsure about something specific, ask before pickup day rather than at the door.",
  },
]

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#business",
    name: "SafeStorage — Local Self Storage Dubai",
    url: "https://safestorage.ae/self-storage-dubai/local-self-storage",
    telephone: "+971505773388",
    email: "support@safestorage.ae",
    priceRange: "From AED 12.65 per sq ft",
    currenciesAccepted: "AED",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Self storage unit sizes",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "1 RK storage — 30 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "1 BHK storage — 60–90 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "2 BHK storage — 120–150 sq ft" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3 BHK storage — 240–270 sq ft" } },
      ],
    },
    // NO aggregateRating — see the file header. Blocked on the UAE-only review count.
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#service",
    serviceType: "Local self storage",
    name: "Local Self Storage in Dubai",
    description:
      "Door-to-door local self storage across Dubai. We collect from your address, pack, itemise and store, and deliver items back on request. From AED 12.65 per sq ft per month with no lock-in.",
    provider: { "@id": "https://safestorage.ae/self-storage-dubai/local-self-storage#business" },
    areaServed: { "@type": "City", name: "Dubai" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
]

const coverage = [
  {
    band: "Central and coastal",
    areas: [
      { name: "Dubai Marina", href: "/locations/dubai-marina" },
      { name: "JBR" },
      { name: "Palm Jumeirah", href: "/locations/palm-jumeirah" },
      { name: "Jumeirah 1–3", href: "/locations/jumeirah" },
      { name: "Umm Suqeim" },
      { name: "Al Wasl" },
      { name: "Downtown Dubai", href: "/locations/downtown-dubai" },
      { name: "Business Bay", href: "/locations/business-bay" },
      { name: "DIFC" },
      { name: "JLT" },
    ],
  },
  {
    band: "New Dubai and the villa communities",
    areas: [
      { name: "JVC", href: "/locations/jumeirah-village-circle" },
      { name: "JVT" },
      { name: "Dubai Hills", href: "/locations/dubai-hills" },
      { name: "Arabian Ranches" },
      { name: "DAMAC Hills" },
      { name: "Town Square" },
      { name: "Motor City" },
      { name: "Sports City" },
      { name: "Al Furjan" },
      { name: "Discovery Gardens" },
    ],
  },
  {
    band: "Established Dubai",
    areas: [
      { name: "Al Barsha 1–3", href: "/locations/al-barsha" },
      { name: "Barsha Heights" },
      { name: "Mirdif", href: "/locations/mirdif" },
      { name: "Al Warqa" },
      { name: "Rashidiya" },
      { name: "Deira", href: "/locations/deira" },
      { name: "Bur Dubai" },
      { name: "Karama" },
      { name: "Oud Metha" },
      { name: "Al Garhoud" },
    ],
  },
  {
    band: "East and south",
    areas: [
      { name: "Dubai Silicon Oasis", href: "/locations/dubai-silicon-oasis" },
      { name: "Academic City" },
      { name: "International City" },
      { name: "Dubai Investment Park", href: "/locations/dubai-investment-park" },
      { name: "Dubai South" },
      { name: "Al Quoz", href: "/locations/al-quoz" },
      { name: "Ras Al Khor", href: "/locations/ras-al-khor" },
      { name: "Umm Ramool", href: "/locations/umm-ramool" },
      { name: "Al Qusais", href: "/locations/al-qusais" },
    ],
  },
]

const sizes = [
  { home: "Studio / 1 RK", space: "around 30 sq ft", fits: "Bed, wardrobe contents, 10–15 boxes, a few appliances" },
  { home: "1 bedroom", space: "60–90 sq ft", fits: "Full 1BHK including sofa, dining set, white goods" },
  { home: "2 bedrooms", space: "120–150 sq ft", fits: "Two bedroom sets, living room, kitchen contents" },
  { home: "3 bedrooms", space: "240–270 sq ft", fits: "Full villa contents, garden furniture, bikes" },
  { home: "Larger / commercial", space: "270+ sq ft", fits: "Quoted per site survey" },
]

const localMeans = [
  ["You rent a unit, you drive to it", "We collect from your door"],
  ["You hire a van for the move-in", "Transport included in the quote"],
  ["You pack, label and stack", "We pack, itemise and photograph"],
  ["You remember what's in there", "Digital inventory on your phone"],
  ["You go to the facility to retrieve one item", "We deliver the item to you"],
  ["Access limited to facility hours", "Retrieval scheduled when you need it"],
]

const steps = [
  {
    icon: Phone,
    title: "Tell us what you have",
    body: "A phone call or a WhatsApp voice note is enough. Rough room count, rough timeline. We'll quote on that. For anything above a 2BHK we'll do a free video survey so the truck arrives the right size.",
  },
  {
    icon: Truck,
    title: "We come to you",
    body: "Team arrives in the agreed window with boxes, bubble wrap and blankets. Fragile items are wrapped on site. Every item or carton gets a barcode label.",
  },
  {
    icon: ClipboardList,
    title: "You get an inventory",
    body: "Before the truck leaves, you get a digital list with photos. This is the part people underestimate — six months later, “which box has the winter clothes” is a solved problem rather than an afternoon.",
  },
  {
    icon: ShieldCheck,
    title: "It goes into a secured facility",
    body: "CCTV around the clock, pest-controlled, access-logged. Your goods stay palletised and separate — not loose-stacked against someone else's.",
  },
  {
    icon: PackageOpen,
    title: "You get it back when you want it",
    body: "Whole load, or one item. Give us notice and we'll schedule delivery. If you're leaving the UAE, we can hand it to a freight forwarder instead.",
  },
]

const trustQuestions = [
  {
    q: "Is the facility temperature-managed?",
    a: "Dubai hits 45°C+ in August and non-climate-controlled units warp wood, crack leather and destroy electronics. Ask specifically — “air conditioned” and “climate controlled” are not the same claim.",
  },
  { q: "Do I get an itemised inventory?", a: "If the answer is “we'll label the boxes”, you'll be opening every one of them later." },
  { q: "What's the notice period to get things back?", a: "Some operators need a week. Ask before you need it urgently." },
  { q: "Is there a minimum term or lock-in?", a: "Ours is month to month. Several competitors quote low and bind you for six." },
  { q: "What's insured, and to what value?", a: "Get the limit in writing. Read what's excluded." },
  {
    q: "Who actually handles the goods — staff or subcontracted labour?",
    a: "It changes how carefully your things get carried down a stairwell.",
  },
]

const comparison = [
  ["Getting things in", "Team collects and packs", "You hire a van and do it"],
  ["Access to your goods", "Scheduled retrieval, item-level", "Walk in during facility hours"],
  ["Best for", "Storing 1 month to 3 years without needing regular access", "Frequent access, business stock rotation"],
  ["Real cost", "One quote covering transport, labour, materials", "Unit rent + van + labour + boxes"],
  ["Effort", "Roughly one phone call", "A weekend, twice"],
  ["Inventory", "Digital, photographed", "Whatever you wrote on the box"],
]

export default function LocalSelfStoragePage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Self Storage Dubai", href: "/self-storage-dubai" },
          { name: "Local Self Storage" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-dubai-navy py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Local Self Storage in Dubai — We Come to You
              </h1>
              <p className="mb-4 text-lg text-white/90">
                Most people searching for local self storage want one thing: a unit close enough that dropping something
                off doesn't eat a Saturday. Fair enough. But in Dubai, &ldquo;close&rdquo; is a strange idea. The
                affordable storage facilities sit in Al Quoz, Ras Al Khor and DIP — industrial areas most residents only
                see from Sheikh Zayed Road. The genuinely convenient ones charge for that convenience.
              </p>
              <p className="mb-4 text-lg text-white/90">
                SafeStorage solves it from the other end. We&rsquo;re a{" "}
                <Link href="/self-storage-dubai" className="underline decoration-dubai-gold underline-offset-4">
                  local self storage
                </Link>{" "}
                operator that doesn&rsquo;t ask you to drive anywhere. Our team comes to your building, packs what needs
                packing, itemises every box, and moves it to a secured facility. You get a photo inventory on your phone.
                When you want something back, you tell us which item and we deliver it.
              </p>
              <p className="mb-8 text-lg text-white/90">
                Storage starts at <strong className="text-dubai-gold">AED 12.65 per sq ft</strong> per month. No lock-in,
                no deposit games, and the quote you get is the price you pay.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-dubai-gold text-white hover:bg-dubai-darkgold" asChild>
                  <Link href="/get-quote">Get a storage quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-black hover:bg-gray-100"
                  asChild
                >
                  <a href="tel:+971505773388">Call +971 50 577 3388</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What "local" actually means */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-dubai-navy">
                What &ldquo;local&rdquo; actually means for storage in Dubai
              </h2>
              <p className="mb-4 text-gray-700">
                Here&rsquo;s the thing nobody tells you when you search for a storage unit near you: proximity matters far
                less than access.
              </p>
              <p className="mb-4 text-gray-700">
                A facility ten minutes from your flat is only useful if you can get into it when you need to, if you can
                park a loaded car next to it, and if you can find the box you want without unstacking eleven others.
                Plenty of people rent a unit in Al Quoz because the map says fifteen minutes, then discover the fifteen
                minutes is at 11am on a Tuesday, not 6pm on a weekday when they&rsquo;d actually go.
              </p>
              <p className="mb-8 text-gray-700">
                We looked at it differently. If the storage company drives, the distance stops being your problem.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-gray-600">What most local storage means</th>
                      <th className="py-3 font-semibold text-dubai-navy">What it means with SafeStorage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {localMeans.map(([a, b]) => (
                      <tr key={a} className="border-b border-gray-100">
                        <td className="py-3 pr-4 text-gray-600">{a}</td>
                        <td className="py-3 font-medium text-dubai-navy">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-gray-700">
                That&rsquo;s the trade-off, stated honestly: you give up the ability to walk into your unit at midnight
                and rummage. In exchange you never move a box yourself. For most of the households we store for — expats
                between leases, families mid-renovation, people who&rsquo;ve moved to a smaller place — that&rsquo;s the
                better deal. If you genuinely need to visit your own stuff twice a week, a drive-up unit in Al Quoz is the
                more honest recommendation and we&rsquo;ll say so on the phone.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">Areas we cover across Dubai</h2>
              <p className="mb-10 text-gray-700">
                We collect from and deliver to every part of Dubai. Pickup windows are usually same-day or next-day,
                depending on how far out you are and what time you call.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {coverage.map((group) => (
                  <Card key={group.band}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <MapPin className="h-5 w-5 text-dubai-gold" />
                        {group.band}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {group.areas.map((a, i) => (
                          <span key={a.name}>
                            {i > 0 && " · "}
                            {a.href ? (
                              <Link href={a.href} className="text-dubai-navy underline underline-offset-2">
                                {a.name}
                              </Link>
                            ) : (
                              a.name
                            )}
                          </span>
                        ))}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="mt-8 text-gray-700">
                We also collect from <strong>Sharjah</strong>, <strong>Ajman</strong> and <strong>Abu Dhabi</strong>.
                Transport for those is quoted upfront before we dispatch — see{" "}
                <Link href="/locations" className="text-dubai-navy underline underline-offset-2">
                  all locations
                </Link>{" "}
                for the full list.
              </p>
              <blockquote className="mt-6 border-l-4 border-dubai-gold bg-white p-4 text-gray-700">
                Not sure whether your building is on a same-day route? Send your community name on WhatsApp and
                we&rsquo;ll tell you straight away.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">What it costs</h2>
              <p className="mb-8 text-gray-700">
                Storage in Dubai is priced by space and time, and most companies make both deliberately hard to compare.
                Here&rsquo;s ours.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Home size</th>
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">Typical space needed</th>
                      <th className="py-3 font-semibold text-dubai-navy">What usually fits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((s) => (
                      <tr key={s.home} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium text-dubai-navy">{s.home}</td>
                        <td className="py-3 pr-4 whitespace-nowrap text-gray-700">{s.space}</td>
                        <td className="py-3 text-gray-600">{s.fits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-gray-700">
                Rate starts at <strong>AED 12.65 per sq ft per month</strong>. Collection, packing materials, loading and
                inventory are quoted with it, so the number you&rsquo;re given covers the job — not just the shelf.
              </p>
              <p className="mt-4 text-gray-700">
                Three things that genuinely change the price: how many floors we&rsquo;re carrying down without a service
                lift, whether you need packing done or you&rsquo;ve done it yourself, and how far outside Dubai the pickup
                is. We ask about all three before quoting so there&rsquo;s no adjustment later.
              </p>
              <p className="mt-4 text-gray-700">
                {/* PHASE-2 LINK: → /self-storage-dubai/prices/ and /self-storage-dubai/unit-sizes/ */}
                Full breakdown on the{" "}
                <Link href="/pricing" className="text-dubai-navy underline underline-offset-2">
                  storage pricing page
                </Link>
                , and the{" "}
                <Link href="/storage-size-guide" className="text-dubai-navy underline underline-offset-2">
                  unit size guide
                </Link>{" "}
                if you want to sanity-check the space yourself before calling.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-3xl font-bold text-dubai-navy">How it works</h2>
              <ol className="grid gap-6 md:grid-cols-2">
                {steps.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <li key={s.title} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                      <div className="flex-none">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dubai-navy text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-dubai-navy">
                          {i + 1}. {s.title}
                        </h3>
                        <p className="text-sm text-gray-600">{s.body}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
              <p className="mt-8 text-gray-700">
                {/* PHASE-2 LINK: → /self-storage-dubai/how-it-works/ */}
                Longer version on the{" "}
                <Link href="/how-it-works" className="text-dubai-navy underline underline-offset-2">
                  how it works page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Why people store */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">Why people in Dubai use local self storage</h2>
              <p className="mb-8 text-gray-700">
                The reasons are boringly consistent, and they&rsquo;re worth naming because they tell you whether this is
                actually your situation.
              </p>

              <div className="space-y-6 text-gray-700">
                <p>
                  <strong className="text-dubai-navy">Between leases.</strong> Your Ejari ends 3 September, the new place
                  is ready 20 September. Seventeen days. A hotel with your entire flat in it is not a plan. This is the
                  single most common reason we get called, and it&rsquo;s usually a two- to four-week booking.
                </p>
                <p>
                  {/* PHASE-2 LINK: → /personal-storage-dubai/ */}
                  <strong className="text-dubai-navy">Leaving the UAE but not sure for how long.</strong> Shipping a
                  container home costs more than storing for a year, and you don&rsquo;t yet know if the new job sticks.
                  Storing while you decide is the cheaper option surprisingly often. We deal with this constantly around
                  the end of the school year. See{" "}
                  <Link href="/expat-leaving-uae" className="text-dubai-navy underline underline-offset-2">
                    storage for expats
                  </Link>
                  .
                </p>
                <p>
                  <strong className="text-dubai-navy">Downsizing.</strong> Villa to apartment, or two salaries to one. The
                  furniture doesn&rsquo;t fit the new place but you&rsquo;re not ready to sell a dining table you paid AED
                  9,000 for.
                </p>
                <p>
                  <strong className="text-dubai-navy">Renovation.</strong> Contractors work faster in an empty flat and
                  your sofa doesn&rsquo;t end up under three weeks of gypsum dust.
                </p>
                <p>
                  <strong className="text-dubai-navy">Summer.</strong> Families who go home for July and August and would
                  rather not leave a full apartment sitting empty on a maintenance-free lease.
                </p>
                <p>
                  {/* PHASE-2 LINK: → /business-storage-dubai/ */}
                  <strong className="text-dubai-navy">Business overflow.</strong> Stock that outgrew the shop, company
                  records you&rsquo;re required to retain, exhibition kit used twice a year. That&rsquo;s a different
                  conversation —{" "}
                  <Link href="/business-storage" className="text-dubai-navy underline underline-offset-2">
                    business storage
                  </Link>{" "}
                  covers it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust questions */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">What makes a storage facility worth trusting</h2>
              <p className="mb-8 text-gray-700">
                If you&rsquo;re comparing local self storage companies in Dubai, these are the questions that actually
                separate them. Ask all six, of us and of anyone else.
              </p>
              <ol className="space-y-5">
                {trustQuestions.map((t, i) => (
                  <li key={t.q} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-dubai-gold text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="text-gray-700">
                      <strong className="text-dubai-navy">{t.q}</strong> {t.a}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-gray-700">
                Ask us all six on the phone. We&rsquo;d rather lose a booking than have you find out the answer in month
                four.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-dubai-navy">
                Local self storage vs. renting a unit yourself
              </h2>
              <p className="mb-8 text-gray-700">Both are valid. They suit different people.</p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 pr-4" />
                      <th className="py-3 pr-4 font-semibold text-dubai-navy">SafeStorage (managed, door-to-door)</th>
                      <th className="py-3 font-semibold text-gray-600">Traditional self storage unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map(([label, ours, theirs]) => (
                      <tr key={label} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium text-gray-500">{label}</td>
                        <td className="py-3 pr-4 font-medium text-dubai-navy">{ours}</td>
                        <td className="py-3 text-gray-600">{theirs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-gray-700">
                If you&rsquo;ll be in and out of the unit weekly, rent one. If you need things kept safely and retrieved
                occasionally, the managed route costs less once you count the van hire and the two Saturdays.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-dubai-navy">Common questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, i) => (
                  <AccordionItem key={item.question} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-dubai-navy">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <p className="mt-6 text-sm text-gray-600">
                {/* PHASE-2 LINK: → /self-storage-dubai/prohibited-items/ */}
                Full list on our{" "}
                <Link href="/prohibited-items" className="text-dubai-navy underline underline-offset-2">
                  prohibited items page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dubai-navy py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Get a quote today</h2>
              <p className="mb-8 text-white/90">
                Two things and we can price it: how big the place is, and roughly when you want it gone. Most of Dubai
                gets a collection slot inside 24 hours.
              </p>
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
                +971 50 577 3388 · support@safestorage.ae
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
