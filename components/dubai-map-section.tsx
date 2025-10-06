"use client"
import DubaiMapStatic from "./dubai-map-static"

// Dubai locations with coordinates
const dubaiLocations = [
  {
    id: 1,
    name: "Dubai Marina",
    description: "Premium storage near the waterfront",
    coordinates: { lat: 25.0819, lng: 55.1367 },
  },
  {
    id: 2,
    name: "Al Barsha",
    description: "Convenient central location",
    coordinates: { lat: 25.1107, lng: 55.2 },
  },
  {
    id: 3,
    name: "Deira",
    description: "Easy access from old Dubai",
    coordinates: { lat: 25.2697, lng: 55.3094 },
  },
  {
    id: 4,
    name: "Business Bay",
    description: "Business-friendly storage solutions",
    coordinates: { lat: 25.1862, lng: 55.28 },
  },
  {
    id: 5,
    name: "JLT",
    description: "Modern facilities in Jumeirah Lake Towers",
    coordinates: { lat: 25.0693, lng: 55.1407 },
  },
]

export default function DubaiMapSection() {
  // Use the static map component instead of Google Maps to avoid API key exposure
  return <DubaiMapStatic />
}
