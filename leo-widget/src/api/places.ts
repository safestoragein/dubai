import { BRAND } from "../data/brand";

/**
 * Google Places autocomplete for the pickup address.
 *
 * WHY REST AND NOT THE MAPS JS SDK
 * --------------------------------
 * The widget is injected into pages we do not control, and
 * customer/create-quotation — the page it matters most on — ALREADY loads
 * `maps.googleapis.com/maps/api/js?...&libraries=places` for its own address
 * field. Appending a second copy of that script is Google's documented
 * "You have included the Google Maps JavaScript API multiple times" error, and
 * it breaks the host page's field, not just ours. The Places API (New) REST
 * endpoints send CORS headers, so a plain fetch does the same job with nothing
 * added to the page.
 *
 * THREE TRANSPORTS, IN ORDER
 *   1. REST + VITE_GOOGLE_MAPS_API_KEY — the normal path.
 *   2. The host page's own SDK, if it already has one. Costs nothing, uses the
 *      key that page is already billing, and means the address step still works
 *      on create-quotation even if our key is missing or Places API (New) is
 *      not enabled on the project.
 *   3. Nothing — the caller falls back to plain typed text.
 *
 * Coordinates are the point of all this: without lat/lng the site computes a
 * zero distance and the transport price silently loses its >70km surcharge.
 */

const KEY = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY || "";
const AUTOCOMPLETE_URL = "https://places.googleapis.com/v1/places:autocomplete";
const DETAILS_URL = "https://places.googleapis.com/v1/places";

/** Bias radius around BRAND.geoBiasCity, in metres. */
const BIAS_RADIUS_M = 50000;

export interface PlaceSuggestion {
  /** Google place id, or "" for a suggestion that carries no lookup id. */
  id: string;
  /** Full one-line address, shown in the list and put into the input. */
  formatted: string;
  /** The leading part ("Koramangala 5th Block"), bolded in the list. */
  main?: string;
  /** The trailing part ("Bengaluru, Karnataka, India"). */
  secondary?: string;
}

export interface PlaceDetail {
  formatted: string;
  city?: string;
  postcode?: string;
  lat?: number;
  lon?: number;
}

/**
 * Set once a REST call has failed with a key/permission error.
 *
 * Remembered for the tab, not just the page: Places API (New) is currently NOT
 * enabled on the Google project, so every REST call 403s. Without this, each
 * new page paid that ~0.6-1.7s refusal again on the customer's first keystroke
 * before the SDK path even started. Once we have learned it is off, we go
 * straight to the SDK. sessionStorage rather than localStorage so enabling the
 * API in the console takes effect for everyone on their next visit rather than
 * being cached indefinitely.
 */
const REST_DEAD_KEY = "storo_places_rest_dead";

function readRestBroken(): boolean {
  try {
    return sessionStorage.getItem(REST_DEAD_KEY) === "1";
  } catch {
    return false;
  }
}

let restBroken = readRestBroken();

/**
 * True while a REST call is in flight and we still do not know the verdict.
 *
 * Without it, a fast typist fires a doomed REST request per keystroke until the
 * first 403 finally lands — the SDK wins each race, so nobody waits, but every
 * one of those requests is wasted. One probe at a time is enough to learn.
 */
let restProbeInFlight = false;

function markRestBroken() {
  restBroken = true;
  try {
    sessionStorage.setItem(REST_DEAD_KEY, "1");
  } catch {
    /* private mode — in-memory flag still holds for this page */
  }
}

/** The host page's Places SDK, if one is already loaded. */
function hostPlaces(): any | null {
  const g = (globalThis as any).google;
  return g?.maps?.places?.AutocompleteService ? g.maps : null;
}

/**
 * Load the Maps JS SDK ourselves when the page has none.
 *
 * Needed because Places API (New) is not enabled on the Google project — the
 * REST endpoints answer 403 SERVICE_DISABLED — while the classic JS SDK works
 * with the same key, and is exactly what the site's own address field uses.
 * /customer/create-quotation already loads it; /box-storage and the rest of
 * the site do not, so without this the field offers nothing at all there.
 *
 * Memoised, and it never adds a second <script>: two copies of maps/api/js on
 * one page is Google's "included multiple times" error, which would break the
 * host page's own field as well as ours.
 */
let sdkPromise: Promise<any | null> | null = null;

