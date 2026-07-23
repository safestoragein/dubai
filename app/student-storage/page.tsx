import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import { GraduationCap, CheckCircle2, Star, Phone, ArrowRight, Package, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Storage Dubai — Budget Plans",
  description: "Cheap, safe student storage in Dubai. Store your belongings between semesters, summer holidays or graduation. From 12.60 AED / sqft. Door-to-Door pickup near major universities. Call +971505773388.",
  keywords: "student storage dubai, university storage dubai, semester storage dubai, summer student storage dubai, student accommodation storage, UAEU student storage, AUD student storage",
  openGraph: {
    title: "Student Storage Dubai — Affordable Between-Semester Storage | SafeStorage",
    description: "Student storage in Dubai from 12.60 AED / sqft. Store between semesters, summer breaks or after graduation. Door-to-Door pickup near major universities.",
    url: "https://safestorage.ae/student-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/student-storage" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Student Storage Dubai",
    description: "Affordable student storage in Dubai for semester breaks, summer holidays and graduation. Small units from 12.60 AED / sqft with door-to-door pickup near universities.",
    provider: { "@id": "https://safestorage.ae/#organization" },
    url: "https://safestorage.ae/student-storage",
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Student Storage",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/student-storage#webpage",
    name: "Student Storage Dubai — Affordable Between-Semester Storage",
    url: "https://safestorage.ae/student-storage",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      { "@type": "ListItem", position: 2, name: "Student Storage Dubai", item: "https://safestorage.ae/student-storage" },
    ],
  },
]

