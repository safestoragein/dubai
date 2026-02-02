import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Star, Shield, Thermometer, Clock, Truck, Phone, MessageCircle,
  CheckCircle2, ArrowRight, MapPin, Package, Users, Building2,
  Car, FileText, ShoppingBag, Home, Briefcase, Lock, CreditCard,
  Calendar, HelpCircle, ChevronRight, Boxes, UserCheck, Zap, BadgeCheck
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { env } from "@/lib/env"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Storage Dubai | #1 Rated Storage Facility | From AED 99 | SafeStorage",
  description: "Best storage in Dubai from AED 99/month. Climate-controlled, 24/7 access, Hassle-Hassle-hassle-free pickup & delivery. 4.9★ rated by 500+ customers. Get instant quote!",
  keywords: "storage dubai, self storage dubai, storage facility dubai, cheap storage dubai, secure storage dubai, climate controlled storage, furniture storage dubai, business storage dubai, document storage dubai, vehicle storage dubai",
  openGraph: {
    title: "Storage Dubai | #1 Rated Storage Facility | From AED 99",
    description: "Best storage in Dubai from AED 99/month. Climate-controlled, 24/7 access, Hassle-Hassle-hassle-free pickup & delivery. 4.9★ rated by 500+ customers.",
    url: "https://safestorage.ae/storage-dubai",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-storage-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Storage Dubai - SafeStorage"
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Dubai | #1 Rated | From AED 99",
    description: "Best storage in Dubai. Climate-controlled, Hassle-Hassle-hassle-free pickup. 500+ happy customers.",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai",
  },
}

// Why Choose Us Data
const whyChooseUs = [
  {
    icon: Truck,
    title: "Hassle-Free Pickup & Delivery",
    description: "We collect from your location and deliver back when needed. Competitors charge AED 200-500 for this - we include it FREE.",
    highlight: "Competitors Charge Extra",
  },
  {
    icon: Thermometer,
    title: "True Climate Control (20-25°C)",
    description: "Not just 'air conditioning' - real temperature and humidity control (45-55%) to protect your belongings from Dubai's extreme heat.",
    highlight: "Specific Temperature Range",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "We show our prices upfront. No hidden admin fees, no surprise charges, no lock purchase requirements. What you see is what you pay.",
    highlight: "No Hidden Fees",
  },
  {
    icon: Shield,
    title: "FREE Insurance (AED 5,000)",
    description: "Every unit includes complimentary insurance coverage up to AED 5,000. Additional coverage available for high-value items.",
    highlight: "Included Free",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    description: "Need storage urgently? We offer same-day pickup for requests before 12 PM. Competitors typically need 2-3 days advance notice.",
    highlight: "No Waiting",
  },
  {
    icon: UserCheck,
    title: "Dedicated Storage Consultant",
    description: "You get a personal consultant who knows your account, your items, and your preferences. Not a random call center.",
    highlight: "Personal Service",
  },
]

// Storage Services Data
const storageServices = [
  {
    icon: Home,
    title: "Personal Storage",
    description: "Store furniture, seasonal items, and personal belongings during moves, renovations, or to declutter your home.",
    link: "/services",
  },
  {
    icon: Building2,
    title: "Business Storage",
    description: "Secure space for inventory, documents, equipment, and office furniture. Flexible terms for growing businesses.",
    link: "/business-storage",
  },
  {
    icon: Package,
    title: "Furniture Storage",
    description: "Climate-controlled units perfect for protecting furniture from Dubai's heat. Ideal for relocations and staging.",
    link: "/self-storage-dubai/furniture-storage",
  },
  {
    icon: FileText,
    title: "Document Storage",
    description: "Secure archival storage with retrieval services. Perfect for legal, medical, and financial records compliance.",
    link: "/business-storage",
  },
  {
    icon: Car,
    title: "Vehicle Storage",
    description: "Covered and climate-controlled options for cars, motorcycles, boats, and classic vehicles. Regular checks available.",
    link: "/services",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Storage",
    description: "Fulfillment-ready storage with receiving, shelving, and pick-pack services. Scale with your business growth.",
    link: "/business-storage",
  },
]

// Pricing Data
const pricingData = [
  {
    size: "Small",
    sqft: "25-50 sq ft",
    price: "from 99",
    fits: "Studio apartment, 10-20 boxes",
    ideal: "Seasonal items, small furniture",
    popular: false,
  },
  {
    size: "Medium",
    sqft: "75-120 sq ft",
    price: "Get Quote",
    fits: "1-2 bedroom apartment",
    ideal: "Apartment contents, office equipment",
    popular: true,
  },
  {
    size: "Large",
    sqft: "150-300 sq ft",
    price: "Get Quote",
    fits: "3+ bedroom villa",
    ideal: "Full house, business inventory",
    popular: false,
  },
  {
    size: "Vehicle",
    sqft: "Covered parking",
    price: "Get Quote",
    fits: "Cars, bikes, boats",
    ideal: "Classic cars, seasonal vehicles",
    popular: false,
  },
]

