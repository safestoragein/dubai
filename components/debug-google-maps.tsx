"use client"

import { useEffect, useState } from "react"

export default function DebugGoogleMaps() {
  const [status, setStatus] = useState("Checking...")
  
  useEffect(() => {
    const testAPI = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        if (!apiKey) {
          setStatus("❌ API Key not configured")
          return
        }
        
        // Test the API key directly
        const response = await fetch(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`)
        console.log('API Response status:', response.status)
        
        if (response.ok) {
          setStatus("✅ API Key seems valid")
        } else {
          setStatus(`❌ API Error: ${response.status} ${response.statusText}`)
        }
      } catch (error) {
        setStatus(`❌ Network Error: ${error}`)
        console.error('API Test Error:', error)
      }
    }
    
    testAPI()
  }, [])
  
  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h3 className="font-bold">Google Maps API Debug</h3>
      <p>Status: {status}</p>
      <p>Key: {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? '[CONFIGURED]' : '[NOT SET]'}</p>
    </div>
  )
}