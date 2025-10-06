"use client"

import { useEffect, useState, type ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

interface LazyMotionProps extends MotionProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  threshold?: number
}

export default function LazyMotion({ children, as = "div", threshold = 0.1, ...motionProps }: LazyMotionProps) {
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
      { threshold },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  const Component = motion[as as keyof typeof motion] || motion.div

  return (
    <Component
      ref={setRef}
      {...motionProps}
      animate={isInView ? motionProps.animate : undefined}
      initial={motionProps.initial}
    >
      {children}
    </Component>
  )
}
