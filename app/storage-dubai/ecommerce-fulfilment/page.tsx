import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ShieldCheck, Truck, Clock, Package, Headphones, Star, Users, ArrowRight, Boxes, Zap } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "E-commerce Storage & Fulfilment Dubai",
  description:
    "E-commerce storage and fulfilment solutions in Dubai. Inventory storage, order fulfilment, and same-day pickup & delivery for online sellers. Call +971505773388.",
  keywords:
    "ecommerce storage dubai, fulfilment center dubai, inventory storage, order fulfilment dubai, online seller storage, warehouse storage dubai",
  openGraph: {
    title: "E-commerce Storage & Fulfilment Dubai | SafeStorage",
    description: "Complete e-commerce storage and fulfilment solutions. Scale your online business with flexible storage.",
    url: "https://safestorage.ae/storage-dubai/ecommerce-fulfilment",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "https://safestorage.ae/storage-dubai/ecommerce-fulfilment",
  },
}

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Secure storage for your products with organized inventory tracking",
  },
  {
    icon: Truck,
    title: "Fast Pickup & Delivery",
    description: "Same-day pickup and delivery service for your orders",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Flexible space that grows with your business needs",
  },
  {
    icon: Boxes,
    title: "Bulk Storage",
    description: "Store large quantities of inventory with easy access",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for your e-commerce needs",
  },
]

const benefits = [
  "No upfront warehouse investment required",
  "Pay only for the space you use",
  "Secure, dedicated storage protects inventory",
  "Door-to-Door pickup for order fulfilment",
  "Perfect for Amazon, Noon, and other marketplace sellers",
  "Flexible terms - scale up or down anytime",
]

