"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  User, 
  Package, 
  DollarSign, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Search,
  X,
  Plus,
  Minus,
  Shield,
  Truck,
  Clock,
  Users,
  MapPin,
  Package2,
  Box,
  Home,
  Sofa,
  Tv,
  Monitor,
  Laptop,
  Shirt,
  Bed,
  Baby,
  Car,
  Bike,
  Refrigerator,
  WashingMachine,
  ChefHat,
  Coffee,
  Microwave,
  Settings,
  Dumbbell,
  BookOpen,
  Armchair,
  Music,
  Gamepad2,
  Wind,
  Zap,
  Briefcase,
  ShoppingBag,
  Flame,
  Fish,
  TreePine,
  Wrench
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

// Comprehensive icon mapping for Dubai storage items
const getItemIcon = (itemName: string) => {
  const name = itemName.toLowerCase()
  
  // SPECIFIC ITEMS (highest priority)
  if (name === "walking stick") return Wrench
  
  // BEDS & BEDROOM - Check BEFORE baby items
  if (name.includes('king size') && (name.includes('cot') || name.includes('bed'))) return Bed
  if (name.includes('queen size') && (name.includes('cot') || name.includes('bed'))) return Bed
  if (name.includes('double cot') && !name.includes('baby')) return Bed
  if (name.includes('single cot')) return Bed
  if (name.includes('bunker bed') || name.includes('bunk bed')) return Bed
  if (name.includes('deewan cot') || name.includes('cardiac bed') || name.includes('massage cot')) return Bed
  if (name.includes('iron_metal cot') || name.includes('iron cot')) return Bed
  if (name.includes('bed') && !name.includes('baby') && !name.includes('sofa')) return Bed
  if (name.includes('mattress') || name.includes('matress')) return Bed
  if (name.includes('pillow') || name.includes('quilt') || name.includes('blanket')) return Bed
  
  // BABY/KIDS ITEMS - After bed checks
  if (name.includes('baby')) return Baby
  if (name.includes('kids') && !name.includes('bike')) return Baby
  if (name.includes('pram') || name.includes('cradle') || name.includes('crib')) return Baby
  
  // SEATING FURNITURE
  if (name.includes('sofa') || name.includes('couch') || name.includes('recliner')) return Sofa
  if (name.includes('bean bag') || name.includes('ottoman') || name.includes('puff')) return Sofa
  if (name.includes('office chair') || name.includes('gaming chair')) return Briefcase
  if (name.includes('chair') && !name.includes('wheel')) return Armchair
  if (name.includes('stool') || name.includes('bench')) return Armchair
  
  // TABLES
  if (name.includes('dining')) return Home
  if (name.includes('centre table') || name.includes('coffee table')) return Coffee
  if (name.includes('study table') || name.includes('computer table') || name.includes('office table')) return Monitor
  if (name.includes('table')) return Home
  
  // KITCHEN APPLIANCES - More specific icons
  if (name.includes('fridge') || name.includes('refrigerator') || name.includes('freezer')) return Box
  if (name.includes('washing machine')) return WashingMachine
  if (name.includes('dishwasher') || name.includes('dryer')) return WashingMachine
  if (name.includes('microwave') || name.includes('oven') || name.includes('toaster')) return Flame
  if (name.includes('stove') || name.includes('gas') || name.includes('cooking') || name.includes('induction')) return Flame
  if (name.includes('mixer') || name.includes('grinder') || name.includes('juicer') || name.includes('processor')) return Settings
  if (name.includes('chimney') || name.includes('geyser')) return Flame
  if (name.includes('kitchen')) return Home
  
  // ELECTRONICS
  if (name.includes('tv') || name.includes('television')) return Tv
  if (name.includes('monitor') || name.includes('desktop') || name.includes('computer') && !name.includes('laptop')) return Monitor
  if (name.includes('laptop')) return Laptop
  if (name.includes('speaker') || name.includes('sound') || name.includes('amplifier')) return Music
  if (name.includes('gaming') || name.includes('playstation') || name.includes('xbox')) return Gamepad2
  if (name.includes('projector')) return Tv
  if (name.includes('printer') || name.includes('scanner')) return Monitor
  if (name.includes('camera')) return Monitor
  
  // VEHICLES
  if (name.includes('car') && !name.includes('kids')) return Car
  if (name.includes('bike') && !name.includes('kids') && !name.includes('exercise')) return Bike
  if (name.includes('scooty') || name.includes('scooter') || name.includes('motorcycle')) return Bike
  if (name.includes('cycle') && !name.includes('motor') && !name.includes('exercise')) return Bike
  
  // CLIMATE CONTROL
  if (name.includes('ac') || name.includes('air condition')) return Wind
  if (name.includes('fan') || name.includes('cooler')) return Wind
  if (name.includes('air purifier') || name.includes('humidifier')) return Wind
  if (name.includes('heater')) return Flame
  
  // STORAGE FURNITURE
  if (name.includes('almirah') || name.includes('almarah') || name.includes('wardrobe')) return Home
  if (name.includes('cupboard') || name.includes('cabinet')) return Home
  if (name.includes('chest of drawers') || name.includes('dressing table')) return Home
  if (name.includes('rack') || name.includes('shelf') || name.includes('showcase')) return Home
  
  // FITNESS
  if (name.includes('gym') || name.includes('dumbbell') || name.includes('weight')) return Dumbbell
  if (name.includes('treadmill') || name.includes('exercise') || name.includes('elliptical')) return Dumbbell
  if (name.includes('punching bag') || name.includes('boxing')) return Dumbbell
  if (name.includes('sports') || name.includes('cricket') || name.includes('badminton')) return Dumbbell
  
  // MUSICAL
  if (name.includes('piano') || name.includes('keyboard') || name.includes('guitar')) return Music
  if (name.includes('drum') || name.includes('violin') || name.includes('harmonium')) return Music
  if (name.includes('mridangam') || name.includes('veena') || name.includes('tabla')) return Music
  
  // OUTDOOR
  if (name.includes('swing') || name.includes('slide') || name.includes('trampoline')) return TreePine
  if (name.includes('tent') || name.includes('camping')) return TreePine
  if (name.includes('plant') || name.includes('garden')) return TreePine
  
  // PETS
  if (name.includes('aquarium') || name.includes('fish')) return Fish
  if (name.includes('dog') || name.includes('cat') || name.includes('pet')) return Home
  
  // LUGGAGE
  if (name.includes('suitcase') || name.includes('luggage') || name.includes('trolley bag')) return ShoppingBag
  if (name.includes('trunk') || name.includes('box') || name.includes('container')) return Box
  
  // TOOLS & MISC
  if (name.includes('ladder') || name.includes('tool')) return Wrench
  if (name.includes('vacuum') || name.includes('iron box')) return Settings
  if (name.includes('inverter') || name.includes('ups') || name.includes('battery')) return Zap
  if (name.includes('water purifier') || name.includes('water dispenser')) return Settings
  if (name.includes('sewing machine')) return Settings
  
  // DEFAULT
  return Box
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiItems, setApiItems] = useState<ApiItem[]>([])
  const [filteredItems, setFilteredItems] = useState<ApiItem[]>([])
  const [displayedItems, setDisplayedItems] = useState<ApiItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoadingItems, setIsLoadingItems] = useState(false)

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
          setDisplayedItems(data.data.slice(0, 10))
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

  // Search functionality
  useEffect(() => {
    if (!searchTerm) {
      setFilteredItems(apiItems)
      setDisplayedItems(apiItems.slice(0, 15)) // Show 15 items initially for horizontal scroll
    } else {
      const filtered = apiItems.filter(item =>
        item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredItems(filtered)
      setDisplayedItems(filtered) // Show all search results
    }
  }, [searchTerm, apiItems])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
          
          {/* Step Indicator - Compact Version */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              {steps.map((step, index) => {
                const isCompleted = step.number < currentStep
                const isCurrent = step.number === currentStep
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isCompleted ? "bg-emerald-500 text-white" :
                        isCurrent ? "bg-blue-600 text-white" :
                        "bg-slate-200 text-slate-500"
                      }`}>
                        {isCompleted ? "✓" : step.number}
                      </div>
                      <div className={`text-xs mt-1 font-medium ${isCurrent ? "text-blue-600" : "text-slate-500"}`}>
                        {step.title}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-px mx-2 ${isCompleted ? "bg-emerald-500" : "bg-slate-300"}`}></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200">
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
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input
                        placeholder="Ahmed Al-Mansouri"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Phone Number *</Label>
                      <Input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Email Address *</Label>
                    <Input
                      type="email"
                      placeholder="ahmed.mansouri@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Complete Address *</Label>
                    <Textarea
                      placeholder="Villa 123, Dubai Marina, Dubai, UAE"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Floor Level *</Label>
                      <Select 
                        value={formData.floor} 
                        onValueChange={(value) => setFormData({ ...formData, floor: value })}
                      >
                        <SelectTrigger className="h-12">
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
                      <Label>Elevator Available? *</Label>
                      <Select 
                        value={formData.liftAvailable} 
                        onValueChange={(value) => setFormData({ ...formData, liftAvailable: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Storage Duration *</Label>
                    <RadioGroup
                      value={formData.storageType}
                      onValueChange={(value) => setFormData({ ...formData, storageType: value as any })}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <Label htmlFor="short-term" className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer hover:border-blue-300">
                        <RadioGroupItem value="short-term" id="short-term" />
                        <div>
                          <div className="font-semibold">Short-term</div>
                          <div className="text-sm text-slate-600">1-3 months</div>
                        </div>
                      </Label>
                      
                      <Label htmlFor="long-term" className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer hover:border-emerald-300">
                        <RadioGroupItem value="long-term" id="long-term" />
                        <div>
                          <div className="font-semibold">Long-term</div>
                          <div className="text-sm text-emerald-600">Save 15%</div>
                        </div>
                      </Label>
                      
                      <Label htmlFor="business" className="flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer hover:border-purple-300">
                        <RadioGroupItem value="business" id="business" />
                        <div>
                          <div className="font-semibold">Business</div>
                          <div className="text-sm text-slate-600">Commercial</div>
                        </div>
                      </Label>
                    </RadioGroup>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Item Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">Select Your Items</h2>
                  {formData.selectedItems.length > 0 && (
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      onClick={() => {
                        const element = document.getElementById('selected-items-section')
                        element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      <Package className="w-4 h-4" />
                      View Selected ({formData.selectedItems.length})
                    </motion.button>
                  )}
                </div>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for furniture, electronics, etc..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-12 h-12"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="w-5 h-5 text-slate-400" />
                    </button>
                  )}
                </div>

                {/* Items - Horizontal Scroll Design */}
                <div className="mb-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-slate-700">
                        {searchTerm ? `Search Results (${displayedItems.length})` : 'Popular Items'}
                      </h3>
                      <p className="text-xs text-slate-500">Scroll to see more →</p>
                    </div>
                    
                    {/* Horizontal Scrollable Container */}
                    <div className="overflow-x-auto overflow-y-hidden pb-4 -mb-2">
                      <div className="flex gap-3 py-2 px-1" style={{ minWidth: 'max-content' }}>
                        {displayedItems.length > 0 ? (
                          displayedItems.map((item) => {
                            const ItemIcon = getItemIcon(item.storage_item_name)
                            const selectedItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
                            const isSelected = !!selectedItem
                            
                            return (
                              <motion.div
                                key={item.storage_item_name}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  if (isSelected) {
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
                                }}
                                className={`relative flex-shrink-0 w-40 bg-white rounded-xl p-4 cursor-pointer transition-all shadow-sm hover:shadow-lg ${
                                  isSelected ? "border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50" : "border-2 border-transparent"
                                }`}
                              >
                                {/* Selected Badge - Inside the card */}
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                                  >
                                    <Check className="w-4 h-4 text-white" />
                                  </motion.div>
                                )}
                                
                                {/* Item Content */}
                                <div className="flex flex-col items-center text-center">
                                  <div className={`p-3 rounded-xl mb-3 transition-colors ${
                                    isSelected ? "bg-gradient-to-br from-blue-100 to-indigo-100" : "bg-slate-100"
                                  }`}>
                                    <ItemIcon className={`w-8 h-8 ${
                                      isSelected ? "text-blue-600" : "text-slate-600"
                                    }`} />
                                  </div>
                                  <p className={`text-xs font-medium leading-tight line-clamp-2 min-h-[32px] ${
                                    isSelected ? "text-blue-900" : "text-slate-800"
                                  }`}>
                                    {item.storage_item_name}
                                  </p>
                                  {isSelected && selectedItem && (
                                    <span className="mt-2 text-xs font-bold text-blue-600">
                                      Qty: {selectedItem.quantity}
                                    </span>
                                  )}
                                </div>
                              </motion.div>
                            )
                          })
                        ) : (
                          <div className="flex items-center justify-center w-full py-8">
                            <p className="text-slate-500">No items found. Try a different search.</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Scroll Hint */}
                    {displayedItems.length > 5 && (
                      <div className="mt-3 flex justify-center">
                        <div className="flex gap-1">
                          {[...Array(Math.min(5, Math.ceil(displayedItems.length / 4)))].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {!searchTerm && (
                    <p className="text-xs text-center text-slate-500 mt-2">
                      Use search above to find specific items from our complete catalog
                    </p>
                  )}
                </div>

                {/* Selected Items - New Design */}
                {formData.selectedItems.length > 0 && (
                  <motion.div 
                    id="selected-items-section" 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">Your Selected Items</h3>
                        <p className="text-sm text-slate-600 mt-1">{formData.selectedItems.length} items selected for storage</p>
                      </div>
                      <button
                        onClick={() => setFormData({ ...formData, selectedItems: [] })}
                        className="text-sm text-red-500 hover:text-red-600 font-medium"
                      >
                        Clear All
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {formData.selectedItems.map((selectedItem, index) => {
                        const ItemIcon = getItemIcon(selectedItem.name)
                        return (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <ItemIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-slate-800">{selectedItem.name}</p>
                                  <p className="text-xs text-slate-500">Storage Item</p>
                                </div>
                              </div>
                              
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-3">
                                <div className="flex items-center bg-slate-100 rounded-lg p-1">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      const newItems = [...formData.selectedItems]
                                      if (newItems[index].quantity > 1) {
                                        newItems[index].quantity -= 1
                                        setFormData({ ...formData, selectedItems: newItems })
                                      }
                                    }}
                                    className="w-8 h-8 rounded hover:bg-slate-200 transition-colors flex items-center justify-center"
                                    disabled={selectedItem.quantity <= 1}
                                  >
                                    <Minus className="w-4 h-4 text-slate-600" />
                                  </button>
                                  <span className="w-10 text-center font-bold text-slate-800">{selectedItem.quantity}</span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      const newItems = [...formData.selectedItems]
                                      newItems[index].quantity += 1
                                      setFormData({ ...formData, selectedItems: newItems })
                                    }}
                                    className="w-8 h-8 rounded hover:bg-slate-200 transition-colors flex items-center justify-center"
                                  >
                                    <Plus className="w-4 h-4 text-slate-600" />
                                  </button>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setFormData({
                                      ...formData,
                                      selectedItems: formData.selectedItems.filter((_, i) => i !== index)
                                    })
                                  }}
                                  className="w-8 h-8 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors flex items-center justify-center"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                    
                    {/* Summary */}
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-slate-600">Total items ready for storage</p>
                        <p className="text-lg font-bold text-slate-800">
                          {formData.selectedItems.reduce((acc, item) => acc + item.quantity, 0)} items
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 3: Quote Summary */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Storage Quote</h2>
                
                {/* Price Display */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center mb-6">
                  <div className="text-sm uppercase tracking-wide mb-2">Total Storage Cost</div>
                  <div className="text-4xl font-bold mb-2">AED {calculatePrice().finalPrice}</div>
                  <div className="text-blue-200">≈ AED {calculatePrice().monthlyPrice} per day</div>
                  {calculatePrice().savings > 0 && (
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 rounded-full text-sm font-semibold">
                      You save AED {calculatePrice().savings}!
                    </div>
                  )}
                </div>

                {/* Quote Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm text-slate-600">Storage Type</div>
                    <div className="font-semibold capitalize">{formData.storageType.replace('-', ' ')}</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm text-slate-600">Selected Items</div>
                    <div className="font-semibold">{formData.selectedItems.length} Items</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-sm text-slate-600">Location</div>
                    <div className="font-semibold">Dubai, UAE</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm">24/7 Security</div>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-sm">Hassle-Free Pickup</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm">Flexible Access</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm">Expert Team</div>
                  </div>
                </div>

                {/* Contact Summary */}
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-3">Pickup Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-600">Customer</div>
                      <div className="font-medium">{formData.fullName}</div>
                      <div>{formData.phone}</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Address</div>
                      <div className="font-medium">{formData.address}</div>
                      <div>Floor {formData.floor}, Elevator: {formData.liftAvailable === 'yes' ? 'Yes' : 'No'}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="px-8 py-6 border-t">
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-semibold ${
                  currentStep === 1 ? "invisible" : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <ArrowLeft className="w-5 h-5 inline mr-2" />
                Previous
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Check className="w-5 h-5 inline mr-2" />
                      Submit Quote
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}