"use client"

import { useEffect, useRef, useState } from "react"
import st from "./story.module.css"

/**
 * "Our story" as a short film: three chapters that play one after another.
 * Progress bars drive the timing — when the active bar's CSS fill animation
 * ends we cut to the next chapter — so there is no JS timer to drift. It only
 * starts once the reel is on screen, pauses on hover / the pause button, and
 * under prefers-reduced-motion it does not autoplay at all.
 * Every chapter's text is rendered in the HTML, so crawlers read all three.
 */
const chapters = [
  {
    kicker: "Chapter 01 · The beginning",
    title: "Why we started",
    body: "Storage should be effortless, secure and built around real customer needs. Traditional options were rigid and unreliable — we knew there was a better way.",
  },
  {
    kicker: "Chapter 02 · The gap",
    title: "The problem we solved",
    body: "Long lock-ins, poor handling, limited support. Flexibility and peace of mind were missing — exactly where SafeStorage stepped in.",
  },
  {
    kicker: "Chapter 03 · Today",
    title: "What makes us different",
    points: [
      "ISO 9001:2015 certified, professionally managed facilities",
      "Secure, clean, dust-protected storage",
      "Doorstep pickup & delivery with careful handling",
      "Flexible plans with dedicated support",
    ],
  },
]

function SceneBeginning() {
  return (
    <svg viewBox="0 0 400 280" className={st.svg} aria-hidden="true">
      <circle className={st.sun} cx="300" cy="80" r="46" />
      <line className={st.ground} x1="10" y1="236" x2="390" y2="236" />
      {/* home */}
      <path className={st.house} d="M60 236v-78l58-40 58 40v78z" />
      <path className={st.roof} d="M50 162l68-48 68 48" />
      <rect className={st.door} x="104" y="190" width="28" height="46" rx="3" />
      <rect className={st.win} x="72" y="172" width="20" height="16" rx="2" />
      <rect className={st.win} x="144" y="172" width="20" height="16" rx="2" />
      {/* boxes piling up outside */}
      <g className={`${st.box} ${st.b1}`}><rect x="190" y="206" width="30" height="30" rx="2" /><path d="M205 206v30" /></g>
      <g className={`${st.box} ${st.b2}`}><rect x="222" y="212" width="24" height="24" rx="2" /><path d="M234 212v24" /></g>
      <g className={`${st.box} ${st.b3}`}><rect x="198" y="180" width="24" height="26" rx="2" /><path d="M210 180v26" /></g>
      {/* the idea */}
      <g className={st.bulb}>
        <path className={st.rays} d="M220 118l-10-10M262 118l10-10M241 100V86M206 142h-14M276 142h14" />
        <circle className={st.glass} cx="241" cy="138" r="18" />
        <rect className={st.base} x="233" y="156" width="16" height="10" rx="2" />
      </g>
      {/* van arrives */}
      <g className={st.van}>
        <path className={st.vanBody} d="M290 232v-40a6 6 0 0 1 6-6h52l18 16 16 5a6 6 0 0 1 4 6v19a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4z" />
        <path className={st.vanWin} d="M352 192h8l14 12h-22z" />
        <rect className={st.stripe} x="298" y="212" width="50" height="5" rx="2.5" />
        <circle className={st.wheel} cx="312" cy="236" r="9" />
        <circle className={st.wheel} cx="366" cy="236" r="9" />
      </g>
    </svg>
  )
}

function SceneGap() {
  return (
    <svg viewBox="0 0 400 280" className={st.svg} aria-hidden="true">
      <line className={st.ground} x1="10" y1="236" x2="390" y2="236" />
      {/* lock-in */}
      <g className={`${st.problem} ${st.p1}`}>
        <rect className={st.tile} x="28" y="96" width="96" height="96" rx="18" />
        <path className={st.ink} d="M60 140v-12a16 16 0 0 1 32 0v12" />
        <rect className={st.ink} x="54" y="140" width="44" height="32" rx="5" />
        <g className={st.cross}><path d="M104 104l14 14M118 104l-14 14" /></g>
        <g className={st.tick}><circle cx="111" cy="111" r="11" /><path d="M105 111l4 4 8-8" /></g>
      </g>
      {/* poor handling */}
      <g className={`${st.problem} ${st.p2}`}>
        <rect className={st.tile} x="152" y="96" width="96" height="96" rx="18" />
        <rect className={st.ink} x="178" y="124" width="44" height="44" rx="3" />
        <path className={`${st.ink} ${st.crack}`} d="M200 124l-6 12 10 8-8 12 6 12" />
        <g className={st.cross}><path d="M228 104l14 14M242 104l-14 14" /></g>
        <g className={st.tick}><circle cx="235" cy="111" r="11" /><path d="M229 111l4 4 8-8" /></g>
      </g>
      {/* limited support */}
      <g className={`${st.problem} ${st.p3}`}>
        <rect className={st.tile} x="276" y="96" width="96" height="96" rx="18" />
        <path className={st.ink} d="M304 150v-10a20 20 0 0 1 40 0v10" />
        <rect className={st.ink} x="298" y="146" width="12" height="18" rx="4" />
        <rect className={st.ink} x="338" y="146" width="12" height="18" rx="4" />
        <g className={st.cross}><path d="M352 104l14 14M366 104l-14 14" /></g>
        <g className={st.tick}><circle cx="359" cy="111" r="11" /><path d="M353 111l4 4 8-8" /></g>
      </g>
      {/* SafeStorage steps in */}
      <g className={st.shield}>
        <path d="M200 206l30 11v20c0 18-13 30-30 36-17-6-30-18-30-36v-20z" />
        <path className={st.shieldTick} d="M188 238l8 8 16-16" />
      </g>
    </svg>
  )
}

