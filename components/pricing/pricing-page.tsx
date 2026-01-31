"use client"

import { useEffect } from "react"
import { m } from "framer-motion"
import { Shield, Truck, Clock, Lock, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { pricingFaqs } from "./pricing-data"
import Link from "next/link"
import StorageSizes from "@/components/storage-sizes"

export default function PricingPage() {
  // Scroll to pricing section if hash is present
  useEffect(() => {
    if (window.location.hash === "#pricing") {
      const pricingSection = document.getElementById("pricing-plans")
      pricingSection?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Flexible & Affordable Storage Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Transparent pricing with no hidden fees. Pay for what you need, when you need it.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { icon: Shield, text: "No Hidden Fees" },
                { icon: Lock, text: "Secure Storage" },
                { icon: Truck, text: "Hassle-Free Pickup" },
                { icon: Clock, text: "Easy Returns" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white shadow-sm">
                  <item.icon className="h-8 w-8 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="text-lg" asChild>
                <Link href="/get-quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </m.div>
          </div>
        </div>
      </section>

      {/* Storage Sizes Section */}
      <StorageSizes />

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Storage Plans Are the Best Choice</h2>
            <p className="text-lg text-muted-foreground">
              Experience premium storage solutions with unmatched benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Flexible Plans",
                description: "Pay only for the space you use with easy plan changes.",
                icon: Clock,
              },
              {
                title: "Secure & Monitored",
                description: "24/7 CCTV surveillance and advanced access control.",
                icon: Shield,
              },
              {
                title: "Climate-Controlled",
                description: "Perfect environment for sensitive items and valuables.",
                icon: Lock,
              },
              {
                title: "Hassle-Free Pickup & Delivery",
                description: "We handle the logistics so you don't have to.",
                icon: Truck,
              },
              {
                title: "No Long-Term Commitment",
                description: "Cancel anytime with no penalties or hidden fees.",
                icon: Shield,
              },
              {
                title: "24/7 Support",
                description: "Expert assistance whenever you need it.",
                icon: HelpCircle,
              },
            ].map((feature, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common questions about our storage pricing</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the Best Storage Plan Today – Safe, Affordable & Hassle-Free!
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of satisfied customers who trust SafeStorage Dubai
            </p>
            <Button size="lg" variant="secondary" className="text-lg bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/get-quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
