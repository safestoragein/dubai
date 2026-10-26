import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, CalendarClock, Truck, ShieldCheck, Sparkles } from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import z from "@/components/silo/size-cards.module.css"
import fx from "@/components/landing/home-fx.module.css"
import pl from "@/components/guides/places.module.css"

/**
 * /guides/best-places-to-live-dubai — redesigned on the shared landing system
 * (owner, 2026-10-16) with their own banner.
 *
 * Every place, highlight, stat and answer is the copy that was already here;
 * only the layout changed. The "dedicated units" wording is dropped, since
 * storage here is shared space.
 */

export const metadata: Metadata = {
  title: "Top 6 Places to Visit in Dubai 2026",
  description:
    "Discover top Dubai attractions in 2026, from Burj Khalifa to Museum of the Future! Explore the best places to visit & tips if planning to move or relocate.",
  keywords:
    "dubai 2026, places to visit dubai, dubai attractions 2026, things to do dubai, dubai travel guide 2026, burj khalifa, dubai mall, museum of the future, dubai marina, palm jumeirah",
  openGraph: {
    url: "https://safestorage.ae/guides/best-places-to-live-dubai",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-cover-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Top Places to Visit in Dubai 2026",
      },
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/guides/best-places-to-live-dubai",
  },
}

const places = [
  {
    id: 1,
    name: "Burj Khalifa & Dubai Mall",
    location: "Downtown Dubai",
    rating: 4.9,
    description: "The world's tallest building standing at 828 meters, Burj Khalifa is Dubai's most iconic landmark. Visit the observation deck on the 124th floor for breathtaking 360° views of the city, desert, and ocean. Right next door, The Dubai Mall offers world-class shopping with over 1,200 stores, the mesmerizing Dubai Fountain, and the Dubai Aquarium.",
    highlights: [
      "At The Top observation deck (124th & 148th floors)",
      "Dubai Fountain show every 30 minutes",
      "Dubai Aquarium & Underwater Zoo",
      "VR Park and Dubai Ice Rink"
    ],
    bestTime: "Sunset (6-7 PM) for stunning views",
    storageConnection: "Moving to Downtown Dubai? Store your extra furniture and belongings with us while you settle into your new high-rise apartment. We offer door-to-door pickup from all Downtown areas.",
    image: "/landing/place-burj.webp"
  },
  {
    id: 2,
    name: "Museum of the Future",
    location: "Sheikh Zayed Road",
    rating: 4.8,
    description: "Dubbed 'the most beautiful building on Earth' by National Geographic, this architectural marvel showcases innovations and technologies shaping our tomorrow. The torus-shaped structure features immersive exhibitions about space travel, climate change solutions, and AI advancements.",
    highlights: [
      "7 floors of futuristic exhibitions",
      "Interactive AI and robotics displays",
      "Space station simulation experience",
      "Stunning Arabic calligraphy facade"
    ],
    bestTime: "Weekday mornings (10 AM) to avoid crowds",
    storageConnection: "Planning an extended stay to explore Dubai's innovation scene? We provide secure storage for your belongings, documents, and equipment while you're in the city.",
    // The Unsplash photo this used to point at is a chair, not the museum, so
    // the picture is cropped from the owner's own banner for this page.
    image: "/landing/place-museum.webp"
  },
  {
    id: 3,
    name: "Palm Jumeirah & Atlantis",
    location: "Palm Jumeirah",
    rating: 4.9,
    description: "The iconic palm-shaped artificial island is home to luxury hotels, pristine beaches, and Atlantis The Palm. Experience Aquaventure Waterpark with 105 slides, The Lost Chambers Aquarium, and world-class dining. The Palm Monorail offers spectacular views of this engineering wonder.",
    highlights: [
      "Aquaventure Waterpark - largest in Middle East",
      "Dolphin Bay & Sea Lion Point",
      "The Lost Chambers Aquarium",
      "Private beach access at luxury resorts"
    ],
    bestTime: "Early morning (9 AM) for waterpark",
    storageConnection: "Seasonal resident at Palm Jumeirah? Our clean, secure storage keeps your summer wardrobe, water sports gear, and luxury items safe year-round.",
    // that Unsplash photo is Sheikh Zayed Road, not the Palm — cropped from
    // the owner's banner instead
    image: "/landing/place-palm.webp"
  },
  {
    id: 4,
    name: "Dubai Marina & JBR Beach",
    location: "Dubai Marina",
    rating: 4.7,
    description: "Dubai Marina is a stunning waterfront development with a 3km promenade lined with cafes, restaurants, and luxury yachts. Adjacent JBR Beach (Jumeirah Beach Residence) offers golden sands, water sports, and The Beach shopping complex. Perfect for sunset strolls and Instagram-worthy shots.",
    highlights: [
      "Marina Walk promenade with 200+ dining options",
      "JBR Beach with water sports activities",
      "Dhow cruise dinner experiences",
      "Skydiving Dubai for thrill-seekers"
    ],
    bestTime: "Evening (5-9 PM) for vibrant atmosphere",
    storageConnection: "Living in Marina towers? Maximize your apartment space by storing seasonal items, sports equipment, and extra luggage with SafeStorage. We serve all Marina residents.",
    image: "/landing/place-marina.webp"
  },
  {
    id: 5,
    name: "Dubai Miracle Garden",
    location: "Dubailand",
    rating: 4.6,
    description: "The world's largest natural flower garden featuring over 150 million flowers arranged in stunning designs. Open from November to May, it showcases floral installations including life-size aircraft, castles, and the iconic Emirates A380. A must-visit for nature lovers and families.",
    highlights: [
      "45+ million sq ft of floral displays",
      "Full-size Emirates A380 covered in flowers",
      "Butterfly Garden with 15,000+ butterflies",
      "New themed installations each season"
    ],
    bestTime: "November-March (cooler months, full bloom)",
    storageConnection: "Event planners and photographers love Dubai's seasonal attractions. Store your equipment, props, and seasonal decor with us during off-seasons.",
    image: "/landing/place-garden.webp"
  },
  {
    id: 6,
    name: "Global Village",
    location: "Dubai-Al Ain Road",
    rating: 4.7,
    description: "The ultimate cultural and entertainment destination, Global Village brings together pavilions from 90+ countries. Shop for handicrafts, savor international cuisines, enjoy thrilling rides, and watch spectacular shows. Open from October to April, it's a celebration of world cultures under one sky.",
    highlights: [
      "Pavilions from 90+ countries",
      "26 thrilling rides and attractions",
      "Daily cultural performances and fireworks",
      "Street food from around the world"
    ],
    bestTime: "October-April season, weekday evenings",
    storageConnection: "Importing goods or running an e-commerce business? We offer warehouse storage solutions perfect for international sellers and traders operating in Dubai.",
    image: "/landing/place-global.webp"
  }
]


