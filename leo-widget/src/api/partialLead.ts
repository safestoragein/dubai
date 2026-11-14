import type { LeadData } from "../types";
import { BASE } from "./base";

/**
 * Save a half-finished conversation as a lead.
 *
 * Called when the visitor leaves after giving a phone or email but before
 * confirming. Uses sendBeacon where available: a plain fetch is cancelled when
 * the page unloads, which is exactly the moment we most need this to survive.
 * The route (/api/leo/lead-partial) forwards to save_dubai_partial_lead, the
 * same backend call the /get-quote form's abandoned-lead beacon makes.
 */
export function sendPartialLead(
  lead: Partial<LeadData>,
  unloading = false,
  complete = false
): void {
  if (!lead.phone && !lead.email) return;
  const url = `${BASE}/api/leo/lead-partial`;
  const body = JSON.stringify({ ...lead, complete });

  if (unloading && typeof navigator !== "undefined" && navigator.sendBeacon) {
    // text/plain avoids a CORS preflight the unloading page would never live
    // to complete; the route parses it as JSON regardless.
    navigator.sendBeacon(url, new Blob([body], { type: "text/plain;charset=UTF-8" }));
    return;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    /* the visitor has already left — nothing useful to do here */
  });
}
