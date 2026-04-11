import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Storage Locations in Dubai",
  description:
    "Find SafeStorage locations across Dubai. We serve Business Bay, Dubai Marina, Jumeirah, Dubai Investment Park & more. Hassle-hassle-free pickup & delivery. Call +971505773388.",
  keywords:
    "storage locations dubai, storage near me, self storage dubai locations, storage facilities dubai, dubai storage centers",
  openGraph: {
    title: "Storage Locations Dubai - SafeStorage",
    description: "Premium storage locations across Dubai with hassle-free pickup & delivery service. Find a location near you.",
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
              We serve multiple areas in Dubai with hassle-free pickup & delivery service from your doorstep
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
              Even if your area isn't listed above, we still serve you! Our hassle-free pickup & delivery service
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

      {/* Rich text SEO content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Storage Locations Serving All of Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage operates across Dubai with strategically placed service zones covering the major residential
            and commercial areas. Our unique hassle-free model means you never need to travel to a storage facility
            — our team comes to you for pickup and returns your items on demand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Location Matters for Storage in Dubai</h3>
              <p className="text-gray-700 mb-3">
                Dubai is a large, geographically diverse city. Choosing a storage provider with coverage near your
                home or business reduces pickup time, lowers delivery lead times, and makes it easier to retrieve
                items when you need them. SafeStorage&apos;s multi-zone model ensures every Dubai resident and
                business is within our free pickup and delivery coverage area.
              </p>
              <p className="text-gray-700">
                Our service zones are centred around four key hubs — Business Bay (serving central and downtown
                Dubai), Dubai Marina (serving the western coast), Jumeirah (serving the villa communities), and
                Dubai Investment Park (serving the southern industrial and residential areas). Each zone has
                dedicated logistics teams for fast, efficient service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Same-Day Pickup Across Dubai</h3>
              <p className="text-gray-700 mb-3">
                One of SafeStorage&apos;s most popular features is same-day pickup for requests made before 12 PM.
                This means if you call or WhatsApp us in the morning, our team can collect your items that
                afternoon — no waiting days for a slot.
              </p>
              <p className="text-gray-700">
                Standard pickups are scheduled within 24–48 hours based on your preferred time slot. We offer
                morning (8 AM–12 PM), afternoon (12 PM–4 PM), and evening (4 PM–8 PM) windows Monday through
                Saturday. Our team arrives within a 1-hour window and handles all the packing and loading.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Complete List of Areas Covered by SafeStorage Dubai</h3>
            <div className="grid md:grid-cols-4 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Dubai Marina</li>
                <li>• JBR (Jumeirah Beach Residence)</li>
                <li>• Bluewaters Island</li>
                <li>• JLT (Jumeirah Lake Towers)</li>
                <li>• Dubai Media City</li>
                <li>• Dubai Internet City</li>
                <li>• Palm Jumeirah</li>
                <li>• The Greens &amp; The Views</li>
              </ul>
              <ul className="space-y-1">
                <li>• Business Bay</li>
                <li>• Downtown Dubai</li>
                <li>• DIFC</li>
                <li>• Sheikh Zayed Road</li>
                <li>• Burj Khalifa District</li>
                <li>• Trade Centre</li>
                <li>• Za&apos;abeel</li>
                <li>• Al Quoz</li>
              </ul>
              <ul className="space-y-1">
                <li>• Jumeirah 1, 2, 3</li>
                <li>• Umm Suqeim</li>
                <li>• Al Safa &amp; Al Wasl</li>
                <li>• Satwa</li>
                <li>• Bur Dubai</li>
                <li>• Deira</li>
                <li>• Karama</li>
                <li>• Oud Metha</li>
              </ul>
              <ul className="space-y-1">
                <li>• Dubai Investment Park</li>
                <li>• Motor City</li>
                <li>• Dubai Sports City</li>
                <li>• Dubai Production City</li>
                <li>• Jumeirah Village Circle</li>
                <li>• Discovery Gardens</li>
                <li>• Mirdif</li>
                <li>• Rashidiya</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Storage Services Available at All Locations</h3>
            <p className="text-gray-700 mb-4">
              Regardless of which area of Dubai you are in, SafeStorage provides the same comprehensive range of
              storage services with identical pricing, service quality, and customer care standards:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-gray-700">
              <p>• Household &amp; personal storage with free pickup</p>
              <p>• Furniture storage with climate control</p>
              <p>• Business &amp; commercial storage solutions</p>
              <p>• Document archiving and records management</p>
              <p>• Vehicle, car, and motorcycle storage</p>
              <p>• Short-term renovation and lease-gap storage</p>
              <p>• Long-term expat storage with flexible terms</p>
              <p>• Student storage for semester breaks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
