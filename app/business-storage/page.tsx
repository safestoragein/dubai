import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, Truck, Clock, FileBox, Headphones, Star, Users, Award, ArrowRight } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "Business Storage Dubai — Inventory & Office Storage",
  description:
    "Business storage solutions for Dubai companies — store excess inventory, office equipment, trade show materials, and retail stock. Flexible monthly contracts, pickup & delivery on demand. Call +971505773388.",
  keywords:
    "business storage dubai companies, inventory storage dubai warehouse alternative, office equipment storage dubai, commercial storage dubai SME, stock storage dubai retail, trade show storage dubai, b2b storage dubai",
  openGraph: {
    title: "Business Storage Dubai — Inventory & Office Storage",
    description: "Flexible storage for Dubai businesses — inventory, office equipment & stock. Monthly contracts, on-demand delivery. Call +971505773388.",
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
    title: "Hassle-Free Pickup & Delivery",
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

const businessStorageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Storage Dubai',
    description: 'Business storage solutions for Dubai companies — store excess inventory, office equipment, trade show materials, and retail stock. Flexible monthly contracts, pickup & delivery on demand.',
    provider: { '@id': 'https://safestorage.ae/#organization' },
    url: 'https://safestorage.ae/business-storage',
    areaServed: { '@type': 'City', name: 'Dubai' },
    serviceType: 'Business Storage',
    offers: { '@type': 'AggregateOffer', priceCurrency: 'AED', lowPrice: '599', highPrice: '4999' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://safestorage.ae/business-storage#webpage',
    name: 'Business Storage Dubai | Inventory & Office Storage for Companies',
    description: 'Flexible storage for Dubai businesses — inventory, office equipment & stock. Monthly contracts, on-demand delivery.',
    url: 'https://safestorage.ae/business-storage',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'Business Storage', item: 'https://safestorage.ae/business-storage' },
    ],
  },
]

export default function BusinessStoragePage() {
  return (
    <>
    <SchemaScript schema={businessStorageSchemas} />
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
                <span className="text-white text-sm font-medium">Trusted by 500+ Corporate Clients Globally</span>
              </div>
            </div>
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

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Business Storage?
            </h2>
            <p className="text-white/80 mb-8">
              Join 500+ global businesses who trust SafeStorage Dubai. Get a customized quote in just 2 minutes.
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
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Business Storage Solutions for Dubai Companies</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage provides flexible, secure business storage for companies across Dubai — from startups
            and SMEs to large corporations. Our commercial storage solutions help businesses reduce overhead
            costs by eliminating the need for expensive warehouse space while keeping inventory, equipment,
            and documents accessible on demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Office Clearance &amp; Furniture Storage</h3>
              <p className="text-gray-700 mb-3">
                When businesses in Dubai downsize, relocate, or renovate their offices, they need a fast and
                reliable solution for surplus furniture, equipment, and fixtures. SafeStorage provides
                same-day office clearance pickups, with our team handling all the dismantling, packing, and
                transportation. Items are stored in climate-controlled units and can be retrieved when
                the new office is ready.
              </p>
              <p className="text-gray-700">
                Our service is particularly popular with businesses in Business Bay, DIFC, Downtown Dubai,
                and Dubai Internet City where office space is expensive and storing excess assets on-site
                is not practical.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Retail Inventory &amp; Seasonal Stock Storage</h3>
              <p className="text-gray-700 mb-3">
                Retailers in Dubai face significant demand fluctuations — peak periods during Ramadan, Dubai
                Shopping Festival, and the holiday season require substantial stock increases, while slower
                periods leave businesses with excess inventory taking up expensive retail floor space.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s scalable storage model lets retailers store overflow stock in our facility
                during quiet periods and scale back when demand picks up. Our same-day delivery service
                ensures your retail location can be restocked within hours whenever needed.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Business Storage Plans &amp; Pricing</h3>
            <p className="text-gray-700 mb-4">
              Business storage plans at SafeStorage start from AED 599/month for medium units (50–100 sq ft),
              suitable for a small office clearance or modest inventory. Larger units (100–300+ sq ft) are
              available for full office contents, warehouse overflow, or bulk retail stock.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>No minimum contract:</strong> Month-to-month flexibility allows businesses to scale storage up or down</li>
              <li>• <strong>Business account manager:</strong> Dedicated point of contact for scheduling pickups, deliveries, and additional requirements</li>
              <li>• <strong>Bulk discounts:</strong> Multi-unit bookings and annual prepayments receive preferential rates</li>
              <li>• <strong>Document archiving:</strong> Add-on service for businesses needing compliant records storage alongside physical inventory</li>
              <li>• <strong>Free pickup &amp; delivery:</strong> All business plans include complimentary pickup and delivery across Dubai</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Industries We Serve in Dubai</h3>
            <div className="grid md:grid-cols-3 gap-3 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Retail and fashion brands</li>
                <li>• E-commerce and online sellers</li>
                <li>• Food and beverage distributors</li>
              </ul>
              <ul className="space-y-1">
                <li>• Technology and electronics companies</li>
                <li>• Healthcare and pharmaceutical</li>
                <li>• Construction and engineering</li>
              </ul>
              <ul className="space-y-1">
                <li>• Event management companies</li>
                <li>• Real estate and property management</li>
                <li>• Media and production agencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
