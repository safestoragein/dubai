"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"

// Google Places Autocomplete Component (you'll need to implement this)
const GooglePlacesAutocomplete = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
      />
      <p className="text-xs text-slate-500">Start typing your address for suggestions</p>
    </div>
  )
}

interface FormData {
  fullName: string
  email: string
  phone: string
  address: string
  floor: string
  liftAvailable: string
  storageType: "short-term" | "long-term" | "business"
}

export default function Step1CustomerDetails() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    liftAvailable: "",
    storageType: "long-term",
  })

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

  const handleNext = () => {
    if (validateStep1()) {
      console.log("Form Data:", formData)
      // Store data in localStorage or state management
      localStorage.setItem('step1Data', JSON.stringify(formData))
      // Navigate to step 2
      window.location.href = '/quote/step2' // or use your router
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Get Storage Quote</h1>
            <p className="text-slate-600">Step 1 of 3: Contact Information</p>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="w-12 h-px bg-slate-300"></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="w-12 h-px bg-slate-300"></div>
              <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

          {/* Navigation Buttons */}
          <div className="bg-white border-t border-slate-200 px-8 py-6">
            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Continue to Items Selection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}