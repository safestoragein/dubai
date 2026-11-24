"use client"

import Image from "next/image"
import { useState } from "react"
import r from "./rent-extras.module.css"

/**
 * Before / after slider. Drag the handle (or use the arrow keys on the range
 * input) to reveal one side. The "before" image sits on top and is clipped to
 * the left of the divider.
 */
export default function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  title,
  caption,
}: {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  title: string
  caption: string
}) {
  const [pos, setPos] = useState(50)

  return (
    <figure className={r.ba}>
      <div className={r.baFrame} style={{ ["--p" as string]: `${pos}%` }}>
        <Image src={after} alt={afterAlt} fill sizes="(max-width: 760px) 94vw, 46vw" />
        <div className={r.baTop}>
          <Image src={before} alt={beforeAlt} fill sizes="(max-width: 760px) 94vw, 46vw" />
        </div>
        <span className={`${r.baTag} ${r.baTagL}`}>Before</span>
        <span className={`${r.baTag} ${r.baTagR}`}>After</span>
        <span className={r.baLine} aria-hidden="true">
          <span className={r.baKnob}>⇆</span>
        </span>
        <input
          className={r.baRange}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${title}: drag to compare before and after`}
        />
      </div>
      <figcaption>
        <b>{title}</b>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}
