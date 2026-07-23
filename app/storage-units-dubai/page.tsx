import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Star, Shield, Clock, Truck, Phone, MessageCircle,
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
  title: "Storage Units Dubai — Prices & Sizes 2026",
  description: "Compare storage unit sizes and prices in Dubai for 2026. From small locker-size to full-villa storage — transparent pricing from 12.60 AED / sqft, free insurance up to AED 5,000, and hassle-free pickup. No hidden fees.",
  keywords: "storage units dubai, self storage dubai, storage dubai price, storage units near me, cheap storage dubai, secure storage dubai, furniture storage dubai, storage facility dubai, storage space dubai, storage rental dubai",
  openGraph: {
    title: "Storage Units in Dubai - From 12.60 AED / sqft | Hassle-Free Pickup",
    description: "Secure, clean storage units in Dubai. Hassle-free pickup & delivery, 24/7 access, transparent pricing. Trusted by 500+ customers.",
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
    title: "Storage Units in Dubai - From 12.60 AED / sqft",
    description: "Secure, clean storage with Hassle-free pickup. 500+ happy customers.",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-units-dubai",
  },
}

// Features Data
const features = [
  {
    icon: Truck,
    title: "Hassle-Free Pickup & Delivery",
    description: "We collect from your location and deliver back when needed — no van rental or heavy lifting required on your part.",
    highlight: "Save AED 300+",
  },
  {
    icon: Package,
    title: "Clean, Dedicated Units",
    description: "Your belongings are stored in clean, dedicated indoor units, wrapped and dust-protected throughout their stay.",
    highlight: "Well cared for",
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
    description: "Our team carefully transports your items to our clean, secure facility.",
    cta: "Fully insured",
  },
  {
    number: "4",
    title: "Access Anytime",
    description: "Visit during operating hours or request delivery back to your location when ready.",
    cta: "Hassle-free delivery",
  },
]

// Areas Served
const areas = [
  { name: "Dubai Marina", link: "/locations/dubai-marina" },
  { name: "Business Bay", link: "/locations/business-bay" },
  { name: "Jumeirah", link: "/locations/jumeirah" },
  { name: "Dubai Investment Park", link: "/locations/dubai-investment-park" },
  { name: "JLT", link: "/locations" },
  { name: "Downtown Dubai", link: "/locations" },
  { name: "Palm Jumeirah", link: "/locations" },
  { name: "Al Barsha", link: "/locations" },
  { name: "JVC", link: "/locations" },
  { name: "Arabian Ranches", link: "/locations" },
  { name: "Dubai Hills", link: "/locations" },
  { name: "Deira", link: "/locations" },
  { name: "Mirdif", link: "/locations" },
  { name: "Silicon Oasis", link: "/locations" },
  { name: "Al Quoz", link: "/locations" },
  { name: "Sports City", link: "/locations" },
  { name: "Motor City", link: "/locations" },
]

// Testimonials
const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai Marina",
    useCase: "Villa Renovation",
    rating: 5,
    text: "Stored my entire 4-bedroom villa contents for 8 months during renovation. Everything came back in perfect condition. Their careful wrapping and clean storage really protected my wooden furniture.",
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
    text: "My Amazon FBA inventory needed secure, reliable storage. SafeStorage understands business needs - flexible access hours, inventory management, and the pricing is transparent. No hidden fees!",
    highlight: "Business storage",
  },
  {
    name: "Lisa Chen",
    location: "Downtown Dubai",
    useCase: "Apartment Downsizing",
    rating: 5,
    text: "Moved from 3BR to 1BR apartment. Instead of selling furniture, I stored it. The hassle-free pickup saved me so much time - they literally did everything!",
    highlight: "Hassle-free pickup",
  },
  {
    name: "James Wilson",
    location: "Palm Jumeirah",
    useCase: "Classic Car Storage",
    rating: 5,
    text: "My 1967 Mustang needed proper storage during summer. Secure indoor bay, 24/7 security cameras, and they even let me visit to check on it. Worth every dirham.",
    highlight: "Vehicle storage",
  },
  {
    name: "Fatima Al-Maktoum",
    location: "Jumeirah",
    useCase: "Document Archiving",
    rating: 5,
    text: "Our law firm needed compliant document storage. SafeStorage meets all UAE regulations, with fire protection and secure access control. Peace of mind for sensitive client files.",
    highlight: "Compliant storage",
  },
]

