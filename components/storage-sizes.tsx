"use client"

import { m } from "framer-motion"
import { Box, ArrowRight, Home, Briefcase, Warehouse } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { householdStorage, businessStorage } from "@/data/storage-sizes"
import { useState } from "react"

export default function StorageSizes() {
  const [activeTab, setActiveTab] = useState<'household' | 'business'>('household')
  
  const currentStorage = activeTab === 'household' ? householdStorage : businessStorage

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dubai-navy">Find the Perfect Storage Size</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of storage unit sizes to fit your specific needs
          </p>
        </m.div>

        {/* Toggle Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white p-1 rounded-lg border border-gray-200 flex">
            <button
              onClick={() => setActiveTab('household')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'household'
                  ? 'bg-dubai-gold text-white shadow-md'
                  : 'text-gray-600 hover:text-dubai-navy'
              }`}
            >
              <Home className="h-5 w-5" />
              Household
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-dubai-gold text-white shadow-md'
                  : 'text-gray-600 hover:text-dubai-navy'
              }`}
            >
              <Briefcase className="h-5 w-5" />
              Business
            </button>
          </div>
        </m.div>

        {/* Storage Type Description */}
        <div className="text-center mb-8">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-4 max-w-md mx-auto border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-dubai-navy mb-2">
              {activeTab === 'household' ? 'Closed Containers' : 'Open Shared Space'}
            </h3>
            <p className="text-gray-600">
              {activeTab === 'household' 
                ? '35 SqFt Standard containers for secure household storage'
                : 'Flexible square footage for business storage needs'
              }
            </p>
          </m.div>
        </div>

        {/* Storage Cards */}
        <m.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid gap-6 ${
            activeTab === 'household' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {currentStorage.map((option, index) => {
            const Icon = option.icon

            return (
              <m.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-dubai-gold text-white px-3 py-1 rounded-bl-lg text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}

                <div className="relative h-48 bg-gray-50">
                  {option.isCustom ? (
                    // Custom plan design for >3BHK
                    <div className="w-full h-full bg-gradient-to-br from-dubai-gold/20 to-dubai-navy/20 flex flex-col items-center justify-center">
                      <Warehouse className="h-16 w-16 text-dubai-gold mb-4" />
                      <span className="text-dubai-navy font-bold text-lg">Customized Plan</span>
                      <span className="text-gray-600 text-sm">Tailored to your needs</span>
                    </div>
                  ) : option.palletCount ? (
                    // Enhanced pallet display with better spacing
                    <div className="w-full h-full flex flex-col">
                      {/* Header with count */}
                      <div className="bg-dubai-navy/90 text-white px-3 py-2 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Box className="h-4 w-4 text-dubai-gold" />
                          <span className="font-medium text-sm">{option.size}</span>
                        </div>
                      </div>
                      
                      {/* Scrollable container display */}
                      <div className="flex-1 p-3 overflow-hidden">
                        {option.palletCount <= 5 ? (
                          // Normal grid for smaller counts
                          <div className="h-full flex items-center justify-center">
                            <div className={`grid gap-2 ${
                              option.palletCount === 1 ? 'grid-cols-1' :
                              option.palletCount <= 3 ? 'grid-cols-2' :
                              'grid-cols-3'
                            }`}>
                              {Array.from({ length: option.palletCount }, (_, index) => (
                                <div key={index} className="flex flex-col items-center">
                                  <Image
                                    src="/pallet.png"
                                    alt={`Container ${index + 1}`}
                                    width={option.palletCount === 1 ? 80 : option.palletCount <= 3 ? 64 : 48}
                                    height={option.palletCount === 1 ? 80 : option.palletCount <= 3 ? 64 : 48}
                                    className="object-contain"
                                    loading="lazy"
                                  />
                                  <span className="text-xs text-gray-600 mt-1">{index + 1}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Horizontal scroll for larger counts
                          <div className="h-full flex flex-col">
                            <div className="text-center mb-2">
                              <span className="text-xs font-medium text-dubai-navy">
                                {option.palletCount} Containers
                              </span>
                            </div>
                            <div className="flex-1 overflow-x-auto">
                              <div className="flex gap-2 h-full items-center min-w-max px-2">
                                {Array.from({ length: option.palletCount }, (_, index) => (
                                  <div key={index} className="flex flex-col items-center flex-shrink-0">
                                    <Image
                                      src="/pallet.png"
                                      alt={`Container ${index + 1}`}
                                      width={48}
                                      height={48}
                                      className="object-contain"
                                      loading="lazy"
                                    />
                                    <span className="text-xs text-gray-600 mt-1">{index + 1}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="text-center mt-1">
                              <span className="text-xs text-gray-500">← Scroll to view all →</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Business storage images
                    <>
                      <Image
                        src={option.image || `/placeholder.svg?height=300&width=400&query=storage+${option.name}`}
                        alt={`${option.name} - ${option.size}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="flex items-center gap-2 text-white">
                          <Box className="h-4 w-4 text-dubai-gold" />
                          <span className="font-medium text-sm">{option.size}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-dubai-gold/10 rounded-full">
                      <Icon className="h-5 w-5 text-dubai-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-dubai-navy">{option.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{option.description}</p>

                  <Button asChild className="w-full bg-dubai-gold hover:bg-dubai-darkgold text-white">
                    <Link href={`/get-quote?size=${option.id}&type=${option.type}`}>
                      {option.isCustom ? "Fill Your Details" : "Get A Free Quote"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </m.div>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}
