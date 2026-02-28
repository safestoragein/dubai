import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Truck, Clock, Lock, ArrowRight, CheckCircle2, Package, Thermometer, MapPin } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Self Storage Dubai — Flexible Plans, No Lorry Needed | SafeStorage",
  description: "Self storage in Dubai with hassle-free free pickup — no need to rent a truck. Flexible monthly plans, climate-controlled units, 24/7 CCTV. Book online in minutes from AED 99/month.",
  keywords: "self storage dubai flexible plans, storage with free pickup dubai, no lorry storage dubai, month to month storage dubai, book storage online dubai, storage unit near me pickup dubai",
  openGraph: {
    title: "Self Storage Dubai – Secure, Affordable Units Near You",
    description: "SafeStorage offers secure, climate-controlled units with easy pickup and flexible plans.",
    url: "https://safestorage.ae/self-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai",
  },
}

const faqData = [
  {
    question: "What documents are required?",
    answer: "Emirates ID or passport copy; proof of address may be requested."
  },
  {
    question: "Is insurance mandatory?",
    answer: "Optional but recommended; we'll share coverage details."
  },
  {
    question: "Can I access my unit?",
    answer: "Yes, during facility access hours; ask about extended access."
  },
  {
    question: "Do you supply boxes and packing?",
    answer: "Yes—choose DIY kits or full packing service."
  },
  {
    question: "What can't I store?",
    answer: "Perishables, hazardous goods, illegal items; see our policy."
  },
  {
    question: "Is there a minimum term?",
    answer: "Month-to-month; ask about promotional offers for longer stays."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
}

export default function SelfStorageDubaiPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Self Storage in Dubai – Secure Units, Fair Rates, Easy Booking
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Finding reliable self storage in Dubai shouldn't feel complicated. Whether you're between apartments, renovating, traveling, 
                or simply decluttering a fast-growing household, SafeStorage gives you secure space when and where you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dubai-navy">
              Why Dubai Chooses SafeStorage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Security that's visible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">24/7 CCTV, controlled entry, individual unit locks, regular patrols.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Thermometer className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Climate care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Temperature and humidity management options ideal for electronics, documents, wooden furniture, and fabrics.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Door-to-door help</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Optional packing, pickup, and re-delivery anywhere in Dubai.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Flexible plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Short or long stays, monthly billing, easy upgrades.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Transparent quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No hidden fees; our advisors right-size your unit to avoid overpaying.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Customer care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">WhatsApp support, weekend slots, and photo inventory on request.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sizes & What Fits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-dubai-navy">
              Sizes & What Fits
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Choosing the right size is the easiest way to save. Our team helps you select the perfect unit based on your inventory, 
              ensuring you never pay for space you don't need while having room for everything you want to store.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>1–2 m² (Locker/Small)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 8–12 medium boxes</li>
                    <li>• Hand luggage</li>
                    <li>• Small appliances</li>
                    <li>• Documents</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>3–4 m² (Studio)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 20–30 boxes</li>
                    <li>• A bicycle</li>
                    <li>• TV and electronics</li>
                    <li>• Side tables</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>5–7 m² (1-bed)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mattress and bed frame</li>
                    <li>• Sofa</li>
                    <li>• TV unit</li>
                    <li>• 30–40 boxes</li>
                    <li>• Small wardrobes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>8–10 m² (2-bed)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large sofa set</li>
                    <li>• Multiple beds</li>
                    <li>• Dining table</li>
                    <li>• White goods</li>
                    <li>• 50–70 boxes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>12–15 m² (3-bed)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Full apartment contents</li>
                    <li>• Seasonal items</li>
                    <li>• Sports gear</li>
                    <li>• Large furniture pieces</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-dubai-gold/5 border-dubai-gold">
                <CardHeader>
                  <CardTitle>Need Help Choosing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Use our Storage Unit Size Guide to compare volume and get a precise recommendation.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/self-storage-dubai/storage-unit-sizes">
                      View Size Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Short-Term or Long-Term */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Short-Term or Long-Term – Your Choice
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Short-Term Storage</h3>
                  <p className="text-gray-600 mb-4">
                    Flying out for summer, renovating your kitchen, or waiting on a handover? Store for a few weeks with flexible renewals. 
                    Perfect for transitions, moves, and temporary needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Week-to-week or monthly options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>No long-term commitment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Easy extension or termination</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Long-Term Storage</h3>
                  <p className="text-gray-600 mb-4">
                    Need stable, long-term storage? Lock in favorable terms and optional scheduled access. Ideal for businesses, 
                    extended travel, or permanent downsizing.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Better rates for longer commitments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Priority access and support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Switch plans anytime as needs change</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Climate Control, Security & Insurance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Climate Control, Security & Insurance
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Climate-Controlled Protection</h3>
                  <p className="text-gray-600 mb-4">
                    Dubai heat can be relentless. Our climate-controlled sections are built for sensitive goods: electronics, 
                    wooden furniture, art, musical instruments, leather, fabrics, documents, and photos. Maintain optimal temperature 
                    and humidity year-round to prevent warping, cracking, mold, and deterioration.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/self-storage-dubai/climate-controlled">
                      Learn About Climate Control <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Advanced Security Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Your belongings deserve the highest level of protection. Our facilities include:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>24/7 CCTV surveillance</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Biometric access control</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Fire protection systems</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Pest management protocols</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Well-lit corridors</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Regular security patrols</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Storage Insurance Options</h3>
                  <p className="text-gray-600 mb-4">
                    For added peace of mind, choose storage insurance that protects against defined risks. Our team explains 
                    coverage and exclusions in simple language before you sign. Get the protection level that matches your 
                    stored items' value.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/self-storage-dubai/security-insurance">
                      View Security & Insurance Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Door-to-Door Convenience */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Door-to-Door Convenience
              </h2>
              <p className="text-gray-600 mb-6">
                Skip the driving and lifting. Our comprehensive service takes care of everything from your doorstep to secure storage and back.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Package className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Pack & Move</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Trained crews bring branded materials, pack items securely, and transport to the facility.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CheckCircle2 className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Photo Inventory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Request a photo inventory in your customer portal for easy tracking and retrieval.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Easy Retrieval</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Schedule partial or full retrieval—we deliver back to your address when you're ready.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <Link href="/self-storage-dubai/how-it-works">
                    See How It Works <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
                Areas We Serve Across Dubai
              </h2>
              <p className="text-center text-gray-600 mb-8">
                We cover popular neighborhoods across Dubai with hassle-free pickup and delivery services.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Dubai Marina", "JLT", "JVC", "Jumeirah", 
                  "Downtown", "Business Bay", "Al Quoz", "Al Barsha", 
                  "Deira", "Bur Dubai", "Mirdif", "Silicon Oasis",
                  "Motor City", "Dubai South", "DIP", "Al Quasis", "Dubai Hills"
                ].map(area => (
                  <Link 
                    key={area}
                    href={`/self-storage-dubai/near/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow text-center group"
                  >
                    <MapPin className="h-5 w-5 text-dubai-gold mx-auto mb-2" />
                    <span className="text-gray-700 group-hover:text-dubai-gold transition-colors">
                      {area}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't see your area? <Link href="/contact" className="text-dubai-gold hover:underline">Contact us</Link> - 
                  we likely serve your location too!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Pricing Factors & How Quotes Work
              </h2>
              <p className="text-gray-600 mb-6">
                Storage pricing depends on several factors. Understanding these helps you make informed decisions and avoid surprises.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3 text-dubai-navy">Key Pricing Factors:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unit size and capacity</li>
                    <li>• Climate control requirements</li>
                    <li>• Floor level and accessibility</li>
                    <li>• Storage duration and contract terms</li>
                    <li>• Additional services (packing, pickup)</li>
                    <li>• Insurance coverage level</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-dubai-navy">How to Get Your Quote:</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. Share your inventory list or photos</li>
                    <li>2. Tell us your neighborhood and timeline</li>
                    <li>3. Select any additional services</li>
                    <li>4. Receive a clear, itemized quote</li>
                    <li>5. No hidden fees or surprises</li>
                  </ol>
                </div>
              </div>
              
              <Card className="bg-dubai-gold/5 border-dubai-gold">
                <CardContent className="pt-6">
                  <p className="text-center mb-4">
                    Get a tailored quote based on your exact needs - no guesswork, no overpaying.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                      <Link href="/storage-dubai/pricing-cost-guide">View Pricing Guide</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/get-quote">Get Your Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
                FAQs: Self Storage in Dubai
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-dubai-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Have more questions?</p>
                <Button variant="outline" asChild>
                  <Link href="/self-storage-dubai/faqs">
                    View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Free Up Space?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Get your personalized storage solution today. Quick quotes, flexible terms, and professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                  <Link href="/get-quote">
                    Get Quick Quote <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                  <a href="https://wa.me/971505773388">
                    WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                  <a href="tel:+971505773388">
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}