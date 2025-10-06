"use client"

import { useState, useEffect, type ReactNode } from "react"
import { X } from "lucide-react"

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

const toastStore: {
  toasts: ToastProps[]
  add: (toast: ToastProps) => void
  remove: (index: number) => void
} = {
  toasts: [],
  add: () => {},
  remove: () => {},
}

export function toast(props: ToastProps) {
  toastStore.add(props)
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    toastStore.toasts = toasts
    toastStore.add = (toast) => {
      setToasts((prev) => [...prev, toast])

      if (toast.duration !== Number.POSITIVE_INFINITY) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t !== toast))
        }, toast.duration || 3000)
      }
    }
    toastStore.remove = (index) => {
      setToasts((prev) => prev.filter((_, i) => i !== index))
    }
  }, [toasts])

  return (
    <>
      {children}
      <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col gap-2 max-w-md">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 animate-in slide-in-from-right"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{toast.title}</h3>
                {toast.description && <p className="text-sm text-muted-foreground">{toast.description}</p>}
              </div>
              <button onClick={() => toastStore.remove(index)} className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
