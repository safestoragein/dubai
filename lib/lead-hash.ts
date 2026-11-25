// Normalise + SHA-256 contact details in the browser so raw email/phone are never kept in storage or the dataLayer.
// Normalisation matches Google enhanced-conversion rules: email trimmed + lower-cased, phone in E.164 (+digits).

export interface HashedContact {
  sha256_email_address?: string
  sha256_phone_number?: string
}

export async function sha256Hex(v: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("")
}

export async function hashContact(
  email: string,
  phone: string,
  sha: (v: string) => Promise<string> = sha256Hex,
): Promise<HashedContact> {
  const e = (email || "").trim().toLowerCase()
  let p = (phone || "").replace(/[^\d+]/g, "")
  if (p && !p.startsWith("+")) p = p.startsWith("00") ? `+${p.slice(2)}` : p.startsWith("0") ? `+971${p.slice(1)}` : `+${p}`
  const out: HashedContact = {}
  if (e && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) out.sha256_email_address = await sha(e)
  if (/^\+\d{8,15}$/.test(p)) out.sha256_phone_number = await sha(p)
  return out
}
