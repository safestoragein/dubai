import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Star, Shield, Thermometer, Clock, Truck, Phone, MessageCircle,
  CheckCircle2, ArrowRight, MapPin, Package, Users, Building2,
  Car, FileText, ShoppingBag, Home, Briefcase, Lock, CreditCard,
  Calendar, HelpCircle, ChevronRight
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { env } from "@/lib/env"

export const metadata: Metadata = {
  title: "Storage Units in Dubai - From AED 199/Month | FREE Pickup | SafeStorage",
  description: "Rent secure, climate-controlled storage units in Dubai from AED 199/mo. FREE pickup & delivery, 24/7 access, AED 5000 free insurance. Trusted by 500+ customers. Call 050-577-3388.",
  keywords: "storage units dubai, self storage dubai, storage dubai price, storage units near me, cheap storage dubai, climate controlled storage, furniture storage dubai, storage facility dubai, storage space dubai, storage rental dubai",
  openGraph: {
    title: "Storage Units in Dubai - From AED 199/Month | FREE Pickup",
    description: "Secure, climate-controlled storage units in Dubai. FREE pickup & delivery, 24/7 access, transparent pricing. Trusted by 500+ customers.",
    url: "https://safestorage.ae/storage-units-dubai",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-storage-units.jpg",
        width: 1200,
        height: 630,
        alt: "Storage Units in Dubai - SafeStorage"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Units in Dubai - From AED 199/Month",
    description: "Climate-controlled storage with FREE pickup. 500+ happy customers.",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-units-dubai",
  },
}

// Pricing Data
const pricingData = [
  {
    size: "Small",
    sqft: "25-50 sq ft",
    price: "199",
    fits: "Studio apartment, 10-20 boxes",
    ideal: "Seasonal items, small furniture, personal belongings",
    popular: false,
  },
  {
    size: "Medium",
    sqft: "75-120 sq ft",
    price: "599",
    fits: "1-2 bedroom apartment",
    ideal: "Apartment contents, office equipment, inventory",
    popular: true,
  },
  {
    size: "Large",
    sqft: "150-300 sq ft",
    price: "1,499",
    fits: "3+ bedroom villa",
    ideal: "Full house contents, business inventory, bulk storage",
    popular: false,
  },
  {
    size: "Vehicle",
    sqft: "Covered parking",
    price: "899",
    fits: "Cars, bikes, boats",
    ideal: "Classic cars, second vehicles, watercraft",
    popular: false,
  },
]

// Features Data
const features = [
  {
    icon: Truck,
    title: "FREE Pickup & Delivery",
    description: "We collect from your location and deliver back when needed. No extra charges, no hidden fees.",
    highlight: "Save AED 300+",
  },
  {
    icon: Thermometer,
    title: "Climate Controlled (20-25°C)",
    description: "Protect your belongings from Dubai's 45°C+ heat. Humidity maintained at 45-55%.",
    highlight: "Essential in Dubai",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "24/7 CCTV, biometric access, individual unit alarms, on-site security personnel.",
    highlight: "100% Secure",
  },
  {
    icon: Clock,
    title: "24/7 Unit Access",
    description: "Access your belongings during extended hours. Business customers get round-the-clock access.",
    highlight: "Flexible Hours",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No admin fees, no deposits, no hidden charges. The price you see is the price you pay.",
    highlight: "No Hidden Fees",
  },
  {
    icon: Lock,
    title: "Free Insurance (AED 5,000)",
    description: "Every unit includes complimentary insurance coverage. Additional coverage available.",
    highlight: "Peace of Mind",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "Quality packing materials and professional packing services available on request.",
    highlight: "Full Service",
  },
  {
    icon: Calendar,
    title: "Same-Day Service",
    description: "Need storage urgently? We offer same-day pickup for requests before 12 PM.",
    highlight: "Fast Response",
  },
]

