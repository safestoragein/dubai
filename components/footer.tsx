import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
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
        <div className="grid gap-8 py-16 md:py-24 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/design-mode/logo%20%281%29.png"
                alt="SafeStorage Dubai Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-dubai-sand/80">Your trusted storage solution provider in Dubai, UAE.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Contact Us</h3>
            <ul className="space-y-3 text-dubai-sand/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-dubai-gold" />
                <span>SafeStorage, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-dubai-gold" />
                <a href={env.PHONE_LINK} className="hover:text-dubai-gold transition-colors">
                  {env.CONTACT_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-dubai-gold" />
                <a href={env.EMAIL_LINK} className="hover:text-dubai-gold transition-colors">
                  {env.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-dubai-gold" />
                <span>24/7 Access</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Quick Links</h3>
            <ul className="space-y-3 text-dubai-sand/80">
              <li>
                <Link href="/" className="hover:text-dubai-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-dubai-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-dubai-gold transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-dubai-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-dubai-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-dubai-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-dubai-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-dubai-gold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-dubai-sand/80 hover:text-dubai-gold transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="pt-4">
              <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-dubai-midnight font-medium" asChild>
                <Link href="/get-quote">Get a Free Quote</Link>
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

        <div className="py-6 text-center text-sm text-dubai-sand/60">
          <p>&copy; {new Date().getFullYear()} SafeStorage Dubai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
