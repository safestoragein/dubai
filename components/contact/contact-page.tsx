"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { contactFaqs } from "./contact-data"
import { env } from "@/lib/env"
import TrustBadges from "@/components/trust-badges"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-dubai-navy/10 to-white relative overflow-hidden">
        {/* Dubai-style decorative pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dubai-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-dubai-skyblue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1 bg-dubai-gold/10 border border-dubai-gold/20 rounded-full text-dubai-darkgold text-sm font-medium">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-dubai-navy">
                Get in Touch – We're Here to Help!
              </h1>
              <p className="text-xl text-dubai-navy/70 max-w-[600px]">
                Have questions? Need assistance? Our team is ready to support you 24/7.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-dubai-gold hover:bg-dubai-darkgold text-white"
                  asChild
                >
                  <a href={env.PHONE_LINK}>
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us Now
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] lg:h-[400px] w-full"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-dubai-gold/10">
                <img
                  src="/images/design-mode/full-shot-woman-scanning-products_23-2148943323.jpg.jpeg"
                  alt="SafeStorage Dubai Customer Support Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dubai-navy/30 to-transparent"></div>
              </div>

              {/* Dubai-style decorative frame */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-2 border-dubai-gold/30 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Contact Methods Section */}
      <section className="w-full py-20 bg-white relative">
        {/* Dubai-style decorative pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">How to Reach Us?</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-lg text-dubai-navy/70">Multiple ways to connect with our friendly support team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map and Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-xl overflow-hidden h-[300px] shadow-md border border-dubai-gold/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510021958!2d55.27210000000001!3d25.2048!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1712229999999!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SafeStorage Dubai Dubai Location"
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-dubai-gold/10 rounded-full">
                    <MapPin className="h-5 w-5 text-dubai-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dubai-navy">Office Address</h3>
                    <p className="text-dubai-navy/70">SafeStorage HQ: Business Bay, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-dubai-gold/10 rounded-full">
                    <Clock className="h-5 w-5 text-dubai-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-dubai-navy">Working Hours</h3>
                    <p className="text-dubai-navy/70">Mon-Sun: 8 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid gap-4">
                <div className="bg-dubai-navy/5 p-6 rounded-xl border border-dubai-navy/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-dubai-navy/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-dubai-navy" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg text-dubai-navy">Phone Support</h3>
                      <p className="text-dubai-navy/70">Call us directly for immediate assistance</p>
                      <Button variant="default" className="mt-2 bg-dubai-navy hover:bg-dubai-navy/90" asChild>
                        <a href={env.PHONE_LINK}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Us: {env.CONTACT_NUMBER}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-dubai-gold/5 p-6 rounded-xl border border-dubai-gold/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-dubai-gold/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-dubai-gold" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg text-dubai-navy">Email Support</h3>
                      <p className="text-dubai-navy/70">Send us an email and we'll respond within 24 hours</p>
                      <Button
                        variant="outline"
                        className="mt-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold/10"
                        asChild
                      >
                        <a href={env.EMAIL_LINK}>
                          <Mail className="mr-2 h-4 w-4" />
                          {env.EMAIL}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-dubai-skyblue/5 p-6 rounded-xl border border-dubai-skyblue/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-dubai-skyblue/10 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-dubai-skyblue" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-lg text-dubai-navy">Live Chat & WhatsApp</h3>
                      <p className="text-dubai-navy/70">Chat with our support team in real-time</p>
                      <div className="flex gap-3 mt-2">
                        <Button
                          variant="outline"
                          className="border-dubai-skyblue text-dubai-skyblue hover:bg-dubai-skyblue/10"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Start Live Chat
                        </Button>
                        <Button
                          variant="outline"
                          className="border-dubai-gold text-dubai-gold hover:bg-dubai-gold/10"
                          asChild
                        >
                          <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white relative">
        {/* Dubai-style decorative pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">Quick Answers to Common Questions</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-lg text-dubai-navy/70">Find answers to frequently asked questions about contacting us</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-dubai-gold/20">
                  <AccordionTrigger className="text-left text-dubai-navy hover:text-dubai-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-dubai-navy/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full py-20 bg-dubai-navy/5 relative">
        {/* Dubai-style decorative pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dubai-navy">Follow Us & Stay Connected!</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-lg text-dubai-navy/70">Join our community for updates, tips, and special offers</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Facebook, label: "Facebook", color: "bg-dubai-navy", href: "#" },
              { icon: Instagram, label: "Instagram", color: "bg-dubai-gold", href: "#" },
              { icon: Twitter, label: "Twitter", color: "bg-dubai-skyblue", href: "#" },
              { icon: Youtube, label: "YouTube", color: "bg-dubai-darkgold", href: "#" },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                color: "bg-dubai-navy",
                href: env.WHATSAPP_LINK,
              },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} text-white p-4 rounded-full shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-4 text-dubai-navy">Join Our Community for Updates & Special Offers!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="sm:flex-1 border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
              />
              <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-dubai-navy text-white relative overflow-hidden">
        {/* Dubai-style decorative pattern */}
        <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dubai-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-dubai-skyblue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help? Contact Us Anytime!</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-dubai-gold"></div>
              <div className="px-4">
                <div className="w-3 h-3 rotate-45 bg-dubai-gold"></div>
              </div>
              <div className="h-px w-12 bg-dubai-gold"></div>
            </div>
            <p className="text-xl mb-8 text-white/80">
              Our friendly team is here to assist you with all your storage needs
            </p>
            <Button
              size="lg"
              className="text-lg bg-dubai-gold hover:bg-dubai-darkgold text-white"
              asChild
            >
              <a href={env.PHONE_LINK}>
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}
