import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, ShieldCheck, Truck, Clock, VideoIcon, Headphones, Star, Users, ArrowRight, Lock } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Vehicle Storage Dubai — Secure Car & Motorcycle Storage",
  description:
    "Secure vehicle storage in Dubai for cars, motorcycles, and classic vehicles. Climate-controlled, 24/7 security with CCTV monitoring. Call +971505773388 for quote.",
  keywords:
    "vehicle storage dubai, car storage dubai, motorcycle storage, classic car storage, secure vehicle storage dubai, indoor car storage",
  openGraph: {
    title: "Vehicle Storage Dubai | SafeStorage",
    description: "Secure vehicle storage with climate control and 24/7 security. Perfect for cars, motorcycles, and classic vehicles.",
    url: "https://safestorage.ae/storage-dubai/vehicle-storage",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/vehicle-storage",
  },
}

const features = [
  {
    icon: Lock,
    title: "Indoor Secure Parking",
    description: "Fully enclosed climate-controlled facility protecting from Dubai heat",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security & CCTV",
    description: "Round-the-clock surveillance and biometric access control",
  },
  {
    icon: VideoIcon,
    title: "Video Monitoring",
    description: "Live monitoring and recorded footage for complete peace of mind",
  },
  {
    icon: Clock,
    title: "Flexible Access",
    description: "Access your vehicle anytime with prior notification",
  },
  {
    icon: Car,
    title: "Battery Maintenance",
    description: "Optional battery maintenance service for long-term storage",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal consultant for all your vehicle storage needs",
  },
]

const vehicleTypes = [
  "Luxury & Sports Cars",
  "Classic & Vintage Vehicles",
  "Motorcycles & Bikes",
  "SUVs & 4x4s",
  "Seasonal Vehicles",
  "Fleet Vehicles",
]

