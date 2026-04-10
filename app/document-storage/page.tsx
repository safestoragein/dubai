import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { FileText, CheckCircle2, Star, Phone, ArrowRight, Shield, Lock, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Document Storage Dubai — Secure Business & Personal Records Storage | SafeStorage",
  description: "Secure document and records storage in Dubai. Store business files, legal documents, contracts and personal records safely. Fire-resistant, climate-controlled. From AED 99/month. Call +971505773388.",
  keywords: "document storage dubai, records storage dubai, file storage dubai, business document storage dubai, legal document storage dubai, archive storage dubai, confidential document storage dubai",
  openGraph: {
    title: "Document Storage Dubai — Secure Records & Archive Storage | SafeStorage",
    description: "Secure document storage in Dubai for businesses and individuals. Fire-resistant, climate-controlled, access-controlled. From AED 99/month.",
    url: "https://safestorage.ae/document-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/document-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Document & Records Storage Dubai",
    description: "Secure, climate-controlled document and records storage in Dubai. Fire-resistant archive storage for business and personal documents, legal files, and confidential records.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/document-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Document Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/document-storage#webpage",
    name: "Document Storage Dubai — Secure Business & Personal Records Storage",
    url: "https://safestorage.ae/document-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Document Storage Dubai", item: "https://safestorage.ae/document-storage" },
    ],
  },
]

const dubaiBusiness = [
  { regulation: "UAE Commercial Companies Law", requirement: "Financial records must be retained for a minimum of 5 years" },
  { regulation: "UAE VAT Law (Federal Decree-Law No. 8 of 2017)", requirement: "Tax records and supporting documents: 5 years minimum retention" },
  { regulation: "DIFC Company Regulations", requirement: "Company records minimum 6 years post-dissolution" },
  { regulation: "UAE Labour Law", requirement: "Employee records minimum 2 years post-employment end" },
  { regulation: "Dubai Land Department", requirement: "Real estate transaction records: 10 years minimum" },
  { regulation: "UAE Banking Regulations (CBUAE)", requirement: "Banking and finance records: 5-10 years depending on record type" },
]

