import Image from "next/image"
import Link from "next/link"
import { Bug, Camera, Package, Droplets, Fingerprint, Lock, ScanBarcode, Snowflake } from "lucide-react"
import FacilityReel from "@/components/landing/facility-reel"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import q from "@/components/landing/storage-quote.module.css"
import s from "@/components/landing/landing.module.css"
import BeforeAfter from "./rent-before-after"
import r from "./rent-extras.module.css"

/**
 * Extra sections for /self-storage-dubai/storage-space-for-rent, slotted into
 * LandingSiloPage (see the RENT_PATH checks there). The copy for the rest of the
 * page stays in lib/silo/silo1.ts; these are the pieces that need their own layout.
 *
 * PRICING: the "from AED 12" figure is a deliberate, owner-requested exception to the
 * site-wide no-public-pricing rule (2026-11-24) and applies to THIS page only.
 */
export const RENT_PATH = "/self-storage-dubai/storage-space-for-rent"

/** Where the page's instant form sits — the CTAs below scroll to it. */
export const RENT_FORM_ID = "instant-quote"

/* ------------------------------------------------------------------ price */

export function RentPriceBand() {
  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }} id="rent-price">
      <div className={r.price}>
        <div className={r.priceMain}>
          <span className={r.priceKicker}>Pricing starts from</span>
          <div className={r.priceFig}>
            <b>AED 12</b>
            <span>per sq ft, per month</span>
          </div>
        </div>
        <ul className={r.priceNotes}>
          <li>Billed on the floor space your goods actually occupy</li>
          <li>No lease, no fixed term, no minimum space</li>
          <li>Door-to-door transport quoted as its own one-off figure</li>
        </ul>
        <a className={`${s.btn} ${s.btnAccent}`} href={`#${RENT_FORM_ID}`}>
          Get my exact quote →
        </a>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- facility */

const SHOTS = [
  { src: "/landing/facility-1.webp", t: "Multi-level racking", alt: "Multi-level orange and blue pallet racking inside a SafeStorage warehouse, with wrapped furniture and boxes below" },
  { src: "/landing/facility-2.webp", t: "Wrapped & palletised", alt: "Furniture shrink-wrapped and stored on pallets along a clean warehouse aisle" },
  { src: "/landing/facility-3.webp", t: "Furniture, protected", alt: "Sofas and mattresses wrapped for storage on racking with a clean concrete floor" },
  { src: "/landing/facility-4.webp", t: "Proper handling equipment", alt: "Double-height pallet racking with a pallet truck, ladder and wrapped items" },
]

export function RentFacility() {
  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }} id="rent-facility">
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Our facility</span>
          <h2>
            Take a look <em>inside.</em>
          </h2>
        </div>
        <p>This is where the space you rent actually is — our Dubai warehouse, as it looks on a normal day.</p>
      </div>
      <div className={r.facGrid}>
        <figure className={`${r.tile} ${r.tileReel}`}>
          <FacilityReel
            className={r.reelBox}
            src="/landing/facility-reel.mp4"
            poster="/landing/facility-reel-poster.webp"
            label="SafeStorage Dubai facility reel"
          />
          <figcaption>Inside SafeStorage Dubai</figcaption>
        </figure>
        <figure className={`${r.tile} ${r.tileReel}`}>
          <FacilityReel
            className={r.reelBox}
            src="/landing/facility-ad.mp4"
            poster="/landing/facility-ad-poster.webp"
            label="SafeStorage Dubai warehouse, 24/7 protected, safe, secure"
          />
          <figcaption>Our Dubai warehouse</figcaption>
        </figure>
        {SHOTS.map((x) => (
          <figure className={r.tile} key={x.src}>
            <Image src={x.src} alt={x.alt} fill sizes="(max-width: 680px) 46vw, (max-width: 1100px) 30vw, 16vw" />
            <figcaption>{x.t}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------- climate, CCTV & security */

const PROTECT = [
  {
    Icon: Snowflake,
    t: "Climate-controlled, indoors",
    d: "Stored in a covered, managed warehouse — never a yard, container or shade structure — and racked off the floor.",
  },
  {
    Icon: Droplets,
    t: "Clean and dry",
    d: "Moisture-free, well-maintained space, so veneer, fabric, electronics and paper come back as they went in.",
  },
  {
    Icon: Camera,
    t: "24×7 CCTV",
    d: "Multi-angle camera monitoring across the storage floor, around the clock.",
  },
  {
    Icon: Lock,
    t: "Controlled access",
    d: "Authorised entry only. Visits are arranged in advance so your items can be pulled and reached.",
  },
  {
    Icon: Fingerprint,
    t: "Biometric entry",
    d: "Entry to the storage area is by biometric access, not a shared key.",
  },
  {
    Icon: ScanBarcode,
    t: "Barcode inventory",
    d: "Every item is logged against a barcoded inventory when it reaches us, so we can find and return it.",
  },
  {
    Icon: Package,
    t: "Wrapped and palletised",
    d: "Furniture is shrink-wrapped and racked on pallets, so nothing sits on the floor or is stacked on anything fragile.",
  },
  {
    Icon: Bug,
    t: "Pest control",
    d: "Regular professional treatment of the facility.",
  },
]

export function RentProtection() {
  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }} id="rent-protection">
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Climate control &amp; security</span>
          <h2>
            Indoors, climate-controlled and <em>watched 24×7.</em>
          </h2>
        </div>
        <p>What you rent is not just floor space — it is a managed, monitored environment.</p>
      </div>
      <ul className={r.protGrid}>
        {PROTECT.map(({ Icon, t, d }) => (
          <li className={r.prot} key={t}>
            <span className={r.protIcon}>
              <Icon aria-hidden="true" />
            </span>
            <b>{t}</b>
            <small>{d}</small>
          </li>
        ))}
      </ul>
      <p className={r.protLinks}>
        Read more:{" "}
        <Link href="/self-storage-dubai/climate-controlled">climate controlled storage</Link> ·{" "}
        <Link href="/self-storage-dubai/secure-storage">secure storage</Link> ·{" "}
        <Link href="/self-storage-dubai/24-hour-access">how access works</Link>
      </p>
    </section>
  )
}

