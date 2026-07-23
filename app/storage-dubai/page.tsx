import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Star, Shield, Clock, Truck, Phone, MessageCircle,
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
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Storage Dubai — Personal, Business & Vehicle Storage",
  description: "One storage provider for all your Dubai needs: personal furniture, business inventory, vehicle storage & document archival. 4.9★ rated by 500+ customers. Hassle-free pickup, transparent pricing. Call +971505773388.",
  keywords: "all in one storage dubai, personal and business storage dubai, vehicle furniture storage dubai, storage provider dubai, full service storage dubai, pickup and delivery storage dubai, 4.9 rated storage dubai",
  openGraph: {
    title: "Storage Dubai | #1 Rated Storage Facility | From 12.60 AED / sqft",
    description: "Best storage in Dubai from 12.60 AED / sqft. Secure units, 24/7 access, Hassle-free pickup & delivery. 4.9★ rated by 500+ customers.",
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
    title: "Storage Dubai | #1 Rated | From 12.60 AED / sqft",
    description: "Best storage in Dubai. Secure units, Hassle-free pickup. 500+ happy customers.",
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
    description: "We collect from your location and deliver back when needed - hassle-free door-to-door, with no van rental or heavy lifting required on your part.",
    highlight: "Door-to-Door Service",
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
    description: "Secure, dedicated units perfect for protecting furniture. Ideal for relocations and staging.",
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
    description: "Covered indoor options for cars, motorcycles, boats, and classic vehicles. Regular checks available.",
    link: "/services",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Storage",
    description: "Fulfillment-ready storage with receiving, shelving, and pick-pack services. Scale with your business growth.",
    link: "/business-storage",
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
    description: "Your belongings are transported to our secure facility with 24/7 security and stored in your personal unit.",
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
    description: "Art, antiques, sports equipment, wine collections. Secure, dedicated protection for valuable and sensitive items.",
  },
]

// Dubai Areas
const areaLinks: Record<string, string> = {
  "Dubai Marina": "/locations/dubai-marina",
  "Business Bay": "/locations/business-bay",
  "Jumeirah": "/locations/jumeirah",
  "Dubai Investment Park": "/locations/dubai-investment-park",
  "JLT": "/locations",
  "Downtown Dubai": "/locations",
  "Palm Jumeirah": "/locations",
  "Al Barsha": "/locations",
  "JVC": "/locations",
  "Arabian Ranches": "/locations",
  "Dubai Hills": "/locations",
  "Mirdif": "/locations",
  "Deira": "/locations",
  "Al Quoz": "/locations",
  "Silicon Oasis": "/locations",
  "Sports City": "/locations",
  "Motor City": "/locations",
}
const areas = Object.keys(areaLinks)

