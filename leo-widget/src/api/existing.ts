/**
 * UAE build: the returning-customer lane is NOT available.
 *
 * On safestorage.in it talks to the India CRM's lookup / ticket endpoints,
 * which have no safestorage.ae counterpart. The welcome menu no longer offers
 * "Existing customer", so nothing reaches these functions; they exist only so
 * the shared hook still type-checks, and they fail closed if ever called.
 */

/**
 * What the backend is willing to tell the browser about a returning customer.
 *
 * No full mobile number and no e-mail address: this lane has no OTP, so all an
 * identifier proves is that somebody knows it, and typing a stranger's mobile
 * must not hand back their e-mail. The masked forms are enough to recognise
 * your own details on the summary screen; the real ones are filled in
 * server-side at submit time.
 */
export interface ExistingCustomer {
  customerUniqueId: string;
  firstName: string;
  city: string;
  /** e.g. "98•••••210" — display only, never submitted */
  maskedPhone: string;
  /** e.g. "ra••••@gmail.com" — display only, never submitted */
  maskedEmail: string;
  hasEmail: boolean;
  /** false = an old enquiry that never became a booking */
  isCustomer: boolean;
}

/** Which identifier the customer typed. */
export type IdentifierKind = "mobile" | "email" | "customerId";

export interface LookupResult {
  ok: boolean;
  found?: boolean;
  kind?: IdentifierKind;
  customer?: ExistingCustomer;
  error?: string;
}

export interface TicketResult {
  ok: boolean;
  ticketId?: string;
  topic?: string;
  followUpDate?: string;
  /** the CRM has no email on file — ask for one and send it back */
  needEmail?: boolean;
  error?: string;
}

/** The three ticket topics. "Store again" is a quotation, not a ticket. */
export type TicketTopic = "support" | "retrieval" | "payment";

const UNAVAILABLE = { ok: false, error: "Not available." } as const;

/** Identify a returning customer — unavailable in the UAE build. */
export async function lookupExistingCustomer(_q: string): Promise<LookupResult> {
  return { ...UNAVAILABLE };
}

/** Raise Support / Retrieval / Payment — unavailable in the UAE build. */
export async function raiseExistingTicket(_args: {
  q: string;
  topic: TicketTopic;
  message: string;
  email?: string;
}): Promise<TicketResult> {
  return { ...UNAVAILABLE };
}
