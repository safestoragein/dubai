"use client"

import React, { useState, useEffect } from "react"
import { useNavigationGuard } from "@/components/providers/navigation-guard"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import WorkingPlacesAutocomplete from "@/components/ui/working-places-autocomplete"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  User, 
  Package, 
  DollarSign, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Home,
  Sofa,
  Shirt,
  BookOpen,
  Laptop,
  Baby,
  Bike,
  Box,
  Clock,
  Shield,
  Truck,
  Users,
  Package2,
  Warehouse,
  Building2,
  Briefcase,
  Search,
  X,
  Plus,
  Minus,
  Zap,
  Wind,
  Monitor,
  Fish,
  Armchair,
  Car,
  Gamepad2,
  Utensils,
  Tv,
  Volume2,
  Dumbbell,
  Bath,
  Shirt as ShirtIcon,
  Bed,
  ChefHat,
  Coffee,
  Refrigerator,
  Microwave,
  WashingMachine,
  Settings,
  ChevronRight,
  Grid3x3,
  List,
  Filter,
  Eye,
  Star,
  TrendingUp,
  CheckCircle2,
  Circle,
  CalendarDays
} from "lucide-react"
import { toast } from "sonner"
import confetti from "canvas-confetti"

interface ApiItem {
  storage_item_name: string
  aed_item_points: string
  storage_item_point: string // New column for storage points
}

interface ApiResponse {
  status: boolean
  data: ApiItem[]
}

interface SelectedItem {
  name: string
  quantity: number
  price: number
  storagePoints: number // Points per item
}

interface FormData {
  fullName: string
  email: string
  phone: string
  address: string
  floor: string
  liftAvailable: string
  storageType: "short-term" | "long-term" | "business"
  selectedItems: SelectedItem[]
  storageOption?: "closed" | "shared"
  // Added fields for saved data
  customerId?: number
  quotationId?: number
  totalPoints?: number
  totalPallets?: number
  totalSqft?: number
  closedPrice?: number
  sharedPrice?: number
}

// Storage calculation functions
const calculateTotalPoints = (selectedItems: SelectedItem[]): number => {
  return selectedItems.reduce((total, item) => {
    return total + (item.storagePoints * item.quantity)
  }, 0)
}

const calculatePallets = (totalPoints: number): number => {
  // 13 points = 1 pallet
  return Math.ceil(totalPoints / 13)
}

const calculateSquareFeet = (pallets: number): number => {
  // 1 pallet = 16 sqft
  return pallets * 16
}

// Shared space pricing functions
const calculateSharedSpacePricing = (selectedItems: SelectedItem[]) => {
  const totalPoints = calculateTotalPoints(selectedItems)
  const pallets = calculatePallets(totalPoints)
  const calculatedSqft = calculateSquareFeet(pallets)
  
  // Minimum 30 sqft for shared space
  const chargeableSqft = Math.max(calculatedSqft, 30)
  
  // 20 AED per sqft
  const pricePerSqft = 20
  const totalCost = chargeableSqft * pricePerSqft
  
  return {
    calculatedSqft,
    chargeableSqft,
    pricePerSqft,
    totalCost,
    isMinimumApplied: calculatedSqft < 30
  }
}

// Closed space pricing functions
const calculateClosedSpacePricing = (selectedItems: SelectedItem[]) => {
  const totalPoints = calculateTotalPoints(selectedItems)
  const pallets = calculatePallets(totalPoints)
  const calculatedSqft = calculateSquareFeet(pallets)
  
  // Each container is 30 sqft
  const containerSize = 30
  const pricePerContainer = 700
  
  // Calculate number of containers needed (round up)
  const containersNeeded = Math.ceil(calculatedSqft / containerSize)
  
  // Total sqft provided (containers * 30 sqft each)
  const totalProvidedSqft = containersNeeded * containerSize
  
  // Total cost
  const totalCost = containersNeeded * pricePerContainer
  
  return {
    calculatedSqft,
    containersNeeded,
    containerSize,
    totalProvidedSqft,
    pricePerContainer,
    totalCost
  }
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  floor: "",
  liftAvailable: "",
  storageType: "long-term",
  selectedItems: [],
}

// Clean, professional categories with subtle colors
const categories = [
  { id: "all", name: "All Items", icon: Grid3x3, color: "blue" },
  { id: "furniture", name: "Furniture", icon: Sofa, color: "indigo" },
  { id: "electronics", name: "Electronics", icon: Tv, color: "purple" },
  { id: "bedroom", name: "Bedroom", icon: Bed, color: "pink" },
  { id: "kitchen", name: "Kitchen", icon: Utensils, color: "orange" },
  { id: "appliances", name: "Appliances", icon: Refrigerator, color: "emerald" },
  { id: "sports", name: "Sports & Fitness", icon: Dumbbell, color: "red" },
  { id: "office", name: "Office", icon: Briefcase, color: "slate" },
  { id: "storage", name: "Boxes", icon: Box, color: "amber" },
]

// Function to categorize items
const getCategoryForItem = (itemName: string): string => {
  const name = itemName.toLowerCase()
  
  if (name.includes('sofa') || name.includes('chair') || name.includes('table') || name.includes('cupboard') || name.includes('almirah') || name.includes('wardrobe') || name.includes('bench') || name.includes('stool')) {
    return 'furniture'
  }
  if (name.includes('tv') || name.includes('computer') || name.includes('laptop') || name.includes('monitor') || name.includes('speaker') || name.includes('amplifier') || name.includes('printer') || name.includes('camera')) {
    return 'electronics'
  }
  if (name.includes('bed') || name.includes('mattress') || name.includes('pillow') || name.includes('blanket') || name.includes('quilt')) {
    return 'bedroom'
  }
  if (name.includes('kitchen') || name.includes('utensils') || name.includes('dinner') || name.includes('microwave') || name.includes('oven') || name.includes('mixer') || name.includes('grinder') || name.includes('cooker')) {
    return 'kitchen'
  }
  if (name.includes('refrigerator') || name.includes('fridge') || name.includes('washing machine') || name.includes('ac') || name.includes('air condition') || name.includes('geyser') || name.includes('heater') || name.includes('dryer')) {
    return 'appliances'
  }
  if (name.includes('gym') || name.includes('treadmill') || name.includes('cycle') || name.includes('sports') || name.includes('fitness') || name.includes('dumbbell') || name.includes('exercise')) {
    return 'sports'
  }
  if (name.includes('office') || name.includes('study') || name.includes('desk') || name.includes('computer table')) {
    return 'office'
  }
  if (name.includes('box') || name.includes('trunk') || name.includes('suitcase') || name.includes('bag') || name.includes('container')) {
    return 'storage'
  }
  
  return 'all'
}

