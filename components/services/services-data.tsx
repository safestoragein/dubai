import type { ReactNode } from "react"
import { Home, Briefcase, Box, FileText, Car, User } from "lucide-react"

export interface ServiceType {
  name: string
  description: string
  image: string
  features: string[]
}

export interface ServiceCategory {
  id: string
  name: string
  icon: ReactNode
  description: string
  image: string
  features: string[]
  services: ServiceType[]
  faqs: { question: string; answer: string }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "household",
    name: "Household",
    icon: <Home className="h-5 w-5" />,
    description:
      "Our household storage solutions are perfect for storing furniture, appliances, and other household items during moves, renovations, or when you need extra space at home.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
    features: [
      "Climate-controlled units to protect furniture and sensitive items",
      "Various unit sizes to accommodate different household needs",
      "24/7 security monitoring and access control",
      "Flexible short-term and long-term rental options",
      "Professional packing and moving assistance available",
    ],
    services: [
      {
        name: "Furniture Storage",
        description: "Safe storage for all types of furniture with climate control to prevent damage.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-crTYKFFWIiKEXHVJn1wM17UHNcJWEY.png",
        features: ["Climate-controlled", "Dust protection", "Various sizes"],
      },
      {
        name: "Appliance Storage",
        description: "Specialized storage for household appliances with proper handling and protection.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
        features: ["Moisture control", "Proper positioning", "Secure handling"],
      },
      {
        name: "Seasonal Item Storage",
        description: "Store your seasonal decorations, clothing, and equipment when not in use.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-crTYKFFWIiKEXHVJn1wM17UHNcJWEY.png",
        features: ["Organized labeling", "Easy access", "Long-term preservation"],
      },
    ],
    faqs: [
     
      {
        question: "Can I access my household items during storage?",
        answer:
          "Yes, you can access your stored items during our operating hours. Some premium plans offer 24/7 access.",
      },
      {
        question: "Do you provide packing materials for household storage?",
        answer:
          "Yes, we offer a range of packing materials including boxes, bubble wrap, furniture covers, and tape that you can purchase directly from us.",
      },
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: <Briefcase className="h-5 w-5" />,
    description:
      "Our business storage solutions help companies manage inventory, archive documents, store equipment, and free up valuable office space with secure, accessible options.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
    features: [
      "Inventory management solutions with barcode tracking",
      "Secure document archiving with fire protection",
      "Equipment and office furniture storage",
      "Flexible scaling options as your business grows",
      "Business-specific access hours and delivery services",
    ],
    services: [
      {
        name: "Inventory Storage",
        description: "Secure storage for your business inventory with organized tracking systems.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
        features: ["Inventory tracking", "Easy access", "Flexible space"],
      },
      {
        name: "Office Equipment Storage",
        description: "Store excess office furniture, equipment, and supplies safely and accessibly.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
        features: ["Furniture protection", "IT equipment storage", "Quick retrieval"],
      },
      {
        name: "Retail Overflow Storage",
        description: "Flexible storage solutions for seasonal inventory and retail overflow.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
        features: ["Seasonal management", "Stock rotation", "Delivery options"],
      },
    ],
    faqs: [
      {
        question: "Can I run my e-commerce business from your storage facility?",
        answer:
          "Yes you can operate directly from the unit, we offer special e-commerce packages with inventory management and shipping assistance services.",
      },
      {
        question: "Do you offer insurance for business inventory storage?",
        answer:
          "Yes, we offer various insurance options to protect your business inventory while in storage. We can customize coverage based on the value of your items.",
      },
      {
        question: "How can I manage inventory in my storage unit?",
        answer:
          "We provide inventory management systems with barcode tracking, online inventory databases, and regular reporting to help you keep track of your stored items.",
      },
    ],
  },
  {
    id: "self",
    name: "Self Storage",
    icon: <Box className="h-5 w-5" />,
    description:
      "Our self-storage units offer flexible, secure space for personal belongings with 24/7 access and various unit sizes to meet your specific needs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-crTYKFFWIiKEXHVJn1wM17UHNcJWEY.png",
    features: [
      "24/7 access to your storage unit",
      "Personal lock and key for maximum security",
      "Various unit sizes from locker to warehouse",
      "Drive-up access for easy loading and unloading",
      "Month-to-month rental options with no long-term commitment",
    ],
    services: [
      {
        name: "Small Units (5-50 sq ft)",
        description: "Perfect for storing small items, documents, or seasonal decorations.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
        features: ["Affordable", "Secure lockers", "Indoor access"],
      },
      {
        name: "Medium Units (50-150 sq ft)",
        description: "Ideal for storing contents of a 1-2 bedroom apartment or small office.",
        image: "/placeholder.svg?height=200&width=400&text=Medium+Units",
        features: ["Climate control", "Ground floor", "24/7 access"],
      },
      {
        name: "Large Units (150+ sq ft)",
        description: "Spacious units for storing household contents, large inventory, or vehicles.",
        image: "/placeholder.svg?height=200&width=400&text=Large+Units",
        features: ["Drive-up access", "High ceilings", "Commercial use"],
      },
    ],
    faqs: [
      {
        question: "How do I choose the right size self-storage unit?",
        answer:
          "Consider what you're storing, measure large items, estimate box quantities, and use our online size calculator. Our staff can also help you determine the best size for your needs.",
      },
      {
        question: "What security measures are in place for self-storage units?",
        answer:
          "Our facilities feature 24/7 CCTV surveillance, individual unit alarms, gated access with personal codes, on-site security personnel, and perimeter fencing.",
      },
      {
        question: "Can I upgrade or downgrade my unit size later?",
        answer:
          "Yes, you can easily switch to a different unit size as your needs change, subject to availability. We offer a seamless transfer process with assistance if needed.",
      },
    ],
  },
  {
    id: "document",
    name: "Document",
    icon: <FileText className="h-5 w-5" />,
    description:
      "Our document storage solutions provide secure, organized archiving for business and personal documents with proper climate control and fire protection.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
    features: [
      "Climate-controlled environment to prevent paper deterioration",
      "Advanced fire protection systems",
      "Barcode tracking and management system",
      "Confidential document handling and destruction services",
      "Quick retrieval and delivery options",
    ],
    services: [
      {
        name: "Business Document Archiving",
        description: "Secure long-term storage for business records, financial documents, and archives.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
        features: ["Compliance support", "Retrieval service", "Destruction scheduling"],
      },
      {
        name: "Legal Document Storage",
        description: "Specialized storage for legal files with chain-of-custody tracking and quick access.",
        image: "/placeholder.svg?height=200&width=400&text=Legal+Documents",
        features: ["Confidentiality", "Case organization", "Audit trails"],
      },
      {
        name: "Medical Record Storage",
        description: "HIPAA-compliant storage solutions for medical practices and healthcare providers.",
        image: "/placeholder.svg?height=200&width=400&text=Medical+Records",
        features: ["HIPAA compliance", "Secure access", "Retention management"],
      },
    ],
    faqs: [
      {
        question: "How are documents protected from fire and water damage?",
        answer:
          "Our document storage facilities feature advanced fire suppression systems, waterproof containers, elevated storage, climate control, and regular facility inspections.",
      },
      {
        question: "Can I access my documents after hours?",
        answer:
          "Yes, we offer 24/7 access options for businesses that may need emergency document retrieval. We also provide digital scanning and delivery services.",
      },
      {
        question: "Do you offer document destruction services?",
        answer:
          "Yes, we provide secure document shredding and destruction services that comply with privacy regulations, complete with certificates of destruction.",
      },
    ],
  },
  {
    id: "vehicle",
    name: "Vehicle",
    icon: <Car className="h-5 w-5" />,
    description:
      "Our vehicle storage solutions provide secure, protected space for cars with both indoor and outdoor options available.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
    features: [
      "Indoor climate-controlled storage for luxury and classic vehicles",
      "Covered and uncovered outdoor parking options",
      "24/7 security with specialized vehicle monitoring",
      "Easy access with wide driveways and ample maneuvering space",
      "Maintenance services and battery tenders available",
    ],
    services: [
      {
        name: "Car Storage",
        description: "Secure indoor and outdoor storage options for cars, with climate control available.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
        features: ["Climate control", "Dust protection", "Battery maintenance"],
      },
    ],
    faqs: [
      {
        question: "How should I prepare my car for long-term storage?",
        answer:
          "Clean it thoroughly, change the oil, top off fluids, inflate tires properly, disconnect the battery or use a tender, use a breathable car cover, and consider fuel stabilizer.",
      },
      
      {
        question: "Is indoor or outdoor vehicle storage better?",
        answer:
          "Indoor storage provides better protection from weather, dust, and UV damage, making it ideal for luxury, classic, or valuable vehicles. Outdoor storage is more economical for vehicles that can withstand weather exposure.",
      },
    ],
  },
  {
    id: "personal",
    name: "Personal",
    icon: <User className="h-5 w-5" />,
    description:
      "Our personal storage solutions help individuals store belongings during moves, travels, or when downsizing with flexible, secure options for all your personal items.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-crTYKFFWIiKEXHVJn1wM17UHNcJWEY.png",
    features: [
      "Flexible short-term and long-term storage options",
      "Various unit sizes for different personal needs",
      "Climate-controlled units for sensitive items",
      "Secure access with personal codes and monitoring",
      "Affordable rates with special discounts for long-term storage",
    ],
    services: [
      {
        name: "Student Storage",
        description: "Affordable storage solutions for students during breaks or study abroad periods.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
        features: ["Semester rates", "Small units", "Vacation specials"],
      },
      {
        name: "Travel & Expatriate Storage",
        description: "Long-term storage options for travelers and expatriates while abroad.",
        image: "/placeholder.svg?height=200&width=400&text=Travel+Storage",
        features: ["Long-term rates", "Climate control", "Remote management"],
      },
      {
        name: "Collectibles & Valuables Storage",
        description: "Specialized storage for collectibles, artwork, and valuable personal items.",
        image: "/placeholder.svg?height=200&width=400&text=Valuables+Storage",
        features: ["Extra security", "Insurance options", "Controlled environment"],
      },
    ],
    faqs: [
      {
        question: "How long can I store my personal items?",
        answer:
          "We offer flexible storage terms ranging from one month to several years. You can extend your storage period at any time, and we offer discounts for longer commitments.",
      },
      {
        question: "Are my personal items insured while in storage?",
        answer:
          "Basic insurance is included in your storage fee, but we recommend additional coverage for valuable items. We offer various insurance options based on the value of your belongings.",
      },
      {
        question: "Can someone else access my storage unit on my behalf?",
        answer:
          "Yes, you can authorize specific individuals to access your unit by adding them to your account. They will need to provide identification and follow our access protocols.",
      },
    ],
  },
]
