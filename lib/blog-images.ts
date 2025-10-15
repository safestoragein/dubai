// Random storage-related images from Unsplash
const storageImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Storage boxes
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', // Warehouse
  'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=800&q=80', // Moving boxes
  'https://images.unsplash.com/photo-1595246135406-803418233494?w=800&q=80', // Storage units
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', // Organized storage
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80', // Packing
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80', // Home organization
  'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80', // Warehouse interior
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Storage facility
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80', // Organized shelves
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', // Modern interior
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', // Storage room
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', // Organized space
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', // Boxes stacked
  'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80', // Clean storage
]

const businessImages = [
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80', // Office space
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', // Office interior
  'https://images.unsplash.com/photo-1497366754035-f200581a8d4b?w=800&q=80', // Modern office
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', // Business meeting
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Business building
]

const movingImages = [
  'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80', // Moving truck
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80', // Packing boxes
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=80', // Moving day
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Packed items
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', // Loading truck
]

const sustainabilityImages = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', // Green building
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80', // Solar panels
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80', // Green energy
  'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80', // Sustainable
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80', // Nature
]

const vehicleImages = [
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80', // Cars parked
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', // Luxury car
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', // Car storage
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', // Sports car
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', // Premium cars
]

export function getRandomBlogImage(category?: string, index?: number): string {
  // Select image array based on category
  let imageArray = storageImages
  
  if (category) {
    const lowerCategory = category.toLowerCase()
    if (lowerCategory.includes('business') || lowerCategory.includes('office')) {
      imageArray = businessImages
    } else if (lowerCategory.includes('moving') || lowerCategory.includes('relocation')) {
      imageArray = movingImages
    } else if (lowerCategory.includes('sustain') || lowerCategory.includes('eco')) {
      imageArray = sustainabilityImages
    } else if (lowerCategory.includes('vehicle') || lowerCategory.includes('car')) {
      imageArray = vehicleImages
    }
  }
  
  // Use index for consistent images per blog, or random if no index
  if (index !== undefined) {
    return imageArray[index % imageArray.length]
  }
  
  return imageArray[Math.floor(Math.random() * imageArray.length)]
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Storage Tips': 'bg-blue-500',
    'Storage Guide': 'bg-indigo-500',
    'Business Storage': 'bg-purple-500',
    'Moving & Relocation': 'bg-green-500',
    'Household Storage': 'bg-yellow-500',
    'Vehicle Storage': 'bg-red-500',
    'Sustainability': 'bg-emerald-500',
    'Emergency Services': 'bg-orange-500',
    'Specialty Storage': 'bg-pink-500',
    'Student Storage': 'bg-cyan-500',
    'Expat Services': 'bg-teal-500',
    'Security': 'bg-slate-600',
  }
  
  return colors[category] || 'bg-gray-500'
}