// ============================================
// SAFESTORAGE DUBAI - COMPREHENSIVE SCHEMA MARKUP
// For AI Overviews, Rich Snippets & Voice Search
// ============================================

// 1. ORGANIZATION SCHEMA - Brand Knowledge Panel
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://safestorage.ae/#organization",
  name: "SafeStorage Dubai",
  alternateName: ["SafeStorage AE", "Safe Storage Dubai", "SafeStorage UAE"],
  url: "https://safestorage.ae",
  logo: {
    "@type": "ImageObject",
    url: "https://safestorage.ae/images/design-mode/logo.png",
    width: 180,
    height: 60
  },
  image: "https://safestorage.ae/images/facility-exterior.jpg",
  description: "Dubai's most trusted storage partner since 2018. Climate-controlled units, 24/7 security, hassle-free pickup & delivery, and free insurance up to AED 5000.",
  foundingDate: "2018",
  founders: [
    {
      "@type": "Person",
      name: "SafeStorage Team"
    }
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50
  },
  slogan: "Dubai's Most Trusted Storage Partner",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971505773388",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00"
      }
    },
    {
      "@type": "ContactPoint",
      telephone: "+971505773388",
      contactType: "sales",
      areaServed: "AE",
      availableLanguage: ["en", "ar"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "402- B Wing, Emarat Atrium Bldg",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  sameAs: [
    "https://www.facebook.com/safestoragedubai",
    "https://www.instagram.com/safestoragedubai",
    "https://www.linkedin.com/company/safestorage-dubai",
    "https://twitter.com/safestoragedubai",
    "https://www.youtube.com/@safestoragedubai"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Storage Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Storage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Storage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Storage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Storage" } }
    ]
  }
}

// 2. LOCAL BUSINESS SCHEMA - Google Maps & Local Pack
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "@id": "https://safestorage.ae/#business",
  name: "SafeStorage Dubai - Premium Storage Solutions",
  alternateName: "SafeStorage Dubai",
  description: "Dubai's most trusted storage partner since 2018. Climate-controlled units, 24/7 security, hassle-free pickup & delivery, and free insurance up to AED 5000. Serving Dubai Marina, Business Bay, JLT, Downtown, and all areas.",
  image: [
    "https://safestorage.ae/images/facility-1.jpg",
    "https://safestorage.ae/images/facility-2.jpg",
    "https://safestorage.ae/images/facility-3.jpg",
    "https://safestorage.ae/images/storage-units.jpg"
  ],
  url: "https://safestorage.ae",
  telephone: "+971505773388",
  email: "safestoragedubai@gmail.com",
  priceRange: "From AED 99",
  currenciesAccepted: "AED",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, Cheque",
  areaServed: [
    { "@type": "City", name: "Dubai", "@id": "https://www.wikidata.org/wiki/Q612" },
    { "@type": "Place", name: "Dubai Marina" },
    { "@type": "Place", name: "Business Bay" },
    { "@type": "Place", name: "JLT (Jumeirah Lake Towers)" },
    { "@type": "Place", name: "Downtown Dubai" },
    { "@type": "Place", name: "Dubai Investment Park" },
    { "@type": "Place", name: "Al Quoz" },
    { "@type": "Place", name: "Al Barsha" },
    { "@type": "Place", name: "Jumeirah" },
    { "@type": "Place", name: "Palm Jumeirah" },
    { "@type": "Place", name: "DIFC" },
    { "@type": "Place", name: "Deira" },
    { "@type": "Place", name: "Bur Dubai" },
    { "@type": "Place", name: "Sheikh Zayed Road" },
    { "@type": "Place", name: "Motor City" },
    { "@type": "Place", name: "Sports City" },
    { "@type": "Place", name: "Arabian Ranches" },
    { "@type": "Place", name: "Silicon Oasis" }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "402- B Wing, Emarat Atrium Bldg",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "24.9857",
    longitude: "55.1562"
  },
  hasMap: "https://maps.google.com/?q=SafeStorage+Dubai+Investment+Park",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "487",
    reviewCount: "312"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ahmed Hassan" },
      datePublished: "2024-11-15",
      reviewBody: "Excellent storage facility with top-notch security and climate control. The hassle-free pickup service made everything so convenient!"
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sarah Mitchell" },
      datePublished: "2024-11-10",
      reviewBody: "Best storage solution in Dubai! Clean, secure, and the staff is incredibly helpful. Highly recommended!"
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Fatima Al-Rashid" },
      datePublished: "2024-10-25",
      reviewBody: "Used their service for villa renovation storage. Climate control protected all my furniture perfectly. Hassle-free pickup was a huge bonus!"
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Mark Thompson" },
      datePublished: "2024-10-15",
      reviewBody: "Perfect for e-commerce inventory storage. Flexible terms and easy access. The dedicated consultant really understood our business needs."
    }
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "24/7 CCTV Security", value: true },
    { "@type": "LocationFeatureSpecification", name: "Climate Control (20-25°C)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Hassle-Free Pickup & Delivery", value: true },
    { "@type": "LocationFeatureSpecification", name: "Biometric Access Control", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Insurance (up to AED 5000)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire Detection & Suppression", value: true },
    { "@type": "LocationFeatureSpecification", name: "Individual Unit Alarms", value: true },
    { "@type": "LocationFeatureSpecification", name: "On-site Security Personnel", value: true },
    { "@type": "LocationFeatureSpecification", name: "Packing Materials Available", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true }
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Small Storage Unit (25-50 sq ft)",
      description: "Perfect for boxes, seasonal items, and small furniture",
      price: "199",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Medium Storage Unit (50-100 sq ft)",
      description: "Ideal for 1-2 bedroom apartment contents",
      price: "599",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Large Storage Unit (100-200 sq ft)",
      description: "Suitable for 3 bedroom home or business inventory",
      price: "1299",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Extra Large Storage Unit (200+ sq ft)",
      description: "For villas, large businesses, or bulk storage",
      price: "2499",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Vehicle Storage",
      description: "Secure parking for cars, motorcycles, and boats",
      price: "899",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    }
  ]
}

