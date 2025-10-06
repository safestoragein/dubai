"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Send } from "lucide-react"

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  content: string
  date: string
}

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")
  const [showNameInput, setShowNameInput] = useState(false)

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${postId}`)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }

    const savedName = localStorage.getItem("userName")
    if (savedName) {
      setUserName(savedName)
    }
  }, [postId])

  const handleSubmitName = () => {
    if (userName.trim()) {
      localStorage.setItem("userName", userName)
      setShowNameInput(false)
    }
  }

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    if (!userName) {
      setShowNameInput(true)
      return
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: userName,
        avatar: undefined,
      },
      content: newComment,
      date: new Date().toLocaleDateString(),
    }

    const updatedComments = [...comments, comment]
    setComments(updatedComments)
    localStorage.setItem(`comments_${postId}`, JSON.stringify(updatedComments))
    setNewComment("")
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        <h3 className="text-xl font-bold">Comments ({comments.length})</h3>
      </div>

      {showNameInput ? (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm mb-2">Please enter your name to comment:</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button onClick={handleSubmitName}>Save</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px]"
          />
          <Button onClick={handleSubmitComment} className="self-end bg-dubai-gold hover:bg-dubai-darkgold text-white">
            <Send className="h-4 w-4 mr-2" />
            Post
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center py-6">Be the first to comment on this article!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                  <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{comment.author.name}</p>
                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                </div>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
