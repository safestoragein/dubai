// Browser-side reporting of one lead, retry-safe. Pure (all I/O injected) so it can be tested without a browser.
//  1. ask the server for a claim -> only a "fire:true" answer may push the event
//  2. push generate_lead with a GTM eventCallback (GTM calls it after ALL tags for the event fired)
//  3. only then tell the server "confirmed". No GTM / tab closed first => never confirmed => the claim lease
//     expires and the same submission may report again (server caps total attempts).
// Raw email/phone never reach the dataLayer: they are normalised and SHA-256 hashed first.

export interface ReportDeps {
  pass: string
  fetchFn: (url: string, init: RequestInit) => Promise<{ ok: boolean; json: () => Promise<unknown> }>
  dataLayer: unknown[]
  readEc: () => { email?: string; phone?: string }
  clearEc: () => void
  sha256: (v: string) => Promise<string>
  location: { origin: string; pathname: string }
}

export async function reportLead(d: ReportDeps): Promise<"pushed" | "skipped" | "error"> {
  const post = (body: object) =>
    d.fetchFn("/api/thank-you/claim", { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
  try {
    const r = await post({ t: d.pass })
    if (!r.ok) return "skipped"
    const j = (await r.json()) as { fire?: boolean; claim?: string; submission_id?: string; lead_id?: string }
    if (!j.fire || !j.claim || !j.submission_id) return "skipped"

    const ec = d.readEc()
    const email = (ec.email || "").trim().toLowerCase()
    const phone = (ec.phone || "").replace(/[^\d+]/g, "")
    const user_data: Record<string, string> = {}
    if (email) user_data.sha256_email_address = await d.sha256(email)
    if (/^\+\d{8,15}$/.test(phone)) user_data.sha256_phone_number = await d.sha256(phone)

    d.dataLayer.push({
      event: "generate_lead",
      submission_id: j.submission_id,
      lead_id: j.lead_id,
      form_type: "book_appointment",
      page_location: d.location.origin + d.location.pathname,
      user_data,
      eventCallback: () => {
        d.clearEc()
        post({ t: d.pass, confirm: j.claim }).catch(() => {})
      },
    })
    return "pushed"
  } catch {
    return "error" // tracking must never break the page
  }
}