export default function StudentStoragePage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-20">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" /> Student Storage Specialists
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Storage Dubai — Affordable Storage Between Semesters</h1>
              <p className="text-xl text-white/85 mb-8">Going home for summer or between semesters in Dubai? Don't haul everything back and forth or pay for an empty room. SafeStorage Dubai offers affordable student storage from 12.60 AED / sqft — door-to-door pickup near your university, flexible contracts, and easy access when you return.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://safestorage.ae/get-quote">
                  <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">Get a Student Quote</Button>
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
                { stat: "1 Month", label: "Minimum contract" },
                { stat: "Door-to-Door", label: "Pickup near universities" },
                { stat: "7 Days", label: "Access per week" },
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
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">When Students Need Storage in Dubai</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Summer Holiday Break", desc: "Most Dubai universities have 3-month summer breaks (May-August). Rather than paying for accommodation through summer or hauling everything home, store across the break from 12.60 AED / sqft.", icon: "☀️" },
                { title: "Between Academic Years", desc: "Lease ended, next-year housing not confirmed? Bridge the gap with 4-8 weeks of storage. Don't rush into a bad housing decision — store comfortably while you search.", icon: "📅" },
                { title: "Studying Abroad Semester", desc: "Heading abroad for an exchange semester? Store your Dubai room contents safely. Return to the same items — avoid the cost and hassle of replacing everything on return.", icon: "✈️" },
                { title: "Graduation Transition", desc: "Graduated but not leaving Dubai immediately? Job search, visa transition, staying with friends? Don't take all your belongings between temporary accommodation. Store until settled.", icon: "🎓" },
                { title: "Downsizing Room", desc: "Sharing from studio to shared villa or moving to smaller room? Can't fit everything? Store the overflow without disposing of items you'll want later.", icon: "📦" },
                { title: "Internship in Another Emirate", desc: "Internship in Abu Dhabi or Sharjah while enrolled in Dubai? Don't keep paying Dubai accommodation. Store everything and relocate cost-effectively.", icon: "💼" },
              ].map((s) => (
                <div key={s.title} className="bg-slate-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-dubai-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-4">Student Storage Pricing</h2>
            <p className="text-center text-gray-600 mb-10">Transparent, all-inclusive monthly pricing. No hidden fees, no admin charges, no long-term commitment.</p>
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-2xl p-10 border-2 border-dubai-gold shadow-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-dubai-navy mb-3">Pricing starts from 12.60 AED / sqft</h3>
                <p className="text-gray-600">VAT-inclusive · all unit sizes · door-to-door pickup &amp; delivery included</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">* Not sure what size you need? Call us and we'll advise based on your inventory.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">What Students Typically Store</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-dubai-navy mb-4">Common Student Items</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Laptop and chargers", "Books and textbooks", "Clothes and shoes", "Bedding and pillows", "Small TV or monitor", "Kitchen appliances", "Mini fridge", "Study desk and chair", "Wardrobe", "Sports equipment", "Musical instruments", "Art supplies and portfolios", "Bike or scooter", "Suitcases and bags"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-dubai-gold flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-dubai-navy/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-4">Packing Tips for Students</h3>
                <div className="space-y-4">
                  {[
                    { tip: "Label boxes by category", desc: "Use clear labels: BOOKS, CLOTHES, KITCHEN, ELECTRONICS. When you return, you can pick exactly what you need without unpacking everything." },
                    { tip: "Take photos before packing", desc: "Quick photos of electronics with serial numbers supports insurance claims and helps you confirm everything's accounted for on return." },
                    { tip: "Use vacuum bags for bedding", desc: "Duvets and pillows take up huge amounts of space. Vacuum bags compress them to 1/4 the size — worth the AED 20 investment from any supermarket." },
                    { tip: "Put fragile items in clothes", desc: "Use clothes and soft items as padding around breakable items. Reduces the number of boxes needed and protects fragile contents." },
                  ].map((t) => (
                    <div key={t.tip} className="flex gap-3">
                      <Package className="w-5 h-5 text-dubai-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-dubai-navy text-sm">{t.tip}</div>
                        <div className="text-gray-600 text-sm">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-12">Student Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Yasmin K.", location: "DIFC", university: "American University in Dubai", text: "Going back to Lebanon for 3 months summer. My Dubai room was AED 2,500/mo — I wasn't going to keep paying it empty. SafeStorage stored all my stuff from 12.60 AED / sqft. Saved over AED 7,000 vs keeping the room. Came back and everything was exactly as I left it.", rating: 5 },
                { name: "Siddharth P.", location: "Dubai Silicon Oasis", university: "University of Wollongong Dubai", text: "Exchange semester in Australia — stored all my Dubai apartment contents with SafeStorage. The pickup was super easy, they came to my building. When I came back 5 months later, collected everything in one go. No damage, no missing items. Exactly what I needed.", rating: 5 },
                { name: "Emma L.", location: "JVC", university: "Middlesex University Dubai", text: "Graduated in May and had a month before my visa expired. Stored everything with SafeStorage — they picked up from student residence. Had all my belongings safely stored while I sorted out my employment visa. Way less stressful than trying to move everything at once.", rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex mb-3">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-dubai-gold text-dubai-gold" />)}</div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-dubai-navy">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location} · {t.university}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Student Storage FAQs</h2>
            <div className="space-y-4">
              {[
                { q: "Is there a student discount available?", a: "We offer competitive pricing for students and can provide flexible payment options. Call us at +971505773388 and mention you're a student — we'll make sure you get the best available rate for your storage period. Short-term packages for semester breaks are available at reduced monthly rates." },
                { q: "How do I book pickup from my university accommodation?", a: "Call or WhatsApp us with your address and an approximate list of what you're storing. We'll confirm a date and time, provide an estimate, and send a team to collect. We cover all Dubai areas including Dubai Silicon Oasis, DIFC, Al Barsha, JVC, Jumeirah and Sports City where most Dubai universities are located." },
                { q: "Can my parents in another country manage my storage if I need items shipped?", a: "Yes. You can authorise another person to access or make decisions about your storage remotely — just complete our authorisation form when you sign up. We can also coordinate with international shipping companies to send specific items from your unit to your location abroad." },
                { q: "What's the minimum storage period?", a: "1 month is our minimum. For students, we offer semester-based packages — typically 3 months (summer break) or 5 months (semester abroad). These packages are priced slightly lower than month-to-month rates. Contact us to discuss the package that matches your academic calendar." },
                { q: "Can I access my items during the storage period?", a: "Yes — access is included. Visit during business hours (8 AM–8 PM, 7 days a week) to add items, collect specific things, or reorganise your unit. There's no charge for access visits. Just come during business hours and present your ID and booking reference." },
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

        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Student Storage — Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How much does student storage cost in Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Student storage at SafeStorage Dubai starts from 12.60 AED / sqft (VAT-inclusive). A locker or mini unit holds 10–15 boxes, suitcases, bags, and bedding. A small unit accommodates a full student room including a single bed, desk, chair, wardrobe, and 20–30 boxes of personal belongings — the most popular option for students storing between semesters. For students sharing a larger apartment or storing a bicycle and additional equipment, a medium unit provides more space. The price includes 24/7 security and door-to-door pickup from your accommodation. There are no hidden charges and no long-term contracts required.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What is the minimum storage period for students?</h3>
                <p className="text-gray-700 leading-relaxed">The minimum storage period at SafeStorage is one month. For students, this means you can store for exactly the duration of your break — whether that is 3 months for a summer holiday, 5 months for a semester abroad, or just 6 weeks between the end of one tenancy and the start of the next academic year. We also offer semester-based packages specifically priced for 3-month and 5-month periods, which provide slightly better rates than pure month-to-month billing. Contact us when booking to confirm which package aligns best with your academic calendar and departure/return dates.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Which universities near SafeStorage facilities does the service cover?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage Dubai provides door-to-door pickup from student accommodation near all major Dubai universities and higher education institutions. This includes American University in Dubai (AUD) in Media City, University of Wollongong Dubai and Heriot-Watt University Dubai in Dubai Knowledge Park, Middlesex University Dubai in Knowledge Village, Zayed University in Academic City, Canadian University Dubai in Bur Dubai, British University in Dubai in Oud Metha, SP Jain School of Global Management, BITS Pilani Dubai Campus, and Manipal Academy of Higher Education Dubai. We cover all Dubai areas including Dubai Silicon Oasis, Academic City, Knowledge Park, DIFC, JVC, Al Barsha, and all surrounding student residential areas.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store my belongings during the summer holiday period?</h3>
                <p className="text-gray-700 leading-relaxed">Summer holiday storage is the most popular student storage use case at SafeStorage Dubai. Dubai&apos;s university summer break typically runs from May through August — three months during which most students return to their home countries or travel. Rather than paying AED 2,000–4,000 per month to maintain accommodation through the summer, or hauling everything to an airport and shipping it home, storing in Dubai from 12.60 AED / sqft is dramatically more cost-effective. Most students save AED 5,000–10,000 or more by storing instead of keeping their room. We pick up before you depart and deliver back to your new accommodation when you return in September.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How is pickup arranged near university accommodation?</h3>
                <p className="text-gray-700 leading-relaxed">Arranging pickup from university accommodation is straightforward. Contact us via WhatsApp or phone with your address, an approximate list of items (or a rough room description), and your preferred pickup date. We confirm the date and time, provide a price estimate, and send our collection team to your building. Our team brings all necessary protective materials and handles all loading — you do not need a vehicle or any equipment. If your building requires prior notice or registration of contractors, let us know in advance and we will handle the coordination. We are familiar with most student accommodation buildings in Dubai and can advise if any specific access requirements apply.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What items can students store at SafeStorage?</h3>
                <p className="text-gray-700 leading-relaxed">Students typically store their complete room contents, which SafeStorage handles in full. This includes single or double beds and mattresses, study desks and chairs, wardrobes, shelving units, small kitchen appliances (mini fridge, microwave, kettle), TVs and monitors, laptops and electronics with their accessories, textbooks and notebooks, clothing and seasonal wear, bedding and pillows, suitcases and bags, sports equipment including bicycles and scooters, musical instruments, art supplies, and personal items. The only items not accepted are hazardous materials, perishables, live animals, and items prohibited under UAE law. A typical student room fits comfortably in our small unit, with pricing from 12.60 AED / sqft.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How quickly can I retrieve my items before the new term starts?</h3>
                <p className="text-gray-700 leading-relaxed">Retrieval of your stored items can be arranged with 24–48 hours&apos; notice for standard deliveries. For urgent same-day delivery requests made before 12 PM, we do our best to accommodate. We strongly recommend booking your return delivery at least one week before your new term starts or your new accommodation is ready, as the start-of-term period (late August to September) is our busiest time for student storage deliveries. Giving us early notice ensures you get your preferred delivery date and time slot. We deliver to all Dubai addresses and can coordinate with building management where required for delivery access.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Is there a student discount available?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage offers student-specific pricing and semester packages. When you contact us, mention that you are a student and your university, and we will ensure you receive our best available rate for your storage period. Our semester-based packages (3-month summer or 5-month semester abroad) are priced at better-than-monthly rates to reflect the predictable storage duration typical of student use. We also accommodate group storage arrangements where multiple students share a unit with split billing, which can reduce the individual cost further. Call +971505773388 or WhatsApp us to discuss current student rates.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I share a storage unit with another student?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. Shared storage units for 2–4 students are a popular and cost-effective option at SafeStorage. Each student&apos;s items are labelled separately at intake, giving each individual a clear record of their belongings. Billing can be split, with each student receiving their own invoice for their share. Access authorisation is set up for all participating students. When it is time to retrieve items, each student can request their own belongings independently — we locate and prepare the specific labelled items for each individual, which means students returning at different times do not need to be present at the same time. Shared units reduce per-student cost by 40–50% compared to individual units.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How safe and secure is student storage?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage facilities provide the same level of security for student storage as for all other customer types. This includes 24/7 CCTV surveillance of all areas, access-controlled entry with identity verification, individually padlocked storage units, on-site staff during business hours, and fire suppression systems. Your laptop, electronics, and other valuable academic equipment are far safer in a properly secured storage facility than they are in an empty university accommodation or left with friends. All stored items are covered by basic insurance, and our clean, secure indoor units keep electronics, books, and soft items dust-protected throughout the storage period.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I store my bicycle in student storage?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. Bicycles are stored regularly by students at SafeStorage Dubai. We recommend a basic clean before storage and slightly deflating the tyres to prevent stress on the tubes during long-term storage. Bicycles are stored securely in your unit and do not require special handling beyond standard care. For students with expensive road or mountain bikes, our clean, secure indoor units provide better protection than leaving the bicycle outdoors or in an exposed space during Dubai&apos;s summer, keeping it dust-protected and away from the elements over a 3-month period. If you are storing a bicycle alongside other student belongings, ensure your unit size accounts for the bicycle&apos;s floor footprint.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">What happens if I extend my study period or stay abroad longer?</h3>
                <p className="text-gray-700 leading-relaxed">If your stay abroad extends beyond your original storage booking — whether due to an extended exchange semester, a summer internship abroad, or a change in academic plans — your storage simply continues on a month-to-month basis with no penalty. Contact us by WhatsApp or email to inform us of the extension, and billing continues automatically. There is no upper time limit on storage duration, and many students end up storing for an additional semester or year beyond their original plan. Extending storage is a much simpler decision than trying to arrange early return shipping or finding someone in Dubai to manage your belongings on short notice.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">How do I book student storage at SafeStorage Dubai?</h3>
                <p className="text-gray-700 leading-relaxed">Booking student storage is quick and can be done entirely via phone or WhatsApp. Contact us at +971505773388 with your name, accommodation address, an approximate list of items, and your preferred pickup date. We provide a price estimate within a few hours and confirm your booking. For group bookings with other students, it is easiest for one person to coordinate the booking and then provide us with the other students&apos; details. We recommend booking at least one week before your departure date to ensure pickup scheduling. During peak end-of-semester periods (December–January and May–June), booking 2 weeks ahead is advisable due to high demand.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Are packing boxes and materials provided for student storage?</h3>
                <p className="text-gray-700 leading-relaxed">SafeStorage can supply packing boxes and materials at cost price — just request them when booking your storage. Standard boxes, heavy-duty boxes for books and electronics, wardrobe boxes with hanging rails for clothing, bubble wrap, packing tape, and foam wrap are all available. Alternatively, supermarkets, IKEA, and Carrefour in Dubai sell affordable packing boxes. Our team brings protective materials (furniture covers, foam pads, stretch wrap) for your furniture items on collection day — you do not need to provide these. If you have fragile or high-value items requiring specialised packing, let us know in advance so we can bring appropriate materials.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-dubai-navy mb-2">Can international students from outside the UAE use the service?</h3>
                <p className="text-gray-700 leading-relaxed">Yes. SafeStorage serves students from all nationalities studying in Dubai. International students do not need a UAE residency visa to store with us — a valid student ID, passport, and UAE contact number are sufficient. Payments can be made by international credit or debit cards, making it easy for students whose bank accounts are in their home country. For students whose storage period extends beyond their UAE student visa, we can continue the storage relationship with remote management from abroad, including payments by international card and retrieval managed by an authorised contact in Dubai. Our service is specifically designed to accommodate the international nature of Dubai&apos;s student population.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy mb-6">About Student Storage at SafeStorage Dubai</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Dubai has grown into a significant higher education hub in the Middle East, home to over 30 international universities and higher education institutions serving tens of thousands of students from more than 150 countries. The academic calendar creates predictable storage demand at the end of each semester — particularly the summer break from May to September, when most students return to their home countries and face the practical problem of what to do with their Dubai belongings. SafeStorage has developed a specific student storage service that addresses this need with affordable monthly pricing, door-to-door pickup from university accommodation areas, and flexible contracts designed around semester timing rather than standard commercial storage contracts.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The financial case for student storage is compelling. A student paying AED 2,500 per month for accommodation faces a choice between maintaining their lease through a 3-month summer (costing AED 7,500) or storing their belongings and sublet or vacating. With SafeStorage, the same student can store a full room&apos;s contents from 12.60 AED / sqft, saving AED 6,000–7,000 over the summer period. For students completing a semester abroad or spending more than one month away from Dubai, the cost saving is substantial enough to fund a significant portion of the travel or living costs abroad. Most students who use storage for the first summer continue the practice every year of their studies.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Shared student storage offers even better value. Two students sharing a medium unit can store both rooms&apos; worth of belongings from 12.60 AED / sqft, split between them. With individual item labelling and the option for independent retrieval, each student maintains full control of their belongings without being dependent on their storage partner&apos;s return timeline. SafeStorage manages the logistics of split access, and billing can be divided between the students independently. Roommates, friends in the same year group, or even students in the same building who organise collectively can all benefit from this arrangement.</p>
            <p className="text-gray-700 leading-relaxed">For students approaching graduation, storage provides a particularly valuable transitional service. Graduation in Dubai often leaves students in a period of uncertainty — waiting for employment visa approvals, job offers, or visa changes. Having belongings safely stored at a low monthly cost removes the urgency of deciding immediately whether to ship, sell, or carry belongings home. Many graduates keep items in storage for 2–4 months post-graduation while their professional situation clarifies, then retrieve everything to a new Dubai apartment, arrange international shipping for items they will need abroad, or sell items they no longer need. This flexibility is impossible if you are hauling everything home the day after graduation or paying for empty accommodation to store things on-site.</p>
          </div>
        </section>

        <section className="py-16 bg-dubai-gold text-white text-center">
          <div className="container px-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Store Smart This Semester Break</h2>
            <p className="text-xl text-white/90 mb-8">Don't haul everything home or pay for an empty room. Get a free student storage quote — we'll pick up from your accommodation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://safestorage.ae/get-quote">
                <Button className="bg-white text-dubai-gold hover:bg-gray-100 px-8 py-4 text-lg font-semibold">Get a Student Quote</Button>
              </Link>
              <a href="tel:+971505773388">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dubai-gold px-8 py-4 text-lg">
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
