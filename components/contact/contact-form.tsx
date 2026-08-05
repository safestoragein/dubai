"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

/**
 * The /contact page previously had no contact form at all — only tel:, WhatsApp
 * and an off-page /get-quote link. A contact page with no way to leave a message
 * loses every visitor who does not want to phone, and reads as an incomplete page
 * to Google's quality systems.
 *
 * Posts to the existing lead endpoint. That backend accepts a fixed set of
 * fields, so the enquiry type and the free-text message are combined into
 * `storage_size` — the one free-text field it stores — to avoid silently
 * dropping what the customer wrote.
 */

const ENQUIRY_TYPES = [
  "Personal / household storage",
  "Business or inventory storage",
  "Document storage",
  "Vehicle storage",
  "Warehouse space",
  "Existing customer — support",
  "Something else",
]

type Status = "idle" | "submitting" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    const name = String(fd.get("name") || "").trim()
    const email = String(fd.get("email") || "").trim()
    const phone = String(fd.get("phone") || "").trim()
    const enquiry = String(fd.get("enquiry") || "").trim()
    const message = String(fd.get("message") || "").trim()

    if (!name || !email || !phone) {
      setError("Please fill in your name, email and phone number.")
      setStatus("error")
      return
    }

    setStatus("submitting")
    setError("")

    try {
      const res = await fetch("/api/insert-customer-details-dubai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          customer_email: email,
          customer_contact1: phone,
          storage_type: enquiry.startsWith("Business") ? "business" : "household",
          storage_size: message ? `${enquiry} — ${message}` : enquiry,
        }),
      })

      if (!res.ok) throw new Error(await res.text())

      setStatus("success")
      form.reset()
    } catch {
      setError(
        "We could not send your message just now. Please call +971 50 577 3388 or WhatsApp us and we will respond straight away.",
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#0A2463] mb-2">Thank you — your message is with us</h3>
        <p className="text-gray-700">
          A storage consultant will get back to you within 15 minutes during business hours
          (Mon–Sat 8 AM–8 PM, Sun 10 AM–6 PM). If it is urgent, call{" "}
          <a href="tel:+971505773388" className="font-semibold text-[#0A2463] underline">
            +971 50 577 3388
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gray-200 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name *</Label>
          <Input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone / WhatsApp *</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+971 50 000 0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">Email *</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-enquiry">What is your enquiry about?</Label>
        <select
          id="contact-enquiry"
          name="enquiry"
          defaultValue={ENQUIRY_TYPES[0]}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us roughly what you need to store, from which area of Dubai, and for how long."
        />
      </div>

      {status === "error" && (
        <p className="flex items-start gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full bg-[#D8315B] hover:bg-[#c02a50] text-white"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We reply within 15 minutes during business hours. Your details are never shared with third parties.
      </p>
    </form>
  )
}
