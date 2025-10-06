"use client"

import { motion } from "framer-motion"
import { Truck, Building, Box, Package } from "lucide-react"
import MovingVehicles from "./moving-vehicles"
// Make sure the QuoteForm import is correct
import QuoteForm from "./quote-form"

export default function QuotePage() {
  return (
    <>
      {/* Hero Section with City Background and Moving Vehicles */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
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

          {/* Light Buildings in Dark Background */}
          <div className="absolute inset-0">
            {/* Tall Buildings with Windows */}
            {Array.from({ length: 25 }).map((_, i) => {
              const width = 20 + Math.random() * 40
              const height = 100 + Math.random() * 300
              const left = Math.random() * 100
              const delay = Math.random() * 5

              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: delay * 0.1, duration: 0.5 }}
                  className="absolute bottom-0 bg-dubai-navy/80"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    borderRadius: "2px 2px 0 0",
                  }}
                >
                  {/* Windows */}
                  {Array.from({ length: Math.floor(height / 15) }).map((_, j) => (
                    <div key={j} className="flex justify-center w-full" style={{ marginTop: "10px" }}>
                      {Array.from({ length: Math.floor(width / 10) }).map((_, k) => (
                        <motion.div
                          key={k}
                          initial={{ opacity: Math.random() > 0.3 ? 0.7 : 0 }}
                          animate={{
                            opacity: Math.random() > 0.7 ? [0.7, 0.3, 0.7] : Math.random() > 0.3 ? 0.7 : 0,
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Math.random() > 0.8 ? Number.POSITIVE_INFINITY : 0,
                            repeatType: "reverse",
                            delay: Math.random() * 5,
                          }}
                          className="w-2 h-2 mx-1 bg-yellow-100/70"
                        />
                      ))}
                    </div>
                  ))}
                </motion.div>
              )
            })}

            {/* Distant Skyscrapers */}
            {Array.from({ length: 8 }).map((_, i) => {
              const width = 30 + Math.random() * 20
              const height = 250 + Math.random() * 350
              const left = 10 + i * 10 + Math.random() * 5

              return (
                <motion.div
                  key={`skyscraper-${i}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.4 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="absolute bottom-0 bg-dubai-navy/60"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    borderRadius: "3px 3px 0 0",
                    zIndex: 1,
                  }}
                >
                  {/* Antenna */}
                  {Math.random() > 0.5 && (
                    <div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-dubai-navy/60"
                      style={{
                        height: `${10 + Math.random() * 20}px`,
                      }}
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full">
                        <motion.div
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="w-full h-full bg-red-500/70 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Animated Stars/City Lights */}
          <div className="absolute inset-0">
            {Array.from({ length: 70 }).map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 70}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Animated Clouds */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute opacity-10"
              style={{
                top: `${10 + Math.random() * 30}%`,
                left: `-20%`,
              }}
              animate={{ left: "120%" }}
              transition={{
                duration: 60 + Math.random() * 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 60,
              }}
            >
              <div
                className="bg-white rounded-full"
                style={{
                  width: `${80 + Math.random() * 120}px`,
                  height: `${40 + Math.random() * 60}px`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Moving Vehicles Component - positioned lower */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <MovingVehicles />
        </div>

        <div className="container px-4 md:px-6 relative z-10 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="inline-block px-4 py-1 bg-dubai-gold text-white text-sm font-medium rounded-full mb-6">
                Free Quote
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get Your <span className="text-dubai-gold">Free Storage Quote</span> in Minutes
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Fill out our simple form and receive a personalized storage solution quote tailored to your specific
                needs. No obligations, just transparent pricing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Truck, text: "Hassle free Pickup & Delivery" },
                  { icon: Building, text: "Climate-Controlled Units" },
                  { icon: Box, text: "Flexible Storage Terms" },
                  { icon: Package, text: "Secure Facilities" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="rounded-full bg-dubai-gold/20 p-2">
                      <feature.icon className="h-4 w-4 text-dubai-gold" />
                    </div>
                    <span className="text-white/90">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <QuoteForm />
          </div>
        </div>

        {/* Add CSS for window animation */}
        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.3; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">Why Choose SafeStorage Dubai?</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-lg text-dubai-navy/70 max-w-3xl mx-auto">
              Experience premium storage solutions with unmatched benefits and customer service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent Pricing",
                description: "No hidden fees or surprise charges. What we quote is what you pay.",
                icon: "💰",
              },
              {
                title: "Flexible Storage Terms",
                description: "Short-term or long-term options to fit your specific needs.",
                icon: "⏱️",
              },
              {
                title: "Secure Facilities",
                description: "24/7 surveillance, climate control, and advanced security systems.",
                icon: "🔒",
              },
              {
                title: "Hassle free Pickup & Delivery",
                description: "We handle the logistics so you don't have to worry about transportation.",
                icon: "🚚",
              },
              {
                title: "Professional Team",
                description: "Experienced staff to assist with all your storage requirements.",
                icon: "👥",
              },
              {
                title: "Excellent Customer Service",
                description: "Dedicated support team available to help you every step of the way.",
                icon: "⭐",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dubai-navy/5 p-6 rounded-xl border border-dubai-navy/10 hover:border-dubai-gold/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dubai-navy">{feature.title}</h3>
                <p className="text-dubai-navy/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dubai-navy/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">What Our Customers Say</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-lg text-dubai-navy/70 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with SafeStorage Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The quote process was incredibly simple, and the price was exactly as quoted with no hidden fees. Highly recommend!",
                author: "Ahmed K.",
                role: "Personal Storage Customer",
              },
              {
                quote:
                  "As a business owner, I needed flexible storage solutions. SafeStorage provided a detailed quote and delivered exactly what they promised.",
                author: "Sarah M.",
                role: "Business Storage Customer",
              },
              {
                quote:
                  "I was impressed by how quickly I received my quote and how transparent the pricing was. The pickup service was an added bonus!",
                author: "Mohammed A.",
                role: "Vehicle Storage Customer",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-dubai-gold/10"
              >
                <div className="text-dubai-gold text-4xl mb-4">"</div>
                <p className="text-dubai-navy/80 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-dubai-gold/20 flex items-center justify-center text-dubai-gold font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-dubai-navy">{testimonial.author}</p>
                    <p className="text-sm text-dubai-navy/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
