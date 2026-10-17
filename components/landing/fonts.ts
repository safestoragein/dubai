import { Cairo, Manrope, Sora } from "next/font/google"

// The landing comp is typeset in Sora (headings) + Manrope (body). Self-hosted
// through next/font so the homepage does not pay for a render-blocking
// fonts.googleapis.com round-trip — the rest of the site keeps Inter.
export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
})

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
})

// Arabic pages (/ar/moving-storage*): Sora and Manrope are Latin-only, so Arabic
// text would fall back to a system face. Cairo pairs with them and has the glyphs.
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
})
