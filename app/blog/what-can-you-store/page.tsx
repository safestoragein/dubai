import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { Phone, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "What Can You Store in a Storage Unit in Dubai? Full Guide | SafeStorage",
  description: "What's allowed and not allowed in Dubai storage units. Complete guide covering what you can store, what's prohibited, and specialist items that need special handling.",
  keywords: "what can you store storage unit dubai, what is allowed storage dubai, prohibited items storage dubai, can I store food storage unit, storage unit rules dubai",
  openGraph: {
    title: "What Can You Store in a Storage Unit in Dubai? Complete Guide",
    description: "Full guide to what's permitted and prohibited in Dubai storage units. Know before you book.",
    url: "https://safestorage.ae/blog/what-can-you-store",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "article",
  },
  alternates: { canonical: "https://safestorage.ae/blog/what-can-you-store" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Can You Store in a Storage Unit in Dubai? Full Guide",
    description: "Complete guide to what's permitted and what's prohibited in Dubai self storage units. Covers common items, specialist items, and UAE regulations.",
    url: "https://safestorage.ae/blog/what-can-you-store",
    datePublished: "2025-01-20",
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
      { "@type": "ListItem", position: 3, name: "What Can You Store", item: "https://safestorage.ae/blog/what-can-you-store" },
    ],
  },
]

const allowed = [
  { category: "Furniture & Home", items: ["Sofas, chairs, tables", "Beds, mattresses, wardrobes", "Appliances (fridge, washer, dryer)", "Décor, lamps, mirrors", "Carpets and rugs"] },
  { category: "Electronics & Tech", items: ["TVs, monitors, projectors", "Computers, laptops, tablets", "Gaming consoles", "Cameras and audio equipment", "Servers and IT equipment"] },
  { category: "Clothing & Personal", items: ["Clothing and shoes", "Bags and luggage", "Jewellery and accessories", "Sports equipment", "Toys and games"] },
  { category: "Business & Commercial", items: ["Office furniture and equipment", "Inventory and stock", "Documents and archives", "Tools and equipment", "Display fixtures and signage"] },
  { category: "Specialist Items", items: ["Artwork and paintings", "Musical instruments", "Wine and spirits (climate)", "Classic and collector vehicles", "Antiques and collectibles"] },
  { category: "Vehicles", items: ["Cars and SUVs", "Motorcycles and scooters", "Bicycles", "Boats and jet skis", "Classic and collector vehicles"] },
]

const prohibited = [
  { item: "Flammable materials", detail: "Petrol, diesel, paint, solvents, propane tanks, lighter fluid — all prohibited under UAE fire code." },
  { item: "Explosives or ammunition", detail: "Any type of explosive material, firearms, or ammunition — strictly prohibited and subject to legal penalties." },
  { item: "Hazardous chemicals", detail: "Pesticides, industrial chemicals, corrosives and class 1-9 dangerous goods are not permitted." },
  { item: "Perishable food", detail: "Any food that can rot, ferment or attract pests — including tinned goods (which can explode in heat). Exception: sealed, non-organic food in airtight containers may be permitted — ask first." },
  { item: "Living things", detail: "Plants, animals, or any living organism cannot be stored." },
  { item: "Illegal items", detail: "Any items illegal in the UAE — including certain media, substances, or items prohibited by UAE law." },
  { item: "Items with strong odours", detail: "Items that produce persistent odours (including some cleaning products) can affect adjacent units and are not permitted." },
  { item: "Stolen property", detail: "By definition — items cannot be stored if they are stolen goods. Customers agree to warrant legal ownership at time of booking." },
]

export default function WhatCanYouStorePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-3 py-1 rounded-full text-sm mb-4">Storage Guide</div>
            <h1 className="text-4xl font-bold mb-4">What Can You Store in a Storage Unit in Dubai? Complete Guide</h1>
            <p className="text-white/80">Updated April 2025 · 7 min read · By SafeStorage Dubai</p>
          </div>
        </section>

        <article className="py-12">
          <div className="container px-4 max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-8">The short answer: you can store almost anything in a Dubai storage unit — furniture, electronics, vehicles, business inventory, artwork, wine and much more. There are some clear prohibitions (flammables, hazardous materials, perishables) and some items that need specialist handling. Here's the complete picture.</p>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-6">What You CAN Store — Comprehensive List</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {allowed.map((cat) => (
                <div key={cat.category} className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="font-bold text-green-800 mb-3">{cat.category}</h3>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-6">What You CANNOT Store — Prohibited Items</h2>
            <div className="space-y-3 mb-8">
              {prohibited.map((p) => (
                <div key={p.item} className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                  <div>
                    <div className="font-semibold text-red-800">{p.item}</div>
                    <div className="text-sm text-gray-700 mt-1">{p.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Items That Need Specialist Handling</h2>
            <div className="space-y-4 mb-8">
              {[
                { item: "Artwork and paintings", note: "Allowed but recommended in climate-controlled units with photography on intake. Declare value at booking for appropriate insurance coverage." },
                { item: "Wine and spirits", note: "Allowed in climate-controlled units. Store at 12-16°C for wine — standard climate-controlled units at 18-24°C are adequate for short-term (under 5 years). Ask about dedicated wine storage options for long-term collections." },
                { item: "Vehicles", note: "Vehicles need dedicated vehicle bays, not standard storage units. Petrol tank should be at minimum level (not full). Disconnect battery for long-term storage. Ask about our vehicle storage pricing." },
                { item: "Musical instruments", note: "Piano storage requires specialist knowledge and moving equipment. High-value string instruments need climate-controlled storage with humidity monitoring. Declare instruments at intake." },
                { item: "Medical or laboratory equipment", note: "Allowed but may require documentation of intended use. Contact us before booking if you have specific medical or lab equipment to store." },
              ].map((s) => (
                <div key={s.item} className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="font-semibold text-dubai-navy">{s.item}</div>
                  <div className="text-sm text-gray-700 mt-1">{s.note}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-dubai-navy mt-10 mb-4">Common Questions About Specific Items</h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "Can I store a fridge with food still in it?", a: "No. Fridges must be defrosted, cleaned and completely empty before storage. Food left in a stored fridge creates mould and can attract pests that affect your unit and adjacent ones." },
                { q: "Can I store a car with a full petrol tank?", a: "No. Vehicles should have the minimum fuel level (near empty or 1/4 tank maximum). Full petrol tanks are a fire risk in storage. This applies to motorcycles, generators and any petrol-powered equipment." },
                { q: "Can I store passports or original documents?", a: "Legally yes, but practically we recommend against storing irreplaceable original documents unless absolutely necessary. Certified copies of most documents suffice for most purposes. If you must store originals, use a safety deposit box service or our document vault option." },
                { q: "Can I store a mattress on its side?", a: "No — mattresses stored on their side or at an angle develop permanent sag and structural damage over time. Mattresses should always be stored flat (horizontal) or not at all. We store them flat or in dedicated mattress bags stored horizontally." },
              ].map((qa) => (
                <div key={qa.q} className="border border-gray-200 rounded-xl p-5">
                  <div className="font-semibold text-dubai-navy mb-2">Q: {qa.q}</div>
                  <div className="text-gray-600 text-sm">A: {qa.a}</div>
                </div>
              ))}
            </div>

            <div className="bg-dubai-navy text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Not Sure if You Can Store Something?</h2>
              <p className="text-white/80 mb-6">Call us — we'll advise immediately. If in doubt, we'd rather answer your question before booking than create an issue on pickup day.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-3 text-lg">Get a Quote</Button>
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
