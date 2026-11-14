import type { ChatMessage } from "../types";
import { BRAND } from "../data/brand";
import { BotAvatar } from "./BotAvatar";

/**
 * `showAvatar` is false for every assistant message after the first in a run,
 * so a burst of replies reads as one turn instead of a column of repeated
 * avatars. The spacer keeps the bubbles aligned when the avatar is hidden.
 *
 * Spacing follows the grouping: a generous gap between speakers, a small one
 * within the same speaker's run. That's what makes a transcript scannable —
 * uniform gaps read as one undifferentiated wall.
 */
export function MessageBubble({
  msg,
  showAvatar = true,
}: {
  msg: ChatMessage;
  showAvatar?: boolean;
}) {
  const isBot = msg.sender === "leo";
  return (
    <div
      className={`flex items-start ${isBot ? "justify-start" : "justify-end"} ${
        showAvatar ? "mt-4 first:mt-0" : "mt-1.5"
      }`}
    >
      {isBot &&
        (showAvatar ? (
          <div className="mr-2.5">
            <BotAvatar size={30} />
          </div>
        ) : (
          /* matches avatar width + margin so stacked bubbles stay aligned */
          <div className="w-[30px] mr-2.5 flex-shrink-0" aria-hidden="true" />
        ))}
      <div
        className={`max-w-[80%] px-4 py-2.5 text-sm rounded-2xl whitespace-pre-line ${
          isBot
            ? "bg-gray-100 text-gray-800 " + (showAvatar ? "rounded-tl-md" : "")
            : "text-white " + (showAvatar ? "rounded-tr-md" : "")
        }`}
        style={{
          lineHeight: 1.55,
          ...(isBot ? {} : { background: BRAND.navy }),
        }}
      >
        {msg.text}
      </div>
    </div>
  );
}
