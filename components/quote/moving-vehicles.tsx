"use client"

import { motion } from "framer-motion"
import { Truck, Car, Package, Lightbulb } from "lucide-react"

export default function MovingVehicles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Road at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800 z-10"></div>

      {/* Road markings */}
      <div className="absolute bottom-8 left-0 right-0 h-1 z-10">
        <div className="flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-12 h-1 bg-yellow-400 mx-4"></div>
          ))}
        </div>
      </div>

      {/* Street lights */}
      <div className="absolute bottom-16 left-0 right-0 z-10">
        <div className="flex justify-between">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="w-1 h-12 bg-gray-600"></div>
              <motion.div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <div className="w-4 h-4 bg-yellow-300 rounded-full opacity-70 shadow-lg shadow-yellow-300/50"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-300/20 rounded-full"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Moving Truck 1 */}
      <motion.div
        className="absolute bottom-4 z-20"
        initial={{ x: -100 }}
        animate={{ x: "calc(100vw + 100px)" }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="relative">
          <Truck className="h-12 w-12 text-dubai-gold" />
          {/* Headlights */}
          <motion.div
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-70 shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute top-0 left-0 w-6 h-3 bg-yellow-300/20 rounded-full transform -translate-x-2"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving Car 1 */}
      <motion.div
        className="absolute bottom-4 z-20"
        initial={{ x: "calc(100vw + 100px)" }}
        animate={{ x: -100 }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 2,
        }}
      >
        <div className="relative">
          <Car className="h-8 w-8 text-white" />
          {/* Taillights */}
          <motion.div
            className="absolute top-1/2 left-0 transform -translate-y-1/2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full opacity-70 shadow-lg shadow-red-500/50"></div>
            <div className="absolute top-0 left-0 w-4 h-2 bg-red-500/20 rounded-full transform translate-x-1"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving Truck 2 */}
      <motion.div
        className="absolute bottom-4 z-20"
        initial={{ x: -100 }}
        animate={{ x: "calc(100vw + 100px)" }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 5,
        }}
      >
        <div className="relative">
          <Truck className="h-10 w-10 text-white" />
          {/* Headlights */}
          <motion.div
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-70 shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute top-0 left-0 w-5 h-3 bg-yellow-300/20 rounded-full transform -translate-x-2"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving Car 2 */}
      <motion.div
        className="absolute bottom-4 z-20"
        initial={{ x: "calc(100vw + 100px)" }}
        animate={{ x: -100 }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 7,
        }}
      >
        <div className="relative">
          <Car className="h-6 w-6 text-dubai-gold" />
          {/* Taillights */}
          <motion.div
            className="absolute top-1/2 left-0 transform -translate-y-1/2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-70 shadow-lg shadow-red-500/50"></div>
            <div className="absolute top-0 left-0 w-3 h-2 bg-red-500/20 rounded-full transform translate-x-1"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Cars */}
      <motion.div
        className="absolute bottom-4 z-20"
        initial={{ x: -100 }}
        animate={{ x: "calc(100vw + 100px)" }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 9,
        }}
      >
        <div className="relative">
          <Car className="h-7 w-7 text-blue-400" />
          {/* Headlights */}
          <motion.div
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-70 shadow-lg shadow-yellow-300/50"></div>
            <div className="absolute top-0 left-0 w-4 h-2 bg-yellow-300/20 rounded-full transform -translate-x-2"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving Package */}
      <motion.div
        className="absolute bottom-20 z-20"
        initial={{ x: -50, y: 0 }}
        animate={{
          x: "calc(100vw + 50px)",
          y: [0, -20, 0, -15, 0],
        }}
        transition={{
          x: {
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          y: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <div className="relative">
          <Package className="h-8 w-8 text-dubai-gold" />
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0"
          >
            <Package className="h-8 w-8 text-dubai-gold opacity-0" />
          </motion.div>
        </div>
      </motion.div>

      {/* City lights effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 70 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Lights */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`floating-light-${i}`}
          className="absolute z-20"
          style={{
            bottom: `${30 + Math.random() * 40}%`,
            left: `${10 + (i * 20) + Math.random() * 5}%`,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Lightbulb className="h-4 w-4 text-yellow-300" />
            <div className="absolute top-0 left-0 w-8 h-8 bg-yellow-300/10 rounded-full -translate-x-2 -translate-y-2"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
