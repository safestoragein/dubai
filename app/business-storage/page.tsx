import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, Truck, Clock, FileBox, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Storage Dubai | Secure Document & Inventory Storage | SafeStorage",
  description:
    "Professional business storage solutions in Dubai. Secure document archiving, inventory storage, and office equipment storage with pickup & delivery. Call +971505773388.",
  keywords:
    "business storage dubai, document storage, inventory storage, office storage, commercial storage dubai, secure business storage",
  openGraph: {
    title: "Business Storage Dubai | SafeStorage",
    description: "Professional business storage solutions with secure facilities and hassle-free pickup & delivery.",
    url: "https://safestorage.ae/business-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/business-storage",
  },
}

const features = [
  {
    icon: FileBox,
    title: "Document Archiving",
    description: "Secure storage for business records and important documents",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Round-the-clock surveillance and access control",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description: "We collect and deliver your items at your convenience",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Monthly contracts with no long-term commitments",
  },
  {
    icon: Building2,
    title: "Climate Controlled",
    description: "Temperature-regulated units to protect sensitive items",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your business needs",
  },
]

export default function BusinessStoragePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dubai-navy to-dubai-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business Storage <span className="text-dubai-gold">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Secure, flexible storage for your business documents, inventory, and equipment.
              Focus on growing your business while we handle the storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/get-quote">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage for Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across Dubai for secure and reliable storage solutions
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

      {/* CTA Section */}
      <section className="py-20 bg-dubai-sand/20">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Ready to Simplify Your Storage?
            </h2>
            <p className="text-gray-600 mb-8">
              Get a customized quote for your business storage needs. No obligations, no hidden fees.
            </p>
            <Button
              size="lg"
              className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-10 py-6"
              asChild
            >
              <Link href="/get-quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
