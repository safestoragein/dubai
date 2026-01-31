"use client"

import { m } from "framer-motion"
import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            See SafeStorage in Action
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px]"
          >
            Watch how our storage solutions work and hear from our satisfied customers
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <Play className="w-16 h-16 mx-auto mb-4 text-dubai-navy/50" />
              <h3 className="text-xl font-semibold text-dubai-navy">Video Coming Soon</h3>
              <p className="text-dubai-navy/70 mt-2">Our customer testimonial videos will be available shortly</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
