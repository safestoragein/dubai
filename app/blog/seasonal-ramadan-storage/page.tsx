import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Seasonal & Ramadan Storage Dubai — What to Store & When | SafeStorage",
  description: "Guide to seasonal storage in Dubai including Ramadan storage, Eid clearouts, summer storage, and managing seasonal items in Dubai's unique calendar. From AED 99/month.",
  keywords: "seasonal storage dubai, ramadan storage dubai, eid storage dubai, seasonal items storage dubai, holiday storage dubai, furniture storage ramadan",
  openGraph: {
    title: "Seasonal & Ramadan Storage Dubai — Managing Seasonal Items",
    description: "How Dubai residents use seasonal storage for Ramadan, Eid, summer and school year transitions. What to store and when.",
    url: "https://safestorage.ae/blog/seasonal-ramadan-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/seasonal-ramadan-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Seasonal & Ramadan Storage Dubai — What to Store & When",
    description: "Complete guide to seasonal storage needs in Dubai including Ramadan, Eid, summer travel and school year transitions.",
    url: "https://safestorage.ae/blog/seasonal-ramadan-storage",
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
      { "@type": "ListItem", position: 3, name: "Seasonal Ramadan Storage", item: "https://safestorage.ae/blog/seasonal-ramadan-storage" },
    ],
  },
]

export default function SeasonalRamadanStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Seasonal Guide</div>
            <h1 className="text-4xl font-bold mb-4">Seasonal & Ramadan Storage Dubai — What to Store & When</h1>
            <p className="text-white/80">Updated April 2025 · 7 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">Dubai has a unique seasonal calendar that creates distinct storage patterns throughout the year. Unlike Western countries, Dubai's seasons are driven by the Islamic calendar, school terms, and the dramatic shift between 48°C summers and pleasant 20-25°C winters. Understanding these patterns helps you plan seasonal storage proactively rather than reactively.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Dubai's Seasonal Storage Calendar</h2>
            <div className="space-y-6 mb-8">
              {[
                {
                  season: "Ramadan (moves through calendar)",
                  icon: "🌙",
                  desc: "Ramadan brings significant lifestyle changes to Dubai. Many expats travel for part of Ramadan. Businesses change hours. Extended family visits create space needs.",
                  storage: ["Store extra furniture when hosting family in smaller apartments", "Clear out home offices if converting to prayer/family space", "Store entertainment furniture that won't be used during Ramadan period", "Short-term 1-2 month storage is perfect for Ramadan transitions"],
                },
                {
                  season: "Eid Al-Fitr & Eid Al-Adha",
                  icon: "🎊",
                  desc: "Eid is a major shopping and gifting period in Dubai. New decorations, gifts, and furnishings often mean a clearout is needed.",
                  storage: ["Store old décor to make way for new Eid decorations", "Seasonal textiles, tablecloths, and special occasion items between Eids", "Gift storage if you've received large items without space", "Short-term 1-3 month storage common pre and post-Eid"],
                },
                {
                  season: "Summer (June-September)",
                  icon: "☀️",
                  desc: "Dubai's summer is the biggest storage trigger. Tens of thousands of expat families leave Dubai for 2-3 months, and schools are out.",
                  storage: ["Store electronics and valuables rather than leaving in empty hot apartments", "Summer school items (PE kits, heavy uniforms) in storage while children are home", "Sports and outdoor equipment used only in cooler months", "3-month summer storage is our most popular seasonal package"],
                },
                {
                  season: "Back to School (August-September)",
                  icon: "📚",
                  desc: "The start of Dubai's school year in September triggers major reorganisation in family homes.",
                  storage: ["Previous year's school materials and uniforms", "Summer holiday toys and gear going back into storage", "Seasonal décor changeover from summer to academic year", "Room reorganisation often triggers a clearout to storage"],
                },
                {
                  season: "Dubai Winter (November-March)",
                  icon: "🌤️",
                  desc: "Dubai's winter is outdoor season. BBQ equipment comes out, summer clothes go in, outdoor furniture gets used daily.",
                  storage: ["Summer clothes and lighter wardrobes", "Summer outdoor items (paddling pools, shade covers)", "Winter clothing from home countries that won't be needed in Dubai winter", "Ski and cold-weather gear used only on trips abroad"],
                },
              ].map((s) => (
                <div key={s.season} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="font-bold text-dubai-navy text-xl">{s.season}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{s.desc}</p>
                  <div className="space-y-1">
                    {s.storage.map((item) => (
                      <div key={item} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0 mt-0.5" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Seasonal Items Worth Storing in Dubai</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { category: "Winter clothes from home countries", note: "Coats, boots, heavy knitwear — needed when visiting colder countries but taking up wardrobe space 10 months of the year in Dubai." },
                { category: "Ski and cold-weather gear", note: "Ski suits, helmets, goggles, and boots are bulky and used only 1-2 times a year for trips to ski resorts." },
                { category: "Christmas and holiday decorations", note: "Dubai has a vibrant Christmas culture. Large trees, decorations and seasonal items need storage 11 months a year." },
                { category: "Summer children's equipment", note: "Paddling pools, water toys, garden shade structures — seasonal in even Dubai (June-September), then stored for the cooler months." },
                { category: "BBQ and outdoor entertaining", note: "Used November-April in Dubai's pleasant winter. Stored through the 48°C summer when outdoor entertaining is impossible." },
                { category: "Ramadan decorations", note: "Lanterns, crescent decorations, special tablecloths — cherished but only needed for 1 month per year." },
              ].map((item) => (
                <div key={item.category} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dubai-navy text-sm">{item.category}</div>
                    <div className="text-xs text-gray-600 mt-1">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Seasonal Storage from AED 99/month</h2>
              <p className="text-white/80 mb-6">Store seasonal items between uses. No minimum contract — 1 month is fine. Free pickup across Dubai.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Seasonal Quote</Button>
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
