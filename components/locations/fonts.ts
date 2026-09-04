import { Sora, Manrope } from "next/font/google"

/**
 * Type for the emirate/area pages. Declared once and shared, because
 * emirate-theme.module.css reads --font-sora / --font-manrope and every page
 * using that stylesheet has to apply BOTH variable classes or it silently falls
 * back to the site's Inter.
 *
 * Self-hosted by next/font rather than the design comp's Google Fonts <link>,
 * so there is no render-blocking third-party request.
 */
export const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
})

/** Apply to the outermost element of any page using emirate-theme.module.css. */
export const emirateFontVars = `${sora.variable} ${manrope.variable}`
