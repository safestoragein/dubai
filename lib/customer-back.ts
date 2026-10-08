// Server-to-server calls to the PHP side (back/modules/dubai/controllers/Dubai_auth.php).
// Browser code never sees DUBAI_BACK_KEY or talks to PHP directly.
const BASE_ROOT = (process.env.DUBAI_BACK_URL || "https://safestorage.in/back/dubai/dubai_auth").replace(/\/$/, "").replace(/\/dubai_auth$/, "")

function toBody(form: Record<string, string | string[]>): string {
  const p = new URLSearchParams()
  for (const [k, v] of Object.entries(form)) {
    if (Array.isArray(v)) v.forEach((x) => p.append(`${k}[]`, x))
    else p.append(k, v)
  }
  return p.toString()
}

export type BackResult<T> = { ok: boolean; status: number; data: T | null }

export async function callBack<T = Record<string, unknown>>(
  path: "login" | "account" | "orders" | "payments" | "details" | "options" | "estimate" | "create",
  form: Record<string, string | string[]>,
  visitorIp?: string,
  controller: "dubai_auth" | "dubai_retrieval" = "dubai_auth"
): Promise<BackResult<T>> {
  const key = process.env.DUBAI_BACK_KEY || ""
  if (key.length < 32) return { ok: false, status: 503, data: null }
  try {
    const res = await fetch(`${BASE_ROOT}/${controller}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Dubai-Key": key,
        ...(visitorIp ? { "X-Forwarded-For": visitorIp } : {}),
      },
      body: toBody(form),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    })
    const text = await res.text()
    // The legacy app can append a stray character after the JSON — cut at the last "}".
    const end = text.lastIndexOf("}")
    let data: T | null = null
    try { data = end >= 0 ? (JSON.parse(text.slice(0, end + 1)) as T) : null } catch { data = null }
    return { ok: res.ok, status: res.status, data }
  } catch {
    return { ok: false, status: 502, data: null }
  }
}
