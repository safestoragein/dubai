/**
 * Where the widget's own API lives.
 *
 * Empty by default: the widget is served from safestorage.ae itself, so
 * `/api/leo/...` is same-origin — no CORS, and the same Next server that holds
 * the pricing code answers. Set VITE_API_BASE_URL only to point a local build
 * at another host.
 */
export const BASE: string = ((import.meta as any).env?.VITE_API_BASE_URL || "").replace(/\/$/, "");
