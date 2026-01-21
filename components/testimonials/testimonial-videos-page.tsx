"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Star, ChevronLeft, ChevronRight, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { testimonialVideos } from "@/data/testimonial-videos"

export default function TestimonialVideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const videoRef = useRef<HTMLDivElement>(null)

  // Get unique categories from videos
  const categories = ["all", ...Array.from(new Set(testimonialVideos.map((video) => video.category)))]

  // Filter videos by category
  const filteredVideos =
    selectedCategory === "all"
      ? testimonialVideos
      : testimonialVideos.filter((video) => video.category === selectedCategory)

  // Handle window-related operations after component is mounted
  useEffect(() => {
    setIsMounted(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleVideoSelect = (videoId: string) => {
    setActiveVideo(videoId)
    setIsPlaying(true)

    // Scroll to video player on mobile - only execute in browser
    if (isMounted && windowWidth < 768) {
      document.getElementById("video-player")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Calculate maxIndex based on window width, but only on client
  const getMaxIndex = () => {
    if (!isMounted) return 0

    if (windowWidth >= 1024) {
      return Math.max(0, testimonialVideos.length - 3)
    } else if (windowWidth >= 768) {
      return Math.max(0, testimonialVideos.length - 2)
    } else {
      return Math.max(0, testimonialVideos.length - 1)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dubai-navy to-dubai-navy/90 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-dubai-gold rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Video play icons floating in background */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`play-${i}`}
              className="absolute text-dubai-gold/10"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                fontSize: `${30 + Math.random() * 40}px`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Play />
            </motion.div>
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 bg-dubai-gold text-white text-sm font-medium rounded-full mb-6"
            >
              Customer Stories
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Hear From Our <span className="text-dubai-gold">Satisfied</span> Customers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Watch "How SafeStorage Changed My Life" and other real stories from our satisfied customers
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-dubai-gold hover:bg-dubai-darkgold text-white"
                onClick={() => {
                  if (isMounted) {
                    document.getElementById("video-gallery")?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Watch Testimonials
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="video-gallery" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Video Player Column */}
            <div className="md:w-2/3">
              <div id="video-player" className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-video"
                >
                  {activeVideo ? (
                    <div ref={videoRef} className="w-full h-full bg-dubai-navy flex items-center justify-center">
                      <div className="text-center p-8">
                        <Play className="w-20 h-20 mx-auto mb-6 text-dubai-gold" />
                        <h3 className="text-2xl font-semibold text-white">Video Coming Soon</h3>
                        <p className="text-white/70 mt-3 max-w-md mx-auto">
                          Our customer testimonial videos will be available shortly. Stay tuned!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-dubai-navy/90">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-dubai-gold mx-auto mb-4" />
                        <p className="text-white text-xl">Select a video to watch</p>
                      </div>
                    </div>
                  )}

                  {activeVideo && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                        onClick={handlePlayPause}
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Video Information */}
              {activeVideo && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                  {testimonialVideos
                    .filter((video) => video.videoId === activeVideo)
                    .map((video) => (
                      <div key={video.videoId}>
                        <h2 className="text-2xl font-bold mb-2 text-dubai-navy">{video.title}</h2>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge className="bg-dubai-gold text-white">{video.category}</Badge>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < video.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-dubai-navy/70">{video.description}</p>
                      </div>
                    ))}
                </motion.div>
              )}

              {/* Mobile Video List (visible on small screens) */}
              <div className="md:hidden">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-dubai-navy">More Testimonials</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>

                {showFilters && (
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Filter by Category</h4>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowFilters(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={
                            selectedCategory === category ? "bg-dubai-gold text-white" : "hover:bg-dubai-gold/10"
                          }
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4">
                  {filteredVideos.map((video) => (
                    <motion.div
                      key={video.videoId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-xl cursor-pointer transition-colors ${
                        activeVideo === video.videoId
                          ? "bg-dubai-gold/10 border border-dubai-gold/30"
                          : "bg-gray-50 hover:bg-dubai-gold/5 border border-transparent"
                      }`}
                      onClick={() => handleVideoSelect(video.videoId)}
                    >
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-dubai-navy/10">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-8 w-8 text-dubai-navy/50" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold line-clamp-2">{video.title}</h3>
                          <p className="text-sm text-dubai-navy/60 mb-1">{video.customer}</p>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < video.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Video List (hidden on small screens) */}
            <div className="md:w-1/3 hidden md:block">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-dubai-navy">Filter Testimonials</h3>
                  <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="grid grid-cols-3 mb-4">
                      {categories.slice(0, 3).map((category) => (
                        <TabsTrigger key={category} value={category} className="capitalize">
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {categories.length > 3 && (
                      <TabsList className="grid grid-cols-3">
                        {categories.slice(3).map((category) => (
                          <TabsTrigger key={category} value={category} className="capitalize">
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    )}
                  </Tabs>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-dubai-navy text-white">
                    <h3 className="font-bold">Customer Testimonials</h3>
                  </div>
                  <div className="divide-y max-h-[600px] overflow-y-auto">
                    {filteredVideos.map((video) => (
                      <motion.div
                        key={video.videoId}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        className={`p-4 cursor-pointer transition-colors ${
                          activeVideo === video.videoId ? "bg-dubai-gold/10" : "hover:bg-gray-50"
                        }`}
                        onClick={() => handleVideoSelect(video.videoId)}
                      >
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-dubai-navy/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="h-6 w-6 text-dubai-navy/50" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold line-clamp-2">{video.title}</h3>
                            <p className="text-sm text-dubai-navy/60 mb-1">{video.customer}</p>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${i < video.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dubai-navy">Featured Testimonials</h2>
            <p className="text-dubai-navy/70 max-w-2xl mx-auto">
              Watch our most impactful customer stories and see why SafeStorage Dubai is the preferred choice for
              storage solutions
            </p>
          </div>

          <TestimonialCarousel
            videos={testimonialVideos.filter((video) => video.featured)}
            onSelect={handleVideoSelect}
            isMounted={isMounted}
            windowWidth={windowWidth}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dubai-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join our satisfied customers and discover why SafeStorage Dubai is the most trusted storage solution
              provider in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-dubai-gold hover:bg-dubai-darkgold text-white" asChild>
                <a href="/get-quote">Get a Free Quote</a>
              </Button>
              <a href='tel:+971505773388'><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                Contact Us
              </Button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Testimonial Carousel Component
function TestimonialCarousel({
  videos,
  onSelect,
  isMounted,
  windowWidth,
}: {
  videos: any[]
  onSelect: (id: string) => void
  isMounted: boolean
  windowWidth: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate maxIndex based on window width, but only on client
  const maxIndex = isMounted ? Math.max(0, videos.length - (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1)) : 0

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // Calculate the width percentage based on screen size
  const getWidthPercentage = () => {
    if (!isMounted) return "100%"

    if (windowWidth >= 1024) {
      return `${(videos.length * 100) / 3}%`
    } else if (windowWidth >= 768) {
      return `${(videos.length * 100) / 2}%`
    } else {
      return `${videos.length * 100}%`
    }
  }

  // Calculate the translation percentage based on screen size
  const getTranslationPercentage = () => {
    if (!isMounted) return "0%"

    if (windowWidth >= 1024) {
      return `-${currentIndex * (100 / 3)}%`
    } else if (windowWidth >= 768) {
      return `-${currentIndex * (100 / 2)}%`
    } else {
      return `-${currentIndex * 100}%`
    }
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={false}
          animate={{
            x: getTranslationPercentage(),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: getWidthPercentage(),
          }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.videoId}
              className="w-full lg:w-1/3 md:w-1/2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => onSelect(video.videoId)}
              >
                <div className="relative aspect-video bg-dubai-navy/10">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-dubai-gold/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  {video.featured && (
                    <div className="absolute top-2 right-2 bg-dubai-gold text-white text-xs font-bold px-2 py-1 rounded">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-dubai-navy/60 text-sm mb-2">{video.customer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < video.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <Badge>{video.category}</Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isMounted && videos.length > (windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1) && (
        <div className="flex justify-center mt-8 gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
