import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SchemaScript from "@/components/schema-script"
import {
  ShieldAlert,
  Flame,
  Biohazard,
  Apple,
  Droplets,
  Gem,
  Scale,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  // The root layout appends "| SafeStorage Dubai" through its title template,
  // so this must not repeat it. (openGraph.title below is not templated.)
  title: "Prohibited Items — What You Cannot Store",
  description:
    "What SafeStorage Dubai cannot accept into storage: flammables, gas cylinders, food, liquids, cash and jewellery. Check before your pickup. Call +971505773388.",
  keywords:
    "prohibited items storage dubai, what can i store dubai, restricted items self storage, storage rules dubai, items not allowed storage uae",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SafeStorage Dubai" }],
    title: "Prohibited Items — What You Cannot Store | SafeStorage Dubai",
    description:
      "A plain checklist of what we cannot take into storage in Dubai, and why. Check before your pickup day.",
    url: "https://safestorage.ae/prohibited-items",
    siteName: "SafeStorage Dubai",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://safestorage.ae/prohibited-items" },
}

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://safestorage.ae/prohibited-items#webpage",
    name: "Prohibited Items — What You Cannot Store",
    description:
      "The items SafeStorage Dubai cannot accept into storage, grouped by reason, with a quick-reference list of common questions.",
    url: "https://safestorage.ae/prohibited-items",
    isPartOf: { "@id": "https://safestorage.ae/#website" },
    inLanguage: "en-AE",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safestorage.ae" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prohibited Items",
        item: "https://safestorage.ae/prohibited-items",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I store food in my storage unit in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. No food of any kind can be stored — this includes sealed and packaged food, rice, flour, spices, cooking oil, ghee tins and pet food. Food attracts insects and rodents, and in Dubai's heat sealed items still spoil and leak. A single bag of rice can affect every customer's goods in the warehouse.",
        },
      },
      {
        "@type": "Question",
        name: "Can I store gas cylinders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not as a rule. Pressurised cylinders, including BBQ and camping gas, cannot go into storage. If your cylinder is completely empty, speak to our team before pickup day and we will tell you whether we can take it.",
        },
      },
      {
        "@type": "Question",
        name: "Can I store jewellery, gold or cash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Cash, gold, jewellery, watches, gems and precious metals are not accepted. They are not covered by our insurance, so if anything happened there would be no way to make you whole. A bank locker is the right place for these.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if prohibited items are found in my storage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Insurance cover is void for the affected goods, penalty charges apply, and we may ask you to collect the items. If something leaks, smells or attracts pests, you may also be liable for damage caused to other customers' belongings. Tell us in advance instead — we will help you find another option.",
        },
      },
      {
        "@type": "Question",
        name: "Is this list of prohibited items complete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This list is not comprehensive and restrictions change. If an item is not listed and you are unsure, call or WhatsApp +971 50 577 3388 before your pickup date and we will confirm.",
        },
      },
    ],
  },
]

const categories = [
  {
    icon: Flame,
    title: "Flammable, explosive & pressurised",
    why: "One ignition source puts every customer's goods at risk.",
    items: [
      "Petrol, diesel and engine oil",
      "Paint, thinners, solvents and varnish",
      "Gas cylinders — BBQ, camping, LPG",
      "Aerosols and spray cans",
      "Lighter fluid, matches, fireworks",
      "Generators or tools with fuel in the tank",
    ],
  },
  {
    icon: Biohazard,
    title: "Corrosive, toxic & hazardous",
    why: "These can injure our team and destroy goods stored nearby.",
    items: [
      "Acids, bleach and pool chemicals",
      "Pesticides, insecticides, weedkiller",
      "Asbestos or asbestos-containing material",
      "Radioactive material",
      "Biological, medical or toxic waste",
      "Compressed or liquefied gases",
    ],
  },
  {
    icon: Apple,
    title: "Food, plants & living things",
    why: "Food draws pests, and pests do not stay inside one unit.",
    items: [
      "All food — sealed, packaged or fresh",
      "Rice, flour, grains, spices, pet food",
      "Cooking oil and ghee tins",
      "Plants, seeds and soil",
      "Animals or any living thing",
      "Anything perishable",
    ],
  },
  {
    icon: Droplets,
    title: "Liquids & strong smells",
    why: "A leak travels, and odour transfers into fabric and wood.",
    items: [
      "Any container of liquid",
      "Bulk cosmetics, perfume and toiletries",
      "Cleaning liquids and detergents",
      "Alcohol and liquor",
      "Strongly scented goods",
      "Fridges or washing machines not fully drained and dried",
    ],
  },
  {
    icon: Gem,
    title: "Money, valuables & irreplaceables",
    why: "Our insurance does not cover these, so a loss could not be put right.",
    items: [
      "Cash, currency and bullion",
      "Gold, silver and platinum — including silverware",
      "Jewellery, watches, gems and pearls",
      "Share certificates, bonds, deeds, title documents",
      "Stamp and coin collections",
      "Passports and original identity documents",
    ],
  },
  {
    icon: Scale,
    title: "Illegal or restricted",
    why: "We cannot knowingly store these under any circumstances.",
    items: [
      "Narcotics and controlled substances",
      "Firearms, ammunition and weapons",
      "Counterfeit or smuggled goods",
      "Anything obtained unlawfully",
      "Items you are not legally entitled to possess",
      "Anything restricted under UAE law",
    ],
  },
]

