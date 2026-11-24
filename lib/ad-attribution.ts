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

// ---------------------------------------------------------------------------
// First touch (every visitor, not only ad clicks)
//
// captureAdAttribution() above stores nothing unless the landing URL carries ad
// params, so organic/direct/ChatGPT visitors left no landing page behind. This
// records WHERE the visitor first arrived — landing path, utm_*, external
// referrer — once, in a first-party cookie (not localStorage) so the server-side
// chat route receives it on its own request too. insert_customer_dubai writes it
// to ss_customer.ft_* (write-once); the India site records the same fields.

const FT_COOKIE = "ss_ft"
const FT_TTL_S = 90 * 24 * 60 * 60

export function captureFirstTouch(): void {
  try {
    if (document.cookie.split("; ").some((c) => c.startsWith(FT_COOKIE + "="))) return // write-once
    const qs = new URLSearchParams(window.location.search)
    const g = (k: string) => (qs.get(k) || "").trim().slice(0, 100)
    let ref = ""
    try {
      const r = document.referrer ? new URL(document.referrer) : null
      if (r && r.host !== window.location.host) ref = (r.origin + r.pathname).slice(0, 300)
    } catch {}
    const ft = {
      s: g("utm_source"), m: g("utm_medium"), c: g("utm_campaign"), x: g("utm_content"),
      lp: window.location.pathname.slice(0, 255), r: ref, ts: Date.now(),
    }
    document.cookie = `${FT_COOKIE}=${encodeURIComponent(JSON.stringify(ft))}; max-age=${FT_TTL_S}; path=/; SameSite=Lax; Secure`
  } catch {
    // Cookies blocked — best-effort.
  }
}

// Cookie value -> the ss_customer field names insert_customer_dubai understands.
// Pure (no window), so the server-side chat route can use it on the request's Cookie header.
export function parseFirstTouchCookie(cookieHeader: string | null | undefined): Record<string, string> {
  const out: Record<string, string> = {}
  try {
    const m = /(?:^|;\s*)ss_ft=([^;]*)/.exec(cookieHeader || "")
    if (!m) return out
    const t = JSON.parse(decodeURIComponent(m[1])) as Record<string, unknown>
    const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")
    out.ft_utm_source = s(t.s, 100)
    out.ft_utm_medium = s(t.m, 100)
    out.ft_utm_campaign = s(t.c, 100)
    out.ft_utm_content = s(t.x, 100)
    out.ft_landing_page = s(t.lp, 255)
    out.ft_referrer = s(t.r, 300)
    out.ft_ts = typeof t.ts === "number" && Number.isFinite(t.ts) ? String(Math.trunc(t.ts)) : ""
    for (const k of Object.keys(out)) if (!out[k]) delete out[k]
  } catch {}
  return out
}

// Browser side: first touch + the page the form is being submitted from.
export function getFirstTouch(): Record<string, string> {
  try {
    const out = parseFirstTouchCookie(document.cookie)
    out.quotation_page_url = window.location.href.slice(0, 500)
    return out
  } catch {
    return {}
  }
}
