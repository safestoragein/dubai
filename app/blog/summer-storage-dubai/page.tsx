import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Summer Storage Dubai — What to Do with Your Belongings When You Leave | SafeStorage",
  description: "Leaving Dubai for summer? Complete guide to storing your belongings, protecting your apartment, and saving money during the summer break. From AED 99/month.",
  keywords: "summer storage dubai, leaving dubai for summer, storage during summer holidays dubai, what to do with belongings summer dubai, expat summer dubai storage",
  openGraph: {
    title: "Summer Storage Dubai — Complete Guide for Expats Leaving for Summer",
    description: "Everything Dubai expats need to know about storing belongings when leaving for summer. Save money, protect your stuff, come back to nothing damaged.",
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
    description: "Complete guide for Dubai expats leaving for summer: storage options, what to store, and how to protect your belongings from Dubai's extreme summer heat.",
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
            <p className="text-xl leading-relaxed mb-8">Dubai's summer — June through September — sees temperatures regularly hitting 45-48°C. Tens of thousands of expat families leave Dubai each year for school summer holidays, returning to their home countries or cooler climates. If you're one of them, you face a recurring question: <strong>what do you do with your belongings?</strong></p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Problem: Dubai Summer is Brutal on Your Belongings</h2>
            <p className="mb-6">Most Dubai apartments are cooled by central AC or window units. When you leave for 2-3 months with the AC off (or on a minimal setting to save electricity), temperatures inside your apartment can reach <strong>40-50°C</strong>. That's damaging to:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Electronics (laptops, TVs, gaming consoles)",
                "Leather furniture and upholstery",
                "Wooden furniture (warps and cracks)",
                "Cosmetics, perfumes and skincare",
                "Wine and spirits collections",
                "Musical instruments",
                "Candles and wax items (literally melt)",
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
                { option: "Option 2: Leave everything and hope for the best", cost: "AED 0", pros: ["No effort"], cons: ["High risk of heat/humidity damage", "Security concerns in empty property", "Returns to an apartment that may need deep clean", "Electronics and valuables at risk"] },
                { option: "Option 3: Store with SafeStorage Dubai", cost: "AED 199–699/month depending on volume", pros: ["Climate-controlled protection", "Free pickup", "Security monitored 24/7", "Pay only for what you store", "Peace of mind abroad"], cons: ["Requires move-out and move-in effort", "Monthly storage cost"] },
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
                  { item: "Medium storage unit (3 months)", cost: "AED 1,497–2,097" },
                  { item: "Free pickup + delivery (SafeStorage)", cost: "AED 0" },
                  { item: "Total storage cost", cost: "AED 1,497–2,097" },
                  { item: "", cost: "" },
                  { item: "Alternative: Keep AC running (electricity only)", cost: "AED 1,500–4,500" },
                  { item: "Alternative: Replace heat-damaged electronics", cost: "AED 3,000–15,000+" },
                ].map((row) => row.item ? (
                  <div key={row.item} className={`flex justify-between py-1 ${row.item === "Total storage cost" ? "border-t border-dubai-gold pt-2 font-bold text-dubai-navy" : "text-gray-700"}`}>
                    <span>{row.item}</span>
                    <span className="font-semibold">{row.cost}</span>
                  </div>
                ) : <div key="divider" className="border-t border-gray-200 my-2" />)}
              </div>
            </div>

            <p className="mb-4">For most families, summer storage pays for itself if it prevents even one piece of electronics from heat damage. For 3 months away, it's also often cheaper than the electricity cost of keeping AC running.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">What Dubai Expats Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { name: "Nadia O.", location: "Dubai Marina", text: "Third year using SafeStorage for summer. First year I left my laptop at home — came back to a dead battery and cracked screen from the heat. Now I store everything valuable. Not worth the risk." },
                { name: "Vikram S.", location: "JVC", text: "Leaving for 3 months, didn't want to keep paying AED 1,500 electricity for an empty flat. Stored everything for AED 600/mo and switched off the AC entirely. Came back to a working home and AED 2,700 saved on electricity alone." },
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
