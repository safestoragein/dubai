import { BRAND } from "../data/brand";

/**
 * Storage type as two cards on one row.
 *
 * Business and Document were separate options; they share the same sizing and
 * the same manual-pricing path, so splitting them only asked the customer to
 * make a distinction that changes nothing downstream.
 */
const TYPES = [
  { value: "Household", label: "Household", sub: "Home & personal items", icon: "🏠" },
  {
    value: "Business / Document Storage",
    label: "Business / Document",
    sub: "Stock, files & archives",
    icon: "🏢",
  },
];

export function StorageTypeCards({ onPick }: { onPick: (v: string) => void }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2.5">
      {TYPES.map((t) => (
        <button
          key={t.value}
          onClick={() => onPick(t.value)}
          className="text-left px-3.5 py-3 rounded-xl border bg-white hover:shadow-md transition-shadow"
          style={{ borderColor: BRAND.navy }}
        >
          <div className="text-xl leading-none mb-1.5">{t.icon}</div>
          <div className="text-sm font-semibold leading-tight" style={{ color: BRAND.navy }}>
            {t.label}
          </div>
          <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{t.sub}</div>
        </button>
      ))}
    </div>
  );
}
