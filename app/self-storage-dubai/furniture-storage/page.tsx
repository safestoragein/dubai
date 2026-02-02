import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sofa, Shield, Thermometer, Package, ArrowRight, CheckCircle2, AlertCircle, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Furniture Storage Dubai – Affordable Climate-Controlled Units Starting from AED 150/Month | SafeStorage",
  description: "Dubai's most affordable furniture storage starting from AED 150/month. Climate-controlled units protect sofas, beds & dining sets from heat damage. Hassle-hassle-free pickup available. 24/7 access, CCTV security.",
  keywords: "furniture storage dubai, sofa storage dubai, bed storage dubai, climate controlled furniture storage, cheap furniture storage dubai, furniture storage al quoz, furniture storage units dubai, affordable furniture storage",
  openGraph: {
    title: "Furniture Storage Dubai – Climate-Controlled Units from AED 150/Month",
    description: "Store furniture safely in Dubai with 24/7 access, climate control, and professional handling. Hassle-hassle-free pickup & delivery available.",
    url: "https://safestorage.ae/self-storage-dubai/furniture-storage",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/furniture-storage",
  },
}

export default function FurnitureStoragePage() {
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
              Furniture Storage Dubai – Keep Your Pieces Perfect
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Dubai's extreme heat and humidity can warp wood, crack leather, and fade fabrics. 
              Whether you're renovating, relocating, or simply need extra space, our climate-controlled 
              furniture storage protects your valuable pieces from damage while keeping them accessible when needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
            <p className="text-white/80 mt-4 text-lg">
              Climate-controlled furniture storage starting from AED 150/month
            </p>
          </div>
        </div>
      </section>

      {/* Why Furniture Needs Special Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Why Furniture Needs Climate-Controlled Storage
            </h2>
            <p className="text-gray-600 mb-8">
              Dubai's climate poses unique challenges for furniture storage. Without proper protection, 
              your valuable pieces can suffer irreversible damage:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardHeader>
                  <AlertCircle className="h-10 w-10 text-red-500 mb-2" />
                  <CardTitle className="text-red-900">Without Climate Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wood warps and cracks</li>
                    <li>• Leather dries and splits</li>
                    <li>• Metal rusts and corrodes</li>
                    <li>• Fabric fades and deteriorates</li>
                    <li>• Glue weakens in joints</li>
                    <li>• Mold and mildew growth</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-green-100">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-green-900">With Climate Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stable temperature year-round</li>
                    <li>• Controlled humidity levels</li>
                    <li>• Protection from UV damage</li>
                    <li>• Prevention of pest infestations</li>
                    <li>• Maintains furniture value</li>
                    <li>• Ready-to-use condition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-dubai-navy">
                Transparent Furniture Storage Pricing Dubai
              </h2>
              <p className="text-xl text-gray-600">
                No hidden fees. No surprises. Just affordable, climate-controlled furniture storage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 hover:border-dubai-gold transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">Small Units</CardTitle>
                  <div className="text-center text-3xl font-bold text-dubai-gold mt-2">
                    AED 150<span className="text-base text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 mb-4">3-5 m² units</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Studio furniture</li>
                    <li>✓ Single bedroom set</li>
                    <li>✓ Small office furniture</li>
                    <li>✓ 24/7 climate control</li>
                    <li>✓ CCTV surveillance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-dubai-gold shadow-lg">
                <div className="bg-dubai-gold text-white text-center py-1 text-sm font-semibold">
                  MOST POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-center">Medium Units</CardTitle>
                  <div className="text-center text-3xl font-bold text-dubai-gold mt-2">
                    AED 280<span className="text-base text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 mb-4">8-10 m² units</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ 2-bedroom apartment</li>
                    <li>✓ Full living room set</li>
                    <li>✓ Multiple bedroom sets</li>
                    <li>✓ Hassle-hassle-free pickup service</li>
                    <li>✓ 24/7 access available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-dubai-gold transition-colors">
                <CardHeader>
                  <CardTitle className="text-center">Large Units</CardTitle>
                  <div className="text-center text-3xl font-bold text-dubai-gold mt-2">
                    AED 450<span className="text-base text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 mb-4">15-20 m² units</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ 3-4 bedroom villa</li>
                    <li>✓ Complete home furniture</li>
                    <li>✓ Business inventory</li>
                    <li>✓ Priority handling</li>
                    <li>✓ Monthly inspections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-dubai-gold/10 border-2 border-dubai-gold rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl mb-4 text-dubai-navy">What's Included in Every Plan:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>Climate control (20-22°C maintained)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>24/7 CCTV surveillance & security</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>Insurance options available</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>Pest control & daily cleaning</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>No long-term contracts required</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>Trolleys & equipment provided</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">
                  Get Your Custom Quote Now
                </Link>
              </Button>
              <p className="text-gray-600 mt-4">
                Special discounts available for long-term storage (6+ months)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Furniture We Store */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Furniture We Specialize In Storing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <Sofa className="h-10 w-10 text-dubai-gold mb-4" />
                <h3 className="font-semibold mb-3 text-dubai-navy">Living Room</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sofas and sectionals</li>
                  <li>• Coffee tables</li>
                  <li>• TV units & consoles</li>
                  <li>• Recliners & chairs</li>
                  <li>• Bookshelves</li>
                  <li>• Side tables</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <Package className="h-10 w-10 text-dubai-gold mb-4" />
                <h3 className="font-semibold mb-3 text-dubai-navy">Bedroom</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Beds and mattresses</li>
                  <li>• Wardrobes</li>
                  <li>• Dressers & chests</li>
                  <li>• Nightstands</li>
                  <li>• Vanity tables</li>
                  <li>• Mirrors</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <Package className="h-10 w-10 text-dubai-gold mb-4" />
                <h3 className="font-semibold mb-3 text-dubai-navy">Dining & Office</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dining tables</li>
                  <li>• Dining chairs</li>
                  <li>• China cabinets</li>
                  <li>• Office desks</li>
                  <li>• Office chairs</li>
                  <li>• Filing cabinets</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Card className="bg-dubai-gold/5 border-dubai-gold">
                <CardHeader>
                  <CardTitle>Special & Antique Furniture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Have valuable or antique pieces? We provide extra care with specialized wrapping, 
                    dedicated climate zones, and careful handling protocols.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                    <li>• Antique furniture</li>
                    <li>• Designer pieces</li>
                    <li>• Piano & instruments</li>
                    <li>• Art furniture</li>
                    <li>• Custom-made items</li>
                    <li>• Heritage pieces</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Furniture Handling */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Professional Furniture Handling Process
            </h2>
            <p className="text-gray-600 mb-8">
              Our trained team follows strict protocols to ensure your furniture is protected from 
              pickup to storage to return:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pre-Storage Inspection</h3>
                  <p className="text-gray-600">
                    Document existing condition with photos. Note any special care requirements 
                    or existing damage for your records.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Professional Wrapping</h3>
                  <p className="text-gray-600">
                    Use furniture blankets, bubble wrap, and stretch film. Protect corners with 
                    cardboard, disassemble when needed, and seal against dust.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Careful Transport</h3>
                  <p className="text-gray-600">
                    Use appropriate equipment (dollies, straps, blankets). Secure items in truck 
                    to prevent shifting. Handle with trained, experienced crew.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Strategic Placement</h3>
                  <p className="text-gray-600">
                    Store furniture off the ground on platforms. Maintain air circulation around items. 
                    Position for easy access without stacking risks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Climate Monitoring</h3>
                  <p className="text-gray-600">
                    Maintain 20-22°C temperature and 45-55% humidity. Monitor conditions 24/7 
                    with automatic adjustments and regular inspections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Unit Sizing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Right-Sizing Your Furniture Storage
            </h2>
            <p className="text-gray-600 mb-8">
              Choose the right unit size to protect your furniture while optimizing costs:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room-Based Estimates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Studio furniture:</span>
                      <strong>3-5 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>1-bedroom apartment:</span>
                      <strong>5-7 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>2-bedroom apartment:</span>
                      <strong>8-10 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>3-bedroom villa:</span>
                      <strong>12-15 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>4+ bedroom villa:</span>
                      <strong>15-20 m²</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Individual Pieces</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>3-seater sofa:</span>
                      <strong>2 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>King bed & mattress:</span>
                      <strong>3 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>6-chair dining set:</span>
                      <strong>3 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Large wardrobe:</span>
                      <strong>1.5 m²</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Office desk setup:</span>
                      <strong>2 m²</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Not sure about sizing? Send us photos or an inventory list for a precise recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/self-storage-dubai/storage-unit-sizes">
                    View Complete Size Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <Link href="/get-quote">
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Care Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Furniture Storage Best Practices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Before Storage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Clean thoroughly and let dry completely</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Apply wood polish or leather conditioner</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Remove batteries from electronic components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Photograph items for insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Keep assembly instructions handy</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">During Storage</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Never stack heavy items on upholstery</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Store sofas and mattresses flat or upright</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Keep wooden items off direct floor</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Allow breathing space between items</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Visit periodically to check condition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Furniture Storage Service Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>DIY Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Transport and store furniture yourself
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Drive-up access available</li>
                    <li>• Trolleys provided</li>
                    <li>• Packing materials for sale</li>
                    <li>• 24/7 access options</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-dubai-gold">
                <CardHeader>
                  <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Full Service</CardTitle>
                  <div className="text-sm text-dubai-gold">Most Popular</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complete pickup, storage & return service
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Professional packing</li>
                    <li>• Hassle-free transport</li>
                    <li>• Inventory management</li>
                    <li>• Scheduled returns</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Premium Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    White-glove service for valuable pieces
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Art-quality wrapping</li>
                    <li>• Individual climate zones</li>
                    <li>• Monthly inspections</li>
                    <li>• Priority handling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              When You Need Furniture Storage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Home Renovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Protect furniture from dust, paint, and construction damage during renovations.
                  </p>
                  <Link href="/self-storage-dubai/short-term-moving-renovation" className="text-dubai-gold hover:underline">
                    Learn about renovation storage →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Downsizing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Keep cherished pieces you can't fit in your new, smaller space.
                  </p>
                  <Link href="/storage-dubai/long-term-storage" className="text-dubai-gold hover:underline">
                    Explore long-term options →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Relocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Bridge the gap between homes or during international moves.
                  </p>
                  <Link href="/self-storage-dubai/household-storage" className="text-dubai-gold hover:underline">
                    View household storage →
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Staging Homes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Temporarily store personal furniture while staging for sale.
                  </p>
                  <Link href="/self-storage-dubai/how-it-works" className="text-dubai-gold hover:underline">
                    See how it works →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SafeStorage - Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-dubai-navy">
              Why SafeStorage Dubai for Furniture Storage?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-4 text-left">Feature</th>
                    <th className="border p-4 text-center bg-dubai-gold/20">SafeStorage Dubai</th>
                    <th className="border p-4 text-center">Other Providers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Starting Price</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <span className="text-dubai-gold font-bold">AED 150/month</span>
                    </td>
                    <td className="border p-4 text-center text-gray-600">AED 350+/month</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Climate Control</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="border p-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">24/7 Access</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="border p-4 text-center text-gray-400">Limited hours</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Hassle-Free Pickup Service</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="border p-4 text-center text-gray-600">Extra charges apply</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Contract Terms</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <span className="text-green-600 font-semibold">Month-to-month</span>
                    </td>
                    <td className="border p-4 text-center text-gray-600">3-12 months minimum</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Online Booking</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="border p-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Location</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">Central Al Quoz</td>
                    <td className="border p-4 text-center text-gray-600">Various</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">
                  Get Started with SafeStorage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-dubai-navy">
              What Our Customers Say About Furniture Storage
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Stored my entire 2-bedroom apartment furniture for 6 months during villa renovation. Everything came back in perfect condition. Climate control really works!"
                  </p>
                  <p className="font-semibold text-dubai-navy">- Ahmed K., Dubai Marina</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Best prices in Dubai! Saved over 40% compared to other storage companies. Hassle-hassle-free pickup was a huge bonus. Highly recommend for furniture storage."
                  </p>
                  <p className="font-semibold text-dubai-navy">- Sarah M., Jumeirah</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Professional team wrapped all my antique furniture perfectly. The 24/7 access meant I could retrieve items whenever needed. Excellent service!"
                  </p>
                  <p className="font-semibold text-dubai-navy">- Mohammed R., Business Bay</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 border-2 border-dubai-gold">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-dubai-gold mr-2">4.8</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <span key={star} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">Based on 500+ verified customer reviews</p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/testimonials">View All Reviews →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-dubai-navy">
              Furniture Storage Dubai - Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much does furniture storage cost in Dubai?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Furniture storage in Dubai starts from AED 150/month for small units (3-5 m²), AED 280/month for medium units (8-10 m²), and AED 450/month for large units (15-20 m²). All units include climate control, 24/7 CCTV security, pest control, and flexible month-to-month contracts with no long-term commitment required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is climate control necessary for furniture storage in Dubai?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, absolutely. Dubai's extreme heat (40-50°C in summer) and humidity cause wood to warp, leather to crack, metal to rust, and fabrics to fade. Climate-controlled storage maintains a stable 20-22°C temperature and 45-55% humidity year-round, protecting your furniture from irreversible damage. Without climate control, furniture can be damaged within weeks during Dubai's summer months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide hassle-hassle-free pickup and delivery for furniture?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer hassle-hassle-free pickup service for furniture storage bookings. Our professional team will come to your location with proper equipment (dollies, blankets, straps), carefully wrap and protect your furniture, and transport it to our climate-controlled facility. Delivery is also available when you're ready to retrieve your items. Call +971 50 577 3388 or email safestoragedubai@gmail.com to schedule your pickup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What size storage unit do I need for furniture?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    For studio furniture: 3-5 m² | 1-bedroom apartment: 5-7 m² | 2-bedroom apartment: 8-10 m² | 3-bedroom villa: 12-15 m² | 4+ bedroom villa: 15-20 m². Individual pieces: 3-seater sofa needs ~2 m², king bed ~3 m², 6-chair dining set ~3 m². Send us photos or an inventory list via WhatsApp, and we'll provide a precise recommendation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long can I store furniture in Dubai?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can store furniture for as short as 1 month or as long as you need. We offer flexible month-to-month contracts with no long-term commitment required. Many customers store during renovations (2-3 months), relocations (3-6 months), or long-term downsizing. Special discounts available for storage periods of 6+ months.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Where are your furniture storage facilities located in Dubai?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our main facility is centrally located in Al Quoz Industrial Area, Dubai - easily accessible from Dubai Marina, Jumeirah, Business Bay, Downtown Dubai, and other major areas. The facility features 24/7 CCTV surveillance, climate control, pest control, and daily cleaning. We also offer pickup service from anywhere in Dubai, so you don't need to transport furniture yourself.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I access my furniture anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer 24/7 access to your stored furniture. You can visit the facility anytime to retrieve items, add more furniture, or simply check on your belongings. For added convenience, we also provide scheduled pickup and delivery services if you prefer not to visit the facility yourself.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is insurance available for stored furniture?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive insurance options to protect your valuable furniture. Our facilities include 24/7 CCTV surveillance, fire safety systems, and pest control as standard. Additional insurance coverage is available for high-value or antique furniture pieces. We recommend photographing items before storage for your records.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's the difference between your DIY and Full Service options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    <strong>DIY Storage:</strong> You transport furniture yourself, we provide trolleys and drive-up access. Best for those with a van/truck.<br/><br/>
                    <strong>Full Service (Most Popular):</strong> We handle everything - professional packing, hassle-hassle-free pickup, transport, storage, and scheduled return delivery. Perfect for busy professionals or those without transport.<br/><br/>
                    <strong>Premium Care:</strong> White-glove service for antique/valuable pieces with art-quality wrapping, individual climate zones, and monthly inspections.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I prepare furniture for storage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Clean thoroughly and let dry completely. Apply wood polish or leather conditioner. Remove batteries from electronic components. Photograph items for insurance. Keep assembly instructions. Our team can also provide professional wrapping services with furniture blankets, bubble wrap, and corner protection to ensure maximum safety during storage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you store large items like pianos or antiques?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! We specialize in storing valuable and oversized items including pianos, antique furniture, designer pieces, art furniture, and custom-made items. We provide specialized wrapping, dedicated climate zones, careful handling protocols, and optional monthly inspections for peace of mind. Our Premium Care service is perfect for heritage and high-value pieces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We accept cash, credit/debit cards, bank transfers, and online payments. Monthly billing is automated for your convenience, and you can upgrade/downgrade your storage unit size anytime with flexible month-to-month contracts. No hidden fees - all costs are transparent upfront.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 text-center bg-dubai-gold/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-dubai-navy">
                Still Have Questions About Furniture Storage?
              </h3>
              <p className="text-gray-600 mb-6">
                Our storage experts are available 24/7 to help you find the perfect solution for your furniture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <a href="tel:+971505773388">Call Us: +971 50 577 3388</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/971505773388">WhatsApp Us</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/get-quote">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
              <p className="text-gray-600 text-center">
                Email us at: <a href="mailto:safestoragedubai@gmail.com" className="text-dubai-gold hover:underline font-semibold">safestoragedubai@gmail.com</a>
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
              Protect Your Furniture Investment
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a customized quote for climate-controlled furniture storage. 
              Professional handling, secure facilities, and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get a Free Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Photos for Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call +971 50 577 3388
                </a>
              </Button>
            </div>
            
            <div className="mt-8 space-x-4">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Back to Self Storage
              </Link>
              <Link href="/self-storage-dubai/climate-controlled" className="text-white/80 hover:text-white underline">
                Learn About Climate Control →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}