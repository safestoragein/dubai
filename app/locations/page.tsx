import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Storage Locations in Dubai | SafeStorage | +971505773388",
  description:
    "Find SafeStorage locations across Dubai. We serve Business Bay, Dubai Marina, Jumeirah, Dubai Investment Park & more. Hassle-hassle-free pickup & delivery. Call +971505773388.",
  keywords:
    "storage locations dubai, storage near me, self storage dubai locations, storage facilities dubai, dubai storage centers",
  openGraph: {
    title: "Storage Locations Dubai - SafeStorage",
    description: "Premium storage locations across Dubai with hassle-hassle-free pickup & delivery service. Find a location near you.",
    url: "https://safestorage.ae/locations",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/locations",
  },
}

const locations = [
  {
    name: "Business Bay",
    slug: "business-bay",
    areas: ["Business Bay", "Downtown Dubai", "DIFC", "Sheikh Zayed Road"],
    distance: "10-15 minutes",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    areas: ["Dubai Marina", "JBR", "JLT", "Media City", "Internet City"],
    distance: "15-20 minutes",
  },
  {
    name: "Jumeirah",
    slug: "jumeirah",
    areas: ["Jumeirah 1, 2, 3", "Umm Suqeim", "Al Safa", "Al Wasl"],
    distance: "15-20 minutes",
  },
  {
    name: "Dubai Investment Park",
    slug: "dubai-investment-park",
    areas: ["Dubai Investment Park", "Dubai Production City", "Dubai Studio City", "Motor City"],
    distance: "10-15 minutes",
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storage Locations Across Dubai
            </h1>
            <p className="text-xl mb-8">
              We serve multiple areas in Dubai with hassle-hassle-free pickup & delivery service from your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +971505773388
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Find SafeStorage Near You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location) => (
                <Card key={location.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <MapPin className="mr-2 h-6 w-6 text-[#D8315B]" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Areas Served:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {location.areas.map((area, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                            <span className="text-sm">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-[#0A2463]">
                        <strong>Distance:</strong> {location.distance}
                      </p>
                    </div>
                    <Button className="w-full bg-[#0A2463] hover:bg-[#3E92CC]" asChild>
                      <Link href={`/locations/${location.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#0A2463]">
              We Cover All of Dubai
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Even if your area isn't listed above, we still serve you! Our hassle-hassle-free pickup & delivery service
              covers all areas across Dubai. We'll come to your location to pick up your items and deliver them
              back whenever you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+971505773388">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Store with SafeStorage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and experience premium storage service anywhere in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D8315B] hover:bg-[#c02a50]" asChild>
              <Link href="/get-quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#0A2463] hover:bg-gray-100" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
