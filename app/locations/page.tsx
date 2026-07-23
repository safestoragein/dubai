import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Storage Locations in Dubai",
  description:
    "Find SafeStorage locations across Dubai. We serve Business Bay, Dubai Marina, Jumeirah, Dubai Investment Park & more. Door-to-Door pickup & delivery. Call +971505773388.",
  keywords:
    "storage locations dubai, storage near me, self storage dubai locations, storage facilities dubai, dubai storage centers",
  openGraph: {
    title: "Storage Locations Dubai - SafeStorage",
    description: "Premium storage locations across Dubai with door-to-door pickup & delivery service. Find a location near you.",
    url: "https://safestorage.ae/locations",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations",
  },
}

const locations = [
  {
    name: "Business Bay",
    slug: "business-bay",
    areas: ["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road"],
    distance: "10-15 minutes",
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    areas: ["Downtown Dubai", "DIFC", "Burj Khalifa District", "Old Town"],
    distance: "10-15 minutes",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    areas: ["Dubai Marina", "JBR", "JLT", "Media City", "Internet City"],
    distance: "15-20 minutes",
  },
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    areas: ["Palm Trunk", "All 16 Fronds", "Palm Crescent", "Shoreline Apartments"],
    distance: "20-25 minutes",
  },
  {
    name: "Jumeirah",
    slug: "jumeirah",
    areas: ["Jumeirah 1, 2, 3", "Umm Suqeim", "Al Safa", "Al Wasl"],
    distance: "15-20 minutes",
  },
  {
    name: "Al Barsha",
    slug: "al-barsha",
    areas: ["Al Barsha 1, 2, 3", "Barsha Heights (IMPZ)", "Tecom", "Arjan"],
    distance: "15-20 minutes",
  },
  {
    name: "JVC (Jumeirah Village Circle)",
    slug: "jumeirah-village-circle",
    areas: ["JVC All Districts", "JVT", "Dubai Sports City", "Motor City"],
    distance: "15-20 minutes",
  },
  {
    name: "Dubai Hills Estate",
    slug: "dubai-hills",
    areas: ["Dubai Hills", "Golf Place", "Maple", "Al Quoz", "Nad Al Sheba"],
    distance: "15-20 minutes",
  },
  {
    name: "Mirdif",
    slug: "mirdif",
    areas: ["Mirdif", "Rashidiya", "Muhaisnah", "Al Warqa"],
    distance: "20-25 minutes",
  },
  {
    name: "Deira & Bur Dubai",
    slug: "deira",
    areas: ["Deira", "Bur Dubai", "Karama", "Oud Metha", "Al Garhoud"],
    distance: "20-25 minutes",
  },
  {
    name: "Dubai Silicon Oasis",
    slug: "dubai-silicon-oasis",
    areas: ["Dubai Silicon Oasis", "Academic City", "International City", "Dubailand"],
    distance: "25-30 minutes",
  },
  {
    name: "Dubai Investment Park",
    slug: "dubai-investment-park",
    areas: ["Dubai Investment Park", "Dubai Production City", "Dubai Studio City", "Motor City"],
    distance: "10-15 minutes",
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storage Locations Across Dubai
            </h1>
            <p className="text-xl mb-8">
              We serve multiple areas in Dubai with door-to-door pickup & delivery service from your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +971505773388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Find SafeStorage Near You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location) => (
                <Card key={location.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <MapPin className="mr-2 h-6 w-6 text-[#D8315B]" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Areas Served:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {location.areas.map((area, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-[#0A2463]">
                        <strong>Distance:</strong> {location.distance}
                      </p>
                    </div>
                    <Button className="w-full bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
                      <Link href={`/locations/${location.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0A2463]">
              We Cover All of Dubai
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Even if your area isn't listed above, we still serve you! Our door-to-door pickup & delivery service
              covers all areas across Dubai. We'll come to your location to pick up your items and deliver them
              back whenever you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Store with SafeStorage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and experience premium storage service anywhere in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
              <Link href="/get-quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Locations Across Dubai — Complete Coverage Guide</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai operates the most comprehensive door-to-door storage pickup network in the UAE. Unlike traditional self-storage facilities where you must rent a van, load your own furniture, and drive across the city, SafeStorage comes directly to your home or office anywhere in Dubai. Our professional team handles collection, secure transportation, and on-demand delivery — making storage genuinely hassle-free from start to finish. With service zones spanning Business Bay, Dubai Marina, Jumeirah, Dubai Investment Park, and all surrounding communities, there is no area of Dubai we cannot serve.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Central Dubai Coverage</h3>
              <p className="text-gray-700 text-sm mb-3">Our Business Bay service zone covers the heart of Dubai — Downtown, DIFC, Sheikh Zayed Road, Burj Khalifa District, Za&apos;abeel, and Trade Centre. This zone primarily serves corporate clients, DIFC companies needing document archiving, and Downtown apartment residents who need extra storage space in a city where apartments are compact and storage is at a premium.</p>
              <p className="text-gray-700 text-sm">Average pickup time from Central Dubai: 10–15 minutes from confirmation.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">West Dubai Coverage</h3>
              <p className="text-gray-700 text-sm mb-3">Our Dubai Marina service zone covers the western coastal strip — Marina, JBR, JLT, Bluewaters Island, Palm Jumeirah, Dubai Media City, Dubai Internet City, The Greens, and The Views. This zone is particularly popular with professionals and expats who live in the Marina area and need flexible, short-term storage between lease transitions or during apartment renovations.</p>
              <p className="text-gray-700 text-sm">Average pickup time from West Dubai: 15–20 minutes from confirmation.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">South Dubai Coverage</h3>
              <p className="text-gray-700 text-sm mb-3">Our Dubai Investment Park service zone covers southern Dubai — DIP 1 &amp; 2, Motor City, Dubai Production City, Dubai Studio City, Sports City, Discovery Gardens, Jumeirah Village Circle, and JAFZA. This zone primarily serves businesses needing document archiving, industrial companies, and residents of the south Dubai villa and apartment communities.</p>
              <p className="text-gray-700 text-sm">Average pickup time from South Dubai: 10–15 minutes from confirmation.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-2xl font-bold text-[#0A2463] mb-4">How the SafeStorage Door-to-Door System Works</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">The SafeStorage process is designed to eliminate every inconvenience associated with traditional self-storage. Here is exactly what happens when you book with us:</p>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>Step 1 — Get a Quote:</strong> Contact us by phone, WhatsApp (+971505773388), or online form. Describe what you need to store and we provide an instant, transparent quote with no hidden fees.</li>
                  <li><strong>Step 2 — Schedule Pickup:</strong> Choose your preferred pickup date and time window (morning, afternoon, or evening, Monday through Saturday). Same-day pickup is available for requests made before 12 PM.</li>
                  <li><strong>Step 3 — We Collect:</strong> Our uniformed team arrives at your location in a clean, covered moving vehicle. We carefully pack, wrap, and load your items — you do not need to lift a single box.</li>
                  <li><strong>Step 4 — Secure Storage:</strong> Your items are transported to our secure facility and stored in a dedicated, individually alarmed unit. You receive a digital inventory of everything stored.</li>
                  <li><strong>Step 5 — On-Demand Retrieval:</strong> When you need items back, simply contact us. We deliver your specified items to your address within 24–48 hours, or same-day for urgent requests.</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0A2463] mb-3">What Is Included in Every Plan</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Door-to-Door pickup anywhere in Dubai</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Secure, indoor storage</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Complimentary insurance on all stored items</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Digital photo inventory of every item stored</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Dedicated storage consultant via phone and WhatsApp</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Flexible monthly plans — cancel anytime without penalty</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>On-demand delivery back to any Dubai address</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>Professional packing materials and wrapping available</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-1">✓</span><span>No surprise charges — all costs disclosed upfront</span></li>
                </ul>
                <div className="mt-6 p-4 bg-[#0A2463] text-white rounded-lg">
                  <p className="font-bold mb-1">Starts from 12.60 AED / sqft</p>
                  <p className="text-sm">Plans scale based on volume of items stored. No minimum contract. No long-term commitment required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4 text-center">Frequently Asked Questions — Storage Locations in Dubai</h2>
          <p className="text-gray-600 text-center mb-10">Everything you need to know about SafeStorage coverage, pickup areas, and how our location service works across Dubai.</p>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Which areas of Dubai does SafeStorage serve?</h3>
              <p className="text-gray-700">SafeStorage serves every area of Dubai with our door-to-door pickup and delivery service. Our four primary service zones cover Business Bay (central Dubai), Dubai Marina (western Dubai), Jumeirah (villa communities), and Dubai Investment Park (southern Dubai). Beyond these core zones, we also serve Deira, Bur Dubai, Karama, Mirdif, Arabian Ranches, Dubai Silicon Oasis, Academic City, International City, Al Barsha, Tecom, and all other Dubai communities. If you are unsure whether your area is covered, simply call or WhatsApp us on +971505773388 and we will confirm immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How quickly can SafeStorage pick up from my location in Dubai?</h3>
              <p className="text-gray-700">For requests made before 12 PM on working days, same-day pickup is available across most Dubai areas. Standard pickups are scheduled within 24–48 hours, with your choice of morning (8 AM–12 PM), afternoon (12 PM–4 PM), or evening (4 PM–8 PM) time windows. Our team arrives within a 1-hour window of the scheduled time. For urgent situations — such as last-minute lease endings or unexpected renovation starts — call us directly on +971505773388 and we will do our best to accommodate you on the same day.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do I need to visit your storage facility or can everything be done remotely?</h3>
              <p className="text-gray-700">Everything can be done without visiting our facility. You can get a quote, book a pickup, manage your account, and request delivery entirely by phone, WhatsApp, or our online portal. Our team collects your items from your door, stores them securely, and returns them to your address on demand. Many SafeStorage customers never visit the facility at all — they simply manage their storage remotely. If you would like to visit or inspect the facility, you are welcome to do so by scheduling an appointment.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the closest SafeStorage location to Downtown Dubai and the Burj Khalifa area?</h3>
              <p className="text-gray-700">Downtown Dubai and the Burj Khalifa District fall within our Business Bay service zone, which is our closest and fastest service zone for central Dubai. Pickup times from Downtown Dubai are typically 10–15 minutes. We serve all towers in Downtown including The Address, Burj Khalifa residences, Vida Downtown, and the Old Town. Whether you are a resident in a Downtown apartment or a business at the Dubai Mall Offices, our team can collect your items quickly and efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Does SafeStorage cover Palm Jumeirah?</h3>
              <p className="text-gray-700">Yes, SafeStorage provides full pickup and delivery service to Palm Jumeirah — including the Trunk, Fronds, and Crescent. Palm Jumeirah falls within our Dubai Marina service zone. Given the unique geography of the Palm, we schedule dedicated pickup slots to ensure your items are collected and transported safely. We regularly serve residents of Signature Villas, Garden Homes, and the Shoreline Apartments on the Palm. Contact us on +971505773388 to schedule your Palm Jumeirah pickup.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I get storage if I live in Al Barsha, Tecom, or Barsha Heights (Impz)?</h3>
              <p className="text-gray-700">Absolutely. Al Barsha, Tecom, and Barsha Heights (also known as IMPZ) are fully covered by SafeStorage. These areas fall between our Dubai Marina and Dubai Investment Park service zones and are served with the same speed and quality as our core areas. Al Barsha 1, 2, 3, and 4 are all within our coverage, as are Tecom and Dubai Production City. Typical pickup times from these areas are 15–20 minutes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Is there a minimum storage period for any location in Dubai?</h3>
              <p className="text-gray-700">SafeStorage has no minimum storage period across any Dubai location. You can store items for as short as one week and as long as several years on the same flexible monthly plan. There are no lock-in contracts, no penalties for cancelling, and no requirement to commit to a long-term storage period. Billing is monthly and you can end your storage plan at any time with 14 days&apos; notice. This makes SafeStorage ideal for short-term needs like apartment renovations, lease gaps, and business inventory clearances.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How does SafeStorage pricing work — is it the same across all Dubai locations?</h3>
              <p className="text-gray-700">Yes, SafeStorage pricing is uniform across all Dubai locations. We do not charge more for pickup from certain areas or premium residential communities. Pricing is based solely on the volume of items you store and starts from 12.60 AED / sqft (VAT-inclusive), whether you store a small amount of boxes or full villa contents. All quotes include door-to-door pickup, secure storage, insurance, and on-demand delivery. There are no hidden charges, fuel surcharges, or location premiums. Get an instant quote by calling +971505773388 or using our online quote tool.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can businesses in Dubai&apos;s free zones use SafeStorage?</h3>
              <p className="text-gray-700">Yes, SafeStorage works with businesses in all Dubai free zones including DIFC, JAFZA, DMCC (JLT), Dubai Media City, Dubai Internet City, Dubai Silicon Oasis, and Dubai Airport Free Zone. We provide commercial storage solutions for free zone companies including document archiving, office furniture storage, inventory management, and equipment storage. Free zone companies benefit particularly from our document archiving service, which meets UAE regulatory retention requirements and provides barcode-indexed retrieval for specific files and boxes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What areas of Dubai have same-day pickup available?</h3>
              <p className="text-gray-700">Same-day pickup is available across all major Dubai areas for requests confirmed before 12 PM on working days (Monday through Saturday). This includes Business Bay, Downtown Dubai, Dubai Marina, JBR, JLT, Jumeirah 1–3, Umm Suqeim, Al Barsha, Dubai Investment Park, Motor City, and Sports City. For more distant areas such as Mirdif, Rashidiya, or Dubai Silicon Oasis, same-day availability may depend on scheduling — we recommend calling us early in the day for these locations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Do you serve areas outside Dubai such as Abu Dhabi, Sharjah, or Ajman?</h3>
              <p className="text-gray-700">SafeStorage Dubai&apos;s primary service area is within Dubai emirate, where we offer our full door-to-door pickup and delivery service. For customers in Sharjah, Ajman, and other Northern Emirates, we can often arrange pickup at a small additional transport fee — please call us to discuss your specific location. For Abu Dhabi customers, SafeStorage operates a separate service at safestorage.ae covering the Abu Dhabi emirate with the same standards of quality and service.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">How do I find out exactly which zone covers my Dubai address?</h3>
              <p className="text-gray-700">The easiest way is to WhatsApp or call us on +971505773388 with your building name or community, and we will instantly confirm your service zone, estimated pickup time, and available time slots. Alternatively, you can enter your address in our online quote tool and it will automatically detect your zone and provide pricing. All four of our Dubai service zones offer the same quality, pricing, and service standards — the zone designation simply helps us dispatch the nearest team for the fastest possible pickup.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">Can I store items from multiple Dubai locations in one account?</h3>
              <p className="text-gray-700">Yes. Many business customers and families with multiple properties use a single SafeStorage account to manage storage from multiple Dubai addresses. For example, a business might use us to store office furniture from their Business Bay office and inventory from their Al Quoz warehouse — both under one account with a single invoice. Similarly, expat families might store items from both a villa and a beach apartment. We can arrange pickups from multiple locations and consolidate everything into one or more storage units as needed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-[#0A2463] mb-3">What is the coverage map for SafeStorage Dubai — do you have a visual map?</h3>
              <p className="text-gray-700">SafeStorage covers the entire Dubai emirate with our door-to-door service. Our four primary zones — Business Bay (central), Dubai Marina (western coast), Jumeirah (villa belt), and Dubai Investment Park (southern) — together cover every community in Dubai. Rather than a physical map, the simplest way to confirm coverage is to call or WhatsApp us with your location. Our team will confirm coverage and pickup availability within minutes. We serve over 200 distinct communities and developments across Dubai and have never declined a pickup within the emirate boundaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich text SEO content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Locations Serving All of Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage operates across Dubai with strategically placed service zones covering the major residential
            and commercial areas. Our unique hassle-free model means you never need to travel to a storage facility
            — our team comes to you for pickup and returns your items on demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Location Matters for Storage in Dubai</h3>
              <p className="text-gray-700 mb-3">
                Dubai is a large, geographically diverse city. Choosing a storage provider with coverage near your
                home or business reduces pickup time, lowers delivery lead times, and makes it easier to retrieve
                items when you need them. SafeStorage&apos;s multi-zone model ensures every Dubai resident and
                business is within our door-to-door pickup and delivery coverage area.
              </p>
              <p className="text-gray-700">
                Our service zones are centred around four key hubs — Business Bay (serving central and downtown
                Dubai), Dubai Marina (serving the western coast), Jumeirah (serving the villa communities), and
                Dubai Investment Park (serving the southern industrial and residential areas). Each zone has
                dedicated logistics teams for fast, efficient service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Same-Day Pickup Across Dubai</h3>
              <p className="text-gray-700 mb-3">
                One of SafeStorage&apos;s most popular features is same-day pickup for requests made before 12 PM.
                This means if you call or WhatsApp us in the morning, our team can collect your items that
                afternoon — no waiting days for a slot.
              </p>
              <p className="text-gray-700">
                Standard pickups are scheduled within 24–48 hours based on your preferred time slot. We offer
                morning (8 AM–12 PM), afternoon (12 PM–4 PM), and evening (4 PM–8 PM) windows Monday through
                Saturday. Our team arrives within a 1-hour window and handles all the packing and loading.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Complete List of Areas Covered by SafeStorage Dubai</h3>
            <div className="grid md:grid-cols-4 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Dubai Marina</li>
                <li>• JBR (Jumeirah Beach Residence)</li>
                <li>• Bluewaters Island</li>
                <li>• JLT (Jumeirah Lake Towers)</li>
                <li>• Dubai Media City</li>
                <li>• Dubai Internet City</li>
                <li>• Palm Jumeirah</li>
                <li>• The Greens &amp; The Views</li>
              </ul>
              <ul className="space-y-1">
                <li>• Business Bay</li>
                <li>• Downtown Dubai</li>
                <li>• DIFC</li>
                <li>• Sheikh Zayed Road</li>
                <li>• Burj Khalifa District</li>
                <li>• Trade Centre</li>
                <li>• Za&apos;abeel</li>
                <li>• Al Quoz</li>
              </ul>
              <ul className="space-y-1">
                <li>• Jumeirah 1, 2, 3</li>
                <li>• Umm Suqeim</li>
                <li>• Al Safa &amp; Al Wasl</li>
                <li>• Satwa</li>
                <li>• Bur Dubai</li>
                <li>• Deira</li>
                <li>• Karama</li>
                <li>• Oud Metha</li>
              </ul>
              <ul className="space-y-1">
                <li>• Dubai Investment Park</li>
                <li>• Motor City</li>
                <li>• Dubai Sports City</li>
                <li>• Dubai Production City</li>
                <li>• Jumeirah Village Circle</li>
                <li>• Discovery Gardens</li>
                <li>• Mirdif</li>
                <li>• Rashidiya</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Services Available at All Locations</h3>
            <p className="text-gray-700 mb-4">
              Regardless of which area of Dubai you are in, SafeStorage provides the same comprehensive range of
              storage services with identical pricing, service quality, and customer care standards:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              <p>• Household &amp; personal storage with door-to-door pickup</p>
              <p>• Furniture storage with professional wrapping</p>
              <p>• Business &amp; commercial storage solutions</p>
              <p>• Document archiving and records management</p>
              <p>• Vehicle, car, and motorcycle storage</p>
              <p>• Short-term renovation and lease-gap storage</p>
              <p>• Long-term expat storage with flexible terms</p>
              <p>• Student storage for semester breaks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
