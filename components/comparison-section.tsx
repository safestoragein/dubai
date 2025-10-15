"use client"

import { motion } from "framer-motion"
import { Check, X, AlertTriangle } from "lucide-react"

const features = [
  {
    name: "24/7 Security & CCTV Monitoring",
    safestorage: "yes",
    others: "limited",
  },
  {
    name: "Climate-Controlled Units",
    safestorage: "yes",
    others: "no",
  },
  {
    name: "Flexible Payment Plans",
    safestorage: "yes",
    others: "no",
  },
  {
    name: "Hassle-Free Pickup & Delivery",
    safestorage: "yes",
    others: "no",
  },
  {
    name: "Online Booking & Instant Quote",
    safestorage: "yes",
    others: "no",
  },
  {
    name: "Customer Support 24/7",
    safestorage: "yes",
    others: "no",
  },
  {
    name: "No Hidden Fees",
    safestorage: "yes",
    others: "limited",
  },
]

export default function ComparisonSection() {
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
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Why Choose SafeStorage Over Others?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px]"
          >
            Compare our services with other storage providers
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border shadow-lg bg-white"
        >
          <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-medium">
            <div className="text-left">Feature</div>
            <div className="text-center">SafeStorage Dubai 🏆</div>
            <div className="text-center">Other Providers ❌</div>
          </div>

          <div className="divide-y">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="grid grid-cols-3 p-4 items-center hover:bg-muted/50 transition-colors"
              >
                <div className="text-left font-medium">{feature.name}</div>
                <div className="flex justify-center">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex justify-center">
                  {feature.others === "no" ? (
                    <X className="h-6 w-6 text-red-500" />
                  ) : (
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
