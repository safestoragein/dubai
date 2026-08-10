import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Render a feed date for display.
 *
 * Pinned to Asia/Dubai because blog articles are now rendered on the server and
 * hydrated on the client: the server runs in UTC and a Dubai reader is UTC+4, so
 * without a fixed zone a post stored at 21:00 would print one day on the server
 * and the next day in the browser — a hydration mismatch on the byline.
 *
 * Returns "" for a missing or unparseable date so the caller can omit the line
 * rather than printing "Invalid Date".
 */
export function formatDate(dateString: string): string {
  if (!dateString) return ""
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Dubai",
  }).format(date)
}
