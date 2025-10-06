// This file helps with CSS optimization
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// Utility to generate only the CSS classes we need
export function generateClasses(baseClass: string, variants: Record<string, boolean>) {
  return Object.entries(variants)
    .filter(([_, value]) => value)
    .map(([key]) => `${baseClass}-${key}`)
    .join(" ")
}

// Utility to generate responsive classes
export function responsive(base: string, sm?: string, md?: string, lg?: string, xl?: string) {
  return cn(base, sm && `sm:${sm}`, md && `md:${md}`, lg && `lg:${lg}`, xl && `xl:${xl}`)
}
