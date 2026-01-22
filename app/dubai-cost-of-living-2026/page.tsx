import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home, ShoppingCart, Car, Zap, Utensils, GraduationCap, Heart,
  Shirt, Wifi, Phone, ArrowRight, TrendingDown, Wallet, Calculator,
  Package, DollarSign, PiggyBank, CheckCircle2, AlertCircle, Star
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dubai Cost of Living 2026: Complete Budget Guide | Real Prices & Monthly Expenses",
  description:
    "How much does it cost to live in Dubai in 2026? Complete breakdown of rent, food, transport, utilities & more. Real prices in AED. Budget calculator for singles, couples & families living in Dubai.",
  keywords:
    "dubai cost of living 2026, living expenses dubai, dubai monthly budget, how much to live in dubai, dubai prices, cost to live in dubai, dubai rent prices, dubai salary requirements",
  openGraph: {
    title: "Dubai Cost of Living 2026: Complete Budget Guide",
    description: "Real prices & monthly budgets for living in Dubai. Rent, food, transport, schools & more!",
    url: "https://safestorage.ae/dubai-cost-of-living-2026",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-dubai-cost-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Cost of Living 2026"
      }
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/dubai-cost-of-living-2026",
  },
}

const budgetProfiles = [
  {
    id: 1,
    title: "Single Person - Budget Lifestyle",
    monthly: "6,000 - 8,000",
    icon: "👤",
    color: "from-green-500 to-green-600",
    breakdown: [
      { item: "Studio apartment (shared area)", amount: "2,000 - 3,000" },
      { item: "Groceries & home cooking", amount: "800 - 1,200" },
      { item: "Transportation (taxi/metro)", amount: "400 - 600" },
      { item: "Utilities (DEWA)", amount: "200 - 400" },
      { item: "Mobile & internet", amount: "200 - 300" },
      { item: "Dining out (occasional)", amount: "500 - 800" },
      { item: "Entertainment", amount: "300 - 500" },
      { item: "Gym membership", amount: "200 - 300" },
      { item: "Misc & shopping", amount: "400 - 900" }
    ]
  },
  {
    id: 2,
    title: "Single Person - Comfortable Lifestyle",
    monthly: "10,000 - 15,000",
    icon: "🏃",
    color: "from-blue-500 to-blue-600",
    breakdown: [
      { item: "1-bedroom apartment (nice area)", amount: "4,000 - 6,000" },
      { item: "Groceries & quality food", amount: "1,500 - 2,000" },
      { item: "Car payment + petrol", amount: "2,000 - 3,000" },
      { item: "Utilities & cooling", amount: "400 - 700" },
      { item: "Mobile & internet", amount: "300 - 400" },
      { item: "Dining out regularly", amount: "1,000 - 1,500" },
      { item: "Entertainment & hobbies", amount: "800 - 1,200" },
      { item: "Gym, fitness", amount: "400 - 600" },
      { item: "Shopping & personal", amount: "600 - 1,600" }
    ]
  },
  {
    id: 3,
    title: "Couple - No Kids",
    monthly: "15,000 - 22,000",
    icon: "👫",
    color: "from-purple-500 to-purple-600",
    breakdown: [
      { item: "2-bedroom apartment", amount: "6,000 - 9,000" },
      { item: "Groceries for two", amount: "2,000 - 3,000" },
      { item: "Car payment + petrol", amount: "2,500 - 3,500" },
      { item: "Utilities", amount: "600 - 900" },
      { item: "Mobile & internet (2 lines)", amount: "400 - 600" },
      { item: "Dining out & date nights", amount: "1,500 - 2,500" },
      { item: "Entertainment & travel", amount: "1,000 - 1,500" },
      { item: "Gym memberships (both)", amount: "600 - 800" },
      { item: "Shopping & personal", amount: "1,000 - 2,200" }
    ]
  },
  {
    id: 4,
    title: "Family of 4 - Standard Lifestyle",
    monthly: "25,000 - 35,000",
    icon: "👨‍👩‍👧‍👦",
    color: "from-orange-500 to-orange-600",
    breakdown: [
      { item: "3-bedroom apartment/villa", amount: "8,000 - 12,000" },
      { item: "Groceries (family of 4)", amount: "3,000 - 4,500" },
      { item: "2 cars (payments + petrol)", amount: "3,500 - 5,000" },
      { item: "Utilities & cooling", amount: "1,000 - 1,500" },
      { item: "Mobile & internet", amount: "500 - 700" },
      { item: "School fees (2 kids)", amount: "4,000 - 7,000" },
      { item: "Dining out & family activities", amount: "2,000 - 3,000" },
      { item: "Healthcare insurance", amount: "800 - 1,200" },
      { item: "Clothing & misc", amount: "1,200 - 2,100" }
    ]
  }
]

