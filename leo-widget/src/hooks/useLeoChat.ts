import { useCallback, useMemo, useRef, useState } from "react";
import type { ChatMessage, LeadData } from "../types";
import { WIZARD_STEPS, sizeOptionsFor, itemOptionsFor } from "../data/steps";
import { uid } from "../utils/helpers";
import { submitLead } from "../api/leads";
import { requestQuote, type QuoteResult } from "../api/quote";
import { sendPartialLead } from "../api/partialLead";
import type { PickedItem } from "../api/items";
import { floorLabel, liftLabel, liftMattersFor } from "../data/pickup";
import { BRAND } from "../data/brand";
import { toE164 } from "../utils/adAttribution";
import {
  lookupExistingCustomer,
  raiseExistingTicket,
  type ExistingCustomer,
  type TicketTopic,
} from "../api/existing";

export type Phase =
  | "welcome"
  | "faq"
  | "wizard"
  | "summary"
  | "submitting"
  | "success"
  | "error"
  | "done"
  // ── returning-customer lane ──
  /** asking for the mobile / e-mail / customer id */
  | "existingLookup"
  /** recognised — Store again / Support / Retrieval / Payment */
  | "existingMenu"
  /** typing what the ticket should say */
  | "existingTicket"
  /** ticket raised, showing its number */
  | "ticketDone";

/** What a recognised customer can do next. */
export const EXISTING_ACTIONS = [
  { key: "store", label: "Store again", hint: "Get a price for more items" },
  { key: "support", label: "Support", hint: "Something else we can help with" },
  { key: "retrieval", label: "Retrieval", hint: "Get your items delivered back" },
  { key: "payment", label: "Payment", hint: "A question about a bill" },
] as const;

export type ExistingAction = (typeof EXISTING_ACTIONS)[number]["key"];

/**
 * Steps a recognised customer is not asked again. The mobile, e-mail and name
 * are on their CRM record and the backend fills them in at submit time — see
 * hydrateFromCustomer — so asking would be asking a customer to re-type what
 * we already have. City comes off the same record when it is set.
 */
const KNOWN_STEPS_BASE = ["name", "phone", "email"];

