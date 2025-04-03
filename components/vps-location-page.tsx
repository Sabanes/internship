"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Check, Server, Cpu, HardDrive, Wifi } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface VpsLocationPageProps {
  country: string
}

// Currency mapping for each country
const countryCurrency: Record<string, { symbol: string; code: string; rate: number }> = {
  UK: { symbol: "£", code: "GBP", rate: 0.78 },
  USA: { symbol: "$", code: "USD", rate: 1 },
  CANADA: { symbol: "C$", code: "CAD", rate: 1.35 },
  GERMANY: { symbol: "€", code: "EUR", rate: 0.91 },
  FRANCE: { symbol: "€", code: "EUR", rate: 0.91 },
  NETHERLANDS: { symbol: "€", code: "EUR", rate: 0.91 },
  SINGAPORE: { symbol: "S$", code: "SGD", rate: 1.33 },
  JAPAN: { symbol: "¥", code: "JPY", rate: 150.27 },
  AUSTRALIA: { symbol: "A$", code: "AUD", rate: 1.48 },
  BRAZIL: { symbol: "R$", code: "BRL", rate: 5.05 },
  UAE: { symbol: "د.إ", code: "AED", rate: 3.67 },
  INDIA: { symbol: "₹", code: "INR", rate: 83.12 },
}

