import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND } from "../data/brand";
import {
  FLOOR_OPTIONS,
  LIFT_OPTIONS,
  liftMattersFor,

} from "../data/pickup";
import {
  newSessionToken,
  placeDetails,
  placesAvailable,
  warmPlaces,
  suggestPlaces,
  type PlaceSuggestion,
} from "../api/places";

/**
 * The pickup step: address, floor and lift, collected together.
 *
 * WHY ONE STEP AND NOT THREE
 * --------------------------
 * Floor and lift are two taps that only make sense next to the address — they
 * are all one question ("where do we come, and what is the carry?"). As
 * separate wizard steps they added two more screens to a funnel that already
 * loses people, and the widget was shipping neither: the quote bridge
 * hardcoded `pickup_floor: ground` / `pickup_lift: yes`, so a 4th-floor walk-up
 * was quoted 1,500 short of what it costs.
 *
 * The lift row appears only above ground level, because
 * calculate_total_lift_cost() returns 0 for ground and basement whatever the
 * lift answer is — see data/pickup.ts.
 *
 * ADDRESS SUGGESTIONS
 * -------------------
 * Google Places, through api/places.ts (REST, no script tag — the host page
 * may already have the Maps SDK loaded). Picking a suggestion is what gives us
 * lat/lng, and without those the site computes a zero distance and drops the
 * >70km transport surcharge, so the field nudges towards selecting rather than
 * typing — but never blocks it. Behaviour otherwise unchanged: 200ms debounce,
 * ↑/↓ to move, Enter to select, Esc to dismiss, click to select, plain text
 * entry when no provider is available.
 */

export interface PickupSubmission {
  address: string;
  floor: string;
  lift: string;
  /** YYYY-MM-DD -> ss_customer.storage_date */
  date: string;
}

const DEBOUNCE_MS = 200;
const MIN_CHARS = 3;

