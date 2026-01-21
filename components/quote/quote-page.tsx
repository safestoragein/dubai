"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import GooglePlacesAutocomplete from "@/components/ui/google-places-autocomplete"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Settings
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
  phone: "+971 50 577 3388",
  address: "Villa 123, Dubai Marina, Dubai, UAE",
  floor: "2",
  liftAvailable: "yes",
  storageType: "long-term",
  selectedItems: [],
}


// Comprehensive icon mapping function for API items
const getItemIcon = (itemName: string) => {
  const name = itemName.toLowerCase()
  
  // BEDS & SLEEPING (highest priority to avoid conflicts)
  if (name.includes('king size') || name.includes('queen size') || name.includes('cardiac bed')) return Bed
  if (name.includes('double cot') || name.includes('single cot') || name.includes('deewan cot')) return Bed
  if (name.includes('bunker bed') || name.includes('massage cot') || name.includes('iron_metal cot')) return Bed
  if (name.includes('bed') || name.includes('mattress') || name.includes('matress')) return Bed
  if (name.includes('pillow') || name.includes('quilt') || name.includes('blanket')) return Bed
  
  // BABY ITEMS (specific baby items only)
  if (name.includes('baby') || name.includes('cradle') || name.includes('crib')) return Baby
  if (name.includes('kids') && (name.includes('chair') || name.includes('table') || name.includes('toy') || name.includes('bike') || name.includes('car'))) return Baby
  
  // VEHICLES
  if (name.includes('car-') || name.includes('car ') || name.includes('scooty') || name.includes('sports bike')) return Car
  if (name.includes('bike (') || name.includes('cycle -') || name.includes('bike silencer') || name.includes('tyre')) return Car
  
  // KITCHEN APPLIANCES
  if (name.includes('air fryer') || name.includes('fryer') || name.includes('biryani steamer')) return ChefHat
  if (name.includes('microwave') || name.includes('microwoven')) return Microwave
  if (name.includes('refrigerator') || name.includes('fridge') || name.includes('freezer')) return Refrigerator
  if (name.includes('coffee machine') || name.includes('coffee') || name.includes('espresso')) return Coffee
  if (name.includes('gas stove') || name.includes('cooking range') || name.includes('induction stove')) return ChefHat
  if (name.includes('rice cooker') || name.includes('toaster') || name.includes('sandwich maker')) return ChefHat
  if (name.includes('grinder') || name.includes('mixer') || name.includes('food processor') || name.includes('atta chakki')) return ChefHat
  if (name.includes('chimney') || name.includes('oven') || name.includes('otg') || name.includes('gas oven')) return ChefHat
  if (name.includes('dish washer') || name.includes('dishwasher')) return WashingMachine
  if (name.includes('idly maker') || name.includes('flat press') || name.includes('heat press')) return ChefHat
  
  // KITCHEN ITEMS & DINING
  if (name.includes('dinner set') || name.includes('utensils') || name.includes('steel pot') || name.includes('metal pot')) return Utensils
  if (name.includes('kitchen') && (name.includes('rack') || name.includes('stand') || name.includes('cabinet') || name.includes('trolley'))) return Utensils
  if (name.includes('water can') || name.includes('steel drum') || name.includes('bucket')) return Utensils
  if (name.includes('clay pot') || name.includes('steel container') || name.includes('rice container')) return Utensils
  
  // ELECTRONICS & APPLIANCES
  if (name.includes('air purifier') || name.includes('purifier') || name.includes('humidifier')) return Wind
  if (name.includes('air condition') || name.includes('ac') || name.includes('split ac') || name.includes('window ac')) return Wind
  if (name.includes('washing machine') || name.includes('portable washing')) return WashingMachine
  if (name.includes('dryer')) return WashingMachine
  if (name.includes('geyser') || name.includes('water heater') || name.includes('solar panels water heater')) return Settings
  if (name.includes('water purifier') || name.includes('water dispenser') || name.includes('water softner')) return Settings
  if (name.includes('inverter') || name.includes('ups') || name.includes('battery') || name.includes('stabilizer')) return Settings
  if (name.includes('room heater') || name.includes('fireplace')) return Settings
  if (name.includes('vacuum') || name.includes('vaccuum')) return Settings
  if (name.includes('3d printer') || name.includes('autoclave') || name.includes('compressor')) return Settings
  
  // AUDIO/VIDEO EQUIPMENT
  if (name.includes('amplifier') || name.includes('speaker') || name.includes('soundbar') || name.includes('music system')) return Volume2
  if (name.includes('tv ') || name.includes('television') || name.includes('crt tv')) return Tv
  if (name.includes('home theatre') || name.includes('dvd player') || name.includes('projector')) return Tv
  if (name.includes('monitor') || name.includes('desktop computer') || name.includes('cpu')) return Monitor
  if (name.includes('laptop') || name.includes('laptap stand')) return Laptop
  if (name.includes('gaming') || name.includes('play station') || name.includes('moza gaming')) return Gamepad2
  if (name.includes('dslr camera') || name.includes('camera equipment')) return Monitor
  if (name.includes('printer') || name.includes('paper shredder')) return Monitor
  
  // SEATING FURNITURE
  if (name.includes('armchair') || name.includes('arm chair') || name.includes('rocking chair')) return Armchair
  if (name.includes('office chair') || name.includes('study chair') || name.includes('reception chair')) return Armchair
  if (name.includes('gaming chair') || name.includes('massage chair') || name.includes('dental chair')) return Armchair
  if (name.includes('cafeteria chair') || name.includes('saloon chair')) return Armchair
  if (name.includes('plastic chair') || name.includes('wooden chair') || name.includes('metal chair') || name.includes('iron chair')) return Armchair
  if (name.includes('bamboo chair') || name.includes('cane chair') || name.includes('bar chair')) return Armchair
  if (name.includes('high chair') || name.includes('counter chair') || name.includes('foldable chair')) return Armchair
  if (name.includes('dining table chair') || name.includes('tyre chair')) return Armchair
  if (name.includes('handicap wheel chair') || name.includes('wheel chair')) return Armchair
  if (name.includes('sofa') || name.includes('couch') || name.includes('recliner')) return Sofa
  if (name.includes('bean bag') || name.includes('stool') || name.includes('bench')) return Armchair
  if (name.includes('swing') && !name.includes('big swing')) return Armchair
  
  // TABLE FURNITURE
  if (name.includes('dining table') || name.includes('conference table') || name.includes('breading table')) return Home
  if (name.includes('centre table') || name.includes('coffee table') || name.includes('tea table')) return Home
  if (name.includes('study table') || name.includes('computer table') || name.includes('office table') || name.includes('gaming table')) return Home
  if (name.includes('console table') || name.includes('corner table') || name.includes('side table') || name.includes('bed side table')) return Home
  if (name.includes('reception table') || name.includes('cash counter') || name.includes('bar counter')) return Home
  if (name.includes('drawing table') || name.includes('dental portable table')) return Home
  if (name.includes('wooden table') || name.includes('plastic table') || name.includes('glass table') || name.includes('stainless steel table')) return Home
  if (name.includes('foldable table') || name.includes('round table') || name.includes('small table')) return Home
  if (name.includes('tennis table') || name.includes('foose ball table')) return Home
  if (name.includes('tepoy') || name.includes('i shape work station')) return Home
  
  // STORAGE FURNITURE
  if (name.includes('almirah') || name.includes('almarah') || name.includes('wardrobe') || name.includes('cupboard')) return Warehouse
  if (name.includes('cabinet') || name.includes('locker') || name.includes('safe locker')) return Warehouse
  if (name.includes('chest of drawers') || name.includes('dressing table')) return Warehouse
  if (name.includes('sliding cupboard') || name.includes('crockery unit') || name.includes('crockery showcase')) return Warehouse
  if (name.includes('tv unit') || name.includes('tv cabinet') || name.includes('tv stand') || name.includes('tv showcase')) return Tv
  if (name.includes('shoe rack') || name.includes('shoe cabinet') || name.includes('shoe stand') || name.includes('shoerack')) return Warehouse
  if (name.includes('cloth rack') || name.includes('cloth stand') || name.includes('cloths stand')) return ShirtIcon
  if (name.includes('wall cabinet') || name.includes('wall hanger')) return Warehouse
  
  // BOOKSHELVES & RACKS
  if (name.includes('bookshelf') || name.includes('book shelf') || name.includes('iron book shelf')) return BookOpen
  if (name.includes('shelf') || name.includes('rack') && !name.includes('shoe') && !name.includes('cloth')) return BookOpen
  if (name.includes('kitchen rack') || name.includes('iron rack') || name.includes('ups rack')) return BookOpen
  if (name.includes('metal kitchen trolley') || name.includes('bar cart trolley')) return Utensils
  
  // SPORTS & FITNESS
  if (name.includes('gym') || name.includes('fitness') || name.includes('dumbbell') || name.includes('weights')) return Dumbbell
  if (name.includes('treadmill') || name.includes('exercise') || name.includes('crossfit') || name.includes('elliptical')) return Dumbbell
  if (name.includes('rowing machine') || name.includes('squat rack') || name.includes('gym bench')) return Dumbbell
  if (name.includes('punching bag') || name.includes('boxing bag') || name.includes('punching bag stand')) return Dumbbell
  if (name.includes('trampoline') || name.includes('mini vibration')) return Dumbbell
  if (name.includes('bike (') || name.includes('bicycle') || name.includes('cycle') || name.includes('try cycle')) return Bike
  if (name.includes('sports') || name.includes('cricket') || name.includes('badminton') || name.includes('carrom')) return Dumbbell
  if (name.includes('helmet')) return Car
  
  // MUSICAL INSTRUMENTS
  if (name.includes('piano') || name.includes('keyboard (musical)')) return Volume2
  if (name.includes('guitar') || name.includes('violin') || name.includes('veena')) return Volume2
  if (name.includes('drums') || name.includes('mridangam') || name.includes('harmonium') || name.includes('tabala')) return Volume2
  if (name.includes('drum stand') || name.includes('guitar stand') || name.includes('piano stand') || name.includes('keyboard stand')) return Volume2
  
  // BATHROOM ITEMS
  if (name.includes('bath tub') || name.includes('bathroom') || name.includes('shower cabin')) return Bath
  if (name.includes('hand wash basin') || name.includes('steel sink')) return Bath
  
  // MEDICAL & HEALTH
  if (name.includes('body massager') || name.includes('foot massager') || name.includes('pedicure machine')) return Settings
  if (name.includes('handicap') || name.includes('adult gutter walker') || name.includes('walking stick')) return Settings
  if (name.includes('weighing machine')) return Settings
  
  // TEXTILES & CLOTHING
  if (name.includes('cloth') || name.includes('curtain') || name.includes('mosquito net')) return ShirtIcon
  if (name.includes('carpet') || name.includes('mat') || name.includes('quilt') || name.includes('blanket')) return Home
  if (name.includes('laundry basket')) return ShirtIcon
  
  // AQUARIUM & PETS
  if (name.includes('aquarium') || name.includes('fish')) return Fish
  if (name.includes('dog cage') || name.includes('dog crate') || name.includes('cat tree')) return Fish
  
  // DECORATIVE & DISPLAY
  if (name.includes('statue') || name.includes('buddha statue') || name.includes('god statue') || name.includes('stone statue')) return Home
  if (name.includes('show piece') || name.includes('clock') || name.includes('teddy bear') || name.includes('mannequin')) return Home
  if (name.includes('painting') || name.includes('photo frame') || name.includes('mirror') || name.includes('flower vase')) return Home
  if (name.includes('chandler') || name.includes('lamp') || name.includes('floor lamp')) return Zap
  if (name.includes('christmas tree') || name.includes('flower pots') || name.includes('plant')) return Home
  
  // RELIGIOUS ITEMS
  if (name.includes('pooja') || name.includes('temple') || name.includes('mandir')) return Home
  
  // TOOLS & EQUIPMENT
  if (name.includes('ladder') || name.includes('grass cutter') || name.includes('pottery wheel')) return Settings
  if (name.includes('iron box') || name.includes('iron stand') || name.includes('ironing stand')) return Settings
  if (name.includes('sewing machine') || name.includes('telescope') || name.includes('tripot')) return Settings
  if (name.includes('broom') || name.includes('mop') || name.includes('dustbin')) return Settings
  if (name.includes('umbrella') || name.includes('walking stick') || name.includes('wiper')) return Settings
  if (name.includes('gas cylinder') || name.includes('cylinder') || name.includes('water motor')) return Settings
  if (name.includes('fan') && (name.includes('pedestal') || name.includes('table'))) return Wind
  
  // LUGGAGE & STORAGE BOXES
  if (name.includes('suitcase') || name.includes('luggage bag') || name.includes('trolley bag')) return Package
  if (name.includes('backpack') || name.includes('gunny bag')) return Package
  if (name.includes('trunk') || name.includes('personal box') || name.includes('plastic box') || name.includes('wooden box')) return Box
  if (name.includes('safestorage box') || name.includes('crate') || name.includes('container')) return Box
  
  // BOARDS & EDUCATIONAL
  if (name.includes('blackboard') || name.includes('whiteboard') || name.includes('white board') || name.includes('glass board')) return BookOpen
  if (name.includes('painting board') || name.includes('drawing')) return BookOpen
  
  // BUILDING MATERIALS
  if (name.includes('wooden doors') || name.includes('glass door') || name.includes('window glass')) return Home
  if (name.includes('wooden pallet') || name.includes('wooden plank') || name.includes('ply wood')) return Box
  if (name.includes('steel mesh') || name.includes('aluminium net') || name.includes('window blinds')) return Box
  if (name.includes('wall divider') || name.includes('partition')) return Home
  
  // STANDS & SUPPORTS
  if (name.includes('stand') && !name.includes('chair') && !name.includes('table')) return Box
  if (name.includes('tripod') || name.includes('tristand') || name.includes('camera stand')) return Settings
  
  // DEFAULT CATEGORIES
  if (name.includes('electronic') || name.includes('device')) return Zap
  
  // FINAL FALLBACK
  return Box
}

