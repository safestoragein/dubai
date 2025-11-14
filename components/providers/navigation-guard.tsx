"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
      
      {/* Exit Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            onClick={() => setShowExitPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 max-w-lg w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fun background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
              
              {/* Close button */}
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Emoji and Title */}
              <div className="text-center mb-6 relative z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  🛑
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Hold up! Your quote isn't finished!
                </h3>
                <p className="text-slate-600">
                  "Leaving now? That's like packing without bubble wrap!" 📦
                </p>
              </div>

              {/* Warning message */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 mb-6 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚠️</div>
                  <div>
                    <p className="text-amber-900 font-semibold mb-1">
                      You're about to lose your progress!
                    </p>
                    <p className="text-amber-700 text-sm">
                      Your carefully selected items will disappear faster than moving day donuts! 🍩
                    </p>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 relative z-10">
                <button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Stay & Complete Quote (You're almost there! 🏁)
                  </span>
                </button>

                <button
                  onClick={() => {
                    window.open('tel:+971555555555', '_self')
                    setShowExitPopup(false)
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call for Instant Quote! ☎️
                  </span>
                </button>

                <button
                  onClick={handleLeave}
                  className="w-full bg-slate-100 text-slate-600 py-3 rounded-xl font-medium hover:bg-slate-200 transition-all"
                >
                  Save & Leave (We'll keep your spot warm! 🔥)
                </button>
              </div>

              {/* Fun footer message */}
              <div className="text-center mt-6 relative z-10">
                <p className="text-xs text-slate-500">
                  Pro tip: Completing the form unlocks our best discounts! 💰
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationGuardContext.Provider>
  )
}