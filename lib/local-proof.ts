/**
 * Emirate-specific social proof.
 *
 * ⚠ THIS IS EMPTY ON PURPOSE. DO NOT INVENT ENTRIES.
 *
 * The brief asked for two or three named Sharjah customer quotes with the
 * district shown ("Fatima, Al Majaz"), and said plainly that an invented figure
 * is worse than none. Checked 2026-09-04 against production:
 *
 *   - ss_customer: 49 Sharjah enquiries, of which exactly 1 converted to a
 *     customer. "We have moved 1 Sharjah household" is not proof.
 *   - ss_customer_feedback (5,849 rows), customer_feedback_management,
 *     sst_order_feedback, ss_recievers_feedback: ZERO rows with feedback text
 *     for any AE customer, Sharjah or otherwise.
 *
 * So there is nothing genuine to publish yet. Names from the enquiry list are
 * not an option: 48 of those 49 never used the service, and attaching a written
 * quote to a real person who never said it is a fabricated review published
 * under someone's actual identity.
 *
 * WHEN REAL QUOTES EXIST: add them here and every page picks them up. The
 * section renders only when the array for that emirate is non-empty, so nothing
 * needs uncommenting and no page will ever show an empty testimonial block.
 *
 * A quote belongs here only if the person actually said it and is a real
 * customer. `district` is shown next to the name, which is the whole point —
 * "Fatima, Al Majaz" is local proof in a way "4.9/5 worldwide" is not.
 */

export type LocalQuote = {
  /** First name (or first name + initial) as the customer agreed to publish. */
  name: string
  /** District, shown beside the name. */
  district: string
  /** Their words. Never paraphrased into something they did not say. */
  quote: string
  /** Optional: what the job was, e.g. "Two-bed flat, stored 6 weeks". */
  context?: string
}

export const LOCAL_QUOTES: Record<string, LocalQuote[]> = {
  sharjah: [],
  ajman: [],
}

export function quotesFor(emirateSlug: string): LocalQuote[] {
  return LOCAL_QUOTES[emirateSlug] ?? []
}
