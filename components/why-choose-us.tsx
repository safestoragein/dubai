"use client"

import { m } from "framer-motion"
import { Users, Truck, DollarSign, Thermometer, Smartphone, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Thermometer,
      title: "Climate-Controlled Facilities",
      description:
        "Every unit maintained at 20–24°C with 45–55% humidity. Your furniture, electronics, artwork, and documents stay fully protected from Dubai's extreme summer heat and humidity year-round — whether you store for 2 weeks or 2 years.",
      highlight: "All Units",
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description:
        "We come to you — anywhere in Dubai. Our team brings packing materials, carefully loads your items, and transports them safely to our facility. No truck rental costs, no fuel charges, no toll fees. When you need items back, we deliver to your door.",
      highlight: "Anywhere Dubai",
    },
    {
      icon: Shield,
      title: "AED 5,000 Free Insurance",
      description:
        "Every storage unit includes complimentary insurance coverage up to AED 5,000 — included in your monthly plan at no extra cost. Additional coverage is available for high-value items such as electronics, fine art, jewellery, and collectibles.",
      highlight: "Included Free",
    },
    {
      icon: Users,
      title: "Dedicated Storage Consultant",
      description:
        "Every customer gets a personal storage consultant who handles your account from booking to retrieval. One direct point of contact — no call centres, no ticket systems, no being passed around. Your consultant knows your inventory and your needs.",
      highlight: "Personal Expert",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "What we quote is what you pay. No admin fees, no deposit surprises, no hidden charges on your invoice. VAT-inclusive pricing from AED 9/month. We also offer a price-match guarantee — show us a lower quoted price and we'll beat it.",
      highlight: "No Hidden Fees",
    },
    {
      icon: Smartphone,
      title: "Same-Day Pickup Available",
      description:
        "Need storage urgently? We offer same-day pickup for bookings confirmed before 12 PM across Dubai. Emergency storage available for sudden relocations, evictions, or renovation overruns — just call +971505773388 and we'll arrange collection within hours.",
      highlight: "Book by 12 PM",
    },
    {
      icon: CheckCircle2,
      title: "Flexible Monthly Plans",
      description:
        "No long-term contracts and no lock-in periods. Store for one month or two years — you decide. Upgrade or downsize your unit anytime with 48 hours' notice. Pause your plan when you travel. Resume when you return. Complete flexibility.",
      highlight: "No Lock-In",
    },
    {
      icon: Shield,
      title: "24/7 CCTV Monitoring",
      description:
        "Multi-angle CCTV cameras cover every corridor, entry point, loading area, and storage zone. Footage is retained for 90 days. Motion alerts are triggered on all access points after hours. Your belongings are monitored continuously.",
      highlight: "Round the Clock",
    },
    {
      icon: Users,
      title: "Multiple Dubai Locations",
      description:
        "Facilities conveniently located near Dubai Marina, Business Bay, Jumeirah, and Dubai Investment Park. Choose the location closest to you for quicker access and faster pickup and delivery turnaround. New locations opening regularly.",
      highlight: "All Areas",
    },
    {
      icon: Thermometer,
      title: "Pest-Free, Clean Environment",
      description:
        "Regular professional pest control treatments and thorough cleaning of all storage halls. Every unit is sealed to prevent dust, moisture, and insect contamination. We maintain the same standard for every unit regardless of plan size.",
      highlight: "Certified Clean",
    },
    {
      icon: Smartphone,
      title: "Inventory Management",
      description:
        "We photograph and catalogue your items during pickup. Access your full inventory list anytime via WhatsApp or phone — know exactly what's stored, where it is, and when it was collected. Retrieve specific items without retrieving everything.",
      highlight: "Full Visibility",
    },
    {
      icon: DollarSign,
      title: "Biometric Secure Access",
      description:
        "Each unit has its own dedicated lock — only you hold the key. Facility entry uses biometric or PIN-based access control to prevent any unauthorised access to the building. Every access event is logged with time and identity.",
      highlight: "Your Lock Only",
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
