"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Truck, Warehouse, Package, Phone, ArrowRight, Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971 XX XXX XXXX"

  // Refs for scroll animations
  const containerRef = useRef(null)

  // Steps data
  const steps = [
    {
      number: "01",
      title: "Book Your Storage",
      description:
        "Choose your storage plan & schedule pickup in just a few clicks! Our intuitive booking system makes it easy to select the perfect storage solution for your needs.",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-woman-scanning-products_23-2148943323.jpg-FAOsFt1liszoayCOCLFr9S99saKR82.jpeg",
      features: [
        "Simple online booking system",
        "Instant price quotes",
        "Flexible scheduling options",
        "No hidden fees",
      ],
    },
    {
      number: "02",
      title: "We Pick Up Your Items",
      description:
        "Our professional team arrives at your location, carefully packs & picks up your belongings securely. We handle everything with the utmost care and attention to detail.",
      icon: Truck,
      color: "from-green-500 to-green-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-woman-scanning-products_23-2148943323.jpg-FAOsFt1liszoayCOCLFr9S99saKR82.jpeg",
      features: [
        "Professional packing service",
        "Careful handling of all items",
        "Specialized equipment for heavy items",
        "Convenient pickup scheduling",
      ],
    },
    {
      number: "03",
      title: "Secure Storage",
      description:
        "Your items are stored safely in our state-of-the-art climate-controlled facility with 24/7 security monitoring. We ensure your belongings remain in perfect condition.",
      icon: Warehouse,
      color: "from-purple-500 to-purple-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-woman-scanning-products_23-2148943323.jpg-FAOsFt1liszoayCOCLFr9S99saKR82.jpeg",
      features: [
        "24/7 security surveillance",
        "Climate-controlled environment",
        "Fire protection systems",
        "Pest control measures",
      ],
    },
    {
      number: "04",
      title: "Easy Return Anytime",
      description:
        "Need your items back? Simply request a return through our app or website, and we'll deliver them to your doorstep at your convenience. It's that simple!",
      icon: Package,
      color: "from-orange-500 to-orange-600",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/full-shot-woman-scanning-products_23-2148943323.jpg-FAOsFt1liszoayCOCLFr9S99saKR82.jpeg",
      features: [
        "On-demand delivery service",
        "Online return request system",
        "Flexible delivery scheduling",
        "Real-time delivery tracking",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section - Redesigned with clean background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 text-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-medium text-primary">Our Simple Process</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Storage Made <span className="text-yellow-400">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
              From pickup to safe storage, we handle everything while you relax. Just 4 easy steps to secure your
              belongings.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg h-14 px-8" asChild>
                <Link href="/get-quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg h-14 px-8"
                asChild
              >
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-primary flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Process Overview - New section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our 4-Step Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              We've simplified storage down to four easy steps, making the entire process hassle-free and convenient for
              you.
            </motion.p>
          </div>

          {/* Process timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block" />

            {/* Steps */}
            <div className="space-y-24 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return <ProcessStep key={step.number} step={step} isEven={isEven} index={index} />
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section - New section */}
     

      {/* Testimonials - New section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Don't just take our word for it. Here's what our customers have to say about our simple storage process.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The 4-step process was incredibly easy to follow. From booking to delivery, everything was seamless!",
                author: "Sarah M.",
                role: "Homeowner",
              },
              {
                quote:
                  "I was amazed at how quickly and carefully they handled my furniture. The climate-controlled storage kept everything in perfect condition.",
                author: "Ahmed K.",
                role: "Business Owner",
              },
              {
                quote:
                  "Requesting a return was so simple. I got my items back exactly when I needed them, without any hassle.",
                author: "Fatima L.",
                role: "Student",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-primary">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 18H9C9 12.477 13.477 8 19 8V13.5C15.913 13.5 13.5 15.913 13.5 19V36H31.5V18H13.5ZM40.5 18H36C36 12.477 40.477 8 46 8V13.5C42.913 13.5 40.5 15.913 40.5 19V36H58.5V18H40.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - New section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Get answers to common questions about our storage process
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned with clean background */}
      <section className="py-24 bg-gradient-to-r from-primary to-blue-700">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Store Your Items?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-10 text-white/90"
            >
              Experience our simple 4-step process and enjoy hassle-free storage today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg" asChild>
                <Link href="/get-quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg"
                asChild
              >
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Chat Icon (Floating) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}>
          <Button size="lg" className="rounded-full h-16 w-16 shadow-lg" asChild>
            <a href="#" aria-label="Chat with us">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 5, duration: 0.5 }}
              >
                <Phone className="h-6 w-6" />
              </motion.div>
            </a>
          </Button>
        </motion.div>
      </div>
    </>
  )
}

// Process Step Component
function ProcessStep({ step, isEven, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })

  const Icon = step.icon

  return (
    <div ref={ref} className="relative">
      {/* Timeline dot for desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary z-10" />

      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
        {/* Content */}
        <motion.div
          className={`md:w-1/2 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} text-center`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className={`inline-flex items-center justify-center mb-6 rounded-full p-1 bg-gradient-to-r ${step.color}`}
          >
            <div className="bg-white rounded-full p-3">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <h3 className="text-5xl font-bold text-primary/20">{step.number}</h3>
              <h3 className="text-3xl font-bold">{step.title}</h3>
            </div>
            <p className="text-lg text-muted-foreground">{step.description}</p>

            <div className={`flex flex-col gap-2 ${isEven ? "md:items-end" : "md:items-start"} items-center`}>
              {step.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <Image
              src={step.image || "/placeholder.svg"}
              alt={step.title}
              width={600}
              height={400}
              className="w-full object-cover aspect-video"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// FAQ Accordion Component
function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does the pickup process take?",
      answer:
        "Our pickup process typically depending on the volume of items. Our professional team works efficiently to ensure your items are properly packed and loaded for safe transport to our storage facility.",
    },
    {
      question: "Can I access my items while they're in storage?",
      answer:
        "Yes! You can access your stored items by scheduling a visit to our facility or requesting a delivery of specific items. Simply log into your account or call our customer service team to arrange access.",
    },
    {
      question: "How quickly can I get my items back?",
      answer:
        "For smooth operations we kindly request our customers to inform 7 days prior.",
    },
    {
      question: "Are my items insured while in storage?",
      answer:
        "Yes, we provide basic insurance coverage for all stored items. We also offer premium insurance options for high-value items. You can select your preferred coverage level during the booking process.",
    },
    {
      question: "What items are not allowed in storage?",
      answer:
        "For safety and legal reasons, we do not accept perishable goods, hazardous materials, illegal items, live plants or animals, and certain valuables like cash or unregistered jewelry. Please contact us if you're unsure about specific items.",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex items-center justify-between w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <ChevronRight className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-90" : ""}`} />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="p-6 pt-0 bg-gray-50">
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
