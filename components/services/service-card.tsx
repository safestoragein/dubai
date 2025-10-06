"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ServiceType } from "./services-data"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  service: ServiceType
  categoryIcon: React.ReactNode
  categoryName: string
}

export default function ServiceCard({ service, categoryIcon, categoryName }: ServiceCardProps) {
  const phoneNumber = "+971505773388"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div className="absolute top-4 left-4 z-20 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
        {categoryIcon} {categoryName}
      </div>

      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {service.image ? (
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/placeholder.svg?height=200&width=400)` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 group" asChild>
            <Link href="/get-quote">
              Get A Free Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="text-primary hover:text-primary hover:border-primary bg-transparent"
              asChild
            >
<a href="tel:+971505773388">                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                >
                  <Phone className="h-4 w-4" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
