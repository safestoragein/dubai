"use client"

import { m } from "framer-motion"
import { Truck, Car, Package } from "lucide-react"

// Pre-computed city light positions — no Math.random() in render
const CITY_LIGHTS = [
  { top: 12, left: 5,  dur: 2.1, delay: 0 },
  { top: 25, left: 10, dur: 3.5, delay: 0.5 },
  { top: 8,  left: 18, dur: 2.8, delay: 1 },
  { top: 40, left: 26, dur: 4.2, delay: 0.3 },
  { top: 15, left: 33, dur: 2.3, delay: 1.5 },
  { top: 30, left: 41, dur: 3.0, delay: 0.7 },
  { top: 20, left: 50, dur: 2.6, delay: 0.2 },
  { top: 45, left: 58, dur: 3.8, delay: 1.2 },
  { top: 10, left: 65, dur: 2.4, delay: 0.8 },
  { top: 35, left: 73, dur: 4.0, delay: 0 },
  { top: 18, left: 80, dur: 2.9, delay: 1.8 },
  { top: 50, left: 86, dur: 3.3, delay: 0.4 },
  { top: 22, left: 92, dur: 2.7, delay: 1.1 },
  { top: 38, left: 96, dur: 3.6, delay: 0.6 },
  { top: 5,  left: 44, dur: 2.2, delay: 1.4 },
]

export default function MovingVehicles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 z-10" />

      {/* Road markings */}
      <div className="absolute bottom-8 left-0 right-0 h-1 z-10">
        <div className="flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-12 h-1 bg-yellow-400 mx-4" />
          ))}
        </div>
      </div>

      {/* Street lights */}
      <div className="absolute bottom-16 left-0 right-0 z-10">
        <div className="flex justify-between">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="w-1 h-12 bg-gray-600" />
              <m.div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <div className="w-4 h-4 bg-yellow-300 rounded-full opacity-70 shadow-lg shadow-yellow-300/50" />
              </m.div>
            </div>
          ))}
        </div>
      </div>

      {/* Moving Truck 1 */}
      <m.div
        className="absolute bottom-4 z-20"
        initial={{ x: -100 }}
        animate={{ x: "calc(100vw + 100px)" }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Truck className="h-12 w-12 text-dubai-gold" />
      </m.div>

      {/* Moving Car 1 */}
      <m.div
        className="absolute bottom-4 z-20"
        initial={{ x: "calc(100vw + 100px)" }}
        animate={{ x: -100 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
      >
        <Car className="h-8 w-8 text-white" />
      </m.div>

      {/* Moving Truck 2 */}
      <m.div
        className="absolute bottom-4 z-20"
        initial={{ x: -100 }}
        animate={{ x: "calc(100vw + 100px)" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 5 }}
      >
        <Truck className="h-10 w-10 text-white" />
      </m.div>

      {/* Moving Car 2 */}
      <m.div
        className="absolute bottom-4 z-20"
        initial={{ x: "calc(100vw + 100px)" }}
        animate={{ x: -100 }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 7 }}
      >
        <Car className="h-6 w-6 text-dubai-gold" />
      </m.div>

      {/* Moving Package */}
      <m.div
        className="absolute bottom-20 z-20"
        initial={{ x: -50 }}
        animate={{ x: "calc(100vw + 50px)" }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Package className="h-8 w-8 text-dubai-gold" />
      </m.div>

      {/* City lights — pre-computed positions (was 70, now 15) */}
      <div className="absolute inset-0">
        {CITY_LIGHTS.map((light, i) => (
          <m.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{ top: `${light.top}%`, left: `${light.left}%` }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: light.dur,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: light.delay,
            }}
          />
        ))}
      </div>
    </div>
  )
}