export default function VehicleStoragePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dubai-navy to-dubai-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-dubai-pattern opacity-5"></div>
        <div className="container px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5 (487+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by Car Enthusiasts</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Vehicle Storage <span className="text-dubai-gold">Dubai</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Secure, climate-controlled indoor storage for your cars, motorcycles, and classic vehicles.
              Protect your investment from Dubai's extreme weather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-8 py-6"
                asChild
              >
                <Link href="/get-quote">
                  Get Your Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-white text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971505773388">Call: 050-577-3388</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Vehicle Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              We Store All Vehicle Types
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Whether it's a daily driver, luxury car, or vintage motorcycle, we have the perfect storage solution
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {vehicleTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <Car className="w-10 h-10 text-dubai-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-dubai-navy">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dubai-navy mb-4">
              Why Choose SafeStorage for Vehicles?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium facilities designed specifically to protect your valuable vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-100 hover:border-dubai-gold/30 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-dubai-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-dubai-gold" />
                </div>
                <h3 className="text-xl font-semibold text-dubai-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-dubai-navy text-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Store Your Vehicle Safely?
            </h2>
            <p className="text-white/80 mb-8">
              Get a customized quote for your vehicle storage needs. Flexible terms and premium security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white text-lg px-10 py-6"
                asChild
              >
                <Link href="/get-quote" className="group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black border-white hover:bg-gray-100 text-lg px-10 py-6"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Static rich-text content for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">Vehicle Storage Dubai — Indoor, Climate-Controlled &amp; Secure</h2>
          <p className="text-lg text-gray-700 mb-6">
            SafeStorage Dubai provides indoor, climate-controlled vehicle storage bays for cars, motorcycles,
            classic vehicles, boats, jet skis, and caravans. Our facility protects your vehicle from Dubai&apos;s
            extreme heat, dust storms, and humidity — conditions that can cause significant damage to paint,
            tyres, rubber seals, and electrical systems when a vehicle is left parked outdoors for extended periods.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why Dubai&apos;s Climate Demands Indoor Vehicle Storage</h3>
              <p className="text-gray-700 mb-3">
                Dubai summer temperatures regularly exceed 45°C, with direct sunlight pushing surface
                temperatures even higher. Prolonged exposure to this heat causes paint oxidation and fading,
                tyre degradation and cracking, battery failure, dashboard and interior plastics warping,
                and rubber seals drying out. UV radiation also degrades window tints, exterior trims, and
                convertible roof materials.
              </p>
              <p className="text-gray-700">
                Our indoor vehicle storage bays maintain a controlled environment at 20–25°C year-round.
                Your vehicle stays clean, cool, and protected from the elements at all times.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Who Uses Vehicle Storage in Dubai</h3>
              <p className="text-gray-700 mb-3">
                SafeStorage vehicle storage is used by a wide range of customers across Dubai:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Expatriates</strong> returning to their home country temporarily who need to store a car in Dubai</li>
                <li>• <strong>Classic car collectors</strong> who require secure, climate-controlled preservation</li>
                <li>• <strong>Seasonal vehicle owners</strong> storing motorcycles or sports cars during summer</li>
                <li>• <strong>Boat and jet ski owners</strong> storing watercraft between seasons</li>
                <li>• <strong>Businesses</strong> managing fleet vehicles not in current use</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Battery Maintenance &amp; Vehicle Care Services</h3>
            <p className="text-gray-700 mb-4">
              For vehicles stored for more than 30 days, SafeStorage offers optional battery maintenance
              services to keep your vehicle in ready-to-drive condition. Our battery tender service
              connects a smart trickle charger to your vehicle&apos;s battery to prevent discharge during
              long-term storage. We also offer basic vehicle checks including tyre pressure monitoring
              and periodic engine start services on request.
            </p>
            <p className="text-gray-700">
              When you are ready to collect your vehicle, simply call or WhatsApp us. We will ensure
              your vehicle is ready at the agreed collection time. For long-distance customers, we can
              also arrange transport of your vehicle to any Dubai address via our logistics partners.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Vehicle Storage Rates</h3>
            <p className="text-gray-700 mb-3">
              Vehicle storage at SafeStorage Dubai starts from <strong>12.6 AED / Sqft</strong> (VAT-inclusive)
              for standard cars and motorcycles, larger vehicles (SUVs, caravans, boats), and classic or
              high-value vehicles stored in premium enclosed bays with additional security features.
            </p>
            <p className="text-gray-700">
              All vehicle storage plans include 24/7 CCTV monitoring, indoor covered parking, climate
              control, and basic insurance coverage. Long-term storage (3+ months) qualifies for
              preferential rates. Contact us for a personalised quote based on your vehicle type and
              storage duration.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Vehicle &amp; Car Storage Dubai — Complete Guide</h2>
          <p className="text-lg text-gray-700 mb-8">
            Dubai&apos;s extreme climate, high vehicle ownership rates, and large expat population create a consistent and growing demand for professional vehicle storage. Whether you own a classic car that needs year-round protection, a motorcycle you only ride in winter, or a daily driver you need to store during an extended trip abroad, SafeStorage provides secure, climate-controlled indoor vehicle storage bays tailored to every situation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">The Impact of Dubai&apos;s Summer Heat on Parked Vehicles</h3>
              <p className="text-gray-700 mb-4">
                Dubai&apos;s summer climate is hostile to parked vehicles in ways that many owners underestimate. Between May and September, outdoor temperatures regularly exceed 45°C, with direct sunlight pushing surface temperatures on exposed metal and glass to 70–80°C. Even underground car parks reach temperatures of 35–40°C during peak summer months.
              </p>
              <p className="text-gray-700">
                The cumulative effects of this heat exposure on a vehicle stored without climate control include paint oxidation and fading (particularly on dark-coloured vehicles), tyre sidewall cracking and degradation, battery discharge and permanent capacity loss, dashboard plastics warping and cracking, rubber door seals and window gaskets drying out and splitting, leather interior fading and cracking, and adhesive failures on window tints and exterior trims. SafeStorage&apos;s indoor bays maintain 18–22°C year-round, completely eliminating these risks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Expat Vehicle Storage — Storing a Car While Abroad</h3>
              <p className="text-gray-700 mb-4">
                Dubai has a large and highly mobile expat population. Many residents own vehicles registered in the UAE and face the challenge of what to do with their car when returning home for an extended period — whether for a summer holiday, home leave, maternity/paternity leave, or a temporary relocation assignment. Leaving a car parked at an apartment building or in a street parking bay for several months exposes it to all the climate risks described above, as well as the risk of fines for overstaying parking limits or unregistered vehicles.
              </p>
              <p className="text-gray-700">
                SafeStorage provides expats with a simple, affordable solution. Before departing Dubai, you drive or arrange transport of your vehicle to our facility. We store it in a climate-controlled indoor bay, maintain the battery with our trickle charger service, and periodically check tyre pressure. When you return to Dubai, your vehicle is ready to drive, in the same condition as when you left it. Many expat customers also ask us to carry out a basic health check (fluid levels, tyre condition) before collection so they can drive away with confidence.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Classic &amp; Luxury Car Storage in Dubai</h3>
            <p className="text-gray-700 mb-4">
              Classic, vintage, and luxury vehicles require a higher standard of care than standard daily drivers. These vehicles are often irreplaceable — either because they are rare collector&apos;s items, have personal sentimental value, or represent significant financial investments. SafeStorage offers premium enclosed storage bays specifically designed for high-value vehicles.
            </p>
            <p className="text-gray-700 mb-4">
              Our premium vehicle bays feature individual access with additional security layers, wheel dollies for easy positioning without rolling the vehicle, trickle charger connections, drip trays, and regular condition checks by our team. We can also coordinate with specialist classic car mechanics in Dubai for any maintenance work required during the storage period.
            </p>
            <p className="text-gray-700">
              For classic car owners, we recommend comprehensive insurance coverage for the full stored value of the vehicle. SafeStorage&apos;s basic insurance covers up to AED 5,000, but vehicles worth AED 50,000 to several million require extended coverage. Our team can connect you with specialist classic car insurance providers in the UAE.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Battery Maintenance During Long-Term Vehicle Storage</h3>
            <p className="text-gray-700 mb-4">
              One of the most common problems encountered when retrieving a vehicle from storage is a flat or damaged battery. A standard lead-acid car battery will self-discharge at a rate of 1–25% per month even when the vehicle is not in use. After 3–6 months of storage without any maintenance, most batteries will be too discharged to start the vehicle, and in many cases the deep discharge will have permanently reduced the battery&apos;s capacity.
            </p>
            <p className="text-gray-700">
              SafeStorage&apos;s optional battery maintenance service uses smart trickle chargers (also called battery tenders or maintainers) that monitor the battery state and deliver a low-level charge to keep it at optimal levels without overcharging. These devices are left connected throughout the storage period. When you collect your vehicle, the battery is fully charged and in good health. This service costs a small additional monthly fee and can save you the cost of a battery replacement, which typically runs AED 300–800 in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Frequently Asked Questions — Vehicle Storage Dubai</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">1. What types of vehicles does SafeStorage accommodate?</h3>
              <p className="text-gray-700">SafeStorage stores a wide range of vehicle types including standard cars and sedans, SUVs and 4x4s, sports cars and supercars, classic and vintage vehicles, motorcycles and scooters, electric vehicles (with appropriate charging arrangements), caravans and campervans, boats and jet skis (drained and secured), quad bikes and ATVs, and commercial light vehicles. For oversized or unusual vehicles, contact us to confirm bay dimensions and availability before booking.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">2. Is my vehicle insured while in storage at SafeStorage?</h3>
              <p className="text-gray-700">Basic insurance coverage up to AED 5,000 is included with all vehicle storage plans. This covers fire, theft, and natural disasters while the vehicle is in our care. However, this coverage is insufficient for most standard cars, let alone luxury or classic vehicles. We strongly recommend that all vehicle owners maintain their own comprehensive UAE motor insurance policy throughout the storage period, or purchase additional coverage through our specialist insurance partners. Inform your insurance provider that the vehicle is in professional off-site storage, as this may actually reduce your premium.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">3. Do I need to deregister my vehicle in Dubai before storing it long-term?</h3>
              <p className="text-gray-700">Dubai RTA requires vehicles to be registered and insured at all times while on public roads. While your vehicle is in storage at SafeStorage, it is off public roads, so you may be able to place your registration on hold depending on your circumstances. However, deregistration and re-registration involves costs and administrative work that may not be worthwhile for storage periods of less than 6–12 months. We recommend consulting with a UAE motor insurance provider and the RTA before making any changes to your vehicle&apos;s registration status. Our team can provide general guidance on the process.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">4. How do I prepare my vehicle for long-term storage?</h3>
              <p className="text-gray-700">Proper preparation significantly reduces the risk of damage during storage. We recommend a full service before storage (oil change, fluid checks), filling the fuel tank to prevent moisture condensation in the tank, cleaning the exterior and interior thoroughly to prevent paint damage from dust and bird droppings, pumping tyres to the maximum recommended pressure to slow deflation, and applying a good quality wax to the paintwork. Disconnect the negative battery terminal if not using our trickle charger service. Do not apply the handbrake for long periods on older vehicles — use wheel chocks instead. Our team can run through a pre-storage checklist with you at drop-off.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">5. Can I store my motorcycle at SafeStorage during summer in Dubai?</h3>
              <p className="text-gray-700">Absolutely. Motorcycle storage during Dubai summer is one of our most popular services. The intense heat and UV exposure of Dubai summer can cause rubber components (tyres, fork seals, gaskets) to crack and degrade rapidly when a bike is stored outdoors or in a non-climate-controlled space. Our climate-controlled motorcycle bays maintain 18–22°C and protect your bike from heat, dust, and moisture damage. Motorcycles are stored on stands (if available) or with front and rear paddock stands provided by us. We also offer battery maintenance and periodic tyre pressure checks throughout the summer storage period.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">6. Can I access my stored vehicle at any time?</h3>
              <p className="text-gray-700">Vehicle access is available during our standard operating hours (Monday–Saturday 8 AM–8 PM, Sunday 10 AM–6 PM). We require a minimum of 2 hours&apos; advance notice for vehicle access so our team can prepare the bay and ensure safe entry and exit. For vehicles that need to be driven out, please ensure your insurance is active and your registration is current. For urgent access outside standard hours, contact your account manager — we will do our best to accommodate emergency access requests where operationally possible.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">7. What security measures protect stored vehicles?</h3>
              <p className="text-gray-700">Vehicle storage security at SafeStorage operates on multiple layers. The facility perimeter is secured with anti-vehicle barriers and monitored fencing. Entry requires biometric authentication — only registered account holders and authorised personnel can access the vehicle storage area. The entire facility is covered by 24/7 HD CCTV with live monitoring and 90-day recorded footage retention. Individual vehicle bays in our premium section have additional padlock points. On-site security personnel conduct regular patrols throughout the facility.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">8. How does indoor climate-controlled storage compare to a covered car park?</h3>
              <p className="text-gray-700">A covered car park provides shade from direct sunlight but does not control temperature or humidity. Car parks in Dubai buildings typically reach 35–42°C during summer even when covered, which is still damaging to vehicle components over extended periods. SafeStorage&apos;s indoor vehicle storage bays are fully enclosed within an air-conditioned building that maintains 18–22°C year-round. This is the equivalent of parking your car in a continuously air-conditioned room — a standard that no covered car park can match. For vehicles being stored for more than 2–3 months during summer, the difference in condition upon retrieval is significant.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">9. Can SafeStorage arrange transport of my vehicle to and from the facility?</h3>
              <p className="text-gray-700">Yes. Through our logistics partners, we can arrange professional vehicle transport (flatbed transport for sports and low-profile cars, enclosed transport for classic vehicles) to collect your vehicle from any Dubai location and deliver it to our facility. On retrieval, we can arrange transport back to your address or any UAE location. Enclosed transport is recommended for all classic, vintage, and high-value vehicles to prevent road debris damage during transit. Contact us for transport pricing based on your vehicle type and collection location.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">10. How much does vehicle storage in Dubai cost?</h3>
              <p className="text-gray-700">Vehicle storage at SafeStorage starts from 12.6 AED / Sqft (VAT-inclusive) — whether you are storing standard cars and motorcycles in our climate-controlled indoor bays, SUVs and larger vehicles, or classic vehicles requiring premium enclosed bay storage with additional security features. Boats, jet skis, and caravans are priced individually based on dimensions. All plans include 24/7 CCTV monitoring, climate control, and basic insurance. Long-term plans (3+ months) qualify for preferential rates. Call +971505773388 or get a quote online for precise pricing.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">11. Can I perform maintenance on my vehicle while it is in storage?</h3>
              <p className="text-gray-700">For basic maintenance that does not involve fluids, chemicals, or power tools, we can accommodate limited work in the vehicle bay by appointment. For more extensive maintenance, the vehicle would need to be removed to a workshop. SafeStorage can recommend trusted specialist mechanics in Dubai for different vehicle categories (classic cars, European luxury vehicles, American muscle cars, motorcycles). We can also coordinate with your preferred mechanic to arrange collection and return of the vehicle to our facility.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">12. What is the minimum storage period for vehicles?</h3>
              <p className="text-gray-700">SafeStorage offers month-to-month vehicle storage with a 1-month minimum. There is no long-term commitment required. You can store for 1 month, 1 year, or anything in between — and cancel with 30 days&apos; notice. For seasonal motorcycle storage (typically April to September), a 6-month plan provides better value and our team can coordinate a convenient drop-off before summer and collection at the start of riding season.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">13. Can I store a fleet of company vehicles at SafeStorage?</h3>
              <p className="text-gray-700">Yes. We work with several companies in Dubai that need temporary storage for fleet vehicles that are not currently in active use — either due to seasonal demand fluctuations, contract gaps, vehicle replacement cycles, or business restructuring. Fleet storage accounts receive dedicated bay allocations, consolidated monthly billing, and a designated account manager. Volume discounts apply for fleets of 5 or more vehicles. We can also manage fleet vehicle checks (tyre pressure, battery condition) on a scheduled basis throughout the storage period.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">14. How do I know my vehicle&apos;s condition is being maintained during storage?</h3>
              <p className="text-gray-700">SafeStorage conducts monthly condition checks on all stored vehicles and sends a brief report to the account holder. The check covers exterior condition (paint, glass, tyres), interior condition (no moisture ingress, no pest activity), battery status (if on trickle charge service), and tyre pressure. Photographs are taken at each check and stored in your account file. If any concerns are noted, your account manager will contact you immediately to discuss options. This monitoring service gives vehicle owners confidence that their asset is being actively looked after, not simply parked and forgotten.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">15. Is vehicle storage in Dubai a good option for expats returning to their home country?</h3>
              <p className="text-gray-700">Vehicle storage is one of the most popular services among Dubai expats who need to leave the city for an extended period. The alternatives — selling the vehicle and repurchasing on return, gifting it to a friend or colleague, or leaving it in a residential car park — all carry risks or costs. SafeStorage provides a secure, professionally managed solution at a predictable monthly cost. Many expat customers have used our service repeatedly over several years for summer trips home, secondments, and temporary relocations. We make the whole process easy, from vehicle drop-off coordination to condition reporting while you are away.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
