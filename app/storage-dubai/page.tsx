import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Package, Truck, Shield, Archive, Car, ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Storage Dubai – Personal & Business Storage Solutions | SafeStorage",
  description: "From personal lockers to business inventory rooms and warehouse overflow, SafeStorage offers secure, flexible storage in Dubai. Request a tailored quote today.",
  keywords: "storage dubai, business storage dubai, warehouse storage dubai, ecommerce storage dubai, vehicle storage dubai",
  openGraph: {
    title: "Storage Dubai – Personal & Business Storage Solutions",
    description: "SafeStorage offers flexible storage solutions for homes and businesses in Dubai.",
    url: "https://safestorage.ae/storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai",
  },
}

const faqData = [
  {
    question: "Can you receive shipments on our behalf?",
    answer: "Yes—ask for receiving SLAs and we'll handle your inbound deliveries professionally."
  },
  {
    question: "Do you offer shelving?",
    answer: "Available on request; we'll design your layout for optimal organization and access."
  },
  {
    question: "How do I scale up/down?",
    answer: "Change unit size and services anytime based on your evolving needs."
  },
  {
    question: "Do you handle returns?",
    answer: "We can receive and sort returns with your SOPs for seamless operations."
  },
  {
    question: "What are prohibited items?",
    answer: "Hazardous/illegal goods, perishables; we'll share the full list during consultation."
  },
  {
    question: "Can I access my business inventory 24/7?",
    answer: "Extended access available for business customers; discuss your needs with our team."
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

export default function StorageDubaiPage() {
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
                Storage in Dubai – Personal & Business Solutions That Scale
              </h1>
              <p className="text-xl mb-8 text-white/90">
                "Storage Dubai" means different things to different customers. For households, it's clean, secure space for furniture 
                and personal goods. For businesses, it's reliable inventory rooms, archive storage, and overflow capacity without long leases. 
                SafeStorage combines both under one roof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <Link href="/get-quote">Get Business Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white hover:text-black border-white text-white" asChild>
                  <a href="tel:+971505773388">Talk to Storage Advisor</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Storage for Homes and Businesses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dubai-navy">
              Storage for Homes and Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Residential Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Use our units during moves, renovations, or to free up living space. Perfect for furniture, 
                    seasonal items, and household goods.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Flexible month-to-month terms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Climate-controlled options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Packing and moving services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Business Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Use storage as an agile extension of your premises—ideal for e-commerce, retail, contractors, 
                    events, and agencies.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Shelving and pallet bays</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Receiving and inventory services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Scale up or down anytime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Storage & eCommerce Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Business Storage & eCommerce Support
              </h2>
              <p className="text-gray-600 mb-8">
                Keep fast-moving goods close to your customers without the commitment of warehouse leases. 
                Our flexible business storage solutions adapt to your operational needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Package className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Inbound Receiving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We receive and check your shipments, updating inventory in real-time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Archive className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Labeled Shelving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Organize inventory with labeled shelving systems for quick access.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Truck className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Pick & Pack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Optional fulfillment services with courier handoff for your orders.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Perfect for:</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                  <li>• Online stores and e-commerce businesses</li>
                  <li>• Retail overflow and seasonal stock</li>
                  <li>• Event companies and exhibitions</li>
                  <li>• Marketing agencies with collateral</li>
                  <li>• Contractors with tools and equipment</li>
                  <li>• Startups testing new product lines</li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <Link href="/storage-dubai/business-storage">
                    Explore Business Storage <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse Overflow & Seasonal Peaks */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Warehouse Overflow & Seasonal Peaks
              </h2>
              <p className="text-gray-600 mb-6">
                Absorb peak seasons or project surges without committing to bigger warehouses. Our flexible storage 
                solutions help you manage fluctuating inventory levels efficiently.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Overflow Solutions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Large units and shared spaces for bulk storage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Pallet storage with easy access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Dock access for large deliveries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>After-hours receiving available</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Seasonal Storage</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Short-term contracts for peak periods</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Quick scale-up capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>No penalties for downsizing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Ideal for holiday merchandise</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" asChild>
                  <Link href="/storage-dubai/warehouse-storage">
                    Learn About Warehouse Storage <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle and Equipment Storage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Vehicle and Equipment Storage
              </h2>
              <p className="text-gray-600 mb-8">
                Secure storage for vehicles, equipment, and specialized items with proper protection and easy access.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Car className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Vehicle Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Cars and motorcycles</li>
                      <li>• Boats and jet skis</li>
                      <li>• Classic vehicles</li>
                      <li>• Seasonal vehicles</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Package className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Equipment Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Construction tools</li>
                      <li>• Exhibition stands</li>
                      <li>• Sports equipment</li>
                      <li>• Musical instruments</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                    <CardTitle>Protection Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Covered storage options</li>
                      <li>• Climate control available</li>
                      <li>• 24/7 surveillance</li>
                      <li>• Restricted access</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Ask our team about availability and specific requirements for your items.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/storage-dubai/vehicle-storage">
                    View Vehicle Storage Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security, Compliance & Records */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Security, Compliance & Records
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Comprehensive Security</h3>
                  <p className="text-gray-600 mb-4">
                    Your business assets and documents deserve enterprise-grade protection:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                    <li>• 24/7 CCTV surveillance</li>
                    <li>• Biometric access control</li>
                    <li>• Clean, well-lit corridors</li>
                    <li>• Fire protection systems</li>
                    <li>• Regular security audits</li>
                    <li>• Individual unit alarms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Records & Archival Storage</h3>
                  <p className="text-gray-600 mb-4">
                    Professional document management for compliance and easy retrieval:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Archive className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Labeled boxes with barcode tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Archive className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Climate-controlled environment for paper preservation</span>
                    </li>
                    <li className="flex items-start">
                      <Archive className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Retrieval SLAs for urgent document needs</span>
                    </li>
                    <li className="flex items-start">
                      <Archive className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Retention schedule management</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/storage-dubai/records-archival">
                      Learn About Records Storage <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
                Areas We Serve in Dubai
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Service coverage includes all major business and residential areas across Dubai.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Dubai Marina", "JLT", "JVC", "Jumeirah", 
                  "Downtown", "Business Bay", "Al Quoz", "Al Barsha", 
                  "Deira", "Bur Dubai", "Mirdif", "Silicon Oasis",
                  "Motor City", "Dubai South", "DIP", "Al Quasis", 
                  "Dubai Hills", "DIFC", "Media City", "Internet City"
                ].map(area => (
                  <div key={area} className="bg-white p-4 rounded-lg text-center">
                    <MapPin className="h-5 w-5 text-dubai-gold mx-auto mb-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Factors & Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
                Pricing Factors & Plans
              </h2>
              <p className="text-gray-600 mb-8">
                Costs depend on your specific requirements. We provide transparent, customized pricing based on:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Storage Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Space size and configuration</li>
                      <li>• Duration and contract terms</li>
                      <li>• Climate control requirements</li>
                      <li>• Access frequency needs</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Service Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Receiving and handling</li>
                      <li>• Pick & pack services</li>
                      <li>• Inventory management</li>
                      <li>• Insurance coverage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Share your inventory and timeline; we'll provide a clear, itemized quote with no hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                    <Link href="/storage-dubai/pricing-cost-guide">
                      View Pricing Guide <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/get-quote">Get Custom Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
                FAQs: Storage in Dubai
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Storage?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Whether personal or business, we have the perfect storage solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                  <Link href="/get-quote">
                    Talk to Storage Advisor
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                  <Link href="/storage-dubai/business-storage">
                    Get Business Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                  <a href="https://wa.me/971505773388">
                    WhatsApp Operations
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