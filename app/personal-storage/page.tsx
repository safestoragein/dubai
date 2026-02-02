import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ShieldCheck, Truck, Clock, Package, Headphones, Star, Users, Sofa, ArrowRight, Boxes, Calendar, Lock } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Personal Storage Dubai | Household & Home Storage Solutions | SafeStorage",
  description:
    "Affordable personal storage solutions in Dubai. Store your furniture, boxes, seasonal items & more with hassle-free pickup & delivery. Starting from AED 24/month. Call +971505773388.",
  keywords:
    "personal storage dubai, household storage, home storage dubai, furniture storage, moving storage, declutter storage, self storage dubai",
  openGraph: {
    title: "Personal Storage Dubai | SafeStorage",
    description: "Affordable personal storage solutions with hassle-free pickup & delivery. Store furniture, boxes, and household items from AED 24/month.",
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
    title: "Hassle-Free Pickup & Delivery",
    description: "We collect and deliver your items at no extra charge - completely hassle-free",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "24/7 security surveillance with climate-controlled facilities for your peace of mind",
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

export default function PersonalStoragePage() {
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
                <span className="text-white text-sm font-medium">Trusted by 50,000+ Customers Globally</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Personal Storage <span className="text-dubai-gold">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Affordable storage solutions for your home, furniture, and personal belongings.
              Starting from just <span className="text-dubai-gold font-bold">AED 24/month</span>.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8">
              Hassle-free pickup & delivery | No hidden fees | Cancel anytime
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
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">Hassle-Free Pickup</h3>
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
              Starting from Just AED 24/Month
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              No setup fees • Hassle-free pickup & delivery • Cancel anytime
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Security Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Hassle-Free</div>
                  <div className="text-white/80 text-sm">Pickup & Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">AED 24</div>
                  <div className="text-white/80 text-sm">Starting Price/Month</div>
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
    </div>
  )
}
