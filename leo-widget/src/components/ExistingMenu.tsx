import { BRAND } from "../data/brand";
import { EXISTING_ACTIONS, type ExistingAction } from "../hooks/useLeoChat";

/**
 * What a recognised customer can do next.
 *
 * Full-width rows rather than the pill list the wizard uses: these four are the
 * whole point of the screen, they each need a line of explanation, and a
 * returning customer arrives with a specific errand rather than browsing.
 *
 * Only shown to somebody with an actual booking — an old enquiry never reaches
 * here (see identifyExisting), because every option below would end in a
 * refusal from the CRM.
 */
export function ExistingMenu({ onPick }: { onPick: (a: ExistingAction) => void }) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {EXISTING_ACTIONS.map((a) => (
        <button
          key={a.key}
          onClick={() => onPick(a.key)}
          className="text-left px-3.5 py-2.5 rounded-xl border bg-white hover:bg-gray-50 transition-colors"
          style={{ borderColor: "#e5e7eb" }}
        >
          <span className="block text-sm font-semibold" style={{ color: BRAND.navy }}>
            {a.label}
          </span>
          <span className="block text-[11px] text-gray-500 leading-snug mt-0.5">{a.hint}</span>
        </button>
      ))}
    </div>
  );
}
