import { Server, Cloud, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Features = () => {
  const features = [
    {
      icon: <Server className="h-12 w-12 text-cyan-400" />,
      title: "High-Performance VPS",
      description: "Blazing fast SSD storage with dedicated CPU cores and guaranteed RAM for optimal performance.",
    },
    {
      icon: <Cloud className="h-12 w-12 text-cyan-400" />,
      title: "Cloud Infrastructure",
      description: "Enterprise-grade hardware with redundant systems for 99.9% uptime guarantee.",
    },
    {
      icon: <Shield className="h-12 w-12 text-cyan-400" />,
      title: "Advanced Security",
      description: "DDoS protection, firewall, and regular security updates to keep your data safe.",
    },
  ]

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our VPS Hosting</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We provide reliable, high-performance virtual private servers with expert management and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-white hover:border-cyan-500 transition-all">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

