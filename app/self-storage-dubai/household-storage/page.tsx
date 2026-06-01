import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Package, Shield, Truck, ArrowRight, CheckCircle2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Household Storage Dubai — Flexible & Secure",
  description: "Free up space at home. Store furniture, boxes, white goods, and more in secure units with optional pickup and packing. Get a clear quote.",
  keywords: "household storage dubai, furniture storage dubai, storage units dubai, home storage dubai",
  openGraph: {
    title: "Household Storage Dubai – Make Space for What Matters",
    description: "Store household items securely with SafeStorage Dubai. Flexible terms and professional service.",
    url: "https://safestorage.ae/self-storage-dubai/household-storage",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/household-storage",
  },
}

export default function HouseholdStoragePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/self-storage-dubai" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              ← Back to Self Storage Dubai
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Household Storage in Dubai – Make Space for What Matters
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your home should feel open and organized, not crowded by boxes and extra furniture. With household storage in Dubai, 
              you can store seasonals, white goods, and rarely used items without letting them take over your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Common Household Storage Needs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Decluttering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Create breathing room by storing items you don't use daily but aren't ready to discard.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Renovations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Protect furniture and belongings from dust and damage during home improvements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Bridge the gap between homes or store items while settling into a new place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Store */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              What You Can Store
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Furniture & Large Items</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Sofas, beds, dining sets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Wardrobes and dressers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>White goods and appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Exercise equipment</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/self-storage-dubai/furniture-storage" className="text-dubai-gold hover:underline">
                    Learn more about furniture storage →
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Personal Items</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Seasonal decorations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Books and documents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Toys and baby items</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Luggage and sports gear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right-Sizing Your Unit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Right-Sizing Your Unit
            </h2>
            <p className="text-gray-600 mb-6">
              Avoid overpaying by choosing the right size. Our team helps match your inventory to the perfect unit:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Provide a quick list or photos of items you need to store.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Room-by-room inventory</li>
                    <li>• Photo assessment option</li>
                    <li>• Expert recommendations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Size Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We'll match your needs to the right capacity:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Studio apartment: 3-5 m²</li>
                    <li>• 1-bedroom: 5-7 m²</li>
                    <li>• 2-bedroom: 8-10 m²</li>
                    <li>• 3+ bedroom: 12-15 m²</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/self-storage-dubai/storage-unit-sizes">
                  View Complete Size Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup & Packing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Pickup & Packing Services
            </h2>
            <p className="text-gray-600 mb-8">
              Add professional packing and pickup for a completely hands-free experience:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Professional Packing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• High-grade materials</li>
                    <li>• Careful wrapping</li>
                    <li>• Clear labeling</li>
                    <li>• Photo inventory</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Hassle-Free Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Scheduled collection</li>
                    <li>• Trained crews</li>
                    <li>• Safe transport</li>
                    <li>• Insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Partial Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Retrieve specific items</li>
                    <li>• Scheduled delivery</li>
                    <li>• Online requests</li>
                    <li>• Quick turnaround</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Security */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Climate & Security Protection
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Climate Control</h3>
                <p className="text-gray-600 mb-4">
                  Protect sensitive household items from Dubai's extreme weather:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wood furniture protection</li>
                  <li>• Fabric and leather care</li>
                  <li>• Electronics safety</li>
                  <li>• Document preservation</li>
                </ul>
                <div className="mt-4">
                  <Link href="/self-storage-dubai/climate-controlled" className="text-dubai-gold hover:underline">
                    Learn about climate control →
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">24/7 Security</h3>
                <p className="text-gray-600 mb-4">
                  Your belongings are protected around the clock:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• CCTV surveillance</li>
                  <li>• Access control systems</li>
                  <li>• Individual unit locks</li>
                  <li>• Regular security patrols</li>
                </ul>
                <div className="mt-4">
                  <Link href="/self-storage-dubai/security-insurance" className="text-dubai-gold hover:underline">
                    View security details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Flexible Storage Terms
            </h2>
            <p className="text-gray-600 mb-8">
              Store for as long or short as you need with complete flexibility:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Short-Term Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Perfect for temporary needs:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• During home moves</li>
                    <li>• Renovation projects</li>
                    <li>• Extended travel</li>
                    <li>• Seasonal storage</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/self-storage-dubai/short-term-moving-renovation" className="text-dubai-gold hover:underline">
                      Learn about short-term options →
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stable rates for extended storage:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Downsizing permanently</li>
                    <li>• Extended assignments abroad</li>
                    <li>• Estate management</li>
                    <li>• Collection storage</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/storage-units-dubai" className="text-dubai-gold hover:underline">
                      View long-term benefits →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Upgrade, downsize, or cancel anytime without penalties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Declutter Your Home?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get your household storage quote in minutes. Choose the size that fits, add services you need, and book online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Quote Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer nofollow">
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call Now
                </a>
              </Button>
            </div>
            
            <div className="mt-8">
              <Link href="/self-storage-dubai/how-it-works" className="text-white/80 hover:text-white underline">
                See how SafeStorage works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Household Storage Dubai — Free Up Space at Home</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dubai apartments and villas often feel cramped not because they are small, but because they are
            filled with items that are rarely used but too valuable or sentimental to discard. SafeStorage
            household storage gives you a secure, climate-controlled extension of your home — available
            whenever you need it, without the expense of renting a larger property.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Common Household Storage Scenarios</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Apartment renovation:</strong> Clear furniture and belongings while contractors work on your home</li>
                <li>• <strong>Moving &amp; lease gap:</strong> Bridge the gap between old and new apartment with short-term storage</li>
                <li>• <strong>Decluttering:</strong> Store items you want to keep but do not need access to daily</li>
                <li>• <strong>Baby and children&apos;s items:</strong> Store gear from previous growth stages without discarding</li>
                <li>• <strong>Seasonal items:</strong> Decorations, winter clothes, sports equipment stored out of season</li>
                <li>• <strong>Downsizing:</strong> Moving to a smaller home? Keep the overflow safely stored</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why SafeStorage for Household Storage</h3>
              <p className="text-gray-700 mb-3">
                Unlike self-service storage where you carry boxes yourself and rent a fixed unit, SafeStorage&apos;s
                hassle-free model means our team does everything. We pack, collect, store, and return your
                items whenever needed. You never lift a heavy box or rent a van.
              </p>
              <p className="text-gray-700">
                All household items are stored in individual climate-controlled units at 20–25°C, protecting
                furniture, electronics, clothing, documents, and sensitive items from Dubai&apos;s heat and
                humidity. Plans start from 12.6 AED / Sqft — no long-term contract, cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Household Storage Dubai — Complete Moving &amp; Storage Guide</h2>
          <p className="text-lg text-gray-700 mb-8">
            Household storage in Dubai serves a fundamentally different purpose than in many other cities. Dubai&apos;s combination of high apartment turnover rates, a large transient expat population, extreme summer heat, and premium property prices means that residents regularly need a secure, accessible, affordable place to keep their belongings — whether for a week between moving apartments, for months during a renovation, or for years while an expat keeps their Dubai life on hold between assignments. SafeStorage was built around the specific needs of Dubai households.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Household Storage During Home Renovation</h3>
              <p className="text-gray-700 mb-4">
                Apartment and villa renovation is one of the most stressful events in any homeowner&apos;s life. Beyond the disruption and cost of the renovation itself, residents face the challenge of protecting their furniture and belongings from dust, paint, and contractor damage. Many Dubai residents try to live around their renovation — squeezing furniture into rooms not currently being worked on — with unsatisfying results.
              </p>
              <p className="text-gray-700">
                The cleanest solution is to clear the entire space before work begins. SafeStorage provides full household pickup services — our team dismantles and wraps furniture, boxes and labels smaller items, loads everything into our vehicles, and stores it in climate-controlled units until your renovation is complete. When your contractors are finished, we return everything in a coordinated delivery that matches your move-back schedule. This approach typically reduces renovation timelines by allowing contractors to work without obstacles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Short-Term Storage Between Apartments</h3>
              <p className="text-gray-700 mb-4">
                Dubai&apos;s rental market moves quickly and lease timings often do not align perfectly. It is common for a resident to need to vacate their current apartment before their new one is ready, creating a storage gap of anywhere from a few days to a few months. Hotels and serviced apartments are expensive alternatives, and leaving furniture with friends or family is impractical for most people.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s short-term household storage fills this gap perfectly. We collect everything from your outgoing apartment, store it safely at 18–22°C, and deliver it to your new home when ready. The minimum storage period is just 1 month — there is no requirement to commit to a longer arrangement. Our team handles all the heavy lifting at both ends, making your apartment transition as smooth as possible. Many customers tell us that using SafeStorage is far less stressful than doing a traditional same-day move.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">What Fits in Different Sized Storage Units</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-[#0A2463] mb-2">Small Unit (25–50 sq ft)</p>
                <p className="text-sm mb-3">Approximately 3–4 square metres</p>
                <ul className="space-y-1 text-sm">
                  <li>• Studio apartment essentials</li>
                  <li>• 10–20 medium moving boxes</li>
                  <li>• Single bed frame and mattress</li>
                  <li>• 2-seater sofa</li>
                  <li>• Small wardrobe</li>
                  <li>• TV and entertainment unit</li>
                  <li>• Seasonal items and clothes</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0A2463] mb-2">Medium Unit (75–120 sq ft)</p>
                <p className="text-sm mb-3">Approximately 7–11 square metres</p>
                <ul className="space-y-1 text-sm">
                  <li>• 1–2 bedroom apartment contents</li>
                  <li>• King size bed and bedside tables</li>
                  <li>• 3-seater sofa and coffee table</li>
                  <li>• Dining table and 4 chairs</li>
                  <li>• Large wardrobe</li>
                  <li>• Fridge and washing machine</li>
                  <li>• 20–40 boxes of personal items</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0A2463] mb-2">Large Unit (150–300 sq ft)</p>
                <p className="text-sm mb-3">Approximately 14–28 square metres</p>
                <ul className="space-y-1 text-sm">
                  <li>• 3+ bedroom apartment or villa</li>
                  <li>• Complete living and dining room</li>
                  <li>• Multiple bedroom sets</li>
                  <li>• Full kitchen appliances</li>
                  <li>• Outdoor furniture and BBQ</li>
                  <li>• Children&apos;s items and toys</li>
                  <li>• 50+ boxes of belongings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Protecting Household Items from Dubai&apos;s Climate</h3>
            <p className="text-gray-700 mb-4">
              Dubai&apos;s summer heat is not just uncomfortable — it is genuinely damaging to many common household items when they are stored in non-climate-controlled environments. This is why choosing climate-controlled household storage is so important in Dubai, and why SafeStorage maintains a consistent 18–22°C year-round in all storage units.
            </p>
            <p className="text-gray-700 mb-4">
              Solid wood furniture warps, cracks, and develops joint failures when exposed to prolonged heat and humidity fluctuations. Leather sofas, chairs, and bed frames fade and crack in heat. MDF and particleboard furniture can swell and delaminate. Electronics — TVs, computers, audio equipment, cameras — suffer heat-related component failure and battery degradation. Artwork and photographs can fade, warp, and deteriorate. Clothing and fabrics can develop mould and mildew in humid conditions. Books and paper documents can yellow and become brittle.
            </p>
            <p className="text-gray-700">
              SafeStorage&apos;s climate-controlled units completely eliminate these risks. Your household items are stored in the same conditions as a modern air-conditioned Dubai apartment, year-round. Whether your items are in storage for 3 weeks or 3 years, they will be returned to you in the same condition as when they were collected.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Frequently Asked Questions — Household Storage Dubai</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">1. How much does household storage cost in Dubai?</h3>
              <p className="text-gray-700">Household storage in Dubai at SafeStorage starts from 12.6 AED / Sqft (VAT-inclusive), whether you need a small unit (25–50 sq ft) for a studio apartment&apos;s worth of items, a medium unit for 1–2 bedroom apartment contents, or a large unit for 3-bedroom apartments or villa contents. The price includes climate control, 24/7 security, free insurance up to AED 5,000, and hassle-free pickup and delivery across Dubai. Call +971505773388 for a personalised quote.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">2. Do you pack my household items, or do I need to pack myself?</h3>
              <p className="text-gray-700">Our team handles everything. When our crew arrives at your home, they bring all necessary packing materials including boxes, bubble wrap, furniture covers, mattress bags, wardrobe boxes, and tape. Furniture is dismantled where appropriate, wrapped in protective padding, and secured for transit. Fragile items receive extra care with bubble wrap and foam padding. You do not need to do any packing yourself unless you prefer to pack your own personal items (which is fine — we will collect packed boxes as-is). Everything is photographed before loading for your records.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">3. How long can I keep my household items in storage?</h3>
              <p className="text-gray-700">There is no maximum storage period. SafeStorage customers store for as short as 1 month and as long as several years. We have expat customers who have kept their Dubai household belongings in storage for 2–3 years between assignments. The minimum rental period is 1 month, and you can extend month by month with no penalty. To end your storage arrangement, simply give 30 days&apos; written notice via email or WhatsApp and we will arrange the return delivery of your items.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">4. Can I add or retrieve individual items from storage without returning everything?</h3>
              <p className="text-gray-700">Yes. Partial retrievals are one of the most valued aspects of SafeStorage&apos;s service. If you need your winter wardrobe before the rest of your belongings come back, or if you stored children&apos;s items and need the baby cot when a new baby arrives, or if you want to retrieve specific boxes from your archive, simply contact your account manager. We will locate the requested items in your unit and deliver them to you separately. The remaining items stay in storage until you need them.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">5. Is household storage suitable for a Dubai apartment renovation?</h3>
              <p className="text-gray-700">Absolutely — apartment renovation is one of our most common use cases. The ideal workflow is to completely clear your apartment before contractors start, store everything at SafeStorage, complete the renovation in an empty space (which actually speeds up the work), then have everything delivered back to the newly renovated apartment. Our team can time the delivery to arrive room by room as each area is completed. This approach protects your belongings from dust and damage and gives your contractors unrestricted access to every corner of your home.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">6. What household items cannot be stored?</h3>
              <p className="text-gray-700">For safety reasons, SafeStorage cannot store perishable food, live plants, animals, hazardous materials (petrol, paint, aerosols, cleaning chemicals), flammable liquids, firearms and ammunition, explosives, and illegal items. Items containing liquids (aquariums, water features, fuel tanks) must be completely drained before storage. All other common household items — furniture, electronics, clothing, kitchenware, books, toys, appliances, artwork, sports equipment, musical instruments — are welcome. If you are unsure about a specific item, ask your account manager before pickup.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">7. How do I know my household items are safe in storage?</h3>
              <p className="text-gray-700">SafeStorage provides multiple layers of protection for your household items. Physical security includes 24/7 CCTV monitoring, biometric access control (only you and authorised personnel can access your unit), individual unit alarms, and on-site security staff. Climate protection is provided by year-round temperature control at 18–22°C. Insurance protection is provided through complimentary coverage up to AED 5,000 included with all plans, with enhanced coverage available for high-value items. Additionally, every item is photographed at pickup and a detailed packing list is provided for your records.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">8. Can you store a complete villa&apos;s contents during a long renovation?</h3>
              <p className="text-gray-700">Yes. We regularly handle full villa clearances for customers undergoing major renovation projects. A typical 3–4 bedroom villa clearance involves 1–2 full-day pickups with multiple vehicles and a team of 4–6 trained movers. All furniture is dismantled, wrapped, and carefully loaded. The entire contents are stored in one or more large climate-controlled units. For very large villas with extensive furniture and belongings, a site survey can be arranged in advance to ensure we allocate the right team size and storage capacity.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">9. How do you handle fragile or valuable household items?</h3>
              <p className="text-gray-700">Fragile and high-value items receive special attention throughout the pickup, transit, and storage process. Glassware and ceramics are individually wrapped in bubble wrap and packed in double-walled boxes with foam cushioning. Artwork, mirrors, and framed pictures are packed in custom picture boxes with corner protectors. Antiques and collectibles are photographed extensively, wrapped in acid-free materials where appropriate, and stored upright or flat as required. Musical instruments are stored in their cases in climate-controlled conditions. Please notify your account manager of any particularly fragile or valuable items so we can arrange appropriate handling.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">10. What happens if I need my items back urgently?</h3>
              <p className="text-gray-700">SafeStorage understands that household circumstances can change unexpectedly — a lease falls through, a renovation finishes early, or you need specific items immediately. For urgent same-day retrievals requested before 12 PM, we will do our best to accommodate same-day delivery subject to vehicle and team availability. Standard retrieval requests submitted by 5 PM are delivered the following business day. If you have an emergency situation, call us directly at +971505773388 and our team will find the fastest available solution for you.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">11. Is household storage in Dubai a good option for expats leaving temporarily?</h3>
              <p className="text-gray-700">Household storage is one of the most popular services among Dubai expats who need to leave the city for an extended period without giving up their belongings. Rather than selling furniture at a loss before leaving and repurchasing everything on return — a common but expensive cycle — SafeStorage customers store their entire household at a fraction of the replacement cost. Many expat customers have used our service for summer breaks, parental leave in their home country, extended medical needs, or temporary assignments abroad. We handle everything before departure and on return.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">12. How are my household items inventoried so I know what is in storage?</h3>
              <p className="text-gray-700">At pickup, our team creates a detailed packing list documenting all items collected — box by box and furniture piece by piece. Each item or box is labelled and photographed. You receive a copy of the complete packing list and photo record via WhatsApp or email. This inventory is maintained in your account profile and can be accessed by your account manager at any time. If you want to know what is in a specific box or need to locate a particular item, simply ask your account manager and they will check your inventory record for you.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">13. Can SafeStorage deliver my stored items to a new Dubai address or a different emirate?</h3>
              <p className="text-gray-700">Yes. Delivery of stored household items is not restricted to the original pickup address. If you have moved to a new apartment in Dubai, a new community, or even a different emirate such as Abu Dhabi, Sharjah, or Ras Al Khaimah, we can deliver your stored items to the new address. Out-of-emirate delivery charges apply for destinations outside Dubai. If you are relocating internationally, we can work with international freight partners to arrange container shipping from our facility to your destination country.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">14. Can two people access the same household storage unit?</h3>
              <p className="text-gray-700">Yes. Couples and housemates can register multiple authorised users on a single storage account. Each authorised person has individual biometric access credentials and is independently registered in our access control system. Both parties can contact our team to request deliveries or add items to the unit. For households going through a separation or divorce, we can arrange separate access authorisations as needed, subject to both parties&apos; agreement. Contact your account manager to add or modify authorised users at any time.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">15. What is the booking process for household storage in Dubai?</h3>
              <p className="text-gray-700">Booking household storage with SafeStorage takes just a few minutes. Call or WhatsApp +971505773388, or use the online quote form at safestorage.ae. Tell us what you need to store, your Dubai location, and your preferred pickup date. We will provide a transparent monthly quote within a few hours. Once you confirm, we send a simple digital storage agreement for signature. Your pickup is scheduled at a time convenient for you — many customers book same-week pickups. There is no deposit required and no minimum commitment, so you can get started immediately with complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}