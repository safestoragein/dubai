import Image from "next/image"
import Link from "next/link"
import { ArrowUpDown, Bug, CalendarDays, Camera, Droplet, Droplets, FileX2, Fingerprint, Lock, Package, Ruler, ScanBarcode, ShieldCheck, Snowflake, Truck, User, Video } from "lucide-react"
import FacilityReel from "@/components/landing/facility-reel"
import StorageQuoteForm from "@/components/landing/storage-quote-form"
import q from "@/components/landing/storage-quote.module.css"
import s from "@/components/landing/landing.module.css"
import BeforeAfter from "./rent-before-after"
import { renderRich } from "./rich-text"
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

const WHY_ART: Record<string, string> = {
  cam: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><path d=\"M104 56v22H88\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"7\" stroke-linecap=\"round\"/><rect x=\"96\" y=\"70\" width=\"14\" height=\"14\" rx=\"3\" fill=\"#e2e8f0\"/><g transform=\"rotate(-12 55 42)\"><rect x=\"12\" y=\"22\" width=\"80\" height=\"40\" rx=\"17\" fill=\"#f8fafc\" stroke=\"#d5dbe5\" stroke-width=\"2\"/><circle cx=\"37\" cy=\"42\" r=\"16\" fill=\"#1e293b\"/><circle cx=\"37\" cy=\"42\" r=\"10\" fill=\"#031a5b\"/><circle cx=\"33\" cy=\"38\" r=\"3.2\" fill=\"#fff\" opacity=\".75\"/><rect x=\"62\" y=\"32\" width=\"24\" height=\"7\" rx=\"3.5\" fill=\"#f05200\"/></g></svg>",
  pest: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><path d=\"M60 8l34 12v26c0 24-15 40-34 48-19-8-34-24-34-48V20z\" fill=\"#031a5b\" stroke=\"#f05200\" stroke-width=\"5\" stroke-linejoin=\"round\"/><g fill=\"#fff\"><ellipse cx=\"60\" cy=\"52\" rx=\"10\" ry=\"13\"/><circle cx=\"60\" cy=\"35\" r=\"6\"/></g><g stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M50 46l-9-5M50 54h-11M51 62l-8 7M70 46l9-5M70 54h11M69 62l8 7\"/></g><path d=\"M34 22L86 80\" stroke=\"#f05200\" stroke-width=\"7\" stroke-linecap=\"round\"/></svg>",
  dry: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><path d=\"M14 90V26l34-14h58v78z\" fill=\"#cfd5de\"/><path d=\"M14 26l34-14v78H14z\" fill=\"#aeb6c3\"/><rect x=\"48\" y=\"22\" width=\"52\" height=\"68\" rx=\"2\" fill=\"#f05200\"/><g stroke=\"#d04600\" stroke-width=\"2\"><path d=\"M48 32h52M48 42h52M48 52h52M48 62h52M48 72h52M48 82h52\"/></g><rect x=\"68\" y=\"14\" width=\"14\" height=\"5\" rx=\"1\" fill=\"#031a5b\"/><rect x=\"48\" y=\"86\" width=\"52\" height=\"4\" fill=\"#e2e8f0\"/></svg>",
  keypad: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><rect x=\"40\" y=\"6\" width=\"46\" height=\"88\" rx=\"8\" fill=\"#1e293b\"/><rect x=\"45\" y=\"11\" width=\"36\" height=\"78\" rx=\"5\" fill=\"#0f172a\"/><g fill=\"#38bdf8\" font-family=\"Poppins,Arial\" font-size=\"9\" font-weight=\"700\" text-anchor=\"middle\"><text x=\"53\" y=\"29\">1</text><text x=\"63\" y=\"29\">2</text><text x=\"73\" y=\"29\">3</text><text x=\"53\" y=\"42\">4</text><text x=\"63\" y=\"42\">5</text><text x=\"73\" y=\"42\">6</text><text x=\"53\" y=\"55\">7</text><text x=\"63\" y=\"55\">8</text><text x=\"73\" y=\"55\">9</text><text x=\"63\" y=\"68\">0</text></g><rect x=\"52\" y=\"76\" width=\"22\" height=\"7\" rx=\"3.5\" fill=\"#cbd5e1\"/></svg>",
  boxes: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><rect x=\"62\" y=\"48\" width=\"52\" height=\"40\" rx=\"3\" fill=\"#d9a566\"/><path d=\"M62 48h52l-5-9H67z\" fill=\"#e9c08a\"/><rect x=\"82\" y=\"39\" width=\"12\" height=\"49\" fill=\"#f4dcb4\"/><rect x=\"14\" y=\"58\" width=\"52\" height=\"34\" rx=\"3\" fill=\"#d9a566\"/><path d=\"M14 58h52l-5-9H19z\" fill=\"#e9c08a\"/><rect x=\"34\" y=\"49\" width=\"12\" height=\"43\" fill=\"#f4dcb4\"/><path d=\"M88 62l8 4v9l-8 4-8-4v-9z\" fill=\"#f05200\"/><path d=\"M40 70l6 3v7l-6 3-6-3v-7z\" fill=\"#f05200\"/><rect x=\"92\" y=\"70\" width=\"22\" height=\"22\" rx=\"11\" fill=\"#f8fafc\" stroke=\"#d5dbe5\"/></svg>",
  truck: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><rect x=\"6\" y=\"22\" width=\"72\" height=\"52\" rx=\"4\" fill=\"#fff\" stroke=\"#d5dbe5\" stroke-width=\"2\"/><path d=\"M78 36h20l14 16v22H78z\" fill=\"#f8fafc\" stroke=\"#d5dbe5\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M84 41h11l9 11H84z\" fill=\"#cbd5e1\"/><path d=\"M42 33l12 6v14l-12 6-12-6V39z\" fill=\"#f05200\"/><path d=\"M30 39l12 6 12-6M42 45v14\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"6\" y=\"70\" width=\"106\" height=\"6\" fill=\"#1e293b\"/><circle cx=\"30\" cy=\"78\" r=\"9\" fill=\"#1e293b\"/><circle cx=\"30\" cy=\"78\" r=\"4\" fill=\"#cbd5e1\"/><circle cx=\"92\" cy=\"78\" r=\"9\" fill=\"#1e293b\"/><circle cx=\"92\" cy=\"78\" r=\"4\" fill=\"#cbd5e1\"/></svg>",
  cal: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><rect x=\"22\" y=\"18\" width=\"80\" height=\"72\" rx=\"8\" fill=\"#fff\" stroke=\"#d5dbe5\" stroke-width=\"2\"/><path d=\"M22 26a8 8 0 018-8h64a8 8 0 018 8v14H22z\" fill=\"#f05200\"/><g fill=\"none\" stroke=\"#f05200\" stroke-width=\"4\" stroke-linecap=\"round\"><path d=\"M40 10v14M56 10v14M72 10v14M88 10v14\"/></g><g fill=\"#e2e8f0\"><rect x=\"32\" y=\"48\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"48\" y=\"48\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"64\" y=\"48\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"80\" y=\"48\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"32\" y=\"62\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"48\" y=\"62\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"32\" y=\"76\" width=\"10\" height=\"8\" rx=\"2\"/><rect x=\"48\" y=\"76\" width=\"10\" height=\"8\" rx=\"2\"/></g><circle cx=\"82\" cy=\"72\" r=\"15\" fill=\"#f05200\" stroke=\"#fff\" stroke-width=\"3\"/><path d=\"M75 72l5 5 9-10\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
  agent: "<svg viewBox=\"0 0 120 100\" aria-hidden=\"true\"><path d=\"M18 100c0-22 18-32 42-32s42 10 42 32z\" fill=\"#031a5b\"/><path d=\"M48 68l12 12 12-12\" fill=\"#fff\"/><circle cx=\"60\" cy=\"38\" r=\"20\" fill=\"#f1c7a8\"/><path d=\"M38 38c0-16 10-24 22-24s22 8 22 24c-5-9-12-13-22-13s-17 4-22 13z\" fill=\"#2b1d17\"/><path d=\"M40 40c0-18 8-27 20-27s20 9 20 27\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linecap=\"round\"/><rect x=\"34\" y=\"38\" width=\"7\" height=\"14\" rx=\"3.5\" fill=\"#1e293b\"/><rect x=\"79\" y=\"38\" width=\"7\" height=\"14\" rx=\"3.5\" fill=\"#1e293b\"/><path d=\"M82 50q-2 12-16 12\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"53\" cy=\"39\" r=\"2\" fill=\"#2b1d17\"/><circle cx=\"67\" cy=\"39\" r=\"2\" fill=\"#2b1d17\"/><path d=\"M53 48q7 6 14 0\" fill=\"none\" stroke=\"#b4563a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M90 84l5 2.5v5l-5 2.5-5-2.5v-5z\" fill=\"#f05200\"/></svg>",
}

