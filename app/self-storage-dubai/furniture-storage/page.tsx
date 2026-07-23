import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sofa, Shield, Package, ArrowRight, CheckCircle2, AlertCircle, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Furniture Storage Dubai — From 12.60 AED / sqft",
  description: "Dubai's most affordable furniture storage starting from 12.60 AED / sqft. Secure units protect sofas, beds & dining sets. Door-to-Door pickup available. 24/7 access, CCTV security.",
  keywords: "furniture storage dubai, sofa storage dubai, bed storage dubai, cheap furniture storage dubai, furniture storage al quoz, furniture storage units dubai, affordable furniture storage",
  openGraph: {
    title: "Furniture Storage Dubai – Secure Units from 12.60 AED / sqft",
    description: "Store furniture safely in Dubai with 24/7 access and professional handling. Door-to-Door pickup & delivery available.",
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
              Whether you're renovating, relocating, or simply need extra space, our secure
              furniture storage protects your valuable pieces while keeping them accessible when needed.
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
              Secure furniture storage starting from 12.60 AED / sqft
            </p>
          </div>
        </div>
      </section>

      {/* Why Furniture Needs Special Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Why Furniture Needs Professional Storage
            </h2>
            <p className="text-gray-600 mb-8">
              Storing furniture at home or in an improvised space risks avoidable damage.
              Professional storage keeps your valuable pieces protected:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardHeader>
                  <AlertCircle className="h-10 w-10 text-red-500 mb-2" />
                  <CardTitle className="text-red-900">Stored Improperly</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dust and grime build-up</li>
                    <li>• Scratches, dents, and chips</li>
                    <li>• Crushing under stacked items</li>
                    <li>• Pest damage</li>
                    <li>• Clutter taking over your home</li>
                    <li>• Higher risk of accidental damage</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-green-900">Stored with SafeStorage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Individually wrapped and padded</li>
                    <li>• Dust-protected covers</li>
                    <li>• Stored off the ground</li>
                    <li>• 24/7 CCTV-monitored facility</li>
                    <li>• Insured up to AED 5,000</li>
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
                No hidden fees. No surprises. Just affordable, secure furniture storage.
              </p>
            </div>

            <div className="max-w-xl mx-auto mb-8">
              <Card className="border-2 border-dubai-gold shadow-lg">
                <CardContent className="text-center py-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-dubai-navy mb-3">
                    Pricing starts from 12.60 AED / sqft
                  </h3>
                  <p className="text-gray-600">
                    VAT-inclusive · all unit sizes · door-to-door pickup &amp; delivery included
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-dubai-gold/10 border-2 border-dubai-gold rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl mb-4 text-dubai-navy">What's Included in Every Plan:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                  <span>Secure, dedicated indoor units</span>
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
                    dedicated storage space, and careful handling protocols.
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
                  <h3 className="font-semibold mb-2">Ongoing Monitoring</h3>
                  <p className="text-gray-600">
                    Monitor the facility around the clock with 24/7 CCTV and conduct regular
                    inspections to keep your furniture secure throughout storage.
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
                    <li>• Door-to-door transport</li>
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
                    <li>• Dedicated storage space</li>
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
                  <Link href="/storage-units-dubai" className="text-dubai-gold hover:underline">
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
                      <span className="text-dubai-gold font-bold">from 12.60 AED / sqft</span>
                    </td>
                    <td className="border p-4 text-center text-gray-600">AED 350+/month</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">24/7 Access</td>
                    <td className="border p-4 text-center bg-dubai-gold/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="border p-4 text-center text-gray-400">Limited hours</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Door-to-door Pickup Service</td>
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
                    "Stored my entire 2-bedroom apartment furniture for 6 months during villa renovation. Everything came back in perfect condition. Their care really shows!"
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
                    "Best prices in Dubai! Saved over 40% compared to other storage companies. Door-to-Door pickup was a huge bonus. Highly recommend for furniture storage."
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
                    Furniture storage in Dubai starts from 12.60 AED / sqft (VAT-inclusive), whether you need a small unit (3-5 m²), a medium unit (8-10 m²), or a large unit (15-20 m²). All units include 24/7 CCTV security, pest control, and flexible month-to-month contracts with no long-term commitment required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide door-to-door pickup and delivery for furniture?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer door-to-door pickup service for furniture storage bookings. Our professional team will come to your location with proper equipment (dollies, blankets, straps), carefully wrap and protect your furniture, and transport it to our secure facility. Delivery is also available when you're ready to retrieve your items. Call +971 50 577 3388 or email support@safestorage.ae to schedule your pickup.
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
                    Our main facility is centrally located in Al Quoz Industrial Area, Dubai - easily accessible from Dubai Marina, Jumeirah, Business Bay, Downtown Dubai, and other major areas. The facility features 24/7 CCTV surveillance, pest control, and daily cleaning. We also offer pickup service from anywhere in Dubai, so you don't need to transport furniture yourself.
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
                    <strong>Full Service (Most Popular):</strong> We handle everything - professional packing, door-to-door pickup, transport, storage, and scheduled return delivery. Perfect for busy professionals or those without transport.<br/><br/>
                    <strong>Premium Care:</strong> White-glove service for antique/valuable pieces with art-quality wrapping, dedicated storage space, and monthly inspections.
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
                    Absolutely! We specialize in storing valuable and oversized items including pianos, antique furniture, designer pieces, art furniture, and custom-made items. We provide specialized wrapping, dedicated storage space, careful handling protocols, and optional monthly inspections for peace of mind. Our Premium Care service is perfect for heritage and high-value pieces.
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
                  <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer nofollow">WhatsApp Us</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/get-quote">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
              <p className="text-gray-600 text-center">
                Email us at: <a href="mailto:support@safestorage.ae" className="text-dubai-gold hover:underline font-semibold">support@safestorage.ae</a>
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
              Get a customized quote for secure furniture storage.
              Professional handling, secure facilities, and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get a Free Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer nofollow">
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
            </div>
          </div>
        </div>
      </section>

      {/* Complete Furniture Storage Guide — Dubai */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Complete Furniture Storage Guide &mdash; Dubai</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">How to Properly Prepare Furniture for Storage in Dubai</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Proper preparation before furniture goes into storage significantly extends the life of your pieces and ensures they come back in the same condition they left. For wooden furniture, apply a quality wood polish or conditioner before storage &mdash; this creates a protective barrier that helps the wood retain moisture during storage and resist temperature-induced expansion and contraction. For leather sofas and chairs, apply a leather conditioner at least 24 hours before the pickup date. This keeps the leather supple before it goes into storage. For mattresses, ensure they are completely dry before storage &mdash; any residual moisture will be sealed in when the mattress cover is applied, creating ideal conditions for mould growth.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Disassemble furniture wherever possible before storage. Beds, wardrobes, dining tables, and modular shelving units all take up significantly less storage space when disassembled. This also reduces the risk of damage during transport, as large assembled pieces are more prone to scratching and stress fractures when moved. Keep all assembly hardware (screws, bolts, dowels) in labelled plastic bags taped to the item they belong to &mdash; losing assembly hardware is one of the most common frustrations when retrieving furniture from long-term storage. The SafeStorage pickup team can assist with disassembly of furniture as part of the service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Remove all items from inside furniture before storage. Wardrobes, cabinets, and chests of drawers should be completely empty. This reduces weight (important for safe transport), prevents items from shifting during transit and causing internal damage, and ensures the furniture structure is not under any load stress during storage. Appliances such as refrigerators and washing machines must be completely defrosted, drained, and dried at least 24 hours before pickup &mdash; any residual moisture will cause mould and rust during storage. Remove batteries from all remote controls and electronic components to prevent battery acid corrosion.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Selecting the Right Furniture Storage Plan in Dubai</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Choosing the right storage plan for your furniture starts with an accurate assessment of your volume. Rather than guessing, take an inventory of all the pieces you plan to store and measure or photograph each one. SafeStorage Dubai&apos;s team can review your inventory list or WhatsApp photos and recommend the appropriate unit size before you commit. This prevents the common mistake of either underestimating the required space (resulting in a rushed, poorly-organised packing day) or massively overestimating it (and paying for unused space for months).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Consider your access needs when choosing between the full-service valet model and traditional self-service storage. If you are storing furniture for a renovation and only need it returned once the work is complete, the valet model is ideal &mdash; you will not need access during the storage period and the convenience of door-to-door service is unmatched. If you are storing a mix of items and anticipate needing access to specific pieces regularly, SafeStorage&apos;s item-level retrieval feature lets you request individual pieces without a full move-out. For most Dubai furniture storage customers, the valet model eliminates the need to hire a van, rent equipment, and manage transport, saving significant time and reducing the risk of damage that often occurs during DIY moves.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Long-Term Furniture Storage in Dubai — What to Expect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For furniture stored for 6 months or longer, SafeStorage Dubai recommends taking advantage of the periodic inspection service, where our team checks the condition of your stored items at regular intervals and flags any concerns before they become serious problems. This is particularly important for natural materials like solid wood, which benefit from regular checks during extended storage. Leather items benefit from a conditioning treatment every 6&ndash;12 months during extended storage &mdash; ask our team about this service when booking long-term storage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many Dubai expats and long-term residents choose SafeStorage for furniture storage when leaving the UAE temporarily or for extended periods. Rather than selling high-quality furniture at a fraction of its value in a rushed departure sale, storing with SafeStorage allows you to return to your Dubai lifestyle exactly as you left it. The monthly cost of furniture storage is typically 10&ndash;15% of the value of the furniture stored &mdash; a compelling alternative to replacing everything upon return. Long-term prepaid plans offer a wide range of discounts off the monthly rate, making extended storage even more economical.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 text-center">Furniture Storage Dubai &mdash; Additional FAQs</h2>
          <div className="space-y-5">
            {[
              ["Can I store outdoor or garden furniture at SafeStorage Dubai?", "Yes, outdoor and garden furniture can be stored at SafeStorage Dubai. Teak, aluminium, rattan, and other outdoor furniture materials benefit from secure indoor storage in Dubai's off-season. Outdoor furniture should be thoroughly cleaned and completely dry before storage, as soil and organic matter on garden furniture can attract pests. Metal garden furniture should be checked for rust spots, treated if necessary, and wiped dry before pickup. Garden cushions and umbrellas are best stored in sealed bags to prevent dust accumulation during the storage period."],
              ["How do you protect mirrors and glass tabletops during storage?", "Mirrors and glass items receive specialist handling at SafeStorage Dubai. Each mirror or glass panel is individually wrapped in a double layer of large-format bubble wrap, with the edges protected by foam corner guards. Glass tabletops are stored vertically in padded wooden crates rather than laid flat, as horizontal storage increases the risk of cracking from the weight of items placed above. All glass items are clearly labelled FRAGILE in your inventory account and handled separately from other furniture pieces during loading and unloading."],
              ["Can I store a mattress in storage?", "Mattresses can be stored safely at SafeStorage Dubai. All mattresses are sealed in dedicated professional mattress storage bags before loading, which protect against dust, moisture, and pest contact. In our secure facility, mattresses are stored flat on raised platforms to maintain their structure. We recommend storing mattresses for no longer than 6 months if possible, as extended horizontal storage can affect the internal spring structure over time. Memory foam mattresses store particularly well due to their ability to return to shape after storage."],
              ["Do you handle antique or designer furniture?", "Yes, SafeStorage Dubai has extensive experience handling antique and high-value designer furniture. Our specialist packing team uses museum-grade materials including acid-free tissue paper, archival bubble wrap, and custom-cut foam inserts for particularly valuable or fragile pieces. Antique furniture is stored individually rather than stacked, with documentation of every scratch, patina mark, and pre-existing characteristic noted in the inventory. For extremely high-value antiques, we recommend adding enhanced insurance coverage beyond the standard AED 5,000 included free with every plan."],
              ["Is furniture storage useful during Ramadan relocation?", "Many Dubai residents restructure their living arrangements during Ramadan, and furniture storage is a practical solution. SafeStorage Dubai sees a significant increase in bookings during the weeks leading up to Ramadan from residents who are combining households, hosting extended family, or temporarily modifying their home setup. Our flexible monthly contracts are ideal for Ramadan relocation storage, which typically runs for 3–5 weeks. We offer fast turnaround pickups and deliveries to accommodate the time-sensitive nature of pre-Ramadan preparation."],
              ["Can I store kitchen appliances with my furniture?", "Yes, kitchen appliances can be stored alongside furniture. Refrigerators, washing machines, ovens, and other appliances must be completely defrosted, drained, cleaned, and left with doors slightly ajar for at least 24 hours before pickup to ensure all internal moisture has evaporated. Failure to dry appliances properly before storage is the leading cause of mould growth inside refrigerators and washing machines. Our team will remind you of appliance preparation requirements when your pickup is confirmed. Small appliances like mixers, kettles, and microwaves need no special preparation beyond being clean and dry."],
              ["What is the most common reason people store furniture in Dubai?", "The three most common reasons Dubai residents store furniture with SafeStorage are: home renovation (furniture is removed while construction, painting, or flooring work is completed — typically 2–4 months); relocation (moving between properties when there is a gap between lease end and new lease start — typically 1–6 weeks); and temporary departure from the UAE (expats leaving for extended periods rather than selling furniture at a loss — typically 3–12 months). Business furniture storage during office refits and downsizes is the fourth most common use case."],
              ["Can I get a refund if I end my storage early?", "SafeStorage Dubai operates on monthly contracts paid in advance. If you end your storage before the end of a paid month, the unused portion of the current month is not refunded as standard, but any full unused months that have been prepaid as part of a long-term plan will be refunded. For example, if you prepaid for 6 months and cancel after 4 months, the 2 remaining unused full months are refunded. There are no administrative fees or exit penalties charged on top of this. The 7 days' cancellation notice requirement ensures the team can schedule your return delivery within the prepaid period."],
              ["Do you store pianos and other musical instruments?", "SafeStorage Dubai handles pianos and musical instruments with specialist care. Upright and baby grand pianos are stored in padded frames and handled by our trained team. String instruments, woodwinds, and brass instruments are stored in their cases. Pianos are never stored horizontally. All musical instruments are wrapped, padded, and stored with care to keep them in the same condition as when they arrived."],
              ["How is pricing affected if I store items for longer than 12 months?", "For storage beyond 12 months, SafeStorage Dubai reserves the right to revise the monthly rate to reflect any changes in operating costs or market pricing. In practice, long-term customers are typically offered renewal rates at the same or similar price with an early renewal discount. The best approach for customers anticipating 12+ months of storage is to prepay a 12-month plan upfront, locking in the current rate with a long-term prepaid discount, and then renewing at the prevailing rate. Our team proactively contacts customers before their plan expires to discuss renewal options with no pressure to commit immediately."],
              ["Is furniture storage cheaper than renting extra space in Dubai?", "In virtually every scenario, furniture storage at SafeStorage Dubai is significantly cheaper than renting additional residential space in Dubai. SafeStorage furniture storage starts from 12.60 AED / sqft (VAT-inclusive), whether you are storing the contents of a studio apartment or a full 4-bedroom villa. The cheapest studio apartments in Dubai rent for AED 3,000–4,500 per month, so storage is a fraction of any Dubai residential rent. For businesses, storage is similarly far more economical than retaining oversized commercial premises purely for inventory or document storage."],
            ].map(([q, a], i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-base font-bold text-[#0A2463] mb-2">Q: {q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Furniture Storage Dubai — Complete Guide</h2>
          <p className="text-lg text-gray-700 mb-6">
            Furniture storage in Dubai is one of the most common storage needs for both residents and expats.
            Whether you are renovating your home, moving between apartments, downsizing to a smaller space,
            or leaving Dubai temporarily, SafeStorage provides safe, secure furniture storage
            that protects every piece.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Store Furniture Professionally</h3>
              <p className="text-gray-700 mb-3">
                Storing furniture at home or in an improvised space often leads to scratches, dents,
                dust build-up, and crushing under stacked items. Professional storage keeps each piece
                wrapped, padded, and stored off the ground so it stays in good condition.
              </p>
              <p className="text-gray-700">
                Every unit is secure, dust-protected, and monitored by 24/7 CCTV. Your furniture is
                handled by a trained team and returned in exactly the condition it was collected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Professional Packing for Furniture</h3>
              <p className="text-gray-700 mb-3">
                Our trained team wraps all furniture in protective materials before transport and storage.
                Sofas are covered in fitted furniture blankets. Wooden pieces are wrapped in bubble wrap
                and corner protectors. Glass items are individually wrapped. Mattresses are stored in
                sealed mattress bags to prevent dust and moisture.
              </p>
              <p className="text-gray-700">
                For delicate or high-value antique furniture, we offer enhanced specialist packing with
                museum-grade materials. Tell us about your furniture when booking and we will bring the
                appropriate packing supplies.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-3">Furniture Storage Pricing in Dubai</h3>
            <p className="text-gray-700">
              Furniture storage starts from 12.60 AED / sqft (VAT-inclusive) — whether you are storing a small
              collection, a full 1-bedroom apartment&apos;s furniture in a medium unit (50–100 sq ft), or a full
              villa clearance in a large unit (100–200 sq ft). All plans include door-to-door pickup,
              24/7 security, and free insurance up to AED 5,000. No minimum contract — store
              for a week or several years.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}