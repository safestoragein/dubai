import { useCallback, useEffect, useMemo, useState } from "react";
import { BRAND } from "../data/brand";
import { fetchCatalogue, type CatalogueItem, type PickedItem } from "../api/items";
import { ITEM_GROUPS, groupFor } from "../data/itemGroups";

/**
 * Item picker — the quote form's "choose your items" step, in the chat.
 *
 * Same list as /get-quote (dubai_items_list). That list carries only a name and
 * a points figure per item — no categories, no per-home-size presets — so this
 * picker does not seed a basket: the customer searches, or walks a shelf, and
 * adds what they have. Shelves (data/itemGroups) are a browsing aid grouped by
 * name; nothing about a shelf reaches the quote. The price is worked out on the
 * server from the item NAMES and quantities sent, using the points held there.
 */

const MAX_RESULTS = 30;

export function ItemsPicker({
  error,
  onSubmit,
}: {
  error?: string;
  storageType?: string;
  onSubmit: (picked: PickedItem[]) => void;
}) {
  const [all, setAll] = useState<CatalogueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [picked, setPicked] = useState<PickedItem[]>([]);
  const [q, setQ] = useState("");
  // Which shelf is open for browsing; "" = showing the basket instead.
  const [browsing, setBrowsing] = useState("");

  useEffect(() => {
    let live = true;
    fetchCatalogue().then((items) => {
      if (!live) return;
      setAll(items);
      setLoading(false);
    });
    return () => {
      live = false;
    };
  }, []);

  const setQty = useCallback((item: CatalogueItem, qty: number) => {
    setPicked((prev) => {
      const rest = prev.filter((p) => p.id !== item.id);
      return qty > 0 ? [...rest, { ...item, qty }] : rest;
    });
  }, []);

  const searching = q.trim().length >= 1;

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    const hits = all.filter((i) => i.name.toLowerCase().includes(needle));
    // Names that START with what they typed are what they meant.
    hits.sort((a, b) => {
      const as = a.name.toLowerCase().startsWith(needle) ? 0 : 1;
      const bs = b.name.toLowerCase().startsWith(needle) ? 0 : 1;
      return as - bs || a.name.localeCompare(b.name);
    });
    return hits.slice(0, MAX_RESULTS);
  }, [all, q]);

  const qtyOf = useCallback((id: string) => picked.find((p) => p.id === id)?.qty ?? 0, [picked]);
  const totalCount = useMemo(() => picked.reduce((n, p) => n + p.qty, 0), [picked]);

  /** How many shelves have something on them, for the chip counters. */
  const countsByGroup = useMemo(() => {
    const n: Record<string, number> = {};
    for (const p of picked) {
      const k = groupFor(p);
      n[k] = (n[k] ?? 0) + p.qty;
    }
    return n;
  }, [picked]);

  /** The open shelf's rows, alphabetical — a shelf is browsed, not ranked. */
  const shelfItems = useMemo(() => {
    if (!browsing) return [];
    return all
      .filter((i) => groupFor(i) === browsing)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [all, browsing]);

  return (
    <div className="mt-3">
      {/* 1 — search the item list */}
      <div className="relative mt-2.5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={loading ? "Loading items…" : "Search an item, e.g. sofa, fridge…"}
          disabled={loading}
          className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2"
          aria-label="Search items"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-[11px] leading-none"
          >
            ✕
          </button>
        )}
      </div>

      {/* Shelves. Hidden while searching — a search already spans every shelf,
          so leaving them up would offer a second, narrower way to do the thing
          the customer is already doing. */}
      {/* One scrolling row, not a wrapped block: three stacked lines of chips
          pushed the basket below the fold on a 400px panel. Same pattern the
          floor pills use on the address step. */}
      {!searching && (
        <div className="mt-2.5 flex gap-1.5 overflow-x-auto pb-1.5 -mx-0.5 px-0.5">
          {ITEM_GROUPS.map((g) => {
            const open = browsing === g.key;
            const n = countsByGroup[g.key] ?? 0;
            return (
              <button
                key={g.key}
                disabled={loading}
                onClick={() => setBrowsing(open ? "" : g.key)}
                aria-pressed={open}
                /* Spelled out rather than left to the emoji + label + bare
                   count, which reads as "Boxes & Bags8". */
                aria-label={n > 0 ? `${g.label}, ${n} selected` : g.label}
                className="flex-shrink-0 whitespace-nowrap text-[11px] font-medium px-2.5 py-1.5 rounded-full border disabled:opacity-50 leading-none"
                style={
                  open
                    ? { background: BRAND.navy, borderColor: BRAND.navy, color: "#fff" }
                    : { borderColor: "#D8DEEA", color: BRAND.navy, background: "#fff" }
                }
              >
                <span aria-hidden="true">{g.icon}</span> {g.label}
                {n > 0 && (
                  <span
                    className="ml-1 font-bold"
                    style={{ color: open ? "#fff" : BRAND.accent }}
                  >
                    {n}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Search results replace the list while typing — on a 400px panel both at
          once pushes Continue off the bottom. */}
      {searching && (
        <div className="mt-2 rounded-xl border border-gray-200 bg-white overflow-y-auto" style={{ maxHeight: 200 }}>
          {results.length === 0 && (
            <p className="text-xs text-gray-500 px-3 py-3 leading-relaxed">
              No item by that name. Try a shorter word — or leave it out and our team will add it
              when they call.
            </p>
          )}
          {results.map((item) => {
            const qty = qtyOf(item.id);
            return (
              <Row
                key={item.id}
                name={item.name}
                qty={qty}
                /* Whole row adds — see Row. In the results list the row has no
                   other job, and hunting a small "Add" pill on a phone is the
                   slowest part of this step. */
                selectable
                onAdd={() => setQty(item, qty + 1)}
                onLess={() => setQty(item, qty - 1)}
              />
            );
          })}
        </div>
      )}

      {/* An open shelf — browse and add, same rows as the search results. */}
      {!searching && browsing && (
        <>
          <div className="flex items-baseline justify-between mt-3 mb-1">
            <h4 className="text-[11px] uppercase tracking-wide text-gray-400 font-normal">
              {ITEM_GROUPS.find((g) => g.key === browsing)?.label} ({shelfItems.length})
            </h4>
            <button
              onClick={() => setBrowsing("")}
              className="text-[11px] font-medium"
              style={{ color: BRAND.accent }}
            >
              Done · back to my items
            </button>
          </div>
          <div
            className="rounded-xl border border-gray-200 bg-white overflow-y-auto"
            style={{ maxHeight: 260 }}
          >
            {shelfItems.length === 0 && <Muted>Nothing on this shelf yet.</Muted>}
            {shelfItems.map((item) => {
              const qty = qtyOf(item.id);
              return (
                <Row
                  key={item.id}
                  name={item.name}
                  qty={qty}
                  selectable
                  onAdd={() => setQty(item, qty + 1)}
                  onLess={() => setQty(item, qty - 1)}
                />
              );
            })}
          </div>
        </>
      )}

      {/* 2 — the list they are actually sending */}
      {!searching && !browsing && (
        <>
          <div className="flex items-baseline justify-between mt-3 mb-1">
            <p className="text-[11px] uppercase tracking-wide text-gray-400">
              Your items {picked.length > 0 && `(${totalCount})`}
            </p>
            {picked.length > 0 && (
              <button onClick={() => setPicked([])} className="text-[11px] text-gray-400 hover:text-gray-600">
                Clear all
              </button>
            )}
          </div>

          {/* No maxHeight and no overflow here on purpose. This box used to be a
              210px scroller sitting INSIDE the panel's own message scroller, so
              a 13-item 1 RK list showed three rows and a second scrollbar —
              people could not tell there was more, or which scrollbar they were
              on. The list now renders whole and the panel scrolls once. */}
          <div className="rounded-xl border border-gray-200 bg-white">
            {loading && <Muted>Loading the item list…</Muted>}

            {!loading && picked.length === 0 && (
              <Muted>
                Search for an item above, or pick a category, and tap an item to add it.
              </Muted>
            )}

            {/* Flat on purpose. The shelves are how you FIND something; the
                basket is a list you check and edit, and headings there just
                made a short list taller without telling the customer anything
                they did not already know from the row itself. */}
            {!loading &&
              picked.map((p) => (
                <Row
                  key={p.id}
                  name={p.name}
                  qty={p.qty}
                  onAdd={() => setQty(p, p.qty + 1)}
                  onLess={() => setQty(p, p.qty - 1)}
                  onRemove={() => setQty(p, 0)}
                />
              ))}
          </div>
        </>
      )}

      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

      {/* Sticky: with the list at full height the button can sit below the fold,
          and a customer who cannot see Continue assumes the step is unfinished. */}
      <button
        onClick={() => onSubmit(picked)}
        disabled={picked.length === 0}
        className="sticky bottom-0 w-full mt-2.5 text-white text-sm font-semibold py-3 rounded-xl disabled:opacity-40 shadow-lg"
        style={{ background: BRAND.navy }}
      >
        {picked.length === 0 ? "Add at least one item" : `Continue with ${totalCount} item${totalCount === 1 ? "" : "s"} →`}
      </button>
    </div>
  );
}

/**
 * One item line.
 *
 * `selectable` makes the WHOLE row add the item, not just the "Add" pill — the
 * pill is a small target on a phone, and a row that looks like a list entry but
 * only responds on one corner of itself reads as broken. The pill stays: it is
 * what tells you the row is actionable at all.
 *
 * The +, −, and ✕ buttons stop propagation, so pressing − cannot also fire the
 * row's add and leave the quantity where it started.
 */
function Row({
  name,
  qty,
  onAdd,
  onLess,
  onRemove,
  selectable = false,
}: {
  name: string;
  qty: number;
  onAdd: () => void;
  onLess: () => void;
  onRemove?: () => void;
  selectable?: boolean;
}) {
  const stop = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  // Keyboard parity: a div that behaves like a button has to answer to Enter
  // and Space like one.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!selectable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 border-b border-gray-100 last:border-b-0 ${
        selectable ? "cursor-pointer hover:bg-gray-50 active:bg-gray-100" : ""
      }`}
      style={qty > 0 && !onRemove ? { background: "#F3F6FD" } : undefined}
      onClick={selectable ? onAdd : undefined}
      onKeyDown={onKeyDown}
      role={selectable ? "button" : undefined}
      tabIndex={selectable ? 0 : undefined}
      aria-label={selectable ? `Add ${name}` : undefined}
    >
      <span className="flex-1 text-[13px] text-gray-800 leading-snug">{name}</span>

      {qty > 0 ? (
        <div className="flex items-center gap-1 flex-shrink-0">
          <Round label="−" onClick={stop(onLess)} />
          {/* Labelled because a bare digit is meaningless on its own — both to
              a screen reader and to anything else reading this row. */}
          <span
            aria-label={`${name}: ${qty}`}
            className="text-[13px] font-bold w-5 text-center"
            style={{ color: BRAND.navy }}
          >
            {qty}
          </span>
          <Round label="+" solid onClick={stop(onAdd)} />
          {onRemove && (
            <button
              onClick={stop(onRemove)}
              aria-label={`Remove ${name}`}
              className="ml-0.5 w-6 h-6 text-gray-300 hover:text-gray-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={stop(onAdd)}
          className="text-[11px] font-semibold px-3 py-1.5 rounded-full border flex-shrink-0 hover:bg-gray-50"
          style={{ borderColor: BRAND.navy, color: BRAND.navy }}
        >
          Add
        </button>
      )}
    </div>
  );
}

function Round({
  label,
  onClick,
  solid,
}: {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  solid?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center border leading-none"
      style={
        solid
          ? { background: BRAND.navy, color: "#fff", borderColor: BRAND.navy }
          : { borderColor: "#D1D5DB", color: "#374151", background: "#fff" }
      }
    >
      {label}
    </button>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500 px-3 py-3 leading-relaxed">{children}</p>;
}
