"use client"

import { useEffect, useState, type ReactNode } from "react"
import { m, type MotionProps } from "framer-motion"

interface LazyMotionProps extends MotionProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  threshold?: number
  className?: string
}

export default function LazyMotion({ children, as = "div", threshold = 0.1, className, ...motionProps }: LazyMotionProps) {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '50px' },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  const Component = m[as as keyof typeof m] || m.div

  return (
    <Component
      ref={setRef}
      className={className}
      {...motionProps}
      animate={isInView ? motionProps.animate : undefined}
      initial={motionProps.initial}
    >
      {children}
    </Component>
  )
}
