"use client"

import React, { useRef, useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loadGoogleMapsScript } from "@/lib/google-maps-loader"

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
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    console.log('🚀 [WorkingPlacesAutocomplete] Component mounted')

    // Load Google Maps
    loadGoogleMapsScript()
      .then(() => {
        console.log('✅ [WorkingPlacesAutocomplete] Google Maps loaded')
        setStatus('ready')
      })
      .catch((error) => {
        console.error('❌ [WorkingPlacesAutocomplete] Failed to load:', error)
        setStatus('error')
      })
  }, [])

  useEffect(() => {
    if (status !== 'ready' || !inputRef.current || autocompleteRef.current) {
      console.log('⏸️ [WorkingPlacesAutocomplete] Skipping init:', { status, hasInput: !!inputRef.current, hasAutocomplete: !!autocompleteRef.current })
      return
    }

    const initAutocomplete = () => {
      try {
        console.log('🔧 [WorkingPlacesAutocomplete] Initializing autocomplete...')

        if (!window.google?.maps?.places) {
          console.error('❌ [WorkingPlacesAutocomplete] Places API not available')
          setStatus('error')
          return
        }

        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
          types: ['address'],
          componentRestrictions: { country: 'AE' },
          fields: ['formatted_address', 'address_components', 'geometry', 'place_id', 'name']
        })

        console.log('✅ [WorkingPlacesAutocomplete] Autocomplete instance created')
        autocompleteRef.current = autocomplete

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          console.log('📍 [WorkingPlacesAutocomplete] Place selected:', place)

          if (place.formatted_address) {
            onChange(place.formatted_address)
          } else if (place.name) {
            onChange(place.name)
          }
        })

        console.log('✅ [WorkingPlacesAutocomplete] Ready! Autocomplete is now active.')

      } catch (error) {
        console.error('❌ [WorkingPlacesAutocomplete] Init error:', error)
        setStatus('error')
      }
    }

    const timer = setTimeout(initAutocomplete, 200)

    return () => {
      clearTimeout(timer)
      if (autocompleteRef.current) {
        try {
          window.google?.maps?.event?.clearInstanceListeners?.(autocompleteRef.current)
        } catch (error) {
          console.error('Error cleaning up:', error)
        }
        autocompleteRef.current = null
      }
    }
  }, [status, onChange])

  const getHelpText = () => {
    if (status === 'loading') return "⏳ Loading address suggestions..."
    if (status === 'error') return "✍️ Type your complete Dubai address manually"
    return "✨ Start typing to see Dubai address suggestions"
  }

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
        autoComplete="off"
      />
      <div className="text-xs text-slate-500">
        {getHelpText()}
      </div>
    </div>
  )
}