// FAQ Data
const faqs = [
  {
    question: "How much do storage units cost in Dubai?",
    answer: "Storage units at SafeStorage Dubai start from just 12.60 AED / sqft (VAT-inclusive). We offer flexible pricing based on your specific storage needs. All prices include clean, secure units, and hassle-free pickup & delivery. No hidden fees! Contact us at 050-577-3388 for a personalized quote.",
  },
  {
    question: "Do you offer hassle-free pickup and delivery?",
    answer: "Yes! SafeStorage Dubai provides completely hassle-free pickup and delivery anywhere in Dubai. Our professional team will come to your home, office, or any location to collect your items. When you need them back, we deliver at your convenience. This saves you the hassle and cost of hiring movers separately.",
  },
  {
    question: "What size storage unit do I need?",
    answer: "Here's a quick guide: Small (25-50 sq ft) - Studio apartment, 10-20 boxes, seasonal items. Medium (75-120 sq ft) - 1-2 bedroom apartment contents. Large (150-300 sq ft) - 3+ bedroom villa or business inventory. Not sure? Our consultants offer FREE assessments and can recommend the exact size you need. Call 050-577-3388.",
  },
  {
    question: "Can I access my storage unit 24/7?",
    answer: "Standard access hours are Monday-Saturday 8AM-8PM and Sunday 10AM-6PM. Business customers can arrange extended hours or 24/7 access packages based on their needs. You can also request Hassle-free delivery of your items to your location at any time.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "SafeStorage Dubai offers flexible month-to-month contracts with just 1-month minimum. No long-term commitment required! You can extend as needed or cancel with 30 days notice. We also offer a wide range of discounts on prepaid plans — the longer you store, the more you save. Contact us for the best available rate.",
  },
  {
    question: "Do you provide insurance for stored items?",
    answer: "Yes! Every storage unit includes FREE insurance coverage up to AED 5,000. This covers fire, theft, and natural disasters. For valuable items, we offer additional comprehensive coverage up to AED 100,000. Our team helps you choose the right protection for your belongings.",
  },
  {
    question: "What items cannot be stored?",
    answer: "Please note we do not store: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. For safety, we also cannot store hazardous materials and chemicals, flammable substances (petrol, paint, aerosols), perishable food, live plants or animals, firearms and explosives, and illegal items. Everything else - furniture, electronics, documents, vehicles, sports equipment - is welcome!",
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
    question: "How do I pay for storage?",
    answer: "We accept multiple payment methods: Credit/Debit cards (Visa, Mastercard, Amex), bank transfers, cash at our facility, post-dated cheques, Apple Pay/Google Pay. Choose monthly, quarterly, or annual payments. Longer terms get better discounts!",
  },
  {
    question: "Where is your storage facility located?",
    answer: "Our main facility is in Dubai Investment Park 2, strategically located with easy access from all Dubai areas. But location doesn't matter much - we provide hassle-free pickup from YOUR location (Dubai Marina, Business Bay, JLT, Downtown, wherever you are) and delivery back!",
  },
  {
    question: "How quickly can I start using storage?",
    answer: "You can start immediately! Get a free quote online or call 050-577-3388. Same-day pickup is available for requests before 12 PM. Standard pickups are scheduled within 24-48 hours based on your preferred time. It's that fast and easy!",
  },
]

