"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { env } from "@/lib/env"

interface CallWidgetProps {
  phoneNumber?: string
}

export default function CallWidget({ phoneNumber }: CallWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayNumber = phoneNumber || env.CONTACT_NUMBER

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-dubai-gold/20"
          >
            <div className="flex flex-col items-center">
              <p className="font-medium mb-2 text-dubai-navy">Call us now</p>
              <p className="text-lg font-bold text-dubai-gold mb-3">{displayNumber}</p>
              <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <a href={`tel:${displayNumber.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}>
        <Button
          size="lg"
          className={`rounded-full h-16 w-16 shadow-lg ${isExpanded ? "bg-dubai-darkgold hover:bg-dubai-gold" : "bg-dubai-gold hover:bg-dubai-darkgold"}`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Close call widget" : "Open call widget"}
        >
          <motion.div
            animate={!isExpanded ? { rotate: [0, 10, -10, 10, 0] } : {}}
            transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 5, duration: 0.5 }}
          >
            {isExpanded ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}
