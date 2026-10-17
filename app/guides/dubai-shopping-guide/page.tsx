import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Store, Sparkles, Tag, Gift, Calendar, Clock, DollarSign, Shirt,
  ShoppingBag, Package,
} from "lucide-react"

import SchemaScript from "@/components/schema-script"
import SiloBreadcrumb from "@/components/silo-breadcrumb"
import { SiloLinks } from "@/components/silo/silo-links"

import { manrope, sora } from "@/components/landing/fonts"
import { CtaBand } from "@/components/landing/page-hero"
import { LandingTrust } from "@/components/landing/landing-top"
import { FeatScroller } from "@/components/landing/feat-scroller"
import FaqAccordion from "@/components/landing/faq-accordion"
import HomeReveal from "@/components/landing/home-reveal"
import { UspRail } from "@/components/landing/usp-rail"
import { env } from "@/lib/env"
import s from "@/components/landing/landing.module.css"
import p from "@/components/locations/location-landing.module.css"
import z from "@/components/silo/size-cards.module.css"
import fx from "@/components/landing/home-fx.module.css"
import g from "@/components/guides/shop.module.css"

/**
 * /guides/dubai-shopping-guide — redesigned on the shared landing system
 * (owner, 2026-10-17) with their own picture.
 *
 * Every place, tip, stat and answer is the copy that was already here; only
 * the layout changed. Any price shown is third-party (parking, entry fees),
 * never SafeStorage's own.
 */

export const metadata: Metadata = {
  title: "Dubai Shopping Guide 2026: Malls & Souks",
  description:
    "The 2026 Dubai shopping guide: best malls, souks and outlet villages, when the sales run, and how to get bulky purchases home and stored.",
  keywords:
    "dubai shopping 2026, best malls dubai, dubai mall, mall of emirates, gold souk dubai, spice souk, dubai shopping festival, outlet mall dubai, where to shop dubai, dubai markets",
  openGraph: {
    url: "https://safestorage.ae/guides/dubai-shopping-guide",
    siteName: "SafeStorage Dubai",
    images: [
      {
        url: "/og-cover-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Dubai Shopping Guide 2026",
      },
    ],
    locale: "en_AE",
    type: "article",
  },
  alternates: {
    canonical: "https://safestorage.ae/guides/dubai-shopping-guide",
  },
}