const stats = [
  { e: "🧳", value: "150M+", label: "Annual Visitors" },
  { e: "🏛️", value: "6", label: "UNESCO Sites Nearby" },
  { e: "☀️", value: "365", label: "Days of Sunshine" },
  { e: "🥇", value: "#1", label: "Tourist Destination ME" },
]

const moving = [
  { Icon: Truck, title: "Door-to-door Pickup", text: "We collect from anywhere in Dubai" },
  { Icon: Sparkles, title: "Clean & Secure", text: "Indoor space, kept clean and dust-protected" },
  { Icon: ShieldCheck, title: "24/7 Security", text: "Your belongings are always safe" },
]

const faqs = [
  {
    q: "What's the best time to visit Dubai in 2026?",
    a: "November to March offers the best weather with temperatures between 20-30°C. This is peak tourist season with numerous festivals and events.",
  },
  {
    q: "Do I need storage if I'm relocating to Dubai?",
    a: "Yes! Many expats use storage during their transition period. It's perfect for storing items while you find permanent housing or declutter your new apartment.",
  },
  {
    q: "How many days do I need to explore Dubai?",
    a: "We recommend at least 5-7 days to cover the top attractions comfortably. A longer stay of 10-14 days allows you to explore hidden gems too.",
  },
]

const topPlacesSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://safestorage.ae/guides/best-places-to-live-dubai#article',
    headline: 'Top Places to Visit in Dubai 2026',
    description: 'Best places to visit in Dubai in 2026 — attractions, restaurants, beaches, and hidden gems.',
    url: 'https://safestorage.ae/guides/best-places-to-live-dubai',
    image: 'https://safestorage.ae/og-cover-2026.jpg',
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'SafeStorage Dubai', url: 'https://safestorage.ae' },
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safestorage.ae/guides/best-places-to-live-dubai' },
    inLanguage: 'en-AE',
    about: { '@type': 'City', name: 'Dubai' },
  },  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]


