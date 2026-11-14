/**
 * Home size, as the safestorage.ae quote form asks it (the "bedrooms" select
 * on /get-quote). The value posted to insert_quotation_dubai is the label
 * itself — "Studio", "1 BHK" … "5 BHK+" — exactly as the form sends it.
 *
 * The India widget graded the size from the basket's value; the UAE price is
 * built from storage points instead (see lib/leo-quote.ts), so the size here is
 * descriptive only and never changes the figure.
 */
export const BEDROOM_OPTIONS = ["Studio", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"];
