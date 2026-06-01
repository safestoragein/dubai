import type { Metadata } from "next"
import { Shield, Users, Award, Clock, Thermometer, Truck, CheckCircle2, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import SchemaScript from "@/components/schema-script"

export const metadata: Metadata = {
  title: "About Us — Dubai's Most Trusted Storage Partner",
  description:
    "Learn about SafeStorage Dubai - serving Dubai since 2015 with climate-controlled storage, 24/7 security, and hassle-free pickup & delivery. 500+ happy customers trust us.",
  keywords:
    "about safestorage dubai, storage company dubai, trusted storage dubai, climate controlled storage, secure storage facility",
  openGraph: {
    title: "About SafeStorage Dubai - Your Trusted Storage Partner",
    description: "Serving Dubai since 2015 with premium storage solutions. Climate-controlled units, 24/7 security, hassle-free pickup & delivery.",
    url: "https://safestorage.ae/about",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/about",
  },
}

const aboutSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://safestorage.ae/about#webpage',
    name: 'About SafeStorage Dubai — Dubai\'s Most Trusted Storage Partner',
    description: 'Learn about SafeStorage Dubai — serving Dubai since 2015 with climate-controlled storage, 24/7 security, and hassle-free pickup & delivery. 500+ happy customers trust us.',
    url: 'https://safestorage.ae/about',
    isPartOf: { '@id': 'https://safestorage.ae/#website' },
    mainEntity: { '@id': 'https://safestorage.ae/#organization' },
    inLanguage: 'en-AE',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safestorage.ae' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://safestorage.ae/about' },
    ],
  },
]

export default function AboutPage() {
  const milestones = [
    { year: "2015", title: "Founded", description: "Started with a mission to provide hassle-free storage solutions" },
    { year: "2019", title: "10000+ Customers", description: "Reached our first milestone of 10000 happy customers" },
    { year: "2023", title: "50000+ Customers", description: "Reached our first milestone of 50000 happy customers" },
    { year: "2026", title: "1 Lakh + Customers", description: "Trusted by over 1 Lakh + customers globally" },
   
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "24/7 CCTV surveillance, biometric access, and individual unit alarms ensure your belongings are always protected.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every customer gets a dedicated storage consultant who understands their unique needs and provides personalized service.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Premium climate-controlled facilities maintained to the highest standards, protecting your items from Dubai's extreme weather.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "15-minute average response time, same-day pickup available, and flexible access hours when you need them.",
    },
  ]

  return (
    <>
    <SchemaScript schema={aboutSchemas} />
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dubai-navy to-dubai-navy/90 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-dubai-gold/20 text-dubai-gold text-sm font-medium rounded-full mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dubai&apos;s Most Trusted <span className="text-dubai-gold">Storage Partner</span> Since 2015
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We&apos;re not just a storage facility - we&apos;re your trusted partner in keeping your belongings safe, secure, and accessible whenever you need them.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dubai-gold" />
                <span>1 Lakh + Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-dubai-gold" />
                <span>10+ Years Global Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Our Story */}
