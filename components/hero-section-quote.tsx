"use client"

import { AnimatePresence, m } from "framer-motion"
import { Truck, Package, ArrowRight, Phone, Star, Shield, Thermometer, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, lazy, Suspense } from "react"

const MovingVehicles = lazy(() => import("./quote/moving-vehicles"))

const rotatingHeadlines = [
  "Your belongings deserve the best",
  "Dedicated storage experts at your service",
  "Just minutes from your location",
  "Trusted by 500+ happy customers",
]

// Pre-computed building data — no Math.random() in render (avoids hydration mismatch)
const LEFT_BUILDINGS = [
  { width: 28, height: 180, left: 3,  animClass: "float-v", animDur: "15s", animDelay: "0s" },
  { width: 35, height: 240, left: 9,  animClass: "float-h", animDur: "22s", animDelay: "1s" },
  { width: 22, height: 150, left: 15, animClass: "float-d", animDur: "25s", animDelay: "0.5s" },
  { width: 40, height: 200, left: 23, animClass: "float-v", animDur: "18s", animDelay: "2s" },
  { width: 25, height: 170, left: 7,  animClass: "float-h", animDur: "20s", animDelay: "1.5s" },
  { width: 30, height: 220, left: 30, animClass: "float-d", animDur: "28s", animDelay: "0s" },
  { width: 18, height: 130, left: 17, animClass: "float-v", animDur: "16s", animDelay: "3s" },
]

const RIGHT_BUILDINGS = [
  { width: 32, height: 190, left: 62, animClass: "float-v", animDur: "17s", animDelay: "0.5s" },
  { width: 28, height: 210, left: 70, animClass: "float-h", animDur: "21s", animDelay: "1s" },
  { width: 45, height: 250, left: 78, animClass: "float-d", animDur: "26s", animDelay: "2s" },
  { width: 20, height: 160, left: 86, animClass: "float-v", animDur: "14s", animDelay: "0s" },
  { width: 35, height: 200, left: 64, animClass: "float-h", animDur: "23s", animDelay: "1.5s" },
  { width: 25, height: 140, left: 93, animClass: "float-d", animDur: "19s", animDelay: "0.5s" },
  { width: 30, height: 230, left: 74, animClass: "float-v", animDur: "24s", animDelay: "3s" },
]

const SMALL_BUILDINGS = [
  { width: 14, height: 70,  left: 5,  animClass: "float-v", animDur: "11s", animDelay: "0s"   },
  { width: 12, height: 55,  left: 18, animClass: "float-h", animDur: "13s", animDelay: "1s"   },
  { width: 18, height: 85,  left: 32, animClass: "float-d", animDur: "16s", animDelay: "0.5s" },
  { width: 10, height: 45,  left: 45, animClass: "float-s", animDur: "19s", animDelay: "2s"   },
  { width: 16, height: 75,  left: 55, animClass: "float-v", animDur: "12s", animDelay: "1.5s" },
  { width: 13, height: 60,  left: 68, animClass: "float-h", animDur: "14s", animDelay: "0s"   },
  { width: 20, height: 90,  left: 80, animClass: "float-d", animDur: "17s", animDelay: "0.5s" },
  { width: 11, height: 50,  left: 90, animClass: "float-s", animDur: "20s", animDelay: "3s"   },
  { width: 15, height: 65,  left: 40, animClass: "float-v", animDur: "10s", animDelay: "1s"   },
  { width: 17, height: 80,  left: 73, animClass: "float-h", animDur: "15s", animDelay: "2s"   },
]

const WINDOWS = [
  [0.7, 0.2, 0.7],
  [0.7, 0.7, 0.2],
  [0.2, 0.7, 0.7],
  [0.7, 0.7, 0.7],
  [0.2, 0.2, 0.7],
]

