import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: { absolute: "Storage Units Al Quoz | Warehouse & Self Storage | SafeStorage" },
  description:
    "Storage in Al Quoz without the warehouse rent. Secure units, door-to-door pickup, monthly terms. Serving Al Quoz Industrial, Alserkal, Al Safa and Dubai Marina.",
  keywords:
    "Storage Al Quoz, Al Quoz storage units, warehouse Al Quoz, warehouse storage Al Quoz, Al Quoz Industrial storage, small warehouse Al Quoz, Alserkal Avenue storage, art storage Dubai, Al Safa storage, Al Wasl storage, Umm Suqeim storage, Al Manara storage, showroom stock storage Dubai, business storage Al Quoz, SafeStorage Al Quoz",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/al-quoz",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/al-quoz",
  },
}

/**
 * One source for the FAQ block: it renders the questions and builds the
 * FAQPage schema below. Google requires the markup to match what the reader
 * sees (see the note above `faqSchema` in lib/structured-data.ts), which only
 * holds if the two are never written out twice.
 *
 * An answer is a list of parts rather than a string so it can carry inline
 * links and still yield the exact plain text the schema needs.
 */
type AnswerPart = string | { text: string; href: string }

const answerText = (parts: AnswerPart[]) =>
  parts.map((p) => (typeof p === "string" ? p : p.text)).join("")

const FAQS: { q: string; a: AnswerPart[] }[] = [
  {
    q: "Do you cover all of Al Quoz Industrial?",
    a: [
      "Yes, all four industrial areas plus the residential sections and Alserkal Avenue. As part of the Sheikh Zayed Road route, we have daily availability and thus scheduling slots becomes easier for us. In case you have regular pickup requirement, we can arrange it on weekly/monthly basis so that you don't have to call each time.",
    ],
  },
  {
    q: "Do you serve Dubai Marina?",
    a: [
      "Yes, plus JBR, Media City and Internet City. We cover every Marina tower. The thing to know is that Marina buildings need the service lift and loading bay booked in advance, so we arrange that with your building management before the pickup. Book before noon and same-day is usually possible, otherwise 24 to 48 hours.",
    ],
  },
  {
    q: "Is this actually cheaper than leasing more warehouse space?",
    a: [
      "For dead stock and archives, almost always. You're currently paying Al Quoz industrial rates for space holding things that don't move. Our units start at 12.65 AED per sqft including VAT, and you only pay for the volume you use. No setup fee, no annual commitment. Send us your volume and we'll put the two costs side by side so you can see it properly.",
    ],
  },
  {
    q: "Will you store artwork from Alserkal?",
    a: [
      "Yes. Artwork, framed pieces, sculpture, exhibition materials. It's wrapped, photographed and catalogued on collection, then stored indoors in dust-protected, climate-stable units. Not outdoor containers. You can pull individual pieces rather than releasing the whole unit, and we'll work to your show calendar. If a piece has particular handling requirements, tell us before collection.",
    ],
  },
  {
    q: "How do I get a document back once it's stored?",
    a: [
      "Call, WhatsApp or email your consultant and say which box or file. We find it by barcode and deliver it to your Al Quoz address within 24 to 48 hours. Before noon and same-day is often possible. Delivery inside Dubai is part of the service and any extra charges are in your contract before you book.",
    ],
  },
  {
    q: "Do you cover Al Safa, Al Wasl and Umm Suqeim?",
    a: [
      "All of them, plus Al Manara. These are some of our busiest residential collections, mostly renovation storage and people moving between houses. Around 20 to 25 minutes from us. WhatsApp +971505773388 and we'll confirm for your street.",
    ],
  },
  {
    q: "What does it cost?",
    a: [
      "From 12.65 AED per sqft, VAT included. You pay for the space you use rather than a fixed unit size, so a few boxes costs a few boxes. Business Storage starts from 100 sq ft to 1,000+ sq ft. With zero setup fees and hidden charges; no lengthy contracts involved. Contact us at +971505773388 or fill out our ",
      { text: "quote form", href: "/get-quote" },
      ".",
    ],
  },
  {
    q: "Can you clear an entire warehouse?",
    a: [
      "Yes. We'll send however many trucks and staff the volume needs. A full warehouse or showroom can usually be cleared in a day, or spread over several visits if you'd rather keep operating. Everything is catalogued and photographed and goes into units that are yours. You call items back as you need them. It works well during a move, a fit-out or a lease change.",
    ],
  },
  {
    q: "Do you take showroom furniture and display stock?",
    a: [
      "It's one of the most common things we store from Al Quoz. Furniture, lighting, tiles, fit-out material, ex-display pieces. Wrapped on collection, stored indoors. Most showrooms use us to hold backup ranges and call them forward as display space opens up. Regular clients get scheduled deliveries instead of ad-hoc requests.",
    ],
  },
  {
    q: "We're renovating a villa. How does that work?",
    a: [
      "We come and empty it. From furniture to appliances, wardrobes, paintings, everything gets catalogued and photographed, stored in your dedicated storage space until the construction is done. If you need something during the works, we'll bring that back separately. Most renovation storage runs three to nine months on monthly terms.",
    ],
  },
  {
    q: "Do you shred old documents?",
    a: [
      "Yes. Once records pass their retention date, we pull the boxes and arrange certified destruction. You get a certificate confirming it was done in line with UAE data protection rules. Useful if you're sitting on a decade of paperwork you legally can't just bin.",
    ],
  },
  {
    q: "How fast can you collect?",
    a: [
      "Book before noon and same-day is usually possible, subject to team availability. Otherwise 24 to 48 hours. Al Quoz is close to our route so lead times are shorter here than for outlying areas. Photos on WhatsApp are the quickest way to get a price and a slot.",
    ],
  },
  {
    q: "What won't you store?",
    a: [
      "No food products, beverages, detergents, perfume, jewellery, medicinal products or spices. No hazardous, flammable, explosive, perishable, living, prohibited or odoriferous materials, and no cash whatsoever. Vehicles we do take — see ",
      { text: "car storage", href: "/car-storage" },
      " for how to prepare one. If in doubt about something, check first — practically everything else goes. The full list is on our ",
      { text: "prohibited items page", href: "/prohibited-items" },
      ".",
    ],
  },
]

