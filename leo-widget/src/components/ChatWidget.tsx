import { useEffect, useRef, useState } from "react";
import { useLeoChat } from "../hooks/useLeoChat";
import { MessageBubble } from "./MessageBubble";
import { OptionButtons } from "./OptionButtons";
import { InputArea } from "./InputArea";
import { ItemsPicker } from "./ItemsPicker";
import { AddressAutocomplete } from "./AddressAutocomplete";
import { SummaryCard } from "./SummaryCard";
import { SuccessCard } from "./SuccessCard";
import { QuoteCard } from "./QuoteCard";
import { BotAvatar, RobotIcon } from "./BotAvatar";
import { EmiratePicker } from "./EmiratePicker";
import { StorageTypeCards } from "./StorageTypeCards";
import { ExistingMenu } from "./ExistingMenu";
import { TicketCard } from "./TicketCard";
import { BRAND } from "../data/brand";
import { FAQS } from "../data/faqs";
import { warmPlaces } from "../api/places";
import type { WizardStep } from "../types";

/** Welcome menu — one row, so the first screen never scrolls. */
// "Existing customer" is deliberately absent in the UAE build: that lane needs
// CRM lookup/ticket endpoints safestorage.ae does not have.
const INTENTS = ["Get a Free Quote", "Ask a question"];

/**
 * The returning-customer lane borrows the wizard's input footer, so its three
 * prompts are shaped like steps. They are not in WIZARD_STEPS: nothing here
 * belongs to the quote, and the progress bar must not count them.
 */
const LOOKUP_STEP = {
  key: "existingQ",
  question: "",
  type: "text",
  placeholder: "Mobile, email or customer ID",
} as unknown as WizardStep;

const TICKET_MESSAGE_STEP = {
  key: "ticketMessage",
  question: "",
  type: "textarea",
  placeholder: "Type your message",
} as unknown as WizardStep;

const TICKET_EMAIL_STEP = {
  key: "ticketEmail",
  question: "",
  type: "email",
  placeholder: "name@example.com",
} as unknown as WizardStep;

/**
 * The nudge above the closed launcher.
 *
 * Deliberately not instant and not forever: it appears a couple of seconds in
 * (a bubble that pops the moment the page paints reads as a pop-up and gets
 * dismissed reflexively), retires on its own, and once dismissed it stays gone
 * for the rest of the browsing session — the same visitor moving between pages
 * should not be pitched at on every one.
 */
// Appears 1.5 s after load and retires 10 s after load (1.5 + 8.5) — the UAE
// brief was "hide the greeting 10 seconds after the visitor lands".
const TEASER_DELAY_MS = 1500;
const TEASER_LIFE_MS = 13500; // 1.5 s delay + 13.5 s = hides 15 s after load
const TEASER_SEEN_KEY = "storo_teaser_seen";

function teaserAlreadySeen(): boolean {
  try {
    return sessionStorage.getItem(TEASER_SEEN_KEY) === "1";
  } catch {
    // Private mode / storage disabled — showing it once more is the harmless side.
    return false;
  }
}

function rememberTeaserSeen() {
  try {
    sessionStorage.setItem(TEASER_SEEN_KEY, "1");
  } catch {
    /* nothing to do */
  }
}

/**
 * Current path, kept live across Next.js client-side navigation (which never
 * reloads this bundle). Patches history.pushState/replaceState to notice route
 * changes — the widget is injected into a page it does not own.
 */
function usePathname(): string {
  const [path, setPath] = useState(() => (typeof window === "undefined" ? "" : window.location.pathname));
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    const { pushState, replaceState } = window.history;
    window.history.pushState = function (...args) {
      pushState.apply(this, args as any);
      update();
    };
    window.history.replaceState = function (...args) {
      replaceState.apply(this, args as any);
      update();
    };
    window.addEventListener("popstate", update);
    update();
    return () => {
      window.history.pushState = pushState;
      window.history.replaceState = replaceState;
      window.removeEventListener("popstate", update);
    };
  }, []);
  return path;
}

