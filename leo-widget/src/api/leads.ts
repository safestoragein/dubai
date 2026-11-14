import type { LeadData } from "../types";
import { BASE } from "./base";

/**
 * Save the confirmed lead (name + phone + email) in the CRM's lead list.
 * The priced quotation itself is created by requestQuote() straight after.
 */
export async function submitLead(
  data: LeadData & { intent: string }
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const res = await fetch(`${BASE}/api/leo/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
