import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="mt-2 text-gray-600">Welcome to SafeStorage Admin Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/dashboard/blogs">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>Blog Posts</CardTitle>
              <CardDescription>See what the feed is serving</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">Blogs</div>
              <p className="text-sm text-gray-500 mt-2">
                Read-only. Posts are authored in the safestorage.in dashboard.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/dashboard/leads">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>Lead Management</CardTitle>
              <CardDescription>View and manage customer leads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">Leads</div>
              <p className="text-sm text-gray-500 mt-2">Track customer inquiries</p>
            </CardContent>
          </Card>
        </Link>

        <Card className="opacity-50">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View site analytics and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">Coming Soon</div>
            <p className="text-sm text-gray-500 mt-2">Analytics dashboard</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Link
              href="/admin/dashboard/seo-index"
              className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
            >
              <span className="font-medium">Google Indexing</span>
            </Link>
            <Link
              href="/admin/dashboard/leads" 
              className="block p-3 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
            >
              <span className="font-medium">View Recent Leads</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}