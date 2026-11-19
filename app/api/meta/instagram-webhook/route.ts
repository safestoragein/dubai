// Instagram webhook relay.
//
// Meta has blocked the safestorage.in domain (Sharing Debugger: "doesn't meet our
// Community Standards"), so it refuses to call ANY url on it - including the lead
// webhook /back/meta/instagram_webhook. This domain is not blocked, so Meta calls
// HERE and we forward the request, byte for byte, to the PHP endpoint that owns
// the verify token, the signature check and the ss_leads insert.
//
// Deliberately dumb: no secrets live here, nothing is parsed, nothing is stored.
// The signature is computed over the exact raw bytes, so the body is forwarded
// untouched together with X-Hub-Signature-256 and PHP does the real verification.
// The upstream path is fixed, so this cannot be used as an open proxy.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const UPSTREAM = "https://safestorage.in/back/meta/instagram_webhook"
const TIMEOUT_MS = 8000

// GET: Meta's subscription handshake (hub.mode / hub.verify_token / hub.challenge).
export async function GET(request: Request) {
  const query = new URL(request.url).searchParams
  const forward = new URLSearchParams()
  for (const key of ["hub.mode", "hub.verify_token", "hub.challenge"]) {
    const value = query.get(key)
    if (value !== null) forward.set(key, value)
  }

  try {
    const res = await fetch(`${UPSTREAM}?${forward.toString()}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    // The challenge must come back raw and byte-exact, so return the text as-is.
    return new Response(await res.text(), {
      status: res.status,
      headers: { "content-type": "text/plain; charset=utf-8" },
    })
  } catch (error) {
    console.error("[instagram-webhook-relay] handshake upstream failed:", error)
    return new Response("upstream unavailable", { status: 502 })
  }
}

// POST: signed event delivery (messages / comments).
export async function POST(request: Request) {
  const raw = await request.text()

  const headers: Record<string, string> = { "content-type": "application/json" }
  const signature = request.headers.get("x-hub-signature-256")
  if (signature) headers["x-hub-signature-256"] = signature

  try {
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers,
      body: raw,
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    return new Response(await res.text(), {
      status: res.status,
      headers: { "content-type": "application/json" },
    })
  } catch (error) {
    // Non-2xx makes Meta retry the delivery, which is what we want if PHP is down.
    console.error("[instagram-webhook-relay] event upstream failed:", error)
    return new Response(JSON.stringify({ status: "upstream unavailable" }), {
      status: 502,
      headers: { "content-type": "application/json" },
    })
  }
}
