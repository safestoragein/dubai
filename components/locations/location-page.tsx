"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Truck, Shield, Phone, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { faqSchema } from "@/lib/structured-data"

interface LocationPageProps {
  location: string
  areas: string[]
  distance: string
  benefits: string[]
}

export default function LocationPage({ location, areas, distance, benefits }: LocationPageProps) {
  const locationFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you provide storage services in ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, we provide comprehensive storage services for ${location} residents and businesses with hassle-free pickup and delivery from your location.`
        }
      },
      {
        "@type": "Question",
        name: `How long does pickup take from ${location}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Our facility is approximately ${distance} from ${location}. We offer same-day or next-day pickup service depending on availability.`
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Add FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationFAQ) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storage Solutions in {location}
            </h1>
            <p className="text-xl mb-8">
              Premium, secure storage units with hassle-free pickup & delivery service for all {location} residents
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

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="mr-2 h-6 w-6 text-[#0A2463]" />
                Areas We Serve in {location}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="flex items-center text-[#0A2463]">
                  <Clock className="mr-2 h-5 w-5" />
                  <strong>Distance from {location}:</strong>&nbsp;{distance}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Why Choose SafeStorage for {location}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Shield className="mr-3 h-6 w-6 text-[#3E92CC] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2463]">
              Our Storage Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Truck className="mx-auto h-12 w-12 text-[#D8315B] mb-4" />
                  <h3 className="font-semibold mb-2">Hassle-Free Pickup & Delivery</h3>
                  <p className="text-sm text-gray-600">We collect from {location} and deliver back when needed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="mx-auto h-12 w-12 text-[#3E92CC] mb-4" />
                  <h3 className="font-semibold mb-2">24/7 Security</h3>
                  <p className="text-sm text-gray-600">CCTV, biometric access, and on-site security</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="mx-auto h-12 w-12 text-[#0A2463] mb-4" />
                  <h3 className="font-semibold mb-2">Climate Controlled</h3>
                  <p className="text-sm text-gray-600">Optimal temperature and humidity year-round</p>
                </CardContent>
              </Card>
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
            Get your free quote today and experience the best storage service in {location}
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