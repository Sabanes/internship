import { CheckCircle, Clock, CreditCard, HeartPulse, Shield, Zap } from "lucide-react"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "High Performance",
      description:
        "Our VPS servers are powered by the latest Intel Xeon processors and NVMe SSD storage for lightning-fast performance.",
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-400" />,
      title: "Enhanced Security",
      description:
        "Enterprise-grade security with DDoS protection, firewall, and regular security updates to keep your data safe.",
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-yellow-400" />,
      title: "99.9% Uptime",
      description: "We guarantee 99.9% uptime with our redundant infrastructure and proactive monitoring systems.",
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "24/7 Support",
      description: "Our expert support team is available 24/7 to help you with any issues or questions you may have.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-yellow-400" />,
      title: "Affordable Pricing",
      description: "Competitive pricing with flexible plans to fit your budget and resource requirements.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-yellow-400" />,
      title: "Easy Management",
      description: "User-friendly control panel with one-click installations and easy server management tools.",
    },
  ]

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Should You Use Unique VPS?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We provide enterprise-grade VPS solutions with unmatched performance, security, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-slate-300">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

