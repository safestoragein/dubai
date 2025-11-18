"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FallbackAddressInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  label?: string
}

export default function FallbackAddressInput({
  value,
  onChange,
  placeholder = "Enter your complete address in Dubai",
  className = "",
  label
}: FallbackAddressInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-semibold text-slate-700">{label}</Label>
      )}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`h-12 border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg ${className}`}
      />
      <div className="text-xs text-amber-600">
        ⚠️ Google Maps autocomplete unavailable - Type your Dubai address manually
      </div>
    </div>
  )
}