import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Summer Storage Dubai — What to Do with Your Belongings When You Leave | SafeStorage",
  description: "Leaving Dubai for summer? Complete guide to storing your belongings, protecting your apartment, and saving money during the summer break. From 12.60 AED / sqft.",
  keywords: "summer storage dubai, leaving dubai for summer, storage during summer holidays dubai, what to do with belongings summer dubai, expat summer dubai storage",
  openGraph: {
    title: "Summer Storage Dubai — Complete Guide for Expats Leaving for Summer",
    description: "Everything Dubai expats need to know about storing belongings when leaving for summer. Save money, free up your apartment, and travel with peace of mind.",
    url: "https://safestorage.ae/blog/summer-storage-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/summer-storage-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Summer Storage Dubai — What to Do with Your Belongings When You Leave for Summer",
    description: "Complete guide for Dubai expats leaving for summer: storage options, what to store, and how to save money while you travel.",
    url: "https://safestorage.ae/blog/summer-storage-dubai",
    datePublished: "2025-03-01",
    dateModified: "2025-04-01",
    author: { "@type": "Organization", name: "SafeStorage Dubai", url: "https://safestorage.ae" },
    publisher: { "@id": "https://safestorage.ae/#organization" },
    isPartOf: { "@id": "https://safestorage.ae/blog#webpage" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://safestorage.ae/blog" },
      { "@type": "ListItem", position: 3, name: "Summer Storage Dubai", item: "https://safestorage.ae/blog/summer-storage-dubai" },
    ],
  },
]

