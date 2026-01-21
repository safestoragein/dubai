import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { env } from "@/lib/env"
import TrustBadges from "@/components/trust-badges"

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions | SafeStorage Dubai",
  description:
    "Find answers to common questions about SafeStorage Dubai. Learn about our storage units, pricing, pickup services, security, and more.",
  keywords:
    "storage faq dubai, self storage questions, storage pricing dubai, storage unit sizes, climate controlled storage questions",
  openGraph: {
    title: "FAQs - SafeStorage Dubai",
    description: "Find answers to common questions about our storage services, pricing, security, and more.",
    url: "https://safestorage.ae/faq",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/faq",
  },
}

const faqCategories = [
  {
    title: "Storage Units & Sizes",
    faqs: [
      {
        question: "What sizes of storage units are available at SafeStorage Dubai?",
        answer: "We offer storage units ranging from 25 sq ft to over 300 sq ft. Our smallest units (25-50 sq ft) are perfect for boxes, seasonal items, and small furniture. Medium units (50-100 sq ft) can accommodate a one-bedroom apartment's contents. Large units (150-300 sq ft) are suitable for multi-bedroom homes or business inventory. We also offer specialized vehicle storage spaces."
      },
      {
        question: "How do I know what size storage unit I need?",
        answer: "Our dedicated storage consultants can help you choose the right size based on your items. As a general guide: Small (25-50 sq ft) for 10-20 boxes or a studio apartment, Medium (50-100 sq ft) for a 1-2 bedroom apartment, Large (100-200 sq ft) for a 3 bedroom home, Extra Large (200+ sq ft) for a villa or business inventory. Contact us for a free consultation!"
      },
      {
        question: "Can I change my storage unit size later?",
        answer: "Yes! We understand your needs may change. You can upgrade or downgrade your storage unit size based on availability. Simply contact your dedicated storage consultant, and we'll help you transition to a more suitable unit with minimal hassle."
      },
    ]
  },
  {
    title: "Climate Control & Security",
    faqs: [
      {
        question: "Is the storage facility climate-controlled?",
        answer: "Yes, all our storage units are fully climate-controlled with advanced HVAC systems maintaining optimal temperature (20-25°C) and humidity levels (45-55%) year-round. This is essential in Dubai's extreme heat to protect furniture, electronics, documents, artwork, and other sensitive items from heat damage, humidity, and dust."
      },
      {
        question: "What security measures are in place at SafeStorage?",
        answer: "Our facility features state-of-the-art security including: 24/7 HD CCTV surveillance covering all areas, biometric access control (only you can access your unit), individual unit alarms, fire detection and suppression systems, on-site security personnel, and secure perimeter fencing. Your belongings are protected around the clock."
      },
      {
        question: "Is insurance available for stored items?",
        answer: "Yes! Every storage unit at SafeStorage Dubai includes FREE insurance coverage up to AED 5,000. For higher-value items, we offer additional comprehensive insurance options. Our team can help you choose the right coverage based on the value of your belongings."
      },
    ]
  },
  {
    title: "Pickup & Delivery",
    faqs: [
      {
        question: "Do you offer pickup and delivery services?",
        answer: "Yes! We provide FREE pickup and delivery services across Dubai. Our professional team will collect your items from your location (home, office, or anywhere in Dubai), transport them safely to our climate-controlled facility, and return them whenever you need them back. This hassle-free service is what sets us apart!"
      },
      {
        question: "How quickly can you pick up my items?",
        answer: "We offer same-day pickup for requests made before 12 PM. For standard pickups, we typically schedule within 24-48 hours based on your preferred time slot. Emergency pickup services are also available for urgent requirements."
      },
      {
        question: "What areas do you cover for pickup and delivery?",
        answer: "We cover all major areas in Dubai including: Dubai Marina, JLT, Downtown Dubai, Business Bay, DIFC, Palm Jumeirah, Jumeirah, Al Quoz, Dubai Investment Park, and more. If you're unsure about your area, just ask - we likely cover it!"
      },
    ]
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How much does storage cost at SafeStorage Dubai?",
        answer: "Our storage units start from AED 99 per month. We offer flexible storage solutions for all needs - from small boxes to full villa contents. Contact us at +971505773388 for a personalized quote based on your storage requirements. We also offer flexible payment plans and discounts for long-term storage (3+ months)."
      },
      {
        question: "Are there any hidden fees?",
        answer: "Absolutely not! We believe in transparent pricing. The price quoted includes: climate-controlled storage, 24/7 security, basic insurance (up to AED 5,000), and access during operating hours. Pickup and delivery within Dubai is FREE. The only additional costs would be for premium insurance or packing materials, both of which are optional."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods for your convenience: Credit/Debit cards (Visa, Mastercard), Bank transfers, Cash payments, and Cheques. We also offer flexible payment plans - monthly, quarterly, or annual payments with discounts for longer commitments."
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes! We offer several discount programs: 10% off for 3-month prepaid plans, 15% off for 6-month prepaid plans, 20% off for annual prepaid plans, Special rates for businesses and bulk storage, Referral discounts when you recommend us to friends."
      },
    ]
  },
  {
    title: "Access & Hours",
    faqs: [
      {
        question: "Can I access my storage unit anytime?",
        answer: "You have access to your storage unit during our operating hours: Monday-Saturday 8:00 AM to 8:00 PM, and Sunday 10:00 AM to 6:00 PM. For business customers, we can arrange extended access hours or 24/7 access upon request with special arrangements."
      },
      {
        question: "What if I need something urgently outside operating hours?",
        answer: "We understand emergencies happen! Contact our support team, and we'll do our best to accommodate urgent access requests. For business customers with 24/7 access packages, round-the-clock access is available."
      },
      {
        question: "Can someone else access my storage unit?",
        answer: "Your unit is secured with biometric access linked to your profile. If you want to authorize someone else (family member, employee, etc.), you can add them as an authorized user. Just provide us with their details, and we'll set up their access credentials."
      },
    ]
  },
  {
    title: "Moving & Packing",
    faqs: [
      {
        question: "Do you provide packing materials?",
        answer: "Yes, we offer a complete range of packing materials including: sturdy cardboard boxes in various sizes, bubble wrap and packing paper, tape and markers, furniture covers and mattress bags, wardrobe boxes for clothes. We also offer pre-made packing kits for different storage needs."
      },
      {
        question: "Can you help with packing my items?",
        answer: "Absolutely! Our professional team can assist with packing and unpacking services for an additional fee. They're trained to pack items securely to maximize protection during transport and storage. This service is especially popular for delicate items, artwork, and electronics."
      },
      {
        question: "What items can I store?",
        answer: "You can store most household and business items including: furniture, appliances, electronics, clothes and personal belongings, documents and files, business inventory, vehicles (cars, motorcycles, boats), and seasonal items. Prohibited items include: hazardous materials, flammable substances, perishable food, live plants/animals, and illegal items."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-dubai-navy to-dubai-navy/90 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-dubai-gold/20 text-dubai-gold text-sm font-medium rounded-full mb-6">
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about our storage services
            </p>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-dubai-navy mb-6 pb-2 border-b border-dubai-gold/20">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-gray-50"
                    >
                      <AccordionTrigger className="text-left font-medium text-dubai-navy hover:text-dubai-gold py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dubai-navy mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our dedicated team is here to help. Reach out to us and we&apos;ll get back to you within 15 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-dubai-navy text-dubai-navy hover:bg-dubai-navy hover:text-white" asChild>
                <a href={env.PHONE_LINK}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 050-577-3388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join 500+ happy customers who trust SafeStorage Dubai. Get your free quote in just 2 minutes.
            </p>
            <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
              <Link href="/get-quote" className="group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
