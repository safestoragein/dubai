import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ShieldCheck, Truck, Clock, Lock, Headphones, Star, Users, ArrowRight, FolderLock, Archive } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Document Archival & Records Storage Dubai",
  description:
    "Professional document archival for law firms, medical clinics, and businesses in Dubai. Fireproof, secure records storage with indexed retrieval in 24 hrs. Compliant with UAE data laws. Call +971505773388.",
  keywords:
    "document archival service dubai, business records storage dubai, legal document archival UAE, medical records storage dubai, fireproof document storage, indexed records retrieval dubai, compliance document storage UAE",
  openGraph: {
    title: "Document Archival & Records Storage Dubai | Legal, Medical & Business Files | SafeStorage",
    description: "Fireproof, secure document archival in Dubai. Indexed retrieval within 24 hrs. Compliant with UAE laws. Call +971505773388.",
    url: "https://safestorage.ae/storage-dubai/records-archival",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/records-archival",
  },
}

const features = [
  {
    icon: FolderLock,
    title: "Secure Storage",
    description: "Fireproof, secure facilities with restricted access",
  },
  {
    icon: Truck,
    title: "Door-to-door Pickup & Delivery",
    description: "We collect and deliver documents at your convenience",
  },
  {
    icon: Archive,
    title: "Long-term Archival",
    description: "Perfect for compliance and regulatory requirements",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Complete privacy and confidentiality for sensitive documents",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal document management specialist",
  },
]

const industries = [
  "Legal Firms & Law Offices",
  "Medical Clinics & Hospitals",
  "Accounting & Finance",
  "Real Estate Agencies",
  "Government Contractors",
  "Insurance Companies",
]