const alQuozSchemas = [
  locationBusinessSchema({
    name: "Al Quoz",
    url: "https://safestorage.ae/locations/al-quoz",
    serves: ["Alserkal Avenue", "Al Safa", "Al Wasl", "Umm Suqeim", "Al Manara", "Dubai Marina"],
  }),

  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage in Al Quoz',
    description:
      'Fireproof, barcode-indexed document storage and records management for Al Quoz trading companies, contractors, workshops and printers, with 24-48 hour file retrieval.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/al-quoz',
    areaServed: [
      { '@type': 'Place', name: 'Al Quoz' },
      { '@type': 'Place', name: 'Alserkal Avenue' },
      { '@type': 'Place', name: 'Al Safa' },
      { '@type': 'Place', name: 'Umm Suqeim' },
      { '@type': 'Place', name: 'Dubai Marina' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/al-quoz#webpage',
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: 'Storage Units Al Quoz | Warehouse & Self Storage | SafeStorage',
    description:
      'Storage in Al Quoz without the warehouse rent. Secure units, door-to-door pickup, monthly terms. Serving Al Quoz Industrial, Alserkal, Al Safa and Dubai Marina.',
    url: 'https://safestorage.ae/locations/al-quoz',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Al Quoz', item: 'https://safestorage.ae/locations/al-quoz' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://safestorage.ae/locations/al-quoz#faq',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: answerText(f.a) },
    })),
  },
]

