import { BRAND } from "../data/brand";

export function SuccessCard({
  onAsk,
  onDone,
}: {
  onAsk: () => void;
  onDone: () => void;
}) {
  return (
    <div className="text-center py-2">
      <div
        className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl mb-2"
        style={{ background: BRAND.navy }}
      >
        ✓
      </div>

      <div className="flex gap-2 justify-center mt-3">
        <a
          href={`tel:${BRAND.phone}`}
          className="text-white text-sm font-medium px-4 py-2.5 rounded-xl"
          style={{ background: BRAND.navy }}
        >
          📞 Call Now
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

      {/* Return path: booked first → now ask a question */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-2">Anything else?</p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={onAsk}
            className="text-sm font-medium px-4 py-2 rounded-xl border"
            style={{ borderColor: BRAND.navy, color: BRAND.navy }}
          >
            Ask a question
          </button>
          <button
            onClick={onDone}
            className="text-sm px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
