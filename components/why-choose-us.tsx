"use client"

import { m } from "framer-motion"
import { Users, Truck, DollarSign, Thermometer, Smartphone, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Dedicated Storage Consultant",
      description: "Your personal point of contact who understands your unique storage needs and provides tailored solutions.",
      highlight: "Personal Expert",
    },
    {
      icon: Truck,
      title: "Hassle-Free Pickup & Delivery",
      description: "We handle everything - pickup from your location, secure transport, and delivery when you need it back.",
      highlight: "Within Dubai",
    },
    {
      icon: DollarSign,
      title: "Price Match Guarantee",
      description: "Found a better price? We'll match it! Get the best value without compromising on quality and security.",
      highlight: "Best Price",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Beat Dubai's extreme heat with our fully climate-controlled units maintaining optimal temperature year-round.",
      highlight: "Climate Control",
    },
    {
      icon: Smartphone,
      title: "24/7 Access & Support",
      description: "Access your belongings anytime. Our dedicated support team is available around the clock.",
      highlight: "Always Available",
    },
    {
      icon: Shield,
      title: "Free Insurance",
      description: "Your peace of mind is our priority. Every storage unit includes free insurance coverage.",
      highlight: "Included Free",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-dubai-sand/30 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-dubai-gold/10 text-dubai-gold text-sm font-medium rounded-full"
          >
            Why Choose Us
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-dubai-navy"
          >
            Why 1 Lakh+ Customers Trust <span className="text-dubai-gold">SafeStorage Globally</span>
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px]"
          >
            We&apos;re not just a storage facility - we&apos;re your trusted partner in keeping your belongings safe
          </m.p>
        </div>

        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <m.div
                key={index}
                variants={item}
                className="relative group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="absolute top-0 right-0 bg-dubai-gold text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  {feature.highlight}
                </div>
                <div className="p-6 pt-8">
                  <div className="rounded-full bg-dubai-gold/10 p-4 w-fit mb-4">
                    <Icon className="h-8 w-8 text-dubai-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-dubai-navy mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Included with every plan</span>
                  </div>
                </div>
              </m.div>
            )
          })}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
            <Link href="/get-quote" className="group">
              Join 1 Lakh + Happy Customers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  )
}
