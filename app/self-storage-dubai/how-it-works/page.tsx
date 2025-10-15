import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, Truck, Lock, Package, CheckCircle2, ArrowRight, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "How Self Storage Works in Dubai – Simple Process & Quick Setup | SafeStorage",
  description: "Learn how self storage works at SafeStorage Dubai. From booking to storing to retrieval - understand our simple process. Get started in minutes.",
  keywords: "how self storage works dubai, storage process dubai, storage booking dubai, storage setup dubai",
  openGraph: {
    title: "How Self Storage Works – Simple Process at SafeStorage Dubai",
    description: "Understand our straightforward storage process. Book online, store securely, access anytime.",
    url: "https://safestorage.ae/self-storage-dubai/how-it-works",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/how-it-works",
  },
}

export default function HowItWorksPage() {
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
              How Self Storage Works – Simple, Secure, Straightforward
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Getting storage in Dubai has never been easier. Our streamlined process takes you from 
              inquiry to secure storage in just a few simple steps. Whether you choose self-service 
              or our full-service option, we make storage hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Start Storing Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
              Storage in 3 Simple Steps
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-dubai-gold text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    1
                  </div>
                  <CardTitle>Book Your Space</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get a quote online or call us. Choose your unit size and services.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-dubai-gold text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    2
                  </div>
                  <CardTitle>Store Your Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Drop off items yourself or we'll pick them up from your location.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-dubai-gold text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    3
                  </div>
                  <CardTitle>Access Anytime</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Visit your unit or request delivery when you need your items back.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-dubai-navy">
              Step-by-Step Storage Process
            </h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Initial Consultation & Quote
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Start with a free consultation to determine your storage needs:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Share your inventory or photos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Get size recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Receive transparent pricing</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Choose additional services</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Select your start date</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                          <span>Ask any questions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Booking & Documentation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Quick and simple booking process:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Required Documents:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Emirates ID or passport</li>
                          <li>• Contact information</li>
                          <li>• Proof of address (sometimes)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Booking Options:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Online booking portal</li>
                          <li>• Phone reservation</li>
                          <li>• WhatsApp booking</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Digital contracts sent via email - no need to visit in person to book
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Choose Your Move-In Method
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Select how you want to get your items into storage:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <Truck className="h-8 w-8 text-dubai-gold mb-2" />
                          <CardTitle className="text-lg">Self-Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Drive to our facility</li>
                            <li>• Use provided trolleys</li>
                            <li>• Load at your pace</li>
                            <li>• 24/7 access available</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <Package className="h-8 w-8 text-dubai-gold mb-2" />
                          <CardTitle className="text-lg">Full-Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• We come to you</li>
                            <li>• Professional packing</li>
                            <li>• Careful transport</li>
                            <li>• Inventory management</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Packing & Preparation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Properly pack your items for safe storage:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">DIY Packing:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Buy packing supplies</li>
                          <li>• Label boxes clearly</li>
                          <li>• Create inventory list</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Professional Packing:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Expert wrapping</li>
                          <li>• Quality materials</li>
                          <li>• Photo documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Packing Tips:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Clean items first</li>
                          <li>• Disassemble furniture</li>
                          <li>• Protect fragiles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Transportation & Move-In
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Getting your items safely to the storage facility:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-3">Full-Service Pickup Process:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Scheduled pickup time</li>
                          <li>• Professional moving crew</li>
                          <li>• Inventory checklist</li>
                        </ul>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Careful loading</li>
                          <li>• Secure transport</li>
                          <li>• Direct to storage</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Self-Transport Tips:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <li>• Book appropriate vehicle size</li>
                        <li>• Secure items properly</li>
                        <li>• Make multiple trips if needed</li>
                        <li>• Use facility loading dock</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Secure Storage Period
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your items are now safely stored with us:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Protection Features:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>24/7 CCTV monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Climate control options</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Individual unit locks</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Insurance available</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">During Storage:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Access during hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Add/remove items</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Online account management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                            <span>Customer support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-dubai-gold text-white rounded-full min-w-[40px] h-10 flex items-center justify-center mr-4">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-dubai-navy">
                      Retrieval & Move-Out
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Getting your items back is just as easy:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Self-Collection</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Visit anytime</li>
                            <li>• Take what you need</li>
                            <li>• Immediate access</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Full Retrieval</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Schedule delivery</li>
                            <li>• Complete move-out</li>
                            <li>• Final inspection</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Partial Return</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Select specific items</li>
                            <li>• Keep rest stored</li>
                            <li>• Flexible options</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Access Hours & Policies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Standard Access Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <strong>7:00 AM - 8:00 PM</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <strong>8:00 AM - 6:00 PM</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <strong>9:00 AM - 5:00 PM</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Public Holidays:</span>
                      <strong>Limited Hours</strong>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    24/7 access available for select units
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Access Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Photo ID required for entry</li>
                    <li>• Personal access code provided</li>
                    <li>• Guest access with authorization</li>
                    <li>• Security escort available</li>
                    <li>• Loading dock reservation system</li>
                    <li>• Trolleys and equipment included</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Emergency access available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Billing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Payment & Billing Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credit/Debit cards</li>
                    <li>• Bank transfers</li>
                    <li>• Cash payments</li>
                    <li>• Online payments</li>
                    <li>• Auto-pay setup</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Billing Cycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monthly in advance</li>
                    <li>• Pro-rated first month</li>
                    <li>• Email invoices</li>
                    <li>• Payment reminders</li>
                    <li>• No hidden fees</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Long-term discounts</li>
                    <li>• Student rates</li>
                    <li>• Prepay savings</li>
                    <li>• Referral rewards</li>
                    <li>• Seasonal offers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Common Questions About the Process
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can I get storage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Same-day storage is available for urgent needs. Most customers can book 
                    and move in within 24-48 hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change unit sizes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downsize anytime based on availability. 
                    We'll help you transfer items to the new unit.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I need help moving heavy items?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our facility has trolleys and equipment. For extra help, our moving 
                    service includes professional crews.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How much notice is needed to retrieve items?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Self-service customers can access immediately. Full-service delivery 
                    typically needs 24-48 hours notice.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
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
      <section className="py-16 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start? It's This Simple
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied customers who've discovered how easy 
              storage can be. Get your quote now and start storing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Started Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+971505773388">
                  Call +971 50 577 3388
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            <div className="mt-8 space-x-4">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Back to Self Storage
              </Link>
              <Link href="/self-storage-dubai/storage-unit-sizes" className="text-white/80 hover:text-white underline">
                Choose Your Size →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}