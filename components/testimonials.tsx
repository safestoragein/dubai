"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote, BadgeCheck } from "lucide-react"
import { shouldRunAnimations } from "@/lib/animation-loader"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    content:
      "Stored my entire villa furniture for 6 months during renovation. Everything came back in perfect condition thanks to the climate control. The pickup and delivery service was a lifesaver!",
    author: "Ahmed Hassan",
    role: "Villa Owner, Dubai Marina",
    rating: 5,
    useCase: "Villa Renovation",
    verified: true,
  },
  {
    content: "As a business owner, I needed reliable document storage. SafeStorage provides secure, climate-controlled units with 24/7 access. Their dedicated consultant understood our compliance needs perfectly.",
    author: "Sarah Mitchell",
    role: "Managing Director, Consulting Firm",
    rating: 5,
    useCase: "Business Documents",
    verified: true,
  },
  {
    content: "Moving from JLT to Business Bay, I needed short-term storage. The team was incredibly professional, handled everything with care, and the pricing was transparent with no hidden fees!",
    author: "Fatima Al-Rashid",
    role: "Apartment Resident, JLT",
    rating: 5,
    useCase: "Relocation Storage",
    verified: true,
  },
  {
    content: "Best storage solution in Dubai! We store our e-commerce inventory here. The flexible terms and easy access make managing stock so much easier. Highly recommend for small businesses!",
    author: "Mark Thompson",
    role: "E-commerce Business Owner",
    rating: 5,
    useCase: "E-commerce Inventory",
    verified: true,
  },
  {
    content: "Was worried about storing my classic car during summer. The climate-controlled vehicle storage kept it protected from Dubai's extreme heat. Staff are knowledgeable and trustworthy.",
    author: "Khalid Rahman",
    role: "Car Enthusiast",
    rating: 5,
    useCase: "Vehicle Storage",
    verified: true,
  },
  {
    content: "Professional service from start to finish! They helped me choose the right unit size for my needs and the free insurance gave me peace of mind. Will definitely use again!",
    author: "Jennifer Lee",
    role: "Expat, Downtown Dubai",
    rating: 5,
    useCase: "Personal Storage",
    verified: true,
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
          {/* Google Reviews Badge */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white shadow-md rounded-full px-6 py-3 mb-4"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">4.9</span>
              <span className="text-muted-foreground text-sm">487+ Google Reviews</span>
            </div>
          </motion.div>

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
            Real experiences from 500+ happy customers across Dubai
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-sm group-hover:shadow-lg transition-shadow" />
              <div className="relative p-6 flex flex-col min-h-[300px] border border-gray-100 rounded-2xl">
                {/* Use Case Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-dubai-gold/10 text-dubai-gold text-xs font-medium rounded-full">
                    {testimonial.useCase}
                  </span>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs">
                      <BadgeCheck className="h-4 w-4" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-4">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-dubai-gold/20" />
                  <blockquote className="text-muted-foreground pl-4">&ldquo;{testimonial.content}&rdquo;</blockquote>
                </div>

                {/* Author */}
                <footer className="border-t border-gray-100 pt-4 mt-auto">
                  <p className="font-semibold text-dubai-navy">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
            <Link href="/get-quote" className="group">
              Join 500+ Happy Customers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
