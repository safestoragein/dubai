import { BRAND } from "../data/brand";
import type { QuoteResult } from "../api/quote";

const aed = (n?: number) =>
  typeof n === "number" ? "AED " + n.toLocaleString("en-AE") : "—";

/**
 * The quote, as the /get-quote form computes it.
 *
 * Storage is the shared-space monthly price (12 AED per sq ft, 5% VAT
 * included) — the headline figure the quote form and the quotation email lead
 * with. Transport is a one-time door-to-door charge and, like the website,
 * is shown as a range, because the final figure is re-derived from the pallets
 * actually checked in at the warehouse. A pickup outside the emirate's service
 * radius is priced by hand and says so instead of showing a number.
 */
export function QuoteCard({ quote }: { quote: QuoteResult }) {
  if (!quote.ok) return null;

  const transportLine = quote.outOfRange
    ? "We will confirm"
    : quote.transportLowAed && quote.transportHighAed && quote.transportLowAed < quote.transportHighAed
    ? `${aed(quote.transportLowAed)} – ${aed(quote.transportHighAed).replace("AED ", "")}`
    : aed(quote.transportAed);

  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden my-2">
      <div className="px-4 py-2.5 text-white text-sm font-semibold" style={{ background: BRAND.navy }}>
        Your price
      </div>

      <div className="px-4 py-3 space-y-2 bg-white">
        <Row label="Storage, every month (VAT included)" value={aed(quote.monthlyStorageAed)} strong />
        <Row label="Pickup and transport (one time only)" value={transportLine} />
        {quote.sqft ? (
          <Row
            label="Space your items need"
            value={`${quote.sqft} sq ft${quote.pallets ? ` · ${quote.pallets} pallet${quote.pallets === 1 ? "" : "s"}` : ""}`}
          />
        ) : null}

        {/* The caveat stays: the item list is the customer's own estimate and
            the warehouse re-counts it at check-in, so the figure can move. */}
        <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100 leading-relaxed">
          Estimate from the items you chose. Our team will confirm the final amount
          {quote.distanceKm == null ? " and the distance for pickup" : ""}.
        </p>

        {quote.emailQueued && (
          <p className="text-[11px] text-gray-500">📧 A copy is on its way to your email.</p>
        )}

        {quote.quotationId && (
          <p className="text-[11px] text-gray-400">Reference #{quote.quotationId}</p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-xs text-gray-600">{label}</span>
      <span
        className={strong ? "text-base font-bold" : "text-sm font-medium text-gray-800"}
        style={strong ? { color: BRAND.navy } : undefined}
      >
        {value}
      </span>
    </div>
  );
}
