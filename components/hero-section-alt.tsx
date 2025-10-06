"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full min-h-[600px] h-[90vh] relative overflow-hidden">
      {/* Background image using img tag */}
      <img
        src="/images/design-mode/full-shot-woman-scanning-products_23-2148943323.jpg.jpeg"
        alt="SafeStorage Dubai Facility"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-dubai-navy/40" style={{ zIndex: 1 }}></div>

      <div className="container h-full px-4 md:px-6 relative z-10 flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-dubai-gold px-4 py-1.5 text-sm font-medium text-white">
              Secure Storage Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Secure, Affordable & Hassle-Free Storage in Dubai
            </h1>
            <p className="text-lg text-white/90">
              Flexible self-storage solutions for homes & businesses. Safe, climate-controlled, and accessible 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white">
                Book Your Space Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white/20">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
