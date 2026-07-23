import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Package, CheckCircle2, ArrowRight, Star, Phone, Home, Building2, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Storage Size Guide Dubai — Which Size?",
  description: "Find the perfect storage unit size in Dubai. Detailed guide covering locker to extra-large units, what fits in each size, and pricing. From 12.60 AED / sqft. Call +971505773388.",
  keywords: "storage unit size guide dubai, what size storage do I need, storage unit sizes dubai, self storage sizes, storage unit calculator dubai, how big storage unit do i need",
  openGraph: {
    title: "Storage Unit Size Guide Dubai — Find Your Perfect Fit | SafeStorage",
    description: "Complete guide to storage unit sizes in Dubai. See what fits in each unit and get the right size first time. From 12.60 AED / sqft.",
    url: "https://safestorage.ae/storage-size-guide",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/storage-size-guide" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/storage-size-guide#webpage",
    name: "Storage Unit Size Guide Dubai — What Size Do I Need?",
    description: "Complete guide to storage unit sizes in Dubai with pricing, what fits, and how to choose.",
    url: "https://safestorage.ae/storage-size-guide",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Storage Size Guide", item: "https://safestorage.ae/storage-size-guide" },
    ],
  },
]

const sizes = [
  {
    name: "Locker / Mini Unit",
    sqft: "25 sq ft (2.3 m²)",
    price: "from 12.60 AED / sqft",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fits: ["10–15 medium boxes", "Small seasonal items", "Suitcases & bags", "Sports equipment", "Files & documents"],
    ideal: "Students, short-term storage, single room items, document archival",
    notFor: "Any furniture or appliances",
  },
  {
    name: "Small Unit",
    sqft: "50 sq ft (4.6 m²)",
    price: "from 12.60 AED / sqft",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    fits: ["Studio apartment contents", "20–30 boxes", "Small sofa or 2 armchairs", "Single mattress + bed frame", "TV up to 55 inch", "Small fridge"],
    ideal: "Studio apartment, single room, renovation overflow",
    notFor: "Full 1-bedroom apartment",
  },
  {
    name: "Medium Unit",
    sqft: "100 sq ft (9.3 m²)",
    price: "from 12.60 AED / sqft",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    fits: ["1–2 bedroom apartment contents", "Full sofa set", "Dining table + 6 chairs", "Double bed + frame", "Washing machine & fridge", "30–50 boxes", "Wardrobe"],
    ideal: "1-2 bedroom apartment renovation, between-lease storage, expat storage",
    notFor: "Full 3-bedroom villa",
  },
  {
    name: "Large Unit",
    sqft: "150 sq ft (14 m²)",
    price: "from 12.60 AED / sqft",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    fits: ["3 bedroom apartment contents", "Multiple sofa sets", "King bed + furniture", "Full kitchen appliances", "50–80 boxes", "Exercise equipment", "Bicycles"],
    ideal: "3-bedroom apartment, small villa, business inventory, office relocation",
    notFor: "Full 4-5 bedroom villa",
  },
  {
    name: "Extra Large Unit",
    sqft: "200+ sq ft (18+ m²)",
    price: "from 12.60 AED / sqft",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    fits: ["4–5 bedroom villa contents", "Entire home furniture", "80–120+ boxes", "Multiple sets of everything", "Business stock & inventory", "Large appliances"],
    ideal: "Full villa, large family relocation, business warehouse alternative",
    notFor: "N/A — our largest option",
  },
  {
    name: "Vehicle Bay",
    sqft: "Dedicated bay",
    price: "from 12.60 AED / sqft",
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    fits: ["Cars & SUVs", "Motorcycles & scooters", "Classic cars", "Boats & jet skis", "Light commercial vehicles"],
    ideal: "Long trips, summer storage, extra vehicle, expat storage",
    notFor: "Daily-use vehicles needing constant access",
  },
]