export function AddressAutocomplete({
  value,
  placeholder,
  error,
  initialFloor = "",
  initialLift = "",
  onChange,
  onSelect,
  onSubmit,
}: {
  value: string;
  placeholder?: string;
  error?: string;
  /** Seeded when the customer comes back to this step from the summary. */
  initialFloor?: string;
  initialLift?: string;
  onChange: (v: string) => void;
  onSelect?: (s: { lat?: number; lon?: number; city?: string; postcode?: string }) => void;
  onSubmit: (p: PickupSubmission) => void;
}) {
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [floor, setFloor] = useState(initialFloor);
  const [lift, setLift] = useState(initialLift);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const abortRef = useRef<AbortController | null>(null);
  // guards against a slow earlier response overwriting a newer one
  const reqIdRef = useRef(0);
  // set when the user picks a suggestion, so we don't immediately re-search
  const justSelectedRef = useRef(false);
  // One Google session token per address the customer is looking for: sent with
  // every keystroke and again with the details lookup, so the whole search is
  // billed once instead of per request.
  const sessionRef = useRef(newSessionToken());

  const canSuggest = placesAvailable();

  useEffect(() => {
    inputRef.current?.focus();
    // Start fetching the Places SDK the moment the step opens rather than on
    // the first keystroke. See warmPlaces -- REST is refused on this project,
    // so without this the first suggestion waits for a 403 plus a script load.
    warmPlaces();
  }, []);

  const fetchSuggestions = useCallback(
    async (text: string) => {
      if (!canSuggest || text.trim().length < MIN_CHARS) {
        setSuggestions([]);
        setOpen(false);
        return;
      }

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const myReq = ++reqIdRef.current;

      setLoading(true);
      try {
        const list = await suggestPlaces(text, sessionRef.current, controller.signal);

        // ignore a response that a newer keystroke has already superseded
        if (myReq !== reqIdRef.current) return;

        setSuggestions(list);
        setOpen(list.length > 0);
        setHighlight(-1);
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          // Network/API trouble shouldn't block the customer — they can still type freely.
          setSuggestions([]);
          setOpen(false);
        }
      } finally {
        if (myReq === reqIdRef.current) setLoading(false);
      }
    },
    [canSuggest]
  );

  // debounce input -> fetch
  useEffect(() => {
    if (justSelectedRef.current) {
      justSelectedRef.current = false;
      return;
    }
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => fetchSuggestions(value), DEBOUNCE_MS);
    return () => window.clearTimeout(timerRef.current);
  }, [value, fetchSuggestions]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const choose = (s: PlaceSuggestion) => {
    justSelectedRef.current = true;
    onChange(s.formatted);
    setOpen(false);
    setSuggestions([]);
    setHighlight(-1);
    inputRef.current?.focus();

    // Coordinates arrive a moment later; the address is already in the field,
    // so a slow or failed lookup costs the customer nothing.
    placeDetails(s.id, sessionRef.current)
      .then((d) => {
        if (!d) return;
        onSelect?.({ lat: d.lat, lon: d.lon, city: d.city, postcode: d.postcode });
        // A fresh search after this one is a new billing session.
        sessionRef.current = newSessionToken();
      })
      .catch(() => {
        /* no coordinates — the quote is priced without the distance leg */
      });
  };

  /** Validation the wizard step itself cannot do: floor and lift live here. */
  const send = () => {
    onSubmit({
      address: value,
      // The safestorage.ae quote form takes no pickup date (booking happens
      // later, in the CRM), so the chat does not ask for one either.
      date: "",
      floor,
      lift: liftMattersFor(floor) ? lift : "yes",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        send();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h <= 0 ? suggestions.length - 1 : h - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlight >= 0) choose(suggestions[highlight]);
      else send();
    } else if (e.key === "Escape") {
      setOpen(false);
      setHighlight(-1);
    }
  };

  /** Shared pill styling — same look as OptionButtons, in a scrolling row. */
  const pill = (selected: boolean) => ({
    borderColor: BRAND.navy,
    background: selected ? BRAND.navy : "transparent",
    color: selected ? "#fff" : BRAND.navy,
  });

  return (
    <div>
      <div className="relative">
        <div className="flex items-end">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                // Selection happens on mouseDown, so closing immediately here is safe.
                setOpen(false);
                setHighlight(-1);
              }}
              onFocus={() => suggestions.length > 0 && setOpen(true)}
              autoComplete="off"
              aria-label="Pickup address"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
            />
            {loading && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                …
              </span>
            )}

            {open && suggestions.length > 0 && (
              <ul
                className="absolute bottom-full mb-1 left-0 right-0 rounded-xl shadow-2xl max-h-52 overflow-y-auto z-[10000] border border-gray-200"
                style={{ backgroundColor: "#ffffff" }}
                role="listbox"
              >
                {suggestions.map((s, i) => (
                  <li key={`${s.id || s.formatted}-${i}`} role="option" aria-selected={i === highlight}>
                    <button
                      type="button"
                      /* Select on mouseDown: onBlur fires before onClick and would
                         close the list first, so the click never lands. */
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        choose(s);
                      }}
                      onMouseEnter={() => setHighlight(i)}
                      className="w-full text-left px-3 py-2.5 text-sm cursor-pointer border-b border-gray-100 last:border-b-0"
                      style={{
                        backgroundColor: i === highlight ? "#f3f4f6" : "#ffffff",
                      }}
                    >
                      <span className="block text-gray-800 leading-snug">
                        {s.main || s.formatted}
                      </span>
                      {s.secondary && (
                        <span className="block text-[11px] text-gray-500 leading-snug">
                          {s.secondary}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>

      {/* Floor — one horizontal row, same pattern as the emirate picker. */}
      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1.5">
          Which floor?
        </p>
        <div
          className="flex gap-2 overflow-x-auto pb-1.5 -mx-0.5 px-0.5"
          style={{ scrollbarWidth: "thin" }}
          role="radiogroup"
          aria-label="Pickup floor"
        >
          {FLOOR_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={floor === o.value}
              onClick={() => setFloor(o.value)}
              className="flex-shrink-0 text-sm px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-colors"
              style={pill(floor === o.value)}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lift — only above ground, where it changes the price. */}
      {liftMattersFor(floor) && (
        <div className="mt-2">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1.5">
            Is there a lift?
          </p>
          <div className="flex gap-2" role="radiogroup" aria-label="Lift available">
            {LIFT_OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={lift === o.value}
                onClick={() => setLift(o.value)}
                className="flex-1 text-sm px-3 py-1.5 rounded-full border transition-colors"
                style={pill(lift === o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Send sits at the BOTTOM, under the last field. Next to the address it
          read as "search this address" and people pressed it before choosing a
          floor or a lift answer; at the end of the step it means what it says. */}
      <button
        onClick={send}
        className="w-full mt-3 text-white text-sm font-semibold py-2.5 rounded-xl"
        style={{ background: BRAND.navy }}
      >
        Send
      </button>

      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
      {!canSuggest && (
        <p className="text-[11px] text-gray-400 mt-1.5">
          Type your area, choose the floor and press Send.
        </p>
      )}
    </div>
  );
}
