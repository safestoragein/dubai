import { Box, Home, Building, Warehouse } from "lucide-react"

export interface StorageRoom {
  id: string
  name: string
  size: string
  description: string
  image?: string
  icon?: any
  popular?: boolean
}

export const storageRooms: StorageRoom[] = [
  {
    id: "small",
    name: "Small Room",
    size: "25 sq ft (5×5)",
    description: "Perfect for storing small furniture, boxes, and personal items.",
    icon: Box,
    image: "/cluttered-storage-nook.png",
  },
  {
    id: "medium",
    name: "Medium Room",
    size: "100 sq ft (10×10)",
    description: "Ideal for storing the contents of a 1-2 bedroom apartment.",
    icon: Home,
    image: "/cluttered-storage.png",
    popular: true,
  },
  {
    id: "large",
    name: "Large Room",
    size: "200 sq ft (10×20)",
    description: "Spacious storage for the contents of a 3-4 bedroom house.",
    icon: Building,
    image: "/expansive-storage.png",
  },
  {
    id: "extra-large",
    name: "Extra Large Room",
    size: "300 sq ft (10×30)",
    description: "Our largest units for extensive storage needs and commercial use.",
    icon: Warehouse,
    image: "/overflowing-storage.png",
  },
]
