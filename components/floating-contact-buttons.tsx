"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { env } from "@/lib/env"

export default function FloatingContactButtons() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Expanded buttons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 right-0 flex flex-col gap-3"
                >
                  {/* WhatsApp Button */}
                  <motion.a
                    href={env.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">WhatsApp</span>
                  </motion.a>

                  {/* Phone Button */}
                  <motion.a
                    href={env.PHONE_LINK}
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">Call Now</span>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main toggle button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
                isExpanded
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-dubai-gold hover:bg-dubai-darkgold text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isExpanded ? 180 : 0 }}
            >
              {isExpanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
