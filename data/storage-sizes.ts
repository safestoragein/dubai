import { Home, Building2, Briefcase, Car, Warehouse } from "lucide-react"

export interface StorageOption {
  id: string
  name: string
  size: string
  description: string
  image?: string
  icon?: any
  popular?: boolean
  type: 'household' | 'business'
  palletCount?: number
  isCustom?: boolean
}

// Household Storage Options (Closed containers - 30 SqFt Standard)
export const householdStorage: StorageOption[] = [
  {
    id: "1rk",
    name: "1 RK",
    size: "1 Container (30 SqFt)",
    description: "Perfect for studio apartment belongings and essentials.",
    icon: Home,
    image: "/pallet.png",
    palletCount: 1,
    type: "household",
  },
  {
    id: "1bhk",
    name: "1 BHK",
    size: "2-3 Containers (60-90 SqFt)",
    description: "Ideal for 1 bedroom apartment furniture and belongings.",
    icon: Home,
    image: "/pallet.png",
    palletCount: 3,
    type: "household",
  },
  {
    id: "2bhk",
    name: "2 BHK",
    size: "4-5 Containers (120-150 SqFt)",
    description: "Spacious storage for 2 bedroom apartment contents.",
    icon: Building2,
    image: "/pallet.png",
    palletCount: 5,
    popular: true,
    type: "household",
  },
  {
    id: "3bhk",
    name: "3 BHK",
    size: "8-9 Containers (240-270 SqFt)",
    description: "Comprehensive storage for 3 bedroom house belongings.",
    icon: Building2,
    image: "/pallet.png",
    palletCount: 9,
    type: "household",
  },
  {
    id: "above-3bhk",
    name: "> 3 BHK",
    size: "Customized Plan",
    description: "Click and fill your details below for a customized storage solution.",
    icon: Warehouse,
    image: "",
    isCustom: true,
    type: "household",
  },
]

// Business Storage Options (Open shared space)
export const businessStorage: StorageOption[] = [
  {
    id: "small-business",
    name: "Small Business",
    size: "50-100 sq ft",
    description: "Perfect for small business inventory and supplies.",
    icon: Briefcase,
    image: "/organized-warehouse-space.png",
    type: "business",
  },
  {
    id: "medium-business",
    name: "Medium Business",
    size: "100-300 sq ft",
    description: "Ideal for growing business storage needs.",
    icon: Building2,
    image: "/varied-storage-row.png",
    popular: true,
    type: "business",
  },
  {
    id: "large-business",
    name: "Large Business",
    size: "300+ sq ft",
    description: "Spacious storage for extensive business operations.",
    icon: Warehouse,
    image: "/expansive-storage.png",
    type: "business",
  },
]

// Combined storage options for backward compatibility
export const storageRooms: StorageOption[] = [...householdStorage, ...businessStorage]
