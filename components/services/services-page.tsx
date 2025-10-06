"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { serviceCategories } from "./services-data"
import ServiceCard from "./service-card"
import TestimonialCard from "./testimonial-card"
import Link from "next/link"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Premium Storage Solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Secure & Hassle-Free Storage Solutions for Every Need
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                From household items to business inventory, SafeStorage Dubai offers climate-controlled, secure, and
                accessible storage solutions tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/get-quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] lg:h-[500px] w-full"
            >
              <Image
                src="/images/design-mode/image.png"
                alt="SafeStorage Dubai Warehouse and Services"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      {/* Services Overview Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Our Comprehensive Storage Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-[800px]"
            >
              Discover the perfect storage solution for your specific needs
            </motion.p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
              <TabsTrigger value="all">All Services</TabsTrigger>
              {serviceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {serviceCategories.map((category) =>
                  category.services.map((service, index) => (
                    <ServiceCard
                      key={`${category.id}-${index}`}
                      service={service}
                      categoryIcon={category.icon}
                      categoryName={category.name}
                    />
                  )),
                )}
              </div>
            </TabsContent>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, index) => (
                    <ServiceCard
                      key={`${category.id}-${index}`}
                      service={service}
                      categoryIcon={category.icon}
                      categoryName={category.name}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Individual Service Sections */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h2 className="text-3xl font-bold">{category.name} Storage Solutions</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Features & Benefits:</h3>
                  <ul className="space-y-3 mb-6">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Related Services:</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceCategories
                        .filter((c) => c.id !== category.id)
                        .slice(0, 3)
                        .map((relatedCategory) => (
                          <Button
                            key={relatedCategory.id}
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveTab(relatedCategory.id)}
                          >
                            {relatedCategory.icon} {relatedCategory.name}
                          </Button>
                        ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-xl overflow-hidden mb-6">
                    <Image
                      src={category.image || "/placeholder.svg?height=300&width=500"}
                      alt={`${category.name} Storage Solutions`}
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${category.id}-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Trusted by Hundreds of Satisfied Customers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-[800px]"
            >
              See what our customers have to say about our storage services
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <TestimonialCard
              quote="SafeStorage Dubai provided the perfect solution for storing my household items during our home renovation. The climate-controlled units kept everything in pristine condition."
              author="Ahmed K."
              rating={5}
              service="Household Storage"
            />
            <TestimonialCard
              quote="As a small business owner, I needed flexible storage for my inventory. Their business storage solutions are secure, accessible, and surprisingly affordable."
              author="Sarah M."
              rating={5}
              service="Business Storage"
            />
            <TestimonialCard
              quote="I stored my vintage car with SafeStorage Dubai for 6 months. Their vehicle storage facility is top-notch with climate control and excellent security."
              author="Mohammed A."
              rating={5}
              service="Vehicle Storage"
            />
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="relative h-12 w-32">
                <Image
                  src={`/placeholder.svg?height=48&width=128&text=Partner${partner}`}
                  alt={`Partner ${partner}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Ready to Secure Your Belongings?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-[800px] mb-8 text-primary-foreground/90"
            >
              Get started today with SafeStorage Dubai's secure, climate-controlled storage solutions
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/get-quote">Get a Free Quote</Link>
              </Button>
             <a href="tel:+971505773388"> <Button size="lg" variant="outline" className="bg-white text-white hover:bg-white/10"> 
                Call Now
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
