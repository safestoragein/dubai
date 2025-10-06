"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { shouldRunAnimations } from "@/lib/animation-loader"

const testimonials = [
  {
    content:
      "SafeStorage made my move stress-free! The climate-controlled units kept my furniture in perfect condition.",
    author: "Ahmed R.",
    rating: 5,
  },
  {
    content: "Best storage service in Dubai! Affordable, secure, and super convenient.",
    author: "Fatima K.",
    rating: 5,
  },
  {
    content: "Highly recommended for businesses! Our inventory storage has never been easier.",
    author: "Mark L.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    setShouldAnimate(shouldRunAnimations())
  }, [])

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px]"
          >
            Real experiences from our valued customers
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white rounded-3xl transform transition-transform group-hover:scale-105" />
              <div className="relative p-8 flex flex-col min-h-[320px]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="flex-1 text-lg text-muted-foreground mb-4">"{testimonial.content}"</blockquote>
                <footer className="text-lg font-semibold">– {testimonial.author}</footer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