// 3. WEBSITE SCHEMA - Sitelinks Searchbox
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://safestorage.ae/#website",
  name: "SafeStorage Dubai",
  alternateName: "SafeStorage AE",
  url: "https://safestorage.ae",
  description: "Dubai's most trusted storage partner. Climate-controlled self storage units with hassle-free pickup & delivery.",
  publisher: { "@id": "https://safestorage.ae/#organization" },
  inLanguage: ["en-AE", "ar-AE"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://safestorage.ae/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

// 4. COMPREHENSIVE FAQ SCHEMA - AI Overviews & FAQ Rich Snippets (30+ Questions)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://safestorage.ae/#faq",
  mainEntity: [
    // PRICING & COSTS
    {
      "@type": "Question",
      name: "How much does storage cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Storage in Dubai starts from AED 99 per month at SafeStorage Dubai. We offer flexible storage solutions for all needs - from small boxes to full villa contents. All units include climate control, 24/7 security, and hassle-hassle-free pickup & delivery within Dubai. Contact us at +971505773388 for a personalized quote based on your storage requirements."
      }
    },
    {
      "@type": "Question",
      name: "What is the cheapest storage option in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cheapest storage in Dubai starts from AED 99 per month at SafeStorage Dubai. This is ideal for boxes, seasonal items, or small furniture. We offer the best value with hassle-hassle-free pickup & delivery, climate control, 24/7 security, and free insurance up to AED 5000 - all included in the price with no hidden fees."
      }
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees for storage in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At SafeStorage Dubai, there are absolutely no hidden fees. The quoted price includes: climate-controlled storage, 24/7 security with CCTV, basic insurance up to AED 5000, and access during operating hours. Pickup and delivery within Dubai is FREE. Optional extras like premium insurance or packing materials are transparently priced."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer discounts for long-term storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! SafeStorage Dubai offers significant discounts for long-term commitments: 10% off for 3-month prepaid plans, 15% off for 6-month prepaid plans, and 20% off for annual prepaid plans. We also offer special rates for businesses and bulk storage. Contact us for a customized quote."
      }
    },
    // UNIT SIZES
    {
      "@type": "Question",
      name: "What sizes of storage units are available at SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai offers flexible storage solutions for all needs: Small units for boxes, seasonal items, and small furniture; Medium units for 1-2 bedroom apartment contents; Large units for 3 bedroom home contents; Extra Large units for villas or business inventory; Vehicle Storage for cars, bikes, and boats. Prices start from AED 99/month. Contact us at +971505773388 for a personalized quote."
      }
    },
    {
      "@type": "Question",
      name: "How do I know what storage unit size I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Here's a quick guide: Small (25-50 sq ft) - 10-20 boxes or studio apartment items; Medium (50-100 sq ft) - 1-2 bedroom apartment contents; Large (100-200 sq ft) - 3 bedroom home or office furniture; Extra Large (200+ sq ft) - 4+ bedroom villa or business inventory. Our dedicated storage consultants offer free assessments and can recommend the perfect size based on your specific items. Call +971505773388 for personalized advice."
      }
    },
    {
      "@type": "Question",
      name: "Can I upgrade or downgrade my storage unit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SafeStorage Dubai offers flexible unit changes. You can upgrade to a larger unit anytime based on availability, or downgrade when you no longer need the space. Simply contact your dedicated storage consultant, and we'll help you transition smoothly. There are no penalties for changing unit sizes."
      }
    },
    // CLIMATE CONTROL & SECURITY
    {
      "@type": "Question",
      name: "Is climate-controlled storage necessary in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, climate-controlled storage is essential in Dubai due to extreme temperatures reaching 45°C+ and high humidity. Without climate control, furniture warps, electronics malfunction, documents deteriorate, and mold grows. SafeStorage Dubai maintains all units at 20-25°C with 45-55% humidity year-round, protecting your belongings from Dubai's harsh weather. All our units are climate-controlled at no extra cost."
      }
    },
    {
      "@type": "Question",
      name: "What security measures are in place at SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai features comprehensive security: 24/7 HD CCTV surveillance covering all areas, biometric access control (only you can access your unit), individual unit alarms, fire detection and suppression systems, on-site security personnel, secure perimeter fencing, and well-lit facilities. Your belongings are monitored and protected around the clock."
      }
    },
    {
      "@type": "Question",
      name: "Is my stored property insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Every storage unit at SafeStorage Dubai includes FREE insurance coverage up to AED 5,000. This covers damage from fire, theft, and natural disasters. For high-value items, we offer additional comprehensive insurance options with coverage up to AED 100,000. Our team can help you choose the right coverage based on your belongings' value."
      }
    },
    // PICKUP & DELIVERY
    {
      "@type": "Question",
      name: "Do you offer hassle-free pickup and delivery for storage in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! SafeStorage Dubai provides Hassle-free pickup and delivery anywhere in Dubai. Our professional team will collect your items from your home, office, or any location, transport them safely to our climate-controlled facility, and return them whenever you need. This hassle-free service sets us apart from other storage providers."
      }
    },
    {
      "@type": "Question",
      name: "What areas in Dubai do you cover for pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai covers ALL areas in Dubai including: Dubai Marina, JLT, Downtown Dubai, Business Bay, DIFC, Palm Jumeirah, Jumeirah, Al Quoz, Al Barsha, Dubai Investment Park, Deira, Bur Dubai, Sheikh Zayed Road, Motor City, Sports City, Arabian Ranches, Silicon Oasis, and more. If you're in Dubai, we can pick up from your location."
      }
    },
    {
      "@type": "Question",
      name: "How quickly can you pick up my items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai offers same-day pickup for requests made before 12 PM. Standard pickups are scheduled within 24-48 hours based on your preferred time slot. For emergencies, we can arrange priority pickup. Call +971505773388 or WhatsApp us to schedule your convenient pickup time."
      }
    },
    // ACCESS & HOURS
    {
      "@type": "Question",
      name: "Can I access my storage unit anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can access your storage unit during operating hours: Monday-Saturday 8:00 AM to 8:00 PM, and Sunday 10:00 AM to 6:00 PM. For business customers with special requirements, we can arrange extended access hours or 24/7 access packages. Your dedicated consultant can discuss your specific access needs."
      }
    },
    {
      "@type": "Question",
      name: "Can someone else access my storage unit on my behalf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can authorize other people to access your storage unit. Simply provide us with their details (name, Emirates ID/passport, phone number) and we'll set up their biometric access credentials. You can add or remove authorized users anytime by contacting your storage consultant."
      }
    },
    // MOVING & PACKING
    {
      "@type": "Question",
      name: "Do you provide packing materials and moving boxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SafeStorage Dubai offers a complete range of packing materials: sturdy cardboard boxes (small, medium, large), bubble wrap, packing paper and tissue, packing tape and markers, furniture covers and mattress bags, wardrobe boxes for clothes, and specialty boxes for fragile items. We also offer pre-made packing kits for different storage needs."
      }
    },
    {
      "@type": "Question",
      name: "Can you help with packing my belongings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our professional team offers full packing services for an additional fee. They're trained to pack items securely for maximum protection during transport and storage. This service is especially recommended for delicate items, artwork, antiques, and electronics. We can also help with unpacking when you retrieve your items."
      }
    },
    // WHAT CAN BE STORED
    {
      "@type": "Question",
      name: "What items can I store at SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can store most household and business items including: furniture and appliances, electronics and computers, clothes and personal belongings, documents and files, business inventory, vehicles (cars, motorcycles, boats), sporting equipment, seasonal items, artwork and collectibles, and musical instruments. Our climate control protects all types of items."
      }
    },
    {
      "@type": "Question",
      name: "What items are prohibited from storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For safety reasons, the following items cannot be stored: hazardous materials and chemicals, flammable substances (petrol, paint, aerosols), perishable food items, live plants or animals, firearms and explosives, illegal items, and anything that could damage other units. If unsure about an item, please ask our team."
      }
    },
    {
      "@type": "Question",
      name: "Can I store my car or vehicle in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! SafeStorage Dubai offers secure, climate-controlled vehicle storage starting at AED 899/month. We store cars, motorcycles, classic cars, boats, jet skis, and RVs. All vehicles are protected from Dubai's extreme heat in our climate-controlled facility with 24/7 CCTV surveillance. Hassle-free pickup and delivery available for vehicles too."
      }
    },
    // BUSINESS STORAGE
    {
      "@type": "Question",
      name: "Do you offer business storage solutions in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SafeStorage Dubai specializes in business storage including: document archiving (compliant with UAE regulations), inventory storage for e-commerce and retail, office furniture during relocations, equipment storage, seasonal stock management, and sample storage for showrooms. We offer dedicated business consultants, flexible terms, and extended access hours for business customers."
      }
    },
    {
      "@type": "Question",
      name: "Is document storage at SafeStorage compliant with UAE regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our document storage meets UAE compliance requirements. Climate control (20-25°C, 45-55% humidity) preserves documents per archival standards. We offer secure access with audit trails, fire protection systems, and optional confidential destruction services. Many law firms, medical practices, and financial institutions trust SafeStorage for their document archiving needs."
      }
    },
    // COMPARISON & TRUST
    {
      "@type": "Question",
      name: "Why should I choose SafeStorage Dubai over other storage companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai stands out with: Hassle-free pickup and delivery (others charge AED 200-500), ALL units climate-controlled (not just premium), FREE insurance up to AED 5000 included, dedicated personal storage consultant, no hidden fees or admin charges, flexible month-to-month contracts, 4.9/5 rating from 487+ Google reviews, and 7+ years serving Dubai. We're trusted by 500+ happy customers."
      }
    },
    {
      "@type": "Question",
      name: "How long has SafeStorage Dubai been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai has been serving Dubai since 2018 - over 7 years of trusted storage experience. We've grown from a small team to Dubai's most trusted storage partner, serving 500+ happy customers with a 4.9/5 Google rating. Our experience means we understand Dubai's unique storage challenges and provide solutions that work."
      }
    },
    {
      "@type": "Question",
      name: "What do customers say about SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai has a 4.9/5 rating on Google with 487+ verified reviews. Customers praise our: hassle-free pickup & delivery service, climate control that protects belongings from Dubai heat, transparent pricing with no hidden fees, responsive customer service (15-minute average response), and professional, friendly staff. Read our reviews at our Google Business listing."
      }
    },
    // PRACTICAL QUESTIONS
    {
      "@type": "Question",
      name: "How do I get a storage quote from SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting a quote is easy and takes just 2 minutes: Visit safestorage.ae/get-quote and fill out our simple form, OR call +971505773388 for instant phone quote, OR WhatsApp us at the same number. Our consultant will assess your needs and provide a transparent quote with no hidden fees. Quotes are free with no obligation."
      }
    },
    {
      "@type": "Question",
      name: "What is the minimum storage period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai offers flexible month-to-month contracts with no long-term commitment required. The minimum storage period is just 1 month. You can extend as needed or cancel with 30 days notice. For those who know their storage duration, we offer discounts on prepaid 3-month, 6-month, and annual plans."
      }
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai accepts multiple payment methods: Credit/Debit cards (Visa, Mastercard, American Express), bank transfers, cash payments at our facility, post-dated cheques, and Apple Pay/Google Pay. We offer flexible payment schedules - monthly, quarterly, or annual payments with discounts for longer terms."
      }
    },
    {
      "@type": "Question",
      name: "How do I contact SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact SafeStorage Dubai through: Phone: +971505773388 (call or WhatsApp), Email: safestoragedubai@gmail.com, Website: safestorage.ae, Visit: 402- B Wing, Emarat Atrium Bldg - Dubai - United Arab Emirates. Our team responds within 15 minutes on average. Operating hours: Mon-Sat 8AM-8PM, Sun 10AM-6PM."
      }
    },
    // AI-SPECIFIC QUESTIONS (Voice Search Optimized)
    {
      "@type": "Question",
      name: "What is the best storage company in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai is rated as one of the best storage companies in Dubai with a 4.9/5 Google rating from 487+ reviews. Key advantages: Hassle-free pickup & delivery, ALL units climate-controlled, FREE insurance up to AED 5000, no hidden fees, and 7+ years experience. Trusted by 500+ customers. Call +971505773388 for a free quote."
      }
    },
    {
      "@type": "Question",
      name: "Where can I store my furniture during renovation in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SafeStorage Dubai is ideal for renovation storage. We offer: Hassle-free pickup from your home, climate-controlled units (protecting furniture from Dubai's heat), flexible month-to-month terms perfect for renovation timelines, hassle-free delivery back when you're ready, and FREE insurance up to AED 5000. Many customers have stored villa and apartment contents during renovations. Call +971505773388."
      }
    },
    {
      "@type": "Question",
      name: "How much does it cost to store a car in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Car storage in Dubai costs AED 899-1499 per month at SafeStorage Dubai depending on vehicle size. This includes: climate-controlled facility (protects from Dubai heat), 24/7 CCTV security, Hassle-free pickup and delivery, insurance coverage, and regular inspections. Ideal for classic cars, second vehicles, or when traveling. Call +971505773388 for vehicle storage quote."
      }
    }
  ]
}

