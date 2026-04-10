import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Renovation Storage Tips Dubai — Complete Guide for Apartment & Villa Renovation | SafeStorage",
  description: "Planning a Dubai renovation? Complete guide to storing furniture and belongings during renovation. Avoid damage, save costs, and make your renovation stress-free. Call +971505773388.",
  keywords: "renovation storage dubai, furniture storage during renovation dubai, apartment renovation storage dubai, villa renovation storage, moving out for renovation dubai",
  openGraph: {
    title: "Renovation Storage Tips Dubai — Make Your Reno Stress-Free",
    description: "Complete guide to storing belongings during Dubai apartment and villa renovation. What to store, how to plan, and the cost breakdown.",
    url: "https://safestorage.ae/blog/renovation-storage-tips",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/renovation-storage-tips" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Renovation Storage Tips Dubai — Complete Guide for Apartment & Villa Renovation",
    description: "Everything you need to know about storing furniture and belongings during a Dubai apartment or villa renovation.",
    url: "https://safestorage.ae/blog/renovation-storage-tips",
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
      { "@type": "ListItem", position: 3, name: "Renovation Storage Tips", item: "https://safestorage.ae/blog/renovation-storage-tips" },
    ],
  },
]

export default function RenovationStorageTipsPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Renovation Guide</div>
            <h1 className="text-4xl font-bold mb-4">Renovation Storage Tips Dubai — Make Your Reno Stress-Free</h1>
            <p className="text-white/80">Updated April 2025 · 8 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Renovating a Dubai apartment or villa is one of the most common storage triggers. Construction dust alone can permanently damage electronics, upholstery, and wooden furniture. Keeping your belongings in a space being renovated also slows contractors down — they work around your things instead of freely accessing every corner. Proper storage before and during renovation makes everything faster, cleaner and less stressful.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Why Construction Dust is a Serious Threat</h2>
            <p className="mb-4">Dubai construction uses particularly abrasive materials — gypsum board cutting, tile grinding and concrete work produce fine particles that:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Penetrate electronics vents and destroy circuit boards",
                "Permanently embed in upholstery fabric",
                "Scratch wooden surfaces and furniture finishes",
                "Damage TV screens and glass surfaces",
                "Clog appliance filters and motors",
                "Cause respiratory issues requiring deep professional cleaning after renovation",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-red-500 mt-0.5">⚠</span> {item}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">What to Store During Renovation</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { category: "Always Store", items: ["All electronics (TVs, laptops, gaming)", "Upholstered furniture (sofas, chairs)", "Mattresses and bedding", "Carpets and rugs", "Artwork and wall décor", "Kitchen appliances"], color: "bg-green-50 border-green-200" },
                { category: "Consider Storing", items: ["Dining tables and chairs", "Wardrobes and closets", "Bookshelves and units", "Curtains and blinds", "Decorative items", "Outdoor furniture"], color: "bg-yellow-50 border-yellow-200" },
                { category: "Can Usually Stay", items: ["Major fixed appliances (if covered)", "Structural furniture (if fully covered)", "Items in closed closets away from work", "Items in rooms not being renovated"], color: "bg-blue-50 border-blue-200" },
              ].map((cat) => (
                <div key={cat.category} className={`rounded-xl p-5 border-2 ${cat.color}`}>
                  <h3 className="font-bold text-dubai-navy mb-3">{cat.category}</h3>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Renovation Storage Timeline</h2>
            <div className="space-y-4 mb-8">
              {[
                { phase: "2-3 Weeks Before Renovation Starts", tasks: ["Get storage quote and book unit", "Decide what to store vs cover in place", "Order packing materials", "Notify contractors of storage access date"] },
                { phase: "3-5 Days Before Start", tasks: ["Disassemble large furniture", "Pack all electronics with protective materials", "Wrap items staying in property (heavy plastic)", "Book SafeStorage pickup"] },
                { phase: "Pickup Day", tasks: ["Team arrives, wraps and loads all items", "Document condition for all pieces", "Confirm storage unit inventory", "Get access for any renovation deliveries required"] },
                { phase: "During Renovation", tasks: ["Items safe in climate-controlled storage", "Contractors have full access to the space", "Request any specific items if needed", "Plan return delivery date (1 week post-completion)"] },
                { phase: "Renovation Complete", tasks: ["Deep clean property before delivery", "Schedule SafeStorage delivery", "Items returned and positioned", "Inspect for any damage (rare but possible during transit)"] },
              ].map((phase) => (
                <div key={phase.phase} className="p-5 bg-slate-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-dubai-navy mb-2">{phase.phase}</h3>
                  <ul className="space-y-1">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">The Cost of Renovation Storage vs The Cost of Renovation Damage</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3">Storage Cost (2BR Apartment, 3 months)</h3>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex justify-between"><span>Medium unit (3 months)</span><span className="font-bold">AED 1,497–2,097</span></div>
                  <div className="flex justify-between"><span>Free pickup + delivery</span><span className="font-bold">AED 0</span></div>
                  <div className="border-t border-green-300 pt-2 flex justify-between font-bold"><span>Total</span><span>AED 1,497–2,097</span></div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3">Renovation Damage Costs (if not stored)</h3>
                <div className="space-y-2 text-sm text-red-700">
                  <div className="flex justify-between"><span>Replace damaged sofa</span><span className="font-bold">AED 3,000–15,000</span></div>
                  <div className="flex justify-between"><span>Replace damaged TV</span><span className="font-bold">AED 1,500–8,000</span></div>
                  <div className="flex justify-between"><span>Deep cleaning service</span><span className="font-bold">AED 500–1,500</span></div>
                  <div className="border-t border-red-300 pt-2 flex justify-between font-bold"><span>Potential total</span><span>AED 5,000–25,000+</span></div>
                </div>
              </div>
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Planning a Dubai Renovation?</h2>
              <p className="text-white/80 mb-6">Book your storage before your contractors start. Free pickup across all Dubai areas — we make renovation storage simple.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Renovation Quote</Button>
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