function loadSdk(): Promise<any | null> {
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve) => {
    const ready = () => hostPlaces();
    if (ready()) return resolve(ready());
    if (!KEY) return resolve(null);

    // Someone else's tag is already in flight — wait for it rather than add ours.
    const existing = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
    const waitFor = (ms: number) => {
      const started = Date.now();
      const tick = () => {
        if (ready()) return resolve(ready());
        if (Date.now() - started > ms) return resolve(null);
        setTimeout(tick, 150);
      };
      tick();
    };

    if (existing) return waitFor(10000);

    const el = document.createElement("script");
    el.async = true;
    el.src =
      "https://maps.googleapis.com/maps/api/js?libraries=places&loading=async&key=" +
      encodeURIComponent(KEY);
    el.onload = () => waitFor(5000);
    el.onerror = () => resolve(null);
    document.head.appendChild(el);
  });

  return sdkPromise;
}

/**
 * Start loading the SDK now, without waiting for a keystroke.
 *
 * The address step calls this on mount. It matters because REST is refused on
 * this project, so the real transport is the SDK -- and loading it lazily meant
 * the customer's first keystroke waited for a 403 AND a script download AND the
 * 150ms polling tick before a single suggestion appeared. Warmed on mount, the
 * script is already there by the time they have typed three characters.
 *
 * Fire and forget: it must never block rendering, and a failure here just
 * leaves the field working as plain typed text, exactly as before.
 */
export function warmPlaces(): void {
  if (!KEY && !hostPlaces()) return;
  void loadSdk();
}

/** True when the field can offer suggestions at all. */
export function placesAvailable(): boolean {
  return Boolean(KEY || hostPlaces());
}

/** [lat, lon] from BRAND.geoBiasCity, which is stored "lon,lat". */
function biasLatLon(): [number, number] | null {
  const raw = String(BRAND.geoBiasCity || "").trim();
  if (!raw) return null;
  const [lon, lat] = raw.split(",").map((n) => Number(n.trim()));
  return Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : null;
}

/**
 * One token per typing session, sent with every keystroke and again with the
 * details lookup, so Google bills the session once instead of per request.
 * Not crypto — it only has to be unique.
 */