// How It Works Steps
const howItWorks = [
  {
    step: 1,
    title: "Get Free Quote",
    description: "Tell us what you need to store. Get an instant quote online or speak to our consultant for personalized pricing.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "We Pick Up",
    description: "Schedule a convenient time. Our professional team arrives with packing materials and carefully loads your items.",
    icon: Truck,
  },
  {
    step: 3,
    title: "Safe Storage",
    description: "Your belongings are transported to our climate-controlled facility with 24/7 security and stored in your personal unit.",
    icon: Shield,
  },
  {
    step: 4,
    title: "Access or Deliver",
    description: "Visit anytime during operating hours, or request delivery back to your location. We bring your items to you.",
    icon: Package,
  },
]

// Who Uses Storage
const userGroups = [
  {
    icon: Home,
    title: "Homeowners",
    description: "Declutter your space, store seasonal items, or keep furniture safe during renovations. Free up your home without losing your belongings.",
  },
  {
    icon: Users,
    title: "Expats & Travelers",
    description: "Leaving Dubai temporarily? Store everything safely while you're away. We handle pickup before you leave and delivery when you return.",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    description: "Office equipment, documents, inventory overflow. Professional storage without the commitment of a warehouse lease.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Sellers",
    description: "Scale your inventory without expanding your space. Receiving, shelving, and fulfillment services available.",
  },
  {
    icon: Boxes,
    title: "Students",
    description: "Store your belongings during summer breaks or between semesters. Affordable options perfect for student budgets.",
  },
  {
    icon: Star,
    title: "Collectors & Hobbyists",
    description: "Art, antiques, sports equipment, wine collections. Climate-controlled protection for valuable and sensitive items.",
  },
]

// Dubai Areas
const areas = [
  "Dubai Marina", "Business Bay", "JLT", "Downtown Dubai", "Palm Jumeirah",
  "Al Barsha", "JVC", "Arabian Ranches", "Dubai Hills", "Mirdif",
  "Deira", "Al Quoz", "Silicon Oasis", "Sports City", "Motor City",
]

// Testimonials Data
const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai Marina",
    rating: 5,
    useCase: "Villa Renovation",
    text: "Stored our entire villa contents for 4 months during renovation. The team picked up everything, stored it safely in climate control, and delivered it all back in perfect condition. The coordinator Ahmed kept us updated throughout. Couldn't be happier!",
  },
  {
    name: "Sarah Mitchell",
    location: "Business Bay",
    rating: 5,
    useCase: "Expat Relocation",
    text: "Moving back to UK temporarily and needed to store everything. SafeStorage made it so easy - they packed, collected, and now I have peace of mind knowing my furniture is in climate-controlled storage. Will definitely use again when I return.",
  },
  {
    name: "Mohammed Hassan",
    location: "JLT",
    rating: 5,
    useCase: "E-commerce Business",
    text: "Running an online business from home was getting impossible with all the inventory. Now SafeStorage handles my receiving and I just tell them what to ship. My apartment is mine again and my business runs smoother than ever.",
  },
  {
    name: "Lisa Chen",
    location: "Palm Jumeirah",
    rating: 5,
    useCase: "Furniture Storage",
    text: "Was worried about storing my antique furniture in Dubai's heat. SafeStorage's climate control kept everything at 22°C. After 6 months, my pieces came back exactly as I left them. The insurance coverage gave me extra peace of mind.",
  },
  {
    name: "James Williams",
    location: "Downtown Dubai",
    rating: 5,
    useCase: "Office Move",
    text: "Our company relocated offices and needed temporary storage for 3 months. The business storage team was professional, organized, and delivered everything on time for our new office setup. Highly recommend for corporate clients.",
  },
  {
    name: "Fatima Al-Maktoum",
    location: "Arabian Ranches",
    rating: 5,
    useCase: "Seasonal Storage",
    text: "Every summer we store winter clothes, sports equipment, and holiday decorations. The annual pickup and delivery is so convenient. 3 years using SafeStorage and never had a single issue. They're part of our family routine now!",
  },
]

