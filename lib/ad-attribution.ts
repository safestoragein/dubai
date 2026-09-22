// Ad-click attribution for quote leads.
//
// An ad click lands on some page with ?gclid=…&utm_…; the visitor may browse for a
// while before submitting a quote, so the params are captured on landing (from the
// root layout) and replayed with the customer insert on /get-quote.
//
// Last non-empty touch wins: a later visit that carries ad params replaces the
// stored set, a visit without any leaves it alone. Kept for 90 days, matching the
// Google Ads click-through conversion window.
//
// Google itself only appends gclid (and gad_campaignid). Everything prefixed ads_
// comes from each Ads account's account-level "Final URL suffix", where Google
// fills the ValueTrack placeholders per click:
//
//   ads_account=2084949875&ads_cid={campaignid}&ads_agid={adgroupid}&ads_kw={keyword}
//   &ads_mt={matchtype}&ads_ad={creative}&ads_net={network}&ads_dev={device}
//
// ads_account is typed literally (there is no ValueTrack for the account), which is
// the only way to tell which of our Ads accounts a click came from.

const KEY = "ss_ad_attr"
const TTL_MS = 90 * 24 * 60 * 60 * 1000

const PARAMS = [
  "gclid",
  "gad_campaignid",
  "utm_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ads_account",
  "ads_cid",
  "ads_agid",
  "ads_kw",
  "ads_mt",
  "ads_ad",
  "ads_net",
  "ads_dev",
] as const

type Param = (typeof PARAMS)[number]
type Stored = Partial<Record<Param, string>> & { captured_at: number; landing_page?: string }

export function captureAdAttribution(): void {
  try {
    const qs = new URLSearchParams(window.location.search)
    const found: Partial<Record<Param, string>> = {}
    for (const p of PARAMS) {
      const v = qs.get(p)?.trim()
      if (v) found[p] = v.slice(0, 255)
    }
    if (Object.keys(found).length === 0) return
    const stored: Stored = {
      ...found,
      captured_at: Date.now(),
      landing_page: (window.location.origin + window.location.pathname).slice(0, 255),
    }
    localStorage.setItem(KEY, JSON.stringify(stored))
  } catch {
    // Storage blocked (private mode etc.) — attribution is best-effort.
  }
}

// Field names match the ss_customer columns insert_customer_dubai writes.
export function getAdAttribution(): Record<string, string> {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const s = JSON.parse(raw) as Stored
    if (!s.captured_at || Date.now() - s.captured_at > TTL_MS) {
      localStorage.removeItem(KEY)
      return {}
    }
    const out: Record<string, string> = {
      gclid_field: s.gclid ?? "",
      campaign_id_field: s.ads_cid ?? s.gad_campaignid ?? s.utm_id ?? "",
      utm_source: s.utm_source ?? "",
      utm_medium: s.utm_medium ?? "",
      utm_campaign: s.utm_campaign ?? "",
      utm_term_field: s.utm_term ?? "",
      utm_content: s.utm_content ?? "",
      ads_account_id: s.ads_account ?? "",
      ads_adgroup_id: s.ads_agid ?? "",
      ads_keyword: s.ads_kw ?? "",
      ads_matchtype: s.ads_mt ?? "",
      ads_creative_id: s.ads_ad ?? "",
      ads_network: s.ads_net ?? "",
      ads_device: s.ads_dev ?? "",
      ads_landing_page: s.landing_page ?? "",
    }
    for (const k of Object.keys(out)) if (!out[k]) delete out[k]
    return out
  } catch {
    return {}
  }
}
