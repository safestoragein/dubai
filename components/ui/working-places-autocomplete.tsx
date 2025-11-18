"use client"

import React, { useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface WorkingPlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  label?: string
}

export default function WorkingPlacesAutocomplete({
  value,
  onChange,
  placeholder = "Enter your complete address in Dubai",
  className = "",
  label
}: WorkingPlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  // COMMENTED OUT - Google Maps autocomplete code
  // Will be enabled when API key is configured for localhost
  
  /*
  useEffect(() => {
    // Only initialize if Google Maps is available
    if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
      initializeAutocomplete()
    } else {
      // Load Google Maps script
      loadGoogleMapsScript()
    }
  }, [])

  const loadGoogleMapsScript = () => {
    const existingScript = document.getElementById('google-maps-script')
    if (existingScript) return

    const script = document.createElement('script')
    script.id = 'google-maps-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCse5f97FoDXrT5kKoeB1XGCxeCs12-mOE&libraries=places`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      console.log('Google Maps loaded')
      setTimeout(initializeAutocomplete, 500)
    }
    
    script.onerror = () => {
      console.error('Failed to load Google Maps - Check API key authorization')
    }
    
    document.head.appendChild(script)
  }

  const initializeAutocomplete = () => {
    if (!inputRef.current) return

    try {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'ae' }
      })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (place.formatted_address) {
          onChange(place.formatted_address)
        }
      })

      console.log('Autocomplete initialized')
    } catch (error) {
      console.error('Autocomplete error:', error)
    }
  }
  */

  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      )}
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg ${className}`}
      />
      <div className="text-xs text-slate-500">
        Type your complete Dubai address manually
      </div>
    </div>
  )
}