function SceneToday() {
  return (
    <svg viewBox="0 0 400 280" className={st.svg} aria-hidden="true">
      <line className={st.ground} x1="10" y1="236" x2="390" y2="236" />
      {/* warehouse */}
      <g className={st.warehouse}>
        <rect className={st.roofBand} x="40" y="104" width="250" height="14" rx="3" />
        <path className={st.house} d="M52 236V118h226v118z" />
        <rect className={st.shutter} x="128" y="160" width="74" height="76" rx="3" />
        <path className={st.shutterLines} d="M128 174h74M128 188h74M128 202h74M128 216h74" />
        <rect className={st.win} x="68" y="134" width="36" height="16" rx="2" />
        <rect className={st.win} x="226" y="134" width="36" height="16" rx="2" />
      </g>
      {/* rating badge */}
      <g className={st.badge}>
        <rect x="258" y="44" width="116" height="48" rx="14" />
        <text x="280" y="76">4.9 ★</text>
      </g>
      {/* van parks */}
      <g className={st.van2}>
        <path className={st.vanBody} d="M230 232v-40a6 6 0 0 1 6-6h52l18 16 16 5a6 6 0 0 1 4 6v19a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4z" />
        <path className={st.vanWin} d="M292 192h8l14 12h-22z" />
        <rect className={st.stripe} x="238" y="212" width="50" height="5" rx="2.5" />
        <circle className={st.wheel} cx="252" cy="236" r="9" />
        <circle className={st.wheel} cx="306" cy="236" r="9" />
      </g>
      {/* sparkles */}
      <path className={`${st.spark} ${st.s1}`} d="M60 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
      <path className={`${st.spark} ${st.s2}`} d="M196 50l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
    </svg>
  )
}

const scenes = [SceneBeginning, SceneGap, SceneToday]

export function StoryReel() {
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [reduced, setReduced] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return setInView(true)
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting && e.intersectionRatio >= 0.35), {
      threshold: [0, 0.35],
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const playing = inView && !paused && !hover && !reduced
  const go = (i: number) => setActive((i + chapters.length) % chapters.length)

  return (
    <div
      ref={ref}
      className={`${st.reel} ${playing ? st.playing : ""} ${reduced ? st.still : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={st.bars} role="tablist" aria-label="Our story chapters">
        {chapters.map((c, i) => (
          <button
            key={c.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`${st.bar} ${i < active ? st.barDone : ""} ${i === active ? st.barOn : ""}`}
            onClick={() => go(i)}
          >
            <span className={st.barTrack}>
              <span
                className={st.barFill}
                key={i === active ? `on-${active}` : `off-${i}`}
                onAnimationEnd={i === active ? () => go(active + 1) : undefined}
              />
            </span>
            <span className={st.barLabel}>{c.title}</span>
          </button>
        ))}
      </div>

      <div className={st.stage}>
        {chapters.map((c, i) => {
          const Scene = scenes[i]
          return (
            <section
              key={c.title}
              className={`${st.scene} ${i === active ? st.sceneOn : ""}`}
              aria-hidden={i !== active}
              role="tabpanel"
            >
              <div className={st.copy}>
                <span className={st.kicker}>{c.kicker}</span>
                <h3 className={st.title}>{c.title}</h3>
                {c.body ? <p className={st.body}>{c.body}</p> : null}
                {c.points ? (
                  <ul className={st.points}>
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className={st.art}>
                <Scene />
              </div>
            </section>
          )
        })}
      </div>

      <div className={st.controls}>
        <button type="button" className={st.ctrl} onClick={() => go(active - 1)} aria-label="Previous chapter">
          ←
        </button>
        <button
          type="button"
          className={st.ctrl}
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play story" : "Pause story"}
        >
          {paused ? "▶" : "❚❚"}
        </button>
        <button type="button" className={st.ctrl} onClick={() => go(active + 1)} aria-label="Next chapter">
          →
        </button>
        <span className={st.count}>
          {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
