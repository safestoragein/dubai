import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  DollarSign, TrendingDown, Calculator, CheckCircle2, AlertCircle,
  Home, Briefcase, GraduationCap, Users, Package, Shield, Clock,
  Phone, ArrowRight, Zap, Star, Target, Lightbulb, Archive,
  Building2, Warehouse, Box, FileText, ShoppingBag, Wrench
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cheap Storage Dubai 2026: Best Affordable Storage - Starts from AED 99/Month",
  description: "Find the cheapest storage in Dubai! Transparent pricing starts from AED 99/month. Compare costs, save money, and get flexible storage solutions. No hidden fees. Hassle-Free Pickup included.",
  keywords: "cheap storage dubai, affordable storage dubai, storage prices dubai, budget storage uae, cheapest storage dubai, low cost storage, storage deals dubai, student storage dubai, small business storage",
  openGraph: {
    title: "Cheap Storage Dubai 2026: Best Affordable Options - Starts from AED 99",
    description: "Transparent pricing, no hidden fees. Professional storage starts from AED 99/month in Dubai.",
    url: "https://safestorage.ae/cheap-storage-dubai",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-cheap-storage-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Cheap Storage Dubai"
      }
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/cheap-storage-dubai",
  },
}

export default function CheapStorageDubai() {
  const pricingTiers = [
    {
      size: "Small (25 sq ft)",
      equivalent: "Studio closet",
      priceText: "Starts from AED 99",
      savingsText: "Save up to 30% with annual plans",
      goodFor: "Documents, seasonal clothes, small items",
      capacity: "50-75 boxes",
      icon: Box,
    },
    {
      size: "Medium (50 sq ft)",
      equivalent: "1-bedroom apartment",
      priceText: "Starts from AED 249",
      savingsText: "Save up to 30% with annual plans",
      goodFor: "Furniture, household items, business inventory",
      capacity: "150-200 boxes",
      icon: Home,
      popular: true,
    },
    {
      size: "Large (100 sq ft)",
      equivalent: "2-bedroom apartment",
      priceText: "Starts from AED 499",
      savingsText: "Save up to 30% with annual plans",
      goodFor: "Full household, vehicles, business stock",
      capacity: "300-400 boxes",
      icon: Warehouse,
    },
    {
      size: "Extra Large (200 sq ft)",
      equivalent: "Small warehouse",
      priceText: "Starts from AED 799",
      savingsText: "Save up to 30% with annual plans",
      goodFor: "Commercial inventory, multiple vehicles, full office",
      capacity: "600-800 boxes",
      icon: Building2,
    },
  ]

  const savingsTips = [
    {
      icon: Clock,
      title: "Book for 6+ Months",
      tip: "Save 10-15% when you commit to longer periods. Annual plans save you AED 200-1,000/year",
    },
    {
      icon: Package,
      title: "Right-Size Your Unit",
      tip: "Don't pay for empty space! Start smaller and upgrade if needed. Most people overestimate by 30%",
    },
    {
      icon: Users,
      title: "Share with Family/Friends",
      tip: "Split a larger unit with roommates or family members. Cut your costs by 50% or more",
    },
    {
      icon: Box,
      title: "Use Own Packing Materials",
      tip: "Buy boxes from supermarkets (AED 2-5 each) instead of paying storage company prices (AED 15-25)",
    },
    {
      icon: Clock,
      title: "Avoid Peak Seasons",
      tip: "Move-in during off-peak months (May-September). Some facilities offer summer discounts",
    },
    {
      icon: TrendingDown,
      title: "Downsize Before Storing",
      tip: "Sell or donate unused items. Every 10 boxes you don't store saves AED 50-100/month",
    },
    {
      icon: Shield,
      title: "Skip Unnecessary Insurance",
      tip: "Check if your home insurance covers stored items. Don't pay twice for coverage",
    },
    {
      icon: Zap,
      title: "Choose Climate-Control Only If Needed",
      tip: "Regular storage works for most items. Save 20-30% if you don't need temperature control",
    },
  ]

  const useCases = [
    {
      title: "Students & Graduates",
      icon: GraduationCap,
      scenario: "Studying in Dubai or summer break storage",
      challenge: "Limited budget, temporary storage between semesters",
      solution: "Small unit starting from AED 99/month for 3-4 months",
      savings: "Save AED 15,000-25,000 vs keeping larger apartment year-round",
      tips: [
        "Share a unit with classmates",
        "Store during summer and winter breaks",
        "Use vacuum bags to compress clothes and bedding",
        "Keep only essentials in your dorm/apartment",
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Downsizing Families",
      icon: Home,
      scenario: "Moving from villa to apartment",
      challenge: "Kids moved out, large home too expensive",
      solution: "Medium unit starting from AED 249/month to store excess furniture and memories",
      savings: "Save AED 50,000-100,000/year on smaller apartment vs villa rent",
      tips: [
        "Store seasonal decorations and extra furniture",
        "Keep family heirlooms safe without cluttering new space",
        "Rotate items instead of buying new for different seasons",
        "Gradually sell items you realize you don't need",
      ],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Small Business Owners",
      icon: Briefcase,
      scenario: "E-commerce or trading business",
      challenge: "Need inventory storage without expensive warehouse",
      solution: "Large unit starting from AED 499/month for business inventory and equipment",
      savings: "Save AED 2,000-4,000/month vs renting commercial warehouse space",
      tips: [
        "Store seasonal inventory and reduce office space needs",
        "Use storage for documents (5-year legal requirement)",
        "Keep samples and marketing materials organized",
        "Scale up/down based on business growth",
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Remote Workers & Digital Nomads",
      icon: Zap,
      scenario: "Flexible lifestyle, traveling frequently",
      challenge: "Don't want to pay high rent when away",
      solution: "Small-Medium unit starting from AED 99/month + flexible short-term accommodation",
      savings: "Save AED 30,000-60,000/year vs keeping full apartment year-round",
      tips: [
        "Store belongings and use hotel apartments when in Dubai",
        "Sub-let your apartment and store your items",
        "Perfect for 3-6 month international projects",
        "Keep your base in Dubai without full rent commitment",
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
    },
  ]

  const hiddenCosts = [
    {
      icon: AlertCircle,
      cost: "Administration Fees",
      typical: "AED 200-500 one-time",
      ourPrice: "FREE",
      avoid: "Choose providers with no setup fees",
    },
    {
      icon: AlertCircle,
      cost: "Lock & Key Deposit",
      typical: "AED 100-200",
      ourPrice: "FREE (included)",
      avoid: "Bring your own lock or choose providers that include it",
    },
    {
      icon: AlertCircle,
      cost: "Moving/Pickup Service",
      typical: "AED 300-800",
      ourPrice: "Hassle-Free Pickup",
      avoid: "Look for hassle-hassle-free pickup and delivery services",
    },
    {
      icon: AlertCircle,
      cost: "Insurance (Mandatory)",
      typical: "AED 50-200/month",
      ourPrice: "Optional, from AED 25/month",
      avoid: "Check if your home insurance covers stored items first",
    },
    {
      icon: AlertCircle,
      cost: "Access Fees",
      typical: "AED 50-100 per visit",
      ourPrice: "FREE unlimited access",
      avoid: "Ensure 24/7 free access is included in your contract",
    },
    {
      icon: AlertCircle,
      cost: "Early Termination Fee",
      typical: "1-2 months rent penalty",
      ourPrice: "30 days notice only",
      avoid: "Choose month-to-month contracts with flexible terms",
    },
  ]

  const trendingContext = [
    {
      icon: TrendingDown,
      trend: "Dubai Cost of Living Crisis 2026",
      impact: "Rent increased 15-25% in 2025. More people downsizing to save money",
      solution: "Storage lets you keep belongings while moving to smaller, cheaper apartments",
    },
    {
      icon: Home,
      trend: "Minimalist Living Movement",
      impact: "Decluttering trend growing. People want less stuff but don't want to throw away valuables",
      solution: "Store seasonal and occasional items, keep daily living space minimal",
    },
    {
      icon: Briefcase,
      trend: "Remote Work Flexibility",
      impact: "Many professionals work from multiple countries. Fixed rent doesn't make sense",
      solution: "Store belongings and use flexible accommodation when in Dubai",
    },
    {
      icon: GraduationCap,
      trend: "Student Population Growth",
      impact: "Dubai's universities expanding. 50,000+ international students need affordable solutions",
      solution: "Seasonal storage during breaks cheaper than year-round large apartments",
    },
  ]

  const sizeGuide = [
    {
      size: "25 sq ft",
      dimensions: "5ft x 5ft",
      fits: ["10-15 boxes", "Seasonal clothes", "Small furniture pieces", "Documents & files"],
      notFits: ["Full bedroom set", "Large appliances", "Multiple furniture pieces"],
      bestFor: "Students, documents, seasonal storage",
      price: "Starts from AED 99/month",
    },
    {
      size: "50 sq ft",
      dimensions: "5ft x 10ft",
      fits: ["20-30 boxes", "1-bedroom furniture", "Mattress & bed frame", "Small appliances", "Bike or motorcycle"],
      notFits: ["Car", "Full 2-bedroom apartment", "Large commercial inventory"],
      bestFor: "1-bedroom apartment, small family, startup inventory",
      price: "Starts from AED 249/month",
    },
    {
      size: "100 sq ft",
      dimensions: "10ft x 10ft",
      fits: ["40-60 boxes", "2-bedroom furniture", "Major appliances", "Car (small)", "Office furniture"],
      notFits: ["3+ bedroom villa contents", "Large vehicle + furniture", "Full warehouse stock"],
      bestFor: "2-bedroom apartment, growing business, vehicle storage",
      price: "Starts from AED 499/month",
    },
    {
      size: "200 sq ft",
      dimensions: "10ft x 20ft",
      fits: ["80-100 boxes", "3-bedroom furniture", "Multiple vehicles", "Commercial stock", "Full office"],
      notFits: ["Nothing - this fits almost everything!"],
      bestFor: "Villa contents, commercial inventory, multiple vehicles",
      price: "Starts from AED 799/month",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2463] via-[#3E92CC] to-[#0A2463] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#D8315B] px-6 py-2 text-sm font-bold">
              <TrendingDown className="h-5 w-5" />
              LOWEST PRICES IN DUBAI 2026
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Cheap Storage Dubai: Starts from AED 99/Month
            </h1>
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">
              Transparent pricing. No hidden fees. Professional storage that doesn't break your budget. Save up to 30% with annual plans.
            </p>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8" />
                <p className="font-bold">Hassle-Free Pickup</p>
                <p className="text-sm">Save AED 300-800</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8" />
                <p className="font-bold">No Setup Fees</p>
                <p className="text-sm">Save AED 200-500</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8" />
                <p className="font-bold">24/7 Free Access</p>
                <p className="text-sm">Save AED 50-100/visit</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
                <Link href="/contact">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Free Quote & Save Money
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-[#0A2463] hover:bg-gray-100">
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +971 800 72337
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cheap Storage Matters in 2026 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Why Everyone in Dubai Needs Affordable Storage in 2026
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Economic trends making cheap storage essential for Dubai residents
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {trendingContext.map((item, index) => (
              <div key={index} className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md hover:border-[#D8315B] transition-all">
                <div className="mb-4 flex items-start gap-4">
                  <div className="rounded-full bg-[#D8315B]/10 p-3">
                    <item.icon className="h-8 w-8 text-[#D8315B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.trend}</h3>
                    <p className="mb-3 text-gray-600"><strong>Impact:</strong> {item.impact}</p>
                    <p className="text-[#0A2463]"><strong>How Storage Helps:</strong> {item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Honest, Transparent Pricing
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            No surprises. No hidden fees. Just simple, affordable storage.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-xl border-2 ${tier.popular ? 'border-[#D8315B] shadow-xl scale-105' : 'border-gray-200'} bg-white p-6 relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D8315B] px-4 py-1 text-sm font-bold text-white">
                    MOST POPULAR
                  </div>
                )}
                <tier.icon className="mb-4 h-12 w-12 text-[#D8315B]" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{tier.size}</h3>
                <p className="mb-4 text-sm text-gray-600">{tier.equivalent}</p>

                <div className="mb-6 border-y border-gray-200 py-4">
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-[#D8315B]">{tier.priceText}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {tier.savingsText}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm"><strong>Good for:</strong> {tier.goodFor}</p>
                  <p className="text-sm"><strong>Capacity:</strong> {tier.capacity}</p>
                </div>

                <Button asChild className="w-full bg-[#D8315B] hover:bg-[#c02a50]">
                  <Link href="/contact">Get This Size</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              <strong>All prices include:</strong> Hassle-Free Pickup, FREE delivery, 24/7 access, climate control, security monitoring
            </p>
          </div>
        </div>
      </section>

      {/* Storage Size Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            What Size Do You Actually Need?
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Don't pay for empty space! Find your perfect size and save money.
          </p>
          <div className="mx-auto max-w-5xl space-y-6">
            {sizeGuide.map((guide, index) => (
              <div key={index} className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-[#0A2463]">{guide.size}</h3>
                    <p className="mb-2 text-gray-600">Dimensions: {guide.dimensions}</p>
                    <p className="text-3xl font-bold text-[#D8315B]">{guide.price}</p>
                    <p className="text-sm text-gray-600 mt-1">{guide.bestFor}</p>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold text-gray-900">✅ What Fits:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {guide.fits.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold text-gray-900">❌ Won't Fit:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {guide.notFits.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            8 Smart Ways to Save Even More Money
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Pro tips to maximize your savings on storage costs
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {savingsTips.map((tip, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <tip.icon className="mb-4 h-10 w-10 text-[#D8315B]" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Real People, Real Savings
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            How Dubai residents use cheap storage to save thousands
          </p>
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex`}>
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 bg-white p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <useCase.icon className="h-10 w-10 text-[#D8315B]" />
                    <h3 className="text-3xl font-bold text-gray-900">{useCase.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-[#0A2463]">Scenario:</p>
                      <p className="text-gray-700">{useCase.scenario}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A2463]">Challenge:</p>
                      <p className="text-gray-700">{useCase.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A2463]">Solution:</p>
                      <p className="text-gray-700">{useCase.solution}</p>
                    </div>
                    <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                      <p className="font-bold text-green-800">💰 Total Savings: {useCase.savings}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A2463] mb-2">Money-Saving Tips:</p>
                      <ul className="space-y-2">
                        {useCase.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <Lightbulb className="h-4 w-4 text-[#D8315B] mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs to Avoid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Hidden Costs to Watch Out For
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            What other companies charge (that we don't!)
          </p>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-lg">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Hidden Fee</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Others Charge</th>
                    <th className="px-6 py-4 text-left font-bold text-[#D8315B]">SafeStorage Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hiddenCosts.map((cost, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <cost.icon className="h-5 w-5 text-red-500" />
                          <span className="font-semibold text-gray-900">{cost.cost}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{cost.typical}</td>
                      <td className="px-6 py-4 font-bold text-green-600">{cost.ourPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-lg font-bold text-[#0A2463]">
              Total Savings: AED 700-1,800 by choosing SafeStorage!
            </p>
          </div>
        </div>
      </section>

      {/* Storage Images Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Professional Facilities at Budget Prices
          </h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Clean, secure, climate-controlled storage you can trust
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop&q=80"
                alt="Secure storage facility exterior"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold">24/7 Security</h4>
                <p className="text-sm">CCTV monitored facilities</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80"
                alt="Climate controlled storage interior"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold">Climate Controlled</h4>
                <p className="text-sm">Protect your belongings</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=80"
                alt="Organized storage boxes"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold">Organized & Clean</h4>
                <p className="text-sm">Professional storage solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Common Questions About Cheap Storage in Dubai
          </h2>
          <div className="mx-auto max-w-4xl space-y-6 mt-12">
            {[
              {
                q: "What's the cheapest storage option in Dubai?",
                a: "Our small units start from AED 99/month for 25 sq ft. This is perfect for students, documents, or seasonal items. Annual plans save you up to 30% more.",
              },
              {
                q: "Are there really no hidden fees?",
                a: "Absolutely! Our price includes Hassle-Free Pickup, FREE delivery, 24/7 access, security, and climate control. No setup fees, no access fees, no lock deposit. What you see is what you pay.",
              },
              {
                q: "Can I pay monthly or do I need to commit long-term?",
                a: "We offer flexible month-to-month contracts. No long-term commitment required. However, 6+ month plans get 10-15% discount, and annual plans save you AED 200-1,000 depending on unit size.",
              },
              {
                q: "How can storage help me save money in Dubai?",
                a: "Storage lets you downsize to a cheaper apartment while keeping your belongings safe. Many people save AED 20,000-60,000/year by moving from a 2-bed to 1-bed apartment and storing extra items starting from AED 249/month.",
              },
              {
                q: "Is cheap storage safe and secure?",
                a: "Yes! Cheap doesn't mean low quality. We have 24/7 CCTV monitoring, individual unit alarms, climate control, and professional security. Your belongings are as safe as in expensive facilities.",
              },
              {
                q: "What size storage unit do I need?",
                a: "Most people overestimate! A 25 sq ft unit starting from AED 99/month fits 10-15 boxes and seasonal items. A 50 sq ft unit starting from AED 249/month holds a full 1-bedroom apartment. Use our size guide above to choose wisely.",
              },
              {
                q: "Can I access my storage anytime?",
                a: "Yes! 24/7 free access is included. Visit whenever you need without appointment or extra fees. Some cheaper facilities charge AED 50-100 per visit - we don't.",
              },
              {
                q: "Do you offer student discounts?",
                a: "Yes! Students get special rates on our small units starting from AED 99/month. Perfect for summer storage between semesters. Show your student ID to qualify. Save thousands vs keeping a large apartment year-round.",
              },
              {
                q: "What's included in the monthly price?",
                a: "Everything! Climate control, 24/7 security, Hassle-Free Pickup, FREE delivery, unlimited access, and your own lock. The only optional extra is additional insurance (if you want coverage above the basic amount).",
              },
              {
                q: "Can I share a unit with friends to save money?",
                a: "Absolutely! Many students and roommates split a medium unit starting from AED 249/month, sharing the cost. It's a smart way to halve your costs while storing more items.",
              },
              {
                q: "How much notice do I need to give to move out?",
                a: "Just 30 days notice. No penalties, no fees. If you find you don't need storage anymore, you can cancel with one month's notice. Unlike other companies that charge 1-2 months penalty!",
              },
              {
                q: "Is climate control really necessary in Dubai?",
                a: "For most items, yes. Dubai's heat and humidity can damage furniture, electronics, documents, and clothes. Our climate-controlled units maintain 18-24°C year-round, protecting your belongings without extra cost.",
              },
              {
                q: "Can businesses use cheap storage too?",
                a: "Yes! Many small businesses use our medium (starting from AED 249) or large (starting from AED 499) units for inventory, documents, and equipment. Save AED 2,000-4,000/month vs renting commercial warehouse space.",
              },
              {
                q: "How do I know what size I need?",
                a: "Use our size guide above! As a rule: 25 sq ft = closet, 50 sq ft = 1-bedroom, 100 sq ft = 2-bedroom, 200 sq ft = villa. Start smaller - you can always upgrade if needed.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, credit cards, debit cards, and bank transfers. Pay monthly or save money with quarterly/annual payment options that include discounts.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-[#0A2463] to-[#3E92CC] p-12 text-center text-white shadow-2xl">
            <DollarSign className="mx-auto mb-6 h-20 w-20" />
            <h2 className="mb-6 text-4xl font-bold">
              Start Saving Money Today!
            </h2>
            <p className="mb-8 text-xl">
              Starts from AED 99/month. No hidden fees. Hassle-Free Pickup. 24/7 access. Climate controlled. Cancel anytime.
            </p>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold">AED 99</p>
                <p className="text-sm">Starting price/month</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold">AED 0</p>
                <p className="text-sm">Hidden fees (really!)</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm">Free access anytime</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-[#D8315B] text-white hover:bg-[#c02a50]">
                <Link href="/contact">
                  Get Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-[#0A2463] hover:bg-gray-100">
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
