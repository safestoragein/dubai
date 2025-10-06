"use client"

import { motion } from "framer-motion"
import { Calendar, Truck, Warehouse, Package } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Book Your Storage",
    description: "Choose your storage plan & schedule pickup in just a few clicks!",
    icon: Calendar,
    color: "bg-blue-500",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-woman-scanning-products_23-2148943323.jpg-FAOsFt1liszoayCOCLFr9S99saKR82.jpeg",
  },
  {
    number: "02",
    title: "We Pick Up Your Items",
    description: "Our team arrives at your location, carefully packs & picks up your belongings.",
    icon: Truck,
    color: "bg-green-500",
  },
  {
    number: "03",
    title: "Secure Storage",
    description: "Your items are stored safely in our climate-controlled facility.",
    icon: Warehouse,
    color: "bg-orange-500",
  },
  {
    number: "04",
    title: "Easy Return Anytime",
    description: "Request a return and we'll deliver your items back to you!",
    icon: Package,
    color: "bg-purple-500",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Our simple 4-step process makes storage effortless</p>
        </div>

        <div className="grid gap-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "lg:text-right" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative">
                  <div className={`absolute -top-2 -left-2 w-12 h-12 ${step.color} opacity-20 rounded-full`} />
                  <div
                    className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} bg-opacity-10`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color} text-opacity-90`} />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-primary mb-2">STEP {step.number}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              <div className={`relative ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[25px]">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold">{step.number}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
