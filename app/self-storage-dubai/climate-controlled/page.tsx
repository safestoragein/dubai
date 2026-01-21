import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Shield, Fan, ArrowRight, CheckCircle2, AlertCircle, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Climate Controlled Storage Dubai – Protect from Heat & Humidity | SafeStorage",
  description: "Climate controlled storage units in Dubai maintain optimal temperature & humidity. Perfect for furniture, electronics, documents, artwork. 24/7 monitoring.",
  keywords: "climate controlled storage dubai, temperature controlled storage dubai, humidity control storage dubai",
  openGraph: {
    title: "Climate Controlled Storage Dubai – Beat the Heat & Humidity",
    description: "Protect sensitive items from Dubai's extreme weather with our climate controlled storage units.",
    url: "https://safestorage.ae/self-storage-dubai/climate-controlled",
  },
  alternates: {
    canonical: "https://safestorage.ae/self-storage-dubai/climate-controlled",
  },
}

export default function ClimateControlledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/self-storage-dubai" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              ← Back to Self Storage Dubai
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Climate Controlled Storage Dubai – Protection from Extreme Weather
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Dubai's scorching heat and humidity can destroy your valuables. With temperatures reaching 50°C 
              and humidity spikes during summer, standard storage isn't enough. Our climate-controlled units 
              maintain perfect conditions year-round, protecting everything from furniture to electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <Link href="/get-quote">Get Climate Storage Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white hover:text-black border-white text-white" asChild>
                <a href="tel:+971505773388">Call +971 50 577 3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Climate Control Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Dubai's Climate Challenges for Storage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-red-100">
                <CardHeader>
                  <AlertCircle className="h-10 w-10 text-red-500 mb-2" />
                  <CardTitle className="text-red-900">Without Climate Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>Heat Damage:</strong> Wood warps, plastic melts, electronics fail</li>
                    <li><strong>Humidity Issues:</strong> Mold, mildew, rust, and corrosion</li>
                    <li><strong>Expansion/Contraction:</strong> Cracks in furniture and materials</li>
                    <li><strong>Pest Attraction:</strong> Insects thrive in warm, humid spaces</li>
                    <li><strong>Degradation:</strong> Papers yellow, photos stick, fabrics deteriorate</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-green-100">
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="text-green-900">With Climate Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>Stable Temperature:</strong> Maintained at 20-22°C year-round</li>
                    <li><strong>Humidity Control:</strong> Kept between 45-55% consistently</li>
                    <li><strong>Air Quality:</strong> Filtered and circulated regularly</li>
                    <li><strong>Pest Prevention:</strong> Environment unsuitable for insects</li>
                    <li><strong>Preservation:</strong> Items remain in original condition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-dubai-gold/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-dubai-navy">Dubai Weather Facts:</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                <li>• Summer temperatures regularly exceed 45°C</li>
                <li>• Humidity can reach 90% in coastal areas</li>
                <li>• Temperature swings of 20°C between day and night</li>
                <li>• Sandstorms bring additional moisture and particles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Items That Need Climate Control */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              What Needs Climate-Controlled Storage?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Electronics & Tech</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Computers & laptops</li>
                    <li>• TVs & monitors</li>
                    <li>• Gaming consoles</li>
                    <li>• Audio equipment</li>
                    <li>• Cameras & lenses</li>
                    <li>• Hard drives & media</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Heat damages circuits and batteries
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Furniture & Wood</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wooden furniture</li>
                    <li>• Leather goods</li>
                    <li>• Upholstered items</li>
                    <li>• Antiques</li>
                    <li>• Musical instruments</li>
                    <li>• Mattresses</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Prevents warping, cracking, mold
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Documents & Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business records</li>
                    <li>• Photographs</li>
                    <li>• Books & magazines</li>
                    <li>• Artwork & paintings</li>
                    <li>• Film & negatives</li>
                    <li>• Important papers</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Stops yellowing and deterioration
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Clothing & Textiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Designer clothing</li>
                    <li>• Wedding dresses</li>
                    <li>• Furs & leather</li>
                    <li>• Vintage textiles</li>
                    <li>• Rugs & carpets</li>
                    <li>• Linens & fabrics</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Prevents mold, moths, fading
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Collectibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wine collections</li>
                    <li>• Vinyl records</li>
                    <li>• Comic books</li>
                    <li>• Trading cards</li>
                    <li>• Stamps & coins</li>
                    <li>• Memorabilia</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Maintains value and condition
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Business Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Inventory stock</li>
                    <li>• Medical supplies</li>
                    <li>• Pharmaceuticals</li>
                    <li>• Cosmetics</li>
                    <li>• Food samples</li>
                    <li>• Lab equipment</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Meets storage requirements
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Climate Control Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              How Our Climate Control System Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy flex items-center">
                  <Thermometer className="h-6 w-6 text-dubai-gold mr-2" />
                  Temperature Control
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Maintained at 20-22°C consistently</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Industrial HVAC systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Backup power generators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>24/7 monitoring systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy flex items-center">
                  <Droplets className="h-6 w-6 text-dubai-gold mr-2" />
                  Humidity Control
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Kept between 45-55% humidity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Dehumidification systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Moisture barriers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Regular air circulation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
              <CardHeader>
                <Fan className="h-10 w-10 text-dubai-gold mb-2" />
                <CardTitle className="text-white">Advanced Air Quality System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>HEPA air filtration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Dust particle removal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Fresh air exchange</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Odor prevention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>Pest deterrent environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                      <span>UV protection</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monitoring & Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              24/7 Monitoring & Maintenance
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Real-Time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Digital sensors throughout</li>
                    <li>• Instant alert systems</li>
                    <li>• Remote monitoring</li>
                    <li>• Automated adjustments</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Regular Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Weekly system checks</li>
                    <li>• Filter replacements</li>
                    <li>• Calibration testing</li>
                    <li>• Preventive servicing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-dubai-gold mb-2" />
                  <CardTitle>Backup Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Redundant HVAC units</li>
                    <li>• Emergency generators</li>
                    <li>• UPS power supply</li>
                    <li>• Fail-safe protocols</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-dubai-gold/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-dubai-navy">Climate Data Tracking</h3>
              <p className="text-gray-600 mb-3">
                Our advanced monitoring system tracks and records climate conditions 24/7:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                <li>• Temperature logs every 15 minutes</li>
                <li>• Humidity readings continuously</li>
                <li>• Air quality metrics hourly</li>
                <li>• Monthly climate reports available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Benefits of Climate-Controlled Storage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Protection Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Complete protection from Dubai's extreme weather</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Prevention of mold, mildew, and bacteria growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>No warping, cracking, or deterioration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Dust and sand particle filtration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-dubai-navy">Value Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Maintains item value and condition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Lower insurance premiums possible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Peace of mind for valuable possessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dubai-gold mr-2 mt-0.5" />
                    <span>Professional storage for business inventory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-dubai-navy">
              Climate-Controlled Storage Pricing
            </h2>
            
            <p className="text-gray-600 mb-8">
              Climate-controlled units cost slightly more than standard storage but provide invaluable 
              protection for your items. The small additional cost prevents thousands in potential damage.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Price Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unit size requirements</li>
                    <li>• Storage duration</li>
                    <li>• Access frequency needs</li>
                    <li>• Additional services</li>
                    <li>• Insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cost Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Climate control typically adds 15-25% to standard storage rates but consider:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Replacement cost of damaged items</li>
                    <li>• Sentimental value preservation</li>
                    <li>• Business inventory protection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Get a customized quote for climate-controlled storage based on your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                  <Link href="/get-quote">Get Climate Storage Quote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/storage-dubai/pricing-cost-guide">View Pricing Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dubai-navy to-dubai-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Protect Your Valuables from Dubai's Extreme Climate
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Don't risk damage to your important items. Our climate-controlled storage 
              provides year-round protection at an affordable price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-dubai-navy hover:bg-gray-100" asChild>
                <Link href="/get-quote">
                  Get Protected Storage <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="tel:+971505773388">
                  Call +971 50 577 3388
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                <a href="https://wa.me/971505773388">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            
            <div className="mt-8 space-x-4">
              <Link href="/self-storage-dubai" className="text-white/80 hover:text-white underline">
                ← Back to Self Storage
              </Link>
              <Link href="/self-storage-dubai/furniture-storage" className="text-white/80 hover:text-white underline">
                Furniture Storage →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}