export default function EcommerceFulfilmentPage() {
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
                <span className="text-white text-sm font-medium">4.9/5 (6700+ Reviews Globally)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-dubai-gold" />
                <span className="text-white text-sm font-medium">Trusted by E-commerce Sellers</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              E-commerce Storage & <span className="text-dubai-gold">Fulfilment</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Flexible storage and fulfilment solutions for online sellers in Dubai. Scale your business
              without the overhead of a warehouse.
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dubai-navy mb-6">
              Perfect for Online Sellers
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Whether you sell on Amazon, Noon, Instagram, or your own website, we have the storage solution
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 flex items-start hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingBag className="w-6 h-6 text-dubai-gold mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
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
              E-commerce Storage Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your online business smoothly
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
              Ready to Scale Your E-commerce Business?
            </h2>
            <p className="text-white/80 mb-8">
              Get flexible storage that grows with your business. Start today with no long-term commitments.
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
          <h2 className="text-3xl font-bold text-[#0A2463] mb-6">E-commerce Storage &amp; Fulfilment Solutions in Dubai</h2>
          <p className="text-lg text-gray-700 mb-6">
            Running an e-commerce business in Dubai requires fast, flexible, and reliable storage and fulfilment
            infrastructure. SafeStorage provides purpose-built e-commerce storage solutions that allow online
            sellers — from solo entrepreneurs to established brands — to store inventory, manage stock, and
            fulfil orders without the overhead of a traditional warehouse lease.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Why E-commerce Sellers Choose SafeStorage</h3>
              <p className="text-gray-700 mb-3">
                Traditional warehouses in Dubai require long-term lease commitments, significant upfront capital,
                and fixed space regardless of seasonal demand fluctuations. SafeStorage eliminates all of these
                constraints. Our e-commerce storage model lets you pay for exactly the space you use each month,
                scale up during Ramadan, back-to-school, or Black Friday sales periods, and reduce again in quieter months.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Order Fulfilment Services</h3>
              <p className="text-gray-700 mb-3">
                Beyond simple storage, SafeStorage supports e-commerce sellers with order fulfilment services.
                We can receive stock shipments directly at our facility, process pick-and-pack orders, and
                coordinate same-day or next-day delivery across Dubai and the UAE. This allows sellers on
                Amazon UAE, Noon, Carrefour Marketplace, and Shopify to offer faster delivery times without
                managing their own logistics team.
              </p>
              <p className="text-gray-700">
                Our dedicated e-commerce account managers understand the pressure of marketplace SLAs and
                will work with your team to ensure inventory is always available, orders are processed on time,
                and returns are handled efficiently.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Product Categories We Store for E-commerce Sellers</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700 text-sm">
              <ul className="space-y-1">
                <li>• Electronics and gadgets</li>
                <li>• Mobile phones and accessories</li>
                <li>• Computers and peripherals</li>
                <li>• Smart home devices</li>
              </ul>
              <ul className="space-y-1">
                <li>• Fashion and apparel</li>
                <li>• Shoes and bags</li>
                <li>• Beauty and cosmetics</li>
                <li>• Health supplements</li>
              </ul>
              <ul className="space-y-1">
                <li>• Home décor and furniture</li>
                <li>• Sports equipment</li>
                <li>• Baby products</li>
                <li>• Books and stationery</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Getting Started with E-commerce Storage in Dubai</h3>
            <p className="text-gray-700 mb-4">
              Starting your e-commerce storage arrangement with SafeStorage is straightforward. Contact our
              team with details about your inventory volume, product types, and fulfilment requirements. We
              will provide a tailored quote with transparent monthly pricing — no setup fees, no hidden charges.
            </p>
            <p className="text-gray-700">
              Most e-commerce sellers are operational within 24–48 hours of signing up. Our team handles
              the initial stock intake, organises your inventory in our system, and provides you with access
              to our simple online inventory management portal so you always know exactly what stock you have
              and where it is located.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Complete Guide to E-Commerce Storage &amp; Fulfilment in Dubai</h2>
          <p className="text-lg text-gray-700 mb-8">
            The UAE e-commerce market is one of the fastest-growing in the Middle East, with annual growth rates consistently above 20%. Dubai is the regional hub for cross-border online trade, with sellers shipping to Saudi Arabia, Kuwait, Bahrain, Qatar, and beyond. For any seller operating at scale in this market, having reliable storage and fulfilment infrastructure is not optional — it is the backbone of a competitive operation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">How E-Commerce Sellers Use SafeStorage</h3>
              <p className="text-gray-700 mb-4">
                E-commerce sellers use SafeStorage in several different ways depending on their business model. Amazon.ae and Noon sellers often use our facility as their primary inventory holding location, receiving stock from manufacturers or importers at our warehouse, then dispatching orders through their preferred courier partners. This avoids the cost and complexity of maintaining a separate warehouse or running a business from a residential apartment.
              </p>
              <p className="text-gray-700">
                Instagram and social media sellers — particularly in fashion, beauty, and home décor categories — use SafeStorage as a flexible overflow solution. During peak promotional periods or influencer campaigns when order volumes spike unexpectedly, having a secure storage unit with same-day access ensures they can fulfil orders without delays. The ability to scale storage space up or down on a monthly basis makes SafeStorage significantly more cost-effective than committing to a fixed warehouse lease.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0A2463] mb-3">Inventory Management for Online Sellers</h3>
              <p className="text-gray-700 mb-4">
                Effective inventory management is one of the biggest operational challenges for growing e-commerce businesses. Overstocking ties up working capital, while understocking results in missed sales and negative customer reviews on marketplaces. SafeStorage&apos;s inventory system gives sellers real-time visibility of their stock levels, enabling better purchasing decisions and reducing the risk of either scenario.
              </p>
              <p className="text-gray-700">
                Our team can also manage stock rotation — ensuring older inventory is picked first (FIFO method), flagging slow-moving items, and alerting sellers when stock falls below reorder thresholds. This level of inventory support is typically only available through full 3PL (third-party logistics) providers, but SafeStorage offers it within a flexible self-storage framework at a fraction of the cost.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Pick-and-Pack Fulfilment Services Explained</h3>
            <p className="text-gray-700 mb-4">
              Pick-and-pack is the process of selecting individual items from stored inventory, packing them into appropriate boxes or mailers, attaching shipping labels, and handing them over to courier partners for last-mile delivery. For e-commerce sellers, this is often the most time-consuming and labour-intensive part of the operation — and the part that breaks down first as order volumes grow.
            </p>
            <p className="text-gray-700 mb-4">
              SafeStorage&apos;s pick-and-pack service handles this entire workflow. When an order is received on your marketplace or website, you (or your system via API integration) send us the order details. Our team picks the items from your inventory, packs them according to your brand guidelines (custom packaging, thank-you cards, tissue paper, stickers), attaches the courier label, and dispatches the parcel. Tracking information is shared with you and your customer.
            </p>
            <p className="text-gray-700">
              This service is particularly valuable for sellers who want to maintain a high-quality unboxing experience without investing in a dedicated packing team. We support all major UAE couriers including Aramex, DHL, FedEx, Emirates Post, and Fetchr, as well as same-day delivery partners for Dubai-based orders.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-[#0A2463] mb-4">Monthly Billing &amp; Transparent Pricing</h3>
            <p className="text-gray-700 mb-4">
              One of the most important advantages of SafeStorage over traditional warehousing is our transparent monthly billing model. There are no setup fees, no minimum commitment periods, and no surprise charges. You receive a single monthly invoice covering your storage space, any pick-and-pack orders processed, and any additional services used.
            </p>
            <p className="text-gray-700">
              Storage for e-commerce sellers starts from 12.60 AED / sqft (VAT-inclusive), whether you are a small seller (fewer than 500 SKUs, low-volume orders) using a medium storage unit or a high-volume seller with an extensive SKU catalogue and multiple daily orders. All pricing is fixed monthly — no per-pick charges or variable rates that make cost forecasting difficult. Contact our team at +971505773388 for a quote based on your specific product mix and order volume.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A2463] mb-8">Frequently Asked Questions — E-Commerce Storage &amp; Fulfilment Dubai</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">1. Can I use SafeStorage to fulfil orders on Amazon UAE or Noon?</h3>
              <p className="text-gray-700">Yes. Many of our customers are active sellers on Amazon.ae, Noon, and Carrefour Marketplace. You can store your inventory at our facility and we will coordinate with your preferred courier partners to fulfil orders within your marketplace SLA. We also support FBN (Fulfilled by Noon) stock preparation, including labelling, bundling, and quality checks before dispatch to Noon&apos;s fulfilment centres.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">2. What is the minimum amount of inventory I can store?</h3>
              <p className="text-gray-700">There is no strict minimum inventory requirement. We work with solo entrepreneurs who may have just 50–100 units of a single product as well as established brands storing thousands of SKUs. Our small storage units (25–50 sq ft) are ideal for micro-sellers, while larger units accommodate full product catalogues. Pricing scales with the space you actually use.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">3. What access hours do I have to my inventory?</h3>
              <p className="text-gray-700">Standard access hours are Monday to Saturday, 8 AM to 8 PM, and Sunday 10 AM to 6 PM. E-commerce business account holders can arrange extended or 24-hour access packages for additional flexibility. Our pick-and-pack team processes orders during working hours. For urgent same-day orders received before 12 PM, we can ensure same-day dispatch. Contact your account manager to discuss access requirements specific to your business.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">4. Can SafeStorage receive stock deliveries from my suppliers directly?</h3>
              <p className="text-gray-700">Yes. We accept inbound stock deliveries from any supplier, importer, or freight forwarder. Simply give your suppliers our facility address and notify our team of the expected delivery. We receive and verify the stock against your purchase order, photograph any discrepancies or damage, and update your inventory record. This service is particularly useful for sellers who source products from China, India, or Turkey via air or sea freight.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">5. How does the UAE e-commerce market compare to other regions?</h3>
              <p className="text-gray-700">The UAE has one of the highest e-commerce penetration rates in the Middle East and North Africa region. Dubai is home to a large, affluent, tech-savvy population with very high smartphone penetration and strong preference for fast delivery. Average order values are significantly higher than in South Asian or Southeast Asian markets. This makes Dubai an attractive market for premium and mid-range product categories, and it explains why so many international brands use Dubai as their regional e-commerce base for Gulf expansion.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">6. How do I track my inventory levels?</h3>
              <p className="text-gray-700">SafeStorage provides an online inventory portal where you can view real-time stock levels, see recent inbound and outbound activity, and request retrievals or additional storage space. You can also request regular stock reports via email or WhatsApp. For sellers using Shopify, WooCommerce, or other e-commerce platforms, our team can discuss integration options to keep your online stock count automatically in sync with physical inventory.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">7. What happens during peak sales periods like Ramadan or White Friday?</h3>
              <p className="text-gray-700">Peak sales periods such as Ramadan, White Friday (Black Friday in the UAE), Dubai Shopping Festival, and back-to-school season can multiply order volumes 3–5 times above normal. SafeStorage supports sellers through these periods by allowing temporary storage capacity increases, extending team working hours for pick-and-pack operations, and prioritising dispatch of high-volume accounts. We recommend notifying your account manager at least 2 weeks before expected peak periods to ensure adequate space and staffing.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">8. Can SafeStorage handle returns processing for my e-commerce business?</h3>
              <p className="text-gray-700">Yes. Returns management is an important part of any e-commerce operation, and poor handling of returns is a common cause of marketplace account penalties. SafeStorage can receive returned items, inspect them against your quality standards, photograph any damage, segregate resalable and non-resalable stock, and restock approved returns back into your available inventory. We maintain a detailed returns log that you can access through your account portal.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">10. How quickly can I get started with e-commerce storage?</h3>
              <p className="text-gray-700">Most new e-commerce customers are operational within 24–48 hours of contacting us. The onboarding process involves a brief consultation to understand your product mix and order volumes, followed by signing a simple month-to-month storage agreement. Once signed, you can deliver your first inventory batch to our facility or request a pickup from your current location. Your dedicated account manager will be reachable via phone and WhatsApp from day one.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">11. Do you support cross-border e-commerce shipping from Dubai?</h3>
              <p className="text-gray-700">Dubai is an ideal hub for cross-border e-commerce across the GCC region. We work with sellers who ship to Saudi Arabia, Kuwait, Bahrain, Qatar, Oman, Jordan, and beyond. Our logistics partners include DHL, Aramex, FedEx, and specialist GCC couriers. We can prepare shipments with the correct commercial invoices and packing lists required for customs clearance in each destination country. Contact us to discuss your cross-border fulfilment requirements.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">12. What types of packaging can SafeStorage use for my orders?</h3>
              <p className="text-gray-700">We stock a range of standard packaging materials including poly mailers, corrugated boxes in various sizes, bubble wrap, tissue paper, and void fill. For sellers with branded packaging requirements, we can use your custom boxes, branded tape, thank-you cards, stickers, and inserts. Simply provide your packaging materials along with your initial inventory delivery and brief our team on your packing standards. We maintain a photo guide of your packing requirements for consistency across all orders.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">13. How is e-commerce storage priced compared to renting a warehouse in Dubai?</h3>
              <p className="text-gray-700">Warehousing in Dubai typically requires a minimum 1-year lease, upfront rental deposits, and rents ranging from AED 25–60 per square foot per year in logistics zones like DIP, JAFZA, and Al Quoz. A modest 1,000 sq ft warehouse would cost AED 25,000–60,000 annually, plus fit-out costs, DEWA deposits, and staffing. SafeStorage e-commerce storage starts from 12.60 AED / sqft (VAT-inclusive) with no deposit, no fit-out, no minimum term, and staff included. For most small and medium e-commerce businesses, this represents a saving of AED 15,000–40,000 per year.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#0A2463] mb-3">14. Can multiple team members from my business access the storage unit?</h3>
              <p className="text-gray-700">Yes. You can authorise multiple team members to access your storage unit or liaise with our fulfilment team. Each authorised person is registered in our access control system. For businesses using our pick-and-pack service, access to the physical unit is managed by our team, and you can assign multiple contacts who can submit orders, request inventory reports, or coordinate deliveries via phone, WhatsApp, or our online portal.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
