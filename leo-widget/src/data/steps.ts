import type { WizardStep } from "../types";

/**
 * Same rule as lib/phone.ts validatePhone() on the site's own quote form:
 * a real-looking number of 7-15 digits, no letters. Deliberately permissive
 * about format — UAE mobiles, landlines and overseas numbers all reach the
 * quote form, and the PHP endpoint (App::_valid_ae_phone) applies the same
 * 7-15 digit test.
 */
const phoneError = (v: string): string | null => {
  const value = v.trim();
  if (!value) return "Please type your mobile number.";
  if (/[a-z]/i.test(value)) return "A phone number cannot contain letters.";
  const digits = value.replace(/\D/g, "");
  if (digits.length < 7) return "Please type a correct mobile number, like +971 50 123 4567.";
  if (digits.length > 15) return "That number has too many digits.";
  return null;
};
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

// ── Size options, chosen by storage type ─────────────────
export const SIZE_PERSONAL = ["Studio", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"];
export const SIZE_BUSINESS = ["Up to 50 sq ft", "50–100 sq ft", "100–250 sq ft", "250–500 sq ft", "500+ sq ft"];

/** Resolve the size options for the currently chosen storage type. */
export function sizeOptionsFor(storageType: string): string[] {
  if (storageType.startsWith("Business")) return SIZE_BUSINESS;
  return SIZE_PERSONAL;
}

// NOTE: the emirate step is rendered by EmiratePicker, which loads the live
// list (get_dubai_emirates) so an emirate the site cannot serve is never
// offered. EMIRATES below is only a last-resort reference.
export const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"];

export const WIZARD_STEPS: WizardStep[] = [
  {
    key: "storageType",
    question: "What do you want to store?",
    type: "choice",
    options: ["Household", "Business / Document Storage"],
  },
  {
    key: "city",
    question: "Which emirate are you in?",
    // Rendered by EmiratePicker. The lead field keeps the India key `city` so
    // the shared summary / edit plumbing is untouched; every label says Emirate.
    type: "choice",
    options: EMIRATES,
  },
  {
    key: "name",
    question: "What is your name?",
    type: "text",
    placeholder: "Type your full name",
    validate: (v) => (v.trim().length < 2 ? "Please type your name." : null),
  },
  {
    key: "phone",
    question: "Your mobile number?",
    type: "tel",
    placeholder: "+971 50 123 4567",
    validate: phoneError,
  },
  {
    key: "email",
    // Mandatory: the quotation email is the deliverable, and the CRM matches
    // an existing customer on phone OR email.
    question: "Your email? We will send the price there.",
    type: "email",
    placeholder: "name@example.com",
    validate: (v) =>
      !v.trim()
        ? "Please type your email — we send your price there."
        : emailOk(v)
        ? null
        : "Please type a correct email, like name@example.com.",
  },
  {
    // The quote form requires this ("bedrooms") before it saves a quote, and
    // the CRM shows it on every quotation, so the chat asks it too.
    key: "propertySize",
    question: "How big is your home?",
    type: "choice",
    dynamic: "size",
  },
  {
    key: "items",
    question: "What are you storing? Tap items and set how many.",
    type: "multi",
    dynamic: "items",
    validate: (v) => (v.trim().length < 1 ? "Please choose at least one thing, or type what you want to store." : null),
  },
  {
    key: "duration",
    question: "For how long? Longer plans cost less.",
    type: "choice",
    options: ["Less than 1 month", "1–3 months", "3–6 months", "6–12 months", "Over a year"],
  },
  {
    key: "pickupLocation",
    // Floor and lift are answered on this same screen — they are part of "where
    // do we come and what is the carry".
    question: "Pickup address, floor and lift? Start typing your area.",
    type: "address",
    placeholder: "Area or landmark, e.g. Business Bay",
    validate: (v) => (v.trim().length < 2 ? "Please type the area where we should collect your things." : null),
  },
];

/** The items step is the ItemsPicker, not chips, so there are no preset options. */
export function itemOptionsFor(_storageType: string): string[] {
  return [];
}