// Who Uses Storage
const userCategories = [
  {
    icon: Home,
    title: "Homeowners & Renters",
    users: [
      "Renovating your home and need temporary storage",
      "Downsizing and decluttering",
      "Storing seasonal items (AC units, winter clothes)",
      "Between moves or waiting for new home",
    ],
  },
  {
    icon: Users,
    title: "Expats & Relocating Families",
    users: [
      "Moving to/from Dubai",
      "Going on extended vacation",
      "Storing belongings during visa processing",
      "Keeping furniture while traveling",
    ],
  },
  {
    icon: Briefcase,
    title: "Businesses & Entrepreneurs",
    users: [
      "E-commerce inventory storage",
      "Document archiving (UAE compliant)",
      "Office relocation storage",
      "Sample and showroom stock",
    ],
  },
  {
    icon: Car,
    title: "Special Storage Needs",
    users: [
      "Classic car enthusiasts",
      "Boat and jet ski owners",
      "Art and antique collectors",
      "Sports equipment storage",
    ],
  },
]

// How It Works Steps
const steps = [
  {
    number: "1",
    title: "Get Free Quote",
    description: "Tell us what you need to store. Our consultant recommends the perfect unit size. No obligation.",
    cta: "Takes 2 minutes",
  },
  {
    number: "2",
    title: "Schedule Pickup",
    description: "Choose your preferred date and time. We come to your home, office, or any Dubai location.",
    cta: "Same-day available",
  },
  {
    number: "3",
    title: "We Collect & Store",
    description: "Our team carefully transports your items to our climate-controlled, secure facility.",
    cta: "Fully insured",
  },
  {
    number: "4",
    title: "Access Anytime",
    description: "Visit during operating hours or request delivery back to your location when ready.",
    cta: "FREE delivery",
  },
]

// Areas Served
const areas = [
  { name: "Dubai Marina", link: "/locations/dubai-marina" },
  { name: "Business Bay", link: "/locations/business-bay" },
  { name: "JLT", link: "/locations/jlt" },
  { name: "Downtown Dubai", link: "/locations/downtown" },
  { name: "Palm Jumeirah", link: "/locations/palm-jumeirah" },
  { name: "Al Barsha", link: "/locations/al-barsha" },
  { name: "JVC", link: "/locations/jvc" },
  { name: "Arabian Ranches", link: "/locations/arabian-ranches" },
  { name: "Dubai Hills", link: "/locations/dubai-hills" },
  { name: "Deira", link: "/locations/deira" },
  { name: "Mirdif", link: "/locations/mirdif" },
  { name: "Silicon Oasis", link: "/locations/silicon-oasis" },
  { name: "Al Quoz", link: "/locations/al-quoz" },
  { name: "Sports City", link: "/locations/sports-city" },
  { name: "Motor City", link: "/locations/motor-city" },
]

// Testimonials
const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai Marina",
    useCase: "Villa Renovation",
    rating: 5,
    text: "Stored my entire 4-bedroom villa contents for 8 months during renovation. Everything came back in perfect condition. The climate control really protected my wooden furniture from warping.",
    highlight: "8 months storage",
  },
  {
    name: "Sarah Mitchell",
    location: "Business Bay",
    useCase: "Expat Relocation",
    rating: 5,
    text: "Moving back to UK temporarily but didn't want to sell my furniture. SafeStorage picked everything up, stored it safely, and I can check on things anytime. Incredible service!",
    highlight: "International move",
  },
  {
    name: "Mohammed Hassan",
    location: "JLT",
    useCase: "E-commerce Business",
    rating: 5,
    text: "My Amazon FBA inventory needed climate control. SafeStorage understands business needs - flexible access hours, inventory management, and the pricing is transparent. No hidden fees!",
    highlight: "Business storage",
  },
  {
    name: "Lisa Chen",
    location: "Downtown Dubai",
    useCase: "Apartment Downsizing",
    rating: 5,
    text: "Moved from 3BR to 1BR apartment. Instead of selling furniture, I stored it. The free pickup saved me so much hassle - they literally did everything!",
    highlight: "Free pickup",
  },
  {
    name: "James Wilson",
    location: "Palm Jumeirah",
    useCase: "Classic Car Storage",
    rating: 5,
    text: "My 1967 Mustang needed proper storage during summer. Climate controlled, 24/7 security cameras, and they even let me visit to check on it. Worth every dirham.",
    highlight: "Vehicle storage",
  },
  {
    name: "Fatima Al-Maktoum",
    location: "Jumeirah",
    useCase: "Document Archiving",
    rating: 5,
    text: "Our law firm needed compliant document storage. SafeStorage meets all UAE regulations, fire protection, humidity control. Peace of mind for sensitive client files.",
    highlight: "Compliant storage",
  },
]

