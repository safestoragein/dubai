export interface Author {
  name: string
  avatar: string
  role?: string
}

export interface Comment {
  id: number
  author: Author
  content: string
  date: string
  likes: number
  replies?: Comment[]
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: Author
  readTime: string
  categories: string[]
  tags?: string[]
  likes: number
  shares: number
  comments: Comment[]
  views: number
  featured?: boolean
  popular?: boolean
  recommended?: boolean
}
