"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Linkedin, Link, Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // Ensure we have the full URL
  const fullUrl = url.startsWith("http") ? url : `${typeof window !== "undefined" ? window.location.origin : ""}${url}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: string) => {
    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-2">
        <Share2 className="h-5 w-5" />
        <h3 className="font-bold">Share this article</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => handleShare("facebook")} className="flex items-center gap-1">
          <Facebook className="h-4 w-4 text-[#1877F2]" />
          <span className="hidden sm:inline">Facebook</span>
        </Button>

        <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="flex items-center gap-1">
          <Twitter className="h-4 w-4 text-[#1DA1F2]" />
          <span className="hidden sm:inline">Twitter</span>
        </Button>

        <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="flex items-center gap-1">
          <Linkedin className="h-4 w-4 text-[#0A66C2]" />
          <span className="hidden sm:inline">LinkedIn</span>
        </Button>

        <Button variant="outline" size="sm" onClick={handleCopyLink} className="flex items-center gap-1">
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link className="h-4 w-4" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Link"}</span>
        </Button>
      </div>
    </div>
  )
}