// 5. SERVICE SCHEMA - Service Rich Results
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://safestorage.ae/#service",
  serviceType: "Self Storage Service",
  name: "Premium Storage Solutions Dubai",
  description: "Secure, climate-controlled storage units with hassle-free hassle-free pickup and delivery across Dubai. Personal storage, business storage, vehicle storage, and document archiving.",
  provider: {
    "@id": "https://safestorage.ae/#organization"
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: {
      "@type": "Country",
      name: "United Arab Emirates"
    }
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Storage Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Personal Storage",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Household Storage", description: "Store furniture, appliances, and home items" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation Storage", description: "Temporary storage during home renovations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relocation Storage", description: "Short-term storage when moving homes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Item Storage", description: "Store seasonal clothes, decorations, equipment" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Business Storage",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Archiving", description: "Secure, compliant document storage" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inventory Storage", description: "E-commerce and retail stock storage" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Equipment Storage", description: "Furniture and equipment during relocation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sample Storage", description: "Product samples for showrooms and sales" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Vehicle Storage",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Storage", description: "Secure, climate-controlled car parking" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motorcycle Storage", description: "Safe storage for motorcycles and bikes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boat Storage", description: "Boats and jet skis storage" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Classic Car Storage", description: "Climate-controlled for vintage vehicles" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        name: "Pickup & Delivery",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hassle-Free Pickup", description: "Complimentary collection from your location" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hassle-Free Delivery", description: "Hassle-free return delivery when needed" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing Service", description: "Professional packing assistance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Same-Day Service", description: "Urgent pickup/delivery available" } }
        ]
      }
    ]
  },
  offers: [
    {
      "@type": "Offer",
      name: "Small Storage Unit",
      description: "25-50 sq ft - Perfect for boxes, seasonal items, and small furniture",
      price: "199",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Medium Storage Unit",
      description: "50-100 sq ft - Ideal for one-bedroom apartment contents",
      price: "599",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Large Storage Unit",
      description: "100-200 sq ft - Suitable for 3 bedroom homes",
      price: "1299",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Extra Large Storage Unit",
      description: "200-300+ sq ft - For villas or business inventory",
      price: "2499",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      name: "Vehicle Storage",
      description: "Secure climate-controlled parking for cars, motorcycles, boats",
      price: "899",
      priceCurrency: "AED",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    }
  ]
}

