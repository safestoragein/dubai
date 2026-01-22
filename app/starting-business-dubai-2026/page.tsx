import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building2, FileText, DollarSign, Briefcase, MapPin, CreditCard, TrendingUp, CheckCircle2, XCircle, Phone, ArrowRight, Package, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Starting a Business in Dubai 2026: Complete Entrepreneur Guide | SafeStorage UAE",
  description: "Complete guide to starting a business in Dubai in 2026. Learn about licenses, free zones, costs, visas, banking, and setup process. Includes storage solutions for your business needs.",
  keywords: "starting business dubai, dubai business setup, free zone dubai, mainland company dubai, business license dubai, entrepreneur dubai, company formation uae, dubai startup guide",
  openGraph: {
    title: "Starting a Business in Dubai 2026: Complete Entrepreneur Guide",
    description: "Everything you need to know about starting a business in Dubai - licenses, costs, free zones, visas, and practical tips.",
    images: ["/images/warehouse-exterior.jpg"],
  },
}

export default function StartingBusinessDubai2026() {
  const whyDubai = [
    {
      icon: DollarSign,
      title: "0% Tax on Income",
      description: "No personal income tax. Corporate tax only 9% on profits above AED 375,000",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Gateway between East and West. Access to 2 billion consumers within 4-hour flight",
    },
    {
      icon: TrendingUp,
      title: "Growing Economy",
      description: "Diversified economy beyond oil. Strong in tourism, trade, finance, and tech",
    },
    {
      icon: Users,
      title: "100% Foreign Ownership",
      description: "Own 100% of your business in free zones and most mainland activities",
    },
  ]

  const businessTypes = [
    {
      type: "Free Zone Company",
      ownership: "100% foreign ownership",
      activities: "Limited to specific activities allowed by free zone",
      office: "Must have office/flexi-desk in the free zone",
      trading: "Can trade worldwide, limited UAE mainland trading",
      cost: "AED 15,000 - 50,000/year",
      visa: "Visa quota based on office size",
      bestFor: "E-commerce, consulting, tech startups, import/export",
      icon: Building2,
    },
    {
      type: "Mainland Company",
      ownership: "100% foreign ownership (most activities)",
      activities: "Any business activity allowed",
      office: "Must have physical office or tenancy contract",
      trading: "Full access to UAE market and worldwide",
      cost: "AED 25,000 - 60,000/year",
      visa: "Unlimited visas (based on office size)",
      bestFor: "Retail, restaurants, construction, local services",
      icon: Briefcase,
    },
    {
      type: "Freelance Permit",
      ownership: "100% ownership",
      activities: "Professional services only",
      office: "No physical office required",
      trading: "Provide services only, no trading",
      cost: "AED 7,500 - 15,000/year",
      visa: "1 visa (yourself only)",
      bestFor: "Consultants, designers, photographers, writers",
      icon: FileText,
    },
  ]

  const setupSteps = [
    {
      step: 1,
      title: "Choose Your Business Activity",
      description: "Decide what business you'll do. This determines your license type (trading, professional, industrial).",
      timeline: "1-2 days",
      tips: [
        "E-commerce needs trading license",
        "Consulting needs professional license",
        "Manufacturing needs industrial license",
        "You can have multiple activities on one license",
      ],
    },
    {
      step: 2,
      title: "Select Free Zone or Mainland",
      description: "Free zones are faster and easier. Mainland gives you full UAE market access.",
      timeline: "1-3 days",
      tips: [
        "Free zones available across Dubai with different specializations",
        "Mainland: Need local service agent (no ownership share required)",
        "Free zones great for online businesses and e-commerce",
        "Mainland better for retail shops or local customer services",
      ],
    },
    {
      step: 3,
      title: "Reserve Your Trade Name",
      description: "Choose and register your company name. Must be unique and follow UAE naming rules.",
      timeline: "2-3 days",
      tips: [
        "No offensive or religious words",
        "Can't use 'Dubai' or 'UAE' without approval",
        "Check name availability online first",
        "Have 2-3 backup names ready",
      ],
    },
    {
      step: 4,
      title: "Get Initial Approval",
      description: "Submit documents and get initial approval from Dubai government or free zone authority.",
      timeline: "3-7 days",
      tips: [
        "Passport copies of all shareholders",
        "Proof of address (utility bill)",
        "Business plan (for some activities)",
        "Use a registered PRO service to speed this up",
      ],
    },
    {
      step: 5,
      title: "Find Office Space or Use Flexi-Desk",
      description: "You need a registered business address. Can be physical office, flexi-desk, or virtual office.",
      timeline: "1-7 days",
      tips: [
        "Flexi-desk: AED 5,000 - 15,000/year (cheapest)",
        "Virtual office: AED 8,000 - 20,000/year",
        "Physical office: AED 30,000+ /year",
        "Official tenancy contract required for mainland companies",
      ],
      storageConnection: true,
    },
    {
      step: 6,
      title: "Apply for Business License",
      description: "Submit all documents, pay fees, and get your trade license issued.",
      timeline: "5-10 days",
      tips: [
        "License valid for 1 year, renewable",
        "Fees: AED 10,000 - 40,000 depending on activity",
        "Free zone licenses faster (2-5 days)",
        "Mainland takes 7-14 days",
      ],
      storageConnection: true,
    },
    {
      step: 7,
      title: "Get Visas for Yourself and Staff",
      description: "Apply for investor/employee visas. Each license has visa quota based on office size.",
      timeline: "7-14 days",
      tips: [
        "Investor visa: AED 5,000 - 8,000 per person",
        "Employee visa: AED 4,000 - 6,000 per person",
        "Medical test and Emirates ID required",
        "Golden visa available for investors (AED 600k+)",
      ],
    },
    {
      step: 8,
      title: "Open Business Bank Account",
      description: "Open corporate bank account with UAE bank. Required for doing business.",
      timeline: "7-21 days",
      tips: [
        "Need: Trade license, passport, proof of address, business plan",
        "Initial deposit: AED 10,000 - 50,000 minimum",
        "Multiple UAE banks available with business banking services",
        "Some banks require in-person visit, others offer online setup",
      ],
    },
  ]

  const costs = [
    {
      category: "License & Registration",
      items: [
        { item: "Free Zone License (basic package)", amount: "15,000 - 30,000/year" },
        { item: "Mainland License", amount: "25,000 - 50,000/year" },
        { item: "Freelance Permit", amount: "7,500 - 15,000/year" },
        { item: "Trade name reservation", amount: "600 - 1,200" },
      ],
    },
    {
      category: "Office & Address",
      items: [
        { item: "Flexi-desk (shared workspace)", amount: "5,000 - 15,000/year" },
        { item: "Virtual office", amount: "8,000 - 20,000/year" },
        { item: "Small physical office (200 sqft)", amount: "30,000 - 60,000/year" },
        { item: "Tenancy registration fee", amount: "220" },
      ],
    },
    {
      category: "Visas",
      items: [
        { item: "Investor visa (owner)", amount: "5,000 - 8,000" },
        { item: "Employee visa", amount: "4,000 - 6,000 per person" },
        { item: "Medical test", amount: "300 - 500 per person" },
        { item: "Emirates ID", amount: "370 per person" },
      ],
    },
    {
      category: "Banking & PRO",
      items: [
        { item: "Bank account opening (PRO fee)", amount: "2,000 - 5,000" },
        { item: "PRO services (annual)", amount: "6,000 - 15,000" },
        { item: "Initial bank deposit", amount: "10,000 - 50,000" },
      ],
    },
  ]

  const businessStorageSolutions = [
    {
      type: "E-Commerce Business",
      icon: Package,
      needs: "Product inventory, packaging supplies, seasonal stock",
      solution: "Climate-controlled storage with easy access for order fulfillment",
      savings: "Save AED 15,000-30,000/year vs full warehouse rental",
      image: "/images/warehouse-boxes.jpg",
    },
    {
      type: "Trading Company",
      icon: Briefcase,
      needs: "Import/export documents, contracts, customs papers",
      solution: "Secure document archival with 5-year record keeping",
      savings: "Professional document management from AED 199/month",
      image: "/images/warehouse-interior.jpg",
    },
    {
      type: "Consulting Firm",
      icon: FileText,
      needs: "Client files, legal documents, office equipment",
      solution: "Flexible storage lets you use flexi-desk instead of expensive office",
      savings: "Save AED 20,000-40,000/year on office rent",
      image: "/images/warehouse-exterior.jpg",
    },
    {
      type: "Retail Business",
      icon: Shield,
      needs: "Extra inventory, seasonal products, display materials",
      solution: "24/7 accessible storage for restocking whenever needed",
      savings: "Pay only for space you use, scale up or down anytime",
      image: "/images/warehouse-interior.jpg",
    },
  ]

  const commonMistakes = [
    {
      icon: XCircle,
      mistake: "Choosing Wrong License Type",
      fix: "Research your activity carefully. E-commerce needs trading license, not professional license. Getting it wrong means starting over.",
    },
    {
      icon: XCircle,
      mistake: "Not Planning for Visa Delays",
      fix: "Bank account opening can take 2-4 weeks. Budget extra time and money for unexpected delays.",
    },
    {
      icon: XCircle,
      mistake: "Underestimating Costs",
      fix: "First year costs AED 50,000 - 100,000 minimum. Include license, visa, office, PRO, bank, storage, and living expenses.",
    },
    {
      icon: XCircle,
      mistake: "No Business Plan",
      fix: "Banks and authorities may ask for business plan. Have a simple 2-3 page plan ready with revenue projections.",
    },
    {
      icon: XCircle,
      mistake: "Ignoring Document Storage",
      fix: "Trade licenses, contracts, invoices, customs documents must be kept for 5 years. Use secure storage from day 1.",
    },
  ]

  const warehouseImages = [
    "/images/warehouse-interior.jpg",
    "/images/warehouse-exterior.jpg",
    "/images/warehouse-boxes.jpg",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2463] via-[#3E92CC] to-[#0A2463] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Building2 className="mx-auto mb-6 h-20 w-20" />
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Starting a Business in Dubai 2026
            </h1>
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">
              Complete step-by-step guide for entrepreneurs. Learn about licenses, free zones, costs, visas, and everything you need to start your business in Dubai.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +971 800 72337
                </a>
              </Button>
              <Button size="lg" asChild className="bg-white text-[#0A2463] hover:bg-gray-100">
                <Link href="/contact">
                  Get Business Storage Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dubai Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Why Start a Business in Dubai?
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Dubai offers unique advantages for entrepreneurs worldwide
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {whyDubai.map((benefit, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <benefit.icon className="mb-4 h-12 w-12 text-[#D8315B]" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Storage Visual */}
          <div className="mt-16 mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/warehouse-exterior.jpg"
                  alt="SafeStorage facility exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Secure Facilities</h4>
                  <p className="text-sm">24/7 monitored storage</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/warehouse-interior.jpg"
                  alt="SafeStorage facility interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Climate Controlled</h4>
                  <p className="text-sm">Protect your inventory</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/warehouse-boxes.jpg"
                  alt="Business storage boxes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Organized Storage</h4>
                  <p className="text-sm">Easy access anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Comparison */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Choose Your Business Structure
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Compare Free Zone, Mainland, and Freelance options
          </p>
          <div className="grid gap-8 lg:grid-cols-3">
            {businessTypes.map((type, index) => (
              <div key={index} className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:border-[#D8315B] transition-all">
                <type.icon className="mb-4 h-12 w-12 text-[#D8315B]" />
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{type.type}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Ownership:</span>
                    <p className="text-gray-600">{type.ownership}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Activities:</span>
                    <p className="text-gray-600">{type.activities}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Office:</span>
                    <p className="text-gray-600">{type.office}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Trading:</span>
                    <p className="text-gray-600">{type.trading}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Annual Cost:</span>
                    <p className="text-lg font-bold text-[#D8315B]">{type.cost}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Visas:</span>
                    <p className="text-gray-600">{type.visa}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Best For:</span>
                    <p className="text-gray-600">{type.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            8-Step Business Setup Process
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Follow these steps to launch your Dubai business in 2-8 weeks
          </p>
          <div className="mx-auto max-w-4xl space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index}>
                <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition-all">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#D8315B] text-xl font-bold text-white">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="mb-2 text-gray-600">{step.description}</p>
                      <p className="text-sm font-semibold text-[#0A2463]">
                        Timeline: {step.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16 space-y-2">
                    <p className="font-semibold text-gray-900">Tips:</p>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#D8315B]" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {step.storageConnection && (
                  <div className="mt-6 rounded-xl bg-gradient-to-r from-[#D8315B]/10 to-[#3E92CC]/10 p-6 border border-[#D8315B]/20">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <Package className="h-6 w-6 text-[#D8315B]" />
                          <h4 className="text-xl font-bold text-gray-900">Storage Solution</h4>
                        </div>
                        {step.step === 5 ? (
                          <p className="text-gray-700">
                            <strong>Save on office costs!</strong> Instead of expensive physical office (AED 30,000+/year), get a flexi-desk (AED 10,000) and use SafeStorage for documents, inventory, and supplies. Save AED 20,000+/year while staying fully compliant.
                          </p>
                        ) : (
                          <p className="text-gray-700">
                            <strong>Secure document storage from day 1.</strong> Store licenses, contracts, invoices, and legal documents safely. UAE law requires keeping business records for 5 years. Climate-controlled facility with 24/7 access for just AED 199/month.
                          </p>
                        )}
                      </div>
                      <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-32 md:w-64">
                        <Image
                          src={warehouseImages[index % warehouseImages.length]}
                          alt="SafeStorage facility"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Breakdown */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Complete Cost Breakdown
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Budget AED 50,000 - 100,000 for first year (all-in)
          </p>
          <div className="mx-auto max-w-4xl space-y-8">
            {costs.map((section, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-[#D8315B] whitespace-nowrap ml-4">
                        AED {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Storage Savings */}
          <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-gradient-to-r from-[#0A2463] to-[#3E92CC] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="mb-4 text-3xl font-bold">Smart Savings with SafeStorage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0" />
                    <span><strong>Office rent:</strong> Use flexi-desk + storage instead of big office. Save AED 20,000 - 40,000/year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0" />
                    <span><strong>Inventory storage:</strong> E-commerce businesses save AED 15,000 - 30,000/year vs warehouse rental</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0" />
                    <span><strong>Document archival:</strong> Secure 5-year record keeping from AED 199/month</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button size="lg" asChild className="bg-white text-[#D8315B] hover:bg-gray-100">
                    <Link href="/contact">
                      Get Business Storage Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:w-80">
                <Image
                  src="/images/warehouse-interior.jpg"
                  alt="SafeStorage business storage facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Storage Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Storage Solutions for Every Business
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Professional storage helps you save costs and stay organized
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {businessStorageSolutions.map((solution, index) => (
              <div key={index} className="rounded-xl border-2 border-gray-200 bg-white overflow-hidden shadow-md hover:border-[#D8315B] transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={solution.image}
                    alt={`${solution.type} storage solution`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <solution.icon className="h-8 w-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">{solution.type}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">What You Need:</p>
                    <p className="text-gray-600">{solution.needs}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">SafeStorage Solution:</p>
                    <p className="text-gray-700">{solution.solution}</p>
                  </div>
                  <div className="rounded-lg bg-[#D8315B]/10 p-4 border border-[#D8315B]/20">
                    <p className="font-bold text-[#D8315B] flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      {solution.savings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
              <Link href="/contact">
                Get Custom Storage Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            5 Common Mistakes to Avoid
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Learn from others' experiences and save time and money
          </p>
          <div className="mx-auto max-w-4xl space-y-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="rounded-xl border-l-4 border-red-500 bg-white p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <item.icon className="h-8 w-8 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.mistake}</h3>
                    <p className="text-gray-700">
                      <strong className="text-[#D8315B]">Solution: </strong>
                      {item.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Storage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Package className="mb-6 h-16 w-16 text-[#D8315B]" />
                <h2 className="mb-4 text-4xl font-bold">
                  Complete Business Storage Solutions
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Every business needs secure storage. Whether you're running an e-commerce store, consulting firm, or trading company, we have the perfect storage solution.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 h-6 w-6 flex-shrink-0 text-[#D8315B]" />
                    <div>
                      <h4 className="font-bold text-white">Document & License Storage</h4>
                      <p className="text-gray-300">Store trade licenses, contracts, invoices safely. UAE requires 5-year record keeping.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="mt-1 h-6 w-6 flex-shrink-0 text-[#D8315B]" />
                    <div>
                      <h4 className="font-bold text-white">Inventory & Product Storage</h4>
                      <p className="text-gray-300">E-commerce sellers save AED 15,000-30,000/year vs full warehouse rental.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-[#D8315B]" />
                    <div>
                      <h4 className="font-bold text-white">24/7 Access</h4>
                      <p className="text-gray-300">Access your documents and inventory anytime. Climate-controlled facility.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="tel:+971505773388">
                      <Phone className="mr-2 h-5 w-5" />
                      Call: +971 800 72337
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/warehouse-interior.jpg"
                    alt="SafeStorage document storage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image
                      src="/images/warehouse-exterior.jpg"
                      alt="SafeStorage facility exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image
                      src="/images/warehouse-boxes.jpg"
                      alt="SafeStorage inventory storage"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-4xl space-y-6 mt-12">
            {[
              {
                q: "How long does it take to set up a business in Dubai?",
                a: "Free zone businesses: 2-4 weeks. Mainland businesses: 4-8 weeks. Freelance permit: 1-2 weeks. Banking can add 2-4 weeks to any option.",
              },
              {
                q: "Do I need to live in Dubai to own a business?",
                a: "No. You can own and operate a Dubai business while living anywhere in the world. However, you'll need to visit Dubai to complete initial setup (visa medical test, Emirates ID, bank account opening).",
              },
              {
                q: "What's the minimum investment required?",
                a: "Free zone: AED 50,000-80,000 all-in (first year). Mainland: AED 60,000-120,000. Freelance: AED 25,000-40,000. This includes license, visa, office, banking, and PRO services.",
              },
              {
                q: "Can I run an online business from Dubai?",
                a: "Yes! E-commerce and online businesses are very popular. Get an e-commerce license from any of Dubai's free zones. You can sell worldwide from Dubai with no restrictions.",
              },
              {
                q: "Do I need an office or can I work from home?",
                a: "You need a registered business address (flexi-desk, virtual office, or physical office). You cannot use your home address. Flexi-desks start from AED 5,000/year and you can work from anywhere.",
              },
              {
                q: "What business activities are allowed for foreigners?",
                a: "Almost all activities now allow 100% foreign ownership. Only a few restricted activities need UAE/GCC partner: oil & gas, defense, fishing, and money transfer. Everything else is open.",
              },
              {
                q: "How do I store my business documents and inventory?",
                a: "Use professional storage like SafeStorage. UAE law requires keeping business records for 5 years. Climate-controlled document storage from AED 199/month. Inventory storage available for e-commerce businesses.",
              },
              {
                q: "What's the corporate tax in Dubai?",
                a: "9% corporate tax on profits above AED 375,000 (from June 2023). First AED 375,000 profit is 0% tax. Free zone businesses may get 0% tax if they meet conditions. No personal income tax.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Ready to Start Your Dubai Business?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Get expert help with your business setup and secure storage solutions for documents and inventory.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
                <Link href="/contact">
                  Get Free Storage Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline">
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +971 800 72337
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
