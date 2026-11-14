import { BASE } from "./base";

export interface City {
  slug: string;
  name: string;
}

/**
 * The emirates SafeStorage serves, from ss_city (country AE) via
 * get_dubai_emirates. Returns [] on failure so the caller can fall back to
 * free text rather than dead-ending a customer whose emirate we simply failed
 * to load. (Type and function keep the India names; the data is emirates.)
 */
export async function fetchCities(): Promise<City[]> {
  try {
    const res = await fetch(`${BASE}/api/leo/emirates`);
    const data = await res.json();
    return Array.isArray(data?.emirates) ? data.emirates : [];
  } catch {
    return [];
  }
}
