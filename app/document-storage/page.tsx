import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { FileText, CheckCircle2, Star, Phone, ArrowRight, Shield, Lock, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Document Storage Dubai — Secure Records",
  description: "Secure document and records storage in Dubai. Store business files, legal documents, contracts and personal records safely. Fire-resistant, access-controlled. From 12.60 AED / sqft. Call +971505773388.",
  keywords: "document storage dubai, records storage dubai, file storage dubai, business document storage dubai, legal document storage dubai, archive storage dubai, confidential document storage dubai",
  openGraph: {
    title: "Document Storage Dubai — Secure Records & Archive Storage | SafeStorage",
    description: "Secure document storage in Dubai for businesses and individuals. Fire-resistant, access-controlled, confidential. From 12.60 AED / sqft.",
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
    description: "Secure document and records storage in Dubai. Fire-resistant archive storage for business and personal documents, legal files, and confidential records.",
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
              <p className="text-xl text-white/85 mb-8">Free up prime office space and comply with UAE retention requirements — without destroying documents you're legally required to keep. SafeStorage Dubai provides secure, access-controlled document and archive storage for businesses and individuals from 12.60 AED / sqft.</p>
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
                { stat: "12.60 AED", label: "Starting price / sqft" },
                { stat: "5+ Years", label: "UAE retention requirements" },
                { stat: "24/7", label: "Security monitoring" },
                { stat: "Door-to-Door", label: "Initial collection" },
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
                <strong>Cost comparison:</strong> Storing business records with SafeStorage starts from 12.60 AED / sqft (VAT-inclusive). Renting the equivalent office floor space in Business Bay costs AED 800–1,500/month. Offsite document storage saves 80% vs using prime office space for archive boxes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Document Storage Security Standards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Clean, Secure Environment", desc: "Documents held in a clean, enclosed indoor area — kept dust-protected and away from the rain, direct sun, and outdoor elements that damage paper records." },
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
                { name: "Dr. Mahesh R.", location: "Al Quoz", role: "Clinic Owner", text: "Patient records from our first 4 years of operation are stored with SafeStorage. DHA requires us to retain for 25 years for some records. Having them offsite in a secure, access-controlled environment gives me confidence in our compliance posture.", rating: 5 },
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-8">About Our Document Storage Service in Dubai</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-12">
              <p>SafeStorage Dubai provides secure, access-controlled document and records storage for businesses and individuals across the emirate. Every box stored with us is held in a dedicated, access-controlled area &mdash; a clean, enclosed indoor space that keeps paper records dust-protected and away from the rain, direct sun, and outdoor elements. Our facility offers the physical security and confidentiality that legally required and irreplaceable documents demand, with a complete audit trail of every access event.</p>
              <p>UAE businesses are legally required to retain a wide range of documents for minimum statutory periods &mdash; from 2 years for employee records under UAE Labour Law to 10 years for real estate transactions under Dubai Land Department regulations. Failing to retain documents for the required period, or failing to produce them during an audit or legal proceeding, can result in regulatory penalties and significant legal exposure. SafeStorage Dubai provides an affordable, reliable solution that allows businesses to maintain full compliance with retention requirements without using expensive prime office floor space for archive boxes. Our pricing starts from 12.60 AED / sqft (VAT-inclusive), representing a fraction of the cost of equivalent office storage space in Dubai&apos;s commercial districts.</p>
            </div>

            <h2 className="text-3xl font-bold text-dubai-navy mb-8">Comprehensive Document Storage FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What types of documents can be stored at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai stores all categories of physical documents including financial records, audit files, tax returns and VAT documentation, legal contracts and correspondence, employee files and HR records, property and real estate documents, medical and clinical records, insurance policies, board meeting minutes, bank statements, supplier and customer contracts, visa and immigration paperwork, and personal documents such as passports, birth certificates, and wills. We accept documents in standard archive boxes (provided or supplied by us), lever arch files, binders, and sealed cartons. We do not open or read document contents &mdash; confidentiality of your documents is maintained throughout the storage relationship.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How long do UAE businesses need to retain documents?</h3>
                <p className="text-gray-700 leading-relaxed">UAE retention requirements vary by regulation and document type. Under the UAE Commercial Companies Law, financial records must be retained for a minimum of 5 years. UAE VAT Law (Federal Decree-Law No. 8 of 2017) requires tax records and supporting documents to be kept for 5 years minimum. DIFC company regulations require records to be kept for 6 years post-dissolution. UAE Labour Law requires employee records to be maintained for at least 2 years after employment ends. Dubai Land Department regulations specify 10 years for real estate transaction records. CBUAE banking regulations require financial institutions to retain records for 5&ndash;10 years depending on type. Non-compliance with these retention requirements can result in regulatory penalties during audits or legal proceedings.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are storage boxes catalogued and inventoried?</h3>
                <p className="text-gray-700 leading-relaxed">Each box you store with us is labelled with your reference system or a reference number we assign, and entered into our outer inventory record. This record tracks which boxes belong to your account and their location within the facility. We do not open boxes or read document contents &mdash; the inventory is based on outer box labels that you provide. For businesses with large volumes (50+ boxes), we strongly recommend maintaining your own internal catalogue (a simple spreadsheet with box number, contents description, and date range covered) so you can identify specific boxes quickly when retrieval is needed. We can provide templates and guidance for implementing an effective document cataloguing system before your first intake.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How quickly can I retrieve specific files or boxes?</h3>
                <p className="text-gray-700 leading-relaxed">For standard retrieval requests, we locate and prepare your specified box(es) for collection within 2 business hours during business days. If you call us before 12 noon, your box is typically ready for collection the same afternoon. For urgent retrieval requests &mdash; for example, if a document is needed for a same-day audit, legal proceeding, or emergency &mdash; call us directly at +971505773388 and we will prioritise the retrieval. A retrieval fee applies for individual box access outside of pre-arranged visits. If you visit regularly (weekly or bi-weekly), we can arrange scheduled access that reduces per-retrieval costs. We aim to make retrieval as seamless and responsive as possible.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can you securely destroy documents at the end of their retention period?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. SafeStorage Dubai offers a certified document destruction service for records that have reached the end of their required legal retention period. This service includes cross-cut shredding of document contents, and a formal certificate of destruction that details the date, volume, and reference of documents destroyed. This certificate is important for regulatory compliance records, particularly for businesses in regulated industries such as finance, healthcare, and law where evidence of proper document disposal is as important as evidence of retention. We can schedule destruction at a future date when you first place documents in storage, creating an automated end-of-life process for your archive records.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What fire protection is in place for stored documents?</h3>
                <p className="text-gray-700 leading-relaxed">Our document storage facility is built and operated to commercial fire safety standards required by Dubai Civil Defence. The facility is equipped with automatic fire detection systems (smoke and heat detectors throughout), fire sprinklers in storage areas, and gas suppression systems in document archive zones where water damage from sprinklers is a secondary concern. Fire extinguishers are placed at regular intervals and are maintained on a quarterly service schedule. The building construction includes fire-rated walls and doors that compartmentalise the facility. However, no storage facility can guarantee absolute protection from catastrophic fire events, and we strongly advise clients with irreplaceable original documents to also maintain certified digital backups stored separately.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Are access logs maintained for document retrieval?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can multiple staff members from my company retrieve documents?</h3>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What physical document formats are accepted for storage?</h3>
                <p className="text-gray-700 leading-relaxed">We accept standard archive boxes (A4 and legal size), lever arch files and binders stored in boxes, sealed cartons of any standard size, and large-format document tubes for drawings, blueprints, and engineering plans. We provide standardised archive boxes at cost if you need them. We do not store loose, unboxed documents for practical handling and security reasons. All documents should be securely boxed and labelled before arrival. For very large volumes &mdash; such as a full office move involving hundreds of boxes &mdash; we can arrange a scheduled collection and intake day where our team attends your premises to box, label, and transport your document archive in a single efficient operation.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How is confidentiality maintained for sensitive business documents?</h3>
                <p className="text-gray-700 leading-relaxed">Confidentiality is central to our document storage service. All staff handling documents are required to sign comprehensive confidentiality agreements as a condition of employment. Your documents are stored in a sealed, individually assigned area that is not accessible to other customers or general facility staff. Only personnel specifically authorised to handle your account have physical access to your storage area. We do not open boxes, read documents, or share any information about stored contents with any third party without your explicit written instruction or a valid legal order. For businesses handling client confidential data (law firms, medical practices, financial advisers), we can provide written confidentiality undertakings as part of our service agreement.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How are delicate documents such as maps, photos, and original artwork protected?</h3>
                <p className="text-gray-700 leading-relaxed">Delicate documents &mdash; including historical maps, original photographs, engineering drawings, architectural plans, legal originals on parchment or fine paper, and watercolour artworks &mdash; are stored in our clean, enclosed indoor units, kept dust-protected and away from the rain, direct sun, and outdoor elements. If you have particularly important or fragile documents, notify us at intake and we will store them in archival-grade materials such as acid-free boxes and interleaving tissue, and flat where appropriate to prevent creasing. For the most valuable originals, we also recommend keeping certified digital copies stored separately as a backup.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Is the document storage service GDPR or data protection compliant?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai operates under UAE data protection law (Federal Decree-Law No. 45 of 2021 on Personal Data Protection) and, for businesses operating in or connected to DIFC or ADGM, under the respective data protection frameworks of those free zones. For companies subject to GDPR (EU businesses with UAE operations, or companies handling EU personal data), our service supports GDPR-compliant physical data storage through our access controls, confidentiality agreements, and audit logging. We can provide data processing agreements and information about our data handling practices as required by your compliance obligations. For specific compliance queries, we recommend consulting with your legal team alongside discussing our service specifications with us.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">Can I store original legal documents such as title deeds, wills, and contracts?</h3>
                <p className="text-gray-700 leading-relaxed">Yes, original legal documents &mdash; title deeds, property certificates, wills and probate documents, original signed contracts, court orders, and notarised documents &mdash; are among the most important category of documents we store. These are the documents where loss or damage is most consequential, making proper secure storage essential. For original legal documents, we recommend storing them in sealed, labelled envelopes or folders inside archive boxes, with a clear reference on the outer label. For clients who want the highest level of security for a small number of critical originals, ask us about our secure document vault options. We store original documents for law firms, notary offices, banks, property developers, and private individuals alike.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">What industries use document storage in Dubai most commonly?</h3>
                <p className="text-gray-700 leading-relaxed">The industries that most commonly use professional document storage in Dubai include legal and law firms (client files, case records, court correspondence), accounting and audit firms (financial statements, audit working papers, VAT records), medical and healthcare providers (patient records, prescription archives, lab results), real estate agencies and developers (sales agreements, title deed copies, tenancy contracts, DLD records), human resources and recruitment firms (employee files, visa records, payroll documentation), banking and financial services (loan files, compliance records, transaction documentation), and government contractors (project records, tender documentation, compliance files). Individuals also frequently use the service for personal legal and financial documents, particularly during estate management or property transactions.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-dubai-navy mb-3">How do I get started with document storage at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Getting started is simple. Call us at +971505773388 or request a quote at safestorage.ae/get-quote, telling us approximately how many boxes you need to store. We provide a same-day quote based on volume and storage duration. If you need boxes supplied, we can provide standardised archive boxes at a small additional cost. We offer a door-to-door collection service &mdash; our team comes to your office or home and transports your documents to our facility. On arrival, each box is logged into our system with your reference labels. You sign the storage agreement, receive a copy of the inventory record, and we handle the rest. Most businesses have their entire document archive moved within a single working day.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
