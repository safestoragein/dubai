import Link from "next/link"
import { ArrowRight } from "lucide-react"

const useCases = [
  {
    emoji: "🏗️",
    title: "Villa & Apartment Renovations",
    body: "Dubai residents renovating their homes need a safe, temporary place for furniture and belongings during construction. We store everything during the renovation period — from 2 weeks to 6 months — and deliver it back once the work is done. Over 40% of our Dubai customers use us specifically for renovation storage.",
    cta: "/self-storage-dubai/short-term-moving-renovation",
    ctaLabel: "Renovation Storage →",
  },
  {
    emoji: "✈️",
    title: "Expats Relocating or Travelling",
    body: "Whether you're moving between emirates, leaving Dubai temporarily on a work assignment, or waiting for your new lease to start, our flexible monthly storage bridges the gap. No minimum commitment — even 2 weeks works. We'll deliver everything back when you're settled.",
    cta: "/self-storage-dubai/household-storage",
    ctaLabel: "Household Storage →",
  },
  {
    emoji: "🛒",
    title: "E-commerce & Small Businesses",
    body: "Manage inventory without expensive long-term warehouse leases. Store seasonal stock, marketing materials, office furniture, or fulfilment inventory. 24/7 access means you can pick, restock, or audit on your schedule — with no minimum contract tying you down.",
    cta: "/storage-dubai/ecommerce-fulfilment",
    ctaLabel: "E-commerce Storage →",
  },
  {
    emoji: "🏠",
    title: "Downsizing & Decluttering",
    body: "Moving from a villa to an apartment? Keep the items you love without cramming them into a smaller space. Our units start from just 25 sq ft — the size of a large walk-in closet. Store seasonal items, extra furniture, or sentimental belongings at a fraction of the cost of a larger property.",
    cta: "/personal-storage",
    ctaLabel: "Personal Storage →",
  },
  {
    emoji: "🎓",
    title: "Students Between Semesters",
    body: "University students leaving Dubai for summer break can store their belongings safely and affordably instead of shipping everything home. We pick up from your dorm or apartment and deliver back to your new address when you return. Short-term plans available — no year-long lock-in.",
    cta: "/self-storage-dubai/student-storage",
    ctaLabel: "Student Storage →",
  },
  {
    emoji: "🚙",
    title: "Seasonal Vehicle Storage",
    body: "Protect your car or motorcycle from Dubai's summer heat damage and dust. Climate-controlled vehicle bays maintain safe temperatures while you're travelling or between seasons. CCTV-monitored bays with controlled entry — your vehicle stays in the same condition you left it.",
    cta: "/storage-dubai/vehicle-storage",
    ctaLabel: "Vehicle Storage →",
  },
]

export default function UseCasesSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-dubai-gold/10 text-dubai-gold text-sm font-medium rounded-full mb-4">
            Who We Help
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dubai-navy mb-4">
            Who Uses SafeStorage in Dubai?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From families navigating villa renovations to e-commerce sellers outgrowing their apartments —
            SafeStorage serves all kinds of storage needs across Dubai.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {useCases.map((uc) => (
            <div
              key={uc.cta}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block" aria-hidden="true">{uc.emoji}</span>
              <h3 className="text-xl font-bold text-dubai-navy mb-3">{uc.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-5">{uc.body}</p>
              <Link
                href={uc.cta}
                className="inline-flex items-center gap-1 text-sm font-semibold text-dubai-gold hover:text-dubai-navy transition-colors"
              >
                {uc.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-dubai-gold text-white font-bold px-8 py-4 rounded-xl hover:bg-dubai-darkgold transition-colors text-lg"
          >
            Get a Free Quote — We Come to You
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-gray-400 text-sm mt-3">Free pickup anywhere in Dubai · No long-term contract</p>
        </div>
      </div>
    </section>
  )
}
