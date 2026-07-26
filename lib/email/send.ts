// Resend client.
//
// Returns null when RESEND_API_KEY is unset, so the quote flow works exactly
// as it did before email existed. The key is the feature switch: add it to
// /home/ubuntu/dubai/.env.local and restart to start sending.
import "server-only"
import { Resend } from "resend"

let client: Resend | null = null

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  if (!client) client = new Resend(key)
  return client
}

export function isEmailEnabled(): boolean {
  return Boolean(process.env.RESEND_API_KEY)
}

/** Must be on a domain verified in Resend, or delivery fails. */
export function fromAddress(): string {
  return process.env.RESEND_FROM || "SafeStorage Dubai <support@safestorage.ae>"
}

export interface SendResult {
  sent: boolean
  id?: string
  error?: string
}

export async function sendEmail(opts: {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
}): Promise<SendResult> {
  const resend = getResend()
  if (!resend) return { sent: false, error: "resend_not_configured" }

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress(),
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      replyTo: opts.replyTo,
    })

    if (error) {
      console.error("[email] Resend rejected the send:", error)
      return { sent: false, error: String(error.message ?? error) }
    }
    return { sent: true, id: data?.id }
  } catch (error) {
    console.error("[email] send threw:", error)
    return { sent: false, error: String(error) }
  }
}
