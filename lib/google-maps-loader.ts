// Google Maps API Loader
// This module handles loading the Google Maps JavaScript API

const GOOGLE_MAPS_API_KEY = 'AIzaSyCse5f97FoDXrT5kKoeB1XGCxeCs12-mOE'

let isLoading = false
let isLoaded = false
let loadError: Error | null = null

export const loadGoogleMapsScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (isLoaded && window.google?.maps?.places) {
      console.log('✅ Google Maps already loaded')
      resolve()
      return
    }

    // Check if currently loading
    if (isLoading) {
      console.log('⏳ Google Maps is loading...')
      const checkInterval = setInterval(() => {
        if (isLoaded && window.google?.maps?.places) {
          clearInterval(checkInterval)
          resolve()
        } else if (loadError) {
          clearInterval(checkInterval)
          reject(loadError)
        }
      }, 100)
      return
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
    if (existingScript) {
      console.log('📜 Google Maps script tag exists, waiting for load...')
      isLoading = true
      const checkInterval = setInterval(() => {
        if (window.google?.maps?.places) {
          console.log('✅ Google Maps loaded from existing script')
          isLoaded = true
          isLoading = false
          clearInterval(checkInterval)
          resolve()
        }
      }, 100)

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        if (!isLoaded) {
          const error = new Error('Google Maps script timeout')
          loadError = error
          isLoading = false
          reject(error)
        }
      }, 10000)
      return
    }

    // Load new script
    console.log('📥 Loading Google Maps script...')
    isLoading = true

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`
    script.async = true
    script.defer = true

    script.onload = () => {
      console.log('✅ Google Maps script loaded successfully')

      // Wait for google.maps.places to be available
      const checkPlaces = setInterval(() => {
        if (window.google?.maps?.places) {
          console.log('✅ Google Maps Places library ready')
          isLoaded = true
          isLoading = false
          clearInterval(checkPlaces)
          resolve()
        }
      }, 50)

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkPlaces)
        if (!isLoaded) {
          const error = new Error('Google Maps Places library not available')
          console.error('❌', error)
          loadError = error
          isLoading = false
          reject(error)
        }
      }, 5000)
    }

    script.onerror = (error) => {
      console.error('❌ Failed to load Google Maps script:', error)
      const err = new Error('Failed to load Google Maps')
      loadError = err
      isLoading = false
      reject(err)
    }

    document.head.appendChild(script)
    console.log('📜 Google Maps script tag added to document')
  })
}

export const isGoogleMapsLoaded = (): boolean => {
  return isLoaded && !!window.google?.maps?.places
}
