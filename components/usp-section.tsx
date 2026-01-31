"use client"

import { m } from "framer-motion"
import { Shield, Thermometer, Clock, Truck, HeadphonesIcon, DollarSign, Package, Users, Percent } from "lucide-react"

export default function USPSection() {
  const features = [
    {
      icon: Shield,
      title: "First-Class Security",
      description: "24/7 surveillance, secure access control, and real-time monitoring.",
    },
    {
      icon: Thermometer,
      title: "Climate-Controlled Storage",
      description: "Protects valuables from heat, humidity, and dust.",
    },
    {
      icon: Clock,
      title: "Flexible Rental Terms",
      description: "Short-term and long-term options to fit your needs.",
    },
    {
      icon: Truck,
      title: "Convenient Pickup & Delivery",
      description: "We make storage effortless by handling transportation.",
    },
    {
      icon: HeadphonesIcon,
      title: "Premium Customer Support",
      description: "Dedicated team to assist with all your storage needs.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with no hidden fees.",
    },
    // Add the new USPs here
    {
      icon: Package,
      title: "Complete Packaging Solutions",
      description: "Convenient packaging materials available as complete kits for different storage needs.",
    },
    {
      icon: Users,
      title: "Flexible Storage Options",
      description: "Choose between shared warehouse space or private storage rooms based on your requirements.",
    },
    {
      icon: Percent,
      title: "Discount Programs",
      description: "Enjoy special rates for prepaid, long-term, and monthly storage plans.",
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
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            SafeStorage Dubai – Our Unique Selling Proposition
          </m.h2>
        </div>
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <m.div key={index} variants={item} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 flex flex-col space-y-4">
                  <div className="rounded-full bg-primary/20 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </m.div>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}
