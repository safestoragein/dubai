import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingBag, Store, Sparkles, MapPin, Clock, DollarSign, Star,
  Tag, Gift, TrendingUp, Phone, ArrowRight, CheckCircle2, Package,
  Calendar, Shirt, Gem, Coffee, Home as HomeIcon, Users, AlertCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dubai Shopping Guide 2026: Best Malls, Souks & Markets | Complete Guide",
  description:
    "Ultimate Dubai shopping guide 2026! Discover the best malls (Dubai Mall, Mall of Emirates), traditional souks (Gold, Spice), outlet malls, markets & shopping festivals. Real prices, best times to shop & insider tips!",
  keywords:
    "dubai shopping 2026, best malls dubai, dubai mall, mall of emirates, gold souk dubai, spice souk, dubai shopping festival, outlet mall dubai, where to shop dubai, dubai markets",
  openGraph: {
    title: "Dubai Shopping Guide 2026: Best Malls, Souks & Markets",
    description: "Complete guide to shopping in Dubai - luxury malls, traditional souks, outlets & markets!",
    url: "https://safestorage.ae/dubai-shopping-guide-2026",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-dubai-shopping-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Shopping Guide 2026"
      }
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/dubai-shopping-guide-2026",
  },
}

const shoppingDestinations = [
  {
    id: 1,
    category: "Luxury Malls",
    icon: Store,
    color: "from-blue-500 to-blue-600",
    title: "World's Best Shopping Malls",
    description: "Dubai is home to some of the world's largest and most luxurious shopping malls. Air-conditioned comfort, endless brands, entertainment, and dining all under one roof!",
    destinations: [
      {
        name: "The Dubai Mall",
        location: "Downtown Dubai",
        highlights: "1,200+ stores, Dubai Aquarium, Ice Rink, VR Park",
        brands: "Gucci, Louis Vuitton, Chanel, Apple, Zara, H&M",
        priceRange: "Budget to Ultra-Luxury",
        bestFor: "Everything! Fashion, electronics, souvenirs, entertainment",
        timing: "10 AM - 12 AM daily (Fri-Sat till 1 AM)",
        parking: "AED 20-30 (4+ hours)",
        tip: "Visit Dubai Fountain show (every 30 mins, FREE!)"
      },
      {
        name: "Mall of the Emirates",
        location: "Al Barsha",
        highlights: "630+ stores, Ski Dubai, VOX Cinemas, Magic Planet",
        brands: "Harvey Nichols, Carrefour, Debenhams, all major brands",
        priceRange: "Mid to High-End",
        bestFor: "Family shopping, Ski Dubai experience, dining",
        timing: "10 AM - 12 AM daily",
        parking: "AED 20 (4+ hours)",
        tip: "Ski Dubai costs AED 200-250, book online for discount"
      },
      {
        name: "Dubai Marina Mall",
        location: "Dubai Marina",
        highlights: "400+ stores, Waterfront views, Casual dining",
        brands: "Waitrose, Carrefour, Splash, Brands for Less",
        priceRange: "Budget to Mid-Range",
        bestFor: "Everyday shopping, Marina residents, casual brands",
        timing: "10 AM - 10 PM daily",
        parking: "AED 10-20",
        tip: "Walk along Marina Walk after shopping - beautiful at sunset!"
      },
      {
        name: "City Walk",
        location: "Al Safa",
        highlights: "Outdoor shopping, Street art, Trendy cafes",
        brands: "Nike, Adidas, Apple, Victoria's Secret, local designers",
        priceRange: "Mid to High-End",
        bestFor: "Outdoor shopping experience, Instagram photos, cafes",
        timing: "10 AM - 12 AM",
        parking: "First 4 hours free",
        tip: "Best in winter months (Nov-March), too hot in summer"
      }
    ],
    storageConnection: "Shopped too much at the malls? We've all been there! Store seasonal wardrobes, extra bags, and shopping hauls. Only keep what you need right now - we'll keep the rest safe!",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    category: "Traditional Souks",
    icon: Sparkles,
    color: "from-yellow-500 to-yellow-600",
    title: "Authentic Arabian Shopping",
    description: "Experience old Dubai! Traditional markets (souks) offer gold, spices, textiles, and unique finds. Don't forget to bargain - it's expected!",
    destinations: [
      {
        name: "Gold Souk",
        location: "Deira",
        highlights: "10 tonnes of gold on display! 300+ shops",
        brands: "Local gold traders, 18k-22k gold jewelry",
        priceRange: "Gold priced by weight + making charges",
        bestFor: "Gold jewelry, wedding shopping, investment",
        timing: "10 AM - 10 PM (Friday 4 PM onwards)",
        parking: "Limited, use taxi/metro",
        tip: "Bargain 10-20% off! Gold price fixed, but making charges negotiable"
      },
      {
        name: "Spice Souk",
        location: "Deira (near Gold Souk)",
        highlights: "Aromatic spices, herbs, dried fruits, nuts",
        brands: "Local traders",
        priceRange: "Very Affordable (AED 10-100)",
        bestFor: "Spices, saffron, dried fruits, souvenirs",
        timing: "9 AM - 1 PM, 4 PM - 9 PM",
        parking: "Limited",
        tip: "Buy saffron here - much cheaper than supermarkets!"
      },
      {
        name: "Textile Souk (Souk Al Kabeer)",
        location: "Bur Dubai",
        highlights: "Fabrics, traditional clothing, textiles",
        brands: "Indian, Pakistani, Arabic fabrics",
        priceRange: "Very Cheap (AED 5-50 per meter)",
        bestFor: "Fabrics, tailoring, traditional clothes, souvenirs",
        timing: "9 AM - 1 PM, 4 PM - 9 PM (closed Friday morning)",
        parking: "Use public parking",
        tip: "Bargain hard! Start at 50% of asking price"
      },
      {
        name: "Perfume Souk",
        location: "Deira",
        highlights: "Arabian perfumes (Oud), oils, incense",
        brands: "Local perfumers, traditional scents",
        priceRange: "AED 50-500+",
        bestFor: "Authentic Arabian perfumes, oud, gifts",
        timing: "10 AM - 10 PM",
        parking: "Limited",
        tip: "Sample everything! Custom blends available"
      }
    ],
    storageConnection: "Bought bulk spices, fabrics, or gold jewelry for the family? Store your souk treasures safely in climate-controlled environment. Protect gold, textiles, and delicate items from Dubai's humidity!",
    image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200&h=800&fit=crop"
  },
  {
    id: 3,
    category: "Outlet Malls & Bargains",
    icon: Tag,
    color: "from-red-500 to-red-600",
    title: "Budget Shopping Paradise",
    description: "Save 50-80% on branded items! Outlet malls and bargain stores offer amazing deals on last season's collections and overstocked items.",
    destinations: [
      {
        name: "The Outlet Village",
        location: "Jebel Ali (near Dubai Parks)",
        highlights: "125+ brands, 30-90% discounts, European village style",
        brands: "Puma, Adidas, Coach, Michael Kors, Tommy Hilfiger",
        priceRange: "Cheap! (50-90% off retail)",
        bestFor: "Branded clothing, shoes, bags at fraction of price",
        timing: "10 AM - 10 PM",
        parking: "Free parking",
        tip: "Worth the drive! Genuine brands, massive savings"
      },
      {
        name: "Dragon Mart",
        location: "International City",
        highlights: "Massive Chinese wholesale market, 3,950+ stores",
        brands: "Chinese brands, wholesale items",
        priceRange: "Super Cheap (AED 5-100 for most items)",
        bestFor: "Home decor, electronics, toys, bulk buying, furniture",
        timing: "10 AM - 10 PM",
        parking: "Free",
        tip: "Bring cash, bargain hard! Buy in bulk for better prices"
      },
      {
        name: "Brands for Less",
        location: "Multiple locations across Dubai",
        highlights: "Branded clothes, shoes, accessories at discounts",
        brands: "Calvin Klein, Tommy, Levi's, Nike (overstocked)",
        priceRange: "Budget (30-70% off retail)",
        bestFor: "Branded fashion on budget",
        timing: "10 AM - 10 PM",
        parking: "Available at each location",
        tip: "Stock changes frequently - visit often!"
      },
      {
        name: "Karama Market",
        location: "Karama",
        highlights: "Bargain shopping, imitation goods",
        brands: "Local traders, copies (buyer beware!)",
        priceRange: "Very Cheap (AED 10-200)",
        bestFor: "Budget clothes, souvenirs, home items",
        timing: "10 AM - 10 PM",
        parking: "Street parking",
        tip: "Bargain aggressively! Cash only, watch for quality"
      }
    ],
    storageConnection: "Bargain shopping means bulk buying! Bought 10 shirts because they were AED 20 each? Store off-season clothes and rotate your wardrobe. Save closet space, access anytime!",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=800&fit=crop"
  },
  {
    id: 4,
    category: "Markets & Unique Finds",
    icon: Gift,
    color: "from-green-500 to-green-600",
    title: "Weekend Markets & Local Gems",
    description: "Discover local artisans, organic produce, vintage finds, and unique items at Dubai's vibrant weekend markets!",
    destinations: [
      {
        name: "Ripe Market",
        location: "Various locations (Times Square, Bedouin, etc.)",
        highlights: "Organic food, artisan products, live music",
        brands: "Local farmers, small businesses, artisans",
        priceRange: "Mid-range (quality organic products)",
        bestFor: "Fresh produce, healthy food, artisan gifts, weekend vibes",
        timing: "Friday-Saturday mornings",
        parking: "Free at locations",
        tip: "Go early for best produce, bring reusable bags!"
      },
      {
        name: "The Flea Market at Al Seef",
        location: "Al Seef, Dubai Creek",
        highlights: "Vintage items, antiques, handicrafts",
        brands: "Independent sellers",
        priceRange: "Variable (bargain required)",
        bestFor: "Unique finds, vintage, collectibles",
        timing: "Seasonal - check schedule",
        parking: "Available nearby",
        tip: "Perfect for quirky souvenirs and one-of-a-kind items"
      },
      {
        name: "Global Village",
        location: "Dubai-Al Ain Road",
        highlights: "26 countries, cultural pavilions, shows, food",
        brands: "International products from 90+ countries",
        priceRange: "Budget to Mid-range",
        bestFor: "International shopping, entertainment, family outing",
        timing: "Oct-April season, 4 PM - 12 AM",
        parking: "AED 10-20",
        tip: "Entry AED 15-25, weekdays less crowded than weekends"
      },
      {
        name: "Friday Markets (Various)",
        location: "Al Fahidi, Mercato Mall parking, etc.",
        highlights: "Arts, crafts, food, local products",
        brands: "Local artisans and creators",
        priceRange: "Affordable",
        bestFor: "Handmade items, supporting local businesses",
        timing: "Friday mornings/afternoons",
        parking: "Free usually",
        tip: "Cash preferred, great for unique gifts"
      }
    ],
    storageConnection: "Found unique furniture, art pieces, or bulk organic goods at markets? Store seasonal decorations, extra cookware, and market finds until you need them. Your home stays clutter-free!",
    image: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=1200&h=800&fit=crop"
  },
  {
    id: 5,
    category: "Shopping Festivals",
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    title: "Best Times to Shop & Save",
    description: "Dubai hosts massive shopping festivals with 25-75% discounts, prizes, and entertainment. Time your shopping right and save thousands!",
    destinations: [
      {
        name: "Dubai Shopping Festival (DSF)",
        location: "All Malls Citywide",
        highlights: "25-75% discounts, daily prizes, raffle draws, fireworks",
        brands: "All brands participate",
        priceRange: "Massive discounts on everything",
        bestFor: "Big purchases, electronics, fashion, gold",
        timing: "January - February (4-6 weeks)",
        parking: "Normal mall parking",
        tip: "Best deals in first and last week! Save receipts for prize draws"
      },
      {
        name: "Dubai Summer Surprises",
        location: "All Malls",
        highlights: "Up to 70% off, kids entertainment, family deals",
        brands: "All participating",
        priceRange: "Heavy discounts",
        bestFor: "Family shopping, children's items, entertainment",
        timing: "July - August",
        parking: "Normal",
        tip: "Mall promotions change weekly - check mall websites"
      },
      {
        name: "Eid Sales",
        location: "Everywhere",
        highlights: "Post-Eid sales, 30-60% off",
        brands: "All brands",
        priceRange: "Good discounts",
        bestFor: "Clothes, home items, gifts",
        timing: "After Eid Al Fitr & Eid Al Adha",
        parking: "Very crowded!",
        tip: "Go early or late evening to avoid crowds"
      },
      {
        name: "Black Friday / White Friday",
        location: "Online & Malls",
        highlights: "40-80% off, online deals, flash sales",
        brands: "All major brands & online stores",
        priceRange: "Best electronics deals of the year",
        bestFor: "Electronics, appliances, fashion",
        timing: "Last Friday of November",
        parking: "Shop online to avoid crowds!",
        tip: "Compare prices first - not all 'deals' are real deals"
      }
    ],
    storageConnection: "Shopping festivals = buying in bulk! Bought winter clothes in summer sales? Store them! Got next year's Eid gifts early? Store them! Smart shoppers buy during sales and store until needed.",
    image: "https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=1200&h=800&fit=crop"
  }
]