<section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
  {/* subtle background blur */}
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

  <div className="container px-4 md:px-6 relative">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wide text-blue-700 bg-blue-100 rounded-full mb-4">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-dubai-navy mb-6 leading-tight">
          Redefining Storage, <br className="hidden md:block" /> One Customer at a Time
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A story built on trust, flexibility, and uncompromising security.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid gap-8">

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
          <h3 className="text-xl font-semibold text-dubai-navy mb-4">
            Why We Started
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SafeStorage was founded with a simple belief — storage should be
            effortless, secure, and designed around real customer needs.
            Traditional storage solutions were rigid, inconvenient, and often
            unreliable. We knew there had to be a better way.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
          <h3 className="text-xl font-semibold text-dubai-navy mb-4">
            The Problem We Solved
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Customers were forced into long lock-ins, poor handling standards,
            limited support, and unsafe storage environments. Flexibility and
            peace of mind were missing — and that’s exactly where SafeStorage
            stepped in.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
          <h3 className="text-xl font-semibold text-dubai-navy mb-6">
            What Makes Us Different Today
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                ✓
              </div>
              <p className="text-muted-foreground text-lg">
                ISO 9001:2015 certified, professionally managed facilities
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                ✓
              </div>
              <p className="text-muted-foreground text-lg">
                Fully climate-controlled and secure storage units
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                ✓
              </div>
              <p className="text-muted-foreground text-lg">
                Doorstep pickup & delivery with careful handling
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                ✓
              </div>
              <p className="text-muted-foreground text-lg">
                Flexible plans with dedicated customer support
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dubai-navy rounded-2xl p-10 text-center">
          <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
            What began as a small idea has grown into a trusted storage brand,
            serving lakhs of customers globaly with care, transparency, and
            reliability — and we’re just getting started.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">Key milestones in our growth</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dubai-gold/30 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <span className="text-dubai-gold font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-dubai-navy mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dubai-gold rounded-full transform md:-translate-x-1/2 border-4 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-dubai-gold/10 mb-4">
                    <Icon className="h-7 w-7 text-dubai-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-dubai-navy mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the SafeStorage Difference?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join 1 Lakh+ happy customers who trust us with their valuable belongings. Get your free quote in just 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">About SafeStorage Dubai — Our Story &amp; Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage was founded with one mission: to make storage in Dubai completely hassle-free. We looked
            at the traditional storage industry — where customers had to rent lorries, load heavy furniture
            themselves, and visit a facility to access their items — and decided there had to be a better way.
            The result is SafeStorage: a full-service, climate-controlled storage solution where our team does
            everything from collection to delivery.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Our Commitment to Dubai Customers</h3>
              <p className="text-gray-700 mb-3">
                Dubai is a unique city — fast-paced, diverse, and filled with residents from over 200 nationalities
                who have very different storage needs. Expats need flexible storage without long-term commitments.
                Families need space during home renovations. Businesses need scalable commercial storage without
                warehouse overhead. Students need affordable semester-break storage.
              </p>
              <p className="text-gray-700">
                SafeStorage serves all of these customers with the same commitment to quality, transparency,
                and convenience. Every customer — whether storing a few boxes for three weeks or a full villa
                for three years — receives the same climate-controlled security, hassle-free pickup, and dedicated
                customer service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">What Sets SafeStorage Apart</h3>
              <p className="text-gray-700 mb-3">
                Most Dubai storage providers operate traditional self-service facilities where you do all
                the work. SafeStorage is different. Our full-service model means customers never lift a
                heavy box, never rent a van, and never need to visit the facility if they prefer not to.
                We come to you, collect your items with care, and return them on demand.
              </p>
              <p className="text-gray-700">
                All our units are climate-controlled at 20–25°C year-round — not as an optional add-on but
                as a standard feature. Dubai&apos;s extreme heat can damage furniture, electronics, clothing, and
                documents in non-climate-controlled storage. We believe every stored item deserves proper
                protection, so we make climate control standard.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">SafeStorage by the Numbers</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
              <div>
                <p className="text-3xl font-bold text-[#0A2463] mb-1">1 Lakh+</p>
                <p className="text-sm">Happy Customers Globally</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A2463] mb-1">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A2463] mb-1">4.9★</p>
                <p className="text-sm">Average Customer Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A2463] mb-1">24/7</p>
                <p className="text-sm">Security Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended About Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-6">About SafeStorage Dubai — Our Full Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage was founded in 2015 by Ramesh Madisetty with a clear and simple vision: to make storage completely effortless for the modern customer. At the time, the storage industry in India and across the region operated on a purely self-service model — customers were responsible for transporting their own belongings to a storage facility, loading and unloading their own units, and managing their own access. This model was inconvenient, physically demanding, and particularly unsuitable for the large, diverse urban populations of cities like Bengaluru, Hyderabad, and later Dubai.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The founding insight was straightforward but powerful: if you can have groceries delivered to your door, why should storage be any different? Ramesh and his team built SafeStorage around a full-service, door-to-door model where the company handles every aspect of the storage experience — collection, transportation, secure storage, and on-demand delivery. Customers never need to lift a single box or visit a facility unless they want to.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            This model proved immediately successful. SafeStorage grew rapidly in India, expanding from its initial market to multiple cities and building a reputation for reliability, transparency, and exceptional customer service. By 2019, SafeStorage had served over 10,000 customers. By 2023, that number had grown to over 50,000 globally. Today, SafeStorage serves over 1 lakh (100,000) customers across India and the UAE, with 1.2 million square feet of storage under management and a technology platform that enables seamless remote management of stored items from anywhere in the world.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">SafeStorage&apos;s Expansion to the UAE</h3>
              <p className="text-gray-700 mb-3">
                SafeStorage&apos;s entry into the UAE market was driven by clear demand. Dubai&apos;s population — over 90% expatriate — has a uniquely high demand for flexible storage solutions. The transient nature of expat life in Dubai creates constant storage needs: moving between apartments, renovating villas, leaving the country temporarily, repatriating after years in the UAE, and managing the belongings of growing families in apartments that do not always provide adequate storage space.
              </p>
              <p className="text-gray-700">
                SafeStorage Dubai launched with the same full-service, door-to-door model that had succeeded in India, adapted for the specific needs of the UAE market. The UAE business operates under an ISO 9001:2015 certified quality management system, ensuring that service delivery standards are consistent, measurable, and continuously improving. SafeStorage Dubai&apos;s climate-controlled facilities maintain 18–22°C year-round — a critical feature in a climate where outdoor temperatures regularly exceed 45°C in summer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dubai-navy mb-3">Technology Platform &amp; Digital Innovation</h3>
              <p className="text-gray-700 mb-3">
                One of SafeStorage&apos;s most distinctive competitive advantages is its technology platform. Rather than treating storage as a purely physical service, SafeStorage has invested significantly in digital tools that make the customer experience seamless, transparent, and manageable from anywhere in the world.
              </p>
              <p className="text-gray-700">
                The SafeStorage customer portal provides a complete digital inventory of all stored items with photographs, item descriptions, and storage location references. Customers can browse their inventory, request specific items for delivery, schedule pickups, manage billing, and communicate with their storage consultant — all without visiting the facility. This capability is particularly valued by expats who store items in Dubai while living abroad and need to manage their storage remotely.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">ISO 9001:2015 Certification &amp; Quality Standards</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage operates under an ISO 9001:2015 certified quality management system — one of the most recognised international standards for service quality and operational consistency. This certification means that every aspect of SafeStorage&apos;s operations — from customer intake and pickup procedures to storage facility management and complaint resolution — is documented, measured against defined standards, and subject to regular internal and external audits.
            </p>
            <p className="text-gray-700 mb-4">
              For customers, ISO 9001:2015 certification provides assurance that SafeStorage&apos;s quality is not dependent on individual staff members&apos; attention or enthusiasm, but is systematically built into operational processes. The certification requires continuous improvement, meaning SafeStorage is always reviewing and enhancing its services based on customer feedback, operational data, and international best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm mt-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-dubai-navy mb-2">Consistent Service Quality</p>
                <p>Every customer receives the same documented service standard regardless of which team handles their pickup or delivery.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-dubai-navy mb-2">Continuous Improvement</p>
                <p>Regular audits identify opportunities to improve processes, reduce errors, and enhance the overall customer experience.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-dubai-navy mb-2">Accountability</p>
                <p>ISO certification creates formal accountability for service delivery standards, with documented evidence of compliance available on request.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-dubai-navy mb-4">SafeStorage&apos;s Global Footprint — 1.2 Million Sq Ft Under Management</h3>
            <p className="text-gray-700 mb-4">
              SafeStorage currently manages over 1.2 million square feet of storage space across its India and UAE operations. This scale provides significant operational advantages: purpose-built facilities rather than converted warehouses, bulk purchasing power for quality packing materials and equipment, investment in technology platforms that smaller providers cannot justify, and the ability to handle storage volumes ranging from a few boxes to entire factory clearances.
            </p>
            <p className="text-gray-700">
              SafeStorage&apos;s Dubai operations form a key part of the company&apos;s global footprint, serving one of the world&apos;s most mobile and internationally connected city populations. The scale and experience of SafeStorage&apos;s global operations translates directly into better service, more reliable processes, and more competitive pricing for Dubai customers compared to smaller, single-city storage operators.
            </p>
          </div>
        </div>
      </section>

      {/* About FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy mb-4 text-center">Frequently Asked Questions — About SafeStorage Dubai</h2>
          <p className="text-gray-600 text-center mb-10">Common questions about SafeStorage Dubai, our company, history, standards, and what makes us different from other Dubai storage companies.</p>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">When was SafeStorage founded and who founded it?</h3>
              <p className="text-gray-700">SafeStorage was founded in 2015 by Ramesh Madisetty. The company was established with the mission of making storage completely effortless through a full-service, door-to-door model that handles every aspect of the storage experience on behalf of the customer. Starting in India, SafeStorage expanded its operations and subsequently launched in the UAE, including Dubai, to serve the large expatriate and business communities with the same premium, convenient storage service. Ramesh Madisetty&apos;s vision was to build a storage company that people actually enjoyed using — where the service genuinely reduced stress rather than adding to it.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">How many customers has SafeStorage served globally?</h3>
              <p className="text-gray-700">SafeStorage has served over 1 lakh (100,000) customers globally across India and the UAE. Key milestones include reaching 10,000 customers in 2019, growing to 50,000 customers by 2023, and surpassing 1 lakh customers as the company&apos;s scale and reputation continued to grow. SafeStorage has accumulated over 10,000 customer reviews with a consistent 4.9 out of 5 rating, reflecting the company&apos;s commitment to service quality and customer satisfaction. These reviews are available on Google, Trustpilot, and the SafeStorage website for prospective customers to review before booking.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Is SafeStorage ISO certified?</h3>
              <p className="text-gray-700">Yes, SafeStorage operates under an ISO 9001:2015 certified quality management system. ISO 9001:2015 is the internationally recognised standard for quality management, covering operational processes, service delivery standards, customer satisfaction measurement, and continuous improvement practices. Certification requires regular independent audits by accredited certification bodies to verify ongoing compliance. For SafeStorage customers, this certification means that the quality of service they experience is systematically managed and documented — not dependent on individual staff effort alone — and is subject to ongoing review and improvement.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">What makes SafeStorage different from other Dubai storage companies?</h3>
              <p className="text-gray-700">SafeStorage differs from traditional Dubai storage providers in several fundamental ways. First, we are a full-service provider: our team handles collection, packing, transport, storage, and delivery — customers never need to do any physical work or visit our facility. Traditional self-storage companies require customers to do everything themselves. Second, every SafeStorage unit is climate-controlled at 18–22°C as a standard feature, not an optional upgrade. Third, we use a volume-based pricing model, so customers pay only for the space their items actually occupy rather than a fixed unit size. Fourth, hassle-free door-to-door pickup and delivery is included in every plan. Fifth, our ISO 9001:2015 certification and global scale provide a service quality standard that most local Dubai storage providers cannot match.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">How much total storage space does SafeStorage manage globally?</h3>
              <p className="text-gray-700">SafeStorage manages over 1.2 million square feet of storage space across its operations in India and the UAE. This makes SafeStorage one of the larger organised storage providers in the region. This scale enables significant operational advantages including purpose-built climate-controlled facilities, investment in technology and digital inventory management systems, staff training infrastructure, quality packing materials purchased in bulk, and the ability to handle both individual customer needs (a few boxes) and large commercial requirements (entire factory or office clearances) with the same professional standard of service.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Does SafeStorage operate only in Dubai within the UAE?</h3>
              <p className="text-gray-700">SafeStorage&apos;s UAE operations at safestorage.ae primarily serve the Dubai emirate with the full hassle-free pickup and delivery service. Within Dubai, we cover every community and area. For customers in Sharjah, Ajman, and the Northern Emirates, pickup may be available with a small additional transport fee — contact us to confirm for your specific location. SafeStorage also operates in India across multiple cities under the safestorage.in domain. The UAE and India operations share the same quality standards, technology platform, and service philosophy but operate independently with local teams and facilities.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">How does SafeStorage handle customer data and privacy?</h3>
              <p className="text-gray-700">SafeStorage takes customer data privacy seriously and complies with UAE data protection regulations. Customer personal information including name, contact details, address, and inventory details is stored securely on encrypted servers and used only for the purposes of providing the storage service. Payment card data is processed through PCI-compliant payment processors and is never stored on SafeStorage&apos;s systems in unencrypted form. Customer storage contents are photographed and inventoried exclusively for the customer&apos;s use — this information is not shared with third parties. Customers can request deletion of their data when their storage account is closed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">What is the starting price for storage at SafeStorage Dubai?</h3>
              <p className="text-gray-700">SafeStorage Dubai pricing starts from 12.6 AED / Sqft (VAT-inclusive). Pricing scales with the space your belongings occupy — you pay for the actual area your items take up, not a fixed unit size. All pricing is provided transparently in your quote with no hidden fees. Hassle-free pickup, climate control, insurance, and the digital inventory system are included in every plan regardless of the amount you store.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I speak to a real person at SafeStorage, or is everything automated?</h3>
              <p className="text-gray-700">Every SafeStorage customer has access to a real, dedicated storage consultant — a named individual who manages their account and is reachable by phone, WhatsApp, and email. While we do use technology to make the process efficient (online quotes, digital inventory, automated billing), we strongly believe that human customer service is irreplaceable, especially for the often stressful circumstances that lead people to need storage (renovations, relocations, lease gaps, expat departures). Your storage consultant will guide you through the entire process, answer questions, resolve any issues, and be your single point of contact throughout your time as a SafeStorage customer.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Does SafeStorage have any physical walk-in offices or showrooms in Dubai?</h3>
              <p className="text-gray-700">SafeStorage primarily operates as a service company rather than a traditional retail storage provider, which means most customer interactions happen via phone, WhatsApp, and our online platform. The storage facility itself is a secure, operational space rather than a retail showroom. Customers who wish to visit the facility can do so by appointment. For those wanting to discuss their storage needs in person, we can arrange a site visit from your dedicated storage consultant at your Dubai home or office address — this is particularly useful for customers who need to store large volumes or unusual items and want an accurate assessment before committing to a plan.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">How do I contact SafeStorage Dubai?</h3>
              <p className="text-gray-700">You can reach SafeStorage Dubai through several channels: by phone at +971505773388, by WhatsApp at the same number (+971505773388 — this is the fastest and most popular channel), by email through the contact form at safestorage.ae, or by filling in the online quote request form on the website. WhatsApp is our most efficient communication channel — simply send a message describing what you need to store or send photos of the items, and we will respond with a quote within minutes. Our team is available Monday through Saturday from 8 AM to 8 PM, and WhatsApp messages received outside these hours are responded to on the next working day.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Has SafeStorage won any awards or received notable recognition?</h3>
              <p className="text-gray-700">SafeStorage has received recognition through its customer reviews and ratings platform performance. With a consistent 4.9 out of 5 rating across thousands of verified customer reviews, SafeStorage regularly appears as a top-rated storage provider in Dubai on Google, Trustpilot, and other review platforms. The ISO 9001:2015 certification is itself a recognised mark of quality management excellence. SafeStorage&apos;s growth from a startup in 2015 to a 1 lakh+ customer business managing 1.2 million square feet globally in under a decade is widely regarded as one of the most successful scaling stories in the Indian and UAE storage industry.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">Is SafeStorage a good option for long-term storage (1–5 years)?</h3>
              <p className="text-gray-700">Yes, SafeStorage is well-suited for long-term storage needs. Many of our customers store items for 1–5 years, particularly expats who have left Dubai and are keeping belongings stored while they decide on their long-term plans, businesses that need permanent overflow storage, and families storing inherited items or belongings from a previous larger home. Long-term customers benefit from the same climate-controlled security, insurance, and digital inventory management as short-term customers. For storage exceeding 6 months, we offer long-term pricing that provides a discount on the standard monthly rate — contact us to discuss long-term storage pricing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">How does SafeStorage ensure the safety of its staff and customers during pickups?</h3>
              <p className="text-gray-700">SafeStorage maintains comprehensive health, safety, and operational protocols for all pickup and delivery activities. Our team members are trained in safe manual handling techniques, use appropriate equipment (trolleys, straps, lifting aids) for heavy items, and wear appropriate protective gear during operations. Vehicles are maintained in roadworthy condition and inspected regularly. Our team uses building access protocols that respect residents&apos; privacy and building management rules. For customers, we request that they are present or have a trusted representative present during pickup and delivery to ensure all items are correctly identified and handled according to the customer&apos;s specific instructions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-dubai-navy mb-3">What happens if I want to end my storage plan before the billing period ends?</h3>
              <p className="text-gray-700">SafeStorage plans can be cancelled at any time with 14 days&apos; notice. If you cancel mid-billing period, the remaining days in that period are typically credited towards delivery or a partial refund, depending on the specifics of your plan. There are no cancellation penalties or early exit fees. When you cancel, we schedule delivery of all your stored items to your Dubai address, or we can arrange international shipping if you have left the UAE. We understand that storage needs change, and we make it as easy to leave SafeStorage as it is to start — we are confident that when customers are ready for storage again, they will return based on their experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
