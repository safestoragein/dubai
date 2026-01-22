import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, ShieldCheck, Truck, Clock, VideoIcon, Headphones, Star, Users, ArrowRight, Lock } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Vehicle Storage Dubai | Secure Car & Motorcycle Storage | SafeStorage",
  description:
    "Secure vehicle storage in Dubai for cars, motorcycles, and classic vehicles. Climate-controlled, 24/7 security with CCTV monitoring. Call +971505773388 for quote.",
  keywords:
    "vehicle storage dubai, car storage dubai, motorcycle storage, classic car storage, secure vehicle storage dubai, indoor car storage",
  openGraph: {
    title: "Vehicle Storage Dubai | SafeStorage",
    description: "Secure vehicle storage with climate control and 24/7 security. Perfect for cars, motorcycles, and classic vehicles.",
    url: "https://safestorage.ae/storage-dubai/vehicle-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/vehicle-storage",
  },
}

const features = [
  {
    icon: Lock,
    title: "Indoor Secure Parking",
    description: "Fully enclosed climate-controlled facility protecting from Dubai heat",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security & CCTV",
    description: "Round-the-clock surveillance and biometric access control",
  },
  {
    icon: VideoIcon,
    title: "Video Monitoring",
    description: "Live monitoring and recorded footage for complete peace of mind",
  },
  {
    icon: Clock,
    title: "Flexible Access",
    description: "Access your vehicle anytime with prior notification",
  },
  {
    icon: Car,
    title: "Battery Maintenance",
    description: "Optional battery maintenance service for long-term storage",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal consultant for all your vehicle storage needs",
  },
]

const vehicleTypes = [
  "Luxury & Sports Cars",
  "Classic & Vintage Vehicles",
  "Motorcycles & Bikes",
  "SUVs & 4x4s",
  "Seasonal Vehicles",
  "Fleet Vehicles",
]

export default function VehicleStoragePage() {
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
                <span className="text-white text-sm font-medium">4.9/5 (487+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by Car Enthusiasts</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Vehicle Storage <span className="text-dubai-gold">Dubai</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Secure, climate-controlled indoor storage for your cars, motorcycles, and classic vehicles.
              Protect your investment from Dubai's extreme weather.
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

      {/* Vehicle Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              We Store All Vehicle Types
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Whether it's a daily driver, luxury car, or vintage motorcycle, we have the perfect storage solution
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {vehicleTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <Car className="w-10 h-10 text-dubai-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-dubai-navy">{type}</h3>
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
              Why Choose SafeStorage for Vehicles?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium facilities designed specifically to protect your valuable vehicles
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
              Ready to Store Your Vehicle Safely?
            </h2>
            <p className="text-white/80 mb-8">
              Get a customized quote for your vehicle storage needs. Flexible terms and premium security.
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