// Testimonials Data
const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai Marina",
    rating: 5,
    useCase: "Villa Renovation",
    text: "Stored our entire villa contents for 4 months during renovation. The team picked up everything, stored it safely in a secure unit, and delivered it all back in perfect condition. The coordinator Ahmed kept us updated throughout. Couldn't be happier!",
  },
  {
    name: "Sarah Mitchell",
    location: "Business Bay",
    rating: 5,
    useCase: "Expat Relocation",
    text: "Moving back to UK temporarily and needed to store everything. SafeStorage made it so easy - they packed, collected, and now I have peace of mind knowing my furniture is in secure storage. Will definitely use again when I return.",
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
    text: "I was worried about storing my antique furniture. SafeStorage wrapped and protected every piece and kept it dust-free. After 6 months, my pieces came back exactly as I left them. The insurance coverage gave me extra peace of mind.",
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
    answer: "Storage in Dubai at SafeStorage starts from just 12.60 AED / sqft (VAT-inclusive). We offer flexible pricing based on your specific needs - from small boxes to full villa contents. All prices include security, and hassle-free pickup & delivery. Contact us at 050-577-3388 for a personalized quote.",
  },
  {
    question: "Do you pick up items from my location?",
    answer: "Yes! SafeStorage provides hassle-free pickup from anywhere in Dubai - your home, office, or any location. Our professional team arrives with packing materials, carefully loads your items, and transports them to our facility. When you need them back, we deliver to your door. This service is included in our packages.",
  },
  {
    question: "What size storage unit do I need?",
    answer: "Here's a quick guide: Small (25-50 sq ft) - 10-20 boxes, studio apartment items. Medium (75-120 sq ft) - 1-2 bedroom apartment contents. Large (150-300 sq ft) - 3+ bedroom villa or business inventory. Not sure? Our consultants offer free assessments and recommend the perfect size for your items. Call 050-577-3388.",
  },
  {
    question: "Can I access my storage unit at any time?",
    answer: "Standard access hours are Monday-Saturday 8AM-8PM and Sunday 10AM-6PM. Business customers can arrange extended hours or 24/7 access packages. You can also request delivery of specific items to your location at any time - we'll bring what you need to you.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "SafeStorage Dubai offers flexible month-to-month contracts with just 1-month minimum. No long-term commitment required! You can extend as needed or cancel with 30 days notice. We also offer a wide range of discounts on prepaid plans — the longer you store, the more you save. Contact us for the best available rate.",
  },
  {
    question: "Are my stored items insured?",
    answer: "Yes! Every storage unit includes FREE insurance coverage up to AED 5,000. This covers fire, theft, and natural disasters. For valuable items, we offer additional comprehensive coverage up to AED 100,000. Our team helps you choose the right protection for your belongings.",
  },
  {
    question: "What items cannot be stored?",
    answer: "Please note we do not store: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. For safety, we also cannot store hazardous materials and chemicals, flammable substances (petrol, paint, aerosols), perishable food, live plants or animals, firearms and explosives, and illegal items. Everything else - furniture, electronics, documents, vehicles, sports equipment - is welcome!",
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
    question: "Where is your storage facility located?",
    answer: "Our main facility is in Dubai Investment Park 2, strategically located with easy access from all Dubai areas. But location doesn't matter much - we provide hassle-free pickup from YOUR location (Dubai Marina, Business Bay, JLT, Downtown, wherever you are) and delivery back when needed!",
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

const storageDubaiSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storage Dubai — All-In-One Personal, Business & Vehicle Storage',
    description: 'One storage provider for all your Dubai needs: personal furniture, business inventory, vehicle storage & document archival. Hassle-free pickup, transparent pricing.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/storage-dubai',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Self Storage',
    offers: { '@type': 'Offer', priceCurrency: 'AED', price: '12.60', description: 'Starts from 12.60 AED / sqft (VAT-inclusive)' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/storage-dubai#webpage',
    name: 'Storage Dubai — All-In-One: Personal, Business & Vehicle Storage',
    description: 'One storage provider for all your Dubai needs: personal furniture, business inventory, vehicle storage & document archival.',
    url: 'https://safestorage.ae/storage-dubai',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Storage Dubai', item: 'https://safestorage.ae/storage-dubai' },
    ],
  },
]

