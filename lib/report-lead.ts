// Browser-side reporting of one lead, retry-safe. Pure (all I/O injected) so it can be tested without a browser.
//  1. ask the server for a claim -> only a "fire:true" answer may push the event
//  2. push generate_lead with a GTM eventCallback (GTM calls it after ALL tags for the event fired)
//  3. only then tell the server "confirmed". No GTM / tab closed first => never confirmed => the claim lease
//     expires and the same submission may report again (server caps total attempts).
// Only SHA-256 hashes of email/phone are ever stored or pushed (hashed at submit time, see lib/lead-hash.ts).

export interface ReportDeps {
  pass: string
  fetchFn: (url: string, init: RequestInit) => Promise<{ ok: boolean; json: () => Promise<unknown> }>
  dataLayer: unknown[]
  readEc: () => { sha256_email_address?: string; sha256_phone_number?: string }
  clearEc: () => void
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
    const user_data: Record<string, string> = {}
    const isHash = (v: unknown): v is string => typeof v === "string" && /^[a-f0-9]{64}$/.test(v)
    if (isHash(ec.sha256_email_address)) user_data.sha256_email_address = ec.sha256_email_address
    if (isHash(ec.sha256_phone_number)) user_data.sha256_phone_number = ec.sha256_phone_number

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