// Icon mapping function (enhanced with more specific mappings)
const getItemIcon = (itemName: string) => {
  const name = itemName.toLowerCase()
  
  // Bedroom items
  if (name.includes('bed') || name.includes('cot')) return Bed
  if (name.includes('mattress')) return Bed
  if (name.includes('wardrobe') || name.includes('almirah') || name.includes('cupboard')) return Home
  if (name.includes('dressing')) return Home
  
  // Living room items
  if (name.includes('sofa') || name.includes('couch') || name.includes('settee')) return Sofa
  if (name.includes('chair') || name.includes('recliner')) return Armchair
  if (name.includes('bench') || name.includes('stool')) return Armchair
  if (name.includes('bean bag')) return Armchair
  if (name.includes('table')) return Home
  if (name.includes('tv') || name.includes('television') || name.includes('led')) return Tv
  if (name.includes('stand') && name.includes('tv')) return Tv
  if (name.includes('aquarium')) return Bath
  if (name.includes('bar') && (name.includes('cabinet') || name.includes('counter'))) return Coffee
  if (name.includes('bar chair')) return Armchair
  if (name.includes('bamboo') || name.includes('swing')) return Home
  
  // Audio/Video equipment
  if (name.includes('amplifier') || name.includes('amp') || name.includes('receiver')) return Volume2
  if (name.includes('speaker') || name.includes('music') || name.includes('sound')) return Volume2
  if (name.includes('home theater') || name.includes('home theatre')) return Volume2
  
  // Kitchen appliances
  if (name.includes('refrigerator') || name.includes('fridge') || name.includes('freezer')) return Refrigerator
  if (name.includes('washing machine') || name.includes('washer')) return WashingMachine
  if (name.includes('dishwasher')) return WashingMachine
  if (name.includes('microwave') || name.includes('oven')) return Microwave
  if (name.includes('mixer') || name.includes('grinder') || name.includes('blender')) return Utensils
  if (name.includes('cooker') || name.includes('stove') || name.includes('gas')) return Utensils
  if (name.includes('kitchen') || name.includes('utensils')) return Utensils
  if (name.includes('air fryer') || name.includes('fryer')) return ChefHat
  if (name.includes('coffee') || name.includes('kettle')) return Coffee
  if (name.includes('barbeque') || name.includes('barbecue') || name.includes('bbq')) return ChefHat
  if (name.includes('grill')) return ChefHat
  
  // Climate control
  if (name.includes('air purifier') || name.includes('purifier')) return Wind
  if (name.includes('ac') || name.includes('air condition') || name.includes('split ac')) return Wind
  if (name.includes('cooler') || name.includes('fan')) return Wind
  if (name.includes('heater') || name.includes('geyser')) return Zap
  
  // Electronics
  if (name.includes('laptop')) return Laptop
  if (name.includes('computer') || name.includes('desktop') || name.includes('pc')) return Monitor
  if (name.includes('monitor') || name.includes('screen') || name.includes('display')) return Monitor
  if (name.includes('printer') || name.includes('scanner')) return Settings
  if (name.includes('ups') || name.includes('inverter')) return Zap
  if (name.includes('router') || name.includes('modem')) return Settings
  
  // Exercise & Sports
  if (name.includes('gym') || name.includes('fitness') || name.includes('exercise')) return Dumbbell
  if (name.includes('dumbbell') || name.includes('weight')) return Dumbbell
  if (name.includes('treadmill') || name.includes('elliptical')) return Dumbbell
  if (name.includes('cycle') || name.includes('bike') || name.includes('bicycle')) return Bike
  if (name.includes('badminton') || name.includes('tennis') || name.includes('racket')) return Gamepad2
  if (name.includes('cricket') || name.includes('football') || name.includes('basketball')) return Gamepad2
  if (name.includes('sports')) return Gamepad2
  
  // Vehicles
  if (name.includes('car') || name.includes('vehicle')) return Car
  if (name.includes('motorcycle') || name.includes('scooter')) return Bike
  
  // Kids items
  if (name.includes('pram') || name.includes('walker')) return Baby
  if (name.includes('baby') || name.includes('crib')) return Baby
  if (name.includes('toy') || name.includes('play')) return Baby
  
  // Books and office
  if (name.includes('book') || name.includes('library')) return BookOpen
  if (name.includes('desk') || name.includes('office')) return BookOpen
  
  // Clothing
  if (name.includes('cloth') || name.includes('shirt') || name.includes('dress')) return ShirtIcon
  if (name.includes('shoe') || name.includes('footwear')) return ShirtIcon
  
  // Storage items
  if (name.includes('box') || name.includes('trunk') || name.includes('suitcase')) return Box
  if (name.includes('bag') || name.includes('luggage')) return Box
  if (name.includes('container') || name.includes('storage')) return Box
  
  return Package // Default icon for unmatched items
}

