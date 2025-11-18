"use client"

import React, { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface GooglePlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  label?: string
}

let isScriptLoading = false
let isScriptLoaded = false

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

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        // Check if Google Maps is already loaded
        if (typeof window !== 'undefined' && window.google && window.google.maps && window.google.maps.places) {
          setApiStatus('loaded')
          isScriptLoaded = true
          return
        }

        // Check if script is already loading
        if (isScriptLoading) {
          // Wait for it to finish loading
          const waitForLoad = () => {
            if (isScriptLoaded) {
              setApiStatus('loaded')
            } else {
              setTimeout(waitForLoad, 100)
            }
          }
          waitForLoad()
          return
        }

        // Check if script already exists in DOM
        if (document.querySelector('script[src*="maps.googleapis.com"]')) {
          isScriptLoading = true
          const waitForLoad = () => {
            if (window.google && window.google.maps && window.google.maps.places) {
              setApiStatus('loaded')
              isScriptLoaded = true
              isScriptLoading = false
            } else {
              setTimeout(waitForLoad, 100)
            }
          }
          waitForLoad()
          return
        }

        // Load the script
        isScriptLoading = true
        const script = document.createElement('script')
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        if (!apiKey) {
          console.error('Google Maps API key not configured')
          setIsLoading(false)
          return
        }
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`
        
        script.onload = () => {
          console.log('Google Maps script loaded successfully')
          setApiStatus('loaded')
          isScriptLoaded = true
          isScriptLoading = false
        }
        
        script.onerror = () => {
          console.error('Failed to load Google Maps script')
          setApiStatus('error')
          isScriptLoading = false
        }
        
        document.head.appendChild(script)
      } catch (error) {
        console.error('Error in loadGoogleMaps:', error)
        setApiStatus('error')
      }
    }

    loadGoogleMaps()
  }, [])

  useEffect(() => {
    if (apiStatus !== 'loaded' || !inputRef.current || autocompleteRef.current) {
      return
    }

    const initializeAutocomplete = () => {
      try {
        console.log('Initializing Places Autocomplete...')
        
        if (!window.google || !window.google.maps || !window.google.maps.places) {
          console.error('Google Maps Places API not available')
          setAutocompleteStatus('error')
          return
        }

        // Create autocomplete instance
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
          types: ['geocode', 'establishment'],
          componentRestrictions: { country: 'AE' },
          fields: ['formatted_address', 'geometry', 'place_id', 'name']
        })

        autocompleteRef.current = autocomplete
        
        // Add listener for place selection
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          console.log('Place selected:', place)
          
          if (place.formatted_address) {
            onChange(place.formatted_address)
          } else if (place.name) {
            onChange(place.name)
          }
        })

        setAutocompleteStatus('ready')
        console.log('Places Autocomplete initialized successfully')

      } catch (error) {
        console.error('Error initializing autocomplete:', error)
        setAutocompleteStatus('error')
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeAutocomplete, 100)
    
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
    if (apiStatus === 'loading') return "Loading Google Maps..."
    if (apiStatus === 'error') return "Failed to load maps. You can still type manually."
    if (autocompleteStatus === 'pending') return "Setting up address suggestions..."
    if (autocompleteStatus === 'error') return "Address suggestions unavailable. Type manually."
    return "Type to see address suggestions"
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
      />
      <div className="text-xs text-slate-500">
        {getStatusMessage()}
      </div>
    </div>
  )
}