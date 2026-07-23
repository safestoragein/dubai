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
                      <span>Door-to-Door pickup from campus</span>
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
                    Items stored in our secure facility with 24/7 security monitoring.
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
                  <li>• Food, grocery, and spice items</li>
                  <li>• Liquids, detergents, and cosmetics</li>
                  <li>• Hazardous materials</li>
                  <li>• Important documents (keep with you)</li>
                  <li>• Medicines</li>
                  <li>• Plants</li>
                  <li>• Ornaments, jewellery, and cash</li>
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
              Door-to-Door pickup from your university accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Student Quote <ArrowRight className="ml-2" />
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
            
            <div className="mt-8">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Back to Self Storage Dubai
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Student Storage at SafeStorage Dubai — Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What unit sizes are available for student storage and what do they fit?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage offers several unit sizes suited to student storage needs. A mini or locker unit (approximately 25 sq ft) holds 10–15 boxes, bags, bedding, and small personal items — ideal for a light packer or student storing only academic materials and clothes. A small unit (approximately 50 sq ft) accommodates a full student room including a single bed, mattress, desk, chair, wardrobe, and 20–30 boxes. This is the most popular student size. A medium unit (approximately 100 sq ft) is appropriate for students with more furniture, a bicycle, sports equipment, or those sharing with a roommate. All unit sizes include 24/7 security as a standard feature.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Which Dubai university areas do you provide pickup service from?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage provides door-to-door pickup from all major university and student residential areas in Dubai. We cover Dubai International Academic City (DIAC) and Dubai Knowledge Park, where many of Dubai&apos;s international universities are clustered, including Heriot-Watt University Dubai, Middlesex University Dubai, Murdoch University Dubai, and others. We also serve Dubai Silicon Oasis (home to BITS Pilani Dubai Campus), Bur Dubai (Canadian University Dubai, British University in Dubai), Al Barsha (American University in Dubai Media City area), Academic City, JVC, JLT, and all surrounding student residential neighbourhoods. If your accommodation is in Dubai, we cover it — call us to confirm if you have an unusual address.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">When is the best time to book semester storage before the summer break?</h3>
              <p className="text-gray-700 leading-relaxed">For summer semester storage, the best time to book is 2–3 weeks before your intended pickup date. The period of late April to early June is our busiest student storage season, as most Dubai universities conclude their spring semester between late April and the end of May. Booking early ensures you get your preferred pickup date and time slot. Students who wait until the final week of term often find limited availability and may need to accept less convenient pickup times. A simple WhatsApp message to +971505773388 with your address and approximate inventory is all that is needed to hold your booking slot — full confirmation and pricing follow within a few hours.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I share a storage unit with my university roommate?</h3>
              <p className="text-gray-700 leading-relaxed">Sharing a storage unit with a roommate or fellow student is a popular and cost-effective arrangement at SafeStorage. We accommodate group storage with separate item labelling for each student, so belongings remain clearly identified throughout the storage period. When it is time to retrieve items, each student can request their own belongings independently — you do not need to be present at the same time or return to Dubai simultaneously. Billing can be split, with separate invoices for each participant. A shared medium unit starts from 12.60 AED / sqft (VAT-inclusive) and, divided between two students, costs even less per person than two individual small units.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How does the pickup process work from university dormitories or student residences?</h3>
              <p className="text-gray-700 leading-relaxed">The pickup process from university dormitories is straightforward. You book a date and time, and our team arrives at your residence reception or building entrance. If your building requires prior notice of external contractors or vehicles, let us know in advance and we will manage the coordination. Our team brings all protective materials — furniture covers, foam pads, stretch wrap — and handles all the loading. You do not need a vehicle, extra help, or any equipment. The entire pickup for a standard student room typically takes 1–2 hours. We complete a condition checklist and provide you with intake photographs, then transport everything to our secure facility.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I retrieve items mid-semester if I need something from storage?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Retrieving items during your storage period is part of the service. If you stored a bicycle for summer and return early, or you need specific study materials, electronics, or clothing items before the full retrieval date, simply contact us and arrange a partial delivery. Delivery fees apply and vary by item size and your location. You can also visit the facility in person during business hours with your ID to access your unit and retrieve items directly, which avoids delivery fees if you have your own transport. For small, urgent retrievals, same-day service (before 12 PM) is often available. We encourage students to retrieve what they need rather than leaving items unused in storage.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What happens to my storage if I graduate and leave Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">If you graduate and leave Dubai, your storage continues on a month-to-month basis for as long as payments are maintained. This gives you time to sort out your post-graduation plans — securing employment, arranging a new visa, or deciding whether you are staying in Dubai — without the pressure of a hard storage end date. Many graduates keep storage for 2–4 months post-graduation while their situation clarifies. When you are ready to close the account, give 30 days&apos; notice remotely and arrange final retrieval either in person, via an authorised contact in Dubai, or by coordinating international shipping for items you are taking abroad. No in-person visit is required to close the account.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Are packing supplies available when booking student storage?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage can supply packing boxes, bubble wrap, packing tape, and garment bags at cost price — simply request them when booking and they will be delivered or available at pickup. Standard moving boxes, heavy-duty book boxes, and wardrobe boxes with hanging rails are the most commonly requested student packing supplies. Alternatively, major Dubai supermarkets, IKEA, and Carrefour sell affordable packing materials. Our team brings all the furniture protection materials (covers, foam, stretch wrap) for furniture items on collection day — you only need to provide packing for your personal items and boxes. Clear labelling of all boxes makes retrieval faster and easier.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Is student storage at SafeStorage insured?</h3>
              <p className="text-gray-700 leading-relaxed">All items stored at SafeStorage are covered by basic insurance up to AED 5,000 as a standard inclusion in the monthly fee — no additional payment required. For students storing a laptop, gaming console, camera, or other high-value electronics, the standard coverage may be sufficient. For students with items of higher total value, we recommend declaring the value at intake and consulting with your university&apos;s student insurance offerings or a private contents insurer for additional coverage. Many universities offer student contents insurance that extends to off-campus storage, so check your student policy before assuming additional cover is needed. Our intake condition photographs also provide evidence for any insurance claims.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What should students NOT store at SafeStorage?</h3>
              <p className="text-gray-700 leading-relaxed">Students should not store perishable food, open bottles of liquids, medication that requires specific temperature or access, live plants, hazardous materials (petrol, paint, cleaning chemicals in unsealed containers), weapons or anything prohibited under UAE law, or cash and very high-value jewellery (better kept in a bank safe deposit box). Important documents such as passports, visas, bank cards, and university transcripts should travel with you rather than being stored. Fragile items not individually packed should be packed before storage or our team can pack them for an additional service charge. When in doubt, contact us and we will advise whether your specific item can be safely stored.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How is student storage different from standard personal storage?</h3>
              <p className="text-gray-700 leading-relaxed">Student storage at SafeStorage is the same high-quality, secure service as our standard personal storage, but with specific adaptations for student needs. These include semester-aligned pricing packages (3-month and 5-month plans at better-than-monthly rates), group storage options with split billing, pickup service specifically calibrated for student accommodation buildings and dorm access restrictions, and flexible end-of-semester timing that accommodates varying university exam and term-end schedules. The fundamental service — secure storage with door-to-door pickup and flexible monthly contracts — is identical to our standard offering. Student packages simply present this service in formats that align with the academic calendar and the practical realities of university life in Dubai.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How far in advance should I schedule my return delivery for the new semester?</h3>
              <p className="text-gray-700 leading-relaxed">We recommend booking your return delivery at least 7–10 days before you need your items at your new accommodation. The start of the autumn semester (late August to mid-September) is our busiest delivery period for student storage returns, and popular time slots fill quickly. Giving us early notice ensures you receive your preferred date and allows time to handle any access coordination needed for your new building. Provide us with your new accommodation address as soon as you have it confirmed — even if your arrival date is not yet set, having the address on file allows us to pre-schedule the delivery. Same-day delivery is available for urgent situations but cannot be guaranteed during peak semester start periods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">About Student Storage at SafeStorage Dubai</h2>
          <p className="text-gray-700 leading-relaxed mb-6">SafeStorage Dubai has developed a specialist student storage service designed around the unique rhythm of university life in Dubai. Dubai&apos;s growing higher education sector — hosting more than 30 international universities and colleges serving students from over 100 countries — creates predictable, recurring storage demand at the end of each semester. Students returning to home countries for summer, heading abroad for exchange programs, transitioning between academic years, or managing the post-graduation period all face the same practical challenge: what to do with the belongings accumulated during a Dubai student life. SafeStorage provides the most practical and cost-effective answer through affordable monthly storage plans with door-to-door pickup from university accommodation areas across the city.</p>
          <p className="text-gray-700 leading-relaxed mb-6">The economics of student storage make a compelling case. A student paying AED 2,000–3,000 per month for accommodation faces a choice at semester end: maintain the lease through the break (costing AED 6,000–9,000 for a 3-month summer), ship belongings home (expensive and impractical for most items), leave belongings with friends (risky and inconvenient for all parties), or store with SafeStorage starting from 12.60 AED / sqft (VAT-inclusive). The storage option saves most students AED 5,000–8,000 per academic year — enough to fund meaningful travel, academic materials, or simply reduce the overall cost of studying in Dubai. For international students whose home countries are far from the UAE, storage is often the only genuinely practical option.</p>
          <p className="text-gray-700 leading-relaxed mb-6">Group storage, where 2–4 students share a unit with individually labelled items, offers even greater value. Students who organise group storage through their university residence or friend network can reduce individual storage costs by 40–50% while maintaining the same service quality and individual retrieval flexibility. SafeStorage handles the logistics of group access and billing, making coordinated student group storage straightforward to arrange. Student accommodation buildings in Dubai Silicon Oasis, Knowledge Park, Academic City, and JVC — the areas closest to most of Dubai&apos;s universities — are all within our standard door-to-door pickup coverage area.</p>
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
                SafeStorage student storage plans offer the most affordable rates in Dubai —
                starting from 12.60 AED / sqft (VAT-inclusive) for a small unit that holds a student room&apos;s worth of belongings.
              </p>
              <p className="text-gray-700">
                Our door-to-door pickup service means you do not need to rent a car or hire movers. We come to
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
              Student storage plans start from 12.60 AED / sqft (VAT-inclusive) with door-to-door service. We offer special
              student discounts — ask about our semester rates when booking. Storage for a typical student
              room (20–30 boxes plus small furniture) fits in our small unit (25–50 sq ft). All items are
              stored in secure, dedicated units — your laptop, electronics, and clothing are kept safe.
              Bring your student ID for eligibility. No minimum contract required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}