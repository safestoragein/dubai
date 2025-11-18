"use client"

import React, { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SimplePlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  label?: string
}

declare global {
  interface Window {
    google: any
    googleMapsLoaded: boolean
    initGooglePlaces: () => void
  }
}

export default function SimplePlacesAutocomplete({
  value,
  onChange,
  placeholder = "Start typing your address...",
  className = "",
  label
}: SimplePlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<any>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  // Handle input changes manually to ensure typing always works
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
  }

  // Initialize Google Maps after a delay to ensure proper setup
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const initGoogleMaps = () => {
      // Skip if already initialized or if input is not ready
      if (autocompleteRef.current || !inputRef.current) {
        return
      }

      // Check if Google Maps API is available
      if (!window.google?.maps?.places) {
        // Load Google Maps script
        if (!document.getElementById('google-maps-script')) {
          const script = document.createElement('script')
          script.id = 'google-maps-script'
          const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          if (!apiKey) {
            console.error('Google Maps API key not configured')
            return
          }
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlaces`
          script.async = true
          script.defer = true
          
          // Set up global callback
          window.initGooglePlaces = () => {
            timeoutId = setTimeout(() => {
              initAutocomplete()
            }, 100)
          }
          
          script.onerror = () => {
            console.error('Failed to load Google Maps')
            setStatus('error')
          }
          
          document.head.appendChild(script)
        }
        return
      }

      // Google Maps is ready, initialize autocomplete
      initAutocomplete()
    }

    const initAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places) {
        setStatus('error')
        return
      }

      try {
        console.log('Initializing autocomplete for Dubai addresses...')

        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['address'],
          componentRestrictions: { country: 'ae' },
          bounds: {
            north: 25.4052,
            south: 24.7136, 
            east: 55.5136,
            west: 54.9691
          }
        })

        // Store reference
        autocompleteRef.current = autocomplete

        // Set up place changed listener
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          
          if (place.formatted_address) {
            onChange(place.formatted_address)
          } else if (place.name) {
            onChange(place.name)
          }
          
          console.log('Place selected:', place.formatted_address || place.name)
        })

        setStatus('ready')
        console.log('✅ Autocomplete ready for Dubai addresses')

      } catch (error) {
        console.error('Error setting up autocomplete:', error)
        setStatus('error')
      }
    }

    // Start initialization with a small delay
    timeoutId = setTimeout(initGoogleMaps, 200)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      // Clean up autocomplete
      if (autocompleteRef.current) {
        try {
          window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current)
        } catch (error) {
          console.warn('Error cleaning up autocomplete:', error)
        }
        autocompleteRef.current = null
      }
    }
  }, [onChange])

  const getStatusText = () => {
    switch (status) {
      case 'loading': return '⏳ Setting up address suggestions...'
      case 'ready': return '🏢 Type Dubai address for suggestions'
      case 'error': return '✏️ Type your address manually'
      default: return ''
    }
  }

  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      )}
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg ${className}`}
        autoComplete="off"
        spellCheck={false}
      />
      <div className="text-xs text-slate-500">
        {getStatusText()}
      </div>
    </div>
  )
}