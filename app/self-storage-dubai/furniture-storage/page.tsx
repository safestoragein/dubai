import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sofa, Shield, Thermometer, Package, ArrowRight, CheckCircle2, AlertCircle, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Furniture Storage Dubai – Climate-Controlled Units for Sofas, Beds & More | SafeStorage",
  description: "Store furniture safely in Dubai's climate-controlled units. Protect sofas, beds, dining sets from heat damage. Professional wrapping, pickup available.",
  keywords: "furniture storage dubai, sofa storage dubai, bed storage dubai, climate controlled furniture storage",
  openGraph: {
    title: "Furniture Storage Dubai – Protect Your Valuable Furniture",
    description: "Climate-controlled storage units perfect for furniture. Professional handling and protection.",
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
                <Link href="/get-quote">Get Furniture Storage Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white hover:text-black border-white text-white" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
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
              <Button variant="outline" asChild>
                <Link href="/self-storage-dubai/storage-unit-sizes">
                  View Complete Size Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                  Get Furniture Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Photos for Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="tel:+971505773388">
                  Speak to Expert
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