// FAQ Data
const faqs = [
  {
    question: "How much does storage cost in Dubai?",
    answer: "Storage in Dubai at SafeStorage starts from just AED 99 per month. We offer flexible pricing based on your specific needs - from small boxes to full villa contents. All prices include climate control, security, and hassle-hassle-free pickup & delivery. Contact us at 050-577-3388 for a personalized quote.",
  },
  {
    question: "Is climate control necessary for storage in Dubai?",
    answer: "Absolutely! Dubai's temperatures exceed 45°C in summer and humidity fluctuates dramatically. Without climate control, furniture warps, electronics fail, documents deteriorate, and mold grows. All SafeStorage units maintain 20-25°C temperature and 45-55% humidity year-round to protect your belongings.",
  },
  {
    question: "Do you pick up items from my location?",
    answer: "Yes! SafeStorage provides hassle-hassle-free pickup from anywhere in Dubai - your home, office, or any location. Our professional team arrives with packing materials, carefully loads your items, and transports them to our facility. When you need them back, we deliver to your door. This service is included in our packages.",
  },
  {
    question: "What size storage unit do I need?",
    answer: "Here's a quick guide: Small (25-50 sq ft) - 10-20 boxes, studio apartment items. Medium (75-120 sq ft) - 1-2 bedroom apartment contents. Large (150-300 sq ft) - 3+ bedroom villa or business inventory. Not sure? Our consultants offer free assessments and recommend the perfect size for your items. Call 050-577-3388.",
  },
  {
    question: "How secure is your storage facility?",
    answer: "Our facility features enterprise-grade security: 24/7 HD CCTV surveillance covering every angle, biometric fingerprint access (only YOU can access your unit), individual unit alarms, fire detection and suppression systems, on-site security personnel, and secure perimeter fencing. Your belongings are monitored and protected 24/7.",
  },
  {
    question: "Can I access my storage unit at any time?",
    answer: "Standard access hours are Monday-Saturday 8AM-8PM and Sunday 10AM-6PM. Business customers can arrange extended hours or 24/7 access packages. You can also request delivery of specific items to your location at any time - we'll bring what you need to you.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "SafeStorage Dubai offers flexible month-to-month contracts with just 1-month minimum. No long-term commitment required! You can extend as needed or cancel with 30 days notice. We also offer discounts for prepaid plans: 10% off for 3 months, 15% off for 6 months, 20% off for 12 months.",
  },
  {
    question: "Are my stored items insured?",
    answer: "Yes! Every storage unit includes FREE insurance coverage up to AED 5,000. This covers fire, theft, and natural disasters. For valuable items, we offer additional comprehensive coverage up to AED 100,000. Our team helps you choose the right protection for your belongings.",
  },
  {
    question: "What items cannot be stored?",
    answer: "For safety, we cannot store: hazardous materials and chemicals, flammable substances (petrol, paint, aerosols), perishable food items, live plants or animals, firearms and explosives, and illegal items. Everything else - furniture, electronics, documents, vehicles, artwork, sports equipment - is welcome!",
  },
  {
    question: "Can I change my storage unit size later?",
    answer: "Absolutely! We understand your needs may change. You can upgrade to a larger unit anytime based on availability, or downgrade when you no longer need the space. Simply contact your dedicated storage consultant and we'll handle the transition smoothly. No penalties for changing sizes.",
  },
  {
    question: "Do you offer packing services?",
    answer: "Yes! We offer complete packing solutions: high-quality boxes (small, medium, large), bubble wrap and packing paper, tape and markers, furniture covers and mattress bags, wardrobe boxes, and specialty packaging. Our professional team also offers full packing/unpacking services on request.",
  },
  {
    question: "Can someone else access my storage unit?",
    answer: "Your unit is secured with biometric access - only registered fingerprints can enter. You can authorize additional people (family members, business partners) by adding their biometrics to your account. Temporary access can also be arranged with advance notice for one-time visitors.",
  },
  {
    question: "Where is your storage facility located?",
    answer: "Our main facility is in Dubai Investment Park 2, strategically located with easy access from all Dubai areas. But location doesn't matter much - we provide hassle-hassle-free pickup from YOUR location (Dubai Marina, Business Bay, JLT, Downtown, wherever you are) and delivery back when needed!",
  },
  {
    question: "How quickly can I get started?",
    answer: "You can start immediately! Get a free quote online or call 050-577-3388. Same-day pickup is available for requests before 12 PM. Standard pickups are scheduled within 24-48 hours based on your preferred time. It's that fast and easy!",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept multiple payment methods: Credit/Debit cards (Visa, Mastercard), Bank transfers, Cash payments, and Cheques. We also offer flexible payment plans - monthly, quarterly, or annual payments with discounts for longer commitments. Corporate accounts available for businesses.",
  },
]

// FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
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

      <div className="flex min-h-screen flex-col">
        {/* ========== 1. HERO SECTION ========== */}
        <section className="relative bg-gradient-to-br from-dubai-navy via-dubai-midnight to-dubai-navy py-20 md:py-28">
          <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Bar */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-medium">4.9★ (500+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BadgeCheck className="h-4 w-4 text-dubai-gold" />
                  <span className="text-white text-sm font-medium">#1 Rated in Dubai</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Truck className="h-4 w-4 text-green-400" />
                  <span className="text-white text-sm font-medium">Hassle-Free Pickup</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Thermometer className="h-4 w-4 text-blue-400" />
                  <span className="text-white text-sm font-medium">Climate Controlled</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Storage Dubai
                <span className="block text-dubai-gold mt-2">Secure • Affordable • Hassle-Free</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Hassle-Hassle-hassle-free pickup & delivery • From AED 99/month • 24/7 access • Climate controlled
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
                    WhatsApp Now
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-black border-white hover:bg-gray-100 text-lg px-8 py-6" asChild>
                  <a href={env.PHONE_LINK}>
                    <Phone className="mr-2 h-5 w-5" />
                    050-577-3388
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { label: "Happy Customers", value: "500+" },
                  { label: "Google Rating", value: "4.9★" },
                  { label: "Access Hours", value: "24/7" },
                  { label: "Starting Price", value: "AED 99" },
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

        {/* ========== 2. WHY CHOOSE US ========== */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Why Choose SafeStorage Dubai?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                6 reasons why we're Dubai's #1 rated storage facility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-dubai-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-dubai-gold" />
                      </div>
                      <div>
                        <span className="inline-block bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded mb-2">
                          {item.highlight}
                        </span>
                        <h3 className="text-lg font-semibold text-dubai-navy mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========== 3. STORAGE SERVICES ========== */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Storage Services in Dubai
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whatever you need to store, we have the perfect solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {storageServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <Link
                    key={index}
                    href={service.link}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-dubai-gold/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-dubai-navy rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-dubai-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-dubai-navy mb-2 group-hover:text-dubai-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <span className="text-dubai-gold font-medium text-sm flex items-center">
                      Learn More <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========== 4. PRICING SECTION ========== */}
        <section className="py-16 bg-white" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Storage Dubai Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing - Competitors hide this! Prices start from AED 99/month.
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
                      <span className="text-3xl font-bold text-dubai-gold">AED {plan.price}</span>
                      {plan.price !== "Get Quote" && <span className="text-muted-foreground">/month</span>}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm"><strong>Fits:</strong> {plan.fits}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm"><strong>Ideal:</strong> {plan.ideal}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Hassle-hassle-free pickup & delivery</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">Climate controlled</span>
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
          </div>
        </section>

        {/* ========== 5. HOW IT WORKS ========== */}
        <section className="py-16 bg-dubai-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Storage Dubai Works
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                4 simple steps to hassle-free storage
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {howItWorks.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-dubai-navy rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">
                  Start Now - Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ========== 6. WHO USES STORAGE ========== */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Who Uses Storage in Dubai?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join 500+ happy customers from all walks of life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {userGroups.map((group, index) => {
                const Icon = group.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-dubai-sand/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-dubai-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-dubai-navy mb-2">{group.title}</h3>
                    <p className="text-muted-foreground text-sm">{group.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========== 7. AREAS WE SERVE ========== */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Storage Pickup in All Dubai Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hassle-Hassle-hassle-free pickup & delivery from these locations (and anywhere else in Dubai!)
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full hover:border-dubai-gold hover:bg-dubai-sand/10 transition-all"
                >
                  <MapPin className="h-4 w-4 text-dubai-gold" />
                  <span className="text-dubai-navy font-medium">{area}</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Don't see your area? We still serve you!</p>
              <Button variant="outline" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call to Confirm Coverage
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ========== 8. TESTIMONIALS ========== */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5</span>
                <span className="text-muted-foreground">(500+ Google Reviews)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-dubai-navy">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <span className="bg-dubai-gold/10 text-dubai-gold text-xs font-medium px-2 py-1 rounded">
                      {testimonial.useCase}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 9. FAQ SECTION ========== */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
                Storage Dubai FAQs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about storage in Dubai
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg px-6 border border-gray-200"
                  >
                    <AccordionTrigger className="text-left hover:text-dubai-gold font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ========== 10. FINAL CTA ========== */}
        <section className="py-16 bg-dubai-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started with Storage Dubai?
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
                  Hassle-Free Pickup & Delivery
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

              {/* Address & Social Proof */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Dubai Investment Park 2, Dubai, UAE
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Trusted by 500+ customers | 4.9★ on Google | 7+ Years Serving Dubai
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