export function newSessionToken(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// ── REST ────────────────────────────────────────────────────────────────

async function restSuggest(
  input: string,
  sessionToken: string,
  signal?: AbortSignal
): Promise<PlaceSuggestion[]> {
  const bias = biasLatLon();
  const body: Record<string, unknown> = {
    input,
    // Region, not a hard filter on the free-text — this is the market switch
    // that used to be Geoapify's `countrycode:`.
    includedRegionCodes: [BRAND.geoCountryCode],
    languageCode: "en",
    sessionToken,
  };
  if (bias) {
    body.locationBias = {
      circle: { center: { latitude: bias[0], longitude: bias[1] }, radius: BIAS_RADIUS_M },
    };
  }

  const res = await fetch(AUTOCOMPLETE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    // 400/401/403 means the key is wrong, restricted, or Places API (New) is
    // not enabled — retrying every keystroke would just burn requests, so stop
    // using REST for the rest of this page's life and let the SDK path take it.
    if (res.status === 400 || res.status === 401 || res.status === 403) {
      markRestBroken();
      console.warn(`[Storo] Google Places REST unusable (HTTP ${res.status}) — falling back.`);
    }
    throw new Error(`places:autocomplete ${res.status}`);
  }

  const data = await res.json();
  return (data.suggestions || [])
    .map((s: any) => s.placePrediction)
    .filter(Boolean)
    .map((p: any) => ({
      id: p.placeId || "",
      formatted: p.text?.text || "",
      main: p.structuredFormat?.mainText?.text,
      secondary: p.structuredFormat?.secondaryText?.text,
    }))
    .filter((s: PlaceSuggestion) => s.formatted);
}

function componentOfType(components: any[], type: string): string | undefined {
  const hit = (components || []).find((c) => (c.types || []).includes(type));
  return hit?.longText || hit?.long_name;
}

async function restDetails(placeId: string, sessionToken: string): Promise<PlaceDetail | null> {
  const res = await fetch(`${DETAILS_URL}/${encodeURIComponent(placeId)}?sessionToken=${sessionToken}`, {
    headers: {
      "X-Goog-Api-Key": KEY,
      // Field mask is mandatory on the new API and is what you are billed on —
      // ask for the four fields we use and nothing else.
      "X-Goog-FieldMask": "formattedAddress,location,addressComponents",
    },
  });
  if (!res.ok) {
    if (res.status === 400 || res.status === 401 || res.status === 403) markRestBroken();
    return null;
  }
  const d = await res.json();
  return {
    formatted: d.formattedAddress || "",
    city:
      componentOfType(d.addressComponents, "locality") ||
      componentOfType(d.addressComponents, "administrative_area_level_2"),
    postcode: componentOfType(d.addressComponents, "postal_code"),
    lat: d.location?.latitude,
    lon: d.location?.longitude,
  };
}

// ── Host page's Maps JS SDK ─────────────────────────────────────────────

function sdkSuggest(input: string, sessionToken: string): Promise<PlaceSuggestion[]> {
  const maps = hostPlaces();
  if (!maps) return Promise.resolve([]);
  const svc = new maps.places.AutocompleteService();
  const bias = biasLatLon();

  const req: Record<string, unknown> = {
    input,
    componentRestrictions: { country: BRAND.geoCountryCode },
    sessionToken: new maps.places.AutocompleteSessionToken(),
  };
  if (bias) {
    req.location = new maps.LatLng(bias[0], bias[1]);
    req.radius = BIAS_RADIUS_M;
  }

  return new Promise((resolve) => {
    svc.getPlacePredictions(req, (predictions: any[], status: string) => {
      if (status !== "OK" || !predictions) return resolve([]);
      resolve(
        predictions.map((p) => ({
          id: p.place_id || "",
          formatted: p.description,
          main: p.structured_formatting?.main_text,
          secondary: p.structured_formatting?.secondary_text,
        }))
      );
    });
  });
}

function sdkDetails(placeId: string): Promise<PlaceDetail | null> {
  const maps = hostPlaces();
  if (!maps) return Promise.resolve(null);
  // PlacesService needs a node to attribute results to; it is never displayed.
  const svc = new maps.places.PlacesService(document.createElement("div"));
  return new Promise((resolve) => {
    svc.getDetails(
      { placeId, fields: ["formatted_address", "geometry", "address_components"] },
      (place: any, status: string) => {
        if (status !== "OK" || !place) return resolve(null);
        resolve({
          formatted: place.formatted_address || "",
          city:
            componentOfType(place.address_components, "locality") ||
            componentOfType(place.address_components, "administrative_area_level_2"),
          postcode: componentOfType(place.address_components, "postal_code"),
          lat: place.geometry?.location?.lat?.(),
          lon: place.geometry?.location?.lng?.(),
        });
      }
    );
  });
}

// ── Public API ──────────────────────────────────────────────────────────

/** Address suggestions for what the customer has typed so far. */
export async function suggestPlaces(
  input: string,
  sessionToken: string,
  signal?: AbortSignal
): Promise<PlaceSuggestion[]> {
  const text = input.trim();
  if (!text) return [];

  const viaSdk = async (): Promise<PlaceSuggestion[]> => {
    const maps = await loadSdk();
    if (!maps) return [];
    return sdkSuggest(text, sessionToken);
  };

  // Once we know REST is refused on this project, never ask it again — and
  // while the very first probe is still out, let it settle the question alone.
  if (!KEY || restBroken || restProbeInFlight) return viaSdk();

  /*
   * We do NOT know yet whether REST works, and finding out serially is what
   * made the first suggestion of every session slow: the customer waited the
   * full ~1.3s for Places API (New) to refuse us before the SDK was even
   * asked. So race them and take the first real answer.
   *
   * Costs nothing extra in the normal case — the SDK is already warm by now
   * (see warmPlaces), so the loser is a promise nobody awaits — and it
   * self-heals in both directions: enable the API in the console and REST
   * starts winning on its own; leave it off and the one 403 per session is
   * absorbed by the SDK answering in parallel rather than after.
   */
  let settled = false;
  return new Promise<PlaceSuggestion[]>((resolve, reject) => {
    let pending = 2;
    const lose = (err?: any) => {
      // An abort is the caller superseding us, not a transport failing.
      if (err?.name === "AbortError" && !settled) {
        settled = true;
        return reject(err);
      }
      if (--pending === 0 && !settled) {
        settled = true;
        resolve([]);
      }
    };
    const win = (hits: PlaceSuggestion[]) => {
      // An empty list is not an answer worth beating the other transport with:
      // a refused REST call and a genuinely unmatched query look the same from
      // here, so let the other one have its turn before giving up.
      if (settled) return;
      if (!hits.length) return lose();
      settled = true;
      resolve(hits);
    };

    restProbeInFlight = true;
    restSuggest(text, sessionToken, signal)
      .finally(() => {
        restProbeInFlight = false;
      })
      .then(win, lose);
    viaSdk().then(win, lose);
  });
}

/**
 * Coordinates and address parts for a chosen suggestion.
 * Returns null when the lookup fails — the caller keeps the typed text and the
 * quote is simply priced without the distance leg.
 */
export async function placeDetails(
  placeId: string,
  sessionToken: string
): Promise<PlaceDetail | null> {
  if (!placeId) return null;
  if (KEY && !restBroken) {
    const hit = await restDetails(placeId, sessionToken);
    if (hit) return hit;
  }
  await loadSdk();
  return sdkDetails(placeId);
}
