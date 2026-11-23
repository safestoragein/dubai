import Link from "next/link"

// City-wise links above the footer (owner request 2026-11-23: same pattern as the India site).
const CITIES: { city: string; self: string; links: [string, string][] }[] = [
  { city: "Dubai", self: "/self-storage-dubai", links: [["/business-storage-dubai/document-storage", "Document Storage"], ["/personal-storage-dubai", "Household Storage"], ["/business-storage-dubai", "Business Storage"], ["/moving-storage-dubai", "Moving & Storage"]] },
  { city: "Abu Dhabi", self: "/self-storage-abu-dhabi", links: [["/business-storage-abu-dhabi/document-storage", "Document Storage"], ["/personal-storage-abu-dhabi", "Household Storage"], ["/business-storage-abu-dhabi", "Business Storage"], ["/moving-storage-abu-dhabi", "Moving & Storage"]] },
  { city: "Sharjah", self: "/self-storage-sharjah", links: [["/business-storage-sharjah/document-storage", "Document Storage"], ["/personal-storage-sharjah", "Household Storage"], ["/business-storage-sharjah", "Business Storage"], ["/moving-storage-sharjah", "Moving & Storage"]] },
  { city: "Ajman", self: "/self-storage-ajman", links: [["/business-storage-ajman/document-storage", "Document Storage"], ["/personal-storage-ajman", "Household Storage"], ["/business-storage-ajman", "Business Storage"], ["/moving-storage-ajman", "Moving & Storage"]] },
]

export default function FooterCities() {
  return (
    <section aria-label="Storage by city" className="text-white">
      <div className="pt-16 md:pt-20 pb-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {CITIES.map(({ city, self, links }) => (
          <div key={city}>
            <h3 className="text-2xl font-bold mb-5 text-dubai-gold">{city}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={self} prefetch={false} className="text-lg text-white hover:text-dubai-gold">Self Storage</Link>
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