export default function SummerStorageDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Expat Guide</div>
            <h1 className="text-4xl font-bold mb-4">Summer Storage Dubai — Complete Guide for Expats Leaving for Summer</h1>
            <p className="text-white/80">Updated April 2025 · 7 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Dubai's summer runs from June through September, and tens of thousands of expat families leave the city each year for the school summer holidays, returning to their home countries or heading somewhere cooler. If you're one of them, you face a recurring question: <strong>what do you do with your belongings?</strong></p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Problem: A Full Apartment Sitting Empty for Months</h2>
            <p className="mb-6">Leaving Dubai for 2-3 months means your apartment sits empty while rent keeps running — and your valuables are left unattended with no one keeping an eye on them. A break-in, a burst pipe, or an AC failure can affect anything left behind. Many residents prefer to move their valuables into secure storage rather than leave them in an empty flat, especially:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Electronics (laptops, TVs, gaming consoles)",
                "Leather furniture and upholstery",
                "Wooden furniture",
                "Artwork and framed pictures",
                "Wine and spirits collections",
                "Musical instruments",
                "Jewellery boxes and keepsakes",
                "Photographs and printed materials",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-500 font-bold">⚠</span> {item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Your Options When Leaving Dubai for Summer</h2>
            <div className="space-y-6 mb-8">
              {[
                { option: "Option 1: Keep the apartment running (AC on)", cost: "AED 500–1,500/month in electricity, plus full rent", pros: ["Nothing gets damaged", "Return to ready home"], cons: ["Expensive — paying for empty apartment", "Risk of AC failure while you're away", "No security for valuables"] },
                { option: "Option 2: Leave everything and hope for the best", cost: "AED 0", pros: ["No effort"], cons: ["Valuables left unattended for months", "Security concerns in empty property", "Returns to an apartment that may need deep clean", "Electronics and valuables at risk"] },
                { option: "Option 3: Store with SafeStorage Dubai", cost: "from 12.60 AED / sqft (you only pay for the space you use)", pros: ["Clean, secure, indoor units", "Door-to-Door pickup", "Security monitored 24/7", "Pay only for what you store", "Peace of mind abroad"], cons: ["Requires move-out and move-in effort", "Monthly storage cost"] },
              ].map((opt) => (
                <div key={opt.option} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-dubai-navy text-lg mb-1">{opt.option}</h3>
                  <div className="text-dubai-gold text-sm font-medium mb-3">Cost: {opt.cost}</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-semibold text-green-700 mb-2">Pros</div>
                      {opt.pros.map((p) => <div key={p} className="text-sm text-gray-600 flex gap-2 mb-1"><span className="text-green-500">✓</span>{p}</div>)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-700 mb-2">Cons</div>
                      {opt.cons.map((c) => <div key={c} className="text-sm text-gray-600 flex gap-2 mb-1"><span className="text-red-500">✗</span>{c}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Summer Storage Checklist: What to Store and What to Do</h2>
            <p className="mb-4">If you're leaving for 2+ months, here's our recommended checklist:</p>
            <div className="space-y-4 mb-8">
              {[
                { phase: "4-6 Weeks Before Leaving", tasks: ["Book storage pickup date", "Buy packing boxes and materials", "Inventory electronics and valuables", "Notify building management of departure"] },
                { phase: "1-2 Weeks Before", tasks: ["Pack non-essential items first (books, seasonal clothes, décor)", "Disassemble furniture for storage (bed frames, dining tables)", "Clean appliances (fridge must be defrosted 24h before pickup)"] },
                { phase: "Pickup Day", tasks: ["Professional team wraps and loads furniture", "Electronics packed in protective materials", "Inventory confirmed and condition report signed", "Keys handed to SafeStorage if temporary key holding required"] },
                { phase: "While You're Away", tasks: ["Access your storage online to confirm everything arrived safely", "Request item retrieval or delivery coordination if needed", "Schedule return delivery date 1-2 weeks before you return"] },
              ].map((phase) => (
                <div key={phase.phase} className="p-4 bg-slate-50 rounded-xl border border-gray-200">
                  <div className="font-bold text-dubai-navy mb-2">{phase.phase}</div>
                  <div className="space-y-1">
                    {phase.tasks.map((task) => (
                      <div key={task} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{task}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Is Summer Storage Cost-Effective?</h2>
            <p className="mb-4">Let's run the numbers for a typical expat family leaving for 3 months:</p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  { item: "Medium storage unit", cost: "From 12.60 AED / sqft" },
                  { item: "Door-to-Door pickup + delivery (SafeStorage)", cost: "AED 0" },
                  { item: "Total storage cost", cost: "From 12.60 AED / sqft" },
                  { item: "", cost: "" },
                  { item: "Alternative: Keep AC running (electricity only)", cost: "AED 1,500–4,500" },
                ].map((row) => row.item ? (
                  <div key={row.item} className={`flex justify-between py-1 ${row.item === "Total storage cost" ? "border-t border-dubai-gold pt-2 font-bold text-dubai-navy" : "text-gray-700"}`}>
                    <span>{row.item}</span>
                    <span className="font-semibold">{row.cost}</span>
                  </div>
                ) : <div key="divider" className="border-t border-gray-200 my-2" />)}
              </div>
            </div>

            <p className="mb-4">For most families, summer storage is often cheaper than the electricity cost of keeping the AC running in an empty apartment for three months — and it frees up your home and keeps your valuables secure while you're away.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">What Dubai Expats Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { name: "Nadia O.", location: "Dubai Marina", text: "Third year using SafeStorage for summer. I travel for nearly three months and don't want my valuables sitting in an empty flat. They pick everything up, keep it secure, and deliver it back before I land. Total peace of mind." },
                { name: "Vikram S.", location: "JVC", text: "Leaving for 3 months, didn't want to keep paying AED 1,500 electricity for an empty flat. Storage worked out to just 12.60 AED / sqft and I switched off the AC entirely. Came back to a working home and AED 2,700 saved on electricity alone." },
              ].map((t) => (
                <div key={t.name} className="bg-slate-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-gray-700 italic mb-3">"{t.text}"</p>
                  <div className="font-semibold text-dubai-navy text-sm">{t.name} · {t.location}</div>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center mt-10">
              <h2 className="text-2xl font-bold mb-3">Book Your Summer Storage Early</h2>
              <p className="text-white/80 mb-6">May-June is our busiest period. Book your pickup slot early to secure your preferred date before leaving for summer.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Summer Storage Quote</Button>
                </Link>
                <a href="tel:+971505773388">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-3">
                    <Phone className="w-5 h-5 mr-2" /> +971505773388
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
