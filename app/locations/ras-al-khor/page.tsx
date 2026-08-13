import type { Metadata } from "next"
import LocationPage from "@/components/locations/location-page"
import SchemaScript from "@/components/schema-script"
import { locationBusinessSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: { absolute: "Storage Units Ras Al Khor | Industrial & Self Storage | SafeStorage" },
  description:
    "Secure storage in Ras Al Khor, Dubai. Self storage and industrial overflow units with door-to-door collection for furniture traders, workshops and residents.",
  keywords:
    "Storage Ras Al Khor, Ras Al Khor storage units, Ras Al Khor Industrial storage, furniture storage Ras Al Khor, warehouse storage Ras Al Khor, Nad Al Sheba storage, Al Aweer storage, International City storage, Dragon Mart trader storage, Nad Al Hamar storage, Al Warqa storage, business storage Ras Al Khor, showroom stock storage Dubai, SafeStorage Ras Al Khor",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    url: "https://safestorage.ae/locations/ras-al-khor",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations/ras-al-khor",
  },
}

const rasAlKhorSchemas = [
  locationBusinessSchema({
    name: "Ras Al Khor",
    url: "https://safestorage.ae/locations/ras-al-khor",
    serves: ["Nad Al Hamar", "Al Aweer", "Nad Al Sheba", "Al Warqa", "International City", "Al Rashidiya"],
  }),

  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Document Archival & Storage in Ras Al Khor',
    description:
      'Fireproof, barcode-indexed records storage for Ras Al Khor traders, manufacturers and workshops, with named-carton retrieval inside two working days and certified destruction.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/locations/ras-al-khor',
    areaServed: [
      { '@type': 'Place', name: 'Ras Al Khor' },
      { '@type': 'Place', name: 'Nad Al Hamar' },
      { '@type': 'Place', name: 'Al Aweer' },
      { '@type': 'Place', name: 'Nad Al Sheba' },
      { '@type': 'Place', name: 'International City' },
    ],
    serviceType: 'Document Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/locations/ras-al-khor#webpage',
    // Must match the page <title> above — link-preview / interlinking tools read
    // this WebPage name and showed it in place of the title when they disagreed.
    name: 'Storage Units Ras Al Khor | Industrial & Self Storage | SafeStorage',
    description:
      'Secure storage in Ras Al Khor, Dubai. Self storage and industrial overflow units with door-to-door collection for furniture traders, workshops and residents.',
    url: 'https://safestorage.ae/locations/ras-al-khor',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://safestorage.ae/locations' },
      { '@type': 'ListItem', position: 3, name: 'Ras Al Khor', item: 'https://safestorage.ae/locations/ras-al-khor' },
    ],
  },
]

