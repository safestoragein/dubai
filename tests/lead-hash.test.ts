import { describe, it, expect } from "vitest"
import { createHash } from "node:crypto"
import { hashContact } from "../lib/lead-hash"

const H = (v: string) => createHash("sha256").update(v).digest("hex")
const sha = async (v: string) => H(v)

describe("hashContact", () => {
  it("normalises then hashes; never returns raw values", async () => {
    const r = await hashContact("  Ali@Example.COM ", "+971 50 123 4567", sha)
    expect(r).toEqual({ sha256_email_address: H("ali@example.com"), sha256_phone_number: H("+971501234567") })
    expect(JSON.stringify(r)).not.toMatch(/ali@|\+971/)
  })
  it("local 05x numbers become +971", async () => {
    expect((await hashContact("", "050 123 4567", sha)).sha256_phone_number).toBe(H("+971501234567"))
  })
  it("00-prefixed international numbers", async () => {
    expect((await hashContact("", "00971501234567", sha)).sha256_phone_number).toBe(H("+971501234567"))
  })
  it("drops invalid email / phone", async () => {
    expect(await hashContact("nope", "abc", sha)).toEqual({})
    expect(await hashContact("", "", sha)).toEqual({})
  })
})
