import type { ReactNode } from "react"
import { Home, Briefcase, FileText } from "lucide-react"

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
    description: "Safe storage for furniture, appliances, and personal belongings.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TRpiMtPUFMomL5oXUMC3TrB4CUiw1p.png",
    features: [
      "Climate-controlled units",
      "24/7 security monitoring",
      "Flexible rental options",
    ],
    services: [],
    faqs: [],
  },
  {
    id: "business",
    name: "Business",
    icon: <Briefcase className="h-5 w-5" />,
    description: "Secure storage for inventory, equipment, and office supplies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKnJ8b20yY2pQCHspwelZ8idKDWKsL.png",
    features: [
      "Inventory management",
      "Flexible scaling options",
      "Business-friendly access",
    ],
    services: [],
    faqs: [],
  },
  {
    id: "document",
    name: "Document",
    icon: <FileText className="h-5 w-5" />,
    description: "Secure archiving for business and personal documents.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qeLQMWUCZMkaOPtWAdcNfZFvyhbyI.png",
    features: [
      "Climate-controlled environment",
      "Fire protection systems",
      "Quick retrieval service",
    ],
    services: [],
    faqs: [],
  },
]
