"use client"

import { m } from "framer-motion"
import { MapPin } from "lucide-react"
import Link from "next/link"

// Each card carries an explicit `slug` for its location page. These used to link
// to `#${name}` anchors — #al-barsha, #deira, #jlt and so on — but no element on
// the homepage has any of those ids, so all six cards were dead clicks and six
// internal links pointed nowhere. The JLT card is now Jumeirah: JLT has no
// location page of its own (it is covered by /locations/dubai-marina), so it was
// the one entry that could not be given a real destination.
const locations = [
  {
    name: "Al Barsha",
    slug: "al-barsha",
    description: "Secure & affordable self-storage options.",
  },
  {
    name: "Deira",
    slug: "deira",
    description: "Convenient, short-term & long-term storage solutions.",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    description: "High-end storage for personal & business use.",
  },
  {
    name: "Business Bay",
    slug: "business-bay",
    description: "Premium storage solutions for businesses and individuals.",
  },
  {
    name: "Jumeirah",
    slug: "jumeirah",
    description: "Villa storage with free pickup, ideal during renovations.",
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
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
            Dubai Marina, and more. No matter where you are in the city, our secure and clean storage units
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
              <Link href={`/locations/${location.slug}`} className="block">
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
