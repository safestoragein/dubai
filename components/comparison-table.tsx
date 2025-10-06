import { Check, X, AlertTriangle } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    { name: "24/7 Security & CCTV Monitoring", safestorage: "yes", others: "limited" },
    { name: "Climate-Controlled Units", safestorage: "yes", others: "no" },
    { name: "Flexible Payment Plans", safestorage: "yes", others: "no" },
    { name: "Free Pickup & Delivery", safestorage: "yes", others: "no" },
    { name: "Online Booking & Instant Quote", safestorage: "yes", others: "no" },
    { name: "Customer Support 24/7", safestorage: "yes", others: "no" },
    { name: "No Hidden Fees", safestorage: "yes", others: "limited" },
  ]

  const renderStatus = (status: string) => {
    switch (status) {
      case "yes":
        return <Check className="h-6 w-6 text-green-500" />
      case "no":
        return <X className="h-6 w-6 text-red-500" />
      case "limited":
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">SafeStorage Dubai 🏆</th>
            <th className="p-4 text-center">Other Storage Providers ❌</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b hover:bg-muted/50">
              <td className="p-4">{feature.name}</td>
              <td className="p-4 text-center">{renderStatus(feature.safestorage)}</td>
              <td className="p-4 text-center">{renderStatus(feature.others)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