const shoppingDestinations = [
  {
    id: 1,
    category: "Luxury Malls",
    icon: Store,
    title: "World's Best Shopping Malls",
    description: "Dubai is home to some of the world's largest and most luxurious shopping malls. Air-conditioned comfort, endless brands, entertainment, and dining all under one roof!",
    destinations: [
      {
        name: "The Dubai Mall",
        location: "Downtown Dubai",
        highlights: "1,200+ stores, Dubai Aquarium, Ice Rink, VR Park",
        brands: "Gucci, Louis Vuitton, Chanel, Apple, Zara, H&M",
        priceRange: "Budget to Ultra-Luxury",
        bestFor: "Everything! Fashion, electronics, souvenirs, entertainment",
        timing: "10 AM - 12 AM daily (Fri-Sat till 1 AM)",
        parking: "AED 20-30 (4+ hours)",
        tip: "Visit Dubai Fountain show (every 30 mins, FREE!)"
      },
      {
        name: "Mall of the Emirates",
        location: "Al Barsha",
        highlights: "630+ stores, Ski Dubai, VOX Cinemas, Magic Planet",
        brands: "Harvey Nichols, Carrefour, Debenhams, all major brands",
        priceRange: "Mid to High-End",
        bestFor: "Family shopping, Ski Dubai experience, dining",
        timing: "10 AM - 12 AM daily",
        parking: "AED 20 (4+ hours)",
        tip: "Ski Dubai costs AED 200-250, book online for discount"
      },
      {
        name: "Dubai Marina Mall",
        location: "Dubai Marina",
        highlights: "400+ stores, Waterfront views, Casual dining",
        brands: "Waitrose, Carrefour, Splash, Brands for Less",
        priceRange: "Budget to Mid-Range",
        bestFor: "Everyday shopping, Marina residents, casual brands",
        timing: "10 AM - 10 PM daily",
        parking: "AED 10-20",
        tip: "Walk along Marina Walk after shopping - beautiful at sunset!"
      },
      {
        name: "City Walk",
        location: "Al Safa",
        highlights: "Outdoor shopping, Street art, Trendy cafes",
        brands: "Nike, Adidas, Apple, Victoria's Secret, local designers",
        priceRange: "Mid to High-End",
        bestFor: "Outdoor shopping experience, Instagram photos, cafes",
        timing: "10 AM - 12 AM",
        parking: "First 4 hours free",
        tip: "Best in winter months (Nov-March), too hot in summer"
      }
    ],
    storageConnection: "Shopped too much at the malls? We've all been there! Store seasonal wardrobes, extra bags, and shopping hauls. Only keep what you need right now - we'll keep the rest safe!"
  },
  {
    id: 2,
    category: "Traditional Souks",
    icon: Sparkles,
    title: "Authentic Arabian Shopping",
    description: "Experience old Dubai! Traditional markets (souks) offer gold, spices, textiles, and unique finds. Don't forget to bargain - it's expected!",
    destinations: [
      {
        name: "Gold Souk",
        location: "Deira",
        highlights: "10 tonnes of gold on display! 300+ shops",
        brands: "Local gold traders, 18k-22k gold jewelry",
        priceRange: "Gold priced by weight + making charges",
        bestFor: "Gold jewelry, wedding shopping, investment",
        timing: "10 AM - 10 PM (Friday 4 PM onwards)",
        parking: "Limited, use taxi/metro",
        tip: "Bargain 10-20% off! Gold price fixed, but making charges negotiable"
      },
      {
        name: "Spice Souk",
        location: "Deira (near Gold Souk)",
        highlights: "Aromatic spices, herbs, dried fruits, nuts",
        brands: "Local traders",
        priceRange: "Very Affordable (AED 10-100)",
        bestFor: "Spices, saffron, dried fruits, souvenirs",
        timing: "9 AM - 1 PM, 4 PM - 9 PM",
        parking: "Limited",
        tip: "Buy saffron here - much cheaper than supermarkets!"
      },
      {
        name: "Textile Souk (Souk Al Kabeer)",
        location: "Bur Dubai",
        highlights: "Fabrics, traditional clothing, textiles",
        brands: "Indian, Pakistani, Arabic fabrics",
        priceRange: "Very Cheap (AED 5-50 per meter)",
        bestFor: "Fabrics, tailoring, traditional clothes, souvenirs",
        timing: "9 AM - 1 PM, 4 PM - 9 PM (closed Friday morning)",
        parking: "Use public parking",
        tip: "Bargain hard! Start at 50% of asking price"
      },
      {
        name: "Perfume Souk",
        location: "Deira",
        highlights: "Arabian perfumes (Oud), oils, incense",
        brands: "Local perfumers, traditional scents",
        priceRange: "AED 50-500+",
        bestFor: "Authentic Arabian perfumes, oud, gifts",
        timing: "10 AM - 10 PM",
        parking: "Limited",
        tip: "Sample everything! Custom blends available"
      }
    ],
    storageConnection: "Bought bulk fabrics, carpets, or home décor from the souks? Store your souk treasures safely in a clean, secure environment. Keep textiles and delicate items wrapped and dust-protected! (Note: we do not store gold, jewellery, or ornaments.)"
  },
  {
    id: 3,
    category: "Outlet Malls & Bargains",
    icon: Tag,
    title: "Budget Shopping Paradise",
    description: "Save 50-80% on branded items! Outlet malls and bargain stores offer amazing deals on last season's collections and overstocked items.",
    destinations: [
      {
        name: "The Outlet Village",
        location: "Jebel Ali (near Dubai Parks)",
        highlights: "125+ brands, 30-90% discounts, European village style",
        brands: "Puma, Adidas, Coach, Michael Kors, Tommy Hilfiger",
        priceRange: "Cheap! (50-90% off retail)",
        bestFor: "Branded clothing, shoes, bags at fraction of price",
        timing: "10 AM - 10 PM",
        parking: "Free parking",
        tip: "Worth the drive! Genuine brands, massive savings"
      },
      {
        name: "Dragon Mart",
        location: "International City",
        highlights: "Massive Chinese wholesale market, 3,950+ stores",
        brands: "Chinese brands, wholesale items",
        priceRange: "Super Cheap (AED 5-100 for most items)",
        bestFor: "Home decor, electronics, toys, bulk buying, furniture",
        timing: "10 AM - 10 PM",
        parking: "Free",
        tip: "Bring cash, bargain hard! Buy in bulk for better prices"
      },
      {
        name: "Brands for Less",
        location: "Multiple locations across Dubai",
        highlights: "Branded clothes, shoes, accessories at discounts",
        brands: "Calvin Klein, Tommy, Levi's, Nike (overstocked)",
        priceRange: "Budget (30-70% off retail)",
        bestFor: "Branded fashion on budget",
        timing: "10 AM - 10 PM",
        parking: "Available at each location",
        tip: "Stock changes frequently - visit often!"
      },
      {
        name: "Karama Market",
        location: "Karama",
        highlights: "Bargain shopping, imitation goods",
        brands: "Local traders, copies (buyer beware!)",
        priceRange: "Very Cheap (AED 10-200)",
        bestFor: "Budget clothes, souvenirs, home items",
        timing: "10 AM - 10 PM",
        parking: "Street parking",
        tip: "Bargain aggressively! Cash only, watch for quality"
      }
    ],
    storageConnection: "Bargain shopping means bulk buying! Bought 10 shirts because they were AED 20 each? Store off-season clothes and rotate your wardrobe. Save closet space, access anytime!"
  },
  {
    id: 4,
    category: "Markets & Unique Finds",
    icon: Gift,
    title: "Weekend Markets & Local Gems",
    description: "Discover local artisans, organic produce, vintage finds, and unique items at Dubai's vibrant weekend markets!",
    destinations: [
      {
        name: "Ripe Market",
        location: "Various locations (Times Square, Bedouin, etc.)",
        highlights: "Organic food, artisan products, live music",
        brands: "Local farmers, small businesses, artisans",
        priceRange: "Mid-range (quality organic products)",
        bestFor: "Fresh produce, healthy food, artisan gifts, weekend vibes",
        timing: "Friday-Saturday mornings",
        parking: "Free at locations",
        tip: "Go early for best produce, bring reusable bags!"
      },
      {
        name: "The Flea Market at Al Seef",
        location: "Al Seef, Dubai Creek",
        highlights: "Vintage items, antiques, handicrafts",
        brands: "Independent sellers",
        priceRange: "Variable (bargain required)",
        bestFor: "Unique finds, vintage, collectibles",
        timing: "Seasonal - check schedule",
        parking: "Available nearby",
        tip: "Perfect for quirky souvenirs and one-of-a-kind items"
      },
      {
        name: "Global Village",
        location: "Dubai-Al Ain Road",
        highlights: "26 countries, cultural pavilions, shows, food",
        brands: "International products from 90+ countries",
        priceRange: "Budget to Mid-range",
        bestFor: "International shopping, entertainment, family outing",
        timing: "Oct-April season, 4 PM - 12 AM",
        parking: "AED 10-20",
        tip: "Entry AED 15-25, weekdays less crowded than weekends"
      },
      {
        name: "Friday Markets (Various)",
        location: "Al Fahidi, Mercato Mall parking, etc.",
        highlights: "Arts, crafts, food, local products",
        brands: "Local artisans and creators",
        priceRange: "Affordable",
        bestFor: "Handmade items, supporting local businesses",
        timing: "Friday mornings/afternoons",
        parking: "Free usually",
        tip: "Cash preferred, great for unique gifts"
      }
    ],
    storageConnection: "Found unique furniture, art pieces, or bulk organic goods at markets? Store seasonal decorations, extra cookware, and market finds until you need them. Your home stays clutter-free!"
  },
  {
    id: 5,
    category: "Shopping Festivals",
    icon: Calendar,
    title: "Best Times to Shop & Save",
    description: "Dubai hosts massive shopping festivals with 25-75% discounts, prizes, and entertainment. Time your shopping right and save thousands!",
    destinations: [
      {
        name: "Dubai Shopping Festival (DSF)",
        location: "All Malls Citywide",
        highlights: "25-75% discounts, daily prizes, raffle draws, fireworks",
        brands: "All brands participate",
        priceRange: "Massive discounts on everything",
        bestFor: "Big purchases, electronics, fashion, gold",
        timing: "January - February (4-6 weeks)",
        parking: "Normal mall parking",
        tip: "Best deals in first and last week! Save receipts for prize draws"
      },
      {
        name: "Dubai Summer Surprises",
        location: "All Malls",
        highlights: "Up to 70% off, kids entertainment, family deals",
        brands: "All participating",
        priceRange: "Heavy discounts",
        bestFor: "Family shopping, children's items, entertainment",
        timing: "July - August",
        parking: "Normal",
        tip: "Mall promotions change weekly - check mall websites"
      },
      {
        name: "Eid Sales",
        location: "Everywhere",
        highlights: "Post-Eid sales, 30-60% off",
        brands: "All brands",
        priceRange: "Good discounts",
        bestFor: "Clothes, home items, gifts",
        timing: "After Eid Al Fitr & Eid Al Adha",
        parking: "Very crowded!",
        tip: "Go early or late evening to avoid crowds"
      },
      {
        name: "Black Friday / White Friday",
        location: "Online & Malls",
        highlights: "40-80% off, online deals, flash sales",
        brands: "All major brands & online stores",
        priceRange: "Best electronics deals of the year",
        bestFor: "Electronics, appliances, fashion",
        timing: "Last Friday of November",
        parking: "Shop online to avoid crowds!",
        tip: "Compare prices first - not all 'deals' are real deals"
      }
    ],
    storageConnection: "Shopping festivals = buying in bulk! Bought winter clothes in summer sales? Store them! Got next year's Eid gifts early? Store them! Smart shoppers buy during sales and store until needed."
  }
]

