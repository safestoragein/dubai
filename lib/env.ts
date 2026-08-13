// Environment configuration with validation
const requiredEnvVars = {
  CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971505773388",
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || "support@safestorage.ae",
} as const

/**
 * A tel: URI may not contain spaces. RFC 3966 allows only "-", ".", "(" and ")"
 * as visual separators, so the dialable form is "+" plus digits.
 *
 * NEXT_PUBLIC_CONTACT_NUMBER holds the *display* number, and on both this
 * machine and the server it is set with spaces ("+971 50 577 3388"). That was
 * being interpolated straight into the href, so the header, the footer and the
 * floating call button shipped `tel:+971 50 577 3388` on every page — malformed,
 * and inconsistent with the hard-coded `tel:+971505773388` links elsewhere on
 * the site. Most browsers strip the spaces for you; some in-app browsers and
 * Android dialers just fail to place the call.
 *
 * WHATSAPP_LINK below already normalised the same value; PHONE_LINK did not.
 */
const dialable = (n: string) => (n.trim().startsWith("+") ? "+" : "") + n.replace(/[^0-9]/g, "")

// Derived values
export const env = {
  ...requiredEnvVars,
  PHONE_LINK: `tel:${dialable(requiredEnvVars.CONTACT_NUMBER)}`,
  EMAIL_LINK: `mailto:${requiredEnvVars.EMAIL}`,
  WHATSAPP_LINK: `https://wa.me/${requiredEnvVars.CONTACT_NUMBER.replace(/[^0-9]/g, "")}?text=Hi%2C%20I%27m%20interested%20in%20your%20storage%20services.%20Can%20you%20please%20provide%20more%20information%3F`,
} as const

// Type for environment variables
export type EnvConfig = typeof env
