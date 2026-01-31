"use client"

import { m } from "framer-motion"
import { Truck, Building, Box, Package } from "lucide-react"
import QuoteForm from "./quote/quote-form"

export default function LandingQuoteSection() {
  return (
    <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
      {/* Dubai-style decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-dubai-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-dubai-skyblue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10 py-4 md:py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">Need a Custom Storage Solution?</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-dubai-gold"></div>
            <div className="px-4">
              <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
            </div>
            <div className="h-px w-12 bg-dubai-gold"></div>
          </div>
          <p className="text-lg text-dubai-navy/70 max-w-3xl mx-auto">
            Get a personalized storage plan tailored to your specific requirements with our easy quote process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <m.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-6 text-dubai-navy">Why Choose SafeStorage Dubai?</h3>
            <p className="text-dubai-navy/70 mb-8">
              We offer premium storage solutions with transparent pricing and exceptional service. Our secure,
              climate-controlled facilities ensure your belongings remain in perfect condition.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Truck, text: "Hassle free Pickup & Delivery" },
                { icon: Building, text: "Climate-Controlled Units" },
                { icon: Box, text: "Flexible Storage Terms" },
                { icon: Package, text: "Secure Facilities" },
              ].map((feature, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="rounded-full bg-dubai-gold/20 p-2">
                    <feature.icon className="h-4 w-4 text-dubai-gold" />
                  </div>
                  <span className="text-dubai-navy/90">{feature.text}</span>
                </m.div>
              ))}
            </div>

            <div className="bg-dubai-gold/10 p-6 rounded-xl border border-dubai-gold/20">
              <h4 className="font-bold mb-2 text-dubai-navy">Customer Satisfaction Guaranteed</h4>
              <p className="text-dubai-navy/70">
                Join thousands of satisfied customers who trust SafeStorage Dubai for their storage needs. Our 5-star
                rated service ensures peace of mind.
              </p>
            </div>
          </m.div>

          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
