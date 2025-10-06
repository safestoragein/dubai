"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { env } from "@/lib/env"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/get-quote", label: "Get a Quote" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-dubai-gold/20">
      {/* Dubai-style decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-dubai-gold via-dubai-sand to-dubai-gold"></div>

      <div className="container px-6 md:px-8 h-16 flex items-center justify-between lg:justify-start lg:space-x-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/design-mode/logo%20%281%29.png"
            alt="SafeStorage Dubai Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-dubai-sand/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-dubai-navy" /> : <Menu className="h-6 w-6 text-dubai-navy" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base hover:text-dubai-gold transition-colors ${
                pathname === item.href ? "text-dubai-gold font-medium" : "text-dubai-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={env.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Chat Now</span>
          </a>
          <Button
            size="lg"
            className="bg-dubai-gold hover:bg-dubai-darkgold text-white border border-dubai-gold/20"
            asChild
          >
            <Link href="/get-quote">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-dubai-gold/20 shadow-lg lg:hidden"
            >
              <div className="container px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base py-2 hover:text-dubai-gold transition-colors ${
                      pathname === item.href ? "text-dubai-gold font-medium" : "text-dubai-navy"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-4 pt-4 border-t border-dubai-gold/20">
                  <a
                    href={env.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">Chat Now</span>
                  </a>
                  <Button className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                    <Link href="/get-quote">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