// 6. PRODUCT SCHEMA - Product Rich Snippets
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://safestorage.ae/#product",
  name: "Self Storage Units Dubai",
  description: "Premium climate-controlled storage units in Dubai with hassle-hassle-free pickup and delivery. Personal, business, and vehicle storage from AED 99/month.",
  brand: {
    "@type": "Brand",
    name: "SafeStorage Dubai"
  },
  image: "https://safestorage.ae/images/storage-units.jpg",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AED",
    lowPrice: "99",
    highPrice: "4999",
    offerCount: "5",
    offers: [
      { "@type": "Offer", name: "Small Unit", price: "199", priceCurrency: "AED" },
      { "@type": "Offer", name: "Medium Unit", price: "599", priceCurrency: "AED" },
      { "@type": "Offer", name: "Large Unit", price: "1299", priceCurrency: "AED" },
      { "@type": "Offer", name: "Extra Large Unit", price: "2499", priceCurrency: "AED" },
      { "@type": "Offer", name: "Vehicle Storage", price: "899", priceCurrency: "AED" }
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "487",
    reviewCount: "312"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Ahmed Hassan" },
      reviewBody: "Excellent storage facility with top-notch security and climate control."
    }
  ]
}

// 7. HOWTO SCHEMA - How-to Rich Snippets
export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://safestorage.ae/#howto",
  name: "How to Rent Storage in Dubai - SafeStorage Dubai",
  description: "Simple 4-step process to rent secure, climate-controlled storage in Dubai with hassle-free pickup and delivery.",
  totalTime: "PT10M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "AED",
    value: "199"
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Get a Free Quote",
      text: "Visit safestorage.ae/get-quote or call +971505773388. Tell us what you need to store and we'll recommend the perfect unit size. Quotes are free with no obligation.",
      url: "https://safestorage.ae/get-quote",
      image: "https://safestorage.ae/images/step1-quote.jpg"
    },
    {
      "@type": "HowToStep",
      name: "Schedule Hassle-Free Pickup",
      text: "Choose your preferred pickup date and time. Our professional team will come to your home, office, or any Dubai location to collect your items. Pickup is FREE.",
      image: "https://safestorage.ae/images/step2-pickup.jpg"
    },
    {
      "@type": "HowToStep",
      name: "We Store Securely",
      text: "Your items are transported to our climate-controlled facility (20-25°C) with 24/7 CCTV security. Everything is carefully stored and inventoried in your personal unit.",
      image: "https://safestorage.ae/images/step3-storage.jpg"
    },
    {
      "@type": "HowToStep",
      name: "Retrieve Anytime",
      text: "Access your items during operating hours, or request hassle-free delivery back to your location. We'll bring your belongings to you whenever you need them.",
      image: "https://safestorage.ae/images/step4-retrieve.jpg"
    }
  ]
}

