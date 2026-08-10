import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Star, MessageCircle } from "lucide-react"
import { env } from "@/lib/env"
import { SOCIAL } from "@/lib/company-facts"

export default function Footer() {
  return (
    <footer className="w-full bg-dubai-midnight text-white relative">
      {/* Dubai skyline silhouette */}
      <div className="absolute inset-x-0 top-0 h-16 bg-dubai-midnight overflow-hidden">
        <div className="w-full h-full opacity-20 bg-[url('https://v0.blob.com/dubai-skyline-silhouette.png')] bg-repeat-x bg-bottom"></div>
      </div>

      {/* Dubai-style decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-dubai-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 py-16 md:py-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Logo & About */}
          <div className="space-y-4 col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/design-mode/logo.png"
                alt="SafeStorage Dubai Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-dubai-sand/80 max-w-xs">
              Dubai&apos;s most trusted storage partner since 2015. Secure units, 24/7 security, and door-to-door service.
            </p>
            {/* Google Rating */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-dubai-sand/80 text-sm">4.9/5 on Google</span>
            </div>
            <p className="text-dubai-sand/60 text-sm">6,700+ verified reviews worldwide</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Quick Links</h3>
            <ul className="space-y-2 text-dubai-sand/80 text-sm">
              <li>
                <Link href="/" className="hover:text-dubai-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-dubai-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-dubai-gold transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-dubai-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-dubai-gold transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-dubai-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/prohibited-items" className="hover:text-dubai-gold transition-colors">Prohibited Items</Link>
              </li>
              <li>
                <Link href="/top-10-storage-companies-dubai" className="hover:text-dubai-gold transition-colors">Top Storage Companies Dubai</Link>
              </li>
              <li>
                <Link href="/top-10-storage-companies-uae" className="hover:text-dubai-gold transition-colors">Top Storage Companies UAE</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-dubai-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-dubai-gold transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Storage Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Storage Types</h3>
            <ul className="space-y-2 text-dubai-sand/80 text-sm">
              <li>
                <Link href="/self-storage-dubai" className="hover:text-dubai-gold transition-colors">Self Storage Dubai</Link>
              </li>
              <li>
                <Link href="/storage-units-dubai" className="hover:text-dubai-gold transition-colors">Storage Unit Sizes &amp; Prices</Link>
              </li>
              <li>
                <Link href="/personal-storage" className="hover:text-dubai-gold transition-colors">Personal Storage</Link>
              </li>
              <li>
                <Link href="/business-storage" className="hover:text-dubai-gold transition-colors">Business Storage</Link>
              </li>
              {/* These must match the URLs linked from /services. The footer used to
                  link a parallel /storage-dubai/* set, giving every service two live,
                  self-canonicalising URLs that split ranking signals between them. */}
              <li>
                <Link href="/car-storage" className="hover:text-dubai-gold transition-colors">Vehicle Storage</Link>
              </li>
              <li>
                <Link href="/document-storage" className="hover:text-dubai-gold transition-colors">Document Storage</Link>
              </li>
              <li>
                <Link href="/ecommerce-storage" className="hover:text-dubai-gold transition-colors">E-commerce Storage</Link>
              </li>
              <li>
                <Link href="/furniture-storage" className="hover:text-dubai-gold transition-colors">Furniture Storage</Link>
              </li>
              <li>
                <Link href="/student-storage" className="hover:text-dubai-gold transition-colors">Student Storage</Link>
              </li>
              <li>
                <Link href="/warehouse-storage-dubai" className="hover:text-dubai-gold transition-colors">Warehouse Storage</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">We Serve</h3>
            <ul className="space-y-2 text-dubai-sand/80 text-sm">
              {/* All 12 location pages are linked here. Previously only 4 were, so the
                  other 8 received no internal equity and were crawled only via sitemap. */}
              {[
                ["/locations/dubai-investment-park", "Dubai Investment Park"],
                ["/locations/business-bay", "Business Bay"],
                ["/locations/dubai-marina", "Dubai Marina"],
                ["/locations/jumeirah", "Jumeirah"],
                ["/locations/downtown-dubai", "Downtown Dubai"],
                ["/locations/palm-jumeirah", "Palm Jumeirah"],
                ["/locations/al-barsha", "Al Barsha"],
                ["/locations/jumeirah-village-circle", "JVC"],
                ["/locations/dubai-hills", "Dubai Hills"],
                ["/locations/mirdif", "Mirdif"],
                ["/locations/deira", "Deira"],
                ["/locations/dubai-silicon-oasis", "Dubai Silicon Oasis"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-dubai-gold transition-colors">{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-dubai-gold transition-colors">All Locations →</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-lg font-medium text-dubai-gold">Contact Us</h3>
            <ul className="space-y-3 text-dubai-sand/80 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-dubai-gold shrink-0" />
                <a href={env.PHONE_LINK} className="hover:text-dubai-gold transition-colors">
                  +971 50 577 3388
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-dubai-gold shrink-0" />
                <a href={env.EMAIL_LINK} className="hover:text-dubai-gold transition-colors">
                  {env.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-dubai-gold shrink-0" />
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-dubai-gold transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-dubai-gold shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=24.990346908569336,55.15397644042969&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dubai-gold transition-colors"
                >
                  Building 23, Warehouse 5, DIP-1, Dubai, United Arab Emirates
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-dubai-gold shrink-0 mt-0.5" />
                <span>
                  Mon–Sun 8 AM–8 PM
                  <span className="block text-dubai-sand/60">
                    24/7 facility access for existing customers on request
                  </span>
                </span>
              </li>
            </ul>

            {/* Social Links — these must stay in sync with the sameAs array in
                lib/structured-data.ts. They were previously href="#", which meant the
                Organization schema claimed profiles the site itself did not link to. */}
            <div className="flex space-x-3 pt-2">
              {[
                [SOCIAL.facebook, Facebook, "Facebook"],
                [SOCIAL.instagram, Instagram, "Instagram"],
                [SOCIAL.linkedin, Linkedin, "LinkedIn"],
              ].map(([href, Icon, label]: any) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dubai-sand/80 hover:text-dubai-gold transition-colors bg-white/10 p-2 rounded-full"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold text-white">Ready to Get Started?</h4>
              <p className="text-dubai-sand/70">Get your free quote in just 2 minutes</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-dubai-midnight font-medium" asChild>
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="bg-white text-black border-white hover:bg-gray-100" asChild>
                <a href={env.PHONE_LINK}>Call: 050-577-3388</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Dubai-style decorative divider */}
        <div className="flex items-center justify-center py-4">
          <div className="h-px bg-dubai-gold/20 flex-grow"></div>
          <div className="px-4">
            <div className="w-6 h-6 rotate-45 border-2 border-dubai-gold/30"></div>
          </div>
          <div className="h-px bg-dubai-gold/20 flex-grow"></div>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dubai-sand/60">
          <p>&copy; {new Date().getFullYear()} SafeStorage Dubai. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-dubai-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-dubai-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