const expenses = [
  {
    id: 1,
    category: "Housing & Rent",
    icon: Home,
    color: "from-blue-500 to-blue-600",
    description: "Biggest expense! Rent varies wildly by area and property type. Paid in 1-4 cheques annually (not monthly).",
    prices: [
      { item: "Studio apartment (Deira, International City)", price: "25,000 - 35,000/year" },
      { item: "Studio apartment (JBR, Marina)", price: "40,000 - 60,000/year" },
      { item: "1-bedroom (Barsha, Tecom)", price: "45,000 - 65,000/year" },
      { item: "1-bedroom (Downtown, Marina)", price: "70,000 - 100,000/year" },
      { item: "2-bedroom apartment (mid-range)", price: "70,000 - 110,000/year" },
      { item: "3-bedroom apartment (family areas)", price: "90,000 - 150,000/year" },
      { item: "Villa (Arabian Ranches, Springs)", price: "150,000 - 250,000/year" }
    ],
    savingTip: "Consider a smaller place and use storage for extra items. A 1-bed vs 2-bed saves you AED 20,000-40,000 annually!",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    category: "Groceries & Food",
    icon: ShoppingCart,
    color: "from-green-500 to-green-600",
    description: "Food costs depend on where you shop and eating habits. Local supermarkets are cheaper than imported brands.",
    prices: [
      { item: "Milk (1 liter)", price: "AED 6 - 8" },
      { item: "Bread (standard loaf)", price: "AED 3 - 6" },
      { item: "Rice (1 kg)", price: "AED 8 - 15" },
      { item: "Chicken (1 kg)", price: "AED 18 - 25" },
      { item: "Eggs (12 pack)", price: "AED 8 - 12" },
      { item: "Weekly groceries (1 person)", price: "AED 200 - 400" },
      { item: "Monthly groceries (family of 4)", price: "AED 2,500 - 4,000" },
      { item: "Eating out (budget meal)", price: "AED 25 - 40" },
      { item: "Mid-range restaurant (2 people)", price: "AED 150 - 250" },
      { item: "Fast food combo meal", price: "AED 25 - 35" }
    ],
    savingTip: "Shop at Carrefour, Lulu, or Nesto for best prices. Cook at home - eating out adds up fast!",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop"
  },
  {
    id: 3,
    category: "Transportation",
    icon: Car,
    color: "from-red-500 to-red-600",
    description: "Most people need a car in Dubai. Public transport exists but limited. Taxis and Uber are affordable.",
    prices: [
      { item: "New car (monthly payment)", price: "AED 1,500 - 3,500" },
      { item: "Used car (monthly payment)", price: "AED 800 - 2,000" },
      { item: "Petrol per month (regular use)", price: "AED 300 - 600" },
      { item: "Car insurance (annual)", price: "AED 1,500 - 4,000" },
      { item: "Taxi (5 km ride)", price: "AED 20 - 30" },
      { item: "Metro daily pass", price: "AED 20" },
      { item: "Metro monthly pass", price: "AED 350" },
      { item: "Uber/Careem (average ride)", price: "AED 25 - 50" }
    ],
    savingTip: "Buy a reliable used car instead of new. Save AED 1,000+ monthly in payments!",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop"
  },
  {
    id: 4,
    category: "Utilities & Bills",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    description: "DEWA (Dubai Electricity & Water) is your main utility. AC costs spike in summer (May-September).",
    prices: [
      { item: "DEWA (studio, summer)", price: "AED 400 - 700" },
      { item: "DEWA (2-bed apt, summer)", price: "AED 800 - 1,200" },
      { item: "DEWA (villa, summer)", price: "AED 1,500 - 2,500" },
      { item: "Internet (home)", price: "AED 300 - 500/month" },
      { item: "Mobile plan (basic)", price: "AED 100 - 200/month" },
      { item: "Mobile plan (unlimited)", price: "AED 250 - 400/month" },
      { item: "Streaming services (Netflix, etc)", price: "AED 35 - 60/month" }
    ],
    savingTip: "Set AC to 24°C (not 18°C!) to save 30-40% on cooling costs. Turn off when you leave!",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop"
  },
  {
    id: 5,
    category: "Education & Schools",
    icon: GraduationCap,
    color: "from-indigo-500 to-indigo-600",
    description: "School fees are expensive! Varies by curriculum (British, American, IB) and school reputation.",
    prices: [
      { item: "Budget schools (local curriculum)", price: "AED 12,000 - 20,000/year" },
      { item: "Mid-range international schools", price: "AED 35,000 - 60,000/year" },
      { item: "Premium schools (British/IB)", price: "AED 60,000 - 95,000/year" },
      { item: "Top-tier schools (GEMS, etc)", price: "AED 90,000 - 120,000/year" },
      { item: "Nursery/Kindergarten", price: "AED 15,000 - 45,000/year" },
      { item: "School bus (annual)", price: "AED 4,000 - 8,000/year" },
      { item: "School supplies & extras", price: "AED 2,000 - 5,000/year" }
    ],
    savingTip: "Apply early for affordable schools - they fill up fast! Some employers offer education allowance.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop"
  },
  {
    id: 6,
    category: "Healthcare & Insurance",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    description: "Mandatory health insurance for everyone. Usually employer provides basic coverage. Healthcare quality is excellent.",
    prices: [
      { item: "Basic insurance (employer provided)", price: "AED 500 - 1,500/year" },
      { item: "Comprehensive insurance (self)", price: "AED 3,000 - 8,000/year" },
      { item: "Family insurance (4 people)", price: "AED 8,000 - 20,000/year" },
      { item: "Doctor visit (consultation)", price: "AED 200 - 500" },
      { item: "Dental cleaning", price: "AED 200 - 400" },
      { item: "Pharmacy (common medications)", price: "AED 20 - 100" },
      { item: "Emergency room visit", price: "AED 500 - 2,000" }
    ],
    savingTip: "Use insurance network hospitals to avoid extra costs. Keep insurance card with you always!",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
  },
  {
    id: 7,
    category: "Entertainment & Lifestyle",
    icon: Star,
    color: "from-purple-500 to-purple-600",
    description: "Dubai has something for every budget. Beach is free! Many affordable activities available.",
    prices: [
      { item: "Gym membership (basic)", price: "AED 200 - 400/month" },
      { item: "Gym membership (premium)", price: "AED 500 - 1,000/month" },
      { item: "Cinema ticket", price: "AED 35 - 75" },
      { item: "Theme park (single day)", price: "AED 250 - 400" },
      { item: "Burj Khalifa ticket", price: "AED 150 - 500" },
      { item: "Beach club (day pass)", price: "AED 100 - 300" },
      { item: "Golf (18 holes)", price: "AED 300 - 800" },
      { item: "Desert safari", price: "AED 150 - 350" }
    ],
    savingTip: "Free activities: beaches, parks, Dubai Mall fountain, outdoor markets. Dubai doesn't have to be expensive!",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=800&fit=crop"
  },
  {
    id: 8,
    category: "Clothing & Shopping",
    icon: Shirt,
    color: "from-orange-500 to-orange-600",
    description: "Shopping ranges from budget to ultra-luxury. Sales happen during Dubai Shopping Festival and Summer Surprises.",
    prices: [
      { item: "Jeans (Levi's)", price: "AED 200 - 350" },
      { item: "Dress shirt", price: "AED 100 - 300" },
      { item: "Sneakers (Nike, Adidas)", price: "AED 250 - 600" },
      { item: "Business shoes", price: "AED 200 - 500" },
      { item: "Summer outfit", price: "AED 150 - 400" },
      { item: "Formal suit", price: "AED 800 - 2,500" }
    ],
    savingTip: "Shop during sales (Jan-Feb, June-Aug) for 50-70% discounts! Outlet malls have great deals year-round.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop"
  }
]