// 8. ITEM LIST SCHEMA - List Rich Results
export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://safestorage.ae/#itemlist",
  name: "Storage Unit Sizes at SafeStorage Dubai",
  description: "Complete list of storage unit sizes and prices available at SafeStorage Dubai",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Small Storage Unit (25-50 sq ft)",
        description: "Perfect for 10-20 boxes, seasonal items, small furniture",
        offers: { "@type": "Offer", price: "199", priceCurrency: "AED", availability: "https://schema.org/InStock" }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Medium Storage Unit (50-100 sq ft)",
        description: "Ideal for 1-2 bedroom apartment contents",
        offers: { "@type": "Offer", price: "599", priceCurrency: "AED", availability: "https://schema.org/InStock" }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Large Storage Unit (100-200 sq ft)",
        description: "Suitable for 3 bedroom home or business inventory",
        offers: { "@type": "Offer", price: "1299", priceCurrency: "AED", availability: "https://schema.org/InStock" }
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Extra Large Storage Unit (200+ sq ft)",
        description: "For villas, large businesses, or bulk storage",
        offers: { "@type": "Offer", price: "2499", priceCurrency: "AED", availability: "https://schema.org/InStock" }
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Vehicle Storage",
        description: "Climate-controlled parking for cars, motorcycles, boats",
        offers: { "@type": "Offer", price: "899", priceCurrency: "AED", availability: "https://schema.org/InStock" }
      }
    }
  ]
}

