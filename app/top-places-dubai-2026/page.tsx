import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Star, TrendingUp, Phone, ArrowRight, Share2, Bookmark, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Top 6 Places to Visit in Dubai 2026 | Ultimate Dubai Travel Guide",
  description:
    "Discover the best places to visit in Dubai in 2026! From Burj Khalifa to Museum of the Future, explore Dubai's top attractions. Planning to move or relocate? We've got storage solutions too!",
  keywords:
    "dubai 2026, places to visit dubai, dubai attractions 2026, things to do dubai, dubai travel guide 2026, burj khalifa, dubai mall, museum of the future, dubai marina, palm jumeirah",
  openGraph: {
    title: "Top 6 Places to Visit in Dubai 2026 | Ultimate Travel Guide",
    description: "Your complete guide to Dubai's must-visit attractions in 2026. Perfect for tourists and new residents!",
    url: "https://safestorage.ae/top-places-dubai-2026",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-dubai-places-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Top Places to Visit in Dubai 2026"
      }
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/top-places-dubai-2026",
  },
}

const places = [
  {
    id: 1,
    name: "Burj Khalifa & Dubai Mall",
    location: "Downtown Dubai",
    rating: 4.9,
    description: "The world's tallest building standing at 828 meters, Burj Khalifa is Dubai's most iconic landmark. Visit the observation deck on the 124th floor for breathtaking 360° views of the city, desert, and ocean. Right next door, The Dubai Mall offers world-class shopping with over 1,200 stores, the mesmerizing Dubai Fountain, and the Dubai Aquarium.",
    highlights: [
      "At The Top observation deck (124th & 148th floors)",
      "Dubai Fountain show every 30 minutes",
      "Dubai Aquarium & Underwater Zoo",
      "VR Park and Dubai Ice Rink"
    ],
    bestTime: "Sunset (6-7 PM) for stunning views",
    storageConnection: "Moving to Downtown Dubai? Store your extra furniture and belongings with us while you settle into your new high-rise apartment. We offer hassle-free pickup from all Downtown areas.",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    name: "Museum of the Future",
    location: "Sheikh Zayed Road",
    rating: 4.8,
    description: "Dubbed 'the most beautiful building on Earth' by National Geographic, this architectural marvel showcases innovations and technologies shaping our tomorrow. The torus-shaped structure features immersive exhibitions about space travel, climate change solutions, and AI advancements.",
    highlights: [
      "7 floors of futuristic exhibitions",
      "Interactive AI and robotics displays",
      "Space station simulation experience",
      "Stunning Arabic calligraphy facade"
    ],
    bestTime: "Weekday mornings (10 AM) to avoid crowds",
    storageConnection: "Planning an extended stay to explore Dubai's innovation scene? We provide secure storage for your belongings, documents, and equipment while you're in the city.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyetJU4hidcRzV3nom4Zxs3X6i3QZVpVDel5JGUvGUlLJjdGIMX-TK7v-y7TwlAvH0XkN5yXvngfWWHNefseNEAwcRRect9Pxp34g2nh1Koww1F-LF2cEle87FxAtMJiCwu8fnGKiml4l4=s1360-w1360-h1020-rw"
  },
  {
    id: 3,
    name: "Palm Jumeirah & Atlantis",
    location: "Palm Jumeirah",
    rating: 4.9,
    description: "The iconic palm-shaped artificial island is home to luxury hotels, pristine beaches, and Atlantis The Palm. Experience Aquaventure Waterpark with 105 slides, The Lost Chambers Aquarium, and world-class dining. The Palm Monorail offers spectacular views of this engineering wonder.",
    highlights: [
      "Aquaventure Waterpark - largest in Middle East",
      "Dolphin Bay & Sea Lion Point",
      "The Lost Chambers Aquarium",
      "Private beach access at luxury resorts"
    ],
    bestTime: "Early morning (9 AM) for waterpark",
    storageConnection: "Seasonal resident at Palm Jumeirah? Our climate-controlled storage keeps your summer wardrobe, water sports gear, and luxury items safe year-round.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop"
  },
  {
    id: 4,
    name: "Dubai Marina & JBR Beach",
    location: "Dubai Marina",
    rating: 4.7,
    description: "Dubai Marina is a stunning waterfront development with a 3km promenade lined with cafes, restaurants, and luxury yachts. Adjacent JBR Beach (Jumeirah Beach Residence) offers golden sands, water sports, and The Beach shopping complex. Perfect for sunset strolls and Instagram-worthy shots.",
    highlights: [
      "Marina Walk promenade with 200+ dining options",
      "JBR Beach with water sports activities",
      "Dhow cruise dinner experiences",
      "Skydiving Dubai for thrill-seekers"
    ],
    bestTime: "Evening (5-9 PM) for vibrant atmosphere",
    storageConnection: "Living in Marina towers? Maximize your apartment space by storing seasonal items, sports equipment, and extra luggage with SafeStorage. We serve all Marina residents.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=800&fit=crop"
  },
  {
    id: 5,
    name: "Dubai Miracle Garden",
    location: "Dubailand",
    rating: 4.6,
    description: "The world's largest natural flower garden featuring over 150 million flowers arranged in stunning designs. Open from November to May, it showcases floral installations including life-size aircraft, castles, and the iconic Emirates A380. A must-visit for nature lovers and families.",
    highlights: [
      "45+ million sq ft of floral displays",
      "Full-size Emirates A380 covered in flowers",
      "Butterfly Garden with 15,000+ butterflies",
      "New themed installations each season"
    ],
    bestTime: "November-March (cooler months, full bloom)",
    storageConnection: "Event planners and photographers love Dubai's seasonal attractions. Store your equipment, props, and seasonal decor with us during off-seasons.",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=1200&h=800&fit=crop"
  },
  {
    id: 6,
    name: "Global Village",
    location: "Dubai-Al Ain Road",
    rating: 4.7,
    description: "The ultimate cultural and entertainment destination, Global Village brings together pavilions from 90+ countries. Shop for handicrafts, savor international cuisines, enjoy thrilling rides, and watch spectacular shows. Open from October to April, it's a celebration of world cultures under one sky.",
    highlights: [
      "Pavilions from 90+ countries",
      "26 thrilling rides and attractions",
      "Daily cultural performances and fireworks",
      "Street food from around the world"
    ],
    bestTime: "October-April season, weekday evenings",
    storageConnection: "Importing goods or running an e-commerce business? We offer warehouse storage solutions perfect for international sellers and traders operating in Dubai.",
    image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&h=800&fit=crop"
  }
]