const scenarios = [
  { icon: Home, title: "Renovating your apartment", rec: "Medium unit", desc: "Most 1-2BR apartments fit comfortably in a medium unit for renovation periods of 2-4 months." },
  { icon: Building2, title: "Between rental leases", rec: "Small to Medium unit", desc: "Gap between leases averages 2-4 weeks in Dubai. Don't rush into a bad apartment — bridge with storage." },
  { icon: Truck, title: "Expat leaving temporarily", rec: "Large unit", desc: "If you're leaving Dubai for 3-12 months and plan to return, storing everything costs a fraction of shipping and back." },
  { icon: Package, title: "E-commerce inventory", rec: "Medium to Large unit", desc: "Flexible alternative to warehouse rental — no 3-year lease, scale up or down as inventory changes." },
]

export default function StorageSizeGuidePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Package className="w-4 h-4" /> Size Guide & Calculator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Storage Unit Size Guide Dubai — Find Your Perfect Fit</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">Stop paying for space you don't need — or cramming into a unit that's too small. Use our complete Dubai storage size guide to choose right the first time.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Size Recommendation</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> Call Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Unit Sizes */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">All Unit Sizes at a Glance</h2>
            <p className="text-center text-gray-600 mb-8">Click any size to see what fits and whether it's right for your situation.</p>
            <div className="mx-auto max-w-xl mb-12">
              <div className="rounded-2xl border-2 border-dubai-gold bg-white p-8 text-center shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-dubai-navy mb-2">
                  Pricing starts from 12.60 AED / sqft
                </h3>
                <p className="text-gray-600">
                  VAT-inclusive · all unit sizes · door-to-door pickup &amp; delivery included
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {sizes.map((size) => (
                <div key={size.name} className={`border-2 rounded-2xl p-6 ${size.color}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-48 flex-shrink-0">
                      <h3 className="text-xl font-bold text-dubai-navy">{size.name}</h3>
                      <div className="text-sm text-gray-600 mt-1">{size.sqft}</div>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">What Fits</div>
                        <ul className="space-y-1">
                          {size.fits.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Ideal For</div>
                        <p className="text-sm text-gray-700">{size.ideal}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Not Suitable For</div>
                        <p className="text-sm text-red-600">{size.notFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Size Do You Need? Common Dubai Scenarios</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scenarios.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4">
                  <s.icon className="w-10 h-10 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy text-lg mb-1">{s.title}</h3>
                    <div className="text-dubai-gold font-semibold text-sm mb-2">Recommended: {s.rec}</div>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Top Tips for Maximising Your Storage Unit</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              {[
                { tip: "Disassemble furniture", desc: "Bed frames, shelving units and dining tables take up dramatically less space when disassembled. A king-size bed frame can save 40% of floor space when broken down." },
                { tip: "Stack vertically", desc: "Use the full height of your unit — stack boxes from floor to ceiling with heaviest items at the bottom. Label boxes on the side for easy identification." },
                { tip: "Fill hollow spaces", desc: "Drawers, wardrobes, and suitcases can hold boxes and soft items. Use every cubic foot you're paying for." },
                { tip: "Create an access aisle", desc: "Leave a 60cm aisle down the middle so you can reach items at the back without unpacking everything." },
                { tip: "Use uniform box sizes", desc: "Standardised boxes stack more efficiently. SafeStorage Dubai sells packing boxes in standard sizes — one size stacks perfectly on another." },
                { tip: "Wrap furniture in protectors", desc: "Furniture covers and stretch wrap are available from us. Protecting items also means you can stack more confidently." },
              ].map((t) => (
                <div key={t.tip} className="flex gap-3 p-4 bg-slate-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dubai-navy mb-1">{t.tip}</div>
                    <div className="text-sm">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Customers Who Got Their Size Right</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Priya S.", location: "JVC", text: "Called SafeStorage confused about what size I needed for my 2-bedroom apartment renovation. The consultant asked me exactly what I had and recommended a medium unit. Perfect fit — everything went in, nothing wasted. Saved me from paying for a large unit I didn't need.", rating: 5 },
                { name: "Tom H.", location: "Downtown Dubai", text: "I tried to save money by getting a small unit. Lesson learned — it wasn't big enough. The SafeStorage team was upfront and honest that I needed a medium unit for my 1BR apartment. They were right. Get the honest advice first.", rating: 5 },
                { name: "Lina M.", location: "Al Barsha", text: "Running an e-commerce business, I was worried about committing to a size. SafeStorage allowed me to start medium and upgrade to a large unit as my inventory grew — same facility, seamless. That flexibility is worth everything for a small business.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name} <span className="text-gray-400 font-normal text-sm">· {t.location}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dubai-navy text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Size You Need?</h2>
            <p className="text-xl text-white/85 mb-8">Our storage consultants will help you choose the right unit — free of charge, no obligation. We'd rather you get the right size than overpay.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Free Size Consultation</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> +971505773388
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Static in-depth guide and FAQ section for SEO */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">Dubai Storage Unit Size Guide — In Depth</h2>
          <p className="text-lg text-gray-700 mb-8">
            Choosing the wrong storage unit size is one of the most common — and most costly — mistakes Dubai residents make when booking storage.
            Too small and you cannot fit everything in, forcing you to either upgrade mid-storage or leave items behind.
            Too large and you pay for empty space every month. This in-depth guide explains exactly what fits in each unit size,
            realistic pricing ranges for Dubai in 2026, and how to make the right decision the first time.
          </p>

          <div className="space-y-10 mb-12">

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">25 sq ft — The Locker or Mini Unit</h3>
              <p className="text-gray-700 mb-4">
                A 25 sq ft unit (approximately 2.3 square metres) is the smallest practical storage size and is best understood
                as a large walk-in wardrobe or oversized locker. At this size, you can store 10–15 medium cardboard boxes stacked
                three high, plus a small number of individual items such as a bicycle, a set of suitcases, or sports equipment
                standing upright along one wall. This unit is not suitable for furniture — not even a single sofa — unless it
                is completely disassembled and packed flat.
              </p>
              <p className="text-gray-700 mb-4">
                This size is ideal for students storing between semesters, individuals archiving documents and files, Dubai residents
                storing seasonal items such as winter clothes or air conditioning units, and anyone who simply needs a secure overflow
                space for boxes they cannot keep at home. Pricing for a 25 sq ft unit in Dubai starts from
                12.60 AED / sqft (VAT-inclusive), making it the most affordable entry point into professional storage.
              </p>
              <p className="text-gray-700">
                To maximise a 25 sq ft unit: stack boxes ceiling-high, use the full depth, and store any freestanding items
                (bags, bikes, equipment) upright against the walls. Label every box clearly on the side — when units are this
                full, finding a specific item without labels means unpacking everything.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">50 sq ft — The Studio or Small Apartment Unit</h3>
              <p className="text-gray-700 mb-4">
                At 50 sq ft (4.6 square metres), this unit comfortably holds the contents of a studio apartment or a single
                furnished room including a sofa, a single or double bed frame (disassembled), a television up to 55 inches, a
                small refrigerator, 20–30 boxes of household items, a wardrobe (flat-packed), and assorted smaller items.
                This is also a popular size for renovation overflow — when a single room is being renovated, its entire contents
                move into a 50 sq ft unit while work is underway.
              </p>
              <p className="text-gray-700 mb-4">
                In Dubai, a 50 sq ft unit starts from 12.60 AED / sqft (VAT-inclusive). This size accounts
                for a large share of bookings from solo expats relocating, students finishing their degree and leaving Dubai
                temporarily, and individuals between short-term lets who need a bridge solution for a few weeks.
              </p>
              <p className="text-gray-700">
                Key tip for 50 sq ft units: disassemble all furniture before moving in. A single assembled sofa can take up
                30–40% of the floor space in this size unit. Disassembled, it takes a fraction of the room, freeing space for
                stacked boxes. Mattresses should be stored vertically against the back wall rather than lying flat.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">75 sq ft — The One-Bedroom Apartment Unit</h3>
              <p className="text-gray-700 mb-4">
                A 75 sq ft unit (7 square metres) is the right choice for a full one-bedroom apartment. At this size, you can
                store a complete sofa set (3-seater plus 2-seater), a double or queen bed frame and mattress, a wardrobe, a
                dining table with four chairs, a washing machine, a small fridge, a television, and 25–40 additional boxes of
                personal belongings. This unit requires thoughtful packing — stacking boxes ceiling-high and using hollow spaces
                inside furniture — but a full one-bedroom apartment fits comfortably.
              </p>
              <p className="text-gray-700 mb-4">
                This size is popular among Dubai residents who are relocating between apartments, going home to their country
                for several months, or between lease handover dates. Pricing for 75 sq ft in Dubai starts from
                12.60 AED / sqft (VAT-inclusive).
              </p>
              <p className="text-gray-700">
                Organisation advice: place sofas and mattresses (vertical) at the back, then boxes stacked around them, with
                a narrow access aisle down the centre for retrieval. Put any items you think you might need to access during
                the storage period — specific clothing, documents, electronics chargers — in a single clearly marked box at
                the very front.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">100 sq ft — The Two-Bedroom Apartment Unit</h3>
              <p className="text-gray-700 mb-4">
                At 100 sq ft (9.3 square metres), this is one of the most popular unit sizes at SafeStorage Dubai. It comfortably
                handles a two-bedroom apartment with a full sofa set, two beds, a wardrobe, a dining table with six chairs, a
                washing machine, a full-size fridge-freezer, 30–50 boxes, and exercise equipment such as a bicycle or treadmill.
                With good packing technique, some customers also fit a one-bedroom villa comfortably into this size.
              </p>
              <p className="text-gray-700 mb-4">
                This unit size is frequently used for renovation projects covering multiple rooms, expats leaving Dubai for six
                months to a year who want to avoid the cost of shipping all their furniture, and individuals downsizing from a
                larger apartment who want to keep their furniture while they decide what to do long-term. Pricing in Dubai
                for a 100 sq ft unit starts from 12.60 AED / sqft (VAT-inclusive).
              </p>
              <p className="text-gray-700">
                At this size, investing 20 minutes in a proper storage plan makes a significant difference. Sketch a simple
                layout before loading: large appliances along the back wall, furniture (disassembled where possible) in the
                middle, boxes stacked at the front and sides. This makes the space far more useful and prevents the frustration
                of having items inaccessible at the back.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">150 sq ft — The Three-Bedroom Apartment or Small Villa Unit</h3>
              <p className="text-gray-700 mb-4">
                A 150 sq ft unit (approximately 14 square metres) is designed for three-bedroom apartments or small villas.
                At this size, you can store multiple sofa sets, three to four beds, several wardrobes, a full kitchen appliance
                set, a dining suite, 50–80 boxes, exercise equipment, bicycles, and other large items. This unit gives you
                enough room to maintain an access aisle while keeping everything organised and accessible.
              </p>
              <p className="text-gray-700 mb-4">
                Common use cases for 150 sq ft storage include families relocating during major villa renovations, households
                moving back to their home country for a year or more and leaving their Dubai belongings in storage, and small
                businesses storing commercial inventory alongside office furniture. Pricing for this size in Dubai
                starts from 12.60 AED / sqft (VAT-inclusive).
              </p>
              <p className="text-gray-700">
                At this size, consider using freestanding shelving units inside the storage space for additional vertical
                organisation. SafeStorage Dubai can provide shelving upon request for customers with long-term bookings.
                This allows you to store loose items (tools, sports equipment, boxes of varying sizes) on shelves rather
                than stacking them precariously, making retrieval much safer and easier.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-dubai-navy mb-4">200+ sq ft — The Full Villa or Commercial Unit</h3>
              <p className="text-gray-700 mb-4">
                Units of 200 square feet and above are designed for full four-to-five bedroom villas, large commercial inventory,
                or major business storage requirements. At this size, you can store the entire contents of a large villa including
                all bedroom furniture, living room sets, kitchen appliances, garden furniture, 80–120+ boxes, vehicles (where
                bay configurations allow), and everything else. These units are genuinely large spaces — the equivalent of a
                small warehouse floor — and can be accessed with loading equipment for particularly heavy items.
              </p>
              <p className="text-gray-700 mb-4">
                Pricing for 200+ sq ft storage in Dubai starts from 12.60 AED / sqft (VAT-inclusive), inclusive of
                any additional services. This is still considerably less than the cost of maintaining a
                warehouse or keeping a large vacant villa for storage purposes. Many large families and businesses have found
                that using professional storage versus paying ongoing rent on an oversized space saves them AED 5,000–15,000
                per month.
              </p>
              <p className="text-gray-700">
                For units at this size, SafeStorage Dubai assigns a dedicated storage consultant who assists with inventory
                management, access scheduling, and logistics coordination. Business customers often use these large units
                as a flexible alternative to long-term warehouse leases, with the ability to scale up or down on 30 days&apos;
                notice without the financial and legal commitment of a commercial property contract.
              </p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-dubai-navy mb-6">15 Frequently Asked Questions — Storage Sizes in Dubai</h2>

          <div className="space-y-5">
            {[
              {
                q: "What size storage unit do I need for a 1-bedroom apartment in Dubai?",
                a: "A one-bedroom apartment in Dubai typically fits into a 50–75 sq ft storage unit. If your apartment is fully furnished and you have a lot of boxes and personal items, opt for 75 sq ft. If you are storing just the basics — a bed, sofa, and 20–30 boxes — a 50 sq ft unit is usually sufficient. The safest approach is to contact SafeStorage Dubai, describe your inventory, and let our consultant recommend the right size."
              },
              {
                q: "What size unit do I need for a 2-bedroom apartment?",
                a: "A two-bedroom apartment normally requires a 100–120 sq ft unit. This accommodates two beds, a full living room set, a dining area, kitchen appliances, wardrobes, and 30–50 boxes. If you have a lot of large appliances, a gym room, or unusually large furniture, consider 150 sq ft. SafeStorage Dubai&apos;s consultants can help you right-size based on your actual inventory."
              },
              {
                q: "Will a 3-bedroom villa fit in a 150 sq ft unit?",
                a: "A medium-sized three-bedroom villa can fit into a 150 sq ft unit when furniture is disassembled and items are packed efficiently. Very large villas or those with extensive furniture sets may need 175–200 sq ft. The key variables are the size of sofas and wardrobes, the number of beds, and how many boxes of personal items you have. We recommend a video call or a visit from our consultant to assess before booking."
              },
              {
                q: "Can I store a car in a standard storage unit?",
                a: "No. Cars require dedicated vehicle storage bays, not standard box-storage units. SafeStorage Dubai offers secure indoor vehicle bays for cars, motorcycles, and scooters starting from 12.60 AED / sqft (VAT-inclusive). Standard units — even our largest 200+ sq ft options — are not configured for vehicle access and are not suitable for vehicle storage."
              },
              {
                q: "Is a 25 sq ft unit big enough for documents and files?",
                a: "Yes. A 25 sq ft unit can store a significant volume of business documents. Standard archive boxes (40x30x30 cm) stacked three high across the full unit floor can hold hundreds or thousands of files depending on how densely packed. For businesses with UAE document retention requirements (5-year mandatory archival period), a 25 sq ft unit is typically sufficient for small to medium businesses. For larger document archives, a 50 sq ft unit provides more comfortable access."
              },
              {
                q: "How do I estimate what size unit I need?",
                a: "The most accurate method is to list every item you plan to store — furniture piece by piece, and an estimate of boxes. Then match that to our size guide. As a quick rule of thumb: every 10 medium boxes fills roughly 10–12 sq ft. A double bed frame (disassembled) takes about 20 sq ft lying flat. A 3-seater sofa (without cushions) takes roughly 15 sq ft. Add these up and round up to the nearest unit size. When in doubt, go one size larger — the cost difference is small and the frustration of being too tight is significant."
              },
              {
                q: "What happens if my items don&apos;t all fit in the unit I booked?",
                a: "If on pickup day your items exceed your booked unit size, our team will assess the situation and immediately arrange an upgrade to the next available size. Your pricing adjusts accordingly from that day. We never turn away items — our priority is ensuring everything you need to store is safely housed. If you are unsure about size before booking, call +971505773388 for a free no-obligation size assessment."
              },
              {
                q: "Can I upgrade or downgrade my unit size after I start storing?",
                a: "Yes. You can upgrade to a larger unit at any time, subject to availability, typically within 2–3 business days. Downgrading involves moving your items to a smaller unit — our team can assist with this. Pricing adjusts from the next billing cycle. Many customers start with a medium unit and upgrade as their inventory grows (common with e-commerce businesses) or downgrade after a review of what they actually need (common with long-term household storage customers)."
              },
              {
                q: "What is the cheapest unit size available at SafeStorage Dubai?",
                a: "The smallest and most affordable unit size is our 25 sq ft mini unit, starting from 12.60 AED / sqft (VAT-inclusive). This unit is suitable for documents, seasonal items, boxes, suitcases, and small equipment. It is popular with students, solo residents, and businesses with limited archival needs. Even at this entry-level price, the unit includes 24/7 CCTV security, insurance coverage, and the option to add door-to-door pickup and delivery."
              },
              {
                q: "How many boxes fit in a 100 sq ft storage unit?",
                a: "A 100 sq ft unit can hold approximately 50–80 medium boxes (40x30x30 cm) when stacked ceiling-high using the full available height. If you are also storing furniture alongside boxes, the number of boxes reduces proportionally. For reference, the average one-bedroom apartment generates 20–30 boxes of personal items; a two-bedroom generates 35–50. So a 100 sq ft unit typically holds the box contents of a two-bedroom apartment plus the furniture."
              },
              {
                q: "Should I book a larger unit just in case?",
                a: "Not necessarily — our consultants are very experienced at right-sizing and the estimates we give are reliable. However, if you are between two sizes, it is generally better to book the larger one. With our simple 12.60 AED / sqft pricing, the extra cost for a little more space is small — far less annoying than being too tight and having to urgently upgrade, or worse, not being able to store everything you needed to."
              },
              {
                q: "Can two people share a storage unit to split costs?",
                a: "Yes. SafeStorage Dubai allows multiple authorised users on a single storage account. Roommates, family members, or business partners can share a unit. Both parties need to be listed on the storage agreement and have their own access credentials. Many customers split a medium or large unit with a housemate or family member to reduce costs — this is a practical way to access professional storage for less than the cost of a small unit individually."
              },
              {
                q: "Is there a size guide tool online to help me choose?",
                a: "Yes. SafeStorage Dubai provides an online storage size guide at safestorage.ae/storage-size-guide with visual comparisons of unit sizes, what fits in each, and pricing ranges. You can also call or WhatsApp +971505773388 for a free personalised size recommendation from one of our storage consultants. The consultation is free and takes under five minutes — we ask about what you need to store and give you a clear recommendation."
              },
              {
                q: "What is the difference between self-storage and door-to-door storage in Dubai?",
                a: "Traditional self-storage requires you to transport your items to the facility, load them into your unit yourself, and collect them when needed — using your own vehicle or a rented lorry. Door-to-door storage, which is SafeStorage Dubai&apos;s primary model, means our team comes to your home or office, loads your items, transports them to our facility, and delivers them back when you request. Door-to-door storage is more convenient, often similar in price when you factor in lorry rental and moving costs, and reduces the physical effort on the customer&apos;s side entirely."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-dubai-navy mb-2">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">Still unsure which size is right for you?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg font-semibold">Get a Free Size Consultation</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="px-8 py-3 text-lg border-dubai-navy text-dubai-navy hover:bg-dubai-navy hover:text-white">
                  Call +971505773388
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