/* ---------------------------------------------------------- before/after */

export function RentBeforeAfter() {
  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }} id="rent-before-after">
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Before &amp; after</span>
          <h2>
            From a crowded room to <em>racked space.</em>
          </h2>
        </div>
        <p>Drag the slider. Boxes and furniture leave your home and come back to you whenever you ask.</p>
      </div>
      <div className={r.baGrid}>
        <BeforeAfter
          before="/landing/rent-room-before-1.webp"
          after="/landing/rent-room-after-1.webp"
          beforeAlt="A narrow home storage room packed floor to ceiling with boxes and plastic tubs"
          afterAlt="The same kind of goods wrapped and racked on clean shelving in the SafeStorage warehouse"
          title="The spare room you can walk into again"
          caption="Illustrative: a box-filled room, then the same goods wrapped and racked."
        />
        <BeforeAfter
          before="/landing/rent-room-before-2.webp"
          after="/landing/rent-room-after-2.webp"
          beforeAlt="A cluttered storeroom with overflowing shelves, loose furniture and boxes on the floor"
          afterAlt="Furniture shrink-wrapped and stored on pallets along a clean warehouse aisle"
          title="Furniture off the floor"
          caption="Illustrative: loose furniture and clutter, then wrapped and palletised."
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ hero */

/**
 * The rent page's hero: headline and call-to-action on the left, the /storage-quote form where the
 * hero photo used to be. `q.root` carries the form's colour tokens; its cream background is cleared
 * because the hero already sits on the page background.
 */
export function RentHero({
  tag,
  title,
  accent,
  blurb,
  phoneLink,
}: {
  tag: string
  title: string
  accent: string
  blurb: string
  phoneLink: string
}) {
  return (
    <section className={`${s.hero} ${s.wrap}`}>
      <div className={r.heroGrid}>
        <div className={`${s.heroContent} ${r.heroCopy}`}>
          <span className={s.heroTag}>{tag}</span>
          <h1>
            {title} <br />
            <em>{accent}</em>
          </h1>
          <p>{blurb}</p>
          <p className={r.heroPrice}>
            Pricing starts from <b>AED 12</b> per sq ft, per month
          </p>
          <div className={s.heroCta}>
            <a className={`${s.btn} ${s.btnAccent}`} href={`#${RENT_FORM_ID}`}>
              Get a Free Quote →
            </a>
            <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={phoneLink}>
              <span className={s.phIco}>📞</span> Call: 050-577-3388
            </a>
          </div>
        </div>
        <div className={`${q.root} ${r.heroForm}`} style={{ background: "transparent" }}>
          <StorageQuoteForm anchorId={RENT_FORM_ID} />
        </div>
      </div>
    </section>
  )
}
