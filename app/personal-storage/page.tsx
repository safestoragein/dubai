import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ShieldCheck, Truck, Clock, Package, Headphones, Star, Users, Sofa, ArrowRight, Boxes, Calendar, Lock } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Personal Storage Dubai — Furniture & Boxes from 12.60 AED / sqft",
  description:
    "Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup from your door. Personal storage from 12.60 AED / sqft — no lorry, no hassle. Trusted by 500+ Dubai residents. Call +971505773388.",
  keywords:
    "personal household storage dubai, furniture storage home move dubai, moving boxes storage dubai, declutter home storage dubai, seasonal items storage dubai, apartment storage dubai, storage pickup from home dubai",
  openGraph: {
    title: "Personal Household Storage Dubai | Furniture & Boxes | SafeStorage",
    description: "Store household furniture and moving boxes with door-to-door pickup from your Dubai home. From 12.60 AED / sqft. Call +971505773388.",
    url: "https://safestorage.ae/personal-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/personal-storage",
  },
}

const features = [
  {
    icon: Home,
    title: "Home Decluttering",
    description: "Free up space at home by storing seasonal items, extra furniture, and belongings",
  },
  {
    icon: Truck,
    title: "Door-to-door Service",
    description: "We collect and deliver your items door-to-door",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "24/7 security surveillance with clean, secure facilities for your peace of mind",
  },
  {
    icon: Calendar,
    title: "Flexible Duration",
    description: "Store for as long as you need - no long-term commitments required",
  },
  {
    icon: Boxes,
    title: "Any Item, Any Size",
    description: "From boxes and documents to furniture and appliances - we store it all",
  },
  {
    icon: Headphones,
    title: "Easy Support",
    description: "Friendly customer service team ready to help you every step of the way",
  },
]

const useCases = [
  {
    title: "Moving & Relocation",
    description: "Store your belongings temporarily during home transitions or renovations",
    icon: Truck,
  },
  {
    title: "Downsizing",
    description: "Keep your cherished items safe when moving to a smaller space",
    icon: Home,
  },
  {
    title: "Student Storage",
    description: "Perfect for students during summer breaks or semester abroad programs",
    icon: Package,
  },
  {
    title: "Seasonal Items",
    description: "Store winter clothes, holiday decorations, and sports equipment until needed",
    icon: Calendar,
  },
]

const personalStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Household Storage Dubai',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup from your door. Personal storage from 12.60 AED / sqft.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/personal-storage',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Personal Storage',
    offers: { '@type': 'Offer', priceCurrency: 'AED', price: '12.60' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/personal-storage#webpage',
    name: 'Personal Household Storage Dubai | Furniture & Boxes from 12.60 AED / sqft',
    description: 'Store household furniture, seasonal items, and moving boxes in Dubai with door-to-door pickup. Personal storage from 12.60 AED / sqft.',
    url: 'https://safestorage.ae/personal-storage',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Personal Storage', item: 'https://safestorage.ae/personal-storage' },
    ],
  },
]