const shoppingTips = [
  {
    icon: DollarSign,
    title: "Always Bargain in Souks",
    tip: "Start at 50% of asking price in traditional markets. Never accept first price!"
  },
  {
    icon: Calendar,
    title: "Shop During Sales",
    tip: "DSF (Jan-Feb) and Summer Surprises (Jul-Aug) offer 50-70% discounts"
  },
  {
    icon: Clock,
    title: "Best Shopping Times",
    tip: "Weekday mornings = empty malls. Friday afternoons & weekends = PACKED!"
  },
  {
    icon: Tag,
    title: "VAT Refunds for Tourists",
    tip: "Get 5% VAT back when leaving UAE. Keep receipts, visit Planet refund desk"
  },
  {
    icon: Shirt,
    title: "End of Season Sales",
    tip: "Winter clothes cheap in March, Summer clothes cheap in September"
  },
  {
    icon: Store,
    title: "Outlet Malls Save 70%+",
    tip: "The Outlet Village offers genuine brands at fraction of retail price"
  }
]

export default function DubaiShoppingGuide2026() {
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
              <ShoppingBag className="h-6 w-6 text-[#D8315B]" />
              <span className="text-sm font-semibold bg-[#D8315B] px-3 py-1 rounded-full">SHOPPING PARADISE 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dubai <span className="text-[#D8315B]">Shopping Guide</span> 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Complete guide to Dubai's best malls, traditional souks, outlet stores, markets & shopping festivals. Everything from luxury brands to bargain finds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Store className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">200+ Malls & Markets</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Tag className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Updated January 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Shopping Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">70+</div>
              <div className="text-sm text-gray-600">Shopping Malls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">10 Tonnes</div>
              <div className="text-sm text-gray-600">Gold on Display</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">75%</div>
              <div className="text-sm text-gray-600">Max Discounts DSF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">#1</div>
              <div className="text-sm text-gray-600">Shopping Destination</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {shoppingDestinations.map((section, sectionIndex) => (
              <div key={section.id}>
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-block bg-gradient-to-r ${section.color} text-white px-6 py-3 rounded-full mb-4`}>
                    <div className="flex items-center gap-2">
                      <section.icon className="h-6 w-6" />
                      <span className="font-bold text-lg">{section.category}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    {section.description}
                  </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid gap-8 mb-8">
                  {section.destinations.map((place, placeIndex) => (
                    <Card key={placeIndex} className="hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Main Info */}
                          <div className="md:col-span-2">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-[#0A2463] mb-1">{place.name}</h3>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <MapPin className="h-4 w-4 text-[#D8315B]" />
                                  <span className="text-sm">{place.location}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3 mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Star className="h-4 w-4 text-yellow-500" />
                                  <span className="font-semibold text-sm text-[#0A2463]">Highlights:</span>
                                </div>
                                <p className="text-sm text-gray-700 ml-6">{place.highlights}</p>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Store className="h-4 w-4 text-blue-500" />
                                  <span className="font-semibold text-sm text-[#0A2463]">Brands:</span>
                                </div>
                                <p className="text-sm text-gray-700 ml-6">{place.brands}</p>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <DollarSign className="h-4 w-4 text-green-500" />
                                  <span className="font-semibold text-sm text-[#0A2463]">Price Range:</span>
                                </div>
                                <p className="text-sm text-gray-700 ml-6">{place.priceRange}</p>
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <CheckCircle2 className="h-4 w-4 text-purple-500" />
                                  <span className="font-semibold text-sm text-[#0A2463]">Best For:</span>
                                </div>
                                <p className="text-sm text-gray-700 ml-6">{place.bestFor}</p>
                              </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                              <div className="flex items-start gap-2">
                                <Sparkles className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-semibold text-sm text-yellow-900">Insider Tip: </span>
                                  <span className="text-sm text-yellow-800">{place.tip}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Side Info */}
                          <div className="space-y-3">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="h-4 w-4 text-[#0A2463]" />
                                <span className="font-semibold text-sm">Timing</span>
                              </div>
                              <p className="text-xs text-gray-700">{place.timing}</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-[#0A2463]" />
                                <span className="font-semibold text-sm">Parking</span>
                              </div>
                              <p className="text-xs text-gray-700">{place.parking}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Category Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-8">
                  <Image
                    src={section.image}
                    alt={section.category}
                    width={1200}
                    height={400}
                    className="object-cover w-full h-full"
                    priority={sectionIndex < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{section.category}</h3>
                      <p className="text-sm opacity-90">{section.description}</p>
                    </div>
                  </div>
                </div>

                {/* Storage Connection */}
                <div className="grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#0A2463]/5 to-[#3E92CC]/5 p-6 rounded-xl border border-[#3E92CC]/20">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="h-5 w-5 text-[#D8315B]" />
                      <h3 className="font-semibold text-[#0A2463]">
                        Smart Storage for Shoppers
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {section.storageConnection}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="sm" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                        <Link href="/get-quote">
                          Get Free Quote
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
                      src={sectionIndex % 3 === 0 ? "/organized-warehouse-space.png" : sectionIndex % 3 === 1 ? "/expansive-storage.png" : "/images/storage-facility-background.png"}
                      alt="SafeStorage Facility"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                      <p className="text-xs font-semibold text-[#0A2463]">Climate-Controlled • 24/7 Access</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A2463]">
              Smart Shopping Tips for Dubai
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shoppingTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#D8315B]/10 p-3 rounded-full flex-shrink-0">
                        <tip.icon className="h-6 w-6 text-[#D8315B]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A2463] mb-2">{tip.title}</h3>
                        <p className="text-sm text-gray-700">{tip.tip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shopper's Storage Solution */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop More, Worry Less with SafeStorage
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Dubai shopping is irresistible! Don't let lack of space stop you from great deals. Store your shopping hauls with us!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <ShoppingBag className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Seasonal Wardrobes</h3>
                <p className="text-sm text-gray-200">Store winter clothes in summer, summer clothes in winter</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Bulk Purchases</h3>
                <p className="text-sm text-gray-200">Bought in bulk during sales? Store until needed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Gift className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Gifts & Souvenirs</h3>
                <p className="text-sm text-gray-200">Store gifts bought early for special occasions</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Storage Quote - 2 Minutes</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 050-577-3388
                </a>
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
              Dubai Shopping Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">When is the best time to shop in Dubai?</h3>
                <p className="text-gray-700">Dubai Shopping Festival (January-February) and Dubai Summer Surprises (July-August) offer 50-75% discounts. Also Black Friday (November) and post-Eid sales are great!</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Is gold really cheaper in Dubai?</h3>
                <p className="text-gray-700">Gold price is international (same everywhere), but Dubai has lower making charges and no taxes. Plus you can bargain! Save 10-20% compared to other countries.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Can tourists get VAT refund?</h3>
                <p className="text-gray-700">Yes! Tourists get 5% VAT refund when leaving UAE. Shop at stores with "Tax Free" signs, get your form stamped at airport Planet desk before check-in, collect refund after security.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Should I bargain in Dubai?</h3>
                <p className="text-gray-700">YES in souks and small shops (start at 50% of asking price). NO in malls and brand stores (fixed prices). Gold shops - bargain making charges, not gold price.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A2463]">Shop Till You Drop - We'll Store the Rest!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Dubai shopping is addictive! Keep buying, we'll keep storing. Climate-controlled, secure, and accessible anytime.
          </p>
          <Button className="bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
            <Link href="/storage-dubai">
              Learn About Storage Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
