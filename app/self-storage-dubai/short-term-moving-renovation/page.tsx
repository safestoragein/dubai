import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Truck, Clock, Package, ArrowRight, CheckCircle2, Calendar, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Short-Term Storage Dubai – Moving & Renovation Storage Solutions | SafeStorage",
  description: "Need storage during moves or renovations? Flexible short-term units from 1 week to 6 months. Quick access, secure facilities, hassle-free pickup available.",
  keywords: "short term storage dubai, moving storage dubai, renovation storage dubai, temporary storage dubai",
  openGraph: {
    title: "Short-Term Storage Dubai – Perfect for Moves & Renovations",
    description: "Flexible short-term storage solutions for moving, renovating, or temporary needs in Dubai.",
    url: "https://safestorage.ae/self-storage-dubai/short-term-moving-renovation",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/short-term-moving-renovation",
  },
}

export default function ShortTermStoragePage() {
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
              Short-Term Storage Dubai – Bridge Life's Transitions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Moving homes? Renovating your villa? Between leases? Short-term storage gives you breathing room 
              during transitions. Store for just a week or up to six months with complete flexibility – 
              no long-term commitments, just the space you need when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Get Short-Term Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white hover:text-black border-white text-white" asChild>
                <a href="tel:+971505773388">Need Storage Today? Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Short-Term Needs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              When Short-Term Storage Saves the Day
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Home Renovations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Protect furniture and belongings from dust, paint, and construction crews.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Kitchen & bathroom remodels</li>
                    <li>• Flooring replacements</li>
                    <li>• Painting projects</li>
                    <li>• Room additions</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold">Typical duration: 1-3 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Moving & Relocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Bridge the gap between your old and new home seamlessly.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lease overlap periods</li>
                    <li>• Waiting for new home</li>
                    <li>• Downsizing temporarily</li>
                    <li>• International moves</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold">Typical duration: 2-8 weeks</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Between Leases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Store everything while searching for your perfect new place.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• End of tenancy</li>
                    <li>• House hunting period</li>
                    <li>• Temporary accommodation</li>
                    <li>• Visa processing delays</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold">Typical duration: 1-2 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Life Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Handle unexpected situations with flexible storage solutions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Estate settlements</li>
                    <li>• Emergency relocations</li>
                    <li>• Home staging for sale</li>
                    <li>• Insurance claims</li>
                  </ul>
                  <p className="mt-4 text-sm font-semibold">Typical duration: Varies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Truly Flexible Short-Term Options
            </h2>
            <p className="text-gray-600 mb-8">
              Our short-term storage adapts to your timeline, not the other way around:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ultra Short-Term</CardTitle>
                  <div className="text-sm text-gray-600">1-4 weeks</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Daily rates available</li>
                    <li>• Perfect for quick moves</li>
                    <li>• Emergency storage</li>
                    <li>• No minimum commitment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-dubai-gold">
                <CardHeader>
                  <CardTitle>Monthly Flexible</CardTitle>
                  <div className="text-sm text-dubai-gold">Most Popular</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Month-to-month billing</li>
                    <li>• Best value rates</li>
                    <li>• Easy extensions</li>
                    <li>• Change unit size anytime</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Extended Short-Term</CardTitle>
                  <div className="text-sm text-gray-600">3-6 months</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Discounted rates</li>
                    <li>• Priority support</li>
                    <li>• Hassle-free access</li>
                    <li>• Convert to long-term</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-dubai-gold/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-dubai-navy">No Penalties, No Surprises</h3>
              <p className="text-gray-600">
                Extend your storage duration anytime without penalties. If you finish early, 
                simply give us a few days' notice. Pay only for the time you actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Get Storage Today – It's That Quick
            </h2>
            <p className="text-gray-600 mb-8">
              Need storage immediately? We can have you set up within hours:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full min-w-[32px] h-8 flex items-center justify-center mr-4 mt-1">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Call or Book Online (5 minutes)</h3>
                  <p className="text-gray-600">
                    Quick assessment of your needs, instant quote, and unit selection. 
                    Same-day availability for urgent needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full min-w-[32px] h-8 flex items-center justify-center mr-4 mt-1">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Choose Your Service Level</h3>
                  <p className="text-gray-600">
                    DIY: Get access code and start storing immediately. 
                    Full Service: We schedule pickup within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full min-w-[32px] h-8 flex items-center justify-center mr-4 mt-1">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Simple Documentation</h3>
                  <p className="text-gray-600">
                    Emirates ID and contact details. Digital contracts via email. 
                    No complex paperwork or deposits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full min-w-[32px] h-8 flex items-center justify-center mr-4 mt-1">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Start Storing</h3>
                  <p className="text-gray-600">
                    Move in your items immediately. Access during facility hours. 
                    Online account for easy management.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <a href="tel:+971505773388">
                  Need Storage Now? Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Short-Term Storage Service Options
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Self-Service Storage</h3>
                <p className="text-gray-600 mb-4">
                  Perfect if you have transport and prefer handling your own items:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>24/7 access available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Drive-up units for easy loading</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Trolleys and equipment provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Come and go as needed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Full-Service Storage</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for busy schedules or when you lack transport:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Professional pickup & delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Packing service available</span>
                  </li>
                  <li className="flex items-start">
                    <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Partial retrieval options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Storage Special */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Special Solutions for Movers
            </h2>
            
            <Card className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Moving Storage Package</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6">
                  Designed specifically for people between homes, our moving storage package includes:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Flexible timing for move-out/move-in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Split delivery to new address</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Temporary storage during house hunting</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Weekend pickup/delivery available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Moving boxes and supplies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Coordination with moving companies</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                    <Link href="/get-quote">Get Moving Storage Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Renovation Storage Special */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Renovation Storage Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Protect Your Belongings</h3>
                <p className="text-gray-600 mb-4">
                  Renovations create dust, debris, and risk of damage. Keep your items safe:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Furniture and decor protection</li>
                  <li>• Electronics and appliance safety</li>
                  <li>• Clothing and textile preservation</li>
                  <li>• Important document security</li>
                  <li>• Artwork and valuable storage</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Renovation Benefits</h3>
                <p className="text-gray-600 mb-4">
                  Clear space for contractors and protect your investment:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• More room for workers to operate</li>
                  <li>• Faster renovation completion</li>
                  <li>• No accidental damage claims</li>
                  <li>• Easy room-by-room storage</li>
                  <li>• Phased return as rooms complete</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Room-by-Room Storage Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Store items room by room and retrieve them as each area of your home is completed. 
                    Perfect for phased renovations.
                  </p>
                  <Link href="/self-storage-dubai/household-storage" className="text-dubai-gold hover:underline">
                    Learn about household storage options →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Short-Term Storage Pricing
            </h2>
            <p className="text-gray-600 mb-8">
              Short-term storage is priced flexibly to match your needs:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">For ultra-short needs (1-7 days)</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Higher daily cost</li>
                    <li>• No commitment</li>
                    <li>• Emergency availability</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-dubai-gold">
                <CardHeader>
                  <CardTitle>Monthly Rates</CardTitle>
                  <div className="text-sm text-dubai-gold">Best Value</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">For standard short-term (1-6 months)</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lower daily cost</li>
                    <li>• Flexible extensions</li>
                    <li>• Most popular option</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Custom Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">For unique situations</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Volume discounts</li>
                    <li>• Special services</li>
                    <li>• Negotiable terms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Get a personalized quote based on your exact timeline and needs
              </p>
              <Button variant="outline" asChild>
                <Link href="/storage-dubai/pricing-cost-guide">
                  View Pricing Guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Short-Term Storage? We're Ready
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you need storage today or next month, for a week or half a year, 
              we have the perfect solution. No long commitments, just flexible space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Instant Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="tel:+971505773388">
                  Call for Same-Day Storage
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            <div className="mt-8">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Explore all storage options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}