const WHY = [
  { Icon: Video, t: "CCTV monitoring", d: "24×7 surveillance at our facility", art: "cam" },
  { Icon: Bug, t: "Pest control", d: "Regular and professional treatment", art: "pest" },
  { Icon: Droplet, t: "Clean, dry space", d: "Moisture-free and well-maintained spaces", art: "dry" },
  { Icon: Lock, t: "Secure access", d: "Controlled and authorised entry only", art: "keypad" },
  { Icon: Package, t: "Wrapped & palletised", d: "Shrink-wrapped and racked off the floor", art: "boxes" },
  { Icon: Truck, t: "Doorstep pickup", d: "We pick up and deliver back to you", art: "truck" },
  { Icon: CalendarDays, t: "Flexible plans", d: "No lease, billed monthly on the space you use", art: "cal" },
  { Icon: User, t: "Dedicated support", d: "A single point of contact for a smooth experience", art: "agent" },
]

/** "Why SafeStorage" grid, copied from the Indian site's /storage-quote (illustrated feature cards). */
export function RentProtection() {
  return (
    <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0, paddingBottom: 26 }} id="rent-protection">
      <div className={r.whyHead}>
        <div className={r.eyeWrap}>
          <i className={r.eyeLn} />
          <span className={r.eyePill}>
            <Package aria-hidden="true" />
            WHY SAFESTORAGE
          </span>
          <i className={`${r.eyeLn} ${r.eyeLnR}`} />
        </div>
        <h2>Built to keep your things safe</h2>
        <p>The same high standards whether it’s a few boxes or a full house.</p>
      </div>
      <ul className={r.whyGrid}>
        {WHY.map(({ Icon, t, d, art }) => (
          <li className={r.whyCard} key={t}>
            <div className={r.whyText}>
              <span className={r.whyIcon}>
                <Icon aria-hidden="true" />
              </span>
              <b>{t}</b>
              <small>{d}</small>
            </div>
            <div className={r.whyArt} aria-hidden="true" dangerouslySetInnerHTML={{ __html: WHY_ART[art] }} />
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

const HERO_CHIPS = [
  { Icon: CalendarDays, t: "No lease" },
  { Icon: Snowflake, t: "Indoor storage" },
  { Icon: ShieldCheck, t: "CCTV secured" },
  { Icon: Truck, t: "Doorstep pickup" },
]

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  )
}

/**
 * The rent page's hero — the same layout as the /storage-quote hero (kicker, headline with an accent,
 * lede, one button, chips, testimonial, rating) so the two pages read as one family, with the quote
 * form on the right where the hero photo used to be. The testimonial and rating are the ones already
 * published on /storage-quote. `q.root` carries the colour tokens those styles rely on.
 */
export function RentHero() {
  return (
    <div className={q.root}>
      <section className={q.hero}>
        <div className={`${q.wide} ${q.heroRow}`}>
          <div className={q.left}>
            <div className={q.kicker}>Storage space for rent</div>
            <h1>
              Storage Space For Rent <em>in Dubai</em>
            </h1>
            <p className={q.lede}>
              Rent the space your goods occupy, by the square foot, rather than a fixed unit. No lease and no minimum
              term, with doorstep pickup across the UAE.
            </p>

            <div className={r.heroPrice}>
              <span className={r.heroPriceKicker}>Starts from</span>
              <span className={r.heroPriceFig}>
                <b>AED 12</b>
                <small>per sq ft, per month</small>
              </span>
              <span className={r.heroPriceNote}>Pay only for the space your goods occupy</span>
            </div>

            <a className={q.heroCta} href={`#${RENT_FORM_ID}`}>
              Get a free quote <span aria-hidden="true">→</span>
            </a>

            <div className={q.chipRow}>
              {HERO_CHIPS.map(({ Icon, t }) => (
                <div className={q.chip} key={t}>
                  <Icon aria-hidden="true" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <figure className={q.quote}>
              <div className={q.stars} aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>
                Stored my entire villa furniture for 6 months during renovation. Everything came back in perfect
                condition thanks to their careful handling and clean units.
              </blockquote>
              <figcaption>
                <span className={q.av}>AH</span>
                <span>
                  <b>Ahmed Hassan</b>
                  <small>Villa owner, Dubai Marina</small>
                </span>
              </figcaption>
            </figure>

            <div className={q.proof}>
              <div className={q.score}>
                <strong>4.9</strong>
                <span className={q.stars} aria-hidden="true">★</span>
                <small>
                  Google rating{" "}
                  <br />
                  globally
                </small>
              </div>
              <span className={q.vr} aria-hidden="true" />
              <div className={q.count}>
                <GoogleG />
                <span>
                  <strong>10,000+</strong>
                  <small>Google reviews</small>
                </span>
              </div>
            </div>
          </div>

          <StorageQuoteForm anchorId={RENT_FORM_ID} />
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------ intro: short version */

const INTRO_FACTS = [
  { Icon: FileX2, t: "No lease, no Ejari", d: "And no minimum term either." },
  { Icon: Ruler, t: "Measured floor space", d: "You pay for what your goods actually occupy." },
  { Icon: ArrowUpDown, t: "Moves with you", d: "The monthly figure follows what you store, up or down." },
]

/** "The short version": the page's opening paragraphs (first one carries the silo up-link) beside three key facts. */
export function RentIntro({ title, paras }: { title: string; paras: string[] }) {
  const words = title.split(" ")
  const accent = words.length > 1 ? words.pop() : ""
  return (
    <section className={`${s.section} ${s.wrap}`} id="intro" style={{ paddingTop: 26, paddingBottom: 26 }}>
      <div className={r.introGrid}>
        <div className={r.introCopy}>
          <span className={s.howEyebrow}>In brief</span>
          <h2>
            {words.join(" ")} <em>{accent}</em>
          </h2>
          <p className={r.introLead}>{renderRich(paras[0] ?? "")}</p>
          {paras.slice(1).map((p, i) => (
            <p className={r.introText} key={i}>
              {renderRich(p)}
            </p>
          ))}
        </div>
        <ul className={r.facts}>
          {INTRO_FACTS.map(({ Icon, t: ft, d }) => (
            <li className={r.fact} key={ft}>
              <span className={r.factIcon}>
                <Icon aria-hidden="true" />
              </span>
              <span>
                <b>{ft}</b>
                <small>{d}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------- overview: by the foot vs unit */

/** "By the foot, not by the unit": the two paragraphs as a side-by-side comparison. */
export function RentCompare({ paras }: { paras: string[] }) {
  return (
    <section className={`${s.section} ${s.wrap}`} id="rent-compare" style={{ paddingTop: 0, paddingBottom: 26 }}>
      <div className={s.howHead}>
        <div>
          <span className={s.howEyebrow}>Overview</span>
          <h2>
            By the foot, not <em>by the unit.</em>
          </h2>
        </div>
        <p>Same space, two ways of paying for it.</p>
      </div>
      <div className={r.cmp}>
        <article className={`${r.cmpCard} ${r.cmpOld}`}>
          <span className={r.cmpBadge}>Fixed-size units</span>
          <div className={r.sizes} aria-hidden="true">
            <span>25 sq ft</span>
            <span>50 sq ft</span>
            <span className={r.sizePicked}>100 sq ft</span>
          </div>
          <p className={r.cmpResult}>
            You pay for the <b>whole 100</b>, filled or not.
          </p>
          <p className={r.cmpText}>{renderRich(paras[0] ?? "")}</p>
        </article>
        <article className={`${r.cmpCard} ${r.cmpNew}`}>
          <span className={`${r.cmpBadge} ${r.cmpBadgeNew}`}>SafeStorage · by the foot</span>
          <div className={r.bars} aria-hidden="true">
            <div className={r.barRow}>
              <span>2BHK</span>
              <div className={r.bar}>
                <i style={{ width: "100%" }} />
              </div>
              <em>138 sq ft</em>
            </div>
            <div className={r.barRow}>
              <span>Half back</span>
              <div className={r.bar}>
                <i style={{ width: "50%" }} />
              </div>
              <em>~69 sq ft</em>
            </div>
          </div>
          <p className={r.cmpResult}>
            You pay for <b>exactly what you use</b>.
          </p>
          <p className={r.cmpText}>{renderRich(paras[1] ?? "")}</p>
        </article>
      </div>
    </section>
  )
}
