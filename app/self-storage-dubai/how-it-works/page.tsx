import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Calendar, Truck, Lock, Package, CheckCircle2, ArrowRight, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "How Self Storage Works in Dubai — Quick Setup Guide",
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call +971 50 577 3388
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer nofollow">
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

      {/* Step-by-Step Storage Process — detailed content section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8 text-center">Step-by-Step Storage Process at SafeStorage Dubai — Detailed Guide</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Step 1 — Get an Instant Online Quote</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The SafeStorage Dubai process begins with a free, no-obligation quote. You can get an instant estimate online by selecting the type and approximate volume of items you need to store, or by calling our team directly at +971505773388. For larger or more complex storage requirements &mdash; such as a full villa clearance or business inventory &mdash; you can send photos via WhatsApp and our team will provide a precise, itemised quote within a few hours. There are no hidden fees in the quote: the price you receive includes door-to-door pickup, secure storage, 24/7 security monitoring, insurance up to AED 5,000, and doorstep delivery when you need your items back.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Once you are happy with the quote, you confirm your booking online or by phone. You choose your preferred pickup date and time &mdash; we are available 7 days a week, including weekends and public holidays. A booking confirmation is sent to your email immediately, along with a pre-pickup checklist to help you prepare your items. Digital contracts are signed electronically &mdash; there is no need to visit any office in person, and the entire booking process typically takes under 10 minutes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Step 2 — Our Team Comes to You for Pickup</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                On your chosen pickup date, a trained SafeStorage team of 2&ndash;4 professionals arrives at your home or office with all necessary packing materials. This includes heavy-duty furniture blankets, industrial bubble wrap, stretch film, corner cardboard protectors, and sturdy moving boxes. You do not need to purchase or arrange any packing supplies &mdash; everything is provided by our team as part of the service. The pickup team will conduct a walk-through of your property first to assess the items, confirm they match the quote, and plan the most efficient loading sequence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every piece of furniture is individually wrapped before it is moved. Sofas receive fitted furniture blankets. Wooden items like wardrobes, dining tables, and beds are wrapped in bubble wrap with cardboard corner protection. Glass shelving and mirrors are triple-wrapped. Mattresses are sealed in dedicated mattress bags. For items requiring special care &mdash; antique furniture, musical instruments, framed artwork &mdash; our team applies museum-grade packing protocols. Before each item is loaded, a team member photographs it and records its condition in your digital inventory account. A typical 2-bedroom apartment pickup takes between 2 and 4 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Step 3 — Digital Inventory Creation &amp; Item Cataloguing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As items are collected, every individual piece is photographed, described, and logged into your personalised online inventory account in real time. This creates a complete visual record of everything stored with SafeStorage &mdash; including the condition of each item at the point of collection. Within 24 hours of your pickup, you receive an email confirmation containing the full inventory list with photos. You can access this inventory at any time through your online customer portal. The inventory system also records the location of each item within our warehouse, making individual item retrievals quick and accurate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The digital inventory is an extremely valuable tool for customers storing large volumes of items, as it eliminates the common problem of forgetting what is in storage. It is also essential for insurance purposes &mdash; should you ever need to make a claim, the photographic record from the time of collection provides verified evidence of the item&apos;s condition and value. For business customers managing inventory, the catalogue function allows stock tracking and selective retrieval without disrupting the full stored inventory.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Step 4 — Secure Storage in Our Facility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once collected, your items are transported directly to SafeStorage Dubai&apos;s secure warehouse facility located in Dubai Investment Park. All items are stored off the floor on clean pallets or raised platforms to keep them clean and prevent moisture contact from the ground. Items are arranged to allow space between pieces for safe access. The facility undergoes daily pest control treatments and weekly deep cleaning.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Step 5 — Request Individual Items or Full Retrieval Anytime</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Retrieving your items from SafeStorage is as simple as the original pickup. Log into your online account, select the items you want returned (either specific pieces from your inventory or your entire storage), choose a delivery date and time, and confirm. Our team will locate the selected items in the warehouse, prepare them for transport, and deliver them to your specified address. Standard retrieval requests require 24&ndash;48 hours&apos; notice; same-day retrieval is available for urgent requests placed before 12 noon. Standard deliveries within Dubai are handled door-to-door as part of our hassle-free service; for locations outside Dubai (Sharjah, Ajman, Abu Dhabi) a modest fixed transport fee applies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you are ready to end your storage, simply give us 7 days&apos; notice and we will schedule a full return delivery of everything stored. Our team will deliver all items to your address and unpack them to the room of your choice. Your billing ends on the day the last item is returned. There are no exit fees, no administrative charges, and no penalties for ending your storage at any time. This flexibility makes SafeStorage the ideal solution for people with uncertain timelines &mdash; such as those waiting for a new property to become available, or expats uncertain of their return date to the UAE.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 text-center">Storage Process — Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Is same-day pickup available?", a: "Yes, SafeStorage Dubai offers same-day pickup for requests submitted before 12 noon, subject to team availability. For planned storage, we recommend booking at least 24–48 hours in advance to secure your preferred time slot. Call us directly at +971505773388 for urgent same-day requests and our team will do their best to accommodate you, particularly for emergency situations such as sudden relocations or unexpected travel." },
              { q: "Do I need to pack my items before the team arrives?", a: "No, you do not need to pack anything before our team arrives. SafeStorage brings all necessary packing materials including furniture blankets, bubble wrap, stretch film, packing boxes, tape, and corner protectors. Our team handles all wrapping and packing as part of the service. However, if you have already packed some items into boxes, our team will label and catalogue those boxes into your inventory. If you have fragile or particularly valuable items, let us know in advance so we can bring appropriate specialist packing materials." },
              { q: "How does inventory tracking work exactly?", a: "When our team collects your items, each piece is photographed individually and entered into your digital inventory account in real time. You receive a complete itemised list with photos within 24 hours. You can access your inventory online at any time, browse your stored items with photos, and request specific items for delivery. The system records the warehouse location of each item, enabling efficient selective retrieval. This is particularly useful for customers storing large collections or business inventory who need to retrieve specific items without a full move-out." },
              { q: "Can I retrieve just one or two items without getting everything back?", a: "Absolutely. Selective retrieval is one of the most popular features of SafeStorage Dubai. Through your online account, you can select any individual items from your inventory for delivery, while the rest remains safely in storage. This is ideal for customers who store seasonal items (retrieving winter clothing in November, for example), businesses pulling specific stock items, or anyone who stored multiple boxes and only needs access to specific ones. Standard notice of 24–48 hours applies, and delivery is included in your monthly rate." },
              { q: "What happens during the billing and payment process?", a: "You pay monthly in advance, with your first month charged at the time of booking. Subsequent invoices are sent by email, SMS, and WhatsApp one week before each billing date. Accepted payment methods include credit and debit cards (Visa/Mastercard), bank transfer, online payment through the SafeStorage website, and cheque. Auto-pay can be set up for automatic monthly deductions. For VAT-registered businesses, provide your TRN before your first invoice is issued. Invoices are VAT-compliant and ready for expense submission." },
              { q: "How much notice is needed to end storage?", a: "You can end your storage arrangement with as little as 7 days' written notice. Send an email to the SafeStorage team or notify them through the online account. They will schedule return delivery of all items to your address on a date of your choosing within the 7-day notice period. There are no cancellation fees, exit penalties, or administrative charges for ending your storage. If you have prepaid for a longer period, any unused days beyond the notice period will be refunded." },
              { q: "What if I need to add more items to storage later?", a: "Adding items to your existing storage is straightforward. Contact us to arrange an additional pickup, and our team will collect the new items, photograph and catalogue them, and add them to your existing inventory account. Additional items are charged based on the volume or space they require. Your inventory account is updated immediately, giving you a complete picture of everything stored. Many customers start with a small storage plan and expand it as their needs grow — there is no need to book a new contract for additional items." },
              { q: "Can I access the storage facility in person?", a: "SafeStorage Dubai operates primarily as a valet storage service, meaning our team handles all movement of items to and from the facility on your behalf. Direct customer access to the warehouse floor is not available as a standard option, as the facility is an operational warehouse rather than a traditional self-storage complex with individual units. This model is what allows SafeStorage to offer lower prices than traditional self-storage. For customers who specifically require direct physical access to their items at any time of day, a traditional self-storage facility like The Box or StorHub may be more appropriate." },
              { q: "How is pricing calculated — by unit size or by item?", a: "SafeStorage Dubai prices storage based on the volume and type of items stored, not a fixed unit size. This means you only pay for the space your items actually occupy, rather than paying for an empty unit you may not fill completely. When you get a quote, the price is based on an assessment of your inventory. This model typically works out cheaper than self-storage for most customers, as self-storage units are often larger than needed and customers pay for unused space. A wide range of discounts is available on long-term and prepaid plans — the longer you store, the more you save." },
              { q: "What is the process for business storage?", a: "Business customers follow the same process as residential customers, but with additional features. A dedicated business account manager is assigned to handle all communications and coordination. Businesses can schedule regular recurring pickups and deliveries for inventory management. VAT invoices are provided for all transactions. Document and records archival is available with indexed cataloguing for easy retrieval. E-commerce businesses can use SafeStorage for order fulfilment storage with pick-and-pack services available on request. Contact our business team for a custom quote." },
              { q: "Is the pickup service available on weekends?", a: "Yes, SafeStorage Dubai operates 7 days a week including weekends and public holidays. Pickup and delivery slots are available Monday through Sunday. Weekend slots tend to fill faster than weekday slots, so we recommend booking at least 3–5 days in advance for weekend appointments. For same-day weekend pickup, call us directly at +971505773388 before 10 AM to check availability. Our team aims to accommodate all requests, including last-minute weekend pickups when team capacity allows." },
              { q: "What happens if an item is damaged during pickup or storage?", a: "SafeStorage Dubai takes extensive precautions to prevent damage, including professional packing, careful handling, and secure storage. In the unlikely event that an item is damaged while under SafeStorage's care, the free insurance up to AED 5,000 included with every plan provides coverage for the declared value of the damaged item. The photographic inventory taken at collection provides a baseline record of each item's condition, making claims straightforward to process. For items worth more than AED 5,000, we recommend adding enhanced insurance coverage when booking." },
              { q: "How quickly can I get my items back in an emergency?", a: "For emergency retrievals, SafeStorage Dubai offers same-day delivery for requests made before 12 noon, subject to team availability. Call +971505773388 directly to request emergency retrieval rather than going through the online system. Our team will prioritise urgent situations such as fire, flood, unexpected relocation, or medical emergencies. Express same-day delivery may involve a small surcharge during peak periods, but our team will always confirm any additional cost before proceeding. In most cases, same-day service is provided at the standard rate." },
              { q: "Can I change my storage plan if my needs change?", a: "Yes, your storage plan can be adjusted at any time to reflect changes in your needs. If you need to add more items, we arrange an additional pickup. If you want to reduce your stored volume, you can request partial retrieval of specific items and your monthly rate will be adjusted accordingly. There is no penalty for scaling up or down. Long-term customers frequently adjust their storage volume multiple times as their life circumstances change. All changes are reflected immediately in your inventory account and the next invoice." },
              { q: "What areas of Dubai are covered for door-to-door pickup?", a: "SafeStorage Dubai covers every area of Dubai for door-to-door pickup and delivery. This includes Business Bay, Downtown Dubai, DIFC, Dubai Marina, JBR, Jumeirah, Palm Jumeirah, JLT, Al Quoz, Dubai Investment Park, Motor City, Sports City, Arabian Ranches, The Springs, The Meadows, Mirdif, Deira, Bur Dubai, Silicon Oasis, JVC, JVT, Discovery Gardens, International City, Al Barsha, and all other Dubai communities. Extended coverage to Sharjah, Abu Dhabi, and other UAE emirates is available — contact us to confirm your specific location." },
              { q: "Do you store items for businesses doing renovations?", a: "Yes, renovation storage is one of SafeStorage Dubai's most common use cases for both residential and commercial customers. For home renovations, we collect all furniture and personal items at the start of the project, store everything safely while work is underway, then return everything once the renovation is complete. For commercial renovations, we can store office furniture, equipment, and inventory during fit-out or refurbishment works. Short-term renovation storage typically runs for 2–4 months, and our flexible monthly contracts are ideal for this duration without any long-term commitment." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-[#0A2463] mb-2">Q: {faq.q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">How Self Storage Works at SafeStorage Dubai — Full Guide</h2>
          <p className="text-lg text-gray-700 mb-6">
            Self storage in Dubai has never been simpler. SafeStorage has designed its entire process around
            removing every friction point — from the moment you get a quote to the day your items are returned.
            Here is a comprehensive guide to how self storage works, what to expect at every stage, and how to
            get the most from your storage experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Choosing the Right Self Storage Option in Dubai</h3>
              <p className="text-gray-700 mb-3">
                There are two main approaches to self storage in Dubai: traditional self-service storage, where
                you transport your own items to a facility and load them into a unit yourself, and full-service
                storage, where the provider handles all the logistics including pickup, packing, storage, and
                delivery. SafeStorage offers both models, with most customers choosing the full-service option
                due to its convenience and cost-effectiveness.
              </p>
              <p className="text-gray-700">
                For full-service storage, you pay for the space your items actually occupy rather than a fixed
                unit size, and the door-to-door pickup and delivery is included in the monthly rate. For self-service,
                you choose a unit size, visit the facility during access hours, and load your items yourself using
                the trolleys and equipment provided on-site.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Understanding Storage Contracts in Dubai</h3>
              <p className="text-gray-700 mb-3">
                SafeStorage operates on flexible monthly contracts with no minimum storage period and no
                cancellation penalties. This is different from many traditional UAE storage providers who
                require 3- or 6-month minimums. You pay monthly in advance, and can give as little as 7 days&apos;
                notice to end your storage arrangement.
              </p>
              <p className="text-gray-700">
                All contracts are signed digitally — no need to visit the office in person. Your agreement
                clearly outlines the monthly rate, what is included (insurance, pickup and
                delivery), and the terms for adding, removing, or changing the volume of items stored.
                There are no hidden charges or surprise fees.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Tips for Getting the Best from Your Storage</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Label everything clearly:</strong> When items go into storage, label every box with its contents and a brief description. This makes retrieval much faster when you only need specific items.</li>
              <li>• <strong>Create a packing list:</strong> Keep a digital record of everything you have stored, including photos. This makes insurance claims easier if ever needed and helps you remember what is stored.</li>
              <li>• <strong>Consider access frequency:</strong> Items you might need regularly should go near the front of the unit. Items for long-term storage can go to the back or bottom.</li>
              <li>• <strong>Use original packaging for electronics:</strong> If you still have the original box for a TV, laptop, or appliance, use it — it provides the best protection during transport and storage.</li>
              <li>• <strong>Clean items before storing:</strong> Food residue, grease, or moisture on items can cause damage over time. Clean and dry all items, especially appliances, before storage.</li>
              <li>• <strong>Disassemble large furniture:</strong> Beds, wardrobes, and dining tables take up significantly less space when disassembled. Our team can assist with this if needed.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}