// The visitor's IP as nginx saw it. nginx APPENDS to X-Forwarded-For ($proxy_add_x_forwarded_for), so the FIRST hop is
// whatever the visitor typed and must never be trusted. X-Real-IP is overwritten by nginx ($remote_addr) and is the
// real peer; the LAST X-Forwarded-For hop is the same address and is the fallback.
export function clientIp(request: Request): string | undefined {
  const real = (request.headers.get("x-real-ip") || "").trim()
  if (real) return real
  const hops = (request.headers.get("x-forwarded-for") || "").split(",").map((h) => h.trim()).filter(Boolean)
  return hops.length ? hops[hops.length - 1] : undefined
}