// Related Services
const relatedServices = [
  { name: "Furniture Storage", link: "/furniture-storage", icon: Home },
  { name: "Document Storage", link: "/document-storage", icon: FileText },
  { name: "Vehicle Storage", link: "/car-storage", icon: Car },
  { name: "Business Storage", link: "/business-storage", icon: Building2 },
  { name: "E-commerce Storage", link: "/ecommerce-storage", icon: ShoppingBag },
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
                <span className="text-white text-sm font-medium">Hassle-Free Pickup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Clean &amp; Secure</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Storage Units in Dubai
              <span className="block text-dubai-gold mt-2">From 12.60 AED / sqft</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Hassle-free pickup & delivery • 24/7 access • Clean & secure • No hidden fees
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
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-5 w-5" />
                  050-577-3388
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Starting Price", value: "12.60 AED / sqft" },
                { label: "Pickup", value: "Hassle-Free" },
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
              Why Dubai Residents Choose <span className="text-dubai-gold">SafeStorage</span> Units
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Storage units in Dubai</strong> are essential for residents dealing with limited space, relocations, renovations, or business inventory. But here&apos;s what most storage companies don&apos;t tell you: <strong>how your belongings are handled and looked after matters just as much as the price</strong>.
              </p>


              <div className="bg-dubai-sand/30 border-l-4 border-dubai-gold p-6 rounded-r-lg my-8">
                <p className="text-lg font-medium text-dubai-navy mb-2">What makes us different?</p>
                <p className="text-muted-foreground">
                  Unlike other storage companies, we offer <strong>hassle-free pickup and delivery</strong> anywhere in Dubai. You don&apos;t need to hire movers or rent a van - we handle everything. Plus, every unit includes <strong>free insurance up to AED 5,000</strong> and transparent pricing with <strong>no hidden fees</strong>.
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
              Prices start from 12.60 AED / sqft. All units are clean and secure and include hassle-free pickup & delivery.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-lg ring-2 ring-dubai-gold overflow-hidden text-center p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-dubai-navy mb-3">
                Pricing starts from 12.60 AED / sqft
              </h3>
              <p className="text-muted-foreground mb-6">
                VAT-inclusive · all unit sizes · hassle-free pickup & delivery included
              </p>
              <Button
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white"
                size="lg"
                asChild
              >
                <Link href="/get-quote">Get Quote</Link>
              </Button>
            </div>
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
              4 simple steps to secure, clean storage
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
              Hassle-free pickup & delivery from these locations (and anywhere else in Dubai!)
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
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
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
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp: 050-577-3388
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Hassle-Free Pickup & Delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Clean & Secure Units
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

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">Storage Units in Dubai — Complete Buyer&apos;s Guide 2026</h2>
          <p className="text-lg text-gray-700 mb-6">
            Choosing the right storage unit in Dubai requires understanding your storage needs, the types of
            units available, how pricing works, and what features to prioritise. This guide covers everything
            you need to know about storage units in Dubai for 2026 — including unit sizes, pricing ranges,
            security standards, cleanliness, and how to choose the right provider.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Storage Unit Sizes in Dubai</h3>
              <p className="text-gray-700 mb-3">
                Storage units in Dubai are typically offered in the following sizes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Locker (5–15 sq ft):</strong> Documents, files, valuables — not suitable for furniture</li>
                <li><strong>Small (25–50 sq ft):</strong> Studio apartment contents, 15–20 boxes, small furniture</li>
                <li><strong>Medium (50–100 sq ft):</strong> 1–2 bedroom apartment, office clearance</li>
                <li><strong>Large (100–200 sq ft):</strong> 3–4 bedroom villa, full household contents</li>
                <li><strong>Extra Large (200+ sq ft):</strong> Large villa, commercial inventory, warehouse overflow</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Storage Unit Prices in Dubai 2026</h3>
              <p className="text-gray-700 mb-3">
                Storage unit prices in Dubai vary significantly based on unit size, location, security level,
                and the service model. Here are typical monthly rates:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Small units (25–50 sq ft):</strong> AED 150–350/month</li>
                <li><strong>Medium units (50–100 sq ft):</strong> AED 350–800/month</li>
                <li><strong>Large units (100–200 sq ft):</strong> AED 800–1,800/month</li>
                <li><strong>Extra large (200+ sq ft):</strong> AED 1,500–3,500/month</li>
                <li><strong>Vehicle storage:</strong> AED 600–1,500/month depending on vehicle size</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">What to Look for in a Dubai Storage Unit</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Essential Features</p>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Clean, indoor units:</strong> Dedicated, dust-protected units keep belongings in good condition</li>
                  <li>• <strong>Security:</strong> CCTV, access control, individual unit locks or alarms</li>
                  <li>• <strong>Insurance:</strong> Make sure coverage is included or available as add-on</li>
                  <li>• <strong>Access:</strong> Convenient operating hours or 24/7 access options</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Value-Added Features</p>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Hassle-free pickup &amp; delivery:</strong> Saves time and cost vs renting a lorry</li>
                  <li>• <strong>Flexible contracts:</strong> Month-to-month vs long-term lock-ins</li>
                  <li>• <strong>Transparent pricing:</strong> No hidden fees, clear invoicing</li>
                  <li>• <strong>Customer support:</strong> Dedicated consultant vs call centre-only service</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-3">Why SafeStorage is Dubai&apos;s Top-Rated Storage Unit Provider</h3>
          </div>

          {/* Static FAQ section — plain HTML so search engines read every word */}
          <h3 className="text-2xl font-bold text-dubai-navy mb-6">Storage Units Dubai — Detailed FAQ</h3>
          <div className="space-y-5">
            {[
              { q: "How much do storage units cost in Dubai per month?", a: "Storage unit prices at SafeStorage Dubai start from 12.60 AED / sqft (VAT-inclusive), whether you need a small unit, a medium unit (75–100 sq ft), or a large unit for a full villa. The price includes clean, dedicated indoor units, 24/7 CCTV security, free insurance up to AED 5,000, and door-to-door pickup and delivery. There are no setup fees, no deposits, and no hidden administration charges." },
              { q: "Do storage units in Dubai include hassle-free pickup and delivery?", a: "Yes. SafeStorage Dubai includes hassle-free door-to-door pickup and delivery in every monthly plan. Our professional team collects your items from your home, office, or any Dubai location, transports them to our secure facility, and delivers them back whenever you need them. This saves customers the cost and hassle of hiring a lorry or arranging separate movers — typically AED 300–800 in savings compared to traditional self-storage facilities." },
              { q: "What size storage unit do I need in Dubai?", a: "Unit size depends on what you are storing. A small unit (25–50 sq ft) suits a studio apartment, documents, or 10–20 boxes. A medium unit (75–120 sq ft) accommodates a one-to-two bedroom apartment. A large unit (150–300 sq ft) handles a three-bedroom villa or business inventory. The most accurate way to choose is to contact SafeStorage Dubai on +971505773388 — our consultant will assess your needs and recommend the exact size, preventing you from overpaying for space you don&apos;t need." },
              { q: "What is the minimum rental period for a storage unit in Dubai?", a: "SafeStorage Dubai offers flexible month-to-month contracts with no long-term commitment required. The effective minimum period is one month. We also offer weekly arrangements for urgent short-term needs such as renovation projects, moving between apartments, or property handovers. Cancellation requires just 30 days&apos; notice — there is no early termination penalty. Longer-term prepaid plans are available with a wide range of discounts — the longer you store, the more you save." },
              { q: "Do Dubai storage units include free insurance?", a: "Yes. Every SafeStorage Dubai unit includes complimentary insurance coverage up to AED 5,000 at no extra charge. This covers fire, theft, water ingress from facility systems, and structural damage. For customers with higher-value stored items — art, antiques, electronics collections, or high-end furniture — we offer additional coverage up to AED 100,000. We recommend photographing and documenting any high-value items before storage to facilitate rapid claims processing if ever needed." },
              { q: "What items can I store in a Dubai storage unit?", a: "SafeStorage Dubai accepts virtually everything: all furniture, household appliances (fridges, washing machines, air conditioners), electronics, clothing and textiles, sports equipment, business inventory and commercial stock, documents and archive files, seasonal items, and vehicles in dedicated bays. Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items, as well as flammable or hazardous liquids, compressed gas cylinders, live animals, perishable food, firearms, and illegal goods. If you are unsure about a specific item, call +971505773388 and we will advise immediately." },
              { q: "Can I access my storage unit at any time?", a: "SafeStorage Dubai offers facility access during extended operating hours: Monday to Saturday 8 AM to 8 PM, and Sunday 10 AM to 6 PM. Business customers with specific requirements can arrange extended or 24/7 access packages. Alternatively, rather than visiting the facility, you can request specific items or boxes to be delivered to your address — our team retrieves and delivers within 24–48 hours. This delivery-on-demand feature is popular with customers who store business inventory or archive documents they need occasionally." },
              { q: "Can I change my storage unit size after I start?", a: "Yes. SafeStorage Dubai makes it easy to upgrade to a larger unit or downsize to a smaller one. Upgrades are processed within 2–3 business days subject to availability. Downgrades involve relocating your items, which our team handles on your behalf. Pricing adjusts from the date of the change, and there is no penalty or administration fee for size changes. Many customers adjust their unit size as their circumstances change — businesses scaling up inventory, or households removing items they no longer need." },
              { q: "Do you offer packing materials and packing services?", a: "Yes. SafeStorage Dubai provides high-quality packing materials including double-walled cardboard boxes in standard sizes, bubble wrap, packing paper, stretch film, furniture covers, mattress bags, and specialist wardrobe boxes. These are available for purchase at competitive prices. We also offer a full professional packing service where our trained team wraps, boxes, and loads your items using premium materials. The professional service is particularly valued for fragile items, antiques, electronics, and artwork." },
              { q: "How quickly can I get a storage unit in Dubai?", a: "Very quickly. For same-day pickup, book before 12 PM and our team will collect your items the same day. Standard pickups are typically available within 24–48 hours based on your preferred time slot. Getting a quote takes under two minutes online at safestorage.ae or via a quick call to +971505773388. There is no paperwork to complete before your pickup — our team brings all necessary documents on the day." },
              { q: "Where is the SafeStorage Dubai facility located?", a: "SafeStorage Dubai&apos;s main facility is in Dubai Investment Park 2, with easy access from Sheikh Mohammed Bin Zayed Road. However, for most customers, the facility location is irrelevant because our door-to-door model means we collect from and deliver to your address — wherever in Dubai you are. You never need to visit the facility unless you specifically want to access your unit directly or are curious to see where your belongings are kept." },
              { q: "Does SafeStorage Dubai serve business customers?", a: "Yes. SafeStorage Dubai is used extensively by businesses including e-commerce sellers needing flexible inventory storage, law firms and consultancies archiving documents for the UAE&apos;s mandatory 5-year retention period, event management companies storing displays and equipment, retail businesses managing seasonal stock, and office relocations requiring short-term furniture and equipment storage. Commercial plans include dedicated consultant support, flexible access arrangements, and the ability to scale unit size up or down with 30 days&apos; notice." },
              { q: "How is SafeStorage Dubai different from other storage companies?", a: "SafeStorage Dubai stands out through its door-to-door model (hassle-free pickup and delivery included in every plan), clean, dedicated indoor units at every price point, transparent all-inclusive pricing with no hidden fees, free insurance up to AED 5,000 as standard, a 4.9-star Google rating from 487+ verified reviews, and personalised dedicated consultant service rather than a generic call centre. We believe storage should be completely hassle-free — and every element of our service is designed with that goal in mind." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-dubai-navy mb-2">{faq.q}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