// 9. SPEAKABLE SCHEMA - Voice Search Optimization
export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://safestorage.ae/#speakable",
  name: "SafeStorage Dubai - Storage Solutions",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-headline", ".trust-badges", ".pricing-section", ".faq-section"]
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does storage cost in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Storage in Dubai starts from AED 99 per month at SafeStorage Dubai. We offer flexible pricing for all unit sizes. This includes climate control, security, and hassle-hassle-free pickup and delivery."
        }
      },
      {
        "@type": "Question",
        name: "What is the best storage company in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SafeStorage Dubai is rated 4.9 out of 5 stars on Google with over 487 reviews. We offer hassle-free pickup and delivery, climate-controlled units, and free insurance up to AED 5000."
        }
      }
    ]
  }
}

// 10. OFFER SCHEMA - Promotions/Deals
export const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "@id": "https://safestorage.ae/#offer",
  name: "New Customer Offer - SafeStorage Dubai",
  description: "Get 10% off your first month of storage at SafeStorage Dubai. Includes hassle-free pickup and delivery, climate control, and insurance up to AED 5000.",
  price: "179",
  priceCurrency: "AED",
  priceValidUntil: "2026-12-31",
  availability: "https://schema.org/InStock",
  validFrom: "2024-01-01",
  seller: {
    "@id": "https://safestorage.ae/#organization"
  },
  itemOffered: {
    "@type": "Service",
    name: "Small Storage Unit",
    description: "Climate-controlled storage unit 25-50 sq ft"
  }
}

