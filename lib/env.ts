// Environment configuration with validation
const requiredEnvVars = {
  CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+971501234567",
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || "info@safestoragedubai.com",
} as const

// Derived values
export const env = {
  ...requiredEnvVars,
  PHONE_LINK: `tel:${requiredEnvVars.CONTACT_NUMBER}`,
  EMAIL_LINK: `mailto:${requiredEnvVars.EMAIL}`,
  WHATSAPP_LINK: `https://wa.me/${requiredEnvVars.CONTACT_NUMBER.replace(/[^0-9]/g, "")}?text=Hi%2C%20I%27m%20interested%20in%20your%20storage%20services.%20Can%20you%20please%20provide%20more%20information%3F`,
} as const

// Type for environment variables
export type EnvConfig = typeof env
