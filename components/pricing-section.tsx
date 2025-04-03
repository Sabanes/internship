import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$3",
      description: "Perfect for small projects and websites",
      features: ["1 vCPU Core", "1GB RAM", "20GB SSD Storage", "1TB Bandwidth", "24/7 Support", "99.9% Uptime"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$9",
      description: "Ideal for growing businesses and applications",
      features: [
        "2 vCPU Cores",
        "4GB RAM",
        "80GB SSD Storage",
        "3TB Bandwidth",
        "24/7 Priority Support",
        "99.9% Uptime",
        "Free Domain",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$25",
      description: "For high-traffic websites and applications",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "160GB SSD Storage",
        "5TB Bandwidth",
        "24/7 Priority Support",
        "99.99% Uptime",
        "Free Domain",
        "DDoS Protection",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Affordable VPS Plans</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Choose the perfect VPS plan for your needs with flexible resources and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-slate-800 border-slate-700 text-white ${
                plan.popular ? "border-cyan-500 shadow-lg shadow-cyan-500/20" : "hover:border-slate-600"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-black font-medium py-1 px-3 text-sm rounded-bl-lg rounded-tr-md">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <CardDescription className="text-slate-300 mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-cyan-500 hover:bg-cyan-600 text-black" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection

