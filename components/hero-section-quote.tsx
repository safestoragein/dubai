"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Truck, Building, Box, Package, ArrowRight, Phone, Star, Shield, Thermometer, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MovingVehicles from "./quote/moving-vehicles"
import { useEffect, useState } from "react"

const rotatingHeadlines = [
  "Your belongings deserve the best",
  "Dedicated storage experts at your service",
  "Just minutes from your location",
  "Trusted by 500+ happy customers",
]

export default function HeroSectionQuote() {
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971 XX XXX XXXX"
  const [mounted, setMounted] = useState(false)
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* City Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dubai-navy to-dubai-navy/80 z-0">
        {/* City Skyline Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-dubai-navy">
          <svg
            className="absolute bottom-0 w-full h-48 text-dubai-navy"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('https://v0.blob.com/dubai-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>
        </div>

        {/* Burj Khalifa in the center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Main tower */}
            <div className="w-8 h-[280px] bg-gradient-to-t from-blue-900/70 to-blue-700/70 rounded-t-lg"></div>

            {/* Wider base sections */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[100px] bg-gradient-to-t from-blue-900/70 to-blue-800/70 rounded-t-lg"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-[60px] bg-gradient-to-t from-blue-900/70 to-blue-800/70 rounded-t-lg"></div>

            {/* Spire */}
            <div className="absolute bottom-[280px] left-1/2 transform -translate-x-1/2 w-1 h-[40px] bg-gray-300/70"></div>

            {/* Windows */}
            <div className="absolute inset-0 flex flex-col items-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex justify-center w-full mt-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-1 h-1 mx-[2px] bg-yellow-100"
                      style={{
                        opacity: Math.random() > 0.3 ? 0.7 : 0.2,
                        animation: `burjWindowPulse ${2 + Math.random() * 3}s infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Buildings - Left Side */}
        <div className="absolute inset-0">
          {mounted &&
            Array.from({ length: 7 }).map((_, i) => {
              const width = 20 + Math.random() * 30
              const height = 100 + Math.random() * 200
              const left = Math.random() * 40 // Left side only
              const animationType = i % 3 // 0, 1, or 2 for different animation types

              return (
                <motion.div
                  key={`left-${i}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1 + Math.random(),
                    delay: 0.2 * i,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 bg-dubai-navy/80"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    borderRadius: "2px 2px 0 0",
                    animation:
                      animationType === 0
                        ? `floatBuildingVertical ${15 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
                        : animationType === 1
                          ? `floatBuildingHorizontal ${20 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 5}s`
                          : `floatBuildingDiagonal ${25 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
                  }}
                >
                  {/* Windows */}
                  {Array.from({ length: Math.floor(height / 15) }).map((_, j) => (
                    <div key={j} className="flex justify-center w-full" style={{ marginTop: "10px" }}>
                      {Array.from({ length: Math.floor(width / 10) }).map((_, k) => (
                        <div
                          key={k}
                          className="w-2 h-2 mx-1 bg-yellow-100/70"
                          style={{
                            opacity: Math.random() > 0.3 ? 0.7 : 0,
                            animation: Math.random() > 0.8 ? "windowPulse 2s infinite" : "none",
                            animationDelay: `${Math.random() * 5}s`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </motion.div>
              )
            })}

          {/* Animated Buildings - Right Side */}
          {mounted &&
            Array.from({ length: 7 }).map((_, i) => {
              const width = 20 + Math.random() * 30
              const height = 100 + Math.random() * 200
              const left = 60 + Math.random() * 40 // Right side only
              const animationType = i % 3 // 0, 1, or 2 for different animation types

              return (
                <motion.div
                  key={`right-${i}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1 + Math.random(),
                    delay: 0.2 * i,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 bg-dubai-navy/80"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    borderRadius: "2px 2px 0 0",
                    animation:
                      animationType === 0
                        ? `floatBuildingVertical ${15 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
                        : animationType === 1
                          ? `floatBuildingHorizontal ${20 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 5}s`
                          : `floatBuildingDiagonal ${25 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
                  }}
                >
                  {/* Windows */}
                  {Array.from({ length: Math.floor(height / 15) }).map((_, j) => (
                    <div key={j} className="flex justify-center w-full" style={{ marginTop: "10px" }}>
                      {Array.from({ length: Math.floor(width / 10) }).map((_, k) => (
                        <div
                          key={k}
                          className="w-2 h-2 mx-1 bg-yellow-100/70"
                          style={{
                            opacity: Math.random() > 0.3 ? 0.7 : 0,
                            animation: Math.random() > 0.8 ? "windowPulse 2s infinite" : "none",
                            animationDelay: `${Math.random() * 5}s`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </motion.div>
              )
            })}

          {/* Additional Small Buildings for Depth */}
          {mounted &&
            Array.from({ length: 10 }).map((_, i) => {
              const width = 10 + Math.random() * 15
              const height = 40 + Math.random() * 80
              const left = Math.random() * 100
              const animationType = i % 4 // 0, 1, 2, or 3 for different animation types

              return (
                <motion.div
                  key={`small-${i}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  transition={{
                    duration: 0.8 + Math.random(),
                    delay: 0.1 * i,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 bg-dubai-navy/60"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    borderRadius: "2px 2px 0 0",
                    zIndex: 1,
                    animation:
                      animationType === 0
                        ? `floatBuildingVertical ${10 + Math.random() * 8}s infinite ease-in-out ${Math.random() * 5}s`
                        : animationType === 1
                          ? `floatBuildingHorizontal ${12 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
                          : animationType === 2
                            ? `floatBuildingDiagonal ${15 + Math.random() * 8}s infinite ease-in-out ${Math.random() * 5}s`
                            : `floatBuildingScale ${18 + Math.random() * 7}s infinite ease-in-out ${Math.random() * 5}s`,
                  }}
                >
                  {/* Windows */}
                  {Array.from({ length: Math.floor(height / 15) }).map((_, j) => (
                    <div key={j} className="flex justify-center w-full" style={{ marginTop: "8px" }}>
                      {Array.from({ length: Math.floor(width / 8) }).map((_, k) => (
                        <div
                          key={k}
                          className="w-1 h-1 mx-[1px] bg-yellow-100/70"
                          style={{
                            opacity: Math.random() > 0.3 ? 0.5 : 0,
                            animation: Math.random() > 0.8 ? "windowPulse 3s infinite" : "none",
                            animationDelay: `${Math.random() * 5}s`,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </motion.div>
              )
            })}
        </div>
      </div>

      {/* Moving Vehicles Component - positioned lower */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <MovingVehicles />
      </div>

      <div className="container px-4 md:px-6 relative z-10 py-16 md:py-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-white text-center max-w-5xl mx-auto">
            {/* Trust Badge Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (487+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">7+ Years Serving Dubai</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Dubai&apos;s Most Trusted <span className="text-dubai-gold">Storage Partner</span>
            </h1>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 text-lg md:text-xl text-white/90">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-dubai-gold" />
                24/7 Access
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-dubai-gold" />
                Climate-Controlled
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-dubai-gold" />
                Hassle-Free Pickup
              </span>
            </div>

            {/* Rotating Headlines */}
            <div className="h-8 mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-dubai-gold italic"
                >
                  &quot;{rotatingHeadlines[currentHeadline]}&quot;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Trust Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
              {[
                { icon: Shield, text: "24/7 CCTV Monitoring" },
                { icon: Thermometer, text: "Climate Controlled" },
                { icon: Package, text: "Free Insurance up to AED 5000" },
                { icon: Truck, text: "Same-Day Pickup Available" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <div className="rounded-full bg-dubai-gold/20 p-2 shrink-0">
                    <feature.icon className="h-4 w-4 text-dubai-gold" />
                  </div>
                  <span className="text-white/90 text-sm text-left">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8" asChild>
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 050-577-3388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