// 11. VIDEO OBJECT SCHEMA - Video Rich Results
export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://safestorage.ae/#video",
  name: "SafeStorage Dubai Facility Tour - See Our Climate-Controlled Storage",
  description: "Take a virtual tour of SafeStorage Dubai's state-of-the-art storage facility. See our climate-controlled units, 24/7 security systems, and learn how we keep your belongings safe in Dubai.",
  thumbnailUrl: "https://safestorage.ae/images/video-thumbnail.jpg",
  uploadDate: "2024-01-15",
  duration: "PT3M45S",
  contentUrl: "https://www.youtube.com/watch?v=SAFESTORAGE_VIDEO_ID",
  embedUrl: "https://www.youtube.com/embed/SAFESTORAGE_VIDEO_ID",
  publisher: {
    "@id": "https://safestorage.ae/#organization"
  }
}

// 12. CONTACT PAGE SCHEMA
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://safestorage.ae/contact#webpage",
  name: "Contact SafeStorage Dubai",
  description: "Contact SafeStorage Dubai for storage solutions. Call +971505773388, email safestoragedubai@gmail.com, or visit us at 402- B Wing, Emarat Atrium Bldg - Dubai - United Arab Emirates.",
  url: "https://safestorage.ae/contact",
  mainEntity: {
    "@id": "https://safestorage.ae/#organization"
  }
}

// 13. ABOUT PAGE SCHEMA
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://safestorage.ae/about#webpage",
  name: "About SafeStorage Dubai - Dubai's Trusted Storage Partner Since 2018",
  description: "Learn about SafeStorage Dubai - serving Dubai since 2018 with climate-controlled storage, 24/7 security, and hassle-hassle-free pickup & delivery. 500+ happy customers.",
  url: "https://safestorage.ae/about",
  mainEntity: {
    "@id": "https://safestorage.ae/#organization"
  }
}

// 14. BREADCRUMB SCHEMA (Function)
export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// 15. ARTICLE SCHEMA (For Blog Posts)
export const articleSchema = (article: {
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Organization",
    name: article.author,
    url: "https://safestorage.ae"
  },
  publisher: {
    "@id": "https://safestorage.ae/#organization"
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url
  }
})

// COMBINED SCHEMA FOR GLOBAL INJECTION
export const allSchemas = [
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  faqSchema,
  serviceSchema,
  productSchema,
  howToSchema,
  itemListSchema,
  speakableSchema,
  offerSchema,
  videoSchema,
  contactPageSchema,
  aboutPageSchema
]
