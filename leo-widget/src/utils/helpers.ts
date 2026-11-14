import { floorLabel, liftLabel } from "../data/pickup";

export const uid = () => Math.random().toString(36).slice(2, 10);

export const FIELD_LABELS: Record<string, string> = {
  storageType: "Storage type",
  city: "Emirate",
  propertySize: "Home size",
  items: "Items to store",
  duration: "Duration",
  pickupLocation: "Pickup location",
  pickupFloor: "Floor",
  pickupLift: "Lift",
  pickupDate: "Pickup date",
  packingHelp: "Packing help",
  insurance: "Insurance",
  name: "Name",
  phone: "Phone",
  email: "Email",
  notes: "Notes",
};

/**
 * Display form of a stored value. Floor and lift are held as the values the
 * quote form posts (">10", "yes"/"no"); nobody should have to read those in a
 * summary card.
 */
export function formatFieldValue(key: string, value: string): string {
  if (key === "pickupFloor") return floorLabel(value);
  if (key === "pickupLift") return liftLabel(value);
  return value;
}
