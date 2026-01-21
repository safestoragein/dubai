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
    "Learn about SafeStorage Dubai - serving Dubai since 2018 with climate-controlled storage, 24/7 security, and hassle-free pickup & delivery. 500+ happy customers trust us.",
  keywords:
    "about safestorage dubai, storage company dubai, trusted storage dubai, climate controlled storage, secure storage facility",
  openGraph: {
    title: "About SafeStorage Dubai - Your Trusted Storage Partner",
    description: "Serving Dubai since 2018 with premium storage solutions. Climate-controlled units, 24/7 security, free pickup & delivery.",
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
    { year: "2018", title: "Founded in Dubai", description: "Started with a mission to provide hassle-free storage solutions" },
    { year: "2019", title: "100+ Customers", description: "Reached our first milestone of 100 happy customers" },
    { year: "2021", title: "Expanded Services", description: "Added vehicle storage and business storage solutions" },
    { year: "2023", title: "500+ Customers", description: "Trusted by over 500 customers across Dubai" },
    { year: "2024", title: "4.9 Star Rating", description: "Achieved exceptional customer satisfaction with 487+ reviews" },
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
              Dubai&apos;s Most Trusted <span className="text-dubai-gold">Storage Partner</span> Since 2018
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
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-dubai-gold" />
                <span>7+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg">How we became Dubai&apos;s trusted storage partner</p>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                SafeStorage Dubai was founded in 2018 with a simple mission: to provide hassle-free, secure, and affordable storage solutions for Dubai&apos;s residents and businesses.
              </p>
              <p>
                We noticed that most storage facilities in Dubai offered a one-size-fits-all approach, with little regard for the unique needs of each customer. Many required long-term commitments, offered no pickup services, and lacked proper climate control - a critical feature in Dubai&apos;s extreme heat.
              </p>
              <p>
                We set out to change that. Today, SafeStorage Dubai offers fully climate-controlled units, free pickup and delivery within Dubai, flexible rental terms, and a dedicated storage consultant for every customer. We&apos;ve grown from serving a handful of customers to being trusted by over 500 families and businesses across Dubai.
              </p>
              <p>
                Our commitment to quality, security, and customer satisfaction has earned us a 4.9-star rating on Google with over 487 verified reviews - a testament to the trust our customers place in us.
              </p>
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
              Join 500+ happy customers who trust us with their valuable belongings. Get your free quote in just 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
