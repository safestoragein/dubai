import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane, Home, FileText, ShoppingCart, School, Heart, Building2,
  CreditCard, Users, TrendingUp, Phone, ArrowRight, CheckCircle2,
  Calendar, MapPin, Package, Warehouse, Clock, Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "Moving to Dubai in 2026: Complete Relocation Guide | Everything You Need to Know",
  description:
    "Planning to move to Dubai in 2026? Complete step-by-step guide covering visas, housing, jobs, schools, cost of living, and storage solutions. Make your Dubai move smooth and stress-free!",
  keywords:
    "moving to dubai 2026, relocate to dubai, dubai relocation guide, moving to uae, dubai visa, living in dubai, dubai apartments, international move dubai, dubai newcomers guide",
  openGraph: {
    title: "Moving to Dubai 2026: Complete Relocation Guide",
    description: "Everything you need to know about moving to Dubai in 2026. Visa, housing, jobs, schools & more!",
    url: "https://safestorage.ae/moving-to-dubai-2026",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-moving-dubai-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Moving to Dubai 2026 Complete Guide"
      }
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/moving-to-dubai-2026",
  },
}

const sections = [
  {
    id: 1,
    icon: Calendar,
    title: "Before You Move: Essential Planning",
    subtitle: "3-6 Months Before Departure",
    content: "Start planning your Dubai move early. Research job opportunities, understand visa requirements, and create a realistic budget. Dubai offers amazing opportunities but requires proper preparation. Consider selling items you won't need - Dubai has everything available locally, and shipping costs can be high.",
    checklist: [
      "Research job market in your field",
      "Understand visa sponsorship requirements",
      "Create a moving budget (flights, shipping, initial housing)",
      "Decide what to bring vs. buy in Dubai",
      "Get international health insurance quotes",
      "Research neighborhoods and schools (if applicable)"
    ],
    storageConnection: "Not sure what to bring? Store non-essential items with SafeStorage while you settle in. Many people keep belongings in storage for 3-6 months until they understand what they actually need in Dubai.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: FileText,
    title: "Visas & Documentation Made Simple",
    subtitle: "What You Actually Need",
    content: "Most people moving to Dubai get a residence visa sponsored by their employer. The process typically takes 2-4 weeks once you arrive. You'll need your passport (valid for 6+ months), photos, degree certificates, and medical test results. Don't worry - your company usually handles most paperwork!",
    checklist: [
      "Passport valid for at least 6 months",
      "Educational certificates (attested/notarized)",
      "Marriage certificate (if applicable)",
      "Birth certificates for children",
      "Medical fitness test upon arrival",
      "Emirates ID application (done in Dubai)"
    ],
    storageConnection: "Important documents need safe keeping! Store original certificates, family records, and sensitive paperwork in our climate-controlled, secure facility. Access them anytime you need.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    icon: Home,
    title: "Finding Your Perfect Home",
    subtitle: "Apartments, Villas & Neighborhoods",
    content: "Dubai offers everything from affordable studios (AED 30,000/year) to luxury villas (AED 200,000+/year). Most people start with hotel apartments for 1-2 months while house hunting. Popular areas: Marina (waterfront lifestyle), Downtown (city center), Arabian Ranches (family villas), Business Bay (professionals). Rent is typically paid in 1-4 cheques annually.",
    checklist: [
      "Budget: Studios from AED 30k, 1-beds from AED 50k/year",
      "Stay in hotel apartment first (1-2 months)",
      "Understand cheque payment system",
      "Get DEWA (utilities) connection",
      "Register Ejari (rental contract)",
      "Consider proximity to work/schools"
    ],
    storageConnection: "Moving between hotel and apartment? Store your belongings safely with us during the transition. Free pickup from anywhere in Dubai - focus on finding the right home, not managing boxes!",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    icon: Package,
    title: "Packing & Shipping: What to Bring",
    subtitle: "Smart Moving Strategy",
    content: "Ship only essentials. Electronics, furniture, and appliances are readily available (and often cheaper) in Dubai. Bring personal items, photos, important documents, and items with sentimental value. Shipping costs AED 500-2000 per cubic meter by sea (6-8 weeks) or AED 8-15 per kg by air (1 week). Most people ship 2-5 cubic meters.",
    checklist: [
      "Personal clothing & accessories",
      "Important documents & photos",
      "Prescription medications (3-6 month supply)",
      "Electronics (220V compatible or bring converters)",
      "Children's favorite toys & books",
      "Items NOT to bring: Large furniture, heavy appliances"
    ],
    storageConnection: "Can't decide what to bring? Ship everything to SafeStorage first! Store items while you settle, then request delivery of what you need. No rush decisions - take your time figuring out your new life.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "First Month Essentials",
    subtitle: "What to Do Immediately",
    content: "Your first month is about setting up. Get a local SIM (Etisalat/Du, AED 100-200/month), open a bank account (Emirates NBD, ADCB, or Mashreq are foreigner-friendly), buy a car or arrange transport, and register for utilities. Dubai moves fast - you'll be settled before you know it!",
    checklist: [
      "Day 1: Get local SIM card & phone number",
      "Week 1: Open bank account (bring Emirates ID, passport, salary letter)",
      "Week 1: Set up home (IKEA, Carrefour, Dragon Mart for affordable items)",
      "Week 2: Get driving license (exchange or take test)",
      "Month 1: Buy or lease a car (public transport limited)",
      "Month 1: Explore your neighborhood & make connections"
    ],
    storageConnection: "Bought too much too fast? We've all been there! Store seasonal items, extra furniture, or bulk purchases until you actually need them. Your apartment will thank you for the extra space.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    icon: School,
    title: "Schools & Healthcare",
    subtitle: "For Families Moving to Dubai",
    content: "Dubai has 200+ international schools offering British, American, IB, and other curricula. Fees range from AED 15,000 to AED 100,000+ per year. Apply 6-12 months in advance for popular schools. Healthcare is excellent - get mandatory health insurance through your employer or DHA/HAAD approved plans (AED 500-3000/person/year).",
    checklist: [
      "Research schools early (long waiting lists)",
      "Budget AED 20,000-80,000 per child annually",
      "Get school admission test dates",
      "Mandatory health insurance for all family",
      "Register with a GP/clinic near home",
      "Get vaccinations up to date"
    ],
    storageConnection: "Kids outgrow everything quickly! Store seasonal clothes, toys, and sports equipment. When they move up a school year, swap stored items instead of buying new - saves money and space.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 7,
    icon: CreditCard,
    title: "Cost of Living Reality Check",
    subtitle: "Monthly Budget Breakdown",
    content: "Dubai can be affordable or expensive depending on lifestyle. A single person needs AED 6,000-10,000/month for comfortable living. A family of 4 needs AED 20,000-35,000/month. The advantage? No income tax! Your entire salary is yours. Groceries, dining, and entertainment are reasonably priced.",
    checklist: [
      "Rent: AED 30,000-120,000 per year",
      "Groceries: AED 1,500-3,000/month (family)",
      "Utilities: AED 500-1,500/month",
      "Car payment: AED 1,500-3,000/month",
      "Petrol: AED 300-600/month",
      "Dining out: AED 50-150 per meal",
      "Entertainment: Variable (beach is free!)",
      "School fees: AED 15,000-100,000/child/year"
    ],
    storageConnection: "Save money on rent! Instead of paying for a bigger apartment, store seasonal items, sports gear, and rarely-used belongings. AED 300/month for storage beats AED 3,000+ extra rent annually.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 8,
    icon: Users,
    title: "Culture & Lifestyle Tips",
    subtitle: "Living Like a Local",
    content: "Dubai is welcoming, safe, and multicultural. Respect local customs: dress modestly in public, don't drink alcohol in public areas, and be mindful during Ramadan. Friday-Saturday is the weekend. Dubai is incredibly safe - you can walk alone at night, leave your car unlocked, and trust people. The biggest adjustment? Summer heat (May-September)!",
    checklist: [
      "Dress code: Modest in malls/public (shoulders & knees covered)",
      "Weekend: Friday-Saturday (not Saturday-Sunday)",
      "Ramadan: No eating/drinking in public during fasting hours",
      "Alcohol: Only in licensed venues (hotels, restaurants)",
      "Public displays of affection: Keep it minimal",
      "Summer strategy: Stay indoors 12-5 PM (40°C+)"
    ],
    storageConnection: "Summer in Dubai means 6 months of indoor life. Store your winter clothes, outdoor gear, and seasonal decorations. When winter arrives (November), swap them out and store your summer items instead!",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
    color: "from-pink-500 to-pink-600"
  }
]

