/**
 * Ad-click attribution, read the way the site's own quote form reads it.
 *
 * Mirror of getAdAttribution() in lib/ad-attribution.ts (safestorage.ae repo).
 * That module captures gclid / UTM / Ads-account parameters from the landing
 * URL into localStorage["ss_ad_attr"] (90-day TTL) via <AdAttributionCapture/>,
 * and the quote form posts them to insert_customer_dubai so the CRM row knows
 * which ad produced it. The widget is a separate bundle, so it reads the same
 * storage key and returns the same field names. Keep the two in step.
 */
const KEY = "ss_ad_attr";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

interface Stored {
  captured_at?: number;
  landing_page?: string;
  [k: string]: string | number | undefined;
}

export function getAdAttribution(): Record<string, string> {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const s = JSON.parse(raw) as Stored;
    if (!s.captured_at || Date.now() - s.captured_at > TTL_MS) return {};
    const str = (k: string) => (typeof s[k] === "string" ? (s[k] as string) : "");
    const out: Record<string, string> = {
      gclid_field: str("gclid"),
      campaign_id_field: str("ads_cid") || str("gad_campaignid") || str("utm_id"),
      utm_source: str("utm_source"),
      utm_medium: str("utm_medium"),
      utm_campaign: str("utm_campaign"),
      utm_term_field: str("utm_term"),
      utm_content: str("utm_content"),
      ads_account_id: str("ads_account"),
      ads_adgroup_id: str("ads_agid"),
      ads_keyword: str("ads_kw"),
      ads_matchtype: str("ads_mt"),
      ads_creative_id: str("ads_ad"),
      ads_network: str("ads_net"),
      ads_device: str("ads_dev"),
      ads_landing_page: str("landing_page"),
    };
    for (const k of Object.keys(out)) if (!out[k]) delete out[k];
    return out;
  } catch {
    return {};
  }
}

/**
 * E.164 form for Google's enhanced conversions — mirror of toE164() in
 * lib/phone.ts. "050 123 4567" -> +971501234567; numbers that already carry
 * "+" or "00" are overseas and keep their own code.
 */
export function toE164(raw: string): string {
  const value = (raw || "").trim();
  const digits = value.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return "";
  if (value.startsWith("+")) return `+${digits}`;
  if (digits.startsWith("00")) return `+${digits.slice(2)}`;
  if (digits.startsWith("971")) return `+${digits}`;
  if (digits.startsWith("0")) return `+971${digits.slice(1)}`;
  return `+971${digits}`;
}
