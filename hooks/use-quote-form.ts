"use client"

import type React from "react"

import { useState } from "react"
import { submitQuoteForm } from "@/actions/quote-form-actions"
import { submitQuoteFormAlt } from "@/actions/quote-form-actions-alt"
import { useRouter } from "next/navigation"

export interface QuoteFormData {
  customer_name: string
  company_name: string
  customer_email: string
  customer_contact1: string
  storage_type: string
  storage_size: string
}

export interface QuoteFormStatus {
  success?: boolean
  message?: string
  shouldRedirect?: boolean
  redirectUrl?: string
}

export function useQuoteForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<QuoteFormData>({
    customer_name: "",
    company_name: "",
    customer_email: "",
    customer_contact1: "",
    storage_type: "",
    storage_size: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<QuoteFormStatus | null>(null)
  const [useAltAction, setUseAltAction] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData({
      customer_name: "",
      company_name: "",
      customer_email: "",
      customer_contact1: "",
      storage_type: "",
      storage_size: "",
    })
    setFormStatus(null)
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object with the exact field names required by the API
      const formDataObj = new FormData()
      formDataObj.append("customer_name", formData.customer_name)
      if (formData.company_name) formDataObj.append("company_name", formData.company_name)
      formDataObj.append("customer_email", formData.customer_email)
      formDataObj.append("customer_contact1", formData.customer_contact1)
      if (formData.storage_type) formDataObj.append("storage_type", formData.storage_type)
      if (formData.storage_size) formDataObj.append("storage_size", formData.storage_size)

      // Call the appropriate server action
      const result = useAltAction ? await submitQuoteFormAlt(formDataObj) : await submitQuoteForm(formDataObj)

      // Check if we should redirect
      if (result.success && result.shouldRedirect && result.redirectUrl) {
        router.push(result.redirectUrl)
        return
      }

      // If the first action fails, try the alternative
      if (!result.success && !useAltAction) {
        setUseAltAction(true)
        const altResult = await submitQuoteFormAlt(formDataObj)

        // Check if the alternative action succeeded and should redirect
        if (altResult.success && altResult.shouldRedirect && altResult.redirectUrl) {
          router.push(altResult.redirectUrl)
          return
        }

        // Handle the alternative result if no redirect
        if (altResult.success) {
          setFormStatus({
            success: true,
            message: "Thank you for your inquiry! Our team will contact you shortly.",
          })
          // Reset form on success
          resetForm()
        } else {
          setFormStatus({
            success: false,
            message: altResult.message || "There was an error submitting your request. Please try again.",
          })
        }
      } else if (result.success) {
        // Handle success if no redirect
        setFormStatus({
          success: true,
          message: "Thank you for your inquiry! Our team will contact you shortly.",
        })
        // Reset form on success
        resetForm()
      } else {
        // Handle error
        setFormStatus({
          success: false,
          message: result.message || "There was an error submitting your request. Please try again.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        success: false,
        message: "There was an error submitting your request. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    formStatus,
    handleInputChange,
    handleSelectChange,
    submitForm,
    resetForm,
    setFormStatus,
  }
}