export default function DocumentStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" /> Document & Records Storage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Document Storage Dubai — Secure Archive & Records Management</h1>
              <p className="text-xl text-white/85 mb-8">Free up prime office space and comply with UAE retention requirements — without destroying documents you're legally required to keep. SafeStorage Dubai provides secure, climate-controlled document and archive storage for businesses and individuals from AED 99/month.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Quote</Button>
                </Link>
                <a href="tel:+971505773388">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                    <Phone className="w-5 h-5 mr-2" /> +971505773388
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-dubai-gold/10 border-y border-dubai-gold/20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "AED 99", label: "Starting price/month" },
                { stat: "5+ Years", label: "UAE retention requirements" },
                { stat: "24/7", label: "Security monitoring" },
                { stat: "Free", label: "Initial collection" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-dubai-navy">{s.stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">UAE Document Retention Requirements — What You Must Keep</h2>
            <p className="text-gray-600 mb-8 text-lg">Dubai and UAE businesses are legally required to retain certain records for defined periods. Destroying them early can result in regulatory penalties. Here are the key retention requirements:</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dubai-navy text-white">
                    <th className="text-left p-4 rounded-tl-lg">Regulation</th>
                    <th className="text-left p-4 rounded-tr-lg">Retention Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {dubaiBusiness.map((row, i) => (
                    <tr key={row.regulation} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="p-4 font-semibold text-dubai-navy">{row.regulation}</td>
                      <td className="p-4 text-gray-700">{row.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-dubai-gold/10 border border-dubai-gold/30 rounded-xl p-6">
              <p className="text-dubai-navy font-medium">
                <strong>Cost comparison:</strong> Storing 20 filing boxes of business records with SafeStorage costs approximately AED 150/month. Renting the equivalent office floor space in Business Bay costs AED 800–1,500/month. Offsite document storage saves 80% vs using prime office space for archive boxes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Document Storage Security Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "Biometric Access Control", desc: "Only authorised personnel can enter document storage areas. Biometric entry log maintained — complete record of who accessed your documents and when." },
                { icon: Shield, title: "Climate-Controlled Environment", desc: "Documents stored at 18-24°C with 45-55% humidity. Paper degrades faster in heat and humidity — our climate control prevents yellowing, brittleness and mould." },
                { icon: FileText, title: "Individual Labelling & Inventory", desc: "Your boxes are labelled with your reference system. We maintain an outer inventory record so specific boxes can be retrieved without searching through everything." },
                { icon: Clock, title: "Timed Destruction Service", desc: "We can schedule document destruction at the end of your required retention period — certified shredding with a destruction certificate issued for your compliance records." },
                { icon: CheckCircle2, title: "Confidentiality Assured", desc: "Staff are bound by confidentiality agreements. Your documents are stored in a sealed, individually assigned area — not accessible by other customers or general staff." },
                { icon: ArrowRight, title: "Retrieval on Request", desc: "Need a specific box? Request retrieval via phone or email. We locate and have ready for collection within 2 business hours for standard requests." },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <f.icon className="w-10 h-10 text-dubai-gold mb-4" />
                  <h3 className="font-bold text-dubai-navy mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Who Uses Our Document Storage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Law Firms & Legal Practices", desc: "Store client files, case records, and legal correspondence securely off-site. Maintain confidentiality while freeing DIFC or JLT office space. Retrieve files on request within hours." },
                { title: "Accounting & Finance Firms", desc: "VAT records, audit files, financial statements and client tax documents must be retained for 5+ years in the UAE. Secure offsite storage is safer and cheaper than prime office filing cabinets." },
                { title: "Medical & Healthcare", desc: "Patient records, prescriptions, lab results and insurance documentation. Healthcare providers must maintain records for defined periods under DHA regulations. Confidential, secure, compliant." },
                { title: "Real Estate Companies", desc: "Title deeds, sales agreements, tenancy contracts and DLD records. Real estate documents often have 10-year retention requirements and build up rapidly in high-volume agencies." },
                { title: "HR & Recruitment Departments", desc: "Employee contracts, performance records, visa documents, and payroll files. UAE Labour Law requires retention of employment records for minimum 2 years post-employment." },
                { title: "Individuals & Families", desc: "Personal documents — passports, marriage certificates, property deeds, wills, financial records. Secure offsite storage protects against fire, theft, or home flooding — common risks in Dubai." },
              ].map((u) => (
                <div key={u.title} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-dubai-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dubai-navy mb-1">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Customer Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Ibrahim S.", location: "DIFC", role: "Law Firm Partner", text: "We store 5 years of closed client files with SafeStorage. Retrieval when we need a reference takes 2 hours. We freed up an entire storage room in our DIFC office that now accommodates a meeting room. Cost savings plus more usable space — an obvious decision.", rating: 5 },
                { name: "Laleh K.", location: "Business Bay", role: "Finance Director", text: "VAT audit required records from 2018–2022. Everything was with SafeStorage — labelled by year and category. The retrieval was smooth and everything was in exactly the condition it was stored. The auditors were satisfied. Could not have managed the same compliance with in-office storage.", rating: 5 },
                { name: "Dr. Mahesh R.", location: "Al Quoz", role: "Clinic Owner", text: "Patient records from our first 4 years of operation are stored with SafeStorage. DHA requires us to retain for 25 years for some records. Having them offsite in a climate-controlled, access-controlled environment gives me confidence in our compliance posture.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} · {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Document Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Do you provide an inventory of my stored documents?", a: "Yes. We create an outer inventory of your boxes with your own reference labels or descriptions. We do not open or read document contents — the inventory is based on box labels you provide. For businesses with large volumes, we recommend your own internal cataloguing system (even a spreadsheet) to track what's in each box." },
                { q: "Can you retrieve a specific box without me coming in?", a: "Yes. Call or email us with your box reference number. We locate the box and have it ready for collection within 2 business hours during business days. For urgent retrieval, call directly — we can prioritise if needed. A retrieval fee applies for individual box access without a pre-arranged visit." },
                { q: "Do you offer certified document destruction?", a: "Yes. We provide a scheduled shredding service for documents that have reached the end of their required retention period. A certificate of destruction is issued for your compliance records. This is particularly valuable for financial and legal documents where destruction must be documented for regulatory purposes." },
                { q: "How do you prevent unauthorised access to my documents?", a: "Your documents are stored in a locked, dedicated area accessible only to authorised staff and yourself. Biometric access control maintains a log of all entry events. No other customers or general staff can access your assigned area. All staff sign confidentiality agreements. If you require higher security (e.g. for client legal files or medical records), ask us about our secure document vault options." },
                { q: "What happens if there's a fire or water damage at the facility?", a: "Our facility has fire suppression systems (sprinklers and gas suppression in document areas) and is constructed to commercial fire safety standards. However, no storage facility can guarantee zero risk from extreme events. For highly irreplaceable documents (original contracts, title deeds, wills), we strongly recommend keeping digital backups stored separately. For business-critical archives, insurance coverage at declared value is recommended." },
              ].map((faq) => (
                <details key={faq.q} className="border border-gray-200 rounded-xl p-6 group">
                  <summary className="font-semibold text-dubai-navy cursor-pointer list-none flex justify-between items-center">
                    {faq.q}<ArrowRight className="w-4 h-4 text-dubai-gold transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-dubai-navy text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Secure Your Documents. Reclaim Your Office Space.</h2>
            <p className="text-xl text-white/85 mb-8">Get a free quote for business or personal document storage in Dubai. We collect from your office or home.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Free Quote</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-navy px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> +971505773388
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
