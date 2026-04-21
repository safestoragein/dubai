import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Shield, Fan, ArrowRight, CheckCircle2, AlertCircle, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Climate Controlled Storage Dubai — Beat the Heat",
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
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
                  <Link href="/pricing">View Pricing Guide</Link>
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
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="tel:+971505773388">
                  Call +971 50 577 3388
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dubai-navy text-center mb-10">Climate-Controlled Storage — Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What temperature is maintained in climate-controlled storage units?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage Dubai&apos;s climate-controlled units maintain a consistent temperature of 20–22°C year-round, regardless of outdoor conditions. This stable temperature range is ideal for virtually all stored items — furniture, electronics, clothing, documents, artwork, and collectibles. The temperature does not fluctuate with the seasons, meaning your belongings experience the same environment in January and in August, even as outdoor temperatures swing from 15°C in winter to 48°C in summer. Industrial HVAC systems with backup power generators ensure the temperature target is maintained continuously, with automated alerts triggered if any deviation occurs.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Why is climate control essential for storage in Dubai specifically?</h3>
              <p className="text-gray-700 leading-relaxed">Dubai has one of the world&apos;s most challenging storage climates. Summer temperatures regularly exceed 45°C outdoors, and non-climate-controlled internal spaces — including garages, shipping containers, and budget storage units without air conditioning — can reach 60°C or higher internally. At these temperatures, wood warps and cracks, leather dries and splits, electronics fail due to heat damage to circuits and batteries, foam deteriorates, and fabrics fade and weaken. Even a single Dubai summer can cause irreversible damage to furniture and household items stored without climate control. In most other countries, standard storage is adequate; in Dubai, climate control is the minimum responsible standard.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What items benefit most from climate-controlled storage?</h3>
              <p className="text-gray-700 leading-relaxed">Almost every category of household and personal item benefits from climate-controlled storage in Dubai. The items that benefit most significantly include wooden furniture (where heat and humidity swings cause warping, cracking, and joint failure), electronics and computers (where heat degrades circuits, batteries, and screens), leather goods (which dry and crack in heat), artwork and photographs (which fade and warp), musical instruments (where wood expansion destroys tuning and structure), wine and spirits collections (where heat permanently alters flavour), documents and books (which become brittle and yellow), clothing and textiles (where moisture causes mildew and heat causes fading), and vinyl records (which warp at temperatures above 40°C).</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How does humidity control work in the storage units?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage facilities use industrial dehumidification systems integrated with the HVAC system to maintain relative humidity between 45–55% in all climate-controlled units. This humidity range is considered optimal for most materials — high enough to prevent materials from drying out and cracking, and low enough to prevent moisture accumulation, mould growth, and corrosion. Humidity sensors throughout the facility provide continuous readings, and the dehumidification system adjusts automatically to maintain the target range. Dubai&apos;s coastal areas experience humidity spikes of 80–90% during summer, making active dehumidification essential — without it, fabric absorbs moisture, metal corrodes, and wooden furniture swells and warps.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Is climate control included in the storage price?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. All SafeStorage units are climate-controlled, and this is included as standard in all monthly storage prices. There is no option for non-climate-controlled storage because we believe it is not an acceptable standard for Dubai conditions. The climate-controlled cost is fully incorporated into quoted monthly rates — you will not see a separate climate control add-on charge. This approach ensures every customer&apos;s belongings are protected without needing to make a specific upgrade decision. Our prices already reflect the cost of providing this standard of protection as the baseline for every customer.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What happens during power outages — is climate control maintained?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage facilities are equipped with backup power generators and UPS (uninterruptible power supply) systems specifically to maintain climate control during power outages. In the event of a grid power failure, the backup systems activate automatically within seconds, ensuring HVAC and dehumidification continue without interruption. Dubai&apos;s power grid is generally very reliable, but the backup systems provide complete protection against the occasional brief outage that could otherwise allow temperatures to rise quickly in a sealed storage facility. Our facility management team receives automated alerts for any power or climate system issues and responds immediately to any deviation from the target conditions.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How is temperature monitored 24/7?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage uses a network of digital temperature and humidity sensors distributed throughout the facility — in corridors, storage areas, and individual unit zones. These sensors transmit readings continuously to our facility management system, which logs data and triggers automated alerts if any reading deviates from the target range. Temperature is logged every 15 minutes, providing a continuous record of conditions throughout the facility. Our facility management team receives real-time notifications of any deviation and can respond immediately. Customers can request a copy of their unit&apos;s temperature log for insurance or peace-of-mind purposes — we retain rolling 12-month data records.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Are there different climate zones within the storage facility?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage maintains a consistent climate throughout the entire facility, with all storage areas held at the same temperature and humidity target. There are no designated &apos;better&apos; or &apos;worse&apos; zones based on location within the building. Some facilities do distinguish between outer walls and central units in terms of thermal efficiency — all of our units are designed to minimise heat transmission from external walls, and units near external walls receive the same HVAC coverage as central units. If you have items that require a specific temperature range outside the standard 20–22°C (for example, certain wine collections or specialised business inventory), please discuss this with us — we may be able to accommodate specialist temperature requirements.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What humidity percentage is maintained in the storage units?</h3>
              <p className="text-gray-700 leading-relaxed">Relative humidity in SafeStorage units is maintained between 45–55% year-round. This range is widely recognised as optimal for storing the broadest range of materials, including wood, fabric, leather, paper, metal, and electronics. Below 40% humidity, wood and leather can dry out, crack, and become brittle. Above 60%, moisture accumulation encourages mould, mildew, metal corrosion, and wood swelling. The 45–55% range sits comfortably in the middle, protecting all materials without favouring one category at the expense of another. Dubai&apos;s outdoor humidity ranges from below 20% in dry winter months to above 80% on coastal summer days — active humidity control is therefore essential throughout the year.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How does Dubai&apos;s summer heat affect uncontrolled storage?</h3>
              <p className="text-gray-700 leading-relaxed">Non-climate-controlled storage in Dubai during summer is genuinely dangerous for most household items. Outdoor temperatures reaching 45–48°C translate to internal temperatures of 55–65°C in sealed, non-air-conditioned spaces. At 55°C, the foam in sofas and mattresses begins to permanently deform; wood expands and joints fail; leather completely dries and splits; battery-powered electronics experience accelerated battery degradation; candles and wax items melt; plastics begin to deform; and synthetic fabric colours fade rapidly. A single Dubai summer (June to September, approximately 4 months) can cause more damage to uncontrolled stored items than years of careful use. This is why we consider climate control the non-negotiable minimum standard for responsible storage in Dubai.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Can I verify the temperature of my storage unit?</h3>
              <p className="text-gray-700 leading-relaxed">Yes. You can request a current temperature and humidity reading for your storage zone at any time by contacting our team. We can also provide a historical temperature log showing conditions over your storage period, which is particularly useful for insurance purposes or for business customers required to demonstrate temperature-controlled storage compliance. When you visit your unit in person, our facility staff can show you the current sensor readings for your area. Some customers who are storing highly sensitive items — wine, pharmaceuticals, or electronics requiring precise conditions — request monthly climate summary reports, which we can provide on a scheduled basis.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What items are commonly damaged without climate-controlled storage in Dubai?</h3>
              <p className="text-gray-700 leading-relaxed">The most commonly reported damage from non-climate-controlled Dubai storage includes warped and cracked wooden furniture (dining tables, wardrobes, bed frames), mouldy or mildewed upholstery and mattresses, cracked and faded leather sofas and chairs, deteriorated electronics with failed batteries and screens, artwork and photographs with adhesive failure and colour fading, books and paper documents that have yellowed and become brittle, vinyl records that have warped into unusable shapes, and rubber and silicone seals on appliances that have perished. In most of these cases, the damage is irreversible — items that could have been stored safely for years in a climate-controlled environment are permanently degraded after a single summer in an uncontrolled space.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">Is climate-controlled storage more expensive than standard storage?</h3>
              <p className="text-gray-700 leading-relaxed">At SafeStorage Dubai, climate control is standard across all units — we do not offer non-climate-controlled storage because we believe it is not appropriate for Dubai conditions. Our prices are inclusive of climate control and reflect this as the baseline standard. In the broader market, climate-controlled storage typically costs 15–25% more than non-climate-controlled alternatives. However, when you factor in the cost of replacing damaged furniture, electronics, or clothing after a Dubai summer in uncontrolled storage, the additional cost of climate control is almost always financially justified. For items of any significant value, climate control is not an optional upgrade — it is essential damage protection in this specific climate.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">How does climate-controlled storage compare to leaving items at home?</h3>
              <p className="text-gray-700 leading-relaxed">Leaving items at home in a Dubai apartment during absence (for example, during summer travel) presents its own risks. If the apartment&apos;s AC is switched off to save electricity, internal temperatures can reach 40–50°C in summer, creating similar conditions to non-climate-controlled storage. Even with AC running, unoccupied apartments are at risk from power interruptions, water leaks, and pest entry. SafeStorage&apos;s professionally managed, continuously monitored climate-controlled environment provides more reliable protection than an unoccupied residential apartment. For expats leaving Dubai for 2–3+ months of summer travel, professional storage is often safer and more cost-effective than maintaining a UAE residence solely to house belongings.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-dubai-navy mb-2">What technology controls the climate environment at SafeStorage?</h3>
              <p className="text-gray-700 leading-relaxed">SafeStorage facilities use industrial-grade HVAC systems with multiple redundant units, ensuring that the failure of a single component does not affect the overall climate. Integrated dehumidification systems work alongside the cooling system to manage humidity independently of temperature. HEPA air filtration systems remove dust particles, including Dubai&apos;s fine sand particles from seasonal shamal winds, from the internal air. UV protection in the facility design prevents solar heat gain through any glazed surfaces. The entire system is controlled by a building management system (BMS) that monitors all sensors, manages automated responses to deviations, logs all data, and alerts the facility team to any issues. Backup generators and UPS systems ensure climate control continues uninterrupted during power outages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Climate-Controlled Storage Dubai — Why It Matters</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dubai&apos;s climate presents unique challenges for storage. Summer temperatures regularly exceed 45°C
            outdoors, and non-climate-controlled spaces (garages, shipping containers, non-HVAC storage units)
            can reach 60°C+ internally. This extreme heat causes irreversible damage to almost every category
            of stored item within weeks. Climate-controlled storage is not a luxury in Dubai — it is essential.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Items That Require Climate Control</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Wooden furniture:</strong> Extreme heat causes warping, cracking, and joint failure</li>
                <li>• <strong>Electronics:</strong> Heat degrades batteries, circuit boards, and screen panels</li>
                <li>• <strong>Leather and fabric:</strong> Drying, cracking, and colour fading in high temperatures</li>
                <li>• <strong>Artwork and photographs:</strong> Heat causes fading, warping, and adhesive failure</li>
                <li>• <strong>Musical instruments:</strong> Wood expansion/contraction damages tuning and structure</li>
                <li>• <strong>Wine and spirits:</strong> Heat permanently alters flavour and quality</li>
                <li>• <strong>Documents and books:</strong> Paper becomes brittle and yellows in heat and humidity</li>
                <li>• <strong>Clothing:</strong> Synthetic fabrics melt or degrade; natural fibres attract moisture</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">SafeStorage Climate Control Standards</h3>
              <p className="text-gray-700 mb-3">
                All SafeStorage units maintain a consistent 20–25°C temperature and 45–55% relative humidity
                using industrial HVAC systems with multiple redundancy levels. Temperature and humidity sensors
                monitor every unit continuously, and automated alerts notify our facility management team
                of any deviation from the target range.
              </p>
              <p className="text-gray-700">
                Our climate control system runs 24/7, 365 days a year — including during Dubai&apos;s most
                extreme summer months. Power backup systems ensure climate control is maintained even
                during grid outages. This level of reliability is why SafeStorage is trusted by businesses
                storing sensitive equipment, collectors storing art and wine, and expats storing irreplaceable
                personal belongings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}