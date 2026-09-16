// Homepage FAQ. Answers are capped at 30 words — one or two sentences each —
// because they sit inside a collapsed accordion where a wall of text is
// unreadable. Anything needing more room belongs on the silo page it concerns
// (pricing, unit sizes, coverage), not here.
export const homeFaqs: { q: string; a: string; links?: { href: string; label: string }[] }[] = [
  {
    q: "What is self-storage?",
    a: "A secure space you rent for belongings that will not fit at home. We collect from your door, store them, and deliver them back — no warehouse visit, no truck.",
  },
  {
    q: "How does pickup and delivery work?",
    a: "We come to your home or office anywhere in Dubai, wrap and collect your items, and deliver them back whenever you need. Sharjah, Ajman and Abu Dhabi covered too.",
  },
  {
    q: "What is the minimum rental period?",
    a: "One month, with no lock-in and no long-term contract. Cancel with 7 days' notice — after the first month you only pay pro-rata up to your retrieval date.",
  },
  {
    q: "How does inventory tracking work?",
    a: "Every item is photographed and catalogued when we collect it, and you get an itemised list with photos. You can request specific items back later instead of retrieving everything.",
  },
  {
    q: "Can businesses use SafeStorage Dubai?",
    a: "Yes — office furniture, retail and e-commerce stock, documents and equipment. Scale month to month, with account management and VAT invoices.",
  },
  {
    q: "What areas of Dubai are covered?",
    a: "Every area, including Business Bay, Downtown, DIFC, Dubai Marina, Jumeirah, JLT, Al Quoz, DIP and Deira. We also serve Sharjah and the other emirates.",
    links: [
      { href: "/self-storage-dubai/local-self-storage", label: "Local self storage across Dubai" },
      { href: "/locations", label: "All the areas we collect from" },
    ],
  },
  {
    q: "Do you offer same-day pickup?",
    a: "Yes, for requests confirmed before 12 noon and subject to slot availability. For a planned move we recommend booking 24–48 hours ahead to lock in your preferred slot.",
  },
  {
    q: "How do I cancel my storage?",
    a: "Give 7 days' notice before your next billing date. We return your items, billing stops on delivery, and any unused prepaid period is refunded.",
  },
  {
    q: "Can I retrieve specific items without getting everything back?",
    a: "Yes. Pick individual items, boxes or furniture pieces from your digital inventory and we deliver only those — the rest of your belongings stay safely stored.",
  },
  {
    q: "What unit sizes are available?",
    a: "From 25 sq ft (a few boxes) up to 300+ sq ft (a 4-bedroom villa). Send your list or photos and we will size it for you.",
  },
  {
    q: "How long does the pickup take?",
    a: "Usually 2–4 hours for a home. Our crew brings blankets, wrap and film, and photographs and inventories each item before loading.",
  },
  {
    q: "Is VAT included in the price?",
    a: "Quoted prices exclude 5% UAE VAT, which is added to your invoice. VAT-registered businesses should send us their TRN before the first invoice so it can be issued for reclaim.",
  },
  {
    q: "How do I pay for storage?",
    a: "Card, bank transfer, online payment or cheque — monthly in advance. Auto-pay is available, and prepaying several months up front unlocks a discount.",
  },
]
