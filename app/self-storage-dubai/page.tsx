import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Truck, Clock, Lock, ArrowRight, CheckCircle2, Package, MapPin } from "lucide-react"
import Script from "next/script"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Self Storage Dubai — Flexible Plans, No Lorry Needed",
  description: "Self storage in Dubai with hassle-free hassle-free pickup — no need to rent a truck. Flexible monthly plans, secure units, 24/7 CCTV. Book online in minutes from 12.60 AED / sqft.",
  keywords: "self storage dubai flexible plans, storage with hassle-free pickup dubai, no lorry storage dubai, month to month storage dubai, book storage online dubai, storage unit near me pickup dubai",
  openGraph: {
    title: "Self Storage Dubai – Secure, Affordable Units Near You",
    description: "SafeStorage offers secure units with easy pickup and flexible plans.",
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

const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/self-storage-dubai#webpage',
    name: 'Self Storage Dubai — Flexible Plans, No Lorry Needed',
    description: 'Self storage in Dubai with hassle-free pickup — no need to rent a truck. Flexible monthly plans, secure units, 24/7 CCTV. Book online in minutes from 12.60 AED / sqft.',
    url: 'https://safestorage.ae/self-storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    about: { '@id': 'https://safestorage.ae/#business' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Self Storage Dubai',
    description: 'Flexible self storage in Dubai with hassle-free pickup and delivery. Secure units from 12.60 AED / sqft with 24/7 security.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    areaServed: { '@type': 'City', name: 'Dubai' },
    url: 'https://safestorage.ae/self-storage-dubai',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      price: '12.60',
      description: 'Starts from 12.60 AED / sqft (VAT-inclusive)',
    },
    serviceType: 'Self Storage',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Self Storage Dubai', item: 'https://safestorage.ae/self-storage-dubai' },
    ],
  },
]

