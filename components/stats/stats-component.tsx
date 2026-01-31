"use client"

import { m } from "framer-motion"
import {
  Star,
  Globe,
  Users,
  Building2,
  Warehouse,
  Trophy,
  Medal,
  HandshakeIcon,
  BadgeCheck,
  Search,
} from "lucide-react"
import Image from "next/image"
import { companyStats } from "./stats-data"

const iconMap = {
  globe: Globe,
  users: Users,
  building: Building2,
  warehouse: Warehouse,
}

interface StatsComponentProps {
  showAll?: boolean
  className?: string
}

export default function StatsComponent({ showAll = true, className = "" }: StatsComponentProps) {
  return (
    <section className={`w-full py-12 ${className}`}>
      <div className="container px-4 md:px-6">
        {showAll && (
          <div className="flex flex-col items-center justify-center mb-12">
            {/* Rating Section */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold">
                {companyStats.rating} out of 5 based on {companyStats.totalReviews} reviews
              </span>
            </div>

            {/* Badges Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center w-full max-w-4xl mb-12">
              {/* ThreeBest Badge */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-12 w-12 text-primary" />
                  </div>
                  <Image
                    src="/placeholder.svg?height=100&width=100&text=ThreeBest"
                    alt="ThreeBest Rated Badge"
                    width={100}
                    height={100}
                    className="mx-auto opacity-10"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Medal className="h-5 w-5 text-primary" />
                  <p className="font-bold">{companyStats.position.rank} Position</p>
                </div>
                <p className="text-muted-foreground">{companyStats.position.years}</p>
              </m.div>

              {/* Google Rating - Updated with blue search icon */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <Search className="h-12 w-12 text-[#4285F4]" /> {/* Google blue color */}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold mb-1">{companyStats.rating}</p>
                <p className="text-muted-foreground">{companyStats.googleReviews} Google Reviews</p>
              </m.div>

              {/* Corporate Clients */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HandshakeIcon className="h-12 w-12 text-primary" />
                  </div>
                  <Image
                    src="/placeholder.svg?height=100&width=100&text=Trust"
                    alt="Trust Badge"
                    width={100}
                    height={100}
                    className="mx-auto opacity-10"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <p className="font-bold">Trusted By {companyStats.corporateClients}</p>
                </div>
                <p className="text-muted-foreground">Corporate Clients</p>
              </m.div>
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap]
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <m.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {metric.value}
                </m.h3>
                <p className="text-muted-foreground">{metric.label}</p>
              </m.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
