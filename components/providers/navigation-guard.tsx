"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { m, AnimatePresence } from 'framer-motion'
import { X, Phone, ArrowRight } from 'lucide-react'

interface NavigationGuardContextType {
  setNavigationGuard: (guard: boolean) => void
  setFormData: (data: any) => void
  setCurrentStep: (step: number) => void
}

const NavigationGuardContext = createContext<NavigationGuardContextType | undefined>(undefined)

export const useNavigationGuard = () => {
  const context = useContext(NavigationGuardContext)
  if (!context) {
    throw new Error('useNavigationGuard must be used within NavigationGuardProvider')
  }
  return context
}

interface NavigationGuardProviderProps {
  children: ReactNode
}

export function NavigationGuardProvider({ children }: NavigationGuardProviderProps) {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null)
  const [formData, setFormDataState] = useState<any>(null)
  const [currentStep, setCurrentStepState] = useState(1)
  const [isExitIntent, setIsExitIntent] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const setNavigationGuard = useCallback((guard: boolean) => {
    setHasUnsavedChanges(guard)
  }, [])

  const setFormData = useCallback((data: any) => {
    setFormDataState(data)
  }, [])

  const setCurrentStep = useCallback((step: number) => {
    setCurrentStepState(step)
  }, [])

  // Intercept link clicks
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only intercept if we're on the quote page with unsaved changes
      if (!pathname.includes('/get-quote') || !hasUnsavedChanges || currentStep === 3) {
        return
      }

      // Check if clicked element is a link or within a link
      let target = e.target as HTMLElement
      let link: HTMLAnchorElement | null = null

      // Traverse up to find anchor element
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          link = target as HTMLAnchorElement
          break
        }
        target = target.parentElement as HTMLElement
      }

      if (link && link.href) {
        const url = new URL(link.href)
        
        // Only intercept internal navigation (not external links)
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          e.preventDefault()
          e.stopPropagation()
          setPendingNavigation(url.pathname)
          setIsExitIntent(false)
          setShowExitPopup(true)
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname, hasUnsavedChanges, currentStep])

  // Exit intent detection (mouse leave and beforeunload)
  React.useEffect(() => {
    if (!pathname.includes('/get-quote') || !hasUnsavedChanges || currentStep === 3) {
      return
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitPopup) {
        setIsExitIntent(true)
        setPendingNavigation(null)
        setShowExitPopup(true)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [pathname, hasUnsavedChanges, currentStep, showExitPopup])

  const handleContinue = () => {
    setPendingNavigation(null)
    setShowExitPopup(false)
  }

  const handleLeave = () => {
    if (formData) {
      localStorage.setItem('savedQuoteForm', JSON.stringify(formData))
      localStorage.setItem('savedQuoteStep', currentStep.toString())
    }
    
    if (pendingNavigation) {
      router.push(pendingNavigation)
    } else if (isExitIntent) {
      // If it's exit intent without navigation, go to home
      router.push('/')
    }
    
    setPendingNavigation(null)
    setShowExitPopup(false)
    setHasUnsavedChanges(false)
    setIsExitIntent(false)
  }

  return (
    <NavigationGuardContext.Provider value={{ setNavigationGuard, setFormData, setCurrentStep }}>
      {children}
    </NavigationGuardContext.Provider>
  )
}