/**
 * Space the host page reserves at the bottom of <body> (the site's fixed mobile
 * call-to-action bar), so the launcher sits above it instead of behind it.
 */
function useBodyInset(path: string): number {
  const [inset, setInset] = useState(0);
  useEffect(() => {
    const read = () => {
      const v = parseFloat(window.getComputedStyle(document.body).paddingBottom || "0");
      setInset(Number.isFinite(v) ? v : 0);
    };
    read();
    window.addEventListener("resize", read);
    window.addEventListener("orientationchange", read);
    return () => {
      window.removeEventListener("resize", read);
      window.removeEventListener("orientationchange", read);
    };
  }, [path]);
  return inset;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [addressDraft, setAddressDraft] = useState("");
  const [teaser, setTeaser] = useState(false);
  const [teaserLeaving, setTeaserLeaving] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [viewport, setViewport] = useState<{ w: number; h: number; top: number; left: number } | null>(null);
  const c = useLeoChat();
  const path = usePathname();
  const inset = useBodyInset(path);
  // The /get-quote page is already a quote form, so the whole widget (launcher
  // and nudge) stays off it.
  const onQuotePage = /^\/get-quote\/?$/.test(path);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Leaving the page counts as abandoning the chat. pagehide fires reliably on
  // mobile Safari, where beforeunload does not.
  //
  // Deliberately NOT visibilitychange: people switch away mid-chat to check
  // another app. That fired "abandoned" with only half the details, and
  // because the lead is sent once per conversation, the fuller data collected
  // afterwards never went at all. Observed in testing — the saved lead had a
  // phone but no email, even though the customer had typed one.
  useEffect(() => {
    const bail = () => c.captureAbandoned(true);
    window.addEventListener("pagehide", bail);
    return () => window.removeEventListener("pagehide", bail);
  }, [c.captureAbandoned]);

  /**
   * Warm the Places SDK the moment the chat opens.
   *
   * It was warmed on the address step, but that is several screens in — by
   * then the customer is waiting on it. Opening the panel is the earliest
   * honest signal of intent, and gives the script the whole conversation to
   * arrive. Fire and forget; a failure just leaves the field as typed text.
   */
  useEffect(() => {
    if (open) warmPlaces();
  }, [open]);

  // Show the nudge, then let it retire. Never while the panel is open, and
  // never twice in a session.
  useEffect(() => {
    if (open || onQuotePage || teaserAlreadySeen()) return;
    const show = window.setTimeout(() => setTeaser(true), TEASER_DELAY_MS);
    const hide = window.setTimeout(() => {
      setTeaserLeaving(true);
      window.setTimeout(() => setTeaser(false), 220);
    }, TEASER_DELAY_MS + TEASER_LIFE_MS);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [open, onQuotePage]);

  const dismissTeaser = () => {
    setTeaser(false);
    rememberTeaserSeen();
  };

  /**
   * Phone-sized viewport. Below this the panel stops being a floating card and
   * becomes a full-screen sheet — a 400px card offset 1.25rem from the right
   * does not fit a 390px phone, which is why Send was falling off the edge.
   */
  useEffect(() => {
    // Guarded: this bundle is injected into pages we do not control, and an
    // absent matchMedia must leave the desktop layout standing rather than
    // throw and take the whole widget down.
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setMobile(mq.matches);
    apply();
    // addListener: Safari < 14 has no addEventListener on MediaQueryList.
    if (mq.addEventListener) mq.addEventListener("change", apply);
    else mq.addListener(apply);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", apply);
      else mq.removeListener(apply);
    };
  }, []);

  /**
   * Track the VISUAL viewport, not the layout one.
   *
   * When the on-screen keyboard opens, `100vh` does not change on iOS or
   * Android — the layout viewport is still the full screen — so a panel sized
   * in vh keeps its height and the bottom half of it, input included, ends up
   * behind the keyboard. That is the "half of the screen going" in the second
   * screenshot. visualViewport.height IS the space actually left above the
   * keyboard, and offsetTop is how far iOS has scrolled the visual viewport up.
   */
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () =>
      setViewport({ w: vv.width, h: vv.height, top: vv.offsetTop, left: vv.offsetLeft });
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);

  /**
   * Lock the page behind the mobile sheet.
   *
   * This is the piece `overscroll-contain` cannot do. When an input is focused,
   * iOS Safari scrolls the DOCUMENT to bring it above the keyboard — and on iOS
   * a position:fixed element is dragged along with that scroll, which is how a
   * full-screen sheet ends up half off the top of the screen. Pinning the body
   * means there is nothing for Safari to scroll, so the sheet stays put and
   * visualViewport sizing is left to do its job alone.
   *
   * position:fixed + a negative top is the standard recipe: `overflow:hidden`
   * by itself is ignored by iOS. The exact scroll position is restored on
   * close, so the host page is left where the visitor had it.
   */
  useEffect(() => {
    if (!mobile || !open) return;
    const b = document.body;
    const y = window.scrollY;
    const prev = {
      position: b.style.position,
      top: b.style.top,
      left: b.style.left,
      right: b.style.right,
      width: b.style.width,
      overflow: b.style.overflow,
    };
    b.style.position = "fixed";
    b.style.top = `-${y}px`;
    b.style.left = "0";
    b.style.right = "0";
    b.style.width = "100%";
    b.style.overflow = "hidden";
    return () => {
      b.style.position = prev.position;
      b.style.top = prev.top;
      b.style.left = prev.left;
      b.style.right = prev.right;
      b.style.width = prev.width;
      b.style.overflow = prev.overflow;
      window.scrollTo(0, y);
    };
  }, [mobile, open]);

  // Entering the pickup step — including coming back to it from the summary —
  // starts from whatever address is already on the lead rather than an empty
  // box the customer has to retype.
  useEffect(() => {
    if (c.step?.type === "address") setAddressDraft(c.lead.pickupLocation || "");
  }, [c.step?.key]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [c.messages, c.phase]);

  if (onQuotePage) return null;

  // The site's own floating WhatsApp / Call button is lifted above this corner
  // (components/floating-contact-buttons.tsx), so the launcher takes the bottom.
  return (
    <div className="ss-dock fixed z-[9999] font-sans" style={{ ["--ss-inset" as any]: `${inset}px` }}>
      {/* Panel. max-h clears everything below it — the bottom-24 offset (6rem)
          + launcher (3.5rem) + mb-3 gap + air at the top. At 5rem the header
          ran off the top of the screen.
          720px tall, not 640: the item step shows a whole 13-row list now, and
          the extra height is the difference between reading it and scrolling
          it. The viewport clamp still wins on short screens. */}
      {open && (
        <div
          className={
            mobile
              ? // Full-screen sheet. `fixed` escapes this container's
                // bottom-24/right-5 offset, which is what pushed the panel off
                // the right edge of a phone.
                "fixed w-full bg-white shadow-2xl flex flex-col overflow-hidden"
              : "relative mb-3 w-[400px] max-w-[calc(100vw-2.5rem)] h-[720px] max-h-[calc(100vh-7.5rem-var(--ss-inset,0px))] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          }
          style={
            mobile
              ? {
                  // Sized and positioned from the VISUAL viewport so the
                  // keyboard shrinks the panel instead of covering its bottom
                  // half. Falls back to dvh (then vh) where the API is absent.
                  top: viewport ? viewport.top : 0,
                  left: viewport ? viewport.left : 0,
                  // Width from the VISUAL viewport too, not just height. If the
                  // page is zoomed — by a pinch, or by iOS on a focused input —
                  // the layout viewport is wider than what can actually be
                  // seen, and a full-width sheet runs off the right edge.
                  width: viewport ? viewport.w : undefined,
                  height: viewport ? viewport.h : "100dvh",
                }
              : undefined
          }
        >
          {/* Header */}
          <div
            className="px-4 py-3.5 flex items-center justify-between text-white"
            style={{ background: BRAND.navy }}
          >
            <div className="flex items-center gap-3">
              <BotAvatar size={38} onDark />
              <div>
                <div className="flex items-center gap-1.5">
                  {/* Explicit colour: the widget is embedded on the SafeStorage
                      site, whose stylesheet sets a dark colour on <p> and wins
                      over an inherited text-white. */}
                  <p className="font-semibold text-sm leading-tight" style={{ color: "#fff" }}>
                    {BRAND.assistant}
                  </p>
                  <span className="text-[9px] uppercase tracking-wide font-semibold px-1.5 py-0.5 rounded bg-white/20 leading-none">
                    {BRAND.assistantRole}
                  </span>
                </div>
                <p className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,.72)" }}>
                  {BRAND.name} · replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                c.captureAbandoned();
                setOpen(false);
              }}
              className="text-white/80 hover:text-white text-xl leading-none w-7 h-7"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Progress bar (wizard only) */}
          {c.phase === "wizard" && (
            <div className="px-4 pt-3 pb-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-gray-400">
                  Step {c.stepNumber} of {c.visibleTotal}
                </span>
                {c.canGoBack && (
                  <button
                    onClick={c.goBack}
                    className="text-[11px] font-medium"
                    style={{ color: BRAND.accent }}
                  >
                    ← Back
                  </button>
                )}
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${c.progress}%`, background: BRAND.navy }}
                />
              </div>
            </div>
          )}

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
            {/* Avatar shows only on the first message of each assistant run —
                see MessageBubble. */}
            {c.messages.map((m, i) => (
              <MessageBubble
                key={m.id}
                msg={m}
                showAvatar={i === 0 || c.messages[i - 1].sender !== m.sender}
              />
            ))}

            {/* Welcome intent menu */}
            {c.phase === "welcome" && (
              <OptionButtons options={INTENTS} onPick={c.chooseIntent} row />
            )}

            {/* FAQ list */}
            {c.phase === "faq" &&
              (() => {
                const remaining = FAQS.filter(
                  (f) => !c.askedFaqs.includes(f.q),
                );
                return (
                  <div className="mt-1">
                    <div className="flex flex-col gap-1.5 mb-2">
                      {remaining.map((f) => (
                        <button
                          key={f.q}
                          onClick={() => c.askFaq(f.q, f.a)}
                          className="text-left text-sm px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100"
                        >
                          {f.q}
                        </button>
                      ))}
                      {remaining.length === 0 && (
                        <p className="text-sm text-gray-500 py-1">
                          Those are all the common questions.{" "}
                          {c.booked
                            ? "We will call you soon."
                            : "Shall I work out your price now?"}
                        </p>
                      )}
                    </div>
                    {c.booked ? (
                      <button
                        onClick={c.done}
                        className="w-full text-sm font-medium py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
                      >
                        I am done, thank you
                      </button>
                    ) : (
                      <button
                        onClick={c.startQuoteFromFaq}
                        className="w-full text-white text-sm font-medium py-2.5 rounded-xl"
                        style={{ background: BRAND.navy }}
                      >
                        Get my price →
                      </button>
                    )}
                  </div>
                );
              })()}

            {/* Returning customer — the identifier did not match anything, so
                offer the way forward rather than leaving them on a dead end.
                The input footer stays open underneath for another try. */}
            {c.phase === "existingLookup" && c.lookupFailed && !c.existingBusy && (
              <button
                onClick={c.quoteAsNewCustomer}
                className="mt-2 w-full text-sm font-medium py-2.5 rounded-xl border"
                style={{ borderColor: BRAND.navy, color: BRAND.navy }}
              >
                Get a price instead →
              </button>
            )}

            {/* Recognised — Store again / Support / Retrieval / Payment */}
            {c.phase === "existingMenu" && c.customer && (
              <ExistingMenu onPick={c.chooseExistingAction} />
            )}

            {/* Ticket raised */}
            {c.phase === "ticketDone" && c.ticket && (
              <TicketCard
                ticketId={c.ticket.ticketId}
                topic={c.ticket.topic}
                onAnotherThing={c.backToExistingMenu}
                onDone={c.done}
              />
            )}

            {/* Wizard choice options — two steps get a purpose-built picker
                instead of a wrapped pill list. */}
            {c.phase === "wizard" && c.step?.type === "choice" && (
              c.step.key === "storageType" ? (
                <StorageTypeCards onPick={c.submitStep} />
              ) : c.step.key === "city" ? (
                <EmiratePicker onPick={c.submitStep} />
              ) : (
                <OptionButtons options={c.currentOptions} onPick={c.submitStep} />
              )
            )}

            {/* Wizard items multi-select */}
            {/* Wizard items multi-select */}
            {c.phase === "wizard" && c.step?.type === "multi" && (
              <div className="mt-1">
                <ItemsPicker
                  error={c.errorText}
                  onSubmit={c.submitItems}
                  storageType={c.lead.storageType}
                />
              </div>
            )}

            {/* Summary */}
            {c.phase === "summary" && (
              <SummaryCard
                lead={c.lead}
                onEdit={c.editField}
                onConfirm={c.confirm}
                /* A recognised customer was never asked for these, so they are
                   shown from their record — masked, and with no Edit link.
                   Whichever one they typed to identify themselves is already a
                   normal editable row, so it is left out here. */
                fixedRows={
                  c.customer
                    ? [
                        { label: "Name", value: c.customer.firstName },
                        {
                          label: "Mobile",
                          value: c.lead.phone ? "" : c.customer.maskedPhone,
                        },
                        {
                          label: "Email",
                          value: c.lead.email ? "" : c.customer.maskedEmail,
                        },
                      ]
                    : []
                }
              />
            )}

            {c.phase === "submitting" && (
              <p className="text-sm text-gray-400 italic">
                Saving your details…
              </p>
            )}

            {/* Success — the live estimate arrives a few seconds after the
                lead is captured, so it renders above the card when it lands. */}
            {c.phase === "success" && (
              <>
                {c.quoteBusy && (
                  <p className="text-xs text-gray-400 text-center py-2">Working out your price…</p>
                )}
                {c.quote?.ok && <QuoteCard quote={c.quote} />}
                <SuccessCard onAsk={c.askAfterBooking} onDone={c.done} />
              </>
            )}

            {/* Done — friendly sign-off */}
            {c.phase === "done" && (
              <div className="text-center">
                <button
                  onClick={c.reset}
                  className="text-sm font-medium px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  Start over
                </button>
              </div>
            )}

            {/* Error */}
            {c.phase === "error" && (
              <div className="text-center">
                <button
                  onClick={c.retry}
                  className="text-white text-sm font-medium px-4 py-2.5 rounded-xl mt-1"
                  style={{ background: BRAND.navy }}
                >
                  Try again
                </button>
                <div className="flex gap-2 justify-center mt-3">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="text-sm underline"
                    style={{ color: BRAND.navy }}
                  >
                    Call {BRAND.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline"
                    style={{ color: BRAND.whatsappGreen }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Returning-customer input: the identifier, then whatever the ticket
              should say (and an email, if the CRM holds none for them). */}
          {(c.phase === "existingLookup" || c.phase === "existingTicket") && (
            <div className="px-4 py-3.5 border-t border-gray-100 bg-white">
              <InputArea
                step={
                  c.phase === "existingLookup"
                    ? LOOKUP_STEP
                    : c.needEmail
                    ? TICKET_EMAIL_STEP
                    : TICKET_MESSAGE_STEP
                }
                error={c.errorText}
                busy={c.existingBusy}
                busyLabel={c.phase === "existingLookup" ? "Checking…" : "Sending…"}
                busyNote=""
                onSubmit={c.phase === "existingLookup" ? c.identifyExisting : c.submitTicket}
              />
            </div>
          )}

          {/* Input footer (wizard free-text steps only) */}
          {c.phase === "wizard" &&
            c.step &&
            c.step.type !== "choice" &&
            c.step.type !== "multi" && (
              <div className="px-4 py-3.5 border-t border-gray-100 relative z-[9999] bg-white">
                {c.step.type === "address" ? (
                  <AddressAutocomplete
                    value={addressDraft}
                    placeholder={c.step.placeholder}
                    error={c.errorText}
                    /* Seeded so coming back from the summary shows what was
                       already answered instead of three empty controls. */
                    initialFloor={c.lead.pickupFloor}
                    initialLift={c.lead.pickupLift}
                    onChange={setAddressDraft}
                    /* Keep the coordinates of the picked suggestion — the quote
                       bridge needs them for the distance leg of transport. */
                    onSelect={(s) => c.setGeo({ lat: s.lat, lon: s.lon })}
                    /* Only clear the box once the step was accepted — a
                       missing floor used to wipe the address the customer had
                       just typed and then complain that it was empty. */
                    onSubmit={(p) => {
                      if (c.submitPickup(p)) setAddressDraft("");
                    }}
                  />
                ) : (
                  <InputArea
                    step={c.step}
                    error={c.errorText}
                    onSubmit={c.submitStep}
                  />
                )}
              </div>
            )}
        </div>
      )}

      {/* The nudge. Clicking it opens the chat — someone who reads it and taps
          is asking for the conversation, so make the whole thing the target. */}
      {teaser && !open && !onQuotePage && (
        <div
          className={`relative mb-2 ml-auto w-[228px] ${
            teaserLeaving ? "storo-teaser-out" : "storo-teaser-in"
          }`}
        >
          <button
            onClick={() => {
              dismissTeaser();
              setOpen(true);
            }}
            className="w-full text-left bg-white rounded-2xl shadow-xl border border-gray-200 pl-3 pr-7 py-2.5"
          >
            <p className="text-[12px] font-semibold leading-snug" style={{ color: BRAND.navy }}>
              Hi, I am {BRAND.assistant} — your AI assistant
            </p>
            <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
              Get your storage price in 2 minutes.
            </p>
          </button>

          {/* Dismiss without opening. Its own button, not a corner of the one
              above, so "no thanks" cannot become "yes please". */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dismissTeaser();
            }}
            aria-label="Dismiss"
            className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full text-gray-400 hover:text-gray-700 text-xs leading-none"
          >
            ×
          </button>

          {/* Tail, pointing down at the launcher. */}
          <span
            className="absolute -bottom-1 right-6 w-3 h-3 rotate-45 bg-white border-r border-b border-gray-200"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Floating launcher. Hidden behind the mobile sheet — it renders after
          the panel in the same stacking context, so it would otherwise float
          on top of the conversation. The header's × is the way out there. */}
      <div className={`relative ml-auto w-14 h-14 ${mobile && open ? "hidden" : ""}`}>
        {/* Expanding ring. Behind the button and non-interactive, so it can
            never eat the click it is advertising. */}
        {!open && (
          <span
            className="storo-ring absolute inset-0 rounded-full pointer-events-none"
            style={{ background: BRAND.navy }}
            aria-hidden="true"
          />
        )}
        <button
          onClick={() => {
            if (open) c.captureAbandoned();
            dismissTeaser();
            setOpen((o) => !o);
          }}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl text-white transition-transform hover:scale-105 ${
            open ? "" : "storo-breathe"
          }`}
          style={{ background: BRAND.navy }}
          aria-label={open ? "Close SafeStorage chat" : "Open SafeStorage chat"}
        >
          {open ? <span className="text-2xl leading-none">×</span> : <RobotIcon size={28} />}
        </button>
      </div>
    </div>
  );
}

export default ChatWidget;
