"use client"

import { useState } from "react"
import { m } from "framer-motion"
import { Quote, Building, User, MapPin, Star, ArrowRight, Package } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const caseStudies = [
  {
    title: "IT Professional Relocating Abroad",
    quote:
      "I needed to store my furniture and electronics while relocating. SafeStorage provided a secure, climate-controlled space with easy access. The process was seamless!",
    author: "Ahmed K.",
    location: "Dubai Marina",
    icon: User,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
    color: "from-blue-500/20 to-blue-600/10",
    rating: 5,
  },
  {
    title: "Business Inventory Storage for E-commerce Seller",
    quote:
      "SafeStorage helped me store excess inventory during peak seasons. Their facility is secure, affordable, and accessible 24/7.",
    author: "Sarah M.",
    location: "Business Bay",
    icon: Building,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
    color: "from-purple-500/20 to-purple-600/10",
    rating: 5,
  },
  {
    title: "Family Moving Between Homes",
    quote:
      "During our home renovation, we needed temporary storage for our belongings. SafeStorage's climate-controlled units kept everything in perfect condition.",
    author: "Mohammed A.",
    location: "Al Barsha",
    icon: User,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-crTYKFFWIiKEXHVJn1wM17UHNcJWEY.png",
    color: "from-green-500/20 to-green-600/10",
    rating: 5,
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            How SafeStorage Helped Dubai Residents & Businesses
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Real success stories from our satisfied customers across Dubai
          </m.p>
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden md:block relative">
          <div className="max-w-5xl mx-auto">
            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mb-8">
              {caseStudies.map((_, index) => (
                <m.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Case Study Cards */}
            <div className="relative h-[500px]">
              {caseStudies.map((study, index) => {
                const Icon = study.icon
                return (
                  <m.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                      scale: activeIndex === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                      {/* Image Side */}
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br bg-opacity-70 z-10" />
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                        {/* Floating Elements */}
                        <m.div
                          className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <div className="flex items-center gap-2">
                            <Package className="h-5 w-5 text-primary" />
                            <span className="font-medium">Case Study {index + 1}</span>
                          </div>
                        </m.div>

                        <m.div
                          className="absolute bottom-6 left-6 z-20 flex items-center gap-2"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg py-1 px-3">
                            <span className="font-medium text-gray-800">{study.location}</span>
                          </div>
                        </m.div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-center">
                        <div className={`p-8 rounded-2xl bg-gradient-to-br ${study.color} border border-gray-200`}>
                          <div className="mb-6">
                            <m.div
                              className="inline-flex items-center justify-center p-2 rounded-full bg-white shadow-md mb-4"
                              initial={{ rotate: -10, scale: 0.9 }}
                              animate={{ rotate: 0, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <Icon className="h-6 w-6 text-primary" />
                            </m.div>
                            <m.h3
                              className="text-2xl font-bold mb-2"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              {study.title}
                            </m.h3>
                            <div className="flex gap-1 mb-4">
                              {Array.from({ length: study.rating }).map((_, i) => (
                                <m.div
                                  key={i}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                                >
                                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                </m.div>
                              ))}
                            </div>
                          </div>

                          <m.div
                            className="relative mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <Quote className="absolute -top-4 -left-2 h-8 w-8 text-primary/20" />
                            <p className="text-lg italic text-gray-700 pl-6">{study.quote}</p>
                          </m.div>

                          <m.div
                            className="flex items-center gap-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                          >
                            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary font-bold">
                              {study.author.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold">{study.author}</p>
                              <p className="text-sm text-gray-600">{study.location}</p>
                            </div>
                          </m.div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <m.button
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary pointer-events-auto"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-5 w-5 transform rotate-180" />
              </m.button>
              <m.button
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary pointer-events-auto"
                onClick={() => setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-5 w-5" />
              </m.button>
            </div>
          </div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Case Study {index + 1}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg py-1 px-2">
                      <span className="text-sm font-medium text-gray-800">{study.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: study.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-1 h-6 w-6 text-primary/20" />
                    <p className="text-gray-700 italic pl-5">{study.quote}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {study.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{study.author}</p>
                      <p className="text-sm text-gray-600">{study.location}</p>
                    </div>
                  </div>
                </div>
              </m.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/get-quote">
              Get Your Free Storage Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  )
}
