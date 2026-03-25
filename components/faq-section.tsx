"use client"

import { m } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqSchema } from "@/lib/structured-data"

const faqs = [
  {
    question: "How much does storage cost in Dubai?",
    answer:
      "SafeStorage Dubai offers climate-controlled storage starting from AED 9/month. The final price depends on the unit size, rental duration, and any additional services. Importantly, our pricing is fully transparent — what we quote is what you pay, with no admin fees, hidden charges, or deposit surprises. We also offer a price-match guarantee: show us a lower quote and we'll beat it.",
  },
  {
    question: "Do you offer free pickup and delivery across Dubai?",
    answer:
      "Yes — free pickup and delivery is included with every SafeStorage plan. Our professional team will come to your home or office anywhere in Dubai, bring packing materials, carefully load your items, and transport them to our climate-controlled facility. When you need anything back, we deliver it to your door. No truck rental, no fuel costs, no hassle. Same-day pickup is available for bookings confirmed before 12 PM.",
  },
  {
    question: "Is my storage unit secure?",
    answer:
      "Security is our top priority. Our facilities feature 24/7 CCTV cameras covering every corridor and access point, biometric or PIN-based entry control, motion-activated alerts after hours, and on-site monitoring. Every unit has its own individual lock — only you hold the key. All stored items are also covered by complimentary insurance up to AED 5,000, giving you additional peace of mind.",
  },
  {
    question: "Are the storage units climate-controlled?",
    answer:
      "Yes, every SafeStorage unit is fully climate-controlled and maintained at 20–24°C with 45–55% humidity year-round. This is essential in Dubai, where outdoor summer temperatures can exceed 45°C. Climate control protects furniture from warping, electronics from overheating, clothing from mildew, artwork from fading, and documents from deterioration — regardless of how long you store.",
  },
  {
    question: "What size storage unit do I need?",
    answer:
      "Unit sizes range from 25 sq ft (ideal for a studio's worth of boxes and small items) up to 200+ sq ft (suitable for a full villa's contents including appliances and furniture sets). Not sure what size fits your needs? Send our team a description or photos of your belongings and we'll recommend the right size — no guesswork needed.",
  },
  {
    question: "Is there a minimum contract or lock-in period?",
    answer:
      "No. SafeStorage offers fully flexible month-to-month plans with no minimum commitment and no lock-in period. You can store for as little as 2 weeks or as long as several years. You can also upgrade or downsize your unit anytime with just 48 hours' notice, and cancel at any time with zero penalties.",
  },
  {
    question: "What items are not allowed in storage?",
    answer:
      "For safety reasons, we do not allow: perishable food or drinks, flammable or combustible materials (petrol, gas cylinders), illegal or controlled substances, live plants or animals, firearms, explosives, or any hazardous chemicals. If you're unsure whether a specific item can be stored, simply call us on +971505773388 and we'll advise you immediately.",
  },
  {
    question: "How do I get started with SafeStorage Dubai?",
    answer:
      "Getting started is easy. Fill out the free quote form on our website, call us on +971505773388, or WhatsApp us — and one of our storage consultants will guide you through the entire process. We'll confirm your unit size, schedule your free pickup, and handle everything from there. Most customers are set up within 24 hours of their first enquiry.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full py-20 bg-white" id="faq">
      {/* Add FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked Questions About Storage in Dubai
          </m.h2>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </m.div>
      </div>
    </section>
  )
}
