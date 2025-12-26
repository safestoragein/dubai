"use client"

import { useState, useEffect } from "react"
import {
  Bed,
  Baby,
  Sofa,
  Utensils,
  Package,
  Home,
  Dumbbell,
  Car,
  Music,
  Tv,
  Monitor,
  Laptop,
  ShoppingBag,
  TreePine,
  Fish,
  Flame,
  Wind,
  Zap,
  Briefcase,
  Gamepad2,
  Wrench,
  Bike,
  Armchair,
  WashingMachine,
  Stethoscope,
  Box,
  Cog
} from "lucide-react"

interface StorageItem {
  storage_item_name: string
  aed_item_points: string
}

const getItemIcon = (itemName: string) => {
  const name = itemName.toLowerCase()
  
  // Walking stick specifically
  if (name.includes("walking stick")) return Cog
  
  // BEDS & BEDROOM - Check beds BEFORE baby items
  if (name.includes("king size") && (name.includes("cot") || name.includes("bed"))) return Bed
  if (name.includes("queen size") && (name.includes("cot") || name.includes("bed"))) return Bed
  if (name.includes("single cot")) return Bed
  if (name.includes("double cot") && !name.includes("baby")) return Bed
  if (name.includes("bunker bed") || name.includes("bunk bed")) return Bed
  if (name.includes("deewan cot")) return Bed
  if (name.includes("cardiac bed") || name.includes("massage cot")) return Bed
  if (name.includes("iron_metal cot") || name.includes("iron cot")) return Bed
  if (name.includes("mattress") || name.includes("matress")) return Bed
  if (name.includes("bed") && !name.includes("baby")) return Bed
  
  // BABY/KIDS - After bed checks
  if (name.includes("baby")) return Baby
  if (name.includes("kids") && !name.includes("bike")) return Baby
  if (name.includes("pram")) return Baby
  
  // Rest of categories...
  if (name.includes("sofa") || name.includes("couch") || name.includes("recliner")) return Sofa
  if (name.includes("chair") && !name.includes("wheel")) return Armchair
  
  // TABLES & DINING
  if (name.includes("dining") || name.includes("table")) return Utensils
  
  // KITCHEN & APPLIANCES
  if (name.includes("fridge") || name.includes("freezer") || name.includes("refrigerator")) return Box
  if (name.includes("washing machine") || name.includes("dryer") || name.includes("dishwasher")) return WashingMachine
  if (name.includes("microwave") || name.includes("oven") || name.includes("toaster")) return Flame
  if (name.includes("cooker") || name.includes("stove") || name.includes("gas") || name.includes("induction")) return Flame
  if (name.includes("grinder") || name.includes("mixer") || name.includes("juicer") || name.includes("processor")) return Utensils
  if (name.includes("chimney") || name.includes("geyser")) return Flame
  if (name.includes("kitchen")) return Utensils
  
  // ELECTRONICS
  if (name.includes("tv") || name.includes("television")) return Tv
  if (name.includes("monitor") || name.includes("desktop") || name.includes("computer") && !name.includes("laptop")) return Monitor
  if (name.includes("laptop")) return Laptop
  if (name.includes("speaker") || name.includes("sound") || name.includes("home theatre")) return Music
  if (name.includes("gaming") || name.includes("playstation") || name.includes("xbox")) return Gamepad2
  
  // AC & COOLING
  if (name.includes("ac") || name.includes("air condition")) return Wind
  if (name.includes("fan") || name.includes("cooler")) return Wind
  if (name.includes("air purifier") || name.includes("humidifier")) return Wind
  
  // ELECTRICAL
  if (name.includes("ups") || name.includes("inverter") || name.includes("battery")) return Zap
  if (name.includes("stabilizer") || name.includes("generator")) return Zap
  
  // FITNESS
  if (name.includes("gym") || name.includes("dumbbell") || name.includes("weight")) return Dumbbell
  if (name.includes("treadmill") || name.includes("cycle") || name.includes("elliptical")) return Dumbbell
  
  // VEHICLES
  if (name.includes("bike") || name.includes("scooty") || name.includes("motorcycle")) return Bike
  if (name.includes("car")) return Car
  if (name.includes("cycle") && !name.includes("motor")) return Bike
  
  // OFFICE
  if (name.includes("office") || name.includes("desk") && name.includes("chair")) return Briefcase
  if (name.includes("printer") || name.includes("scanner") || name.includes("projector")) return Briefcase
  
  // STORAGE
  if (name.includes("almirah") || name.includes("almarah") || name.includes("wardrobe") || name.includes("cupboard")) return Home
  if (name.includes("rack") || name.includes("shelf") || name.includes("showcase")) return Home
  if (name.includes("trunk") || name.includes("suitcase") || name.includes("luggage")) return ShoppingBag
  
  // MUSICAL
  if (name.includes("piano") || name.includes("keyboard") || name.includes("guitar") || name.includes("drum") || name.includes("violin")) return Music
  if (name.includes("harmonium") || name.includes("veena") || name.includes("mridangam") || name.includes("tabla")) return Music
  
  // OUTDOOR & GARDEN
  if (name.includes("swing") || name.includes("slide") || name.includes("trampoline")) return TreePine
  if (name.includes("tent") || name.includes("camping")) return TreePine
  if (name.includes("plant") || name.includes("pot") && name.includes("flower")) return TreePine
  if (name.includes("grass") || name.includes("garden")) return TreePine
  
  // PETS & AQUARIUM
  if (name.includes("aquarium") || name.includes("fish")) return Fish
  if (name.includes("dog") || name.includes("cat") || name.includes("pet")) return Home
  
  // TOOLS
  if (name.includes("ladder") || name.includes("tool") || name.includes("drill") || name.includes("hammer")) return Wrench
  if (name.includes("iron box")) return Flame
  
  // MEDICAL
  if (name.includes("wheel chair") || name.includes("wheelchair")) return Stethoscope
  if (name.includes("medical") || name.includes("hospital")) return Stethoscope
  
  // Default
  return Box
}

export default function TestIconsPage() {
  const [items, setItems] = useState<StorageItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch("https://safestorage.in/back/app/dubai_items_list")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && Array.isArray(data.data)) {
          setItems(data.data)
        }
      })
  }, [])
  
  const filteredItems = items.filter(item =>
    item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Specific test items
  const testItems = [
    "King Size Double Cot (Non-Storage)",
    "King Size Double Cot (With Storage)",
    "Queen Size Double Cot (With Storage)",
    "Single Cot",
    "Baby cot",
    "walking stick",
    "Walking Stick"
  ]
  
  const specificTestItems = items.filter(item =>
    testItems.some(test => item.storage_item_name.toLowerCase().includes(test.toLowerCase()))
  )
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Icon Test Page</h1>
        
        {/* Test specific items */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Specific Test Items:</h2>
          <div className="grid grid-cols-4 gap-4">
            {specificTestItems.map((item, idx) => {
              const Icon = getItemIcon(item.storage_item_name)
              return (
                <div key={idx} className="bg-white p-4 rounded-lg border">
                  <Icon className="w-8 h-8 mb-2 text-blue-500" />
                  <p className="text-sm font-medium">{item.storage_item_name}</p>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        {/* All items */}
        <div className="grid grid-cols-6 gap-3">
          {filteredItems.slice(0, 100).map((item, idx) => {
            const Icon = getItemIcon(item.storage_item_name)
            return (
              <div key={idx} className="bg-white p-3 rounded border hover:shadow-lg transition-shadow">
                <Icon className="w-6 h-6 mb-2 text-blue-500" />
                <p className="text-xs">{item.storage_item_name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}