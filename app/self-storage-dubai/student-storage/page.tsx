import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Package, Shield, ArrowRight, CheckCircle2, Clock, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Storage Dubai — Semester & Summer Storage",
  description: "Students: Store belongings during semester breaks, summer holidays, or study abroad. Flexible monthly plans, easy pickup from dorms. Book online now.",
  keywords: "student storage dubai, university storage dubai, dorm storage dubai, summer storage dubai",
  openGraph: {
    title: "Student Storage Dubai – Safe & Affordable for University Students",
    description: "Secure storage solutions for students during breaks, graduations, and study abroad programs.",
    url: "https://safestorage.ae/self-storage-dubai/student-storage",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/student-storage",
  },
}

export default function StudentStoragePage() {
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
              Student Storage Dubai – Your Dorm Room Away from Dorm
            </h1>
            <p className="text-xl text-white/90 mb-8">
              University life in Dubai comes with unique challenges: limited dorm space, semester breaks, 
              and transitions between academic years. Whether you're heading home for summer, studying abroad, 
              or graduating, SafeStorage keeps your belongings secure until you need them again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Get Student Discount</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Storage Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Common Student Storage Needs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Summer Break Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Going home for summer? Store everything instead of shipping internationally.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• May to September storage</li>
                    <li>• Pickup from university</li>
                    <li>• Delivery for fall semester</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Graduation Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Graduating? Store belongings while job hunting or relocating.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Flexible monthly terms</li>
                    <li>• No long-term commitment</li>
                    <li>• Ship to new location</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Study Abroad Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Exchange semester? Keep your Dubai belongings safe.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 3-6 month plans</li>
                    <li>• Secure storage</li>
                    <li>• Easy retrieval on return</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Semester Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Between semesters or changing accommodation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Short-term options</li>
                    <li>• Quick access</li>
                    <li>• Affordable rates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Store */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              What Students Typically Store
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-dubai-navy">Room Essentials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bedding and pillows</li>
                  <li>• Mini fridge & microwave</li>
                  <li>• Desk lamp & chair</li>
                  <li>• Room decorations</li>
                  <li>• Storage bins & organizers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-dubai-navy">Academic Items</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Textbooks & notes</li>
                  <li>• Laptop & electronics</li>
                  <li>• Printers & supplies</li>
                  <li>• Project materials</li>
                  <li>• Research equipment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-dubai-navy">Personal Items</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Seasonal clothing</li>
                  <li>• Sports equipment</li>
                  <li>• Musical instruments</li>
                  <li>• Gaming consoles</li>
                  <li>• Suitcases & bags</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student-Friendly Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Student-Friendly Storage Features
            </h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Flexible Pricing</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Student discounts available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Month-to-month billing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Split payment with roommates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>No deposit required</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Convenient Services</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Hassle-hassle-free pickup from campus</span>
                    </li>
                    <li className="flex items-start">
                      <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Delivery to new accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Packing supplies provided</span>
                    </li>
                    <li className="flex items-start">
                      <Truck className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Online booking & management</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card className="bg-dubai-gold/5 border-dubai-gold">
                <CardHeader>
                  <CardTitle>Group Storage Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Share a unit with friends to save even more. We help coordinate group storage 
                    with separate inventory tracking for each student.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Shared units for 2-4 students</li>
                    <li>• Individual item labeling</li>
                    <li>• Split billing available</li>
                    <li>• Coordinated pickup/delivery</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Universities We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
              Universities We Serve
            </h2>
            <p className="text-center text-gray-600 mb-8">
              We provide storage services for students from all major universities in Dubai:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "American University Dubai",
                "Zayed University",
                "University of Dubai",
                "Heriot-Watt University",
                "Canadian University Dubai",
                "British University Dubai",
                "Middlesex University Dubai",
                "University of Wollongong",
                "Murdoch University Dubai",
                "BITS Pilani Dubai",
                "Manipal Academy",
                "SP Jain School",
                "Hult International",
                "SAE Institute",
                "ESMOD Dubai"
              ].map(uni => (
                <div key={uni} className="bg-white p-4 rounded-lg text-center">
                  <span className="text-gray-700">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              How Student Storage Works
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Book Online</h3>
                  <p className="text-gray-600">
                    Choose your storage dates and size. Get instant student pricing with your university email.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pack Your Items</h3>
                  <p className="text-gray-600">
                    Use our packing supplies or your own boxes. Label everything clearly for easy retrieval.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">We Collect</h3>
                  <p className="text-gray-600">
                    Our team picks up from your dorm or accommodation at your scheduled time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Secure Storage</h3>
                  <p className="text-gray-600">
                    Items stored in our climate-controlled facility with 24/7 security monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy Return</h3>
                  <p className="text-gray-600">
                    Schedule delivery to your new accommodation when you're back. Same-day available.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/self-storage-dubai/how-it-works">
                  Learn More About Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy text-center">
              What Students Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">
                    "Perfect for summer storage! They picked up everything from my dorm and delivered 
                    it to my new apartment in September."
                  </p>
                  <p className="font-semibold">- Sarah, AUD</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">
                    "Much cheaper than shipping everything home. The student discount made it very affordable."
                  </p>
                  <p className="font-semibold">- Ahmed, University of Dubai</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">
                    "Shared a unit with my roommate during our exchange semester. Super convenient!"
                  </p>
                  <p className="font-semibold">- Emma, Heriot-Watt</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Student Storage Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Packing Tips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clean everything before storing</li>
                  <li>• Use vacuum bags for clothing</li>
                  <li>• Protect electronics in original boxes</li>
                  <li>• Label boxes clearly with contents</li>
                  <li>• Create inventory list with photos</li>
                  <li>• Pack heavy items in small boxes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">What NOT to Store</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Perishable food items</li>
                  <li>• Hazardous materials</li>
                  <li>• Important documents (keep with you)</li>
                  <li>• Medication</li>
                  <li>• Plants</li>
                  <li>• Valuables (jewelry, cash)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Stress-Free Student Storage?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your storage today and get exclusive student rates. 
              Hassle-hassle-free pickup from your university accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Student Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="nofollow noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call Now
                </a>
              </Button>
            </div>
            
            <div className="mt-8">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Back to Self Storage Dubai
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Student Storage Dubai — Affordable Semester Break Storage</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dubai is home to several international universities and higher education institutions, including
            Heriot-Watt University Dubai, Middlesex University Dubai, American University in Dubai, and
            the University of Dubai. Each semester break or academic year end, thousands of students need
            to vacate their student accommodation and find somewhere to store their belongings safely.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Storage for Summer Breaks &amp; Study Abroad</h3>
              <p className="text-gray-700 mb-3">
                Returning home for the summer or heading overseas for a semester abroad means you need
                somewhere safe to store your belongings in Dubai without paying rent for an empty apartment.
                SafeStorage student storage plans offer the most affordable monthly rates in Dubai —
                starting from AED 199/month for a small unit that holds a student room&apos;s worth of belongings.
              </p>
              <p className="text-gray-700">
                Our free pickup service means you do not need to rent a car or hire movers. We come to
                your student accommodation, collect your boxes, clothes, electronics, and furniture, and
                return everything when the new term starts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">What Students Typically Store</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Textbooks, notes, and study materials</li>
                <li>• Laptop, tablet, and electronics</li>
                <li>• Seasonal clothing and personal items</li>
                <li>• Bedding, pillows, and room accessories</li>
                <li>• Sports equipment and hobbies gear</li>
                <li>• Kitchen appliances and small furniture</li>
                <li>• Suitcases and travel bags</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-3">Student Storage Pricing &amp; Discounts</h3>
            <p className="text-gray-700">
              Student storage plans start from AED 199/month with free pickup and delivery. We offer special
              student discounts — ask about our semester rates when booking. Storage for a typical student
              room (20–30 boxes plus small furniture) fits in our small unit (25–50 sq ft). All items are
              stored in climate-controlled security — your laptop, electronics, and clothing are safe from
              Dubai&apos;s heat. Bring your student ID for eligibility. No minimum contract required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}