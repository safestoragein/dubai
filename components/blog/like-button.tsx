"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LikeButtonProps {
  postId: string
  initialLikes?: number
}

export default function LikeButton({ postId, initialLikes = 0 }: LikeButtonProps) {
  // In a real app, this would be fetched from a database
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  // Check if user has already liked this post (using localStorage)
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}")
    setLiked(!!likedPosts[postId])
  }, [postId])

  const handleLike = () => {
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
      size="sm"
      onClick={handleLike}
      className={`flex items-center gap-1 ${liked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-700"}`}
      aria-label={liked ? "Unlike this post" : "Like this post"}
    >
      <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
      <span>{likes}</span>
    </Button>
  )
}
