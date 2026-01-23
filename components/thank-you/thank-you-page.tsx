"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Home,
  Truck,
  Package,
  Box,
  Warehouse,
  Archive,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import confetti from "canvas-confetti"

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false)
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971 XX XXX XXXX"

  // Trigger confetti effect when component mounts
  useEffect(() => {
    setMounted(true)

    // Trigger confetti
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Hero Section with Enhanced Animations */}
      <section className="relative py-20 bg-gradient-to-b from-dubai-navy to-dubai-navy/90 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circles - made continuous */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full bg-dubai-gold/10"
              style={{
                width: `${20 + Math.random() * 100}px`,
                height: `${20 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Moving Trucks - Logistics Animation */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`truck-${i}`}
              className="absolute"
              style={{
                bottom: `${10 + Math.random() * 60}%`,
                left: `-10%`,
              }}
              animate={{
                x: ["0%", "110%"],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            >
              <Truck
                className="text-dubai-gold/30"
                style={{
                  width: `${30 + Math.random() * 20}px`,
                  height: `${20 + Math.random() * 15}px`,
                }}
              />
            </motion.div>
          ))}

          {/* Floating Boxes - Logistics Animation */}
          {Array.from({ length: 8 }).map((_, i) => {
            const icons = [Box, Package, Archive, Warehouse]
            const RandomIcon = icons[Math.floor(Math.random() * icons.length)]
            return (
              <motion.div
                key={`box-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, Math.random() > 0.5 ? 10 : -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              >
                <RandomIcon
                  className="text-dubai-gold/20"
                  style={{
                    width: `${25 + Math.random() * 15}px`,
                    height: `${25 + Math.random() * 15}px`,
                  }}
                />
              </motion.div>
            )
          })}

          {/* Storage Unit Grid Animation */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10">
            <div className="grid grid-cols-8 h-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={`unit-${i}`}
                  className="border border-dubai-gold/30 relative"
                  animate={{
                    backgroundColor: ["rgba(212, 175, 55, 0.0)", "rgba(212, 175, 55, 0.1)", "rgba(212, 175, 55, 0.0)"],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                >
                  {Math.random() > 0.7 && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Box className="text-dubai-gold/50 w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-dubai-gold/20 mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <CheckCircle2 className="h-12 w-12 text-dubai-gold" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Thank You for Your <span className="text-dubai-gold">Quote Request</span>!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-white/80 mb-8"
            >
              Your request has been successfully submitted. Our team will contact you shortly with a personalized
              storage solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">
                  <Package className="mr-2 h-5 w-5" />
                  Back to Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy" asChild>
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Return to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy" asChild>
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Animated Logistics Path */}
        <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
          <svg className="w-full h-20" viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 Q360,0 720,15 T1440,15" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="2" fill="none" />
            {/* Animated Truck along the path */}
            <motion.g
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ offsetPath: "path('M0,15 Q360,0 720,15 T1440,15')" }}
            >
              <Truck className="text-dubai-gold w-8 h-8" />
            </motion.g>
            {/* Animated Box along the path */}
            <motion.g
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 5,
              }}
              style={{ offsetPath: "path('M0,15 Q360,0 720,15 T1440,15')" }}
            >
              <Box className="text-dubai-gold w-6 h-6" />
            </motion.g>
          </svg>
        </div>
      </section>

      {/* What Happens Next Section - Enhanced with Animations */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background logistics elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle box patterns */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`bg-box-${i}`}
              className="absolute opacity-5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Box style={{ width: `${50 + Math.random() * 100}px`, height: `${50 + Math.random() * 100}px` }} />
            </motion.div>
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dubai-navy">What Happens Next?</h2>
            <p className="text-dubai-navy/70 max-w-2xl mx-auto">
              Here's what you can expect after submitting your quote request
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "1. We'll Contact You",
                description: "Our team will call you within 24 hours to discuss your storage needs in detail.",
                delay: 0.2,
              },
              {
                icon: Calendar,
                title: "2. Personalized Quote",
                description: "We'll prepare a customized storage solution based on your specific requirements.",
                delay: 0.4,
              },
              {
                icon: CheckCircle2,
                title: "3. Secure Your Storage",
                description: "Once you approve the quote, we'll schedule pickup and secure your items.",
                delay: 0.6,
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.delay }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative overflow-hidden"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="rounded-full bg-dubai-gold/10 p-4 w-16 h-16 flex items-center justify-center mb-4 mx-auto relative">
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="h-8 w-8 text-dubai-gold" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dubai-navy text-center">{step.title}</h3>
                  <p className="text-dubai-navy/70 text-center">{step.description}</p>

                  {/* Step connector - only for first two steps */}
                  {index < 2 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-dubai-gold/30"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Animated Logistics Process Visualization */}
          <div className="mt-16 max-w-4xl mx-auto relative h-20">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 50" fill="none">
                <path
                  d="M0,25 Q200,10 400,25 T800,25"
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />

                {/* Animated Truck */}
                <motion.g
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{ offsetPath: "path('M0,25 Q200,10 400,25 T800,25')" }}
                >
                  <Truck className="text-dubai-gold" />
                </motion.g>

                {/* Animated Packages */}
                {[0, 1, 2].map((i) => (
                  <motion.g
                    key={`path-box-${i}`}
                    animate={{ offsetDistance: [`${i * 30}%`, `${100 + i * 30}%`] }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 2,
                    }}
                    style={{ offsetPath: "path('M0,25 Q200,10 400,25 T800,25')" }}
                  >
                    <Package className="text-dubai-gold/70" style={{ width: 15, height: 15 }} />
                  </motion.g>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle animated patterns */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 50,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dubai-navy">Have Questions?</h2>
            <p className="text-dubai-navy/70 max-w-2xl mx-auto">
              Our team is ready to assist you with any questions you might have
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-dubai-navy text-white relative overflow-hidden">
                {/* Animated background for contact section */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fillOpacity='0.2' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "30px 30px",
                  }}
                />

                <h3 className="text-2xl font-bold mb-6 relative">Contact Us</h3>
                <ul className="space-y-6 relative">
                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="rounded-full bg-dubai-gold/20 p-2 mt-1"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Phone className="h-5 w-5 text-dubai-gold" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-dubai-gold">Phone</p>
                      <a
                        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                        className="text-white hover:text-dubai-gold transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="rounded-full bg-dubai-gold/20 p-2 mt-1"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <Mail className="h-5 w-5 text-dubai-gold" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-dubai-gold">Email</p>
                      <a
                        href="mailto:safestoragedubai@gmail.com"
                        className="text-white hover:text-dubai-gold transition-colors"
                      >
                        safestoragedubai@gmail.com
                      </a>
                    </div>
                  </motion.li>
                </ul>
              </div>

              <div className="p-8 relative">
                <h3 className="text-2xl font-bold mb-6 text-dubai-navy">Business Hours</h3>
                <ul className="space-y-4 text-dubai-navy/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-dubai-navy/70 mb-4">Need immediate assistance? Call our customer support team.</p>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                      <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                        <motion.div
                          animate={{
                            x: [0, 3, 0, -3, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                        </motion.div>
                        Call Us Now
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Services Section with Logistics Animations */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Animated logistics background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving trucks in background */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`bg-truck-${i}`}
              className="absolute opacity-5"
              style={{
                bottom: `${20 + i * 25}%`,
                left: `-10%`,
              }}
              animate={{
                x: ["0%", "120%"],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 3,
              }}
            >
              <Truck style={{ width: `${80 + i * 20}px`, height: `${40 + i * 10}px` }} />
            </motion.div>
          ))}

          {/* Storage unit grid in background */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <div className="grid grid-cols-3 grid-rows-6 h-full">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                  key={`grid-${i}`}
                  className="border border-dubai-navy"
                  animate={{
                    backgroundColor: ["rgba(10, 36, 99, 0.0)", "rgba(10, 36, 99, 0.1)", "rgba(10, 36, 99, 0.0)"],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dubai-navy">Explore Our Services</h2>
            <p className="text-dubai-navy/70 max-w-2xl mx-auto">
              Discover our range of storage solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Storage",
                description: "Secure storage for your personal belongings, furniture, and household items.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
                link: "/services#personal",
                icon: Box,
              },
              {
                title: "Business Storage",
                description: "Flexible storage solutions for inventory, documents, and office equipment.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
                link: "/services#business",
                icon: Archive,
              },
              {
                title: "Vehicle Storage",
                description: "Specialized storage for cars, boats, RVs, and other vehicles.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
                link: "/services#vehicle",
                icon: Truck,
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <Link href={service.link}>
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>

                      {/* Animated icon overlay */}
                      <motion.div
                        className="absolute top-4 right-4 bg-dubai-gold/80 rounded-full p-2"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                  </Link>
                  <p className="text-dubai-navy/70 mb-4">{service.description}</p>
                  <Link href={service.link} className="text-dubai-gold flex items-center hover:underline group">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Animated logistics path at bottom */}
          <div className="mt-16 relative h-16">
            <svg className="w-full h-full" viewBox="0 0 1200 50" fill="none">
              <path d="M0,25 Q300,40 600,25 T1200,25" stroke="rgba(10, 36, 99, 0.1)" strokeWidth="2" fill="none" />

              {/* Animated elements along the path */}
              <motion.g
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ offsetPath: "path('M0,25 Q300,40 600,25 T1200,25')" }}
              >
                <Truck className="text-dubai-navy/20" />
              </motion.g>

              {/* Multiple boxes following the path */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.g
                  key={`path-box-${i}`}
                  animate={{ offsetDistance: [`${i * 20}%`, `${100 + i * 20}%`] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 1.5,
                  }}
                  style={{ offsetPath: "path('M0,25 Q300,40 600,25 T1200,25')" }}
                >
                  <Box className="text-dubai-navy/20" style={{ width: 12, height: 12 }} />
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Tracking Pixel Comment */}
      {/* 
        <!-- You can add your conversion tracking pixels here -->
        <!-- Example for Google Analytics 4 event -->
        <script>
          gtag('event', 'quote_submission_complete', {
            'event_category': 'quote',
            'event_label': 'Quote Form Submission'
          });
        </script>
        
        <!-- Example for Facebook Pixel -->
        <script>
          fbq('track', 'Lead');
        </script>
      */}
    </>
  )
}
