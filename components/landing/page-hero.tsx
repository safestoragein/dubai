import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { env } from "@/lib/env"
import s from "./landing.module.css"

/**
 * Full-bleed hero for silo pages: the photo runs edge to edge behind a dark
 * wash, with the copy centred over it — not the homepage's inset card.
 * `image` is a path under /public.
 *
 * `title` is split so the second half can carry the accent colour, the way the
 * homepage h1 does — pass `titleAccent` for the coloured run.
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  slogan,
  blurb,
  image,
  imagePosition = "center",
  stats,
  ctaLabel = "Get Your Free Quote",
  ctaHref = "/get-quote",
  phoneLabel = "Call: 050-577-3388",
}: {
  eyebrow?: string
  title: string
  titleAccent?: string
  slogan?: string
  blurb: string
  image: string
  imagePosition?: string
  /** Small icon + label row under the CTAs. */
  stats?: { Icon: LucideIcon; label: string }[]
  ctaLabel?: string
  ctaHref?: string
  phoneLabel?: string
}) {
  return (
    <section
      className={s.heroFull}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
    >
      <div className={s.heroFullInner}>
        {eyebrow ? <span className={s.heroFullTag}>{eyebrow}</span> : null}
        <h1>
          {title} {titleAccent ? <em>{titleAccent}</em> : null}
        </h1>
        {slogan ? <div className={s.heroSlogan}>{slogan}</div> : null}
        <p className={s.heroFullBlurb}>{blurb}</p>

        <div className={s.heroFullCta}>
          <Link className={`${s.btn} ${s.btnAccent}`} href={ctaHref}>
            {ctaLabel} →
          </Link>
          <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
            <span className={s.phIco}>📞</span> {phoneLabel}
          </a>
        </div>

        {stats?.length ? (
          <div className={s.heroStats}>
            {stats.map(({ Icon, label }) => (
              <span className={s.heroStat} key={label}>
                <Icon strokeWidth={2} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

/** Closing call-to-action band, in place of the old full-bleed gradient block. */
export function CtaBand({
  title,
  blurb,
  ctaLabel = "Get Your Free Quote",
  ctaHref = "/get-quote",
  whatsAppLabel,
  callLabel = "050-577-3388",
}: {
  title: string
  blurb: string
  ctaLabel?: string
  ctaHref?: string
  /** Renders a third WhatsApp action when set. */
  whatsAppLabel?: string
  callLabel?: string
}) {
  return (
    <section className={s.wrap}>
      <div className={s.ctaBand}>
        <div>
          <h2>{title}</h2>
          <p>{blurb}</p>
        </div>
        <div className={s.ctaBandActions}>
          <Link className={`${s.btn} ${s.btnAccent}`} href={ctaHref}>
            {ctaLabel} →
          </Link>
          {whatsAppLabel ? (
            <a
              className={`${s.btn} ${s.btnGhost}`}
              href={env.WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {whatsAppLabel}
            </a>
          ) : null}
          <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
            <span className={s.phIco}>📞</span> {callLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
