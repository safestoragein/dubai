export type Sender = "leo" | "user";

export interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
}

export interface LeadData {
  intent: string;
  storageType: string;
  /** The emirate the customer picked (field keeps the India name `city`). */
  city: string;
  propertySize: string;
  items: string;
  duration: string;
  pickupLocation: string;
  /** basement | ground | 1..5 | ">10" — the values /get-quote posts */
  pickupFloor: string;
  /** yes | no */
  pickupLift: string;
  /** Unused in the UAE build (the quote form takes no pickup date); kept empty. */
  pickupDate: string;
  packingHelp: string;
  insurance: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export type FieldKey = keyof LeadData;

export type StepType = "choice" | "multi" | "text" | "address" | "tel" | "email" | "date" | "textarea";

/** Steps that collect a value we do NOT persist on the lead. None in the UAE build (no OTP). */
export type TransientKey = never;

export interface WizardStep {
  key: FieldKey | TransientKey;
  question: string;
  type: StepType;
  options?: string[];
  /** name of a dynamic option provider resolved at runtime (e.g. "size", "items") */
  dynamic?: "size" | "items";
  placeholder?: string;
  validate?: (v: string) => string | null; // returns error message or null
}

export interface FaqItem {
  q: string;
  a: string;
}