const VpsLocationPage = ({ country }: VpsLocationPageProps) => {
  // Get currency info for the selected country, default to USD if not found
  const currencyInfo = countryCurrency[country] || { symbol: "$", code: "USD", rate: 1 }

  // Filter states
  const [priceRange, setPriceRange] = useState([3, 50])
  const [cpuCores, setCpuCores] = useState<string>("any")
  const [ram, setRam] = useState<string>("any")
  const [storage, setStorage] = useState<string>("any")
  const [os, setOs] = useState<string>("any")
  const [showLocalCurrency, setShowLocalCurrency] = useState(true)

  // Sample VPS plans data (base prices in USD)
  const vpsPlans = [
    {
      name: "Starter",
      price: 3,
      cpu: 1,
      ram: 1,
      storage: 20,
      bandwidth: 1,
      os: ["Ubuntu", "CentOS", "Debian"],
      popular: false,
    },
    {
      name: "Basic",
      price: 6,
      cpu: 1,
      ram: 2,
      storage: 40,
      bandwidth: 2,
      os: ["Ubuntu", "CentOS", "Debian", "Windows"],
      popular: false,
    },
    {
      name: "Professional",
      price: 12,
      cpu: 2,
      ram: 4,
      storage: 80,
      bandwidth: 3,
      os: ["Ubuntu", "CentOS", "Debian", "Windows"],
      popular: true,
    },
    {
      name: "Business",
      price: 24,
      cpu: 4,
      ram: 8,
      storage: 160,
      bandwidth: 5,
      os: ["Ubuntu", "CentOS", "Debian", "Windows"],
      popular: false,
    },
    {
      name: "Enterprise",
      price: 48,
      cpu: 8,
      ram: 16,
      storage: 320,
      bandwidth: 10,
      os: ["Ubuntu", "CentOS", "Debian", "Windows"],
      popular: false,
    },
  ]

  // Convert price to local currency
  const convertPrice = (priceUSD: number) => {
    if (showLocalCurrency) {
      return (priceUSD * currencyInfo.rate).toFixed(2)
    }
    return priceUSD.toFixed(2)
  }

  // Get currency symbol
  const getCurrencySymbol = () => {
    return showLocalCurrency ? currencyInfo.symbol : "$"
  }

  // Filter plans based on selected criteria
  const filteredPlans = vpsPlans.filter((plan) => {
    const matchesPrice = plan.price >= priceRange[0] && plan.price <= priceRange[1]
    const matchesCpu = cpuCores === "any" || plan.cpu === Number.parseInt(cpuCores)
    const matchesRam = ram === "any" || plan.ram === Number.parseInt(ram)
    const matchesStorage = storage === "any" || plan.storage === Number.parseInt(storage)
    const matchesOs = os === "any" || plan.os.includes(os)

    return matchesPrice && matchesCpu && matchesRam && matchesStorage && matchesOs
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{country} VPS Hosting</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          High-performance Virtual Private Servers located in {country}. Choose the perfect plan for your needs and get
          started in minutes.
        </p>
        <div className="mt-4 flex justify-center items-center space-x-2">
          <span className="text-slate-300">Prices shown in:</span>
          <Button
            variant="outline"
            size="sm"
            className={`${showLocalCurrency ? "bg-cyan-500 text-white" : "bg-transparent text-slate-300"}`}
            onClick={() => setShowLocalCurrency(true)}
          >
            {currencyInfo.code}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`${!showLocalCurrency ? "bg-cyan-500 text-white" : "bg-transparent text-slate-300"}`}
            onClick={() => setShowLocalCurrency(false)}
          >
            USD
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Filter sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-800 border-slate-700 text-white sticky top-24">
            <CardHeader>
              <CardTitle className="text-xl">Filter Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range ({getCurrencySymbol()}/mo)</h3>
                <div className="mb-2">
                  <Slider
                    defaultValue={[3, 50]}
                    min={3}
                    max={50}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>
                      {getCurrencySymbol()}
                      {convertPrice(priceRange[0])}
                    </span>
                    <span>
                      {getCurrencySymbol()}
                      {convertPrice(priceRange[1])}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">CPU Cores</h3>
                <Select value={cpuCores} onValueChange={setCpuCores}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1 Core</SelectItem>
                    <SelectItem value="2">2 Cores</SelectItem>
                    <SelectItem value="4">4 Cores</SelectItem>
                    <SelectItem value="8">8 Cores</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">RAM</h3>
                <Select value={ram} onValueChange={setRam}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1 GB</SelectItem>
                    <SelectItem value="2">2 GB</SelectItem>
                    <SelectItem value="4">4 GB</SelectItem>
                    <SelectItem value="8">8 GB</SelectItem>
                    <SelectItem value="16">16 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Storage</h3>
                <Select value={storage} onValueChange={setStorage}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="20">20 GB</SelectItem>
                    <SelectItem value="40">40 GB</SelectItem>
                    <SelectItem value="80">80 GB</SelectItem>
                    <SelectItem value="160">160 GB</SelectItem>
                    <SelectItem value="320">320 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Operating System</h3>
                <Select value={os} onValueChange={setOs}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="Ubuntu">Ubuntu</SelectItem>
                    <SelectItem value="CentOS">CentOS</SelectItem>
                    <SelectItem value="Debian">Debian</SelectItem>
                    <SelectItem value="Windows">Windows</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium"
                onClick={() => {
                  setPriceRange([3, 50])
                  setCpuCores("any")
                  setRam("any")
                  setStorage("any")
                  setOs("any")
                }}
              >
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* VPS plans */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan, index) => (
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
                      <span className="text-3xl font-bold">
                        {getCurrencySymbol()}
                        {convertPrice(plan.price)}
                      </span>
                      <span className="text-slate-400">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Cpu className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>
                          {plan.cpu} vCPU Core{plan.cpu > 1 ? "s" : ""}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Server className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{plan.ram} GB RAM</span>
                      </li>
                      <li className="flex items-center">
                        <HardDrive className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{plan.storage} GB SSD Storage</span>
                      </li>
                      <li className="flex items-center">
                        <Wifi className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{plan.bandwidth} TB Bandwidth</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>24/7 Support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>99.9% Uptime</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-cyan-500 hover:bg-cyan-600 text-black" : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    >
                      Order Now
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-bold text-white mb-2">No matching plans found</h3>
                <p className="text-slate-300">Try adjusting your filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-slate-800 rounded-lg border border-slate-700 px-6">
            <AccordionItem value="item-1" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                What is a VPS and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                A Virtual Private Server (VPS) is a virtualized server that simulates a dedicated server within a shared
                hosting environment. It uses virtualization technology to partition a physical server into multiple
                virtual servers, each with dedicated resources and operating system. This gives you the privacy, control
                and flexibility of a dedicated server at a fraction of the cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                Why choose {country} VPS hosting?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                {country} VPS hosting offers excellent connectivity, low latency, and high reliability for users
                targeting audiences in and around {country}. Our data centers in {country} are equipped with
                state-of-the-art infrastructure, redundant power supplies, and multiple network connections to ensure
                maximum uptime and performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                How quickly can I get my VPS set up?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Our VPS provisioning is automated and typically takes just 5-10 minutes after payment confirmation.
                You'll receive login details via email as soon as your server is ready, allowing you to start using your
                VPS right away.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                Can I upgrade my VPS plan later?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Yes, you can easily upgrade your VPS plan as your needs grow. Our scalable infrastructure allows for
                seamless upgrades with minimal downtime. You can increase CPU, RAM, storage, and bandwidth through your
                client dashboard at any time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-slate-700">
              <AccordionTrigger className="text-white hover:text-cyan-400">
                What control panel options are available?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                We offer several control panel options including cPanel/WHM, Plesk, DirectAdmin, and Webmin/Virtualmin.
                You can select your preferred control panel during checkout. We also provide a free custom control panel
                for basic server management if you don't need a commercial control panel.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default VpsLocationPage

