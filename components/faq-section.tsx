"use client"

import { m } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqSchema } from "@/lib/structured-data"

const faqs = [
  {
    question: "How much does storage cost in Dubai?",
    answer:
      "Storage costs in Dubai depend on the size of the unit, rental duration, and additional services like pickup and insurance. SafeStorage Dubai offers competitive pricing starting from AED 99 /month.",
  },
  {
    question: "Is my storage unit secure?",
    answer:
      "Yes! Our facilities are under 24/7 CCTV surveillance, have biometric access, and are climate-controlled to ensure your belongings remain safe.",
  },
  {
    question: "Can I access my storage anytime?",
    answer:
      "SafeStorage Dubai provides flexible access to your storage unit, ensuring you can retrieve your items whenever you need them.",
  },
  {
    question: "Do you offer pickup and delivery services?",
    answer:
      "Yes, we offer convenient pickup and delivery services across Dubai. Our professional team will collect your items and transport them safely to our storage facility.",
  },
  {
    question: "What items are not allowed in storage?",
    answer:
      "For safety reasons, we prohibit storing perishable goods, flammable materials, illegal items, live plants or animals, and hazardous materials. Please contact us if you're unsure about specific items.",
  },
  {
    question: "How do I book a storage unit?",
    answer:
      "Booking is simple! You can reserve your storage unit online through our website, call our customer service team, or visit our facility in person. We'll guide you through the entire process.",
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
