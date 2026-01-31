"use client"

import React, { useState, useEffect } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
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
  TrendingUp
} from "lucide-react"
import { toast } from "sonner"
import confetti from "canvas-confetti"

interface ApiItem {
  storage_item_name: string
  aed_item_points: string
}

interface ApiResponse {
  status: boolean
  data: ApiItem[]
}

interface SelectedItem {
  name: string
  quantity: number
  price: number
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
}

const initialFormData: FormData = {
  fullName: "Ahmed Al-Mansouri",
  email: "ahmed.mansouri@gmail.com",
  phone: "+971 50 123 4567",
  address: "Villa 123, Dubai Marina, Dubai, UAE",
  floor: "2",
  liftAvailable: "yes",
  storageType: "long-term",
  selectedItems: [],
}

// Categories for organizing items with vibrant colors
const categories = [
  { id: "all", name: "All Items", icon: Grid3x3, bgColor: "bg-gradient-to-r from-violet-500 to-purple-500", iconColor: "text-purple-600", borderColor: "border-purple-300", hoverBg: "hover:bg-purple-50" },
  { id: "furniture", name: "Furniture", icon: Sofa, bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500", iconColor: "text-blue-600", borderColor: "border-blue-300", hoverBg: "hover:bg-blue-50" },
  { id: "electronics", name: "Electronics", icon: Tv, bgColor: "bg-gradient-to-r from-indigo-500 to-purple-600", iconColor: "text-indigo-600", borderColor: "border-indigo-300", hoverBg: "hover:bg-indigo-50" },
  { id: "bedroom", name: "Bedroom", icon: Bed, bgColor: "bg-gradient-to-r from-pink-500 to-rose-500", iconColor: "text-pink-600", borderColor: "border-pink-300", hoverBg: "hover:bg-pink-50" },
  { id: "kitchen", name: "Kitchen", icon: Utensils, bgColor: "bg-gradient-to-r from-orange-500 to-amber-500", iconColor: "text-orange-600", borderColor: "border-orange-300", hoverBg: "hover:bg-orange-50" },
  { id: "appliances", name: "Appliances", icon: Refrigerator, bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500", iconColor: "text-emerald-600", borderColor: "border-emerald-300", hoverBg: "hover:bg-emerald-50" },
  { id: "sports", name: "Sports & Fitness", icon: Dumbbell, bgColor: "bg-gradient-to-r from-red-500 to-orange-500", iconColor: "text-red-600", borderColor: "border-red-300", hoverBg: "hover:bg-red-50" },
  { id: "office", name: "Office", icon: Briefcase, bgColor: "bg-gradient-to-r from-slate-600 to-gray-700", iconColor: "text-slate-600", borderColor: "border-slate-300", hoverBg: "hover:bg-slate-50" },
  { id: "storage", name: "Storage & Boxes", icon: Box, bgColor: "bg-gradient-to-r from-amber-500 to-yellow-500", iconColor: "text-amber-600", borderColor: "border-amber-300", hoverBg: "hover:bg-amber-50" },
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

// Icon mapping function (simplified from original)
const getItemIcon = (itemName: string) => {
  const name = itemName.toLowerCase()
  
  if (name.includes('bed') || name.includes('mattress')) return Bed
  if (name.includes('sofa') || name.includes('couch')) return Sofa
  if (name.includes('chair')) return Armchair
  if (name.includes('table')) return Home
  if (name.includes('tv') || name.includes('television')) return Tv
  if (name.includes('refrigerator') || name.includes('fridge')) return Refrigerator
  if (name.includes('washing machine')) return WashingMachine
  if (name.includes('microwave')) return Microwave
  if (name.includes('laptop')) return Laptop
  if (name.includes('computer') || name.includes('monitor')) return Monitor
  if (name.includes('kitchen')) return Utensils
  if (name.includes('gym') || name.includes('fitness') || name.includes('dumbbell')) return Dumbbell
  if (name.includes('cycle') || name.includes('bike')) return Bike
  if (name.includes('car')) return Car
  if (name.includes('baby')) return Baby
  if (name.includes('book')) return BookOpen
  if (name.includes('cloth') || name.includes('shirt')) return ShirtIcon
  if (name.includes('speaker') || name.includes('music')) return Volume2
  if (name.includes('box') || name.includes('container')) return Box
  
  return Package
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showSelectedOnly, setShowSelectedOnly] = useState(false)
  const [quickAddMode, setQuickAddMode] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const steps = [
    { number: 1, title: "Customer Details", icon: User },
    { number: 2, title: "Select Items", icon: Package },
    { number: 3, title: "View Quote", icon: DollarSign },
  ]

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

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => getCategoryForItem(item.storage_item_name) === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Show only selected items if toggled
    if (showSelectedOnly) {
      const selectedNames = formData.selectedItems.map(si => si.name)
      filtered = filtered.filter(item => selectedNames.includes(item.storage_item_name))
    }

    setFilteredItems(filtered)
  }, [searchTerm, apiItems, selectedCategory, showSelectedOnly, formData.selectedItems])

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

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) {
      return
    }
    if (currentStep === 2 && !validateStep2()) {
      return
    }
    setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
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

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/insert-customer-details-dubai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          quotedPrice: calculatePrice().finalPrice,
        }),
      })

      if (response.ok) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
        toast.success("Quote submitted successfully! We'll contact you soon.")
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } else {
        toast.error("Failed to submit quote. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
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
        price: parseInt(item.aed_item_points)
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
            <m.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-800 mb-2"
            >
              Get Storage Quote
            </m.h1>
            <m.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600"
            >
              Quick estimate in 3 easy steps
            </m.p>
          </div>
          
          {/* Modern Step Indicator */}
          <div className="flex items-center justify-center mt-6 mb-4">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => {
                const isCompleted = step.number < currentStep
                const isCurrent = step.number === currentStep
                
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
                      <div className={`text-sm font-medium ${isCurrent ? "text-blue-600" : "text-slate-500"}`}>
                        {step.title}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-px mx-4 ${isCompleted ? "bg-emerald-500" : "bg-slate-300"}`}></div>
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
            <m.div
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
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">Phone Number *</Label>
                    <Input
                      type="tel"
                      placeholder="+971 50 123 4567"
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
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
                  />
                </div>

                {/* Address Section */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-4">Pickup Location</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">Complete Address *</Label>
                      <Textarea
                        placeholder="Enter your complete address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg resize-none"
                        rows={3}
                      />
                    </div>
                    
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
                            <SelectItem value="ground">Ground Floor</SelectItem>
                            <SelectItem value="1">1st Floor</SelectItem>
                            <SelectItem value="2">2nd Floor</SelectItem>
                            <SelectItem value="3">3rd Floor</SelectItem>
                            <SelectItem value="4">4th Floor</SelectItem>
                            <SelectItem value="5+">5+ Floors</SelectItem>
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

                {/* Storage Type */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-lg font-semibold text-slate-800">Storage Duration *</Label>
                    <p className="text-sm text-slate-600 mt-1">Choose the option that best fits your needs</p>
                  </div>
                  <RadioGroup
                    value={formData.storageType}
                    onValueChange={(value) => setFormData({ ...formData, storageType: value as any })}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <Label htmlFor="short-term" className="relative flex flex-col p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <RadioGroupItem value="short-term" id="short-term" className="absolute top-4 right-4" />
                      <div className="font-semibold text-slate-800 mb-1">Short-term</div>
                      <div className="text-sm text-slate-600 mb-2">1-3 months</div>
                      <div className="text-xl font-bold text-blue-600">AED 50<span className="text-sm font-normal">/month</span></div>
                    </Label>
                    
                    <Label htmlFor="long-term" className="relative flex flex-col p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-emerald-300 hover:bg-emerald-50 transition-all">
                      <RadioGroupItem value="long-term" id="long-term" className="absolute top-4 right-4" />
                      <Badge className="absolute top-2 left-2 bg-emerald-500">SAVE 15%</Badge>
                      <div className="font-semibold text-slate-800 mb-1 mt-6">Long-term</div>
                      <div className="text-sm text-slate-600 mb-2">3+ months</div>
                      <div className="text-xl font-bold text-emerald-600">AED 42<span className="text-sm font-normal">/month</span></div>
                    </Label>
                    
                    <Label htmlFor="business" className="relative flex flex-col p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all">
                      <RadioGroupItem value="business" id="business" className="absolute top-4 right-4" />
                      <div className="font-semibold text-slate-800 mb-1">Business</div>
                      <div className="text-sm text-slate-600 mb-2">Commercial</div>
                      <div className="text-xl font-bold text-purple-600">Custom</div>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
            </m.div>
          )}

          {/* Step 2: Modern Item Selection with Categories */}
          {currentStep === 2 && (
            <m.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {/* Top Controls Bar with Gradient Background */}
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow-sm border border-purple-200 p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search for your items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-10 h-11 bg-white/80 backdrop-blur border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg placeholder-purple-400"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* View Controls with Colorful Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant={showSelectedOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowSelectedOnly(!showSelectedOnly)}
                      className={`gap-2 transition-all ${
                        showSelectedOnly 
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 border-0 text-white hover:from-emerald-600 hover:to-teal-600" 
                          : "bg-white/80 backdrop-blur border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                      }`}
                    >
                      <Eye className="w-4 h-4" />
                      Selected ({formData.selectedItems.length})
                    </Button>
                    
                    <div className="flex rounded-lg border-2 border-purple-300 overflow-hidden bg-white/80 backdrop-blur">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 transition-all ${viewMode === "grid" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-purple-600 hover:bg-purple-100"}`}
                      >
                        <Grid3x3 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 transition-all ${viewMode === "list" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "text-purple-600 hover:bg-purple-100"}`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>

                    <Button
                      variant={quickAddMode ? "default" : "outline"}
                      size="sm"
                      onClick={() => setQuickAddMode(!quickAddMode)}
                      className={`gap-2 transition-all ${
                        quickAddMode 
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 border-0 text-white hover:from-orange-600 hover:to-amber-600" 
                          : "bg-white/80 backdrop-blur border-orange-300 text-orange-700 hover:bg-orange-50"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      Quick Select
                    </Button>
                  </div>
                </div>

                {/* Colorful Category Pills */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    const itemCount = category.id === 'all' 
                      ? apiItems.length 
                      : apiItems.filter(item => getCategoryForItem(item.storage_item_name) === category.id).length
                    
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all transform whitespace-nowrap ${
                          selectedCategory === category.id
                            ? `${category.bgColor} text-white shadow-lg scale-105 ring-2 ring-white ring-offset-2`
                            : `bg-white border-2 ${category.borderColor} ${category.iconColor} ${category.hoverBg} hover:scale-105 hover:shadow-md`
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-semibold">{category.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          selectedCategory === category.id
                            ? "bg-white/20 backdrop-blur"
                            : "bg-gradient-to-r from-purple-100 to-pink-100"
                        }`}>
                          {itemCount}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex gap-4">
                {/* Items Display with Gradient Background */}
                <div className="flex-1 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl shadow-sm border border-purple-200 p-6">
                  {isLoadingItems ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-xl p-4">
                            <div className="w-full h-12 bg-white/50 rounded-lg mb-3"></div>
                            <div className="h-4 bg-white/50 rounded mb-2"></div>
                            <div className="h-3 bg-white/50 rounded w-20 mx-auto"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : viewMode === "grid" ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {filteredItems.map((item) => {
                        const ItemIcon = getItemIcon(item.storage_item_name)
                        const selectedItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
                        const isSelected = !!selectedItem
                        
                        return (
                          <m.div
                            key={item.storage_item_name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative group cursor-pointer transform transition-all hover:scale-105`}
                            onClick={() => toggleItemSelection(item)}
                          >
                            <div className={`relative bg-white rounded-xl border-2 p-4 transition-all ${
                              isSelected
                                ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg ring-2 ring-emerald-300 ring-offset-1"
                                : "border-purple-200 hover:border-purple-400 hover:shadow-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50"
                            }`}>
                              
                              {/* Selected Badge */}
                              {isSelected && (
                                <m.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  className="absolute -top-2 -left-2 w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10 ring-2 ring-white"
                                >
                                  ✓
                                </m.div>
                              )}
                              
                              {/* Icon with Background */}
                              <div className={`flex justify-center mb-3`}>
                                <div className={`p-3 rounded-lg transition-all ${
                                  isSelected 
                                    ? "bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600" 
                                    : "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 group-hover:from-purple-200 group-hover:to-pink-200"
                                }`}>
                                  <ItemIcon className="w-6 h-6" />
                                </div>
                              </div>
                              
                              {/* Name */}
                              <div className={`text-sm font-semibold text-center line-clamp-2 ${
                                isSelected ? "text-emerald-700" : "text-purple-700"
                              }`}>
                                {item.storage_item_name}
                              </div>
                              
                              {/* Quantity Controls (if selected) */}
                              {isSelected && selectedItem && (
                                <div className="flex items-center justify-center gap-1 mt-3">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      updateItemQuantity(item.storage_item_name, -1)
                                    }}
                                    className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-10 text-center font-bold text-sm text-emerald-700 bg-white rounded-lg py-0.5">{selectedItem.quantity}</span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      updateItemQuantity(item.storage_item_name, 1)
                                    }}
                                    className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </m.div>
                        )
                      })}
                    </div>
                  ) : (
                    // List View
                    <div className="space-y-2">
                      {filteredItems.map((item) => {
                        const ItemIcon = getItemIcon(item.storage_item_name)
                        const selectedItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
                        const isSelected = !!selectedItem
                        
                        return (
                          <m.div
                            key={item.storage_item_name}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all transform hover:scale-[1.02] ${
                              isSelected
                                ? "border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg"
                                : "border-purple-200 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 bg-white"
                            }`}
                            onClick={() => toggleItemSelection(item)}
                          >
                            <div className={`p-3 rounded-lg transition-all ${
                              isSelected 
                                ? "bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600" 
                                : "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600"
                            }`}>
                              <ItemIcon className="w-6 h-6" />
                            </div>
                            
                            <div className="flex-1">
                              <div className={`font-semibold ${
                                isSelected ? "text-emerald-700" : "text-purple-700"
                              }`}>{item.storage_item_name}</div>
                              <div className="text-sm mt-1">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                  isSelected 
                                    ? "bg-emerald-100 text-emerald-700" 
                                    : "bg-purple-100 text-purple-700"
                                }`}>
                                  {categories.find(c => c.id === getCategoryForItem(item.storage_item_name))?.name}
                                </span>
                              </div>
                            </div>
                            
                            {isSelected && selectedItem && (
                              <div className="flex items-center gap-2 ml-4">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    updateItemQuantity(item.storage_item_name, -1)
                                  }}
                                  className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-bold text-emerald-700 bg-white rounded-lg py-1">{selectedItem.quantity}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    updateItemQuantity(item.storage_item_name, 1)
                                  }}
                                  className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                            
                            <m.div 
                              initial={isSelected ? { scale: 0 } : { scale: 1 }}
                              animate={{ scale: 1 }}
                              className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
                                isSelected 
                                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" 
                                  : "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                              }`}>
                              {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </m.div>
                          </m.div>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Side Panel - Selected Items Summary */}
                {formData.selectedItems.length > 0 && (
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-80 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 rounded-xl shadow-lg border border-purple-200 p-4 hidden lg:block"
                  >
                    <div className="sticky top-20">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Your Selection</h3>
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">{formData.selectedItems.length} items</Badge>
                      </div>
                      
                      <div className="space-y-2 max-h-96 overflow-y-auto mb-4 pr-2">
                        {formData.selectedItems.map((item, index) => {
                          const categoryId = getCategoryForItem(item.name)
                          const category = categories.find(c => c.id === categoryId)
                          return (
                            <m.div 
                              key={index} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-all"
                            >
                              <div className="flex-1">
                                <div className="text-sm font-medium text-purple-700 truncate">{item.name}</div>
                                <div className="text-xs">
                                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full font-medium ${category?.bgColor} text-white`}>
                                    {category?.name}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => updateItemQuantity(item.name, -1)}
                                  className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white flex items-center justify-center transition-all hover:scale-110"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-8 text-center text-sm font-bold text-purple-700 bg-purple-100 rounded px-1">{item.quantity}</span>
                                <button
                                  onClick={() => updateItemQuantity(item.name, 1)}
                                  className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center transition-all hover:scale-110"
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
                                className="text-red-400 hover:text-red-500 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </m.div>
                          )
                        })}
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-purple-200">
                        <div className="text-center">
                          <div className="text-sm text-purple-600 mb-1">Total Items Selected</div>
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            {formData.selectedItems.reduce((acc, item) => acc + item.quantity, 0)}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => setFormData({ ...formData, selectedItems: [] })}
                        className="w-full mt-4 bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white border-0 shadow-md"
                      >
                        Clear Selection
                      </Button>
                    </div>
                  </m.div>
                )}
              </div>

              {/* Mobile Cart Summary */}
              {formData.selectedItems.length > 0 && (
                <div className="lg:hidden bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800">{formData.selectedItems.length} items selected</div>
                      <div className="text-sm text-slate-600">Total: AED {calculatePrice().finalPrice}</div>
                    </div>
                    <Button size="sm" onClick={() => setExpandedItem(expandedItem ? null : "cart")}>
                      {expandedItem === "cart" ? "Hide" : "View"} Cart
                    </Button>
                  </div>
                  
                  {expandedItem === "cart" && (
                    <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                      {formData.selectedItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                          <div className="flex-1 text-sm text-slate-700">{item.name}</div>
                          <span className="text-sm font-semibold">×{item.quantity}</span>
                          <button
                            onClick={() => {
                              setFormData({
                                ...formData,
                                selectedItems: formData.selectedItems.filter((_, i) => i !== index)
                              })
                            }}
                            className="text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </m.div>
          )}

          {/* Step 3: Price Display */}
          {currentStep === 3 && (
            <m.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[600px]"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 border-b border-slate-200">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Storage Quote</h2>
                  <p className="text-slate-600">Review your customized storage solution</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Price Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
                  <div className="mb-4">
                    <div className="text-sm uppercase tracking-wide text-blue-200 mb-2">Total Storage Cost</div>
                    <div className="text-5xl font-bold mb-2">AED {calculatePrice().finalPrice}</div>
                    <div className="text-blue-200 text-lg">≈ AED {calculatePrice().monthlyPrice} per day</div>
                  </div>
                  
                  {calculatePrice().savings > 0 && (
                    <div className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow-lg">
                      <span className="text-lg mr-2">🎉</span>
                      You save AED {calculatePrice().savings} with long-term storage!
                    </div>
                  )}
                </div>

                {/* Quote Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Storage Type</div>
                        <div className="font-semibold text-slate-800 capitalize">
                          {formData.storageType.replace('-', ' ')}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Package2 className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Selected Items</div>
                        <div className="font-semibold text-slate-800">{formData.selectedItems.length} Items</div>
                      </div>
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Location</div>
                        <div className="font-semibold text-slate-800">Dubai, UAE</div>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-semibold text-slate-800">Price Breakdown</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4 max-h-60 overflow-y-auto">
                      {formData.selectedItems.map((selectedItem, index) => (
                        <div key={`${selectedItem.name}-${index}`} className="flex justify-between items-center py-2">
                          <div className="flex-1">
                            <span className="text-slate-800 font-medium">{selectedItem.name}</span>
                            <span className="text-slate-500 ml-2">× {selectedItem.quantity}</span>
                          </div>
                          <div className="font-semibold text-slate-800">
                            AED {selectedItem.price * selectedItem.quantity}
                          </div>
                        </div>
                      ))}
                      
                      {calculatePrice().savings > 0 && (
                        <>
                          <div className="border-t border-slate-200 pt-4">
                            <div className="flex justify-between items-center text-slate-600">
                              <span>Subtotal</span>
                              <span>AED {calculatePrice().basePrice}</span>
                            </div>
                            <div className="flex justify-between items-center text-green-600 mt-2">
                              <span>Long-term Discount (15%)</span>
                              <span>-AED {calculatePrice().savings}</span>
                            </div>
                          </div>
                        </>
                      )}
                      
                      <div className="border-t border-slate-200 pt-4">
                        <div className="flex justify-between items-center text-lg">
                          <span className="font-semibold text-slate-800">Total</span>
                          <span className="font-bold text-blue-600 text-xl">AED {calculatePrice().finalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-4 text-center">What's Included</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Shield, label: "24/7 Security", color: "text-blue-600" },
                      { icon: Truck, label: "Hassle-Free Pickup", color: "text-emerald-600" },
                      { icon: Clock, label: "Flexible Access", color: "text-purple-600" },
                      { icon: Users, label: "Expert Team", color: "text-orange-600" },
                    ].map((feature, index) => {
                      const FeatureIcon = feature.icon
                      return (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                            <FeatureIcon className={`w-6 h-6 ${feature.color}`} />
                          </div>
                          <p className="text-sm text-slate-700 font-medium">{feature.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Contact Information Summary */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-4">Pickup Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-600 mb-1">Customer</div>
                      <div className="font-medium text-slate-800">{formData.fullName}</div>
                      <div className="text-slate-600">{formData.phone}</div>
                    </div>
                    <div>
                      <div className="text-slate-600 mb-1">Address</div>
                      <div className="font-medium text-slate-800">
                        {formData.address} (Floor {formData.floor})
                      </div>
                      <div className="text-slate-600">
                        Elevator: {formData.liftAvailable === 'yes' ? 'Available' : 'Not Available'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

          {/* Modern Navigation Buttons */}
          <div className="bg-white border-t border-slate-200 px-8 py-6">
            <div className="flex justify-between items-center">
              <m.button
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
                </m.button>

                {currentStep < 3 ? (
                  <m.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl transition-all"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </m.button>
                ) : (
                  <m.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold shadow-lg shadow-emerald-200 hover:shadow-xl transition-all min-w-[180px] justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Get My Quote</span>
                      </>
                    )}
                  </m.button>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}