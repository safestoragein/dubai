import { describe, it, expect, vi } from "vitest"
import { reportLead, type ReportDeps } from "../lib/report-lead"

import { createHash } from "crypto"
const sha = async (v: string) => createHash("sha256").update(v).digest("hex")
const H = (v: string) => createHash("sha256").update(v).digest("hex")
function mk(over: Partial<ReportDeps> & { claimAnswer?: unknown; claimOk?: boolean } = {}) {
  const calls: { url: string; body: Record<string, unknown> }[] = []
  const dataLayer: Record<string, unknown>[] = []
  const deps: ReportDeps = {
    pass: "PASS",
    fetchFn: async (url, init) => {
      const body = JSON.parse(String(init.body))
      calls.push({ url, body })
      if (body.confirm) return { ok: true, json: async () => ({ confirmed: true }) }
      return { ok: over.claimOk ?? true, json: async () => over.claimAnswer ?? { fire: true, claim: "c".repeat(32), submission_id: "375", lead_id: "188" } }
    },
    dataLayer,
    readEc: () => ({ sha256_email_address: H("ali@example.com"), sha256_phone_number: H("+971501234567") }),
    clearEc: vi.fn(),
    location: { origin: "https://safestorage.ae", pathname: "/thank-you" },
    ...over,
  }
  return { deps, calls, dataLayer }
}

describe("reportLead", () => {
  it("pushes exactly one generate_lead with ids, hashed data, no raw PII", async () => {
    const { deps, dataLayer } = mk()
    expect(await reportLead(deps)).toBe("pushed")
    expect(dataLayer).toHaveLength(1)
    const e = dataLayer[0]
    expect(e).toMatchObject({ event: "generate_lead", submission_id: "375", lead_id: "188", form_type: "book_appointment", page_location: "https://safestorage.ae/thank-you" })
    expect(e.user_data).toEqual({ sha256_email_address: H("ali@example.com"), sha256_phone_number: H("+971501234567") })
    expect(JSON.stringify(e)).not.toMatch(/ali@|example\.com|1234567/i)
  })
  it("does NOT confirm until GTM's eventCallback runs (GTM missing / tab closed => lease can expire and retry)", async () => {
    const { deps, calls, dataLayer } = mk()
    await reportLead(deps)
    expect(calls.filter((c) => c.body.confirm)).toHaveLength(0)
    ;(dataLayer[0].eventCallback as () => void)() // all tags fired
    await Promise.resolve()
    const conf = calls.filter((c) => c.body.confirm)
    expect(conf).toHaveLength(1)
    expect(conf[0].body).toMatchObject({ t: "PASS", confirm: "c".repeat(32) })
    expect(deps.clearEc).toHaveBeenCalled()
  })
  it("no event when the server says fire:false (refresh / already reported / lease live)", async () => {
    const { deps, dataLayer } = mk({ claimAnswer: { fire: false } })
    expect(await reportLead(deps)).toBe("skipped")
    expect(dataLayer).toHaveLength(0)
  })
  it("no event on HTTP error or network failure, and never throws", async () => {
    const a = mk({ claimOk: false })
    expect(await reportLead(a.deps)).toBe("skipped")
    expect(a.dataLayer).toHaveLength(0)
    const b = mk({ fetchFn: async () => { throw new Error("offline") } })
    expect(await reportLead(b.deps)).toBe("error")
    expect(b.dataLayer).toHaveLength(0)
  })
  it("a failing confirm call is swallowed", async () => {
    const { deps, dataLayer } = mk({
      fetchFn: async (_u, init) => {
        if (JSON.parse(String(init.body)).confirm) throw new Error("x")
        return { ok: true, json: async () => ({ fire: true, claim: "c".repeat(32), submission_id: "1", lead_id: "2" }) }
      },
    })
    await reportLead(deps)
    expect(() => (dataLayer[0].eventCallback as () => void)()).not.toThrow()
  })
  it("omits user_data fields it cannot normalise", async () => {
    const { deps, dataLayer } = mk({ readEc: () => ({ sha256_email_address: "not-a-hash", sha256_phone_number: "abc" }) })
    await reportLead(deps)
    expect(dataLayer[0].user_data).toEqual({})
  })
})
