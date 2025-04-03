import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Cloud, Server, Shield, Zap, Database, BarChart } from "lucide-react"

const CloudSolutionsPage = () => {
  const cloudPlans = [
    {
      name: "Cloud Starter",
      price: 29,
      cpu: 2,
      ram: 4,
      storage: 100,
      bandwidth: 5,
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "100 GB SSD Storage",
        "5 TB Bandwidth",
        "1 Dedicated IP",
        "24/7 Support",
        "99.9% Uptime",
      ],
      popular: false,
    },
    {
      name: "Cloud Business",
      price: 59,
      cpu: 4,
      ram: 8,
      storage: 200,
      bandwidth: 10,
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "200 GB SSD Storage",
        "10 TB Bandwidth",
        "2 Dedicated IPs",
        "24/7 Priority Support",
        "99.99% Uptime",
        "Load Balancer",
        "Auto Scaling",
      ],
      popular: true,
    },
    {
      name: "Cloud Enterprise",
      price: 119,
      cpu: 8,
      ram: 16,
      storage: 400,
      bandwidth: 20,
      features: [
        "8 vCPU Cores",
        "16 GB RAM",
        "400 GB SSD Storage",
        "20 TB Bandwidth",
        "4 Dedicated IPs",
        "24/7 Priority Support",
        "99.99% Uptime",
        "Load Balancer",
        "Auto Scaling",
        "Dedicated Firewall",
        "Private Network",
      ],
      popular: false,
    },
    {
      name: "Cloud Ultimate",
      price: 229,
      cpu: 16,
      ram: 32,
      storage: 800,
      bandwidth: 30,
      features: [
        "16 vCPU Cores",
        "32 GB RAM",
        "800 GB SSD Storage",
        "30 TB Bandwidth",
        "8 Dedicated IPs",
        "24/7 Priority Support",
        "99.99% Uptime",
        "Load Balancer",
        "Auto Scaling",
        "Dedicated Firewall",
        "Private Network",
        "Dedicated Database",
      ],
      popular: false,
    },
  ]

  const cloudFeatures = [
    {
      icon: <Cloud className="h-10 w-10 text-cyan-400" />,
      title: "Scalable Resources",
      description: "Instantly scale your resources up or down based on demand. Only pay for what you use.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-400" />,
      title: "High Performance",
      description: "Powered by the latest Intel Xeon processors and NVMe SSD storage for lightning-fast performance.",
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      title: "Enterprise Security",
      description: "Advanced security features including DDoS protection, firewall, and regular security updates.",
    },
    {
      icon: <Server className="h-10 w-10 text-cyan-400" />,
      title: "Load Balancing",
      description: "Distribute traffic across multiple servers to ensure optimal performance and reliability.",
    },
    {
      icon: <Database className="h-10 w-10 text-cyan-400" />,
      title: "Managed Databases",
      description: "Fully managed database solutions with automatic backups, scaling, and high availability.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-cyan-400" />,
      title: "Advanced Monitoring",
      description: "Real-time monitoring and analytics to track performance, usage, and detect issues early.",
    },
  ]

  const useCases = [
    {
      title: "Web Applications",
      description: "Host high-traffic websites and web applications with auto-scaling to handle traffic spikes.",
      image: "/web-apps.svg",
    },
    {
      title: "E-commerce",
      description:
        "Reliable and secure hosting for online stores with the ability to scale during peak shopping seasons.",
      image: "/ecommerce.svg",
    },
    {
      title: "SaaS Applications",
      description: "Deploy and scale your SaaS applications with ease, ensuring high availability and performance.",
      image: "/saas.svg",
    },
    {
      title: "Big Data & Analytics",
      description: "Process and analyze large datasets with powerful computing resources and storage options.",
      image: "/big-data.svg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Enterprise Cloud Solutions</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Scalable, reliable, and secure cloud infrastructure for businesses of all sizes. Deploy and manage your
          applications with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-white mb-6">Powerful Cloud Infrastructure</h2>
          <p className="text-slate-300 mb-6">
            Our cloud platform is built on enterprise-grade hardware with redundant systems for maximum reliability.
            With data centers strategically located around the world, we provide low-latency access to your applications
            from anywhere.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-300">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Instant provisioning and deployment</span>
            </li>
            <li className="flex items-center text-slate-300">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Auto-scaling to handle traffic spikes</span>
            </li>
            <li className="flex items-center text-slate-300">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Load balancing for optimal performance</span>
            </li>
            <li className="flex items-center text-slate-300">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Dedicated resources with no oversubscription</span>
            </li>
            <li className="flex items-center text-slate-300">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span>99.99% uptime guarantee with SLA</span>
            </li>
          </ul>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full h-[400px]">
            <Image src="/cloud-infrastructure.svg" alt="Cloud Infrastructure" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Cloud Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudFeatures.map((feature, index) => (
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

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Cloud Hosting Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cloudPlans.map((plan, index) => (
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
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
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
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-slate-300 mb-4">Need a custom solution? Contact our sales team for a tailored quote.</p>
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950">
            Contact Sales
          </Button>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
        <Tabs defaultValue="web-applications" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-slate-800 p-0 mb-8">
            {useCases.map((useCase, index) => (
              <TabsTrigger
                key={index}
                value={useCase.title.toLowerCase().replace(/\s+/g, "-")}
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black py-3"
              >
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase, index) => (
            <TabsContent key={index} value={useCase.title.toLowerCase().replace(/\s+/g, "-")} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>Optimized performance for {useCase.title.toLowerCase()}</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>Dedicated resources with no oversubscription</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>Auto-scaling to handle traffic spikes</span>
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>Advanced security features</span>
                    </li>
                  </ul>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">Learn More</Button>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-6">
              Deploy your cloud infrastructure in minutes with our easy-to-use platform. Choose from our range of plans
              or contact us for a custom solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium">View Plans</Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-[200px]">
              <Image src="/cloud-cta.svg" alt="Get Started with Cloud Hosting" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudSolutionsPage

