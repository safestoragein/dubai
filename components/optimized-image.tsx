"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  lowQualitySrc?: string
  loadingColor?: string
}

export default function OptimizedImage({
  src,
  alt,
  lowQualitySrc,
  loadingColor = "#f3f4f6",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`image-${alt?.replace(/\s+/g, "-").toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [alt])

  useEffect(() => {
    if (isInView && lowQualitySrc) {
      setImgSrc(src)
    }
  }, [isInView, lowQualitySrc, src])

  return (
    <div
      id={`image-${alt?.replace(/\s+/g, "-").toLowerCase()}`}
      className="relative overflow-hidden"
      style={{
        backgroundColor: loadingColor,
        ...props.style,
      }}
    >
      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${props.className || ""} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      />
    </div>
  )
}
