"use client"

import { motion } from "framer-motion"
import { Star, Shield, Clock, Thermometer, Truck, Award } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Google Rating",
      subtext: "487+ Verified Reviews",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Award,
      value: "7+",
      label: "Years Serving Dubai",
      subtext: "Since 2018",
      color: "text-dubai-gold",
      bgColor: "bg-dubai-gold/10",
    },
    {
      icon: Shield,
      value: "500+",
      label: "Happy Customers",
      subtext: "Trusted by Businesses & Families",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Thermometer,
      value: "100%",
      label: "Climate Controlled",
      subtext: "Protect from Dubai Heat",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Truck,
      value: "FREE",
      label: "Pickup & Delivery",
      subtext: "Within Dubai",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Clock,
      value: "15 Min",
      label: "Average Response",
      subtext: "Quick Support Guarantee",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section className="w-full py-8 bg-white border-b border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className={`rounded-full ${badge.bgColor} p-3 mb-3`}>
                  <Icon className={`h-6 w-6 ${badge.color}`} />
                </div>
                <span className={`text-2xl font-bold ${badge.color}`}>{badge.value}</span>
                <span className="text-sm font-medium text-gray-800">{badge.label}</span>
                <span className="text-xs text-gray-500">{badge.subtext}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
