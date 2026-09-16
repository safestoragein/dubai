// Homepage FAQ. Answers are deliberately short — one or two sentences each —
// because they sit inside a collapsed accordion where a wall of text is
// unreadable. Anything needing more room belongs on the silo page it concerns
// (pricing, unit sizes, coverage), not here.
export const homeFaqs: { q: string; a: string; links?: { href: string; label: string }[] }[] = [
  {
    q: "What is self-storage?",
    a: "A secure unit or dedicated space you rent to keep belongings outside your home or office. We run a valet model — we collect from your door, store everything, and deliver it back, so you never visit a warehouse or hire a truck.",
  },
  {
    q: "How does pickup and delivery work?",
    a: "Our team comes to your home or office anywhere in Dubai, wraps and collects your items, and transports them to our warehouse. We deliver them back to your address whenever you need them. Sharjah, Ajman and Abu Dhabi are covered too.",
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
    a: "Yes — office furniture, retail and e-commerce stock, documents and equipment. Scale your space up or down month to month, with dedicated account management and VAT invoices for every business account.",
  },
  {
    q: "What areas of Dubai are covered?",
    a: "Every area, including Business Bay, Downtown Dubai, DIFC, Dubai Marina, JBR, Jumeirah, Palm Jumeirah, JLT, Al Quoz, Dubai Investment Park, Deira and Bur Dubai. We also serve Sharjah and the other emirates — call us if you are unsure.",
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
    a: "Give us 7 days' notice before your next billing date. We schedule the return delivery, billing stops once your items are back, and any unused prepaid period is refunded. No cancellation fees.",
  },
  {
    q: "Can I retrieve specific items without getting everything back?",
    a: "Yes. Pick individual items, boxes or furniture pieces from your digital inventory and we deliver only those — the rest of your belongings stay safely stored.",
  },
  {
    q: "What unit sizes are available?",
    a: "From 25 sq ft (a few boxes or one piece of furniture) up to 300+ sq ft (a full 4-bedroom villa). Send us your inventory list or photos and we will recommend the right size.",
  },
  {
    q: "How long does the pickup take?",
    a: "Usually 2–4 hours for a home, depending on volume. Our crew arrives with blankets, bubble wrap, stretch film and corner protectors, and wraps, photographs and inventories each item before loading.",
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