const EMPTY: LeadData = {
  intent: "Get Quote",
  storageType: "",
  city: "",
  propertySize: "",
  items: "",
  duration: "",
  pickupLocation: "",
  pickupFloor: "",
  pickupLift: "",
  pickupDate: "",
  packingHelp: "",
  insurance: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

/**
 * Floor and lift are collected on the address step, so editing either of them
 * from the summary must reopen that one step rather than look for a step of
 * their own and silently do nothing.
 */
const EDIT_ALIASES: Record<string, string> = {
  pickupFloor: "pickupLocation",
  pickupLift: "pickupLocation",
  pickupDate: "pickupLocation",
};

export function useLeoChat() {
  const [phase, setPhase] = useState<Phase>("welcome");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      sender: "leo",
      // Kept to two lines on purpose: nobody reads a paragraph before they have
      // decided to engage, and the buttons below already say what the options are.
      text: `Hi, I am ${BRAND.assistant} from SafeStorage 👋\nGet your storage price in 2 minutes.`,
    },
  ]);
  const [lead, setLead] = useState<LeadData>(EMPTY);
  const [stepIndex, setStepIndex] = useState(0);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [errorText, setErrorText] = useState("");
  const [askedFaqs, setAskedFaqs] = useState<string[]>([]);
  const [booked, setBooked] = useState(false);
  // Coordinates of the picked pickup address. Without them the site computes a
  // zero distance and the transport price loses its >70km surcharge, so we keep
  // whatever the autocomplete gave us and pass it through to the quote bridge.
  // The catalogue rows the customer picked (id + slug + qty). The lead's
  // `items` string is for humans; this is what the quote is priced from, so no
  // name has to be matched back to the catalogue later.
  const [pickedItems, setPickedItems] = useState<PickedItem[]>([]);
  const [geo, setGeo] = useState<{ lat?: number; lon?: number }>({});
  // Blocks a second submit while one is still in flight (used by the ticket lane).
  const inFlight = useRef(false);
  // A conversation yields at most ONE partial lead: the endpoint inserts
  // unconditionally, so firing on both widget-close and page-unload would
  // create duplicate lead rows for the same person.
  const partialSent = useRef(false);
  // The lead written once name + mobile + email are all in — the same point
  // the quote page saves its lead. Separate from partialSent so a customer who
  // gives their email and THEN wanders off still gets the abandonment call,
  // which enriches the same row (leo/save_lead updates, it does not duplicate).
  const leadSaved = useRef(false);
  // Read by the abandonment handlers, which run outside React's render cycle.
  const leadRef = useRef(lead);
  leadRef.current = lead;
  const completedRef = useRef(false);
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [quoteBusy, setQuoteBusy] = useState(false);

  // ── Returning-customer lane ──────────────────────────
  const [customer, setCustomer] = useState<ExistingCustomer | null>(null);
  // The identifier they typed. Sent with every later call so the backend can
  // resolve them again itself — it never trusts an id posted by the browser.
  const [existingQ, setExistingQ] = useState("");
  const [existingBusy, setExistingBusy] = useState(false);
  // The identifier matched nothing. Drives the "Get a price instead" escape
  // hatch, which would be a distraction before they have even tried once.
  const [lookupFailed, setLookupFailed] = useState(false);
  const [pendingTopic, setPendingTopic] = useState<TicketTopic | null>(null);
  // Set when the CRM has no e-mail on file: the ticket cannot be raised without
  // one, so the chat asks and we send the message again with it.
  const [needEmail, setNeedEmail] = useState(false);
  const ticketDraft = useRef("");
  const [ticket, setTicket] = useState<{
    ticketId: string;
    topic: string;
    followUpDate?: string;
  } | null>(null);
  // Wizard steps a recognised customer is not asked. Empty for everyone else,
  // so the normal flow is untouched.
  const [knownKeys, setKnownKeys] = useState<string[]>([]);

  const step = WIZARD_STEPS[stepIndex];
  const totalSteps = WIZARD_STEPS.length;

  /** The steps this particular customer actually sees. */
  const visibleSteps = useMemo(
    () => WIZARD_STEPS.filter((s) => !knownKeys.includes(s.key)),
    [knownKeys]
  );
  /** 1-based position in that list — what the progress line counts. */
  const stepNumber = useMemo(
    () => (step ? visibleSteps.findIndex((s) => s.key === step.key) + 1 : 0),
    [visibleSteps, step]
  );

  const pushLeo = useCallback((text: string) => {
    setMessages((m) => [...m, { id: uid(), sender: "leo", text }]);
  }, []);
  const pushUser = useCallback((text: string) => {
    setMessages((m) => [...m, { id: uid(), sender: "user", text }]);
  }, []);

  // ── Welcome menu ─────────────────────────────
  const chooseIntent = useCallback(
    (intent: string) => {
      pushUser(intent);
      setLead((l) => ({ ...l, intent }));
      if (intent === "Ask a question") {
        setPhase("faq");
        pushLeo("Tap a question below.");
      } else if (intent === "Existing customer") {
        setPhase("existingLookup");
        setErrorText("");
        pushLeo(
          "Welcome back! What is the mobile number, email or customer ID on your account?"
        );
      } else {
        setPhase("wizard");
        setStepIndex(0);
        pushLeo(WIZARD_STEPS[0].question);
      }
    },
    [pushLeo, pushUser]
  );

  // ── Returning customer ───────────────────────
  /**
   * Identify a returning customer from whatever they typed.
   *
   * Whichever identifier they gave goes straight onto the lead — they typed
   * it, so it is theirs to see — and the rest is filled in server-side at
   * submit time. Nothing they did not type comes back to the browser.
   */
  const identifyExisting = useCallback(
    async (raw: string) => {
      const q = raw.trim();
      if (!q) {
        setErrorText("Please type your mobile number, email or customer ID.");
        return;
      }
      if (inFlight.current) return;
      inFlight.current = true;
      setErrorText("");
      setExistingBusy(true);
      pushUser(q);
      try {
        const r = await lookupExistingCustomer(q);
        if (!r.ok || !r.found || !r.customer) {
          // Not an error state: a first-time visitor may well have tapped the
          // wrong button, so stay here and let them try again or start a quote.
          setLookupFailed(true);
          pushLeo(r.error || "I could not find that account.");
          return;
        }
        const c = r.customer;

        // Found, but they only ever enquired — no booking, so there is nothing
        // to retrieve, no bill to query, and nothing on file that would let
        // them skip the SMS code. Treated as "not recognised" on purpose: the
        // alternative is a menu whose every option ends in a refusal.
        if (!c.isCustomer) {
          setLookupFailed(true);
          pushLeo(
            "I can see an earlier enquiry, but no active storage booking under that. I can get you a fresh price instead."
          );
          return;
        }

        setLookupFailed(false);
        setCustomer(c);
        setExistingQ(q);
        // Their name is deliberately NOT copied onto the lead: we only hold the
        // first name here, and writing "Ramesh" over "Ramesh Kumar Iyer" would
        // downgrade the CRM record the booking attaches to. hydrateFromCustomer
        // fills the full one in server-side.
        setLead((l) => ({
          ...l,
          intent: "Existing customer",
          city: c.city || l.city,
          phone: r.kind === "mobile" ? q : l.phone,
          email: r.kind === "email" ? q : l.email,
        }));
        setPhase("existingMenu");
        pushLeo(
          `Welcome back${c.firstName ? `, ${c.firstName}` : ""}! What can I help you with?`
        );
      } catch {
        setLookupFailed(true);
        pushLeo("I could not check that just now. Please try again in a moment.");
      } finally {
        setExistingBusy(false);
        inFlight.current = false;
      }
    },
    [pushLeo, pushUser]
  );

  /** Give up on being recognised and just take a fresh quote. */
  const quoteAsNewCustomer = useCallback(() => {
    pushUser("Get a price instead");
    setCustomer(null);
    setExistingQ("");
    setKnownKeys([]);
    setPhase("wizard");
    setStepIndex(0);
    pushLeo(WIZARD_STEPS[0].question);
  }, [pushLeo, pushUser]);

  /**
   * Store again / Support / Retrieval / Payment.
   *
   * Store again is a quotation, so it drops into the normal wizard with the
   * steps we already know the answers to switched off. The other three become
   * an internal ticket, which needs one thing the menu cannot supply: what is
   * actually wrong.
   */
  const chooseExistingAction = useCallback(
    (action: ExistingAction) => {
      const chosen = EXISTING_ACTIONS.find((a) => a.key === action);
      pushUser(chosen?.label ?? action);
      setErrorText("");

      if (action === "store") {
        // City only counts as known when the CRM actually has one — a blank
        // would otherwise skip the step and price the quote against no city.
        setKnownKeys(customer?.city ? [...KNOWN_STEPS_BASE, "city"] : KNOWN_STEPS_BASE);
        setPhase("wizard");
        setStepIndex(0);
        pushLeo(WIZARD_STEPS[0].question);
        return;
      }

      setPendingTopic(action as TicketTopic);
      setNeedEmail(false);
      ticketDraft.current = "";
      setPhase("existingTicket");
      pushLeo(
        action === "retrieval"
          ? "Sure — what would you like delivered back, and when? I will raise a ticket for the team."
          : action === "payment"
          ? "Of course — what is the payment question? I will raise a ticket for the team."
          : "Tell me briefly what you need and I will raise a ticket for the team."
      );
    },
    [customer, pushLeo, pushUser]
  );

  /**
   * Send the ticket.
   *
   * Called twice when the CRM holds no e-mail address for the customer: once
   * with what they want, and once more with the address to reply to. The
   * message is kept in a ref between the two so they do not retype it.
   */
  const submitTicket = useCallback(
    async (raw: string) => {
      const value = raw.trim();
      if (!pendingTopic) return;

      if (needEmail) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrorText("Please type a correct email, like name@example.com.");
          return;
        }
      } else if (value.length < 3) {
        setErrorText("Please tell me briefly what you need.");
        return;
      }

      if (inFlight.current) return;
      inFlight.current = true;
      setErrorText("");
      setExistingBusy(true);
      pushUser(value);
      if (!needEmail) ticketDraft.current = value;

      try {
        const r = await raiseExistingTicket({
          q: existingQ,
          topic: pendingTopic,
          message: ticketDraft.current,
          email: needEmail ? value : undefined,
        });

        if (r.needEmail) {
          setNeedEmail(true);
          pushLeo("We have no email on your account. What email should we reply to?");
          return;
        }
        if (!r.ok) {
          // The CRM refuses a second ticket of the same kind on the same day,
          // and says so in a sentence written for a person. Show it as-is.
          pushLeo(r.error || "I could not raise that just now. Please call us.");
          return;
        }

        completedRef.current = true;
        setTicket({ ticketId: r.ticketId!, topic: r.topic ?? "", followUpDate: r.followUpDate });
        setPhase("ticketDone");
        pushLeo(
          `Done — your ticket number is ${r.ticketId}. Our team will get back to you, usually the same day.`
        );
      } catch {
        pushLeo("I could not raise that just now. Please call us and we will sort it out.");
      } finally {
        setExistingBusy(false);
        inFlight.current = false;
      }
    },
    [pendingTopic, needEmail, existingQ, pushLeo, pushUser]
  );

  /** Back to the four options — raise a second thing, or book after a ticket. */
  const backToExistingMenu = useCallback(() => {
    setErrorText("");
    setPendingTopic(null);
    setNeedEmail(false);
    ticketDraft.current = "";
    setPhase("existingMenu");
    pushLeo("Anything else I can help with?");
  }, [pushLeo]);

  // ── FAQ ──────────────────────────────────────
  const askFaq = useCallback(
    (q: string, a: string) => {
      pushUser(q);
      pushLeo(a);
      setAskedFaqs((prev) => (prev.includes(q) ? prev : [...prev, q]));
    },
    [pushLeo, pushUser]
  );

  // Return to FAQ after a booking, so a customer who booked first can ask a doubt
  const askAfterBooking = useCallback(() => {
    pushUser("I have a question");
    setPhase("faq");
    pushLeo("Sure — tap a question below.");
  }, [pushLeo, pushUser]);

  const startQuoteFromFaq = useCallback(() => {
    pushUser("I want a price");
    setPhase("wizard");
    setStepIndex(0);
    pushLeo(WIZARD_STEPS[0].question);
  }, [pushLeo, pushUser]);

  // ── Wizard advance / back ────────────────────
  // Both directions step over anything in knownKeys — a recognised customer
  // walks storage type → items → duration → pickup and nothing else.
  const advance = useCallback(() => {
    let next = stepIndex + 1;
    while (next < totalSteps && knownKeys.includes(WIZARD_STEPS[next].key)) next++;
    if (next >= totalSteps) {
      setPhase("summary");
      pushLeo("Please check your details. Tap Edit to change anything, then Confirm. ✅");
    } else {
      setStepIndex(next);
      pushLeo(WIZARD_STEPS[next].question);
    }
  }, [stepIndex, totalSteps, knownKeys, pushLeo]);

  const submitStep = useCallback(
    async (rawValue: string) => {
      if (!step) return;
      const value = rawValue.trim();
      const err = step.validate?.(value) ?? null;
      if (err) {
        setErrorText(err);
        return;
      }
      setErrorText("");

      // Merge by hand rather than reading `lead` back: setLead is async, and
      // the save below needs the email that was just typed.
      const nextLead = { ...leadRef.current, [step.key]: value };
      setLead(nextLead);
      if (value) pushUser(value);
      else pushUser("(skipped)");

      // Name, mobile and email are all in — save the lead now instead of
      // waiting for the customer to finish. This is what the quote page does
      // at its own contact step, and it means a caller who drops out between
      // here and Confirm has still reached a relationship manager.
      if (step.key === "email" && !leadSaved.current && nextLead.phone) {
        leadSaved.current = true;
        sendPartialLead(nextLead, false, true);
      }

      if (editingKey) {
        // came from summary edit — return straight back
        setEditingKey(null);
        setPhase("summary");
        pushLeo("Changed. ✅");
        return;
      }
      advance();
    },
    [step, editingKey, advance, pushLeo, pushUser]
  );

  /**
   * Visitor is leaving. If they gave a phone or an email but never finished,
   * keep them as a lead instead of losing them. Safe to call repeatedly.
   */
  const captureAbandoned = useCallback((unloading = false) => {
    if (partialSent.current || completedRef.current) return;
    const l = leadRef.current;
    if (!l.phone && !l.email) return;
    partialSent.current = true;
    sendPartialLead(l, unloading, false);
  }, []);

  const goBack = useCallback(() => {
    setErrorText("");
    if (editingKey) {
      setEditingKey(null);
      setPhase("summary");
      return;
    }
    let prev = stepIndex - 1;
    while (prev >= 0 && knownKeys.includes(WIZARD_STEPS[prev].key)) prev--;
    if (prev >= 0) setStepIndex(prev);
  }, [stepIndex, editingKey, knownKeys]);

  /**
   * The pickup step submits three answers at once — address, floor and lift.
   * Kept apart from submitStep because that one is built around a step owning a
   * single key, and because floor/lift validation has a rule of its own: the
   * lift answer is only required above ground, where it changes the price.
   */
  const submitPickup = useCallback(
    ({
      address,
      floor,
      lift,
      date,
    }: {
      address: string;
      floor: string;
      lift: string;
      date: string;
    }): boolean => {
      const pickupStep = WIZARD_STEPS.find((s) => s.key === "pickupLocation");
      const value = address.trim();

      // Returns whether the step was accepted, so the caller knows not to clear
      // what the customer typed when we are about to show them an error on it.
      const err = pickupStep?.validate?.(value) ?? null;
      if (err) {
        setErrorText(err);
        return false;
      }
      if (!floor) {
        setErrorText("Please choose the floor we should collect from.");
        return false;
      }
      if (liftMattersFor(floor) && !lift) {
        setErrorText("Please tell us if there is a lift.");
        return false;
      }
      setErrorText("");

      const nextLead = {
        ...leadRef.current,
        pickupLocation: value,
        pickupFloor: floor,
        pickupLift: lift,
        pickupDate: date,
      };
      setLead(nextLead);
      pushUser(
        [
          value,
          floorLabel(floor),
          liftMattersFor(floor) ? liftLabel(lift) : "",
          date,
        ]
          .filter(Boolean)
          .join(" · ")
      );

      if (editingKey) {
        setEditingKey(null);
        setPhase("summary");
        pushLeo("Changed. ✅");
        return true;
      }
      advance();
      return true;
    },
    [editingKey, advance, pushLeo, pushUser]
  );

  // ── Summary edit ─────────────────────────────
  const editField = useCallback((key: string) => {
    const idx = WIZARD_STEPS.findIndex((s) => s.key === (EDIT_ALIASES[key] ?? key));
    if (idx === -1) return;
    setEditingKey(key);
    setStepIndex(idx);
    setPhase("wizard");
    setErrorText("");
  }, []);

  // ── Confirm & submit ─────────────────────────
  const confirm = useCallback(async () => {
    setPhase("submitting");
    pushUser("Confirm ✅");
    try {
      const res = await submitLead({ ...lead });

      if (res.ok) {
        completedRef.current = true;
        setPhase("success");
        setBooked(true);
        pushLeo("Done! 🎉 Our team will be in touch shortly.");

        // Pricing runs AFTER the lead is safely captured, and never blocks it:
        // the quote is four sequential calls to the CRM and a failure there
        // must not make a captured lead look like a failed submission.
        setQuoteBusy(true);
        pushLeo("Working out your price… ⏳");
        // pickedItems carries the item names + quantities the customer tapped;
        // the server prices them from the live item list (points per item), so
        // the figures match the /get-quote form's exactly.
        requestQuote({ ...lead, pickupLat: geo.lat, pickupLon: geo.lon, pickedItems })
          .then((q) => {
            setQuote(q);
            if (q.ok) {
              pushLeo("Here is your price 👇");
              // The same "Request Quote" conversion the /get-quote form fires
              // once the customer, quotation and items are saved — with the
              // quotation id (for de-duplication) and the enhanced-conversion
              // email/phone. Without it, quotes raised through the chat would
              // never reach Google Ads / GTM.
              try {
                const w = window as unknown as { dataLayer?: unknown[] };
                (w.dataLayer = w.dataLayer || []).push({
                  event: "request_quote",
                  quotation_id: String(q.quotationId ?? ""),
                  customer_id: String(q.customerId ?? ""),
                  items_selected: pickedItems.length,
                  user_email: (lead.email || "").trim().toLowerCase(),
                  user_phone: toE164(lead.phone),
                  source: "leo_chat",
                });
              } catch {
                /* tracking must never affect the customer's quote */
              }
            } else if (q.unsupported) {
              pushLeo("Our team will price this and call you shortly.");
            } else {
              pushLeo("Could not price it just now. Your details are saved — our team will call you.");
            }
          })
          .finally(() => setQuoteBusy(false));
      } else {
        throw new Error(res.error || "Submit failed");
      }
    } catch (e: any) {
      setErrorText(e.message || "Something went wrong.");
      setPhase("error");
      pushLeo(
        "Could not save that. Please tap Try again, or call us."
      );
    }
  }, [lead, geo, pickedItems, pushLeo, pushUser]);

  const retry = useCallback(() => {
    setErrorText("");
    setPhase("summary");
  }, []);

  // Customer is finished — friendly sign-off, offer a fresh start
  const done = useCallback(() => {
    setPhase("done");
    pushLeo("Thanks for choosing SafeStorage 😊");
  }, [pushLeo]);

  const reset = useCallback(() => {
    setLead(EMPTY);
    setStepIndex(0);
    setEditingKey(null);
    setErrorText("");
    setAskedFaqs([]);
    setBooked(false);
    setGeo({});
    partialSent.current = false;
    leadSaved.current = false;
    completedRef.current = false;
    setPickedItems([]);
    setQuote(null);
    setQuoteBusy(false);
    setCustomer(null);
    setExistingQ("");
    setExistingBusy(false);
    setLookupFailed(false);
    setPendingTopic(null);
    setNeedEmail(false);
    setTicket(null);
    setKnownKeys([]);
    ticketDraft.current = "";
    setPhase("welcome");
    setMessages([
      {
        id: uid(),
        sender: "leo",
        text: "Hi again 👋",
      },
    ]);
  }, []);

  // Counted over the steps this customer sees, not all nine — a recognised
  // customer skipping four of them should not open the wizard at 55%.
  const progress = useMemo(
    () => (visibleSteps.length ? Math.round((stepNumber / visibleSteps.length) * 100) : 0),
    [stepNumber, visibleSteps.length]
  );

  // Options for the current step, resolving dynamic (size/items) steps by storage type
  const currentOptions = useMemo(() => {
    if (!step) return [];
    if (step.dynamic === "size") return sizeOptionsFor(lead.storageType);
    if (step.dynamic === "items") return itemOptionsFor(lead.storageType);
    return step.options ?? [];
  }, [step, lead.storageType]);

  // Multi-select items step: combine tapped chips + any free-typed extras
  const submitItems = useCallback(
    (picked: PickedItem[]) => {
      setPickedItems(picked);
      // Readable version for the summary, the lead email and the CRM note.
      const label = picked
        .map((p) => (p.qty > 1 ? `${p.name} x${p.qty}` : p.name))
        .join(", ");
      submitStep(label);
    },
    [submitStep]
  );

  return {
    phase,
    messages,
    lead,
    step,
    stepIndex,
    totalSteps,
    /** 1-based position among the steps this customer is actually shown */
    stepNumber,
    /** how many steps this customer is actually shown */
    visibleTotal: visibleSteps.length,
    /** false on the first visible step, so Back is not offered into nothing */
    canGoBack: stepNumber > 1,
    progress,
    currentOptions,
    editingKey,
    errorText,
    askedFaqs,
    booked,
    quote,
    quoteBusy,
    // returning customer
    customer,
    existingBusy,
    lookupFailed,
    needEmail,
    ticket,
    // actions
    setGeo,
    chooseIntent,
    identifyExisting,
    quoteAsNewCustomer,
    chooseExistingAction,
    submitTicket,
    backToExistingMenu,
    askFaq,
    askAfterBooking,
    startQuoteFromFaq,
    submitStep,
    submitItems,
    submitPickup,
    goBack,
    editField,
    confirm,
    retry,
    reset,
    done,
    captureAbandoned,
  };
}