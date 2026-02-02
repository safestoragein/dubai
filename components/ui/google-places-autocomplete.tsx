"use client"

import React, { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loadGoogleMapsScript } from "@/lib/google-maps-loader"

interface GooglePlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  label?: string
}

export default function GooglePlacesAutocomplete({
  value,
  onChange,
  placeholder = "Start typing your address...",
  className = "",
  label
}: GooglePlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [apiStatus, setApiStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [autocompleteStatus, setAutocompleteStatus] = useState<'pending' | 'ready' | 'error'>('pending')

  // Load Google Maps script
  useEffect(() => {
    console.log('🚀 GooglePlacesAutocomplete component mounted')

    loadGoogleMapsScript()
      .then(() => {
        console.log('✅ Google Maps loaded in component')
        setApiStatus('loaded')
      })
      .catch((error) => {
        console.error('❌ Failed to load Google Maps in component:', error)
        setApiStatus('error')
      })
  }, [])

  // Initialize autocomplete when API is loaded
  useEffect(() => {
    if (apiStatus !== 'loaded' || !inputRef.current || autocompleteRef.current) {
      console.log('⏸️ Skipping autocomplete init:', { apiStatus, hasInput: !!inputRef.current, hasAutocomplete: !!autocompleteRef.current })
      return
    }

    const initializeAutocomplete = () => {
      try {
        console.log('🔧 Initializing Places Autocomplete...')

        if (!window.google?.maps?.places) {
          console.error('❌ Google Maps Places API not available')
          setAutocompleteStatus('error')
          return
        }

        // Create autocomplete instance
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
          types: ['address'],
          componentRestrictions: { country: 'AE' },
          fields: ['formatted_address', 'address_components', 'geometry', 'place_id', 'name']
        })

        console.log('✅ Autocomplete instance created')
        autocompleteRef.current = autocomplete

        // Add listener for place selection
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          console.log('📍 Place selected:', place)

          if (place.formatted_address) {
            onChange(place.formatted_address)
          } else if (place.name) {
            onChange(place.name)
          }
        })

        setAutocompleteStatus('ready')
        console.log('✅ Places Autocomplete ready!')

      } catch (error) {
        console.error('❌ Error initializing autocomplete:', error)
        setAutocompleteStatus('error')
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeAutocomplete, 150)

    return () => {
      clearTimeout(timer)
      if (autocompleteRef.current) {
        try {
          window.google?.maps?.event?.clearInstanceListeners?.(autocompleteRef.current)
        } catch (error) {
          console.error('Error cleaning up autocomplete:', error)
        }
        autocompleteRef.current = null
      }
    }
  }, [apiStatus, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const getStatusMessage = () => {
    if (apiStatus === 'loading') return "⏳ Loading address suggestions..."
    if (apiStatus === 'error') return "✍️ Type your complete Dubai address manually"
    if (autocompleteStatus === 'pending') return "⏳ Preparing address lookup..."
    if (autocompleteStatus === 'error') return "✍️ Type your complete Dubai address manually"
    return "✨ Start typing to see address suggestions"
  }

  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      )}
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg ${className}`}
        autoComplete="off"
      />
      <div className="text-xs text-slate-500">
        {getStatusMessage()}
      </div>
    </div>
  )
}