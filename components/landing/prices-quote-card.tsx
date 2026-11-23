"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Box } from "lucide-react"
import c from "./prices-quote-card.module.css"

/** Hero quote card for /self-storage-dubai/prices: pick a size + duration, then continue to the quote form
 *  (the choice rides along as ?size=&months= so it is visible in analytics). No price is shown. */
const SIZES = [16, 32, 50, 100]
const DURATIONS = [
  { m: 1, t: "1 Month" },
  { m: 3, t: "3 Months" },
  { m: 6, t: "6 Months" },
  { m: 12, t: "12 Months" },
]

export default function PricesQuoteCard() {
  const [size, setSize] = useState(16)
  const [months, setMonths] = useState(1)
  return (
    <div className={c.card}>
      <Image className={c.logo} src="/images/design-mode/logo.png" alt="SafeStorage" width={170} height={56} />
      <p className={c.label}>Select Storage Size</p>
      <div className={c.sizes}>
        {SIZES.map((n) => (
          <button key={n} type="button" className={c.size} aria-pressed={size === n} onClick={() => setSize(n)}>
            <Box aria-hidden="true" />
            {n} sqft
          </button>
        ))}
      </div>
      <p className={c.label}>Select Duration</p>
      <div className={c.durs}>
        {DURATIONS.map((d) => (
          <button key={d.m} type="button" className={c.dur} aria-pressed={months === d.m} onClick={() => setMonths(d.m)}>
            {d.t}
          </button>
        ))}
      </div>
      <div className={c.sum}>
        <strong>Free itemised quote</strong>
        <span>Pay only for the space you use</span>
      </div>
      <Link className={c.go} href={`/storage-quote?size=${size}&months=${months}#quote`}>
        Get Your Quote →
      </Link>
    </div>
  )
}