const quickAnswers = [
  { item: "Furniture, beds and mattresses", ok: "yes" },
  { item: "TVs, computers and electronics", ok: "yes" },
  { item: "White goods — drained and dried", ok: "yes" },
  { item: "Boxes, files and business documents", ok: "yes" },
  { item: "Suitcases, clothing and books", ok: "yes" },
  { item: "Cars, bikes and boats", ok: "yes" },
  { item: "Sealed packaged food", ok: "no" },
  { item: "Cooking oil or ghee tins", ok: "no" },
  { item: "Paint tins, even part-used", ok: "no" },
  { item: "Perfume and cosmetics in bulk", ok: "no" },
  { item: "Cash, gold and jewellery", ok: "no" },
  { item: "Completely empty gas cylinder", ok: "ask" },
  { item: "Antiques and fine art", ok: "ask" },
  { item: "Musical instruments", ok: "ask" },
]

export default function ProhibitedItemsPage() {
  return (
    <>
      <SchemaScript schema={schemas} />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-dubai-navy to-dubai-midnight text-white py-20">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-dubai-gold/20 text-dubai-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <ShieldAlert className="w-4 h-4" /> Before your pickup day
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What you cannot put into storage
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">
              Almost everything in a home or office is fine. A small number of things are not — because
              they catch fire, leak, attract pests, or cannot be insured. Two minutes here saves a
              problem on collection day.
            </p>
          </div>
        </section>

        {/* Quick reference */}
        <section className="py-16 bg-dubai-sand">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-3">
              The short answer
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              The items people ask about most. Anything marked <strong>Ask us</strong> depends on the
              item — a quick call settles it.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              {quickAnswers.map(({ item, ok }) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700">{item}</span>
                  {ok === "yes" && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 shrink-0">
                      <CheckCircle2 className="w-4 h-4" /> Fine
                    </span>
                  )}
                  {ok === "no" && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 shrink-0">
                      <XCircle className="w-4 h-4" /> Not accepted
                    </span>
                  )}
                  {ok === "ask" && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 shrink-0">
                      <HelpCircle className="w-4 h-4" /> Ask us
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dubai-navy text-center mb-3">
              The full list, and why
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every restriction below exists because of something that has gone wrong in a warehouse
              somewhere. The reason matters more than the list — if your item behaves like one of
              these, assume it is not accepted and ask.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map(({ icon: Icon, title, why, items }) => (
                <div
                  key={title}
                  className="border-2 border-gray-100 rounded-2xl p-6 hover:border-dubai-gold/40 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-dubai-sand flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-dubai-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dubai-navy leading-snug">{title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{why}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What happens */}
        <section className="py-16 bg-dubai-navy text-white">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">If prohibited items are found</h2>
            <p className="text-white/80 mb-8 max-w-2xl">
              We would much rather hear about it beforehand. Telling us costs you nothing; finding out
              later is expensive for everyone.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-dubai-gold font-bold mb-2">Insurance is void</div>
                <p className="text-sm text-white/70">
                  Cover lapses on the affected goods, so a claim cannot be paid.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-dubai-gold font-bold mb-2">Penalty charges apply</div>
                <p className="text-sm text-white/70">
                  Charged on the account, alongside any cost of safe removal.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-dubai-gold font-bold mb-2">Liability for damage</div>
                <p className="text-sm text-white/70">
                  If a leak, smell or pest reaches other customers' goods, that is on the account too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Not exhaustive + CTA */}
        <section className="py-16 bg-white">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" /> This list is not exhaustive
            </div>
            <h2 className="text-3xl font-bold text-dubai-navy mb-4">Not sure about something?</h2>
            <p className="text-gray-600 mb-8">
              Restrictions change, and no list covers every object in a home. If an item is not
              mentioned here and you are unsure, ask before your pickup date rather than on it — our
              team answers this question every day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+971505773388">
                <Button className="bg-dubai-gold hover:bg-dubai-darkgold text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" /> +971 50 577 3388
                </Button>
              </a>
              <a href="https://wa.me/971505773388" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-dubai-navy text-dubai-navy hover:bg-dubai-navy hover:text-white px-8 py-4 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp us
                </Button>
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-4">Everything else? We will collect it from your door.</p>
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 text-dubai-gold font-semibold hover:text-dubai-darkgold"
              >
                Get a storage quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