export default function RasAlKhorPage() {
  return (
    <>
    <SchemaScript schema={rasAlKhorSchemas} />
    <LocationPage
      location="Ras Al Khor"
      areas={[
        "Ras Al Khor Industrial Area 1",
        "Ras Al Khor Industrial Area 2",
        "Ras Al Khor Industrial Area 3",
        "Nad Al Hamar",
        "Al Aweer",
        "Nad Al Sheba",
      ]}
      distance="25-30 minutes"
      intro="Ras Al Khor runs on stock. Furniture showrooms, stone yards, parts traders and workshops all hold more than their floor space allows. We collect from your unit on the Ras Al Khor Road corridor, store it under cover, and bring it back on the day you ask for it."
      benefits={[
        "Built for furniture and showroom stock overflow",
        "Suits Ras Al Khor Industrial workshops and trading units",
        "Collection direct from your yard or loading bay",
        "Practical for Nad Al Sheba and Al Warqa villa families",
      ]}
      features={{
        doorToDoor: "We load from your Ras Al Khor unit and return items whenever you call for them",
        security: "Cameras covering every angle, entry logged on arrival, motion alerts once the site closes",
        clean: "Sealed indoor units that keep stone dust, sawdust and yard grit off your stock",
      }}
    />
    {/* Static rich-text section for SEO — server-rendered */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Storage — Ras Al Khor</h2>
        <p className="text-lg text-gray-700 mb-6">
          SafeStorage works with traders, manufacturers and households across Ras Al Khor Industrial 1, 2 and 3, plus
          Nad Al Hamar, Al Aweer, Nad Al Sheba and the surrounding creek-side communities. Collections run off the Ras
          Al Khor Road and Al Khail Road junctions, which keeps loading straightforward even for units set deep inside
          the industrial blocks.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Records Management for Ras Al Khor Traders</h3>
            <p className="text-gray-700 mb-3">
              Trading companies in Ras Al Khor accumulate paperwork faster than most sectors. Customs paperwork, bills
              of lading, supplier invoices, delivery notes, warranty claims and staff files build up over years, and
              almost none of it can legally be thrown away.
            </p>
            <p className="text-gray-700">
              We take that volume off your premises. Each carton is numbered, labelled and logged against a barcode
              before it goes into a fireproof unit. Ask for a specific carton later and our team locates it against
              the index and returns it to your Ras Al Khor address inside two working days. Once records pass their
              retention window, we arrange certified destruction and issue paperwork confirming it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Industrial &amp; Trading Unit Overflow</h3>
            <p className="text-gray-700 mb-3">
              Rent per square foot in Ras Al Khor Industrial is priced for production and dispatch, not for holding
              slow stock. Yet most units here give up a third of their floor to goods that turn over once or twice a
              year.
            </p>
            <p className="text-gray-700">
              We take that volume on monthly terms. Space runs from small consolidated lots up to units above 1,000 sq
              ft, and you adjust the footprint as your stock cycle moves. Traders bringing in seasonal containers use
              us as a staging point, drawing goods down as orders land rather than paying for a permanent second unit
              that stands half empty for eight months of the year.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Household Storage — Nad Al Sheba, Al Warqa &amp; Nad Al Hamar</h3>
          <p className="text-gray-700 mb-4">
            The villa communities east of the creek sit within easy reach of our collection route. Families in these
            neighbourhoods typically call us for:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Extension and rebuild work:</strong> contents cleared out while the villa is opened up</li>
            <li>• <strong>Majlis and guest room furniture:</strong> pieces kept aside outside the entertaining season</li>
            <li>• <strong>Relocation gaps:</strong> belongings held between handover dates on two properties</li>
            <li>• <strong>Garden and outdoor sets:</strong> patio furniture and shade structures stored over summer</li>
            <li>• <strong>Trading stock from home:</strong> cartons and samples for family businesses run from the villa</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Areas Served — Ras Al Khor &amp; Neighbouring Communities</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-1">
              <li>• Ras Al Khor Industrial 1, 2 &amp; 3</li>
              <li>• Nad Al Hamar</li>
              <li>• Al Aweer</li>
              <li>• Al Khail Gate</li>
              <li>• Ras Al Khor residential</li>
            </ul>
            <ul className="space-y-1">
              <li>• Nad Al Sheba 1, 2, 3 &amp; 4</li>
              <li>• Al Warqa 1–5</li>
              <li>• International City</li>
              <li>• Dubai Festival City</li>
              <li>• Al Rashidiya</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Trading, manufacturing or living in Ras Al Khor? Get your free quote now.
          </p>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Ras Al Khor Storage — Comprehensive Guide for Businesses &amp; Residents</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ras Al Khor occupies an unusual position in Dubai. It is the city&apos;s furniture and fit-out heartland,
          its used-car trading centre, and the site of a protected wetland where flamingos feed on the creek — all
          inside the same postcode. Around the industrial blocks sit long-established residential communities in Nad
          Al Sheba, Al Warqa and Nad Al Hamar.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          That mix produces storage demand of every shape. A furniture manufacturer clearing a showroom floor, a parts
          trader holding imported stock between shipments, and a family emptying a villa for a rebuild all need
          something different from a storage provider. We run one service across all of it: quoted by volume,
          collected from your door, stored indoors, returned when called for.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Furniture, Fit-Out &amp; Showroom Stock</h3>
            <p className="text-gray-700 mb-3">
              More furniture passes through Ras Al Khor than anywhere else in the emirate. Manufacturers,
              upholsterers, joinery workshops, mattress suppliers and showroom operators all cluster here, and all of
              them face the same squeeze — display space is finite, production keeps running, and finished goods have
              nowhere to sit.
            </p>
            <p className="text-gray-700 mb-3">
              We hold finished pieces between production and delivery, ex-display units withdrawn from the floor,
              seasonal ranges waiting for a launch window, and contract orders staged ahead of a project handover.
              Items are wrapped before loading and stored in sealed indoor units, which matters for upholstery and
              veneer far more than it does for boxed goods. Nothing sits in an open yard.
            </p>
            <p className="text-gray-700">
              Fit-out contractors working on hotel, retail and office projects use the same arrangement to stage
              joinery and loose furniture ahead of a site becoming ready.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Marble, Stone &amp; Building Materials Traders</h3>
            <p className="text-gray-700 mb-3">
              The stone yards and sanitaryware traders along the industrial strip carry heavy, slow-moving inventory
              that occupies premium ground. Sample slabs, discontinued ranges, fixtures held for a project that has
              been delayed, and packaging stock all take up room needed for working material.
            </p>
            <p className="text-gray-700">
              We take the non-working volume on flexible terms. Boxed tiles, fixtures, fittings and sample stock are
              catalogued on collection so you can call forward exactly what a quotation requires without hunting
              through a yard.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Auto Traders &amp; Workshop Storage</h3>
            <p className="text-gray-700 mb-3">
              Ras Al Khor&apos;s used-vehicle market and the parts trade that surrounds it generate constant storage
              pressure. Traders store parts inventory that outgrows the shelf, tools and diagnostic equipment between
              jobs, tyres and wheels out of season, and years of registration paperwork, service records and sale
              documents.
            </p>
            <p className="text-gray-700">
              We store the parts, tools and paperwork side of the trade only. Vehicles themselves are not something we
              take, so a car needing storage will have to go elsewhere.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Al Aweer Market Traders</h3>
            <p className="text-gray-700 mb-3">
              The wholesale market at Al Aweer supports hundreds of trading businesses, and while we cannot store
              produce of any kind, the surrounding operation generates plenty that we can take. Crates, pallets,
              packaging inventory, weighing and handling equipment, promotional material, display stands and archived
              trade documentation all come to us regularly.
            </p>
            <p className="text-gray-700">
              Traders working seasonal import cycles find monthly terms particularly useful, since equipment sitting
              idle for months no longer needs to occupy rented ground.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">International City &amp; Dragon Mart Traders</h3>
          <p className="text-gray-700 mb-4">
            International City sits directly alongside Ras Al Khor and falls inside this collection zone, together
            with the enormous trading community based around Dragon Mart. Shop operators there work with limited
            back-of-house space and high stock turnover.
          </p>
          <p className="text-gray-700">
            We hold bulk inventory between restocks, packaging and shipping materials, and overflow from container
            arrivals that cannot fit behind the shop. Goods are catalogued on intake and delivered back in part loads,
            so a trader can call forward one product line rather than an entire consignment. Residents across the
            International City clusters also use us for household storage, particularly between tenancy dates.
            International City is additionally covered by our{" "}
            <a href="/locations/dubai-silicon-oasis" className="text-[#3E92CC] hover:underline">
              Dubai Silicon Oasis service zone
            </a>{" "}
            — either page will get you to the same team.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Nad Al Sheba &amp; the Creek-Side Villas</h3>
          <p className="text-gray-700 mb-4">
            Nad Al Sheba&apos;s villa districts and the older plots around Nad Al Hamar are substantial family homes,
            and they are renovated often. Work of this scale usually runs six months or longer, and most owners prefer
            the contents out of the building entirely rather than sheeted up in a back room.
          </p>
          <p className="text-gray-700">
            We clear the house with a dedicated crew, photograph and catalogue every item, hold it in a unit assigned
            to your account, and return it once the site is handed back. If something is needed partway through, we
            deliver that item alone and leave the rest in place.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#0A2463] mb-4">Commercial Storage Options for Ras Al Khor Businesses</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Records &amp; Document Management</p>
              <ul className="space-y-1 text-sm">
                <li>• Fireproof cartons for regulated and financial records</li>
                <li>• Barcode index against every carton logged</li>
                <li>• Named-file delivery within two working days</li>
                <li>• Certified destruction with confirming paperwork</li>
                <li>• Custody trail suitable for audit review</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Trade &amp; Equipment Storage</p>
              <ul className="space-y-1 text-sm">
                <li>• Footprints from small consolidated lots to 1,000+ sq ft</li>
                <li>• Finished furniture and ex-display stock</li>
                <li>• Import overflow and staged container goods</li>
                <li>• Tools, plant and handling equipment between jobs</li>
                <li>• Rolling monthly terms with no fixed tie-in</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Ras Al Khor Storage</h2>
        <p className="text-gray-600 text-center mb-10">
          Common questions from Ras Al Khor traders, furniture businesses, International City shop operators and
          residents of Nad Al Sheba and Al Warqa.
        </p>
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage collect from all three Ras Al Khor industrial areas?</h3>
            <p className="text-gray-700">Yes. Ras Al Khor Industrial 1, 2 and 3 are all inside this collection zone, along with Nad Al Hamar, Al Aweer and the residential districts nearby. Our crews work off the Ras Al Khor Road and Al Khail Road access points, so even units set deep inside the blocks are straightforward to reach. Businesses moving stock on a regular cycle can arrange a standing weekly or monthly collection instead of booking each time. Call or message +971505773388 to arrange a slot.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can furniture manufacturers store finished stock with SafeStorage?</h3>
            <p className="text-gray-700">Yes, and it is one of the most frequent requests we handle from this area. We hold finished pieces awaiting delivery, ex-display units pulled from the showroom floor, seasonal ranges ahead of launch, and contract orders staged before a project handover. Everything is wrapped before loading and stored in sealed indoor units rather than open yards, which protects upholstery, veneer and polished surfaces. Part loads can be called forward, so you draw down what a delivery needs rather than releasing the whole consignment. See our <a href="/furniture-storage" className="text-[#3E92CC] hover:underline">furniture storage page</a> for handling detail.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is this cheaper than renting a second unit in Ras Al Khor Industrial?</h3>
            <p className="text-gray-700">For stock that turns over slowly, it usually is. Industrial rent here is priced for production and dispatch, so using that floor to hold goods moving once or twice a year is expensive space poorly spent. Our pricing starts at 12.65 AED per sqft including VAT and you pay against the volume you actually occupy, with no setup charge and no annual commitment. Send us your dimensions or a few photographs and we will set the two figures side by side so the comparison is clear.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you cover International City and the Dragon Mart trading community?</h3>
            <p className="text-gray-700">Yes. International City borders Ras Al Khor and sits inside this zone, covering all clusters as well as the trading businesses operating around Dragon Mart. Shop operators use us for bulk inventory between restocks, packaging materials, and overflow from container arrivals. Stock is catalogued on intake and returned in part loads, so you can call forward a single product line. Residents across the clusters also store household goods with us, most often between tenancy dates.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can you store produce or goods from the Al Aweer market?</h3>
            <p className="text-gray-700">We cannot accept produce, food or perishable goods of any description — that restriction applies across every SafeStorage unit without exception. What we do store for Al Aweer traders is everything around the produce: crates, pallets, packaging inventory, weighing and handling equipment, display stands, promotional material and archived trade paperwork. Traders working seasonal import cycles use us to hold equipment during the quiet months. Our full list is on the <a href="/prohibited-items" className="text-[#3E92CC] hover:underline">prohibited items page</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I retrieve a specific document carton once it is in storage?</h3>
            <p className="text-gray-700">Contact your consultant by phone, WhatsApp or email and quote the carton reference or describe the file. Our team locates it against the barcode index and delivers it to your Ras Al Khor address within two working days. Requests placed before midday can often be returned the same day. Delivery inside Dubai forms part of the service, and any charge beyond that is stated in your agreement before you commit.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Are Nad Al Sheba, Al Warqa and Nad Al Hamar included?</h3>
            <p className="text-gray-700">All three are covered, along with Al Rashidiya and Al Khail Gate. These are among our steadier residential collection areas, mostly villa renovation work and families moving between properties. Journey time is broadly 25 to 30 minutes. Message +971505773388 with your community and street and we will confirm the slot. Al Warqa and Al Rashidiya residents can also book through our <a href="/locations/mirdif" className="text-[#3E92CC] hover:underline">Mirdif service zone</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What does storage cost for a Ras Al Khor business?</h3>
            <p className="text-gray-700">Charging is by volume and starts at 12.65 AED per sqft including VAT, so you are billed for the space your goods occupy rather than a fixed unit size. Business footprints run from small consolidated lots up to 1,000 sq ft and beyond. No setup fee, no minimum term, no charges introduced later. A consultant will price your requirement against volume, how often you need access, and collection frequency. Full detail sits on our <a href="/pricing" className="text-[#3E92CC] hover:underline">pricing page</a>.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can you empty an entire showroom or workshop in Ras Al Khor?</h3>
            <p className="text-gray-700">Yes. For a full clearance we assign crew and vehicles in proportion to the volume involved. A showroom or workshop can generally be emptied within a single day, or split across scheduled visits if you need to keep trading while it happens. Every item is catalogued and photographed and placed into units assigned to your account, and goods are returned as your operation calls for them. This works well during a relocation, a refit or a lease changeover.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you handle marble, stone and sanitaryware stock?</h3>
            <p className="text-gray-700">We store boxed and packaged material — tiles, fixtures, fittings, sample stock and discontinued ranges. Everything is catalogued on collection so you can call forward precisely what a quotation needs instead of searching a yard. Loose slabs and uncrated stone need to be assessed first, since weight and handling limits apply, so send photographs and dimensions before booking and we will confirm what we can take.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there storage for a villa renovation in Nad Al Sheba?</h3>
            <p className="text-gray-700">Yes, and renovations of that scale are routine work for us. A dedicated crew empties the property, photographs and catalogues the contents, and holds everything in a unit assigned to you. It comes back once the site is handed over. If a particular item is needed while work continues, we deliver that piece on its own. Villa renovation storage here typically runs six months or longer on rolling monthly terms.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-[#0A2463] mb-3">What cannot be placed in a SafeStorage unit?</h3>
            <p className="text-gray-700">For safety and regulatory reasons we do not accept food or grocery items, liquids, detergents, cosmetics, jewellery or ornaments, medicines, or masala and spice items. We also cannot take hazardous material, flammable liquids or gases, explosives, perishables, live plants or animals, illegal substances, cash or negotiable instruments, or anything giving off a strong odour. Vehicles are not accepted at all, whatever their condition or fuel level. If a particular item is uncertain, ask us before booking. Almost all household, trade and commercial goods are accepted without issue.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
