"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { env } from "@/lib/env"

// Dubai locations with coordinates
const dubaiLocations = [
  {
    id: 1,
    name: "Dubai Marina",
    description: "Premium storage near the waterfront",
    coordinates: { lat: 25.0819, lng: 55.1367 },
  },
  {
    id: 2,
    name: "Al Barsha",
    description: "Convenient central location",
    coordinates: { lat: 25.1107, lng: 55.2 },
  },
  {
    id: 3,
    name: "Deira",
    description: "Easy access from old Dubai",
    coordinates: { lat: 25.2697, lng: 55.3094 },
  },
  {
    id: 4,
    name: "Business Bay",
    description: "Business-friendly storage solutions",
    coordinates: { lat: 25.1862, lng: 55.28 },
  },
  {
    id: 5,
    name: "JLT",
    description: "Modern facilities in Jumeirah Lake Towers",
    coordinates: { lat: 25.0693, lng: 55.1407 },
  },
]

export default function DubaiMapStatic() {
  // State to track the selected location
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  // Handle location selection from the list
  const handleLocationClick = (locationId: number) => {
    setSelectedLocation(locationId)
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tight">Storage Facilities Across Dubai</h2>
              <p className="text-xl text-muted-foreground">
                SafeStorage Dubai operates multiple storage facilities across Dubai, ensuring you can find a convenient
                location near you. Our facilities are strategically placed to serve all major residential and business
                areas.
              </p>

              <div className="space-y-4">
                {dubaiLocations.map((location) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (location.id - 1) * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedLocation === location.id ? "bg-primary/10" : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleLocationClick(location.id)}
                  >
                    <div
                      className={`rounded-full p-2 mt-1 ${
                        selectedLocation === location.id ? "bg-primary" : "bg-primary/10"
                      }`}
                    >
                      <MapPin
                        className={`h-5 w-5 ${selectedLocation === location.id ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-muted-foreground">{location.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={env.PHONE_LINK}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call us at {env.CONTACT_NUMBER}
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <Image
                  src="/images/dubai-locations-map.png"
                  alt="Map of Dubai Storage Locations"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />

                {/* Static markers */}
                {dubaiLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      selectedLocation === location.id ? "scale-150" : "scale-100"
                    }`}
                    style={{
                      // These are approximate positions - you'll need to adjust based on your map image
                      left: `${((location.coordinates.lng - 55.1) / 0.4) * 100}%`,
                      top: `${((25.3 - location.coordinates.lat) / 0.3) * 100}%`,
                    }}
                    onClick={() => handleLocationClick(location.id)}
                  >
                    <div className="w-full h-full bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}

                {/* Selected location info */}
                {selectedLocation && (
                  <div
                    className="absolute bg-white p-3 rounded-lg shadow-lg"
                    style={{
                      // Position near the selected marker
                      left: `${(((dubaiLocations.find((l) => l.id === selectedLocation)?.coordinates.lng || 55.2) - 55.1) / 0.4) * 100}%`,
                      top: `${((25.3 - (dubaiLocations.find((l) => l.id === selectedLocation)?.coordinates.lat || 25.2)) / 0.3) * 100 + 5}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <p className="font-bold">{dubaiLocations.find((l) => l.id === selectedLocation)?.name}</p>
                    <p className="text-sm">{dubaiLocations.find((l) => l.id === selectedLocation)?.description}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
