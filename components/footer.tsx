import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Star, MessageCircle } from "lucide-react"
import { env } from "@/lib/env"

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
              Dubai&apos;s most trusted storage partner since 2018. Climate-controlled units, 24/7 security, and hassle-free pickup & delivery.
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
            <p className="text-dubai-sand/60 text-sm">487+ Verified Reviews</p>
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
            </ul>
          </div>

          {/* Storage Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Storage Types</h3>
            <ul className="space-y-2 text-dubai-sand/80 text-sm">
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">Personal Storage</Link>
              </li>
              <li>
                <Link href="/business-storage" className="hover:text-dubai-gold transition-colors">Business Storage</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">Vehicle Storage</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">Document Storage</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">E-commerce Storage</Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">We Serve</h3>
            <ul className="space-y-2 text-dubai-sand/80 text-sm">
              <li>
                <Link href="/locations/dubai-investment-park" className="hover:text-dubai-gold transition-colors">Dubai Investment Park</Link>
              </li>
              <li>
                <Link href="/locations/business-bay" className="hover:text-dubai-gold transition-colors">Business Bay</Link>
              </li>
              <li>
                <Link href="/locations/dubai-marina" className="hover:text-dubai-gold transition-colors">Dubai Marina</Link>
              </li>
              <li>
                <Link href="/locations/jumeirah" className="hover:text-dubai-gold transition-colors">Jumeirah</Link>
              </li>
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
                <a href={env.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-dubai-gold transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-dubai-gold shrink-0 mt-0.5" />
                <span>Dubai Investment Park 2, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-dubai-gold shrink-0" />
                <span>24/7 Access Available</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors bg-white/10 p-2 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors bg-white/10 p-2 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors bg-white/10 p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
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
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black" asChild>
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
            <Link href="/terms" className="hover:text-dubai-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
