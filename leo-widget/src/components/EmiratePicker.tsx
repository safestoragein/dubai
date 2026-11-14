import { useEffect, useMemo, useRef, useState } from "react";
import { BRAND } from "../data/brand";
import { fetchCities, type City } from "../api/cities";

/**
 * Emirate chooser fed by the live ss_city list (status 0, country AE — the same
 * list the /get-quote form's emirate dropdown shows) rather than a hardcoded
 * array, so an emirate the site cannot serve is never offerable.
 *
 * One horizontal row with its own scroller. The search box only matters if the
 * list grows, but it costs nothing and keeps the picker identical to India's.
 */
export function EmiratePicker({ onPick }: { onPick: (emirateName: string) => void }) {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [q, setQ] = useState("");
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let alive = true;
    fetchCities()
      .then((list) => {
        if (!alive) return;
        setCities(list);
        setFailed(list.length === 0);
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return cities;
    return cities.filter((c) => c.name.toLowerCase().includes(needle));
  }, [cities, q]);

  // A filtered list left mid-scroll looks empty — snap back to the start.
  useEffect(() => {
    rowRef.current?.scrollTo({ left: 0 });
  }, [q]);

  if (loading) {
    return <p className="text-xs text-gray-400 py-2">Getting the emirate list…</p>;
  }

  if (failed) {
    return (
      <p className="text-xs text-gray-500 py-2">
        I could not load the emirate list just now. Please call us on {BRAND.phoneDisplay} and our team will help.
      </p>
    );
  }

  return (
    <div className="mt-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Type to find your emirate…"
        className="w-full px-3.5 py-2.5 mb-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
        aria-label="Search emirate"
      />

      <div
        ref={rowRef}
        className="flex gap-2 overflow-x-auto pb-2 -mx-0.5 px-0.5"
        style={{ scrollbarWidth: "thin" }}
      >
        {filtered.map((c) => (
          <button
            key={c.slug}
            onClick={() => onPick(c.name)}
            className="flex-shrink-0 text-sm px-3.5 py-2 rounded-full border whitespace-nowrap transition-colors"
            style={{ borderColor: BRAND.navy, color: BRAND.navy }}
            /* Colour must flip here too, not via hover:text-white — an inline
               style beats a CSS class, so the emirate name stayed navy on navy. */
            onMouseEnter={(e) => {
              e.currentTarget.style.background = BRAND.navy;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = BRAND.navy;
            }}
          >
            {c.name}
          </button>
        ))}

        {filtered.length === 0 && (
          <button
            onClick={() => onPick(q.trim())}
            className="flex-shrink-0 text-sm px-3.5 py-2 rounded-full border border-dashed border-gray-300 text-gray-600 whitespace-nowrap"
          >
            Use "{q.trim()}" — we will check this emirate for you
          </button>
        )}
      </div>
    </div>
  );
}