export default function PersonalStoragePage() {
  return (
    <>
    <SchemaScript schema={personalStorageSchemas} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dubai-navy to-dubai-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (6700+ Reviews Globally)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by 50,000+ Customers Globally</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Personal Storage <span className="text-dubai-gold">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Affordable storage solutions for your home, furniture, and personal belongings.
              Starting from just <span className="text-dubai-gold font-bold">12.60 AED / sqft</span> (VAT-inclusive).
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8">
              Door-to-Door service | No hidden fees | Cancel anytime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971505773388">Call: 050-577-3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage for Personal Storage?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dubai's most trusted personal storage solution with hassle-free service and unbeatable prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:border-dubai-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dubai-gold" />
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Perfect For Every Situation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're moving, downsizing, or just need extra space - we've got you covered
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-dubai-navy rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-7 h-7 text-dubai-gold" />
                </div>
                <h3 className="text-lg font-semibold text-dubai-navy mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Store your items in 3 simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">Get a Quote</h3>
                <p className="text-gray-600">
                  Tell us what you want to store and get an instant price estimate online
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">Door-to-door Pickup</h3>
                <p className="text-gray-600">
                  We'll collect your items from your doorstep at a time that suits you
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">Relax</h3>
                <p className="text-gray-600">
                  Your items are stored safely. Request delivery anytime you need them back
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pricing CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dubai-gold to-dubai-darkgold text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Starting from Just 12.60 AED / sqft
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              No setup fees • Door-to-Door service • Cancel anytime
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Security Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Door-to-Door</div>
                  <div className="text-white/80 text-sm">Pickup & Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">12.60 AED</div>
                  <div className="text-white/80 text-sm">Starting Price / sqft</div>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-dubai-navy hover:bg-dubai-midnight text-white text-lg px-10 py-6"
              asChild
            >
              <Link href="/get-quote" className="group">
                Get Your Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Free Up Space at Home?
            </h2>
            <p className="text-white/80 mb-8">
              Join 50,000+ global customers who trust SafeStorage Dubai. Get your personalized quote in just 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-10 py-6"
                asChild
              >
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100 text-lg px-10 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Personal Storage — Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What personal items can I store at SafeStorage Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai accepts a wide range of personal items for storage. You can store household furniture (sofas, beds, wardrobes, dining sets), home appliances (fridges, washing machines, dishwashers), seasonal clothing and winter wear, suitcases and travel bags, books and personal documents, electronics (TVs, computers, gaming equipment), sports equipment (bicycles, kayaks, paddleboards, gym equipment), artwork, rugs and soft furnishings, children&apos;s toys and baby gear, hobby materials, and sentimental items. Essentially, anything that could ordinarily be kept in a home can be stored with us. The items we cannot accept include food and grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items, as well as hazardous materials, flammable liquids, live animals, illegal items, and perishable food.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What is the minimum unit size available for personal storage?</h3>
              <p className="text-gray-700 leading-relaxed">The smallest personal storage option at SafeStorage is a locker or mini unit, which is approximately 25 sq ft — about the size of a large wardrobe. This is suitable for 10–15 boxes, a suitcase collection, bedding and soft items, or a small collection of personal belongings. It is ideal for students, individuals between homes for a short period, or anyone who simply needs to declutter a single room. If you are unsure which size is right for your belongings, call us on +971505773388 and we will advise based on your inventory list. Getting the size right from the start prevents unnecessary upgrades or wasted space.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How much does personal storage cost in Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Personal storage at SafeStorage starts from 12.60 AED / sqft (VAT-inclusive), whether you need a small locker for a student room or boxes, a medium unit for a 1–2 bedroom apartment&apos;s complete contents, or a large unit for a 3-bedroom apartment or villa. The price includes 24/7 security monitoring and basic insurance coverage up to AED 5,000. Door-to-Door pickup is included for addresses across Dubai. There are no setup fees, no hidden admin charges, and no long-term contracts required. You simply pay monthly and cancel with 30 days&apos; notice.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store seasonal clothing and winter wear in Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Storing seasonal clothing is one of the most common uses of personal storage in Dubai. Dubai apartments are often space-limited, and keeping out-of-season clothes, winter coats, ski wear, holiday decorations, and occasional-use items takes up valuable wardrobe and cupboard space. SafeStorage&apos;s clean, secure units are well suited to long-term clothing storage, and we recommend packing clothing in breathable garment bags or clean boxes rather than airtight plastic containers, to allow the fabric to maintain its natural condition.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How are valuables protected in personal storage?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage&apos;s facilities feature 24/7 CCTV surveillance covering all storage areas, access-controlled entry requiring ID verification, individually locked storage units that only you can access, and on-site security personnel during operating hours. All stored items receive basic insurance coverage up to AED 5,000 included in the monthly fee, and additional insurance can be arranged for higher-value items. We recommend declaring the value of significant items at intake, particularly electronics, artwork, and collectibles. For items of very high monetary value, we recommend consulting with a specialist insurance broker for dedicated transit and storage coverage beyond our standard inclusion.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store hobby equipment like bicycles and kayaks?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Sports and hobby equipment is a popular category of personal storage at SafeStorage. We store bicycles, kayaks, paddleboards, surfboards, ski equipment, camping gear, diving equipment, golf clubs, fishing equipment, and other sporting goods. Large items like kayaks and paddleboards require sufficient unit space and are stored on appropriate supports to prevent deformation. For bicycles, we recommend deflating tyres slightly if storing for extended periods to prevent tube stretching. Our clean, secure indoor units keep neoprene, rubbers, and composite materials in diving and water sports equipment away from dust and outdoor elements.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I access my stored personal items when I need them?</h3>
              <p className="text-gray-700 leading-relaxed">You can access your storage unit in person during business hours (8 AM to 8 PM, 7 days a week) by visiting the facility with your ID and booking reference. For delivery of stored items to your home, contact us by phone or WhatsApp and request delivery — we typically deliver within 24–48 hours for standard requests. For urgent same-day delivery, requests must be made before 12 PM. You can retrieve all of your items at once, or request specific items for partial delivery — for example, if you stored a bicycle for the season and need it back without retrieving everything else. Delivery fees apply for home delivery and vary based on item size and location.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I book short-term personal storage for a few weeks?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. SafeStorage&apos;s minimum storage period is one month, and we offer month-to-month contracts with no long-term commitment. For very short-term needs (a few weeks during a move or renovation), monthly billing is the most flexible option — you pay for the first month, and if you are done within the month, you can retrieve your items and close the account at any time. Many customers find that their short-term storage need extends naturally to 2–3 months, and the month-to-month structure accommodates this without any penalty or administrative complexity. For storage needs shorter than one week, call us to discuss daily storage options for very specific situations.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How secure are personal storage units at SafeStorage?</h3>
              <p className="text-gray-700 leading-relaxed">Security at SafeStorage Dubai operates on multiple levels. Facilities are monitored by 24/7 CCTV camera systems covering all access points, corridors, and storage areas. Entry to the facility requires identity verification, and each individual storage unit has its own padlock to which only you hold the key. Access records are maintained and available to customers on request. Our facilities are fully enclosed structures with controlled perimeter access — not open warehouses. On-site staff are present during business hours. We do not publicise the exact facility addresses publicly, adding an additional layer of security. For peace of mind, all stored items are covered by basic insurance included in the monthly fee.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What about vintage or collectible items — are they safe?</h3>
              <p className="text-gray-700 leading-relaxed">Vintage items, collectibles, and valuable personal effects are stored in the same clean, secure indoor units that SafeStorage provides as standard. Vintage clothing, vinyl records, comic books, stamps, coins, trading cards, vintage electronics, and similar collectibles are kept dust-protected and away from outdoor elements. For particularly high-value collections, we recommend declaring the items and their value at intake, and considering additional specialist insurance coverage. We also offer white-glove handling for fragile or irreplaceable items on request.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Do you store sports equipment such as bikes and gym gear?</h3>
              <p className="text-gray-700 leading-relaxed">Sports equipment storage is one of our most requested personal storage categories. Dubai residents often accumulate significant sports gear — bicycles, treadmills, weights, yoga mats, tennis rackets, golf clubs, diving gear, and more — that does not have a permanent home in smaller apartments. SafeStorage provides a practical solution by offering flexible monthly storage for sports items of any size. Gym equipment can be heavy and bulky, so we manage the heavy lifting on pickup and delivery. Bicycles are stored securely, ideally after a basic clean, with tyres slightly deflated for long-term storage. All sports equipment is kept in our clean, secure indoor units, protected from dust and outdoor elements.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Do you store jewellery, ornaments, or small valuables?</h3>
              <p className="text-gray-700 leading-relaxed">No. For security reasons, SafeStorage does not store ornaments, jewellery, cash, or similar small high-value items — these are best kept in a bank safe deposit box for maximum security. Our prohibited-items list also includes food and grocery items, liquids, detergents, cosmetics, medicines, and masala or spice items. If you are uncertain whether a specific item can be stored, call us on +971505773388 before your pickup appointment and our team will advise.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I bring new items to storage after the initial pickup?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. Adding items after your initial storage is straightforward. For small items you can transport yourself, simply visit the facility during business hours with your ID and add them to your unit directly. For larger items requiring vehicle collection, contact us to arrange a secondary pickup. If you are adding a significant volume that might exceed your current unit capacity, let us know and we can advise on whether a unit upgrade is needed. There is no charge for adding items within your existing unit size, and no administrative fee for accessing your unit to add new belongings. We recommend updating your personal inventory list each time you add items so you always have an accurate record of what is in storage.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What personal items are prohibited from storage?</h3>
              <p className="text-gray-700 leading-relaxed">Please note we do not store the following items: food or grocery items, liquids, detergents, cosmetics, ornaments or jewellery, medicines, and masala or spice items. Other items prohibited from SafeStorage units include hazardous and flammable materials (petrol, paint, gas canisters, solvents), weapons and ammunition, illegal substances or counterfeit goods, live animals or plants, perishable food, and items that emit strong odours that may affect adjacent units. Human remains, biological materials, and radioactive items are also prohibited. Items that are prohibited by UAE law cannot be stored regardless of intent. If you are uncertain whether a specific item is permitted, call us before your pickup appointment and our team will advise. The vast majority of household personal items are acceptable for storage with no issues.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I get started with personal storage at SafeStorage Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">Getting started is simple and takes just a few minutes. Call or WhatsApp +971505773388 with a basic list of what you want to store — even an approximate list is fine. Our team will recommend an appropriate unit size, provide a clear monthly price, and schedule a pickup date that suits your schedule. We typically collect within 3–5 days of booking, or sooner for urgent situations. On collection day, our team arrives at your address with the necessary vehicle, protective materials, and paperwork. We photograph items, sign a condition report with you, and transport everything to our facility. You receive your unit access details and invoice that day. From start to storage, the process typically takes less than a week from first contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Personal &amp; Household Storage in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage offers personal and household storage solutions for Dubai residents who need extra space
            at home without the cost and inconvenience of moving to a larger apartment. Whether you are
            decluttering, renovating, moving between apartments, or simply need to store seasonal items,
            our flexible personal storage units give you the space you need with the convenience of free
            doorstep pickup and delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Household Storage During Apartment Moves</h3>
              <p className="text-gray-700 mb-3">
                Moving apartments in Dubai often involves a gap between lease end and new lease start, leaving
                residents with nowhere to store their furniture and belongings. SafeStorage bridges this gap
                seamlessly. Our team collects your household items from your old apartment, stores everything
                in a clean, secure unit, and delivers it all back to your new home when you are
                ready to move in.
              </p>
              <p className="text-gray-700">
                This service removes the stress of coordinating move-in and move-out dates, eliminates the
                need to store items with friends or family, and prevents the costly mistake of having to
                buy new furniture because you could not store the old pieces safely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Seasonal &amp; Long-Term Personal Storage</h3>
              <p className="text-gray-700 mb-3">
                Dubai apartments and villas often lack sufficient storage for items that are only needed
                part of the year — holiday decorations, winter clothing, summer sports equipment, children&apos;s
                toys from previous growth stages, and sentimental items that are not used day-to-day but
                are too valuable to discard.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s personal storage plans let you store as little as a few boxes for a monthly
                fee that is far cheaper than upgrading to a larger apartment. Items are accessible whenever
                you need them — call us and we will deliver within 24–48 hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">What Dubai Residents Typically Store</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Sofas and armchairs</li>
                <li>• Beds and mattresses</li>
                <li>• Dining tables and chairs</li>
                <li>• Wardrobes and cabinets</li>
                <li>• Appliances (fridges, washing machines)</li>
              </ul>
              <ul className="space-y-1">
                <li>• Clothing and seasonal wear</li>
                <li>• Suitcases and travel bags</li>
                <li>• Books and personal items</li>
                <li>• Holiday decorations</li>
                <li>• Children&apos;s toys and baby gear</li>
              </ul>
              <ul className="space-y-1">
                <li>• Sports equipment and bicycles</li>
                <li>• Electronics and gadgets</li>
                <li>• Artwork and sentimental items</li>
                <li>• Rugs and soft furnishings</li>
                <li>• Garden and outdoor furniture</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Personal Storage Pricing</h3>
            <p className="text-gray-700 mb-4">
              Personal storage at SafeStorage starts from 12.60 AED / sqft (VAT-inclusive) across all unit sizes.
              Small units (25–50 sq ft) are suitable for 10–20 boxes or a small collection of household items,
              medium units (50–100 sq ft) accommodate a 1–2 bedroom apartment&apos;s contents, and large units
              (100–200 sq ft) can hold a full 3-bedroom apartment.
            </p>
            <p className="text-gray-700">
              All personal storage plans include 24/7 security, free insurance up to AED 5,000,
              door-to-door pickup from your Dubai address, and delivery back to you on demand. No long-term contracts —
              pay monthly and cancel whenever you are ready.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
