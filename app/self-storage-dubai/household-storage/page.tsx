import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Package, Shield, Truck, ArrowRight, CheckCircle2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Household Storage Dubai – Flexible, Secure Rooms for Home Items | SafeStorage",
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
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white hover:text-black border-white text-white" asChild>
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
                    <Link href="/storage-dubai/long-term-storage" className="text-dubai-gold hover:underline">
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
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
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
    </div>
  )
}