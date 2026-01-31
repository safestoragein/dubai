"use client"

import { m } from "framer-motion"
import { MapPin } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    name: "Al Barsha",
    description: "Secure & affordable self-storage options.",
  },
  {
    name: "Deira",
    description: "Convenient, short-term & long-term storage solutions.",
  },
  {
    name: "Dubai Marina",
    description: "High-end storage for personal & business use.",
  },
  {
    name: "Business Bay",
    description: "Premium storage solutions for businesses and individuals.",
  },
  {
    name: "JLT",
    description: "Convenient storage options with 24/7 access.",
  },
  {
    name: "Downtown Dubai",
    description: "Central location with flexible storage solutions.",
  },
]

export default function LocationSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Storage Services in Dubai – Serving All Major Areas
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px]"
          >
            SafeStorage Dubai provides premium self-storage services across Dubai, Al Barsha, Deira, Business Bay, JLT,
            Dubai Marina, and more. No matter where you are in the city, our secure and climate-controlled storage units
            are easily accessible.
          </m.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <m.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`#${location.name.toLowerCase().replace(" ", "-")}`} className="block">
                <div className="bg-white rounded-xl border p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        Storage in {location.name}
                      </h3>
                      <p className="text-muted-foreground">{location.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
