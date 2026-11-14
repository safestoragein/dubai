import type { FaqItem } from "../types";

/**
 * Answers are written for someone reading English as a second language:
 * short sentences, everyday words. Every fact below is one the site already
 * publishes (lib/company-facts.ts, lib/facilities.ts, the /faq page). No price
 * is quoted in an FAQ — the site deliberately publishes no pricing; a price
 * comes only from the quote this chat builds from the customer's own items.
 */
export const FAQS: FaqItem[] = [
  {
    q: "How much does storage cost?",
    a: "It depends on how much space your things need, because you pay for the space you use.\n\nTell me what you want to store and I will give you a price in about 2 minutes. Door-to-door pickup is shown as a separate one-time charge.\n\nQuoted prices do not include 5% UAE VAT. It is added on your invoice.",
  },
  {
    q: "Do you pick up from my home?",
    a: "Yes. Our team comes to your home or office with packing materials, wraps and photographs each item, and takes everything to our warehouse.\n\nWhen you want something back, tell us and we bring it to your door within 24–48 hours.",
  },
  {
    q: "Are my things safe?",
    a: "Yes. CCTV covers every corridor, entry point, loading area and storage zone. Units are sealed against dust, moisture and insects, with regular pest control.\n\nEvery item is photographed and listed in your digital inventory at pickup, so we always know exactly where it is.",
  },
  {
    q: "Which emirates do you work in?",
    a: "We store in Dubai, Sharjah and Ajman, and we collect from Dubai, Abu Dhabi, Sharjah and Ajman.\n\nIf you are somewhere else in the UAE, still tell us — we will check what we can do for you.",
  },
  {
    q: "How much space will I need?",
    a: "You do not have to work this out yourself. Tell me the items you want to store and I work out the space from them.\n\nYou only pay for the space your things actually take.",
  },
  {
    q: "Is there a long contract?",
    a: "No. Storage is month-to-month with no long-term commitment and no early-termination penalty.\n\nYou can keep your things longer or take them back earlier — just tell us.",
  },
  {
    q: "What can't I store?",
    a: "No flammable liquids or gases, hazardous or explosive materials, perishable food, plants or animals, illegal items, or cash and jewellery. If you are unsure about something, just ask.",
  },
];
