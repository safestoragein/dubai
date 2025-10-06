"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LikeButtonMiniProps {
  postId: string | number
  initialLikes?: number
  size?: "sm" | "md"
  showCount?: boolean
  className?: string
}

export default function LikeButtonMini({
  postId,
  initialLikes = 0,
  size = "sm",
  showCount = true,
  className = "",
}: LikeButtonMiniProps) {
  // In a real app, this would be fetched from a database
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  // Check if user has already liked this post (using localStorage)
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    setLiked(!!likedPosts[postId])
  }, [postId])

  const handleLike = (e: React.MouseEvent) => {
    // Prevent navigation if this is inside a link
    e.preventDefault()
    e.stopPropagation()

    const newLikedState = !liked
    setLiked(newLikedState)

    // Update like count
    setLikes((prev) => (newLikedState ? prev + 1 : prev - 1))

    // Store in localStorage
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    if (newLikedState) {
      likedPosts[postId] = true
    } else {
      delete likedPosts[postId]
    }
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={handleLike}
      className={`flex items-center gap-1 p-0 h-auto ${liked ? "text-red-500 hover:text-red-600" : "text-dubai-navy/60 hover:text-dubai-navy"} ${className}`}
      aria-label={liked ? "Unlike this post" : "Like this post"}
    >
      <Heart className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"} ${liked ? "fill-current" : ""}`} />
      {showCount && <span>{likes}</span>}
    </Button>
  )
}