export default function DubaiCostOfLiving2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0A2463] via-[#3E92CC] to-[#0A2463] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dubai-skyline-pattern.svg')] bg-repeat-x bg-bottom"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calculator className="h-6 w-6 text-[#D8315B]" />
              <span className="text-sm font-semibold bg-[#D8315B] px-3 py-1 rounded-full">REAL PRICES 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dubai <span className="text-[#D8315B]">Cost of Living</span> 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Complete budget breakdown with real prices in AED. How much do you really need to live comfortably in Dubai?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <DollarSign className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Updated January 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Real Resident Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlight */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-3 flex items-center justify-center gap-2">
              <TrendingDown className="h-6 w-6 text-green-600" />
              The Big Advantage: 0% Income Tax!
            </h2>
            <p className="text-gray-700 text-lg">
              You keep 100% of your salary. A AED 20,000 salary in Dubai = AED 25,000-30,000 elsewhere after tax.
              This makes Dubai very affordable despite seeming expensive!
            </p>
          </div>
        </div>
      </section>

      {/* Budget Profiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
                How Much Do You Need? Monthly Budget by Lifestyle
              </h2>
              <p className="text-gray-600 text-lg">
                Choose your profile to see realistic monthly expenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {budgetProfiles.map((profile) => (
                <Card key={profile.id} className="hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`bg-gradient-to-r ${profile.color} text-white p-4 rounded-lg mb-4`}>
                      <div className="text-4xl mb-2">{profile.icon}</div>
                      <h3 className="text-xl font-bold mb-1">{profile.title}</h3>
                      <div className="text-3xl font-bold">AED {profile.monthly}</div>
                      <div className="text-sm opacity-90">per month</div>
                    </div>

                    <div className="space-y-2">
                      {profile.breakdown.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                          <span className="text-gray-700">{item.item}</span>
                          <span className="font-semibold text-[#0A2463]">AED {item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Expense Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-4">
                Complete Price Breakdown by Category
              </h2>
              <p className="text-gray-600 text-lg">
                Real prices for everything you'll spend money on in Dubai
              </p>
            </div>

            {expenses.map((expense, index) => (
              <div key={expense.id}>
                {/* Expense Card */}
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src={expense.image}
                        alt={expense.category}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        priority={index < 2}
                      />
                      <div className={`absolute top-4 left-4 bg-gradient-to-r ${expense.color} px-4 py-2 rounded-full font-bold text-white shadow-lg flex items-center gap-2`}>
                        <expense.icon className="h-5 w-5" />
                        <span>{expense.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 md:p-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {expense.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-semibold text-[#0A2463] mb-3 flex items-center gap-2">
                          <Wallet className="h-5 w-5 text-[#D8315B]" />
                          Real Prices (AED):
                        </h3>
                        <div className="space-y-2">
                          {expense.prices.map((price, idx) => (
                            <div key={idx} className="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                              <span className="text-gray-700 flex-1">{price.item}</span>
                              <span className="font-semibold text-[#0A2463] ml-4 whitespace-nowrap">{price.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <div className="flex items-start gap-2">
                          <PiggyBank className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-900 mb-1">Money-Saving Tip:</h4>
                            <p className="text-sm text-green-800">{expense.savingTip}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Storage Tip Section (every other category) */}
                {index % 2 === 0 && (
                  <div className="mt-8 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#0A2463]/5 to-[#3E92CC]/5 p-6 rounded-xl border border-[#3E92CC]/20">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="h-5 w-5 text-[#D8315B]" />
                        <h3 className="font-semibold text-[#0A2463]">
                          Save Money with Smart Storage
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {index === 0 ? "Paying AED 90,000/year for a 2-bed apartment? Get a 1-bed for AED 60,000 and store extra items for just AED 3,600/year. Save AED 26,400 annually!" :
                         index === 2 ? "Don't pay AED 2,000+ monthly for a car you rarely use! Store seasonal sports equipment, camping gear, and winter clothes instead of buying a bigger car." :
                         index === 4 ? "Kids outgrow everything! Store last year's school uniforms, sports gear, and toys. Swap seasonally instead of buying new every year." :
                         "Bought too much during sales? Store seasonal clothes, extra furniture, and bulk purchases. Pay monthly storage instead of yearly rent for extra space!"}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="sm" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                          <Link href="/get-quote">
                            Calculate Savings
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="tel:+971505773388">
                            <Phone className="mr-1 h-4 w-4" />
                            Call Us
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Warehouse Image */}
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={index % 3 === 0 ? "/organized-warehouse-space.png" : index % 3 === 1 ? "/expansive-storage.png" : "/images/storage-facility-background.png"}
                        alt="SafeStorage Facility"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                        <p className="text-xs font-semibold text-[#0A2463]">Save AED 20,000+ Yearly on Rent!</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Calculator CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Living = Save More Money in Dubai
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Thousands save AED 20,000+ annually by storing items instead of renting bigger apartments. Join them!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Home className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smaller = Cheaper</h3>
                <p className="text-sm text-gray-200">1-bed vs 2-bed saves AED 30,000/year</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Storage = AED 300/month</h3>
                <p className="text-sm text-gray-200">vs AED 2,500+ extra rent monthly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <TrendingDown className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Save AED 26,400/Year</h3>
                <p className="text-sm text-gray-200">That's a vacation every year!</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">See How Much You Can Save</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <Link href="/pricing">View Storage Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Common Money Questions About Dubai
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">What salary do I need to live comfortably in Dubai?</h3>
                <p className="text-gray-700">Single person: AED 10,000-15,000/month for comfortable life. Couple: AED 18,000-25,000. Family of 4: AED 30,000-40,000. Remember - no tax, so your full salary is yours!</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Is Dubai more expensive than other cities?</h3>
                <p className="text-gray-700">Comparable to London or New York for rent, but cheaper for: groceries, transport, dining out, and fuel. Plus 0% income tax makes your salary go further!</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Can I save money living in Dubai?</h3>
                <p className="text-gray-700">Absolutely! Most people save 30-50% of their salary because there's no income tax. Live smart (cook at home, smaller apartment, use storage for extra stuff) and you'll save a lot.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">What's the most expensive thing in Dubai?</h3>
                <p className="text-gray-700">Rent and school fees! Rent is 40-50% of expenses. International schools cost AED 40,000-100,000 per child annually. Plan your budget around these two big items.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A2463]">Live Smart. Save More. Enjoy Dubai!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let high rent eat your salary. Store smartly and save thousands every year!
          </p>
          <Button className="bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
            <Link href="/storage-dubai">
              Explore Storage Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