const shoppingTips = [
  {
    icon: DollarSign,
    title: "Always Bargain in Souks",
    tip: "Start at 50% of asking price in traditional markets. Never accept first price!"
  },
  {
    icon: Calendar,
    title: "Shop During Sales",
    tip: "DSF (Jan-Feb) and Summer Surprises (Jul-Aug) offer 50-70% discounts"
  },
  {
    icon: Clock,
    title: "Best Shopping Times",
    tip: "Weekday mornings = empty malls. Friday afternoons & weekends = PACKED!"
  },
  {
    icon: Tag,
    title: "VAT Refunds for Tourists",
    tip: "Get 5% VAT back when leaving UAE. Keep receipts, visit Planet refund desk"
  },
  {
    icon: Shirt,
    title: "End of Season Sales",
    tip: "Winter clothes cheap in March, Summer clothes cheap in September"
  },
  {
    icon: Store,
    title: "Outlet Malls Save 70%+",
    tip: "The Outlet Village offers genuine brands at fraction of retail price"
  }
]

/* the page's own numbers */
const stats = [
  { e: "🏬", value: "70+", label: "Shopping Malls" },
  { e: "🪙", value: "10 Tonnes", label: "Gold on Display" },
  { e: "🏷️", value: "75%", label: "Max Discounts DSF" },
  { e: "🥇", value: "#1", label: "Shopping Destination" },
]

const shopperStorage = [
  { Icon: ShoppingBag, title: "Seasonal Wardrobes", text: "Store winter clothes in summer, summer clothes in winter" },
  { Icon: Package, title: "Bulk Purchases", text: "Bought in bulk during sales? Store until needed" },
  { Icon: Gift, title: "Gifts & Souvenirs", text: "Store gifts bought early for special occasions" },
]

const faqs = [
  {
    q: "When is the best time to shop in Dubai?",
    a: "Dubai Shopping Festival (January-February) and Dubai Summer Surprises (July-August) offer 50-75% discounts. Also Black Friday (November) and post-Eid sales are great!",
  },
  {
    q: "Is gold really cheaper in Dubai?",
    a: "Gold price is international (same everywhere), but Dubai has lower making charges and no taxes. Plus you can bargain! Save 10-20% compared to other countries.",
  },
  {
    q: "Can tourists get VAT refund?",
    a: "Yes! Tourists get 5% VAT refund when leaving UAE. Shop at stores with Tax Free signs, get your form stamped at the airport Planet desk before check-in, collect the refund after security.",
  },
  {
    q: "Should I bargain in Dubai?",
    a: "YES in souks and small shops (start at 50% of asking price). NO in malls and brand stores (fixed prices). Gold shops - bargain making charges, not gold price.",
  },
]

const shoppingGuideSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://safestorage.ae/guides/dubai-shopping-guide#article',
    headline: 'Dubai Shopping Guide 2026',
    description: 'Complete guide to shopping in Dubai 2026 — malls, souks, luxury brands, and must-buy items.',
    url: 'https://safestorage.ae/guides/dubai-shopping-guide',
    image: 'https://safestorage.ae/og-cover-2026.jpg',
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    author: { '@type': 'Organization', name: 'SafeStorage Dubai', url: 'https://safestorage.ae' },
    publisher: { '@id': 'https://safestorage.ae/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://safestorage.ae/guides/dubai-shopping-guide' },
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

/* the first couple of things a place is known for */
const headline = (text: string) => text.split(", ").slice(0, 2).join(", ")

/* the storage note, trimmed to the line that matters */
const STORE_NOTE: Record<number, string> = {
  1: "Store seasonal wardrobes, extra bags and shopping hauls — keep out only what you need right now.",
  2: "Store souk treasures safely, textiles wrapped and dust-protected. (We do not store gold, jewellery or ornaments.)",
  3: "Bargain shopping means bulk buying — store off-season clothes and rotate your wardrobe.",
  4: "Store seasonal decorations, extra cookware and market finds until you need them.",
  5: "Bought winter clothes in the summer sales, or next year's gifts early? Store them until needed.",
}

/* a colour per tip, in the order above */
const TIP_COLOUR = [
  { fg: "#16a34a", bg: "rgba(22, 163, 74, 0.12)" },
  { fg: "#ee5824", bg: "rgba(238, 88, 36, 0.12)" },
  { fg: "#1893d2", bg: "rgba(24, 147, 210, 0.12)" },
  { fg: "#7c3aed", bg: "rgba(124, 58, 237, 0.12)" },
  { fg: "#e11d48", bg: "rgba(225, 29, 72, 0.12)" },
  { fg: "#d97706", bg: "rgba(217, 119, 6, 0.12)" },
]

const idx = (i: number) => ({ ["--i" as string]: i }) as CSSProperties

