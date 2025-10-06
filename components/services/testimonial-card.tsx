"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  service: string
}

export default function TestimonialCard({ quote, author, rating, service }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border bg-white p-6 shadow-sm"
    >
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <blockquote className="text-lg mb-4">"{quote}"</blockquote>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{service}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
          {author.charAt(0)}
        </div>
      </div>
    </motion.div>
  )
}