function BuildingWindows({ count, colCount, rowIdx }: { count: number; colCount: number; rowIdx: number }) {
  const pattern = WINDOWS[rowIdx % WINDOWS.length]
  return (
    <>
      {Array.from({ length: count }).map((_, j) => (
        <div key={j} className="flex justify-center w-full" style={{ marginTop: "10px" }}>
          {Array.from({ length: colCount }).map((_, k) => (
            <div
              key={k}
              className="w-1 h-1 mx-[2px] bg-yellow-100"
              style={{ opacity: pattern[k % pattern.length] }}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default function HeroSectionQuote() {
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971505773388"
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [showAnimations, setShowAnimations] = useState(false)

  useEffect(() => {
    // Defer background animations until after LCP is painted
    const timer = setTimeout(() => setShowAnimations(true), 300)
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length)
    }, 3500)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Static gradient background — renders immediately on SSR */}
      <div className="absolute inset-0 bg-gradient-to-b from-dubai-navy to-dubai-navy/80 z-0">
        {/* Static skyline SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-dubai-navy">
          <svg
            className="absolute bottom-0 w-full h-48 text-dubai-navy"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        {/* Burj Khalifa — static, always visible */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10" aria-hidden="true">
          <div className="relative">
            <div className="w-8 h-[280px] bg-gradient-to-t from-blue-900/70 to-blue-700/70 rounded-t-lg" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[100px] bg-gradient-to-t from-blue-900/70 to-blue-800/70 rounded-t-lg" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-[60px] bg-gradient-to-t from-blue-900/70 to-blue-800/70 rounded-t-lg" />
            <div className="absolute bottom-[280px] left-1/2 transform -translate-x-1/2 w-1 h-[40px] bg-gray-300/70" />
          </div>
        </div>

        {/* Animated buildings — desktop only, deferred after LCP */}
        {showAnimations && (
          <div className="absolute inset-0 hidden md:block" aria-hidden="true">
            {/* Left buildings */}
            {LEFT_BUILDINGS.map((b, i) => (
              <div
                key={`left-${i}`}
                className={`absolute bottom-0 bg-dubai-navy/80 hero-building-${b.animClass}`}
                style={{
                  width: `${b.width}px`,
                  height: `${b.height}px`,
                  left: `${b.left}%`,
                  borderRadius: "2px 2px 0 0",
                  animationDuration: b.animDur,
                  animationDelay: b.animDelay,
                }}
              >
                <BuildingWindows count={Math.floor(b.height / 15)} colCount={Math.floor(b.width / 10)} rowIdx={i} />
              </div>
            ))}

            {/* Right buildings */}
            {RIGHT_BUILDINGS.map((b, i) => (
              <div
                key={`right-${i}`}
                className={`absolute bottom-0 bg-dubai-navy/80 hero-building-${b.animClass}`}
                style={{
                  width: `${b.width}px`,
                  height: `${b.height}px`,
                  left: `${b.left}%`,
                  borderRadius: "2px 2px 0 0",
                  animationDuration: b.animDur,
                  animationDelay: b.animDelay,
                }}
              >
                <BuildingWindows count={Math.floor(b.height / 15)} colCount={Math.floor(b.width / 10)} rowIdx={i + 7} />
              </div>
            ))}

            {/* Small background buildings */}
            {SMALL_BUILDINGS.map((b, i) => (
              <div
                key={`small-${i}`}
                className={`absolute bottom-0 bg-dubai-navy/60 hero-building-${b.animClass}`}
                style={{
                  width: `${b.width}px`,
                  height: `${b.height}px`,
                  left: `${b.left}%`,
                  borderRadius: "2px 2px 0 0",
                  zIndex: 1,
                  animationDuration: b.animDur,
                  animationDelay: b.animDelay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Moving Vehicles — desktop only, lazy loaded */}
      <div className="absolute bottom-0 left-0 right-0 h-16 hidden md:block" aria-hidden="true">
        {showAnimations && (
          <Suspense fallback={null}>
            <MovingVehicles />
          </Suspense>
        )}
      </div>

      {/* Hero content — renders on SSR immediately, LCP is the h1 */}
      <div className="container px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-white text-center max-w-5xl mx-auto">
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-5">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-medium">4.9/5 (6700+ Reviews Globally)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Shield className="h-4 w-4 text-dubai-gold" aria-hidden="true" />
                <span className="text-white text-xs sm:text-sm font-medium">10+ Years Serving Globally</span>
              </div>
            </div>

            {/* LCP element — h1, no animation dependency */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Dubai&apos;s Most Trusted{" "}
              <span className="text-dubai-gold">Storage Partner</span>
            </h1>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-4 mb-4 text-base md:text-xl text-white/90">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-dubai-gold" aria-hidden="true" />
                24/7 Access
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span className="flex items-center gap-1.5">
                <Thermometer className="h-4 w-4 md:h-5 md:w-5 text-dubai-gold" aria-hidden="true" />
                Climate-Controlled
              </span>
              <span className="hidden md:inline text-white/50">•</span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 md:h-5 md:w-5 text-dubai-gold" aria-hidden="true" />
                Hassle-Free Pickup
              </span>
            </div>

            {/* Rotating headline */}
            <div className="h-7 mb-5" aria-live="polite">
              <AnimatePresence mode="wait">
                <m.p
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-lg text-dubai-gold italic"
                >
                  &quot;{rotatingHeadlines[currentHeadline]}&quot;
                </m.p>
              </AnimatePresence>
            </div>

            {/* Trust features grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-7 max-w-4xl mx-auto">
              {[
                { icon: Shield,      text: "24/7 CCTV Monitoring" },
                { icon: Thermometer, text: "Climate Controlled" },
                { icon: Package,     text: "Free Insurance" },
                { icon: Truck,       text: "Same-Day Pickup" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <div className="rounded-full bg-dubai-gold/20 p-1.5 shrink-0">
                    <feature.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-dubai-gold" aria-hidden="true" />
                  </div>
                  <span className="text-white/90 text-xs md:text-sm text-left">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                asChild
              >
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-white hover:bg-gray-100 text-base md:text-lg w-full sm:w-auto"
                asChild
              >
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
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
