// "Report this lead's conversion" ledger, kept on the EXISTING CRM quotation row (no separate table/database).
//
// The state (claim token, attempts, lease time, confirmed time) lives in 4 additive columns on
// ss_customer_quotation, reached through the key-guarded CRM endpoints app/dubai_conversion/{claim,confirm}
// (modules/app/controllers/Dubai_conversion.php). Both are single atomic UPDATEs.
//
//   claim   -> token only if the submission is unconfirmed, < 3 attempts, and no live 2-minute lease
//   confirm -> called from GTM's eventCallback (all tags fired); closes the row for good
// Any failure (endpoint down, key missing, columns not migrated) returns "do not fire".
// A rare double fire is absorbed by Google Ads de-duplicating on the order ID (= submission_id).
import "server-only"
import { BACKEND } from "@/lib/leo-quote"

async function call<T>(path: string, fields: Record<string, string>): Promise<T | null> {
  const key = process.env.LEAD_CONVERSION_KEY
  if (!key) {
    console.error("[lead-conversion] LEAD_CONVERSION_KEY not set, not firing")
    return null
  }
  try {
    const res = await fetch(`${BACKEND}/dubai_conversion/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ ...fields, key }).toString(),
      cache: "no-store",
      signal: AbortSignal.timeout(6000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    // the CRM runner can append stray bytes after the JSON; take the object only
    const text = await res.text()
    return JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)) as T
  } catch (e) {
    console.error(`[lead-conversion] ${path} failed, not firing:`, e)
    return null
  }
}

/** Returns a claim token if this caller may fire now, else null. */
export async function claimLeadConversion(quotationId: string, leadId: string): Promise<string | null> {
  const r = await call<{ fire?: boolean; claim?: string | null }>("claim", { quotation_id: quotationId, customer_id: leadId })
  return r?.fire && r.claim ? r.claim : null
}

/** Marks the conversion as reported. Only the holder of the current claim token can confirm. */
export async function confirmLeadConversion(quotationId: string, leadId: string, token: string): Promise<boolean> {
  const r = await call<{ confirmed?: boolean }>("confirm", { quotation_id: quotationId, customer_id: leadId, claim: token })
  return Boolean(r?.confirmed)
}
