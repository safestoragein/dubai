"use client"

  import { motion } from "framer-motion"
  import { CheckCircle2, Send, Home, Briefcase, ChevronDown } from "lucide-react"
  import Image from "next/image"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
  import { useQuoteForm } from "@/hooks/use-quote-form"
  import { useState } from "react"

  export default function QuoteForm() {
    const { formData, isSubmitting, formStatus, handleInputChange, handleSelectChange, submitForm, resetForm } =
      useQuoteForm()

    const [formType, setFormType] = useState<"household" | "business">("household")
    const [selectedHomeSize, setSelectedHomeSize] = useState("")
    const [isHomeSizeOpen, setIsHomeSizeOpen] = useState(false)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    const homeSizeOptions = [
      { value: "1RK", label: "1 RK" },
      { value: "1BHK", label: "1 BHK" },
      { value: "2BHK", label: "2 BHK" },
      { value: "3BHK", label: "3 BHK" },
      { value: "3BHK+", label: "More than 3 BHK" }
    ]

    const handleFormTypeChange = (type: "household" | "business") => {
      setFormType(type)
      handleSelectChange("storage_type", type === "household" ? "household" : "business")
      // Clear storage_size when switching forms
      handleSelectChange("storage_size", "")
      setSelectedHomeSize("")
    }

    const handleHomeSizeSelect = (value: string) => {
      setSelectedHomeSize(value)
      handleSelectChange("storage_size", value)
      setIsHomeSizeOpen(false)
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-8 border border-dubai-gold/20"
      >
        {formStatus?.success ? (
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
            >
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-dubai-navy">Quote Request Received!</h3>
            <p className="text-dubai-navy/70 mb-8">{formStatus.message}</p>
            <Button onClick={() => resetForm()} className="bg-dubai-gold hover:bg-dubai-darkgold text-white">
              Request Another Quote
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-dubai-navy mb-2">Request Your Free Quote</h2>
              <p className="text-dubai-navy/70">
                Fill out the form below and we'll get back to you with a personalized quote
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button
                type="button"
                variant={formType === "household" ? "default" : "outline"}
                onClick={() => handleFormTypeChange("household")}
                className={formType === "household"
                  ? "bg-dubai-gold hover:bg-dubai-darkgold text-white py-6"
                  : "border-dubai-gold/30 hover:border-dubai-gold hover:bg-dubai-gold/10 py-6"}
              >
                <Home className="mr-2 h-5 w-5" />
                Household
              </Button>
              <Button
                type="button"
                variant={formType === "business" ? "default" : "outline"}
                onClick={() => handleFormTypeChange("business")}
                className={formType === "business"
                  ? "bg-dubai-gold hover:bg-dubai-darkgold text-white py-6"
                  : "border-dubai-gold/30 hover:border-dubai-gold hover:bg-dubai-gold/10 py-6"}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Business
              </Button>
            </div>

            {/* Household Form */}
            {formType === "household" && (
              <form onSubmit={submitForm} className="space-y-5">
                <input type="hidden" name="storage_type" value="household" />
                <div className="space-y-2">
                  <Label htmlFor="customer_name" className="text-dubai-navy">
                    Full Name*
                  </Label>
                  <Input
                    id="customer_name"
                    name="customer_name"
                    placeholder="John Doe"
                    required
                    value={formData.customer_name}
                    onChange={handleInputChange}
                    className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="customer_email" className="text-dubai-navy">
                      Email Address*
                    </Label>
                    <Input
                      id="customer_email"
                      name="customer_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.customer_email}
                      onChange={handleInputChange}
                      className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_contact1" className="text-dubai-navy">
                      Phone Number*
                    </Label>
                    <Input
                      id="customer_contact1"
                      name="customer_contact1"
                      placeholder="+971 XX XXX XXXX"
                      required
                      value={formData.customer_contact1}
                      onChange={handleInputChange}
                      className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                    />
                  </div>
                </div>

                {/* Custom Home Size Selector */}
                <div className="space-y-2">
                  <Label className="text-dubai-navy">
                    Home Size
                  </Label>
                  <div className="relative">
                    <div
                      onClick={() => setIsHomeSizeOpen(!isHomeSizeOpen)}
                      className="w-full p-3 border border-dubai-navy/20 rounded-md cursor-pointer hover:border-dubai-gold focus:border-dubai-gold focus:ring-1 focus:ring-dubai-gold/20
  transition-colors flex items-center justify-between bg-white"
                    >
                      <span className={selectedHomeSize ? "text-dubai-navy" : "text-gray-500"}>
                        {selectedHomeSize ? homeSizeOptions.find(opt => opt.value === selectedHomeSize)?.label : "Select home size"}
                      </span>
                      <ChevronDown className={`h-4 w-4 text-dubai-navy/50 transition-transform ${isHomeSizeOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isHomeSizeOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-dubai-navy/20 rounded-md shadow-lg">
                        {homeSizeOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => handleHomeSizeSelect(option.value)}
                            className="px-3 py-2 hover:bg-dubai-gold/10 cursor-pointer transition-colors text-dubai-navy"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-dubai-navy/60 mt-1">
                    Closed space
                  </p>
                </div>

                {/* Dynamic Storage Box Display */}
                {selectedHomeSize && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 p-4 bg-gray-50 rounded-lg border border-dubai-navy/10"
                  >
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-dubai-navy mb-2">
                        Storage Requirements for {homeSizeOptions.find(opt => opt.value === selectedHomeSize)?.label}
                      </h4>
                      <div className="flex justify-center items-center gap-3 mb-3">
                        {Array.from({ length: selectedHomeSize === "1RK" || selectedHomeSize === "1BHK" ? 1 : 
                                                selectedHomeSize === "2BHK" ? 2 : 
                                                selectedHomeSize === "3BHK" ? 3 : 4 }, (_, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                            className="relative"
                          >
                            <Image
                              src="/pallet.png"
                              alt="Storage Pallet"
                              width={80}
                              height={80}
                              className="rounded-lg shadow-sm border border-dubai-gold/20 cursor-pointer hover:shadow-md transition-shadow"
                              onClick={() => setIsImageModalOpen(true)}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-xs text-dubai-navy/70">
                        {selectedHomeSize === "1RK" || selectedHomeSize === "1BHK" 
                          ? "Typically requires 1 storage unit for your belongings" 
                          : selectedHomeSize === "2BHK" 
                          ? "Typically requires 2 storage units for optimal organization"
                          : selectedHomeSize === "3BHK"
                          ? "Typically requires 3 storage units for all your items"
                          : "Typically requires 4+ storage units for larger homes"}
                      </p>
                    </div>
                  </motion.div>
                )}

                {formStatus?.message && !formStatus.success && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">{formStatus.message}</div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Get My Free Quote
                    </span>
                  )}
                </Button>
              </form>
            )}

            {/* Business Form */}
            {formType === "business" && (
              <form onSubmit={submitForm} className="space-y-5">
                <input type="hidden" name="storage_type" value="business" />
                <div className="space-y-2">
                  <Label htmlFor="company_name" className="text-dubai-navy">
                    Company Name*
                  </Label>
                  <Input
                    id="company_name"
                    name="company_name"
                    placeholder="ABC Company Ltd."
                    required
                    value={formData.company_name}
                    onChange={handleInputChange}
                    className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer_name" className="text-dubai-navy">
                    Contact Person Name*
                  </Label>
                  <Input
                    id="customer_name"
                    name="customer_name"
                    placeholder="John Doe"
                    required
                    value={formData.customer_name}
                    onChange={handleInputChange}
                    className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="customer_email" className="text-dubai-navy">
                      Business Email*
                    </Label>
                    <Input
                      id="customer_email"
                      name="customer_email"
                      type="email"
                      placeholder="contact@company.com"
                      required
                      value={formData.customer_email}
                      onChange={handleInputChange}
                      className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_contact1" className="text-dubai-navy">
                      Business Phone*
                    </Label>
                    <Input
                      id="customer_contact1"
                      name="customer_contact1"
                      placeholder="+971 XX XXX XXXX"
                      required
                      value={formData.customer_contact1}
                      onChange={handleInputChange}
                      className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storage_size" className="text-dubai-navy">
                    Required Storage Space (sq ft)*
                  </Label>
                  <div className="relative">
                    <Input
                      id="storage_size"
                      name="storage_size"
                      type="text"
                      placeholder="Enter square footage (e.g., 250)"
                      required
                      value={formData.storage_size}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Only allow numbers
                        if (value === "" || /^\d+$/.test(value)) {
                          handleInputChange(e);
                        }
                      }}
                      className="border-dubai-navy/20 focus:border-dubai-gold focus:ring-dubai-gold/20 pr-16"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dubai-navy/50 text-sm">
                      sq ft
                    </span>
                  </div>
                  <p className="text-xs text-dubai-navy/60 mt-1">
                    Open shared space
                  </p>
                  <p className="text-xs text-dubai-navy/60 mt-1">
                    Common sizes: Small (50-100 sq ft), Medium (100-300 sq ft), Large (300+ sq ft)
                  </p>
                </div>

                {formStatus?.message && !formStatus.success && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">{formStatus.message}</div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Get Business Quote
                    </span>
                  )}
                </Button>
              </form>
            )}
          </>
        )}

        {/* Image Modal */}
        <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
          <DialogContent className="max-w-md">
            <DialogTitle className="text-lg font-semibold text-dubai-navy mb-4">
              Storage Pallet Preview
            </DialogTitle>
            <div className="flex justify-center">
              <Image
                src="/pallet.png"
                alt="Storage Pallet - Full Size"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-sm text-dubai-navy/70 text-center mt-4">
              This is the type of storage unit/pallet that will be used for your items.
            </p>
          </DialogContent>
        </Dialog>
      </motion.div>
    )
  }