export default function SelfStorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} />
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

        {/* Security & Insurance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Security & Insurance
              </h2>

              <div className="space-y-8">
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
                      <Link href="/pricing">View Pricing Guide</Link>
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
            </div>
          </div>
        </section>

        {/* Static rich-text content for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Self Storage Dubai — Flexible Plans, No Lorry Needed</h2>
            <p className="text-lg text-gray-700 mb-6">
              Self storage in Dubai has evolved significantly in recent years. Rather than renting a lorry,
              loading everything yourself, and driving to a storage facility, modern self storage in Dubai
              now means a team comes to your home, collects your items, and delivers them back whenever
              you need them. SafeStorage pioneered this hassle-free model in Dubai and it remains our most
              popular service.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">What Makes Self Storage in Dubai Different</h3>
                <p className="text-gray-700 mb-3">
                  Dubai&apos;s geography and demographics create unique self storage requirements.
                  The city&apos;s size and traffic means customers value
                  providers with hassle-free pickup and delivery. And Dubai&apos;s large expat population means flexible
                  month-to-month contracts — without long-term lock-ins — are highly valued.
                </p>
                <p className="text-gray-700">
                  SafeStorage addresses all of these factors. Every unit is secure and dedicated to you.
                  Hassle-free pickup and delivery is included in every plan. Contracts are month-to-month with no
                  cancellation penalties. And pricing is transparent — what you see is what you pay.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Self Storage Plans Available in Dubai</h3>
                <p className="text-gray-700 mb-3">
                  SafeStorage offers self storage plans tailored to different needs and budgets:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Personal storage:</strong> Starts from 12.60 AED / sqft for households, students, and individuals</li>
                  <li>• <strong>Furniture storage:</strong> Specialist plans for renovation and relocation periods</li>
                  <li>• <strong>Business storage:</strong> Commercial plans for inventory, documents, and equipment</li>
                  <li>• <strong>Vehicle storage:</strong> Indoor covered bays starting from 12.60 AED / sqft</li>
                  <li>• <strong>Student storage:</strong> Affordable short-term plans for semester breaks</li>
                  <li>• <strong>Expat storage:</strong> Flexible plans for residents leaving or returning to Dubai</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions About Self Storage in Dubai</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Is self storage in Dubai expensive?</p>
                  <p>Self storage in Dubai starts from 12.60 AED / sqft (VAT-inclusive) at SafeStorage, which is competitive with traditional facility-based storage in the city. Our price includes security, insurance, and hassle-free pickup and delivery — items that are often charged separately by other providers.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Can I get same-day storage in Dubai?</p>
                  <p>Yes. SafeStorage offers same-day pickup for bookings made before 12 PM. Our team can collect your items and have them stored in our secure facility on the same day you contact us.</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">What is the minimum storage period?</p>
                  <p>There is no minimum storage period at SafeStorage. We offer month-to-month plans and short-term arrangements starting from one week for renovation and moving scenarios. You can cancel at any time with 7 days&apos; notice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extended self storage guide and FAQ — server-rendered for text-to-HTML ratio */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Self Storage Dubai — Complete Guide 2026</h2>

            <p className="text-lg text-gray-700 mb-6">
              Self storage in Dubai has become an essential service for the city&apos;s fast-moving, transient population. With over
              3 million residents from more than 200 nationalities, high rates of relocation, frequent apartment moves, and regular
              renovations, Dubai has one of the highest per-capita
              demands for storage services in the Middle East. This guide covers everything you need to know about self storage
              in Dubai in 2026 — from choosing the right provider to understanding pricing, security, and
              how the modern door-to-door storage model works.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Self Storage is Essential in Dubai</h3>
                <p className="text-gray-700 mb-4">
                  Dubai&apos;s unique combination of factors makes self storage more important here than in almost any other city.
                  First, space: high property prices and compact apartments mean residents rarely have spare room for seasonal
                  items, bulky furniture, or belongings they are not currently using. A secure storage unit provides that extra
                  space without the cost of renting a larger home.
                </p>
                <p className="text-gray-700">
                  Second, mobility: Dubai has one of the highest rates of residential relocation in the world. Residents move
                  apartments frequently, go back to their home countries for extended periods, relocate within the city for new
                  jobs, and travel for extended business trips. Self storage bridges all of these transitions, providing a secure
                  base for belongings that would otherwise need to be sold, shipped, or stored with family in another country.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">The SafeStorage Dubai Difference</h3>
                <p className="text-gray-700 mb-4">
                  SafeStorage Dubai operates a door-to-door storage model that removes every friction point from the traditional
                  storage experience. There is no need to hire a lorry, load furniture yourself, or drive to a facility on the
                  outskirts of the city. Our team comes to your door at the agreed time, professionally loads your belongings,
                  transports them to our secure facility, and stores them in your dedicated unit. When you want items
                  back, call or WhatsApp and we deliver within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-10">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Self Storage Pricing in Dubai — 2026</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <ul className="space-y-2">
                  <li><strong>Small unit (25–50 sq ft):</strong> starts from 12.60 AED / sqft</li>
                  <li><strong>Medium unit (50–100 sq ft):</strong> starts from 12.60 AED / sqft</li>
                  <li><strong>Large unit (100–150 sq ft):</strong> starts from 12.60 AED / sqft</li>
                  <li><strong>Extra large (150–200+ sq ft):</strong> starts from 12.60 AED / sqft</li>
                  <li><strong>Vehicle storage:</strong> starts from 12.60 AED / sqft</li>
                </ul>
                <ul className="space-y-2">
                  <li><strong>Included in all plans:</strong> 24/7 security, free insurance up to AED 5,000, door-to-door pickup and delivery</li>
                  <li><strong>Long-term discount:</strong> a wide range of discounts on prepaid plans — the longer you store, the more you save</li>
                  <li><strong>No hidden fees:</strong> No admin charges, no deposit, no access fees</li>
                  <li><strong>Payment:</strong> Card, bank transfer, cash, Apple Pay, Google Pay</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0A2463] mb-6">20 Frequently Asked Questions — Self Storage Dubai</h2>

            <div className="space-y-5">
              {[
                { q: "What is self storage and how does it work in Dubai?", a: "Self storage is a service where individuals or businesses rent a secure, dedicated storage unit to keep their belongings. In Dubai, the most convenient model is door-to-door storage, offered by SafeStorage Dubai, where a team collects your items from your location, stores them in a secure facility, and delivers them back when needed. You pay a monthly fee based on the unit size you use. There are no long-term contracts, no lorry hire, and no heavy lifting required." },
                { q: "How much does self storage cost per month in Dubai?", a: "SafeStorage Dubai starts from 12.60 AED / sqft (VAT-inclusive), whether you need a small unit, a medium unit for a one-to-two bedroom apartment, or a large unit for a full villa. The price includes 24/7 security, free insurance up to AED 5,000, and door-to-door pickup and delivery. There are no setup fees, deposits, or hidden charges." },
                { q: "Do I need to transport my items to the storage facility myself?", a: "No. SafeStorage Dubai provides a complete door-to-door service. Our team comes to your home, office, or any Dubai location, loads your items, transports them to our secure facility, and delivers them back when you need them. This service is included as standard in every monthly plan. You do not need to hire a lorry, arrange your own movers, or make multiple trips to the facility." },
                { q: "How long can I store my items at SafeStorage Dubai?", a: "There is no maximum storage period. Customers store for as little as one week (for renovation or moving scenarios) or for several years. Many of our long-term customers are expats who left Dubai temporarily or businesses with ongoing archival needs. Month-to-month billing continues indefinitely with no lock-in, and you can cancel at any time with 30 days&apos; notice and no early termination penalty." },
                { q: "What types of items can I store at SafeStorage Dubai?", a: "SafeStorage accepts all furniture, household appliances, electronics, clothing and textiles, sports equipment (bicycles, golf clubs, surfboards), business inventory, documents and archive files, seasonal decorations, and vehicles in dedicated bays. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items, as well as flammable liquids, hazardous chemicals, live animals, perishable food, and illegal goods. Call +971505773388 to check any specific item." },
                { q: "Can businesses use SafeStorage Dubai for commercial storage?", a: "Yes, and we serve a significant number of business customers including e-commerce sellers, trading companies, law firms, marketing agencies, and retail businesses. Business benefits include flexible unit sizes that scale with inventory, UAE-compliant document storage for the mandatory 5-year retention period, and no long-term warehouse lease commitment. Commercial plans include dedicated consultant support for logistics coordination." },
                { q: "How do I get my items back from SafeStorage Dubai?", a: "Contact your dedicated storage consultant by phone, WhatsApp, or email and specify what you need — your entire unit, specific boxes, or individual items. Our team schedules delivery within 24–48 hours to your Dubai address. Partial retrievals (taking some items while leaving the rest in storage) are fully supported. There is no penalty for early retrieval and no restriction on how many retrievals you can request." },
                { q: "Does SafeStorage Dubai offer short-term storage?", a: "Yes. SafeStorage Dubai offers short-term storage starting from one week. This is particularly popular for renovation periods, bridge periods between apartment moves, and temporary storage during property handovers. Short-term plans are priced weekly or monthly with the same security standards as long-term plans. There is no minimum commitment beyond the initial week." },
                { q: "What neighbourhoods in Dubai does SafeStorage serve?", a: "SafeStorage Dubai collects from and delivers to all Dubai neighbourhoods including Business Bay, Downtown, Dubai Marina, JBR, Jumeirah, Palm Jumeirah, JLT, JVC, Al Barsha, Motor City, Sports City, Dubai Hills, Arabian Ranches, Mirdif, Deira, Bur Dubai, Al Quoz, Dubai Investment Park, Silicon Oasis, and all other residential and commercial areas across the emirate. If you are unsure about your area, call +971505773388 to confirm." },
                { q: "Is there a discount for long-term self storage?", a: "Yes. SafeStorage Dubai offers a wide range of discounts for longer prepaid commitments — the longer you prepay, the more you save compared to month-by-month billing. For large units, the saving can be several thousand dirhams. Long-term plans are popular with expats who know they will be away for at least a year and businesses with stable, ongoing inventory storage requirements. Contact us for the best available rate for your storage duration." },
                { q: "Can I authorise someone else to access my storage unit?", a: "Yes. You can authorise additional persons — family members, employees, or any trusted individual — to access your storage unit. Simply provide their full name, Emirates ID or passport copy, and contact number to your SafeStorage consultant. They will be issued access credentials. You can add or remove authorised users at any time. There is no limit to the number of authorised users per unit." },
                { q: "Can I upgrade my storage unit size?", a: "Yes. Upgrading to a larger unit is straightforward — contact your consultant, request the upgrade, and we arrange to move your items to the larger unit within 2–3 business days. There is no penalty for upgrading and no admin fee. Pricing adjusts from the date of the move. Many customers upgrade as their circumstances change, for example as e-commerce inventory grows or as additional family items need to be stored during renovation." },
                { q: "How do I book self storage at SafeStorage Dubai?", a: "Booking takes under five minutes. Get a quote online at safestorage.ae, call +971505773388, or WhatsApp with details about what you need to store. Our consultant recommends the right size, provides a clear price, and schedules a pickup at a time that suits you. Slots are typically available within 24–48 hours. Same-day pickup is available for bookings placed before 12 PM. You sign the storage agreement on pickup day — no paperwork needed in advance." },
                { q: "Does SafeStorage Dubai store vehicles?", a: "Yes. SafeStorage Dubai offers dedicated indoor vehicle storage bays for cars, SUVs, motorcycles, and classic vehicles. Car storage starts from 12.60 AED / sqft (VAT-inclusive). This is ideal for expats leaving Dubai for extended periods, classic car owners wanting their vehicles stored properly over summer, and individuals with a second vehicle they do not use regularly. All vehicle bays include 24/7 CCTV monitoring and a complimentary wash before return." },
                { q: "What makes SafeStorage Dubai different from competitors?", a: "SafeStorage differentiates through door-to-door service (hassle-free pickup and delivery included), secure dedicated units at every price point, transparent pricing with no hidden fees, complimentary insurance up to AED 5,000, a 4.9-star Google rating from 487+ reviews, and dedicated consultant support. Most competitors charge separately for pickup or insurance. SafeStorage bundles everything into one transparent monthly price." },
                { q: "Is free insurance included with self storage?", a: "Yes. All SafeStorage Dubai plans include complimentary storage insurance covering items up to AED 5,000. This covers theft, fire, and water damage from facility systems. Customers with higher-value items — art, antiques, or electronics collections — can arrange additional coverage up to AED 100,000. We recommend photographing and documenting high-value items before storage to facilitate any potential claims." },
                { q: "Does SafeStorage Dubai offer packing services?", a: "Yes. SafeStorage offers both a DIY packing option and a full professional packing service. For DIY, we provide double-walled boxes, bubble wrap, packing paper, stretch film, furniture covers, and mattress bags for purchase. For the full service, our trained team wraps and boxes every item professionally, creates an inventory list, and loads everything. Professional packing is popular for fragile or high-value items and customers who prefer to leave the heavy lifting to someone else." },
                { q: "What payment methods does SafeStorage Dubai accept?", a: "SafeStorage Dubai accepts credit and debit cards (Visa, Mastercard, American Express), bank transfers, cash at the facility, post-dated cheques for advance payment plans, Apple Pay, and Google Pay. Monthly, quarterly, and annual payment options are available. Longer prepaid cycles unlock a wide range of discounts, with annual plans offering the best per-month rate compared to month-by-month billing. All invoices are provided digitally and can be used for business expense reporting." }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-[#0A2463] mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg font-semibold">Get a Free Quote</Button>
                </Link>
                <a href="tel:+971505773388">
                  <Button variant="outline" className="px-8 py-3 text-lg border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white">
                    Call +971505773388
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}