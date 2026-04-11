import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ShieldCheck, Truck, Clock, Lock, Headphones, Star, Users, ArrowRight, FolderLock, Archive } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Document Archival & Records Storage Dubai | Legal, Medical & Business Files | SafeStorage",
  description:
    "Professional document archival for law firms, medical clinics, and businesses in Dubai. Fireproof, climate-controlled records storage with indexed retrieval in 24 hrs. Compliant with UAE data laws. Call +971505773388.",
  keywords:
    "document archival service dubai, business records storage dubai, legal document archival UAE, medical records storage dubai, fireproof document storage, indexed records retrieval dubai, compliance document storage UAE",
  openGraph: {
    title: "Document Archival & Records Storage Dubai | Legal, Medical & Business Files | SafeStorage",
    description: "Fireproof, climate-controlled document archival in Dubai. Indexed retrieval within 24 hrs. Compliant with UAE laws. Call +971505773388.",
    url: "https://safestorage.ae/storage-dubai/records-archival",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/records-archival",
  },
}

const features = [
  {
    icon: FolderLock,
    title: "Secure Storage",
    description: "Fireproof, climate-controlled facilities with restricted access",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "CCTV monitoring, biometric access, and on-site security guards",
  },
  {
    icon: Truck,
    title: "Hassle-Free Pickup & Delivery",
    description: "We collect and deliver documents at your convenience",
  },
  {
    icon: Archive,
    title: "Long-term Archival",
    description: "Perfect for compliance and regulatory requirements",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Complete privacy and confidentiality for sensitive documents",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal document management specialist",
  },
]

const industries = [
  "Legal Firms & Law Offices",
  "Medical Clinics & Hospitals",
  "Accounting & Finance",
  "Real Estate Agencies",
  "Government Contractors",
  "Insurance Companies",
]

export default function RecordsArchivalPage() {
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
                <span className="text-white text-sm font-medium">Trusted by 100+ Businesses</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Document Storage & <span className="text-dubai-gold">Records Archival</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional document storage and archival solutions in Dubai. Secure, climate-controlled
              storage for your business records, legal documents, and sensitive files.
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

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              Trusted by Leading Industries
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional document storage solutions for businesses with compliance requirements
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <FileText className="w-10 h-10 text-dubai-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-dubai-navy">{industry}</h3>
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
              Why Choose SafeStorage for Documents?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security and compliance for your sensitive business documents
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
              Ready to Secure Your Business Documents?
            </h2>
            <p className="text-white/80 mb-8">
              Get professional document storage with complete security and compliance. Hassle-hassle-free pickup available.
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
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Records Storage Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage provides professional document archival and records storage services for businesses
            across Dubai and the UAE. Our fireproof, climate-controlled document storage facility meets UAE
            regulatory requirements for record retention and offers indexed retrieval within 24 hours for
            any stored document or file box.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">UAE Compliance &amp; Record Retention Requirements</h3>
              <p className="text-gray-700 mb-3">
                UAE Commercial Companies Law and various regulatory bodies require businesses to retain specific
                categories of records for defined periods — typically 5–10 years for financial records,
                contracts, and employment files. Many businesses in Dubai lack adequate on-site space to
                store these volumes of archived documents while maintaining easy access when required.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s document archival service solves this problem. All boxes are individually
                barcoded and indexed in our digital management system. When you need a specific file or
                box, simply request it via phone, WhatsApp, or our online portal and we will deliver it
                to your office within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Security &amp; Confidentiality</h3>
              <p className="text-gray-700 mb-3">
                Business documents often contain highly sensitive information — financial data, client records,
                legal contracts, HR files, and medical records. SafeStorage maintains the highest standards
                of physical security and access control to protect your confidential documents.
              </p>
              <p className="text-gray-700">
                Our document storage area is secured with biometric access, monitored by dedicated CCTV
                cameras, and only accessible to authorised personnel. We sign confidentiality agreements
                (NDAs) with all business clients, and our staff are background-checked and trained in
                document handling protocols.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Legal &amp; Professional Services</p>
                <ul className="space-y-1 text-sm">
                  <li>• Law firms and legal consultancies</li>
                  <li>• Notary offices</li>
                  <li>• HR and recruitment agencies</li>
                  <li>• Consulting firms</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Medical &amp; Healthcare</p>
                <ul className="space-y-1 text-sm">
                  <li>• Hospitals and clinics</li>
                  <li>• Dental practices</li>
                  <li>• Pharmacy records</li>
                  <li>• Health insurance providers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Finance &amp; Business</p>
                <ul className="space-y-1 text-sm">
                  <li>• Banks and financial institutions</li>
                  <li>• Accounting firms</li>
                  <li>• Real estate agencies</li>
                  <li>• Government contractors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Document Shredding &amp; Destruction Services</h3>
            <p className="text-gray-700 mb-4">
              When documents reach the end of their required retention period, they must be destroyed
              securely to comply with UAE data protection regulations and prevent sensitive information
              from being misused. SafeStorage offers a certified document shredding service — we collect
              expired records from our facility or your office, shred them using industrial cross-cut
              shredders, and provide a certificate of destruction for your compliance records.
            </p>
            <p className="text-gray-700">
              Contact our team to discuss your document archival requirements, retrieval frequency, and
              retention schedules. We will design a custom document management solution that fits your
              business needs and budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
