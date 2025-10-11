"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const RichTextEditor = dynamic(
  () => import("./rich-text-editor"),
  {
    ssr: false,
    loading: () => (
      <div className="border rounded-md p-4 bg-gray-50 animate-pulse" style={{ minHeight: "400px" }}>
        <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    ),
  }
)

interface EditorWrapperProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  height?: string
}

export default function EditorWrapper(props: EditorWrapperProps) {
  return (
    <Suspense fallback={
      <div className="border rounded-md p-4 bg-gray-50 animate-pulse" style={{ minHeight: props.height || "400px" }}>
        <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    }>
      <RichTextEditor {...props} />
    </Suspense>
  )
}