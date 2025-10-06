"use client"

import { motion } from "framer-motion"
import { Box, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { storageRooms } from "@/data/storage-sizes"

export default function StorageSizes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Find the Perfect Storage Size</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of storage unit sizes to fit your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storageRooms.map((room, index) => {
            const Icon = room.icon

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {room.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}

                <div className="relative h-56">
                  <img
                    src={room.image || `/placeholder.svg?height=300&width=400&query=storage+room+${room.size}`}
                    alt={`${room.name} - ${room.size}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2 text-white">
                      <Box className="h-5 w-5 text-blue-400" />
                      <span className="font-medium">{room.size}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">{room.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{room.description}</p>

                  {/* Add Get A Free Quote button */}
                  <Button asChild className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white">
                    <Link href={`/get-quote?size=${room.id}`}>
                      Get A Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