// FAQ Data
const faqs = [
  {
    question: "How much do storage units cost in Dubai?",
    answer: "Storage units in Dubai range from AED 199 to AED 2,999+ per month depending on size. At SafeStorage Dubai: Small units (25-50 sq ft) start at AED 199/month, Medium units (75-120 sq ft) cost AED 599/month, Large units (150-300 sq ft) cost AED 1,499/month. All prices include climate control, security, and FREE pickup & delivery. No hidden fees!",
  },
  {
    question: "Are your storage units climate controlled?",
    answer: "Yes, ALL our storage units are fully climate controlled. We maintain temperature at 20-25°C and humidity at 45-55% year-round. This is essential in Dubai where summer temperatures exceed 45°C. Climate control protects furniture from warping, electronics from damage, documents from deterioration, and prevents mold growth.",
  },
  {
    question: "Do you offer free pickup and delivery?",
    answer: "Yes! SafeStorage Dubai provides completely FREE pickup and delivery anywhere in Dubai. Our professional team will come to your home, office, or any location to collect your items. When you need them back, we deliver for FREE. This saves you AED 300-500 compared to hiring movers separately.",
  },
  {
    question: "What size storage unit do I need?",
    answer: "Here's a quick guide: Small (25-50 sq ft) - Studio apartment, 10-20 boxes, seasonal items. Medium (75-120 sq ft) - 1-2 bedroom apartment contents. Large (150-300 sq ft) - 3+ bedroom villa or business inventory. Not sure? Our consultants offer FREE assessments and can recommend the exact size you need. Call 050-577-3388.",
  },
  {
    question: "How secure are your storage facilities?",
    answer: "Our facilities feature enterprise-grade security: 24/7 HD CCTV surveillance covering every angle, biometric fingerprint access (only YOU can access your unit), individual unit alarms, fire detection and suppression systems, on-site security personnel, and secure perimeter fencing. Your belongings are monitored and protected 24/7.",
  },
  {
    question: "Can I access my storage unit 24/7?",
    answer: "Standard access hours are Monday-Saturday 8AM-8PM and Sunday 10AM-6PM. Business customers can arrange extended hours or 24/7 access packages based on their needs. You can also request FREE delivery of your items to your location at any time.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "SafeStorage Dubai offers flexible month-to-month contracts with just 1-month minimum. No long-term commitment required! You can extend as needed or cancel with 30 days notice. We also offer discounts for prepaid plans: 10% off for 3 months, 15% off for 6 months, 20% off for 12 months.",
  },
  {
    question: "Do you provide insurance for stored items?",
    answer: "Yes! Every storage unit includes FREE insurance coverage up to AED 5,000. This covers fire, theft, and natural disasters. For valuable items, we offer additional comprehensive coverage up to AED 100,000. Our team helps you choose the right protection for your belongings.",
  },
  {
    question: "What items cannot be stored?",
    answer: "For safety, we cannot store: hazardous materials and chemicals, flammable substances (petrol, paint, aerosols), perishable food items, live plants or animals, firearms and explosives, and illegal items. Everything else - furniture, electronics, documents, vehicles, artwork, sports equipment - is welcome!",
  },
  {
    question: "Can I change my storage unit size?",
    answer: "Absolutely! We understand your needs may change. You can upgrade to a larger unit anytime based on availability, or downgrade when you no longer need the space. Simply contact your dedicated storage consultant and we'll handle the transition smoothly. No penalties for changing sizes.",
  },
  {
    question: "Do you offer packing services and materials?",
    answer: "Yes! We offer complete packing solutions: high-quality boxes (small, medium, large), bubble wrap and packing paper, tape and markers, furniture covers and mattress bags, wardrobe boxes, and specialty packaging. Our professional team also offers full packing/unpacking services on request.",
  },
  {
    question: "Can someone else access my storage unit?",
    answer: "Yes, you can authorize family members, employees, or others to access your unit. Simply provide us their details (name, Emirates ID/passport, phone number) and we'll set up their biometric access credentials. You can add or remove authorized users anytime.",
  },
  {
    question: "How do I pay for storage?",
    answer: "We accept multiple payment methods: Credit/Debit cards (Visa, Mastercard, Amex), bank transfers, cash at our facility, post-dated cheques, Apple Pay/Google Pay. Choose monthly, quarterly, or annual payments. Longer terms get better discounts!",
  },
  {
    question: "Where is your storage facility located?",
    answer: "Our main facility is in Dubai Investment Park 2, strategically located with easy access from all Dubai areas. But location doesn't matter much - we provide FREE pickup from YOUR location (Dubai Marina, Business Bay, JLT, Downtown, wherever you are) and FREE delivery back!",
  },
  {
    question: "How quickly can I start using storage?",
    answer: "You can start immediately! Get a free quote online or call 050-577-3388. Same-day pickup is available for requests before 12 PM. Standard pickups are scheduled within 24-48 hours based on your preferred time. It's that fast and easy!",
  },
]