export default function TopPlacesDubai2026() {
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
              <TrendingUp className="h-5 w-5 text-[#D8315B]" />
              <span className="text-sm font-semibold bg-[#D8315B] px-3 py-1 rounded-full">TRENDING 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Top 6 Must-Visit Places in <span className="text-[#D8315B]">Dubai 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your ultimate guide to Dubai's most iconic attractions. Whether you're a tourist or planning to relocate, discover the best this city has to offer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-[#D8315B]" />
                <span className="text-sm">Updated January 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm">Local Expert Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">150M+</div>
              <div className="text-sm text-gray-600">Annual Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">6</div>
              <div className="text-sm text-gray-600">UNESCO Sites Nearby</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">365</div>
              <div className="text-sm text-gray-600">Days of Sunshine</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A2463]">#1</div>
              <div className="text-sm text-gray-600">Tourist Destination ME</div>
            </div>
          </div>
        </div>
      </section>

      {/* Places List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {places.map((place, index) => (
              <div key={place.id}>
                {/* Place Card */}
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src={place.image}
                        alt={place.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        priority={index < 2}
                      />
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full font-bold text-[#0A2463] shadow-lg">
                        #{place.id}
                      </div>
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-sm">{place.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-3xl font-bold text-[#0A2463] mb-2">
                        {place.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 text-[#D8315B]" />
                        <span className="text-sm">{place.location}</span>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {place.description}
                      </p>

                      <div className="mb-4">
                        <h3 className="font-semibold text-[#0A2463] mb-2">Top Highlights:</h3>
                        <ul className="space-y-1">
                          {place.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <Star className="h-4 w-4 text-[#D8315B] flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <p className="text-sm text-[#0A2463]">
                          <span className="font-semibold">Best Time to Visit:</span> {place.bestTime}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Bookmark className="h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Share2 className="h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Storage Connection Section */}
                <div className="mt-8 grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-[#0A2463]/5 to-[#3E92CC]/5 p-6 rounded-xl border border-[#3E92CC]/20">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="h-5 w-5 text-[#D8315B]" />
                      <h3 className="font-semibold text-[#0A2463]">
                        {index % 2 === 0 ? "Living Near This Area?" : "Planning Your Dubai Journey?"}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {place.storageConnection}
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
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Warehouse Image */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={index % 3 === 0 ? "/organized-warehouse-space.png" : index % 3 === 1 ? "/expansive-storage.png" : "/images/storage-facility-background.png"}
                      alt="SafeStorage Climate-Controlled Warehouse"
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                      <p className="text-xs font-semibold text-[#0A2463]">Climate-Controlled • 24/7 Security</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning to Move to Dubai CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planning to Move or Relocate to Dubai?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Make your transition smooth with SafeStorage Dubai's hassle-free storage solutions.
              Whether you're a tourist, expat, or new resident, we're here to help!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hassle-Free Pickup</h3>
                <p className="text-sm text-gray-200">We collect from anywhere in Dubai</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Climate Controlled</h3>
                <p className="text-sm text-gray-200">Protect items from Dubai's heat</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Package className="h-10 w-10 text-[#D8315B] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Security</h3>
                <p className="text-sm text-gray-200">Your belongings are always safe</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Your Free Quote Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <Link href="/storage-dubai">Learn More About Our Services</Link>
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">What's the best time to visit Dubai in 2026?</h3>
                <p className="text-gray-700">November to March offers the best weather with temperatures between 20-30°C. This is peak tourist season with numerous festivals and events.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">Do I need storage if I'm relocating to Dubai?</h3>
                <p className="text-gray-700">Yes! Many expats use storage during their transition period. It's perfect for storing items while you find permanent housing or declutter your new apartment.</p>
              </div>
              <div className="border-l-4 border-[#D8315B] pl-4">
                <h3 className="font-semibold text-lg mb-2 text-[#0A2463]">How many days do I need to explore Dubai?</h3>
                <p className="text-gray-700">We recommend at least 5-7 days to cover the top attractions comfortably. A longer stay of 10-14 days allows you to explore hidden gems too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A2463]">Ready to Explore Dubai?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Start your Dubai adventure with confidence. Need storage solutions while you explore? We're here to help!
          </p>
          <Button className="bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
            <Link href="/contact">
              Contact SafeStorage Dubai Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
