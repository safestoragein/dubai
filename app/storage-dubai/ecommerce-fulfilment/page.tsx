import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ShieldCheck, Truck, Clock, Package, Headphones, Star, Users, ArrowRight, Boxes, Zap } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "E-commerce Storage & Fulfilment Dubai",
  description:
    "E-commerce storage and fulfilment solutions in Dubai. Inventory storage, order fulfilment, and same-day pickup & delivery for online sellers. Call +971505773388.",
  keywords:
    "ecommerce storage dubai, fulfilment center dubai, inventory storage, order fulfilment dubai, online seller storage, warehouse storage dubai",
  openGraph: {
    title: "E-commerce Storage & Fulfilment Dubai | SafeStorage",
    description: "Complete e-commerce storage and fulfilment solutions. Scale your online business with flexible storage.",
    url: "https://safestorage.ae/storage-dubai/ecommerce-fulfilment",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/ecommerce-fulfilment",
  },
}

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Secure storage for your products with organized inventory tracking",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock surveillance and climate-controlled environment",
  },
  {
    icon: Truck,
    title: "Fast Pickup & Delivery",
    description: "Same-day pickup and delivery service for your orders",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Flexible space that grows with your business needs",
  },
  {
    icon: Boxes,
    title: "Bulk Storage",
    description: "Store large quantities of inventory with easy access",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your e-commerce needs",
  },
]

const benefits = [
  "No upfront warehouse investment required",
  "Pay only for the space you use",
  "Climate-controlled storage protects inventory",
  "Hassle-hassle-free pickup for order fulfilment",
  "Perfect for Amazon, Noon, and other marketplace sellers",
  "Flexible terms - scale up or down anytime",
]

export default function EcommerceFulfilmentPage() {
  return (
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
                <span className="text-white text-sm font-medium">Trusted by E-commerce Sellers</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              E-commerce Storage & <span className="text-dubai-gold">Fulfilment</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Flexible storage and fulfilment solutions for online sellers in Dubai. Scale your business
              without the overhead of a warehouse.
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              Perfect for Online Sellers
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Whether you sell on Amazon, Noon, Instagram, or your own website, we have the storage solution
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 flex items-start hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingBag className="w-6 h-6 text-dubai-gold mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              E-commerce Storage Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your online business smoothly
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

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-white/80 mb-8">
              Get flexible storage that grows with your business. Start today with no long-term commitments.
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

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">E-commerce Storage &amp; Fulfilment Solutions in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            Running an e-commerce business in Dubai requires fast, flexible, and reliable storage and fulfilment
            infrastructure. SafeStorage provides purpose-built e-commerce storage solutions that allow online
            sellers — from solo entrepreneurs to established brands — to store inventory, manage stock, and
            fulfil orders without the overhead of a traditional warehouse lease.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why E-commerce Sellers Choose SafeStorage</h3>
              <p className="text-gray-700 mb-3">
                Traditional warehouses in Dubai require long-term lease commitments, significant upfront capital,
                and fixed space regardless of seasonal demand fluctuations. SafeStorage eliminates all of these
                constraints. Our e-commerce storage model lets you pay for exactly the space you use each month,
                scale up during Ramadan, back-to-school, or Black Friday sales periods, and reduce again in quieter months.
              </p>
              <p className="text-gray-700">
                Our facility is climate-controlled year-round at 20–25°C, protecting electronics, cosmetics,
                food supplements, clothing, and other temperature-sensitive products from Dubai&apos;s extreme heat.
                All inventory is stored in secure, individual units with 24/7 CCTV monitoring and biometric access.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Order Fulfilment Services</h3>
              <p className="text-gray-700 mb-3">
                Beyond simple storage, SafeStorage supports e-commerce sellers with order fulfilment services.
                We can receive stock shipments directly at our facility, process pick-and-pack orders, and
                coordinate same-day or next-day delivery across Dubai and the UAE. This allows sellers on
                Amazon UAE, Noon, Carrefour Marketplace, and Shopify to offer faster delivery times without
                managing their own logistics team.
              </p>
              <p className="text-gray-700">
                Our dedicated e-commerce account managers understand the pressure of marketplace SLAs and
                will work with your team to ensure inventory is always available, orders are processed on time,
                and returns are handled efficiently.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Product Categories We Store for E-commerce Sellers</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Electronics and gadgets</li>
                <li>• Mobile phones and accessories</li>
                <li>• Computers and peripherals</li>
                <li>• Smart home devices</li>
              </ul>
              <ul className="space-y-1">
                <li>• Fashion and apparel</li>
                <li>• Shoes and bags</li>
                <li>• Beauty and cosmetics</li>
                <li>• Health supplements</li>
              </ul>
              <ul className="space-y-1">
                <li>• Home décor and furniture</li>
                <li>• Sports equipment</li>
                <li>• Baby products</li>
                <li>• Books and stationery</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Getting Started with E-commerce Storage in Dubai</h3>
            <p className="text-gray-700 mb-4">
              Starting your e-commerce storage arrangement with SafeStorage is straightforward. Contact our
              team with details about your inventory volume, product types, and fulfilment requirements. We
              will provide a tailored quote with transparent monthly pricing — no setup fees, no hidden charges.
            </p>
            <p className="text-gray-700">
              Most e-commerce sellers are operational within 24–48 hours of signing up. Our team handles
              the initial stock intake, organises your inventory in our system, and provides you with access
              to our simple online inventory management portal so you always know exactly what stock you have
              and where it is located.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
