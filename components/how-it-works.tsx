"use client"

import { m } from "framer-motion"
import { Box, Smartphone, Truck, Clock } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Tell Us What You Need",
    description:
      "Call us, WhatsApp, or fill out our online form. Our storage consultant will help you choose the right unit size based on your items. Not sure how much space you need? Just send us photos of your belongings and we'll recommend the perfect fit — no guesswork required.",
    icon: Box,
  },
  {
    number: "2",
    title: "Book Online or Call Us",
    description:
      "Confirm your booking online in under 2 minutes or call +971505773388. We'll schedule your pickup at a time that suits you — same-day pickup available for bookings confirmed before 12 PM. No paperwork, no deposits, no hidden fees.",
    icon: Smartphone,
  },
  {
    number: "3",
    title: "We Pick Up From Your Door — Free",
    description:
      "No need to rent a truck or drive across Dubai. Our professional team arrives at your location with packing materials, carefully loads your items, and transports everything to our climate-controlled facility. We handle your belongings with the same care we'd give our own.",
    icon: Truck,
  },
  {
    number: "4",
    title: "Access Anytime, Return When Ready",
    description:
      "Your items are stored securely with 24/7 CCTV and climate control. Need something back? Request a full or partial delivery to your door. You can also visit our facility anytime with your secure access pass. Month-to-month billing — cancel anytime with zero penalties.",
    icon: Clock,
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            How It Works?
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Simple steps to secure your storage space
          </m.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white rounded-3xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 text-center whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