export default function DubaiShoppingGuide2026() {
  return (
    <>
      <SiloBreadcrumb
        trail={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Dubai Shopping Guide" },
        ]}
      />
      <SchemaScript schema={shoppingGuideSchemas} />

      <div className={`${s.page} ${sora.variable} ${manrope.variable}`}>
        {/* hero — copy left, the owner's picture right */}
        <section className={`${s.hero} ${s.wrap} ${p.split2}`}>
          <div className={p.split2Inner}>
            <div className={`${s.heroContent} ${p.split2Copy}`}>
              <span className={s.heroTag}>Shopping paradise 2026 · Updated January 2026</span>
              <h1>
                Dubai <br className={s.mBreakDesk} />
                <em>shopping guide 2026</em>
              </h1>
              <p>
                Dubai&apos;s best malls, traditional souks, outlet stores, markets and shopping festivals —
                everything from luxury brands to bargain finds.
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
                src="/landing/shopping-guide-photo.webp"
                alt="Shopping in Dubai — the malls, the beach and the city skyline"
                width={1730}
                height={909}
                sizes="(max-width: 900px) 94vw, 50vw"
                priority
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

        {/* the five kinds of shopping */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <UspRail
            head={
              <div className={s.uspHead}>
                <span className={s.howEyebrow}>Where to shop</span>
                <h2 className={p.longH2}>
                  Malls, souks and <em>everything between.</em>
                </h2>
                <p className={g.railIntro}>
                  Five kinds of shopping, the places worth the trip, and where storage comes into it.
                </p>
              </div>
            }
          >
            {shoppingDestinations.map((cat, i) => (
              <article className={g.cat} style={idx(i)} key={cat.id}>
                <div className={g.catTop}>
                  <span className={g.catIcon} aria-hidden="true">
                    <cat.icon strokeWidth={1.8} />
                  </span>
                  <div>
                    <span className={g.eyebrow}>{cat.category}</span>
                    <h3>{cat.title}</h3>
                  </div>
                </div>
                <ul className={g.places}>
                  {cat.destinations.map((place) => (
                    <li key={place.name}>
                      <b>{place.name}</b>
                      <span>{place.location}</span> · {headline(place.highlights)}
                    </li>
                  ))}
                </ul>
                <p className={g.store}>
                  <b>Where storage helps</b> {STORE_NOTE[cat.id] ?? cat.storageConnection}
                </p>
              </article>
            ))}
          </UspRail>
        </section>

        {/* the tips */}
        <section className={`${s.section} ${s.wrap}`} style={{ paddingTop: 0 }}>
          <div className={s.howHead}>
            <div>
              <span className={s.howEyebrow}>Shop smart</span>
              <h2 className={p.longH2}>
                Six things regulars <em>do differently.</em>
              </h2>
            </div>
          </div>
          <div className={`${s.miniGrid} ${g.tips}`}>
            {shoppingTips.map((t, i) => (
              <div className={s.miniCard} key={t.title}>
                <span
                  className={s.miniIcon}
                  style={{ background: TIP_COLOUR[i % 6].bg, color: TIP_COLOUR[i % 6].fg }}
                  aria-hidden="true"
                >
                  <t.icon strokeWidth={1.8} />
                </span>
                <div>
                  <b>{t.title}</b>
                  <small>{t.tip}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* storing the haul */}
        <section className={`${s.darkBand} ${s.whyBand}`}>
          <div className={s.wrap}>
            <div className={s.bandHead}>
              <span className={s.howEyebrow}>After the sales</span>
              <h2>
                Shop more, <br className={s.mBreak} />
                <em>worry less.</em>
              </h2>
              <p>
                Dubai shopping is irresistible. Do not let a lack of space stop you from a good deal — store
                the haul and pay only for the space it uses.
              </p>
            </div>
            <FeatScroller>
              {shopperStorage.map((f) => (
                <article className={s.feat} key={f.title}>
                  <div className={s.featIcon}>
                    <f.Icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </FeatScroller>
            <div className={s.bandCta} style={{ flexWrap: "wrap", gap: 14 }}>
              <Link className={`${s.btn} ${s.btnAccent}`} href="/get-quote">
                Get a free quote →
              </Link>
              <Link className={`${s.btn} ${s.btnGhost}`} href="/self-storage-dubai">
                Learn about storage
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
                Dubai shopping <em>questions.</em>
              </h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </section>

        <CtaBand
          title="Shop till you drop — we will store the rest."
          blurb="Dubai shopping is addictive. Keep buying, we will keep storing: clean, secure and accessible whenever you want it back."
          ctaLabel="Get a Free Quote"
          whatsAppLabel="WhatsApp Us"
          callLabel="Call Now"
        />
      </div>

      <SiloLinks path="/guides/dubai-shopping-guide" />
    </>
  )
}
