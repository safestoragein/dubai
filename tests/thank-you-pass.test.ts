import { describe, it, expect, vi, beforeAll } from "vitest"
vi.mock("server-only", () => ({}))

describe("thank-you pass", () => {
  let m: typeof import("../lib/thank-you-pass")
  beforeAll(async () => {
    process.env.JWT_SECRET = "test-secret"
    m = await import("../lib/thank-you-pass")
  })
  it("round-trips quotation and lead id", () => {
    expect(m.parseThankYouPass(m.mintThankYouPass(375, 188866))).toEqual({ quotationId: "375", leadId: "188866" })
  })
  it("still accepts old 3-part passes (no lead id)", () => {
    const p = m.mintThankYouPass(375)
    expect(m.verifyThankYouPass(p)).toBe(true)
    expect(m.parseThankYouPass(p)?.leadId).toBeNull()
  })
  it("rejects tampering", () => {
    const p = m.mintThankYouPass(375, 188866)
    expect(m.parseThankYouPass(p.replace("188866", "188867"))).toBeNull()
    const last = p.slice(-1)
    expect(m.parseThankYouPass(p.slice(0, -1) + (last === "0" ? "1" : "0"))).toBeNull()
    expect(m.parseThankYouPass("garbage")).toBeNull()
  })
})