export default function MovingToDubai2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0A2463] via-[#3E92CC] to-[#0A2463] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dubai-skyline-pattern.svg')] bg-repeat-x bg-bottom"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-[#D8315B]" />
              <span className="text-sm font-semibold bg-[#D8315B] px-3 py-1 rounded-full">2026 UPDATED GUIDE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Moving to <span className="text-[#D8315B]">Dubai in 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your complete step-by-step guide to relocating to Dubai. Everything from visas to schools, housing to healthcare - we've got you covered!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Written by Dubai Residents</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Updated January 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">3.5M+</div>
              <div className="text-sm text-gray-600">People Living Here</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">200+</div>
              <div className="text-sm text-gray-600">Nationalities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">0%</div>
              <div className="text-sm text-gray-600">Income Tax</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">#1</div>
              <div className="text-sm text-gray-600">Safest City ME</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={section.id}>
                {/* Section Card */}
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        priority={index < 2}
                      />
                      <div className={`absolute top-4 left-4 bg-gradient-to-r ${section.color} px-4 py-2 rounded-full font-bold text-white shadow-lg flex items-center gap-2`}>
                        <section.icon className="h-5 w-5" />
                        <span>Step {section.id}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-2">
                        <span className="text-sm font-semibold text-[#D8315B]">{section.subtitle}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-[#0A2463] mb-4">
                        {section.title}
                      </h2>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {section.content}
                      </p>

                      <div className="mb-4">
                        <h3 className="font-semibold text-[#0A2463] mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-[#D8315B]" />
                          Essential Checklist:
                        </h3>
                        <ul className="space-y-2">
                          {section.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Storage Connection Section */}
                <div className="mt-8 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#0A2463]/5 to-[#3E92CC]/5 p-6 rounded-xl border border-[#3E92CC]/20">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="h-5 w-5 text-[#D8315B]" />
                      <h3 className="font-semibold text-[#0A2463]">
                        Storage Tip for This Step
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {section.storageConnection}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="sm" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                        <Link href="/get-quote">
                          Get Free Quote
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="tel:+971505773388">
                          <Phone className="mr-1 h-4 w-4" />
                          Call Us
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Warehouse Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={index % 3 === 0 ? "/organized-warehouse-space.png" : index % 3 === 1 ? "/expansive-storage.png" : "/images/storage-facility-background.png"}
                      alt="SafeStorage Climate-Controlled Warehouse"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                      <p className="text-xs font-semibold text-[#0A2463] flex items-center gap-2">
                        <Shield className="h-3 w-3" />
                        Climate-Controlled • 24/7 Security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Storage During Relocation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
                Why 70% of People Moving to Dubai Use Storage
              </h2>
              <p className="text-gray-600 text-lg">
                Relocation is stressful enough. Let us handle your belongings while you focus on settling in.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Clock className="h-12 w-12 text-[#D8315B] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Flexible Timeline</h3>
                <p className="text-sm text-gray-600">Store for weeks or months. No rush to decide what you need - take your time settling in first.</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Warehouse className="h-12 w-12 text-[#D8315B] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Save on Rent</h3>
                <p className="text-sm text-gray-600">Get a smaller, cheaper apartment. Store extra items instead of paying AED 20,000+ more for a bigger place annually.</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-[#D8315B] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Climate Protected</h3>
                <p className="text-sm text-gray-600">Dubai heat ruins belongings. Our climate-controlled facility keeps everything at perfect temperature year-round.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Moving CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Dubai Move Smooth?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands who trusted SafeStorage during their relocation. Free pickup, flexible terms, and 24/7 security.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Plane className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Just Arrived?</h3>
                <p className="text-sm text-gray-200">Store everything while finding your perfect home</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Home className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Between Homes?</h3>
                <p className="text-sm text-gray-200">Safe storage during your transition period</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Downsizing?</h3>
                <p className="text-sm text-gray-200">Keep belongings without the bigger apartment cost</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Your Free Quote - 2 Minutes</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 050-577-3388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Common Questions About Moving to Dubai
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">How much money do I need to move to Dubai?</h3>
                <p className="text-gray-700">Minimum AED 15,000-20,000 for first month (flights, hotel, deposit, initial expenses). Ideally have 3 months of living expenses saved (AED 30,000-50,000).</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Can I move to Dubai without a job?</h3>
                <p className="text-gray-700">Difficult - you need visa sponsorship. Options: job offer, start a business, or get sponsored by family member already here. Tourist visa gives you 30-90 days to job hunt.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Is Dubai expensive to live in?</h3>
                <p className="text-gray-700">It can be affordable or expensive based on lifestyle. Single person: AED 6,000-10,000/month comfortable. Family: AED 20,000-35,000/month. Remember - no income tax means you keep all your salary!</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Do I need to speak Arabic?</h3>
                <p className="text-gray-700">No! English is widely spoken everywhere. Signs, menus, and business are conducted in English. Learning basic Arabic phrases is respectful but not necessary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A2463]">Start Your Dubai Journey Right</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Moving to a new country is exciting but challenging. Let SafeStorage make one part easier - we'll handle your belongings while you handle everything else!
          </p>
          <Button className="bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
            <Link href="/storage-dubai">
              Learn More About Our Storage Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
