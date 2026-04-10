import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Villa Moving Guide Dubai — Complete Checklist for Moving a Dubai Villa | SafeStorage",
  description: "Complete guide to moving a Dubai villa. 8-week checklist, what to store, how to manage the logistics, and how to avoid the most expensive mistakes. Free pickup available.",
  keywords: "villa moving dubai, moving out of villa dubai, dubai villa move checklist, how to move villa dubai, moving large house dubai, villa relocation dubai",
  openGraph: {
    title: "Villa Moving Guide Dubai — Complete 8-Week Checklist",
    description: "Everything you need to know about moving a Dubai villa. Step-by-step checklist, storage options, and logistics guide.",
    url: "https://safestorage.ae/blog/villa-moving-guide-dubai",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/villa-moving-guide-dubai" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Villa Moving Guide Dubai — Complete Checklist for Moving a Dubai Villa",
    description: "Comprehensive 8-week checklist for moving a Dubai villa. Covers sorting, storage, moving logistics, and avoiding costly mistakes.",
    url: "https://safestorage.ae/blog/villa-moving-guide-dubai",
    datePublished: "2025-01-30",
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
      { "@type": "ListItem", position: 3, name: "Villa Moving Guide Dubai", item: "https://safestorage.ae/blog/villa-moving-guide-dubai" },
    ],
  },
]

export default function VillaMovingGuideDubaiPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Moving Guide</div>
            <h1 className="text-4xl font-bold mb-4">Villa Moving Guide Dubai — Complete 8-Week Checklist</h1>
            <p className="text-white/80">Updated April 2025 · 11 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Moving a Dubai villa is a significantly larger undertaking than moving an apartment. A typical 4-5 bedroom villa contains 10-20 tonnes of furniture and household contents, requiring a full day with a professional moving team. Without a plan, villa moves in Dubai go badly — damage, missing items, wrong destination, and rushed decisions about what to keep or dispose of are all common. This guide gives you an 8-week plan to move properly.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-6">The 8-Week Villa Move Checklist</h2>
            <div className="space-y-5 mb-8">
              {[
                {
                  week: "Weeks 8-7: Plan & Sort",
                  tasks: [
                    "Walk every room and identify items in four categories: KEEP, STORE, SELL, DONATE/DISPOSE",
                    "Book storage unit (large or extra-large for full villa contents)",
                    "Get 3 moving quotes from verified Dubai movers",
                    "Notify school(s) of address change",
                    "Notify employer, bank, and key contacts of moving date",
                  ],
                },
                {
                  week: "Weeks 6-5: Declutter & Sell",
                  tasks: [
                    "Post items for sale on Dubizzle and Facebook Marketplace",
                    "Contact charities for large donation collection (Dar Al Ber accepts furniture)",
                    "Order packing materials (boxes, bubble wrap, furniture covers, stretch wrap)",
                    "Start packing non-essential rooms (guest rooms, study)",
                    "Photograph all electronics with serial numbers",
                  ],
                },
                {
                  week: "Weeks 4-3: Pack & Store",
                  tasks: [
                    "Begin packing systematically — one room at a time",
                    "SafeStorage pickup for items going to storage",
                    "Arrange sale collection for sold items",
                    "Deep clean rooms as they're cleared",
                    "Confirm moving company booking with final inventory",
                  ],
                },
                {
                  week: "Weeks 2-1: Final Preparation",
                  tasks: [
                    "Pack remaining essentials (keep an 'open first' box with essentials for move-in night)",
                    "Disconnect and prepare all appliances",
                    "Defrost fridge/freezer 24 hours before move day",
                    "Arrange building access for movers at both properties",
                    "Final walkthrough — check all cupboards, storage rooms, roof space",
                  ],
                },
                {
                  week: "Move Day",
                  tasks: [
                    "Be present — don't leave movers unsupervised",
                    "Check every item against the inventory as it's loaded",
                    "Label boxes for each room at destination (helps movers place correctly)",
                    "Do a final walkthrough before leaving",
                    "Document condition of outgoing villa with photos for DEWA/deposit purposes",
                  ],
                },
              ].map((week) => (
                <div key={week.week} className="border border-gray-200 rounded-xl p-5 bg-slate-50">
                  <h3 className="font-bold text-dubai-navy text-lg mb-3">{week.week}</h3>
                  <ul className="space-y-2">
                    {week.tasks.map((task) => (
                      <li key={task} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Villa Moving Costs in Dubai (2025)</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-left">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Professional movers (4BR villa, local move)", "AED 2,500–5,000"],
                    ["Packing service (full villa)", "AED 1,500–3,000"],
                    ["Large storage unit (if bridging)", "AED 899–1,299/month"],
                    ["DEWA transfer/connection", "AED 110–130"],
                    ["Cleaning service (outgoing villa)", "AED 600–1,500"],
                    ["Building moving permit (many required)", "AED 0–500"],
                  ].map(([service, cost], i) => (
                    <tr key={service} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 text-gray-700">{service}</td>
                      <td className="p-4 font-semibold text-dubai-gold">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Common Villa Move Mistakes in Dubai</h2>
            <div className="space-y-3 mb-8">
              {[
                "Not getting a moving permit from the building management — required in most Dubai communities",
                "Booking movers too late — good professional movers are booked 2-3 weeks out, especially in peak season (January-March, August-September)",
                "Not photographing the villa before and after — critical for DEWA, deposit, and dispute resolution",
                "Trying to sell everything in the last 2 weeks — rushed Dubizzle sales get 20-30% of value. Plan 6 weeks ahead",
                "No written inventory for the moving company — creates disputes about missing items",
                "Not disconnecting DEWA (Dubai Electricity and Water Authority) at old property — bills accrue",
              ].map((mistake) => (
                <div key={mistake} className="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-gray-700">
                  <span className="text-red-500">✗</span>{mistake}
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Free Villa Storage Pickup Across Dubai</h2>
              <p className="text-white/80 mb-6">Storing during your villa move? SafeStorage provides free pickup for villa contents. Large and extra-large units available for full villa storage.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Villa Storage Quote</Button>
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