export default function AlQuozPage() {
  return (
    <>
    <SchemaScript schema={alQuozSchemas} />
    <LocationPage
      location="Al Quoz"
      areas={[
        "Al Quoz Industrial 1",
        "Al Quoz Industrial 2",
        "Al Quoz Industrial 3",
        "Al Quoz Industrial 4",
        "Al Quoz 1, 2, 3 & 4",
        "Alserkal Avenue",
        "Al Safa",
        "Al Wasl",
        "Umm Suqeim",
        "Al Manara",
        "Al Khail Gate",
        "Dubai Marina",
      ]}
      distance="20-25 minutes"
      intro="Everyone in Al Quoz is short on space. Warehouses full, studios full, and half of the houses in Al Safa have been undergoing renovations, with the furniture piled up in their majlis. We come to you, take it away, keep it clean and dry, and bring it back when you want it — a straight run down Sheikh Zayed Road from our facility, so we're there most days anyway."
      benefits={[
        "Your warehouse rent is too high to store dead stock. Move it out, keep the floor for work that pays.",
        "Alserkal studios need somewhere clean between shows. Indoor units, not a container in a yard.",
        "We pick up from your door. Workshop, showroom, studio or villa. You don't drive anywhere.",
        "Al Safa and Umm Suqeim renovations. We empty the villa, store it, and bring it back.",
      ]}
      features={{
        doorToDoor: "We collect from Al Quoz and deliver back when you need it",
        security: "CCTV from multiple angles, every entry logged, motion alerts after hours",
        clean: "Everything indoors. If you've worked in Al Quoz you'll know why that matters.",
      }}
      cta={{
        heading: "Need space this week?",
        body: "Send us a few photos on WhatsApp and we'll quote you in minutes.",
      }}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Business &amp; Warehouse Storage — Al Quoz</h2>
        <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Warehouse Overflow &amp; Dead Stock Storage</h3>
        <p className="text-lg text-gray-700 mb-4">
          Walk through most Al Quoz warehouses and you&apos;ll find the same thing. A mezzanine full of boxes nobody
          has opened in two years. Display units from a campaign that ended. Packaging for a product line that got
          discontinued. Spare parts for a machine that got replaced.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          All of it sitting on floor space you&apos;re paying industrial rates for.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          That&apos;s the pitch, really. Move the dead volume to us, keep your warehouse for the work that earns
          money. Units run from 50 sq ft up to 1,000+ sq ft, month to month. Busy season comes, you take more space.
          It ends, you give it back. No annual lease, no deposit locked up, no fit-out.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Plenty of our Al Quoz clients worked out they were about to lease a second unit and called us instead.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Art, Studio &amp; Exhibition Storage — Alserkal Avenue</h3>
            <p className="text-gray-700 mb-3">
              Al Quoz is where Dubai&apos;s art and design businesses ended up, and they all have the same problem.
              A show goes up, a show comes down, and in between the work has to live somewhere that isn&apos;t a hot
              metal container.
            </p>
            <p className="text-gray-700 mb-3">
              We store artwork between exhibitions, sets and props for production companies, samples and prototypes
              for design studios, lighting and camera kit for photographers. Units are indoor and dust-protected.
              Everything gets wrapped, photographed and catalogued when we collect it, so you know exactly what&apos;s
              there and can call back one piece instead of the whole lot.
            </p>
            <p className="text-gray-700">
              If you run to a show calendar, tell us the dates and we&apos;ll book the collections and returns around
              them. Better than sorting it out the night before install.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Records Management for Al Quoz Firms</h3>
            <p className="text-gray-700 mb-3">
              Al Quoz houses a variety of trading companies, contractors, workshops and printers and every single one
              of them is awash with paper — invoices, LPOs, job cards, warranty certificates, personnel files,
              contracts and correspondence.
            </p>
            <p className="text-gray-700 mb-3">
              We store it properly. Fireproof units, every box labelled and barcoded. We collect from your premises,
              and when you need a specific file back you call your consultant and we deliver it within 24 to 48 hours.
              It meets UAE retention requirements, so you&apos;re covered if anyone asks.
            </p>
            <p className="text-gray-700">
              When records pass their retention date, we can shred them securely and give you a certificate of
              destruction.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Showroom &amp; Retail Stock Overflow</h3>
          <p className="text-gray-700 mb-4">
            The strip of showrooms on Sheikh Zayed and Umm Suqeim Roads is all about display area. From furniture to
            tiles, from lighting to auto spare parts, from fit-out providers. That space is far too expensive to fill
            with backup stock.
          </p>
          <p className="text-gray-700">
            So we become the back room. Bulk inventory, ex-display pieces, seasonal ranges, promotional stock. You
            call it forward as display space frees up. E-commerce sellers in Al Quoz use us the same way, holding
            inventory between restocks.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Services — Dubai Marina &amp; JBR</h3>
          <p className="text-gray-700 mb-4">
            Marina is on the same Sheikh Zayed Road corridor, so it&apos;s covered from here too, along with JBR,
            Media City and Internet City.
          </p>
          <p className="text-gray-700 mb-4">
            Marina apartments are small and there are a lot of them. People store what won&apos;t fit: outdoor
            furniture out of season, luggage, bikes and golf clubs, boxes during a move when the lease dates
            don&apos;t line up. Holiday-home operators use us for furniture and linen between guests.
          </p>
          <p className="text-gray-700 mb-4">
            The one thing Marina needs is planning. Service lifts and loading bays have to be booked with building
            management, so we arrange that before we arrive rather than turning up and waiting on the concierge.
          </p>
          <a href="/locations/dubai-marina" className="text-[#3E92CC] font-semibold hover:underline">
            More on Dubai Marina storage →
          </a>
        </div>
      </div>
    </section>

    {/* Home storage */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">
          Household Storage — Al Safa, Al Wasl &amp; Umm Suqeim
        </h2>
        <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Villa Renovation &amp; Residential Storage</h3>
        <p className="text-lg text-gray-700 mb-4">
          These are older villa communities and something is always being knocked down and rebuilt. A villa
          renovation here usually runs three to nine months, and most people would rather empty the house than
          shuffle furniture from room to room around the contractors for half a year.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          So we clear it. One team, one truck, everything wrapped and photographed and catalogued, stored in a unit
          that&apos;s yours, delivered back when the work is done. If you need something out mid-way through, we bring
          that piece back and leave the rest.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Beyond renovations, people around here store for the usual reasons. Downsizing. A gap between two leases.
          Kids&apos; furniture nobody wants to throw out. Stock for a business run from the spare bedroom.
        </p>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Al Quoz &amp; Neighbouring Communities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1">
              <li>• Al Quoz Industrial 1, 2, 3 and 4</li>
              <li>• Al Quoz 1, 2, 3 and 4</li>
              <li>• Alserkal Avenue</li>
              <li>• Al Safa 1 and 2</li>
              <li>• Al Wasl</li>
              <li>• Umm Suqeim 1, 2 and 3</li>
            </ul>
            <ul className="space-y-1">
              <li>• Al Manara</li>
              <li>• Al Khail Gate</li>
              <li>• Dubai Design District</li>
              <li>• Business Bay</li>
              <li>• Dubai Marina</li>
              <li>• JBR</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">Based in Al Quoz? Get a free quote.</p>
          <a
            href="/get-quote"
            className="inline-block bg-[#D8315B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c02a50] transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>

    {/* Extended Detail Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">
          Al Quoz Storage — Comprehensive Guide for Businesses &amp; Residents
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Most districts do one thing. Al Quoz does four. It&apos;s the biggest light-industrial zone in the city,
          it&apos;s the gallery and studio quarter, it&apos;s the showroom belt, and there are established residential
          communities in the middle of it. All in a few square kilometres.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Which means storage demand here is all over the place. A fabricator in Industrial 3, a gallery on Alserkal,
          and a family in Al Safa all need storage, and they need completely different things from it.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We run one service across all of it. You get a quote, we collect, we store, you call things back. Same
          process whether it&apos;s five years of files off a mezzanine or a villa&apos;s worth of furniture.
        </p>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Fragile &amp; Specialist Item Handling</h3>
          <p className="text-gray-700 mb-4">
            Al Quoz sends us more fragile items than any other part of Dubai. Framed work, sculpture, designer
            furniture, upholstery, instruments, camera bodies and lenses.
          </p>
          <p className="text-gray-700">
            Everything goes indoors, wrapped, in stable conditions. It gets photographed on collection so there&apos;s
            a record of condition before it goes in. For galleries and studios we&apos;ll set up recurring collections
            tied to your exhibition dates.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Commercial Storage Options for Al Quoz Businesses</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Documents</p>
              <ul className="space-y-1 text-sm">
                <li>• Fireproof storage</li>
                <li>• Barcode indexing</li>
                <li>• 24–48 hour file retrieval</li>
                <li>• Secure shredding with certificate</li>
                <li>• Chain-of-custody records for audits</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Commercial units</p>
              <ul className="space-y-1 text-sm">
                <li>• 50 sq ft to 1,000+ sq ft</li>
                <li>• Inventory overflow and seasonal stock</li>
                <li>• Idle equipment</li>
                <li>• Showroom and ex-display stock</li>
                <li>• Office and workshop furniture during fit-out</li>
                <li>• Month to month, no lock-in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Al Quoz Storage</h2>
        <p className="text-gray-600 text-center mb-10">
          Common questions from Al Quoz workshops, Alserkal studios, showroom operators and residents of Al Safa,
          Al Wasl and Umm Suqeim.
        </p>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">{f.q}</h3>
              <p className="text-gray-700">
                {f.a.map((part, i) =>
                  typeof part === "string" ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <a key={i} href={part.href} className="text-[#3E92CC] hover:underline">
                      {part.text}
                    </a>
                  ),
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