export default function RecordsArchivalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dubai-navy to-dubai-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (487+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by 100+ Businesses</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Document Storage & <span className="text-dubai-gold">Records Archival</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Professional document storage and archival solutions in Dubai. Secure
              storage for your business records, legal documents, and sensitive files.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971505773388">Call: 050-577-3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              Trusted by Leading Industries
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Professional document storage solutions for businesses with compliance requirements
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <FileText className="w-10 h-10 text-dubai-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-dubai-navy">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage for Documents?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security and compliance for your sensitive business documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:border-dubai-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dubai-gold" />
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Business Documents?
            </h2>
            <p className="text-white/80 mb-8">
              Get professional document storage with complete security and compliance. Door-to-Door pickup available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-10 py-6"
                asChild
              >
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100 text-lg px-10 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Document Archival &amp; Records Storage Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage provides professional document archival and records storage services for businesses
            across Dubai and the UAE. Our fireproof, secure document storage facility meets UAE
            regulatory requirements for record retention and offers indexed retrieval within 24 hours for
            any stored document or file box.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">UAE Compliance &amp; Record Retention Requirements</h3>
              <p className="text-gray-700 mb-3">
                UAE Commercial Companies Law and various regulatory bodies require businesses to retain specific
                categories of records for defined periods — typically 5–10 years for financial records,
                contracts, and employment files. Many businesses in Dubai lack adequate on-site space to
                store these volumes of archived documents while maintaining easy access when required.
              </p>
              <p className="text-gray-700">
                SafeStorage&apos;s document archival service solves this problem. All boxes are individually
                barcoded and indexed in our digital management system. When you need a specific file or
                box, simply request it via phone, WhatsApp, or our online portal and we will deliver it
                to your office within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Security &amp; Confidentiality</h3>
              <p className="text-gray-700 mb-3">
                Business documents often contain highly sensitive information — financial data, client records,
                legal contracts, HR files, and medical records. SafeStorage maintains the highest standards
                of physical security and access control to protect your confidential documents.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Legal &amp; Professional Services</p>
                <ul className="space-y-1 text-sm">
                  <li>• Law firms and legal consultancies</li>
                  <li>• Notary offices</li>
                  <li>• HR and recruitment agencies</li>
                  <li>• Consulting firms</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Medical &amp; Healthcare</p>
                <ul className="space-y-1 text-sm">
                  <li>• Hospitals and clinics</li>
                  <li>• Dental practices</li>
                  <li>• Pharmacy records</li>
                  <li>• Health insurance providers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Finance &amp; Business</p>
                <ul className="space-y-1 text-sm">
                  <li>• Banks and financial institutions</li>
                  <li>• Accounting firms</li>
                  <li>• Real estate agencies</li>
                  <li>• Government contractors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Document Shredding &amp; Destruction Services</h3>
            <p className="text-gray-700 mb-4">
              When documents reach the end of their required retention period, they must be destroyed
              securely to comply with UAE data protection regulations and prevent sensitive information
              from being misused. SafeStorage offers a certified document shredding service — we collect
              expired records from our facility or your office, shred them using industrial cross-cut
              shredders, and provide a certificate of destruction for your compliance records.
            </p>
            <p className="text-gray-700">
              Contact our team to discuss your document archival requirements, retrieval frequency, and
              retention schedules. We will design a custom document management solution that fits your
              business needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Document &amp; Records Archival Storage in Dubai — Complete Business Guide</h2>
          <p className="text-lg text-gray-700 mb-8">
            Every business operating in Dubai generates documents that must be retained for legal, regulatory, and operational reasons. Contracts, financial records, employee files, client data, tax returns, and correspondence all have defined retention periods under UAE law. Managing these documents on-site — in filing cabinets, storage rooms, or rented office space — is expensive, inefficient, and often insufficient to meet compliance requirements. Professional off-site archival storage is the solution adopted by leading Dubai businesses across every industry.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">UAE Document Retention Laws Explained</h3>
              <p className="text-gray-700 mb-4">
                The UAE Commercial Companies Law (Federal Law No. 2 of 2015) requires companies to retain financial records, shareholder registers, and board minutes for a minimum of 5 years. The UAE Federal Tax Authority requires VAT records to be retained for 5 years (and 15 years for real estate transactions). Employment contracts and related HR documents must be retained for at least 2 years after an employee leaves, under the UAE Labour Law.
              </p>
              <p className="text-gray-700">
                Free zone authorities (DIFC, ADGM, JAFZA, Dubai South, DMCC, etc.) each have their own additional record-keeping requirements. Healthcare providers must retain patient records for 10 years under DHA regulations. Legal firms must retain client files for varying periods depending on the matter type. SafeStorage&apos;s document management team can advise on the applicable retention periods for your industry and document categories.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">How Businesses Use Archival Storage</h3>
              <p className="text-gray-700 mb-4">
                The typical document archival workflow for a Dubai business begins with identifying documents that are no longer actively needed but must be retained for compliance. These documents are boxed, labelled, and inventoried, then collected by our team or delivered to our facility. Each box is assigned a unique barcode, photographed, and logged in our digital document management system.
              </p>
              <p className="text-gray-700">
                When a document is needed — for an audit, legal dispute, regulatory inspection, or internal query — the business requests retrieval via our portal, phone, or WhatsApp. We locate the specific box or file, scan or physically retrieve it, and deliver it to the requesting office within 24 hours. When the retrieval is no longer needed, the document is returned to archival storage. This process typically costs far less than maintaining equivalent filing space in a central Dubai office location.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Document Retrieval Process — Step by Step</h3>
            <div className="grid md:grid-cols-4 gap-4 text-gray-700">
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-[#0A2463] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                <p className="font-semibold mb-2">Request</p>
                <p className="text-sm">Submit retrieval request via portal, phone, or WhatsApp with document reference number or description</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-[#0A2463] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                <p className="font-semibold mb-2">Locate</p>
                <p className="text-sm">Our team locates the specific box or file using our barcode tracking system — typically within 30 minutes</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-[#0A2463] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                <p className="font-semibold mb-2">Deliver or Scan</p>
                <p className="text-sm">Physical delivery to your office within 24 hours, or digital scan delivery same day for urgent requests</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-[#0A2463] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                <p className="font-semibold mb-2">Return</p>
                <p className="text-sm">Document returned to archival storage after use, or flagged for destruction if retention period has expired</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Frequently Asked Questions — Document &amp; Records Archival Storage Dubai</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">1. What types of documents can be stored in archival storage?</h3>
              <p className="text-gray-700">SafeStorage accepts all categories of business documents including financial records, contracts and agreements, HR and employment files, legal case files, corporate governance documents (minutes, resolutions, shareholder registers), tax records, audit files, medical records, insurance documents, and general correspondence. Documents must be properly boxed and labelled — our team can assist with the packing and inventory process if needed.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">2. How long must businesses in the UAE retain financial records?</h3>
              <p className="text-gray-700">Under UAE Commercial Companies Law, financial records including accounts, annual financial statements, and supporting documentation must be retained for a minimum of 5 years. VAT records must be retained for 5 years under Federal Tax Authority requirements (15 years for real estate-related records). Businesses subject to additional regulatory oversight — such as those licensed by the DFSA in DIFC or the FSRA in ADGM — may face longer retention requirements. Always consult your legal or compliance team for guidance specific to your business structure and activities.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">3. How secure is off-site document storage at SafeStorage?</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">4. Can documents be retrieved urgently if needed for a regulatory inspection?</h3>
              <p className="text-gray-700">Yes. We understand that regulatory inspections and legal proceedings may require same-day document retrieval. For urgent retrieval requests, our team prioritises location and either dispatches the physical documents via courier or provides digital scans within a few hours. We recommend maintaining a complete and accurate inventory of all archived boxes to ensure specific documents can be located quickly. Businesses facing routine regulatory inspections often brief us in advance to have relevant files pre-identified.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">5. What is the process for destroying documents when their retention period expires?</h3>
              <p className="text-gray-700">When a document reaches the end of its legally required retention period, it should be destroyed in a manner that prevents the information from being recovered or misused. SafeStorage offers certified document destruction using industrial cross-cut shredders that reduce documents to 2mm x 15mm particles. Following destruction, we issue a certificate of destruction for your compliance records. Destruction is scheduled based on the retention schedule you provide and can be carried out at our facility or your office premises.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">6. How are archived boxes catalogued and indexed?</h3>
              <p className="text-gray-700">Every box deposited at SafeStorage is assigned a unique barcode and logged in our digital document management system. The entry record includes the date of deposit, contents description (as provided by the client), box dimensions, assigned retention period, and physical location within our facility. When you need to locate a specific document, you can search our online portal by box reference, date range, document category, or client-defined tags. Our team can also add more granular file-level indexing for clients with high retrieval frequency requirements.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">7. Do you provide document storage for medical clinics and hospitals in Dubai?</h3>
              <p className="text-gray-700">Yes. Medical records storage is one of our specialist services. Patient records, lab reports, imaging records, clinical notes, and consent forms must be retained for 10 years under Dubai Health Authority regulations (longer for paediatric records). We provide fireproof, secure storage that protects paper records from degradation. Our access control and confidentiality protocols meet healthcare sector requirements. We sign healthcare-specific confidentiality agreements and can work with your compliance team to design a retention and retrieval workflow.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">8. How much does document archival storage cost in Dubai?</h3>
              <p className="text-gray-700">Document archival storage at SafeStorage starts from 12.60 AED / sqft (VAT-inclusive), whether you are storing a small collection or a large archive of boxes. Retrieval fees apply for physical delivery of boxes to your office, while digital scanning services are charged per page for urgent scan requests. There are no setup fees or minimum contract periods. Contact us at +971505773388 for a quote based on your document volume.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">9. Can law firms store confidential client files with SafeStorage?</h3>
              <p className="text-gray-700">Yes. We work with several law firms and legal consultancies in Dubai who use our facility for matter file archiving. Legal professional privilege and client confidentiality are paramount in law firm document storage. We sign comprehensive confidentiality agreements with all legal sector clients, restrict access to authorised firm personnel only, and maintain chain-of-custody records for all retrievals and returns. Our facility meets the physical security standards required for legal document storage under UAE Bar Association guidelines.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">10. What happens to my archived documents if SafeStorage ceases operations?</h3>
              <p className="text-gray-700">This is a question we encourage all clients to ask of any archival storage provider. SafeStorage maintains a written continuity plan addressing this scenario. In the event of any operational disruption, all clients would be notified with a minimum 60-day notice period to arrange collection of their documents. Your documents are your property at all times — they are held in custody on your behalf, not transferred to SafeStorage. Your storage agreement includes specific provisions about document ownership and return procedures.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">11. Does SafeStorage offer document scanning and digitisation services?</h3>
              <p className="text-gray-700">Yes. For businesses looking to reduce or eliminate their physical document archive entirely, we offer document scanning and digitisation services. Your paper files are scanned at high resolution, converted to searchable PDF format, named and indexed according to your taxonomy, and delivered to you via secure file transfer or stored in a cloud system of your choice. Physical originals can then be retained in reduced archival storage or destroyed securely. Digitisation is particularly valuable for older records that are rarely accessed but still legally required to be retained.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">12. How is document storage priced differently from box storage versus shelf filing?</h3>
              <p className="text-gray-700">Standard archival storage uses uniform archive boxes (typically A4 size, approximately 60 litres) stored on racking systems. This is the most cost-effective format for large volumes of paper records. For oversized documents, drawings, blueprints, or records that cannot be boxed (like bound ledgers or large format files), shelf or flat-file storage is used at a different pricing structure. We can accommodate both formats and will recommend the most cost-effective approach based on your document types during your initial consultation.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">13. Can we store digital backups (hard drives, tapes) alongside paper records?</h3>
              <p className="text-gray-700">Yes. SafeStorage stores physical digital media including LTO backup tapes, hard disk drives, USB drives, and legacy media formats (DAT, DLT). Digital media should be protected from magnetic fields, and our secure, shielded storage environment is appropriate for long-term media preservation. For disaster recovery purposes, many businesses store physical media backups off-site at SafeStorage as part of their business continuity planning. We maintain a separate inventory and chain-of-custody record for all media items.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">14. How do I transfer my existing document archive to SafeStorage?</h3>
              <p className="text-gray-700">Transferring your existing document archive to SafeStorage is straightforward. For small volumes (fewer than 50 boxes), you can deliver them to our facility. For larger volumes, our team will visit your office on a scheduled date with the appropriate packaging materials, help box and label documents according to your inventory system, load them onto our vehicle, and transport them to our facility. The entire intake process — including barcoding, photography, and system entry — is completed within 24–48 hours of delivery.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">15. Are there items that cannot be stored in document archival storage?</h3>
              <p className="text-gray-700">Document archival storage is specifically designed for paper records, files, folders, and physical media. Items that cannot be stored in the document archival section include physical exhibits or evidence items, items containing hazardous materials, perishable goods, and items requiring special environmental conditions. If you have non-document items to store alongside your records (such as original artwork, product samples, or specialty items), we can accommodate these in appropriate standard storage units and manage them under the same account.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