export default function StorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={storageDubaiSchemas} />
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
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Storage Dubai
                <span className="block text-dubai-gold mt-2">Secure • Affordable • Hassle-Free</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Hassle-free pickup & delivery • From 12.60 AED / sqft • 24/7 access • Secure units
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
                  { label: "Starting Price", value: "12.60 AED / sqft" },
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
                Transparent pricing - Competitors hide this! Prices start from 12.60 AED / sqft.
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
                Hassle-free pickup & delivery from these locations (and anywhere else in Dubai!)
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={areaLinks[area] || "/locations"}
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
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow">
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
                  Building 23, Warehouse 5, DIP-1, Dubai, UAE
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Trusted by 500+ customers | 4.9★ on Google | 7+ Years Serving Dubai
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Static rich-text content for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-6">All-In-One Storage in Dubai — Personal, Business &amp; Vehicle</h2>
            <p className="text-lg text-gray-700 mb-6">
              SafeStorage Dubai provides comprehensive storage solutions covering every personal, household,
              commercial, and vehicular storage need in one place. Rather than dealing with multiple providers
              for different categories of items, SafeStorage customers can consolidate all their storage
              requirements under a single account, with one monthly invoice and one dedicated consultant.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Dubai Residents Choose SafeStorage</h3>
                <p className="text-gray-700 mb-3">
                  Dubai&apos;s combination of extreme heat, high rental costs, and a transient expat population
                  creates unique storage demands that traditional self-service facilities are poorly equipped
                  to meet. SafeStorage was built specifically for Dubai — addressing the city&apos;s specific
                  challenges with secure, dedicated units, hassle-free city-wide pickup and delivery, flexible
                  month-to-month contracts, and a hassle-free service model.
                </p>
                <p className="text-gray-700">
                  Our most popular services are household storage during apartment moves and renovations,
                  business storage for office clearances and inventory management, and expat storage for
                  residents who need to keep belongings safely in Dubai while they travel or relocate.
                  All services include the same security and insurance standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Storage Costs in Dubai</h3>
                <p className="text-gray-700 mb-3">
                  Storage in Dubai starts from 12.60 AED / sqft (VAT-inclusive) — whether you need a small
                  personal unit (25–50 sq ft), an extra-large unit (200+ sq ft) for full villa contents or
                  commercial inventory, or vehicle storage for standard cars and motorcycles.
                </p>
                <p className="text-gray-700">
                  All SafeStorage plans include 24/7 security, free insurance up to AED 5,000,
                  and hassle-free pickup and delivery. There are no setup fees, no admin charges, and no hidden costs.
                  Long-term customers benefit from a wide range of discounts — the longer you store, the more
                  you save. Contact us for a personalised quote based on exactly what you need to store.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Areas Covered by SafeStorage Dubai</h3>
              <p className="text-gray-700 mb-4">
                Our hassle-free pickup and delivery service covers every area of Dubai. Key service zones include:
              </p>
              <div className="grid md:grid-cols-4 gap-2 text-gray-700 text-sm">
                <ul className="space-y-1"><li>• Dubai Marina</li><li>• JBR</li><li>• Palm Jumeirah</li><li>• JLT</li><li>• Media City</li></ul>
                <ul className="space-y-1"><li>• Business Bay</li><li>• Downtown Dubai</li><li>• DIFC</li><li>• Trade Centre</li><li>• Sheikh Zayed Rd</li></ul>
                <ul className="space-y-1"><li>• Jumeirah 1, 2, 3</li><li>• Umm Suqeim</li><li>• Al Safa</li><li>• Al Quoz</li><li>• Bur Dubai</li></ul>
                <ul className="space-y-1"><li>• Dubai Investment Park</li><li>• Motor City</li><li>• Sports City</li><li>• JVC</li><li>• Mirdif</li></ul>
              </div>
            </div>
          </div>
        </section>

        {/* Extended Guide Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Storage in Dubai — Everything You Need to Know</h2>
            <p className="text-lg text-gray-700 mb-8">
              Dubai is one of the most storage-intensive cities in the world. High property prices mean residents and businesses operate with minimal on-site storage space. A transient, highly mobile expat population regularly needs to store belongings between apartments, during extended travel, or when relocating. Extreme summer temperatures make unprotected storage genuinely damaging to many common household and commercial items. And a thriving e-commerce and retail sector creates constant demand for flexible inventory storage. SafeStorage was purpose-built to meet all of these needs in one place, with a service model that eliminates the friction of traditional self-storage.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Types of Storage Available in Dubai</h3>
                <p className="text-gray-700 mb-4">
                  Dubai&apos;s storage market has evolved significantly over the past decade. The traditional model of self-service storage — where customers rent a roll-up door unit and carry boxes in themselves — still exists but has been largely superseded by the full-service model pioneered by SafeStorage. Full-service storage includes hassle-free pickup from your location, professional handling and packing, secure transportation, and delivery back to your door when needed. This model removes the need for customers to hire vans, take time off work, or do any heavy lifting.
                </p>
                <p className="text-gray-700">
                  Within full-service storage, SafeStorage offers personal household storage for furniture, seasonal items, and apartment contents; business storage for office furniture, inventory, and equipment; document archival storage for business records; vehicle storage for cars, motorcycles, and boats; and e-commerce fulfilment storage for online sellers. All service types are available under a single account with one monthly invoice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A2463] mb-3">How to Choose the Right Storage Unit Size</h3>
                <p className="text-gray-700 mb-4">
                  Choosing the right unit size is the most important decision when setting up a storage arrangement. Too small and you risk damaging items by overpacking the unit; too large and you pay for space you don&apos;t need. SafeStorage&apos;s team assists every new customer with a size assessment based on a detailed inventory of items to be stored.
                </p>
                <p className="text-gray-700">
                  As a general guide: a small unit (25–50 sq ft) accommodates a studio apartment worth of items or 10–20 boxes of smaller belongings. A medium unit (75–120 sq ft) fits the contents of a 1–2 bedroom apartment. A large unit (150–200 sq ft) accommodates a 3-bedroom apartment or substantial office contents. Extra-large units (200–400+ sq ft) are suitable for villa contents, large business inventory, or multiple rooms of furniture. When in doubt, our consultants are available at +971505773388 for a free assessment.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-10">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">What to Expect from the SafeStorage Process</h3>
              <p className="text-gray-700 mb-4">
                The SafeStorage experience begins with a free quote. Contact our team by phone, WhatsApp, or through our online quote form with details of what you need to store, your location, and your preferred timeframe. We will provide a transparent quote with no hidden fees within a few hours. There are no deposits required, no minimum contract, and no administrative charges.
              </p>
              <p className="text-gray-700 mb-4">
                On pickup day, our team arrives at your location with all necessary packing materials — boxes, bubble wrap, furniture covers, mattress bags, and packing tape. We photograph all items before loading for your records. Large furniture is dismantled where appropriate and carefully padded for transit. Electronics are wrapped and packed in purpose-appropriate containers. Once everything is loaded, you receive a detailed packing list and your items are transported to our secure facility.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-10">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Pricing Guide — Dubai 2025</h3>
              <p className="text-gray-700 mb-4">
                Storage prices in Dubai vary significantly depending on the provider, unit size, location, and included services. As a reference point for the Dubai market: basic self-service storage (no pickup) ranges from AED 150–400/month for small units. Full-service storage with hassle-free pickup and delivery — the SafeStorage model — starts from 12.60 AED / sqft (VAT-inclusive), whether for small personal units, large commercial units, or vehicle storage.
              </p>
              <p className="text-gray-700">
                When comparing storage prices in Dubai, always check what is included. Many providers advertise low base rates but charge separately for access, pickup, delivery, insurance, and administration. SafeStorage&apos;s pricing is fully inclusive — the monthly rate covers 24/7 security, free insurance up to AED 5,000, and hassle-free pickup and delivery. There are no hidden charges. Call +971505773388 for a personalised quote based on your specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">Security Standards at SafeStorage Dubai</h3>
              <p className="text-gray-700">
                Individual storage units are secured with high-security locks and monitored by dedicated unit-level sensors. Fire detection and automated suppression systems protect against fire risk. The facility perimeter is secured with vehicle barriers and monitored fencing. On-site security staff conduct regular patrols throughout operating hours. All security incidents are logged and reported to account holders immediately. For business clients storing high-value inventory, additional security measures including dual-factor authentication and dedicated CCTV coverage can be arranged.
              </p>
            </div>
          </div>
        </section>

        {/* Additional FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0A2463] mb-8">More Storage Dubai Questions Answered</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-[#0A2463] mb-3">How does SafeStorage compare to other storage companies in Dubai?</h3>
                <p className="text-gray-700">SafeStorage differentiates on two key dimensions: service model and price transparency. Unlike traditional self-service storage, we collect from your location and deliver back — you never need to hire a van or do any heavy lifting. And our pricing is fully inclusive with no hidden charges — what you see in the quote is what you pay each month, with no surprise add-ons for access, insurance, or administration.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-[#0A2463] mb-3">Can I store furniture in Dubai storage units long-term?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-[#0A2463] mb-3">How do I get a quote for storage in Dubai?</h3>
                <p className="text-gray-700">Getting a storage quote from SafeStorage takes less than 5 minutes. You can use our online quote form at safestorage.ae/get-quote, call our team directly at +971505773388, or send a WhatsApp message with a brief description of what you need to store and your Dubai location. For comprehensive household or business storage, our team will ask for a detailed list (or photos) of items so we can recommend the right unit size and provide an accurate monthly price. Quotes are provided free of charge with no obligation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-[#0A2463] mb-3">Does SafeStorage serve all areas of Dubai?</h3>
                <p className="text-gray-700">Yes. Our hassle-free pickup and delivery service covers all Dubai areas including Dubai Marina, JBR, Palm Jumeirah, JLT, Business Bay, Downtown Dubai, DIFC, Jumeirah, Al Barsha, Al Quoz, JVC, Arabian Ranches, Dubai Hills, Mirdif, Deira, Bur Dubai, Dubai Silicon Oasis, Sports City, Motor City, Dubai Investment Park, Al Furjan, Damac Hills, Tilal Al Ghaf, Dubai South, and all other communities. If you are unsure about coverage in your specific area, call us at +971505773388 and we will confirm within minutes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
