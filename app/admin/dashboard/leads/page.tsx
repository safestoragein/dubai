"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  message?: string
  createdAt: string
  status: string
}

export default function LeadsManagement() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching leads (in production, this would be an API call)
    setTimeout(() => {
      setLeads([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+971 50 123 4567",
          message: "Looking for 30 sq ft storage",
          createdAt: new Date().toISOString(),
          status: "new"
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+971 55 987 6543",
          message: "Need business storage solution",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          status: "contacted"
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status: string) => {
    switch(status) {
      case "new": return "bg-blue-100 text-blue-800"
      case "contacted": return "bg-green-100 text-green-800"
      case "converted": return "bg-purple-100 text-purple-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Lead Management</h2>
        <p className="mt-2 text-gray-600">View and manage customer inquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leads.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">New Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {leads.filter(l => l.status === "new").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">Contacted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {leads.filter(l => l.status === "contacted").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No leads yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Contact</th>
                    <th className="text-left py-3 px-4">Message</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{lead.name}</td>
                      <td className="py-3 px-4">
                        <div className="text-sm">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="py-3 px-4 max-w-xs">
                        <div className="text-sm truncate">{lead.message}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const updatedLeads = leads.map(l => 
                                l.id === lead.id ? {...l, status: "contacted"} : l
                              )
                              setLeads(updatedLeads)
                            }}
                          >
                            Mark Contacted
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}