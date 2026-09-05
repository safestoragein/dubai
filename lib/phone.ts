// Phone-entry helpers for the UAE lead forms (/get-quote and /contact).
//
// Both boxes used to be a bare <Input type="tel"> guarded by nothing but an
// "is it empty?" check, so a visitor could type their name into the phone field
// and the lead still saved — e.g. customer 188318 landed in the CRM with
// Customer Name "Ali" and Contact "Mohamed". `type="tel"` only asks the phone
// for a numeric keypad; it validates nothing and is not enforced on submit.

/** Longest string we let a visitor type (E.164 is 15 digits + separators). */
const MAX_LENGTH = 20

/** Shortest / longest run of digits we accept, so short landlines and
 *  international numbers both pass but "Mohamed" (0 digits) does not. */
const MIN_DIGITS = 7
const MAX_DIGITS = 15

/**
 * Keep only what can legitimately appear in a phone number, applied on every
 * keystroke. Letters never reach state, so nothing downstream (the quote save,
 * the abandoned-lead beacon, the CRM row) can receive a name.
 */
export function sanitizePhoneInput(raw: string): string {
  return raw
    .replace(/[^\d+\s()-]/g, "")
    // A "+" is only meaningful as the country-code prefix.
    .replace(/(?!^)\+/g, "")
    .slice(0, MAX_LENGTH)
}

/** Digits only — what the length check counts. */
export function phoneDigits(raw: string): string {
  return (raw || "").replace(/\D/g, "")
}

/**
 * Returns an error message for an unusable phone number, or null when it looks
 * like a real one. Deliberately permissive about format (UAE mobile, UAE
 * landline and overseas numbers all reach this form) and strict only about
 * "is this actually a number".
 */
export function validatePhone(raw: string): string | null {
  const value = (raw || "").trim()
  if (!value) return "Please enter your phone number"
  if (/[a-z]/i.test(value)) return "Phone number cannot contain letters"

  const digits = phoneDigits(value)
  if (digits.length < MIN_DIGITS) return "Please enter a valid phone number, e.g. +971 50 577 3388"
  if (digits.length > MAX_DIGITS) return "That phone number has too many digits"

  return null
}
