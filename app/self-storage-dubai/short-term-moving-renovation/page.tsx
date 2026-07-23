import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Truck, Clock, Package, ArrowRight, CheckCircle2, Calendar, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Short-Term Storage Dubai — Moving & Renovation",
  description:
    "Need storage between apartment leases, during a renovation, or while moving in Dubai? Book from 1 week — door-to-door pickup, flexible month-to-month plans. Perfect for lease gap storage & renovation projects. Call +971505773388.",
  keywords:
    "short term storage between leases dubai, lease gap storage dubai, storage during apartment renovation dubai, temporary storage moving house dubai, storage between moves dubai, 1 month storage dubai, weekly storage rental dubai",
  openGraph: {
    title: "Short-Term Storage Between Leases Dubai | Moving & Renovation | SafeStorage",
    description: "Storage between leases, during renovation or while moving in Dubai. From 1 week, door-to-door pickup. Call +971505773388.",
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
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
                <Link href="/pricing">
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call for Same-Day Storage
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer nofollow">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Short-Term Moving &amp; Renovation Storage — Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What is the minimum storage period for moving or renovation storage?</h3>
              <p className="text-gray-700 leading-relaxed">The minimum storage period at SafeStorage Dubai is one month for standard contracts. For very urgent or short-duration needs — for example, a 10-day gap between lease end and new lease start — call us to discuss daily storage options. Our most common short-term moving and renovation storage is 1–3 months, which covers most Dubai apartment moves, standard renovation projects, and lease gap periods. There is no minimum commitment beyond the initial monthly period, meaning you can retrieve your belongings and close the account as soon as your move or renovation is complete. Extending is equally simple — just let us know you need another month.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store for just 2 weeks during a short move?</h3>
              <p className="text-gray-700 leading-relaxed">For durations shorter than one month, call us to discuss options. While our standard minimum is one month, we can sometimes accommodate very short-term arrangements for genuine bridge storage situations — for example, a 2-week gap where you have vacated and are waiting for a new property to be ready. In many cases, the cost of a monthly arrangement is still more practical than alternative solutions even for a 2-week need, since the cost per month is lower than most hotel or temporary accommodation costs for the same period. Discuss your specific timeline with our team at +971505773388 and we will find the most practical and cost-effective arrangement for your situation.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How quickly can you pick up my belongings during a move?</h3>
              <p className="text-gray-700 leading-relaxed">For a standard 1–2 bedroom apartment move, we can typically arrange pickup within 3–5 business days of booking. For smaller pickups — a few items or a partial room — same-day or next-day pickup is often available for requests made before 12 PM. For urgent same-day pickup of larger volumes, call us directly as availability depends on our current schedule. We offer evening pickup slots for customers who cannot be available during standard business hours. To ensure we have the right team size and vehicle for your move, please provide a reasonable inventory list when booking — even an approximate description of the apartment size and main furniture items is sufficient.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What does 1-month moving storage typically cost in Dubai?</h3>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How does renovation storage work in practice?</h3>
              <p className="text-gray-700 leading-relaxed">Renovation storage works by completely clearing your property before work begins, storing everything at our facility during the renovation period, and returning it room by room as each area is completed. You call us to arrange a pickup date before your contractors arrive. Our team arrives with the appropriate vehicle and wraps and loads all furniture, appliances, and personal items. Your property is cleared for contractors who can work freely without furniture protection requirements or access restrictions. As rooms complete, you can request phased delivery — for example, receiving bedroom furniture first, then living room, then kitchen appliances — so you move back in progressively as the renovation finishes rather than waiting for the entire project to complete before getting any of your belongings back.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can you pick up room by room during a renovation?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. For phased renovations where contractors are working through a property one room at a time, we can arrange multiple pickup visits — collecting each room&apos;s contents as it is cleared for renovation work. This approach is particularly useful for larger villas or apartments where clearing the entire property at once is impractical, or where residents continue living in part of the property while other rooms are being renovated. Each collection is logged with the rooms and items collected, giving you a clear inventory of where your belongings are and which collection visit they belong to. Phased deliveries back to you work the same way — we bring back the appropriate room&apos;s contents as each area is completed.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What if my renovation runs over the planned schedule?</h3>
              <p className="text-gray-700 leading-relaxed">Renovation overruns are extremely common in Dubai, where contractor delays, material lead times, and permit processes frequently extend projects beyond the original schedule. SafeStorage&apos;s month-to-month contracts are designed specifically to accommodate this reality. If your renovation runs over, simply let us know and your storage continues for additional months at the same rate with no penalty, no contract change, and no administrative complexity. There is no maximum storage duration. Many renovation storage customers end up storing for 2–4 months rather than the planned 1–2 months, and the flexibility of our contracts means this never creates a problem or additional cost beyond the standard monthly rate.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I retrieve specific items during my renovation storage period?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Retrieving individual items during your renovation storage is straightforward. Contact us and specify the items you need — by description or using the intake inventory photos we provide — and we will arrange delivery or prepare them for collection at the facility. Partial retrievals are commonly used during renovation storage when, for example, you need specific clothing from stored suitcases, want to retrieve a specific kitchen appliance as the kitchen renovation completes, or need access to documents or electronics. Delivery fees apply for home delivery of retrieved items, and vary based on item size and your address. You can also visit the facility in person during business hours to access your unit and retrieve items directly.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How are fragile items packed during moving storage?</h3>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Is moving storage cheaper than hiring a full removal company?</h3>
              <p className="text-gray-700 leading-relaxed">For moves involving a storage gap between properties, SafeStorage is typically more cost-effective than hiring a removal company. A traditional removal company charges for pickup, delivery, and any storage between the two — often as separate line items. With SafeStorage, the pickup and final delivery within Dubai are handled door-to-door as part of our service, with all fees confirmed upfront; for locations outside Dubai (Sharjah, Ajman, Abu Dhabi) a modest fixed transport fee applies. For moves between Dubai apartments with a gap of 2–6 weeks, SafeStorage is usually the most economical single-provider solution. For direct same-day moves with no storage gap, a removal company that handles pickup and delivery in one visit may be the simpler choice — the best option depends on whether a storage gap is involved.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What areas of Dubai do you cover for moving storage pickup?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage covers all residential and commercial areas of Dubai for moving and renovation storage pickup. This includes Dubai Marina, JBR, Palm Jumeirah, Downtown Dubai, Business Bay, DIFC, Jumeirah, Al Barsha, Umm Suqeim, Mirdif, Deira, Bur Dubai, Al Quoz, Dubai Silicon Oasis, Jumeirah Village Circle (JVC), Jumeirah Lake Towers (JLT), Al Furjan, Discovery Gardens, Motor City, Arabian Ranches, Damac Hills, Emirates Hills, and all other Dubai residential communities and neighbourhoods. For addresses in Sharjah, Abu Dhabi, or other emirates, please call us to discuss — we may be able to accommodate cross-emirate pickups depending on the volume and timing.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can you store both furniture and packed boxes together?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Most moving and renovation storage pickups involve a combination of furniture items and packed boxes of personal belongings. Both are stored together in your storage unit, with furniture on risers or positioned to maximise space, and boxes stacked safely alongside. We recommend labelling all boxes clearly with their contents and your name before our team arrives — this makes retrieval of specific boxes during the storage period much simpler. Heavy items in boxes are packed in small boxes to prevent them becoming too heavy to safely handle, and fragile content boxes should be marked clearly so our team can handle and position them appropriately in the unit.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I plan a renovation storage timeline?</h3>
              <p className="text-gray-700 leading-relaxed">Planning your renovation storage timeline involves three key dates: the storage pickup date (before contractors start), the expected renovation completion date (when you want delivery to begin), and a buffer for overruns. We recommend booking storage pickup 3–5 days before your contractors are scheduled to start, building a 2-week overrun buffer into your initial storage booking, and scheduling your delivery 1 week after your expected renovation completion date to allow for final cleaning and snagging. For phased renovations, map out which rooms complete first and coordinate with us for phased deliveries. Call us for a consultation before your renovation starts — our team has experience with many Dubai renovation projects and can help you build a practical storage timeline.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What if I need same-day pickup for an urgent storage situation?</h3>
              <p className="text-gray-700 leading-relaxed">Same-day pickup is available for urgent situations — requests must be made before 12 PM for same-day service. Availability depends on our current schedule and the volume of items involved. For a small urgent pickup (a few boxes, small items, or a single room), same-day service is more reliably available. For a full apartment or villa requiring a large team and truck, next-day service (within 24 hours) is more realistic for guaranteed availability. If you have an emergency — for example, a water leak requiring immediate clearance of belongings, or a sudden eviction requiring immediate storage — call us directly on +971505773388 and we will do everything possible to assist promptly.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How is pricing calculated for short-term storage?</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Short-Term Storage for Moving &amp; Renovation in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            Short-term storage is one of the most practical solutions for Dubai residents navigating apartment
            moves, villa renovations, and the gap between lease end and new tenancy start. SafeStorage offers
            flexible short-term storage plans from as little as one week, with door-to-door service,
            no minimum contract, and transparent daily or monthly pricing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Storage Between Leases in Dubai</h3>
              <p className="text-gray-700 mb-3">
                The Dubai rental market often creates awkward gaps between when you must vacate your current
                apartment and when your new property is ready. Most landlords and agents do not allow you
                to store furniture on-site during this period, and hotel living for weeks is expensive.
              </p>
              <p className="text-gray-700">
                SafeStorage solves this with bridge storage — we collect your belongings on your move-out
                day and return them on your move-in day, no matter how many days or weeks are in between.
                Our same-day pickup (before 12 PM) and 24–48 hour delivery means transitions are smooth
                and stress-free.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Storage During Home Renovation</h3>
              <p className="text-gray-700 mb-3">
                Dubai villa and apartment renovations frequently require residents to clear entire rooms or
                the whole property for contractors to work. Living amongst furniture in cramped spaces
                or risking damage to valuable pieces from dust, paint, and construction debris is not
                acceptable for most homeowners.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s renovation storage service provides a complete solution — we clear your
                property before work begins, store everything safely in secure units,
                and return it all when the renovation is complete. We can phase deliveries room by room
                as each area is finished, making the move-back process manageable.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-3">Short-Term Storage Rates</h3>
            <p className="text-gray-700">
              Short-term storage is priced on monthly plans with no minimum contract, starting from
              12.60 AED / sqft (VAT-inclusive). A typical 1–2 bedroom apartment contents fits in a medium unit.
              Door-to-Door service is included. For renovations lasting 1–3 months, we offer a
              renovation storage package with preferential rates. Same-day pickup is available for bookings
              before 12 PM. Call +971 50 577 3388 to book or get an instant quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}