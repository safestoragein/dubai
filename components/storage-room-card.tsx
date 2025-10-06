"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { StorageRoom } from "@/data/storage-sizes"

interface StorageRoomCardProps {
  room: StorageRoom
  index: number
}

export default function StorageRoomCard({ room, index }: StorageRoomCardProps) {
  const Icon = room.icon || (() => null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
    >
      {room.popular && (
        <div className="absolute top-0 right-0 bg-dubai-gold text-white px-4 py-1 rounded-bl-lg text-sm font-medium z-10">
          Most Popular
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={room.image || "/placeholder.svg?height=300&width=400&query=storage+room"}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2">
            <span className="text-dubai-gold">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-medium">{room.size}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dubai-navy mb-2">{room.name}</h3>
        <p className="text-dubai-navy/70 mb-6">{room.description}</p>

        {/* Added CTA Button */}
        <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
          <Link href={`/get-quote?size=${encodeURIComponent(room.name.toLowerCase())}`}>
            Get a Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
