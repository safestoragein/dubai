import { BRAND } from "../data/brand";

/**
 * The assistant's robot mark. Inline SVG rather than an emoji so it renders
 * identically on every OS and inherits the brand colour.
 */
export function RobotIcon({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* antenna */}
      <path d="M12 2v3" />
      <circle cx="12" cy="1.6" r="1.1" fill={color} stroke="none" />
      {/* head */}
      <rect x="4" y="5.5" width="16" height="13" rx="3.5" />
      {/* eyes */}
      <circle cx="9" cy="11" r="1.4" fill={color} stroke="none" />
      <circle cx="15" cy="11" r="1.4" fill={color} stroke="none" />
      {/* mouth */}
      <path d="M9.5 15h5" />
      {/* ears */}
      <path d="M4 10.5H2.5M20 10.5h1.5" />
    </svg>
  );
}

/** Circular robot avatar used beside assistant messages and in the header. */
export function BotAvatar({ size = 28, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <div
      className="flex-shrink-0 rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: onDark ? "rgba(255,255,255,0.15)" : BRAND.navy,
      }}
      aria-label={BRAND.assistant}
    >
      <RobotIcon size={Math.round(size * 0.62)} color="#ffffff" />
    </div>
  );
}
