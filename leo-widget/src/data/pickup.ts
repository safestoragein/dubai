/**
 * Pickup floor and lift — the values safestorage.ae's own quote form posts to
 * insert_quotation_dubai (components/quote/quote-page-alternative2.tsx):
 *
 *   floor: basement | ground | 1 | 2 | 3 | 4 | 5 | ">10"
 *   lift : yes | no
 *
 * The quote form asks the lift question for every floor (it is a required
 * field there), so the chat does too — see liftMattersFor().
 */

export interface PickupOption {
  value: string;
  /** Short label for the pill row. */
  label: string;
}

export const FLOOR_OPTIONS: PickupOption[] = [
  { value: "ground", label: "Ground" },
  { value: "basement", label: "Basement" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: ">10", label: "10+" },
];

export const LIFT_OPTIONS: PickupOption[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

/** The quote form requires the lift answer on every floor, so none are exempt. */
export const FLOORS_WITHOUT_LIFT_QUESTION: string[] = [];

export function liftMattersFor(floor: string): boolean {
  return Boolean(floor) && !FLOORS_WITHOUT_LIFT_QUESTION.includes(floor);
}

const ORDINAL = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];

/** Long form for the summary card and the lead note. */
export function floorLabel(value: string): string {
  if (!value) return "";
  if (value === "ground") return "Ground floor";
  if (value === "basement") return "Basement";
  if (value === ">10") return "Above 10th floor";
  const n = Number(value);
  return n >= 1 && n <= 10 ? `${ORDINAL[n]} floor` : value;
}

export function liftLabel(value: string): string {
  if (value === "yes") return "Lift available";
  if (value === "no") return "Stairs only";
  return value || "";
}

/**
 * Tomorrow, as YYYY-MM-DD in the visitor's own timezone.
 *
 * Used to pre-fill the pickup date rather than leave it blank. It is shown in
 * the field before they press Send, so it is a visible default they can change
 * — not a value invented behind their back. `toISOString()` is deliberately
 * avoided: it converts to UTC first, which hands a visitor east of Greenwich yesterday's
 * date for most of the evening.
 */
export function defaultPickupDate(now = new Date()): string {
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Today, same rules — the earliest date the field will accept. */
export function todayISO(now = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
