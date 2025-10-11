"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

// Dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  height?: string
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Start writing your blog post...",
  height = "400px"
}: RichTextEditorProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modules = {
    toolbar: {
      container: [
        // Headers dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
        // Font size dropdown
        [{ 'size': ['small', false, 'large', 'huge'] }],
        
        // Font family
        [{ 'font': [] }],
        
        // Text formatting
        ['bold', 'italic', 'underline', 'strike'],
        
        // Text color and background
        [{ 'color': [] }, { 'background': [] }],
        
        // Subscript/Superscript
        [{ 'script': 'sub'}, { 'script': 'super' }],
        
        // Headers as individual buttons
        [{ 'header': 1 }, { 'header': 2 }],
        
        // Lists
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        
        // Text alignment
        [{ 'align': [] }],
        
        // Direction
        [{ 'direction': 'rtl' }],
        
        // Blockquote and code block
        ['blockquote', 'code-block'],
        
        // Links, images, and videos
        ['link', 'image', 'video'],
        
        // Clear formatting
        ['clean']
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'script',
    'align',
    'direction',
    'link',
    'image',
    'video',
    'color',
    'background',
  ]

  if (!mounted) {
    return (
      <div 
        className="border rounded-md p-4 bg-gray-50 animate-pulse" 
        style={{ minHeight: height }}
      >
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }

  return (
    <div className="rich-text-editor">
      <style jsx global>{`
        .rich-text-editor .ql-container {
          font-size: 16px;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          background-color: #f9fafb;
          border-color: #e5e7eb;
        }
        
        .rich-text-editor .ql-editor {
          min-height: ${height};
          max-height: 600px;
          overflow-y: auto;
        }
        
        .rich-text-editor .ql-editor h1 {
          font-size: 2.5em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        
        .rich-text-editor .ql-editor h2 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        
        .rich-text-editor .ql-editor h3 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        
        .rich-text-editor .ql-editor h4 {
          font-size: 1.25em;
          font-weight: bold;
          margin: 1.12em 0;
        }
        
        .rich-text-editor .ql-editor h5 {
          font-size: 1em;
          font-weight: bold;
          margin: 1.5em 0;
        }
        
        .rich-text-editor .ql-editor h6 {
          font-size: 0.85em;
          font-weight: bold;
          margin: 1.67em 0;
        }
        
        .rich-text-editor .ql-editor p {
          margin: 1em 0;
        }
        
        .rich-text-editor .ql-editor a {
          color: #3b82f6;
          text-decoration: underline;
        }
        
        .rich-text-editor .ql-editor blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 16px;
          margin: 1em 0;
          color: #6b7280;
        }
        
        .rich-text-editor .ql-editor pre {
          background-color: #f3f4f6;
          border-radius: 0.375rem;
          padding: 12px;
          overflow-x: auto;
          margin: 1em 0;
        }
        
        .rich-text-editor .ql-editor img {
          max-width: 100%;
          height: auto;
          margin: 1em 0;
        }
        
        .rich-text-editor .ql-tooltip {
          z-index: 9999;
        }
        
        .rich-text-editor .ql-snow .ql-tooltip.ql-editing input[type=text] {
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          padding: 4px 8px;
        }
      `}</style>
      
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  )
}