/** the owner asked for less text per place: the first two sentences only */
const shorten = (text: string, sentences = 2) => {
  const parts = text.match(/[^.!?]+[.!?]+/g)
  return parts && parts.length > sentences ? parts.slice(0, sentences).join("").trim() : text
}

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function TopPlacesDubai2026() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Best Places to Live in Dubai" },
        ]}
      />
      <SchemaScript schema={topPlacesSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Trending 2026 · Updated January 2026</span>
              <h1>
                Top 6 must-visit places in <br className={s.mBreakDesk} />
                <em>Dubai 2026</em>
              </h1>
              <p>
                Your ultimate guide to Dubai&apos;s most iconic attractions. Whether you&apos;re a tourist or
                planning to relocate, discover the best this city has to offer.
              </p>
              <div className={s.heroCta}>
                <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                  Get a free quote →
                </Link>
                <a className={`${s.btn} ${s.btnGhost} ${s.btnPhone}`} href={env.PHONE_LINK}>
                  <span className={s.phIco}>📞</span> Call +971505773388
                </a>
              </div>
            </div>
            <div className={p.split2Photo} style={{ aspectRatio: "1730 / 909" }}>
              <Image
                src="/landing/best-places-photo.webp"
                alt="Best places in Dubai — the Burj Khalifa, Palm Jumeirah, Museum of the Future, the Marina, Miracle Garden and Global Village"
                width={1400}
                height={736}
                sizes="(max-width: 900px) 94vw, 50vw"
                quality={85}
                loading="eager"
              />
              <div className={s.heroRating}>
                <strong>4.9★</strong>
                <span>6,700+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <LandingTrust />

        {/* the page's own numbers */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 8 }}>
          <HomeReveal className={`${z.steps} ${z.moves}`}>
            {stats.map((st, i) => (
              <div className={`${z.step} ${fx.floatBox}`} style={idx(i)} key={st.label}>
                <span className={z.stepEmoji} aria-hidden="true">
                  {st.e}
                </span>
                <h3>{st.value}</h3>
                <p>{st.label}</p>
              </div>
            ))}
          </HomeReveal>
        </section>

        {/* the six places */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Where to go</span>
              <h2 className={p.longH2}>
                Six places worth <em>the trip across town.</em>
              </h2>
            </div>
            <p>Local expert recommendations, with the best time to go and what not to miss.</p>
          </div>

          <HomeReveal className={pl.list}>
            {places.map((place, i) => (
              <article className={pl.place} style={idx(i)} key={place.id}>
                <div className={pl.shot}>
                  <Image src={place.image} alt={place.name} width={1730} height={909} sizes="(max-width: 900px) 94vw, 600px" quality={85} />
                  <span className={pl.rating}>
                    <span aria-hidden="true">★</span> {place.rating}
                  </span>
                </div>
                <div className={pl.body}>
                  <span className={pl.where}>
                    <MapPin size={13} aria-hidden="true" /> {place.location}
                  </span>
                  <h3>{place.name}</h3>
                  <p>{shorten(place.description)}</p>
                  <div className={pl.when}>
                    <CalendarClock size={16} aria-hidden="true" /> Best time: {place.bestTime}
                  </div>
                </div>
              </article>
            ))}
          </HomeReveal>
        </section>

        {/* moving to Dubai */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>Moving here?</span>
              <h2>
                Planning to move <br className={s.mBreak} />
                <em>or relocate to Dubai?</em>
              </h2>
              <p>
                Make your transition smooth with SafeStorage Dubai&apos;s hassle-free storage solutions.
                Whether you&apos;re a tourist, expat, or new resident, we&apos;re here to help.
              </p>
            </div>
            <FeatScroller>
              {moving.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
            {/* two buttons here, so the row has to wrap on a phone */}
            <div className={s.bandCta} style={{ flexWrap: "wrap", gap: 14 }}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                Get your free quote today →
              </Link>
              <Link className={`${s.btn} ${s.btnGhost}`} href="/self-storage-dubai">
                Learn more about our services
              </Link>
            </div>
          </div>
        </section>

        {/* the questions */}
        <section className={`${s.section} ${s.wrap}`} id="faq">
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>FAQ</span>
              <h2 className={p.longH2}>
                Frequently asked <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Ready to explore Dubai?"
          blurb="Start your Dubai adventure with confidence. Need storage while you explore, or while you settle in? Tell us what you are storing and we will send a free, itemised quote."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/guides/best-places-to-live-dubai" />
    </>
  )
}
