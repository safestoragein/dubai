import type { Metadata } from "next"
import { Shield, Users, Award, Clock, Thermometer, Truck, CheckCircle2, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "About Us - Dubai's Most Trusted Storage Partner | SafeStorage Dubai",
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
    </div>
  )
}
