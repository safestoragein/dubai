import { useState } from "react";
import { BRAND } from "../data/brand";

/**
 * The ticket number, once the CRM has it.
 *
 * Shown big and copyable on purpose: it is the only thing the customer can
 * quote back to us, and an 8-character code read off a chat bubble is exactly
 * the sort of thing people mistype.
 */
export function TicketCard({
  ticketId,
  topic,
  onAnotherThing,
  onDone,
}: {
  ticketId: string;
  topic?: string;
  onAnotherThing: () => void;
  onDone: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ticketId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context, or the customer said no). The
      // number is on screen either way, so there is nothing to recover from.
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white text-center">
      <div
        className="mx-auto w-11 h-11 rounded-full flex items-center justify-center text-white text-xl mb-2"
        style={{ background: BRAND.navy }}
      >
        ✓
      </div>
      <p className="text-[11px] uppercase tracking-wide text-gray-400">
        {topic ? `${topic} ticket` : "Your ticket"}
      </p>
      <button
        onClick={copy}
        className="mt-1 text-xl font-bold tracking-widest"
        style={{ color: BRAND.navy }}
        aria-label={`Copy ticket number ${ticketId}`}
      >
        {ticketId}
      </button>
      <p className="text-[11px] text-gray-500 mt-0.5">
        {copied ? "Copied" : "Tap the number to copy it"}
      </p>

      <div className="flex gap-2 justify-center mt-3">
        <a
          href={`tel:${BRAND.phone}`}
          className="text-white text-sm font-medium px-4 py-2.5 rounded-xl"
          style={{ background: BRAND.navy }}
        >
          📞 Call {BRAND.phoneDisplay}
        </a>
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="text-white text-sm font-medium px-4 py-2.5 rounded-xl"
          style={{ background: BRAND.whatsappGreen }}
        >
          💬 WhatsApp
        </a>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2 justify-center">
        <button
          onClick={onAnotherThing}
          className="text-sm font-medium px-4 py-2 rounded-xl border"
          style={{ borderColor: BRAND.navy, color: BRAND.navy }}
        >
          Something else
        </button>
        <button
          onClick={onDone}
          className="text-sm px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          Done
        </button>
      </div>
    </div>
  );
}
