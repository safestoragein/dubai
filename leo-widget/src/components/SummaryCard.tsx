import type { LeadData } from "../types";
import { BRAND } from "../data/brand";
import { FIELD_LABELS, formatFieldValue } from "../utils/helpers";

const ORDER: (keyof LeadData)[] = [
  "storageType",
  "city",
  "propertySize",
  "items",
  "duration",
  "pickupLocation",
  "pickupFloor",
  "pickupLift",
  "pickupDate",
  "packingHelp",
  "insurance",
  "name",
  "phone",
  "email",
  "notes",
];

export function SummaryCard({
  lead,
  onEdit,
  onConfirm,
  fixedRows = [],
}: {
  lead: LeadData;
  onEdit: (key: string) => void;
  onConfirm: () => void;
  /**
   * Details that came off a customer's own record rather than out of this
   * conversation — shown so they can check what we will book against, without
   * an Edit link, because there is nothing here to edit.
   */
  fixedRows?: { label: string; value: string }[];
}) {
  const rows = ORDER.filter((k) => lead[k]);
  return (
    <div className="border border-gray-200 rounded-2xl p-3.5 bg-white">
      <div className="divide-y divide-gray-100">
        {fixedRows
          .filter((r) => r.value)
          .map((r) => (
            <div key={r.label} className="py-2">
              <p className="text-[11px] uppercase tracking-wide text-gray-400">{r.label}</p>
              <p className="text-sm text-gray-800 truncate">{r.value}</p>
            </div>
          ))}
        {rows.map((k) => (
          <div key={k} className="flex items-center justify-between py-2 gap-2">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wide text-gray-400">
                {FIELD_LABELS[k]}
              </p>
              <p className="text-sm text-gray-800 truncate">{formatFieldValue(k, lead[k])}</p>
            </div>
            <button
              onClick={() => onEdit(k)}
              className="text-xs font-medium flex-shrink-0"
              style={{ color: BRAND.accent }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={onConfirm}
        className="w-full mt-3 text-white text-sm font-semibold py-3 rounded-xl"
        style={{ background: BRAND.navy }}
      >
        Confirm and send
      </button>
    </div>
  );
}
