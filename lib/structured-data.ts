export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SafeStorage Dubai",
  alternateName: "SafeStorage AE",
  url: "https://safestorage.ae",
  logo: "https://safestorage.ae/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971505773388",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["en", "ar"]
  },
  sameAs: [
    "https://www.facebook.com/safestoragedubai",
    "https://www.instagram.com/safestoragedubai",
    "https://www.linkedin.com/company/safestorage-dubai",
    "https://twitter.com/safestoragedubai"
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "@id": "https://safestorage.ae/#business",
  name: "SafeStorage Dubai - Premium Storage Solutions",
  image: [
    "https://safestorage.ae/images/facility-1.jpg",
    "https://safestorage.ae/images/facility-2.jpg",
    "https://safestorage.ae/images/facility-3.jpg"
  ],
  url: "https://safestorage.ae",
  telephone: "+971505773388",
  priceRange: "AED 199 - AED 4999 per month",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dubai Investment Park 2",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.9683,
    longitude: 55.1880
  },
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
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Ahmed Hassan"
      },
      datePublished: "2024-11-15",
      reviewBody: "Excellent storage facility with top-notch security and climate control. The free pickup service made everything so convenient!"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Sarah Mitchell"
      },
      datePublished: "2024-11-10",
      reviewBody: "Best storage solution in Dubai! Clean, secure, and the staff is incredibly helpful. Highly recommended!"
    }
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Security",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Climate Control",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free Pickup & Delivery",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Biometric Access",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Insurance Available",
      value: true
    }
  ]
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Self Storage Service",
  name: "Premium Storage Solutions Dubai",
  description: "Secure, climate-controlled storage units with free pickup and delivery across Dubai. Perfect for personal, business, and vehicle storage.",
  provider: {
    "@type": "Organization",
    name: "SafeStorage Dubai",
    url: "https://safestorage.ae"
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedIn: {
      "@type": "Country",
      name: "United Arab Emirates"
    }
  },
  offers: [
    {
      "@type": "Offer",
      name: "Small Storage Unit",
      description: "25-50 sq ft - Perfect for boxes, seasonal items, and small furniture",
      price: "199",
      priceCurrency: "AED",
      priceValidUntil: "2025-12-31"
    },
    {
      "@type": "Offer",
      name: "Medium Storage Unit",
      description: "50-100 sq ft - Ideal for one-bedroom apartment contents",
      price: "599",
      priceCurrency: "AED",
      priceValidUntil: "2025-12-31"
    },
    {
      "@type": "Offer",
      name: "Large Storage Unit",
      description: "150-300 sq ft - Suitable for multi-bedroom homes",
      price: "1299",
      priceCurrency: "AED",
      priceValidUntil: "2025-12-31"
    },
    {
      "@type": "Offer",
      name: "Vehicle Storage",
      description: "Secure parking for cars, motorcycles, and boats",
      price: "899",
      priceCurrency: "AED",
      priceValidUntil: "2025-12-31"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Storage Services",
    itemListElement: [
      {
        "@type": "Service",
        name: "Personal Storage",
        description: "Store household items, furniture, and personal belongings"
      },
      {
        "@type": "Service",
        name: "Business Storage",
        description: "Inventory, documents, and equipment storage for businesses"
      },
      {
        "@type": "Service",
        name: "Vehicle Storage",
        description: "Secure parking for cars, bikes, boats, and RVs"
      },
      {
        "@type": "Service",
        name: "Document Storage",
        description: "Climate-controlled storage for important documents and archives"
      }
    ]
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What sizes of storage units are available at SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer storage units ranging from 25 sq ft to over 300 sq ft. Our smallest units are perfect for storing boxes and seasonal items, while our largest units can accommodate the contents of a 4-bedroom villa. We also offer specialized vehicle storage spaces."
      }
    },
    {
      "@type": "Question",
      name: "Is the storage facility climate-controlled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our storage units are fully climate-controlled with advanced HVAC systems maintaining optimal temperature (20-25°C) and humidity levels (45-55%) year-round. This protects your belongings from Dubai's extreme heat and humidity."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer free pickup and delivery services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide complimentary pickup and delivery services across Dubai. Our professional team will collect your items from your location, transport them safely to our facility, and return them whenever you need them back."
      }
    },
    {
      "@type": "Question",
      name: "What security measures are in place at SafeStorage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our facility features state-of-the-art security including 24/7 HD CCTV surveillance, biometric access control, individual unit alarms, fire detection and suppression systems, and on-site security personnel. Only you have access to your unit."
      }
    },
    {
      "@type": "Question",
      name: "How much does storage cost at SafeStorage Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our storage units start from AED 199 per month for small units (25 sq ft) and go up to AED 2,999 for our largest units (300+ sq ft). Vehicle storage starts at AED 899 per month. We offer flexible payment plans and discounts for long-term storage."
      }
    },
    {
      "@type": "Question",
      name: "Can I access my storage unit anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have access to your storage unit during our operating hours: Monday-Saturday 8:00 AM to 8:00 PM, and Sunday 10:00 AM to 6:00 PM. For business customers, we can arrange extended access hours upon request."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide packing materials and moving assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a complete range of packing materials including boxes, bubble wrap, tape, and protective covers. Our professional team can also assist with packing and unpacking services for an additional fee."
      }
    },
    {
      "@type": "Question",
      name: "Is insurance available for stored items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive insurance options to protect your stored items. Basic coverage is included, and additional coverage can be purchased based on the value of your belongings. Our team can help you choose the right insurance plan."
      }
    }
  ]
}

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

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Self Storage Units Dubai",
  description: "Premium climate-controlled storage units in Dubai with free pickup and delivery",
  brand: {
    "@type": "Brand",
    name: "SafeStorage"
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AED",
    lowPrice: "199",
    highPrice: "2999",
    offerCount: "4"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312"
  }
}

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SafeStorage Dubai",
  url: "https://safestorage.ae",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://safestorage.ae/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}