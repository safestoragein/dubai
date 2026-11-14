import { BRAND } from "../data/brand";

/**
 * `row` lays the options out as equal-width columns instead of a scrolling
 * strip. A single flex row of three labels overflowed a 400px panel by a few
 * pixels — the last option was always half-cut — and it only got worse as
 * label text changed. A grid guarantees every option is visible; a long label
 * wraps to a second line rather than escaping the panel.
 */
export function OptionButtons({
  options,
  onPick,
  row = false,
}: {
  options: string[];
  onPick: (v: string) => void;
  row?: boolean;
}) {
  return (
    <div
      className={
        row
          ? `mt-3 grid gap-2 ${options.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`
          : "mt-3 flex flex-wrap gap-2"
      }
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onPick(opt)}
          className={`rounded-xl border transition-colors ${
            row
              ? "text-[11px] font-medium leading-snug px-2 py-2.5 text-center"
              : "text-sm px-3.5 py-2 rounded-full"
          }`}
          style={{ borderColor: BRAND.navy, color: BRAND.navy }}
          /* Colour must flip here too, not via hover:text-white — an inline
             style beats a CSS class, so the label stayed navy on navy. */
          onMouseEnter={(e) => {
            e.currentTarget.style.background = BRAND.navy;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = BRAND.navy;
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