// Related Services
const relatedServices = [
  { name: "Furniture Storage", link: "/services/furniture-storage", icon: Home },
  { name: "Document Storage", link: "/services/document-storage", icon: FileText },
  { name: "Vehicle Storage", link: "/services/vehicle-storage", icon: Car },
  { name: "Business Storage", link: "/business-storage", icon: Building2 },
  { name: "E-commerce Storage", link: "/services/ecommerce-storage", icon: ShoppingBag },
  { name: "Climate Controlled", link: "/services/climate-controlled", icon: Thermometer },
]

export default function StorageUnitsDubaiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ========== 1. HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-dubai-navy via-dubai-navy to-dubai-midnight py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dubai-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dubai-skyblue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (487+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">500+ Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Truck className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm font-medium">FREE Pickup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Thermometer className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Climate Controlled</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Storage Units in Dubai
              <span className="block text-dubai-gold mt-2">From AED 199/Month</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              FREE pickup & delivery • 24/7 access • Climate controlled • No hidden fees
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6" asChild>
                <Link href="/get-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-5 w-5" />
                  050-577-3388
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Starting Price", value: "AED 199/mo" },
                { label: "Pickup", value: "FREE" },
                { label: "Insurance", value: "AED 5,000" },
                { label: "Response", value: "15 min" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-dubai-gold font-bold text-xl">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. SOCIAL PROOF BAR ========== */}
      <section className="bg-dubai-gold py-4">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-white" />
              <span className="font-medium">4.9/5 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">24/7 Access Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">7+ Years in Dubai</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. INTRODUCTION SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-6 text-center">
              Why Dubai Residents Need <span className="text-dubai-gold">Climate-Controlled</span> Storage
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Storage units in Dubai</strong> are essential for residents dealing with limited space, relocations, renovations, or business inventory. But here&apos;s what most storage companies don&apos;t tell you: <strong>regular storage can destroy your belongings in Dubai&apos;s extreme climate</strong>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With temperatures exceeding <strong>45°C in summer</strong> and humidity levels fluctuating wildly, non-climate-controlled storage leads to warped furniture, damaged electronics, moldy clothes, and deteriorating documents. That&apos;s why <strong>SafeStorage Dubai</strong> offers 100% climate-controlled units maintained at <strong>20-25°C with 45-55% humidity</strong> year-round.
              </p>

              <div className="bg-dubai-sand/30 border-l-4 border-dubai-gold p-6 rounded-r-lg my-8">
                <p className="text-lg font-medium text-dubai-navy mb-2">What makes us different?</p>
                <p className="text-muted-foreground">
                  Unlike other storage companies, we offer <strong>FREE pickup and delivery</strong> anywhere in Dubai. You don&apos;t need to hire movers or rent a van - we handle everything. Plus, every unit includes <strong>free insurance up to AED 5,000</strong> and transparent pricing with <strong>no hidden fees</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. PRICING SECTION ========== */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Storage Unit Prices in Dubai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All units are climate-controlled and include FREE pickup & delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? "ring-2 ring-dubai-gold" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-dubai-gold text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? "pt-10" : ""}`}>
                  <h3 className="text-xl font-bold text-dubai-navy mb-1">{plan.size}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.sqft}</p>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-dubai-gold">AED {plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Fits:</strong> {plan.fits}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Ideal for:</strong> {plan.ideal}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">FREE pickup & delivery</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">Climate controlled</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">AED 5,000 free insurance</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-dubai-gold hover:bg-dubai-darkgold" : "bg-dubai-navy hover:bg-dubai-midnight"} text-white`}
                    asChild
                  >
                    <Link href="/get-quote">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Not sure which size? Our consultants offer <strong>FREE assessments</strong>.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href={env.PHONE_LINK}>
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Size Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 5. WHY CHOOSE US ========== */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage Dubai?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 reasons why 500+ customers trust us with their valuable belongings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 bg-dubai-gold/10 text-dubai-gold text-xs font-medium px-3 py-1 rounded-bl-lg">
                    {feature.highlight}
                  </div>
                  <div className="rounded-full bg-dubai-gold/10 p-4 w-fit mb-4 group-hover:bg-dubai-gold/20 transition-colors">
                    <Icon className="h-7 w-7 text-dubai-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-dubai-navy mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== 6. WHO USES STORAGE ========== */}
      <section className="py-16 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Uses Storage Units in Dubai?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From homeowners to businesses - our storage solutions fit every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {userCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="rounded-full bg-dubai-gold/20 p-4 w-fit mb-4">
                    <Icon className="h-7 w-7 text-dubai-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.users.map((user, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <ChevronRight className="h-4 w-4 text-dubai-gold shrink-0 mt-0.5" />
                        {user}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== 7. HOW IT WORKS ========== */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              How to Rent Storage in Dubai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 simple steps to secure, climate-controlled storage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-dubai-gold/30 -translate-x-1/2" />
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-dubai-gold text-white text-4xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-dubai-navy mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {step.cta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
              <Link href="/get-quote">
                Start with Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 8. AREAS WE SERVE ========== */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Storage Unit Pickup in All Dubai Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FREE pickup & delivery from these locations (and anywhere else in Dubai!)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.link}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-dubai-gold hover:bg-dubai-gold/5 px-4 py-2 rounded-full transition-colors"
              >
                <MapPin className="h-4 w-4 text-dubai-gold" />
                <span className="text-dubai-navy">{area.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Don&apos;t see your area? We cover <strong>ALL of Dubai</strong>.
              <a href={env.PHONE_LINK} className="text-dubai-gold hover:underline ml-1">
                Call to confirm →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ========== 9. TESTIMONIALS ========== */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            {/* Google Badge */}
            <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-full px-6 py-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <span className="font-bold text-lg">4.9</span>
              <span className="text-muted-foreground text-sm">487+ Google Reviews</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real customers across Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-dubai-gold/10 text-dubai-gold text-xs font-medium rounded-full">
                    {testimonial.useCase}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-dubai-navy">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
              <Link href="/get-quote">
                Join 500+ Happy Customers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 10. FAQ SECTION ========== */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Storage Units Dubai - FAQ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to the most common questions about storage in Dubai
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-dubai-navy hover:text-dubai-gold py-4 hover:no-underline">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-dubai-gold shrink-0 mt-0.5" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 050-577-3388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 11. FINAL CTA ========== */}
      <section className="py-16 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Store Your Belongings Safely?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get your free quote in 2 minutes. No obligation, no hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6" asChild>
                <Link href="/get-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: 050-577-3388
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                FREE Pickup & Delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Climate Controlled
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                No Hidden Fees
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                AED 5,000 Free Insurance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 12. RELATED SERVICES ========== */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-dubai-navy mb-6 text-center">
            Explore Our Storage Services
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-dubai-gold hover:shadow-md px-5 py-3 rounded-lg transition-all"
                >
                  <Icon className="h-5 w-5 text-dubai-gold" />
                  <span className="text-dubai-navy font-medium">{service.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