// Social proof notifications data
const socialProofMessages = [
  "Ahmed K. just booked storage in Dubai Marina",
  "Sarah M. secured a spot in Business Bay", 
  "Mohammed A. reserved storage in Jumeirah",
  "Fatima R. booked climate-controlled storage",
  "John D. just got a quote for vehicle storage",
  "Priya S. secured long-term storage in Downtown",
  "Alex T. booked pickup & delivery service",
  "Maria L. just reserved a storage unit"
]

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [currentNotification, setCurrentNotification] = useState("")
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
          // Show only first 10 items initially
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
      setDisplayedItems(apiItems.slice(0, 10))
    } else {
      const filtered = apiItems.filter(item =>
        item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredItems(filtered)
      setDisplayedItems(filtered.slice(0, 20)) // Show more results when searching
    }
  }, [searchTerm, apiItems])

  // Social proof notification effect
  useEffect(() => {
    const showRandomNotification = () => {
      const randomMessage = socialProofMessages[Math.floor(Math.random() * socialProofMessages.length)]
      setCurrentNotification(randomMessage)
      setShowNotification(true)
      
      setTimeout(() => {
        setShowNotification(false)
      }, 4000)
    }

    // Show first notification after 3 seconds
    const firstTimeout = setTimeout(showRandomNotification, 3000)
    
    // Then show notifications every 8-15 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% chance to show
        showRandomNotification()
      }
    }, Math.random() * 7000 + 8000) // 8-15 seconds

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

  const calculatePrice = () => {
    let basePrice = 0
    
    // Calculate price from selected API items with quantities
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
                        <GooglePlacesAutocomplete
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

                    {/* Storage Type */}
                    <div className="space-y-4">
                      <div>
                        <Label className="text-lg font-semibold text-slate-800">Storage Duration *</Label>
                        <p className="text-sm text-slate-600 mt-1">Choose the option that best fits your needs</p>
                      </div>
                      <RadioGroup
                        value={formData.storageType}
                        onValueChange={(value) => setFormData({ ...formData, storageType: value as any })}
                        className="grid grid-cols-1 gap-4"
                      >
                        <Label htmlFor="short-term" className="flex items-center space-x-4 p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all">
                          <RadioGroupItem value="short-term" id="short-term" className="text-blue-600" />
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">Short-term Storage</div>
                            <div className="text-sm text-slate-600">Perfect for 1-3 months • Flexible terms</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-500">Starting from</div>
                            <div className="font-bold text-blue-600">AED 50/month</div>
                          </div>
                        </Label>
                        
                        <Label htmlFor="long-term" className="relative flex items-center space-x-4 p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-emerald-300 hover:bg-emerald-50 transition-all">
                          <RadioGroupItem value="long-term" id="long-term" className="text-emerald-600" />
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">Long-term Storage</div>
                            <div className="text-sm text-emerald-600 font-medium">3+ months • Save 15% on total cost</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-500">Starting from</div>
                            <div className="font-bold text-emerald-600">AED 42/month</div>
                          </div>
                          <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            BEST VALUE
                          </span>
                        </Label>
                        
                        <Label htmlFor="business" className="flex items-center space-x-4 p-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all">
                          <RadioGroupItem value="business" id="business" className="text-purple-600" />
                          <div className="flex-1">
                            <div className="font-semibold text-slate-800">Business Storage</div>
                            <div className="text-sm text-slate-600">Commercial solutions • Bulk discounts available</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-500">Custom pricing</div>
                            <div className="font-bold text-purple-600">Contact us</div>
                          </div>
                        </Label>
                      </RadioGroup>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Items Selection */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="min-h-[600px]"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Select Your Items</h2>
                        <p className="text-slate-600">Choose the items you want to store</p>
                      </div>
                      {formData.selectedItems.length > 0 && (
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-200">
                          <div className="text-sm text-slate-600">Selected Items</div>
                          <div className="text-2xl font-bold text-blue-600">{formData.selectedItems.length}</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Search Bar */}
                    <div className="mt-6 relative max-w-md">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Search for furniture, electronics, etc..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-12 h-12 bg-white border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl shadow-sm"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm("")}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Items Content */}
                  <div className="p-8">
                    {isLoadingItems ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="animate-pulse">
                            <div className="bg-slate-200 rounded-xl h-32 mb-2"></div>
                            <div className="h-4 bg-slate-200 rounded mb-2"></div>
                            <div className="h-3 bg-slate-200 rounded w-16"></div>
                          </div>
                        ))}
                      </div>
                    ) : displayedItems.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-h-96 overflow-y-auto">
                        {displayedItems.map((item) => {
                          const ItemIcon = getItemIcon(item.storage_item_name)
                          const selectedItem = formData.selectedItems.find(si => si.name === item.storage_item_name)
                          const isSelected = !!selectedItem
                          
                          return (
                            <motion.div
                              key={item.storage_item_name}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className={`relative bg-white rounded-xl p-4 cursor-pointer transition-all shadow-sm border-2 ${
                                isSelected
                                  ? "border-blue-500 bg-blue-50 shadow-lg transform scale-105"
                                  : "border-slate-200 hover:border-blue-300 hover:shadow-md"
                              }`}
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
                            >
                              <div className="text-center">
                                <div className={`inline-flex p-3 rounded-xl mb-3 transition-all ${
                                  isSelected ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-600"
                                }`}>
                                  <ItemIcon className="w-7 h-7" />
                                </div>
                                <div className={`text-sm font-medium leading-tight mb-2 ${isSelected ? "text-slate-800" : "text-slate-700"}`}>
                                  {item.storage_item_name}
                                </div>
                              </div>
                              
                              {isSelected && (
                                <>
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                                  >
                                    ✓
                                  </motion.div>
                                  {selectedItem && (
                                    <div className="text-center mt-2">
                                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                        Qty: {selectedItem.quantity}
                                      </span>
                                    </div>
                                  )}
                                </>
                              )}
                            </motion.div>
                          )
                        })}
                      </div>
                    ) : searchTerm ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">No items found</h3>
                        <p className="text-slate-500">Try searching for "{searchTerm.slice(0, -1)}" or different keywords</p>
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Package className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">Start by searching</h3>
                        <p className="text-slate-500">Search for items like "chair", "TV", "refrigerator", etc.</p>
                      </div>
                    )}
                  </div>

                  {/* Selected Items Summary - Fixed at Bottom */}
                  {formData.selectedItems.length > 0 && (
                    <div className="bg-slate-50 border-t border-slate-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-800">
                          Selected Items ({formData.selectedItems.length})
                        </h3>
                        <button
                          onClick={() => setFormData({ ...formData, selectedItems: [] })}
                          className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
                        >
                          Clear All
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-40 overflow-y-auto">
                        {formData.selectedItems.map((selectedItem, index) => (
                          <div
                            key={`${selectedItem.name}-${index}`}
                            className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm border border-slate-200"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-slate-800 truncate text-sm">
                                {selectedItem.name}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const newItems = [...formData.selectedItems]
                                  if (newItems[index].quantity > 1) {
                                    newItems[index].quantity -= 1
                                    setFormData({ ...formData, selectedItems: newItems })
                                  }
                                }}
                                className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors"
                                disabled={selectedItem.quantity <= 1}
                              >
                                <Minus className="w-3 h-3 text-slate-600" />
                              </button>
                              
                              <span className="w-8 text-center font-semibold text-slate-800 text-sm">
                                {selectedItem.quantity}
                              </span>
                              
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const newItems = [...formData.selectedItems]
                                  newItems[index].quantity += 1
                                  setFormData({ ...formData, selectedItems: newItems })
                                }}
                                className="w-7 h-7 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFormData({
                                    ...formData,
                                    selectedItems: formData.selectedItems.filter((_, i) => i !== index)
                                  })
                                }}
                                className="w-7 h-7 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors ml-1"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 3: Price Display */}
              {currentStep === 3 && (
                <motion.div
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl transition-all"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.button
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
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Floating Social Proof Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed bottom-6 left-6 z-50 bg-white border border-dubai-gold/20 rounded-lg shadow-lg p-4 max-w-sm"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">{currentNotification}</p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}