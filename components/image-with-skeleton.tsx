"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoadingComplete"> {
  skeletonClassName?: string
}

export default function ImageWithSkeleton({
  skeletonClassName = "bg-gray-200 animate-pulse",
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative">
      {!isLoaded && (
        <div
          className={`absolute inset-0 ${skeletonClassName}`}
          style={{
            width: props.width ? `${props.width}px` : "100%",
            height: props.height ? `${props.height}px` : "100%",
          }}
        />
      )}
      <Image
        {...props}
        onLoad={() => setIsLoaded(true)}
        className={`${props.className || ""} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      />
    </div>
  )
}
