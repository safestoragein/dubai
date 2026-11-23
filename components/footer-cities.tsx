import Link from "next/link"

// City-wise links above the footer (owner request 2026-11-23: same pattern as the India site).
const CITIES: { city: string; href: string; links: [string, string][] }[] = [
  { city: "Dubai", href: "/locations/dubai", links: [["/business-storage-dubai/document-storage", "Document Storage"], ["/personal-storage-dubai", "Household Storage"], ["/business-storage-dubai", "Business Storage"], ["/moving-storage-dubai", "Moving & Storage"]] },
  { city: "Abu Dhabi", href: "/locations/abu-dhabi", links: [["/moving-storage-abu-dhabi", "Moving & Storage"]] },
  { city: "Sharjah", href: "/locations/sharjah", links: [["/moving-storage-sharjah", "Moving & Storage"]] },
  { city: "Ajman", href: "/locations/ajman", links: [["/moving-storage-ajman", "Moving & Storage"]] },
]
const SELF: Record<string, string> = { Dubai: "/self-storage-dubai", "Abu Dhabi": "/locations/abu-dhabi", Sharjah: "/locations/sharjah", Ajman: "/locations/ajman" }

export default function FooterCities() {
  return (
    <section aria-label="Storage by city" className="text-white">
      <div className="pt-16 md:pt-20 pb-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {CITIES.map(({ city, links }) => (
          <div key={city}>
            <h3 className="text-2xl font-bold mb-5 text-dubai-gold">{city}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={SELF[city]} prefetch={false} className="text-lg text-white hover:text-dubai-gold">Self Storage</Link>
              </li>
              {links.map(([h, l]) => (
                <li key={l}>
                  <Link href={h} prefetch={false} className="text-base text-dubai-sand/80 hover:text-dubai-gold">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
