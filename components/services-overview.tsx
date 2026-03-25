import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    emoji: "🏠",
    title: "Personal & Household Storage",
    slug: "/personal-storage",
    body: "Moving to a new apartment? Renovating your villa? Or simply need more space at home? Our personal storage units keep your furniture, clothing, electronics, and seasonal items safe in climate-controlled facilities across Dubai. Units start from 25 sq ft — perfect for a studio apartment's worth of belongings — up to 200+ sq ft for an entire villa's contents.",
    popular: "Families during villa renovations, expats relocating between areas, couples downsizing apartments.",
    color: "#0A2463",
  },
  {
    emoji: "💼",
    title: "Business & Commercial Storage",
    slug: "/business-storage",
    body: "Free up your office space without losing access to important inventory, documents, or equipment. Our business storage solutions include dedicated units with flexible terms that scale with your needs. No long-term contracts — store month-to-month as your business grows. 24/7 access means you can restock or retrieve inventory on your schedule.",
    popular: "E-commerce sellers, startups, law firms, accounting practices, retail businesses with seasonal stock.",
    color: "#1a4a8a",
  },
  {
    emoji: "🚗",
    title: "Vehicle & Specialty Storage",
    slug: "/storage-dubai/vehicle-storage",
    body: "Dubai's summer heat can cause severe damage to vehicles left outdoors. Our climate-controlled vehicle storage protects cars, motorcycles, and boats from extreme temperatures, dust, and humidity. Each vehicle bay includes 24/7 CCTV monitoring and biometric-controlled access — your vehicle stays in exactly the condition you left it.",
    popular: "Classic car owners, seasonal Dubai residents, businesses with spare fleet vehicles.",
    color: "#0891b2",
  },
  {
    emoji: "📦",
    title: "Document & Records Archival",
    slug: "/storage-dubai/records-archival",
    body: "Compliance-ready document storage for businesses that need secure, organised records management. Our archival units maintain consistent temperature and humidity levels to preserve paper documents, legal files, medical records, and financial statements for years. Catalogued access ensures you can retrieve specific boxes on demand without sorting through everything.",
    popular: "Law firms, medical practices, accounting firms, government contractors, banks.",
    color: "#7c3aed",
  },
]

export default function ServicesOverview() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-dubai-gold/10 text-dubai-gold text-sm font-medium rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dubai-navy mb-4">
            Storage Solutions for Every Need in Dubai
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a family, a freelancer, or a fast-growing business — SafeStorage has the right unit size,
            security level, and plan to match your needs. Serving all Dubai areas with free pickup and delivery.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl" aria-hidden="true">{service.emoji}</span>
                <h3 className="text-2xl font-bold text-dubai-navy leading-tight">{service.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                {service.body}
              </p>

              <div className="bg-white rounded-xl p-4 mb-5 border border-gray-100">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-dubai-navy">Popular with: </span>
                  {service.popular}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dubai-navy hover:text-dubai-gold transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 bg-dubai-gold text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-dubai-darkgold transition-colors"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4 text-base">
            Not sure which service is right for you? Our storage consultants will help you find the perfect fit.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-dubai-navy font-semibold hover:text-dubai-gold transition-colors"
          >
            View all storage services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