// Get category color classes
const getCategoryColors = (color: string, isSelected: boolean = false) => {
  const colors: Record<string, { bg: string; border: string; text: string; hover: string; selected: string; selectedBg: string; selectedBorder: string }> = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      hover: "hover:bg-blue-100 hover:border-blue-300",
      selected: "bg-blue-100 border-blue-500",
      selectedBg: "bg-blue-100",
      selectedBorder: "border-blue-500"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-700",
      hover: "hover:bg-indigo-100 hover:border-indigo-300",
      selected: "bg-indigo-100 border-indigo-500",
      selectedBg: "bg-indigo-100",
      selectedBorder: "border-indigo-500"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      hover: "hover:bg-purple-100 hover:border-purple-300",
      selected: "bg-purple-100 border-purple-500",
      selectedBg: "bg-purple-100",
      selectedBorder: "border-purple-500"
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      hover: "hover:bg-pink-100 hover:border-pink-300",
      selected: "bg-pink-100 border-pink-500",
      selectedBg: "bg-pink-100",
      selectedBorder: "border-pink-500"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
      hover: "hover:bg-orange-100 hover:border-orange-300",
      selected: "bg-orange-100 border-orange-500",
      selectedBg: "bg-orange-100",
      selectedBorder: "border-orange-500"
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      hover: "hover:bg-emerald-100 hover:border-emerald-300",
      selected: "bg-emerald-100 border-emerald-500",
      selectedBg: "bg-emerald-100",
      selectedBorder: "border-emerald-500"
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      hover: "hover:bg-red-100 hover:border-red-300",
      selected: "bg-red-100 border-red-500",
      selectedBg: "bg-red-100",
      selectedBorder: "border-red-500"
    },
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      text: "text-slate-700",
      hover: "hover:bg-slate-100 hover:border-slate-300",
      selected: "bg-slate-100 border-slate-500",
      selectedBg: "bg-slate-100",
      selectedBorder: "border-slate-500"
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-700",
      hover: "hover:bg-amber-100 hover:border-amber-300",
      selected: "bg-amber-100 border-amber-500",
      selectedBg: "bg-amber-100",
      selectedBorder: "border-amber-500"
    }
  }
  return colors[color] || colors.blue
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiItems, setApiItems] = useState<ApiItem[]>([])
  const [filteredItems, setFilteredItems] = useState<ApiItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoadingItems, setIsLoadingItems] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showGuide, setShowGuide] = useState(false)
  const [guideStep, setGuideStep] = useState(1)
  const [showPickupDateModal, setShowPickupDateModal] = useState(false)
  const [selectedPickupDate, setSelectedPickupDate] = useState("")
  const [selectedStorageOption, setSelectedStorageOption] = useState<"closed" | "shared" | null>(null)
  
  const { setNavigationGuard, setFormData: setGuardFormData, setCurrentStep: setGuardCurrentStep } = useNavigationGuard()

  const steps = [
    { number: 1, title: "Customer Details", icon: User },
    { number: 2, title: "Select Items", icon: Package },
    { number: 3, title: "View Quote", icon: DollarSign },
  ]

  // Auto-restore saved form data on mount
  useEffect(() => {
    const savedForm = localStorage.getItem('safestorage_quote_data')
    const savedStep = localStorage.getItem('safestorage_quote_step')
    
    if (savedForm && savedStep) {
      try {
        const parsedForm = JSON.parse(savedForm)
        const parsedStep = parseInt(savedStep)
        
        // Only restore if step is 1 or 2 (not 3)
        if (parsedStep < 3) {
          // Show a toast asking if user wants to restore
          toast.info(
            <div>
              <p className="font-semibold mb-1">Welcome back! 👋</p>
              <p className="text-sm mb-2">We found your saved progress from Step {parsedStep}. Continue where you left off?</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setFormData(parsedForm)
                    setCurrentStep(parsedStep)
                    toast.success("Progress restored!")
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Yes, restore
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('safestorage_quote_data')
                    localStorage.removeItem('safestorage_quote_step')
                    toast.dismiss()
                  }}
                  className="px-3 py-1 bg-slate-200 text-slate-700 rounded text-sm hover:bg-slate-300 transition-colors"
                >
                  Start fresh
                </button>
              </div>
            </div>,
            {
              duration: 15000,
              id: 'restore-progress'
            }
          )
        } else {
          // Clear data if step 3 was saved (shouldn't happen but just in case)
          localStorage.removeItem('safestorage_quote_data')
          localStorage.removeItem('safestorage_quote_step')
        }
      } catch (error) {
        console.error('Error parsing saved form data:', error)
        // Clear corrupted data
        localStorage.removeItem('safestorage_quote_data')
        localStorage.removeItem('safestorage_quote_step')
      }
    }
  }, [])

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoadingItems(true)
      try {
        const response = await fetch('https://safestorage.in/back/app/dubai_items_list')
        const data: ApiResponse = await response.json()
        if (data.status && data.data) {
          setApiItems(data.data)
          setFilteredItems(data.data)
        }
      } catch (error) {
        console.error('Error fetching items:', error)
        toast.error("Failed to load items. Please try again.")
      } finally {
        setIsLoadingItems(false)
      }
    }

    fetchItems()
  }, [])

  // Filter items based on search and category
  useEffect(() => {
    let filtered = apiItems

    // If search term exists, search across ALL items regardless of category
    if (searchTerm) {
      filtered = apiItems.filter(item =>
        item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      // When searching, automatically switch to "all" category to show all results
      if (selectedCategory !== 'all') {
        setSelectedCategory('all')
      }
    } else {
      // Only filter by category when there's no search term
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(item => getCategoryForItem(item.storage_item_name) === selectedCategory)
      }
    }

    setFilteredItems(filtered)
  }, [searchTerm, apiItems, selectedCategory])

  const calculatePrice = () => {
    let basePrice = 0
    
    formData.selectedItems.forEach((selectedItem) => {
      basePrice += selectedItem.price * selectedItem.quantity
    })

    const multiplier = formData.storageType === "long-term" ? 0.85 : 
                      formData.storageType === "business" ? 1.2 : 1

    const finalPrice = Math.round(basePrice * multiplier)
    const monthlyPrice = Math.round(finalPrice / 30)
    const savings = formData.storageType === "long-term" ? Math.round(basePrice * 0.15) : 0

    return { finalPrice, monthlyPrice, basePrice, savings }
  }

  const handleNext = async () => {
    if (currentStep === 1 && !validateStep1()) {
      return
    }
    if (currentStep === 2 && !validateStep2()) {
      return
    }

    // If moving from Step 2 to Step 3, save all data to database first
    if (currentStep === 2) {
      console.log('🚀 Moving from Step 2 to Step 3 - Saving data to database...')
      setIsSubmitting(true)
      
      try {
        // Calculate totals for both storage options
        const totalPoints = calculateTotalPoints(formData.selectedItems)
        const totalPallets = calculatePallets(totalPoints)
        const totalSqft = calculateSquareFeet(totalPallets)
        const closedPrice = calculateClosedSpacePricing(formData.selectedItems).totalCost
        const sharedPrice = calculateSharedSpacePricing(formData.selectedItems).totalCost

        // Step 1: Insert/Check Customer
        console.log('💾 Step 1: Inserting customer...')
        const customerResponse = await fetch("https://safestorage.in/back/app/insert_customer_dubai", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            customer_name: formData.fullName,
            customer_email: formData.email,
            customer_contact1: formData.phone,
            pickup_address: formData.address,
          }),
        })

        const customerResult = await customerResponse.json()
        console.log('✅ Customer API Response:', customerResult)

        if (!customerResult.status) {
          throw new Error(customerResult.message || "Failed to save customer data")
        }

        let customerId = customerResult.data.customer_id || customerResult.data.id

        if (!customerId) {
          console.log('Using timestamp ID as fallback')
          customerId = Date.now()
        }

        console.log('👤 Using customer ID:', customerId)
        const finalCustomerId = customerId

        // Step 2: Insert Quotation with both pricing options
        console.log('💾 Step 2: Inserting quotation with dual pricing...')
        
        const quotationResponse = await fetch("https://safestorage.in/back/app/insert_quotation_dubai", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            customer_id: finalCustomerId.toString(),
            closed_storage_price: closedPrice.toString(), // storage_price field = closed price
            shared_storage_price: sharedPrice.toString(), // shared_storage_price field = shared price
            selected_storage_type: '', // Will be set later when user selects
            lift: formData.liftAvailable,
            floor: formData.floor,
            total_sqft: totalSqft.toString(),
            total_points: totalPoints.toString(),
            total_pallets: totalPallets.toString(),
          }),
        })

        // Debug the raw response first
        const quotationText = await quotationResponse.text()
        console.log('🔍 Raw Quotation Response:', quotationText)
        console.log('🔍 Response Status:', quotationResponse.status)
        console.log('🔍 Response Headers:', Object.fromEntries(quotationResponse.headers.entries()))
        
        let quotationResult
        try {
          quotationResult = JSON.parse(quotationText)
          console.log('✅ Parsed Quotation API Response:', quotationResult)
        } catch (parseError) {
          console.error('❌ JSON Parse Error:', parseError)
          console.error('❌ Raw response that failed to parse:', quotationText)
          throw new Error(`Invalid JSON response from quotation API: ${quotationText.substring(0, 200)}...`)
        }

        if (!quotationResult.status) {
          throw new Error(quotationResult.message || "Failed to save quotation data")
        }

        const quotationId = quotationResult.data.quotation_id
        console.log('📋 Quotation ID:', quotationId)

        // Step 3: Insert Selected Items
        console.log('💾 Step 3: Inserting items...')
        const itemsResponse = await fetch("https://safestorage.in/back/app/insert_quotation_items_dubai", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            quotation_id: quotationId.toString(),
            customer_id: finalCustomerId.toString(),
            selected_items: JSON.stringify(formData.selectedItems.map(item => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              storagePoints: item.storagePoints
            }))),
          }),
        })

        const itemsResult = await itemsResponse.json()
        console.log('✅ Items API Response:', itemsResult)

        if (!itemsResult.status) {
          throw new Error(itemsResult.message || "Failed to save items data")
        }

        // Save IDs to state for later use
        setFormData(prev => ({
          ...prev,
          customerId: finalCustomerId,
          quotationId: quotationId,
          totalPoints,
          totalPallets,
          totalSqft,
          closedPrice,
          sharedPrice
        }))

        console.log('🎉 All data saved successfully!')
        toast.success('Quote data saved successfully!')
        
      } catch (error) {
        console.error('❌ Error saving data:', error)
        toast.error(error.message || "Failed to save data. Please try again.")
        setIsSubmitting(false)
        return // Don't proceed to next step if save fails
      } finally {
        setIsSubmitting(false)
      }
    }

    setCurrentStep(currentStep + 1)
    // Scroll to top when moving to next step
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Debug effect to track showGuide changes
  useEffect(() => {
    console.log('showGuide state changed to:', showGuide)
  }, [showGuide])

  // Auto-save form data to localStorage (steps 1 and 2 only)
  useEffect(() => {
    if (currentStep < 3) {
      // Only save if there's meaningful data
      const hasData = formData.fullName || formData.email || formData.phone || formData.address || formData.selectedItems.length > 0
      
      if (hasData) {
        // Add a small delay to avoid excessive saves during rapid typing
        const timeoutId = setTimeout(() => {
          localStorage.setItem('safestorage_quote_data', JSON.stringify(formData))
          localStorage.setItem('safestorage_quote_step', currentStep.toString())
          console.log('Auto-saved form data for step:', currentStep)
        }, 500) // 500ms delay
        
        return () => clearTimeout(timeoutId)
      }
    }
  }, [formData, currentStep])

  // Track form interactions and update navigation guard
  useEffect(() => {
    const hasChanges = (formData.fullName || formData.email || formData.phone || formData.selectedItems.length > 0) && currentStep < 3
    setNavigationGuard(hasChanges)
    setGuardFormData(formData)
    setGuardCurrentStep(currentStep)
  }, [formData, currentStep, setNavigationGuard, setGuardFormData, setGuardCurrentStep])


  // Show guide when entering step 2 and scroll to top
  useEffect(() => {
    // Scroll to top when step changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    if (currentStep === 2) {
      // Check if guide has been shown before (using localStorage)
      const guideShown = localStorage.getItem('itemSelectionGuideShown')
      console.log('Step 2 reached, guide shown before:', guideShown) // Debug log
      console.log('Current showGuide state:', showGuide) // Debug log
      
      // Only show guide if it hasn't been shown before
      if (!guideShown || guideShown !== 'true') {
        console.log('Guide should be shown, setting timeout...') // Debug log
        // Show guide after a short delay to ensure page has loaded
        const timer = setTimeout(() => {
          console.log('Timeout fired, setting showGuide to true') // Debug log
          setShowGuide(true)
          setGuideStep(1)
          console.log('Guide state updated') // Debug log
        }, 1200) // Increased delay to ensure page render
        
        // Cleanup timer on unmount
        return () => clearTimeout(timer)
      } else {
        console.log('Guide already shown (value: ' + guideShown + '), skipping') // Debug log
      }
    } else {
      console.log('Not on step 2, hiding guide') // Debug log
      // Hide guide when leaving step 2
      setShowGuide(false)
      setGuideStep(1) // Reset to step 1 for next time
    }
  }, [currentStep])

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
    // Scroll to top when moving to previous step
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.floor || !formData.liftAvailable) {
      toast.error("Please fill in all required fields")
      return false
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address")
      return false
    }
    return true
  }

  const validateStep2 = () => {
    if (formData.selectedItems.length === 0) {
      toast.error("Please select at least one item")
      return false
    }
    return true
  }

  const handleStorageSelection = (storageOption: "closed" | "shared") => {
    console.log('DEBUG: Storage option selected:', storageOption)
    setSelectedStorageOption(storageOption)
    setShowPickupDateModal(true)
  }

  const handleSubmitWithDate = async () => {
    console.log('🚀 handleSubmitWithDate called!')
    console.log('📋 Form Data:', formData)
    console.log('📅 Selected Pickup Date:', selectedPickupDate)
    console.log('🏪 Selected Storage Option:', selectedStorageOption)
    
    if (!selectedPickupDate) {
      console.error('❌ No pickup date selected')
      toast.error("Please select a pickup date")
      return
    }

    if (!selectedStorageOption) {
      console.error('❌ No storage option selected')
      toast.error("Please select a storage option")
      return
    }

    if (!formData.quotationId) {
      console.error('❌ No quotation ID found - data was not saved in step 2')
      toast.error("Quote data not found. Please go back and try again.")
      return
    }

    console.log('✅ All validation passed. Updating final quote price...')
    setIsSubmitting(true)
    
    try {
      // Get the final price based on selected storage option
      const finalPrice = selectedStorageOption === 'closed' 
        ? formData.closedPrice
        : formData.sharedPrice

      console.log('💰 Final price for', selectedStorageOption, 'storage:', finalPrice)
      
      // Update the quotation with final selected price and storage type
      console.log('📝 Updating quotation with selected storage type...')
      const updateResponse = await fetch("https://safestorage.in/back/app/insert_quotation_dubai", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          customer_id: formData.customerId!.toString(),
          storage_price: finalPrice!.toString(),
          closed_storage_price: formData.closedPrice!.toString(),
          shared_storage_price: formData.sharedPrice!.toString(),
          selected_storage_type: selectedStorageOption,
          lift: formData.liftAvailable,
          floor: formData.floor,
          total_sqft: formData.totalSqft!.toString(),
          total_points: formData.totalPoints!.toString(),
          total_pallets: formData.totalPallets!.toString(),
        }),
      })
      
      const updateResult = await updateResponse.json()
      console.log('✅ Price update response:', updateResult)
      
      // Save complete form data to localStorage
      const completeFormData = {
        ...formData,
        pickupDate: selectedPickupDate,
        storageOption: selectedStorageOption,
        finalPrice,
        submissionTimestamp: new Date().toISOString()
      }
      localStorage.setItem('safestorage_complete_quote', JSON.stringify(completeFormData))
      
      // Clear form data from localStorage
      localStorage.removeItem('safestorage_quote_data')
      localStorage.removeItem('safestorage_quote_step')
      console.log('🧹 Cleared form data from localStorage')
      
      toast.success(`Quote #${formData.quotationId} confirmed! Redirecting to payment...`)
      
      setTimeout(() => {
        // Redirect to payment with the final price
        window.location.href = `https://payment.safestorage.ae/checkout?amount=${finalPrice}&quotationId=${formData.quotationId}`
      }, 2000)

    } catch (error) {
      console.error('❌ Error updating quote:', error)
      toast.error("Failed to finalize quote. Please try again.")
    } finally {
      setIsSubmitting(false)
      setShowPickupDateModal(false)
    }
  }

  const toggleItemSelection = (item: ApiItem) => {
    const existingItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
    
    if (existingItem) {
      setFormData({
        ...formData,
        selectedItems: formData.selectedItems.filter(si => si.name !== item.storage_item_name)
      })
    } else {
      const newItem: SelectedItem = {
        name: item.storage_item_name,
        quantity: 1,
        price: parseInt(item.aed_item_points),
        storagePoints: parseInt(item.storage_item_point || '0') // Add storage points
      }
      setFormData({
        ...formData,
        selectedItems: [...formData.selectedItems, newItem]
      })
    }
  }

  const updateItemQuantity = (itemName: string, delta: number) => {
    const newItems = [...formData.selectedItems]
    const itemIndex = newItems.findIndex(si => si.name === itemName)
    
    if (itemIndex !== -1) {
      newItems[itemIndex].quantity = Math.max(1, newItems[itemIndex].quantity + delta)
      setFormData({ ...formData, selectedItems: newItems })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-800 mb-2"
            >
              Get Storage Quote
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600"
            >
              Quick estimate in 3 easy steps
            </motion.p>
          </div>
          
          {/* Modern Step Indicator */}
          <div className="flex items-center justify-center mt-6 mb-4">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => {
                const isCompleted = step.number < currentStep || (step.number === 3 && currentStep === 3)
                const isCurrent = step.number === currentStep && step.number !== 3
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isCompleted ? "bg-emerald-500 text-white" :
                      isCurrent ? "bg-blue-600 text-white" :
                      "bg-slate-200 text-slate-500"
                    }`}>
                      {isCompleted ? "✓" : step.number}
                      {isCurrent && (
                        <div className="absolute -inset-1 bg-blue-600 rounded-full opacity-30 animate-pulse"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className={`text-sm font-medium ${
                        isCompleted ? "text-emerald-600" : 
                        isCurrent ? "text-blue-600" : "text-slate-500"
                      }`}>
                        {step.title}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-px mx-4 ${isCompleted || (step.number === 2 && currentStep === 3) ? "bg-emerald-500" : "bg-slate-300"}`}></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Customer Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Contact Information</h2>
                  <p className="text-slate-600">We'll need these details to process your storage request</p>
                </div>

                <div className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">Full Name *</Label>
                      <Input
                        placeholder="Ahmed Al-Mansouri"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">Phone Number *</Label>
                      <Input
                        type="tel"
                        placeholder="+971 50 577 3388"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">Email Address *</Label>
                    <Input
                      type="email"
                      placeholder="ahmed.mansouri@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                    />
                  </div>

                  {/* Address Section */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Pickup Location</h3>
                    <div className="space-y-4">
                      <WorkingPlacesAutocomplete
                        label="Complete Address *"
                        placeholder="Villa 123, Dubai Marina, Dubai, UAE"
                        value={formData.address}
                        onChange={(value) => setFormData({ ...formData, address: value })}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">Floor Level *</Label>
                          <Select 
                            value={formData.floor} 
                            onValueChange={(value) => setFormData({ ...formData, floor: value })}
                          >
                            <SelectTrigger className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-lg">
                              <SelectValue placeholder="Select floor" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basement">Basement</SelectItem>
                              <SelectItem value="ground">Ground Floor</SelectItem>
                              <SelectItem value="1">1st Floor</SelectItem>
                              <SelectItem value="2">2nd Floor</SelectItem>
                              <SelectItem value="3">3rd Floor</SelectItem>
                              <SelectItem value="4">4th Floor</SelectItem>
                              <SelectItem value="5">5th Floor</SelectItem>
                              <SelectItem value=">10">10+ Floors</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">Elevator Available? *</Label>
                          <Select 
                            value={formData.liftAvailable} 
                            onValueChange={(value) => setFormData({ ...formData, liftAvailable: value })}
                          >
                            <SelectTrigger className="h-12 border-2 border-slate-200 focus:border-blue-500 rounded-lg">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, elevator available</SelectItem>
                              <SelectItem value="no">No, stairs only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Step 2: Modern Item Selection with Fixed Height Scroll */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 relative"
              >
                {/* Onboarding Guide Overlay */}
                {showGuide && (
                  <div className="fixed inset-0 bg-black/60" style={{ zIndex: 9999 }}>
                    {/* Guide Tooltip Container - positioned relative to highlighted elements */}
                    <div className="relative w-full h-full">
                      {guideStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-6 w-80" style={{ zIndex: 10001 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">Search for Items</h4>
                              <p className="text-sm text-slate-600">Use the search bar to quickly find specific items you want to store.</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={() => {
                                setShowGuide(false)
                                localStorage.setItem('itemSelectionGuideShown', 'true')
                              }}
                              className="text-sm text-slate-500 hover:text-slate-700"
                            >
                              Skip tour
                            </button>
                            <button
                              onClick={() => setGuideStep(2)}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
                            >
                              Next
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {guideStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-48 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-6 w-80" style={{ zIndex: 10001 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">Filter by Category</h4>
                              <p className="text-sm text-slate-600">Click on category tabs to filter items by type like Furniture, Electronics, etc.</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={() => setGuideStep(1)}
                              className="text-sm text-slate-500 hover:text-slate-700"
                            >
                              Back
                            </button>
                            <button
                              onClick={() => setGuideStep(3)}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
                            >
                              Next
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {guideStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-80 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl p-6 w-80" style={{ zIndex: 10001 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">Browse & Select Items</h4>
                              <p className="text-sm text-slate-600">Scroll through items and click to select. The scrollable area shows 8 items at a time.</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={() => setGuideStep(2)}
                              className="text-sm text-slate-500 hover:text-slate-700"
                            >
                              Back
                            </button>
                            <button
                              onClick={() => setGuideStep(4)}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
                            >
                              Next
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {guideStep === 4 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-80 right-10 bg-white rounded-lg shadow-2xl p-6 w-80" style={{ zIndex: 10001 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">Adjust Quantities</h4>
                              <p className="text-sm text-slate-600">After selecting an item, use +/- buttons to adjust quantity. Selected items appear in the sidebar.</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <button
                              onClick={() => setGuideStep(3)}
                              className="text-sm text-slate-500 hover:text-slate-700"
                            >
                              Back
                            </button>
                            <button
                              onClick={() => setGuideStep(5)}
                              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium"
                            >
                              Next
                            </button>
                          </div>
                        </motion.div>
                      )}
                      
                      {guideStep === 5 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-6 w-80" style={{ zIndex: 10001 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">✓</div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">You're Ready!</h4>
                              <p className="text-sm text-slate-600">Click Continue when you've selected all items. You can always come back to modify your selection.</p>
                            </div>
                          </div>
                          <div className="flex justify-end items-center mt-4">
                            <button
                              onClick={() => {
                                setShowGuide(false)
                                localStorage.setItem('itemSelectionGuideShown', 'true')
                              }}
                              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm font-medium"
                            >
                              Start Selecting
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Help Button */}
                <button
                  onClick={() => {
                    setShowGuide(true)
                    setGuideStep(1)
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors z-10"
                  title="Show guide"
                >
                  <span className="text-sm font-bold">?</span>
                </button>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Select Your Items</h2>
                  <p className="text-slate-600">Choose the items you want to store. You can adjust quantities after selection.</p>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className={`flex-1 relative ${showGuide && guideStep === 1 ? 'ring-4 ring-blue-500 ring-offset-2 rounded-lg' : ''}`}>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search for items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10 h-11 border-2 border-slate-200 focus:border-blue-500 rounded-lg"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                      <Package className="w-5 h-5" />
                      <span className="font-semibold">{formData.selectedItems.length} items selected</span>
                    </div>
                  </div>
                </div>

                {/* Search Active Alert */}
                {searchTerm && (
                  <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-amber-600" />
                      <span className="text-sm text-amber-800">
                        Searching all categories for "<span className="font-semibold">{searchTerm}</span>"
                      </span>
                    </div>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                    >
                      <X className="w-4 h-4" />
                      Clear search
                    </button>
                  </div>
                )}

                {/* Category Tabs */}
                <div className={`relative ${showGuide && guideStep === 2 ? 'ring-4 ring-blue-500 ring-offset-2 rounded-lg p-2' : ''}`}>
                  {searchTerm && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg border-2 border-amber-400">
                        <span className="text-sm font-medium text-amber-600">Clear search to filter by category</span>
                      </div>
                    </div>
                  )}
                  <div className={`flex gap-2 overflow-x-auto pb-4 mb-6 ${searchTerm ? 'opacity-30 pointer-events-none' : ''}`}>
                  {categories.map((category) => {
                    const Icon = category.icon
                    const colors = getCategoryColors(category.color)
                    const itemCount = category.id === 'all' 
                      ? apiItems.length 
                      : apiItems.filter(item => getCategoryForItem(item.storage_item_name) === category.id).length
                    
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          if (!searchTerm) {
                            setSelectedCategory(category.id)
                          }
                        }}
                        disabled={!!searchTerm}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all whitespace-nowrap ${
                          selectedCategory === category.id
                            ? `${colors.selected} ${colors.text} ${colors.border} font-semibold shadow-sm`
                            : `bg-white ${colors.border} ${colors.text} ${colors.hover}`
                        } ${searchTerm ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{category.name}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                          selectedCategory === category.id
                            ? `${colors.bg} ${colors.text}`
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {itemCount}
                        </span>
                      </button>
                    )
                  })}
                  </div>
                </div>

                {/* Items Grid with Fixed Height Scroll */}
                <div className="flex gap-6">
                  {/* Main Items Area */}
                  <div className="flex-1">
                    <div className={`bg-slate-50 rounded-xl p-4 ${showGuide && guideStep === 3 ? 'ring-4 ring-blue-500 ring-offset-2' : ''}`}>
                      {isLoadingItems ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                              <div className="bg-white rounded-lg p-4 border border-slate-200">
                                <div className="w-full h-12 bg-slate-200 rounded mb-3"></div>
                                <div className="h-4 bg-slate-200 rounded mb-2"></div>
                                <div className="h-6 bg-slate-200 rounded"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ScrollArea className="h-[500px] pr-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {filteredItems.map((item) => {
                              const ItemIcon = getItemIcon(item.storage_item_name)
                              const selectedItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
                              const isSelected = !!selectedItem
                              const categoryId = getCategoryForItem(item.storage_item_name)
                              const category = categories.find(c => c.id === categoryId)
                              const colors = getCategoryColors(category?.color || "blue", isSelected)
                              
                              return (
                                <motion.div
                                  key={item.storage_item_name}
                                  layout
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  onClick={() => toggleItemSelection(item)}
                                  className={`relative rounded-lg p-4 cursor-pointer border-2 transition-all duration-150 ${
                                    isSelected
                                      ? `${colors.selectedBg} ${colors.selectedBorder} shadow-lg ring-2 ring-offset-2 ring-opacity-50`
                                      : `bg-white border-slate-200 ${colors.hover} hover:shadow-md`
                                  }`}
                                >
                                  {/* Selection Indicator - Instant feedback */}
                                  <div className="absolute top-2 right-2 transition-transform duration-100">
                                    {isSelected ? (
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.15, type: "spring", stiffness: 400 }}
                                      >
                                        <CheckCircle2 className={`w-6 h-6 ${colors.text} drop-shadow-sm`} />
                                      </motion.div>
                                    ) : (
                                      <Circle className="w-6 h-6 text-slate-300 hover:text-slate-400 transition-colors duration-100" />
                                    )}
                                  </div>

                                  {/* Item Icon */}
                                  <div className={`flex justify-center mb-3 ${colors.text}`}>
                                    <div className={`p-3 rounded-lg ${colors.bg}`}>
                                      <ItemIcon className="w-7 h-7" />
                                    </div>
                                  </div>

                                  {/* Item Name */}
                                  <div className="text-sm font-medium text-slate-700 text-center line-clamp-2 min-h-[40px]">
                                    {item.storage_item_name}
                                  </div>

                                  {/* Quantity Controls - Fast animation */}
                                  {isSelected && selectedItem && (
                                    <motion.div 
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2, ease: "easeOut" }}
                                      className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-200"
                                    >
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateItemQuantity(item.storage_item_name, -1)
                                        }}
                                        className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 active:bg-slate-400 flex items-center justify-center transition-all duration-100"
                                        disabled={selectedItem.quantity <= 1}
                                      >
                                        <Minus className="w-4 h-4 text-slate-600" />
                                      </button>
                                      
                                      <span className="w-12 text-center font-semibold text-slate-800 transition-all duration-100">
                                        {selectedItem.quantity}
                                      </span>
                                      
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          updateItemQuantity(item.storage_item_name, 1)
                                        }}
                                        className={`w-7 h-7 rounded-full ${colors.bg} ${colors.text} hover:opacity-80 flex items-center justify-center transition-opacity`}
                                      >
                                        <Plus className="w-4 h-4" />
                                      </button>
                                    </motion.div>
                                  )}
                                </motion.div>
                              )
                            })}
                          </div>
                        </ScrollArea>
                      )}
                    </div>

                    {/* Item Count Info */}
                    <div className="mt-4 text-center text-sm text-slate-500">
                      Showing {filteredItems.length} items
                      {searchTerm && ` for "${searchTerm}" (searching all categories)`}
                      {!searchTerm && selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                    </div>
                  </div>

                  {/* Selected Items Sidebar */}
                  {formData.selectedItems.length > 0 && (
                    <div className="w-80 hidden lg:block">
                      <div className={`bg-white rounded-xl border-2 border-slate-200 p-4 sticky top-4 ${showGuide && guideStep === 4 ? 'ring-4 ring-blue-500 ring-offset-2' : ''}`}>
                        <h3 className="font-semibold text-slate-800 mb-4">Selected Items</h3>
                        
                        <ScrollArea className="h-[400px] pr-2">
                          <div className="space-y-2">
                            {formData.selectedItems.map((item, index) => {
                              const categoryId = getCategoryForItem(item.name)
                              const category = categories.find(c => c.id === categoryId)
                              const colors = getCategoryColors(category?.color || "blue")
                              
                              return (
                                <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-slate-700 truncate">{item.name}</div>
                                    <div className={`text-xs ${colors.text}`}>{category?.name}</div>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => updateItemQuantity(item.name, -1)}
                                      className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
                                    >
                                      <Minus className="w-3 h-3 text-slate-600" />
                                    </button>
                                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                                    <button
                                      onClick={() => updateItemQuantity(item.name, 1)}
                                      className={`w-6 h-6 rounded ${colors.bg} ${colors.text} hover:opacity-80 flex items-center justify-center`}
                                    >
                                      <Plus className="w-3 h-3" />
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => {
                                      setFormData({
                                        ...formData,
                                        selectedItems: formData.selectedItems.filter((_, i) => i !== index)
                                      })
                                    }}
                                    className="text-red-500 hover:text-red-600"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              )
                            })}
                          </div>
                        </ScrollArea>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-slate-600">Total Items:</span>
                            <span className="font-semibold text-slate-800">
                              {formData.selectedItems.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                          </div>
                          <Button 
                            onClick={() => setFormData({ ...formData, selectedItems: [] })}
                            variant="outline"
                            className="w-full"
                          >
                            Clear All
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Price Display - Redesigned */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="min-h-[600px]"
              >
                <div className="p-8">
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Choose Your Storage Solution</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                      Select between private closed storage or cost-effective shared space
                    </p>
                  </div>


                  {/* Storage Options Cards - Narrow & Tall */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
                    {/* Closed Storage Card - Narrow & Tall */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-1"
                    >
                      <div className="bg-white rounded-2xl p-5 h-full min-h-[500px] flex flex-col">
                        {/* Recommended Badge */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            MOST SECURE
                          </span>
                        </div>
                        
                        <div className="pt-4 flex flex-col flex-grow">
                          {/* Storage Type Header */}
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Closed Storage</h3>
                            <p className="text-slate-600 text-sm">Your exclusive private unit</p>
                          </div>

                          {/* Price Display */}
                          {(() => {
                            const closedPricing = calculateClosedSpacePricing(formData.selectedItems)
                            return (
                              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-5 text-center mb-6">
                                <div className="text-blue-100 text-xs uppercase tracking-wide mb-2">Monthly Rate</div>
                                <div className="text-3xl font-bold text-white mb-2">
                                  AED {closedPricing.totalCost.toLocaleString()}
                                </div>
                                <div className="text-blue-200 text-sm">
                                  {closedPricing.containersNeeded} container{closedPricing.containersNeeded > 1 ? 's' : ''} × AED {closedPricing.pricePerContainer}
                                </div>
                              </div>
                            )
                          })()}


                          {/* Features */}
                          <div className="space-y-3 mb-6 flex-grow">
                            {[
                              "100% Private Unit",
                              "24/7 Access",
                              "Climate Controlled",
                              "Personal Lock & Key",
                              "Full Insurance"
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3 text-blue-600" />
                                </div>
                                <span className="text-slate-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Select Button - ENABLED */}
                          <button
                            onClick={() => handleStorageSelection('closed')}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                          >
                            Select Closed Storage
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Shared Storage Card - Narrow & Tall */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-1"
                    >
                      <div className="bg-white rounded-2xl p-5 h-full min-h-[500px] flex flex-col">
                        {/* Budget Badge */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            BEST VALUE
                          </span>
                        </div>
                        
                        <div className="pt-4 flex flex-col flex-grow">
                          {/* Storage Type Header */}
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <Users className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Shared Storage</h3>
                            <p className="text-slate-600 text-sm">Cost-effective shared space</p>
                          </div>

                          {/* Price Display */}
                          {(() => {
                            const sharedPricing = calculateSharedSpacePricing(formData.selectedItems)
                            return (
                              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-5 text-center mb-6">
                                <div className="text-emerald-50 text-xs uppercase tracking-wide mb-2">Monthly Rate</div>
                                <div className="text-3xl font-bold text-white mb-2">
                                  AED {sharedPricing.totalCost.toLocaleString()}
                                </div>
                                <div className="text-emerald-100 text-sm">
                                  {sharedPricing.chargeableSqft} sqft × AED {sharedPricing.pricePerSqft}
                                </div>
                                {sharedPricing.isMinimumApplied && (
                                  <div className="text-emerald-200 text-xs mt-1">
                                    *Minimum 30 sqft applied
                                  </div>
                                )}
                              </div>
                            )
                          })()}


                          {/* Features */}
                          <div className="space-y-3 mb-6 flex-grow">
                            {[
                              "Shared Warehouse",
                              "Scheduled Access",
                              "Climate Controlled",
                              "Professional Care",
                              "Basic Insurance"
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3 h-3 text-emerald-600" />
                                </div>
                                <span className="text-slate-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Select Button - ENABLED */}
                          <button
                            onClick={() => handleStorageSelection('shared')}
                            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3.5 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg"
                          >
                            Select Shared Storage
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Summary Info - Compact */}
                  <div className="bg-slate-50 rounded-xl p-4 max-w-4xl mx-auto">
                    <h3 className="font-semibold text-slate-800 mb-3 text-center text-sm">Your Selection Summary</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">{formData.selectedItems.length}</div>
                        <div className="text-xs text-slate-600">Total Items</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">
                          {formData.selectedItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </div>
                        <div className="text-xs text-slate-600">Total Quantity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800 capitalize">
                          {formData.storageType.replace('-', ' ')}
                        </div>
                        <div className="text-xs text-slate-600">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-800">Dubai</div>
                        <div className="text-xs text-slate-600">Location</div>
                      </div>
                    </div>
                  </div>

                  {/* What's Included - Compact */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-800 mb-3 text-center text-sm">Included With Both Options</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        { icon: Truck, label: "Free Pickup" },
                        { icon: Shield, label: "Secure" },
                        { icon: Wind, label: "Climate Control" },
                        { icon: Clock, label: "Flexible" },
                        { icon: Phone, label: "24/7 Support" }
                      ].map((feature, index) => {
                        const Icon = feature.icon
                        return (
                          <div key={index} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-200">
                            <Icon className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-xs text-slate-700">{feature.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modern Navigation Buttons */}
          <div className="bg-white border-t border-slate-200 px-8 py-6">
            <div className="flex justify-between items-center">
              <motion.button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  whileHover={{ scale: currentStep === 1 ? 1 : 1.02 }}
                  whileTap={{ scale: currentStep === 1 ? 1 : 0.98 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentStep === 1 
                      ? "invisible" 
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-sm"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </motion.button>

                {currentStep < 3 ? (
                  <motion.button
                    onClick={handleNext}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting && currentStep === 2 ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Date Modal */}
        <AnimatePresence>
          {showPickupDateModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowPickupDateModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setShowPickupDateModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Schedule Your Pickup
                  </h3>
                  <p className="text-slate-600">
                    When would you like us to collect your items?
                  </p>
                </div>

                {/* Storage Option Info */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Selected Storage</p>
                      <p className="font-semibold text-slate-800 capitalize">
                        {selectedStorageOption} Storage
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600">Monthly Rate</p>
                      <p className="font-semibold text-blue-600">
                        AED {selectedStorageOption === 'closed' 
                          ? calculateClosedSpacePricing(formData.selectedItems).totalCost.toLocaleString()
                          : calculateSharedSpacePricing(formData.selectedItems).totalCost.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-4 mb-6">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 mb-2 block">
                      Select Pickup Date
                    </span>
                    <div className="relative">
                      <input
                        type="date"
                        value={selectedPickupDate}
                        onChange={(e) => setSelectedPickupDate(e.target.value)}
                        min={new Date(Date.now() + 86400000).toISOString().split('T')[0]} // Tomorrow minimum
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-800"
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </label>

                  {/* Time Slot Selection */}
                  <div>
                    <span className="text-sm font-medium text-slate-700 mb-2 block">
                      Preferred Time Slot
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "morning", label: "Morning", time: "9 AM - 12 PM" },
                        { value: "afternoon", label: "Afternoon", time: "12 PM - 3 PM" },
                        { value: "evening", label: "Evening", time: "3 PM - 6 PM" },
                        { value: "late", label: "Late Evening", time: "6 PM - 9 PM" }
                      ].map((slot) => (
                        <label
                          key={slot.value}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="timeSlot"
                            value={slot.value}
                            className="peer absolute opacity-0"
                          />
                          <div className="border-2 border-slate-200 rounded-lg p-3 peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-slate-300 transition-all">
                            <p className="font-medium text-slate-800 text-sm">{slot.label}</p>
                            <p className="text-xs text-slate-600">{slot.time}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPickupDateModal(false)}
                    className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmitWithDate}
                    disabled={!selectedPickupDate || isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Proceed to Payment</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Info Note */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500">
                    You'll be redirected to our secure payment gateway
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}