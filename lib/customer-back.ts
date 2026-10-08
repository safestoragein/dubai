// Server-to-server calls to the PHP side (back/modules/dubai_customer/...).
// Browser code never sees DUBAI_BACK_KEY or talks to PHP directly.
const BASE = (process.env.DUBAI_BACK_URL || "https://safestorage.in/back/dubai_customer").replace(/\/$/, "")

export type BackResult<T> = { ok: boolean; status: number; data: T | null }

export async function callBack<T = Record<string, unknown>>(
  path: "login" | "account",
  form: Record<string, string>,
  visitorIp?: string
): Promise<BackResult<T>> {
  const key = process.env.DUBAI_BACK_KEY || ""
  if (key.length < 32) return { ok: false, status: 503, data: null }
  try {
    const res = await fetch(`${BASE}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Dubai-Key": key,
        ...(visitorIp ? { "X-Forwarded-For": visitorIp } : {}),
      },
      body: new URLSearchParams(form).toString(),
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
