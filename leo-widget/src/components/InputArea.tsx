import { useEffect, useRef, useState } from "react";
import type { WizardStep } from "../types";
import { BRAND } from "../data/brand";

export function InputArea({
  step,
  error,
  busy = false,
  busyLabel = "Sending…",
  busyNote = "",
  onSubmit,
}: {
  step: WizardStep;
  error: string;
  /** a request is running — sending the OTP SMS takes a few seconds */
  busy?: boolean;
  /** what the button says while busy */
  busyLabel?: string;
  /** the line under the box while busy; "" hides it */
  busyNote?: string;
  onSubmit: (v: string) => void;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setValue("");
    inputRef.current?.focus();
  }, [step.key]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step.type !== "textarea") {
      e.preventDefault();
      if (!busy) onSubmit(value);
    }
  };

  const inputCls =
    "w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2";
  const ringStyle = { boxShadow: `0 0 0 0px ${BRAND.navy}` } as React.CSSProperties;

  return (
    <div>
      <div className="flex items-end gap-2">
        {step.type === "textarea" ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            rows={2}
            value={value}
            placeholder={step.placeholder}
            onChange={(e) => setValue(e.target.value)}
            className={inputCls + " resize-none"}
            style={ringStyle}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={step.type === "tel" ? "tel" : step.type === "email" ? "email" : "text"}
            value={value}
            placeholder={step.placeholder}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKey}
            className={inputCls}
            style={ringStyle}
          />
        )}
        <button
          onClick={() => onSubmit(value)}
          disabled={busy}
          className="text-white text-sm font-medium px-4 py-2.5 rounded-xl flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: BRAND.navy }}
        >
          {busy ? busyLabel : "Send"}
        </button>
      </div>
      {/* Sending the SMS takes a few seconds. Say so, or people hammer Send. */}
      {busy && busyNote && <p className="text-xs text-gray-500 mt-1.5">{busyNote}</p>}
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
